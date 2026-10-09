// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'protobufUtilityModule_1'
// - Resolved require(285145) to 'protobuf-utility-module_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 917994
         */
module.exports = function (module, exports, require) {
  module.exports = s;
  s.className = "ReflectionObject";
  var n;
  var protobufUtilityModule_1 = require("protobuf-utility-module_1") /*id: 285145*/;
  function s(e, t) {
    if (!protobufUtilityModule_1.isString(e)) {
      throw TypeError("name must be a string");
    }
    if (t && !protobufUtilityModule_1.isObject(t)) {
      throw TypeError("options must be an object");
    }
    this.options = t;
    this.name = e;
    this.parent = null;
    this.resolved = false;
    this.comment = null;
    this.filename = null;
  }
  Object.defineProperties(s.prototype, {
    root: {
      get: function () {
        for (var e = this; e.parent !== null;) {
          e = e.parent;
        }
        return e;
      }
    },
    fullName: {
      get: function () {
        var e = [this.name];
        var t = this.parent;
        while (t) {
          e.unshift(t.name);
          t = t.parent;
        }
        return e.join(".");
      }
    }
  });
  s.prototype.toJSON = function () {
    throw Error();
  };
  s.prototype.onAdd = function (e) {
    if (this.parent && this.parent !== e) {
      this.parent.remove(this);
    }
    this.parent = e;
    this.resolved = false;
    var t = e.root;
    if (t instanceof n) {
      t._handleAdd(this);
    }
  };
  s.prototype.onRemove = function (e) {
    var t = e.root;
    if (t instanceof n) {
      t._handleRemove(this);
    }
    this.parent = null;
    this.resolved = false;
  };
  s.prototype.resolve = function () {
    if (!this.resolved) {
      if (this.root instanceof n) {
        this.resolved = true;
      }
    }
    return this;
  };
  s.prototype.getOption = function (e) {
    if (this.options) {
      return this.options[e];
    }
  };
  s.prototype.setOption = function (e, t, r) {
    if (!r || !this.options || this.options[e] === undefined) {
      (this.options ||= {})[e] = t;
    }
    return this;
  };
  s.prototype.setOptions = function (e, t) {
    if (e) {
      var r = Object.keys(e);
      var n = 0;
      for (; n < r.length; ++n) {
        this.setOption(r[n], e[r[n]], t);
      }
    }
    return this;
  };
  s.prototype.toString = function () {
    var e = this.constructor.className;
    var t = this.fullName;
    if (t.length) {
      return e + " " + t;
    } else {
      return e;
    }
  };
  s._configure = function (e) {
    n = e;
  };
}