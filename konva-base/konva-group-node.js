// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'konvaTransformUtil'
// - Resolved require(390581) to 'konva-transform-util'
// - Renamed variable 'a' to 'konvaContainerNode'
// - Resolved require(757034) to 'konva-container-node'
// - Renamed variable 'n' to 'konvaCoreConfig'
// - Resolved require(239057) to 'konva-core-config'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 215538
         */
module.exports = function (module, exports, require) {
  exports.Group = undefined;
  let konvaTransformUtil = require("konva-transform-util") /*id: 390581*/;
  let konvaContainerNode = require("konva-container-node") /*id: 757034*/;
  let konvaCoreConfig = require("konva-core-config") /*id: 239057*/;
  class s extends konvaContainerNode.Container {
    _validateAdd(t) {
      var e = t.getType();
      if (e !== "Group" && e !== "Shape") {
        konvaTransformUtil.Util.throw("You may only add groups and shapes to groups.");
      }
    }
  }
  exports.Group = s;
  s.prototype.nodeType = "Group";
  konvaCoreConfig._registerNode(s);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}