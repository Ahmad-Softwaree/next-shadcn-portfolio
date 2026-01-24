import React, { useMemo } from "react";
import { StaggerContainer, StaggerItem } from "../shared/animate";
import { useSkillQueries } from "@/hooks/useSkillQueries";
import { Skill } from "@/lib/data/skills";
import SkillCard from "../cards/skill-card";

const SkillsGrid = ({ data }: { data: Skill[] }) => {
  const [{ skill_level, skill_type }] = useSkillQueries();

  return (
    <StaggerContainer
      key={`${skill_level}-${skill_type}`}
      className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {data.map((skill) => (
        <StaggerItem key={skill.id}>
          <SkillCard {...skill} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
};

export default SkillsGrid;
