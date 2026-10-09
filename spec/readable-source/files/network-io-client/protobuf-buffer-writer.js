// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'protobufWriter'
// - Resolved require(40638) to 'protobuf-writer'
// - Renamed variable 'i' to 'protobufUtilityModule_2'
// - Resolved require(959925) to 'protobuf-utility-module_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 288065
         */
module.exports = function (module, exports, require) {
  module.exports = o;
  var protobufWriter = require("protobuf-writer") /*id: 40638*/;
  (o.prototype = Object.create(protobufWriter.prototype)).constructor = o;
  var protobufUtilityModule_2 = require("protobuf-utility-module_2") /*id: 959925*/;
  var s = protobufUtilityModule_2.Buffer;
  function o() {
    protobufWriter.call(this);
  }
  o.alloc = function (e) {
    return (o.alloc = protobufUtilityModule_2._Buffer_allocUnsafe)(e);
  };
  var a = s && s.prototype instanceof Uint8Array && s.prototype.set.name === "set" ? function (e, t, r) {
    t.set(e, r);
  } : function (e, t, r) {
    if (e.copy) {
      e.copy(t, r, 0, e.length);
    } else {
      for (var n = 0; n < e.length;) {
        t[r++] = e[n++];
      }
    }
  };
  function c(e, t, r) {
    if (e.length < 40) {
      protobufUtilityModule_2.utf8.write(e, t, r);
    } else {
      t.utf8Write(e, r);
    }
  }
  o.prototype.bytes = function (e) {
    if (protobufUtilityModule_2.isString(e)) {
      e = protobufUtilityModule_2._Buffer_from(e, "base64");
    }
    var t = e.length >>> 0;
    this.uint32(t);
    if (t) {
      this._push(a, t, e);
    }
    return this;
  };
  o.prototype.string = function (e) {
    var t = s.byteLength(e);
    this.uint32(t);
    if (t) {
      this._push(c, t, e);
    }
    return this;
  };
}