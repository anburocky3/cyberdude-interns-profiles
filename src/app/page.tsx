import Link from "next/link";
import TheNavbar from "./components/TheNavbar";

export default function Home() {
  return (
    <div className="h-screen bg-gray-900">
      {/* header */}
      <TheNavbar />

      <main className="p-10">
        <div className="grid grid-cols-4 gap-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <Link
              href={"/profiles/employmentId"}
              className="bg-white p-5 rounded shadow-amber-50"
              key={i}
            >
              <h3>Profiles Name</h3>
              <p>Profiles Description</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
