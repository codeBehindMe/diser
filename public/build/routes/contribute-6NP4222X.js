import {
  Box_default,
  Button_default,
  Header,
  Typography_default,
  _objectWithoutPropertiesLoose,
  capitalize_default,
  chainPropTypes,
  clsx_m_default,
  composeClasses,
  css,
  generateUtilityClass,
  generateUtilityClasses,
  init_SvgIcon,
  init_base,
  init_capitalize,
  init_clsx_m,
  init_esm,
  init_esm2,
  init_generateUtilityClass,
  init_objectWithoutPropertiesLoose,
  init_styled,
  init_useThemeProps,
  init_utils,
  keyframes,
  require_createSvgIcon,
  require_interopRequireDefault,
  require_jsx_runtime,
  require_prop_types,
  styled_default,
  useThemeProps
} from "/build/_shared/chunk-QYGNH7GK.js";
import "/build/_shared/chunk-LYBWQ6RX.js";
import {
  React,
  __commonJS,
  __toESM,
  _extends,
  init_extends,
  init_react,
  require_react
} from "/build/_shared/chunk-JMDK7EPH.js";

// node_modules/@mui/icons-material/Add.js
var require_Add = __commonJS({
  "node_modules/@mui/icons-material/Add.js"(exports) {
    "use strict";
    init_react();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
    }), "Add");
    exports.default = _default;
  }
});

// node_modules/@mui/icons-material/Cancel.js
var require_Cancel = __commonJS({
  "node_modules/@mui/icons-material/Cancel.js"(exports) {
    "use strict";
    init_react();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
    }), "Cancel");
    exports.default = _default;
  }
});

// node_modules/@mui/icons-material/Check.js
var require_Check = __commonJS({
  "node_modules/@mui/icons-material/Check.js"(exports) {
    "use strict";
    init_react();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
    }), "Check");
    exports.default = _default;
  }
});

// browser-route-module:/Users/seathomp1/Documents/diser/app/routes/contribute.tsx?browser
init_react();

// app/routes/contribute.tsx
init_react();

// app/components/FileUpload.tsx
init_react();
var import_react2 = __toESM(require_react());
var import_Add = __toESM(require_Add());
var import_Cancel = __toESM(require_Cancel());
var import_Check = __toESM(require_Check());

// app/components/Progress.tsx
init_react();
var import_react = __toESM(require_react());

// node_modules/@mui/material/CircularProgress/index.js
init_react();

// node_modules/@mui/material/CircularProgress/CircularProgress.js
init_react();
init_objectWithoutPropertiesLoose();
init_extends();
var React2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx_m();
init_esm();
init_base();
init_esm2();
init_capitalize();
init_useThemeProps();
init_styled();

// node_modules/@mui/material/CircularProgress/circularProgressClasses.js
init_react();
init_base();
function getCircularProgressUtilityClass(slot) {
  return generateUtilityClass("MuiCircularProgress", slot);
}
var circularProgressClasses = generateUtilityClasses("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);

// node_modules/@mui/material/CircularProgress/CircularProgress.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"];
var _ = (t) => t;
var _t;
var _t2;
var _t3;
var _t4;
var SIZE = 44;
var circularRotateKeyframe = keyframes(_t || (_t = _`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`));
var circularDashKeyframe = keyframes(_t2 || (_t2 = _`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`));
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    variant,
    color,
    disableShrink
  } = ownerState;
  const slots = {
    root: ["root", variant, `color${capitalize_default(color)}`],
    svg: ["svg"],
    circle: ["circle", `circle${capitalize_default(variant)}`, disableShrink && "circleDisableShrink"]
  };
  return composeClasses(slots, getCircularProgressUtilityClass, classes);
};
var CircularProgressRoot = styled_default("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`color${capitalize_default(ownerState.color)}`]];
  }
})(({
  ownerState,
  theme
}) => _extends({
  display: "inline-block"
}, ownerState.variant === "determinate" && {
  transition: theme.transitions.create("transform")
}, ownerState.color !== "inherit" && {
  color: theme.palette[ownerState.color].main
}), ({
  ownerState
}) => ownerState.variant === "indeterminate" && css(_t3 || (_t3 = _`
      animation: ${0} 1.4s linear infinite;
    `), circularRotateKeyframe));
var CircularProgressSVG = styled_default("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (props, styles) => styles.svg
})({
  display: "block"
});
var CircularProgressCircle = styled_default("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.circle, styles[`circle${capitalize_default(ownerState.variant)}`], ownerState.disableShrink && styles.circleDisableShrink];
  }
})(({
  ownerState,
  theme
}) => _extends({
  stroke: "currentColor"
}, ownerState.variant === "determinate" && {
  transition: theme.transitions.create("stroke-dashoffset")
}, ownerState.variant === "indeterminate" && {
  strokeDasharray: "80px, 200px",
  strokeDashoffset: 0
}), ({
  ownerState
}) => ownerState.variant === "indeterminate" && !ownerState.disableShrink && css(_t4 || (_t4 = _`
      animation: ${0} 1.4s ease-in-out infinite;
    `), circularDashKeyframe));
var CircularProgress = /* @__PURE__ */ React2.forwardRef(function CircularProgress2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiCircularProgress"
  });
  const {
    className,
    color = "primary",
    disableShrink = false,
    size = 40,
    style,
    thickness = 3.6,
    value = 0,
    variant = "indeterminate"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    color,
    disableShrink,
    size,
    thickness,
    value,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  const circleStyle = {};
  const rootStyle = {};
  const rootProps = {};
  if (variant === "determinate") {
    const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps["aria-valuenow"] = Math.round(value);
    circleStyle.strokeDashoffset = `${((100 - value) / 100 * circumference).toFixed(3)}px`;
    rootStyle.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircularProgressRoot, _extends({
    className: clsx_m_default(classes.root, className),
    style: _extends({
      width: size,
      height: size
    }, rootStyle, style),
    ownerState,
    ref,
    role: "progressbar"
  }, rootProps, other, {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircularProgressSVG, {
      className: classes.svg,
      ownerState,
      viewBox: `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircularProgressCircle, {
        className: classes.circle,
        style: circleStyle,
        ownerState,
        cx: SIZE,
        cy: SIZE,
        r: (SIZE - thickness) / 2,
        fill: "none",
        strokeWidth: thickness
      })
    })
  }));
});
true ? CircularProgress.propTypes = {
  classes: import_prop_types.default.object,
  className: import_prop_types.default.string,
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types.default.string]),
  disableShrink: chainPropTypes(import_prop_types.default.bool, (props) => {
    if (props.disableShrink && props.variant && props.variant !== "indeterminate") {
      return new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.");
    }
    return null;
  }),
  size: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]),
  style: import_prop_types.default.object,
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  thickness: import_prop_types.default.number,
  value: import_prop_types.default.number,
  variant: import_prop_types.default.oneOf(["determinate", "indeterminate"])
} : void 0;
var CircularProgress_default = CircularProgress;

// app/components/Progress.tsx
var CircularProgressWithLabel = (props) => {
  return /* @__PURE__ */ React.createElement(Box_default, {
    sx: { position: "relative", display: "inline-flex" }
  }, /* @__PURE__ */ React.createElement(CircularProgress_default, {
    variant: "determinate",
    ...props
  }), /* @__PURE__ */ React.createElement(Box_default, {
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
  }, /* @__PURE__ */ React.createElement(Typography_default, {
    variant: "caption",
    component: "div",
    color: "text.secondary"
  }, `${Math.round(props.value)}%`)));
};
var Progress = () => {
  const [progress, setProgress] = (0, import_react.useState)(10);
  (0, import_react.useEffect)(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => prevProgress >= 100 ? 100 : prevProgress + 10);
      console.log("tick");
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return /* @__PURE__ */ React.createElement(CircularProgressWithLabel, {
    value: progress
  });
};

// node_modules/@mui/material/index.js
init_react();
init_utils();
init_SvgIcon();
init_generateUtilityClass();

// app/components/FileUpload.tsx
var FileUpload = () => {
  const [fileDetails, setFileDetails] = (0, import_react2.useState)(null);
  const [sending, setSending] = (0, import_react2.useState)(false);
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
  };
  const sendFile = () => {
    setSending(true);
  };
  return /* @__PURE__ */ React.createElement("div", {
    style: { display: "block", textAlign: "center" }
  }, /* @__PURE__ */ React.createElement(Typography_default, {
    variant: "h5"
  }, "Upload Location Point Data"), /* @__PURE__ */ React.createElement("div", {
    style: { height: "50px" }
  }, sending && /* @__PURE__ */ React.createElement(Progress, null)), /* @__PURE__ */ React.createElement("div", {
    style: { height: "50px" }
  }, fileDetails && !sending && /* @__PURE__ */ React.createElement("p", null, "Upload: ", fileDetails.name), fileDetails && sending && /* @__PURE__ */ React.createElement("p", null, "Uploading... ", fileDetails.name)), !fileDetails && /* @__PURE__ */ React.createElement(Button_default, {
    variant: "contained",
    component: "label",
    color: "primary"
  }, " ", /* @__PURE__ */ React.createElement(import_Add.default, null), " Upload a file", /* @__PURE__ */ React.createElement("input", {
    type: "file",
    hidden: true,
    onChange: setFile
  })), fileDetails && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button_default, {
    disabled: sending,
    onClick: nullFile,
    variant: "contained",
    component: "label",
    color: "error",
    style: { marginRight: "10px" }
  }, " ", /* @__PURE__ */ React.createElement(import_Cancel.default, null), " Cancel"), /* @__PURE__ */ React.createElement(Button_default, {
    disabled: sending,
    onClick: sendFile,
    variant: "contained",
    component: "label",
    color: "primary",
    style: { marginLeft: "10px" }
  }, " ", /* @__PURE__ */ React.createElement(import_Check.default, null), " Send File")));
};

// app/routes/contribute.tsx
function Contribute() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(Box_default, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "70vh"
  }, /* @__PURE__ */ React.createElement(FileUpload, null)));
}
export {
  Contribute as default
};
/** @license MUI v5.6.3
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=/build/routes/contribute-6NP4222X.js.map
