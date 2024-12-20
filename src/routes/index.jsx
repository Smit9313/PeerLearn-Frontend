import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import ProtectedRoute from "./ProtectedRoute";
import LoadingSpinner from '../components/common/LoadingSpinner';

// Lazy loaded pages
const Landing = lazy(() => import("../pages/Landing"));
const Login = lazy(() => import("../pages/auth/Login"));
const SignUp = lazy(() => import("../pages/auth/SignUp"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Profile = lazy(() => import("../pages/Profile"));
const SkillMatching = lazy(() => import("../pages/SkillMatching"));
const Messages = lazy(() => import("../pages/Messages"));
const SessionManagement = lazy(() => import("../pages/SessionManagement"));
const FavorBank = lazy(() => import("../pages/FavorBank"));
const Settings = lazy(() => import("../pages/Settings"));
// const Help = lazy(() => import("../pages/Help"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/help" element={<Help />} /> */}

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/skills" element={<SkillMatching />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/sessions/*" element={<SessionManagement />} />
          <Route path="/favor-bank" element={<FavorBank />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
