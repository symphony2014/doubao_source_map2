// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerIdleTrigger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 554688
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var s;
  var a;
  var c;
  var d;
  var u;
  var h;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var businessStageConstants = require("business-stage-constants") /*id: 187074*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var lazyRecordStatusToken = require("lazy-record-status-token") /*id: 931385*/;
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  var idleTaskScheduler = require("idle-task-scheduler") /*id: 580927*/;
  var stageConstant = require("stage-constant") /*id: 199969*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var docBlockTypeConfig = require("doc-block-type-config") /*id: 558922*/;
  var docxImageUrlResolver = require("docx-image-url-resolver") /*id: 323878*/;
  var throttledOrderByUtil = require("throttled-order-by-util") /*id: 363890*/;
  let I = "DOCX_IDLE_RESOURCE_CONTROLLER";
  function M() {
    let e = {};
    try {
      e = JSON.parse(localStorage.getItem(I) || "{}");
    } catch (e) {}
    return e;
  }
  function T(e, i, r) {
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
  let w = new class {
    onResourceLoad(e) {
      var r;
      if (e.blockTypes.length === 0) {
        return;
      }
      let n = (r = window.bearGarr) === null || r === undefined ? undefined : r.docx?.version;
      if (n && docxImageUrlResolver.resolveImageUrl) {
        e.blockTypes.filter(e => docBlockTypeConfig.supportedBlockTypes.includes(e)).forEach(e => this.pendingIds.add(e));
        this.throttleSetCache(n);
      }
    }
    shouldPreloadResource(e, i) {
      let r = i.group.blockTypes;
      return !r.length || !docxImageUrlResolver.resolveImageUrl || !!r.every(e => docBlockTypeConfig.supportedBlockTypes.includes(e)) && !r.every(i => e.includes(i));
    }
    constructor() {
      T(this, "pendingIds", new Set());
      T(this, "throttleSetCache", debounceUtilWrapper.createDebounce(e => {
        if (this.pendingIds.size !== 0) {
          (function (e, i) {
            let r = M();
            let n = r[e];
            n ||= {
              uniqueIds: [],
              timestamp: Date.now()
            };
            let o = new Set(n.uniqueIds);
            i.forEach(e => {
              o.add(e);
            });
            if (Object.keys(r).length >= docBlockTypeConfig.maxBlockCount) {
              r = throttledOrderByUtil.throttledOrderBy(Object.keys(r), "timestamp").slice(1, docBlockTypeConfig.maxBlockCount).reduce((e, i) => {
                e[i] = r[i];
                return e;
              }, {});
            }
            localStorage.setItem(I, JSON.stringify({
              ...r,
              [e]: {
                uniqueIds: Array.from(o),
                timestamp: Date.now()
              }
            }));
          })(e, Array.from(this.pendingIds));
          this.pendingIds.clear();
        }
      }, docBlockTypeConfig.blockLimit));
    }
  }();
  function B(e, i, r) {
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
  c = dependencyInjectionContainer.Dynamic();
  h = class {
    init(e) {
      this.scheduler = e;
    }
    bootstrapModule(e, i, r) {
      this.scheduler.bootstrapModule(e, Object.assign({
        autoRetry: true
      }, i), r);
    }
    run(e) {
      let i = e.entries();
      let r = i.next();
      while (!r.done) {
        let [e, n = {}] = r.value;
        if (this.shouldSkipModule(e, n)) {
          r = i.next();
          continue;
        }
        if (n.stage === businessStageConstants.businessConstants.DocxStage.idle) {
          this.idleWorker.addTask(i => {
            this.bootstrapModule(e, n, i);
          });
        } else {
          this.bootstrapModule(e, n);
        }
        r = i.next();
      }
      if (!docxFeatureFlags.isMobileDisableIdleWorker()) {
        this.idleWorker.start();
      }
    }
    watchModules() {
      let e = this.moduleService.moduleComplete$.subscribe(e => {
        let {
          module: i,
          error: r
        } = e;
        if (!r) {
          w.onResourceLoad(i);
        }
      });
      this.subs.push(e);
    }
    shouldSkipModule(e, i) {
      return !!this.shouldSkipEditable(e) || !(e.group.blockTypes.length <= 0) && (!!docComponentFeatureFlags.isSyncedBlockOpt() || !!this.shouldSkipIdleModule(e, i) || undefined);
    }
    shouldSkipEditable(e) {
      if (docxFeatureFlags.isP7Enabled() && e.editMode === docxEditorCore.EditMode.EDITABLE && ["editable_required", "editable_delay"].includes(e.editableTrigger || "")) {
        return true;
      }
    }
    shouldSkipIdleModule(e, i) {
      var n;
      if (!docxImageUrlResolver.resolveImageUrl) {
        return false;
      }
      let o = (n = window.bearGarr) === null || n === undefined ? undefined : n.docx?.version;
      let l = M()[o];
      return !!o && !!l && (i.stage === businessStageConstants.businessConstants.DocxStage.idle ? !!w.shouldPreloadResource(l.uniqueIds, e) == false : undefined);
    }
    start(e) {
      if (e) {
        if (this.scheduler.registry.getModulesByProvider(lazyRecordStatusToken.lazyRecordStatus)) {
          this.lazyRecord.then(i => {
            i.postFetchAllowEdit$.subscribe(() => {
              this.run(e);
            });
          });
        } else {
          this.run(e);
        }
      }
    }
    stop() {
      this.idleWorker.destroy();
      this.subs.forEach(e => e.unsubscribe());
      this.subs = [];
    }
    constructor(e) {
      var i;
      var r;
      B(this, "name", stageConstant.stage);
      B(this, "scheduler", undefined);
      B(this, "idleWorker", new idleTaskScheduler.IdleTaskScheduler());
      B(this, "subs", []);
      i = "lazyRecord";
      if (r = u) {
        Object.defineProperty(this, i, {
          enumerable: r.enumerable,
          configurable: r.configurable,
          writable: r.writable,
          value: r.initializer ? r.initializer.call(this) : undefined
        });
      }
      B(this, "moduleService", undefined);
      this.moduleService = e;
      this.watchModules();
    }
  };
  n = (d = h = typescriptRuntimeHelpers.metadata([typescriptRuntimeHelpers.decorate(0, docxEditorCore.MODULE_MGR_TOKEN), typescriptRuntimeHelpers.reflectMetadata("design:type", Function), typescriptRuntimeHelpers.reflectMetadata("design:paramtypes", [undefined])], h)).prototype;
  o = "lazyRecord";
  l = [c, lazyRecordStatusToken.lazyRecordStatus];
  a = {};
  Object.keys(s = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }).forEach(function (e) {
    a[e] = s[e];
  });
  a.enumerable = !!a.enumerable;
  a.configurable = !!a.configurable;
  if ("value" in a || a.initializer) {
    a.writable = true;
  }
  u = (a = l.slice().reverse().reduce(function (e, i) {
    return i(n, o, e) || e;
  }, a)).initializer === undefined ? (Object.defineProperty(n, o, a), null) : a;
  let P = d;
  function L() {
    docxEditorCore.registerTrigger(() => dependencyInjectionContainer.instantiate(P));
  }
  require.d(exports, {
    registerIdleTrigger: function () {
      return L;
    }
  });
}