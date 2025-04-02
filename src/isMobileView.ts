const isMobileView = (): boolean => {
  const mobileBreakpoint = 768;
  return window.innerWidth <= mobileBreakpoint;
};

export default isMobileView;
