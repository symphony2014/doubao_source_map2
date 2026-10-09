// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'protobufUtilityModule_3'
// - Resolved require(842874) to 'protobuf-utility-module_3'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ratio-whiteboard-canvas.13708e80.js
         * chunkId: 6682
         * moduleId: 510066
         */
module.exports = function (module, exports, require) {
  module.exports = r;
  var protobufUtilityModule_3 = require("protobuf-utility-module_3") /*id: 842874*/;
  function r(e, t, o) {
    if (typeof e != "function") {
      throw TypeError("rpcImpl must be a function");
    }
    protobufUtilityModule_3.EventEmitter.call(this);
    this.rpcImpl = e;
    this.requestDelimited = !!t;
    this.responseDelimited = !!o;
  }
  (r.prototype = Object.create(protobufUtilityModule_3.EventEmitter.prototype)).constructor = r;
  r.prototype.rpcCall = function e(t, o, r, i, a) {
    if (!i) {
      throw TypeError("request must be specified");
    }
    var s = this;
    if (!a) {
      return protobufUtilityModule_3.asPromise(e, s, t, o, r, i);
    }
    if (!s.rpcImpl) {
      setTimeout(function () {
        a(Error("already ended"));
      }, 0);
      return;
    }
    try {
      return s.rpcImpl(t, o[s.requestDelimited ? "encodeDelimited" : "encode"](i).finish(), function (e, o) {
        if (e) {
          s.emit("error", e, t);
          return a(e);
        }
        if (o === null) {
          s.end(true);
          return;
        }
        if (!(o instanceof r)) {
          try {
            o = r[s.responseDelimited ? "decodeDelimited" : "decode"](o);
          } catch (e) {
            s.emit("error", e, t);
            return a(e);
          }
        }
        s.emit("data", o, t);
        return a(null, o);
      });
    } catch (e) {
      s.emit("error", e, t);
      setTimeout(function () {
        a(e);
      }, 0);
      return;
    }
  };
  r.prototype.end = function (e) {
    if (this.rpcImpl) {
      if (!e) {
        this.rpcImpl(null, null, null);
      }
      this.rpcImpl = null;
      this.emit("end").off();
    }
    return this;
  };
}