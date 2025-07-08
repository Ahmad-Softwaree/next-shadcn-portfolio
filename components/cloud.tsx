import { IconCloud } from "@/components/magicui/icon-cloud";
import { skills } from "@/lib/data/skills"; // Adjust path if needed

export function Cloud() {
  const images = skills.map((skill) => skill.image);

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
