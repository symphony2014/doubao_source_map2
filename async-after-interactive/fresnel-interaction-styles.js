// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'fresnelStyleUtils'
// - Resolved require(751107) to 'fresnel-style-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive.9af05afc.js
         * chunkId: 87048
         * moduleId: 554721
         */
module.exports = function (module, exports, require) {
  exports.Interactions = exports.InteractionKey = undefined;
  var r;
  var fresnelStyleUtils = require("fresnel-style-utils") /*id: 751107*/;
  function i(e, t) {
    return function (e) {
      if (Array.isArray(e)) {
        return e;
      }
    }(e) || function (e, t) {
      var n;
      var r;
      var a = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
      if (a != null) {
        var i = [];
        var o = true;
        var s = false;
        try {
          for (a = a.call(e); !(o = (n = a.next()).done) && (i.push(n.value), !t || i.length !== t); o = true);
        } catch (e) {
          s = true;
          r = e;
        } finally {
          try {
            if (!o && a.return != null) {
              a.return();
            }
          } finally {
            if (s) {
              throw r;
            }
          }
        }
        return i;
      }
    }(e, t) || o(e, t) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function o(e, t) {
    if (e) {
      if (typeof e == "string") {
        return s(e, t);
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
  exports.InteractionKey = r;
  (r || (exports.InteractionKey = r = {})).interaction = "interaction";
  var u = function () {
    function e(t) {
      (function (e, t) {
        if (!(e instanceof t)) {
          throw TypeError("Cannot call a class as a function");
        }
      })(this, e);
      d(this, "_interactions", undefined);
      this._interactions = t;
    }
    c(e, null, [{
      key: "validKeys",
      value: function () {
        return [r.interaction];
      }
    }]);
    c(e, [{
      key: "toRuleSets",
      value: function () {
        return Object.entries(this._interactions).reduce(function (e, t) {
          var n = i(t, 2);
          var l = n[0];
          var c = n[1];
          return (function (e) {
            if (Array.isArray(e)) {
              return s(e);
            }
          }(e) || function (e) {
            if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) {
              return Array.from(e);
            }
          }(e) || o(e) || function () {
            throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }()).concat([fresnelStyleUtils.createRuleSet(fresnelStyleUtils.createClassName(r.interaction, l), c)]);
        }, []);
      }
    }, {
      key: "shouldRenderMediaQuery",
      value: function (e, t) {
        return !!t && !!t.includes(e);
      }
    }, {
      key: "interactions",
      get: function () {
        return Object.keys(this._interactions);
      }
    }, {
      key: "dynamicResponsiveMediaQueries",
      get: function () {
        return Object.entries(this._interactions).reduce(function (e, t) {
          var n = i(t, 2);
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
          }({}, e, d({}, n[0], n[1]));
        }, {});
      }
    }]);
    return e;
  }();
  exports.Interactions = u;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}