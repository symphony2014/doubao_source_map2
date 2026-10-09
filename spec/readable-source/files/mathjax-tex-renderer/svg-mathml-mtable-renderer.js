// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'mathjaxSvgWrapper'
// - Resolved require(780260) to 'mathjax-svg-wrapper'
// - Renamed variable 'a' to 'mathmlMtableMixin'
// - Resolved require(168426) to 'mathml-mtable-mixin'
// - Renamed variable 'u' to 'mathmlMtableNode'
// - Resolved require(179776) to 'mathml-mtable-node'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 775830
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
  exports.SVGmtable = undefined;
  var mathjaxSvgWrapper = require("mathjax-svg-wrapper") /*id: 780260*/;
  var mathmlMtableMixin = require("mathml-mtable-mixin") /*id: 168426*/;
  var mathmlMtableNode = require("mathml-mtable-node") /*id: 179776*/;
  var s = function (t) {
    function e(e, Q, r = null) {
      var T = t.call(this, e, Q, r) || this;
      var n = {
        "data-labels": true
      };
      if (T.isTop) {
        n.transform = "matrix(1 0 0 -1 0 0)";
      }
      T.labels = T.svg("g", n);
      return T;
    }
    T(e, t);
    e.prototype.toSVG = function (t) {
      var e = this.standardSVGnode(t);
      this.placeRows(e);
      this.handleColumnLines(e);
      this.handleRowLines(e);
      this.handleFrame(e);
      var Q = this.handlePWidth(e);
      this.handleLabels(e, t, Q);
    };
    e.prototype.placeRows = function (t) {
      var e;
      var Q;
      var r;
      var T = this.node.attributes.get("equalrows");
      var i = this.getTableData();
      var a = i.H;
      var u = i.D;
      var s = this.getEqualRowHeight();
      var l = this.getRowHalfSpacing();
      var c = o(o([this.fLine], n(this.rLines), false), [this.fLine], false);
      var p = this.getBBox().h - c[0];
      var h = 0;
      for (; h < this.numRows; h++) {
        var f = this.childNodes[h];
        e = n(this.getRowHD(T, s, a[h], u[h]), 2);
        f.H = e[0];
        f.D = e[1];
        Q = n([l[h], l[h + 1]], 2);
        f.tSpace = Q[0];
        f.bSpace = Q[1];
        r = n([c[h], c[h + 1]], 2);
        f.tLine = r[0];
        f.bLine = r[1];
        f.toSVG(t);
        f.place(0, p - l[h] - f.H);
        p -= l[h] + f.H + f.D + l[h + 1] + c[h + 1];
      }
    };
    e.prototype.getRowHD = function (t, e, Q, r) {
      if (t) {
        return [(e + Q - r) / 2, (e - Q + r) / 2];
      } else {
        return [Q, r];
      }
    };
    e.prototype.handleColor = function () {
      t.prototype.handleColor.call(this);
      var e = this.firstChild();
      if (e) {
        this.adaptor.setAttribute(e, "width", this.fixed(this.getWidth()));
      }
    };
    e.prototype.handleColumnLines = function (t) {
      if (this.node.attributes.get("columnlines") !== "none") {
        var e = this.getColumnAttributes("columnlines");
        if (e) {
          var Q = this.getColumnHalfSpacing();
          var r = this.cLines;
          var T = this.getComputedWidths();
          var n = this.fLine;
          var o = 0;
          for (; o < e.length; o++) {
            n += Q[o] + T[o] + Q[o + 1];
            if (e[o] !== "none") {
              this.adaptor.append(t, this.makeVLine(n, e[o], r[o]));
            }
            n += r[o];
          }
        }
      }
    };
    e.prototype.handleRowLines = function (t) {
      if (this.node.attributes.get("rowlines") !== "none") {
        var e = this.getRowAttributes("rowlines");
        if (e) {
          var Q = this.node.attributes.get("equalrows");
          var r = this.getTableData();
          var T = r.H;
          var o = r.D;
          var i = this.getEqualRowHeight();
          var a = this.getRowHalfSpacing();
          var u = this.rLines;
          var s = this.getBBox().h - this.fLine;
          var l = 0;
          for (; l < e.length; l++) {
            var c = n(this.getRowHD(Q, i, T[l], o[l]), 2);
            var p = c[0];
            var h = c[1];
            s -= a[l] + p + h + a[l + 1];
            if (e[l] !== "none") {
              this.adaptor.append(t, this.makeHLine(s, e[l], u[l]));
            }
            s -= u[l];
          }
        }
      }
    };
    e.prototype.handleFrame = function (t) {
      if (this.frame && this.fLine) {
        var e = this.getBBox();
        var Q = e.h;
        var r = e.d;
        var T = e.w;
        var n = this.node.attributes.get("frame");
        this.adaptor.append(t, this.makeFrame(T, Q, r, n));
      }
    };
    e.prototype.handlePWidth = function (t) {
      if (!this.pWidth) {
        return 0;
      }
      var e = this.getBBox();
      var Q = e.w;
      var r = e.L;
      var T = e.R;
      var n = r + this.pWidth + T;
      var o = this.getAlignShift()[0];
      var i = Math.max(this.isTop ? n : 0, this.container.getWrapWidth(this.containerI)) - r - T;
      var a = Q - (this.pWidth > i ? i : this.pWidth);
      var u = o === "left" ? 0 : o === "right" ? a : a / 2;
      if (u) {
        var s = this.svg("g", {}, this.adaptor.childNodes(t));
        this.place(u, 0, s);
        this.adaptor.append(t, s);
      }
      return u;
    };
    e.prototype.lineClass = function (t) {
      return "mjx-" + t;
    };
    e.prototype.makeFrame = function (t, e, Q, r) {
      var T = this.fLine;
      return this.svg("rect", this.setLineThickness(T, r, {
        "data-frame": true,
        class: this.lineClass(r),
        width: this.fixed(t - T),
        height: this.fixed(e + Q - T),
        x: this.fixed(T / 2),
        y: this.fixed(T / 2 - Q)
      }));
    };
    e.prototype.makeVLine = function (t, e, Q) {
      var r = this.getBBox();
      var T = r.h;
      var n = r.d;
      var o = e === "dotted" ? Q / 2 : 0;
      var i = this.fixed(t + Q / 2);
      return this.svg("line", this.setLineThickness(Q, e, {
        "data-line": "v",
        class: this.lineClass(e),
        x1: i,
        y1: this.fixed(o - n),
        x2: i,
        y2: this.fixed(T - o)
      }));
    };
    e.prototype.makeHLine = function (t, e, Q) {
      var r = this.getBBox().w;
      var T = e === "dotted" ? Q / 2 : 0;
      var n = this.fixed(t - Q / 2);
      return this.svg("line", this.setLineThickness(Q, e, {
        "data-line": "h",
        class: this.lineClass(e),
        x1: this.fixed(T),
        y1: n,
        x2: this.fixed(r - T),
        y2: n
      }));
    };
    e.prototype.setLineThickness = function (t, e, Q) {
      if (t !== 0.07) {
        Q["stroke-thickness"] = this.fixed(t);
        if (e !== "solid") {
          Q["stroke-dasharray"] = (e === "dotted" ? "0," : "") + this.fixed(t * 2);
        }
      }
      return Q;
    };
    e.prototype.handleLabels = function (t, e, Q) {
      if (this.hasLabels) {
        var r = this.labels;
        var T = this.node.attributes.get("side");
        this.spaceLabels();
        if (this.isTop) {
          this.topTable(t, r, T);
        } else {
          this.subTable(t, r, T, Q);
        }
      }
    };
    e.prototype.spaceLabels = function () {
      var t = this.adaptor;
      var e = this.getBBox().h;
      var Q = this.getTableData().L;
      var r = this.getRowHalfSpacing();
      var T = e - this.fLine;
      var n = t.firstChild(this.labels);
      var o = 0;
      for (; o < this.numRows; o++) {
        var i = this.childNodes[o];
        if (i.node.isKind("mlabeledtr")) {
          var a = i.childNodes[0];
          T -= r[o] + i.H;
          i.placeCell(a, {
            x: 0,
            y: T,
            w: Q,
            lSpace: 0,
            rSpace: 0,
            lLine: 0,
            rLine: 0
          });
          T -= i.D + r[o + 1] + this.rLines[o];
          n = t.next(n);
        } else {
          T -= r[o] + i.H + i.D + r[o + 1] + this.rLines[o];
        }
      }
    };
    e.prototype.topTable = function (t, e, Q) {
      var r = this.adaptor;
      var T = this.getBBox();
      var o = T.h;
      var i = T.d;
      var a = T.w;
      var u = T.L;
      var s = T.R;
      var l = u + (this.pWidth || a) + s;
      var c = this.getTableData().L;
      var p = n(this.getPadAlignShift(Q), 3);
      var h = p[1];
      var f = p[2] + (h === "right" ? -l : h === "center" ? -l / 2 : 0) + u;
      var d = "matrix(1 0 0 -1 0 0)";
      var D = `scale(${this.jax.fixed(this.font.params.x_height * 1000 / this.metrics.ex, 2)})`;
      var L = `translate(0 ${this.fixed(o)}) ${d} ${D}`;
      var m = this.svg("svg", {
        "data-table": true,
        preserveAspectRatio: h === "left" ? "xMinYMid" : h === "right" ? "xMaxYMid" : "xMidYMid",
        viewBox: [this.fixed(-f), this.fixed(-o), 1, this.fixed(o + i)].join(" ")
      }, [this.svg("g", {
        transform: d
      }, r.childNodes(t))]);
      e = this.svg("svg", {
        "data-labels": true,
        preserveAspectRatio: Q === "left" ? "xMinYMid" : "xMaxYMid",
        viewBox: [Q === "left" ? 0 : this.fixed(c), this.fixed(-o), 1, this.fixed(o + i)].join(" ")
      }, [e]);
      r.append(t, this.svg("g", {
        transform: L
      }, [m, e]));
      this.place(-u, 0, t);
    };
    e.prototype.subTable = function (t, e, Q, r) {
      var T = this.adaptor;
      var n = this.getBBox();
      var o = n.w;
      var i = n.L;
      var a = n.R;
      var u = i + (this.pWidth || o) + a;
      var s = this.getTableData().L;
      var l = this.getAlignShift()[0];
      var c = Math.max(u, this.container.getWrapWidth(this.containerI));
      this.place(Q === "left" ? (l === "left" ? 0 : l === "right" ? u - c + r : (u - c) / 2 + r) - i : (l === "left" ? c : l === "right" ? u + r : (c + u) / 2 + r) - i - s, 0, e);
      T.append(t, e);
    };
    e.kind = mathmlMtableNode.MmlMtable.prototype.kind;
    e.styles = {
      "g[data-mml-node=\"mtable\"] > line[data-line], svg[data-table] > g > line[data-line]": {
        "stroke-width": "70px",
        fill: "none"
      },
      "g[data-mml-node=\"mtable\"] > rect[data-frame], svg[data-table] > g > rect[data-frame]": {
        "stroke-width": "70px",
        fill: "none"
      },
      "g[data-mml-node=\"mtable\"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed": {
        "stroke-dasharray": "140"
      },
      "g[data-mml-node=\"mtable\"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted": {
        "stroke-linecap": "round",
        "stroke-dasharray": "0,140"
      },
      "g[data-mml-node=\"mtable\"] > g > svg": {
        overflow: "visible"
      }
    };
    return e;
  }(mathmlMtableMixin.CommonMtableMixin(mathjaxSvgWrapper.SVGWrapper));
  exports.SVGmtable = s;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}