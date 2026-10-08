// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'mmlStackItemClasses'
// - Resolved require(174186) to 'mml-stack-item-classes'
// - Renamed variable 'i' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// - Resolved require(142412) to 'mathjax-utilities'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 915425
         */
module.exports = function (module, exports, require) {
  var r;
  var T = this && this.__extends || (r = function (t, e) {
    return (r = Object.setPrototypeOf || {
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
    function Q() {
      this.constructor = t;
    }
    r(t, e);
    t.prototype = e === null ? Object.create(e) : (Q.prototype = e.prototype, new Q());
  });
  var n = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.BraketItem = undefined;
  var mmlStackItemClasses = require("mml-stack-item-classes") /*id: 174186*/;
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var a = n(require("mathjax-utilities") /*id: 142412*/);
  var u = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "braket";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isOpen", {
      get: function () {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.checkItem = function (e) {
      if (e.isKind("close")) {
        return [[this.factory.create("mml", this.toMml())], true];
      } else if (e.isKind("mml")) {
        this.Push(e.toMml());
        if (this.getProperty("single")) {
          return [[this.toMml()], true];
        } else {
          return mmlStackItemClasses.BaseItem.fail;
        }
      } else {
        return t.prototype.checkItem.call(this, e);
      }
    };
    e.prototype.toMml = function () {
      var e = t.prototype.toMml.call(this);
      var Q = this.getProperty("open");
      var r = this.getProperty("close");
      if (this.getProperty("stretchy")) {
        return a.default.fenced(this.factory.configuration, Q, e, r);
      }
      var T = {
        fence: true,
        stretchy: false,
        symmetric: true,
        texClass: mathmlAbstractNodeClasses.TEXCLASS.OPEN
      };
      var n = this.create("token", "mo", T, Q);
      T.texClass = mathmlAbstractNodeClasses.TEXCLASS.CLOSE;
      var o = this.create("token", "mo", T, r);
      return this.create("node", "mrow", [n, e, o], {
        open: Q,
        close: r,
        texClass: mathmlAbstractNodeClasses.TEXCLASS.INNER
      });
    };
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.BraketItem = u;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}