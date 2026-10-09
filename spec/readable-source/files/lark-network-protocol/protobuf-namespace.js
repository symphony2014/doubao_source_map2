// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'reflectionObjectBaseClass'
// - Resolved require(812045) to 'reflection-object-base-class'
// - Renamed variable 'a' to 'protobufReflectionField'
// - Resolved require(153827) to 'protobuf-reflection-field'
// - Renamed variable 'l' to 'protobufOneofFieldGroup'
// - Resolved require(657433) to 'protobuf-oneof-field-group'
// - Renamed variable 'u' to 'protobufDecoratorUtils'
// - Resolved require(848320) to 'protobuf-decorator-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58832.6d7372bc.js
         * chunkId: 58832
         * moduleId: 773111
         */
module.exports = function (module, exports, require) {
  module.exports = c;
  var r;
  var n;
  var s;
  var reflectionObjectBaseClass = require("reflection-object-base-class") /*id: 812045*/;
  ((c.prototype = Object.create(reflectionObjectBaseClass.prototype)).constructor = c).className = "Namespace";
  var protobufReflectionField = require("protobuf-reflection-field") /*id: 153827*/;
  var protobufOneofFieldGroup = require("protobuf-oneof-field-group") /*id: 657433*/;
  var protobufDecoratorUtils = require("protobuf-decorator-utils") /*id: 848320*/;
  function d(e, t) {
    if (e && e.length) {
      var i = {};
      var r = 0;
      for (; r < e.length; ++r) {
        i[e[r].name] = e[r].toJSON(t);
      }
      return i;
    }
  }
  function c(e, t) {
    reflectionObjectBaseClass.call(this, e, t);
    this.nested = undefined;
    this._nestedArray = null;
  }
  function p(e) {
    e._nestedArray = null;
    return e;
  }
  c.fromJSON = function (e, t) {
    return new c(e, t.options).addJSON(t.nested);
  };
  c.arrayToJSON = d;
  c.isReservedId = function (e, t) {
    if (e) {
      for (var i = 0; i < e.length; ++i) {
        if (typeof e[i] != "string" && e[i][0] <= t && e[i][1] > t) {
          return true;
        }
      }
    }
    return false;
  };
  c.isReservedName = function (e, t) {
    if (e) {
      for (var i = 0; i < e.length; ++i) {
        if (e[i] === t) {
          return true;
        }
      }
    }
    return false;
  };
  Object.defineProperty(c.prototype, "nestedArray", {
    get: function () {
      return this._nestedArray ||= protobufDecoratorUtils.toArray(this.nested);
    }
  });
  c.prototype.toJSON = function (e) {
    return protobufDecoratorUtils.toObject(["options", this.options, "nested", d(this.nestedArray, e)]);
  };
  c.prototype.addJSON = function (e) {
    if (e) {
      var t;
      var i = Object.keys(e);
      var o = 0;
      for (; o < i.length; ++o) {
        t = e[i[o]];
        this.add((t.fields !== undefined ? r.fromJSON : t.values !== undefined ? s.fromJSON : t.methods !== undefined ? n.fromJSON : t.id !== undefined ? protobufReflectionField.fromJSON : c.fromJSON)(i[o], t));
      }
    }
    return this;
  };
  c.prototype.get = function (e) {
    return this.nested && this.nested[e] || null;
  };
  c.prototype.getEnum = function (e) {
    if (this.nested && this.nested[e] instanceof s) {
      return this.nested[e].values;
    }
    throw Error("no such enum: " + e);
  };
  c.prototype.add = function (e) {
    if ((!(e instanceof protobufReflectionField) || e.extend === undefined) && !(e instanceof r) && !(e instanceof s) && !(e instanceof n) && !(e instanceof c) && !(e instanceof protobufOneofFieldGroup)) {
      throw TypeError("object must be a valid nested object");
    }
    if (this.nested) {
      var t = this.get(e.name);
      if (t) {
        if (t instanceof c && e instanceof c && !(t instanceof r) && !(t instanceof n)) {
          var i = t.nestedArray;
          var o = 0;
          for (; o < i.length; ++o) {
            e.add(i[o]);
          }
          this.remove(t);
          this.nested ||= {};
          e.setOptions(t.options, true);
        } else {
          throw Error("duplicate name '" + e.name + "' in " + this);
        }
      }
    } else {
      this.nested = {};
    }
    this.nested[e.name] = e;
    e.onAdd(this);
    return p(this);
  };
  c.prototype.remove = function (e) {
    if (!(e instanceof reflectionObjectBaseClass)) {
      throw TypeError("object must be a ReflectionObject");
    }
    if (e.parent !== this) {
      throw Error(e + " is not a member of " + this);
    }
    delete this.nested[e.name];
    if (!Object.keys(this.nested).length) {
      this.nested = undefined;
    }
    e.onRemove(this);
    return p(this);
  };
  c.prototype.define = function (e, t) {
    if (protobufDecoratorUtils.isString(e)) {
      e = e.split(".");
    } else if (!Array.isArray(e)) {
      throw TypeError("illegal path");
    }
    if (e && e.length && e[0] === "") {
      throw Error("path must be relative");
    }
    var i = this;
    for (; e.length > 0;) {
      var r = e.shift();
      if (i.nested && i.nested[r]) {
        if (!((i = i.nested[r]) instanceof c)) {
          throw Error("path conflicts with non-namespace objects");
        }
      } else {
        i.add(i = new c(r));
      }
    }
    if (t) {
      i.addJSON(t);
    }
    return i;
  };
  c.prototype.resolveAll = function () {
    var e = this.nestedArray;
    var t = 0;
    while (t < e.length) {
      if (e[t] instanceof c) {
        e[t++].resolveAll();
      } else {
        e[t++].resolve();
      }
    }
    return this.resolve();
  };
  c.prototype.lookup = function (e, t, i) {
    if (typeof t == "boolean") {
      i = t;
      t = undefined;
    } else if (t && !Array.isArray(t)) {
      t = [t];
    }
    if (protobufDecoratorUtils.isString(e) && e.length) {
      if (e === ".") {
        return this.root;
      }
      e = e.split(".");
    } else if (!e.length) {
      return this;
    }
    if (e[0] === "") {
      return this.root.lookup(e.slice(1), t);
    }
    var r = this.get(e[0]);
    if (r) {
      if (e.length === 1) {
        if (!t || t.indexOf(r.constructor) > -1) {
          return r;
        }
      } else if (r instanceof c && (r = r.lookup(e.slice(1), t, true))) {
        return r;
      }
    } else {
      for (var n = 0; n < this.nestedArray.length; ++n) {
        if (this._nestedArray[n] instanceof c && (r = this._nestedArray[n].lookup(e, t, true))) {
          return r;
        }
      }
    }
    if (this.parent === null || i) {
      return null;
    } else {
      return this.parent.lookup(e, t);
    }
  };
  c.prototype.lookupType = function (e) {
    var t = this.lookup(e, [r]);
    if (!t) {
      throw Error("no such type: " + e);
    }
    return t;
  };
  c.prototype.lookupEnum = function (e) {
    var t = this.lookup(e, [s]);
    if (!t) {
      throw Error("no such Enum '" + e + "' in " + this);
    }
    return t;
  };
  c.prototype.lookupTypeOrEnum = function (e) {
    var t = this.lookup(e, [r, s]);
    if (!t) {
      throw Error("no such Type or Enum '" + e + "' in " + this);
    }
    return t;
  };
  c.prototype.lookupService = function (e) {
    var t = this.lookup(e, [n]);
    if (!t) {
      throw Error("no such Service '" + e + "' in " + this);
    }
    return t;
  };
  c._configure = function (e, t, i) {
    r = e;
    n = t;
    s = i;
  };
}