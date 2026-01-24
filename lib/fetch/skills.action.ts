import skills, { levelOrder, SkillLevel, SkillType } from "../data/skills";
const SKILLS_DISPLAY_LIMIT = 15;

export const getHomeSkills = (level: SkillLevel | null) => {
  const data = skills
    .sort((a, b) => (levelOrder[b.level] || 0) - (levelOrder[a.level] || 0))
    .slice(0, SKILLS_DISPLAY_LIMIT)
    .filter((skill) => (level ? skill.level === level : true));
  return data;
};
export const getSkillsPage = (
  level: SkillLevel | null,
  type: SkillType | null
) => {
  const data = skills
    .sort((a, b) => (levelOrder[b.level] || 0) - (levelOrder[a.level] || 0))
    .filter((skill) => (level ? skill.level === level : true))
    .filter((skill) => (type ? skill.type === type : true));
  return data;
};
