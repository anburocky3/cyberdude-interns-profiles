import Image from "next/image";

export default function TheNavbar() {
  return (
    <header className="flex flex-col md:flex-row md:gap-4 bg-blue-500 p-5 text-center justify-center items-center space-y-4">
      <Image
        src="/cyberdude-logo.svg"
        alt="CyberDude Logo"
        width={100}
        height={100}
      />
      <h1 className="font-semibold  text-white text-xl">
        CyberDude Internship Profiles Batch: (2023)
      </h1>
    </header>
  );
}
