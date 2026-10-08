// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reflectionObject'
// - Resolved require(917994) to 'reflection-object'
// - Renamed variable 'i' to 'protobufUtilityModule_1'
// - Resolved require(285145) to 'protobuf-utility-module_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 627278
         */
module.exports = function (module, exports, require) {
  module.exports = s;
  var reflectionObject = require("reflection-object") /*id: 917994*/;
  ((s.prototype = Object.create(reflectionObject.prototype)).constructor = s).className = "Method";
  var protobufUtilityModule_1 = require("protobuf-utility-module_1") /*id: 285145*/;
  function s(e, t, r, s, o, a, c, l) {
    if (protobufUtilityModule_1.isObject(o)) {
      c = o;
      o = a = undefined;
    } else if (protobufUtilityModule_1.isObject(a)) {
      c = a;
      a = undefined;
    }
    if (t !== undefined && !protobufUtilityModule_1.isString(t)) {
      throw TypeError("type must be a string");
    }
    if (!protobufUtilityModule_1.isString(r)) {
      throw TypeError("requestType must be a string");
    }
    if (!protobufUtilityModule_1.isString(s)) {
      throw TypeError("responseType must be a string");
    }
    reflectionObject.call(this, e, c);
    this.type = t || "rpc";
    this.requestType = r;
    this.requestStream = !!o || undefined;
    this.responseType = s;
    this.responseStream = !!a || undefined;
    this.resolvedRequestType = null;
    this.resolvedResponseType = null;
    this.comment = l;
  }
  s.fromJSON = function (e, t) {
    return new s(e, t.type, t.requestType, t.responseType, t.requestStream, t.responseStream, t.options, t.comment);
  };
  s.prototype.toJSON = function (e) {
    var t = !!e && !!e.keepComments;
    return protobufUtilityModule_1.toObject(["type", this.type !== "rpc" && this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", t ? this.comment : undefined]);
  };
  s.prototype.resolve = function () {
    if (this.resolved) {
      return this;
    } else {
      this.resolvedRequestType = this.parent.lookupType(this.requestType);
      this.resolvedResponseType = this.parent.lookupType(this.responseType);
      return reflectionObject.prototype.resolve.call(this);
    }
  };
}