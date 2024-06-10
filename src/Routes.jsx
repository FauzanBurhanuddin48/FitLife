import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Video = React.lazy(() => import("pages/Video"));
const Artikel = React.lazy(() => import("pages/Artikel"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const Pembayaran = React.lazy(() => import("pages/Pembayaran"));
const Form = React.lazy(() => import("pages/Form"));
const Paketmember = React.lazy(() => import("pages/Paketmember"));
const Home1 = React.lazy(() => import("pages/Home1"));
const Daftar = React.lazy(() => import("pages/Daftar"));
const Login = React.lazy(() => import("pages/Login"));
const FrameOne = React.lazy(() => import("pages/FrameOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/frameone" element={<FrameOne />} />
          <Route path="/login" element={<Login />} />
          <Route path="/daftar" element={<Daftar />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/paketmember" element={<Paketmember />} />
          <Route path="/form" element={<Form />} />
          <Route path="/pembayaran" element={<Pembayaran />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
