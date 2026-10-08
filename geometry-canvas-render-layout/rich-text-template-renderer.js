// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'renderRichTemplate'
// - Renamed export 'Z' to 'templateRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 177827
         */
module.exports = function (module, exports, require) {
  var lruCacheMap = require("lru-cache-map") /*id: 145355*/;
  var templateCompilerUtil = require("template-compiler-util") /*id: 128013*/;
  var richTextRendererUtils = require("rich-text-renderer-utils") /*id: 809271*/;
  function a() {
    return (a = Object.assign || function (t) {
      var e;
      var n = 1;
      var i = arguments.length;
      for (; n < i; n++) {
        for (var r in e = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            t[r] = e[r];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  }
  var s = new lruCacheMap.LruCache(1000);
  function h(t, e) {
    var n = s.get(t);
    if (!n) {
      n = templateCompilerUtil.compileTemplate(t, {
        interpolate: /<%=([\S\s]+?)%>/g
      });
      s.set(t, n);
    }
    return n(e);
  }
  function l(t, e) {
    if (richTextRendererUtils.isRichType(t)) {
      if (t.RICH_TYPE === "jsx") {
        return t;
      } else {
        return a(a({}, t), {
          content: h(t.content, e)
        });
      }
    } else {
      return h(t, e);
    }
  }
  require.d(exports, {
    renderRichTemplate: function () {
      return l;
    },
    templateRenderer: function () {
      return h;
    }
  });
}