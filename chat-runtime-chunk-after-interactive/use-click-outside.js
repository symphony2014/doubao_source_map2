// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useClickOutside'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 87494
         */
module.exports = function (module, exports, require) {
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  var browserDomValueUnwrap = require("browser-dom-value-unwrap") /*id: 999608*/;
  function o(e) {
    if (!e || !document.getRootNode) {
      return document;
    }
    var t;
    var n = Array.isArray(e) ? e : [e];
    if (n.every(function (e) {
      var t = browserDomValueUnwrap.unwrapBrowserValue(e);
      return !!t && (t.getRootNode() instanceof ShadowRoot || undefined);
    })) {
      if (t = browserDomValueUnwrap.unwrapBrowserValue(n[0])) {
        return t.getRootNode();
      } else {
        return document;
      }
    } else {
      return document;
    }
  }
  var useResourceEffectHook_1 = require("use-resource-effect-hook_1") /*id: 404507*/;
  function l(e, t, n = "click") {
    var l = useLatestRef_1.useLatestRef(e);
    useResourceEffectHook_1.useResourceEffect(function () {
      function e(e) {
        if (!(Array.isArray(t) ? t : [t]).some(function (t) {
          var n = browserDomValueUnwrap.unwrapBrowserValue(t);
          return !n || n.contains(e.target);
        })) {
          l.current(e);
        }
      }
      var i = o(t);
      var s = Array.isArray(n) ? n : [n];
      s.forEach(function (t) {
        return i.addEventListener(t, e);
      });
      return function () {
        s.forEach(function (t) {
          return i.removeEventListener(t, e);
        });
      };
    }, Array.isArray(n) ? n : [n], t);
  }
  require.d(exports, {
    useClickOutside: function () {
      return l;
    }
  });
}