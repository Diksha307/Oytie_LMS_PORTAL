import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/homePage/NavBar";
import Home from './components/Home';
import ModulePage from './components/ModulePage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Page404 from './components/Page404';
import Admin from './components/signInPage/Admin';
import Student from './components/Student/LoginStudent';
import AboutUs from './components/AboutUs';
import JobPortal from './components/JobPortal';
import Services from './components/Services';
import LoginModal from './components/LoginModal';
import HomeStudent from './components/Student/HomeStudent';
import LoginStudent from './components/Student/LoginStudent';
import UserProfile from './components/Student/Userprofile';
import PortalHeader from './components/Student/PortalHeader';
import ChangePass from './components/Student/ChangePass';
import CoursesStd from './components/Student/CoursesStd';
import AddCoursesStd from './components/Student/AddCoursesStd';
import RegisterModal from './components/RegisterModal';
import "react-toastify/dist/ReactToastify.css"
import NewAdmissionForm from './components/admin/NewAdmissionForm';
import ViewCourses from './components/admin/ViewCourses';
import AddCourse from './components/admin/AddCourse';
import ViewStudents from './components/admin/ViewStudents';
import Cards from './components/admin/Cards';
import Search from './components/admin/Search';
import Search2 from './components/admin/Search2';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/lmsPortal" element={<ModulePage />} />
        <Route path="/logIn" element={<LoginModal />}/>
        <Route path="/jobportal" element={<JobPortal/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/student" element={<Student />} />

        <Route path="/register" element={<RegisterModal />} />
        <Route exact path="/HomeStudent" element={<HomeStudent/>}/>
        <Route exact path="/LoginStudent" element={<LoginStudent/>}/>
        <Route exact path="/UserProfile/:id" element={<UserProfile/>}/>
        <Route exact path="/PortalHeader" element={<PortalHeader/>}/>
        <Route exact path="/ChangePass/:id" element={<ChangePass/>}/>
        <Route exact path="/AddCoursesStd/:id" element={<AddCoursesStd/>}/>
        <Route exact path="/CoursesStd/:id" element={<CoursesStd/>}/>

        {/* <Route exact path="/" element={<Home/>}/> */}
      <Route exact path="/cards" element={<Cards/>}/>
      <Route exact path='/newAdmissionForm' element={<NewAdmissionForm/>}/>
      <Route exact path='/updateAd/:id' element={<NewAdmissionForm/>}/>
      <Route exact path="/viewStudents" element={<ViewStudents/>}/>
      <Route exact path="/addCourse" element={<AddCourse/>}/>
      <Route exact path="/viewCourses" element={<ViewCourses/>}/>
      <Route exact path='/update/:id' element={<AddCourse/>}/>
      <Route exact path="/search" element={<Search/>}/>
      <Route exact path="/search2" element={<Search2/>}/>
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
