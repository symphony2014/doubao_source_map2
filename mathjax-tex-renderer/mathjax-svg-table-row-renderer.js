// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mathjaxSvgWrapper'
// - Resolved require(780260) to 'mathjax-svg-wrapper'
// - Renamed variable 'a' to 'mathjaxTableRowMixins'
// - Resolved require(761088) to 'mathjax-table-row-mixins'
// - Renamed variable 'u' to 'mathjaxTableRowMixins_1'
// - Resolved require(761088) to 'mathjax-table-row-mixins'
// - Renamed variable 's' to 'mathmlTableRowNodes'
// - Resolved require(425) to 'mathml-table-row-nodes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 339382
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
  var o = this && this.__spreadArray || function (t, e, Q) {
    if (Q || arguments.length == 2) {
      var r;
      var T = 0;
      var n = e.length;
      for (; T < n; T++) {
        if (!!r || !(T in e)) {
          r ||= Array.prototype.slice.call(e, 0, T);
          r[T] = e[T];
        }
      }
    }
    return t.concat(r || Array.prototype.slice.call(e));
  };
  exports.SVGmlabeledtr = exports.SVGmtr = undefined;
  var mathjaxSvgWrapper = require("mathjax-svg-wrapper") /*id: 780260*/;
  var mathjaxTableRowMixins = require("mathjax-table-row-mixins") /*id: 761088*/;
  var mathjaxTableRowMixins_1 = require("mathjax-table-row-mixins") /*id: 761088*/;
  var mathmlTableRowNodes = require("mathml-table-row-nodes") /*id: 425*/;
  var l = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.toSVG = function (t) {
      var e = this.standardSVGnode(t);
      this.placeCells(e);
      this.placeColor();
    };
    e.prototype.placeCells = function (t) {
      var e = this.parent.getColumnHalfSpacing();
      var Q = o(o([this.parent.fLine], n(this.parent.cLines), false), [this.parent.fLine], false);
      var r = this.parent.getComputedWidths();
      var T = 1 / this.getBBox().rscale;
      var i = Q[0];
      var a = 0;
      for (; a < this.numCells; a++) {
        var u = this.getChild(a);
        u.toSVG(t);
        i += this.placeCell(u, {
          x: i,
          y: 0,
          lSpace: e[a] * T,
          rSpace: e[a + 1] * T,
          w: r[a] * T,
          lLine: Q[a] * T,
          rLine: Q[a + 1] * T
        });
      }
    };
    e.prototype.placeCell = function (t, e) {
      var Q = e.x;
      var r = e.y;
      var T = e.lSpace;
      var o = e.w;
      var i = e.rSpace;
      var a = e.lLine;
      var u = e.rLine;
      var s = 1 / this.getBBox().rscale;
      var l = n([this.H * s, this.D * s], 2);
      var c = l[0];
      var p = l[1];
      var h = n([this.tSpace * s, this.bSpace * s], 2);
      var f = h[0];
      var d = h[1];
      var D = n(t.placeCell(Q + T, r, o, c, p), 2);
      var L = D[0];
      var m = D[1];
      var y = T + o + i;
      t.placeColor(-(L + T + a / 2), -(p + d + m), y + (a + u) / 2, c + p + f + d);
      return y + u;
    };
    e.prototype.placeColor = function () {
      var t = 1 / this.getBBox().rscale;
      var e = this.adaptor;
      var Q = this.firstChild();
      if (Q && e.kind(Q) === "rect" && e.getAttribute(Q, "data-bgcolor")) {
        var r = n([this.tLine / 2 * t, this.bLine / 2 * t], 2);
        var T = r[0];
        var o = r[1];
        var i = n([this.tSpace * t, this.bSpace * t], 2);
        var a = i[0];
        var u = i[1];
        var s = n([this.H * t, this.D * t], 2);
        var l = s[0];
        var c = s[1];
        e.setAttribute(Q, "y", this.fixed(-(c + u + o)));
        e.setAttribute(Q, "width", this.fixed(this.parent.getWidth() * t));
        e.setAttribute(Q, "height", this.fixed(T + a + l + c + u + o));
      }
    };
    e.kind = mathmlTableRowNodes.MmlMtr.prototype.kind;
    return e;
  }(mathjaxTableRowMixins.CommonMtrMixin(mathjaxSvgWrapper.SVGWrapper));
  exports.SVGmtr = l;
  var c = function (t) {
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    T(e, t);
    e.prototype.toSVG = function (e) {
      t.prototype.toSVG.call(this, e);
      var Q = this.childNodes[0];
      if (Q) {
        Q.toSVG(this.parent.labels);
      }
    };
    e.kind = mathmlTableRowNodes.MmlMlabeledtr.prototype.kind;
    return e;
  }(mathjaxTableRowMixins_1.CommonMlabeledtrMixin(l));
  exports.SVGmlabeledtr = c;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}