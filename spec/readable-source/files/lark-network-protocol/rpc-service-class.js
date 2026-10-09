// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufNamespace'
// - Resolved require(773111) to 'protobuf-namespace'
// - Renamed variable 'n' to 'rpcMethodDefinitionClass'
// - Resolved require(302733) to 'rpc-method-definition-class'
// - Renamed variable 's' to 'protobufDecoratorUtils'
// - Resolved require(848320) to 'protobuf-decorator-utils'
// - Renamed variable 'o' to 'serviceExport'
// - Resolved require(712976) to 'service-export'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 359414
         */
module.exports = function (module, exports, require) {
  module.exports = a;
  var protobufNamespace = require("protobuf-namespace") /*id: 773111*/;
  ((a.prototype = Object.create(protobufNamespace.prototype)).constructor = a).className = "Service";
  var rpcMethodDefinitionClass = require("rpc-method-definition-class") /*id: 302733*/;
  var protobufDecoratorUtils = require("protobuf-decorator-utils") /*id: 848320*/;
  var serviceExport = require("service-export") /*id: 712976*/;
  function a(e, t) {
    protobufNamespace.call(this, e, t);
    this.methods = {};
    this._methodsArray = null;
  }
  function l(e) {
    e._methodsArray = null;
    return e;
  }
  a.fromJSON = function (e, t) {
    var i = new a(e, t.options);
    if (t.methods) {
      var r = Object.keys(t.methods);
      var s = 0;
      for (; s < r.length; ++s) {
        i.add(rpcMethodDefinitionClass.fromJSON(r[s], t.methods[r[s]]));
      }
    }
    if (t.nested) {
      i.addJSON(t.nested);
    }
    i.comment = t.comment;
    return i;
  };
  a.prototype.toJSON = function (e) {
    var t = protobufNamespace.prototype.toJSON.call(this, e);
    var i = !!e && !!e.keepComments;
    return protobufDecoratorUtils.toObject(["options", t && t.options || undefined, "methods", protobufNamespace.arrayToJSON(this.methodsArray, e) || {}, "nested", t && t.nested || undefined, "comment", i ? this.comment : undefined]);
  };
  Object.defineProperty(a.prototype, "methodsArray", {
    get: function () {
      return this._methodsArray ||= protobufDecoratorUtils.toArray(this.methods);
    }
  });
  a.prototype.get = function (e) {
    return this.methods[e] || protobufNamespace.prototype.get.call(this, e);
  };
  a.prototype.resolveAll = function () {
    var e = this.methodsArray;
    var t = 0;
    for (; t < e.length; ++t) {
      e[t].resolve();
    }
    return protobufNamespace.prototype.resolve.call(this);
  };
  a.prototype.add = function (e) {
    if (this.get(e.name)) {
      throw Error("duplicate name '" + e.name + "' in " + this);
    }
    if (e instanceof rpcMethodDefinitionClass) {
      this.methods[e.name] = e;
      e.parent = this;
      return l(this);
    } else {
      return protobufNamespace.prototype.add.call(this, e);
    }
  };
  a.prototype.remove = function (e) {
    if (e instanceof rpcMethodDefinitionClass) {
      if (this.methods[e.name] !== e) {
        throw Error(e + " is not a member of " + this);
      }
      delete this.methods[e.name];
      e.parent = null;
      return l(this);
    }
    return protobufNamespace.prototype.remove.call(this, e);
  };
  a.prototype.create = function (e, t, i) {
    var r;
    var n = new serviceExport.Service(e, t, i);
    var a = 0;
    for (; a < this.methodsArray.length; ++a) {
      var l = protobufDecoratorUtils.lcFirst((r = this._methodsArray[a]).resolve().name).replace(/[^$\w_]/g, "");
      n[l] = protobufDecoratorUtils.codegen(["r", "c"], protobufDecoratorUtils.isReserved(l) ? l + "_" : l)("return this.rpcCall(m,q,s,r,c)")({
        m: r,
        q: r.resolvedRequestType.ctor,
        s: r.resolvedResponseType.ctor
      });
    }
    return n;
  };
}