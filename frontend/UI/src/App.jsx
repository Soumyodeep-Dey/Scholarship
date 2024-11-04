import './App.css'
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';
function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <LandingPage />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App;
