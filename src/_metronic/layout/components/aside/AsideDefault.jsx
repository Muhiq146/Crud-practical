/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

// Images Import
import logo from "../../../../_metronic/assets/Images/logos/logo512.png";
import { ArrowSvg } from "../../../../Helper/SvgComponents";

// Components Import
import { AsideMenu } from "./AsideMenu";

const AsideDefault = () => {
  return (
    <div
      id="kt_aside"
      className="aside aside-light aside-hoverable"
      data-kt-drawer="true"
      data-kt-drawer-name="aside"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="{default:'200px', '300px': '250px'}"
      data-kt-drawer-direction="start"
      data-kt-drawer-toggle="#kt_aside_mobile_toggle"
    >
      {/* begin::Brand */}
      <div className="aside-logo flex-column-auto" id="kt_aside_logo">
        {/* begin::Logo */}
        <Link to="/configuration/rates/rates">
          <img alt="Logo" className="h-25px w-150px logo" src={logo} />
        </Link>
        {/* end::Logo */}

        {/* begin::Aside toggler */}
        <div
          id="kt_aside_toggle"
          className="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle"
          data-kt-toggle="true"
          data-kt-toggle-state="active"
          data-kt-toggle-target="body"
          data-kt-toggle-name="aside-minimize"
        >
          <span className="svg-icon svg-icon-1 rotate-180">
            <ArrowSvg />
          </span>
        </div>
        {/* end::Aside toggler */}
      </div>
      {/* end::Brand */}

      {/* begin::Aside menu */}
      <div className="aside-menu flex-column-fluid">
        <AsideMenu />
      </div>
      {/* end::Aside menu */}

      {/* begin::Footer */}
      {/* <div
        className="aside-footer flex-column-auto pt-5 pb-7 px-5"
        id="kt_aside_footer"
      >
        <a
          target="_blank"
          className="btn btn-custom btn-primary w-100"
          data-bs-toggle="tooltip"
          data-bs-trigger="hover"
          data-bs-dismiss-="click"
          title="Check out the complete documentation with over 100 components"
        >
          <span className="btn-label">Docs & Components</span>
        </a>
      </div> */}
      {/* end::Footer */}
    </div>
  );
};
export { AsideDefault };
