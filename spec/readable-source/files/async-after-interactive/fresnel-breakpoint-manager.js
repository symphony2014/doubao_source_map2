// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'fresnelStyleUtils'
// - Resolved require(751107) to 'fresnel-style-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive.9af05afc.js
         * chunkId: 87048
         * moduleId: 207524
         */
module.exports = function (module, exports, require) {
  exports.Breakpoints = exports.BreakpointConstraint = undefined;
  var r;
  var a;
  var fresnelStyleUtils = require("fresnel-style-utils") /*id: 751107*/;
  function o(e) {
    return function (e) {
      if (Array.isArray(e)) {
        return c(e);
      }
    }(e) || function (e) {
      if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) {
        return Array.from(e);
      }
    }(e) || l(e) || function () {
      throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function s(e, t) {
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
    }(e, t) || l(e, t) || function () {
      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function l(e, t) {
    if (e) {
      if (typeof e == "string") {
        return c(e, t);
      }
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if (n === "Object" && e.constructor) {
        n = e.constructor.name;
      }
      if (n === "Map" || n === "Set") {
        return Array.from(e);
      }
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
        return c(e, t);
      }
    }
  }
  function c(e, t) {
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
  function d(e, t) {
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
  function u(e, t, n) {
    if (t) {
      d(e.prototype, t);
    }
    if (n) {
      d(e, n);
    }
    return e;
  }
  function f(e, t, n) {
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
  exports.BreakpointConstraint = a;
  (r = a || (exports.BreakpointConstraint = a = {})).at = "at";
  r.lessThan = "lessThan";
  r.greaterThan = "greaterThan";
  r.greaterThanOrEqual = "greaterThanOrEqual";
  r.between = "between";
  var m = function () {
    function e(t) {
      var n;
      var r = this;
      (function (e, t) {
        if (!(e instanceof t)) {
          throw TypeError("Cannot call a class as a function");
        }
      })(this, e);
      f(this, "_sortedBreakpoints", undefined);
      f(this, "_breakpoints", undefined);
      f(this, "_mediaQueries", undefined);
      f(this, "findBreakpointsForWidths", function (e, t) {
        var n = r.findBreakpointAtWidth(e);
        if (n) {
          var a = r.findBreakpointAtWidth(t);
          if (a && n !== a) {
            return r._sortedBreakpoints.slice(r._sortedBreakpoints.indexOf(n), r._sortedBreakpoints.indexOf(a) + 1);
          } else {
            return [n];
          }
        }
      });
      f(this, "findBreakpointAtWidth", function (e) {
        return r._sortedBreakpoints.find(function (t, n) {
          var a = r._sortedBreakpoints[n + 1];
          if (a) {
            return e >= r._breakpoints[t] && e < r._breakpoints[a];
          } else {
            return e >= r._breakpoints[t];
          }
        });
      });
      f(this, "valuesWithBreakpointProps", function (e) {
        var t;
        var n = e.length;
        var a = [];
        r._sortedBreakpoints.forEach(function (r, i) {
          var o = e[i];
          if (i < n && (!t || t[0] !== o)) {
            t = [o, [r]];
            a.push(t);
          } else {
            t[1].push(r);
          }
        });
        return a.map(function (e, t) {
          var n = s(e, 2);
          var r = n[0];
          var i = n[1];
          var o = {};
          if (t === a.length - 1) {
            o.greaterThanOrEqual = i[0];
          } else if (i.length === 1) {
            o.at = i[0];
          } else {
            o.between = [i[0], a[t + 1][1][0]];
          }
          return [r, o];
        });
      });
      this._breakpoints = t;
      this._sortedBreakpoints = Object.keys(t).map(function (e) {
        return [e, t[e]];
      }).sort(function (e, t) {
        if (e[1] < t[1]) {
          return -1;
        } else {
          return 1;
        }
      }).map(function (e) {
        return e[0];
      });
      var i = this._sortedBreakpoints.slice(0, -1).reduce(function (e, t, n) {
        return o(e).concat(o(r._sortedBreakpoints.slice(n + 1).map(function (e) {
          return [t, e];
        })));
      }, []);
      this._mediaQueries = (f(n = {}, a.at, this._createBreakpointQueries(a.at, this._sortedBreakpoints)), f(n, a.lessThan, this._createBreakpointQueries(a.lessThan, this._sortedBreakpoints.slice(1))), f(n, a.greaterThan, this._createBreakpointQueries(a.greaterThan, this._sortedBreakpoints.slice(0, -1))), f(n, a.greaterThanOrEqual, this._createBreakpointQueries(a.greaterThanOrEqual, this._sortedBreakpoints)), f(n, a.between, this._createBreakpointQueries(a.between, i)), n);
    }
    u(e, null, [{
      key: "validKeys",
      value: function () {
        return [a.at, a.lessThan, a.greaterThan, a.greaterThanOrEqual, a.between];
      }
    }]);
    u(e, [{
      key: "toVisibleAtBreakpointSet",
      value: function (e) {
        if ((e = this._normalizeProps(e)).lessThan) {
          var t = this.sortedBreakpoints.findIndex(function (t) {
            return t === e.lessThan;
          });
          return this.sortedBreakpoints.slice(0, t);
        }
        if (e.greaterThan) {
          var n = this.sortedBreakpoints.findIndex(function (t) {
            return t === e.greaterThan;
          });
          return this.sortedBreakpoints.slice(n + 1);
        }
        if (e.greaterThanOrEqual) {
          var r = this.sortedBreakpoints.findIndex(function (t) {
            return t === e.greaterThanOrEqual;
          });
          return this.sortedBreakpoints.slice(r);
        }
        if (e.between) {
          var a = e.between;
          var i = this.sortedBreakpoints.findIndex(function (e) {
            return e === a[0];
          });
          var o = this.sortedBreakpoints.findIndex(function (e) {
            return e === a[1];
          });
          return this.sortedBreakpoints.slice(i, o);
        }
        return [];
      }
    }, {
      key: "toRuleSets",
      value: function () {
        var t = this;
        var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : e.validKeys();
        return Object.entries(n.reduce(function (e, n) {
          e[n] = t._mediaQueries[n];
          return e;
        }, {})).reduce(function (e, t) {
          var n = s(t, 2);
          var r = n[0];
          n[1].forEach(function (t, n) {
            e.push(fresnelStyleUtils.createRuleSet(fresnelStyleUtils.createClassName(r, n), `not all and ${t}`));
          });
          return e;
        }, []);
      }
    }, {
      key: "shouldRenderMediaQuery",
      value: function (e, t) {
        var n = this;
        if ((e = this._normalizeProps(e)).lessThan) {
          var r = this._breakpoints[e.lessThan];
          return Math.min.apply(Math, o(t.map(function (e) {
            return n._breakpoints[e];
          }))) < r;
        }
        if (e.greaterThan) {
          var a = this._breakpoints[this._findNextBreakpoint(e.greaterThan)];
          return Math.max.apply(Math, o(t.map(function (e) {
            return n._breakpoints[e];
          }))) >= a;
        }
        if (e.greaterThanOrEqual) {
          var i = this._breakpoints[e.greaterThanOrEqual];
          return Math.max.apply(Math, o(t.map(function (e) {
            return n._breakpoints[e];
          }))) >= i;
        }
        if (e.between) {
          var s = this._breakpoints[e.between[0]];
          var l = this._breakpoints[e.between[1]];
          var c = t.map(function (e) {
            return n._breakpoints[e];
          });
          return !(Math.max.apply(Math, o(c)) < s) && !(Math.min.apply(Math, o(c)) >= l);
        }
        return false;
      }
    }, {
      key: "_normalizeProps",
      value: function (e) {
        if (e.at) {
          var t = this._sortedBreakpoints.indexOf(e.at);
          var n = this._sortedBreakpoints[t + 1];
          if (n) {
            return {
              between: [e.at, n]
            };
          } else {
            return {
              greaterThanOrEqual: e.at
            };
          }
        }
        return e;
      }
    }, {
      key: "_createBreakpointQuery",
      value: function (e) {
        if ((e = this._normalizeProps(e)).lessThan) {
          var t = this._breakpoints[e.lessThan];
          return `(max-width:${t - 0.02}px)`;
        }
        if (e.greaterThan) {
          var n = this._breakpoints[this._findNextBreakpoint(e.greaterThan)];
          return `(min-width:${n}px)`;
        }
        if (e.greaterThanOrEqual) {
          var r = this._breakpoints[e.greaterThanOrEqual];
          return `(min-width:${r}px)`;
        }
        if (e.between) {
          var a = this._breakpoints[e.between[0]];
          var i = this._breakpoints[e.between[1]];
          return `(min-width:${a}px) and (max-width:${i - 0.02}px)`;
        }
        throw Error(`Unexpected breakpoint props: ${JSON.stringify(e)}`);
      }
    }, {
      key: "_createBreakpointQueries",
      value: function (e, t) {
        var n = this;
        return t.reduce(function (t, r) {
          t.set(Array.isArray(r) ? r.join("-") : r, n._createBreakpointQuery(f({}, e, r)));
          return t;
        }, new Map());
      }
    }, {
      key: "_findNextBreakpoint",
      value: function (e) {
        var t = this._sortedBreakpoints[this._sortedBreakpoints.indexOf(e) + 1];
        if (!t) {
          throw Error(`There is no breakpoint larger than ${e}`);
        }
        return t;
      }
    }, {
      key: "sortedBreakpoints",
      get: function () {
        return this._sortedBreakpoints;
      }
    }, {
      key: "dynamicResponsiveMediaQueries",
      get: function () {
        return Array.from(this._mediaQueries[a.at].entries()).reduce(function (e, t) {
          var n = s(t, 2);
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
                f(e, t, n[t]);
              });
            }
            return e;
          }({}, e, f({}, n[0], n[1]));
        }, {});
      }
    }, {
      key: "largestBreakpoint",
      get: function () {
        return this._sortedBreakpoints[this._sortedBreakpoints.length - 1];
      }
    }]);
    return e;
  }();
  exports.Breakpoints = m;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}