// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ky' to 'validateDocOps'
// - Renamed export 'nF' to 'normalizeContent'
// - Renamed export 'qF' to 'findLineAttributes'
// - Renamed export 'qW' to 'applyZoneDeltas'
// - Renamed export 's7' to 'validateDocText'
// - Renamed export 'vA' to 'createOpArray'
// - Renamed export 'zs' to 'generateRandomId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 444706
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var iteratorPairsToObject = require("iterator-pairs-to-object") /*id: 708592*/;
  var diffOperationValidators = require("diff-operation-validators") /*id: 735530*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var documentOperationConstants = require("document-operation-constants") /*id: 134823*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var booleanTypeUtils = require("boolean-type-utils") /*id: 488634*/;
  var cssDisplayTypes = require("css-display-types") /*id: 226292*/;
  var d = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function h() {
    var t = [];
    t.toMap = function () {
      return iteratorPairsToObject.iteratorToObject(this);
    };
    return t;
  }
  function y(t = 20) {
    var e = "";
    var r = 0;
    for (; r < t; r++) {
      var n = Math.floor(Math.random() * d.length);
      e += d[n];
    }
    return e;
  }
  function b(t, e, r) {
    var e = t.offsetToPoint(e);
    var n = e.line;
    var o = e.offset;
    var r = t.offsetToPoint(r);
    var i = r.line;
    var u = r.offset;
    var a = "";
    if (n === i) {
      return t.getLine(n).getModelText().slice(o, u);
    }
    for (var s = n; s <= i; s++) {
      var c = t.getLine(s).getModelText();
      a += s === n ? c.slice(o) : s === i ? c.slice(0, u) : c;
    }
    return a;
  }
  function g(t, e, r) {
    e = t.offsetToPoint(e);
    r = t.offsetToPoint(r);
    return t.getEntities({
      start: e,
      end: r
    });
  }
  (n = o = o || {})[n.BLOCK = 0] = "BLOCK";
  n[n.LMKR = 1] = "LMKR";
  n[n.TEXT = 2] = "TEXT";
  function v(t, e) {
    if (S(t.attributes, e)) {
      return o.BLOCK;
    } else if (diffOperationValidators.isWildcardInsert(t)) {
      return o.LMKR;
    } else {
      return o.TEXT;
    }
  }
  var m = [[booleanTypeUtils.getTrueFn, booleanTypeUtils.getTrueFn, function (t, e) {
    return !e.startsWith("\n");
  }], [booleanTypeUtils.getFalseFn, booleanTypeUtils.getTrueFn, booleanTypeUtils.getFalseFn], [function (t) {
    return !t.endsWith("\n");
  }, function (t) {
    return !t.endsWith("\n");
  }, booleanTypeUtils.getFalseFn]];
  function S(t = {}, e) {
    return Object.keys(t).some(function (r) {
      var n = (n = e.get(r)) === null || n === undefined ? undefined : n.display;
      if (typeof n == "string") {
        return n === cssDisplayTypes.displayTypes.block;
      } else {
        return typeof n == "function" && n(t[r]) === cssDisplayTypes.displayTypes.block;
      }
    });
  }
  function w(t, e, r, n) {
    var o = Object.keys(t).reduce(function (o, i) {
      if (i === e || function (t, e, r, n) {
        if (n instanceof RegExp) {
          if (t.match(n)) {
            return true;
          }
        } else if (n(t, e, r)) {
          return true;
        }
        return false;
      }(i, t[i], r, n)) {
        o[i] = t[i];
      } else {
        o[i] = "";
      }
      return o;
    }, {});
    if (t.lmkr) {
      o.lmkr = t.lmkr;
    }
    return o;
  }
  function A(t, e) {
    var r = typescriptRuntimeHelpers_1.assign({}, t);
    Object.keys(t).forEach(function (n) {
      if (t[n] && !e[n]) {
        delete r[n];
      }
    });
    return r;
  }
  function x(t, e) {
    if (e) {
      return Object.keys(e).filter(function (t) {
        return e[t];
      }).find(function (e) {
        return t.get(e)?.attributes || ((e = t.get(e)) === null || e === undefined ? undefined : e.lineAttributes);
      });
    }
  }
  function O(t, e, r) {
    if (e >= t.ops.length) {
      throw Error("getOpOffsetInDocumentWithCache index overstep");
    }
    var n = e;
    var o = 0;
    while (n >= 0) {
      if (r.has(n)) {
        o += r.get(n);
        break;
      }
      var i = t.ops[n];
      if (deltaSetCore.getOpType(i) !== documentOperationConstants.operationTypes.INSERT) {
        o += deltaSetCore.getOpLength(i);
      }
      n--;
    }
    return o;
  }
  function M(t, e, r) {
    return r.reduce(function (r, n) {
      if (!(n instanceof contentStructureDelta.ContentDelta)) {
        return r.concat(n);
      }
      var o = t.getZoneState(n.zoneId);
      if (!o && n.ops.some(function (t) {
        return !t.insert;
      })) {
        throw Error("attempt to apply new ZoneDelta which is invalid");
      }
      var u = false;
      var a = n.reduce(function (t, r, a) {
        var f = deltaSetCore.getOpType(r);
        if (f === documentOperationConstants.operationTypes.DELETE) {
          t.push(r);
        } else if (f === documentOperationConstants.operationTypes.RETAIN) {
          u = false;
          if (function (t, e, r, n, o) {
            var u;
            var a = t.ops[r];
            if (!a.attributes || !S(a.attributes, o) || !(e = (u = e).ops[u.ops.length - 1])) {
              return false;
            }
            if (deltaSetCore.getOpType(e) === documentOperationConstants.operationTypes.INSERT) {
              return !e.insert.endsWith("\n");
            }
            for (var f = t.ops.slice(0, r).filter(function (t) {
              return deltaSetCore.getOpType(t) !== documentOperationConstants.operationTypes.INSERT;
            }); f[f.length - 1] && deltaSetCore.getOpType(f[f.length - 1]) === documentOperationConstants.operationTypes.DELETE;) {
              f.pop();
            }
            return f.length !== 0 && b(n, (r = f.reduce(function (t, e) {
              return t + deltaSetCore.getOpLength(e);
            }, 0)) - 1, r) !== "\n" && !typescriptRuntimeHelpers_1.readIterable(g(n, r - 1, r), 1)[0].attributes.lmkr;
          }(n, t, a, o, e)) {
            t.insertEnter();
          }
          t.push(r);
          if (function t(e, r, n, o, u) {
            var a = e.ops[r];
            var f = e.ops[n];
            if (!a.attributes || !S(a.attributes, u)) {
              return function (t, e, r, n) {
                var o = false;
                var u = e + 1;
                while (u < t.ops.length) {
                  var a = deltaSetCore.getOpType(t.ops[u]);
                  if (a === documentOperationConstants.operationTypes.INSERT) {
                    return false;
                  }
                  if (a === documentOperationConstants.operationTypes.RETAIN) {
                    break;
                  }
                  if (a === documentOperationConstants.operationTypes.DELETE) {
                    o = true;
                  }
                  u++;
                }
                if (!o) {
                  return false;
                }
                var f = t.ops.slice(0, e + 1).filter(function (t) {
                  return deltaSetCore.getOpType(t) !== documentOperationConstants.operationTypes.INSERT;
                }).reduce(function (t, e) {
                  return deltaSetCore.getOpLength(e) + t;
                }, 0);
                var l = typescriptRuntimeHelpers_1.readIterable(g(r, f - 1, f), 1)[0];
                var p = S(l.attributes, n);
                var d = t.ops.slice(0, u).filter(function (t) {
                  return deltaSetCore.getOpType(t) !== documentOperationConstants.operationTypes.INSERT;
                }).reduce(function (t, e) {
                  return deltaSetCore.getOpLength(e) + t;
                }, 0);
                var e = typescriptRuntimeHelpers_1.readIterable(g(r, d, d + 1), 1)[0];
                var n = S(e.attributes, n);
                if (p) {
                  return !b(r, d, d + 1).startsWith("\n");
                } else if (n) {
                  return !l.attributes.lmkr && !b(r, f - 1, f).endsWith("\n");
                } else {
                  return !!l.attributes.lmkr && !!e.attributes.lmkr;
                }
              }(e, r, o, u);
            }
            if (!f) {
              return b(o, l = e.ops.filter(function (t) {
                return deltaSetCore.getOpType(t) !== documentOperationConstants.operationTypes.INSERT;
              }).reduce(function (t, e) {
                return t + deltaSetCore.getOpLength(e);
              }, 0), l + 1) !== "\n";
            }
            if ((a = deltaSetCore.getOpType(f)) !== documentOperationConstants.operationTypes.INSERT) {
              if (a !== documentOperationConstants.operationTypes.RETAIN) {
                return t(e, r, n + 1, o, u);
              } else {
                return b(o, l = e.ops.slice(0, n).filter(function (t) {
                  return deltaSetCore.getOpType(t) !== documentOperationConstants.operationTypes.INSERT;
                }).reduce(function (t, e) {
                  return t + deltaSetCore.getOpLength(e);
                }, 0), l + 1) !== "\n";
              }
            }
            var l;
            var f = f.insert.startsWith("\n");
            var r = e.ops.slice(0, r + 1).filter(function (t) {
              return deltaSetCore.getOpType(t) !== documentOperationConstants.operationTypes.INSERT;
            }).reduce(function (t, e) {
              return t + deltaSetCore.getOpLength(e);
            }, 0);
            var r = b(o, r - 1, r).endsWith("\n");
            return !f && !r;
          }(n, a, a + 1, o, e)) {
            t.insertEnter();
          }
        } else {
          if (!u && function t(e, r, n, o, u) {
            var a = e.ops[n];
            var f = e.ops[r];
            if (f) {
              var l = deltaSetCore.getOpType(f);
              if (l === documentOperationConstants.operationTypes.INSERT) {
                return m[v(f, u)][v(a, u)](f.insert, a.insert);
              } else if (l !== documentOperationConstants.operationTypes.RETAIN) {
                return t(e, r - 1, n, o, u);
              } else {
                e = e.ops.slice(0, r + 1).filter(function (t) {
                  return deltaSetCore.getOpType(t) !== documentOperationConstants.operationTypes.INSERT;
                }).reduce(function (t, e) {
                  return t + deltaSetCore.getOpLength(e);
                }, 0);
                r = typescriptRuntimeHelpers_1.readIterable(g(o, e - 1, e), 1)[0];
                return m[r = v({
                  insert: e = b(o, e - 1, e),
                  attributes: r.attributes
                }, u)][v(a, u)](e, a.insert);
              }
            }
            return false;
          }(n, a - 1, a, o, e)) {
            t.insertEnter();
          }
          t.push(r);
          if (a = function t(e, r, n, o, u) {
            var a = e.ops[r];
            var f = e.ops[n];
            if (!f) {
              if (!o) {
                return false;
              }
              var l = e.ops.slice().filter(function (t) {
                return deltaSetCore.getOpType(t) !== documentOperationConstants.operationTypes.INSERT;
              }).reduce(function (t, e) {
                return t + deltaSetCore.getOpLength(e);
              }, 0);
              var p = typescriptRuntimeHelpers_1.readIterable(g(o, l, l + 1), 1)[0];
              var d = b(o, l, l + 1);
              var l = v({
                insert: d,
                attributes: p.attributes
              }, u);
              return m[v(a, u)][l](a.insert, d);
            }
            if ((p = deltaSetCore.getOpType(f)) === documentOperationConstants.operationTypes.INSERT) {
              return m[v(a, u)][v(f, u)](a.insert, f.insert);
            }
            if (p !== documentOperationConstants.operationTypes.RETAIN) {
              return p === documentOperationConstants.operationTypes.DELETE && t(e, r, n + 1, o, u);
            }
            var e = e.ops.slice(0, n).filter(function (t) {
              return deltaSetCore.getOpType(t) !== documentOperationConstants.operationTypes.INSERT;
            }).reduce(function (t, e) {
              return t + deltaSetCore.getOpLength(e);
            }, 0);
            var n = typescriptRuntimeHelpers_1.readIterable(g(o, e, e + 1), 1)[0];
            var d = b(o, e, e + 1);
            var l = v({
              insert: d,
              attributes: n.attributes
            }, u);
            return m[v(a, u)][l](a.insert, d);
          }(n, a, a + 1, o, e)) {
            t.insertEnter();
          }
          u = a;
        }
        return t;
      }, n.create({
        zoneId: n.zoneId
      }));
      return r.concat(a);
    }, new deltaSetCore.DeltaSet()).reduce(function (r, n) {
      if (!(n instanceof contentStructureDelta.ContentDelta)) {
        return r.concat(n);
      }
      var o = t.getZoneState(n.zoneId);
      if (!o && n.ops.some(function (t) {
        return !t.insert;
      })) {
        throw Error("attempt to apply new ZoneDelta which is invalid");
      }
      var u = new Map();
      var a = n.reduce(function (t, r, a) {
        var f = deltaSetCore.getOpType(r);
        if (f === documentOperationConstants.operationTypes.DELETE || !r.attributes) {
          return t.push(r);
        }
        var l;
        var p;
        var d = O(n, a - 1, u);
        u.set(a - 1, d);
        if (f === documentOperationConstants.operationTypes.RETAIN) {
          l = d + deltaSetCore.getOpLength(r);
          (p = function (t, e, r) {
            var n;
            var o;
            var u = [];
            var a = t.offsetToPoint(e).line;
            var c = t.getLine(a)._offsetStart;
            var f = a;
            for (; f < t.length(); f++) {
              var l = t.getLine(f).getOps();
              try {
                n = undefined;
                var p = typescriptRuntimeHelpers_1.values(l);
                var d = p.next();
                for (; !d.done; d = p.next()) {
                  var h;
                  var y;
                  var b = d.value;
                  var g = deltaSetCore.getOpLength(b);
                  var v = c + g;
                  if (r <= c) {
                    return u;
                  }
                  if (c <= r && e < v) {
                    h = Math.max(e - c, 0);
                    y = Math.min(g, r - c);
                    u.push({
                      insert: b.insert.slice(h, y),
                      attributes: b.attributes
                    });
                  }
                  c += g;
                }
              } catch (t) {
                n = {
                  error: t
                };
              } finally {
                try {
                  if (d && !d.done && (o = p.return)) {
                    o.call(p);
                  }
                } finally {
                  if (n) {
                    throw n.error;
                  }
                }
              }
            }
            return u;
          }(o, d, l)).forEach(function (f, d) {
            var h;
            var y;
            var b = typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, f.attributes), r.attributes);
            var v = x(e, b);
            if (v && f.attributes && (h = e.get(v)) !== null && h !== undefined && h.attributes) {
              _ = e.get(v).attributes;
              b = w(b, v, f.attributes[v], _);
            }
            if (b != null && b.lmkr) {
              var m = undefined;
              if (d < p.length - 1) {
                m = p[d + 1].attributes;
              } else {
                var S = false;
                var M = a + 1;
                while (M < n.ops.length) {
                  var P = n.ops[M];
                  if (deltaSetCore.getOpType(P) !== documentOperationConstants.operationTypes.DELETE) {
                    var E;
                    var S = true;
                    m = deltaSetCore.getOpType(P) === documentOperationConstants.operationTypes.INSERT ? P.attributes : (E = O(n, a, u), u.set(a, E), E = typescriptRuntimeHelpers_1.readIterable(g(o, E, E + 1), 1)[0], typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, E.attributes), P.attributes));
                    break;
                  }
                  M++;
                }
                if (!S) {
                  m = typescriptRuntimeHelpers_1.readIterable(g(o, l, l + 1), 1)[0].attributes;
                }
              }
              var _ = x(e, m);
              if (_ && (j = e.get(_).lineAttributes)) {
                b = w(b, _, m[_], j);
              }
              return t.retain(f.insert.length, A(r.attributes, b));
            }
            if (v) {
              var j = e.get(v).lineAttributes;
              if (d >= 0) {
                return t.retain(f.insert.length, A(r.attributes, b));
              }
              var k = t.ops.length - 1;
              var T = undefined;
              while (k >= 0) {
                var F = deltaSetCore.getOpType(t.ops[k]);
                if (F !== documentOperationConstants.operationTypes.DELETE) {
                  T = F;
                  break;
                }
                k++;
              }
              if (!(k < 0)) {
                d = t.ops[k];
                if (T === documentOperationConstants.operationTypes.INSERT && (y = d.attributes) !== null && y !== undefined && y.lmkr) {
                  if (j) {
                    t.ops[k] = {
                      insert: d.insert,
                      attributes: w(d.attributes, v, f.attributes[v], j)
                    };
                  }
                } else if (T === documentOperationConstants.operationTypes.RETAIN) {
                  d.attributes;
                }
              }
              return t.retain(f.insert.length, A(r.attributes, b));
            }
            return t.retain(f.insert.length, A(r.attributes, b));
          });
        }
        if (f !== documentOperationConstants.operationTypes.INSERT) {
          return t;
        }
        var h = r.attributes;
        var y = x(e, h);
        if (y && (b = e.get(y)) !== null && b !== undefined && b.attributes) {
          h = w(h, y, h[y], e.get(y).attributes);
        }
        if (r.attributes.lmkr) {
          var b;
          var v = undefined;
          var m = false;
          var S = a + 1;
          while (S < n.ops.length) {
            var M = n.ops[S];
            if (deltaSetCore.getOpType(M) !== documentOperationConstants.operationTypes.DELETE) {
              m = true;
              v = M.attributes;
              break;
            }
            S++;
          }
          if (m) {
            f = n.ops[S];
            if ((b = deltaSetCore.getOpType(f)) === documentOperationConstants.operationTypes.INSERT && f.attributes) {
              v = f.attributes;
            }
            if (b === documentOperationConstants.operationTypes.RETAIN && !f.attributes && o) {
              v = (E = typescriptRuntimeHelpers_1.readIterable(g(o, d, d + 1), 1)[0]).attributes;
            }
          } else if (o) {
            v = (E = typescriptRuntimeHelpers_1.readIterable(g(o, d, d + 1), 1)[0]).attributes;
          }
          if (v) {
            if ((P = x(e, v)) && (_ = e.get(P).lineAttributes)) {
              h = w(h, P, v[P], _);
            }
          }
        } else if (y) {
          var P;
          var E;
          var _ = e.get(y).lineAttributes;
          var j = t.ops.slice();
          var k = j.length - 1;
          while (k >= 0) {
            var T = j[k];
            var F = deltaSetCore.getOpType(T);
            if (F === documentOperationConstants.operationTypes.RETAIN) {
              break;
            }
            if (F === documentOperationConstants.operationTypes.INSERT && T.insert && T.insert.includes("\n")) {
              k = -1;
              break;
            }
            k--;
          }
          if (k >= 0 && !j[k].attributes && _ && o) {
            T = j[k];
            P = j.slice(0, k + 1).filter(function (t) {
              return deltaSetCore.getOpType(t) !== documentOperationConstants.operationTypes.INSERT;
            }).reduce(function (t, e) {
              return t + deltaSetCore.getOpLength(e);
            }, 0);
            if ((E = typescriptRuntimeHelpers_1.readIterable(g(o, P - 1, P), 1)[0]).attributes.lmkr) {
              y = w(E.attributes, y, r.attributes[y], _);
              _ = T.retain > 1 ? [{
                retain: T.retain - 1
              }, {
                retain: 1,
                attributes: y
              }] : [{
                retain: 1,
                attributes: y
              }];
              (y = t.ops).splice.apply(y, typescriptRuntimeHelpers_1.spread([k, 1], _));
            }
          }
        }
        return t.insert(r.insert, h);
      }, new contentStructureDelta.ContentDelta({
        zoneId: n.zoneId
      }));
      return r.concat(a);
    }, new deltaSetCore.DeltaSet());
  }
  function P(t) {
    return !t.some(function (t) {
      return t._getOps().map(function (t) {
        if (typeof t.insert == "string") {
          return t.insert;
        } else {
          return " ";
        }
      }).join("") !== t.getModelText();
    });
  }
  function E(t) {
    return t.reduce(function (t, e) {
      if (e instanceof contentStructureDelta.ContentDelta) {
        e = e.reduce(function (t, e) {
          if (deltaSetCore.getOpType(e) !== documentOperationConstants.operationTypes.INSERT || !e.insert) {
            return t.push(e);
          }
          var r = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n").replace(/\t/g, " ".repeat(8)).replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, "");
          if (r === e.insert) {
            return t.push(e);
          } else {
            return t.push(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e), {
              insert: r
            }));
          }
        }, new contentStructureDelta.ContentDelta({
          zoneId: e.zoneId
        }));
      }
      return t.concat(e);
    }, new deltaSetCore.DeltaSet());
  }
  require.d(exports, {
    validateDocOps: function () {
      return S;
    },
    normalizeContent: function () {
      return E;
    },
    findLineAttributes: function () {
      return x;
    },
    applyZoneDeltas: function () {
      return M;
    },
    validateDocText: function () {
      return P;
    },
    createOpArray: function () {
      return h;
    },
    generateRandomId: function () {
      return y;
    }
  });
}