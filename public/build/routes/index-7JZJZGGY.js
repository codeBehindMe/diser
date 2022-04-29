import {
  MapContext
} from "/build/_shared/chunk-X3C7NH4J.js";
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

// node_modules/fast-equals/dist/fast-equals.js
var require_fast_equals = __commonJS({
  "node_modules/fast-equals/dist/fast-equals.js"(exports, module) {
    init_react();
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global["fast-equals"] = {}));
    })(exports, function(exports2) {
      "use strict";
      var HAS_WEAKSET_SUPPORT = typeof WeakSet === "function";
      var keys = Object.keys;
      function sameValueZeroEqual(a, b) {
        return a === b || a !== a && b !== b;
      }
      function isPlainObject(value) {
        return value.constructor === Object || value.constructor == null;
      }
      function isPromiseLike(value) {
        return !!value && typeof value.then === "function";
      }
      function isReactElement(value) {
        return !!(value && value.$$typeof);
      }
      function getNewCacheFallback() {
        var values = [];
        return {
          add: function(value) {
            values.push(value);
          },
          has: function(value) {
            return values.indexOf(value) !== -1;
          }
        };
      }
      var getNewCache = function(canUseWeakMap) {
        if (canUseWeakMap) {
          return function _getNewCache() {
            return /* @__PURE__ */ new WeakSet();
          };
        }
        return getNewCacheFallback;
      }(HAS_WEAKSET_SUPPORT);
      function createCircularEqualCreator(isEqual) {
        return function createCircularEqual(comparator) {
          var _comparator = isEqual || comparator;
          return function circularEqual(a, b, indexOrKeyA, indexOrKeyB, parentA, parentB, cache) {
            if (cache === void 0) {
              cache = getNewCache();
            }
            var isCacheableA = !!a && typeof a === "object";
            var isCacheableB = !!b && typeof b === "object";
            if (isCacheableA || isCacheableB) {
              var hasA = isCacheableA && cache.has(a);
              var hasB = isCacheableB && cache.has(b);
              if (hasA || hasB) {
                return hasA && hasB;
              }
              if (isCacheableA) {
                cache.add(a);
              }
              if (isCacheableB) {
                cache.add(b);
              }
            }
            return _comparator(a, b, cache);
          };
        };
      }
      function areArraysEqual(a, b, isEqual, meta) {
        var index = a.length;
        if (b.length !== index) {
          return false;
        }
        while (index-- > 0) {
          if (!isEqual(a[index], b[index], index, index, a, b, meta)) {
            return false;
          }
        }
        return true;
      }
      function areMapsEqual(a, b, isEqual, meta) {
        var isValueEqual = a.size === b.size;
        if (isValueEqual && a.size) {
          var matchedIndices_1 = {};
          var indexA_1 = 0;
          a.forEach(function(aValue, aKey) {
            if (isValueEqual) {
              var hasMatch_1 = false;
              var matchIndexB_1 = 0;
              b.forEach(function(bValue, bKey) {
                if (!hasMatch_1 && !matchedIndices_1[matchIndexB_1]) {
                  hasMatch_1 = isEqual(aKey, bKey, indexA_1, matchIndexB_1, a, b, meta) && isEqual(aValue, bValue, aKey, bKey, a, b, meta);
                  if (hasMatch_1) {
                    matchedIndices_1[matchIndexB_1] = true;
                  }
                }
                matchIndexB_1++;
              });
              indexA_1++;
              isValueEqual = hasMatch_1;
            }
          });
        }
        return isValueEqual;
      }
      var OWNER = "_owner";
      var hasOwnProperty = Function.prototype.bind.call(Function.prototype.call, Object.prototype.hasOwnProperty);
      function areObjectsEqual(a, b, isEqual, meta) {
        var keysA = keys(a);
        var index = keysA.length;
        if (keys(b).length !== index) {
          return false;
        }
        if (index) {
          var key = void 0;
          while (index-- > 0) {
            key = keysA[index];
            if (key === OWNER) {
              var reactElementA = isReactElement(a);
              var reactElementB = isReactElement(b);
              if ((reactElementA || reactElementB) && reactElementA !== reactElementB) {
                return false;
              }
            }
            if (!hasOwnProperty(b, key) || !isEqual(a[key], b[key], key, key, a, b, meta)) {
              return false;
            }
          }
        }
        return true;
      }
      function areRegExpsEqual(a, b) {
        return a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.unicode === b.unicode && a.sticky === b.sticky && a.lastIndex === b.lastIndex;
      }
      function areSetsEqual(a, b, isEqual, meta) {
        var isValueEqual = a.size === b.size;
        if (isValueEqual && a.size) {
          var matchedIndices_2 = {};
          a.forEach(function(aValue, aKey) {
            if (isValueEqual) {
              var hasMatch_2 = false;
              var matchIndex_1 = 0;
              b.forEach(function(bValue, bKey) {
                if (!hasMatch_2 && !matchedIndices_2[matchIndex_1]) {
                  hasMatch_2 = isEqual(aValue, bValue, aKey, bKey, a, b, meta);
                  if (hasMatch_2) {
                    matchedIndices_2[matchIndex_1] = true;
                  }
                }
                matchIndex_1++;
              });
              isValueEqual = hasMatch_2;
            }
          });
        }
        return isValueEqual;
      }
      var HAS_MAP_SUPPORT = typeof Map === "function";
      var HAS_SET_SUPPORT = typeof Set === "function";
      function createComparator(createIsEqual) {
        var isEqual = typeof createIsEqual === "function" ? createIsEqual(comparator) : function(a, b, indexOrKeyA, indexOrKeyB, parentA, parentB, meta) {
          return comparator(a, b, meta);
        };
        function comparator(a, b, meta) {
          if (a === b) {
            return true;
          }
          if (a && b && typeof a === "object" && typeof b === "object") {
            if (isPlainObject(a) && isPlainObject(b)) {
              return areObjectsEqual(a, b, isEqual, meta);
            }
            var aShape = Array.isArray(a);
            var bShape = Array.isArray(b);
            if (aShape || bShape) {
              return aShape === bShape && areArraysEqual(a, b, isEqual, meta);
            }
            aShape = a instanceof Date;
            bShape = b instanceof Date;
            if (aShape || bShape) {
              return aShape === bShape && sameValueZeroEqual(a.getTime(), b.getTime());
            }
            aShape = a instanceof RegExp;
            bShape = b instanceof RegExp;
            if (aShape || bShape) {
              return aShape === bShape && areRegExpsEqual(a, b);
            }
            if (isPromiseLike(a) || isPromiseLike(b)) {
              return a === b;
            }
            if (HAS_MAP_SUPPORT) {
              aShape = a instanceof Map;
              bShape = b instanceof Map;
              if (aShape || bShape) {
                return aShape === bShape && areMapsEqual(a, b, isEqual, meta);
              }
            }
            if (HAS_SET_SUPPORT) {
              aShape = a instanceof Set;
              bShape = b instanceof Set;
              if (aShape || bShape) {
                return aShape === bShape && areSetsEqual(a, b, isEqual, meta);
              }
            }
            return areObjectsEqual(a, b, isEqual, meta);
          }
          return a !== a && b !== b;
        }
        return comparator;
      }
      var deepEqual2 = createComparator();
      var shallowEqual = createComparator(function() {
        return sameValueZeroEqual;
      });
      var circularDeepEqual = createComparator(createCircularEqualCreator());
      var circularShallowEqual = createComparator(createCircularEqualCreator(sameValueZeroEqual));
      exports2.circularDeepEqual = circularDeepEqual;
      exports2.circularShallowEqual = circularShallowEqual;
      exports2.createCustomEqual = createComparator;
      exports2.deepEqual = deepEqual2;
      exports2.sameValueZeroEqual = sameValueZeroEqual;
      exports2.shallowEqual = shallowEqual;
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

// node_modules/@googlemaps/markerclusterer/dist/index.esm.js
init_react();

// node_modules/supercluster/index.js
init_react();

// node_modules/kdbush/src/index.js
init_react();

// node_modules/kdbush/src/sort.js
init_react();
function sortKD(ids, coords, nodeSize, left, right, depth) {
  if (right - left <= nodeSize)
    return;
  const m = left + right >> 1;
  select(ids, coords, m, left, right, depth % 2);
  sortKD(ids, coords, nodeSize, left, m - 1, depth + 1);
  sortKD(ids, coords, nodeSize, m + 1, right, depth + 1);
}
function select(ids, coords, k, left, right, inc) {
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k - left + 1;
      const z = Math.log(n);
      const s = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      select(ids, coords, k, newLeft, newRight, inc);
    }
    const t = coords[2 * k + inc];
    let i = left;
    let j = right;
    swapItem(ids, coords, left, k);
    if (coords[2 * right + inc] > t)
      swapItem(ids, coords, left, right);
    while (i < j) {
      swapItem(ids, coords, i, j);
      i++;
      j--;
      while (coords[2 * i + inc] < t)
        i++;
      while (coords[2 * j + inc] > t)
        j--;
    }
    if (coords[2 * left + inc] === t)
      swapItem(ids, coords, left, j);
    else {
      j++;
      swapItem(ids, coords, j, right);
    }
    if (j <= k)
      left = j + 1;
    if (k <= j)
      right = j - 1;
  }
}
function swapItem(ids, coords, i, j) {
  swap(ids, i, j);
  swap(coords, 2 * i, 2 * j);
  swap(coords, 2 * i + 1, 2 * j + 1);
}
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

// node_modules/kdbush/src/range.js
init_react();
function range(ids, coords, minX, minY, maxX, maxY, nodeSize) {
  const stack = [0, ids.length - 1, 0];
  const result = [];
  let x, y;
  while (stack.length) {
    const axis = stack.pop();
    const right = stack.pop();
    const left = stack.pop();
    if (right - left <= nodeSize) {
      for (let i = left; i <= right; i++) {
        x = coords[2 * i];
        y = coords[2 * i + 1];
        if (x >= minX && x <= maxX && y >= minY && y <= maxY)
          result.push(ids[i]);
      }
      continue;
    }
    const m = Math.floor((left + right) / 2);
    x = coords[2 * m];
    y = coords[2 * m + 1];
    if (x >= minX && x <= maxX && y >= minY && y <= maxY)
      result.push(ids[m]);
    const nextAxis = (axis + 1) % 2;
    if (axis === 0 ? minX <= x : minY <= y) {
      stack.push(left);
      stack.push(m - 1);
      stack.push(nextAxis);
    }
    if (axis === 0 ? maxX >= x : maxY >= y) {
      stack.push(m + 1);
      stack.push(right);
      stack.push(nextAxis);
    }
  }
  return result;
}

// node_modules/kdbush/src/within.js
init_react();
function within(ids, coords, qx, qy, r, nodeSize) {
  const stack = [0, ids.length - 1, 0];
  const result = [];
  const r2 = r * r;
  while (stack.length) {
    const axis = stack.pop();
    const right = stack.pop();
    const left = stack.pop();
    if (right - left <= nodeSize) {
      for (let i = left; i <= right; i++) {
        if (sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2)
          result.push(ids[i]);
      }
      continue;
    }
    const m = Math.floor((left + right) / 2);
    const x = coords[2 * m];
    const y = coords[2 * m + 1];
    if (sqDist(x, y, qx, qy) <= r2)
      result.push(ids[m]);
    const nextAxis = (axis + 1) % 2;
    if (axis === 0 ? qx - r <= x : qy - r <= y) {
      stack.push(left);
      stack.push(m - 1);
      stack.push(nextAxis);
    }
    if (axis === 0 ? qx + r >= x : qy + r >= y) {
      stack.push(m + 1);
      stack.push(right);
      stack.push(nextAxis);
    }
  }
  return result;
}
function sqDist(ax, ay, bx, by) {
  const dx = ax - bx;
  const dy = ay - by;
  return dx * dx + dy * dy;
}

// node_modules/kdbush/src/index.js
var defaultGetX = (p) => p[0];
var defaultGetY = (p) => p[1];
var KDBush = class {
  constructor(points, getX2 = defaultGetX, getY2 = defaultGetY, nodeSize = 64, ArrayType = Float64Array) {
    this.nodeSize = nodeSize;
    this.points = points;
    const IndexArrayType = points.length < 65536 ? Uint16Array : Uint32Array;
    const ids = this.ids = new IndexArrayType(points.length);
    const coords = this.coords = new ArrayType(points.length * 2);
    for (let i = 0; i < points.length; i++) {
      ids[i] = i;
      coords[2 * i] = getX2(points[i]);
      coords[2 * i + 1] = getY2(points[i]);
    }
    sortKD(ids, coords, nodeSize, 0, ids.length - 1, 0);
  }
  range(minX, minY, maxX, maxY) {
    return range(this.ids, this.coords, minX, minY, maxX, maxY, this.nodeSize);
  }
  within(x, y, r) {
    return within(this.ids, this.coords, x, y, r, this.nodeSize);
  }
};

// node_modules/supercluster/index.js
var defaultOptions = {
  minZoom: 0,
  maxZoom: 16,
  minPoints: 2,
  radius: 40,
  extent: 512,
  nodeSize: 64,
  log: false,
  generateId: false,
  reduce: null,
  map: (props) => props
};
var fround = Math.fround || ((tmp) => (x) => {
  tmp[0] = +x;
  return tmp[0];
})(new Float32Array(1));
var Supercluster = class {
  constructor(options) {
    this.options = extend(Object.create(defaultOptions), options);
    this.trees = new Array(this.options.maxZoom + 1);
  }
  load(points) {
    const { log, minZoom, maxZoom, nodeSize } = this.options;
    if (log)
      console.time("total time");
    const timerId = `prepare ${points.length} points`;
    if (log)
      console.time(timerId);
    this.points = points;
    let clusters = [];
    for (let i = 0; i < points.length; i++) {
      if (!points[i].geometry)
        continue;
      clusters.push(createPointCluster(points[i], i));
    }
    this.trees[maxZoom + 1] = new KDBush(clusters, getX, getY, nodeSize, Float32Array);
    if (log)
      console.timeEnd(timerId);
    for (let z = maxZoom; z >= minZoom; z--) {
      const now = +Date.now();
      clusters = this._cluster(clusters, z);
      this.trees[z] = new KDBush(clusters, getX, getY, nodeSize, Float32Array);
      if (log)
        console.log("z%d: %d clusters in %dms", z, clusters.length, +Date.now() - now);
    }
    if (log)
      console.timeEnd("total time");
    return this;
  }
  getClusters(bbox, zoom) {
    let minLng = ((bbox[0] + 180) % 360 + 360) % 360 - 180;
    const minLat = Math.max(-90, Math.min(90, bbox[1]));
    let maxLng = bbox[2] === 180 ? 180 : ((bbox[2] + 180) % 360 + 360) % 360 - 180;
    const maxLat = Math.max(-90, Math.min(90, bbox[3]));
    if (bbox[2] - bbox[0] >= 360) {
      minLng = -180;
      maxLng = 180;
    } else if (minLng > maxLng) {
      const easternHem = this.getClusters([minLng, minLat, 180, maxLat], zoom);
      const westernHem = this.getClusters([-180, minLat, maxLng, maxLat], zoom);
      return easternHem.concat(westernHem);
    }
    const tree = this.trees[this._limitZoom(zoom)];
    const ids = tree.range(lngX(minLng), latY(maxLat), lngX(maxLng), latY(minLat));
    const clusters = [];
    for (const id of ids) {
      const c = tree.points[id];
      clusters.push(c.numPoints ? getClusterJSON(c) : this.points[c.index]);
    }
    return clusters;
  }
  getChildren(clusterId) {
    const originId = this._getOriginId(clusterId);
    const originZoom = this._getOriginZoom(clusterId);
    const errorMsg = "No cluster with the specified id.";
    const index = this.trees[originZoom];
    if (!index)
      throw new Error(errorMsg);
    const origin = index.points[originId];
    if (!origin)
      throw new Error(errorMsg);
    const r = this.options.radius / (this.options.extent * Math.pow(2, originZoom - 1));
    const ids = index.within(origin.x, origin.y, r);
    const children = [];
    for (const id of ids) {
      const c = index.points[id];
      if (c.parentId === clusterId) {
        children.push(c.numPoints ? getClusterJSON(c) : this.points[c.index]);
      }
    }
    if (children.length === 0)
      throw new Error(errorMsg);
    return children;
  }
  getLeaves(clusterId, limit, offset) {
    limit = limit || 10;
    offset = offset || 0;
    const leaves = [];
    this._appendLeaves(leaves, clusterId, limit, offset, 0);
    return leaves;
  }
  getTile(z, x, y) {
    const tree = this.trees[this._limitZoom(z)];
    const z2 = Math.pow(2, z);
    const { extent, radius } = this.options;
    const p = radius / extent;
    const top = (y - p) / z2;
    const bottom = (y + 1 + p) / z2;
    const tile = {
      features: []
    };
    this._addTileFeatures(tree.range((x - p) / z2, top, (x + 1 + p) / z2, bottom), tree.points, x, y, z2, tile);
    if (x === 0) {
      this._addTileFeatures(tree.range(1 - p / z2, top, 1, bottom), tree.points, z2, y, z2, tile);
    }
    if (x === z2 - 1) {
      this._addTileFeatures(tree.range(0, top, p / z2, bottom), tree.points, -1, y, z2, tile);
    }
    return tile.features.length ? tile : null;
  }
  getClusterExpansionZoom(clusterId) {
    let expansionZoom = this._getOriginZoom(clusterId) - 1;
    while (expansionZoom <= this.options.maxZoom) {
      const children = this.getChildren(clusterId);
      expansionZoom++;
      if (children.length !== 1)
        break;
      clusterId = children[0].properties.cluster_id;
    }
    return expansionZoom;
  }
  _appendLeaves(result, clusterId, limit, offset, skipped) {
    const children = this.getChildren(clusterId);
    for (const child of children) {
      const props = child.properties;
      if (props && props.cluster) {
        if (skipped + props.point_count <= offset) {
          skipped += props.point_count;
        } else {
          skipped = this._appendLeaves(result, props.cluster_id, limit, offset, skipped);
        }
      } else if (skipped < offset) {
        skipped++;
      } else {
        result.push(child);
      }
      if (result.length === limit)
        break;
    }
    return skipped;
  }
  _addTileFeatures(ids, points, x, y, z2, tile) {
    for (const i of ids) {
      const c = points[i];
      const isCluster = c.numPoints;
      let tags, px, py;
      if (isCluster) {
        tags = getClusterProperties(c);
        px = c.x;
        py = c.y;
      } else {
        const p = this.points[c.index];
        tags = p.properties;
        px = lngX(p.geometry.coordinates[0]);
        py = latY(p.geometry.coordinates[1]);
      }
      const f = {
        type: 1,
        geometry: [[
          Math.round(this.options.extent * (px * z2 - x)),
          Math.round(this.options.extent * (py * z2 - y))
        ]],
        tags
      };
      let id;
      if (isCluster) {
        id = c.id;
      } else if (this.options.generateId) {
        id = c.index;
      } else if (this.points[c.index].id) {
        id = this.points[c.index].id;
      }
      if (id !== void 0)
        f.id = id;
      tile.features.push(f);
    }
  }
  _limitZoom(z) {
    return Math.max(this.options.minZoom, Math.min(Math.floor(+z), this.options.maxZoom + 1));
  }
  _cluster(points, zoom) {
    const clusters = [];
    const { radius, extent, reduce, minPoints } = this.options;
    const r = radius / (extent * Math.pow(2, zoom));
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      if (p.zoom <= zoom)
        continue;
      p.zoom = zoom;
      const tree = this.trees[zoom + 1];
      const neighborIds = tree.within(p.x, p.y, r);
      const numPointsOrigin = p.numPoints || 1;
      let numPoints = numPointsOrigin;
      for (const neighborId of neighborIds) {
        const b = tree.points[neighborId];
        if (b.zoom > zoom)
          numPoints += b.numPoints || 1;
      }
      if (numPoints > numPointsOrigin && numPoints >= minPoints) {
        let wx = p.x * numPointsOrigin;
        let wy = p.y * numPointsOrigin;
        let clusterProperties = reduce && numPointsOrigin > 1 ? this._map(p, true) : null;
        const id = (i << 5) + (zoom + 1) + this.points.length;
        for (const neighborId of neighborIds) {
          const b = tree.points[neighborId];
          if (b.zoom <= zoom)
            continue;
          b.zoom = zoom;
          const numPoints2 = b.numPoints || 1;
          wx += b.x * numPoints2;
          wy += b.y * numPoints2;
          b.parentId = id;
          if (reduce) {
            if (!clusterProperties)
              clusterProperties = this._map(p, true);
            reduce(clusterProperties, this._map(b));
          }
        }
        p.parentId = id;
        clusters.push(createCluster(wx / numPoints, wy / numPoints, id, numPoints, clusterProperties));
      } else {
        clusters.push(p);
        if (numPoints > 1) {
          for (const neighborId of neighborIds) {
            const b = tree.points[neighborId];
            if (b.zoom <= zoom)
              continue;
            b.zoom = zoom;
            clusters.push(b);
          }
        }
      }
    }
    return clusters;
  }
  _getOriginId(clusterId) {
    return clusterId - this.points.length >> 5;
  }
  _getOriginZoom(clusterId) {
    return (clusterId - this.points.length) % 32;
  }
  _map(point, clone) {
    if (point.numPoints) {
      return clone ? extend({}, point.properties) : point.properties;
    }
    const original = this.points[point.index].properties;
    const result = this.options.map(original);
    return clone && result === original ? extend({}, result) : result;
  }
};
function createCluster(x, y, id, numPoints, properties) {
  return {
    x: fround(x),
    y: fround(y),
    zoom: Infinity,
    id,
    parentId: -1,
    numPoints,
    properties
  };
}
function createPointCluster(p, id) {
  const [x, y] = p.geometry.coordinates;
  return {
    x: fround(lngX(x)),
    y: fround(latY(y)),
    zoom: Infinity,
    index: id,
    parentId: -1
  };
}
function getClusterJSON(cluster) {
  return {
    type: "Feature",
    id: cluster.id,
    properties: getClusterProperties(cluster),
    geometry: {
      type: "Point",
      coordinates: [xLng(cluster.x), yLat(cluster.y)]
    }
  };
}
function getClusterProperties(cluster) {
  const count = cluster.numPoints;
  const abbrev = count >= 1e4 ? `${Math.round(count / 1e3)}k` : count >= 1e3 ? `${Math.round(count / 100) / 10}k` : count;
  return extend(extend({}, cluster.properties), {
    cluster: true,
    cluster_id: cluster.id,
    point_count: count,
    point_count_abbreviated: abbrev
  });
}
function lngX(lng) {
  return lng / 360 + 0.5;
}
function latY(lat) {
  const sin = Math.sin(lat * Math.PI / 180);
  const y = 0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI;
  return y < 0 ? 0 : y > 1 ? 1 : y;
}
function xLng(x) {
  return (x - 0.5) * 360;
}
function yLat(y) {
  const y2 = (180 - y * 360) * Math.PI / 180;
  return 360 * Math.atan(Math.exp(y2)) / Math.PI - 90;
}
function extend(dest, src) {
  for (const id in src)
    dest[id] = src[id];
  return dest;
}
function getX(p) {
  return p.x;
}
function getY(p) {
  return p.y;
}

// node_modules/@googlemaps/markerclusterer/dist/index.esm.js
var import_fast_equals = __toESM(require_fast_equals());
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
var Cluster = class {
  constructor({ markers, position }) {
    this.markers = markers;
    if (position) {
      if (position instanceof google.maps.LatLng) {
        this._position = position;
      } else {
        this._position = new google.maps.LatLng(position);
      }
    }
  }
  get bounds() {
    if (this.markers.length === 0 && !this._position) {
      return void 0;
    }
    return this.markers.reduce((bounds, marker) => {
      return bounds.extend(marker.getPosition());
    }, new google.maps.LatLngBounds(this._position, this._position));
  }
  get position() {
    return this._position || this.bounds.getCenter();
  }
  get count() {
    return this.markers.filter((m) => m.getVisible()).length;
  }
  push(marker) {
    this.markers.push(marker);
  }
  delete() {
    if (this.marker) {
      this.marker.setMap(null);
      delete this.marker;
    }
    this.markers.length = 0;
  }
};
var AbstractAlgorithm = class {
  constructor({ maxZoom = 16 }) {
    this.maxZoom = maxZoom;
  }
  noop({ markers }) {
    return noop(markers);
  }
};
var noop = (markers) => {
  const clusters = markers.map((marker) => new Cluster({
    position: marker.getPosition(),
    markers: [marker]
  }));
  return clusters;
};
var SuperClusterAlgorithm = class extends AbstractAlgorithm {
  constructor(_a) {
    var { maxZoom, radius = 60 } = _a, options = __rest(_a, ["maxZoom", "radius"]);
    super({ maxZoom });
    this.superCluster = new Supercluster(Object.assign({ maxZoom: this.maxZoom, radius }, options));
    this.state = { zoom: null };
  }
  calculate(input) {
    let changed = false;
    if (!(0, import_fast_equals.deepEqual)(input.markers, this.markers)) {
      changed = true;
      this.markers = [...input.markers];
      const points = this.markers.map((marker) => {
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [
              marker.getPosition().lng(),
              marker.getPosition().lat()
            ]
          },
          properties: { marker }
        };
      });
      this.superCluster.load(points);
    }
    const state = { zoom: input.map.getZoom() };
    if (!changed) {
      if (this.state.zoom > this.maxZoom && state.zoom > this.maxZoom)
        ;
      else {
        changed = changed || !(0, import_fast_equals.deepEqual)(this.state, state);
      }
    }
    this.state = state;
    if (changed) {
      this.clusters = this.cluster(input);
    }
    return { clusters: this.clusters, changed };
  }
  cluster({ map }) {
    return this.superCluster.getClusters([-180, -90, 180, 90], Math.round(map.getZoom())).map(this.transformCluster.bind(this));
  }
  transformCluster({ geometry: { coordinates: [lng, lat] }, properties }) {
    if (properties.cluster) {
      return new Cluster({
        markers: this.superCluster.getLeaves(properties.cluster_id, Infinity).map((leaf) => leaf.properties.marker),
        position: new google.maps.LatLng({ lat, lng })
      });
    } else {
      const marker = properties.marker;
      return new Cluster({
        markers: [marker],
        position: marker.getPosition()
      });
    }
  }
};
var ClusterStats = class {
  constructor(markers, clusters) {
    this.markers = { sum: markers.length };
    const clusterMarkerCounts = clusters.map((a) => a.count);
    const clusterMarkerSum = clusterMarkerCounts.reduce((a, b) => a + b, 0);
    this.clusters = {
      count: clusters.length,
      markers: {
        mean: clusterMarkerSum / clusters.length,
        sum: clusterMarkerSum,
        min: Math.min(...clusterMarkerCounts),
        max: Math.max(...clusterMarkerCounts)
      }
    };
  }
};
var DefaultRenderer = class {
  render({ count, position }, stats) {
    const color = count > Math.max(10, stats.clusters.markers.mean) ? "#ff0000" : "#0000ff";
    const svg = window.btoa(`
  <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
    <circle cx="120" cy="120" opacity=".6" r="70" />
    <circle cx="120" cy="120" opacity=".3" r="90" />
    <circle cx="120" cy="120" opacity=".2" r="110" />
  </svg>`);
    return new google.maps.Marker({
      position,
      icon: {
        url: `data:image/svg+xml;base64,${svg}`,
        scaledSize: new google.maps.Size(45, 45)
      },
      label: {
        text: String(count),
        color: "rgba(255,255,255,0.9)",
        fontSize: "12px"
      },
      title: `Cluster of ${count} markers`,
      zIndex: Number(google.maps.Marker.MAX_ZINDEX) + count
    });
  }
};
function extend2(type1, type2) {
  for (let property in type2.prototype) {
    type1.prototype[property] = type2.prototype[property];
  }
}
var OverlayViewSafe = class {
  constructor() {
    extend2(OverlayViewSafe, google.maps.OverlayView);
  }
};
var MarkerClustererEvents;
(function(MarkerClustererEvents2) {
  MarkerClustererEvents2["CLUSTERING_BEGIN"] = "clusteringbegin";
  MarkerClustererEvents2["CLUSTERING_END"] = "clusteringend";
  MarkerClustererEvents2["CLUSTER_CLICK"] = "click";
})(MarkerClustererEvents || (MarkerClustererEvents = {}));
var defaultOnClusterClickHandler = (_, cluster, map) => {
  map.fitBounds(cluster.bounds);
};
var MarkerClusterer = class extends OverlayViewSafe {
  constructor({ map, markers = [], algorithm = new SuperClusterAlgorithm({}), renderer = new DefaultRenderer(), onClusterClick = defaultOnClusterClickHandler }) {
    super();
    this.markers = [...markers];
    this.clusters = [];
    this.algorithm = algorithm;
    this.renderer = renderer;
    this.onClusterClick = onClusterClick;
    if (map) {
      this.setMap(map);
    }
  }
  addMarker(marker, noDraw) {
    if (this.markers.includes(marker)) {
      return;
    }
    this.markers.push(marker);
    if (!noDraw) {
      this.render();
    }
  }
  addMarkers(markers, noDraw) {
    markers.forEach((marker) => {
      this.addMarker(marker, true);
    });
    if (!noDraw) {
      this.render();
    }
  }
  removeMarker(marker, noDraw) {
    const index = this.markers.indexOf(marker);
    if (index === -1) {
      return false;
    }
    marker.setMap(null);
    this.markers.splice(index, 1);
    if (!noDraw) {
      this.render();
    }
    return true;
  }
  removeMarkers(markers, noDraw) {
    let removed = false;
    markers.forEach((marker) => {
      removed = this.removeMarker(marker, true) || removed;
    });
    if (removed && !noDraw) {
      this.render();
    }
    return removed;
  }
  clearMarkers(noDraw) {
    this.markers.length = 0;
    if (!noDraw) {
      this.render();
    }
  }
  render() {
    const map = this.getMap();
    if (map instanceof google.maps.Map && this.getProjection()) {
      google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_BEGIN, this);
      const { clusters, changed } = this.algorithm.calculate({
        markers: this.markers,
        map,
        mapCanvasProjection: this.getProjection()
      });
      if (changed || changed == void 0) {
        this.reset();
        this.clusters = clusters;
        this.renderClusters();
      }
      google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_END, this);
    }
  }
  onAdd() {
    this.idleListener = this.getMap().addListener("idle", this.render.bind(this));
    this.render();
  }
  onRemove() {
    google.maps.event.removeListener(this.idleListener);
    this.reset();
  }
  reset() {
    this.markers.forEach((marker) => marker.setMap(null));
    this.clusters.forEach((cluster) => cluster.delete());
    this.clusters = [];
  }
  renderClusters() {
    const stats = new ClusterStats(this.markers, this.clusters);
    const map = this.getMap();
    this.clusters.forEach((cluster) => {
      if (cluster.markers.length === 1) {
        cluster.marker = cluster.markers[0];
      } else {
        cluster.marker = this.renderer.render(cluster, stats);
        if (this.onClusterClick) {
          cluster.marker.addListener("click", (event) => {
            google.maps.event.trigger(this, MarkerClustererEvents.CLUSTER_CLICK, cluster);
            this.onClusterClick(event, cluster, map);
          });
        }
      }
      cluster.marker.setMap(map);
    });
  }
};

// app/components/GoogleMap.tsx
var renderMap = (status) => {
  if (status === import_react_wrapper.Status.FAILURE)
    return /* @__PURE__ */ React.createElement("p", null, "Error");
  return /* @__PURE__ */ React.createElement("p", null, "Loading..");
};
var DrawMap = ({ pins }) => {
  const ref = (0, import_react.useRef)(null);
  const [map, setMap] = (0, import_react.useState)();
  (0, import_react.useEffect)(() => {
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
      console.log("pin clicked");
    });
    return marker;
  });
  new MarkerClusterer({ markers, map });
  return /* @__PURE__ */ React.createElement("div", {
    ref,
    style: { width: 800, height: 600 }
  });
};
var GoogleMap = ({ pins }) => {
  const MapApiKey = (0, import_react.useContext)(MapContext);
  return /* @__PURE__ */ React.createElement(import_react_wrapper.Wrapper, {
    apiKey: MapApiKey,
    render: renderMap
  }, /* @__PURE__ */ React.createElement(DrawMap, {
    pins
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
  }));
}
export {
  Index as default
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
//# sourceMappingURL=/build/routes/index-7JZJZGGY.js.map
