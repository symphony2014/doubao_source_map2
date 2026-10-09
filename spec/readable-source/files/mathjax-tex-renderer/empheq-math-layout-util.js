// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(142412) to 'mathjax-utilities'
// - Resolved require(658610) to 'mathjax-tex-parser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 968741
         */
module.exports = function (module, exports, require) {
  var r = this && this.__read || function (t, e) {
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
  var T = this && this.__spreadArray || function (t, e, Q) {
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
  var n = this && this.__values || function (t) {
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
  var o = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.EmpheqUtil = undefined;
  var i = o(require("mathjax-utilities") /*id: 142412*/);
  var a = o(require("mathjax-tex-parser") /*id: 658610*/);
  exports.EmpheqUtil = {
    environment: function (t, e, Q, n) {
      var o = n[0];
      var i = t.itemFactory.create(o + "-begin").setProperties({
        name: e,
        end: o
      });
      t.Push(Q.apply(undefined, T([t, i], r(n.slice(1)), false)));
    },
    splitOptions: function (t, e = null) {
      return i.default.keyvalOptions(t, e, true);
    },
    columnCount: function (t) {
      var e;
      var Q;
      var r = 0;
      try {
        var T = n(t.childNodes);
        var o = T.next();
        for (; !o.done; o = T.next()) {
          var i = o.value;
          var a = i.childNodes.length - +!!i.isKind("mlabeledtr");
          if (a > r) {
            r = a;
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (o && !o.done && (Q = T.return)) {
            Q.call(T);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      return r;
    },
    cellBlock: function (t, e, Q, r) {
      var T;
      var o;
      var i = Q.create("node", "mpadded", [], {
        height: 0,
        depth: 0,
        voffset: "-1height"
      });
      var u = new a.default(t, Q.stack.env, Q.configuration);
      var s = u.mml();
      if (r && u.configuration.tags.label) {
        u.configuration.tags.currentTag.env = r;
        u.configuration.tags.getTag(true);
      }
      try {
        var l = n(s.isInferred ? s.childNodes : [s]);
        var c = l.next();
        for (; !c.done; c = l.next()) {
          var p = c.value;
          i.appendChild(p);
        }
      } catch (t) {
        T = {
          error: t
        };
      } finally {
        try {
          if (c && !c.done && (o = l.return)) {
            o.call(l);
          }
        } finally {
          if (T) {
            throw T.error;
          }
        }
      }
      i.appendChild(Q.create("node", "mphantom", [Q.create("node", "mpadded", [e], {
        width: 0
      })]));
      return i;
    },
    topRowTable: function (t, e) {
      var Q = i.default.copyNode(t, e);
      Q.setChildren(Q.childNodes.slice(0, 1));
      Q.attributes.set("align", "baseline 1");
      return t.factory.create("mphantom", {}, [e.create("node", "mpadded", [Q], {
        width: 0
      })]);
    },
    rowspanCell: function (t, e, Q, r, T) {
      t.appendChild(r.create("node", "mpadded", [this.cellBlock(e, i.default.copyNode(Q, r), r, T), this.topRowTable(Q, r)], {
        height: 0,
        depth: 0,
        voffset: "height"
      }));
    },
    left: function (t, e, Q, r, T = "") {
      t.attributes.set("columnalign", "right " + (t.attributes.get("columnalign") || ""));
      t.attributes.set("columnspacing", "0em " + (t.attributes.get("columnspacing") || ""));
      try {
        var o;
        var i;
        var a;
        var u = n(t.childNodes.slice(0).reverse());
        var s = u.next();
        for (; !s.done; s = u.next()) {
          var l = s.value;
          a = r.create("node", "mtd");
          l.childNodes.unshift(a);
          a.parent = l;
          if (l.isKind("mlabeledtr")) {
            l.childNodes[0] = l.childNodes[1];
            l.childNodes[1] = a;
          }
        }
      } catch (t) {
        o = {
          error: t
        };
      } finally {
        try {
          if (s && !s.done && (i = u.return)) {
            i.call(u);
          }
        } finally {
          if (o) {
            throw o.error;
          }
        }
      }
      this.rowspanCell(a, Q, e, r, T);
    },
    right: function (t, Q, r, T, n = "") {
      if (t.childNodes.length === 0) {
        t.appendChild(T.create("node", "mtr"));
      }
      var o = exports.EmpheqUtil.columnCount(t);
      var i = t.childNodes[0];
      while (i.childNodes.length < o) {
        i.appendChild(T.create("node", "mtd"));
      }
      var a = i.appendChild(T.create("node", "mtd"));
      exports.EmpheqUtil.rowspanCell(a, r, Q, T, n);
      t.attributes.set("columnalign", (t.attributes.get("columnalign") || "").split(/ /).slice(0, o).join(" ") + " left");
      t.attributes.set("columnspacing", (t.attributes.get("columnspacing") || "").split(/ /).slice(0, o - 1).join(" ") + " 0em");
    },
    adjustTable: function (t, e) {
      var Q = t.getProperty("left");
      var r = t.getProperty("right");
      if (Q || r) {
        var T = t.Last;
        var n = i.default.copyNode(T, e);
        if (Q) {
          this.left(T, n, Q, e);
        }
        if (r) {
          this.right(T, n, r, e);
        }
      }
    },
    allowEnv: {
      equation: true,
      align: true,
      gather: true,
      flalign: true,
      alignat: true,
      multline: true
    },
    checkEnv: function (t) {
      return this.allowEnv.hasOwnProperty(t.replace(/\*$/, "")) || false;
    }
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}