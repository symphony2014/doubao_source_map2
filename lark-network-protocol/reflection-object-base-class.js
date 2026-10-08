// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'protobufDecoratorUtils'
// - Resolved require(848320) to 'protobuf-decorator-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 812045
         */
module.exports = function (module, exports, require) {
  module.exports = s;
  s.className = "ReflectionObject";
  var r;
  var protobufDecoratorUtils = require("protobuf-decorator-utils") /*id: 848320*/;
  function s(e, t) {
    if (!protobufDecoratorUtils.isString(e)) {
      throw TypeError("name must be a string");
    }
    if (t && !protobufDecoratorUtils.isObject(t)) {
      throw TypeError("options must be an object");
    }
    this.options = t;
    this.parsedOptions = null;
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
    if (t instanceof r) {
      t._handleAdd(this);
    }
  };
  s.prototype.onRemove = function (e) {
    var t = e.root;
    if (t instanceof r) {
      t._handleRemove(this);
    }
    this.parent = null;
    this.resolved = false;
  };
  s.prototype.resolve = function () {
    if (!this.resolved) {
      if (this.root instanceof r) {
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
  s.prototype.setOption = function (e, t, i) {
    if (!i || !this.options || this.options[e] === undefined) {
      (this.options ||= {})[e] = t;
    }
    return this;
  };
  s.prototype.setParsedOption = function (e, t, i) {
    this.parsedOptions ||= [];
    var r = this.parsedOptions;
    if (i) {
      var s = r.find(function (t) {
        return Object.prototype.hasOwnProperty.call(t, e);
      });
      if (s) {
        var o = s[e];
        protobufDecoratorUtils.setProperty(o, i, t);
      } else {
        (s = {})[e] = protobufDecoratorUtils.setProperty({}, i, t);
        r.push(s);
      }
    } else {
      var a = {
        [e]: t
      };
      r.push(a);
    }
    return this;
  };
  s.prototype.setOptions = function (e, t) {
    if (e) {
      var i = Object.keys(e);
      var r = 0;
      for (; r < i.length; ++r) {
        this.setOption(i[r], e[i[r]], t);
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
    r = e;
  };
}