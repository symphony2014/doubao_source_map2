// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(592289) to 'protobuf-light-build-config_1'
// - Resolved require(810513) to 'comment-lexer-util'
// - Resolved require(442242) to 'protobuf-parser'
// - Resolved require(234444) to 'protobuf-common-types-registry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 714505
         */
module.exports = function (module, exports, require) {
  var n = module.exports = require("protobuf-light-build-config_1") /*id: 592289*/;
  n.build = "full";
  n.tokenize = require("comment-lexer-util") /*id: 810513*/;
  n.parse = require("protobuf-parser") /*id: 442242*/;
  n.common = require("protobuf-common-types-registry") /*id: 234444*/;
  n.Root._configure(n.Type, n.parse, n.common);
}