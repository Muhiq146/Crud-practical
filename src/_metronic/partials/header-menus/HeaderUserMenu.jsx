import { Link } from "react-router-dom";
import { useState } from "react";

// Components Imports
import { useAuth } from "../../../app/modules/auth";
import DeleteWarning from "../../../Shared_Components/DeleteWarning/DeleteWarning";

const HeaderUserMenu = () => {
  const { auth, logout } = useAuth();

  const [show, setshow] = useState(false);

  return (
    <>
      <div
        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
        data-kt-menu="true"
      >
        <div className="menu-item px-3">
          <div className="menu-content d-flex align-items-center px-3">
            {/* <div className="symbol symbol-50px me-5">
            <img alt="Profile" src={avatar} />
          </div> */}

            <div className="d-flex flex-column">
              <div className="fw-bolder d-flex align-items-center fs-5">
                Admin
                {/* <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">
                Pro
              </span> */}
              </div>
              {/* <a className="fw-bold text-muted text-hover-primary fs-7">{auth?.email}</a> */}
            </div>
          </div>
        </div>

        <div className="separator my-2"></div>


      </div>

      <DeleteWarning
        text="ARE_YOU_SURE_YOU_WANT_TO_LOGOUT"
        show={show}
        onHide={() => setshow(false)}
        onConfirm={logout}
        cancelButton="NO"
        confirmButton="YES"
      />
    </>
  );
};
export { HeaderUserMenu };
