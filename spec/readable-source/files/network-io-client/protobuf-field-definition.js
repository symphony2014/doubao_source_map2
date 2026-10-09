// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reflectionObject'
// - Resolved require(917994) to 'reflection-object'
// - Renamed variable 's' to 'protobufEnumClass'
// - Resolved require(767548) to 'protobuf-enum-class'
// - Renamed variable 'o' to 'protobufTypeDefaults'
// - Resolved require(673143) to 'protobuf-type-defaults'
// - Renamed variable 'a' to 'protobufUtilityModule_1'
// - Resolved require(285145) to 'protobuf-utility-module_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 62763
         */
module.exports = function (module, exports, require) {
  module.exports = l;
  var n;
  var reflectionObject = require("reflection-object") /*id: 917994*/;
  ((l.prototype = Object.create(reflectionObject.prototype)).constructor = l).className = "Field";
  var protobufEnumClass = require("protobuf-enum-class") /*id: 767548*/;
  var protobufTypeDefaults = require("protobuf-type-defaults") /*id: 673143*/;
  var protobufUtilityModule_1 = require("protobuf-utility-module_1") /*id: 285145*/;
  var c = /^required|optional|repeated$/;
  function l(e, t, r, n, s, l, h) {
    if (protobufUtilityModule_1.isObject(n)) {
      h = s;
      l = n;
      n = s = undefined;
    } else if (protobufUtilityModule_1.isObject(s)) {
      h = l;
      l = s;
      s = undefined;
    }
    reflectionObject.call(this, e, l);
    if (!protobufUtilityModule_1.isInteger(t) || t < 0) {
      throw TypeError("id must be a non-negative integer");
    }
    if (!protobufUtilityModule_1.isString(r)) {
      throw TypeError("type must be a string");
    }
    if (n !== undefined && !c.test(n = n.toString().toLowerCase())) {
      throw TypeError("rule must be a string rule");
    }
    if (s !== undefined && !protobufUtilityModule_1.isString(s)) {
      throw TypeError("extend must be a string");
    }
    this.rule = n && n !== "optional" ? n : undefined;
    this.type = r;
    this.id = t;
    this.extend = s || undefined;
    this.required = n === "required";
    this.optional = !this.required;
    this.repeated = n === "repeated";
    this.map = false;
    this.message = null;
    this.partOf = null;
    this.typeDefault = null;
    this.defaultValue = null;
    this.long = !!protobufUtilityModule_1.Long && protobufTypeDefaults.long[r] !== undefined;
    this.bytes = r === "bytes";
    this.resolvedType = null;
    this.extensionField = null;
    this.declaringField = null;
    this._packed = null;
    this.comment = h;
  }
  l.fromJSON = function (e, t) {
    return new l(e, t.id, t.type, t.rule, t.extend, t.options, t.comment);
  };
  Object.defineProperty(l.prototype, "packed", {
    get: function () {
      if (this._packed === null) {
        this._packed = this.getOption("packed") !== false;
      }
      return this._packed;
    }
  });
  l.prototype.setOption = function (e, t, r) {
    if (e === "packed") {
      this._packed = null;
    }
    return reflectionObject.prototype.setOption.call(this, e, t, r);
  };
  l.prototype.toJSON = function (e) {
    var t = !!e && !!e.keepComments;
    return protobufUtilityModule_1.toObject(["rule", this.rule !== "optional" && this.rule || undefined, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : undefined]);
  };
  l.prototype.resolve = function () {
    if (this.resolved) {
      return this;
    }
    if ((this.typeDefault = protobufTypeDefaults.defaults[this.type]) === undefined) {
      this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
      if (this.resolvedType instanceof n) {
        this.typeDefault = null;
      } else {
        this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
      }
    }
    if (this.options && this.options.default != null) {
      this.typeDefault = this.options.default;
      if (this.resolvedType instanceof protobufEnumClass && typeof this.typeDefault == "string") {
        this.typeDefault = this.resolvedType.values[this.typeDefault];
      }
    }
    if (this.options) {
      if (this.options.packed === true || this.options.packed !== undefined && !!this.resolvedType && !(this.resolvedType instanceof protobufEnumClass)) {
        delete this.options.packed;
      }
      if (!Object.keys(this.options).length) {
        this.options = undefined;
      }
    }
    if (this.long) {
      this.typeDefault = protobufUtilityModule_1.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u");
      if (Object.freeze) {
        Object.freeze(this.typeDefault);
      }
    } else if (this.bytes && typeof this.typeDefault == "string") {
      var e;
      if (protobufUtilityModule_1.base64.test(this.typeDefault)) {
        protobufUtilityModule_1.base64.decode(this.typeDefault, e = protobufUtilityModule_1.newBuffer(protobufUtilityModule_1.base64.length(this.typeDefault)), 0);
      } else {
        protobufUtilityModule_1.utf8.write(this.typeDefault, e = protobufUtilityModule_1.newBuffer(protobufUtilityModule_1.utf8.length(this.typeDefault)), 0);
      }
      this.typeDefault = e;
    }
    if (this.map) {
      this.defaultValue = protobufUtilityModule_1.emptyObject;
    } else if (this.repeated) {
      this.defaultValue = protobufUtilityModule_1.emptyArray;
    } else {
      this.defaultValue = this.typeDefault;
    }
    if (this.parent instanceof n) {
      this.parent.ctor.prototype[this.name] = this.defaultValue;
    }
    return reflectionObject.prototype.resolve.call(this);
  };
  l.d = function (e, t, r, n) {
    if (typeof t == "function") {
      t = protobufUtilityModule_1.decorateType(t).name;
    } else if (t && typeof t == "object") {
      t = protobufUtilityModule_1.decorateEnum(t).name;
    }
    return function (i, s) {
      protobufUtilityModule_1.decorateType(i.constructor).add(new l(s, e, t, r, {
        default: n
      }));
    };
  };
  l._configure = function (e) {
    n = e;
  };
}