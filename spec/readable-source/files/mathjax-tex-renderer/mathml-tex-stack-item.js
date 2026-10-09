// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'mmlStackItemClasses'
// - Resolved require(174186) to 'mml-stack-item-classes'
// - Resolved require(142412) to 'mathjax-utilities'
// - Resolved require(352636) to 'mathml-abstract-node-util'
// - Resolved require(658610) to 'mathjax-tex-parser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 159878
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
  exports.AutoOpen = undefined;
  var mmlStackItemClasses = require("mml-stack-item-classes") /*id: 174186*/;
  var i = n(require("mathjax-utilities") /*id: 142412*/);
  var a = n(require("mathml-abstract-node-util") /*id: 352636*/);
  var u = n(require("mathjax-tex-parser") /*id: 658610*/);
  var s = function (t) {
    function e() {
      var e = t !== null && t.apply(this, arguments) || this;
      e.openCount = 0;
      return e;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "auto open";
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
    e.prototype.toMml = function () {
      var e = this.factory.configuration.parser;
      var Q = this.getProperty("right");
      if (this.getProperty("smash")) {
        var r = t.prototype.toMml.call(this);
        var T = e.create("node", "mpadded", [r], {
          height: 0,
          depth: 0
        });
        this.Clear();
        this.Push(e.create("node", "TeXAtom", [T]));
      }
      if (Q) {
        this.Push(new u.default(Q, e.stack.env, e.configuration).mml());
      }
      var n = i.default.fenced(this.factory.configuration, this.getProperty("open"), t.prototype.toMml.call(this), this.getProperty("close"), this.getProperty("big"));
      a.default.removeProperties(n, "open", "close", "texClass");
      return n;
    };
    e.prototype.checkItem = function (e) {
      if (e.isKind("mml") && e.Size() === 1) {
        var Q = e.toMml();
        if (Q.isKind("mo") && Q.getText() === this.getProperty("open")) {
          this.openCount++;
        }
      }
      var r = e.getProperty("autoclose");
      if (!r || r !== this.getProperty("close") || this.openCount--) {
        return t.prototype.checkItem.call(this, e);
      } else if (this.getProperty("ignore")) {
        this.Clear();
        return [[], true];
      } else {
        return [[this.toMml()], true];
      }
    };
    e.errors = Object.assign(Object.create(mmlStackItemClasses.BaseItem.errors), {
      stop: ["ExtraOrMissingDelims", "Extra open or missing close delimiter"]
    });
    return e;
  }(mmlStackItemClasses.BaseItem);
  exports.AutoOpen = s;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}