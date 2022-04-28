var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/seathomp1/Documents/diser/app/root.tsx
var root_exports = {};
__export(root_exports, {
  MapContext: () => MapContext,
  default: () => App,
  loader: () => loader,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");
var import_react3 = require("react");
var MapContext = (0, import_react3.createContext)("");
async function loader() {
  return {
    REACT_GOOGLE_MAPS_API_KEY: process.env.REACT_GOOGLE_MAPS_API_KEY
  };
}
var meta = () => ({
  charset: "utf-8",
  title: "Diser ",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  const envData = (0, import_react2.useLoaderData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(MapContext.Provider, {
    value: envData.REACT_GOOGLE_MAPS_API_KEY
  }, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null))));
}

// route:/Users/seathomp1/Documents/diser/app/routes/contribute.tsx
var contribute_exports = {};
__export(contribute_exports, {
  default: () => Contribute
});
var import_Box3 = __toESM(require("@mui/material/Box"));

// app/components/Header.tsx
var React2 = __toESM(require("react"));
var import_AppBar = __toESM(require("@mui/material/AppBar"));
var import_Box = __toESM(require("@mui/material/Box"));
var import_Toolbar = __toESM(require("@mui/material/Toolbar"));
var import_IconButton = __toESM(require("@mui/material/IconButton"));
var import_Typography = __toESM(require("@mui/material/Typography"));
var import_Menu = __toESM(require("@mui/material/Menu"));
var import_Menu2 = __toESM(require("@mui/icons-material/Menu"));
var import_Container = __toESM(require("@mui/material/Container"));
var import_Avatar = __toESM(require("@mui/material/Avatar"));
var import_Button = __toESM(require("@mui/material/Button"));
var import_Tooltip = __toESM(require("@mui/material/Tooltip"));
var import_MenuItem = __toESM(require("@mui/material/MenuItem"));
var import_Link = __toESM(require("@mui/material/Link"));
var settings = ["Profile", "Account", "Dashboard", "Logout"];
var Header = () => {
  const [anchorElNav, setAnchorElNav] = React2.useState(null);
  const [anchorElUser, setAnchorElUser] = React2.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return /* @__PURE__ */ React2.createElement(import_AppBar.default, {
    position: "static"
  }, /* @__PURE__ */ React2.createElement(import_Container.default, {
    maxWidth: "xl"
  }, /* @__PURE__ */ React2.createElement(import_Toolbar.default, {
    disableGutters: true
  }, /* @__PURE__ */ React2.createElement(import_Typography.default, {
    variant: "h6",
    noWrap: true,
    component: "div",
    sx: { mr: 2, display: { xs: "none", md: "flex" } }
  }, "DISER"), /* @__PURE__ */ React2.createElement(import_Box.default, {
    sx: { flexGrow: 1, display: { xs: "flex", md: "none" } }
  }, /* @__PURE__ */ React2.createElement(import_IconButton.default, {
    size: "large",
    "aria-label": "account of current user",
    "aria-controls": "menu-appbar",
    "aria-haspopup": "true",
    onClick: handleOpenNavMenu,
    color: "inherit"
  }, /* @__PURE__ */ React2.createElement(import_Menu2.default, null)), /* @__PURE__ */ React2.createElement(import_Menu.default, {
    id: "menu-appbar",
    anchorEl: anchorElNav,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left"
    },
    keepMounted: true,
    transformOrigin: {
      vertical: "top",
      horizontal: "left"
    },
    open: Boolean(anchorElNav),
    onClose: handleCloseNavMenu,
    sx: {
      display: { xs: "block", md: "none" }
    }
  }, /* @__PURE__ */ React2.createElement(import_MenuItem.default, {
    onClick: handleCloseNavMenu
  }, /* @__PURE__ */ React2.createElement(import_Typography.default, {
    textAlign: "center"
  }, "Explore")), /* @__PURE__ */ React2.createElement(import_MenuItem.default, null, /* @__PURE__ */ React2.createElement(import_Link.default, {
    href: "/contribute",
    sx: { textDecoration: "none" }
  }, /* @__PURE__ */ React2.createElement(import_Typography.default, {
    textAlign: "center",
    sx: { color: "black" }
  }, "Contribute"))), /* @__PURE__ */ React2.createElement(import_MenuItem.default, {
    onClick: handleCloseNavMenu
  }, /* @__PURE__ */ React2.createElement(import_Typography.default, {
    textAlign: "center"
  }, "About")))), /* @__PURE__ */ React2.createElement(import_Typography.default, {
    variant: "h6",
    noWrap: true,
    component: "div",
    sx: { flexGrow: 1, display: { xs: "flex", md: "none" } }
  }, "DISER"), /* @__PURE__ */ React2.createElement(import_Box.default, {
    sx: { flexGrow: 1, display: { xs: "none", md: "flex" } }
  }, /* @__PURE__ */ React2.createElement(import_Link.default, {
    href: "/",
    component: import_Button.default
  }, /* @__PURE__ */ React2.createElement(import_Typography.default, {
    sx: { color: "white", fontSize: "14px", fontWeight: 500 },
    textAlign: "center"
  }, "Explore")), /* @__PURE__ */ React2.createElement(import_Link.default, {
    href: "/contribute",
    component: import_Button.default
  }, /* @__PURE__ */ React2.createElement(import_Typography.default, {
    sx: { color: "white", fontSize: "14px", fontWeight: 500 },
    textAlign: "center"
  }, "Contribute")), /* @__PURE__ */ React2.createElement(import_Button.default, {
    onClick: handleCloseNavMenu,
    sx: { my: 2, color: "white", display: "block" }
  }, "About")), /* @__PURE__ */ React2.createElement(import_Box.default, {
    sx: { flexGrow: 0 }
  }, /* @__PURE__ */ React2.createElement(import_Tooltip.default, {
    title: "Open settings"
  }, /* @__PURE__ */ React2.createElement(import_IconButton.default, {
    onClick: handleOpenUserMenu,
    sx: { p: 0 }
  }, /* @__PURE__ */ React2.createElement(import_Avatar.default, {
    alt: "Remy Sharp",
    src: "/static/images/avatar/2.jpg"
  }))), /* @__PURE__ */ React2.createElement(import_Menu.default, {
    sx: { mt: "45px" },
    id: "menu-appbar",
    anchorEl: anchorElUser,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    keepMounted: true,
    transformOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    open: Boolean(anchorElUser),
    onClose: handleCloseUserMenu
  }, settings.map((setting) => /* @__PURE__ */ React2.createElement(import_MenuItem.default, {
    key: setting,
    onClick: handleCloseUserMenu
  }, /* @__PURE__ */ React2.createElement(import_Typography.default, {
    textAlign: "center"
  }, setting))))))));
};

// app/components/FileUpload.tsx
var import_react5 = require("react");
var import_Button2 = __toESM(require("@mui/material/Button"));
var import_Add = __toESM(require("@mui/icons-material/Add"));
var import_Cancel = __toESM(require("@mui/icons-material/Cancel"));
var import_Check = __toESM(require("@mui/icons-material/Check"));

// app/components/Progress.tsx
var import_react4 = require("react");
var import_CircularProgress = __toESM(require("@mui/material/CircularProgress"));
var import_Typography2 = __toESM(require("@mui/material/Typography"));
var import_Box2 = __toESM(require("@mui/material/Box"));
var CircularProgressWithLabel = (props) => {
  return /* @__PURE__ */ React.createElement(import_Box2.default, {
    sx: { position: "relative", display: "inline-flex" }
  }, /* @__PURE__ */ React.createElement(import_CircularProgress.default, __spreadValues({
    variant: "determinate"
  }, props)), /* @__PURE__ */ React.createElement(import_Box2.default, {
    sx: {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /* @__PURE__ */ React.createElement(import_Typography2.default, {
    variant: "caption",
    component: "div",
    color: "text.secondary"
  }, `${Math.round(props.value)}%`)));
};
var Progress = ({ onDone }) => {
  const [progress, setProgress] = (0, import_react4.useState)(10);
  (0, import_react4.useEffect)(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(timer);
        }
        return prevProgress >= 100 ? 100 : prevProgress + 10;
      });
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  (0, import_react4.useEffect)(() => {
    if (progress === 100) {
      onDone();
    }
  }, [progress]);
  return /* @__PURE__ */ React.createElement(CircularProgressWithLabel, {
    value: progress
  });
};

// app/components/DataTable.tsx
var import_Table = __toESM(require("@mui/material/Table"));
var import_TableBody = __toESM(require("@mui/material/TableBody"));
var import_TableCell = __toESM(require("@mui/material/TableCell"));
var import_TableContainer = __toESM(require("@mui/material/TableContainer"));
var import_TableRow = __toESM(require("@mui/material/TableRow"));
var DataTable = () => {
  return /* @__PURE__ */ React.createElement(import_TableContainer.default, null, /* @__PURE__ */ React.createElement(import_Table.default, {
    sx: { minWidth: 400 },
    "aria-label": "simple table"
  }, /* @__PURE__ */ React.createElement(import_TableBody.default, null, /* @__PURE__ */ React.createElement(import_TableRow.default, null, /* @__PURE__ */ React.createElement(import_TableCell.default, null, "Your Location ID"), /* @__PURE__ */ React.createElement(import_TableCell.default, {
    align: "right"
  }, "icr94245")), /* @__PURE__ */ React.createElement(import_TableRow.default, null, /* @__PURE__ */ React.createElement(import_TableCell.default, null, "Closest IDs to your profile"), /* @__PURE__ */ React.createElement(import_TableCell.default, {
    align: "right"
  }, "icr23427 | icr88693 | icr65278")), /* @__PURE__ */ React.createElement(import_TableRow.default, null, /* @__PURE__ */ React.createElement(import_TableCell.default, null, "Predicted SOC"), /* @__PURE__ */ React.createElement(import_TableCell.default, {
    align: "right"
  }, "0.706")), /* @__PURE__ */ React.createElement(import_TableRow.default, null, /* @__PURE__ */ React.createElement(import_TableCell.default, null, "Prediction Error"), /* @__PURE__ */ React.createElement(import_TableCell.default, {
    align: "right"
  }, "4.04%")), /* @__PURE__ */ React.createElement(import_TableRow.default, null, /* @__PURE__ */ React.createElement(import_TableCell.default, null, "Prediction Confidence"), /* @__PURE__ */ React.createElement(import_TableCell.default, {
    align: "right"
  }, "96.11%")))));
};

// app/components/FileUpload.tsx
var import_material = require("@mui/material");
var FileUpload = () => {
  const [fileDetails, setFileDetails] = (0, import_react5.useState)(null);
  const [sending, setSending] = (0, import_react5.useState)(false);
  const [result, setResult] = (0, import_react5.useState)(null);
  const setFile = (event) => {
    console.log("event", event.target.files);
    console.log("filename", event.target.files[0].name);
    const fileSelected = {
      name: event.target.files[0].name,
      type: event.target.files[0].type
    };
    setFileDetails(fileSelected);
  };
  const nullFile = () => {
    setFileDetails(null);
    setResult(null);
  };
  const sendFile = () => {
    setSending(true);
  };
  const onProgressDone = () => {
    setSending(false);
    if (fileDetails && fileDetails.type === "text/csv") {
      setResult("success");
    } else {
      setResult("fail");
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    style: { display: "block", textAlign: "center" }
  }, /* @__PURE__ */ React.createElement(import_material.Typography, {
    variant: "h5"
  }, "Upload Location Point Data"), result === "fail" && /* @__PURE__ */ React.createElement("div", {
    style: { margin: "20px auto 0", width: "300px" }
  }, /* @__PURE__ */ React.createElement(import_material.Typography, {
    variant: "h6",
    color: "error"
  }, "Error"), /* @__PURE__ */ React.createElement("p", null, "Unfortunately your file upload has failed.  We can only accept valid CSV files.  This is a work in progress, we hope to be able to provide a more compelling contribution utility soon.")), result === "success" && /* @__PURE__ */ React.createElement("div", {
    style: { margin: "20px auto 0", width: "450px" }
  }, /* @__PURE__ */ React.createElement(import_material.Typography, {
    variant: "h6",
    color: "secondary"
  }, "Success!"), /* @__PURE__ */ React.createElement("p", null, "Your CSV upload has completed successfully. Thank you for contributing to the DISER project."), /* @__PURE__ */ React.createElement(DataTable, null)), !result && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    style: { height: "40px", marginTop: "10px" }
  }, sending && /* @__PURE__ */ React.createElement(Progress, {
    onDone: onProgressDone
  })), /* @__PURE__ */ React.createElement("div", {
    style: { height: "50px" }
  }, fileDetails && !sending && /* @__PURE__ */ React.createElement("p", null, "Upload: ", fileDetails.name), fileDetails && sending && /* @__PURE__ */ React.createElement("p", null, "Uploading... ", fileDetails.name)), !fileDetails && /* @__PURE__ */ React.createElement(import_Button2.default, {
    variant: "contained",
    component: "label",
    color: "primary"
  }, " ", /* @__PURE__ */ React.createElement(import_Add.default, null), " Upload a file", /* @__PURE__ */ React.createElement("input", {
    type: "file",
    hidden: true,
    onChange: setFile
  })), fileDetails && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_Button2.default, {
    disabled: sending,
    onClick: nullFile,
    variant: "contained",
    component: "label",
    color: "error",
    style: { marginRight: "10px" }
  }, " ", /* @__PURE__ */ React.createElement(import_Cancel.default, null), " Cancel"), /* @__PURE__ */ React.createElement(import_Button2.default, {
    disabled: sending,
    onClick: sendFile,
    variant: "contained",
    component: "label",
    color: "primary",
    style: { marginLeft: "10px" }
  }, " ", /* @__PURE__ */ React.createElement(import_Check.default, null), " Send File"))));
};

// route:/Users/seathomp1/Documents/diser/app/routes/contribute.tsx
function Contribute() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(import_Box3.default, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "70vh"
  }, /* @__PURE__ */ React.createElement(FileUpload, null)));
}

// route:/Users/seathomp1/Documents/diser/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react9 = require("react");
var import_Drawer = __toESM(require("@mui/material/Drawer"));

// app/components/GoogleMap.tsx
var import_react8 = require("react");
var import_react_wrapper = require("@googlemaps/react-wrapper");
var import_markerclusterer = require("@googlemaps/markerclusterer");

// app/root.tsx
var import_react6 = require("@remix-run/react");
var import_react7 = require("react");
var MapContext2 = (0, import_react7.createContext)("");

// app/components/GoogleMap.tsx
var renderMap = (status) => {
  if (status === import_react_wrapper.Status.FAILURE)
    return /* @__PURE__ */ React.createElement("p", null, "Error");
  return /* @__PURE__ */ React.createElement("p", null, "Loading..");
};
var DrawMap = ({ pins, onPinClick }) => {
  const ref = (0, import_react8.useRef)(null);
  const [map, setMap] = (0, import_react8.useState)();
  (0, import_react8.useEffect)(() => {
    if (ref.current && !map) {
      var latlng = new google.maps.LatLng(-34.397, 150.644);
      setMap(new window.google.maps.Map(ref.current, { zoom: 8, center: latlng }));
    }
  }, [ref, map]);
  const markers = pins.map((pin) => {
    const marker = new google.maps.Marker({
      position: { lat: pin.lat, lng: pin.lng },
      label: pin.id
    });
    marker.addListener("click", () => {
      onPinClick(marker.label);
    });
    return marker;
  });
  new import_markerclusterer.MarkerClusterer({ markers, map });
  return /* @__PURE__ */ React.createElement("div", {
    ref,
    style: { width: "100%", height: 600 }
  });
};
var GoogleMap = ({ pins, onPinClick }) => {
  const MapApiKey = (0, import_react8.useContext)(MapContext2);
  return /* @__PURE__ */ React.createElement(import_react_wrapper.Wrapper, {
    apiKey: MapApiKey,
    render: renderMap
  }, /* @__PURE__ */ React.createElement(DrawMap, {
    pins,
    onPinClick
  }));
};

// app/components/InfoDrawer.tsx
var import_Button3 = __toESM(require("@mui/material/Button"));
var import_List = __toESM(require("@mui/material/List"));
var import_ListItem = __toESM(require("@mui/material/ListItem"));
var import_ListItemText = __toESM(require("@mui/material/ListItemText"));
var import_Typography3 = __toESM(require("@mui/material/Typography"));
var import_Table2 = __toESM(require("@mui/material/Table"));
var import_TableBody2 = __toESM(require("@mui/material/TableBody"));
var import_TableCell2 = __toESM(require("@mui/material/TableCell"));
var import_TableContainer2 = __toESM(require("@mui/material/TableContainer"));
var import_TableRow2 = __toESM(require("@mui/material/TableRow"));

// app/components/LineGraph.tsx
var import_recharts = require("recharts");
var data = [
  { name: "Page A", uv: 66 },
  { name: "Page B", uv: 68 },
  { name: "Page B", uv: 70 },
  { name: "Page B", uv: 72 },
  { name: "Page B", uv: 70 },
  { name: "Page B", uv: 72 },
  { name: "Page B", uv: 73 },
  { name: "Page B", uv: 73 },
  { name: "Page B", uv: 72 },
  { name: "Page B", uv: 71 },
  { name: "Page B", uv: 70 },
  { name: "Page B", uv: 68 },
  { name: "Page B", uv: 74 },
  { name: "Page B", uv: 74 },
  { name: "Page B", uv: 74 },
  { name: "Page B", uv: 73 },
  { name: "Page B", uv: 72 },
  { name: "Page B", uv: 71 },
  { name: "Page B", uv: 70 },
  { name: "Page B", uv: 72 },
  { name: "Page B", uv: 71 },
  { name: "Page B", uv: 64 },
  { name: "Page B", uv: 52 },
  { name: "Page B", uv: 44 },
  { name: "Page B", uv: 35 },
  { name: "Page B", uv: 36 }
];
var LineGraph = () => {
  return /* @__PURE__ */ React.createElement(import_recharts.LineChart, {
    width: 400,
    height: 400,
    data
  }, /* @__PURE__ */ React.createElement(import_recharts.CartesianGrid, {
    strokeDasharray: "3 3"
  }), /* @__PURE__ */ React.createElement(import_recharts.Line, {
    type: "monotone",
    dataKey: "uv",
    stroke: "#8884d8",
    dot: false
  }), /* @__PURE__ */ React.createElement(import_recharts.XAxis, {
    label: "Wavelength [nm]",
    tick: false
  }), /* @__PURE__ */ React.createElement(import_recharts.YAxis, {
    domain: [35, 80]
  }, /* @__PURE__ */ React.createElement(import_recharts.Label, {
    angle: -90,
    value: "Reflectance [%]",
    position: "insideLeft",
    style: { textAnchor: "middle" }
  })));
};

// app/components/InfoDrawer.tsx
var InfoDrawer = ({ title, id }) => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_Typography3.default, {
    variant: "h6",
    noWrap: true
  }, "Location Profile"), /* @__PURE__ */ React.createElement(import_TableContainer2.default, null, /* @__PURE__ */ React.createElement(import_Table2.default, {
    sx: { minWidth: 350 },
    "aria-label": "simple table"
  }, /* @__PURE__ */ React.createElement(import_TableBody2.default, null, /* @__PURE__ */ React.createElement(import_TableRow2.default, null, /* @__PURE__ */ React.createElement(import_TableCell2.default, null, "ID"), /* @__PURE__ */ React.createElement(import_TableCell2.default, {
    align: "right"
  }, "icr05623")), /* @__PURE__ */ React.createElement(import_TableRow2.default, null, /* @__PURE__ */ React.createElement(import_TableCell2.default, null, "Soil texture"), /* @__PURE__ */ React.createElement(import_TableCell2.default, {
    align: "right"
  }, "NA")), /* @__PURE__ */ React.createElement(import_TableRow2.default, null, /* @__PURE__ */ React.createElement(import_TableCell2.default, null, "Upper depth (cm)"), /* @__PURE__ */ React.createElement(import_TableCell2.default, {
    align: "right"
  }, "0")), /* @__PURE__ */ React.createElement(import_TableRow2.default, null, /* @__PURE__ */ React.createElement(import_TableCell2.default, null, "Lower depth (cm)"), /* @__PURE__ */ React.createElement(import_TableCell2.default, {
    align: "right"
  }, "20")), /* @__PURE__ */ React.createElement(import_TableRow2.default, null, /* @__PURE__ */ React.createElement(import_TableCell2.default, null, "Address"), /* @__PURE__ */ React.createElement(import_TableCell2.default, {
    align: "right"
  }, "NA")), /* @__PURE__ */ React.createElement(import_TableRow2.default, null, /* @__PURE__ */ React.createElement(import_TableCell2.default, null, "Closest Profile IDs"), /* @__PURE__ */ React.createElement(import_TableCell2.default, {
    align: "right"
  }, "icr00233, icr40323, icr03523, icr55663"))))), /* @__PURE__ */ React.createElement(import_Typography3.default, {
    variant: "h6",
    noWrap: true
  }, "VISNIR Spectra Profile"), /* @__PURE__ */ React.createElement(import_List.default, null, /* @__PURE__ */ React.createElement(import_ListItem.default, null, /* @__PURE__ */ React.createElement(import_ListItemText.default, {
    primary: "item"
  }))), /* @__PURE__ */ React.createElement(LineGraph, null), /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", justifyContent: "center", margin: "10px auto" }
  }, /* @__PURE__ */ React.createElement(import_Button3.default, {
    variant: "contained",
    color: "primary"
  }, "Download this dataset")));
};

// route:/Users/seathomp1/Documents/diser/app/routes/index.tsx
function Index() {
  const [openDrawer, setOpenDrawer] = (0, import_react9.useState)(false);
  const pins = [
    { lat: -31.56391, lng: 147.154312, id: "A" },
    { lat: -33.718234, lng: 150.363181, id: "B" },
    { lat: -33.727111, lng: 150.371124, id: "C" },
    { lat: -33.848588, lng: 151.209834, id: "D" }
  ];
  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };
  const onPinClick = (id) => {
    toggleDrawer();
  };
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(import_Drawer.default, {
    anchor: "left",
    open: openDrawer,
    onClose: toggleDrawer
  }, /* @__PURE__ */ React.createElement(InfoDrawer, {
    title: "sean",
    id: "sss"
  })), /* @__PURE__ */ React.createElement(GoogleMap, {
    pins,
    onPinClick
  }));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "db88eec1", "entry": { "module": "/build/entry.client-UDFPZPXK.js", "imports": ["/build/_shared/chunk-6YCRFQN3.js", "/build/_shared/chunk-LYBWQ6RX.js", "/build/_shared/chunk-JMDK7EPH.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-WZYFJXQI.js", "imports": ["/build/_shared/chunk-VIZ6JHA2.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/contribute": { "id": "routes/contribute", "parentId": "root", "path": "contribute", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/contribute-JMKEEFGU.js", "imports": ["/build/_shared/chunk-52NNXQIH.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-PPOOO3FG.js", "imports": ["/build/_shared/chunk-52NNXQIH.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-DB88EEC1.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/contribute": {
    id: "routes/contribute",
    parentId: "root",
    path: "contribute",
    index: void 0,
    caseSensitive: void 0,
    module: contribute_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
