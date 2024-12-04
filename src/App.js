import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './equip/Home';
import EquipLogin from './equip/EquipLogin';
import SignUp from './equip/SignUp';
import FinishRegister from './equip/FinishRegiser';
import VerifyRegistration from './equip/VerifyRegistration';
import ConfirmRegistration from './equip/ConfirmRegistration';
import Dashboard from './equip/Dashboard';
import LmsHome from './lms/LmsHome';
import LmsDashboard from './lms/LmsDashboard';
import Courses from './lms/Courses';
import Assessment from './lms/Assessment';
import Cerificate from './lms/Certificate';
import Messaging from './lms/Messaging';
import Instructors from './lms/Instructors';
import Settings from './lms/Settings';
import CoursesForEducators from './lms/CoursesForEducators';
import AiTools from './lms/courses/AiTools';
import CanvaForEducators from './lms/courses/CanvaForEducators';
import GoogleSuite from './lms/courses/GoogleSuite';
import KahootForEducators from './lms/courses/KahootForEducators';
import MicosoftInnovators from './lms/courses/MicrosoftInnovator';
import SocialMediaForEducators from './lms/courses/SocialMediaForEducators';
import VirtualLearningPlatforms from './lms/courses/VirtualLearningPlatforms';
import MicrosoftOfficeSuite from './lms/courses/MicrosoftOfficeSuite';
import MicrosoftWord from './lms/courses/microsoftofficetools/MicrosoftWord';
import MicrosoftPowerPoint from './lms/courses/microsoftofficetools/MicrosoftPowerPoint';
import MicrosoftExcel from './lms/courses/microsoftofficetools/MicrosoftExcel';
import MicrosoftWordCourse from './lms/courses/MicrosoftWordCourse';
import MicrosoftExcelCourse from './lms/courses/microsoftofficetools/MicrosoftExcelCourse';
import MicrosoftPowerPointCourse from './lms/courses/microsoftofficetools/MicrosoftPowerPointCourse';
import AssessmentInstructions from './lms/assessment/AssessmentInstructions';
import PickAssessment from './lms/assessment/PickAssessment';
import Welcome from './equip/Welcome';
import ChooseLaptop from './equip/ChooseLaptop';
import ChooseMifi from './equip/ChooseMifi';
import LaptopConfirmation from './equip/LaptopConfirmation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equiplogin" element={<EquipLogin />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/finishregister' element={<FinishRegister />} />
        <Route path='/verifyregistration' element={<VerifyRegistration />} />
        <Route path='/confirmregistration' element={<ConfirmRegistration />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/lms/lmshome' element={<LmsHome />} />
        <Route path='/lms/lmsdashboard' element={<LmsDashboard />} />
        <Route path='/lms/courses' element={<Courses />} />
        <Route path='/lms/assessment' element={<Assessment />} />
        <Route path='/lms/certificate' element={<Cerificate />} />
        <Route path='/lms/messaging' element={<Messaging />} />
        <Route path='/lms/instructors' element={<Instructors />} />
        <Route path='/lms/settings' element={<Settings />} />
        <Route path='/lms/coursesforeducators' element={<CoursesForEducators />} />
        <Route path='/lms/courses/aitools' element={<AiTools />} />
        <Route path='/lms/courses/canvaforeducators' element={<CanvaForEducators />} />
        <Route path='/lms/courses/googlesuite' element={<GoogleSuite />} />
        <Route path='/lms/courses/kahootforeducators' element={<KahootForEducators />} />
        <Route path='/lms/courses/micosoftinnovators' element={<MicosoftInnovators />} />
        <Route path='/lms/courses/socialmediaforeducators' element={<SocialMediaForEducators />} />
        <Route path='/lms/virtuallearningplatforms' element={<VirtualLearningPlatforms />} />
        <Route path='/lms/microsoftofficesuite' element={<MicrosoftOfficeSuite />} />
        <Route path='/lms/courses/microsoftofficetools/microsoftword' element={<MicrosoftWord />} />
        <Route path='/lms/courses/microsoftofficetools/microsoftPowerPoint' element={<MicrosoftPowerPoint />} />
        <Route path='/lms/courses/microsoftofficetools/microsoftexcel' element={<MicrosoftExcel />} />
        <Route path='/lms/courses/microsoftofficetools/microsoftmordcourse' element={<MicrosoftWordCourse />} />
        <Route path='/lms/courses/microsoftofficetools/microsoftexcelcourse' element={<MicrosoftExcelCourse />} />
        <Route path='/lms/courses/microsoftofficetools/microsoftpowerpointcourse' element={<MicrosoftPowerPointCourse />} />
        <Route path='/lms/assessment/assessmentInstructions' element={<AssessmentInstructions />} />
        <Route path='/lms/assessment/pickAssessment' element={<PickAssessment />} />
        <Route path='/equip/welcome' element={<Welcome />} />
        <Route path='/equip/chooseLaptop' element={<ChooseLaptop />} />
        <Route path='/equip/choosemifi' element={<ChooseMifi />} />
        <Route path='/equip/laptopconfirmation' element={<LaptopConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
