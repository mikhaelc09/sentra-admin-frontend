import logo from "assets/img/auth/logo.png";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "routes.js";

export default function Auth() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  document.documentElement.dir = "ltr";
  return (
    <div>
      <div className="relative float-right h-full min-h-screen w-full !bg-gray-200 dark:!bg-navy-900">
        <main className="mx-auto h-screen flex justify-center items-center">
          <div className="relative flex w-7/12 bg-white h-3/4 rounded-xl">
            <div className="h-full w-2/3 bg-blueSecondary rounded-l-xl flex flex-col justify-center items-center gap-y-10">
              <img src={logo} alt="logo" />
              <div className="w-full flex flex-col items-center">
                <span className="uppercase text-white text-xl font-semibold">Website Admin</span>
                <span className="uppercase text-white text-xl font-semibold">Absensi dan Penggajian</span>
                <span className="uppercase text-white text-xl font-semibold">PT Sentra Medika</span>
                <span className="uppercase text-white text-xl font-semibold">Surabaya</span>
              </div>
            </div>
            <Routes>
              {getRoutes(routes)}
              <Route
                path="/"
                element={<Navigate to="/auth/sign-in" replace />}
              />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}
