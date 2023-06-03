// Images Imports
// import avatar from "../../../assets/Images/avatars/avatar-1.jpg";

// Components Imports
// import { Keyword } from "../../../../Helper/Languages/Languages";
import { HeaderUserMenu } from "../../../partials";
import { useSelector } from "react-redux";

const Topbar = () => {
  const profile = useSelector((state) => state.AuthReducer.Auth);

  return (
    <div className="d-flex align-items-stretch flex-shrink-0">
      {/* begin::User */}
      <div
        className="d-flex align-items-center"
        id="kt_header_user_menu_toggle"
      >
        {/* begin::Toggle */}
        <div
          className="cursor-pointer symbol symbol-30px symbol-md-40px"
          data-kt-menu-trigger="click"
          data-kt-menu-attach="parent"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="bottom"
        >
          {/* <img src={avatar} alt="Profile" /> */}
          <div
            className="symbol-label fs-3 text-gray-700 cursor-pointer px-8"
            style={{ backgroundColor: "#c3eaff" }}
            // ref={(el) => el.style.setProperty("background-color", "#c3eaff", "important")}
          >
            {profile.first_name.split(" ").map((d) => {
              return d.charAt(0)?.toUpperCase();
            })}
            {/* AM */}
          </div>
        </div>
        <HeaderUserMenu />
        {/* end::Toggle */}
      </div>
      {/* end::User */}
    </div>
  );
};
export { Topbar };
