"use client"
import React from "react";

const AdmissionsForm: React.FC = () => {
    // Define a state for each input field
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      phoneNumber: '',
      childName: '',
      gradeInterestedIn: '',
    });
  
    // Handle form changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Implement your submission logic here, such as sending data to an API
    };
  
    return (
      <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Parent's Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
  
        <div>
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
  
        <div>
          <label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            required
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
  
        <div>
          <label htmlFor="childName" className="text-sm font-medium text-gray-700">
            Child's Name
          </label>
          <input
            type="text"
            name="childName"
            id="childName"
            required
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
  
        <div>
          <label htmlFor="gradeInterestedIn" className="text-sm font-medium text-gray-700">
            Grade Interested In
          </label>
          <select
            name="gradeInterestedIn"
            id="gradeInterestedIn"
            required
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Select a grade...</option>
            <option value="kindergarten">Creche</option>
            <option value="1">Primary</option>
            <option value="1">Secondary</option>
            {/* Add more grade options here */}
          </select>
        </div>
  
        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-90 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Submit Inquiry
        </button>
      </form>
    );
  };
  

  export default AdmissionsForm