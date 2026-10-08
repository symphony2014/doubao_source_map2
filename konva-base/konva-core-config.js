// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 239057
         */
module.exports = function (module, exports, require) {
  exports._registerNode = exports.Konva = exports.glob = undefined;
  let r = Math.PI / 180;
  exports.glob = require.g !== undefined ? require.g : typeof window != "undefined" ? window : typeof WorkerGlobalScope != "undefined" ? self : {};
  exports.Konva = {
    _global: exports.glob,
    version: "9.3.8",
    isBrowser: typeof window != "undefined" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]"),
    isUnminified: /param/.test(function (t) {}.toString()),
    dblClickWindow: 400,
    getAngle: t => exports.Konva.angleDeg ? t * r : t,
    enableTrace: false,
    pointerEventsEnabled: true,
    autoDrawEnabled: true,
    hitOnDragEnabled: false,
    capturePointerEventsEnabled: false,
    _mouseListenClick: false,
    _touchListenClick: false,
    _pointerListenClick: false,
    _mouseInDblClickWindow: false,
    _touchInDblClickWindow: false,
    _pointerInDblClickWindow: false,
    _mouseDblClickPointerId: null,
    _touchDblClickPointerId: null,
    _pointerDblClickPointerId: null,
    _fixTextRendering: false,
    pixelRatio: typeof window != "undefined" && window.devicePixelRatio || 1,
    dragDistance: 3,
    angleDeg: true,
    showWarnings: true,
    dragButtons: [0, 1],
    isDragging: () => exports.Konva.DD.isDragging,
    isTransforming() {
      var t;
      if ((t = exports.Konva.Transformer) === null || t === undefined) {
        return undefined;
      } else {
        return t.isTransforming();
      }
    },
    isDragReady: () => !!exports.Konva.DD.node,
    releaseCanvasOnDestroy: true,
    document: exports.glob.document,
    _injectGlobal(t) {
      exports.glob.Konva = t;
    }
  };
  exports._registerNode = t => {
    exports.Konva[t.prototype.getClassName()] = t;
  };
  exports.Konva._injectGlobal(exports.Konva);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}