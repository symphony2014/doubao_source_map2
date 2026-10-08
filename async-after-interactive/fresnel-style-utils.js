// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive.9af05afc.js
         * chunkId: 87048
         * moduleId: 751107
         */
module.exports = function (module, exports, require) {
  exports.propKey = function (e) {
    return Object.keys(e)[0];
  };
  exports.intersection = function (e, t) {
    if (t) {
      return e.filter(function (e) {
        return t.indexOf(e) >= 0;
      });
    } else {
      return i(e);
    }
  };
  exports.createRuleSet = function (e, t) {
    return `@media ${t}{.${e}{display:none!important;}}`;
  };
  exports.createClassName = function () {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    return ["fresnel"].concat(i(t.reduce(function (e, t) {
      if (Array.isArray(t)) {
        return i(e).concat(i(t));
      } else {
        return i(e).concat([t]);
      }
    }, []))).join("-");
  };
  exports.castBreakpointsToIntegers = function (e) {
    var t = Object.keys(e);
    return t.reduce(function (n, r, i) {
      return function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? Object(arguments[t]) : {};
          var r = Object.keys(n);
          if (typeof Object.getOwnPropertySymbols == "function") {
            r.push.apply(r, Object.getOwnPropertySymbols(n).filter(function (e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            }));
          }
          r.forEach(function (t) {
            a(e, t, n[t]);
          });
        }
        return e;
      }({}, n, a({}, t[i], Math.round(Number(e[r]))));
    }, {});
  };
  exports.memoize = function (e) {
    var t = {};
    return function () {
      var n = arguments.length;
      var r = Array(n);
      var a = 0;
      for (; a < n; a++) {
        r[a] = arguments[a];
      }
      var i = JSON.stringify(r);
      t[i] ||= e.apply(undefined, r);
      return t[i];
    };
  };
  exports.useIsFirstRender = function () {
    var e = reactCoreLibraryReexport.useRef(true);
    return !!e.current && (e.current = false, true);
  };
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function a(e, t, n) {
    if (t in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  function i(e) {
    return function (e) {
      if (Array.isArray(e)) {
        return o(e);
      }
    }(e) || function (e) {
      if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) {
        return Array.from(e);
      }
    }(e) || function (e, t) {
      if (e) {
        if (typeof e == "string") {
          return o(e, undefined);
        }
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor) {
          n = e.constructor.name;
        }
        if (n === "Map" || n === "Set") {
          return Array.from(e);
        }
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
          return o(e, t);
        }
      }
    }(e) || function () {
      throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function o(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    var n = 0;
    var r = Array(t);
    for (; n < t; n++) {
      r[n] = e[n];
    }
    return r;
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}