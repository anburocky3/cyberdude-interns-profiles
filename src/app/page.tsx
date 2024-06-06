import TheNavbar from "./components/TheNavbar";
import memberData from "@/app/data/index.json";
import ProfileCard from "./components/ui/ProfileCard";

export default function Home() {
  return (
    <div>
      {/* header */}
      <TheNavbar />

      <main className="p-8">
        <p className="bg-indigo-200 text-center md:text-xl px-2 py-2 font-semibold mb-10 rounded">
          Hello viewers, we are excited to share that #{memberData.length}
          individuals have completed the CyberDude Internships{" "}
          {memberData.filter((member) => member.gender === "M").length} males
          and {memberData.filter((member) => member.gender === "F").length}{" "}
          females. If you missed these opportunities,
          <a
            href="https://www.youtube.com/playlist?list=PL73Obo20O_7grw9hv_lEO6iUPS6gc9ehh"
            target="_blank"
            className="text-orange-800 hover:text-orange-900 hover:underline"
          >
            you can watch the entire series on YouTube by clicking here.
          </a>
        </p>

        <div className=":space-x-1 sm:flex flex-wrap justify-between">
          {memberData.map((member, index) => (
            <ProfileCard
              id={member.id}
              name={member.name}
              github={member.github}
              linkedIn={member.linkedIn}
              projects={member.projects}
              tasks={member.tasks}
              key={index}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
