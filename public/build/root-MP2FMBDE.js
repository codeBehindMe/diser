import {
  require_index_umd
} from "/build/_shared/chunk-ZJN54W2V.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  React,
  Scripts,
  ScrollRestoration,
  __toESM,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-KEMNTFMH.js";

// browser-route-module:/Users/seathomp1/Documents/diser/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();
var import_react_wrapper = __toESM(require_index_umd());
var import_react2 = __toESM(require_react());
var meta = () => ({
  charset: "utf-8",
  title: "Diser ",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  const envData = useLoaderData();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  App as default,
  meta
};
//# sourceMappingURL=/build/root-MP2FMBDE.js.map
