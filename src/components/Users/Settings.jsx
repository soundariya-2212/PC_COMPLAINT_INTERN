// import React, { useState } from "react";
// import QRCode from "react-qr-code";

// const Settings = () => {
//   const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);
//   const [qrCodeVisible, setQrCodeVisible] = useState(false);
//   const [verificationCode, setVerificationCode] = useState("");
//   const secretKey = "JBSWY3DPEHPK3PXP"; // Example secret key for Google Authenticator (replace with server-generated key).

//   const handleEnable2FA = () => {
//     setQrCodeVisible(true);
//   };

//   const handleDisable2FA = () => {
//     setIsTwoFactorEnabled(false);
//     setQrCodeVisible(false);
//   };

//   const handleVerifyCode = () => {
//     // Simulate verification. In a real application, send the code to the backend for validation.
//     if (verificationCode === "123456") {
//       setIsTwoFactorEnabled(true);
//       setQrCodeVisible(false);
//       alert("Two-Factor Authentication Enabled!");
//     } else {
//       alert("Invalid Verification Code.");
//     }
//   };

//   return (
//     <div className="p-8 bg-white rounded-lg shadow-md">
//       <h2 className="text-3xl font-semibold mb-4">Account Security</h2>
//       {!isTwoFactorEnabled && (
//         <div>
//           <h3 className="text-xl font-semibold">Enable Two-Factor Authentication</h3>
//           <p className="text-gray-600 mb-4">
//             Enhance your account security by enabling 2FA. Use an authenticator app like Google Authenticator to set it up.
//           </p>
//           <button
//             onClick={handleEnable2FA}
//             className="px-6 py-2 bg-blue-500 text-white rounded-lg"
//           >
//             Enable 2FA
//           </button>
//         </div>
//       )}

//       {qrCodeVisible && (
//         <div className="mt-4">
//           <h3 className="text-xl font-semibold">Scan QR Code</h3>
//           <p className="text-gray-600">
//             Open your Google Authenticator app and scan the QR code below:
//           </p>
//           <div className="my-4">
//             <QRCode value={`otpauth://totp/PCComplaintPortal?secret=${secretKey}&issuer=PCComplaintPortal`} />
//           </div>
//           <p className="text-gray-600">Secret Key: <span className="font-mono">{secretKey}</span></p>
//           <div className="mt-4">
//             <h3 className="text-xl font-semibold">Verify Code</h3>
//             <p className="text-gray-600 mb-2">
//               Enter the 6-digit code generated by your authenticator app to complete the setup:
//             </p>
//             <input
//               type="text"
//               value={verificationCode}
//               onChange={(e) => setVerificationCode(e.target.value)}
//               className="p-2 border rounded-lg"
//               placeholder="Enter Verification Code"
//             />
//             <button
//               onClick={handleVerifyCode}
//               className="ml-4 px-6 py-2 bg-green-500 text-white rounded-lg"
//             >
//               Verify
//             </button>
//           </div>
//         </div>
//       )}

//       {isTwoFactorEnabled && (
//         <div className="mt-4">
//           <h3 className="text-xl font-semibold">Two-Factor Authentication Enabled</h3>
//           <p className="text-gray-600 mb-4">
//             2FA is currently enabled for your account. You can use your authenticator app to log in securely.
//           </p>
//           <button
//             onClick={handleDisable2FA}
//             className="px-6 py-2 bg-red-500 text-white rounded-lg"
//           >
//             Disable 2FA
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Settings;


// import React, { useState } from "react";
// import QRCode from "react-qr-code";

// const Settings = () => {
//   const [is2FAEnabled, setIs2FAEnabled] = useState(false);

//   // Example value for QR Code, typically provided by your backend
//   const qrCodeValue = "otpauth://totp/YourAppName:UserEmail?secret=JBSWY3DPEHPK3PXP&issuer=YourAppName";

//   const handleEnable2FA = () => {
//     setIs2FAEnabled(true);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
//         <h1 className="text-2xl font-bold text-gray-700 mb-4">Account Settings</h1>
        
//         {/* 2FA Section */}
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold text-gray-800">Enable Two-Factor Authentication</h2>
//           {!is2FAEnabled ? (
//             <button
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//               onClick={handleEnable2FA}
//             >
//               Enable 2FA
//             </button>
//           ) : (
//             <div className="mt-4">
//               <p className="text-gray-600 mb-2">Scan the QR code below using Google Authenticator or a similar app:</p>
//               <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
//                 <QRCode value={qrCodeValue} size={150} />
//               </div>
//               <p className="text-sm text-gray-500 mt-2">
//                 Once scanned, your app will generate a 6-digit verification code.
//               </p>
//             </div>
//           )}
//         </div>

//         {/* Support Section */}
//         <div className="mt-6">
//           <h2 className="text-lg font-semibold text-gray-800">Need Assistance?</h2>
//           <p className="text-gray-600">
//             If you face any issues, feel free to{" "}
//             <a href="/support" className="text-blue-500 underline hover:text-blue-700">
//               contact support
//             </a>.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Settings;

import React, { useState } from "react";
import QRCode from "react-qr-code";

const Settings = () => {
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [upiId, setUpiId] = useState("");

  // Example QR Code for UPI (can be dynamic based on actual UPI ID)
  const qrCodeValue = "upi://pay?pa=someone@upi&pn=Receiver&mc=1234&tid=1234567890&url=https://example.com";

  const handleEnable2FA = () => {
    setIs2FAEnabled(true);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    // Simulate payment processing logic
    if (paymentAmount && paymentMethod) {
      setPaymentStatus(`Payment of ₹${paymentAmount} via ${paymentMethod} is successful!`);
    } else {
      setPaymentStatus("Please fill in all payment details.");
    }

    // Reset fields after submission
    setPaymentAmount("");
    setPaymentMethod("");
    setCardNumber("");
    setUpiId("");
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    // Allow only numbers and formatting for thousands
    if (/^\d+$/.test(value) || value === "") {
      setPaymentAmount(value.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }
  };

  const renderPaymentMethodFields = () => {
    switch (paymentMethod) {
      case "Credit Card":
      case "Debit Card":
        return (
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              {paymentMethod} Account Number
            </label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Enter account number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        );
      case "UPI":
        return (
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Scan the QR Code for UPI Payment
            </label>
            <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
              <QRCode value={qrCodeValue} size={150} />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Scan the above QR code using any UPI app like Google Pay, PhonePe, etc.
            </p>
          </div>
        );
   
      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center mt[-20] ">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Account Settings</h1>

        {/* 2FA Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Enable Two-Factor Authentication</h2>
          {!is2FAEnabled ? (
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              onClick={handleEnable2FA}
            >
              Enable 2FA
            </button>
          ) : (
            <div className="mt-4">
              <p className="text-gray-600 mb-2">Scan the QR code below using Google Authenticator or a similar app:</p>
              <div className="flex items-center justify-center bg-gray-100 p-4 rounded-lg">
                <QRCode value={qrCodeValue} size={150} />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Once scanned, your app will generate a 6-digit verification code.
              </p>
            </div>
          )}
        </div>

        {/* Bill Payment Section */}
        {!is2FAEnabled && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Bill Payment</h2>
            <form onSubmit={handlePaymentSubmit} className="mt-4">
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Amount (in ₹)</label>
                <input
                  type="text"
                  value={paymentAmount}
                  onChange={handleAmountChange}
                  placeholder="Enter amount"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Payment Method</label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a payment method</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Debit Card">Debit Card</option>
                  <option value="UPI">UPI</option>
                  {/* <option value="Net Banking">Net Banking</option> */}
                </select>
              </div>

              {renderPaymentMethodFields()}

              <button
                type="submit"
                className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition mt-4 ml-32"
              >
                Pay Now
              </button>
            </form>
            {paymentStatus && <p className="text-sm mt-2 text-gray-600">{paymentStatus}</p>}
          </div>
        )}

        {/* Support Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">Need Assistance?</h2>
          <p className="text-gray-600">
            If you face any issues, feel free to{" "}
            <a href="/support" className="text-blue-500 underline hover:text-blue-700">
              contact support
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
