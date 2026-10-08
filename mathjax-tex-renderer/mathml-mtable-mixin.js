// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'cssBoundingBoxClass'
// - Resolved require(761002) to 'css-bounding-box-class'
// - Renamed variable 'u' to 'stringUtils_1'
// - Resolved require(769565) to 'string-utils_1'
// - Renamed variable 's' to 'arrayMathUtils'
// - Resolved require(83822) to 'array-math-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 168426
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
  var i = this && this.__values || function (t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var Q = e && t[e];
    var r = 0;
    if (Q) {
      return Q.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  exports.CommonMtableMixin = undefined;
  var cssBoundingBoxClass = require("css-bounding-box-class") /*id: 761002*/;
  var stringUtils_1 = require("string-utils_1") /*id: 769565*/;
  var arrayMathUtils = require("array-math-utils") /*id: 83822*/;
  exports.CommonMtableMixin = function (t) {
    return function (t) {
      function e() {
        var e = [];
        var Q = 0;
        for (; Q < arguments.length; Q++) {
          e[Q] = arguments[Q];
        }
        var r = t.apply(this, o([], n(e), false)) || this;
        r.numCols = 0;
        r.numRows = 0;
        r.data = null;
        r.pwidthCells = [];
        r.pWidth = 0;
        r.numCols = arrayMathUtils.max(r.tableRows.map(function (t) {
          return t.numCells;
        }));
        r.numRows = r.childNodes.length;
        r.hasLabels = r.childNodes.reduce(function (t, e) {
          return t || e.node.isKind("mlabeledtr");
        }, false);
        r.findContainer();
        r.isTop = !r.container || r.container.node.isKind("math") && !r.container.parent;
        if (r.isTop) {
          r.jax.table = r;
        }
        r.getPercentageWidth();
        var T = r.node.attributes;
        r.frame = T.get("frame") !== "none";
        r.fLine = r.frame && T.get("frame") ? 0.07 : 0;
        r.fSpace = r.frame ? r.convertLengths(r.getAttributeArray("framespacing")) : [0, 0];
        r.cSpace = r.convertLengths(r.getColumnAttributes("columnspacing"));
        r.rSpace = r.convertLengths(r.getRowAttributes("rowspacing"));
        r.cLines = r.getColumnAttributes("columnlines").map(function (t) {
          return (t !== "none") * 0.07;
        });
        r.rLines = r.getRowAttributes("rowlines").map(function (t) {
          return (t !== "none") * 0.07;
        });
        r.cWidths = r.getColumnWidths();
        r.stretchRows();
        r.stretchColumns();
        return r;
      }
      T(e, t);
      Object.defineProperty(e.prototype, "tableRows", {
        get: function () {
          return this.childNodes;
        },
        enumerable: false,
        configurable: true
      });
      e.prototype.findContainer = function () {
        var t = this;
        var e = t.parent;
        while (e && (e.node.notParent || e.node.isKind("mrow"))) {
          t = e;
          e = e.parent;
        }
        this.container = e;
        this.containerI = t.node.childPosition();
      };
      e.prototype.getPercentageWidth = function () {
        if (this.hasLabels) {
          this.bbox.pwidth = cssBoundingBoxClass.BBox.fullWidth;
        } else {
          var t = this.node.attributes.get("width");
          if (stringUtils_1.isPercent(t)) {
            this.bbox.pwidth = t;
          }
        }
      };
      e.prototype.stretchRows = function () {
        var t = this.node.attributes.get("equalrows");
        var e = t ? this.getEqualRowHeight() : 0;
        var Q = t ? this.getTableData() : {
          H: [0],
          D: [0]
        };
        var r = Q.H;
        var T = Q.D;
        var n = this.tableRows;
        var o = 0;
        for (; o < this.numRows; o++) {
          var i = t ? [(e + r[o] - T[o]) / 2, (e - r[o] + T[o]) / 2] : null;
          n[o].stretchChildren(i);
        }
      };
      e.prototype.stretchColumns = function () {
        for (var t = 0; t < this.numCols; t++) {
          var e = typeof this.cWidths[t] == "number" ? this.cWidths[t] : null;
          this.stretchColumn(t, e);
        }
      };
      e.prototype.stretchColumn = function (t, e) {
        var Q;
        var r;
        var T;
        var n;
        var o;
        var a;
        var u = [];
        try {
          var s = i(this.tableRows);
          var l = s.next();
          for (; !l.done; l = s.next()) {
            var c = l.value;
            var p = c.getChild(t);
            if (p) {
              var h = p.childNodes[0];
              if (h.stretch.dir === 0 && h.canStretch(2)) {
                u.push(h);
              }
            }
          }
        } catch (t) {
          Q = {
            error: t
          };
        } finally {
          try {
            if (l && !l.done && (r = s.return)) {
              r.call(s);
            }
          } finally {
            if (Q) {
              throw Q.error;
            }
          }
        }
        var f = u.length;
        var d = this.childNodes.length;
        if (f && d > 1) {
          if (e === null) {
            e = 0;
            var D = f > 1 && f === d;
            try {
              var L = i(this.tableRows);
              var m = L.next();
              for (; !m.done; m = L.next()) {
                var c = m.value;
                var p = c.getChild(t);
                if (p) {
                  var h = p.childNodes[0];
                  var y = h.stretch.dir === 0;
                  if (D || y) {
                    var H = h.getBBox(y).w;
                    if (H > e) {
                      e = H;
                    }
                  }
                }
              }
            } catch (t) {
              T = {
                error: t
              };
            } finally {
              try {
                if (m && !m.done && (n = L.return)) {
                  n.call(L);
                }
              } finally {
                if (T) {
                  throw T.error;
                }
              }
            }
          }
          try {
            var v = i(u);
            var g = v.next();
            for (; !g.done; g = v.next()) {
              var h = g.value;
              h.coreMO().getStretchedVariant([e]);
            }
          } catch (t) {
            o = {
              error: t
            };
          } finally {
            try {
              if (g && !g.done && (a = v.return)) {
                a.call(v);
              }
            } finally {
              if (o) {
                throw o.error;
              }
            }
          }
        }
      };
      e.prototype.getTableData = function () {
        if (this.data) {
          return this.data;
        }
        var t = Array(this.numRows).fill(0);
        var e = Array(this.numRows).fill(0);
        var Q = Array(this.numCols).fill(0);
        var r = Array(this.numRows);
        var T = Array(this.numRows);
        var n = [0];
        var o = this.tableRows;
        var i = 0;
        for (; i < o.length; i++) {
          var a = 0;
          var u = o[i];
          var s = u.node.attributes.get("rowalign");
          var l = 0;
          for (; l < u.numCells; l++) {
            var c = u.getChild(l);
            a = this.updateHDW(c, l, i, s, t, e, Q, a);
            this.recordPWidthCell(c, l);
          }
          r[i] = t[i];
          T[i] = e[i];
          if (u.labeled) {
            a = this.updateHDW(u.childNodes[0], 0, i, s, t, e, n, a);
          }
          this.extendHD(i, t, e, a);
          this.extendHD(i, r, T, a);
        }
        var p = n[0];
        this.data = {
          H: t,
          D: e,
          W: Q,
          NH: r,
          ND: T,
          L: p
        };
        return this.data;
      };
      e.prototype.updateHDW = function (t, e, Q, r, T, n, o, i) {
        var a = t.getBBox();
        var u = a.h;
        var s = a.d;
        var l = a.w;
        var c = t.parent.bbox.rscale;
        if (t.parent.bbox.rscale !== 1) {
          u *= c;
          s *= c;
          l *= c;
        }
        if (this.node.getProperty("useHeight")) {
          if (u < 0.75) {
            u = 0.75;
          }
          if (s < 0.25) {
            s = 0.25;
          }
        }
        var p = 0;
        if ((r = t.node.attributes.get("rowalign") || r) !== "baseline" && r !== "axis") {
          p = u + s;
          u = s = 0;
        }
        if (u > T[Q]) {
          T[Q] = u;
        }
        if (s > n[Q]) {
          n[Q] = s;
        }
        if (p > i) {
          i = p;
        }
        if (o && l > o[e]) {
          o[e] = l;
        }
        return i;
      };
      e.prototype.extendHD = function (t, e, Q, r) {
        var T = (r - (e[t] + Q[t])) / 2;
        if (!(T < 0.00001)) {
          e[t] += T;
          Q[t] += T;
        }
      };
      e.prototype.recordPWidthCell = function (t, e) {
        if (t.childNodes[0] && t.childNodes[0].getBBox().pwidth) {
          this.pwidthCells.push([t, e]);
        }
      };
      e.prototype.computeBBox = function (t, e = false) {
        var Q;
        var r;
        var T = this.getTableData();
        var o = T.H;
        var i = T.D;
        if (this.node.attributes.get("equalrows")) {
          var a = this.getEqualRowHeight();
          Q = arrayMathUtils.sum([].concat(this.rLines, this.rSpace)) + a * this.numRows;
        } else {
          Q = arrayMathUtils.sum(o.concat(i, this.rLines, this.rSpace));
        }
        Q += (this.fLine + this.fSpace[1]) * 2;
        var l = this.getComputedWidths();
        r = arrayMathUtils.sum(l.concat(this.cLines, this.cSpace)) + (this.fLine + this.fSpace[0]) * 2;
        var c = this.node.attributes.get("width");
        if (c !== "auto") {
          r = Math.max(this.length2em(c, 0) + this.fLine * 2, r);
        }
        var p = n(this.getBBoxHD(Q), 2);
        var h = p[0];
        var f = p[1];
        t.h = h;
        t.d = f;
        t.w = r;
        var d = n(this.getBBoxLR(), 2);
        var D = d[0];
        var L = d[1];
        t.L = D;
        t.R = L;
        if (!stringUtils_1.isPercent(c)) {
          this.setColumnPWidths();
        }
      };
      e.prototype.setChildPWidths = function (t, e, Q) {
        var r = this.node.attributes.get("width");
        if (!stringUtils_1.isPercent(r)) {
          return false;
        }
        if (!this.hasLabels) {
          this.bbox.pwidth = "";
          this.container.bbox.pwidth = "";
        }
        var T = this.bbox;
        var n = T.w;
        var o = T.L;
        var i = T.R;
        var a = this.node.attributes.get("data-width-includes-label");
        var l = Math.max(n, this.length2em(r, Math.max(e, o + n + i))) - (a ? o + i : 0);
        var c = this.node.attributes.get("equalcolumns") ? Array(this.numCols).fill(this.percent(1 / Math.max(1, this.numCols))) : this.getColumnAttributes("columnwidth", 0);
        this.cWidths = this.getColumnWidthsFixed(c, l);
        var p = this.getComputedWidths();
        this.pWidth = arrayMathUtils.sum(p.concat(this.cLines, this.cSpace)) + (this.fLine + this.fSpace[0]) * 2;
        if (this.isTop) {
          this.bbox.w = this.pWidth;
        }
        this.setColumnPWidths();
        if (this.pWidth !== n) {
          this.parent.invalidateBBox();
        }
        return this.pWidth !== n;
      };
      e.prototype.setColumnPWidths = function () {
        var t;
        var e;
        var Q = this.cWidths;
        try {
          var r = i(this.pwidthCells);
          var T = r.next();
          for (; !T.done; T = r.next()) {
            var o = n(T.value, 2);
            var a = o[0];
            var u = o[1];
            if (a.setChildPWidths(false, Q[u])) {
              a.invalidateBBox();
              a.getBBox();
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (T && !T.done && (e = r.return)) {
              e.call(r);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
      };
      e.prototype.getBBoxHD = function (t) {
        var e = n(this.getAlignmentRow(), 2);
        var Q = e[0];
        var r = e[1];
        if (r === null) {
          var T = this.font.params.axis_height;
          var o = t / 2;
          return {
            top: [0, t],
            center: [o, o],
            bottom: [t, 0],
            baseline: [o, o],
            axis: [o + T, o - T]
          }[Q] || [o, o];
        }
        var i = this.getVerticalPosition(r, Q);
        return [i, t - i];
      };
      e.prototype.getBBoxLR = function () {
        if (this.hasLabels) {
          var t = this.node.attributes;
          var e = t.get("side");
          var Q = n(this.getPadAlignShift(e), 2);
          var r = Q[0];
          var T = Q[1];
          var o = this.hasLabels && !!t.get("data-width-includes-label");
          if (o && this.frame && this.fSpace[0]) {
            r -= this.fSpace[0];
          }
          if (T !== "center" || o) {
            if (e === "left") {
              return [r, 0];
            } else {
              return [0, r];
            }
          } else {
            return [r, r];
          }
        }
        return [0, 0];
      };
      e.prototype.getPadAlignShift = function (t) {
        var e = this.getTableData().L + this.length2em(this.node.attributes.get("minlabelspacing"));
        var Q = n(this.styles == null ? ["", ""] : [this.styles.get("padding-left"), this.styles.get("padding-right")], 2);
        var r = Q[0];
        var T = Q[1];
        if (r || T) {
          e = Math.max(e, this.length2em(r || "0"), this.length2em(T || "0"));
        }
        var o = n(this.getAlignShift(), 2);
        var i = o[0];
        var a = o[1];
        if (i === t) {
          a = t === "left" ? Math.max(e, a) - e : Math.min(-e, a) + e;
        }
        return [e, i, a];
      };
      e.prototype.getAlignShift = function () {
        if (this.isTop) {
          return t.prototype.getAlignShift.call(this);
        } else {
          return [this.container.getChildAlign(this.containerI), 0];
        }
      };
      e.prototype.getWidth = function () {
        return this.pWidth || this.getBBox().w;
      };
      e.prototype.getEqualRowHeight = function () {
        var t = this.getTableData();
        var e = t.H;
        var Q = t.D;
        var r = Array.from(e.keys()).map(function (t) {
          return e[t] + Q[t];
        });
        return Math.max.apply(Math, r);
      };
      e.prototype.getComputedWidths = function () {
        var t = this;
        var e = this.getTableData().W;
        var Q = Array.from(e.keys()).map(function (Q) {
          if (typeof t.cWidths[Q] == "number") {
            return t.cWidths[Q];
          } else {
            return e[Q];
          }
        });
        if (this.node.attributes.get("equalcolumns")) {
          Q = Array(Q.length).fill(arrayMathUtils.max(Q));
        }
        return Q;
      };
      e.prototype.getColumnWidths = function () {
        var t = this.node.attributes.get("width");
        if (this.node.attributes.get("equalcolumns")) {
          return this.getEqualColumns(t);
        }
        var e = this.getColumnAttributes("columnwidth", 0);
        if (t === "auto") {
          return this.getColumnWidthsAuto(e);
        } else if (stringUtils_1.isPercent(t)) {
          return this.getColumnWidthsPercent(e);
        } else {
          return this.getColumnWidthsFixed(e, this.length2em(t));
        }
      };
      e.prototype.getEqualColumns = function (t) {
        var e;
        var Q = Math.max(1, this.numCols);
        if (t === "auto") {
          var r = this.getTableData().W;
          e = arrayMathUtils.max(r);
        } else if (stringUtils_1.isPercent(t)) {
          e = this.percent(1 / Q);
        } else {
          var T = arrayMathUtils.sum([].concat(this.cLines, this.cSpace)) + this.fSpace[0] * 2;
          e = Math.max(0, this.length2em(t) - T) / Q;
        }
        return Array(this.numCols).fill(e);
      };
      e.prototype.getColumnWidthsAuto = function (t) {
        var e = this;
        return t.map(function (t) {
          if (t === "auto" || t === "fit") {
            return null;
          } else if (stringUtils_1.isPercent(t)) {
            return t;
          } else {
            return e.length2em(t);
          }
        });
      };
      e.prototype.getColumnWidthsPercent = function (t) {
        var e = this;
        var Q = t.indexOf("fit") >= 0;
        var r = (Q ? this.getTableData() : {
          W: null
        }).W;
        return Array.from(t.keys()).map(function (T) {
          var n = t[T];
          if (n === "fit") {
            return null;
          } else if (n === "auto") {
            if (Q) {
              return r[T];
            } else {
              return null;
            }
          } else if (stringUtils_1.isPercent(n)) {
            return n;
          } else {
            return e.length2em(n);
          }
        });
      };
      e.prototype.getColumnWidthsFixed = function (t, e) {
        var Q = this;
        var r = Array.from(t.keys());
        var T = r.filter(function (e) {
          return t[e] === "fit";
        });
        var n = r.filter(function (e) {
          return t[e] === "auto";
        });
        var o = T.length || n.length;
        var i = (o ? this.getTableData() : {
          W: null
        }).W;
        var a = e - arrayMathUtils.sum([].concat(this.cLines, this.cSpace)) - this.fSpace[0] * 2;
        var u = a;
        r.forEach(function (e) {
          var r = t[e];
          u -= r === "fit" || r === "auto" ? i[e] : Q.length2em(r, a);
        });
        var l = o && u > 0 ? u / o : 0;
        return r.map(function (e) {
          var r = t[e];
          if (r === "fit") {
            return i[e] + l;
          } else if (r === "auto") {
            return i[e] + (T.length === 0 ? l : 0);
          } else {
            return Q.length2em(r, a);
          }
        });
      };
      e.prototype.getVerticalPosition = function (t, e) {
        var Q = this.node.attributes.get("equalrows");
        var r = this.getTableData();
        var T = r.H;
        var o = r.D;
        var i = Q ? this.getEqualRowHeight() : 0;
        var a = this.getRowHalfSpacing();
        var u = this.fLine;
        var s = 0;
        for (; s < t; s++) {
          u += a[s] + (Q ? i : T[s] + o[s]) + a[s + 1] + this.rLines[s];
        }
        var l = n(Q ? [(i + T[t] - o[t]) / 2, (i - T[t] + o[t]) / 2] : [T[t], o[t]], 2);
        var c = l[0];
        var p = l[1];
        return u + ({
          top: 0,
          center: a[t] + (c + p) / 2,
          bottom: a[t] + c + p + a[t + 1],
          baseline: a[t] + c,
          axis: a[t] + c - 0.25
        }[e] || 0);
      };
      e.prototype.getEmHalfSpacing = function (t, e, Q = 1) {
        var r = this.em(t * Q);
        var T = this.addEm(e, 2 / Q);
        T.unshift(r);
        T.push(r);
        return T;
      };
      e.prototype.getRowHalfSpacing = function () {
        var t = this.rSpace.map(function (t) {
          return t / 2;
        });
        t.unshift(this.fSpace[1]);
        t.push(this.fSpace[1]);
        return t;
      };
      e.prototype.getColumnHalfSpacing = function () {
        var t = this.cSpace.map(function (t) {
          return t / 2;
        });
        t.unshift(this.fSpace[0]);
        t.push(this.fSpace[0]);
        return t;
      };
      e.prototype.getAlignmentRow = function () {
        var t = n(stringUtils_1.split(this.node.attributes.get("align")), 2);
        var e = t[0];
        var Q = t[1];
        if (Q == null) {
          return [e, null];
        }
        var r = parseInt(Q);
        if (r < 0) {
          r += this.numRows + 1;
        }
        return [e, r < 1 || r > this.numRows ? null : r - 1];
      };
      e.prototype.getColumnAttributes = function (t, e = 1) {
        var Q = this.numCols - e;
        var r = this.getAttributeArray(t);
        if (r.length === 0) {
          return null;
        }
        while (r.length < Q) {
          r.push(r[r.length - 1]);
        }
        if (r.length > Q) {
          r.splice(Q);
        }
        return r;
      };
      e.prototype.getRowAttributes = function (t, e = 1) {
        var Q = this.numRows - e;
        var r = this.getAttributeArray(t);
        if (r.length === 0) {
          return null;
        }
        while (r.length < Q) {
          r.push(r[r.length - 1]);
        }
        if (r.length > Q) {
          r.splice(Q);
        }
        return r;
      };
      e.prototype.getAttributeArray = function (t) {
        var e = this.node.attributes.get(t);
        if (e) {
          return stringUtils_1.split(e);
        } else {
          return [this.node.attributes.getDefault(t)];
        }
      };
      e.prototype.addEm = function (t, e) {
        var Q = this;
        if (e === undefined) {
          e = 1;
        }
        if (t) {
          return t.map(function (t) {
            return Q.em(t / e);
          });
        } else {
          return null;
        }
      };
      e.prototype.convertLengths = function (t) {
        var e = this;
        if (t) {
          return t.map(function (t) {
            return e.length2em(t);
          });
        } else {
          return null;
        }
      };
      return e;
    }(t);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}