import React, { lazy } from "react";
const Homepage = lazy(() => import("./homepage/index"));
const Generation = lazy(() => import("./generacion/index"));
const Request = lazy(() => import("./consultas/index"));
const Services = lazy(() => import("./services/index"));
const Downloads = lazy(() => import("./downloads/index"));
const Renovation = lazy(() => import("./renovation/index"));
const Revocation = lazy(() => import("./revocation/index"));
const Policy = lazy(() => import("./policy/index"));

export default [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/generacion",
    element: <Generation />,
  },
  {
    path: "/consultas",
    element: <Request />,
  },
  {
    path: "/servicios",
    element: <Services />,
  },
  {
    path: "/descargas",
    element: <Downloads />,
  },
  {
    path: "/renovacion",
    element: <Renovation />,
  },
  {
    path: "/revocacion",
    element: <Revocation />,
  },
  {
    path: "/terminos",
    element: <Policy />,
  },
];
