// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'reactResponsiveMediaContext'
// - Resolved require(274776) to 'react-responsive-media-context'
// - Renamed variable 'o' to 'fresnelMediaQueriesManager'
// - Resolved require(694729) to 'fresnel-media-queries-manager'
// - Renamed variable 's' to 'fresnelStyleUtils'
// - Resolved require(751107) to 'fresnel-style-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive.9af05afc.js
         * chunkId: 87048
         * moduleId: 996552
         */
module.exports = function (module, exports, require) {
  exports.createMedia = function (e) {
    var t;
    var n = fresnelStyleUtils.castBreakpointsToIntegers(e.breakpoints);
    var r = new fresnelMediaQueriesManager.MediaQueries(n, e.interactions || {});
    var d = reactResponsiveMediaContext.createResponsiveComponents();
    var u = a.default.createContext({});
    u.displayName = "Media.Context";
    var f = a.default.createContext({
      hasParentMedia: false,
      breakpointProps: {}
    });
    u.displayName = "MediaParent.Context";
    var m = fresnelStyleUtils.memoize(function (e) {
      return {
        onlyMatch: e
      };
    });
    var v = d.Provider;
    return {
      Media: function (e) {
        (function (e) {
          var t = Object.keys(e).filter(function (e) {
            return c.includes(e);
          });
          if (t.length < 1) {
            throw Error(`1 of ${c.join(", ")} is required.`);
          }
          if (t.length > 1) {
            throw Error(`Only 1 of ${t.join(", ")} is allowed at a time.`);
          }
        })(e);
        e.children;
        var t;
        var n = e.className;
        var i = e.style;
        var o = e.interaction;
        var l = function (e, t) {
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
        }(e, ["children", "className", "style", "interaction"]);
        var d = a.default.useMemo(function () {
          return fresnelStyleUtils.memoize(function (e) {
            return {
              hasParentMedia: true,
              breakpointProps: e
            };
          });
        }, []);
        var m = a.default.useContext(f);
        var v = d(l);
        var p = a.default.useContext(u).onlyMatch;
        var h = a.default.useId();
        var g = typeof window != "undefined";
        var b = fresnelStyleUtils.useIsFirstRender();
        if (e.interaction) {
          t = fresnelStyleUtils.createClassName("interaction", e.interaction);
        } else {
          if (e.at) {
            r.breakpoints.largestBreakpoint;
            e.at;
          }
          var y = fresnelStyleUtils.propKey(l);
          var w = l[y];
          t = fresnelStyleUtils.createClassName(y, w);
        }
        var _ = (!m.hasParentMedia || fresnelStyleUtils.intersection(r.breakpoints.toVisibleAtBreakpointSet(m.breakpointProps), r.breakpoints.toVisibleAtBreakpointSet(l)).length > 0) && (p === undefined || r.shouldRenderMediaQuery(function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t] != null ? Object(arguments[t]) : {};
            var r = Object.keys(n);
            if (typeof Object.getOwnPropertySymbols == "function") {
              r.push.apply(r, Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              }));
            }
            r.forEach(function (t) {
              var r;
              var a;
              var i;
              r = e;
              a = t;
              i = n[t];
              if (a in r) {
                Object.defineProperty(r, a, {
                  value: i,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                r[a] = i;
              }
            });
          }
          return e;
        }({}, l, {
          interaction: o
        }), p));
        var x = ` fresnel-${h}`;
        t += x;
        if (g && b && !_) {
          Array.from(document.getElementsByClassName(x)).forEach(function (e) {
            return e.innerHTML = "";
          });
        }
        return a.default.createElement(f.Provider, {
          value: v
        }, e.children instanceof Function ? e.children(t, _) : a.default.createElement("div", {
          className: ["fresnel-container", t, n].filter(Boolean).join(" "),
          style: i,
          suppressHydrationWarning: true
        }, _ ? e.children : null));
      },
      MediaContextProvider: function (e) {
        var t = e.disableDynamicMediaQueries;
        var n = e.onlyMatch;
        var i = e.children;
        if (!t) {
          return a.default.createElement(v, {
            mediaQueries: r.dynamicResponsiveMediaQueries,
            initialMatchingMediaQueries: fresnelStyleUtils.intersection(r.mediaQueryTypes, n)
          }, a.default.createElement(d.Consumer, null, function (e) {
            var t = Object.keys(e).filter(function (t) {
              return e[t];
            });
            var r = m(fresnelStyleUtils.intersection(t, n));
            return a.default.createElement(u.Provider, {
              value: r
            }, i);
          }));
        }
        var o = m(n);
        return a.default.createElement(u.Provider, {
          value: o
        }, i);
      },
      createMediaStyle: r.toStyle,
      SortedBreakpoints: function (e) {
        if (Array.isArray(e)) {
          return l(e);
        }
      }(t = r.breakpoints.sortedBreakpoints) || function (e) {
        if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) {
          return Array.from(e);
        }
      }(t) || function (e, t) {
        if (e) {
          if (typeof e == "string") {
            return l(e, undefined);
          }
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if (n === "Object" && e.constructor) {
            n = e.constructor.name;
          }
          if (n === "Map" || n === "Set") {
            return Array.from(e);
          }
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
            return l(e, t);
          }
        }
      }(t) || function () {
        throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }(),
      findBreakpointAtWidth: r.breakpoints.findBreakpointAtWidth,
      findBreakpointsForWidths: r.breakpoints.findBreakpointsForWidths,
      valuesWithBreakpointProps: r.breakpoints.valuesWithBreakpointProps
    };
  };
  var r;
  var a = (r = require("react-core-library-reexport") /*id: 634663*/) && r.__esModule ? r : {
    default: r
  };
  var reactResponsiveMediaContext = require("react-responsive-media-context") /*id: 274776*/;
  var fresnelMediaQueriesManager = require("fresnel-media-queries-manager") /*id: 694729*/;
  var fresnelStyleUtils = require("fresnel-style-utils") /*id: 751107*/;
  function l(e, t) {
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
  var c = fresnelMediaQueriesManager.MediaQueries.validKeys();
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}