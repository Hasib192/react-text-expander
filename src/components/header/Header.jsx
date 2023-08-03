import React from "react";

const Header = () => {
  return (
    <header className="py-3 mb-3 border-bottom text-bg-dark">
      <div className="container-fluid d-grid gap-3 align-items-center" style={{ gridTemplateColumns: "1fr 2fr" }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <span className="ps-5 fs-4" style={{ color: "white" }}>
            Sample Logo
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
