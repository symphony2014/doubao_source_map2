// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufWriterBuffer'
// - Resolved require(57830) to 'protobuf-writer-buffer'
// - Renamed variable 'n' to 'protobufUtilityModule'
// - Resolved require(127374) to 'protobuf-utility-module'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 428007
         */
module.exports = function (module, exports, require) {
  module.exports = s;
  var protobufWriterBuffer = require("protobuf-writer-buffer") /*id: 57830*/;
  (s.prototype = Object.create(protobufWriterBuffer.prototype)).constructor = s;
  var protobufUtilityModule = require("protobuf-utility-module") /*id: 127374*/;
  function s() {
    protobufWriterBuffer.call(this);
  }
  function o(e, t, i) {
    if (e.length < 40) {
      protobufUtilityModule.utf8.write(e, t, i);
    } else if (t.utf8Write) {
      t.utf8Write(e, i);
    } else {
      t.write(e, i);
    }
  }
  s._configure = function () {
    s.alloc = protobufUtilityModule._Buffer_allocUnsafe;
    s.writeBytesBuffer = protobufUtilityModule.Buffer && protobufUtilityModule.Buffer.prototype instanceof Uint8Array && protobufUtilityModule.Buffer.prototype.set.name === "set" ? function (e, t, i) {
      t.set(e, i);
    } : function (e, t, i) {
      if (e.copy) {
        e.copy(t, i, 0, e.length);
      } else {
        for (var r = 0; r < e.length;) {
          t[i++] = e[r++];
        }
      }
    };
  };
  s.prototype.bytes = function (e) {
    if (protobufUtilityModule.isString(e)) {
      e = protobufUtilityModule._Buffer_from(e, "base64");
    }
    var t = e.length >>> 0;
    this.uint32(t);
    if (t) {
      this._push(s.writeBytesBuffer, t, e);
    }
    return this;
  };
  s.prototype.string = function (e) {
    var t = protobufUtilityModule.Buffer.byteLength(e);
    this.uint32(t);
    if (t) {
      this._push(o, t, e);
    }
    return this;
  };
  s._configure();
}