// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'protobufWriterBufferImplementation'
// - Resolved require(436943) to 'protobuf-writer-buffer-implementation'
// - Renamed variable 'r' to 'protobufUtilityModule_3'
// - Resolved require(842874) to 'protobuf-utility-module_3'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ratio-whiteboard-canvas.13708e80.js
         * chunkId: 6682
         * moduleId: 386399
         */
module.exports = function (module, exports, require) {
  module.exports = i;
  var protobufWriterBufferImplementation = require("protobuf-writer-buffer-implementation") /*id: 436943*/;
  (i.prototype = Object.create(protobufWriterBufferImplementation.prototype)).constructor = i;
  var protobufUtilityModule_3 = require("protobuf-utility-module_3") /*id: 842874*/;
  function i() {
    protobufWriterBufferImplementation.call(this);
  }
  function a(e, t, o) {
    if (e.length < 40) {
      protobufUtilityModule_3.utf8.write(e, t, o);
    } else if (t.utf8Write) {
      t.utf8Write(e, o);
    } else {
      t.write(e, o);
    }
  }
  i._configure = function () {
    i.alloc = protobufUtilityModule_3._Buffer_allocUnsafe;
    i.writeBytesBuffer = protobufUtilityModule_3.Buffer && protobufUtilityModule_3.Buffer.prototype instanceof Uint8Array && protobufUtilityModule_3.Buffer.prototype.set.name === "set" ? function (e, t, o) {
      t.set(e, o);
    } : function (e, t, o) {
      if (e.copy) {
        e.copy(t, o, 0, e.length);
      } else {
        for (var n = 0; n < e.length;) {
          t[o++] = e[n++];
        }
      }
    };
  };
  i.prototype.bytes = function (e) {
    if (protobufUtilityModule_3.isString(e)) {
      e = protobufUtilityModule_3._Buffer_from(e, "base64");
    }
    var t = e.length >>> 0;
    this.uint32(t);
    if (t) {
      this._push(i.writeBytesBuffer, t, e);
    }
    return this;
  };
  i.prototype.string = function (e) {
    var t = protobufUtilityModule_3.Buffer.byteLength(e);
    this.uint32(t);
    if (t) {
      this._push(a, t, e);
    }
    return this;
  };
  i._configure();
}