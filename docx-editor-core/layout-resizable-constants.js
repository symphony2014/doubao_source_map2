// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'KR' to 'verticalAnchorPoints'
// - Renamed export 'Sl' to 'horizontalAnchorPoints'
// - Renamed export 'TW' to 'topEdgeAnchorPoints'
// - Renamed export 'Y' to 'resizableDragging'
// - Renamed export 'ak' to 'draggableBtn'
// - Renamed export 'mu' to 'leftEdgeAnchorPoints'
// - Renamed export 'tZ' to 'resizableWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: resizable-draggable-btn.afecdf2f.js
         * chunkId: 43606
         * moduleId: 216694
         */
module.exports = function (module, exports, require) {
  var layoutConstants = require("layout-constants") /*id: 773631*/;
  let n = "draggable-btn";
  let s = "resizable-wrapper";
  let r = "resizable-dragging";
  let l = [layoutConstants.anchorPoints.Left, layoutConstants.anchorPoints.LeftTop, layoutConstants.anchorPoints.LeftBottom];
  let c = [layoutConstants.anchorPoints.Top, layoutConstants.anchorPoints.LeftTop, layoutConstants.anchorPoints.RightTop];
  let a = [layoutConstants.anchorPoints.Left, layoutConstants.anchorPoints.Right];
  let u = [layoutConstants.anchorPoints.Top, layoutConstants.anchorPoints.Bottom];
  layoutConstants.anchorPoints.Right;
  layoutConstants.anchorPoints.RightTop;
  layoutConstants.anchorPoints.RightBottom;
  layoutConstants.anchorPoints.Bottom;
  layoutConstants.anchorPoints.LeftBottom;
  layoutConstants.anchorPoints.RightBottom;
  require.d(exports, {
    verticalAnchorPoints: function () {
      return u;
    },
    horizontalAnchorPoints: function () {
      return a;
    },
    topEdgeAnchorPoints: function () {
      return c;
    },
    resizableDragging: function () {
      return r;
    },
    draggableBtn: function () {
      return n;
    },
    leftEdgeAnchorPoints: function () {
      return l;
    },
    resizableWrapper: function () {
      return s;
    }
  });
}