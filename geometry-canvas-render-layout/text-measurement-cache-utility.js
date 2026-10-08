// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'measureTextWithCache'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 90268
         */
module.exports = function (module, exports, require) {
  var lruCacheMap = require("lru-cache-map") /*id: 145355*/;
  var canvasTextMeasurementCache = require("canvas-text-measurement-cache") /*id: 492371*/;
  var richTextLayoutEngine = require("rich-text-layout-engine") /*id: 140760*/;
  var richTextRendererUtils = require("rich-text-renderer-utils") /*id: 809271*/;
  function s() {
    return (s = Object.assign || function (t) {
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
  var h = new lruCacheMap.LruCache(1000);
  function l(t, e) {
    var n;
    var i;
    var l;
    var u;
    var c;
    var p;
    var d;
    var f = e.fontSize;
    var g = e.rich;
    var y = [t, f === undefined ? 12 : f, g !== undefined && g].join("__split__");
    var v = h.get(y);
    if (v) {
      return v;
    }
    if (e.rich || richTextRendererUtils.isRichType(t)) {
      var m;
      var x;
      var _ = (t == null ? undefined : t.RICH_TYPE) || e.rich;
      if (_ === "jsx" || _ === "html") {
        v = {
          width: 0,
          height: e.fontSize
        };
      } else {
        m = richTextRendererUtils.isRichType(t) ? t.content : t;
        (x = new richTextLayoutEngine.RichTextDocument(s({
          text: m
        }, e))).layout();
        v = x.getBoxSize();
      }
    } else {
      n = canvasTextMeasurementCache.getCanvasContext();
      l = (i = e.fontSize) === undefined ? 12 : i;
      u = e.fontFamily;
      c = e.fontWeight;
      p = e.fontStyle;
      n.save();
      if (typeof n.setFontSize == "function") {
        n.setFontSize(l);
      } else {
        n.font = (p === undefined ? "normal" : p) + " " + (c === undefined ? "normal" : c) + " " + l + "px " + (u === undefined ? "sans-serif" : u) + " ";
      }
      d = n.measureText(t).width;
      n.restore();
      v = {
        width: d,
        height: l
      };
    }
    if (!richTextRendererUtils.isRichType(t)) {
      h.set(y, v);
    }
    return v;
  }
  require.d(exports, {
    measureTextWithCache: function () {
      return l;
    }
  });
}