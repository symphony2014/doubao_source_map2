// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'gv' to 'createPriority'
// - Renamed export 'iI' to 'sortByPriority'
// - Renamed export 'Q$' to 'PluginManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 903878
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var documentOperationConstants = require("document-operation-constants") /*id: 134823*/;
  var editorConstantsKeycodes = require("editor-constants-keycodes") /*id: 495515*/;
  var a = ["render", "renderLine", "renderWrapper", "renderInlineWrapper"];
  var s = "priority";
  function l(t) {
    return function (e, n, r) {
      e[n + "_" + s] = t;
      return r;
    };
  }
  function u(t, e) {
    return typescriptRuntimeHelpers_1.spread(t).sort(function (t, n) {
      return c(t, e) - c(n, e);
    });
  }
  function c(t, e) {
    if (typeof t[e + "_" + s] == "number") {
      return t[e + "_" + s];
    } else {
      return 1000;
    }
  }
  var f = function () {
    function t(t, e) {
      var n = this;
      if (e === undefined) {
        e = {};
      }
      this.s = t;
      this.Or = [];
      this.Ir = new Map();
      this.Ar = new Map();
      this.Yr = new Map();
      this.Nr = new Map();
      this.Tr = new Map();
      var r = e.registerPlugin;
      var e = e.plugins;
      if (r) {
        r(t).forEach(function (t) {
          return n.register(t);
        });
      } else {
        this._registerV2(e || []);
      }
    }
    var e = t.prototype;
    e.Zr = function (t, e) {
      var n = (n = this.Yr.get(e = e === undefined ? "all" : e)) !== null && n !== undefined ? n : new Set();
      n.add(t);
      this.Yr.set(e, n);
    };
    e.Kr = function (t, e) {
      var n = this.Yr.get(e = e === undefined ? "all" : e);
      if (n) {
        n.delete(t);
        this.Yr.set(e, n);
      }
    };
    e._resetPluginConstructorToZoneMap = function (t) {
      this.Yr.delete(t = t === undefined ? "all" : t);
    };
    e.isPluginInZone = function (t, e) {
      return ((e = this.Yr.get(e)) === null || e === undefined ? undefined : e.has(t.constructor)) || ((e = this.Yr.get("all")) === null || e === undefined ? undefined : e.has(t.constructor));
    };
    e.register = function (t, e) {
      if (Array.isArray(t)) {
        var n = typescriptRuntimeHelpers_1.readIterable(t, 2);
        var i = n[0];
        var n = n[1];
        this.Zr(i, e);
        if (this.Tr.has(i)) {
          return;
        }
        t = new i(n);
      } else {
        i = t.constructor;
        this.Zr(i, e);
        if (this.Tr.has(i)) {
          return;
        }
      }
      this.Br(t);
    };
    e._registerV2 = function (t, e) {
      var n;
      var s;
      var l;
      var u;
      var c = this;
      var f = this.Nr.get(e = e === undefined ? "all" : e) || [];
      if (f !== t) {
        this.Nr.set(e, t);
        var d;
        var h;
        d = f;
        var p = {
          added: (h = t).filter(function (t) {
            var e = typescriptRuntimeHelpers_1.readIterable(t, 1)[0];
            return !d.some(function (t) {
              return e === (t = typescriptRuntimeHelpers_1.readIterable(t, 1)[0]);
            });
          }),
          removed: d.filter(function (t) {
            var e = typescriptRuntimeHelpers_1.readIterable(t, 1)[0];
            return !h.some(function (t) {
              return e === (t = typescriptRuntimeHelpers_1.readIterable(t, 1)[0]);
            });
          })
        };
        var f = p.added;
        var t = p.removed;
        if (f.length !== 0 || t.length !== 0) {
          p = this.Wr(f, e);
          f = this.zr(t, e);
          this.Fr(f, e);
          this.Ar.clear();
          var v = new Set();
          if (e === "all") {
            v = new Set(t = typescriptRuntimeHelpers_1.spread(this.s.getContentState().getContent().values()).filter(function (t) {
              return t.getType() === documentOperationConstants.structureTypes.Content;
            }).filter(function (t) {
              return t.instance;
            }));
          } else {
            if (!(b = this.s.getContentState().getZoneState(e))) {
              this.s.error({
                message: "cannot find zoneState with zoneId: " + e,
                level: editorConstantsKeycodes.LogLevel.ERROR
              });
              return;
            }
            if (b.instance) {
              v.add(b);
            }
          }
          if (v.size !== 0) {
            var y = function (t, e) {
              var n;
              var i;
              var o;
              var s;
              var l = t.filter(function (t) {
                return a.some(function (e) {
                  return t[e];
                });
              });
              var u = e.filter(function (t) {
                return a.some(function (e) {
                  return t[e];
                });
              });
              var c = [];
              try {
                var f = typescriptRuntimeHelpers_1.values(l);
                var d = f.next();
                for (; !d.done && function (t) {
                  var e;
                  var n;
                  if (!t.match) {
                    return "break";
                  }
                  try {
                    e = undefined;
                    var i = typescriptRuntimeHelpers_1.values(a);
                    var o = i.next();
                    for (; !o.done && function (e) {
                      if (t[e] && !u.some(function (n) {
                        return n[e] === t[e];
                      })) {
                        c.push(t);
                        return "break";
                      }
                    }(o.value) !== "break"; o = i.next());
                  } catch (t) {
                    e = {
                      error: t
                    };
                  } finally {
                    try {
                      if (o && !o.done && (n = i.return)) {
                        n.call(i);
                      }
                    } finally {
                      if (e) {
                        throw e.error;
                      }
                    }
                  }
                }(d.value) !== "break"; d = f.next());
              } catch (t) {
                n = {
                  error: t
                };
              } finally {
                try {
                  if (d && !d.done && (i = f.return)) {
                    i.call(f);
                  }
                } finally {
                  if (n) {
                    throw n.error;
                  }
                }
              }
              try {
                var h = typescriptRuntimeHelpers_1.values(u);
                var p = h.next();
                for (; !p.done && function (t) {
                  var e;
                  var n;
                  if (!t.match) {
                    return "break";
                  }
                  try {
                    e = undefined;
                    var i = typescriptRuntimeHelpers_1.values(a);
                    var o = i.next();
                    for (; !o.done && function (e) {
                      if (t[e] && !l.some(function (n) {
                        return n[e] === t[e];
                      })) {
                        c.push(t);
                        return "break";
                      }
                    }(o.value) !== "break"; o = i.next());
                  } catch (t) {
                    e = {
                      error: t
                    };
                  } finally {
                    try {
                      if (o && !o.done && (n = i.return)) {
                        n.call(i);
                      }
                    } finally {
                      if (e) {
                        throw e.error;
                      }
                    }
                  }
                }(p.value) !== "break"; p = h.next());
              } catch (t) {
                o = {
                  error: t
                };
              } finally {
                try {
                  if (p && !p.done && (s = h.return)) {
                    s.call(h);
                  }
                } finally {
                  if (o) {
                    throw o.error;
                  }
                }
              }
              return c;
            }(p, f);
            if (y.length !== 0) {
              this.Ir.clear();
              var g = new Map();
              try {
                var m = typescriptRuntimeHelpers_1.values(v);
                var E = m.next();
                for (; !E.done; E = m.next()) {
                  var b = E.value;
                  this.Ur(b, v, y, g);
                }
              } catch (t) {
                n = {
                  error: t
                };
              } finally {
                try {
                  if (E && !E.done && (s = m.return)) {
                    s.call(m);
                  }
                } finally {
                  if (n) {
                    throw n.error;
                  }
                }
              }
              var x = [];
              try {
                var I = typescriptRuntimeHelpers_1.values(g);
                var T = I.next();
                for (; !T.done; T = I.next()) {
                  var _ = typescriptRuntimeHelpers_1.readIterable(T.value, 2);
                  var b = _[0];
                  var S = _[1];
                  if (S !== "all" && S.length !== 0) {
                    x.push({
                      zoneId: b.getZoneId(),
                      lineArr: S
                    });
                  }
                }
              } catch (t) {
                l = {
                  error: t
                };
              } finally {
                try {
                  if (T && !T.done && (u = I.return)) {
                    u.call(I);
                  }
                } finally {
                  if (l) {
                    throw l.error;
                  }
                }
              }
              Promise.resolve().then(function () {
                var t = c.s.getContentState();
                x.forEach(function (e) {
                  var n = e.zoneId;
                  var e = e.lineArr;
                  t._forceRefresh(n, e);
                });
              });
            }
          }
        }
      }
    };
    e.Fr = function (t, e) {
      if (e === "all") {
        t = u(t, "destroy");
        this.call("destroy", {}, {
          plugins: t
        });
      }
    };
    e.Ur = function (t, e, n, r, i = 0) {
      if (!r.has(t) && !(i > 100)) {
        var o = t.parent;
        var a = o == null ? undefined : o.parent;
        if (a && e.has(a) && (this.Ur(t, e, n, r, i + 1), (a = r.get(a)) === "all" || a != null && a.includes(o.index))) {
          r.set(t, "all");
          return;
        }
        n = this.Hr(t, n);
        r.set(t, n);
      }
    };
    e.Wr = function (t, e) {
      var n;
      var i;
      var o = [];
      try {
        var a = typescriptRuntimeHelpers_1.values(t);
        var s = a.next();
        for (; !s.done; s = a.next()) {
          var l;
          var u = typescriptRuntimeHelpers_1.readIterable(s.value, 2);
          var c = u[0];
          var f = u[1];
          this.Zr(c, e);
          if (this.Tr.has(c)) {
            o.push(this.Tr.get(c));
          } else {
            l = new c(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, f || {}), {
              editor: this.s
            }));
            o.push(l);
            this.Br(l);
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
      return o;
    };
    e.zr = function (t, e) {
      var n;
      var i;
      var a = [];
      try {
        var s = typescriptRuntimeHelpers_1.values(t);
        var l = s.next();
        for (; !l.done; l = s.next()) {
          var u = typescriptRuntimeHelpers_1.readIterable(l.value, 1)[0];
          this.Kr(u, e);
          var c = this.Tr.get(u);
          if (c) {
            a.push(c);
          } else {
            this.s.error({
              message: "cannot find plugin instance corresponding to the constructor",
              level: editorConstantsKeycodes.LogLevel.ERROR
            });
          }
        }
      } catch (t) {
        n = {
          error: t
        };
      } finally {
        try {
          if (l && !l.done && (i = s.return)) {
            i.call(s);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      return a;
    };
    e.Gr = function (t) {
      t = {
        lineState: t,
        index: t.index
      };
      this.s.callAll("_editorLineStateWillRender", t);
      return t.lineState;
    };
    e.Hr = function (t, e) {
      var n;
      var i;
      var o;
      var a;
      var s = this;
      var t = t.lines.map(function (t) {
        return s.Gr(t);
      });
      var l = [];
      try {
        var u = typescriptRuntimeHelpers_1.values(t);
        var c = u.next();
        for (; !c.done; c = u.next()) {
          var f = c.value;
          try {
            o = undefined;
            var d = typescriptRuntimeHelpers_1.values(e);
            var h = d.next();
            for (; !h.done; h = d.next()) {
              var p = h.value;
              if (function (t, e) {
                var n;
                var i;
                var o;
                var a;
                try {
                  var s = typescriptRuntimeHelpers_1.values(e);
                  var l = s.next();
                  for (; !l.done; l = s.next()) {
                    var u = l.value;
                    if (u.insert && typeof u.insert != "object") {
                      var c = u.attributes || {};
                      try {
                        o = undefined;
                        var f = typescriptRuntimeHelpers_1.values(Object.entries(c));
                        var d = f.next();
                        for (; !d.done; d = f.next()) {
                          var h = typescriptRuntimeHelpers_1.readIterable(d.value, 2);
                          var p = h[0];
                          var v = h[1];
                          if (t.match(p, v, c)) {
                            return true;
                          }
                        }
                      } catch (t) {
                        o = {
                          error: t
                        };
                      } finally {
                        try {
                          if (d && !d.done && (a = f.return)) {
                            a.call(f);
                          }
                        } finally {
                          if (o) {
                            throw o.error;
                          }
                        }
                      }
                    }
                  }
                } catch (t) {
                  n = {
                    error: t
                  };
                } finally {
                  try {
                    if (l && !l.done && (i = s.return)) {
                      i.call(s);
                    }
                  } finally {
                    if (n) {
                      throw n.error;
                    }
                  }
                }
                return false;
              }(p, f)) {
                l.push(f.index);
                break;
              }
            }
          } catch (t) {
            o = {
              error: t
            };
          } finally {
            try {
              if (h && !h.done && (a = d.return)) {
                a.call(d);
              }
            } finally {
              if (o) {
                throw o.error;
              }
            }
          }
        }
      } catch (t) {
        n = {
          error: t
        };
      } finally {
        try {
          if (c && !c.done && (i = u.return)) {
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
    e.Br = function (t) {
      this.Ar.clear();
      this.Or.push(t);
      this.Tr.set(t.constructor, t);
    };
    e.call = function (t, e, n) {
      var r = this;
      var i = (n = n === undefined ? {} : n).cb;
      var a = i === undefined ? function (t, e) {
        return t;
      } : i;
      var i = n.zoneId;
      return ((n = n.plugins) !== null && n !== undefined ? n : this.Jr(t, i)).reduce(function (e, n) {
        var u = n[t];
        if (u && typeof u == "function") {
          try {
            var c = (e.lineState ?? {}).leaves;
            var f = a(e, u.call(n, e));
            var d = (f.lineState ?? {}).leaves;
            if (c && (c !== d || c.length !== d.length)) {
              r.s.trace.add({
                extra: {
                  pluginHookName: t,
                  pluginNam: n.name ?? null,
                  leavesMatch: false
                }
              });
            }
            return f;
          } catch (e) {
            n = "Warning: call hook failed. hook: " + t + ". plugin: " + n.name;
            r.s.error({
              e: e,
              level: editorConstantsKeycodes.LogLevel.ERROR,
              message: n
            });
          }
        }
        return e;
      }, e);
    };
    e.Jr = function (t, e) {
      var n = this;
      var r = [];
      if (this.Ar.has(t)) {
        r = this.Ar.get(t);
      } else {
        r = u(this.Or, t);
        this.Ar.set(t, r);
      }
      if (e) {
        return r.filter(function (t) {
          return n.isPluginInZone(t, e);
        });
      } else {
        return r;
      }
    };
    e.getPlugins = function (t) {
      var e = this;
      if (t === undefined) {
        t = "all";
      }
      return this.Or.filter(function (n) {
        return e.isPluginInZone(n, t);
      });
    };
    e._matchPlugin = function (t) {
      var e;
      var n;
      var i;
      var a;
      var s;
      var l = t.attributeKey;
      var u = t.value;
      var c = t.zoneId;
      var f = c === undefined ? "all" : c;
      var d = t.attributes;
      var c = l + u;
      var t = this.Ir.get(c);
      if (!t) {
        var h = [];
        try {
          var p = typescriptRuntimeHelpers_1.values(this.Or);
          var v = p.next();
          for (; !v.done; v = p.next()) {
            var y = v.value;
            try {
              if ((s = y.match) !== null && s !== undefined && s.call(y, l, u, d)) {
                h.push(y);
              }
            } catch (t) {
              var g = "Warning: call hook failed. hook: match. plugin: " + y.name;
              this.s.error({
                e: t,
                level: editorConstantsKeycodes.LogLevel.ERROR,
                message: g
              });
            }
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (v && !v.done && (n = p.return)) {
              n.call(p);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
        if (h.length > 0) {
          this.Ir.set(c, h);
          t = h;
        }
      }
      if (!t) {
        return null;
      }
      try {
        var m = typescriptRuntimeHelpers_1.values(t);
        var E = m.next();
        for (; !E.done; E = m.next()) {
          y = E.value;
          if (this.isPluginInZone(y, f)) {
            return y;
          }
        }
      } catch (t) {
        i = {
          error: t
        };
      } finally {
        try {
          if (E && !E.done && (a = m.return)) {
            a.call(m);
          }
        } finally {
          if (i) {
            throw i.error;
          }
        }
      }
      return null;
    };
    e.getPlugin = function (t, e) {
      var n;
      var i;
      try {
        var o = typescriptRuntimeHelpers_1.values(this.Or);
        var a = o.next();
        for (; !a.done; a = o.next()) {
          var s = a.value;
          if (s.name === t) {
            if (!e || this.isPluginInZone(s, e)) {
              return s;
            } else {
              return null;
            }
          }
        }
      } catch (t) {
        n = {
          error: t
        };
      } finally {
        try {
          if (a && !a.done && (i = o.return)) {
            i.call(o);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      return null;
    };
    e.getLineWrapperInfo = function (t) {
      var e;
      var n;
      var i = t.getLineAttributes();
      var o = [];
      var a = [];
      try {
        var s = typescriptRuntimeHelpers_1.values(i);
        var l = s.next();
        for (; !l.done; l = s.next()) {
          var u = typescriptRuntimeHelpers_1.readIterable(l.value, 2);
          var c = u[0];
          var f = u[1];
          var d = this._matchPlugin({
            attributeKey: c,
            value: f,
            attributes: i.toMap()
          });
          if (d != null && d.renderWrapper) {
            o.push(c);
            a.push(d.renderWrapper({
              lineState: t
            }));
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (l && !l.done && (n = s.return)) {
            n.call(s);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
      return {
        hasWrapper: !!o.length,
        key: o.join("-"),
        elements: a
      };
    };
    e.destroy = function () {
      this.call("destroy", {});
      this.Or = [];
      this.Ir.clear();
      this.Ar.clear();
      this.Yr.clear();
      this.Nr.clear();
      this.Tr.clear();
    };
    return t;
  }();
  require.d(exports, {
    createPriority: function () {
      return l;
    },
    sortByPriority: function () {
      return u;
    },
    PluginManager: function () {
      return f;
    }
  });
}