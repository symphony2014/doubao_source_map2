// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reflectionObjectBaseClass'
// - Resolved require(812045) to 'reflection-object-base-class'
// - Renamed variable 'n' to 'protobufReflectionField'
// - Resolved require(153827) to 'protobuf-reflection-field'
// - Renamed variable 's' to 'protobufDecoratorUtils'
// - Resolved require(848320) to 'protobuf-decorator-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 657433
         */
module.exports = function (module, exports, require) {
  module.exports = o;
  var reflectionObjectBaseClass = require("reflection-object-base-class") /*id: 812045*/;
  ((o.prototype = Object.create(reflectionObjectBaseClass.prototype)).constructor = o).className = "OneOf";
  var protobufReflectionField = require("protobuf-reflection-field") /*id: 153827*/;
  var protobufDecoratorUtils = require("protobuf-decorator-utils") /*id: 848320*/;
  function o(e, t, i, n) {
    if (!Array.isArray(t)) {
      i = t;
      t = undefined;
    }
    reflectionObjectBaseClass.call(this, e, i);
    if (t !== undefined && !Array.isArray(t)) {
      throw TypeError("fieldNames must be an Array");
    }
    this.oneof = t || [];
    this.fieldsArray = [];
    this.comment = n;
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
    return protobufDecoratorUtils.toObject(["options", this.options, "oneof", this.oneof, "comment", t ? this.comment : undefined]);
  };
  o.prototype.add = function (e) {
    if (!(e instanceof protobufReflectionField)) {
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
    if (!(e instanceof protobufReflectionField)) {
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
    reflectionObjectBaseClass.prototype.onAdd.call(this, e);
    for (var t = 0; t < this.oneof.length; ++t) {
      var i = e.get(this.oneof[t]);
      if (i && !i.partOf) {
        i.partOf = this;
        this.fieldsArray.push(i);
      }
    }
    a(this);
  };
  o.prototype.onRemove = function (e) {
    var t;
    var i = 0;
    for (; i < this.fieldsArray.length; ++i) {
      if ((t = this.fieldsArray[i]).parent) {
        t.parent.remove(t);
      }
    }
    reflectionObjectBaseClass.prototype.onRemove.call(this, e);
  };
  o.d = function () {
    var e = Array(arguments.length);
    var t = 0;
    while (t < arguments.length) {
      e[t] = arguments[t++];
    }
    return function (t, i) {
      protobufDecoratorUtils.decorateType(t.constructor).add(new o(i, e));
      Object.defineProperty(t, i, {
        get: protobufDecoratorUtils.oneOfGetter(e),
        set: protobufDecoratorUtils.oneOfSetter(e)
      });
    };
  };
}