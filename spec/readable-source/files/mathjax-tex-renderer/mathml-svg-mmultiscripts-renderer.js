// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'mathmlSvgScriptRenderers'
// - Resolved require(80879) to 'mathml-svg-script-renderers'
// - Renamed variable 'i' to 'commonMmultiscriptsMixin'
// - Resolved require(909472) to 'common-mmultiscripts-mixin'
// - Renamed variable 'a' to 'mathmlMultiscriptNodes'
// - Resolved require(664693) to 'mathml-multiscript-nodes'
// - Renamed variable 'u' to 'stringUtils_1'
// - Resolved require(769565) to 'string-utils_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 277999
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
  var n = this && this.__read || function (t, e) {
    var Q = typeof Symbol == "function" && t[Symbol.iterator];
    if (!Q) {
      return t;
    }
    var r;
    var T;
    var n = Q.call(t);
    var o = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = n.next()).done) {
        o.push(r.value);
      }
    } catch (t) {
      T = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (Q = n.return)) {
          Q.call(n);
        }
      } finally {
        if (T) {
          throw T.error;
        }
      }
    }
    return o;
  };
  exports.SVGmmultiscripts = exports.AlignX = undefined;
  var mathmlSvgScriptRenderers = require("mathml-svg-script-renderers") /*id: 80879*/;
  var commonMmultiscriptsMixin = require("common-mmultiscripts-mixin") /*id: 909472*/;
  var mathmlMultiscriptNodes = require("mathml-multiscript-nodes") /*id: 664693*/;
  var stringUtils_1 = require("string-utils_1") /*id: 769565*/;
  function s(t) {
    return {
      left: function (t, e) {
        return 0;
      },
      center: function (t, e) {
        return (e - t) / 2;
      },
      right: function (t, e) {
        return e - t;
      }
    }[t] || function (t, e) {
      return 0;
    };
  }
  exports.AlignX = s;
  var l = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.toSVG = function (t) {
      var e = this.standardSVGnode(t);
      var Q = this.scriptData;
      var r = this.node.getProperty("scriptalign") || "right left";
      var T = n(stringUtils_1.split(r + " " + r), 2);
      var o = T[0];
      var i = T[1];
      var a = this.combinePrePost(Q.sub, Q.psub);
      var s = this.combinePrePost(Q.sup, Q.psup);
      var l = n(this.getUVQ(a, s), 2);
      var c = l[0];
      var p = l[1];
      var h = 0;
      if (Q.numPrescripts) {
        h = this.addScripts(0.05, c, p, this.firstPrescript, Q.numPrescripts, o);
      }
      var f = this.baseChild;
      f.toSVG(e);
      f.place(h, 0);
      h += f.getOuterBBox().w;
      if (Q.numScripts) {
        this.addScripts(h, c, p, 1, Q.numScripts, i);
      }
    };
    e.prototype.addScripts = function (t, e, Q, r, T, o) {
      var i = this.adaptor;
      var a = s(o);
      var u = i.append(this.element, this.svg("g"));
      var l = i.append(this.element, this.svg("g"));
      this.place(t, e, u);
      this.place(t, Q, l);
      var c = r + T * 2;
      var p = 0;
      while (r < c) {
        var h = n([this.childNodes[r++], this.childNodes[r++]], 2);
        var f = h[0];
        var d = h[1];
        var D = n([f.getOuterBBox(), d.getOuterBBox()], 2);
        var L = D[0];
        var m = D[1];
        var y = n([L.rscale, m.rscale], 2);
        var H = y[0];
        var v = y[1];
        var g = Math.max(L.w * H, m.w * v);
        f.toSVG(l);
        d.toSVG(u);
        f.place(p + a(L.w * H, g), 0);
        d.place(p + a(m.w * v, g), 0);
        p += g;
      }
      return t + p;
    };
    e.kind = mathmlMultiscriptNodes.MmlMmultiscripts.prototype.kind;
    return e;
  }(commonMmultiscriptsMixin.CommonMmultiscriptsMixin(mathmlSvgScriptRenderers.SVGmsubsup));
  exports.SVGmmultiscripts = l;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}