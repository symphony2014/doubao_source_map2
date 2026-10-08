// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'EditorLine'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 136973
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var objectEntriesIteratorUtil = require("object-entries-iterator-util") /*id: 155854*/;
  var iteratorPairsToObject = require("iterator-pairs-to-object") /*id: 708592*/;
  var sortObjectKeysUtil = require("sort-object-keys-util") /*id: 780137*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var documentOperationConstants = require("document-operation-constants") /*id: 134823*/;
  var editorConstantsKeycodes = require("editor-constants-keycodes") /*id: 495515*/;
  require("editor-kit-dom-patch") /*id: 218425*/;
  var contentDeltaOpsUtil = require("content-delta-ops-util") /*id: 444706*/;
  var diffChangeConstants = require("diff-change-constants") /*id: 699476*/;
  var d = function () {
    function t(t, e) {
      this.parent = null;
      this._node = null;
      this.instance = null;
      this.reactInXInstanceList = [];
      this.offset = 0;
      this._keyTimes = 0;
      this.ti = "";
      this.op = t;
      this.parent = e;
    }
    var e = t.prototype;
    e.getKey = function () {
      var t = this.op.attributes;
      return (t ? JSON.stringify(sortObjectKeysUtil.sortObjectKeys(t)) : JSON.stringify({})) + this._keyTimes;
    };
    e.getCustomKey = function () {
      return this.ti;
    };
    e.setKeyTimes = function (t) {
      this._keyTimes = t;
    };
    e.setCustomKey = function (t) {
      this.ti = t;
    };
    e.getState = function () {
      return this.op;
    };
    e.getViewContent = function () {
      return {
        op: this.op,
        index: this.index,
        offset: this.offset
      };
    };
    e.getContainer = function () {
      return this._node;
    };
    e.getNode = function () {
      return this._node;
    };
    e.setNode = function (t) {
      this._node = t;
    };
    return t;
  }();
  var h = function () {
    function t(t, e, n) {
      var a;
      var l = this;
      this.key = "";
      this.parent = null;
      this._node = null;
      this._keepKey = false;
      this._invisible = false;
      this.ve = 0;
      this._offsetStart = 0;
      this._offsetEnd = 0;
      this._e = "";
      this.fe = 0;
      this.je = "";
      this.ye = 0;
      this.leaves = [];
      this.de = t;
      if (!n) {
        this.parent = e;
        this.me();
        this._e = e.getZoneId();
        this.je = this.de.ops.map(function (t) {
          if (deltaSetCore.isInsertString(t)) {
            return t.insert;
          } else {
            return " ";
          }
        }).join("");
        this.fe = this.je.length;
        e = contentDeltaOpsUtil.createOpArray();
        if (this.hasLineMarker()) {
          this.ye = 1;
          e.push.apply(e, typescriptRuntimeHelpers_1.spread(objectEntriesIteratorUtil.getObjectEntries(this._getOps()[0].attributes)));
        }
        this.Ee = e;
        this.Ee.toMap = function () {
          a = a || iteratorPairsToObject.iteratorToObject(l.Ee);
          return typescriptRuntimeHelpers_1.assign({}, a);
        };
        this.key = contentDeltaOpsUtil.generateRandomId(6);
      }
    }
    var e = t.prototype;
    e.me = function () {
      var t = this.normalizeOps();
      if (t) {
        this.handleDisplayEnter(t);
        var e = 0;
        var n = new Map();
        var r = 0;
        for (; r < t.length; ++r) {
          var i = t[r];
          var o = i.attributes;
          var s = o ? JSON.stringify(sortObjectKeysUtil.sortObjectKeys(o)) : JSON.stringify({});
          if (n.has(s)) {
            n.set(s, n.get(s) + 1);
          } else {
            n.set(s, 0);
          }
          o = n.get(s);
          s += o;
          (s = new d(i, this)).setKeyTimes(o);
          s.index = r;
          s.offset = e;
          e += i.insert.length;
          this.leaves.push(s);
        }
      }
    };
    e.getLinefeedLeaf = function () {
      var t;
      var e = null;
      var n = this.leaves.length - 1;
      for (; n >= 0; --n) {
        var r = this.leaves[n];
        if ((t = r.op.attributes) !== null && t !== undefined && t.enter) {
          e = r;
          break;
        }
      }
      return e;
    };
    e.normalizeOps = function (t) {
      return (t = t === undefined ? this.de?.ops || [] : t).reduce(function (t, e) {
        var n;
        var i = e.insert;
        var o = e.attributes;
        if (typeof i == "string" && i.includes("\n") && i.length > 1) {
          (n = i.split("\n")).forEach(function (i, o) {
            if (i) {
              t.push(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e), {
                insert: i
              }));
              if (o !== n.length - 1) {
                t.push({
                  attributes: typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e == null ? undefined : e.attributes), {
                    enter: "true"
                  }),
                  insert: editorConstantsKeycodes.zeroWidthSpace
                });
              }
            }
          });
        } else if (i === "\n") {
          t.push({
            attributes: typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e == null ? undefined : e.attributes), {
              enter: "true"
            }),
            insert: editorConstantsKeycodes.zeroWidthSpace
          });
        } else if (o == null || !o.lmkr) {
          t.push(e);
        }
        return t;
      }, []);
    };
    e.handleDisplayEnter = function (t) {
      var e;
      var n = this.schema;
      if (n) {
        e = true;
        if (Object.entries(n.schemas).find(function (t) {
          var e = typescriptRuntimeHelpers_1.readIterable(t, 2);
          var t = e[0];
          var e = e[1];
          return t === "displayEnter" && (e === false || typeof e == "function");
        })) {
          e = !t.some(function (t) {
            return !function (t, e) {
              var n;
              var i;
              if (t === undefined) {
                t = {};
              }
              try {
                var a = typescriptRuntimeHelpers_1.values(Object.keys(t));
                var s = a.next();
                for (; !s.done; s = a.next()) {
                  var l = s.value;
                  var u = e.get(l)?.displayEnter;
                  if (typeof u == "boolean") {
                    return u;
                  }
                  if (typeof u == "function") {
                    return u(t[l]);
                  }
                }
              } catch (t) {
                n = {
                  error: t
                };
              } finally {
                try {
                  if (s && !s.done && (i = a.return)) {
                    i.call(a);
                  }
                } finally {
                  if (n) {
                    throw n.error;
                  }
                }
              }
              return true;
            }(t.attributes, n);
          });
        }
        t = t[t.length - 1];
        if (!e && t.insert === editorConstantsKeycodes.zeroWidthSpace) {
          t.attributes = typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, (t = t.attributes) !== null && t !== undefined ? t : {}), {
            displayEnter: "false"
          });
        }
      }
    };
    Object.defineProperty(e, "index", {
      get: function () {
        return this.ve;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(e, "schema", {
      get: function () {
        return this.parent?.schema;
      },
      enumerable: false,
      configurable: true
    });
    e.getItemByIndex = function (t) {
      return this.leaves[t] || null;
    };
    e.isInvisible = function () {
      return this._invisible;
    };
    e.isEndOfLine = function (t) {
      return this.fe === t + 1;
    };
    e.compose = function (e) {
      (e = new t(this.de.compose(e, false), this.parent)).ve = this.ve;
      return e;
    };
    e.clone = function () {
      var e = new t(null, null, true);
      e.de = this.de;
      e._e = this._e;
      e.je = this.je;
      e.fe = this.fe;
      e.ye = this.ye;
      e.Ee = this.Ee;
      e.key = this.key;
      e._offsetStart = this._offsetStart;
      e._offsetEnd = this._offsetEnd;
      e.ve = this.ve;
      e.parent = this.parent;
      e.instance = this.instance;
      e.leaves = this.leaves;
      e.setNode(this._node);
      return e;
    };
    e.slice = function (e, n) {
      var r = [];
      var i = 0;
      this.de.forEach(function (t) {
        var o;
        var a;
        var l;
        if (t != null && t.insert && typeof t.insert != "object") {
          o = deltaSetCore.getOpLength(t);
          if (i <= n && e <= i + o && (a = Math.max(0, e - i)) < (l = Math.min(o, n - i))) {
            r.push({
              insert: t == null ? undefined : t.insert.slice(a, l),
              attributes: t.attributes
            });
          }
          i += o;
        }
      });
      return new t(this.de.create({
        ops: r
      }), this.parent);
    };
    e.getZoneId = function () {
      return this._e;
    };
    e.getKey = function () {
      return this.key;
    };
    e.getNode = function () {
      return this._node;
    };
    e.getText = function () {
      var t = this.de.ops.map(function (t) {
        if (deltaSetCore.isInsertString(t)) {
          return t.insert;
        } else {
          return "*";
        }
      }).join("");
      if (this.hasLineMarker()) {
        return t.slice(1);
      } else {
        return t;
      }
    };
    e.getLineMarker = function () {
      return this.ye;
    };
    e.getModelText = function () {
      return this.je;
    };
    e.length = function () {
      return this.fe;
    };
    e.getOps = function () {
      return this._getOps();
    };
    e.getContent = function () {
      return this.de;
    };
    e.getContainer = function () {
      return this._node;
    };
    e.getViewContent = function () {
      return this.getOps();
    };
    e.getState = function () {
      return this.leaves;
    };
    e._getDelta = function () {
      return this.de;
    };
    e._getOps = function () {
      return this.de.ops;
    };
    e._setKey = function (t) {
      this.key = t;
    };
    e.setNode = function (t) {
      this._node = t;
    };
    e._setIndex = function (t) {
      this.ve = t;
    };
    e._setOffset = function (t, e) {
      this._offsetStart = t;
      this._offsetEnd = e;
    };
    e._refreshKey = function () {
      this.key = contentDeltaOpsUtil.generateRandomId(6);
    };
    e.getAttributes = function (t = 0, e = this.getModelText().length) {
      var n;
      var i;
      var o;
      var a;
      var s = 0;
      var l = contentDeltaOpsUtil.createOpArray();
      try {
        var u = typescriptRuntimeHelpers_1.values(this);
        var f = u.next();
        for (; !f.done; f = u.next()) {
          var d = f.value;
          if (d != null && d.insert && typeof d.insert != "object") {
            var h = d.insert.length;
            var p = d.attributes;
            if (s + h <= t || e <= s || !p) {
              s += h;
            } else {
              try {
                o = undefined;
                var v = typescriptRuntimeHelpers_1.values(Object.entries(p));
                var y = v.next();
                for (; !y.done; y = v.next()) {
                  var g = typescriptRuntimeHelpers_1.readIterable(y.value, 2);
                  var m = g[0];
                  var E = g[1];
                  l.push([m, E]);
                }
              } catch (t) {
                o = {
                  error: t
                };
              } finally {
                try {
                  if (y && !y.done && (a = v.return)) {
                    a.call(v);
                  }
                } finally {
                  if (o) {
                    throw o.error;
                  }
                }
              }
              s += h;
            }
          }
        }
      } catch (t) {
        n = {
          error: t
        };
      } finally {
        try {
          if (f && !f.done && (i = u.return)) {
            i.call(u);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      return l;
    };
    e.getEntities = function (t, e, n) {
      var r;
      var i = 0;
      var o = this.length();
      if (t instanceof Array) {
        r = t;
      } else {
        i = t.start;
        if ((o = t.end) === i && o > 0) {
          i--;
        }
      }
      return this._getEntities({
        attributes: r,
        start: i,
        end: o,
        matcher: e,
        getInternalZoneEntities: n
      });
    };
    e._getEntities = function (t) {
      var e;
      var n;
      var i;
      var o;
      var a;
      var s;
      var l;
      var u;
      var c = t.attributes;
      var f = t.start;
      var d = t.end;
      var h = t.allMatch;
      var p = h !== undefined && h;
      var v = t.matcher;
      var y = t.getInternalZoneEntities;
      var g = [];
      var m = 0;
      var E = this.ve;
      try {
        var b = typescriptRuntimeHelpers_1.values(this);
        var x = b.next();
        for (; !x.done; x = b.next()) {
          var I = x.value;
          if (I.insert && typeof I.insert != "object") {
            var T = I.insert.length;
            if (m + T <= f || d <= m) {
              m += T;
            } else {
              var _ = false;
              var S = true;
              var A = I.attributes;
              if (!A || !Object.keys(A).length) {
                A = {};
                S = false;
              }
              if (v) {
                try {
                  i = undefined;
                  var C = typescriptRuntimeHelpers_1.values(Object.entries(A));
                  var N = C.next();
                  for (; !N.done; N = C.next()) {
                    var L = typescriptRuntimeHelpers_1.readIterable(N.value, 2);
                    if (v(P = L[0], k = L[1])) {
                      _ = true;
                    } else {
                      S = false;
                    }
                  }
                } catch (t) {
                  i = {
                    error: t
                  };
                } finally {
                  try {
                    if (N && !N.done && (o = C.return)) {
                      o.call(C);
                    }
                  } finally {
                    if (i) {
                      throw i.error;
                    }
                  }
                }
              } else if (c != null && c.length) {
                try {
                  a = undefined;
                  var O = typescriptRuntimeHelpers_1.values(Object.entries(A));
                  var w = O.next();
                  for (; !w.done; w = O.next()) {
                    var D = typescriptRuntimeHelpers_1.readIterable(w.value, 2);
                    var P = D[0];
                    var k = D[1];
                    try {
                      l = undefined;
                      var R = typescriptRuntimeHelpers_1.values(c);
                      var M = R.next();
                      for (; !M.done; M = R.next()) {
                        var z = M.value;
                        var U = z[1] !== undefined;
                        if (z[0] !== P || U && String(z[1]) !== String(k)) {
                          S = false;
                        } else {
                          _ = true;
                        }
                      }
                    } catch (t) {
                      l = {
                        error: t
                      };
                    } finally {
                      try {
                        if (M && !M.done && (u = R.return)) {
                          u.call(R);
                        }
                      } finally {
                        if (l) {
                          throw l.error;
                        }
                      }
                    }
                  }
                } catch (t) {
                  a = {
                    error: t
                  };
                } finally {
                  try {
                    if (w && !w.done && (s = O.return)) {
                      s.call(O);
                    }
                  } finally {
                    if (a) {
                      throw a.error;
                    }
                  }
                }
              } else {
                S = true;
              }
              if (_ && !p || S) {
                g.push({
                  start: {
                    line: E,
                    offset: Math.max(m, f),
                    zoneId: this._e
                  },
                  end: {
                    line: E,
                    offset: Math.min(m + T, d),
                    zoneId: this._e
                  },
                  text: I.insert.slice(Math.max(f - m, 0), d - m),
                  attributes: A
                });
              }
              m += T;
              var F = y == null ? undefined : y(Object.entries(A), c, v);
              if (F) {
                g.push.apply(g, typescriptRuntimeHelpers_1.spread(F));
              }
            }
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (x && !x.done && (n = b.return)) {
            n.call(b);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      return g;
    };
    e.getLineAttributes = function () {
      return this.Ee;
    };
    e.getOffset = function () {
      return {
        start: this._offsetStart,
        end: this._offsetEnd
      };
    };
    e.forEach = function (t) {
      return this._getOps().forEach(t);
    };
    e[Symbol.iterator] = function () {
      return this._getOps().values();
    };
    e.hasLineMarker = function () {
      var t;
      return (t = (t = this._getOps()[0]) === null || t === undefined ? undefined : t.attributes) !== null && t !== undefined && !!t.lmkr;
    };
    e.isEmpty = function () {
      var t = this.hasLineMarker();
      var e = this.length();
      return e - +!!t == 1 && this.Ee.length <= 1 && this.getText() === documentOperationConstants.newlineChar || e === 1 && t && this.Ee.length === 1 || e === 0;
    };
    e.isTextEmpty = function () {
      var t = +!!this.hasLineMarker();
      return this.length() - t == 1 || this.length() === 0;
    };
    e.previousSibling = function () {
      return this.parent.getLine(this.ve - 1);
    };
    e.nextSibling = function () {
      return this.parent.getLine(this.ve + 1);
    };
    e.compare = function (e) {
      if (e === this) {
        return t.EQAUL;
      }
      if (e && e.getKey() === this.getKey()) {
        var n = this.getOps();
        var r = e.getOps();
        var i = 0;
        var o = r.length;
        for (; i < o; i++) {
          if (r[i] !== n[i]) {
            return t.UPDATE;
          }
        }
        return t.EQAUL;
      }
      return t.UNEQUAL;
    };
    t.EQAUL = diffChangeConstants.ComparisonStatus.EQUAL;
    t.UNEQUAL = diffChangeConstants.ComparisonStatus.UNEQUAL;
    t.UPDATE = diffChangeConstants.ComparisonStatus.UPDATE;
    return t;
  }();
  require.d(exports, {
    EditorLine: function () {
      return h;
    }
  });
}