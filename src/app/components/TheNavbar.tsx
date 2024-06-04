import Image from "next/image";

export default function TheNavbar() {
  return (
    <header className="flex bg-blue-500 p-10 text-center justify-center items-center space-x-4">
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
