"use client";

import { useParams } from "next/navigation";
import TheNavbar from "../../components/TheNavbar";

export default function Page() {
  const { employmentId } = useParams();

  return (
    <div className="h-screen bg-gray-900">
      {/* header */}
      <TheNavbar />

      <main className="p-10 text-white">Detail page: {employmentId}</main>
    </div>
  );
}
