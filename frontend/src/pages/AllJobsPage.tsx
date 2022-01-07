import React, { useEffect } from "react";
import {
  useFetchAllJobsLazyQuery,
  useGetDetailJobsLazyQuery,
} from "../graphql";
import { Spinner } from "react-bootstrap";
import { JobsList } from "../components/JobsList";
import { JobsDetail } from "../components/JobsDetail";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useLocation,
} from "react-router-dom";

export const AllJobsPage = () => {
  return (
    <Routes>
      <Route path="/" element={<JobsList  />} />
      <Route path="/:id" element={<JobsDetail  />} />
    </Routes>
  );
};
