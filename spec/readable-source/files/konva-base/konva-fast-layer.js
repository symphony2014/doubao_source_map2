// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaTransformUtil'
// - Resolved require(390581) to 'konva-transform-util'
// - Renamed variable 'a' to 'konvaLayerNode'
// - Resolved require(72393) to 'konva-layer-node'
// - Renamed variable 'n' to 'konvaCoreConfig'
// - Resolved require(239057) to 'konva-core-config'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 351102
         */
module.exports = function (module, exports, require) {
  exports.FastLayer = undefined;
  let konvaTransformUtil = require("konva-transform-util") /*id: 390581*/;
  let konvaLayerNode = require("konva-layer-node") /*id: 72393*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  class s extends konvaLayerNode.Layer {
    constructor(t) {
      super(t);
      this.listening(false);
      konvaTransformUtil.Util.warn("Konva.Fast layer is deprecated. Please use \"new Konva.Layer({ listening: false })\" instead.");
    }
  }
  exports.FastLayer = s;
  s.prototype.nodeType = "FastLayer";
  konvaCoreConfig._registerNode(s);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}