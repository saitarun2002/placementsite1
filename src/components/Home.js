import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-6">
            Welcome to The Placement Site
          </h1>
          <p className="text-lg text-gray-300 mb-12">
            Find your dream job and kickstart your career
          </p>
          <Link to="/job-apply">
            <button className="bg-white text-gray-800 font-bold py-2 px-6 rounded-full">
              Explore Job Openings
            </button>
          </Link>
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-200">
              At The Placement Site, we are committed to helping you find the perfect job that aligns with your skills and aspirations. Here's why you should choose us:
            </p>
            <ul className="mt-6 text-lg text-gray-200 list-disc list-inside">
              <li>Access to a vast network of top companies and employers</li>
              <li>High-quality job listings with detailed descriptions</li>
              <li>Easy application process and personalized job recommendations</li>
              <li>Professional resume and career resources to enhance your job search</li>
              <li>Responsive support team available to assist you along the way</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
