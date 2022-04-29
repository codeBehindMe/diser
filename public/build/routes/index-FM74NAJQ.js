import {
  require_index_umd
} from "/build/_shared/chunk-2LWEEUO2.js";
import {
  React,
  __toESM,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-KEMNTFMH.js";

// browser-route-module:/Users/seathomp1/Documents/diser/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();

// app/components/GoogleMap.tsx
init_react();
var import_react = __toESM(require_react());
var import_react_wrapper = __toESM(require_index_umd());
var renderMappy = (status) => {
  if (status === import_react_wrapper.Status.FAILURE)
    return /* @__PURE__ */ React.createElement("p", null, "Error");
  return /* @__PURE__ */ React.createElement("p", null, "spinner");
};
var GoogleMap = ({ pins, apiKey }) => {
  const ref = (0, import_react.useRef)(null);
  const [map, setMap] = (0, import_react.useState)();
  (0, import_react.useEffect)(() => {
    if (ref.current && !map) {
      var latlng = new google.maps.LatLng(-34.397, 150.644);
      setMap(new window.google.maps.Map(ref.current, { zoom: 8, center: latlng }));
    }
  }, [ref, map]);
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const locations = [
    { lat: -31.56391, lng: 147.154312 },
    { lat: -33.718234, lng: 150.363181 },
    { lat: -33.727111, lng: 150.371124 },
    { lat: -33.848588, lng: 151.209834 },
    { lat: -33.851702, lng: 151.216968 },
    { lat: -34.671264, lng: 150.863657 },
    { lat: -35.304724, lng: 148.662905 },
    { lat: -36.817685, lng: 175.699196 },
    { lat: -36.828611, lng: 175.790222 },
    { lat: -37.75, lng: 145.116667 }
  ];
  const envData = useLoaderData();
  return /* @__PURE__ */ React.createElement(import_react_wrapper.Wrapper, {
    apiKey: envData.REACT_GOOGLE_MAPS_API_KEY,
    render: renderMappy
  }, /* @__PURE__ */ React.createElement("div", {
    ref,
    style: { width: 800, height: 600 }
  }), /* @__PURE__ */ React.createElement("p", null, "shrran"));
};

// app/routes/index.tsx
function Index() {
  const pins = [
    { lat: -31.56391, lng: 147.154312, label: "A" },
    { lat: -33.718234, lng: 150.363181, label: "B" },
    { lat: -33.727111, lng: 150.371124, label: "C" },
    { lat: -33.848588, lng: 151.209834, label: "D" }
  ];
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement(GoogleMap, {
    pins
  }), /* @__PURE__ */ React.createElement("h1", null, "Welcome to Remix"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/tutorials/blog",
    rel: "noreferrer"
  }, "15m Quickstart Blog Tutorial")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/tutorials/jokes",
    rel: "noreferrer"
  }, "Deep Dive Jokes App Tutorial")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/docs",
    rel: "noreferrer"
  }, "Remix Docs"))));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-FM74NAJQ.js.map
