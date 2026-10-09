// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'protobufUtilityModule_2'
// - Resolved require(959925) to 'protobuf-utility-module_2'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 491134
         */
module.exports = function (module, exports, require) {
  module.exports = i;
  var protobufUtilityModule_2 = require("protobuf-utility-module_2") /*id: 959925*/;
  function i(e, t, r) {
    if (typeof e != "function") {
      throw TypeError("rpcImpl must be a function");
    }
    protobufUtilityModule_2.EventEmitter.call(this);
    this.rpcImpl = e;
    this.requestDelimited = !!t;
    this.responseDelimited = !!r;
  }
  (i.prototype = Object.create(protobufUtilityModule_2.EventEmitter.prototype)).constructor = i;
  i.prototype.rpcCall = function e(t, r, i, s, o) {
    if (!s) {
      throw TypeError("request must be specified");
    }
    var a = this;
    if (!o) {
      return protobufUtilityModule_2.asPromise(e, a, t, r, i, s);
    }
    if (!a.rpcImpl) {
      setTimeout(function () {
        o(Error("already ended"));
      }, 0);
      return;
    }
    try {
      return a.rpcImpl(t, r[a.requestDelimited ? "encodeDelimited" : "encode"](s).finish(), function (e, r) {
        if (e) {
          a.emit("error", e, t);
          return o(e);
        }
        if (r === null) {
          a.end(true);
          return;
        }
        if (!(r instanceof i)) {
          try {
            r = i[a.responseDelimited ? "decodeDelimited" : "decode"](r);
          } catch (e) {
            a.emit("error", e, t);
            return o(e);
          }
        }
        a.emit("data", r, t);
        return o(null, r);
      });
    } catch (e) {
      a.emit("error", e, t);
      setTimeout(function () {
        o(e);
      }, 0);
      return;
    }
  };
  i.prototype.end = function (e) {
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