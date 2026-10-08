// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'c' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'u' to 'collaborativeEditingFlowSyncModule'
// - Resolved require(756448) to 'collaborative-editing-flow-sync-module'
// - Renamed variable 'E' to 'dependencyInjectionContainer'
// - Resolved require(555385) to 'dependency-injection-container'
// - Renamed variable 'b' to 'platformDocUtils'
// - Resolved require(726907) to 'platform-doc-utils'
// - Renamed variable 'f' to 'docxErrorStatusHandler'
// - Resolved require(570520) to 'docx-error-status-handler'
// - Renamed variable 'd' to 'platformEventDefinitions'
// - Resolved require(460729) to 'platform-event-definitions'
// - Renamed variable 'O' to 'browserEnvironmentDetectionUtils'
// - Resolved require(744607) to 'browser-environment-detection-utils'
// - Renamed variable 'm' to 'offlineStatusSelectorsUtils'
// - Resolved require(564613) to 'offline-status-selectors-utils'
// - Renamed variable 'C' to 'docxNetworkToastHandler'
// - Resolved require(993997) to 'docx-network-toast-handler'
// - Renamed variable 'v' to 'docSyncConfigFlags'
// - Resolved require(934075) to 'doc-sync-config-flags'
// - Renamed variable 'A' to 'collabStatusProvider'
// - Resolved require(810854) to 'collab-status-provider'
// - Updated imported property 'ZP' to 'browserDetector' (module 744607)
// - Updated imported property 'FP' to 'eventConstants' (module 460729)
// - Updated imported property 'u' to 'SyncStatus' (module 756448)
// - Updated imported property 'Nw' to 'MessageType' (module 756448)
// - Updated imported property 'iI' to 'FlowSync' (module 756448)
// - Updated imported property 'VP' to 'isWindowOffline' (module 564613)
// - Updated imported property 's9' to 'isDocxOfflineDisabled' (module 564613)
// - Updated imported property '_' to 'toggleNetworkToast' (module 993997)
// - Updated imported property 'DF' to 'Provide' (module 555385)
// - Updated imported property 'R' to 'collabStatusName' (module 810854)
// - Updated imported property 'Gs' to 'networkAlertEnabled' (module 934075)
// - Updated imported property 'jY' to 'getFlowbaseConfig' (module 934075)
// - Updated imported property 'Up' to 'findErrorCategory' (module 570520)
// - Updated imported property 'fV' to 'errorStatusCategories' (module 570520)
// - Updated imported property 'E4' to 'CONFIG_TOKEN' (module 135760)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: collab-status.0b96422e.js
         * chunkId: 64204
         * moduleId: 497961
         */
module.exports = function (module, exports, require) {
  var n;
  var s;
  var r;
  var l;
  var a;
  var o;
  var h;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docxErrorStatusHandler = require("docx-error-status-handler") /*id: 570520*/;
  var platformEventDefinitions = require("platform-event-definitions") /*id: 460729*/;
  let S = {
    INTERVARL_UPDATE_TIME: "intervalUpdateDate",
    UPDATE_EDIT_TIME: "updateEditTime",
    EDITTIME_UPDATE_FROM_TYPE: {
      SHEET: "sheet",
      DOCX: "docx",
      BASE: "base",
      WHITEBOARD: "whiteboard",
      MINDNOTE: "mindnote"
    }
  };
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var offlineStatusSelectorsUtils = require("offline-status-selectors-utils") /*id: 564613*/;
  var docxNetworkToastHandler = require("docx-network-toast-handler") /*id: 993997*/;
  let _ = (e, i) => {
    if (i && !browserEnvironmentDetectionUtils.browserDetector.isMobile) {
      if (e) {
        platformDocUtils.vpe.emit(platformEventDefinitions.eventConstants.PC.DOCS.SYNC_NOTE_META, {
          type: "OFFLINE"
        });
      } else {
        platformDocUtils.vpe.emit(platformEventDefinitions.eventConstants.PC.DOCS.SYNC_NOTE_META, {
          type: "CLEAR"
        });
      }
    }
  };
  let p = (e, i, t) => {
    let {
      EDITTIME_UPDATE_FROM_TYPE: n
    } = S;
    switch (e) {
      case collaborativeEditingFlowSyncModule.SyncStatus.NEW_CHANGES:
      case collaborativeEditingFlowSyncModule.SyncStatus.USER_CHANGES:
        platformDocUtils.vpe.emit(platformEventDefinitions.eventConstants.PC.DOCS.SYNC_NOTE_META, {
          type: e,
          editTime: t,
          from: n.DOCX
        });
        break;
      case collaborativeEditingFlowSyncModule.SyncStatus.ACCEPT_COMMIT:
        platformDocUtils.vpe.emit(platformEventDefinitions.eventConstants.PC.DOCS.SYNC_NOTE_META, {
          type: e,
          editTime: t,
          from: n.DOCX
        });
        if (offlineStatusSelectorsUtils.isWindowOffline() && offlineStatusSelectorsUtils.isDocxOfflineDisabled()) {
          return;
        }
        docxNetworkToastHandler.toggleNetworkToast(true);
        break;
      case collaborativeEditingFlowSyncModule.SyncStatus.ERROR:
        _(true, i);
        if (offlineStatusSelectorsUtils.isWindowOffline() && offlineStatusSelectorsUtils.isDocxOfflineDisabled()) {
          return;
        }
        docxNetworkToastHandler.toggleNetworkToast(false);
        break;
      default:
        return;
    }
  };
  var docSyncConfigFlags = require("doc-sync-config-flags") /*id: 934075*/;
  var collabStatusProvider = require("collab-status-provider") /*id: 810854*/;
  function T(e, i, t) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var t = e[Symbol.toPrimitive];
      if (t !== undefined) {
        var n = t.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, i, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = t;
    }
    return e;
  }
  let N = dependencyInjectionContainer.Provide(collabStatusProvider.collabStatusName)((n = (o = class {
    init(e) {
      this.collab = e;
      let i = e.signalService.colabInitSignal.subscribe(this.initEvents);
      this.subs.push(i);
    }
    onServiceDispose() {
      this.collab.off(collaborativeEditingFlowSyncModule.MessageType.Exception, this.handleException);
      this.collab.off(collaborativeEditingFlowSyncModule.MessageType.AcceptCommit, this.handleAcceptCommit);
      let {
        sync: e
      } = this.collab;
      if (e) {
        e.off(collaborativeEditingFlowSyncModule.GM.Error, this.handleSyncError);
        e.off(collaborativeEditingFlowSyncModule.GM.UserChanges, this.handleUserChanges);
      }
      this.subs.forEach(e => e.unsubscribe());
      window.removeEventListener("online", this.handleOnline);
      window.removeEventListener("offline", this.handleOffline);
    }
    get isAllSubmitted() {
      return !this.collab.getSubmitted().size && !this.collab.getUnSubmitted().size;
    }
    get isOfflineStatus() {
      return this.isSyncError || !this.isOnline;
    }
    get editbale() {
      return this.config.editable;
    }
    constructor() {
      var e;
      var i;
      T(this, "collab", undefined);
      T(this, "subs", []);
      T(this, "isSyncError", false);
      T(this, "isOnline", true);
      T(this, "errorTimes", 0);
      e = "config";
      if (i = h) {
        Object.defineProperty(this, e, {
          enumerable: i.enumerable,
          configurable: i.configurable,
          writable: i.writable,
          value: i.initializer ? i.initializer.call(this) : undefined
        });
      }
      T(this, "initEvents", e => {
        if (!e || platformDocUtils.KNd()) {
          return;
        }
        if (docSyncConfigFlags.networkAlertEnabled) {
          this.collab.on(collaborativeEditingFlowSyncModule.MessageType.Exception, this.handleException);
          this.collab.sync.on(collaborativeEditingFlowSyncModule.GM.Error, this.handleSyncError);
          window.addEventListener("online", this.handleOnline);
          window.addEventListener("offline", this.handleOffline);
        }
        this.collab.on(collaborativeEditingFlowSyncModule.MessageType.AcceptCommit, this.handleAcceptCommit);
        this.collab.sync.on(collaborativeEditingFlowSyncModule.GM.UserChanges, this.handleUserChanges);
        let i = this.collab.signalService.newChangeEndSignal.subscribe(this.handleNewChangeEnd);
        this.subs.push(i);
      });
      T(this, "handleException", () => {
        if (!this.isOfflineStatus) {
          p(collaborativeEditingFlowSyncModule.SyncStatus.ERROR, this.editbale);
        }
      });
      T(this, "handleSyncError", e => {
        if (!this.isOfflineStatus && !this.isSyncError && this.editbale && e.type === collaborativeEditingFlowSyncModule.FlowSync.RESPONSE_ERROR && e.requestType === collaborativeEditingFlowSyncModule.SyncStatus.USER_CHANGES && docxErrorStatusHandler.findErrorCategory(e.code) === docxErrorStatusHandler.errorStatusCategories.NotOops) {
          this.errorTimes++;
          if (!(this.errorTimes < docSyncConfigFlags.getFlowbaseConfig().error_times_to_offline)) {
            p(collaborativeEditingFlowSyncModule.SyncStatus.ERROR, this.editbale);
            this.isSyncError = true;
          }
        }
      });
      T(this, "handleNewChangeEnd", e => {
        let {
          editTime: i
        } = e;
        if (!this.isOfflineStatus) {
          p(collaborativeEditingFlowSyncModule.SyncStatus.NEW_CHANGES, this.editbale, i);
        }
      });
      T(this, "handleUserChanges", () => {
        if (!this.isOfflineStatus) {
          p(collaborativeEditingFlowSyncModule.SyncStatus.USER_CHANGES, this.editbale);
        }
      });
      T(this, "handleAcceptCommit", e => {
        this.isSyncError = false;
        if (this.isAllSubmitted) {
          p(collaborativeEditingFlowSyncModule.SyncStatus.ACCEPT_COMMIT, this.editbale, e.editTime);
        }
      });
      T(this, "handleOnline", () => {
        this.isOnline = true;
        if (!this.isSyncError && this.isAllSubmitted) {
          _(false, this.editbale);
        }
      });
      T(this, "handleOffline", () => {
        this.isOnline = false;
        if (!this.isSyncError) {
          _(true, this.editbale);
        }
      });
    }
  }).prototype, s = "config", r = [docxEditorCore.CONFIG_TOKEN], a = {}, Object.keys(l = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }).forEach(function (e) {
    a[e] = l[e];
  }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = true), h = (a = r.slice().reverse().reduce(function (e, i) {
    return i(n, s, e) || e;
  }, a)).initializer === undefined ? (Object.defineProperty(n, s, a), null) : a, o)) || o;
  require.r(exports);
  require.d(exports, {
    CollabStatusServiceImpl: function () {
      return N;
    }
  });
}