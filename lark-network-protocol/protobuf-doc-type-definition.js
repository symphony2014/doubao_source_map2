// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufDescriptorRootExport'
// - Resolved require(717712) to 'protobuf-descriptor-root-export'
// - Updated imported property 'J' to 'descriptorRoot' (module 717712)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 71298
         */
module.exports = function (module, exports, require) {
  var protobufDescriptorRootExport = require("protobuf-descriptor-root-export") /*id: 717712*/;
  let n = {
    DocType: {
      values: {
        UNKNOWN_DOC_TYPE: 0,
        DOC: 1,
        SHEET: 2,
        BITABLE: 3,
        MINDNOTE: 4,
        FILE: 5,
        SLIDE: 6,
        WIKI: 7,
        DOCX: 8,
        FOLDER: 9,
        CATALOG: 10,
        SLIDES: 11,
        SHORTCUT: 12
      }
    }
  };
  protobufDescriptorRootExport.descriptorRoot.define("entities").addJSON(n);
  n.DocType.values;
}