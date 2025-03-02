import React from "react";
import WelcomePage from "./WelcomePage.jsx";

const  Namedisplay= () => {
  // Example username (fetch this dynamically in your app)
  const username = "John Doe";

  return (
    <div>
      {/* Render Welcome Page */}
      <WelcomePage username={username} />
    </div>
  );
};

export default Namedisplay;
