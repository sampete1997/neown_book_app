import React from "react";
import { Link } from "react-router-dom";

function HomePage  (){
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      {/* Welcome Text */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-4">
          Welcome to Neown Books
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Your gateway to a world of imagination and learning.
        </p>
      </div>

      {/* Images Section */}
      <div className="flex flex-wrap items-center justify-center gap-6">
        <img
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJvb2tzfGVufDB8fHx8MTYzMzE0OTQ4NQ&ixlib=rb-1.2.1&q=80&w=400"
          alt="Books"
          className="rounded-lg shadow-lg w-72 h-48 object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIzfHxib29rc3xlbnwwfHx8fDE2MzMxNDk0ODU&ixlib=rb-1.2.1&q=80&w=400"
          alt="Books on a shelf"
          className="rounded-lg shadow-lg w-72 h-48 object-cover"
        />
      </div>

      {/* Call to Action */}
      <div className="mt-10 text-center">
        <button className="bg-blue-600 text-white py-3 px-6 rounded-md text-lg shadow-lg hover:bg-blue-700">
         <Link to={'/Books'}> Explore Our Collection </Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
