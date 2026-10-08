// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reflectionObject'
// - Resolved require(917994) to 'reflection-object'
// - Renamed variable 'i' to 'protobufFieldDefinition'
// - Resolved require(62763) to 'protobuf-field-definition'
// - Renamed variable 's' to 'protobufUtilityModule_1'
// - Resolved require(285145) to 'protobuf-utility-module_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 299216
         */
module.exports = function (module, exports, require) {
  module.exports = o;
  var reflectionObject = require("reflection-object") /*id: 917994*/;
  ((o.prototype = Object.create(reflectionObject.prototype)).constructor = o).className = "OneOf";
  var protobufFieldDefinition = require("protobuf-field-definition") /*id: 62763*/;
  var protobufUtilityModule_1 = require("protobuf-utility-module_1") /*id: 285145*/;
  function o(e, t, r, i) {
    if (!Array.isArray(t)) {
      r = t;
      t = undefined;
    }
    reflectionObject.call(this, e, r);
    if (t !== undefined && !Array.isArray(t)) {
      throw TypeError("fieldNames must be an Array");
    }
    this.oneof = t || [];
    this.fieldsArray = [];
    this.comment = i;
  }
  function a(e) {
    if (e.parent) {
      for (var t = 0; t < e.fieldsArray.length; ++t) {
        if (!e.fieldsArray[t].parent) {
          e.parent.add(e.fieldsArray[t]);
        }
      }
    }
  }
  o.fromJSON = function (e, t) {
    return new o(e, t.oneof, t.options, t.comment);
  };
  o.prototype.toJSON = function (e) {
    var t = !!e && !!e.keepComments;
    return protobufUtilityModule_1.toObject(["options", this.options, "oneof", this.oneof, "comment", t ? this.comment : undefined]);
  };
  o.prototype.add = function (e) {
    if (!(e instanceof protobufFieldDefinition)) {
      throw TypeError("field must be a Field");
    }
    if (e.parent && e.parent !== this.parent) {
      e.parent.remove(e);
    }
    this.oneof.push(e.name);
    this.fieldsArray.push(e);
    e.partOf = this;
    a(this);
    return this;
  };
  o.prototype.remove = function (e) {
    if (!(e instanceof protobufFieldDefinition)) {
      throw TypeError("field must be a Field");
    }
    var t = this.fieldsArray.indexOf(e);
    if (t < 0) {
      throw Error(e + " is not a member of " + this);
    }
    this.fieldsArray.splice(t, 1);
    if ((t = this.oneof.indexOf(e.name)) > -1) {
      this.oneof.splice(t, 1);
    }
    e.partOf = null;
    return this;
  };
  o.prototype.onAdd = function (e) {
    reflectionObject.prototype.onAdd.call(this, e);
    var t = this;
    var r = 0;
    for (; r < this.oneof.length; ++r) {
      var i = e.get(this.oneof[r]);
      if (i && !i.partOf) {
        i.partOf = t;
        t.fieldsArray.push(i);
      }
    }
    a(this);
  };
  o.prototype.onRemove = function (e) {
    var t;
    var r = 0;
    for (; r < this.fieldsArray.length; ++r) {
      if ((t = this.fieldsArray[r]).parent) {
        t.parent.remove(t);
      }
    }
    reflectionObject.prototype.onRemove.call(this, e);
  };
  o.d = function () {
    var e = Array(arguments.length);
    var t = 0;
    while (t < arguments.length) {
      e[t] = arguments[t++];
    }
    return function (t, r) {
      protobufUtilityModule_1.decorateType(t.constructor).add(new o(r, e));
      Object.defineProperty(t, r, {
        get: protobufUtilityModule_1.oneOfGetter(e),
        set: protobufUtilityModule_1.oneOfSetter(e)
      });
    };
  };
}