import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext'; 
import ProtectedRoute from './contexts/ProtectedRoute';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Students from './components/Students'; 
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Timetable from './components/Timetable';
function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={
            <ProtectedRoute>
            </ProtectedRoute>
          } />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/students' element={<Students />} /> 
          <Route path='/courses' element={<Courses />} />
          <Route path='/faculty' element={<Faculty/>} />
          <Route path='/Timetable' element={<Timetable />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
