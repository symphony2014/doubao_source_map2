// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 55711.a6eb22ed.js
         * chunkId: 55711
         * moduleId: 957901
         */
module.exports = function (module, exports, require) {
  (function () {
    function t(e, t) {
      if (typeof e !== t) {
        throw TypeError("Expected '" + t + "' but instead found '" + typeof e + "'");
      }
    }
    function r(e, t, r) {
      var n;
      var o;
      var i;
      var a = {};
      var c = r || t;
      var f = r && t;
      n = 0;
      r = c && typeof c == "object" ? c : {};
      t = f && typeof f == "object" ? f : {};
      i = (o = Object.getOwnPropertyNames(r)).length;
      for (; n < i; n++) {
        if (!function (e) {
          var t;
          var r;
          return !!e && typeof e == "object" && ((r = (t = Object.getOwnPropertyNames(e).sort()).length) === 1 && (t[0] === "get" && typeof e.get == "function" || t[0] === "set" && typeof e.set == "function") || r === 2 && t[0] === "get" && typeof e.get == "function" && t[1] === "set" && typeof e.set == "function") || false;
        }(r[o[n]])) {
          a[o[n]] = {
            configurable: !!t.configurable,
            enumerable: !!t.enumerable,
            writable: !!t.writable,
            value: r[o[n]]
          };
        } else {
          a[o[n]] = {
            configurable: !!t.configurable,
            enumerable: !!t.enumerable,
            get: r[o[n]].get,
            set: r[o[n]].set
          };
        }
      }
      Object.defineProperties(e, a);
      return e;
    }
    var n = {
      defineProperties: function (e, t) {
        r(this, e, t);
        return this;
      },
      getProto: function () {
        return Object.getPrototypeOf(this);
      },
      getSuper: function () {
        return Object.getPrototypeOf(this.constructor.prototype);
      }
    };
    var o = {
      isGeneration: function (e) {
        t(e, "function");
        return this.prototype.isPrototypeOf(e.prototype);
      },
      isCreation: function (e) {
        return e instanceof this;
      },
      generate: function (e) {
        t(e, "function");
        r(e, {
          configurable: false,
          enumerable: false,
          writable: false
        }, {
          prototype: Object.create(this.prototype)
        });
        r(e, {
          configurable: false,
          enumerable: false,
          writable: false
        }, o);
        r(e.prototype, {
          configurable: false,
          enumerable: false,
          writable: false
        }, {
          constructor: e,
          generator: e
        });
        return e;
      },
      definePrototype: function (e, t) {
        r(this.prototype, e, t);
        return this;
      }
    };
    function i() {}
    r(i, {
      configurable: false,
      enumerable: false,
      writable: false
    }, {
      prototype: i.prototype
    });
    r(i.prototype, {
      configurable: false,
      enumerable: false,
      writable: false
    }, n);
    r(i, {
      configurable: false,
      enumerable: false,
      writable: false
    }, o);
    r(i, {
      configurable: false,
      enumerable: false,
      writable: false
    }, {
      isGenerator: function (e) {
        return this.isGeneration(e);
      },
      toGenerator: function (e, t) {
        return this.generateFrom(e, t);
      },
      generateFrom: function (e, i) {
        t(e, "function");
        t(i, "function");
        r(i, {
          configurable: false,
          enumerable: false,
          writable: false
        }, {
          prototype: Object.create(e.prototype)
        });
        r(i, {
          configurable: false,
          enumerable: false,
          writable: false
        }, o);
        r(i.prototype, {
          configurable: false,
          enumerable: false,
          writable: false
        }, {
          constructor: i,
          generator: i
        });
        r(i.prototype, {
          configurable: false,
          enumerable: false,
          writable: false
        }, n);
        return i;
      }
    });
    Object.freeze(i);
    Object.freeze(i.prototype);
    if (typeof define == "function" && define.amd) {
      define(function () {
        return i;
      });
    } else {
      module.exports = i;
    }
  })();
}