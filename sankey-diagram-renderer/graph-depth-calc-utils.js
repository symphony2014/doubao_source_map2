// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F2' to 'calcVerticalOffset'
// - Renamed export 'PT' to 'getNodeLayerDepth'
// - Renamed export 'be' to 'computeNodeDepth'
// - Renamed export 't$' to 'getNodeDepth'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 1800.93d11244.js
         * chunkId: 1800
         * moduleId: 652785
         */
module.exports = function (module, exports, require) {
  var arrayMaxUtil = require("array-max-util") /*id: 878770*/;
  function r(t) {
    return t.target.depth;
  }
  function s(t) {
    return t.depth;
  }
  function o(t, e) {
    return e - 1 - t.height;
  }
  function l(t, e) {
    if (t.sourceLinks.length) {
      return t.depth;
    } else {
      return e - 1;
    }
  }
  function a(t) {
    if (t.targetLinks.length) {
      return t.depth;
    } else if (t.sourceLinks.length) {
      return arrayMaxUtil.maxBy(t.sourceLinks, r) - 1;
    } else {
      return 0;
    }
  }
  require.d(exports, {
    calcVerticalOffset: function () {
      return o;
    },
    getNodeLayerDepth: function () {
      return l;
    },
    computeNodeDepth: function () {
      return a;
    },
    getNodeDepth: function () {
      return s;
    }
  });
}