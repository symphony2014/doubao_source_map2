// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive.9af05afc.js
         * chunkId: 87048
         * moduleId: 274776
         */
module.exports = function (module, exports, require) {
  function r(e) {
    return (r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
      return typeof e;
    } : function (e) {
      if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof e;
      }
    })(e);
  }
  exports.createResponsiveComponents = function () {
    var e = i.default.createContext({});
    e.displayName = "Media.DynamicContext";
    return {
      Consumer: e.Consumer,
      Provider: function (t) {
        var n;
        function a(e) {
          (function (e, t) {
            if (!(e instanceof t)) {
              throw TypeError("Cannot call a class as a function");
            }
          })(this, a);
          t = function (e, t) {
            if (t && (r(t) === "object" || typeof t == "function")) {
              return t;
            }
            if (t !== undefined) {
              throw TypeError("Derived constructors may only return object or undefined");
            }
            return c(e);
          }(this, s(a).call(this, e));
          d(c(c(t)), "isSupportedEnvironment", function () {
            return typeof window != "undefined" && window.matchMedia !== undefined;
          });
          d(c(c(t)), "setupMatchers", function (e) {
            return Object.keys(e).reduce(function (t, n) {
              return o({}, t, d({}, n, window.matchMedia(e[n])));
            }, {});
          });
          d(c(c(t)), "checkMatchers", function (e) {
            return Object.keys(e).reduce(function (t, n) {
              return o({}, t, d({}, n, e[n].matches));
            }, {});
          });
          d(c(c(t)), "mediaQueryStatusChangedCallback", function () {
            var e = t.checkMatchers(t.state.mediaQueryMatchers);
            t.setState({
              mediaQueryMatches: e
            });
          });
          var t;
          var n;
          var i = undefined;
          if (t.isSupportedEnvironment()) {
            i = t.setupMatchers(e.mediaQueries);
            n = t.checkMatchers(i);
          } else {
            n = Object.keys(e.mediaQueries).reduce(function (t, n) {
              return o({}, t, d({}, n, !!e.initialMatchingMediaQueries && e.initialMatchingMediaQueries.includes(n)));
            }, {});
          }
          t.state = {
            mediaQueryMatchers: i,
            mediaQueryMatches: n
          };
          return t;
        }
        (function (e, t) {
          if (typeof t != "function" && t !== null) {
            throw TypeError("Super expression must either be null or a function");
          }
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: true,
              configurable: true
            }
          });
          if (t) {
            l(e, t);
          }
        })(a, t);
        n = [{
          key: "componentDidMount",
          value: function () {
            if (this.state.mediaQueryMatchers) {
              var e = this.mediaQueryStatusChangedCallback;
              Object.values(this.state.mediaQueryMatchers).forEach(function (t) {
                t.addListener(e);
              });
            }
          }
        }, {
          key: "componentWillUnmount",
          value: function () {
            if (this.state.mediaQueryMatchers) {
              var e = this.mediaQueryStatusChangedCallback;
              Object.values(this.state.mediaQueryMatchers).forEach(function (t) {
                return t.removeListener(e);
              });
            }
          }
        }, {
          key: "shouldComponentUpdate",
          value: function (e, t) {
            return !!this.state.mediaQueryMatchers && (e.children !== this.props.children || !u(this.state.mediaQueryMatches, t.mediaQueryMatches));
          }
        }, {
          key: "render",
          value: function () {
            return i.default.createElement(e.Provider, {
              value: this.state.mediaQueryMatches
            }, this.props.children);
          }
        }];
        (function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || false;
            r.configurable = true;
            if ("value" in r) {
              r.writable = true;
            }
            Object.defineProperty(e, r.key, r);
          }
        })(a.prototype, n);
        return a;
      }(i.default.Component)
    };
  };
  var a;
  var i = (a = require("react-core-library-reexport") /*id: 634663*/) && a.__esModule ? a : {
    default: a
  };
  function o(e) {
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
  }
  function s(e) {
    return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
  }
  function l(e, t) {
    return (l = Object.setPrototypeOf || function (e, t) {
      e.__proto__ = t;
      return e;
    })(e, t);
  }
  function c(e) {
    if (e === undefined) {
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
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
  function u(e, t) {
    for (var n in e) {
      if (e[n] !== t[n]) {
        return false;
      }
    }
    return true;
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}