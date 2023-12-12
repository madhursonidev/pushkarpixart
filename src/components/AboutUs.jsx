import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <div className="flex items-center mb-8">
          <div className="w-1/2">
            <img
              src="https://images.unsplash.com/photo-1699503198602-dc35e9a73789?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Owner"
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-1/2 pl-8">
            <h3 className="text-xl font-semibold mb-2">Meet the Owner</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              erat vitae sem convallis eleifend. Sed eu leo eu risus ultrices
              tempor vel non justo.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              erat vitae sem convallis eleifend. Sed eu leo eu risus ultrices
              tempor vel non justo.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Career Details</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            erat vitae sem convallis eleifend. Sed eu leo eu risus ultrices
            tempor vel non justo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            erat vitae sem convallis eleifend. Sed eu leo eu risus ultrices
            tempor vel non justo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
