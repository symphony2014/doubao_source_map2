// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerMentionUserProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 532747
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
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var fileNodeSelectorUtils = require("file-node-selector-utils") /*id: 696977*/;
  var i18nInitializationUtils = require("i18n-initialization-utils") /*id: 379142*/;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var docComponentStubConfig = require("doc-component-stub-config") /*id: 436674*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var k = new class {
    initUserPermission() {
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        if (docComponentStubConfig.emptyObject_3 !== null && docComponentStubConfig.emptyObject_3 !== undefined) {
          docComponentStubConfig.emptyObject_3.rebuildUserPermissionManager(true);
        }
      }
    }
    addUserPermission(e, i) {
      platformDocUtils.mmT.addUser(e, i);
    }
    hasUser(e) {
      return platformDocUtils.mmT.hasUser(e);
    }
    fetchUserPermissions(e) {
      var i;
      if ((i = platformDocUtils.mmT.userPermissionManager) === null || i === undefined) {
        return undefined;
      } else {
        return i.fetchUserPermissions(e);
      }
    }
    getPermissionByUser(e) {
      var i;
      if ((i = platformDocUtils.mmT.userPermissionManager) === null || i === undefined) {
        return undefined;
      } else {
        return i.getPermissionByUser(e);
      }
    }
    removeUserPermission(e) {
      platformDocUtils.mmT.removeUser(e);
    }
  }();
  var docxUserDetailManager = require("docx-user-detail-manager") /*id: 794466*/;
  var syncedReferenceBlockUtil = require("synced-reference-block-util") /*id: 759293*/;
  var docxI18nLoaderUtils = require("docx-i18n-loader-utils") /*id: 619747*/;
  var mentionNotificationApiService = require("mention-notification-api-service") /*id: 610637*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  let T = e => objectPathGetDefault.getObjectPathDefault(e, "appState.permissionUserMap", {});
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var eventEmitterProviderNameExport = require("event-emitter-provider-name-export") /*id: 889973*/;
  var lazyRecordStatusToken = require("lazy-record-status-token") /*id: 931385*/;
  var relationServiceProviderName = require("relation-service-provider-name") /*id: 233471*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var docMentionManager = require("doc-mention-manager") /*id: 682074*/;
  var docBlockPermissionUtils = require("doc-block-permission-utils") /*id: 954681*/;
  var mentionUserServiceProvider = require("mention-user-service-provider") /*id: 326879*/;
  function F(e, i, r) {
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
  let j = dependencyInjectionContainer.Provide(mentionUserServiceProvider.mentionUserSvcKey)((u = class {
    get hasMentionData() {
      return this.isHasMentionUserData;
    }
    init() {
      if (!docBlockPermissionUtils.isDesktopEnabled) {
        return;
      }
      let e = this.editorAPI.getService(lazyRecordStatusToken.lazyRecordStatus, {
        optional: true
      });
      this.sub = e == null ? undefined : e.applyAllDone$.subscribe(this.handleClientvarApplyAllDone);
      platformDocUtils.vpe.on(docBlockPermissionUtils.PERMISSION_CHANGE, this.handlePermissionChange);
      this.storeUnsubscribe = reduxStoreInitializer.reduxStore.subscribe(() => {
        if (syncedReferenceBlockUtils.isSyncedReferenceBlock(this.editorAPI)) {
          return;
        }
        let e = platformDocUtils.QiL(reduxStoreInitializer.reduxStore.getState());
        if (e !== this.isMentionPanelVisible) {
          this.onMentionUserPanelVisibleChanged$.next(e);
          this.isMentionPanelVisible = e;
          if (e) {
            this.handleShowMentionPanel();
          }
        }
      });
    }
    initMentionSDK() {
      let e = docTokenHelperUtils.resolveDocToken();
      let i = fileNodeSelectorUtils.getDefaultDocType(reduxStoreInitializer.reduxStore.getState());
      let r = platformDocUtils.lwg(reduxStoreInitializer.reduxStore.getState());
      if (i) {
        this.mentionSDK = platformDocUtils.E$b.getOrCreate({
          suiteToken: e,
          suiteType: i,
          suiteShareable: r
        });
        this.destroyMentionPanelSDKManager = () => platformDocUtils.E$b.destroy({
          suiteToken: e,
          suiteType: i,
          suiteShareable: r
        });
        this.mentionSDK.onNotifyOneMention(this.onNotifyOneMentionCallback);
        this.mentionSDK.onNotifyAllMention(this.onNotifyAllMentionCallback);
      }
    }
    updateFirstMentionIdOfUsers() {
      let e = new Set(this.mentionIdToUserIdMap.values());
      let i = new Set();
      Array.from(this.thirdPartyMentionData.values()).forEach(e => {
        e.forEach(e => {
          let {
            userId: r
          } = e.userInfo;
          if (!docMentionManager.isCurrentUser(r)) {
            i.add(r);
          }
        });
      });
      let r = docMentionManager.getMentionUserMap(new Set([...e, ...i]), this.thirdPartyMentionData, this.editorAPI);
      this.firstMentionIdOfUsers = r;
    }
    async generateFormattedMentionData(e) {
      let i = [];
      for (let r of e) {
        let {
          mentionId: e,
          userId: n
        } = r;
        let o = this.userInfoCache.get(n);
        while (!o && !this.fetchFailedUserId.has(n)) {
          await docxUtilityHelpers.delayPromise(500);
          o = this.userInfoCache.get(n);
        }
        if (!o) {
          continue;
        }
        let l = this.userIdReadableMap.get(n);
        let {
          userName: s,
          enName: a
        } = o;
        let c = (i18nInitializationUtils.getDefaultLocale() === docxI18nLoaderUtils.localeMapping.EN ? a : s) || s || a;
        i.push({
          readable: !!l,
          mentionId: e,
          userInfo: {
            userId: n,
            userName: c || "",
            avatarUrl: o.avatarUrl,
            query: this.mentionIdToQuery.get(e)
          }
        });
      }
      return i;
    }
    clearUserPermissionManager() {
      Array.from(this.mentionIdToUserIdMap.values()).forEach(e => {
        k.removeUserPermission(e);
      });
    }
    onMentionPanelShow(e, i) {
      if (!this.onMentionPanelShowCallbacks.has(e)) {
        this.onMentionPanelShowCallbacks.set(e, i);
      }
    }
    offMentionPanelShow(e) {
      this.onMentionPanelShowCallbacks.delete(e);
    }
    async fetchUserInfo(e, i) {
      let r = await docxUserDetailManager.UserDetailManager.fetch(e, i);
      this.setUserInfo(i, {
        userId: i,
        userName: docxUserDetailManager.UserDetailManager.getUserShowName(i),
        avatarUrl: r.avatar_url || ""
      });
    }
    notifyMentionPanelShow() {
      this.onMentionPanelShowCallbacks.forEach(e => {
        e();
      });
    }
    addFetchFailedUserId(e) {
      this.fetchFailedUserId.add(e);
    }
    setUserInfo(e, i) {
      this.userInfoCache.set(e, i);
      if (this.fetchFailedUserId.has(e)) {
        this.fetchFailedUserId.delete(e);
        this.updateMentionPanelData();
      }
    }
    getUserInfo(e) {
      return this.userInfoCache.get(e);
    }
    getMentionSDK() {
      return this.mentionSDK;
    }
    getIsMentionPanelVisible() {
      return this.isMentionPanelVisible;
    }
    getAllUserId() {
      return this.firstMentionIdOfUsers.map(e => {
        let {
          userId: i
        } = e;
        return i;
      });
    }
    destroy() {
      var e;
      var i;
      if (docBlockPermissionUtils.isDesktopEnabled) {
        if ((e = this.sub) !== null && e !== undefined) {
          e.unsubscribe();
        }
        this.storeUnsubscribe();
        platformDocUtils.vpe.off(docBlockPermissionUtils.PERMISSION_CHANGE, this.handlePermissionChange);
        this.clearUserPermissionManager();
        this.subscriptions.forEach(e => e.unsubscribe());
        this.subscriptions = [];
        this.userIdReadableMap.clear();
        this.userInfoCache.clear();
        this.thirdPartyMentionData.clear();
        this.mentionIdToUserIdMap.clear();
        this.mentionIdToQuery.clear();
        this.fetchFailedUserId.clear();
        if ((i = this.destroyMentionPanelSDKManager) !== null && i !== undefined) {
          i.call(this);
        }
      }
    }
    onServiceDispose() {
      this.destroy();
    }
    constructor(e) {
      var i;
      var r;
      var n = this;
      F(this, "userIdReadableMap", new Map());
      F(this, "userInfoCache", new Map());
      F(this, "fetchFailedUserId", new Set());
      F(this, "thirdPartyMentionData", new Map());
      F(this, "firstMentionIdOfUsers", []);
      F(this, "mentionIdToUserIdMap", new Map());
      F(this, "mentionPanelDataCache", []);
      F(this, "subscriptions", []);
      F(this, "mentionIdToQuery", new Map());
      F(this, "thirdPartyBlockWhichHasOldData", new Set());
      F(this, "onMentionDataChanged$", new observableSubjectClass.Subject());
      F(this, "onMentionUserPanelVisibleChanged$", new observableSubjectClass.Subject());
      F(this, "onAddPermissionFinishedWhenApplyingAllDone$", new observableSubjectClass.Subject());
      i = "eventEmitter";
      if (r = d) {
        Object.defineProperty(this, i, {
          enumerable: r.enumerable,
          configurable: r.configurable,
          writable: r.writable,
          value: r.initializer ? r.initializer.call(this) : undefined
        });
      }
      F(this, "mentionSDK", undefined);
      F(this, "relationManager", undefined);
      F(this, "isMentionPanelVisible", undefined);
      F(this, "isHasMentionUserData", false);
      F(this, "sub", undefined);
      F(this, "storeUnsubscribe", undefined);
      F(this, "destroyMentionPanelSDKManager", undefined);
      F(this, "editorAPI", undefined);
      F(this, "updateMentionPanelData", async function (e = {
        isPermissionUpdate: false,
        isForceUpdateView: false
      }) {
        if (!n.mentionSDK) {
          return;
        }
        let {
          isPermissionUpdate: i,
          isForceUpdateView: r
        } = e;
        if (!i) {
          n.updateFirstMentionIdOfUsers();
        }
        let o = await n.generateFormattedMentionData(n.firstMentionIdOfUsers);
        if (r || n.isMentionPanelVisible) {
          n.mentionPanelDataCache = o;
          n.mentionSDK.sendAllMention([...o], {
            needUpdateFromRemote: !i || r
          });
        }
        n.isHasMentionUserData = o.length !== 0 || n.thirdPartyBlockWhichHasOldData.size > 0 || docMentionManager.hasMissingMentionId(n.editorAPI);
        n.onMentionDataChanged$.next({
          mentionSDK: n.mentionSDK
        });
      });
      F(this, "handleClientvarApplyAllDone", async () => {
        let e = this.editorAPI.getService(relationServiceProviderName.relationServiceProviderName);
        this.relationManager = e.register({
          groupId: "mentionUser",
          parseValueFromBlock: docMentionManager.getBlockMentionIds
        });
        this.subscriptions.push(this.relationManager.relationChange$.subscribe(this.handleRelationChanged));
        this.initMentionSDK();
        this.handlePermissionChange();
        Array.from(this.relationManager.getAllValues()).forEach(async e => {
          let i = Array.from(this.relationManager.getRecordIdsByValue(e))[0];
          let r = docMentionManager.getMentionUid(e, i, this.editorAPI);
          if (!!r && !docMentionManager.isCurrentUser(r)) {
            this.mentionIdToUserIdMap.set(e, r);
            k.addUserPermission(r);
            this.onAddPermissionFinishedWhenApplyingAllDone$.next(true);
            try {
              await this.fetchUserInfo(i, r);
            } catch (e) {
              this.addFetchFailedUserId(r);
              setTimeout(() => {
                this.fetchUserInfo(i, r);
              }, 1000);
            }
          }
        });
        await this.updateMentionPanelData();
      });
      F(this, "handleRelationChanged", async e => {
        if (e.isInit) {
          return;
        }
        let i = e.deletedValues;
        let r = e.updatedValues;
        for (let e of i) {
          let i = this.mentionIdToUserIdMap.get(e);
          if (i) {
            k.removeUserPermission(i);
          }
          this.mentionIdToUserIdMap.delete(e);
        }
        for (let e of r) {
          let i = Array.from(this.relationManager.getRecordIdsByValue(e))[0];
          let r = docMentionManager.getMentionUid(e, i, this.editorAPI);
          if (!!r && !docMentionManager.isCurrentUser(r)) {
            k.addUserPermission(r, [platformDocUtils.Plq?.Perceive]);
            this.mentionIdToUserIdMap.set(e, r);
            try {
              await this.fetchUserInfo(i, r);
            } catch (e) {
              this.addFetchFailedUserId(r);
              setTimeout(() => {
                this.fetchUserInfo(i, r);
              }, 1000);
            }
          }
        }
        await this.updateMentionPanelData();
      });
      F(this, "handleThirdPartyMentionChanged", async function (e, i, r = false) {
        let o = false;
        if (i.length === 0) {
          n.thirdPartyMentionData.delete(e);
        } else {
          n.thirdPartyMentionData.set(e, i);
          i.forEach(e => {
            let {
              userInfo: i,
              readable: r,
              mentionId: l
            } = e;
            n.userInfoCache.set(i.userId, i);
            n.userIdReadableMap.set(i.userId, r);
            if (!l) {
              o = true;
              return;
            }
            if (i.query) {
              n.mentionIdToQuery.set(l, i.query);
            }
          });
        }
        if (o) {
          n.thirdPartyBlockWhichHasOldData.add(e);
        } else {
          n.thirdPartyBlockWhichHasOldData.delete(e);
        }
        await n.updateMentionPanelData({
          isForceUpdateView: r,
          isPermissionUpdate: false
        });
      });
      F(this, "onMentionPanelShowCallbacks", new Map());
      F(this, "handlePermissionChange", async () => {
        let e = T(reduxStoreInitializer.reduxStore.getState());
        let i = false;
        for (let [r, n] of Object.entries(e)) {
          if (!i && this.mentionPanelDataCache.find(e => e.userInfo.userId === r && this.userIdReadableMap.get(r) !== n.readable)) {
            i = true;
          }
          this.userIdReadableMap.set(r, n.readable);
        }
        if (i) {
          await this.updateMentionPanelData();
        }
      });
      F(this, "handleShowMentionPanel", () => {
        docMentionManager.syncMentionIds(this.editorAPI);
        this.updateMentionPanelData();
        this.notifyMentionPanelShow();
      });
      F(this, "onNotifyOneMentionCallback", async e => {
        if (syncedReferenceBlockUtils.isSyncedReferenceBlock(this.editorAPI) || !e) {
          return;
        }
        let {
          userId: i,
          query: r
        } = e.userInfo;
        let n = {
          userIds: (r == null ? undefined : r.extra) ? [] : [i],
          mentionIds: {
            [i]: e.mentionId
          },
          isWhole: mentionNotificationApiService.NotifyType.SINGLE
        };
        if (r == null ? undefined : r.extra) {
          let e = syncedReferenceBlockUtil.getSyncedRecordId(this.editorAPI) || {};
          n.entities = {
            users: [{
              ...(r == null ? undefined : r.extra),
              ...e
            }]
          };
        }
        await docMentionManager.sendMentionNotify(n, this);
      });
      F(this, "onNotifyAllMentionCallback", async e => {
        if (syncedReferenceBlockUtils.isSyncedReferenceBlock(this.editorAPI) || !e || !e.length) {
          return;
        }
        let i = [];
        let r = {};
        let n = {
          users: []
        };
        let o = syncedReferenceBlockUtil.getSyncedRecordId(this.editorAPI) || {};
        e.forEach(e => {
          r[e.userInfo.userId] = e.mentionId;
          let s = e.userInfo.query?.extra;
          if (s) {
            n.users.push({
              ...s,
              ...o
            });
          }
          if (!s) {
            i.push(e.userInfo.userId);
          }
        });
        this.mentionSDK.startNotifyAllMention();
        let l = {
          mentionIds: r,
          userIds: i,
          isWhole: mentionNotificationApiService.NotifyType.ALL
        };
        if (n.users.length) {
          l.entities = n;
        }
        let s = await docMentionManager.sendMentionNotify(l, this);
        if (s && s.code === docBlockPermissionUtils.PermissionStatus.SUCCESS) {
          this.mentionSDK.endNotifyAllMention();
        }
      });
      F(this, "updateMentionPanelNotifyStatus", async function (e) {
        let i = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        let r = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
        let o = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
        n.mentionSDK.updateMentionNotifyStatus(e, {
          needUpdateView: i,
          typeIsNotifyAll: r,
          notificationIsError: o
        });
      });
      this.editorAPI = e;
      this.init();
    }
  }, n = (c = u = typescriptRuntimeHelpers.metadata([typescriptRuntimeHelpers.decorate(0, docxEditorCore.EDITOR_API_TOKEN), typescriptRuntimeHelpers.reflectMetadata("design:type", Function), typescriptRuntimeHelpers.reflectMetadata("design:paramtypes", [undefined])], u)).prototype, o = "eventEmitter", l = [eventEmitterProviderNameExport.eventEmitterProviderName], a = {}, Object.keys(s = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }).forEach(function (e) {
    a[e] = s[e];
  }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = true), d = (a = l.slice().reverse().reduce(function (e, i) {
    return i(n, o, e) || e;
  }, a)).initializer === undefined ? (Object.defineProperty(n, o, a), null) : a, c)) || c;
  function $() {
    docxEditorCore.registerProviders([j]);
  }
  require.d(exports, {
    registerMentionUserProvider: function () {
      return $;
    }
  });
}