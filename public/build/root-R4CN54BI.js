import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "/build/_shared/chunk-PBUWZJJC.js";
import {
  MarkerClusterer,
  require_index_umd
} from "/build/_shared/chunk-IWBZ2B5E.js";
import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-XV23MX66.js";

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
var renderMappy = (status) => {
  if (status === import_react_wrapper.Status.FAILURE)
    return /* @__PURE__ */ React.createElement("p", null, "Error");
  return /* @__PURE__ */ React.createElement("p", null, "spinner");
};
var MyMapComponent = ({ children }) => {
  const ref = (0, import_react2.useRef)(null);
  const [map2, setMap] = (0, import_react2.useState)();
  (0, import_react2.useEffect)(() => {
    if (ref.current && !map2) {
      var latlng = new google.maps.LatLng(-34.397, 150.644);
      setMap(new window.google.maps.Map(ref.current, { zoom: 8, center: latlng }));
    }
  }, [ref, map2]);
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
  const markers = locations.map((position, i) => {
    const label = labels[i % labels.length];
    const marker = new google.maps.Marker({
      position,
      label
    });
    marker.addListener("click", () => {
      console.log("pin clicked");
    });
    return marker;
  });
  new MarkerClusterer({ markers, map: map2 });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    ref,
    style: { width: 800, height: 600 }
  }), import_react2.Children.map(children, (child) => {
    if ((0, import_react2.isValidElement)(child)) {
      return (0, import_react2.cloneElement)(child, { map: map2 });
    }
  }));
};
var Marker = (options) => {
  const [marker, setMarker] = (0, import_react2.useState)();
  (0, import_react2.useEffect)(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);
  (0, import_react2.useEffect)(() => {
    if (marker) {
      const latlng = new google.maps.LatLng(-34.397, 150.644);
      let floptions = {};
      floptions = Object.assign(floptions, options, { position: latlng });
      marker.setOptions(floptions);
    }
  }, [marker, options]);
  return null;
};
function App() {
  const envData = useLoaderData();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react_wrapper.Wrapper, {
    apiKey: envData.REACT_GOOGLE_MAPS_API_KEY,
    render: renderMappy
  }, /* @__PURE__ */ React.createElement(MyMapComponent, null, /* @__PURE__ */ React.createElement(Marker, null))), /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
export {
  App as default,
  meta
};
//# sourceMappingURL=/build/root-R4CN54BI.js.map
