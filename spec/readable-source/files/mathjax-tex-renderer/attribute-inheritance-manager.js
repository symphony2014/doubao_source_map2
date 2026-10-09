// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 497692
         */
module.exports = function (module, exports, require) {
  var Q = this && this.__values || function (t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var Q = e && t[e];
    var r = 0;
    if (Q) {
      return Q.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  exports.Attributes = exports.INHERIT = undefined;
  exports.INHERIT = "_inherit_";
  var r = function () {
    function t(t, e) {
      this.global = e;
      this.defaults = Object.create(e);
      this.inherited = Object.create(this.defaults);
      this.attributes = Object.create(this.inherited);
      Object.assign(this.defaults, t);
    }
    t.prototype.set = function (t, e) {
      this.attributes[t] = e;
    };
    t.prototype.setList = function (t) {
      Object.assign(this.attributes, t);
    };
    t.prototype.get = function (t) {
      var Q = this.attributes[t];
      if (Q === exports.INHERIT) {
        Q = this.global[t];
      }
      return Q;
    };
    t.prototype.getExplicit = function (t) {
      if (this.attributes.hasOwnProperty(t)) {
        return this.attributes[t];
      }
    };
    t.prototype.getList = function () {
      var t;
      var e;
      var r = [];
      var T = 0;
      for (; T < arguments.length; T++) {
        r[T] = arguments[T];
      }
      var n = {};
      try {
        var o = Q(r);
        var i = o.next();
        for (; !i.done; i = o.next()) {
          var a = i.value;
          n[a] = this.get(a);
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (i && !i.done && (e = o.return)) {
            e.call(o);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      return n;
    };
    t.prototype.setInherited = function (t, e) {
      this.inherited[t] = e;
    };
    t.prototype.getInherited = function (t) {
      return this.inherited[t];
    };
    t.prototype.getDefault = function (t) {
      return this.defaults[t];
    };
    t.prototype.isSet = function (t) {
      return this.attributes.hasOwnProperty(t) || this.inherited.hasOwnProperty(t);
    };
    t.prototype.hasDefault = function (t) {
      return t in this.defaults;
    };
    t.prototype.getExplicitNames = function () {
      return Object.keys(this.attributes);
    };
    t.prototype.getInheritedNames = function () {
      return Object.keys(this.inherited);
    };
    t.prototype.getDefaultNames = function () {
      return Object.keys(this.defaults);
    };
    t.prototype.getGlobalNames = function () {
      return Object.keys(this.global);
    };
    t.prototype.getAllAttributes = function () {
      return this.attributes;
    };
    t.prototype.getAllInherited = function () {
      return this.inherited;
    };
    t.prototype.getAllDefaults = function () {
      return this.defaults;
    };
    t.prototype.getAllGlobals = function () {
      return this.global;
    };
    return t;
  }();
  exports.Attributes = r;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}