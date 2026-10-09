// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'l' to 'dependencyInjectionContainer'
// - Resolved require(555385) to 'dependency-injection-container'
// - Renamed variable 's' to 'docxAnalyticsEventTracker'
// - Resolved require(739703) to 'docx-analytics-event-tracker'
// - Renamed variable 'c' to 'blockManagerToken'
// - Resolved require(109058) to 'block-manager-token'
// - Renamed variable 'u' to 'deferredPromiseFactory_1'
// - Resolved require(397926) to 'deferred-promise-factory_1'
// - Renamed variable 'd' to 'docxFeatStatusProvider'
// - Resolved require(125704) to 'docx-feat-status-provider'
// - Renamed variable 'h' to 'hookServiceDiConstants_1'
// - Resolved require(439395) to 'hook-service-di-constants_1'
// - Renamed variable 'v' to 'moduleSettingProviderToken'
// - Resolved require(609239) to 'module-setting-provider-token'
// - Renamed variable 'g' to 'blockSchemaServiceToken'
// - Resolved require(918119) to 'block-schema-service-token'
// - Renamed variable 'p' to 'typescriptRuntimeHelpers'
// - Resolved require(4100) to 'typescript-runtime-helpers'
// - Renamed variable 'E' to 'collaborativeEditingFlowSyncModule'
// - Resolved require(756448) to 'collaborative-editing-flow-sync-module'
// - Renamed variable 'm' to 'flowDocEventCollector'
// - Resolved require(276732) to 'flow-doc-event-collector'
// - Renamed variable 'R' to 'deepCloneWrapper_1'
// - Resolved require(391722) to 'deep-clone-wrapper_1'
// - Renamed variable 'S' to 'isErrorUtil'
// - Resolved require(597114) to 'is-error-util'
// - Renamed variable '_' to 'docxReactUpdateWrapper'
// - Resolved require(668243) to 'docx-react-update-wrapper'
// - Renamed variable 'A' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'O' to 'blockSettingResolver'
// - Resolved require(272995) to 'block-setting-resolver'
// - Renamed variable 'I' to 'diProviderCollectEvent'
// - Resolved require(308105) to 'di-provider-collect-event'
// - Updated imported property 'f' to 'deferredPromise' (module 397926)
// - Updated imported property 'M' to 'featStatusProvider' (module 125704)
// - Updated imported property 'e' to 'moduleSettingToken' (module 609239)
// - Updated imported property 't9' to 'hookActionTypes' (module 439395)
// - Updated imported property 'MR' to 'EditorInitStatus' (module 135760)
// - Updated imported property 'XO' to 'registerProviders' (module 135760)
// - Updated imported property 'nc' to 'onInitHook' (module 135760)
// - Updated imported property 'N' to 'trackDocxAnalyticsEvent' (module 739703)
// - Updated imported property 'V' to 'collectEventName' (module 308105)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'DF' to 'Provide' (module 555385)
// - Updated imported property 'f3' to 'get' (module 555385)
// - Updated imported property 'h' to 'blockSchemaService' (module 918119)
// - Updated imported property 't' to 'DocxUpdateWrapper' (module 668243)
// - Updated imported property 'pI' to 'getBlockSetting' (module 272995)
// - Updated imported property 'R7' to 'transformOperationsWithInvert' (module 756448)
// - Updated imported property 'Z' to 'deepClone' (module 391722)
// - Updated imported property 'Z' to 'isError' (module 597114)
// - Updated imported property 'r' to 'collectEvent' (module 276732)
// - Updated imported property 'gn' to 'metadata' (module 4100)
// - Updated imported property 'fM' to 'decorate' (module 4100)
// - Updated imported property 'w6' to 'reflectMetadata' (module 4100)
// - Updated imported property 'n' to 'blockManagerToken' (module 109058)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_infra_schema.52ace0f4.js
         * chunkId: 80645
         * moduleId: 137594
         */
module.exports = function (module, exports, require) {
  var i;
  var o;
  var n;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var docxAnalyticsEventTracker = require("docx-analytics-event-tracker") /*id: 739703*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var deferredPromiseFactory_1 = require("deferred-promise-factory_1") /*id: 397926*/;
  var docxFeatStatusProvider = require("docx-feat-status-provider") /*id: 125704*/;
  var hookServiceDiConstants_1 = require("hook-service-di-constants_1") /*id: 439395*/;
  var moduleSettingProviderToken = require("module-setting-provider-token") /*id: 609239*/;
  async function f(e) {
    let t = deferredPromiseFactory_1.deferredPromise();
    let r = e.editorAPI.getService(docxFeatStatusProvider.featStatusProvider);
    let i = e.editorAPI.getService(moduleSettingProviderToken.moduleSettingToken);
    if (r.getFeatureStatus(hookServiceDiConstants_1.hookActionTypes.SCHEMA) === docxEditorCore.EditorInitStatus.INIT) {
      e.editorAPI.featureService.loadFeatureConfigs(hookServiceDiConstants_1.hookActionTypes.SCHEMA, e => {
        e.forEach(e => {
          i.addBlockSetting(e);
        });
        t.resolve(e);
      }, e => {
        docxAnalyticsEventTracker.trackDocxAnalyticsEvent("register_schema_setting_error", {
          error: e.message
        });
        t.reject(e);
      });
    }
    return t.promise;
  }
  var blockSchemaServiceToken = require("block-schema-service-token") /*id: 918119*/;
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var flowDocEventCollector = require("flow-doc-event-collector") /*id: 276732*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var isErrorUtil = require("is-error-util") /*id: 597114*/;
  var docxReactUpdateWrapper = require("docx-react-update-wrapper") /*id: 668243*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var blockSettingResolver = require("block-setting-resolver") /*id: 272995*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  function b(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  let y = "ccm_doc_block_schema_dev";
  (i = {}).INIT = "INIT";
  i.DESTROY = "DESTROY";
  i.BLOCK_OOPS_ERROR = "BLOCK_OOPS_ERROR";
  i.ESCAPE = "ESCAPE";
  i.INVALID = "INVALID";
  i.VALIDATE_ERROR = "VALIDATE_ERROR";
  let M = i;
  class T {
    log(e) {
      switch (e.action) {
        case M.BLOCK_OOPS_ERROR:
        case M.VALIDATE_ERROR:
          let {
            action: t,
            info: r
          } = e;
          this.collectEventService.collectEvent(y, {
            action: t,
            info: r
          });
          return;
        case M.ESCAPE:
          {
            let {
              info: {
                blockType: t,
                transactionName: r,
                reason: i
              },
              action: o
            } = e;
            if (this.escapedBlockType.has(t)) {
              return;
            }
            this.escapedBlockType.add(t);
            this.collectEventService.collectEvent(y, {
              action: o,
              info: i,
              blockType: t,
              transactionName: r
            });
            return;
          }
        case M.INVALID:
          {
            let {
              info: {
                snapshot: t,
                blockType: r,
                error: i,
                transactionName: o,
                recordId: n
              },
              action: a
            } = e;
            this.collectEventService.collectEvent(y, {
              action: a,
              recordId: n,
              info: t,
              blockType: r,
              error: i,
              transactionName: o
            });
            return;
          }
        default:
          this.collectEventService.collectEvent(y, {
            ...e,
            info: "collect log name is miss"
          });
      }
    }
    constructor(e) {
      b(this, "collectEventService", undefined);
      b(this, "escapedBlockType", new Set());
      this.collectEventService = e.editorAPI.getService(diProviderCollectEvent.collectEventName);
    }
  }
  function D(e, t, r) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  let L = [docBlockTypeConstants.blockTypeConstants.MEEGO];
  let P = dependencyInjectionContainer.Provide(blockSchemaServiceToken.blockSchemaService)((n = class {
    init(e) {
      docxReactUpdateWrapper.DocxUpdateWrapper.getInstance().setHook(this.handleTransactionComplete);
      this.validatorMap = new Map();
      for (let t of e) {
        let {
          blockType: e
        } = t;
        let r = blockSettingResolver.getBlockSetting(e, this.blockManager, "getSchemaValidator");
        if (r) {
          this.validatorMap.set(e, r());
        }
        let i = blockSettingResolver.getBlockSetting(e, this.blockManager, "getSchemaRule");
        if (i) {
          this.addCustomRule(e, i());
        }
      }
      this.logger.log({
        action: M.INIT
      });
    }
    onServiceDispose() {
      this.destroy();
    }
    handleValidateError(e) {
      let {
        result: t,
        recordOp: r,
        blockType: i,
        transactionName: o
      } = e;
      let n = t.errors.map(e => e.error).join(",");
      this.logger.log({
        action: M.INVALID,
        info: {
          recordId: collaborativeEditingFlowSyncModule.transformOperationsWithInvert(r.record.id),
          snapshot: function (e) {
            try {
              let r = deepCloneWrapper_1.deepClone(e);
              r.parent_id = collaborativeEditingFlowSyncModule.transformOperationsWithInvert(r.parent_id ?? "");
              r.children &&= r.children.map(e => collaborativeEditingFlowSyncModule.transformOperationsWithInvert(e));
              if (r == null ? undefined : r.text) {
                r.text.initialAttributedTexts.text = {};
              }
              return JSON.stringify(r);
            } catch (e) {
              if (isErrorUtil.isError(e)) {
                flowDocEventCollector.collectEvent("doc_bug_track_dev", {
                  action: "genSnapshotError",
                  info: {
                    e: (e == null ? undefined : e.message) ?? ""
                  }
                });
              }
              return "";
            }
          }(r.record.snapshot),
          error: n,
          blockType: i,
          transactionName: o
        }
      });
      return n;
    }
    addCustomRule(e, t) {
      let i = this.customRulesMap.get(e) ?? [];
      this.customRulesMap.set(e, [...i, t]);
    }
    constructor(e) {
      D(this, "validatorMap", new Map());
      D(this, "customRulesMap", new Map());
      D(this, "logger", undefined);
      D(this, "blockManager", undefined);
      D(this, "destroy", () => {
        docxReactUpdateWrapper.DocxUpdateWrapper.getInstance().setHook(undefined);
        this.logger.log({
          action: M.DESTROY
        });
      });
      D(this, "handleTransactionComplete", (e, t, r) => {
        let {
          from: i
        } = r;
        if (i !== collaborativeEditingFlowSyncModule.kq.LOCAL && i !== collaborativeEditingFlowSyncModule.kq.TEMPORARY) {
          return;
        }
        let o = this.validate(e, t);
        if (o) {
          throw Error(o);
        }
      });
      D(this, "validate", (e, t) => {
        try {
          for (let r of e) {
            let i = r.record.snapshot.type;
            let o = this.validatorMap.get(i);
            let n = this.customRulesMap.get(i);
            if (!o && !n) {
              if (!L.includes(i)) {
                this.logger.log({
                  action: M.ESCAPE,
                  info: {
                    reason: "have not validator",
                    blockType: i,
                    transactionName: t
                  }
                });
              }
              continue;
            }
            if (o) {
              let e = o.validate(r.record.snapshot);
              if (!e.valid) {
                return this.handleValidateError({
                  result: e,
                  recordOp: r,
                  blockType: i,
                  transactionName: t
                });
              }
            }
            if (n) {
              for (let o of n) {
                let n = o(r, e);
                if (!n.valid) {
                  return this.handleValidateError({
                    result: n,
                    recordOp: r,
                    blockType: i,
                    transactionName: t
                  });
                }
              }
            }
          }
        } catch (e) {
          this.logger.log({
            action: M.VALIDATE_ERROR,
            info: JSON.stringify(e)
          });
        }
      });
      this.blockManager = e;
      this.logger = new T(this.blockManager);
    }
  }, o = n = typescriptRuntimeHelpers.metadata([typescriptRuntimeHelpers.decorate(0, blockManagerToken.blockManagerToken), typescriptRuntimeHelpers.reflectMetadata("design:type", Function), typescriptRuntimeHelpers.reflectMetadata("design:paramtypes", [undefined])], n))) || o;
  function C() {
    docxEditorCore.registerProviders([P]);
    docxEditorCore.onInitHook(() => {
      let e = dependencyInjectionContainer.get(blockSchemaServiceToken.blockSchemaService);
      f(dependencyInjectionContainer.get(blockManagerToken.blockManagerToken)).then(t => e.init(t)).catch(e => {
        docxAnalyticsEventTracker.trackDocxAnalyticsEvent("init_schema_service_error", {
          error: e.message
        });
      });
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return C;
    }
  });
}