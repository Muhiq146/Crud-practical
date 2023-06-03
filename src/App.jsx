import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

// Components imports
import { LayoutProvider, LayoutSplashScreen } from "./_metronic/layout/core";
import { MasterInit } from "./_metronic/layout/MasterInit";
import CustomToast from "./Helper/CustomToast/CustomToast";

const App = () => {

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <LayoutProvider>
        <Outlet />
        <MasterInit />
        {/* Toast */}
        <CustomToast />
      </LayoutProvider>
    </Suspense>
  );
};
export { App };
