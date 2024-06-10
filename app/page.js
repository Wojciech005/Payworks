import { MdOutlineAddChart } from "react-icons/md";
import DashboardChart from "./components/UI/chart";
import DashboardCards from "./components/UI/dashbord-cards";
import Heading from "./components/UI/heading";
import SelectPage from "./components/UI/select";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col py-8 md:py-12 px-5 lg:px-12 ">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl flex items-center font-light">
          <MdOutlineAddChart className="text-emerald-800 text-3xl me-1" />
          Dashboard
        </h1>
        <SelectPage />
      </div>
      <DashboardCards />
      <section className="mt-6">
        <div className="bg-white p-3 rounded-lg shadow-lg">
          <DashboardChart />
        </div>
      </section>
    </main>
  );
}
