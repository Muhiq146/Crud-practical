const Footer = () => {
  return (
    <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
      {/* begin::Container */}
      <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
        {/* begin::Copyright */}
        <div className="text-dark order-2 order-md-1">
          <span className="text-gray-800">Roommatik</span>
          <span className="text-muted fw-bold">&copy; 2022</span>
        </div>
        {/* end::Copyright */}

        {/* begin::Nav */}
        {/* <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
          <li className="menu-item">
            <a href="#" className="menu-link ps-0 pe-2">
              About
            </a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link pe-0 pe-2">
              Contact
            </a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link pe-0">
              Purchase
            </a>
          </li>
        </ul> */}
        {/* end::Nav */}
      </div>
      {/* end::Container */}
    </div>
  );
};
export { Footer };
