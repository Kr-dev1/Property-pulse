import React from "react";
import "./assets/styles/global.css";

export const metadata = {
  title: "Property Pulse | Find best properties",
  description: "Find your dream property, in no time!",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default layout;
