import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import Guidelines from './components/Usefull_Links/Guidelines';
import FAQ from './components/Usefull_Links/FAQ';
import EligibilityCriteria from './components/Usefull_Links/Eligibility';
import DocumentUpload from './components/Usefull_Links/Documents';
import HowToApply from './components/Usefull_Links/HowToApply';
import NotFound from './components/NotFound/NotFound';
import Dashboard from './components/Dashboard/Dashboard'; // Import Dashboard
import FormPreview from './components/Auth/Register/FormPreview';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            
            {/* Auth-related routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/form-preview" element={<FormPreview />} />
            
            {/* Useful links routes */}
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/eligibility" element={<EligibilityCriteria />} />
            <Route path="/document-upload" element={<DocumentUpload />} />
            <Route path="/how-to-apply" element={<HowToApply />} />
            
            {/* User Dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
