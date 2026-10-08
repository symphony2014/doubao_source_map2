// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'protobufBinaryReader_1'
// - Resolved require(842116) to 'protobuf-binary-reader_1'
// - Renamed variable 'r' to 'protobufUtilityModule_3'
// - Resolved require(842874) to 'protobuf-utility-module_3'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ratio-whiteboard-canvas.13708e80.js
         * chunkId: 6682
         * moduleId: 832050
         */
module.exports = function (module, exports, require) {
  module.exports = i;
  var protobufBinaryReader_1 = require("protobuf-binary-reader_1") /*id: 842116*/;
  (i.prototype = Object.create(protobufBinaryReader_1.prototype)).constructor = i;
  var protobufUtilityModule_3 = require("protobuf-utility-module_3") /*id: 842874*/;
  function i(e) {
    protobufBinaryReader_1.call(this, e);
  }
  i._configure = function () {
    if (protobufUtilityModule_3.Buffer) {
      i.prototype._slice = protobufUtilityModule_3.Buffer.prototype.slice;
    }
  };
  i.prototype.string = function () {
    var e = this.uint32();
    if (this.buf.utf8Slice) {
      return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len));
    } else {
      return this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
    }
  };
  i._configure();
}