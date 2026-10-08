// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reflectionObjectBaseClass'
// - Resolved require(812045) to 'reflection-object-base-class'
// - Renamed variable 'n' to 'protobufNamespace'
// - Resolved require(773111) to 'protobuf-namespace'
// - Renamed variable 's' to 'protobufDecoratorUtils'
// - Resolved require(848320) to 'protobuf-decorator-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 406982
         */
module.exports = function (module, exports, require) {
  module.exports = o;
  var reflectionObjectBaseClass = require("reflection-object-base-class") /*id: 812045*/;
  ((o.prototype = Object.create(reflectionObjectBaseClass.prototype)).constructor = o).className = "Enum";
  var protobufNamespace = require("protobuf-namespace") /*id: 773111*/;
  var protobufDecoratorUtils = require("protobuf-decorator-utils") /*id: 848320*/;
  function o(e, t, i, n, s) {
    reflectionObjectBaseClass.call(this, e, i);
    if (t && typeof t != "object") {
      throw TypeError("values must be an object");
    }
    this.valuesById = {};
    this.values = Object.create(this.valuesById);
    this.comment = n;
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
    var i = new o(e, t.values, t.options, t.comment, t.comments);
    i.reserved = t.reserved;
    return i;
  };
  o.prototype.toJSON = function (e) {
    var t = !!e && !!e.keepComments;
    return protobufDecoratorUtils.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", t ? this.comment : undefined, "comments", t ? this.comments : undefined]);
  };
  o.prototype.add = function (e, t, i) {
    if (!protobufDecoratorUtils.isString(e)) {
      throw TypeError("name must be a string");
    }
    if (!protobufDecoratorUtils.isInteger(t)) {
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
    this.comments[e] = i || null;
    return this;
  };
  o.prototype.remove = function (e) {
    if (!protobufDecoratorUtils.isString(e)) {
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
    return protobufNamespace.isReservedId(this.reserved, e);
  };
  o.prototype.isReservedName = function (e) {
    return protobufNamespace.isReservedName(this.reserved, e);
  };
}