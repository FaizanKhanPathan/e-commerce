import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="py-6 px-24 bg-blue-50 rounded-lg border border-blue-200">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-blue-900 mb-2">
          <span className="text-blue-400 uppercase tracking-wide">Privacy Policy</span>
        </h1>
        <div className="text-sm text-gray-800">
          This policy states how we at Global Mobi Tech use and protect any information received from you through our website or sales channels. All the data collected is to improve our users' experience and to help our customers serve in the best manner possible. All the information collected will be used only in accordance with our privacy policy.
          <br /> <br />
          We may collect the following information:
          <ul className="list-disc pl-5">
            <li>Names of the person in contact and business information</li>
            <li>Contact information including email address, business phone number, website</li>
            <li>Demographic details including postal code, preferences, and interests</li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-blue-900 mb-2">
          <span className="text-blue-400 uppercase tracking-wide">WHAT WE DO WITH THE INFORMATION WE GATHER?</span>
        </h1>
        <div className="text-sm text-gray-800">
          Information collected helps us understand our customers better and ensures order accuracy and prevents any order discrepancies. The information collected from users will also be used for the following purposes:
          <br />
          <ul className="list-disc pl-5">
            <li>Internal data management</li>
            <li>Improving products and services</li>
            <li>Using the email addresses provided, we may send promotional emails to benefit the customers with special offers and exclusive products</li>
            <li>To enhance the website experience through customer feedback and contacting customers over the phone, email, and other means for marketing purposes.</li>
          </ul>
          We will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
        </div>
      </div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-blue-900 mb-2">
          <span className="text-blue-400 uppercase tracking-wide">SECURITY</span>
        </h1>
        <div className="text-sm text-gray-800">
          Your payment and personal information is always safe. All the payment information is encrypted and stored for ordering and payment purposes. Our encryption system encrypts all of your personal information, including credit card number, name, and address, so that it cannot be read over the internet.
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
