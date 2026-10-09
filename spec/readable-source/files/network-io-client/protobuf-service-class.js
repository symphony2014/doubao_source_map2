// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'protobufNamespaceReflectionObject'
// - Resolved require(32548) to 'protobuf-namespace-reflection-object'
// - Renamed variable 'i' to 'rpcMethodClass'
// - Resolved require(627278) to 'rpc-method-class'
// - Renamed variable 's' to 'protobufUtilityModule_1'
// - Resolved require(285145) to 'protobuf-utility-module_1'
// - Renamed variable 'o' to 'rpcClientServiceExport'
// - Resolved require(921119) to 'rpc-client-service-export'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 658249
         */
module.exports = function (module, exports, require) {
  module.exports = a;
  var protobufNamespaceReflectionObject = require("protobuf-namespace-reflection-object") /*id: 32548*/;
  ((a.prototype = Object.create(protobufNamespaceReflectionObject.prototype)).constructor = a).className = "Service";
  var rpcMethodClass = require("rpc-method-class") /*id: 627278*/;
  var protobufUtilityModule_1 = require("protobuf-utility-module_1") /*id: 285145*/;
  var rpcClientServiceExport = require("rpc-client-service-export") /*id: 921119*/;
  function a(e, t) {
    protobufNamespaceReflectionObject.call(this, e, t);
    this.methods = {};
    this._methodsArray = null;
  }
  function c(e) {
    e._methodsArray = null;
    return e;
  }
  a.fromJSON = function (e, t) {
    var r = new a(e, t.options);
    if (t.methods) {
      var n = Object.keys(t.methods);
      var s = 0;
      for (; s < n.length; ++s) {
        r.add(rpcMethodClass.fromJSON(n[s], t.methods[n[s]]));
      }
    }
    if (t.nested) {
      r.addJSON(t.nested);
    }
    r.comment = t.comment;
    return r;
  };
  a.prototype.toJSON = function (e) {
    var t = protobufNamespaceReflectionObject.prototype.toJSON.call(this, e);
    var r = !!e && !!e.keepComments;
    return protobufUtilityModule_1.toObject(["options", t && t.options || undefined, "methods", protobufNamespaceReflectionObject.arrayToJSON(this.methodsArray, e) || {}, "nested", t && t.nested || undefined, "comment", r ? this.comment : undefined]);
  };
  Object.defineProperty(a.prototype, "methodsArray", {
    get: function () {
      return this._methodsArray ||= protobufUtilityModule_1.toArray(this.methods);
    }
  });
  a.prototype.get = function (e) {
    return this.methods[e] || protobufNamespaceReflectionObject.prototype.get.call(this, e);
  };
  a.prototype.resolveAll = function () {
    var e = this.methodsArray;
    var t = 0;
    for (; t < e.length; ++t) {
      e[t].resolve();
    }
    return protobufNamespaceReflectionObject.prototype.resolve.call(this);
  };
  a.prototype.add = function (e) {
    if (this.get(e.name)) {
      throw Error("duplicate name '" + e.name + "' in " + this);
    }
    if (e instanceof rpcMethodClass) {
      this.methods[e.name] = e;
      e.parent = this;
      return c(this);
    } else {
      return protobufNamespaceReflectionObject.prototype.add.call(this, e);
    }
  };
  a.prototype.remove = function (e) {
    if (e instanceof rpcMethodClass) {
      if (this.methods[e.name] !== e) {
        throw Error(e + " is not a member of " + this);
      }
      delete this.methods[e.name];
      e.parent = null;
      return c(this);
    }
    return protobufNamespaceReflectionObject.prototype.remove.call(this, e);
  };
  a.prototype.create = function (e, t, r) {
    var n;
    var i = new rpcClientServiceExport.Service(e, t, r);
    var a = 0;
    for (; a < this.methodsArray.length; ++a) {
      var c = protobufUtilityModule_1.lcFirst((n = this._methodsArray[a]).resolve().name).replace(/[^$\w_]/g, "");
      i[c] = protobufUtilityModule_1.codegen(["r", "c"], protobufUtilityModule_1.isReserved(c) ? c + "_" : c)("return this.rpcCall(m,q,s,r,c)")({
        m: n,
        q: n.resolvedRequestType.ctor,
        s: n.resolvedResponseType.ctor
      });
    }
    return i;
  };
}