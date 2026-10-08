// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reflectionObjectBaseClass'
// - Resolved require(812045) to 'reflection-object-base-class'
// - Renamed variable 'n' to 'protobufDecoratorUtils'
// - Resolved require(848320) to 'protobuf-decorator-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 302733
         */
module.exports = function (module, exports, require) {
  module.exports = s;
  var reflectionObjectBaseClass = require("reflection-object-base-class") /*id: 812045*/;
  ((s.prototype = Object.create(reflectionObjectBaseClass.prototype)).constructor = s).className = "Method";
  var protobufDecoratorUtils = require("protobuf-decorator-utils") /*id: 848320*/;
  function s(e, t, i, s, o, a, l, u, d) {
    if (protobufDecoratorUtils.isObject(o)) {
      l = o;
      o = a = undefined;
    } else if (protobufDecoratorUtils.isObject(a)) {
      l = a;
      a = undefined;
    }
    if (t !== undefined && !protobufDecoratorUtils.isString(t)) {
      throw TypeError("type must be a string");
    }
    if (!protobufDecoratorUtils.isString(i)) {
      throw TypeError("requestType must be a string");
    }
    if (!protobufDecoratorUtils.isString(s)) {
      throw TypeError("responseType must be a string");
    }
    reflectionObjectBaseClass.call(this, e, l);
    this.type = t || "rpc";
    this.requestType = i;
    this.requestStream = !!o || undefined;
    this.responseType = s;
    this.responseStream = !!a || undefined;
    this.resolvedRequestType = null;
    this.resolvedResponseType = null;
    this.comment = u;
    this.parsedOptions = d;
  }
  s.fromJSON = function (e, t) {
    return new s(e, t.type, t.requestType, t.responseType, t.requestStream, t.responseStream, t.options, t.comment, t.parsedOptions);
  };
  s.prototype.toJSON = function (e) {
    var t = !!e && !!e.keepComments;
    return protobufDecoratorUtils.toObject(["type", this.type !== "rpc" && this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", t ? this.comment : undefined, "parsedOptions", this.parsedOptions]);
  };
  s.prototype.resolve = function () {
    if (this.resolved) {
      return this;
    } else {
      this.resolvedRequestType = this.parent.lookupType(this.requestType);
      this.resolvedResponseType = this.parent.lookupType(this.responseType);
      return reflectionObjectBaseClass.prototype.resolve.call(this);
    }
  };
}