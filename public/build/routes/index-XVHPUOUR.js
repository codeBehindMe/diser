import {
  MapContext
} from "/build/_shared/chunk-SX24ZX3J.js";
import {
  React,
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-KEMNTFMH.js";

// node_modules/@googlemaps/js-api-loader/dist/index.esm.js
var index_esm_exports = {};
__export(index_esm_exports, {
  DEFAULT_ID: () => DEFAULT_ID,
  Loader: () => Loader,
  LoaderStatus: () => LoaderStatus
});
var fastDeepEqual, DEFAULT_ID, LoaderStatus, Loader;
var init_index_esm = __esm({
  "node_modules/@googlemaps/js-api-loader/dist/index.esm.js"() {
    init_react();
    fastDeepEqual = function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf)
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString)
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a[key], b[key]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
    DEFAULT_ID = "__googleMapsScriptId";
    (function(LoaderStatus2) {
      LoaderStatus2[LoaderStatus2["INITIALIZED"] = 0] = "INITIALIZED";
      LoaderStatus2[LoaderStatus2["LOADING"] = 1] = "LOADING";
      LoaderStatus2[LoaderStatus2["SUCCESS"] = 2] = "SUCCESS";
      LoaderStatus2[LoaderStatus2["FAILURE"] = 3] = "FAILURE";
    })(LoaderStatus || (LoaderStatus = {}));
    Loader = class {
      constructor({ apiKey, authReferrerPolicy, channel, client, id = DEFAULT_ID, language, libraries = [], mapIds, nonce, region, retries = 3, url = "https://maps.googleapis.com/maps/api/js", version }) {
        this.CALLBACK = "__googleMapsCallback";
        this.callbacks = [];
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.apiKey = apiKey;
        this.authReferrerPolicy = authReferrerPolicy;
        this.channel = channel;
        this.client = client;
        this.id = id || DEFAULT_ID;
        this.language = language;
        this.libraries = libraries;
        this.mapIds = mapIds;
        this.nonce = nonce;
        this.region = region;
        this.retries = retries;
        this.url = url;
        this.version = version;
        if (Loader.instance) {
          if (!fastDeepEqual(this.options, Loader.instance.options)) {
            throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);
          }
          return Loader.instance;
        }
        Loader.instance = this;
      }
      get options() {
        return {
          version: this.version,
          apiKey: this.apiKey,
          channel: this.channel,
          client: this.client,
          id: this.id,
          libraries: this.libraries,
          language: this.language,
          region: this.region,
          mapIds: this.mapIds,
          nonce: this.nonce,
          url: this.url,
          authReferrerPolicy: this.authReferrerPolicy
        };
      }
      get status() {
        if (this.errors.length) {
          return LoaderStatus.FAILURE;
        }
        if (this.done) {
          return LoaderStatus.SUCCESS;
        }
        if (this.loading) {
          return LoaderStatus.LOADING;
        }
        return LoaderStatus.INITIALIZED;
      }
      get failed() {
        return this.done && !this.loading && this.errors.length >= this.retries + 1;
      }
      createUrl() {
        let url = this.url;
        url += `?callback=${this.CALLBACK}`;
        if (this.apiKey) {
          url += `&key=${this.apiKey}`;
        }
        if (this.channel) {
          url += `&channel=${this.channel}`;
        }
        if (this.client) {
          url += `&client=${this.client}`;
        }
        if (this.libraries.length > 0) {
          url += `&libraries=${this.libraries.join(",")}`;
        }
        if (this.language) {
          url += `&language=${this.language}`;
        }
        if (this.region) {
          url += `&region=${this.region}`;
        }
        if (this.version) {
          url += `&v=${this.version}`;
        }
        if (this.mapIds) {
          url += `&map_ids=${this.mapIds.join(",")}`;
        }
        if (this.authReferrerPolicy) {
          url += `&auth_referrer_policy=${this.authReferrerPolicy}`;
        }
        return url;
      }
      deleteScript() {
        const script = document.getElementById(this.id);
        if (script) {
          script.remove();
        }
      }
      load() {
        return this.loadPromise();
      }
      loadPromise() {
        return new Promise((resolve, reject) => {
          this.loadCallback((err) => {
            if (!err) {
              resolve(window.google);
            } else {
              reject(err.error);
            }
          });
        });
      }
      loadCallback(fn) {
        this.callbacks.push(fn);
        this.execute();
      }
      setScript() {
        if (document.getElementById(this.id)) {
          this.callback();
          return;
        }
        const url = this.createUrl();
        const script = document.createElement("script");
        script.id = this.id;
        script.type = "text/javascript";
        script.src = url;
        script.onerror = this.loadErrorCallback.bind(this);
        script.defer = true;
        script.async = true;
        if (this.nonce) {
          script.nonce = this.nonce;
        }
        document.head.appendChild(script);
      }
      reset() {
        this.deleteScript();
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.onerrorEvent = null;
      }
      resetIfRetryingFailed() {
        if (this.failed) {
          this.reset();
        }
      }
      loadErrorCallback(e) {
        this.errors.push(e);
        if (this.errors.length <= this.retries) {
          const delay = this.errors.length * Math.pow(2, this.errors.length);
          console.log(`Failed to load Google Maps script, retrying in ${delay} ms.`);
          setTimeout(() => {
            this.deleteScript();
            this.setScript();
          }, delay);
        } else {
          this.onerrorEvent = e;
          this.callback();
        }
      }
      setCallback() {
        window.__googleMapsCallback = this.callback.bind(this);
      }
      callback() {
        this.done = true;
        this.loading = false;
        this.callbacks.forEach((cb) => {
          cb(this.onerrorEvent);
        });
        this.callbacks = [];
      }
      execute() {
        this.resetIfRetryingFailed();
        if (this.done) {
          this.callback();
        } else {
          if (window.google && window.google.maps && window.google.maps.version) {
            console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match.");
            this.callback();
            return;
          }
          if (this.loading)
            ;
          else {
            this.loading = true;
            this.setCallback();
            this.setScript();
          }
        }
      }
    };
  }
});

// node_modules/@googlemaps/react-wrapper/dist/index.umd.js
var require_index_umd = __commonJS({
  "node_modules/@googlemaps/react-wrapper/dist/index.umd.js"(exports, module) {
    init_react();
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports, (init_index_esm(), __toCommonJS(index_esm_exports)), require_react()) : typeof define === "function" && define.amd ? define(["exports", "@googlemaps/js-api-loader", "react"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.Loader = {}, global.jsApiLoader, global.React));
    })(exports, function(exports2, jsApiLoader, React2) {
      "use strict";
      function _interopDefaultLegacy(e) {
        return e && typeof e === "object" && "default" in e ? e : { "default": e };
      }
      var React__default = /* @__PURE__ */ _interopDefaultLegacy(React2);
      exports2.Status = void 0;
      (function(Status2) {
        Status2["LOADING"] = "LOADING";
        Status2["FAILURE"] = "FAILURE";
        Status2["SUCCESS"] = "SUCCESS";
      })(exports2.Status || (exports2.Status = {}));
      const Wrapper2 = ({ children, render, callback, ...options }) => {
        const [status, setStatus] = React2.useState(exports2.Status.LOADING);
        React2.useEffect(() => {
          const loader = new jsApiLoader.Loader(options);
          const setStatusAndExecuteCallback = (status2) => {
            if (callback)
              callback(status2, loader);
            setStatus(status2);
          };
          setStatusAndExecuteCallback(exports2.Status.LOADING);
          loader.load().then(() => setStatusAndExecuteCallback(exports2.Status.SUCCESS), () => setStatusAndExecuteCallback(exports2.Status.FAILURE));
        }, []);
        if (status === exports2.Status.SUCCESS && children)
          return React__default["default"].createElement(React__default["default"].Fragment, null, children);
        if (render)
          return render(status);
        return React__default["default"].createElement(React__default["default"].Fragment, null);
      };
      exports2.Wrapper = Wrapper2;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// browser-route-module:/Users/seathomp1/Documents/diser/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();

// app/components/GoogleMap.tsx
init_react();
var import_react = __toESM(require_react());
var import_react_wrapper = __toESM(require_index_umd());
var renderMap = (status) => {
  if (status === import_react_wrapper.Status.FAILURE)
    return /* @__PURE__ */ React.createElement("p", null, "Error");
  return /* @__PURE__ */ React.createElement("p", null, "Loading..");
};
var GoogleMap = ({ pins }) => {
  const ref = (0, import_react.useRef)(null);
  const [map, setMap] = (0, import_react.useState)();
  const MapApiKey = (0, import_react.useContext)(MapContext);
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
  console.log(MapApiKey);
  return /* @__PURE__ */ React.createElement(import_react_wrapper.Wrapper, {
    apiKey: "AIzaSyBvgHxoy6xYPJbq_q9_0fe8LvNiGXfLOjo",
    render: renderMap
  }, /* @__PURE__ */ React.createElement("div", {
    ref,
    style: { width: 800, height: 600 }
  }));
};

// app/routes/index.tsx
function Index() {
  const pins = [
    { lat: -31.56391, lng: 147.154312, id: "A" },
    { lat: -33.718234, lng: 150.363181, id: "B" },
    { lat: -33.727111, lng: 150.371124, id: "C" },
    { lat: -33.848588, lng: 151.209834, id: "D" }
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
//# sourceMappingURL=/build/routes/index-XVHPUOUR.js.map
