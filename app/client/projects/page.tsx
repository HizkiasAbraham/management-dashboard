import { ProjectsTable } from "@/src/components/client/tables/projects-table";
import { projects } from "@/src/mockups/projects";

export default function Projets() {
  return (
    <div className="mt-3 w-full overflow-x-scroll md:overflow-x-hidden">
      <ProjectsTable data={[...projects, ...projects] as []} />
    </div>
  );
}
