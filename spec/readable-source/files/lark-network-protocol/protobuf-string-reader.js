// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufBinaryReader'
// - Resolved require(413114) to 'protobuf-binary-reader'
// - Renamed variable 'n' to 'protobufUtilityModule'
// - Resolved require(127374) to 'protobuf-utility-module'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 310383
         */
module.exports = function (module, exports, require) {
  module.exports = s;
  var protobufBinaryReader = require("protobuf-binary-reader") /*id: 413114*/;
  (s.prototype = Object.create(protobufBinaryReader.prototype)).constructor = s;
  var protobufUtilityModule = require("protobuf-utility-module") /*id: 127374*/;
  function s(e) {
    protobufBinaryReader.call(this, e);
  }
  s._configure = function () {
    if (protobufUtilityModule.Buffer) {
      s.prototype._slice = protobufUtilityModule.Buffer.prototype.slice;
    }
  };
  s.prototype.string = function () {
    var e = this.uint32();
    if (this.buf.utf8Slice) {
      return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len));
    } else {
      return this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
    }
  };
  s._configure();
}