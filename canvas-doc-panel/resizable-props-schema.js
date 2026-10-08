// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(928010) to 'prop-types-factory-wrapper'
// - Resolved require(844569) to 'react-draggable-component_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 857943
         */
module.exports = function (module, exports, require) {
  exports.__esModule = true;
  exports.resizableProps = undefined;
  var r;
  var i = (r = require("prop-types-factory-wrapper") /*id: 928010*/) && r.__esModule ? r : {
    default: r
  };
  require("react-draggable-component_1") /*id: 844569*/;
  var a = {
    axis: i.default.oneOf(["both", "x", "y", "none"]),
    className: i.default.string,
    children: i.default.element.isRequired,
    draggableOpts: i.default.shape({
      allowAnyClick: i.default.bool,
      cancel: i.default.string,
      children: i.default.node,
      disabled: i.default.bool,
      enableUserSelectHack: i.default.bool,
      offsetParent: i.default.node,
      grid: i.default.arrayOf(i.default.number),
      handle: i.default.string,
      nodeRef: i.default.object,
      onStart: i.default.func,
      onDrag: i.default.func,
      onStop: i.default.func,
      onMouseDown: i.default.func,
      scale: i.default.number
    }),
    height: function () {
      var e;
      var t = arguments.length;
      var n = Array(t);
      var r = 0;
      for (; r < t; r++) {
        n[r] = arguments[r];
      }
      var a = n[0];
      if (a.axis === "both" || a.axis === "y") {
        return (e = i.default.number).isRequired.apply(e, n);
      } else {
        return i.default.number.apply(i.default, n);
      }
    },
    handle: i.default.oneOfType([i.default.node, i.default.func]),
    handleSize: i.default.arrayOf(i.default.number),
    lockAspectRatio: i.default.bool,
    maxConstraints: i.default.arrayOf(i.default.number),
    minConstraints: i.default.arrayOf(i.default.number),
    onResizeStop: i.default.func,
    onResizeStart: i.default.func,
    onResize: i.default.func,
    resizeHandles: i.default.arrayOf(i.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])),
    transformScale: i.default.number,
    width: function () {
      var e;
      var t = arguments.length;
      var n = Array(t);
      var r = 0;
      for (; r < t; r++) {
        n[r] = arguments[r];
      }
      var a = n[0];
      if (a.axis === "both" || a.axis === "x") {
        return (e = i.default.number).isRequired.apply(e, n);
      } else {
        return i.default.number.apply(i.default, n);
      }
    }
  };
  exports.resizableProps = a;
}