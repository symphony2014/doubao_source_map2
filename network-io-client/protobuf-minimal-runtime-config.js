// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(40638) to 'protobuf-writer'
// - Resolved require(288065) to 'protobuf-buffer-writer'
// - Resolved require(871389) to 'protobuf-buffer-reader_1'
// - Resolved require(277464) to 'protobuf-buffer-string-reader'
// - Resolved require(959925) to 'protobuf-utility-module_2'
// - Resolved require(921119) to 'rpc-client-service-export'
// - Resolved require(423469) to 'empty-module-object'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 918147
         */
module.exports = function (module, exports, require) {
  var n = exports;
  function i() {
    n.Reader._configure(n.BufferReader);
    n.util._configure();
  }
  n.build = "minimal";
  n.Writer = require("protobuf-writer") /*id: 40638*/;
  n.BufferWriter = require("protobuf-buffer-writer") /*id: 288065*/;
  n.Reader = require("protobuf-buffer-reader_1") /*id: 871389*/;
  n.BufferReader = require("protobuf-buffer-string-reader") /*id: 277464*/;
  n.util = require("protobuf-utility-module_2") /*id: 959925*/;
  n.rpc = require("rpc-client-service-export") /*id: 921119*/;
  n.roots = require("empty-module-object") /*id: 423469*/;
  n.configure = i;
  n.Writer._configure(n.BufferWriter);
  i();
}