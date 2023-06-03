import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Components imports
import { AsideDefault } from "./components/aside/AsideDefault";
import { Footer } from "./components/Footer";
import { HeaderWrapper } from "./components/header/HeaderWrapper";
import { ScrollTop } from "./components/ScrollTop";
import { Content } from "./components/Content";
import { MenuComponent } from "../assets/ts/components";
import { useAuth } from "../../app/modules/auth";

const MasterLayout = () => {
  const location = useLocation();
  const { language } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization();
    }, 500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization();
    }, 500);
  }, [location.key, language]);

  return (
    <>
      <div className="page d-flex flex-row flex-column-fluid">
        <AsideDefault />
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <HeaderWrapper />

          <div
            id="kt_content"
            className="content d-flex flex-column flex-column-fluid"
          >
            {/* <Toolbar /> */}
            <div className="post d-flex flex-column-fluid" id="kt_post">
              <Content>
                <Outlet />
              </Content>
            </div>
          </div>
          <Footer />
        </div>
      </div>

      <ScrollTop />
    </>
  );
};
export { MasterLayout };
