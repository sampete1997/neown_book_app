import React from "react";

function ContactUs ()  {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600">
          We’d love to hear from you! Reach out via email, phone, or visit us.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-around gap-10">
        {/* Contact Details */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-2">
            📧 Email: <span className="font-medium">contact@neownbooks.com</span>
          </p>
          <p className="text-gray-600 mb-2">
            📱 Instagram:{" "}
            <a
              href="https://www.instagram.com/neownbooks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              @neownbooks
            </a>
          </p>
          <p className="text-gray-600 mb-2">
            ☎️ Phone: <span className="font-medium">+1 555-123-4567</span>
          </p>
          <p className="text-gray-600 mb-2">
            📍 Address: <span className="font-medium">123 Book Street, Fiction City, Imaginary Country</span>
          </p>
        </div>

        {/* Business Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGJ1c2luZXNzfGVufDB8fHx8MTYzMzE1MjY1OQ&ixlib=rb-1.2.1&q=80&w=600"
            alt="Business team working"
            className="rounded-lg shadow-lg object-cover w-full h-72"
          />
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Thank you for visiting Neown Books. We’re here to help you 24/7!
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
