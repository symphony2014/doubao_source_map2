// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reflectionObjectBaseClass'
// - Resolved require(812045) to 'reflection-object-base-class'
// - Renamed variable 's' to 'protobufEnumClassModule'
// - Resolved require(406982) to 'protobuf-enum-class-module'
// - Renamed variable 'o' to 'protobufFieldTypeMappings'
// - Resolved require(52800) to 'protobuf-field-type-mappings'
// - Renamed variable 'a' to 'protobufDecoratorUtils'
// - Resolved require(848320) to 'protobuf-decorator-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 153827
         */
module.exports = function (module, exports, require) {
  module.exports = u;
  var r;
  var reflectionObjectBaseClass = require("reflection-object-base-class") /*id: 812045*/;
  ((u.prototype = Object.create(reflectionObjectBaseClass.prototype)).constructor = u).className = "Field";
  var protobufEnumClassModule = require("protobuf-enum-class-module") /*id: 406982*/;
  var protobufFieldTypeMappings = require("protobuf-field-type-mappings") /*id: 52800*/;
  var protobufDecoratorUtils = require("protobuf-decorator-utils") /*id: 848320*/;
  var l = /^required|optional|repeated$/;
  function u(e, t, i, r, s, u, d) {
    if (protobufDecoratorUtils.isObject(r)) {
      d = s;
      u = r;
      r = s = undefined;
    } else if (protobufDecoratorUtils.isObject(s)) {
      d = u;
      u = s;
      s = undefined;
    }
    reflectionObjectBaseClass.call(this, e, u);
    if (!protobufDecoratorUtils.isInteger(t) || t < 0) {
      throw TypeError("id must be a non-negative integer");
    }
    if (!protobufDecoratorUtils.isString(i)) {
      throw TypeError("type must be a string");
    }
    if (r !== undefined && !l.test(r = r.toString().toLowerCase())) {
      throw TypeError("rule must be a string rule");
    }
    if (s !== undefined && !protobufDecoratorUtils.isString(s)) {
      throw TypeError("extend must be a string");
    }
    if (r === "proto3_optional") {
      r = "optional";
    }
    this.rule = r && r !== "optional" ? r : undefined;
    this.type = i;
    this.id = t;
    this.extend = s || undefined;
    this.required = r === "required";
    this.optional = !this.required;
    this.repeated = r === "repeated";
    this.map = false;
    this.message = null;
    this.partOf = null;
    this.typeDefault = null;
    this.defaultValue = null;
    this.long = !!protobufDecoratorUtils.Long && protobufFieldTypeMappings.long[i] !== undefined;
    this.bytes = i === "bytes";
    this.resolvedType = null;
    this.extensionField = null;
    this.declaringField = null;
    this._packed = null;
    this.comment = d;
  }
  u.fromJSON = function (e, t) {
    return new u(e, t.id, t.type, t.rule, t.extend, t.options, t.comment);
  };
  Object.defineProperty(u.prototype, "packed", {
    get: function () {
      if (this._packed === null) {
        this._packed = this.getOption("packed") !== false;
      }
      return this._packed;
    }
  });
  u.prototype.setOption = function (e, t, i) {
    if (e === "packed") {
      this._packed = null;
    }
    return reflectionObjectBaseClass.prototype.setOption.call(this, e, t, i);
  };
  u.prototype.toJSON = function (e) {
    var t = !!e && !!e.keepComments;
    return protobufDecoratorUtils.toObject(["rule", this.rule !== "optional" && this.rule || undefined, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : undefined]);
  };
  u.prototype.resolve = function () {
    if (this.resolved) {
      return this;
    }
    if ((this.typeDefault = protobufFieldTypeMappings.defaults[this.type]) === undefined) {
      this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
      if (this.resolvedType instanceof r) {
        this.typeDefault = null;
      } else {
        this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
      }
    }
    if (this.options && this.options.default != null) {
      this.typeDefault = this.options.default;
      if (this.resolvedType instanceof protobufEnumClassModule && typeof this.typeDefault == "string") {
        this.typeDefault = this.resolvedType.values[this.typeDefault];
      }
    }
    if (this.options) {
      if (this.options.packed === true || this.options.packed !== undefined && !!this.resolvedType && !(this.resolvedType instanceof protobufEnumClassModule)) {
        delete this.options.packed;
      }
      if (!Object.keys(this.options).length) {
        this.options = undefined;
      }
    }
    if (this.long) {
      this.typeDefault = protobufDecoratorUtils.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u");
      if (Object.freeze) {
        Object.freeze(this.typeDefault);
      }
    } else if (this.bytes && typeof this.typeDefault == "string") {
      var e;
      if (protobufDecoratorUtils.base64.test(this.typeDefault)) {
        protobufDecoratorUtils.base64.decode(this.typeDefault, e = protobufDecoratorUtils.newBuffer(protobufDecoratorUtils.base64.length(this.typeDefault)), 0);
      } else {
        protobufDecoratorUtils.utf8.write(this.typeDefault, e = protobufDecoratorUtils.newBuffer(protobufDecoratorUtils.utf8.length(this.typeDefault)), 0);
      }
      this.typeDefault = e;
    }
    if (this.map) {
      this.defaultValue = protobufDecoratorUtils.emptyObject;
    } else if (this.repeated) {
      this.defaultValue = protobufDecoratorUtils.emptyArray;
    } else {
      this.defaultValue = this.typeDefault;
    }
    if (this.parent instanceof r) {
      this.parent.ctor.prototype[this.name] = this.defaultValue;
    }
    return reflectionObjectBaseClass.prototype.resolve.call(this);
  };
  u.d = function (e, t, i, r) {
    if (typeof t == "function") {
      t = protobufDecoratorUtils.decorateType(t).name;
    } else if (t && typeof t == "object") {
      t = protobufDecoratorUtils.decorateEnum(t).name;
    }
    return function (n, s) {
      protobufDecoratorUtils.decorateType(n.constructor).add(new u(s, e, t, i, {
        default: r
      }));
    };
  };
  u._configure = function (e) {
    r = e;
  };
}