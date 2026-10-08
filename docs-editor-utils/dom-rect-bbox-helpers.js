// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BZ' to 'createEmptyRect'
// - Renamed export 'Kt' to 'createVerticalRect'
// - Renamed export 'ah' to 'buildCacheKey'
// - Renamed export 'e3' to 'toDOMRect'
// - Renamed export 'll' to 'hasNonZeroSize'
// - Renamed export 'r3' to 'copyRectProps'
// - Renamed export 's8' to 'calcRelativeRect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 412452
         */
module.exports = function (module, exports, require) {
  function o(e, n) {
    return {
      width: e.width,
      height: e.height,
      left: e.left - n.left,
      right: e.right - n.left,
      top: e.top - n.top,
      bottom: e.bottom - n.top
    };
  }
  function i(e) {
    let {
      left: n,
      top: r,
      width: o,
      height: i
    } = e;
    return new DOMRect(n, r, o, i);
  }
  function l() {
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      width: 0,
      height: 0
    };
  }
  function c(e) {
    return {
      left: e.left,
      top: e.top,
      bottom: e.bottom,
      right: e.right,
      width: e.width,
      height: e.height
    };
  }
  function u(e) {
    let {
      blockId: n,
      blockType: r,
      cacheType: o,
      relativeBlock: i,
      offset: l,
      isStart: c,
      rangeStart: u,
      rangeEnd: a
    } = e;
    return [n, r, o, i, l, c ? "right" : "left", u, a].filter(e => e !== undefined).join("-");
  }
  function a(e) {
    return {
      top: e,
      bottom: e,
      width: 0,
      height: 0,
      left: 0,
      right: 0
    };
  }
  function s(e) {
    let {
      height: n,
      width: r
    } = e;
    return n !== 0 || r !== 0;
  }
  require.d(exports, {
    createEmptyRect: function () {
      return l;
    },
    createVerticalRect: function () {
      return a;
    },
    buildCacheKey: function () {
      return u;
    },
    toDOMRect: function () {
      return i;
    },
    hasNonZeroSize: function () {
      return s;
    },
    copyRectProps: function () {
      return c;
    },
    calcRelativeRect: function () {
      return o;
    }
  });
}