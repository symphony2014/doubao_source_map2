// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerRelationService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 269500
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var relationServiceProviderName = require("relation-service-provider-name") /*id: 233471*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var structureQueryToken = require("structure-query-token") /*id: 763917*/;
  var replaySubject = require("replay-subject") /*id: 229131*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var relationStatusConstants = require("relation-status-constants") /*id: 17601*/;
  function b(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  class y {
    get groupId() {
      return this.context.groupId;
    }
    parseValueFromBlock(e) {
      if (!e) {
        return null;
      }
      try {
        if (editorTextBlockUtilities.isAgendaBlock(e.type)) {
          return new Set(this.context.parseValueFromBlock(e));
        }
        let i = Array.from(this.recordIdToValueMap.get(e.recordId) || []).filter(e => this.tempValueSet.has(e));
        return new Set(this.context.parseValueFromBlock(e).concat(i));
      } catch (e) {
        this.traceLog(relationStatusConstants.RelationStatus.EXCEPTION, {
          msg: `[RelationManager][${this.context.groupId}] parseValueFromBlock failed`,
          ...docxEditorBlockMetadataUtils.serializeError(e)
        });
        return null;
      }
    }
    parseValueFromRecord(e) {
      try {
        if (this.context.parseValueFromRecord) {
          return new Set(this.context.parseValueFromRecord(e));
        }
      } catch (e) {
        this.traceLog(relationStatusConstants.RelationStatus.EXCEPTION, {
          msg: `[RelationManager][${this.context.groupId}] parseValueFromRecord failed`,
          ...docxEditorBlockMetadataUtils.serializeError(e)
        });
        return null;
      }
    }
    traceLog(e, i) {
      var r;
      var n;
      var o;
      try {
        if ((r = (n = this.context).traceLog) !== null && r !== undefined) {
          r.call(n, e, i);
        }
      } catch (e) {
        if ((o = this.blockManager) !== null && o !== undefined) {
          o.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
            action: `[RelationManager][${this.context.groupId}] traceLog failed`,
            info: JSON.stringify(docxEditorBlockMetadataUtils.serializeError(e))
          });
        }
      }
    }
    getAllValues() {
      let e = new Set();
      this.recordIdToValueMap.forEach(i => {
        i.forEach(i => e.add(i));
      });
      this.recordIdToValueMapWithoutModel.forEach(i => {
        i.forEach(i => e.add(i));
      });
      return e;
    }
    getAllRecordIds() {
      let e = new Set();
      this.valueToRecordIdMap.forEach(i => {
        i.forEach(i => e.add(i));
      });
      this.valueToRecordIdMapWithoutModel.forEach(i => {
        i.forEach(i => e.add(i));
      });
      return e;
    }
    getAllTempValues() {
      return new Set([...this.tempValueSet]);
    }
    getValuesByRecordId(e) {
      return new Set([...(this.recordIdToValueMap.get(e) ?? this.recordIdToValueMapWithoutModel.get(e) ?? new Set())]);
    }
    getRecordIdsByValue(e) {
      return new Set([...(this.valueToRecordIdMap.get(e) ?? this.valueToRecordIdMapWithoutModel.get(e) ?? new Set())]);
    }
    addRelation(e, i) {
      let r = i instanceof Set ? i : new Set([i]);
      let n = this.recordIdToValueMap.get(e) || new Set();
      this.recordIdToValueMap.set(e, new Set([...n, ...r]));
      r.forEach(i => {
        let r = Array.from(this.valueToRecordIdMap.get(i) || new Set());
        if (r.length && this.context.insertRecordIdInOrder && this.blockManager) {
          this.context.insertRecordIdInOrder(r, e, this.blockManager);
        } else {
          r.push(e);
        }
        this.valueToRecordIdMap.set(i, new Set([...new Set(r)]));
      });
    }
    removeRelation(e, i) {
      let r;
      if (i) {
        r = i instanceof Set ? i : new Set([i]);
        let n = this.recordIdToValueMap.get(e);
        r.forEach(e => {
          if (n != null) {
            n.delete(e);
          }
        });
      } else {
        r = this.recordIdToValueMap.get(e) || new Set();
        this.recordIdToValueMap.delete(e);
      }
      r.forEach(i => {
        var r;
        if ((r = this.valueToRecordIdMap.get(i)) !== null && r !== undefined) {
          r.delete(e);
        }
      });
    }
    addRelationWioutModel(e, i) {
      let r = i instanceof Set ? i : new Set([i]);
      let n = this.recordIdToValueMapWithoutModel.get(e) || new Set();
      this.recordIdToValueMapWithoutModel.set(e, new Set([...n, ...r]));
      r.forEach(i => {
        let r = this.valueToRecordIdMapWithoutModel.get(i) || new Set();
        this.valueToRecordIdMapWithoutModel.set(i, new Set([...r, e]));
      });
    }
    removeRelationWioutModel(e) {
      let i = this.recordIdToValueMapWithoutModel.get(e) || new Set();
      this.recordIdToValueMapWithoutModel.delete(e);
      i.forEach(i => {
        var r;
        if ((r = this.valueToRecordIdMapWithoutModel.get(i)) !== null && r !== undefined) {
          r.delete(e);
        }
      });
    }
    addTempRelation(e, i) {
      let r = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
      let n = typeof e == "string" ? [e] : Array.from(e);
      for (let e of n) {
        this.addRelation(e, i);
      }
      this.tempValueSet.add(i);
      this.traceLog(relationStatusConstants.RelationStatus.TEMP_RELATION, {
        action: "add",
        tempValue: i,
        recordIds: n.map(e => collaborativeEditingFlowSyncModule.transformOperationsWithInvert(e)),
        broadcast: r
      });
      if (r) {
        this.relationChangeSubject.next({
          updatedValues: new Set([i]),
          deletedValues: new Set(),
          updatedRecordsMap: new Map(),
          deletedValuesRecordMap: new Map()
        });
      }
    }
    removeTempRelation(e, i) {
      let r = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
      if (!this.tempValueSet.has(i)) {
        return;
      }
      let n = typeof e == "string" ? [e] : Array.from(e);
      for (let e of n) {
        this.removeRelation(e, i);
      }
      if (this.getRecordIdsByValue(i).size === 0) {
        this.tempValueSet.delete(i);
      }
      this.traceLog(relationStatusConstants.RelationStatus.TEMP_RELATION, {
        action: "remove",
        tempValue: i,
        recordId: n.map(e => collaborativeEditingFlowSyncModule.transformOperationsWithInvert(e)),
        broadcast: r
      });
      if (r) {
        this.relationChangeSubject.next({
          updatedValues: new Set(),
          deletedValues: new Set([i]),
          updatedRecordsMap: new Map(),
          deletedValuesRecordMap: new Map()
        });
      }
    }
    clear() {
      this.valueToRecordIdMap.clear();
      this.recordIdToValueMap.clear();
      this.tempValueSet.clear();
    }
    constructor(e, i) {
      this.context = e;
      this.blockManager = i;
      b(this, "relationChangeSubject", new replaySubject.ReplaySubject(1));
      b(this, "relationChange$", this.relationChangeSubject);
      b(this, "tempValueSet", new Set());
      b(this, "valueToRecordIdMap", new Map());
      b(this, "recordIdToValueMap", new Map());
      b(this, "valueToRecordIdMapWithoutModel", new Map());
      b(this, "recordIdToValueMapWithoutModel", new Map());
    }
  }
  function S(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
  function k(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  function E(e, i, r, n, o) {
    var l = {};
    Object.keys(n).forEach(function (e) {
      l[e] = n[e];
    });
    l.enumerable = !!l.enumerable;
    l.configurable = !!l.configurable;
    if ("value" in l || l.initializer) {
      l.writable = true;
    }
    l = r.slice().reverse().reduce(function (r, n) {
      return n(e, i, r) || r;
    }, l);
    if (o && l.initializer !== undefined) {
      l.value = l.initializer ? l.initializer.call(o) : undefined;
      l.initializer = undefined;
    }
    if (l.initializer === undefined) {
      Object.defineProperty(e, i, l);
      return null;
    } else {
      return l;
    }
  }
  let C = dependencyInjectionContainer.Provide(relationServiceProviderName.relationServiceProviderName)((o = E((n = class {
    register(e) {
      let {
        groupId: i
      } = e;
      if (!this.relationGroup[i]) {
        this.relationGroup[i] = new y(e, this.blockManager);
        if (this.isDataReady) {
          this.initRelation(i);
          if (this.hasExcuteAllDone) {
            this.handleAllDone();
          }
        }
      }
      return this.relationGroup[i];
    }
    getRelationManager(e) {
      return this.relationGroup[e];
    }
    init() {
      var e;
      this.subs = [(e = this.blockManager.lazyRecordStatus) === null || e === undefined ? undefined : e.applyAllDone$.subscribe(this.handleAllDone), this.blockManager.structService.mutation$.subscribe(this.handleMutations), this.blockManager.editorAPI.lifecycle.editorReady$.subscribe(this.handleEditorReady)].filter(Boolean);
    }
    destroy() {
      this.subs.forEach(e => e == null ? undefined : e.unsubscribe());
    }
    onServiceDispose() {
      this.destroy();
    }
    initDiffMap(e) {
      let i = {};
      Object.keys(this.relationGroup).forEach(r => {
        i[r] = {
          isInit: e,
          updatedValues: new Set(),
          updatedValuesExtra: new Map(),
          deletedValues: new Set(),
          deletedValuesExtra: new Map(),
          updatedRecordsMap: new Map(),
          deletedValuesRecordMap: new Map()
        };
      });
      return i;
    }
    initTrackerMap(e) {
      let i = {};
      Object.keys(this.relationGroup).forEach(r => {
        i[r] = {
          updatedModels: [],
          deletedModels: [],
          relationChange: {}
        };
        e.forEach(e => {
          let n = collaborativeEditingFlowSyncModule.transformOperationsWithInvert(e.recordId);
          if (e.active) {
            i[r].updatedModels.push({
              id: n,
              type: e.type
            });
          } else {
            i[r].deletedModels.push({
              id: n,
              type: e.type
            });
          }
          i[r].relationChange[n] = [];
        });
      });
      return i;
    }
    traceException(e) {
      Object.values(this.relationGroup).forEach(i => {
        i.traceLog(relationStatusConstants.RelationStatus.EXCEPTION, e);
      });
    }
    broadcast(e, i) {
      if (i) {
        Object.entries(i).forEach(e => {
          let [i, r] = e;
          if (Object.values(r.relationChange).some(e => e.length > 0)) {
            var n;
            if ((n = this.relationGroup[i]) !== null && n !== undefined) {
              n.traceLog(relationStatusConstants.RelationStatus.UPDATE_RELATION, r);
            }
          }
        });
      }
      Object.entries(e).forEach(e => {
        let [i, r] = e;
        let n = this.relationGroup[i];
        Array.from(r.updatedValues).forEach(e => {
          if (n.getRecordIdsByValue(e).size === 0) {
            let n;
            r.updatedValues.delete(e);
            r.deletedValues.add(e);
            if (r.updatedValuesExtra) {
              n = r.updatedValuesExtra.get(e);
              r.updatedValuesExtra.delete(e);
            }
            if (n) {
              var i;
              if ((i = r.deletedValuesExtra) !== null && i !== undefined) {
                i.set(e, n);
              }
            }
            r.updatedRecordsMap.delete(e);
          }
        });
        if (r.updatedValues.size > 0 || r.deletedValues.size > 0) {
          let e = r.deletedValuesRecordMap;
          let i = new Map();
          r.deletedValues.forEach(r => i.set(r, e.get(r)));
          r.deletedValuesRecordMap = i;
          n.relationChangeSubject.next(r);
        }
      });
    }
    initRelation(e) {
      var i;
      if (!e && Object.keys(this.relationGroup).length === 0) {
        return;
      }
      let r = e ? [this.relationGroup[e]] : Object.values(this.relationGroup);
      let n = this.initDiffMap(true);
      if ((i = this.blockManager.structService.root) !== null && i !== undefined) {
        i.traverse(e => {
          r.forEach(i => {
            let r = i.parseValueFromBlock(e);
            if (r && r.size > 0) {
              let {
                recordId: o
              } = e;
              i.addRelation(o, r);
              let {
                groupId: l
              } = i;
              r.forEach(e => {
                n[l].updatedValues.add(e);
                this.updateUpdatedRecordsMap({
                  diffMap: n,
                  groupId: l,
                  recordId: o,
                  value: e
                });
              });
            }
          });
        });
      }
      this.broadcast(n);
    }
    diffSet(e, i) {
      return Array.from(e).filter(e => !i.has(e));
    }
    updateUpdatedRecordsMap(e) {
      let {
        diffMap: i,
        groupId: r,
        recordId: n,
        value: o,
        isRevome: l = false
      } = e;
      let {
        updatedRecordsMap: s
      } = i[r];
      let a = s.get(o) || new Set();
      if (l) {
        a.delete(n);
      } else {
        a.add(n);
      }
      if (a.size === 0) {
        s.delete(o);
      } else {
        s.set(o, a);
      }
    }
    removeManagerRelation(e) {
      var i;
      var r;
      let {
        manager: n,
        value: o,
        recordId: l,
        diffMap: s,
        trackerMap: a,
        modelChangeFrom: c
      } = e;
      let u = collaborativeEditingFlowSyncModule.transformOperationsWithInvert(l);
      let h = n.getAllTempValues().has(o);
      if (h) {
        n.removeTempRelation(l, o, false);
      } else {
        n.removeRelation(l, o);
      }
      let {
        groupId: f
      } = n;
      s[f].updatedValues.add(o);
      if ((i = s[f].updatedValuesExtra) !== null && i !== undefined) {
        i.set(o, {
          modelChangeFrom: c
        });
      }
      if ((r = a[f].relationChange[u]) !== null && r !== undefined) {
        r.push({
          value: o,
          action: "remove",
          isTemp: h
        });
      }
      this.updateUpdatedRecordsMap({
        diffMap: s,
        groupId: f,
        recordId: l,
        value: o,
        isRevome: true
      });
    }
    diffAndUpdate(e, i, r, n) {
      let {
        recordId: o
      } = e;
      let l = n.get(o);
      let s = this.blockManager.getBlockStructsByRecordId(o);
      let a = s.length > 0 ? s[0] : null;
      let c = collaborativeEditingFlowSyncModule.transformOperationsWithInvert(o);
      Object.values(this.relationGroup).forEach(e => {
        let {
          groupId: n
        } = e;
        if (a && a.active) {
          e.removeRelationWioutModel(o);
          let s = e.getValuesByRecordId(o) || new Set();
          let d = e.parseValueFromBlock(a) || new Set();
          this.diffSet(s, d).forEach(s => {
            this.removeManagerRelation({
              manager: e,
              value: s,
              recordId: o,
              diffMap: i,
              trackerMap: r,
              groupId: n,
              modelChangeFrom: l
            });
            let a = i[n].deletedValuesRecordMap.get(s) || new Set();
            i[n].deletedValuesRecordMap.set(s, a.add(o));
          });
          this.diffSet(d, s).forEach(s => {
            var a;
            var d;
            e.addRelation(o, s);
            i[n].updatedValues.add(s);
            if ((a = i[n].updatedValuesExtra) !== null && a !== undefined) {
              a.set(s, {
                modelChangeFrom: l
              });
            }
            if ((d = r[n].relationChange[c]) !== null && d !== undefined) {
              d.push({
                value: s,
                action: "add",
                isTemp: false
              });
            }
            this.updateUpdatedRecordsMap({
              diffMap: i,
              groupId: n,
              recordId: o,
              value: s
            });
          });
        } else {
          var s;
          if ((s = e.getValuesByRecordId(o)) !== null && s !== undefined) {
            s.forEach(s => {
              this.removeManagerRelation({
                manager: e,
                value: s,
                recordId: o,
                diffMap: i,
                trackerMap: r,
                groupId: n,
                modelChangeFrom: l
              });
            });
          }
        }
      });
    }
    constructor() {
      S(this, "blockManager", o, this);
      S(this, "structureQueryService", l, this);
      k(this, "subs", []);
      k(this, "relationGroup", {});
      k(this, "isDataReady", false);
      k(this, "hasExcuteAllDone", false);
      k(this, "handleEditorReady", () => {
        this.isDataReady = true;
        this.initRelation();
      });
      k(this, "handleAllDone", () => {
        let e = Object.values(this.relationGroup);
        let i = this.blockManager.rootRecordId;
        let r = this.initDiffMap();
        this.structureQueryService.traverseRecord(i, i => {
          e.forEach(e => {
            let {
              id: n
            } = i;
            let {
              size: o
            } = e.getValuesByRecordId(n);
            if (o) {
              return;
            }
            let l = e.parseValueFromRecord(i);
            if (l && l.size > 0) {
              e.addRelationWioutModel(n, l);
              l.forEach(i => {
                let {
                  groupId: o
                } = e;
                r[o].updatedValues.add(i);
                this.updateUpdatedRecordsMap({
                  diffMap: r,
                  groupId: o,
                  recordId: n,
                  value: i
                });
              });
            }
          });
          return true;
        });
        this.broadcast(r);
        this.hasExcuteAllDone = true;
      });
      k(this, "handleMutations", e => {
        let {
          mutations: i,
          from: r
        } = e;
        let n = this.initDiffMap();
        let o = [];
        let l = new Map();
        let s = e => {
          let {
            block: i
          } = e;
          if (r) {
            let e = l.get(i.recordId);
            e ||= new Set();
            e.add(r);
            l.set(i.recordId, e);
          }
          o.push(i);
        };
        i.removed.forEach(s);
        i.added.forEach(s);
        i.updated.forEach(s);
        let a = this.initTrackerMap(o);
        let c = (e, i, r) => {
          let {
            block: o
          } = e;
          try {
            this.diffAndUpdate(o, n, a, l);
          } catch (e) {
            this.traceException({
              msg: "[RelationService] diffAndUpdate failed",
              diffMap: n,
              trackerMap: a,
              recordId: collaborativeEditingFlowSyncModule.transformOperationsWithInvert(o.recordId),
              pendingUpdateSet: r.map(e => collaborativeEditingFlowSyncModule.transformOperationsWithInvert(e.block.recordId)),
              ...docxEditorBlockMetadataUtils.serializeError(e)
            });
          }
        };
        i.removed.forEach(c);
        i.added.forEach(c);
        i.updated.forEach(c);
        this.broadcast(n, a);
      });
    }
  }).prototype, "blockManager", [blockManagerToken.blockManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), l = E(n.prototype, "structureQueryService", [structureQueryToken.structureQueryToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), n)) || n;
  function _() {
    docxEditorCore.registerProviders([C]);
    docxEditorCore.onInitHook(() => {
      dependencyInjectionContainer.get(relationServiceProviderName.relationServiceProviderName).init();
    });
  }
  require.d(exports, {
    registerRelationService: function () {
      return _;
    }
  });
}