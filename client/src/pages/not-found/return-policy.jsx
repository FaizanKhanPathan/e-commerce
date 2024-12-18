import React from 'react';

const ReturnPolicy = () => {
  return (
    <div className="px-24 py-6 bg-white text-gray-800">
      <div className="text-center mb-8">
        <h1 className="text-3xl text-blue-900 font-bold">Our Return Policy</h1>
      </div>

      {/* Warranty Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-blue-900 mb-2">Warranty</h3>
        <p className="mb-4">We offer Lifetime Warranty on all our iPhone/iPads/iPods parts including all Lines of Screens and Internals. Lifetime Warranty is also extended to the Internals including Batteries for all other brands as well.</p>
        <p className="mb-4">Samsung Screens come with Testing Warranty. If any issue is found while testing the screen before installation, the part can be returned for Return or Exchange. We recommend to test the Samsung Phone Screens before installation as once installed, it will be considered that the screen was in working condition before installation and will not be eligible for Return or Exchange.</p>
        <p className="mb-4">Lifetime Warranty covers all the manufacturing defects including freezing, glitching, etc. It does not include cracks or incidental damages.</p>
        <p className="mb-4">We do not accept returns for parts caused due to Technician damage or parts with Physical damage.</p>
      </div>

      <hr className="border-t border-gray-300 mb-6" />

      {/* Returns or Exchange Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-blue-900 mb-2">Returns or Exchange</h3>
        <p className="mb-4">In the event of a warranty claim, customers can fill out an RMA form which is available in the My Account page of Customer’s Dashboard.</p>
        <p className="mb-4">Alternatively, Customers can directly ship the parts back to us at our address clearly indicating their Company Name and Reason for Returns.</p>
        <p className="mb-4">We will process the RMA within 24-48 hours of receiving the Return Shipment and Exchange the parts out with new working parts. If we do not have the Part in stock, we will issue Store Credit or Refund to be used for future purchases to suit the customers’ needs based on the current day’s selling price.</p>
        <p className="mb-4">Whether the parts are months old or screens have scratches on them, we will accept the return as long as there is an issue/defect with the parts.</p>
        <p className="mb-4">Please be advised, we do not accept parts with Physical or Internal Damage. Therefore, screens with Internal LCD Damage or Ripped Cables will not be accepted.</p>
      </div>

      <hr className="border-t border-gray-300 mb-6" />

      {/* Policy Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-blue-900 mb-2">Policy</h3>
        <p className="mb-4">Unlike other vendors, we do not charge any restocking fees on Returns Shipment for Defective parts.</p>
        <p className="mb-4">Items that are deemed working and do not have the issues which are the reason for the return, can be returned to the customer at our cost.</p>
        <p className="mb-4">If however, the customer does not want to take the item, it will incur a 10% restocking fee in order to issue a refund or Store Credit to be used for future purchases.</p>
      </div>

      <hr className="border-t border-gray-300 mb-6" />

      {/* LCD/OLED Damage Warranty Section */}
      <div>
        <h3 className="text-2xl font-semibold text-blue-900 mb-2">LCD/OLED Damage Warranty</h3>
        <p className="mb-4">LCD/OLED Damage Warranty covers only if there is damage with the LCD/OLED/Display part while installation.</p>
        <p className="mb-4">Cracked OLED/LCD is not covered if there are used marks on the screen.</p>
        <p className="mb-4">This only exception after installation is if the screen has blacked out.</p>
        <p className="mb-4">This warranty does not cover if there is damage/crack to the Glass/digitizer.</p>
        <p className="mb-4">This warranty does not cover if there is damage to the flex cable.</p>
        <p className="mb-4">The warranty does not cover if the original packaging or inside plastic sheets that goes on the back of the screen is missing.</p>
      </div>
    </div>
  );
};

export default ReturnPolicy;
