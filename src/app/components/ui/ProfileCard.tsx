import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaClipboardList } from "react-icons/fa6";

// Define the interface for props
interface ProfileCardProps {
  name: string;
  github: string;
  tasks: string;
  projects: string;
  linkedIn: string;
  id: number;
}

// Define the functional component with type annotations
const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  github,
  tasks,
  projects,
  id,
  linkedIn,
}) => {
  return (
    <div className="bg-[#2B2A4C] h-auto sm:w-[280px] md:w-[350px]  text-center px-5 py-8 shadow rounded-lg mb-10">
      {/* Profile Card */}
      <div>
        {/* Profile Image */}
        <Image
          src={`${github}.png`}
          alt={name}
          width={500}
          height={500}
          className=" w-48 shadow-lg rounded-full mx-auto mb-4"
        />

        {/* Intern Name & Position */}
        <div className=" space-y-1.5">
          <h4 className="font-semibold text-2xl text-white">{name}</h4>
          <p className="text-gray-400 text-[14px]">
            Intern Full-Stack Engineer
          </p>
        </div>

        {/* Buttons Division */}
        <div className="flex gap-4 mt-4">
          {/* View GitHub Button */}
          <Link
            href={github}
            target="_blank"
            className="flex gap-1 justify-center items-center bg-[#9594A5] hover:bg-[#6A6981]  px-2 text-white py-1.5 w-full rounded text-sm hover:transition"
          >
            <FaGithub className="mr-1" />
            GitHub
          </Link>
          {/* LinkedIn Button */}
          <Link
            href={linkedIn}
            target="_blank"
            className="flex gap-1 justify-center items-center bg-[#9594A5] hover:bg-[#6A6981] px-2 text-white py-1.5 w-full rounded text-sm hover:transition"
          >
            <FaLinkedin className="mr-1" />
            LinkedIn
          </Link>
        </div>
        {/* Task Button */}
        <div className="mt-4 py-1 bg-[#9594A5] hover:bg-[#6A6981] text-white rounded hover:transition">
          <Link
            href={`/profiles/${id}`}
            className="flex items-center justify-center "
          >
            <FaClipboardList className="mr-1.5" />
            Tasks
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
