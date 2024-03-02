import React from "react";
import { Navigate } from "react-router-dom";

import Home from "../pages/Home";
import TermsAndConditions from "../pages/TermsAndConditions";
import Policy from "../pages/Policy";

const publicRoutes = [
  { path: "/", component: <Home /> },
  { path: "/terms-and-conditions", component: <TermsAndConditions /> },
  { path: "/policy", component: <Policy /> },
];

export { publicRoutes };
