// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'cssBoundingBoxClass'
// - Resolved require(761002) to 'css-bounding-box-class'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 909472
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
  exports.CommonMmultiscriptsMixin = exports.ScriptNames = exports.NextScript = undefined;
  var cssBoundingBoxClass = require("css-bounding-box-class") /*id: 761002*/;
  exports.NextScript = {
    base: "subList",
    subList: "supList",
    supList: "subList",
    psubList: "psupList",
    psupList: "psubList"
  };
  exports.ScriptNames = ["sup", "sup", "psup", "psub"];
  exports.CommonMmultiscriptsMixin = function (t) {
    return function (t) {
      function Q() {
        var e = [];
        var Q = 0;
        for (; Q < arguments.length; Q++) {
          e[Q] = arguments[Q];
        }
        var r = t.apply(this, o([], n(e), false)) || this;
        r.scriptData = null;
        r.firstPrescript = 0;
        r.getScriptData();
        return r;
      }
      T(Q, t);
      Q.prototype.combinePrePost = function (t, e) {
        var Q = new cssBoundingBoxClass.BBox(t);
        Q.combine(e, 0, 0);
        return Q;
      };
      Q.prototype.computeBBox = function (t, e = false) {
        var Q = this.font.params.scriptspace;
        var r = this.scriptData;
        var T = this.combinePrePost(r.sub, r.psub);
        var o = this.combinePrePost(r.sup, r.psup);
        var i = n(this.getUVQ(T, o), 2);
        var a = i[0];
        var u = i[1];
        t.empty();
        if (r.numPrescripts) {
          t.combine(r.psup, Q, a);
          t.combine(r.psub, Q, u);
        }
        t.append(r.base);
        if (r.numScripts) {
          var s = t.w;
          t.combine(r.sup, s, a);
          t.combine(r.sub, s, u);
          t.w += Q;
        }
        t.clean();
        this.setChildPWidths(e);
      };
      Q.prototype.getScriptData = function () {
        var t = this.scriptData = {
          base: null,
          sub: cssBoundingBoxClass.BBox.empty(),
          sup: cssBoundingBoxClass.BBox.empty(),
          psub: cssBoundingBoxClass.BBox.empty(),
          psup: cssBoundingBoxClass.BBox.empty(),
          numPrescripts: 0,
          numScripts: 0
        };
        var e = this.getScriptBBoxLists();
        this.combineBBoxLists(t.sub, t.sup, e.subList, e.supList);
        this.combineBBoxLists(t.psub, t.psup, e.psubList, e.psupList);
        t.base = e.base[0];
        t.numPrescripts = e.psubList.length;
        t.numScripts = e.subList.length;
      };
      Q.prototype.getScriptBBoxLists = function () {
        var t;
        var Q;
        var r = {
          base: [],
          subList: [],
          supList: [],
          psubList: [],
          psupList: []
        };
        var T = "base";
        try {
          var n = i(this.childNodes);
          var o = n.next();
          for (; !o.done; o = n.next()) {
            var a = o.value;
            if (a.node.isKind("mprescripts")) {
              T = "psubList";
            } else {
              r[T].push(a.getOuterBBox());
              T = exports.NextScript[T];
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (o && !o.done && (Q = n.return)) {
              Q.call(n);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        this.firstPrescript = r.subList.length + r.supList.length + 2;
        this.padLists(r.subList, r.supList);
        this.padLists(r.psubList, r.psupList);
        return r;
      };
      Q.prototype.padLists = function (t, e) {
        if (t.length > e.length) {
          e.push(cssBoundingBoxClass.BBox.empty());
        }
      };
      Q.prototype.combineBBoxLists = function (t, e, Q, r) {
        for (var T = 0; T < Q.length; T++) {
          var o = n(this.getScaledWHD(Q[T]), 3);
          var i = o[0];
          var a = o[1];
          var u = o[2];
          var s = n(this.getScaledWHD(r[T]), 3);
          var l = s[0];
          var c = s[1];
          var p = s[2];
          var h = Math.max(i, l);
          t.w += h;
          e.w += h;
          if (a > t.h) {
            t.h = a;
          }
          if (u > t.d) {
            t.d = u;
          }
          if (c > e.h) {
            e.h = c;
          }
          if (p > e.d) {
            e.d = p;
          }
        }
      };
      Q.prototype.getScaledWHD = function (t) {
        var e = t.w;
        var Q = t.h;
        var r = t.d;
        var T = t.rscale;
        return [e * T, Q * T, r * T];
      };
      Q.prototype.getUVQ = function (e, Q) {
        var r;
        if (!this.UVQ) {
          var T = n([0, 0, 0], 3);
          var o = T[0];
          var i = T[1];
          var a = T[2];
          if (e.h === 0 && e.d === 0) {
            o = this.getU();
          } else if (Q.h === 0 && Q.d === 0) {
            o = -this.getV();
          } else {
            o = (r = n(t.prototype.getUVQ.call(this, e, Q), 3))[0];
            i = r[1];
            a = r[2];
          }
          this.UVQ = [o, i, a];
        }
        return this.UVQ;
      };
      return Q;
    }(t);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}