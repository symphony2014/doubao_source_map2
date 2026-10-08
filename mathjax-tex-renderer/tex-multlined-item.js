// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'texEquationArrayItems'
// - Resolved require(953567) to 'tex-equation-array-items'
// - Resolved require(352636) to 'mathml-abstract-node-util'
// - Renamed variable 'a' to 'texConstantDefinitions'
// - Resolved require(16944) to 'tex-constant-definitions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 846201
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
  exports.MultlinedItem = undefined;
  var texEquationArrayItems = require("tex-equation-array-items") /*id: 953567*/;
  var i = n(require("mathml-abstract-node-util") /*id: 352636*/);
  var texConstantDefinitions = require("tex-constant-definitions") /*id: 16944*/;
  var u = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "multlined";
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.EndTable = function () {
      if (this.Size() || this.row.length) {
        this.EndEntry();
        this.EndRow();
      }
      if (this.table.length > 1) {
        var e = this.factory.configuration.options.mathtools;
        var Q = e.multlinegap;
        var r = e["firstline-afterskip"] || Q;
        var T = e["lastline-preskip"] || Q;
        var n = i.default.getChildren(this.table[0])[0];
        if (i.default.getAttribute(n, "columnalign") !== texConstantDefinitions.TexConstant.Align.RIGHT) {
          n.appendChild(this.create("node", "mspace", [], {
            width: r
          }));
        }
        var o = i.default.getChildren(this.table[this.table.length - 1])[0];
        if (i.default.getAttribute(o, "columnalign") !== texConstantDefinitions.TexConstant.Align.LEFT) {
          var u = i.default.getChildren(o)[0];
          u.childNodes.unshift(null);
          var s = this.create("node", "mspace", [], {
            width: T
          });
          i.default.setChild(u, 0, s);
        }
      }
      t.prototype.EndTable.call(this);
    };
    return e;
  }(texEquationArrayItems.MultlineItem);
  exports.MultlinedItem = u;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}