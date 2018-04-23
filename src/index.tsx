import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./containers/App";
import "./index.css";
import reducers from "./reducers";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(
  reducers,
  {},
  process.env.NODE_ENV === "production"
    ? undefined
    : (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
