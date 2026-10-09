// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'El' to 'setTextBaseline'
// - Renamed export 'H_' to 'setLineWidth'
// - Renamed export 'Oz' to 'resetTransform'
// - Renamed export 'Xu' to 'setTextAlign'
// - Renamed export 'cH' to 'setGlobalAlpha'
// - Renamed export 'ir' to 'setStrokeStyle'
// - Renamed export 'j_' to 'setFont'
// - Renamed export 'kr' to 'setShadow'
// - Renamed export 'lf' to 'setLineJoin'
// - Renamed export 'sQ' to 'setMiterLimit'
// - Renamed export 'wi' to 'setFillStyle'
// - Renamed export 'xC' to 'setLineCap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 2126
         */
module.exports = function (module, exports, require) {
  function i(t) {
    if (t.resetTransform) {
      t.resetTransform();
    } else {
      t.setTransform(1, 0, 0, 1, 0, 0);
    }
  }
  function r(t, e) {
    if (t.setLineWidth) {
      t.setLineWidth(e);
    } else {
      t.lineWidth = e;
    }
  }
  function o(t, e) {
    if (t.setFillStyle) {
      t.setFillStyle(e);
    } else {
      t.fillStyle = e;
    }
  }
  function a(t, e = 12, n = "sans-serif", i = "normal", r = "normal") {
    if (t.setFontSize) {
      t.font = i + " " + e + "px " + n;
      t.setFontSize(e);
    } else {
      t.font = r + " " + i + " " + e + "px " + n;
    }
  }
  function s(t, e) {
    if (t.setGlobalAlpha) {
      t.setGlobalAlpha(e);
    } else {
      t.globalAlpha = e;
    }
  }
  function h(t, e) {
    if (t.setLineCap) {
      t.setLineCap(e);
    } else {
      t.lineCap = e;
    }
  }
  function l(t, e) {
    if (t.setLineJoin) {
      t.setLineJoin(e);
    } else {
      t.lineJoin = e;
    }
  }
  function u(t, e) {
    if (t.setMiterLimit) {
      t.setMiterLimit(e);
    } else {
      t.miterLimit = e;
    }
  }
  function c(t, e, n, i, r) {
    if (t.setShadow) {
      t.setShadow(e, n, i, r);
    } else {
      t.shadowColor = r;
      t.shadowBlur = i;
      t.shadowOffsetX = e;
      t.shadowOffsetY = n;
    }
  }
  function p(t, e) {
    if (t.setStrokeStyle) {
      t.setStrokeStyle(e);
    } else {
      t.strokeStyle = e;
    }
  }
  function d(t, e) {
    if (t.setTextAlign) {
      t.setTextAlign(e);
    } else {
      t.textAlign = e;
    }
  }
  function f(t, e) {
    if (t.setTextBaseline) {
      t.setTextBaseline(e);
    } else {
      t.textBaseline = e;
    }
  }
  require.d(exports, {
    setTextBaseline: function () {
      return f;
    },
    setLineWidth: function () {
      return r;
    },
    resetTransform: function () {
      return i;
    },
    setTextAlign: function () {
      return d;
    },
    setGlobalAlpha: function () {
      return s;
    },
    setStrokeStyle: function () {
      return p;
    },
    setFont: function () {
      return a;
    },
    setShadow: function () {
      return c;
    },
    setLineJoin: function () {
      return l;
    },
    setMiterLimit: function () {
      return u;
    },
    setFillStyle: function () {
      return o;
    },
    setLineCap: function () {
      return h;
    }
  });
}