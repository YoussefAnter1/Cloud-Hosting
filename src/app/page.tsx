// import Hero from "./Home/Hero";
import Hero from "@/components/Home/Hero";
// import WebHostingPlan from "@/components/Home/webHostingPlan";
import WebHostingPlan from "@/components/Home/WebHostingPlan";
export default function Home() {
  console.log("Home page called")
  return (
    <section className="fix-height">
      <Hero />
      <h2 className="text-center text-3xl mt-10 font-bold">
        Choose Your Web Hosting Plan
      </h2>
      <div className="container m-auto flex items-center justify-center my-7 flex-wrap md:gap-7">
        <WebHostingPlan />   
        <WebHostingPlan />
        <WebHostingPlan />
      </div>
    </section>
  );
}
