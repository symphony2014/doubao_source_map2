// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'initEventCollector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 654559
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var s;
  var a;
  var c;
  var d;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var requestIdleCallbackPolyfill_1 = require("request-idle-callback-polyfill_1") /*id: 806024*/;
  var docxEventHelper = require("docx-event-helper") /*id: 997602*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var syncedRefBlockToken = require("synced-ref-block-token") /*id: 893973*/;
  function E(e, i, r) {
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
  let C = dependencyInjectionContainer.Provide(diProviderCollectEvent.collectEventName)((n = (c = class {
    init() {}
    destroy() {}
    constructor() {
      var e;
      var i;
      e = "editorAPI";
      if (i = d) {
        Object.defineProperty(this, e, {
          enumerable: i.enumerable,
          configurable: i.configurable,
          writable: i.writable,
          value: i.initializer ? i.initializer.call(this) : undefined
        });
      }
      E(this, "collectEvent", (e, i, r) => {
        let n = Object.assign({}, i, this.getExtraCommonParams());
        docxEventCollector.wrappedCollector(e, n, r);
      });
      E(this, "collectEventWithDev", (e, i) => {
        let r = Object.assign({}, i, this.getExtraCommonParams());
        docxEventCollector.wrappedCollector(`${e}_dev`, r);
      });
      E(this, "collectPageView", (e, i, r) => {
        requestIdleCallbackPolyfill_1.requestIdleCallback(() => {
          let n = this.getExtraCommonParams();
          let o = Object.assign({}, docxEventHelper.normalizeAndTransformEvent(i), r, n);
          docxEventCollector.wrappedCollector(e, o);
        });
      });
      E(this, "logToNativeEvents", new Set(["ccm_doc_mobile_menu_toolbar_click", "ccm_doc_content_page_click"]));
      E(this, "collectPageClick", (e, i, r) => {
        requestIdleCallbackPolyfill_1.requestIdleCallback(() => {
          let n = this.getExtraCommonParams();
          let o = {
            ...r,
            target: r.target || "none"
          };
          let l = Object.assign({}, docxEventHelper.normalizeAndTransformEvent(i), docxEventHelper.normalizeBlockIds(o), n);
          docxEventCollector.wrappedCollector(e, l);
          if (docxFeatureFlags.isDocsMoreEvents()) {
            this.logToNativeEvents.has(e);
          }
        });
      });
      E(this, "getExtraCommonParams", () => {
        if (syncedReferenceBlockUtils.isSyncedReferenceBlock(this.editorAPI)) {
          let e = this.editorAPI.dataService.rootRecordId;
          let i = docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE;
          let r = {
            origin_root_file_id: platformDocUtils.p5T(e),
            origin_root_file_type: i
          };
          let {
            sourceFileId: n
          } = this.getSoureFileInfo();
          if (n) {
            return {
              ...r,
              source_file_id: platformDocUtils.p5T(n),
              source_file_type: "docx"
            };
          } else {
            return r;
          }
        }
        return {};
      });
      E(this, "getSoureFileInfo", () => {
        let {
          editorAPI: e
        } = this;
        let i = e.getService(syncedRefBlockToken.syncedRefBlockToken, {
          dynamic: true
        });
        let r = i == null ? undefined : i.get();
        if (r) {
          let i = r.getSyncedReferenceBlockModel(e);
          if (i) {
            let {
              src_page_id: e
            } = i.snapshot;
            return {
              sourceFileId: e
            };
          }
        }
        return {};
      });
    }
  }).prototype, o = "editorAPI", l = [docxEditorCore.EDITOR_API_TOKEN], a = {}, Object.keys(s = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }).forEach(function (e) {
    a[e] = s[e];
  }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = true), d = (a = l.slice().reverse().reduce(function (e, i) {
    return i(n, o, e) || e;
  }, a)).initializer === undefined ? (Object.defineProperty(n, o, a), null) : a, c)) || c;
  function _() {
    docxEditorCore.registerProviders([C]);
    docxEditorCore.onInitHook(() => {
      let e = dependencyInjectionContainer.get(diProviderCollectEvent.collectEventName);
      e.init();
      return () => {
        e.destroy();
      };
    });
  }
  require.d(exports, {
    initEventCollector: function () {
      return _;
    }
  });
}