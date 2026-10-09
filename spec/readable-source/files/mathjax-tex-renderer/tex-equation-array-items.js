// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mathjaxEqnarrayTags'
// - Resolved require(962632) to 'mathjax-eqnarray-tags'
// - Resolved require(142412) to 'mathjax-utilities'
// - Resolved require(352636) to 'mathml-abstract-node-util'
// - Resolved require(342117) to 'message-format-util'
// - Renamed variable 'l' to 'texConstantDefinitions'
// - Resolved require(16944) to 'tex-constant-definitions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 953567
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
  var o = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.FlalignItem = exports.MultlineItem = undefined;
  var mathjaxEqnarrayTags = require("mathjax-eqnarray-tags") /*id: 962632*/;
  var a = o(require("mathjax-utilities") /*id: 142412*/);
  var u = o(require("mathml-abstract-node-util") /*id: 352636*/);
  var s = o(require("message-format-util") /*id: 342117*/);
  var texConstantDefinitions = require("tex-constant-definitions") /*id: 16944*/;
  var c = function (t) {
    function e(e) {
      var Q = [];
      var r = 1;
      for (; r < arguments.length; r++) {
        Q[r - 1] = arguments[r];
      }
      var T = t.call(this, e) || this;
      T.factory.configuration.tags.start("multline", true, Q[0]);
      return T;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "multline";
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.EndEntry = function () {
      if (this.table.length) {
        a.default.fixInitialMO(this.factory.configuration, this.nodes);
      }
      var t = this.getProperty("shove");
      var e = this.create("node", "mtd", this.nodes, t ? {
        columnalign: t
      } : {});
      this.setProperty("shove", null);
      this.row.push(e);
      this.Clear();
    };
    e.prototype.EndRow = function () {
      if (this.row.length !== 1) {
        throw new s.default("MultlineRowsOneCol", "The rows within the %1 environment must have exactly one column", "multline");
      }
      var t = this.create("node", "mtr", this.row);
      this.table.push(t);
      this.row = [];
    };
    e.prototype.EndTable = function () {
      t.prototype.EndTable.call(this);
      if (this.table.length) {
        var e = this.table.length - 1;
        var Q = -1;
        if (!u.default.getAttribute(u.default.getChildren(this.table[0])[0], "columnalign")) {
          u.default.setAttribute(u.default.getChildren(this.table[0])[0], "columnalign", texConstantDefinitions.TexConstant.Align.LEFT);
        }
        if (!u.default.getAttribute(u.default.getChildren(this.table[e])[0], "columnalign")) {
          u.default.setAttribute(u.default.getChildren(this.table[e])[0], "columnalign", texConstantDefinitions.TexConstant.Align.RIGHT);
        }
        var r = this.factory.configuration.tags.getTag();
        if (r) {
          Q = this.arraydef.side === texConstantDefinitions.TexConstant.Align.LEFT ? 0 : this.table.length - 1;
          var T = this.table[Q];
          var n = this.create("node", "mlabeledtr", [r].concat(u.default.getChildren(T)));
          u.default.copyAttributes(T, n);
          this.table[Q] = n;
        }
      }
      this.factory.configuration.tags.end();
    };
    return e;
  }(mathjaxEqnarrayTags.ArrayItem);
  exports.MultlineItem = c;
  var p = function (t) {
    function e(e, Q, r, T, n) {
      var o = t.call(this, e) || this;
      o.name = Q;
      o.numbered = r;
      o.padded = T;
      o.center = n;
      o.factory.configuration.tags.start(Q, r, r);
      return o;
    }
    T(e, t);
    Object.defineProperty(e.prototype, "kind", {
      get: function () {
        return "flalign";
      },
      enumerable: false,
      configurable: true
    });
    e.prototype.EndEntry = function () {
      t.prototype.EndEntry.call(this);
      var e = this.getProperty("xalignat");
      if (e && this.row.length > e) {
        throw new s.default("XalignOverflow", "Extra %1 in row of %2", "&", this.name);
      }
    };
    e.prototype.EndRow = function () {
      var e;
      var Q = this.row;
      var r = this.getProperty("xalignat");
      while (Q.length < r) {
        Q.push(this.create("node", "mtd"));
      }
      this.row = [];
      if (this.padded) {
        this.row.push(this.create("node", "mtd"));
      }
      while (e = Q.shift()) {
        this.row.push(e);
        if (e = Q.shift()) {
          this.row.push(e);
        }
        if (Q.length || this.padded) {
          this.row.push(this.create("node", "mtd"));
        }
      }
      if (this.row.length > this.maxrow) {
        this.maxrow = this.row.length;
      }
      t.prototype.EndRow.call(this);
      var T = this.table[this.table.length - 1];
      if (this.getProperty("zeroWidthLabel") && T.isKind("mlabeledtr")) {
        var o = u.default.getChildren(T)[0];
        var i = this.factory.configuration.options.tagSide;
        var a = n({
          width: 0
        }, i === "right" ? {
          lspace: "-1width"
        } : {});
        var s = this.create("node", "mpadded", u.default.getChildren(o), a);
        o.setChildren([s]);
      }
    };
    e.prototype.EndTable = function () {
      t.prototype.EndTable.call(this);
      if (this.center && this.maxrow <= 2) {
        var e = this.arraydef;
        delete e.width;
        delete this.global.indentalign;
      }
    };
    return e;
  }(mathjaxEqnarrayTags.EqnArrayItem);
  exports.FlalignItem = p;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}