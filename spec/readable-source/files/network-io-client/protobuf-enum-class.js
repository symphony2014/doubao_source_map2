// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reflectionObject'
// - Resolved require(917994) to 'reflection-object'
// - Renamed variable 'i' to 'protobufNamespaceReflectionObject'
// - Resolved require(32548) to 'protobuf-namespace-reflection-object'
// - Renamed variable 's' to 'protobufUtilityModule_1'
// - Resolved require(285145) to 'protobuf-utility-module_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 767548
         */
module.exports = function (module, exports, require) {
  module.exports = o;
  var reflectionObject = require("reflection-object") /*id: 917994*/;
  ((o.prototype = Object.create(reflectionObject.prototype)).constructor = o).className = "Enum";
  var protobufNamespaceReflectionObject = require("protobuf-namespace-reflection-object") /*id: 32548*/;
  var protobufUtilityModule_1 = require("protobuf-utility-module_1") /*id: 285145*/;
  function o(e, t, r, i, s) {
    reflectionObject.call(this, e, r);
    if (t && typeof t != "object") {
      throw TypeError("values must be an object");
    }
    this.valuesById = {};
    this.values = Object.create(this.valuesById);
    this.comment = i;
    this.comments = s || {};
    this.reserved = undefined;
    if (t) {
      var o = Object.keys(t);
      var a = 0;
      for (; a < o.length; ++a) {
        if (typeof t[o[a]] == "number") {
          this.valuesById[this.values[o[a]] = t[o[a]]] = o[a];
        }
      }
    }
  }
  o.fromJSON = function (e, t) {
    var r = new o(e, t.values, t.options, t.comment, t.comments);
    r.reserved = t.reserved;
    return r;
  };
  o.prototype.toJSON = function (e) {
    var t = !!e && !!e.keepComments;
    return protobufUtilityModule_1.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", t ? this.comment : undefined, "comments", t ? this.comments : undefined]);
  };
  o.prototype.add = function (e, t, r) {
    if (!protobufUtilityModule_1.isString(e)) {
      throw TypeError("name must be a string");
    }
    if (!protobufUtilityModule_1.isInteger(t)) {
      throw TypeError("id must be an integer");
    }
    if (this.values[e] !== undefined) {
      throw Error("duplicate name '" + e + "' in " + this);
    }
    if (this.isReservedId(t)) {
      throw Error("id " + t + " is reserved in " + this);
    }
    if (this.isReservedName(e)) {
      throw Error("name '" + e + "' is reserved in " + this);
    }
    if (this.valuesById[t] !== undefined) {
      if (!this.options || !this.options.allow_alias) {
        throw Error("duplicate id " + t + " in " + this);
      }
      this.values[e] = t;
    } else {
      this.valuesById[this.values[e] = t] = e;
    }
    this.comments[e] = r || null;
    return this;
  };
  o.prototype.remove = function (e) {
    if (!protobufUtilityModule_1.isString(e)) {
      throw TypeError("name must be a string");
    }
    var t = this.values[e];
    if (t == null) {
      throw Error("name '" + e + "' does not exist in " + this);
    }
    delete this.valuesById[t];
    delete this.values[e];
    delete this.comments[e];
    return this;
  };
  o.prototype.isReservedId = function (e) {
    return protobufNamespaceReflectionObject.isReservedId(this.reserved, e);
  };
  o.prototype.isReservedName = function (e) {
    return protobufNamespaceReflectionObject.isReservedName(this.reserved, e);
  };
}