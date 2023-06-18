import React from "react";
import { Navigate } from "react-router-dom";

import Home from "../pages/Home";
import TermsAndConditions from "../pages/TermsAndConditions";

const publicRoutes = [
  { path: "/", component: <Home /> },
  { path: "/terms-and-conditions", component: <TermsAndConditions /> },
];

export { publicRoutes };