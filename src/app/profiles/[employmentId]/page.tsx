"use client";

import { useParams } from "next/navigation";
import memberData from "@/app/data/index.json";
import TheNavbar from "../../components/TheNavbar";
import Link from "next/link";
import { CiWarning } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";

import ProfileCard from "@/app/components/ui/ProfileCard";

interface Member {
  id: number;
  name: string;
  gender: string;
  github: string;
  tasks: string;
  projects: string;
  linkedIn: string;
  instagram: string;
}

export default function Page() {
  const { employmentId }: { employmentId: string } = useParams();

  const findInternById = (member: Member[], id: number): Member | undefined => {
    return member.find((intern) => intern.id === id);
  };

  const member = findInternById(memberData, parseInt(employmentId));
  const cyberdudeChallenges: string = member?.tasks || "/";

  return (
    <div className="h-screen">
      {/* header */}
      <TheNavbar />

      <main className="md:p-10 p-4 ">
        <p className="bg-orange-100 p-4 rounded ">
          <CiWarning className="inline" size={32} /> Soon we will upload{" "}
          <span className="text-xl font-semibold">{member?.name}</span> Tasks
          during Cyberdude Network&apos;s until then you can checkout{" "}
          {member?.gender == "M" ? "his" : "her"}{" "}
          <Link
            className="font-semibold hover:underline"
            target="_blank"
            href={cyberdudeChallenges}
          >
            Cyberdude Challenges Repo{" "}
          </Link>
          in Github
        </p>

        <div className="md:mx-auto md:w-fit md:my-10 my-3">
          <ProfileCard
            github={member?.github || ""}
            id={member?.id || 0}
            name={member?.name || ""}
            linkedIn={member?.linkedIn || ""}
            tasks={member?.tasks || ""}
            projects={member?.projects || ""}
          />

          <Link
            href={"/"}
            className="border-2 mb-4 rounded p-2 w-full inline-block border-black font-semibold text-lg text-center hover:bg-[#2B2A4C] hover:text-white delay-200 transition-all hover:shadow-md ease-in-out"
          >
            <IoIosArrowBack className="inline-block" size={32} /> Back to all
            profiles
          </Link>
        </div>
      </main>
    </div>
  );
}
