// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'CacheProvider'
// - Renamed export 'E' to 'jsx'
// - Renamed export 'T' to 'ThemeContext'
// - Renamed export 'c' to 'createEmotionElem'
// - Renamed export 'h' to 'hasOwnProperty'
// - Renamed export 'w' to 'withEmotionCache'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 188558
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var emotionStylesheetFactory = require("emotion-stylesheet-factory") /*id: 992521*/;
  var cssStyleInjectionUtils = require("css-style-injection-utils") /*id: 706137*/;
  var emotionStyleSerializer = require("emotion-style-serializer") /*id: 909975*/;
  var reactInsertionEffectPolyfill = require("react-insertion-effect-polyfill") /*id: 299969*/;
  var l = reactCoreLibraryReexport.createContext(typeof HTMLElement != "undefined" ? emotionStylesheetFactory.createEmotionSheet({
    key: "css"
  }) : null);
  var u = l.Provider;
  function c(e) {
    return reactCoreLibraryReexport.forwardRef(function (t, n) {
      return e(t, reactCoreLibraryReexport.useContext(l), n);
    });
  }
  var d = reactCoreLibraryReexport.createContext({});
  var p = {}.hasOwnProperty;
  var h = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
  function f(e, t) {
    var n = {};
    for (var r in t) {
      if (p.call(t, r)) {
        n[r] = t[r];
      }
    }
    n[h] = e;
    return n;
  }
  function m(e) {
    var t = e.cache;
    var n = e.serialized;
    var r = e.isStringTag;
    cssStyleInjectionUtils.registerStyle(t, n, r);
    reactInsertionEffectPolyfill.useInsertionEffect(function () {
      return cssStyleInjectionUtils.insertStyle(t, n, r);
    });
    return null;
  }
  var g = c(function (e, t, n) {
    var i = e.css;
    if (typeof i == "string" && t.registered[i] !== undefined) {
      i = t.registered[i];
    }
    var s = e[h];
    var l = [i];
    var u = "";
    if (typeof e.className == "string") {
      u = cssStyleInjectionUtils.filterClassNames(t.registered, l, e.className);
    } else if (e.className != null) {
      u = e.className + " ";
    }
    var c = emotionStyleSerializer.serializeStyles(l, undefined, reactCoreLibraryReexport.useContext(d));
    u += t.key + "-" + c.name;
    var f = {};
    for (var g in e) {
      if (p.call(e, g) && g !== "css" && g !== h) {
        f[g] = e[g];
      }
    }
    f.className = u;
    if (n) {
      f.ref = n;
    }
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement(m, {
      cache: t,
      serialized: c,
      isStringTag: typeof s == "string"
    }), reactCoreLibraryReexport.createElement(s, f));
  });
  require.d(exports, {
    CacheProvider: function () {
      return u;
    },
    jsx: function () {
      return g;
    },
    ThemeContext: function () {
      return d;
    },
    createEmotionElem: function () {
      return f;
    },
    hasOwnProperty: function () {
      return p;
    },
    withEmotionCache: function () {
      return c;
    }
  });
}