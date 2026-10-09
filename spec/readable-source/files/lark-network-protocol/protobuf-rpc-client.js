// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufUtilityModule'
// - Resolved require(127374) to 'protobuf-utility-module'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 769372
         */
module.exports = function (module, exports, require) {
  module.exports = n;
  var protobufUtilityModule = require("protobuf-utility-module") /*id: 127374*/;
  function n(e, t, i) {
    if (typeof e != "function") {
      throw TypeError("rpcImpl must be a function");
    }
    protobufUtilityModule.EventEmitter.call(this);
    this.rpcImpl = e;
    this.requestDelimited = !!t;
    this.responseDelimited = !!i;
  }
  (n.prototype = Object.create(protobufUtilityModule.EventEmitter.prototype)).constructor = n;
  n.prototype.rpcCall = function e(t, i, n, s, o) {
    if (!s) {
      throw TypeError("request must be specified");
    }
    var a = this;
    if (!o) {
      return protobufUtilityModule.asPromise(e, a, t, i, n, s);
    }
    if (!a.rpcImpl) {
      setTimeout(function () {
        o(Error("already ended"));
      }, 0);
      return;
    }
    try {
      return a.rpcImpl(t, i[a.requestDelimited ? "encodeDelimited" : "encode"](s).finish(), function (e, i) {
        if (e) {
          a.emit("error", e, t);
          return o(e);
        }
        if (i === null) {
          a.end(true);
          return;
        }
        if (!(i instanceof n)) {
          try {
            i = n[a.responseDelimited ? "decodeDelimited" : "decode"](i);
          } catch (e) {
            a.emit("error", e, t);
            return o(e);
          }
        }
        a.emit("data", i, t);
        return o(null, i);
      });
    } catch (e) {
      a.emit("error", e, t);
      setTimeout(function () {
        o(e);
      }, 0);
      return;
    }
  };
  n.prototype.end = function (e) {
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