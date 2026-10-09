// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'bearSignalService'
// - Renamed export 'S' to 'BearSignalProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 32433
         */
module.exports = function (module, exports, require) {
  var i;
  var bearWebSignalServiceProvider = require("bear-web-signal-service-provider") /*id: 878255*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var platformEventDefinitions = require("platform-event-definitions") /*id: 460729*/;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  function l(e, n, r) {
    var i;
    if ((n = typeof (i = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, n || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  class s {
    register(e) {
      let n = new docxEditorCore.SubjectType();
      this.eventNameMap.set(n, e);
      let r = n.next.bind(n);
      function i() {
        var e = arguments.length;
        var n = Array(e);
        var i = 0;
        for (; i < e; i++) {
          n[i] = arguments[i];
        }
        r(n);
      }
      n.next = n => {
        if (n) {
          platformDocUtils.vpe.emit(e, ...n);
        } else {
          platformDocUtils.vpe.emit(e);
        }
      };
      this.signalFnMap.set(n, i);
      platformDocUtils.vpe.on(e, i);
      return n;
    }
    destroy() {
      this.eventNameMap.forEach((e, n) => {
        n.complete();
        let r = this.signalFnMap.get(n);
        platformDocUtils.vpe.off(e, r);
      });
      this.signalFnMap.clear();
      this.eventNameMap.clear();
    }
    onServiceDispose() {
      this.destroy();
    }
    constructor() {
      l(this, "eventNameMap", new Map());
      l(this, "signalFnMap", new Map());
      l(this, "noticeRevisionPositionSignal", this.register("REVISION_POSITION_CHANGE"));
    }
  }
  function E(e, n, r) {
    var i;
    if ((n = typeof (i = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, n || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  let d = dependencyInjectionContainer.Provide(bearWebSignalServiceProvider.bearWebSignalService)(i = class extends s {
    constructor(...e) {
      super(...e);
      E(this, "viewEditorsMenuChangeSignal", this.register("viewEditorsMenuChange"));
      E(this, "enterPresentationModeSignal", this.register("enter-presentation-mode"));
      E(this, "diagramExitGraphEditorSignal", this.register("exit_graph_editor"));
      E(this, "updateDocConfigSignal", this.register(platformEventDefinitions.eventConstants.PC.DOCS.UPDATE_DOC_CONFIG));
      E(this, "historyToggleSignal", this.register(platformEventDefinitions.eventConstants.PC.DOCS.HISTORY_X.TOGGLE));
      E(this, "updateTranslateSignal", this.register("UPDATE_TRANS_TITLE"));
      E(this, "permissionChangeSignal", this.register(platformEventDefinitions.eventConstants.PC.PERMISSION.PERMISSION_CHANGE));
      E(this, "forcePermissionChangeSignal", this.register("FORCE_PERMISSION_CHANGE"));
      E(this, "docsModeSwitchListVisibleChangeSignal", this.register(platformEventDefinitions.eventConstants.PC.DOCS.DOCS_MODE.SWITCH_LIST_VISIBLE_CHANGE));
      E(this, "docsModeSwitchToReadingSignal", this.register(platformEventDefinitions.eventConstants.PC.DOCS.DOCS_MODE.SWITCH_TO_READING));
      E(this, "docsModeSwitchToEditingSignal", this.register(platformEventDefinitions.eventConstants.PC.DOCS.DOCS_MODE.SWITCH_TO_EDITING));
      E(this, "docsModeSwitchToRevisingSignal", this.register(platformEventDefinitions.eventConstants.PC.DOCS.DOCS_MODE.SWITCH_TO_REVISING));
      E(this, "syncedReferenceBlockPermissionSignal", this.register(platformEventDefinitions.eventConstants.PC.DOCS.SYNCED_REFERENCE_PERMISSION_CHANGE));
      E(this, "docxExportFileSignal", this.register(platformEventDefinitions.eventConstants.PC.COMMON.CLICK_DOCX_EXPORT_MENU));
      E(this, "fileDeletedSignal", this.register("fileOrFolderDeleted"));
      E(this, "syncedBlockSendToImSignal", this.register("SYNCED_BLOCK_SEND_TO_IM"));
      E(this, "offlineCreateSuccessSignal", this.register("CREATE_SUCCESS"));
      E(this, "paidReadModeSignal", this.register("pay-settings-save"));
    }
  }) || i;
  require.d(exports, {
    bearSignalService: function () {
      return bearWebSignalServiceProvider.bearWebSignalService;
    },
    BearSignalProvider: function () {
      return d;
    }
  });
}