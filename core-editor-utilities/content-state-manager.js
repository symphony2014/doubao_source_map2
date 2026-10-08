// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'ContentStateManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 519638
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var errorHandlerUtil = require("error-handler-util") /*id: 161088*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var documentOperationConstants = require("document-operation-constants") /*id: 134823*/;
  var editorConstantsKeycodes = require("editor-constants-keycodes") /*id: 495515*/;
  function u(e, t, r = {}) {
    if (!e) {
      if (typeof r == "object" && Object.keys(r).length) {
        r = Object.entries(r).map(function (e) {
          return (e = typescriptRuntimeHelpers_1.readIterable(e, 2))[0] + ": " + e[1];
        }).join(", ");
      }
      throw Error("Failed assertion: " + t);
    }
  }
  var objectEntriesIteratorUtil = require("object-entries-iterator-util") /*id: 155854*/;
  var autoBindMethodDescriptor = require("auto-bind-method-descriptor") /*id: 969612*/;
  function g(e) {
    throw e.e ?? Error(e.message);
  }
  var b = function () {
    function e() {
      this.t = g;
      this.numToAttrib = {};
      this.attribToNum = {};
      this.nextNum = 0;
      this.dirty = false;
    }
    var t = e.prototype;
    t.putAttrib = function (e, t) {
      var r = [String(e[0] || ""), String(e[1] || "")];
      var e = String(r);
      if (e in this.attribToNum) {
        return this.attribToNum[e];
      } else if (t) {
        return -1;
      } else {
        t = this.nextNum++;
        this.attribToNum[e] = t;
        this.numToAttrib[t] = r;
        this.dirty = true;
        return t;
      }
    };
    t.getAttrib = function (e) {
      return (e = this.numToAttrib[e]) && [e[0], e[1]];
    };
    t.updateAttrib = function (e, t) {
      var r;
      var n = this.getAttrib(e);
      if (n) {
        r = String(n);
        n = String(t);
        if (this.attribToNum[r] != null) {
          delete this.attribToNum[r];
        }
        this.attribToNum[n] = e;
        this.numToAttrib[e] = t;
      }
    };
    t.getAttribKey = function (e) {
      if (e = this.numToAttrib[e]) {
        return e[0];
      } else {
        return "";
      }
    };
    t.getAttribValue = function (e) {
      if (e = this.numToAttrib[e]) {
        return e[1];
      } else {
        return "";
      }
    };
    t.getAttribNum = function (e) {
      if (typeof e != "string") {
        e = String(e);
      }
      return this.attribToNum[e];
    };
    t.eachAttrib = function (e) {
      for (var t in this.numToAttrib) {
        if (this.numToAttrib.hasOwnProperty(t)) {
          e((t = this.numToAttrib[t])[0], t[1]);
        }
      }
    };
    t.toJsonable = function () {
      var e;
      var t;
      var r = {};
      for (e in this.numToAttrib) {
        if (this.numToAttrib.hasOwnProperty(e)) {
          t = this.numToAttrib[e];
          r[e] = [t[0], t[1]];
        }
      }
      return {
        numToAttrib: r,
        nextNum: this.nextNum
      };
    };
    t.fromJsonable = function (e) {
      this.numToAttrib = {};
      this.nextNum = e.nextNum;
      this.attribToNum = {};
      for (var t in e.numToAttrib) {
        var r;
        if (e.numToAttrib.hasOwnProperty(t)) {
          r = e.numToAttrib[t];
          this.attribToNum[String(r)] = Number(t);
          this.numToAttrib[t] = [r[0], r[1]];
        }
      }
      try {
        this.checkConsistent();
      } catch (e) {
        this.t({
          e: e,
          message: "[attribute-pool][fromJsonable] check consistent fail",
          level: editorConstantsKeycodes.LogLevel.FATAL
        });
      }
      this.dirty = true;
      return this;
    };
    t.toJsonableNoCloning = function () {
      return {
        numToAttrib: this.numToAttrib,
        nextNum: this.nextNum
      };
    };
    t.fromJsonableNoCloning = function (e) {
      this.numToAttrib = e.numToAttrib;
      this.nextNum = e.nextNum;
      this.attribToNum = {};
      for (var t in this.numToAttrib) {
        if (this.numToAttrib.hasOwnProperty(t)) {
          this.attribToNum[String(this.numToAttrib[t])] = Number(t);
        }
      }
      try {
        this.checkConsistent();
      } catch (e) {
        this.t({
          e: e,
          message: "[attribute-pool][fromJsonableNoCloning] check consistent fail",
          level: editorConstantsKeycodes.LogLevel.FATAL
        });
      }
      return this;
    };
    t.copy = function () {
      var t;
      var r;
      var n;
      var o = new e();
      for (t in this.numToAttrib) {
        if (this.numToAttrib.hasOwnProperty(t)) {
          r = this.numToAttrib[t];
          o.numToAttrib[t] = [r[0], r[1]];
        }
      }
      for (n in this.attribToNum) {
        if (this.attribToNum.hasOwnProperty(n)) {
          o.attribToNum[n] = this.attribToNum[n];
        }
      }
      o.nextNum = this.nextNum;
      return o;
    };
    t.checkConsistent = function () {
      for (var e = 0; e < this.nextNum; e++) {
        u(e in this.numToAttrib, "AttribPool: " + e + " is not in this.numToAttrib");
      }
      var t;
      var r;
      var n;
      var o = {};
      for (t in this.numToAttrib) {
        if (this.numToAttrib.hasOwnProperty(t)) {
          u(Number(t) >= 0 && Number(t) < this.nextNum, "AttribPool: " + t + " is not in range [0," + this.nextNum + "]");
          r = this.numToAttrib[t];
          u(Object.prototype.toString.call(r) === "[object Array]", "AttribPool: attrib should be an array");
          u(r.length === 2, "AttribPool: attrib length should be 2");
          u(typeof r[0] == "string", "AttribPool: key should be string");
          u(typeof r[1] == "string", "AttribPool: value should be string");
          u(!(String(r) in o), "AttribPool: attrib was already seen");
          o[String(r)] = true;
          u(this.attribToNum[String(r)] === Number(t), "AttribPool: attribToNum does not match");
        }
      }
      for (n in this.attribToNum) {
        if (this.attribToNum.hasOwnProperty(n)) {
          u(n in o, "AttribPool: attr was not seen");
        }
      }
    };
    t.setAttributes = function (e) {
      var t = this;
      var r = [];
      if (e instanceof deltaSetCore.DeltaSet) {
        e.forEach(function (e) {
          e.forEach(function (e) {
            if (e.attributes) {
              t.setAttributes(e.attributes);
            }
          });
        });
      } else if (!(e instanceof Array)) {
        r = objectEntriesIteratorUtil.getObjectEntries(e);
      }
      r.forEach(function (e) {
        return t.putAttrib(e);
      });
    };
    t.setOnErrorCb = function (e) {
      this.t = e;
    };
    t.resetOnErrorCb = function () {
      this.t = g;
    };
    t.clear = function () {
      this.numToAttrib = {};
      this.attribToNum = {};
      this.nextNum = 0;
      this.dirty = false;
    };
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "toJsonable", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "fromJsonable", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], e.prototype, "checkConsistent", null);
    return e;
  }();
  var contentDeltaOpsUtil = require("content-delta-ops-util") /*id: 444706*/;
  var editorModuleConstants = require("editor-module-constants") /*id: 21060*/;
  var schemaResolver = require("schema-resolver") /*id: 289076*/;
  var diffChangeConstants = require("diff-change-constants") /*id: 699476*/;
  var E = function () {
    function e() {
      this.runtimeStack = [];
    }
    var t = e.prototype;
    Object.defineProperty(t, "atRuntime", {
      get: function () {
        return !!this.runtimeStack.length;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t, "atDeepRuntime", {
      get: function () {
        return this.runtimeStack.length > 1;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t, "currentRuntime", {
      get: function () {
        return this.runtimeStack[this.runtimeStack.length - 1];
      },
      enumerable: false,
      configurable: true
    });
    t.start = function (e, t) {
      var r = contentDeltaOpsUtil.generateRandomId(6);
      this.runtimeStack.push({
        id: r,
        type: e,
        options: t
      });
    };
    t.stop = function () {
      return this.runtimeStack.pop();
    };
    return e;
  }();
  var k = function () {
    function e(e) {
      var t = this;
      var r = e.deltaSet;
      var n = e.schema;
      var a = e.modulesContainer;
      var i = e.rendererMode;
      var e = e.contentStateFgMap;
      this.content = new Map();
      this.zt = function () {};
      this.Rt = zeroConstantModule_1.versionValue;
      this.Nt = {};
      this._applyStackLog = [];
      this.rendererMode = "DOM";
      this._getInternalZoneEntities = function (e, t, r) {
        return [];
      };
      this.contentApplyRuntime = new E();
      this.schema = n ?? new schemaResolver.SchemaResolver({});
      this._attributes = new b();
      this.modulesContainer = a;
      this.rendererMode = i || "DOM";
      this.Xt = e;
      if (r != null) {
        r.forEach(function (e) {
          var r = t.modulesContainer.get(editorModuleConstants.editorModuleConsts.ZoneState);
          t.content.set(e.zoneId, new r(e.zoneId, e, t.schema));
          e.forEach(function (e) {
            if (e.attributes) {
              t._attributes.setAttributes(e.attributes);
            }
          });
        });
      }
    }
    var t = e.prototype;
    t.create = function (t) {
      return new e(t);
    };
    t.getContent = function () {
      return this.content;
    };
    t.setActiveZone = function (e) {
      if (this.getZoneState(e)) {
        this.Rt = e;
      }
    };
    t.getActiveZone = function () {
      return this.getZoneState(this.Rt);
    };
    t[Symbol.iterator] = function () {
      return this.content.values();
    };
    t.getEntities = function (e, t) {
      var r = [];
      if (e instanceof Array) {
        var a = this.getZoneState(zeroConstantModule_1.versionValue);
        r.push.apply(r, typescriptRuntimeHelpers_1.spread(a.getEntities(e, t, this._getInternalZoneEntities)));
      } else {
        if (e instanceof Function) {
          t = e;
          e = {
            start: {
              line: 0,
              offset: 0,
              zoneId: "0"
            },
            end: {
              line: i = (a = this.getZoneState(zeroConstantModule_1.versionValue)).length() - 1,
              offset: a.getLine(i).length(),
              zoneId: "0"
            }
          };
        }
        var i = e.start.zoneId;
        var i = this.getZoneState(i);
        if (!i) {
          return [];
        }
        r.push.apply(r, typescriptRuntimeHelpers_1.spread(i.getEntities(e, t, this._getInternalZoneEntities)));
      }
      return r;
    };
    t.getContentStateFg = function (e) {
      return (e = this.Xt?.[e]) !== null && e !== undefined && e;
    };
    t.Gt = function (e) {
      try {
        throw Error("invalid delta");
      } catch (e) {}
    };
    t.apply = function (e, t) {
      var r;
      if (t === undefined) {
        t = {};
      }
      if (!(this._applyStackLog.length < 50)) {
        throw Error("Maximum call stack size exceeded");
      }
      this._applyStackLog.push(Error().stack);
      try {
        var o = this.applyToContentState(e, t);
        return this.triggerChangeCbk(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, o), {
          options: t
        }));
      } catch (e) {
        if ((r = this._errorCbk) !== null && r !== undefined) {
          r.call(this, {
            message: "[contentState][apply] call applyToContentState error: " + e.message,
            level: errorHandlerUtil.ErrorLevel.ERROR
          });
        }
        return this.contentApplyRuntime.stop();
      } finally {
        if (this._applyStackLog.length) {
          this._applyStackLog = [];
        }
      }
    };
    t.applyToContentState = function (e, t) {
      var r;
      var n;
      var o = this;
      if (t === undefined) {
        t = {};
      }
      try {
        if (this.Jt) {
          this.Jt({
            data: e,
            options: t
          });
        }
      } catch (e) {
        if ((s = this._errorCbk) !== null && s !== undefined) {
          s.call(this, {
            message: "[contentState][apply] call willApplyCbk error: " + e.message,
            level: errorHandlerUtil.ErrorLevel.ERROR
          });
        }
      }
      this.contentApplyRuntime.start(t.type || "editEvent", t);
      var s = deltaSetCore.isDeltaSet(e) ? e : new deltaSetCore.DeltaSet(((r = {})[e.zoneId] = e, r));
      var e = this._clone(false, s);
      s.forEach(function (e) {
        e.forEach(function (e) {
          if (typeof e.insert == "string" && e.insert.includes(editorConstantsKeycodes.zeroWidthChar)) {
            o.Gt("invalid delta: insert a zero space");
          }
        });
      });
      if (!t.isRemote) {
        s = contentDeltaOpsUtil.normalizeContent(s);
      }
      if (!t.isRemote && t.normalize !== false) {
        try {
          s = contentDeltaOpsUtil.applyZoneDeltas(this, this.schema, s);
        } catch (e) {
          if ((r = this._errorCbk) !== null && r !== undefined) {
            r.call(this, {
              message: "[contentState][apply] call normalizeDeltaSet error: " + e.message,
              level: errorHandlerUtil.ErrorLevel.ERROR
            });
          }
          throw e;
        }
      }
      if (this.Qt) {
        try {
          s = this.Qt({
            current: this,
            next: this,
            deltaSet: s,
            options: t
          });
        } catch (e) {
          if ((n = this._errorCbk) !== null && n !== undefined) {
            n.call(this, {
              message: "[contentState][apply] call _willChangeCbk error: " + e.message,
              level: errorHandlerUtil.ErrorLevel.ERROR
            });
          }
        }
      }
      var u = {};
      var d = {};
      try {
        s.forEach(function (e) {
          var t = e.zoneId;
          var r = o.getZoneState(t);
          if (r) {
            var n = r.apply(e, function (e, r, n) {
              var i = {
                start: e,
                deletes: r,
                inserts: n
              };
              if (u[t]) {
                u[t].push(i);
              } else {
                u[t] = [i];
              }
              if (contentDeltaOpsUtil.validateDocText(n)) {
                o.Vt(t, e, r, n);
              } else if ((r = o._errorCbk) !== null && r !== undefined) {
                r.call(o, {
                  message: "[contentState][apply] 数据异常: " + n,
                  level: errorHandlerUtil.ErrorLevel.FATAL
                });
              }
            });
            o.content.set(t, n);
            if (o.rendererMode === "DOM" && u[t]) {
              try {
                d[t] = o.Yt(u[t], n, r);
              } catch (e) {
                d[t] = {
                  state: n,
                  changes: null
                };
                if ((n = o._errorCbk) !== null && n !== undefined) {
                  n.call(o, {
                    message: "[contentState][apply] model diff error " + ((e == null ? undefined : e.message) || ""),
                    level: errorHandlerUtil.ErrorLevel.ERROR,
                    e: e
                  });
                }
              }
            }
            if (e instanceof contentStructureDelta.ContentDelta) {
              o.ie(e);
            }
          } else {
            r = o.addZone(t, e);
            u[t] = [{
              start: 0,
              deletes: [],
              inserts: r.lines
            }];
          }
        });
      } catch (e) {
        if ((n = this._errorCbk) !== null && n !== undefined) {
          n.call(this, {
            message: "[contentState][apply] error " + ((e == null ? undefined : e.message) || ""),
            level: errorHandlerUtil.ErrorLevel.FATAL,
            e: e
          });
        }
      }
      return {
        changes: this.re(u),
        previous: e,
        deltaSet: s,
        diffResult: d
      };
    };
    t.triggerChangeCbk = function (e) {
      var t = e.changes;
      var r = e.previous;
      var n = e.deltaSet;
      var o = e.options;
      var e = e.diffResult;
      try {
        if (this.zt) {
          this.zt({
            previous: r,
            current: this,
            deltaSet: n,
            changes: t,
            options: o,
            diffResult: e
          });
        }
      } catch (t) {
        if ((e = this._errorCbk) !== null && e !== undefined) {
          e.call(this, {
            e: t,
            message: "[contentState][apply] call _changeCbk error: " + ((t == null ? undefined : t.message) || ""),
            level: errorHandlerUtil.ErrorLevel.ERROR
          });
        }
      }
      return this.contentApplyRuntime.stop();
    };
    t.Yt = function (e, t, r) {
      var o;
      var a;
      var i = [];
      var c = [];
      var s = 0;
      var l = this;
      try {
        var u = typescriptRuntimeHelpers_1.values(e.entries());
        var d = u.next();
        for (; !d.done; d = u.next()) {
          var f = typescriptRuntimeHelpers_1.readIterable(d.value, 2);
          (function (o, a) {
            var u;
            var d;
            var f = a.deletes;
            var g = a.inserts;
            var b = a.start;
            var p = f.reduce(function (e, t, r) {
              r = b - s + r;
              e.set(t.getKey(), [r, t]);
              return e;
            }, new Map());
            var h = b;
            try {
              S = undefined;
              var m = typescriptRuntimeHelpers_1.values(g);
              var E = m.next();
              for (; !E.done; E = m.next()) {
                var k = E.value;
                var v = k.getKey();
                var x = i.length ? i[i.length - 1] : null;
                if (p.has(v)) {
                  var y = p.get(v);
                  if (!y) {
                    throw Error("The prevInsertedLine should not be empty.");
                  }
                  var _ = typescriptRuntimeHelpers_1.readIterable(y, 2);
                  var T = _[0];
                  var A = _[1];
                  var O = l.se(k, A);
                  var h = A.index;
                  p.delete(v);
                  if ((x == null ? undefined : x.type) === diffChangeConstants.ChangeType.LINE_UPDATE) {
                    var B = x.retain;
                    var N = x.inserts;
                    var R = x.deletes;
                    if (h === B + N.length) {
                      R.push(A);
                      N.push({
                        state: k,
                        changes: O
                      });
                      h++;
                      continue;
                    }
                  }
                  i.push({
                    originalStart: T,
                    retain: h,
                    deletes: [A],
                    inserts: [{
                      state: k,
                      changes: O
                    }],
                    type: diffChangeConstants.ChangeType.LINE_UPDATE
                  });
                  h++;
                } else {
                  if ((x == null ? undefined : x.type) === diffChangeConstants.ChangeType.LINE_INSERT && h === (B = x.retain) + (N = x.inserts).length) {
                    N.push({
                      state: k,
                      changes: null
                    });
                    h++;
                    continue;
                  }
                  i.push({
                    retain: h,
                    inserts: [{
                      state: k,
                      changes: null
                    }],
                    type: diffChangeConstants.ChangeType.LINE_INSERT
                  });
                  h++;
                }
              }
            } catch (e) {
              S = {
                error: e
              };
            } finally {
              try {
                if (E && !E.done && (C = m.return)) {
                  C.call(m);
                }
              } finally {
                if (S) {
                  throw S.error;
                }
              }
            }
            var a = e[o + 1];
            var C = b + f.length - s;
            var S = r.getLine(C);
            var o = t.getLine(b + g.length);
            if (a) {
              if (a.start - b - f.length >= 1) {
                if (!S) {
                  throw Error("The oldConstantLine should not be empty.");
                }
                i.push({
                  originalStart: C,
                  retain: C,
                  deletes: [S],
                  inserts: [{
                    state: o,
                    changes: null
                  }],
                  type: diffChangeConstants.ChangeType.LINE_CONSTANT
                });
              }
            } else if (S) {
              i.push({
                originalStart: C,
                retain: C,
                deletes: [S],
                inserts: [{
                  state: o,
                  changes: null
                }],
                type: diffChangeConstants.ChangeType.LINE_CONSTANT
              });
            }
            try {
              u = undefined;
              var G = typescriptRuntimeHelpers_1.values(p.entries());
              var I = G.next();
              for (; !I.done; I = G.next()) {
                var F = typescriptRuntimeHelpers_1.readIterable(I.value, 2);
                var D = typescriptRuntimeHelpers_1.readIterable(F[1], 2)[1];
                var L = D.index;
                var x = c.length ? c[c.length - 1] : null;
                if ((x == null ? undefined : x.type) === diffChangeConstants.ChangeType.LINE_DELETE && L === (B = x.retain) + (R = x.deletes).length) {
                  R.push(D);
                  continue;
                }
                c.push({
                  originalStart: L,
                  retain: L,
                  deletes: [D],
                  type: diffChangeConstants.ChangeType.LINE_DELETE
                });
              }
            } catch (e) {
              u = {
                error: e
              };
            } finally {
              try {
                if (I && !I.done && (d = G.return)) {
                  d.call(G);
                }
              } finally {
                if (u) {
                  throw u.error;
                }
              }
            }
            s += g.length - f.length;
          })(f[0], f[1]);
        }
      } catch (e) {
        o = {
          error: e
        };
      } finally {
        try {
          if (d && !d.done && (a = u.return)) {
            a.call(u);
          }
        } finally {
          if (o) {
            throw o.error;
          }
        }
      }
      return {
        state: t,
        changes: i = i.concat.apply(i, typescriptRuntimeHelpers_1.spread(c))
      };
    };
    t.se = function (e, t) {
      var r;
      var o;
      var a;
      var i;
      var e = e.leaves;
      var c = t.leaves.reduce(function (e, t) {
        e.set(t.getKey(), t);
        return e;
      }, new Map());
      var s = 0;
      var l = 0;
      var u = [];
      try {
        var d = typescriptRuntimeHelpers_1.values(e);
        var f = d.next();
        for (; !f.done; f = d.next()) {
          var g = f.value;
          var b = g.getKey();
          var p = u.length ? u[u.length - 1] : null;
          var h = {
            state: g,
            changes: null
          };
          if (c.has(b)) {
            var m = c.get(b);
            if (!m) {
              throw Error("The reusedOldLeaf should not be empty.");
            }
            var E = m.index < s;
            var s = E ? s : m.index;
            var l = m.index;
            c.delete(b);
            if (m.op.insert !== g.op.insert) {
              if ((p == null ? undefined : p.type) === diffChangeConstants.ChangeType.LEAF_UPDATE && (k = p.retain, v = p.inserts, x = p.deletes, l === k + v.length)) {
                x.push(m);
                v.push(h);
                l++;
                continue;
              }
              u.push({
                retain: l,
                deletes: [m],
                inserts: [h],
                type: diffChangeConstants.ChangeType.LEAF_UPDATE,
                shouldMove: E
              });
              l++;
            } else {
              if ((p == null ? undefined : p.type) === diffChangeConstants.ChangeType.LEAF_CONSTANT) {
                var k = p.retain;
                var v = p.inserts;
                var x = p.deletes;
                if (l === k + v.length) {
                  x.push(m);
                  v.push(h);
                  l++;
                  continue;
                }
              }
              u.push({
                retain: l,
                deletes: [m],
                inserts: [h],
                type: diffChangeConstants.ChangeType.LEAF_CONSTANT,
                shouldMove: E
              });
              l++;
            }
          } else {
            var y = {
              state: g,
              changes: null
            };
            if ((p == null ? undefined : p.type) !== diffChangeConstants.ChangeType.LEAF_INSERT) {
              u.push({
                retain: l,
                inserts: [y],
                type: diffChangeConstants.ChangeType.LEAF_INSERT
              });
              l++;
            } else {
              p.inserts.push(y);
            }
          }
        }
      } catch (e) {
        r = {
          error: e
        };
      } finally {
        try {
          if (f && !f.done && (o = d.return)) {
            o.call(d);
          }
        } finally {
          if (r) {
            throw r.error;
          }
        }
      }
      try {
        var _ = typescriptRuntimeHelpers_1.values(c.entries());
        var T = _.next();
        for (; !T.done; T = _.next()) {
          var A = typescriptRuntimeHelpers_1.readIterable(T.value, 2)[1];
          var O = A.index;
          if (((p = u.length ? u[u.length - 1] : null) == null ? undefined : p.type) !== diffChangeConstants.ChangeType.LEAF_DELETE || O !== p.retain + p.deletes.length) {
            u.push({
              retain: O,
              deletes: [A],
              type: diffChangeConstants.ChangeType.LEAF_DELETE
            });
          } else {
            p.deletes.push(A);
          }
        }
      } catch (e) {
        a = {
          error: e
        };
      } finally {
        try {
          if (T && !T.done && (i = _.return)) {
            i.call(_);
          }
        } finally {
          if (a) {
            throw a.error;
          }
        }
      }
      return u;
    };
    t.re = function (e) {
      var t;
      var r;
      var o = {};
      try {
        var a = typescriptRuntimeHelpers_1.values(Object.keys(e));
        var i = a.next();
        for (; !i.done; i = a.next()) {
          (function (t) {
            var r = e[t];
            var n = 0;
            o[t] = r.map(function (e) {
              var t = e.start;
              var r = e.deletes;
              var e = e.inserts;
              var t = {
                start: t + n,
                deletes: r,
                inserts: e
              };
              n += r.length - e.length;
              return t;
            });
          })(i.value);
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          if (i && !i.done && (r = a.return)) {
            r.call(a);
          }
        } finally {
          if (t) {
            throw t.error;
          }
        }
      }
      return o;
    };
    t.Vt = function (e, t, r, n) {
      if (this.le) {
        this.le(e, t, r, n);
      }
    };
    t._clone = function (e, t) {
      var r;
      var o;
      var a = this;
      var i = new Map();
      if (e || !t) {
        try {
          var c = typescriptRuntimeHelpers_1.values(this.content);
          var s = c.next();
          for (; !s.done; s = c.next()) {
            var l = typescriptRuntimeHelpers_1.readIterable(s.value, 2);
            var u = l[0];
            var d = l[1];
            i.set(u, d.clone());
          }
        } catch (e) {
          r = {
            error: e
          };
        } finally {
          try {
            if (s && !s.done && (o = c.return)) {
              o.call(c);
            }
          } finally {
            if (r) {
              throw r.error;
            }
          }
        }
      } else {
        i = new Map(this.content);
        t.forEach(function (e, t) {
          var r = a.content.get(t);
          if (r) {
            i.set(t, r.clone());
          }
        });
      }
      e = e ? this._attributes.toJsonable() : this._attributes;
      (e = this.create({
        apool: e,
        schema: this.schema,
        modulesContainer: this.modulesContainer
      })).content = i;
      e.zt = this.zt;
      e.Qt = this.Qt;
      return e;
    };
    t.onChange = function (e) {
      this.zt = e;
    };
    t.onWillChange = function (e) {
      this.Qt = e;
    };
    t._onMutate = function (e) {
      this.le = e;
    };
    t._onRefresh = function (e) {
      this.oe = e;
    };
    t._onError = function (e) {
      this._errorCbk = e;
      this._attributes.setOnErrorCb(e);
    };
    t._onWillApply = function (e) {
      this.Jt = e;
    };
    t.getAttributes = function (e, t) {
      var r = e.zoneId;
      var r = this.getZoneState(r);
      if (r) {
        return r.getAttributes(e, t);
      } else {
        return contentDeltaOpsUtil.createOpArray();
      }
    };
    t.getLineAttributes = function (e, t) {
      if (t = (e = this.getZoneState(e)) === null || e === undefined ? undefined : e.getLine(t)) {
        return t.getLineAttributes();
      } else {
        return contentDeltaOpsUtil.createOpArray();
      }
    };
    t.getZoneState = function (e) {
      return this.content.get(e);
    };
    t._dangerouslyReplaceAttribute = function (e, t, r, o) {
      var a;
      var i;
      var c;
      var s;
      try {
        var l = typescriptRuntimeHelpers_1.values(this);
        var u = l.next();
        for (; !u.done; u = l.next()) {
          var d = u.value;
          try {
            c = undefined;
            var f = typescriptRuntimeHelpers_1.values(d);
            var g = f.next();
            for (; !g.done; g = f.next()) {
              g.value._getDelta().forEach(function (n) {
                if (n.attributes?.[e] === t) {
                  delete n.attributes[e];
                  n.attributes[r] = o;
                }
              });
            }
          } catch (e) {
            c = {
              error: e
            };
          } finally {
            try {
              if (g && !g.done && (s = f.return)) {
                s.call(f);
              }
            } finally {
              if (c) {
                throw c.error;
              }
            }
          }
        }
      } catch (e) {
        a = {
          error: e
        };
      } finally {
        try {
          if (u && !u.done && (i = l.return)) {
            i.call(l);
          }
        } finally {
          if (a) {
            throw a.error;
          }
        }
      }
    };
    t.setAttributes = function (e, t, r = {
      internalZonesIncluded: true
    }) {
      var o = e.start;
      var s = o.zoneId;
      var l = o.offset;
      var u = o.line;
      var d = e.end;
      var o = d.zoneId;
      var f = d.offset;
      var d = d.line;
      if (s === o) {
        var g = this.rangeToPosition(e);
        if (g !== null) {
          if (l !== f || u !== d) {
            if (g.len !== 0) {
              var b;
              var p;
              var h;
              var m;
              var w;
              var E;
              var k;
              var v;
              var x;
              var y;
              var _ = {};
              var e = this.getEntities(e);
              b = e;
              p = function (e) {
                return e.start.zoneId;
              };
              var T = b.reduce(function (e, t) {
                var r = p(t);
                e[r] ||= [];
                e[r].push(t);
                return e;
              }, {});
              for (y in T) {
                if ((r.internalZonesIncluded || s === y) && T.hasOwnProperty(y)) {
                  var A = new contentStructureDelta.ContentDelta({
                    zoneId: y
                  });
                  var O = T[y];
                  if (y === s) {
                    A.retain(g.start);
                  }
                  try {
                    E = undefined;
                    var B = typescriptRuntimeHelpers_1.values(O.entries());
                    var N = B.next();
                    for (; !N.done; N = B.next()) {
                      var R;
                      var C;
                      var S;
                      var G = typescriptRuntimeHelpers_1.readIterable(N.value, 2);
                      var I = G[0];
                      var F = G[1];
                      if (((x = F.attributes) === null || x === undefined || !x.lmkr || r.withLineMarker) && (F.text !== "\n" || r.withEnter)) {
                        R = F.text.endsWith("\n") && !r.withEnter ? 1 : 0;
                        C = F.start.offset;
                        S = F.end.offset;
                        if (y === s) {
                          if (I === 0) {
                            C = l;
                          }
                          if (I === O.length - 1 && f !== 0) {
                            R = f === F.end.offset ? R : 0;
                            S = f;
                          }
                        }
                        A.retain(S - C - R, t).retain(R);
                      } else {
                        A.retain(1);
                      }
                    }
                  } catch (e) {
                    E = {
                      error: e
                    };
                  } finally {
                    try {
                      if (N && !N.done && (k = B.return)) {
                        k.call(B);
                      }
                    } finally {
                      if (E) {
                        throw E.error;
                      }
                    }
                  }
                  _[y] = A;
                }
              }
              e = new deltaSetCore.DeltaSet(_);
              return this.apply(e, typescriptRuntimeHelpers_1.assign({
                type: "setAttributes"
              }, r));
            }
            try {
              var D = typescriptRuntimeHelpers_1.values(Object.entries(t));
              var L = D.next();
              for (; !L.done; L = D.next()) {
                var P = typescriptRuntimeHelpers_1.readIterable(L.value, 2);
                var H = P[0];
                var M = P[1];
                this._setInlineStyleOverride(g, H, M);
              }
            } catch (e) {
              m = {
                error: e
              };
            } finally {
              try {
                if (L && !L.done && (w = D.return)) {
                  w.call(D);
                }
              } finally {
                if (m) {
                  throw m.error;
                }
              }
            }
          } else {
            try {
              var j = typescriptRuntimeHelpers_1.values(Object.keys(t));
              var W = j.next();
              for (; !W.done; W = j.next()) {
                var U = W.value;
                this._setInlineStyleOverride(g, U, t[U]);
              }
            } catch (e) {
              v = {
                error: e
              };
            } finally {
              try {
                if (W && !W.done && (h = j.return)) {
                  h.call(j);
                }
              } finally {
                if (v) {
                  throw v.error;
                }
              }
            }
          }
        }
      } else if ((v = this._errorCbk) !== null && v !== undefined) {
        v.call(this, {
          message: "[ContentState][setAttributes] start zoneId: " + s + " not equal to end zoneId: " + o,
          level: errorHandlerUtil.ErrorLevel.ERROR
        });
      }
    };
    t.setLineAttributes = function (e, t, r, o = {}) {
      var a = (a = this.content.get(e)) === null || a === undefined ? undefined : a.getLine(t);
      if (a && (t = this.rangePointToOffset({
        line: t,
        offset: 0,
        zoneId: e
      })) !== null) {
        (e = new contentStructureDelta.ContentDelta({
          zoneId: e
        })).retain(t);
        if (a.hasLineMarker()) {
          e.retain(1, r);
        } else {
          e.insertLineMarker(r);
        }
        return this.apply(e, typescriptRuntimeHelpers_1.assign({
          type: "setLineAttributes"
        }, o));
      }
    };
    t.hasLineMarker = function (e) {
      var t = e.line;
      var e = e.zoneId;
      return (t = (e = this.content.get(e)) === null || e === undefined ? undefined : e.getLine(t)) !== null && t !== undefined && !!t.hasLineMarker();
    };
    t.isLineStart = function (e) {
      if (this.hasLineMarker(e)) {
        return e.offset === 1;
      } else {
        return e.offset === 0;
      }
    };
    t.deleteText = function (e, t = {}) {
      var r = this.rangeToPosition(e);
      if (r !== null) {
        var o = r.start;
        var a = r.len;
        var i = r.zoneId;
        var e = this.getZoneState(i);
        if (e) {
          r = e.getContent().length();
          e = a;
          if (r - 1 <= o + a) {
            e = r - o - 1;
          }
          e = new contentStructureDelta.ContentDelta({
            zoneId: i
          }).retain(o).delete(e);
          return this.apply(e, typescriptRuntimeHelpers_1.assign({
            type: "deleteText"
          }, t));
        }
      }
    };
    t.getInsertTextDelta = function (e, t, r, n = {}) {
      return new contentStructureDelta.ContentDelta({
        zoneId: e.zoneId
      }).retain(t).insert(r, n);
    };
    t.insertText = function (e, t, r = {}, o = {}) {
      var a = this.rangePointToOffset(e);
      if (a !== null) {
        r = this.getInsertTextDelta(e, a, t, r);
        return this.apply(r, typescriptRuntimeHelpers_1.assign({
          type: "insertText"
        }, o));
      }
    };
    t.getReplaceTextDelta = function (e) {
      var t = e.pos;
      var r = e.text;
      var n = e.attributes;
      var o = t.start;
      var e = t.len;
      var t = t.zoneId;
      return new contentStructureDelta.ContentDelta({
        zoneId: t
      }).retain(o).delete(e).insert(r, n);
    };
    t.replaceText = function (e, t, r = {}, o = {}) {
      var a = this.rangeToPosition(e);
      if (a !== null) {
        r = this.getReplaceTextDelta({
          sel: e,
          pos: a,
          text: t,
          attributes: r
        });
        return this.apply(r, typescriptRuntimeHelpers_1.assign({
          type: "replaceText"
        }, o));
      }
    };
    t.rangeToPosition = function (e) {
      var t = e.start;
      var r = e.end;
      var e = this.rangePointToOffset(t);
      var r = this.rangePointToOffset(r);
      if (e === null || r === null) {
        return null;
      } else {
        return {
          start: e,
          len: r - e,
          zoneId: t.zoneId
        };
      }
    };
    t.rangePointToOffset = function (e) {
      var t = e.zoneId;
      var r = e.line;
      var e = e.offset;
      var t = this.getZoneState(t);
      if (t) {
        return t.pointToOffset({
          line: r,
          offset: e
        });
      } else {
        return null;
      }
    };
    t.setInlineStyleOverride = function (e, t, r) {
      this._setInlineStyleOverride(e, t, r);
    };
    t._setInlineStyleOverride = function (e, t, r) {
      var n = e.zoneId;
      var e = e.start;
      var n = this.Nt[n] = this.Nt[n] || {};
      n[e] = n[e] || {};
      n[e][t] = r;
    };
    t.getInlineStyleOverride = function (e, t) {
      if (e) {
        var r = e.zoneId;
        var n = e.start;
        if (t) {
          if ((e = (e = this.Nt[r]) === null || e === undefined ? undefined : e[n]) === null || e === undefined) {
            return undefined;
          } else {
            return e[t];
          }
        } else {
          return ((r = this.Nt[r]) === null || r === undefined ? undefined : r[n]) || {};
        }
      }
      return this.Nt;
    };
    t.clearInlineStyleOverride = function (e) {
      this._clearInlineStyleOverride(e);
    };
    t._clearInlineStyleOverride = function (e) {
      var t;
      if (e) {
        t = e.zoneId;
        e = e.start;
        if (this.Nt[t]) {
          delete this.Nt[t][e];
        }
      } else {
        this.Nt = {};
      }
    };
    t.ie = function (e) {
      var t;
      var r;
      var o;
      var a;
      var i;
      var c;
      var f = this.getInlineStyleOverride()[e.zoneId];
      if (f) {
        var g = 0;
        try {
          var b = typescriptRuntimeHelpers_1.values(e.ops);
          var p = b.next();
          for (; !p.done; p = b.next()) {
            var h = p.value;
            g += h.retain ?? h.delete ?? h.insert?.length ?? 0;
            if (h.delete) {
              try {
                o = undefined;
                var m = typescriptRuntimeHelpers_1.values(Object.keys(f));
                var w = m.next();
                for (; !w.done; w = m.next()) {
                  var E = w.value;
                  if ((y = Number(E)) <= g && g - h.delete < y) {
                    delete f[E];
                  }
                }
              } catch (e) {
                o = {
                  error: e
                };
              } finally {
                try {
                  if (w && !w.done && (a = m.return)) {
                    a.call(m);
                  }
                } finally {
                  if (o) {
                    throw o.error;
                  }
                }
              }
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            if (p && !p.done && (r = b.return)) {
              r.call(b);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
        try {
          var k = typescriptRuntimeHelpers_1.values(Object.entries(f));
          var v = k.next();
          for (; !v.done; v = k.next()) {
            var x = typescriptRuntimeHelpers_1.readIterable(v.value, 2);
            var y = x[0];
            var _ = x[1];
            var T = e.transform(Number(y));
            if (T !== Number(y)) {
              f[T] = _;
              delete f[y];
            }
          }
        } catch (e) {
          i = {
            error: e
          };
        } finally {
          try {
            if (v && !v.done && (c = k.return)) {
              c.call(k);
            }
          } finally {
            if (i) {
              throw i.error;
            }
          }
        }
      }
    };
    t._forceRefresh = function (e, t, r, n = true) {
      var o = this.getZoneState(e);
      if (o) {
        var a = o.clone();
        var i = 0;
        for (; i < t.length; i++) {
          var c = t[i];
          var s = a.getLine(c);
          var l = s.clone();
          if (n) {
            l._refreshKey();
          }
          if (s._node) {
            l._node = s._node.cloneNode(true);
          }
          a._splice(c, 1, [l]);
        }
        this.content.set(e, a);
        if (this.oe) {
          this.oe({
            zoneId: e,
            lineArr: t,
            from: r,
            prevZoneState: o
          });
        }
      }
    };
    t.toDeltaSet = function (e = false, t = false) {
      var r;
      var o;
      var a = new deltaSetCore.DeltaSet();
      try {
        var c = typescriptRuntimeHelpers_1.values(this.content.entries());
        var s = c.next();
        for (; !s.done; s = c.next()) {
          var l = typescriptRuntimeHelpers_1.readIterable(s.value, 2);
          var u = l[0];
          var d = l[1];
          a.add(u, d.getContent(e, t));
        }
      } catch (e) {
        r = {
          error: e
        };
      } finally {
        try {
          if (s && !s.done && (o = c.return)) {
            o.call(c);
          }
        } finally {
          if (r) {
            throw r.error;
          }
        }
      }
      return a;
    };
    t.isEmpty = function () {
      var e = this.getZoneState(zeroConstantModule_1.versionValue);
      return !e || !(e.length() > 1) && e.getLine(0).isEmpty();
    };
    t.setContent = function (e, t = {}) {
      var r;
      var o = new deltaSetCore.DeltaSet();
      var a = e instanceof deltaSetCore.DeltaSet ? e : new deltaSetCore.DeltaSet(((r = {})[e.zoneId] = e, r));
      this.getContent().forEach(function (e, t) {
        var r = e.getType() === documentOperationConstants.structureTypes.Content;
        var c = deltaSetCore.createDelta({
          zoneId: t,
          zoneType: e.getType()
        });
        c.delete(e.getModelText().length - +!!r);
        var l;
        var e = c;
        var c = (e = a.get(t) ? c.concat(a.get(t)) : e).ops.length - 1;
        if (r && (l = e.ops[c]) !== null && l !== undefined && l.insert && (l = e.ops[c].insert).endsWith("\n")) {
          c = e.ops.pop();
          if (l = l.slice(0, -1)) {
            e.insert(l, typescriptRuntimeHelpers_1.assign({}, c == null ? undefined : c.attributes));
          }
        }
        o.add(t, e);
      });
      a.forEach(function (e) {
        if (!o.get(e.zoneId)) {
          o.add(e.zoneId, e);
        }
      });
      this.apply(o, t);
    };
    t.clear = function () {
      this._attributes.clear();
      this._clearInlineStyleOverride();
    };
    t._clearListener = function () {
      this.zt = function () {};
      this._errorCbk = undefined;
      this.Jt = undefined;
      this.Qt = undefined;
      this.oe = undefined;
      this.le = undefined;
      this._attributes.resetOnErrorCb();
    };
    return e;
  }();
  require.d(exports, {
    ContentStateManager: function () {
      return k;
    }
  });
}