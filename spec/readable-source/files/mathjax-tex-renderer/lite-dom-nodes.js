// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 967811
         */
module.exports = function (module, exports, require) {
  var Q;
  var r = this && this.__extends || (Q = function (t, e) {
    return (Q = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var Q in e) {
        if (Object.prototype.hasOwnProperty.call(e, Q)) {
          t[Q] = e[Q];
        }
      }
    })(t, e);
  }, function (t, e) {
    if (typeof e != "function" && e !== null) {
      throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
    }
    function r() {
      this.constructor = t;
    }
    Q(t, e);
    t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
  });
  exports.LiteComment = exports.LiteText = undefined;
  var T = function () {
    function t(t = "") {
      this.value = t;
    }
    Object.defineProperty(t.prototype, "kind", {
      get: function () {
        return "#text";
      },
      enumerable: false,
      configurable: true
    });
    return t;
  }();
  exports.LiteText = T;
  var n = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    r(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "#comment";
      },
      enumerable: false,
      configurable: true
    });
    return e;
  }(T);
  exports.LiteComment = n;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}