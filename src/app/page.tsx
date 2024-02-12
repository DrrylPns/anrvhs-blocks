import { GoalSection } from "@/components/GoalSection";
import { MottoSection } from "@/components/MottoSection";
import { SBF } from "@/components/SBF";
import { SchoolInfo } from "@/components/SchoolInfo";
import { Button } from "@/components/ui/button";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      {/* Jumbotron / Hero */}
      <div
        className="grid justify-center items-center h-[500px] bg-[url(https://littlevisuals.co/images/sunset.jpg)] bg-no-repeat w-full"
      >
        <div className="text-white items-center flex flex-col justify-center text-center">
          <h1 className="font-bold md:text-[79px] text-[60px] bg-gradient-to-r from-blue-600 via-green-200 to-blue-600 inline-block text-transparent bg-clip-text border-2 border-white p-7 mb-3">ANRVHS</h1>
          <p className="text-[#95969D]">Bank of Learner's Official Collection in Knowledge System</p>
          <Button className="rounded-full text-white mt-5">
            Get to know us!
          </Button>
        </div>
      </div>

      {/* SCHOOL BUILDINGS AND FACILITIES */}
      <SBF />

      {/* GOAL OF THE SCHOOL */}
      <GoalSection />

      {/* School's Motto */}
      <MottoSection />

      {/* Key Points */}
      <SchoolInfo />
    </main>
  );
}
