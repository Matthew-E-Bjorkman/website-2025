export interface Skill {
  name: string;
  icon: string;
  category: string;
}

export enum SkillCategoryOrder {
  Featured,
  Backend,
  Frontend,
  Cloud,
  Persistence,
  ORM,
  FrontendTools,
}
