/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";

// Images Imports
import logo from "../../../../_metronic/assets/Images/logos/logo512.png";

// Components Imports
import { KTSVG } from "../../../helpers";
import { Header } from "./Header";
import { Topbar } from "./Topbar";

export function HeaderWrapper() {
  return (
    <div id="kt_header" className="header align-items-stretch">
      <div className="container-fluid d-flex align-items-stretch justify-content-between">
        {/* begin::Aside mobile toggle */}
        <div
          className="d-flex align-items-center d-lg-none ms-n3 me-1"
          title="Show aside menu"
        >
          <div
            className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
            id="kt_aside_mobile_toggle"
          >
            <KTSVG
              path="/media/icons/duotune/abstract/abs015.svg"
              className="svg-icon-2x mt-1"
            />
          </div>
        </div>
        {/* end::Aside mobile toggle */}

        {/* begin::Logo */}
        <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
          <Link to="/configuration/rates/rates" className="d-lg-none">
            <img alt="Logo" src={logo} className="h-30px" />
          </Link>
        </div>
        {/* end::Logo */}

        {/* begin::Wrapper */}
        <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
          {/* begin::Navbar */}
          <div className="d-flex align-items-stretch" id="kt_header_nav">
            <Header />
          </div>

          <div className="d-flex align-items-stretch flex-shrink-0">
            <Topbar />
          </div>
        </div>
        {/* end::Wrapper */}
      </div>
    </div>
  );
}
