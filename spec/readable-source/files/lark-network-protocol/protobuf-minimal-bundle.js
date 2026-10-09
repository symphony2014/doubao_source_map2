// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(57830) to 'protobuf-writer-buffer'
// - Resolved require(428007) to 'protobuf-writer-impl'
// - Resolved require(413114) to 'protobuf-binary-reader'
// - Resolved require(310383) to 'protobuf-string-reader'
// - Resolved require(127374) to 'protobuf-utility-module'
// - Resolved require(712976) to 'service-export'
// - Resolved require(310479) to 'empty-module-stub_3'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 872871
         */
module.exports = function (module, exports, require) {
  function r() {
    exports.util._configure();
    exports.Writer._configure(exports.BufferWriter);
    exports.Reader._configure(exports.BufferReader);
  }
  exports.build = "minimal";
  exports.Writer = require("protobuf-writer-buffer") /*id: 57830*/;
  exports.BufferWriter = require("protobuf-writer-impl") /*id: 428007*/;
  exports.Reader = require("protobuf-binary-reader") /*id: 413114*/;
  exports.BufferReader = require("protobuf-string-reader") /*id: 310383*/;
  exports.util = require("protobuf-utility-module") /*id: 127374*/;
  exports.rpc = require("service-export") /*id: 712976*/;
  exports.roots = require("empty-module-stub_3") /*id: 310479*/;
  exports.configure = r;
  r();
}