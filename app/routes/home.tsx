import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Countries Explorer" },
    { name: "description", content: "Welcome to Countries Explorer!" },
  ];
}

export default function Home() {
  return (
    <div className="px-2 py-32 md:px-0">
      <div className="container items-center max-w-6xl mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="space-y-6 sm:max-w-md lg:max-w-lg">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                <span className="block xl:inline">Explore Countries with </span>
                <span className="block text-sky-500 xl:inline">
                  Real-Time Data
                </span>
              </h1>
              <p className="mx-auto text-base text-slate-300 sm:max-w-md lg:text-xl">
                Discover details about every country around the world - from
                capitals to regions!
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <Link
                  to="/countries"
                  className="flex items-center justify-center px-6 py-3 text-lg bg-sky-600 rounded-md hover:bg-sky-700"
                >
                  Explore Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                <Link
                  to="/about"
                  className="flex items-center px-6 py-3 border border-slate-100 rounded-md hover:border-slate-300 hover:text-slate-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-xl">
              <img
                src="https://www.fodors.com/wp-content/uploads/2021/06/13_UltimatePlayaDelCarmen__XplorAndXcaret_shutterstock_1384137761.jpg"
                alt="Explore countries"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
