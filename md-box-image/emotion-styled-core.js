// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'objectAssignUtil'
// - Resolved require(513453) to 'object-assign-util'
// - Renamed variable 'o' to 'emotionReactCore'
// - Resolved require(188558) to 'emotion-react-core'
// - Renamed variable 'a' to 'emotionStyleSerializer'
// - Resolved require(909975) to 'emotion-style-serializer'
// - Renamed variable 's' to 'reactInsertionEffectPolyfill'
// - Resolved require(299969) to 'react-insertion-effect-polyfill'
// - Renamed variable 'l' to 'cssStyleInjectionUtils'
// - Resolved require(706137) to 'css-style-injection-utils'
// - Renamed variable 'u' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Resolved require(742932) to 'react-dom-prop-validator'
// - Renamed variable 'g' to 'emotionCssUtilities'
// - Resolved require(385765) to 'emotion-css-utilities'
// - Renamed variable 'y' to 'emotionStylesheetFactory'
// - Resolved require(992521) to 'emotion-stylesheet-factory'
// - Renamed variable 'b' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'x' to 'themedGlobalStylesWrapper'
// - Resolved require(640334) to 'themed-global-styles-wrapper'
// - Updated imported property 'T' to 'ThemeContext' (module 188558)
// - Updated imported property 'w' to 'withEmotionCache' (module 188558)
// - Updated imported property 'C' to 'CacheProvider' (module 188558)
// - Updated imported property 'iv' to 'serializeStyles' (module 385765)
// - Updated imported property 'F4' to 'createKeyframes' (module 385765)
// - Updated imported property 'Z' to 'ThemedGlobalStyles' (module 640334)
// - Updated imported property 'hC' to 'registerStyle' (module 706137)
// - Updated imported property 'My' to 'insertStyle' (module 706137)
// - Updated imported property 'fp' to 'filterClassNames' (module 706137)
// - Updated imported property 'L' to 'useInsertionEffect' (module 299969)
// - Updated imported property 'O' to 'serializeStyles' (module 909975)
// - Updated imported property 'Z' to 'objectAssign' (module 513453)
// - Updated imported property 'Z' to 'createEmotionSheet' (module 992521)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 45870
         */
module.exports = function (module, exports, require) {
  let r;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var emotionReactCore = require("emotion-react-core") /*id: 188558*/;
  var emotionStyleSerializer = require("emotion-style-serializer") /*id: 909975*/;
  var reactInsertionEffectPolyfill = require("react-insertion-effect-polyfill") /*id: 299969*/;
  var cssStyleInjectionUtils = require("css-style-injection-utils") /*id: 706137*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var c = require("react-dom-prop-validator") /*id: 742932*/.default;
  function d(e) {
    return e !== "theme";
  }
  function p(e) {
    if (typeof e == "string" && e.charCodeAt(0) > 96) {
      return c;
    } else {
      return d;
    }
  }
  function h(e, t, n) {
    var r;
    if (t) {
      var i = t.shouldForwardProp;
      r = e.__emotion_forwardProp && i ? function (t) {
        return e.__emotion_forwardProp(t) && i(t);
      } : i;
    }
    if (typeof r != "function" && n) {
      r = e.__emotion_forwardProp;
    }
    return r;
  }
  function f(e) {
    var t = e.cache;
    var n = e.serialized;
    var r = e.isStringTag;
    cssStyleInjectionUtils.registerStyle(t, n, r);
    reactInsertionEffectPolyfill.useInsertionEffect(function () {
      return cssStyleInjectionUtils.insertStyle(t, n, r);
    });
    return null;
  }
  var m = function e(t, n) {
    var r;
    var s;
    var c = t.__emotion_real === t;
    var d = c && t.__emotion_base || t;
    if (n !== undefined) {
      r = n.label;
      s = n.target;
    }
    var m = h(t, n, c);
    var g = m || p(d);
    var y = !g("as");
    return function () {
      var b = arguments;
      var v = c && t.__emotion_styles !== undefined ? t.__emotion_styles.slice(0) : [];
      if (r !== undefined) {
        v.push("label:" + r + ";");
      }
      if (b[0] == null || b[0].raw === undefined) {
        v.push.apply(v, b);
      } else {
        var x = b[0];
        v.push(x[0]);
        var _ = b.length;
        var w = 1;
        for (; w < _; w++) {
          v.push(b[w], x[w]);
        }
      }
      var C = emotionReactCore.withEmotionCache(function (e, t, n) {
        var r = y && e.as || d;
        var i = "";
        var c = [];
        var h = e;
        if (e.theme == null) {
          h = {};
          for (var b in e) {
            h[b] = e[b];
          }
          h.theme = reactCoreLibraryReexport.useContext(emotionReactCore.ThemeContext);
        }
        if (typeof e.className == "string") {
          i = cssStyleInjectionUtils.filterClassNames(t.registered, c, e.className);
        } else if (e.className != null) {
          i = e.className + " ";
        }
        var x = emotionStyleSerializer.serializeStyles(v.concat(c), t.registered, h);
        i += t.key + "-" + x.name;
        if (s !== undefined) {
          i += " " + s;
        }
        var _ = y && m === undefined ? p(r) : g;
        var w = {};
        for (var C in e) {
          if ((!y || C !== "as") && _(C)) {
            w[C] = e[C];
          }
        }
        w.className = i;
        if (n) {
          w.ref = n;
        }
        return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, reactCoreLibraryReexport.createElement(f, {
          cache: t,
          serialized: x,
          isStringTag: typeof r == "string"
        }), reactCoreLibraryReexport.createElement(r, w));
      });
      C.displayName = r !== undefined ? r : "Styled(" + (typeof d == "string" ? d : d.displayName || d.name || "Component") + ")";
      C.defaultProps = t.defaultProps;
      C.__emotion_real = C;
      C.__emotion_base = d;
      C.__emotion_styles = v;
      C.__emotion_forwardProp = m;
      Object.defineProperty(C, "toString", {
        value: function () {
          return "." + s;
        }
      });
      C.withComponent = function (t, r) {
        return e(t, objectAssignUtil.objectAssign({}, n, r, {
          shouldForwardProp: h(C, r, true)
        })).apply(undefined, v);
      };
      return C;
    };
  }.bind(null);
  ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach(function (e) {
    m[e] = m(e);
  });
  var emotionCssUtilities = require("emotion-css-utilities") /*id: 385765*/;
  var emotionStylesheetFactory = require("emotion-stylesheet-factory") /*id: 992521*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function v(e) {
    let {
      injectFirst: t,
      children: n
    } = e;
    if (t && r) {
      return reactJsxRuntimeCoreReexport.jsx(emotionReactCore.CacheProvider, {
        value: r,
        children: n
      });
    } else {
      return n;
    }
  }
  if (typeof document == "object") {
    r = emotionStylesheetFactory.createEmotionSheet({
      key: "css",
      prepend: true
    });
  }
  var themedGlobalStylesWrapper = require("themed-global-styles-wrapper") /*id: 640334*/;
  function _(e, t) {
    return m(e, t);
  }
  let w = (e, t) => {
    if (Array.isArray(e.__emotion_styles)) {
      e.__emotion_styles = t(e.__emotion_styles);
    }
  };
  require.r(exports);
  require.d(exports, {
    ThemeContext: function () {
      return emotionReactCore.ThemeContext;
    },
    StyledEngineProvider: function () {
      return v;
    },
    default: function () {
      return _;
    },
    css: function () {
      return emotionCssUtilities.serializeStyles;
    },
    internal_processStyles: function () {
      return w;
    },
    keyframes: function () {
      return emotionCssUtilities.createKeyframes;
    },
    GlobalStyles: function () {
      return themedGlobalStylesWrapper.ThemedGlobalStyles;
    }
  });
}