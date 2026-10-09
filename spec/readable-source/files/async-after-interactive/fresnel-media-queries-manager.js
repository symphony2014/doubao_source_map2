// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'fresnelBreakpointManager'
// - Resolved require(207524) to 'fresnel-breakpoint-manager'
// - Renamed variable 'a' to 'fresnelInteractionStyles'
// - Resolved require(554721) to 'fresnel-interaction-styles'
// - Renamed variable 'i' to 'fresnelStyleUtils'
// - Resolved require(751107) to 'fresnel-style-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive.9af05afc.js
         * chunkId: 87048
         * moduleId: 694729
         */
module.exports = function (module, exports, require) {
  exports.MediaQueries = undefined;
  var fresnelBreakpointManager = require("fresnel-breakpoint-manager") /*id: 207524*/;
  var fresnelInteractionStyles = require("fresnel-interaction-styles") /*id: 554721*/;
  var fresnelStyleUtils = require("fresnel-style-utils") /*id: 751107*/;
  function o(e) {
    return function (e) {
      if (Array.isArray(e)) {
        return s(e);
      }
    }(e) || function (e) {
      if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) {
        return Array.from(e);
      }
    }(e) || function (e, t) {
      if (e) {
        if (typeof e == "string") {
          return s(e, undefined);
        }
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor) {
          n = e.constructor.name;
        }
        if (n === "Map" || n === "Set") {
          return Array.from(e);
        }
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
          return s(e, t);
        }
      }
    }(e) || function () {
      throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function s(e, t) {
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
  function l(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || false;
      r.configurable = true;
      if ("value" in r) {
        r.writable = true;
      }
      Object.defineProperty(e, r.key, r);
    }
  }
  function c(e, t, n) {
    if (t) {
      l(e.prototype, t);
    }
    if (n) {
      l(e, n);
    }
    return e;
  }
  function d(e, t, n) {
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
  var u = function () {
    function e(t, n) {
      var i = this;
      (function (e, t) {
        if (!(e instanceof t)) {
          throw TypeError("Cannot call a class as a function");
        }
      })(this, e);
      d(this, "_breakpoints", undefined);
      d(this, "_interactions", undefined);
      d(this, "toStyle", function (e) {
        return [".fresnel-container{margin:0;padding:0;}"].concat(o(i._breakpoints.toRuleSets(e)), o(i._interactions.toRuleSets())).join("\n");
      });
      this._breakpoints = new fresnelBreakpointManager.Breakpoints(t);
      this._interactions = new fresnelInteractionStyles.Interactions(n || {});
    }
    c(e, null, [{
      key: "validKeys",
      value: function () {
        return o(fresnelBreakpointManager.Breakpoints.validKeys()).concat(o(fresnelInteractionStyles.Interactions.validKeys()));
      }
    }]);
    c(e, [{
      key: "shouldRenderMediaQuery",
      value: function (e, t) {
        var n = e.interaction;
        var r = function (e, t) {
          if (e == null) {
            return {};
          }
          var n;
          var r;
          var a = function (e, t) {
            if (e == null) {
              return {};
            }
            var n;
            var r;
            var a = {};
            var i = Object.keys(e);
            for (r = 0; r < i.length; r++) {
              n = i[r];
              if (!(t.indexOf(n) >= 0)) {
                a[n] = e[n];
              }
            }
            return a;
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) {
              n = i[r];
              if (!(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n)) {
                a[n] = e[n];
              }
            }
          }
          return a;
        }(e, ["interaction"]);
        if (n) {
          return this._interactions.shouldRenderMediaQuery(n, t);
        }
        var a = fresnelStyleUtils.intersection(t, this._breakpoints.sortedBreakpoints);
        return this._breakpoints.shouldRenderMediaQuery(r, a);
      }
    }, {
      key: "breakpoints",
      get: function () {
        return this._breakpoints;
      }
    }, {
      key: "mediaQueryTypes",
      get: function () {
        return o(this._breakpoints.sortedBreakpoints).concat(o(this._interactions.interactions));
      }
    }, {
      key: "dynamicResponsiveMediaQueries",
      get: function () {
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
              d(e, t, n[t]);
            });
          }
          return e;
        }({}, this._breakpoints.dynamicResponsiveMediaQueries, this._interactions.dynamicResponsiveMediaQueries);
      }
    }]);
    return e;
  }();
  exports.MediaQueries = u;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}