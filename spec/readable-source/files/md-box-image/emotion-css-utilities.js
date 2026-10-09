// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F4' to 'createKeyframes'
// - Renamed export 'iv' to 'serializeStyles'
// - Renamed export 'xB' to 'GlobalStyles'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 385765
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var emotionReactCore = require("emotion-react-core") /*id: 188558*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var cssStyleInjectionUtils = require("css-style-injection-utils") /*id: 706137*/;
  var reactInsertionEffectPolyfill = require("react-insertion-effect-polyfill") /*id: 299969*/;
  var emotionStyleSerializer = require("emotion-style-serializer") /*id: 909975*/;
  require("emotion-stylesheet-factory") /*id: 992521*/;
  require("hoist-non-react-statics") /*id: 19165*/;
  function c(e, t) {
    var n = arguments;
    if (t == null || !emotionReactCore.hasOwnProperty.call(t, "css")) {
      return reactCoreLibraryReexport.createElement.apply(undefined, n);
    }
    var r = n.length;
    var i = Array(r);
    i[0] = emotionReactCore.jsx;
    i[1] = emotionReactCore.createEmotionElem(e, t);
    for (var s = 2; s < r; s++) {
      i[s] = n[s];
    }
    return reactCoreLibraryReexport.createElement.apply(null, i);
  }
  r = c ||= {};
  i ||= r.JSX ||= {};
  var d = emotionReactCore.withEmotionCache(function (e, t) {
    var n = e.styles;
    var r = emotionStyleSerializer.serializeStyles([n], undefined, reactCoreLibraryReexport.useContext(emotionReactCore.ThemeContext));
    var i = reactCoreLibraryReexport.useRef();
    reactInsertionEffectPolyfill.layoutEffectShim(function () {
      var e = t.key + "-global";
      var n = new t.sheet.constructor({
        key: e,
        nonce: t.sheet.nonce,
        container: t.sheet.container,
        speedy: t.sheet.isSpeedy
      });
      var o = false;
      var a = document.querySelector("style[data-emotion=\"" + e + " " + r.name + "\"]");
      if (t.sheet.tags.length) {
        n.before = t.sheet.tags[0];
      }
      if (a !== null) {
        o = true;
        a.setAttribute("data-emotion", e);
        n.hydrate([a]);
      }
      i.current = [n, o];
      return function () {
        n.flush();
      };
    }, [t]);
    reactInsertionEffectPolyfill.layoutEffectShim(function () {
      var e = i.current;
      var n = e[0];
      if (e[1]) {
        e[1] = false;
        return;
      }
      if (r.next !== undefined) {
        cssStyleInjectionUtils.insertStyle(t, r.next, true);
      }
      if (n.tags.length) {
        var o = n.tags[n.tags.length - 1].nextElementSibling;
        n.before = o;
        n.flush();
      }
      t.insert("", r, n, false);
    }, [t, r.name]);
    return null;
  });
  function p() {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    return emotionStyleSerializer.serializeStyles(t);
  }
  function h() {
    var e = p.apply(undefined, arguments);
    var t = "animation-" + e.name;
    return {
      name: t,
      styles: "@keyframes " + t + "{" + e.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  }
  require.d(exports, {
    createKeyframes: function () {
      return h;
    },
    serializeStyles: function () {
      return p;
    },
    GlobalStyles: function () {
      return d;
    }
  });
}