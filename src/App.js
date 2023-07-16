import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import HomePage from './components/Home';
import ResumeTab from './components/Resume';
import JobApplyTab from './components/JobApply';
import About from './components/About';
import Footer from './components/Footer';
import ReviewPage from './components/ReviewPage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDoqRH6aYvSk-5lQ8wwhSTsdiBVIUvvWUs",
  authDomain: "placement-site-a5c90.firebaseapp.com",
  projectId: "placement-site-a5c90",
  storageBucket: "placement-site-a5c90.appspot.com",
  messagingSenderId: "808122184970",
  appId: "1:808122184970:web:63e12d573a7679f325b6f3",
  measurementId: "G-51WD7M6FJ2"
};
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user] = useAuthState(firebase.auth());

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  const handleSignOut = () => {
    firebase.auth().signOut();
  };

  return (
    <Router>
      <nav className="bg-black bg-gradient-to-r from-black via-black to-gray-700">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-white text-2xl font-bold">
              THE PLACEMENT SITE
            </Link>
            <div className="ml-10 space-x-4 hidden md:block">
              {user && (
                <>
                  <Link
                    to="/resume"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition duration-300"
                  >
                    Resume
                  </Link>
                  <Link
                    to="/job-apply"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition duration-300"
                  >
                    Apply Job
                  </Link>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition duration-300"
                  >
                    About
                  </Link>
                  <Link
                    to="/review"
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition duration-300"
                  >
                    Write a Review
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center">
            {user ? (
              <div>
                <span className="text-gray-300 mr-2">Welcome, {user.displayName}</span>
                <button
                  onClick={handleSignOut}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition duration-300"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={handleSignIn}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition duration-300"
              >
                Sign In
              </button>
            )}
            <div className="md:hidden">
              <button
                onClick={handleMenuToggle}
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {menuOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16ZM4 8H20V10H4V8Z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="mt-4 md:hidden">
            {user && (
              <>
                <Link
                  to="/resume"
                  className="block text-gray-300 hover:text-white py-2 px-4"
                >
                  Resume
                </Link>
                <Link
                  to="/job-apply"
                  className="block text-gray-300 hover:text-white py-2 px-4"
                >
                  Apply Job
                </Link>
                <Link
                  to="/about"
                  className="block text-gray-300 hover:text-white py-2 px-4"
                >
                  About
                </Link>
                <Link
                  to="/review"
                  className="block text-gray-300 hover:text-white py-2 px-4"
                >
                  Write a Review
                </Link>
              </>
            )}
          </div>
        )}
      </nav>

      <div className="container mx-auto mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumeTab />} />
          <Route path="/job-apply" element={<JobApplyTab />} />
          <Route path="/about" element={<About />} />
          <Route path="/review" element={<ReviewPage user={user} firestore={firestore} />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
