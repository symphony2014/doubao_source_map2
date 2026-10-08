// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'useTranslation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 716619
         */
module.exports = function (module, exports, require) {
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactI18nContextConfig = require("react-i18n-context-config") /*id: 913585*/;
  function s() {
    if (console && console.warn) {
      var e;
      var t = arguments.length;
      var n = Array(t);
      var r = 0;
      for (; r < t; r++) {
        n[r] = arguments[r];
      }
      if (typeof n[0] == "string") {
        n[0] = `react-i18next:: ${n[0]}`;
      }
      (e = console).warn.apply(e, n);
    }
  }
  var u = {};
  function c() {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    if (typeof t[0] != "string" || !u[t[0]]) {
      if (typeof t[0] == "string") {
        u[t[0]] = new Date();
      }
      s.apply(undefined, t);
    }
  }
  function l(e, t, n) {
    e.loadNamespaces(t, function () {
      if (e.isInitialized) {
        n();
      } else {
        e.on("initialized", function t() {
          setTimeout(function () {
            e.off("initialized", t);
          }, 0);
          n();
        });
      }
    });
  }
  function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      if (t) {
        r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      n.push.apply(n, r);
    }
    return n;
  }
  function h(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] ?? {};
      if (t % 2) {
        f(Object(n), true).forEach(function (t) {
          objectPropertySetter.setObjectProperty(e, t, n[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        f(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
    return e;
  }
  function d(e, t) {
    var n = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(function () {
      n.current = t ? n.current : e;
    }, [e, t]);
    return n.current;
  }
  function p(e, t = {}) {
    var n = t.i18n;
    var i = reactCoreLibraryReexport.useContext(reactI18nContextConfig.I18nContext) || {};
    var s = i.i18n;
    var u = i.defaultNS;
    var f = n || s || reactI18nContextConfig.getI18nInstance();
    if (f && !f.reportNamespaces) {
      f.reportNamespaces = new reactI18nContextConfig.NamespaceManager();
    }
    if (!f) {
      c("You will need to pass in an i18next instance by using initReactI18next");
      function p(e) {
        if (Array.isArray(e)) {
          return e[e.length - 1];
        } else {
          return e;
        }
      }
      var g = [p, {}, false];
      g.t = p;
      g.i18n = {};
      g.ready = false;
      return g;
    }
    if (f.options.react && f.options.react.wait !== undefined) {
      c("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
    }
    var v = h(h(h({}, reactI18nContextConfig.getDefaultConfig()), f.options.react), t);
    var m = v.useSuspense;
    var y = v.keyPrefix;
    var b = e || u || f.options && f.options.defaultNS;
    b = typeof b == "string" ? [b] : b || ["translation"];
    if (f.reportNamespaces.addUsedNamespaces) {
      f.reportNamespaces.addUsedNamespaces(b);
    }
    var _ = (f.isInitialized || f.initializedStoreOnce) && b.every(function (e) {
      return function (e, t, n = {}) {
        if (t.languages && t.languages.length) {
          if (t.options.ignoreJSONStructure === undefined) {
            return function (e, t, n = {}) {
              var r = t.languages[0];
              var i = !!t.options && t.options.fallbackLng;
              var o = t.languages[t.languages.length - 1];
              if (r.toLowerCase() === "cimode") {
                return true;
              }
              function a(e, n) {
                var r = t.services.backendConnector.state[`${e}|${n}`];
                return r === -1 || r === 2;
              }
              return (!n.bindI18n || !(n.bindI18n.indexOf("languageChanging") > -1) || !t.services.backendConnector.backend || !t.isLanguageChangingTo || !!a(t.isLanguageChangingTo, e)) && (!!t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || !!t.options.resources && !t.options.partialBundledLanguages || !!a(r, e) && (!i || !!a(o, e)));
            }(e, t, n);
          } else {
            return t.hasLoadedNamespace(e, {
              precheck: function (t, r) {
                if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !r(t.isLanguageChangingTo, e)) {
                  return false;
                }
              }
            });
          }
        } else {
          c("i18n.languages were undefined or empty", t.languages);
          return true;
        }
      }(e, f, v);
    });
    function w() {
      return f.getFixedT(null, v.nsMode === "fallback" ? b : b[0], y);
    }
    var E = reactCoreLibraryReexport.useState(w);
    var S = iterableToArrayUtil_1_1.iterableToArray(E, 2);
    var x = S[0];
    var k = S[1];
    var O = b.join();
    var A = d(O);
    var T = reactCoreLibraryReexport.useRef(true);
    reactCoreLibraryReexport.useEffect(function () {
      var e = v.bindI18n;
      var t = v.bindI18nStore;
      function n() {
        if (T.current) {
          k(w);
        }
      }
      T.current = true;
      if (!_ && !m) {
        l(f, b, function () {
          if (T.current) {
            k(w);
          }
        });
      }
      if (_ && A && A !== O && T.current) {
        k(w);
      }
      if (e && f) {
        f.on(e, n);
      }
      if (t && f) {
        f.store.on(t, n);
      }
      return function () {
        T.current = false;
        if (e && f) {
          e.split(" ").forEach(function (e) {
            return f.off(e, n);
          });
        }
        if (t && f) {
          t.split(" ").forEach(function (e) {
            return f.store.off(e, n);
          });
        }
      };
    }, [f, O]);
    var R = reactCoreLibraryReexport.useRef(true);
    reactCoreLibraryReexport.useEffect(function () {
      if (T.current && !R.current) {
        k(w);
      }
      R.current = false;
    }, [f, y]);
    var C = [x, f, _];
    C.t = x;
    C.i18n = f;
    C.ready = _;
    if (_ || !_ && !m) {
      return C;
    }
    throw new Promise(function (e) {
      l(f, b, function () {
        e();
      });
    });
  }
  require.d(exports, {
    useTranslation: function () {
      return p;
    }
  });
}