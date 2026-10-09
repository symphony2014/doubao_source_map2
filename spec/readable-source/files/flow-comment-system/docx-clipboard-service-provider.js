// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerClipboardServiceProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 219252
         */
module.exports = function (module, exports, require) {
  var o;
  var r;
  var l;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  var clipboardSecurityHandler = require("clipboard-security-handler") /*id: 558244*/;
  var toastNotificationManager_1 = require("toast-notification-manager_1") /*id: 737977*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var docxClipboardCopySettings = require("docx-clipboard-copy-settings") /*id: 357081*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var clipboardServiceProvider = require("clipboard-service-provider") /*id: 417317*/;
  function y(e, i, n, o) {
    if (n) {
      Object.defineProperty(e, i, {
        enumerable: n.enumerable,
        configurable: n.configurable,
        writable: n.writable,
        value: n.initializer ? n.initializer.call(o) : undefined
      });
    }
  }
  function C(e, i, n) {
    var o;
    if ((i = typeof (o = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var o = n.call(e, i || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, i, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = n;
    }
    return e;
  }
  function S(e, i, n, o, r) {
    var l = {};
    Object.keys(o).forEach(function (e) {
      l[e] = o[e];
    });
    l.enumerable = !!l.enumerable;
    l.configurable = !!l.configurable;
    if ("value" in l || l.initializer) {
      l.writable = true;
    }
    l = n.slice().reverse().reduce(function (n, o) {
      return o(e, i, n) || n;
    }, l);
    if (r && l.initializer !== undefined) {
      l.value = l.initializer ? l.initializer.call(r) : undefined;
      l.initializer = undefined;
    }
    if (l.initializer === undefined) {
      Object.defineProperty(e, i, l);
      return null;
    } else {
      return l;
    }
  }
  r = S((o = class {
    async init() {
      try {
        docxClipboardCopySettings.registerClipboardCopySettings(this.blockManager);
        this.bindEvents();
        if (!browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          var e;
          var i;
          if (syncUrlBlockUtils.isSyncingActive()) {
            await ((e = clipboardSecurityHandler.clipboardSecurityManager.loadClipboardSecuritySDK) === null || e === undefined ? undefined : e.call(clipboardSecurityHandler.clipboardSecurityManager));
          } else if ((i = clipboardSecurityHandler.clipboardSecurityManager.loadClipboardSecuritySDK) !== null && i !== undefined) {
            i.call(clipboardSecurityHandler.clipboardSecurityManager);
          }
        }
        this.clipboard = await this.blockManager.editorAPI.getService(clipboardServiceProvider.clipboardServiceId, {
          async: true
        });
        this.clipboard.init();
        this.unbindEvents();
        docxEventCollector.wrappedCollector("ccm_user_action_perf_dev", {
          feature: "clipboard",
          action: "TTU",
          costTime: Date.now() - performance.timing.navigationStart
        });
      } catch (e) {}
    }
    destroy() {
      this.unbindEvents();
    }
    isCopyInEditor() {
      var e;
      return docxEditorEventConstantsAndManager.globalEditorState.isTriggerredByClick || !!((e = this.selectionAPI) === null || e === undefined ? undefined : e.getSelection().length);
    }
    bindEvents() {
      document.addEventListener("copy", this.handleEvents, true);
      document.addEventListener("cut", this.handleEvents, true);
      document.addEventListener("paste", this.handleEvents, true);
    }
    unbindEvents() {
      document.removeEventListener("copy", this.handleEvents, true);
      document.removeEventListener("cut", this.handleEvents, true);
      document.removeEventListener("paste", this.handleEvents, true);
    }
    constructor() {
      y(this, "selectionAPI", r, this);
      y(this, "blockManager", l, this);
      C(this, "clipboard", undefined);
      C(this, "isToast", false);
      C(this, "handleEvents", e => {
        if (this.isCopyInEditor()) {
          e.preventDefault();
          if (!this.isToast) {
            this.isToast = true;
            toastNotificationManager_1.toastManager.loading({
              content: t("LarkCCM_Docs_PasteLoading_Toast"),
              onClose: () => this.isToast = false
            });
            docxEventCollector.wrappedCollector("ccm_user_action_perf_dev", {
              feature: "clipboard",
              action: `${e.type}_failed_toast`,
              costTime: Date.now() - performance.timing.navigationStart
            });
          }
        }
      });
    }
  }).prototype, "selectionAPI", [compatBrowserSelectionService_1.selectionServiceKey], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  l = S(o.prototype, "blockManager", [blockManagerToken.blockManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  });
  let I = o;
  function w() {
    docxEditorCore.registerProviders([{
      provide: clipboardServiceProvider.clipboardServiceId,
      useAsync: async () => {
        let {
          ClipboardImpl: e
        } = await docxTaskSchedulerUtilities.scheduleTaskWithConfig({
          name: "global.clipboardSecurity",
          action: () => Promise.all([require.e("virtual-scrolling-reconciler") /*id: 85844*/, require.e("delta-and-changeset-operations") /*id: 46252*/, require.e("vendor-utilities-bundle") /*id: 40789*/, require.e("docx-block-error-handling") /*id: 29302*/, require.e("editor-inline-embeds") /*id: 76856*/, require.e("docx-editor-clipboard") /*id: 7245*/, require.e("clipboard_module") /*id: 40603*/]).then(require.bind(require, "clipboard-service-impl") /*id: 999831*/)
        });
        return e;
      }
    }]);
    docxEditorCore.onInitHook(() => {
      let e = dependencyInjectionContainer.instantiate(I);
      e.init();
      return () => {
        e.destroy();
      };
    });
  }
  require.d(exports, {
    registerClipboardServiceProvider: function () {
      return w;
    }
  });
}