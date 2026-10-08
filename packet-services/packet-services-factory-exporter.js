// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'c' to 'packetServicesFactory'
// - Resolved require(107954) to 'packet-services-factory'
// - Resolved require(78612) to 'mermaid-langium-grammars'
// - Updated imported property 'g' to 'createPacketServices' (module 107954)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 98728.128e1b27.js
         * chunkId: 98728
         * moduleId: 353267
         */
module.exports = function (module, exports, require) {
  var packetServicesFactory = require("packet-services-factory") /*id: 107954*/;
  require("mermaid-langium-grammars") /*id: 78612*/;
  require.d(exports, {
    createPacketServices: function () {
      return packetServicesFactory.createPacketServices;
    }
  });
}