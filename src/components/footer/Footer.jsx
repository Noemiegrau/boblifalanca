import React from "react";

const Footer = () => {
  return (
    <>
      <div className="inner">
        <div className="copy">
          <p>
            Made by &nbsp;
            <a
              href="https://noemiegrau.github.io/noemiegrau-portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              Noemie Grau&nbsp;
            </a>
            {new Date().getFullYear()}{""}&copy;.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
