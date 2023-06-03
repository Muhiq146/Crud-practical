import { useLocation } from "react-router";
import { checkIsActive, KTSVG } from "../../../helpers";

const AsideMenuItemWithSub = ({ children, to, title, icon, hasBullet }) => {
  const { pathname } = useLocation();
  const isActive = checkIsActive(pathname, to);

  return (
    <div
      className={`menu-item menu-accordion${isActive ? " here show" : ""}`}
      data-kt-menu-trigger="click"
    >
      <span className="menu-link">
        {hasBullet && (
          <span className="menu-bullet">
            <span className="bullet bullet-dot"></span>
          </span>
        )}
        {icon && (
          <span className="menu-icon">
            <KTSVG path={icon} className="svg-icon-2" />
          </span>
        )}
        <span className="menu-title">{title}</span>
        <span className="menu-arrow"></span>
      </span>
      <div
        className={`menu-sub menu-sub-accordion${
          isActive ? " menu-active-bg" : ""
        } `}
      >
        {children}
      </div>
    </div>
  );
};
export { AsideMenuItemWithSub };
