import React from "react";
// import Preview from "../views/Preview";
// import HomeLightAnimation from "../views/all-home-version/HomeLightAnimation";
// import HomeTyperCreative from "../views/all-home-version/HomeTyperCreative";
// import HomeDarkAnimation from "../views/all-home-version/HomeDarkAnimation";
import MainPage from "../views/all-home-version/MainPage";
// import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        {/* <Route exact
                path={ `${ process.env.PUBLIC_URL + "/" }` }
                element={ Preview } /> */}
            <Route path="*" element={<MainPage />} />
        {/* <Route path="/" element={<Preview />} /> */}
        {/* <Route path="/home-light-animation" element={<HomeLightAnimation />} />
        <Route path="/home-dark-animation" element={<HomeDarkAnimation />} />
        <Route path="/home-typer-creative" element={<HomeTyperCreative />} />
        <Route path="/home-parallax-typer" element={<MainPage />} /> */}
        {/* <Route path="/Home" element={<MainPage />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};

export default AllRoutes;
