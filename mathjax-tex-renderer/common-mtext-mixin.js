// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 258995
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
  exports.CommonMtextMixin = undefined;
  exports.CommonMtextMixin = function (t) {
    var e;
    (e = function (t) {
      function e() {
        return t !== null && t.apply(this, arguments) || this;
      }
      r(e, t);
      e.prototype.getVariant = function () {
        var e = this.jax.options;
        var Q = this.jax.math.outputData;
        var r = (!!Q.merrorFamily || !!e.merrorFont) && this.node.Parent.isKind("merror");
        if (Q.mtextFamily || e.mtextFont || r) {
          var T = this.node.attributes.get("mathvariant");
          var n = this.constructor.INHERITFONTS[T] || this.jax.font.getCssFont(T);
          var o = n[0] || (r ? Q.merrorFamily || e.merrorFont : Q.mtextFamily || e.mtextFont);
          this.variant = this.explicitVariant(o, n[2] ? "bold" : "", n[1] ? "italic" : "");
          return;
        }
        t.prototype.getVariant.call(this);
      };
      return e;
    }(t)).INHERITFONTS = {
      normal: ["", false, false],
      bold: ["", false, true],
      italic: ["", true, false],
      "bold-italic": ["", true, true]
    };
    return e;
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}