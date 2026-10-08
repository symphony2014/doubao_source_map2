// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'protobufReflectionField'
// - Resolved require(153827) to 'protobuf-reflection-field'
// - Renamed variable 'n' to 'protobufFieldTypeMappings'
// - Resolved require(52800) to 'protobuf-field-type-mappings'
// - Renamed variable 's' to 'protobufDecoratorUtils'
// - Resolved require(848320) to 'protobuf-decorator-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 801227
         */
module.exports = function (module, exports, require) {
  module.exports = o;
  var protobufReflectionField = require("protobuf-reflection-field") /*id: 153827*/;
  ((o.prototype = Object.create(protobufReflectionField.prototype)).constructor = o).className = "MapField";
  var protobufFieldTypeMappings = require("protobuf-field-type-mappings") /*id: 52800*/;
  var protobufDecoratorUtils = require("protobuf-decorator-utils") /*id: 848320*/;
  function o(e, t, i, n, o, a) {
    protobufReflectionField.call(this, e, t, n, undefined, undefined, o, a);
    if (!protobufDecoratorUtils.isString(i)) {
      throw TypeError("keyType must be a string");
    }
    this.keyType = i;
    this.resolvedKeyType = null;
    this.map = true;
  }
  o.fromJSON = function (e, t) {
    return new o(e, t.id, t.keyType, t.type, t.options, t.comment);
  };
  o.prototype.toJSON = function (e) {
    var t = !!e && !!e.keepComments;
    return protobufDecoratorUtils.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : undefined]);
  };
  o.prototype.resolve = function () {
    if (this.resolved) {
      return this;
    }
    if (protobufFieldTypeMappings.mapKey[this.keyType] === undefined) {
      throw Error("invalid key type: " + this.keyType);
    }
    return protobufReflectionField.prototype.resolve.call(this);
  };
  o.d = function (e, t, i) {
    if (typeof i == "function") {
      i = protobufDecoratorUtils.decorateType(i).name;
    } else if (i && typeof i == "object") {
      i = protobufDecoratorUtils.decorateEnum(i).name;
    }
    return function (r, n) {
      protobufDecoratorUtils.decorateType(r.constructor).add(new o(n, e, t, i));
    };
  };
}