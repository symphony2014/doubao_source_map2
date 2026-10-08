// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'protobufBufferReader_1'
// - Resolved require(871389) to 'protobuf-buffer-reader_1'
// - Renamed variable 'i' to 'protobufUtilityModule_2'
// - Resolved require(959925) to 'protobuf-utility-module_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 277464
         */
module.exports = function (module, exports, require) {
  module.exports = s;
  var protobufBufferReader_1 = require("protobuf-buffer-reader_1") /*id: 871389*/;
  (s.prototype = Object.create(protobufBufferReader_1.prototype)).constructor = s;
  var protobufUtilityModule_2 = require("protobuf-utility-module_2") /*id: 959925*/;
  function s(e) {
    protobufBufferReader_1.call(this, e);
  }
  if (protobufUtilityModule_2.Buffer) {
    s.prototype._slice = protobufUtilityModule_2.Buffer.prototype.slice;
  }
  s.prototype.string = function () {
    var e = this.uint32();
    return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len));
  };
}