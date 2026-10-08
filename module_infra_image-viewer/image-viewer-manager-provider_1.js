// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'u' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'b' to 'dependencyInjectionContainer'
// - Resolved require(555385) to 'dependency-injection-container'
// - Renamed variable 'd' to 'platformDocUtils'
// - Resolved require(726907) to 'platform-doc-utils'
// - Renamed variable 'g' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'p' to 'reactDomEntryWrapper'
// - Resolved require(640848) to 'react-dom-entry-wrapper'
// - Renamed variable 'm' to 'behaviorSubjectClass'
// - Resolved require(263814) to 'behavior-subject-class'
// - Renamed variable 'f' to 'docxEditorConstantsConfig'
// - Resolved require(302915) to 'docx-editor-constants-config'
// - Renamed variable 'v' to 'browserEnvironmentDetectionUtils'
// - Resolved require(744607) to 'browser-environment-detection-utils'
// - Renamed variable 'w' to 'docxEventCollector'
// - Resolved require(477626) to 'docx-event-collector'
// - Renamed variable 'h' to 'blockManagerToken'
// - Resolved require(109058) to 'block-manager-token'
// - Renamed variable 'y' to 'docxSignalSubjectRegistry'
// - Resolved require(272418) to 'docx-signal-subject-registry'
// - Renamed variable 'S' to 'docxHistoryEditorLoader'
// - Resolved require(350772) to 'docx-history-editor-loader'
// - Renamed variable '_' to 'compatibleEditorContext_1'
// - Resolved require(2711) to 'compatible-editor-context_1'
// - Renamed variable 'V' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'P' to 'appTypeConstants'
// - Resolved require(214968) to 'app-type-constants'
// - Renamed variable 'A' to 'imageViewerManagerProvider'
// - Resolved require(347257) to 'image-viewer-manager-provider'
// - Updated imported property 'x' to 'compatibleContext' (module 2711)
// - Updated imported property 'E4' to 'CONFIG_TOKEN' (module 135760)
// - Updated imported property 'XO' to 'registerProviders' (module 135760)
// - Updated imported property 'Y' to 'docxSignalService' (module 272418)
// - Updated imported property 'zv' to 'imageViewLoader' (module 350772)
// - Updated imported property 'DF' to 'Provide' (module 555385)
// - Updated imported property 'j' to 'imageViewerManager' (module 347257)
// - Updated imported property 'ZP' to 'browserDetector' (module 744607)
// - Updated imported property 'Z$' to 'imageViewerSlot' (module 302915)
// - Updated imported property 'r3' to 'wrappedCollector' (module 477626)
// - Updated imported property 'X' to 'BehaviorSubject' (module 263814)
// - Updated imported property 'f' to 'getAppTypes' (module 214968)
// - Updated imported property 'n' to 'blockManagerToken' (module 109058)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_infra_image-viewer.ec8f7b6f.js
         * chunkId: 81891
         * moduleId: 441648
         */
module.exports = function (module, exports, require) {
  var t;
  var n;
  var o;
  var a;
  var l;
  var c;
  var s;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var behaviorSubjectClass = require("behavior-subject-class") /*id: 263814*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var docxSignalSubjectRegistry = require("docx-signal-subject-registry") /*id: 272418*/;
  var docxHistoryEditorLoader = require("docx-history-editor-loader") /*id: 350772*/;
  var compatibleEditorContext_1 = require("compatible-editor-context_1") /*id: 2711*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var I = e => {
    let {
      blockManager: i
    } = e;
    let {
      vcController: r
    } = i.editorAPI.getService(compatibleEditorContext_1.compatibleContext);
    let t = i.editorAPI.getService(docxEditorCore.CONFIG_TOKEN);
    let n = i.editorAPI.getService(docxSignalSubjectRegistry.docxSignalService, {
      optional: true
    });
    let o = docxHistoryEditorLoader.imageViewLoader.getModuleInstance();
    return reactJsxRuntimeCoreReexport.jsx(o, {
      blockManager: i,
      vcController: r,
      copyable: t.get("copyable"),
      commentable: t.get("commentable"),
      exportable: t.get("exportable"),
      docxSignal: n
    }, i.editorAPI.id);
  };
  var appTypeConstants = require("app-type-constants") /*id: 214968*/;
  var imageViewerManagerProvider = require("image-viewer-manager-provider") /*id: 347257*/;
  function E(e, i, r) {
    var t;
    if ((i = typeof (t = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var t = r.call(e, i || "default");
        if (typeof t != "object") {
          return t;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? t : t + "") in e) {
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
  let O = dependencyInjectionContainer.Provide(imageViewerManagerProvider.imageViewerManager)((s = class e {
    init() {
      if (browserEnvironmentDetectionUtils.browserDetector.isInVC || browserEnvironmentDetectionUtils.browserDetector.isFeishuRooms) {
        this.initImagerViewer();
      }
    }
    destroy() {
      this.subs.forEach(e => e.unsubscribe());
      let e = document.querySelector(`.${docxEditorConstantsConfig.imageViewerSlot}`);
      if (e) {
        reactDomEntryWrapper.unmountComponentAtNode(e);
      }
    }
    preload() {
      if (!e.preloaded) {
        e.preloaded = true;
        this.initImagerViewer();
      }
    }
    initImagerViewer() {
      let e = document.querySelector(`.${docxEditorConstantsConfig.imageViewerSlot}`);
      if (e) {
        reactDomEntryWrapper.render(reactCoreLibraryReexport.createElement(I, {
          blockManager: this.blockManager
        }), e);
      }
    }
    openImageViewer(e) {
      docxEventCollector.wrappedCollector("ccm_drive_page_view", {
        ...this.getLogTeaParams(e),
        time: Date.now(),
        view_type: e.type
      });
      this.initImagerViewer();
      this.openViewerSignal$.next(e);
    }
    closeImageViewer(e) {
      this.closeViewerSignal$.next(e);
    }
    addOpenViewerSubscribe(e) {
      return this.openViewerSignal$.subscribe(e);
    }
    addCloseViewerSubscribe(e) {
      return this.closeViewerSignal$.subscribe(e);
    }
    onServiceInit() {
      this.init();
    }
    onServiceDispose() {
      this.destroy();
    }
    constructor() {
      var e;
      var i;
      E(this, "openViewerSignal$", new behaviorSubjectClass.BehaviorSubject(null));
      E(this, "closeViewerSignal$", new behaviorSubjectClass.BehaviorSubject(null));
      E(this, "subs", []);
      e = "blockManager";
      if (i = c) {
        Object.defineProperty(this, e, {
          enumerable: i.enumerable,
          configurable: i.configurable,
          writable: i.writable,
          value: i.initializer ? i.initializer.call(this) : undefined
        });
      }
      E(this, "getLogTeaParams", e => {
        if (e.type === appTypeConstants.getAppTypes.IMAGE) {
          let {
            block: i
          } = e.payload;
          return {
            object_id: platformDocUtils.p5T(i.snapshot.token),
            block_id: platformDocUtils.p5T(i.record.id)
          };
        }
      });
    }
  }, E(s, "preloaded", false), t = s.prototype, n = "blockManager", o = [blockManagerToken.blockManagerToken], l = {}, Object.keys(a = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }).forEach(function (e) {
    l[e] = a[e];
  }), l.enumerable = !!l.enumerable, l.configurable = !!l.configurable, ("value" in l || l.initializer) && (l.writable = true), c = (l = o.slice().reverse().reduce(function (e, i) {
    return i(t, n, e) || e;
  }, l)).initializer === undefined ? (Object.defineProperty(t, n, l), null) : l, s)) || s;
  function $() {
    docxEditorCore.registerProviders([O]);
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return $;
    }
  });
}