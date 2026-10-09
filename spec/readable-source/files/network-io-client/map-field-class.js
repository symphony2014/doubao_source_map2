// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'protobufFieldDefinition'
// - Resolved require(62763) to 'protobuf-field-definition'
// - Renamed variable 'i' to 'protobufTypeDefaults'
// - Resolved require(673143) to 'protobuf-type-defaults'
// - Renamed variable 's' to 'protobufUtilityModule_1'
// - Resolved require(285145) to 'protobuf-utility-module_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 11234
         */
module.exports = function (module, exports, require) {
  module.exports = o;
  var protobufFieldDefinition = require("protobuf-field-definition") /*id: 62763*/;
  ((o.prototype = Object.create(protobufFieldDefinition.prototype)).constructor = o).className = "MapField";
  var protobufTypeDefaults = require("protobuf-type-defaults") /*id: 673143*/;
  var protobufUtilityModule_1 = require("protobuf-utility-module_1") /*id: 285145*/;
  function o(e, t, r, i, o, a) {
    protobufFieldDefinition.call(this, e, t, i, undefined, undefined, o, a);
    if (!protobufUtilityModule_1.isString(r)) {
      throw TypeError("keyType must be a string");
    }
    this.keyType = r;
    this.resolvedKeyType = null;
    this.map = true;
  }
  o.fromJSON = function (e, t) {
    return new o(e, t.id, t.keyType, t.type, t.options, t.comment);
  };
  o.prototype.toJSON = function (e) {
    var t = !!e && !!e.keepComments;
    return protobufUtilityModule_1.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : undefined]);
  };
  o.prototype.resolve = function () {
    if (this.resolved) {
      return this;
    }
    if (protobufTypeDefaults.mapKey[this.keyType] === undefined) {
      throw Error("invalid key type: " + this.keyType);
    }
    return protobufFieldDefinition.prototype.resolve.call(this);
  };
  o.d = function (e, t, r) {
    if (typeof r == "function") {
      r = protobufUtilityModule_1.decorateType(r).name;
    } else if (r && typeof r == "object") {
      r = protobufUtilityModule_1.decorateEnum(r).name;
    }
    return function (n, i) {
      protobufUtilityModule_1.decorateType(n.constructor).add(new o(i, e, t, r));
    };
  };
}