// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FP' to 'trackItem'
// - Renamed export 'Nc' to 'untrackItem'
// - Renamed export 'X1' to 'measureText'
// - Renamed export 'fw' to 'getCanvasContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 492371
         */
module.exports = function (module, exports, require) {
  var i;
  var lruCacheMap = require("lru-cache-map") /*id: 145355*/;
  var nativeSetExport = require("native-set-export") /*id: 390156*/;
  var canvasContextHelpers = require("canvas-context-helpers") /*id: 2126*/;
  var s = new lruCacheMap.LruCache(3000);
  var h = new nativeSetExport.Set();
  function l() {
    return h.values().next().value || (i ||= document.createElement("canvas").getContext("2d"), i);
  }
  function u(t) {
    h.add(t);
  }
  function c(t) {
    h.delete(t);
  }
  function p(t, e = {}, n = l(), i = true) {
    var r;
    var o;
    var h;
    var u;
    var c;
    var p;
    var d;
    var f;
    var g;
    var y;
    var v;
    var m;
    r = t;
    h = (o = e).fontFamily;
    u = o.fontSize;
    c = o.fontWeight;
    var x = [r, u === undefined ? 10 : u, h === undefined ? "sans-serif" : h, c === undefined ? "normal" : c, (p = o.fontStyle) === undefined ? "normal" : p].join("__$$__");
    var _ = s.get(x);
    if (_) {
      return _;
    }
    if (i) {
      n.save();
    }
    if (i) {
      d = n;
      if ((f = e) === undefined) {
        f = {};
      }
      g = f.fontFamily;
      y = f.fontSize;
      v = f.fontWeight;
      m = f.fontStyle;
      canvasContextHelpers.setFont(d, y === undefined ? 12 : y, g === undefined ? "sans-serif" : g, v === undefined ? "normal" : v, m === undefined ? "normal" : m);
    }
    var b = {
      width: n.measureText(t).width,
      height: e.fontSize
    };
    s.set(x, b);
    if (i) {
      n.restore();
    }
    return b;
  }
  require.d(exports, {
    trackItem: function () {
      return u;
    },
    untrackItem: function () {
      return c;
    },
    measureText: function () {
      return p;
    },
    getCanvasContext: function () {
      return l;
    }
  });
}