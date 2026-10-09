// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'ZoneContentState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82855.5dc766e7.js
         * chunkId: 82855
         * moduleId: 102479
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var errorHandlerUtil = require("error-handler-util") /*id: 161088*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var documentOperationConstants = require("document-operation-constants") /*id: 134823*/;
  var diffOperationValidators = require("diff-operation-validators") /*id: 735530*/;
  var editorModuleConstants = require("editor-module-constants") /*id: 21060*/;
  var contentStateManager = require("content-state-manager") /*id: 519638*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var c = function () {
    function e(e) {
      this.ii = new Map();
      this.ni = new Map();
      this.ei = new Map();
      this.zoneAttrs = [];
      this.zoneRules = new Map();
      this.ri = e;
      this.registerZoneRule("zoneId", function (e) {
        return [e];
      });
    }
    var t = e.prototype;
    t.registerScrollModule = function (e, t) {
      this.ei.set(e, t);
    };
    t.getAllScrollModules = function () {
      return typescriptRuntimeHelpers_1.spread(this.ei.values());
    };
    t.getScrollModuleByZoneId = function (e) {
      return this.ei.get(e);
    };
    t.removeScrollModule = function (e) {
      this.ei.delete(e);
    };
    Object.defineProperty(t, "zoneIdMap", {
      get: function () {
        return this.ni;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(t, "lineToZoneMap", {
      get: function () {
        return this.ii;
      },
      enumerable: false,
      configurable: true
    });
    t.init = function () {
      var e = this;
      this.ri.getEntities(function (t) {
        return e.zoneAttrs.includes(t);
      }).forEach(function (t) {
        var n = t.start;
        var i = t.attributes;
        var o = (t = e.ri.getZoneState(n.zoneId)) === null || t === undefined ? undefined : t.getLine(n.line);
        e.zoneAttrs.forEach(function (t) {
          var n;
          if (i[t]) {
            if ((n = e.zoneRules.get(t)) && o) {
              n(i[t]).forEach(function (t) {
                e.update(t, o);
              });
            }
          }
        });
      });
    };
    t.registerZoneRule = function (e, t) {
      this.zoneRules.set(e, t);
      this.zoneAttrs.push(e);
    };
    t.update = function (e, t) {
      var n = this.ni.get(e);
      if (!!n && n !== t) {
        if (i = this.ii.get(n)) {
          delete i[e];
        }
      }
      var i = this.ii.get(t) || {};
      i[e] = true;
      this.ii.set(t, i);
      this.ni.set(e, t);
      if (e = this.ri.getZoneState(e)) {
        e._setParent(t);
      }
    };
    t.removeZoneId = function (e) {
      var t;
      var n = this.ni.get(e);
      if (n) {
        if (t = this.ii.get(n)) {
          delete t[e];
          if (!Object.keys(t).length) {
            this.ii.delete(n);
          }
        }
      }
      this.ni.delete(e);
    };
    t.removeLineState = function (e) {
      var t = this;
      var e = this.ii.get(e);
      if (e) {
        Object.keys(e).forEach(function (e) {
          t.ni.delete(e);
        });
      }
    };
    t.updateLineState = function (e, t) {
      var n = this;
      var i = this.ii.get(e);
      if (i) {
        this.ii.delete(e);
        this.ii.set(t, i);
        Object.keys(i).forEach(function (e) {
          if (e = n.ri.getZoneState(e)) {
            e._setParent(t);
          }
        });
      }
    };
    t.getZoneIdsByAttributes = function (e) {
      for (var t = 0; t < e.length; t++) {
        var n = e[t];
        var o = typescriptRuntimeHelpers_1.readIterable(n, 2);
        var n = o[0];
        var o = o[1];
        var n = this.zoneRules.get(n);
        if (n) {
          return n(o);
        }
      }
      return [];
    };
    t._detectZoneChange = function (e, t) {
      var n = this;
      if (t === undefined) {
        t = false;
      }
      var o;
      var r;
      var a = [];
      for (l in e) {
        if (e.hasOwnProperty(l)) {
          r = e[l];
          if ((o = this.ni.get(l)) && l !== zeroConstantModule_1.versionValue) {
            this.update(l, o);
          }
          r.forEach(function (e) {
            e.inserts.forEach(function (e) {
              var t;
              t = (t = e).getAttributes();
              var o = n.getZoneIdsByAttributes(t);
              a.push.apply(a, typescriptRuntimeHelpers_1.spread(o));
              o.forEach(function (t) {
                n.update(t, e);
              });
            });
          });
        }
      }
      if (!t) {
        for (var l in e) {
          if (e.hasOwnProperty(l)) {
            (r = e[l]).forEach(function (e) {
              e.deletes.forEach(function (e) {
                if (e = n.ii.get(e)) {
                  Object.keys(e).forEach(function (e) {
                    n.removeZoneId(e);
                  });
                }
              });
            });
          }
        }
      }
    };
    t.getAncestorZones = function (e) {
      var t;
      var n = [e];
      var i = e;
      while (i) {
        if (i = (t = this.ni.get(i)) === null || t === undefined ? undefined : t.getZoneId()) {
          n.push(i);
        }
      }
      return n;
    };
    t.getMatchedAncestorLine = function (e, t) {
      var n;
      if (e !== t) {
        var i;
        var o = e;
        while (o) {
          var r = this.ni.get(o);
          var o = (n = this.ni.get(o)) === null || n === undefined ? undefined : n.getZoneId();
          if (r && r.getZoneId() === t) {
            i = r;
            break;
          }
        }
        return i;
      }
    };
    return e;
  }();
  var h = function (e) {
    function t(t) {
      var n = e.call(this, t) || this;
      n._getInternalZoneEntities = function (e, t = [], o) {
        var r = [];
        n._zoneManager.getZoneIdsByAttributes(e).reduce(function (e, r) {
          e.push.apply(e, typescriptRuntimeHelpers_1.spread(n._getZoneStateEntities(r, t, o)));
          return e;
        }, r);
        return r;
      };
      n._getZoneStateEntities = function (e, t, o) {
        var a = n.getZoneState(e);
        var l = [];
        if (!a) {
          a = new contentStructureDelta.ContentDelta({
            zoneId: e
          }).insertEnter();
          a = new (n.modulesContainer.get(editorModuleConstants.editorModuleConsts.ZoneState))(e, a, n.schema);
        }
        l.push.apply(l, typescriptRuntimeHelpers_1.spread(a.getEntities(t, o)));
        return l;
      };
      n._zoneManager = new c(n);
      return n;
    }
    typescriptRuntimeHelpers_1.extends(t, e);
    var n = t.prototype;
    n.init = function () {
      this._zoneManager.init();
    };
    n.create = function (e) {
      return new t(e);
    };
    n.getZoneManager = function () {
      return this._zoneManager;
    };
    n._clone = function (t, n) {
      (n = e.prototype._clone.call(this, t, n))._zoneManager.zoneAttrs = Array.from(this._zoneManager.zoneAttrs);
      n._zoneManager.zoneRules = new Map(this._zoneManager.zoneRules);
      return n;
    };
    n.addZone = function (e, t, n) {
      var i;
      if (this.content.get(e)) {
        if ((i = this._errorCbk) !== null && i !== undefined) {
          i.call(this, {
            message: "[ContentState][addZone] zoneId:" + e + " existed",
            level: errorHandlerUtil.ErrorLevel.ERROR
          });
        }
        return null;
      } else {
        t = t || new contentStructureDelta.ContentDelta({
          zoneId: e
        }).insertEnter();
        t = new (this.modulesContainer.get(editorModuleConstants.editorModuleConsts.ZoneState))(t.zoneId, t, this.schema);
        this.content.set(e, t);
        if (n) {
          this._zoneManager.update(e, n);
        }
        return t;
      }
    };
    n.removeZone = function (e) {
      this._zoneManager.removeZoneId(e);
      var t = this.getZoneState(e);
      if (t) {
        t = new contentStructureDelta.ContentDelta({
          zoneId: e
        }).delete(t.totalWidth() - 1);
        this.apply(t);
        this.content.delete(e);
      }
    };
    n.apply = function (e, t) {
      var n = this.applyToContentState(e, t = t === undefined ? {} : t);
      var e = (e = t.extra) !== null && e !== undefined && !!e.initContent;
      this._zoneManager._detectZoneChange(n.changes, e);
      return this.triggerChangeCbk(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, n), {
        options: t
      }));
    };
    n.slice = function (e, n) {
      var r;
      var a = this;
      var l = e.zoneId;
      var s = n.zoneId;
      if (l !== s) {
        if ((r = this._errorCbk) !== null && r !== undefined) {
          r.call(this, {
            message: "[contentState][slice] start zoneId: " + l + " not equal to end zoneId: " + s,
            level: errorHandlerUtil.ErrorLevel.ERROR
          });
        }
        return null;
      }
      if (!(s = this.content.get(l))) {
        return null;
      }
      var u = new t({
        apool: this._attributes.toJsonable(),
        schema: this.schema,
        modulesContainer: this.modulesContainer
      });
      var n = s.slice(e, n);
      u.content.set(l, n);
      if (l === "0") {
        n.getEntities([["aceTable", undefined]]).forEach(function (e) {
          var t = typescriptRuntimeHelpers_1.readIterable(e.attributes.aceTable.split(" "), 2);
          var e = t[0];
          var t = t[1];
          u.content.set(e, a.getZoneState(e));
          u.content.set(t, a.getZoneState(t));
          var e = a._getRowColIds(e, t);
          var t = e.rowIds;
          var n = e.colIds;
          t.forEach(function (e) {
            n.forEach(function (t) {
              t = "x" + e + "x" + t;
              u.content.set(t, a.getZoneState(t));
            });
          });
        });
      }
      u._zoneManager.init();
      return u;
    };
    n.getReplaceTextDelta = function (e) {
      var t = e.sel;
      var n = e.pos;
      var i = e.text;
      var o = e.attributes;
      var a = n.start;
      var e = n.len;
      var n = n.zoneId;
      var e = new contentStructureDelta.ContentDelta({
        zoneId: n
      }).retain(a).delete(e);
      this.assertPointAfterLineMarker(t.start);
      this.addLineMarkerAfterEnter({
        text: i,
        attributes: o,
        delta: e
      });
      return e;
    };
    n.getInsertTextDelta = function (e, t, n, i = {}) {
      t = new contentStructureDelta.ContentDelta({
        zoneId: e.zoneId
      }).retain(t);
      this.assertPointAfterLineMarker(e);
      this.addLineMarkerAfterEnter({
        text: n,
        attributes: i,
        delta: t
      });
      return t;
    };
    n.addLineMarkerAfterEnter = function (e) {
      var t = e.text;
      var n = e.attributes;
      var i = e.delta;
      var o = t.split(documentOperationConstants.newlineChar);
      o.forEach(function (e, t) {
        if (o[t + 1]) {
          i.insert(e, n).insertEnter(n).insertLineMarker(n);
        } else {
          i.insert(e, n);
        }
      });
      return i;
    };
    n.assertPointAfterLineMarker = function (e) {
      if (this.hasLineMarker(e) && e.offset === 0) {
        throw Error("Cannot insertText at the offset 0 of line,  because there is a lineMarker");
      }
    };
    n._getRowColIds = function (e, t) {
      var n;
      var o;
      var r;
      var a;
      var e = this.getZoneState(e);
      var t = this.getZoneState(t);
      if (!e || !t) {
        return {
          rowIds: [],
          colIds: []
        };
      }
      var e = e.getLine(0);
      var t = t.getLine(0);
      var s = [];
      var u = [];
      if (!e || !t) {
        return {
          rowIds: s,
          colIds: u
        };
      }
      try {
        var d = typescriptRuntimeHelpers_1.values(e);
        var c = d.next();
        for (; !c.done; c = d.next()) {
          var h = c.value;
          if (v = diffOperationValidators.hasInsertId(h)) {
            s.push(v);
          }
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          if (c && !c.done && (o = d.return)) {
            o.call(d);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      try {
        var f = typescriptRuntimeHelpers_1.values(t);
        var p = f.next();
        for (; !p.done; p = f.next()) {
          var v;
          var h = p.value;
          if (v = diffOperationValidators.hasInsertId(h)) {
            u.push(v);
          }
        }
      } catch (e) {
        r = {
          error: e
        };
      } finally {
        try {
          if (p && !p.done && (a = f.return)) {
            a.call(f);
          }
        } finally {
          if (r) {
            throw r.error;
          }
        }
      }
      return {
        rowIds: s,
        colIds: u
      };
    };
    return t;
  }(contentStateManager.ContentStateManager);
  require.d(exports, {
    ZoneContentState: function () {
      return h;
    }
  });
}