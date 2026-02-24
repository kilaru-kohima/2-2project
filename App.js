import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import Jobs from "./pages/Jobs";
import WorkHours from "./pages/WorkHours";
import Feedback from "./pages/Feedback";
import ApplyJob from "./pages/ApplyJob";
import AdminDashboard from "./pages/AdminDashboard";
import ManageJobs from "./pages/ManageJobs";
import Applications from "./pages/Applications";
import AdminHours from "./pages/AdminHours";
import GiveFeedback from "./pages/GiveFeedback";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/hours" element={<WorkHours />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/apply" element={<ApplyJob />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/manage-jobs" element={<ManageJobs />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/admin-hours" element={<AdminHours />} />
        <Route path="/give-feedback" element={<GiveFeedback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;