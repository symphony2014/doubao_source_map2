// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(342117) to 'message-format-util'
// - Resolved require(174186) to 'mml-stack-item-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 603746
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
  exports.BeginEnvItem = undefined;
  var o = n(require("message-format-util") /*id: 342117*/);
  var i = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "beginEnv";
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
      if (e.isKind("end")) {
        if (e.getName() !== this.getName()) {
          throw new o.default("EnvBadEnd", "\\begin{%1} ended with \\end{%2}", this.getName(), e.getName());
        }
        return [[this.factory.create("mml", this.toMml())], true];
      }
      if (e.isKind("stop")) {
        throw new o.default("EnvMissingEnd", "Missing \\end{%1}", this.getName());
      }
      return t.prototype.checkItem.call(this, e);
    };
    return e;
  }(require("mml-stack-item-classes") /*id: 174186*/.BaseItem);
  exports.BeginEnvItem = i;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}