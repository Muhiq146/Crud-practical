import ReactDOM from "react-dom";

// Css
import "./_metronic/assets/sass/style.scss";
import "./_metronic/assets/sass/style.react.scss";
import "react-datepicker/dist/react-datepicker.css";

// Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import store, { persistor } from "./Redux/Store/Store";

// Components Imports
import { AppRoutes } from "./Routes/AppRoutes";

// console.log = () => {};

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppRoutes />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
