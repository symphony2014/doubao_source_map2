// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'reflectionObject'
// - Resolved require(917994) to 'reflection-object'
// - Renamed variable 'a' to 'protobufFieldDefinition'
// - Resolved require(62763) to 'protobuf-field-definition'
// - Renamed variable 'c' to 'protobufUtilityModule_1'
// - Resolved require(285145) to 'protobuf-utility-module_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45310.b344db4b.js
         * chunkId: 45310
         * moduleId: 32548
         */
module.exports = function (module, exports, require) {
  module.exports = h;
  var n;
  var i;
  var s;
  var reflectionObject = require("reflection-object") /*id: 917994*/;
  ((h.prototype = Object.create(reflectionObject.prototype)).constructor = h).className = "Namespace";
  var protobufFieldDefinition = require("protobuf-field-definition") /*id: 62763*/;
  var protobufUtilityModule_1 = require("protobuf-utility-module_1") /*id: 285145*/;
  function l(e, t) {
    if (e && e.length) {
      var r = {};
      var n = 0;
      for (; n < e.length; ++n) {
        r[e[n].name] = e[n].toJSON(t);
      }
      return r;
    }
  }
  function h(e, t) {
    reflectionObject.call(this, e, t);
    this.nested = undefined;
    this._nestedArray = null;
  }
  function u(e) {
    e._nestedArray = null;
    return e;
  }
  h.fromJSON = function (e, t) {
    return new h(e, t.options).addJSON(t.nested);
  };
  h.arrayToJSON = l;
  h.isReservedId = function (e, t) {
    if (e) {
      for (var r = 0; r < e.length; ++r) {
        if (typeof e[r] != "string" && e[r][0] <= t && e[r][1] >= t) {
          return true;
        }
      }
    }
    return false;
  };
  h.isReservedName = function (e, t) {
    if (e) {
      for (var r = 0; r < e.length; ++r) {
        if (e[r] === t) {
          return true;
        }
      }
    }
    return false;
  };
  Object.defineProperty(h.prototype, "nestedArray", {
    get: function () {
      return this._nestedArray ||= protobufUtilityModule_1.toArray(this.nested);
    }
  });
  h.prototype.toJSON = function (e) {
    return protobufUtilityModule_1.toObject(["options", this.options, "nested", l(this.nestedArray, e)]);
  };
  h.prototype.addJSON = function (e) {
    var t = this;
    if (e) {
      var r;
      var o = Object.keys(e);
      var c = 0;
      for (; c < o.length; ++c) {
        r = e[o[c]];
        t.add((r.fields !== undefined ? n.fromJSON : r.values !== undefined ? s.fromJSON : r.methods !== undefined ? i.fromJSON : r.id !== undefined ? protobufFieldDefinition.fromJSON : h.fromJSON)(o[c], r));
      }
    }
    return this;
  };
  h.prototype.get = function (e) {
    return this.nested && this.nested[e] || null;
  };
  h.prototype.getEnum = function (e) {
    if (this.nested && this.nested[e] instanceof s) {
      return this.nested[e].values;
    }
    throw Error("no such enum: " + e);
  };
  h.prototype.add = function (e) {
    if ((!(e instanceof protobufFieldDefinition) || e.extend === undefined) && !(e instanceof n) && !(e instanceof s) && !(e instanceof i) && !(e instanceof h)) {
      throw TypeError("object must be a valid nested object");
    }
    if (this.nested) {
      var t = this.get(e.name);
      if (t) {
        if (t instanceof h && e instanceof h && !(t instanceof n) && !(t instanceof i)) {
          var r = t.nestedArray;
          var o = 0;
          for (; o < r.length; ++o) {
            e.add(r[o]);
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
    return u(this);
  };
  h.prototype.remove = function (e) {
    if (!(e instanceof reflectionObject)) {
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
    return u(this);
  };
  h.prototype.define = function (e, t) {
    if (protobufUtilityModule_1.isString(e)) {
      e = e.split(".");
    } else if (!Array.isArray(e)) {
      throw TypeError("illegal path");
    }
    if (e && e.length && e[0] === "") {
      throw Error("path must be relative");
    }
    var r = this;
    for (; e.length > 0;) {
      var n = e.shift();
      if (r.nested && r.nested[n]) {
        if (!((r = r.nested[n]) instanceof h)) {
          throw Error("path conflicts with non-namespace objects");
        }
      } else {
        r.add(r = new h(n));
      }
    }
    if (t) {
      r.addJSON(t);
    }
    return r;
  };
  h.prototype.resolveAll = function () {
    var e = this.nestedArray;
    var t = 0;
    while (t < e.length) {
      if (e[t] instanceof h) {
        e[t++].resolveAll();
      } else {
        e[t++].resolve();
      }
    }
    return this.resolve();
  };
  h.prototype.lookup = function (e, t, r) {
    if (typeof t == "boolean") {
      r = t;
      t = undefined;
    } else if (t && !Array.isArray(t)) {
      t = [t];
    }
    if (protobufUtilityModule_1.isString(e) && e.length) {
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
    var n = this.get(e[0]);
    if (n) {
      if (e.length === 1) {
        if (!t || t.indexOf(n.constructor) > -1) {
          return n;
        }
      } else if (n instanceof h && (n = n.lookup(e.slice(1), t, true))) {
        return n;
      }
    } else {
      for (var i = 0; i < this.nestedArray.length; ++i) {
        if (this._nestedArray[i] instanceof h && (n = this._nestedArray[i].lookup(e, t, true))) {
          return n;
        }
      }
    }
    if (this.parent === null || r) {
      return null;
    } else {
      return this.parent.lookup(e, t);
    }
  };
  h.prototype.lookupType = function (e) {
    var t = this.lookup(e, [n]);
    if (!t) {
      throw Error("no such type: " + e);
    }
    return t;
  };
  h.prototype.lookupEnum = function (e) {
    var t = this.lookup(e, [s]);
    if (!t) {
      throw Error("no such Enum '" + e + "' in " + this);
    }
    return t;
  };
  h.prototype.lookupTypeOrEnum = function (e) {
    var t = this.lookup(e, [n, s]);
    if (!t) {
      throw Error("no such Type or Enum '" + e + "' in " + this);
    }
    return t;
  };
  h.prototype.lookupService = function (e) {
    var t = this.lookup(e, [i]);
    if (!t) {
      throw Error("no such Service '" + e + "' in " + this);
    }
    return t;
  };
  h._configure = function (e, t, r) {
    n = e;
    i = t;
    s = r;
  };
}