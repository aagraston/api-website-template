import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './App.scss';

function App() {
  const currentYear = new Date().getFullYear();


  return (
    <Router>
      <div className="app">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes here as needed */}
          </Routes>
        </main>
        <footer className="app-footer">
          <p>© {currentYear} Closing Tag. All rights reserved.</p>
          <div className="social-icons">
            <a href="https://x.com/closingtagdev" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://www.youtube.com/@ClosingTagDev" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://github.com/aagraston" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;