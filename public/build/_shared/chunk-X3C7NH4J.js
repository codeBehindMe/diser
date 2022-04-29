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

// app/root.tsx
init_react();
var import_react2 = __toESM(require_react());
var MapContext = (0, import_react2.createContext)("");
var meta = () => ({
  charset: "utf-8",
  title: "Diser ",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  const envData = useLoaderData();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(MapContext.Provider, {
    value: envData.REACT_GOOGLE_MAPS_API_KEY
  }, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null))));
}

export {
  MapContext,
  meta,
  App
};
//# sourceMappingURL=/build/_shared/chunk-X3C7NH4J.js.map
