
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import Appbar from './components/Appbar.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'

function App() {
  return (
    <Router>
      <Appbar></Appbar><Routes>
        
        <Route path='/' element={<Home />} />
        <Route path="Education" element={<Education />} />
         <Route path="Experience" element={<Experience />} />
        {/* <Route path="/Contact" element={<Contact />} />  should have the option to send maul 
        <Route path="/Projects" element={<Projects />} /> */}
      </Routes>
    </Router>

  );
}

export default App;
