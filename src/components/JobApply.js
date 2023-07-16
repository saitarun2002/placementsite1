import React from 'react';

const JobApply = () => {
  const jobListings = [
    {
      id: 1,
      title: "Software Engineer",
      description: "We are seeking a skilled Software Engineer to join our team...",
    },
    {
      id: 2,
      title: "Marketing Specialist",
      description: "Join our marketing team as a Marketing Specialist and...",
    },
    {
      id: 3,
      title: "Graphic Designer",
      description: "We are looking for a talented Graphic Designer to create...",
    },
    {
      id: 4,
      title: "Data Analyst",
      description: "Join our data analytics team and analyze large datasets...",
    },
    {
      id: 5,
      title: "UX/UI Designer",
      description: "We are hiring a UX/UI Designer to create intuitive and...",
    },
    {
      id: 6,
      title: "Business Development Manager",
      description: "Join our team as a Business Development Manager and...",
    },
    // Add more job listings here
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mt-8 mb-4">Job Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobListings.map((job) => (
          <div key={job.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">{job.title}</h2>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default JobApply;