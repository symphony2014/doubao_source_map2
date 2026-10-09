// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BZ' to 'createEmptyBounds'
// - Renamed export 'ah' to 'createPositionKey'
// - Renamed export 'fW' to 'createBounds'
// - Renamed export 'r3' to 'cloneBounds'
// - Renamed export 's8' to 'calculateBoundsDiff'
// - Renamed export 'xR' to 'normalizePosition'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 13032.fea06b08.js
         * chunkId: 13032
         * moduleId: 863516
         */
module.exports = function (module, exports, require) {
  function i(e, t) {
    return {
      left: e.left - t.left,
      right: e.right - t.left,
      top: e.top - t.top,
      bottom: e.bottom - t.top
    };
  }
  function o(e, t) {
    var n;
    if (t.line !== undefined) {
      n = e.length() - 1;
      t.line = Math.max(Math.min(n, t.line), 0);
      if (t.offset !== undefined) {
        e = e.getLine(t.line).getModelText().length - 1;
        t.offset = Math.max(Math.min(e, t.offset), 0);
      }
    }
  }
  function r(e, t, n, i) {
    return {
      width: n,
      height: i,
      left: e,
      top: t,
      right: e + n,
      bottom: t + i
    };
  }
  function s() {
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      width: 0,
      height: 0
    };
  }
  function l(e) {
    return {
      left: e.left,
      top: e.top,
      bottom: e.bottom,
      right: e.right,
      width: e.width,
      height: e.height
    };
  }
  function a(e, t) {
    return [e.zoneId, e.line, e.offset, t].filter(function (e) {
      return e !== undefined;
    }).join("-");
  }
  require.d(exports, {
    createEmptyBounds: function () {
      return s;
    },
    createPositionKey: function () {
      return a;
    },
    createBounds: function () {
      return r;
    },
    cloneBounds: function () {
      return l;
    },
    calculateBoundsDiff: function () {
      return i;
    },
    normalizePosition: function () {
      return o;
    }
  });
}