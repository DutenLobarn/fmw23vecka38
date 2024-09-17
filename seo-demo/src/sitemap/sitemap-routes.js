// import React from "react";
// import { createRoutesFromElements, Route } from "react-router-dom";

// const routes = createRoutesFromElements(
//   <div>
//     <Route path="/" />
//     <Route path="/about" />
//     <Route path="/contact" />
//   </div>
// );

const routes = [
  {
    path: "/",
    element: "HomePage",
  },
  {
    path: "/about",
    element: "AboutPage",
  },
  {
    path: "/contact",
    element: "ContactPage",
  },
];

export default routes;
