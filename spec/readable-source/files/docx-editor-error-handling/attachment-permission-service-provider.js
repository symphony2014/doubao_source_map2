// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerAttachmentPermissionService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 557872
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docBlockTokenExtractor = require("doc-block-token-extractor") /*id: 128453*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var blockManagerToken = require("block-manager-token") /*id: 109058*/;
  var flowSourceUrlValidator = require("flow-source-url-validator") /*id: 352044*/;
  var attachmentPermissionService = require("attachment-permission-service") /*id: 275142*/;
  function v(e, i, r, n) {
    if (r) {
      Object.defineProperty(e, i, {
        enumerable: r.enumerable,
        configurable: r.configurable,
        writable: r.writable,
        value: r.initializer ? r.initializer.call(n) : undefined
      });
    }
  }
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
  function y(e, i, r, n, o) {
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
  let S = dependencyInjectionContainer.Provide(attachmentPermissionService.attachmentPermSvc)((o = y((n = class {
    async init() {
      if (!this.hasInit) {
        this.hasInit = true;
        await this.fetchBlockTreeAuth();
        this.collectEventService.collectEvent("doc_bug_track_dev", {
          action: "attachment_permission_service_init"
        });
      }
    }
    async fetchBlockTreeAuth() {
      let e = [];
      this.blockManager.dataService.getRecordMap().forEach((i, r) => {
        if (docBlockTypeConstants.imageFileTypes.includes(i.snapshot.type)) {
          let n = this.getBlockToken(i);
          if (n) {
            e.push({
              token: n
            });
            this.blockTokenRecordIDMap[n] = r;
            this.fetchedBlockTokenStatusMap[n] = false;
          }
        }
      });
      if (!this.authRequestManager) {
        await this.initAuthRequestManager();
      }
      let i = syncedReferenceBlockUtils.getBlockTokenWithFallback(this.blockManager.editorAPI, false, true);
      if (!i) {
        return;
      }
      let r = {
        token: i,
        type: syncedReferenceBlockUtils.getSyncedBlockFileType(this.blockManager.editorAPI)
      };
      this.authRequestManager.batchFetchAuth({
        parentObj: r,
        authObjs: e,
        callback: this.handleFetchCallback
      });
    }
    async fetchBlockAuthStatus(e, i) {
      if (this.fetchedBlockTokenStatusMap[e] !== undefined) {
        return true;
      }
      if (!this.authRequestManager) {
        await this.initAuthRequestManager();
      }
      if (i) {
        this.blockTokenRecordIDMap[e] = i;
      }
      let r = syncedReferenceBlockUtils.getBlockTokenWithFallback(this.blockManager.editorAPI);
      if (!r) {
        return;
      }
      let n = {
        token: r,
        type: syncedReferenceBlockUtils.getSyncedBlockFileType(this.blockManager.editorAPI)
      };
      this.authRequestManager.fetchAuth({
        parentObj: n,
        authObj: {
          token: e
        },
        callback: this.handleFetchCallback
      });
    }
    async forceFetchBlockAuthStatus(e) {
      if (!this.authRequestManager) {
        await this.initAuthRequestManager();
      }
      let i = syncedReferenceBlockUtils.getBlockTokenWithFallback(this.blockManager.editorAPI);
      if (!i) {
        return;
      }
      let r = {
        token: i,
        type: syncedReferenceBlockUtils.getSyncedBlockFileType(this.blockManager.editorAPI)
      };
      this.authRequestManager.fetchAuth({
        parentObj: r,
        authObj: {
          token: e
        },
        callback: this.handleFetchCallback
      });
    }
    destroy() {
      this.hasInit = false;
      this.fetchedBlockTokenStatusMap = {};
      this.blockTokenRecordIDMap = {};
    }
    onServiceDispose() {
      this.destroy();
    }
    constructor() {
      v(this, "blockManager", o, this);
      v(this, "collectEventService", l, this);
      b(this, "hasInit", false);
      b(this, "fetchedBlockTokenStatusMap", {});
      b(this, "blockTokenRecordIDMap", {});
      b(this, "authRequestManager", undefined);
      b(this, "initAuthRequestManager", async () => {
        this.authRequestManager = await platformDocUtils.yfB();
      });
      b(this, "getAttachmentPermissionReady", e => !!this.fetchedBlockTokenStatusMap[e]);
      b(this, "handleFetchCallback", e => {
        let {
          token: i
        } = e;
        if (typeof i == "string") {
          this.fetchedBlockTokenStatusMap[i] = true;
        } else {
          i.forEach(e => {
            this.fetchedBlockTokenStatusMap[e] = true;
          });
        }
        Object.keys(this.fetchedBlockTokenStatusMap).forEach(e => {
          let i = this.blockTokenRecordIDMap[e];
          if (i) {
            let [e] = this.blockManager.getBlockViewsByRecordId(i);
            if ((e == null ? undefined : e.type) === docBlockTypeConstants.blockTypeConstants.IMAGE) {
              e.setAuthReady();
            }
          }
        });
        this.collectEventService.collectEvent("doc_bug_track_dev", {
          action: "fetch_attachment_permission_callback"
        });
      });
      b(this, "getBlockToken", e => docBlockTokenExtractor.getBlockToken(e));
      b(this, "setDLPUploadCheckCallback", (e, i) => {
        var r;
        if ((r = platformDocUtils.Vni.setFetchCallback) !== null && r !== undefined) {
          r.call(platformDocUtils.Vni, e, i);
        }
      });
      b(this, "deleteDLPUploadCheckCallback", (e, i) => {
        platformDocUtils.Vni.deleteFetchCallback(e, i);
      });
      b(this, "fetchSrcCodeResult", async e => await flowSourceUrlValidator.validateSourceUrl(e));
    }
  }).prototype, "blockManager", [blockManagerToken.blockManagerToken], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), l = y(n.prototype, "collectEventService", [diProviderCollectEvent.collectEventName], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), n)) || n;
  function k() {
    docxEditorCore.registerProviders([S]);
  }
  require.d(exports, {
    registerAttachmentPermissionService: function () {
      return k;
    }
  });
}