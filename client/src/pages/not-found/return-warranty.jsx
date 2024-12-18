import React from "react";

const StepCard = ({ step, title, content }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-600">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">
        <p className="text-xl font-semibold">{step}</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
      </div>
    </div>
    <p className="text-lg">{content}</p>
  </div>
);

const ReturnWarranty = () => {
  return (
    <div className="container mx-20 p-4">
      {/* <img
        src="https://via.placeholder.com/1500x400.png?text=Returns+and+Warranty+Banner"
        alt="Returns and Warranty Banner"
        className="w-full mb-8 rounded-lg shadow-lg"
      /> */}
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          Returns and Warranty
        </h1>
        <h2 className="text-2xl mt-4">How to make a return</h2>
        <p className="text-lg mt-4 text-gray-700">
          We offer Lifetime Warranty on all our iPhone/iPads/iPods parts,
          including screens and internals. Lifetime Warranty is also extended to
          internals, including batteries for all other brands.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <StepCard
          step="1"
          title="Send Your Product"
          content="Login to your account, navigate to My Returns, and follow the steps to create a return request."
        />
        <StepCard
          step="2"
          title="Click on Request New Return"
          content="Select an Existing Order or click Manual RMA to list products individually and submit the Return Request."
        />
        <StepCard
          step="3"
          title="Login"
          content="Ship the products for RMA using the return label provided and attach the RMA list generated through the Return Process."
        />
        <StepCard
          step="4"
          title="RMA Department"
          content="Allow 24-48 hours after the package is received by the RMA Department. An email notification will be sent with the resolution details (Exchange/Store Credit)."
        />
      </div>
      <div className="mt-16">
        <h3 className="text-3xl font-semibold mb-6 text-blue-600">
          RETURN & WARRANTY POLICY
        </h3>
        <div className="border-t-2 border-blue-600 w-20 mb-8"></div>
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-blue-600">
              Lifetime Warranty
            </h2>
            <p className="text-lg mt-4 text-gray-700">
              All products sold by Neocellular Parts, including Screens and
              Batteries, are covered under our Lifetime Warranty (excluding
              Accessories, Devices, and Tools). Warranty covers any or all
              manufacturing defects. Physical damage during installation is not
              covered.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-600">Exclusions</h2>
            <p className="text-lg mt-4 text-gray-700">
              Physical damaged parts are not eligible for Return/Exchange. Parts
              deemed physically damaged can be returned at the customer's
              expense. Testing screens prior to installation is recommended to
              avoid voiding the warranty.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-600">
              Exchange and Credit
            </h2>
            <p className="text-lg mt-4 text-gray-700">
              All RMAs are processed within 24-48 hours of receipt. All
              Exchanges/Replacements are shipped the same day of the RMA
              processing. Customers can place a new order for urgent
              replacement, and the RMA credit will be applied for future orders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnWarranty;
