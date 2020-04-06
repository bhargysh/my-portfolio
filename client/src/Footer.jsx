import React from "react";

export const Footer = (props) => {
  return (
    <footer>
      <div>
        <p>This is the footer.</p>
        FOOTER. Hi there {props.name}. {props.children}!!!
        <p>Copyright Bharg 2020.</p>
      </div>
    </footer>
  );
};
