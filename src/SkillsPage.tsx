import { useState, useMemo } from "react";
import CenteredDiv from "./CenteredDiv";
import { Box, TextField, Typography, Paper, styled } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Skill, SkillCategoryOrder } from "./types/Skill";

import Skills from "./data/Skills.json";
import Stack from "@mui/material/Stack";

const ContainerStack = styled(Stack)({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  height: "100%",
  overflow: "auto", // Allow the entire content to scroll
});

const SkillIcon = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transition: "transform 0.2s",
  cursor: "default",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const IconStack = styled(Stack)({
  display: "flex",
  alignItems: "center",
});

const SearchBarBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: "var(--background2)",
  position: "sticky",
  top: 0,
  zIndex: 10,
  width: "100%",
  marginTop: "16px",
  borderBottom: "1px solid --var(--border)",
  marginBottom: "12px",
});

const SearchBar = styled(TextField)({
  width: "100%",
  maxWidth: "600px",
  backgroundColor: "var(--header-background)",
  color: "var(--text-primary)",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "var(--border)",
    },
    "&:hover fieldset": {
      borderColor: "var(--border-hover)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--primary)",
    },
  },
  "& .MuiInputLabel-root": {
    color: "var(--text-secondary)",
    "&.Mui-focused": {
      color: "var(--primary)",
    },
  },
  "& .MuiInputBase-input": {
    color: "var(--text-primary)",
  },
});

const IconContainer = styled(Paper)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 128,
  height: 128,
  borderRadius: "15%",
  border: "2px solid var(--border)",
  backgroundColor: "var(--header-background)",
  color: "var(--text-primary)",
});

const ColumnContainer = styled(Box)({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  padding: "0 16px",
});

const CategorySection = styled(Box)({
  marginBottom: "24px",
});

const MainContent = styled(Box)({
  display: "flex",
  width: "100%",
  flexGrow: 1,
});

const SearchWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "16px",
});

const SkillsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const allSkills: Skill[] = useMemo(() => Skills.skills, []);

  const filteredSkills = useMemo(() => {
    if (!searchQuery) return allSkills;

    const query = searchQuery.toLowerCase();
    return allSkills.filter(
      (skill) =>
        skill.name.toLowerCase().includes(query) ||
        skill.category.toLowerCase().includes(query),
    );
  }, [searchQuery, allSkills]);

  const skillsByCategory = useMemo(() => {
    const groups: Record<string, Skill[]> = {};

    filteredSkills.forEach((skill) => {
      if (!groups[skill.category]) {
        groups[skill.category] = [];
      }
      groups[skill.category].push(skill);
    });

    return groups;
  }, [filteredSkills]);

  const categoriesOrder = useMemo((): string[] => {
    const categoryOrderMap: Record<string, number> = {
      Featured: SkillCategoryOrder.Featured,
      "Front-end": SkillCategoryOrder.Frontend,
      "Front-end Tools": SkillCategoryOrder.FrontendTools,
      "Back-end": SkillCategoryOrder.Backend,
      "Object-Relational Mappers": SkillCategoryOrder.ORM,
      Cloud: SkillCategoryOrder.Cloud,
      Persistence: SkillCategoryOrder.Persistence,
    };

    const categories = Object.keys(skillsByCategory);
    return categories.sort((a: string, b: string) => {
      const aSortOrder = categoryOrderMap[a] ?? Number.MAX_SAFE_INTEGER;
      const bSortOrder = categoryOrderMap[b] ?? Number.MAX_SAFE_INTEGER;
      return aSortOrder - bSortOrder;
    });
  }, [skillsByCategory]);

  // Define which categories should appear in the left column
  const leftColumnCategories = useMemo(
    () => ["Featured", "Back-end", "Front-end", "Cloud"],
    [],
  );

  const { leftCategories, rightCategories } = useMemo(() => {
    const left: string[] = [];
    const right: string[] = [];

    categoriesOrder.forEach((category) => {
      if (leftColumnCategories.includes(category)) {
        left.push(category);
      } else {
        right.push(category);
      }
    });

    return { leftCategories: left, rightCategories: right };
  }, [categoriesOrder, leftColumnCategories]);

  const renderCategorySection = (category: string) => (
    <CategorySection key={category}>
      <Typography variant="h5" gutterBottom>
        {category}
      </Typography>
      <Grid container spacing={3}>
        {skillsByCategory[category]?.map((skill) => (
          <Grid columns={2} key={skill.name}>
            <SkillIcon>
              <IconContainer elevation={2}>
                <IconStack direction="column" spacing={1}>
                  <img
                    src={`/${skill.icon}`}
                    alt={skill.name}
                    width="64"
                    height="64"
                  />
                  <Typography variant="body2" align="center">
                    {skill.name}
                  </Typography>
                </IconStack>
              </IconContainer>
            </SkillIcon>
          </Grid>
        ))}
      </Grid>
    </CategorySection>
  );

  return (
    <CenteredDiv
      style={{ background: "var(--background2)", overflow: "hidden" }}
    >
      <ContainerStack direction="column" spacing={0}>
        <SearchBarBox>
          <SearchWrapper>
            <Typography variant="h4" gutterBottom>
              Skills
            </Typography>
            <SearchBar
              label="Search skills"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchWrapper>
        </SearchBarBox>

        <MainContent>
          <ColumnContainer>
            {leftCategories.map((category) => renderCategorySection(category))}
          </ColumnContainer>
          <ColumnContainer>
            {rightCategories.map((category) => renderCategorySection(category))}
          </ColumnContainer>
        </MainContent>
      </ContainerStack>
    </CenteredDiv>
  );
};

export default SkillsPage;
