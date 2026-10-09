// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'mathmlAbstractNodeClasses'
// - Resolved require(135533) to 'mathml-abstract-node-classes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 655628
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
  var n = this && this.__assign || function () {
    return (n = Object.assign || function (t) {
      var e;
      var Q = 1;
      var r = arguments.length;
      for (; Q < r; Q++) {
        for (var T in e = arguments[Q]) {
          if (Object.prototype.hasOwnProperty.call(e, T)) {
            t[T] = e[T];
          }
        }
      }
      return t;
    }).apply(this, arguments);
  };
  exports.MmlMaction = undefined;
  var mathmlAbstractNodeClasses = require("mathml-abstract-node-classes") /*id: 135533*/;
  var i = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "maction";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "arity", {
      get: function () {
        return 1;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "selected", {
      get: function () {
        var t = this.attributes.get("selection");
        var e = Math.max(1, Math.min(this.childNodes.length, t)) - 1;
        return this.childNodes[e] || this.factory.create("mrow");
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isEmbellished", {
      get: function () {
        return this.selected.isEmbellished;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e.prototype, "isSpacelike", {
      get: function () {
        return this.selected.isSpacelike;
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.core = function () {
      return this.selected.core();
    };
    e.prototype.coreMO = function () {
      return this.selected.coreMO();
    };
    e.prototype.verifyAttributes = function (e) {
      t.prototype.verifyAttributes.call(this, e);
      if (this.attributes.get("actiontype") !== "toggle" && this.attributes.getExplicit("selection") !== undefined) {
        var Q = this.attributes.getAllAttributes();
        delete Q.selection;
      }
    };
    e.prototype.setTeXclass = function (t) {
      if (this.attributes.get("actiontype") === "tooltip" && this.childNodes[1]) {
        this.childNodes[1].setTeXclass(null);
      }
      var e = this.selected;
      t = e.setTeXclass(t);
      this.updateTeXclass(e);
      return t;
    };
    e.prototype.nextToggleSelection = function () {
      var t = Math.max(1, this.attributes.get("selection") + 1);
      if (t > this.childNodes.length) {
        t = 1;
      }
      this.attributes.set("selection", t);
    };
    e.defaults = n(n({}, mathmlAbstractNodeClasses.AbstractMmlNode.defaults), {
      actiontype: "toggle",
      selection: 1
    });
    return e;
  }(mathmlAbstractNodeClasses.AbstractMmlNode);
  exports.MmlMaction = i;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}