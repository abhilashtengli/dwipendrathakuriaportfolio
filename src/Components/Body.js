import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Awards from "./Academics/Awards";
import Biodata from "./Academics/Biodata";
import Teaching from "./Academics/Teaching";
import Phd from "./Academics/Students/Phd";
import Masters from "./Academics/Students/Masters";
import LandingPage from "./LandingPgae/LandingPage";
import StudentResearch from "./Research/StudentResearch";
import ProjectDetails from "./Research/ProjectDetails";
import ExternalFundedResearch from "./Research/ExternalFundedResearch";
import AdoptedVillage from "./CommunityEngagement/AdoptedVillage";
import TechnologyDissemination from "./CommunityEngagement/TechnologyDissemination";
import CommunityDevelopment from "./CommunityEngagement/CommunityDevelopment";
import ReviewPaper from "./Publication/ReviewPaper";
import Researchpaper from "./Publication/Researchpaper";
import BookChapters from "./Publication/BookChapters";
import BookManual from "./Publication/BookManual";
import Handouts from "./Publication/Handouts";
import PopularArticle from "./Publication/PopularArticle";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/academics",
      children: [
        {
          path: "awards",
          element: <Awards />,
        },
        {
          path: "biodata",
          element: <Biodata />,
        },
        {
          path: "teaching",
          element: <Teaching />,
        },
        {
          path: "students",
          children: [
            {
              path: "phd",
              element: <Phd />,
            },
            {
              path: "masters",
              element: <Masters />,
            },
          ],
        },
      ],
    },
    {
      path: "/research",
      children: [
        { path: "studentresearch", element: <StudentResearch /> },
        { path: "projectdetails", element: <ProjectDetails /> },
        { path: "externalfundedresearch", element: <ExternalFundedResearch /> },
      ],
    },
    {
      path: "/communityengagement",
      children: [
        { path: "adoptedvillage", element: <AdoptedVillage /> },
        {
          path: "technologydissmination",
          element: <TechnologyDissemination />,
        },
        {
          path: "communitydevelopment",
          element: <CommunityDevelopment />,
        },
      ],
    },
    {
      path: "/publication",
      children: [
        { path: "reviewpaper", element: <ReviewPaper /> },
        { path: "researchpaper", element: <Researchpaper /> },
        { path: "bookchapters", element: <BookChapters /> },
        { path: "bookmanual", element: <BookManual /> },
        { path: "handouts", element: <Handouts /> },
        { path: "populararticles", element: <PopularArticle /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
