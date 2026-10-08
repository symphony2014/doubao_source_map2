// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'EditorZoneState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 962363
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var normalizeLineEndings = require("normalize-line-endings") /*id: 565335*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var editorConstantsKeycodes = require("editor-constants-keycodes") /*id: 495515*/;
  require("editor-kit-dom-patch") /*id: 218425*/;
  var contentDeltaOpsUtil = require("content-delta-ops-util") /*id: 444706*/;
  var schemaResolver = require("schema-resolver") /*id: 289076*/;
  var editorLineModel = require("editor-line-model") /*id: 136973*/;
  var deepEqualityCheck_1 = require("deep-equality-check_1") /*id: 956585*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var h = function () {
    function t(t) {
      this.St = 0;
      this.Pt = 0;
      this.Mt = 0;
      this.Ht = 0;
      this.ee = 0;
      this.kt = 0;
      this.xt = [];
      this.Ct = false;
      this.te = t;
    }
    var e = t.prototype;
    e.insert = function (t, e) {
      var n;
      var i;
      var o;
      var a;
      var s;
      var l;
      var u;
      var h;
      var p;
      var v;
      var y = this;
      if (t) {
        n = t;
        if (!this.Ct) {
          this.Dt();
        }
        if (this.te.length() - 1 < this.Mt) {
          this.Lt();
        }
        if (n.indexOf("\n") > -1) {
          s = n.split("\n");
          if (this.Tt()) {
            i = this.xt.length - 1;
            if ((o = this.xt[i])._keepKey && o !== this.te.get(this.Mt)) {
              o._keepKey = false;
              o._refreshKey();
            }
            t = s.shift();
            h = s.pop();
            if (t !== undefined) {
              v = new contentStructureDelta.ContentDelta().retain(this.Pt).insert(t, e).insertEnter(e);
              a = o.slice(0, this.Pt).compose(v);
              if (this.Pt) {
                a._setKey(o.getKey());
                a.setNode(o.getNode());
              }
              this.St++;
              this.xt[i] = a;
            }
            if (s.length) {
              u = s.map(function (t) {
                return new editorLineModel.EditorLine(new contentStructureDelta.ContentDelta().insert(t, e).insertEnter(e), o.parent);
              });
              (a = this.xt).push.apply(a, typescriptRuntimeHelpers_1.spread(u));
              this.St += s.length;
            }
            if (h !== undefined) {
              v = new contentStructureDelta.ContentDelta().insert(h, e);
              l = o.slice(this.Pt, o.length()).compose(v);
              if (h) {
                this.xt.push(l);
              } else if ((s = this.te.get(this.Mt)) && l.length() === s.length() && deepEqualityCheck_1.deepEqual(l._getOps(), s._getOps())) {
                this.xt.push(s);
              } else if (l.length()) {
                this.xt.push(l);
              }
              this.Pt = h.length;
            }
          } else {
            l = (p = this.At(n)).length;
            u = p.map(function (t) {
              return new editorLineModel.EditorLine(new contentStructureDelta.ContentDelta().insert(t, e), y.te.get(0).parent);
            });
            if (!p[l - 1].includes("\n")) {
              if (h = this.te.get(this.Mt)) {
                u[l - 1] = h.compose(u[l - 1]._getDelta());
                this.Pt = p[l - 1].length;
                this.St--;
                this.kt += 1;
              }
            }
            (l = this.xt).push.apply(l, typescriptRuntimeHelpers_1.spread(u));
            this.St += p.length;
          }
        } else {
          p = this.Lt();
          v = new contentStructureDelta.ContentDelta().retain(this.Pt).insert(n, e);
          (v = this.xt[p].compose(v))._setKey(this.xt[p].getKey());
          v._keepKey = true;
          v.setNode(this.xt[p].getNode());
          this.xt[p] = v;
          this.Pt += n.length;
        }
      }
    };
    e.retain = function (t, e) {
      if (t) {
        var n = this.Ot(t);
        var r = n.line;
        var n = n.col;
        if (r > this.Mt) {
          this.Bt(r - this.Mt, e);
          if (n) {
            this.Ut(n, e);
          }
          return;
        }
        if (t) {
          this.Ut(t, e);
        }
      }
    };
    e.Ut = function (t, e) {
      var n;
      var r;
      if (e) {
        if (!this.Ct) {
          this.Dt();
        }
      }
      if (this.Ct) {
        this.Lt();
        n = this.xt.length - 1;
        r = this.xt[n];
        e = new contentStructureDelta.ContentDelta().retain(this.Pt).retain(t, e);
        this.xt[n] = new editorLineModel.EditorLine(r._getDelta().compose(e, false), r.parent);
        this.xt[n]._setKey(r.getKey());
        this.xt[n].setNode(r.getNode());
      }
      this.Pt += t;
      this.Ht += t;
    };
    e.delete = function (t) {
      if (t) {
        var e = this.Ot(t);
        var n = e.line;
        var e = e.col;
        if (n > this.Mt) {
          this.Wt(n - this.Mt);
          if (e) {
            this.Zt(e);
          }
          return;
        }
        if (t) {
          this.Zt(t);
        }
      }
    };
    e.close = function () {
      this.Ft();
    };
    e.Ot = function (t) {
      var e = 0;
      var n = this.Mt;
      var r = this.Ht;
      var i = this.te.length();
      var o = n;
      for (; o < i; o++) {
        var a = this.te.get(o).length();
        if (e <= t + r && t + r < e + a) {
          return {
            line: o,
            col: t - e + r
          };
        }
        e += a;
      }
      if (e === t + r) {
        return {
          line: i,
          col: 0
        };
      } else {
        return {
          line: -1,
          col: -1
        };
      }
    };
    e.Wt = function (t) {
      var e;
      var n;
      var r;
      if (!this.Ct) {
        this.Dt();
      }
      if (this.Tt()) {
        if (this.Pt === 0) {
          this.kt += t - 1;
          this.Mt += t;
          this.xt.pop();
        } else {
          r = this.Kt(t - 1);
          this.kt += t;
          this.Mt += t;
          e = this.xt.length - 1;
          n = this.xt[e];
          (r = r.compose(n.slice(0, this.Pt)._getDelta()))._setKey(n.getKey());
          r.setNode(n.getNode());
          this.xt[e] = r;
        }
      } else {
        this.Mt += t;
        this.kt += t;
      }
      this.Ht = 0;
    };
    e.Zt = function (t) {
      if (!this.Ct) {
        this.Dt();
      }
      var e = this.Lt();
      var n = this.xt[e];
      var r = new contentStructureDelta.ContentDelta().retain(this.Pt).delete(t);
      var r = n.compose(r);
      r._setKey(n.getKey());
      r.setNode(n.getNode());
      this.xt[e] = r;
      this.Ht += t;
    };
    e.Kt = function (t) {
      var e = this.ee + this.kt;
      return this.te.get(e + t);
    };
    e.Bt = function (t, e) {
      if (e) {
        var n;
        var r;
        var i;
        if (this.Pt) {
          i = this.Pt;
          this.Pt = 0;
          if (!this.Ct) {
            this.Dt();
          }
          this.Lt();
          n = this.xt.length - 1;
          r = this.xt[n];
          i = new contentStructureDelta.ContentDelta().retain(i).retain(r.length() - i, e);
          this.xt[n] = new editorLineModel.EditorLine(r._getDelta().compose(i, false), r.parent);
          this.xt[n]._setKey(r.getKey());
          this.xt[n].setNode(r.getNode());
          this.Mt++;
          this.St++;
          t--;
        }
        this.Pt = 0;
        if (!this.Ct) {
          this.Dt();
        }
        for (var o = 0; o < t; o++) {
          this.St++;
          this.Mt++;
          this.Lt(e);
        }
        this.Ht = 0;
      } else {
        this.St += t;
        this.Mt += t;
        this.Pt = 0;
        this.Ht = 0;
        if (this.Ct) {
          this.Ft();
        }
      }
    };
    e.Lt = function (t) {
      var e;
      var n = this.te.get(this.ee + this.kt);
      if (t && n) {
        e = new contentStructureDelta.ContentDelta().retain(n.length(), t);
        (e = new editorLineModel.EditorLine(n._getDelta().compose(e, false), n.parent))._setKey(n.getKey());
        e.setNode(n.getNode());
        n = e;
      }
      if (!this.Tt() && n) {
        this.xt.push(n);
        this.kt++;
      } else if (t && n) {
        this.xt[this.xt.length - 1] = n;
      }
      return this.St - this.ee;
    };
    e.Dt = function () {
      this.Ct = true;
      this.ee = this.St;
      this.kt = 0;
      this.xt = [];
      this.Mt = this.St;
      if (this.Pt > 0) {
        this.Lt();
      }
    };
    e.Ft = function () {
      var t = this.xt.length;
      if (this.kt > 0 || t > 0) {
        this.$t();
        this.te.splice(this.ee, this.kt, this.xt);
      }
      this.ee = this.St;
      this.Mt = this.St;
      this.kt = 0;
      this.xt = [];
    };
    e.$t = function () {
      var t;
      if (this.xt.length) {
        t = this.xt.length - 1;
        if (!this.xt[t]._getOps().length) {
          this.xt.splice(t);
        }
      }
    };
    e.At = function (t) {
      return t.match(/[^\n]*(?:\n|[^\n]$)/g);
    };
    e.Tt = function () {
      return this.St - this.ee < this.xt.length;
    };
    return t;
  }();
  var p = function () {
    function t(t, e, n) {
      var r = this;
      this.lines = [];
      this.parent = null;
      this._node = null;
      this.placeholder = "";
      this.ue = "";
      this.ce = [];
      this.instance = null;
      this.k = new Map();
      this.zoneId = t;
      this.schema = n ?? new schemaResolver.SchemaResolver({});
      this._content = e.create({
        zoneId: t,
        ops: e.ops
      });
      this.lines = [];
      this._content.eachLine(function (e) {
        e = new editorLineModel.EditorLine(e, r);
        r.lines.push(e);
        r.ce.push(e.length());
        if (t === zeroConstantModule_1.versionValue) {
          r.ue += e.getModelText();
        }
      });
      this.he();
      this.type = e.zoneType;
    }
    var e = t.prototype;
    t.register = function (e, n) {
      t.mutators[e] = n;
    };
    e.he = function () {
      var t = this;
      var e = 0;
      this.lines.forEach(function (n, r) {
        var i = e + n.length();
        n._setOffset(e, i);
        n._setIndex(r);
        n.parent = t;
        e = i;
      });
    };
    Object.defineProperty(e, "allText", {
      get: function () {
        return this.getModelText();
      },
      enumerable: false,
      configurable: true
    });
    e.getStatus = function (t) {
      return !!this.k.get(t);
    };
    e.setDangerousInput = function (t) {
      this.k.set("dangerousInput", t);
    };
    e.getContainer = function () {
      return this._node;
    };
    e.getModelText = function () {
      return this.lines.reduce(function (t, e) {
        return t + e.getModelText();
      }, "");
    };
    e.getNode = function () {
      if (this._node) {
        return Array.from(this._node.childNodes).filter(function (t) {
          return !(t instanceof Element) || !t.getAttribute(editorConstantsKeycodes.dataVirtualListPlaceholder);
        });
      } else {
        return null;
      }
    };
    e.setNode = function (t) {
      this._node = t;
    };
    e._updateAllText = function (t, e, n) {
      var i = [];
      n.forEach(function (t) {
        i.push(t.length());
      });
      (o = this.ce).splice.apply(o, typescriptRuntimeHelpers_1.spread([t, e.length], i));
      var o = this.ce.slice(0, t).reduce(function (t, e) {
        return t + e;
      }, 0);
      var t = n.reduce(function (t, e) {
        return t + e.getModelText();
      }, "");
      var n = e.reduce(function (t, e) {
        return t + e.getModelText();
      }, "");
      var e = n.length;
      if (n !== t) {
        e = this.ue.slice(o + e);
        this.ue = this.ue.slice(0, o) + t + e;
      }
    };
    e.getType = function () {
      return this.type;
    };
    e.slice = function (t, e) {
      var n = t.line;
      var r = t.offset;
      var o = e.line;
      var a = e.offset;
      var s = this.cloneEmptyState();
      var l = n;
      for (; l <= o; l++) {
        var u = this.lines[l];
        var c = n === o ? u.slice(r, a) : l === n ? u.slice(r, u.length()) : l === o ? u.slice(0, a) : u.slice(0, u.length());
        s._content = s._content.concat(c._getDelta());
        if (s.zoneId === zeroConstantModule_1.versionValue) {
          s.ue += c.getModelText();
        }
        s.ce.push(c.length());
        s._node = this._node;
        s.lines.push(c);
      }
      s.he();
      return s;
    };
    e._splice = function (t, e, n) {
      var i;
      (i = this.lines).splice.apply(i, typescriptRuntimeHelpers_1.spread([t, e], n));
    };
    e.clone = function () {
      var t = this.cloneEmptyState();
      t.ue = this.ue;
      t.instance = this.instance;
      t.parent = this.parent;
      var e = 0;
      var n = this.lines.length;
      for (; e < n; e++) {
        t.lines.push(this.lines[e].clone());
      }
      return t;
    };
    e.getLine = function (t) {
      return this.lines[t] || null;
    };
    e.getLineIndexOfKey = function (t) {
      var e = 0;
      var n = this.lines.length;
      for (; e < n; e++) {
        if (t === this.lines[e].getKey()) {
          return e;
        }
      }
      return -1;
    };
    e.getLineByKey = function (t) {
      var e;
      var n;
      try {
        var i = typescriptRuntimeHelpers_1.values(this.lines);
        var o = i.next();
        for (; !o.done; o = i.next()) {
          var a = o.value;
          if (t === a.getKey()) {
            return a;
          }
        }
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
      return null;
    };
    e.getItemByIndex = function (t) {
      return this.lines[t] || null;
    };
    e.getEntities = function (t, e, n) {
      var i = [];
      if (t instanceof Array) {
        for (var o = 0; o < this.length(); o++) {
          if (a = this.getLine(o)) {
            i.push.apply(i, typescriptRuntimeHelpers_1.spread(a.getEntities(t, e, n)));
          }
        }
      } else {
        if (t instanceof Function) {
          e = t;
          t = {
            start: {
              line: 0,
              offset: 0
            },
            end: {
              line: u = this.length() - 1,
              offset: this.getLine(u).length()
            }
          };
        }
        var a;
        var s;
        var l;
        var u = t.start;
        var c = u.line;
        var f = u.offset;
        var u = t.end;
        var d = u.line;
        var h = u.offset;
        var o = c;
        for (; o <= d; o++) {
          if (a = this.getLine(o)) {
            s = o === c ? f : 0;
            l = o === d ? h : a.length();
            i.push.apply(i, typescriptRuntimeHelpers_1.spread(a.getEntities({
              start: s,
              end: l
            }, e, n)));
          }
        }
      }
      return i;
    };
    e.getAttributes = function (t, e) {
      var n;
      var i;
      var o;
      var a;
      var e = this.getEntities({
        start: t,
        end: e
      }, undefined, this._getInternalZoneEntities);
      var s = contentDeltaOpsUtil.createOpArray();
      if (!e || !e.length) {
        return s;
      }
      try {
        var u = typescriptRuntimeHelpers_1.values(e);
        var c = u.next();
        for (; !c.done; c = u.next()) {
          var f = c.value.attributes;
          if (f) {
            try {
              o = undefined;
              var d = typescriptRuntimeHelpers_1.values(Object.entries(f));
              var h = d.next();
              for (; !h.done; h = d.next()) {
                var p = typescriptRuntimeHelpers_1.readIterable(h.value, 2);
                var v = p[0];
                var y = p[1];
                s.push([v, String(y)]);
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
      return s;
    };
    e.length = function () {
      return this.lines.length;
    };
    e.getZoneId = function () {
      return this._content.zoneId;
    };
    Object.defineProperty(e, "content", {
      get: function () {
        return this.ae();
      },
      enumerable: false,
      configurable: true
    });
    e.ae = function (t = false, e = false) {
      var n = this._content;
      var i = n.zoneId;
      var n = n.zoneType;
      var o = this._content.create({
        zoneId: i,
        zoneType: n,
        ops: []
      });
      this.lines.forEach(function (n, i) {
        var n = n._getOps();
        var s = n.length;
        n.forEach(function (n, l) {
          var u;
          var c;
          if (t && deltaSetCore.isInsertString(n) && (l === 0 && i !== 0 || l === s - 1)) {
            o.insert(n.insert, n.attributes);
          } else if (e) {
            l = typescriptRuntimeHelpers_1.assign({}, n);
            if (u = n.attributes) {
              c = {};
              Object.keys(u).forEach(function (t) {
                if (!t.startsWith("clientside-")) {
                  c[t] = u[t];
                }
              });
              l.attributes = c;
            }
            o.ops.push(l);
          } else {
            o.ops.push(n);
          }
        });
      });
      return o;
    };
    e.getContent = function (t, e) {
      return this.ae(t = t !== undefined && t, e = e !== undefined && e);
    };
    e.getViewContent = function () {
      return this.ae();
    };
    e.getState = function () {
      return this.lines;
    };
    e.isEmpty = function () {
      var t;
      return this.length() === 1 && (t = this.getLine(0)) !== null && t !== undefined && !!t.isEmpty();
    };
    e.apply = function (e, n) {
      var a = this;
      var s = this.lines.slice(0);
      var l = e.zoneType;
      var u = t.mutators[l];
      if (!u) {
        throw Error("can not find zoneType of " + l + ", you need call ZoneState.register(" + l + ") before apply");
      }
      var c = this.cloneEmptyState();
      c.ue = this.ue;
      c.ce = typescriptRuntimeHelpers_1.spread(this.ce);
      var f = new u({
        getParent: function () {
          return a;
        },
        getZoneId: function () {
          return a.getZoneId();
        },
        getZoneType: function () {
          return l;
        },
        splice: function (t, e, o) {
          var a = s.slice(t, t + e);
          s.splice.apply(s, typescriptRuntimeHelpers_1.spread([t, e], o));
          if (c.zoneId === zeroConstantModule_1.versionValue) {
            c._updateAllText(t, a, o);
          }
          n(t, a, o);
        },
        length: function () {
          return s.length;
        },
        get: function (t) {
          return s[t];
        },
        map: function (t) {
          return s.map(function (e, n, r) {
            return t(e, n, r);
          });
        }
      });
      e.forEach(function (t) {
        if (t.delete) {
          f.delete(t.delete);
        } else if (t.retain) {
          f.retain(t.retain, t.attributes);
        } else if (t.insert) {
          if (typeof t.insert == "string") {
            t.insert = normalizeLineEndings.normalizeNewlines(t.insert);
          }
          f.insert(t.insert, t.attributes);
        }
      });
      f.close();
      c.lines = s;
      c._node = this._node;
      c.instance = this.instance;
      c.he();
      c.parent = this.parent;
      c.k = new Map(this.k);
      return c;
    };
    e.cloneEmptyState = function () {
      var e = this._content.create({
        zoneType: this.type,
        zoneId: this.zoneId
      });
      var e = new t(this.getZoneId(), e);
      e.type = this.type;
      e.zoneId = this.zoneId;
      e._node = this._node;
      e.instance = this.instance;
      e.placeholder = this.placeholder;
      e.k = new Map(this.k);
      return e;
    };
    e[Symbol.iterator] = function () {
      return this.lines.values();
    };
    e.setPlaceholder = function (t) {
      this.placeholder = t;
    };
    e._setLine = function (t, e) {
      this.lines[t] = e;
    };
    e._setParent = function (t) {
      this.parent = t;
    };
    e._getZoneDelta = function () {
      return this.content;
    };
    e._indexOf = function (t) {
      if (t) {
        return t.index;
      } else {
        return 0;
      }
    };
    e.pointToOffset = function (t) {
      var e = t.line;
      var t = t.offset;
      var e = this.getLine(e);
      if (e) {
        return e._offsetStart + t;
      } else {
        return null;
      }
    };
    e.offsetToPoint = function (t) {
      var e = function t(e, n, r, i) {
        var o = Math.floor((n + r) / 2);
        if (r < n || !i.length || e > i[i.length - 1]._offsetEnd || e < 0) {
          return null;
        } else if (e >= i[o]._offsetStart && e <= i[o]._offsetEnd) {
          return o;
        } else if (e > i[o]._offsetEnd) {
          return t(e, o, r, i);
        } else if (e < i[o]._offsetStart) {
          return t(e, n, o, i);
        } else {
          return null;
        }
      }(t, 0, this.lines.length, this.lines);
      var n = this.zoneId;
      if (e === null) {
        return {
          zoneId: n,
          line: 0,
          offset: 0
        };
      }
      var r = this.lines[e];
      if (t === r._offsetEnd && e !== this.lines.length - 1) {
        return {
          zoneId: n,
          line: e + 1,
          offset: 0
        };
      } else {
        return {
          zoneId: n,
          line: e,
          offset: t - r._offsetStart
        };
      }
    };
    e.totalWidth = function () {
      return this.lines.reduce(function (t, e) {
        return t + e.length();
      }, 0);
    };
    t.mutators = {};
    return t;
  }();
  p.register("Z", h);
  require.d(exports, {
    EditorZoneState: function () {
      return p;
    }
  });
}