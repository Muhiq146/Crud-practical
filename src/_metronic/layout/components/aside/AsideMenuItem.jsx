import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { checkIsActive, KTSVG } from "../../../helpers";

const AsideMenuItem = ({ children, to, title, icon, hasBullet = false }) => {
  const { pathname } = useLocation();
  const isActive = checkIsActive(pathname, to);

  return (
    <div className="menu-item">
      <Link
        className={`menu-link without-sub${isActive ? " active" : ""}`}
        to={to}
      >
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
      </Link>
      {children}
    </div>
  );
};
export { AsideMenuItem };
