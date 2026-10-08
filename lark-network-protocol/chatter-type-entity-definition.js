// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufDescriptorRootExport'
// - Resolved require(717712) to 'protobuf-descriptor-root-export'
// - Updated imported property 'J' to 'descriptorRoot' (module 717712)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 328408
         */
module.exports = function (module, exports, require) {
  var protobufDescriptorRootExport = require("protobuf-descriptor-root-export") /*id: 717712*/;
  let n = {
    ChatterType: {
      values: {
        UNKNOWN_CHATTER: 0,
        USER: 1,
        BOT: 2,
        AI: 3
      }
    }
  };
  protobufDescriptorRootExport.descriptorRoot.define("entities").addJSON(n);
  n.ChatterType.values;
}