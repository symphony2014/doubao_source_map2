// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ss' to 'WriteSpaceController'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-docx-guidance.7d88153e.js
         * chunkId: 48718
         * moduleId: 110581
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var uuidV1Generator = require("uuid-v1-generator") /*id: 278878*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var c = clipboardCopyHelper;
  var documentNavigationAndCreationUtils = require("document-navigation-and-creation-utils") /*id: 491592*/;
  var aiDocCreateTracking = require("ai-doc-create-tracking") /*id: 86772*/;
  var writingSkillStore = require("writing-skill-store") /*id: 704044*/;
  var threadContentTypes = require("thread-content-types") /*id: 878038*/;
  var driveDocsUpgradeToast = require("drive-docs-upgrade-toast") /*id: 847503*/;
  var documentUpgradeAndCreationUtils = require("document-upgrade-and-creation-utils") /*id: 24188*/;
  var pageVisitTrackContext = require("page-visit-track-context") /*id: 857541*/;
  var userPreferenceStore = require("user-preference-store") /*id: 292003*/;
  var samanthaAiSpaceApiServices = require("samantha-ai-space-api-services") /*id: 563338*/;
  var fileEntityTypeMapper = require("file-entity-type-mapper") /*id: 300358*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var businessLayoutConstants = require("business-layout-constants") /*id: 252973*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var apiErrorChecker = require("api-error-checker") /*id: 429379*/;
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var dbxSonnerToasterWrapper = require("dbx-sonner-toaster-wrapper") /*id: 682910*/;
  let P = "write-space-shared-root-id";
  let I = "write-space-recent-root-id";
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function Z(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class j {
    static getInstance() {
      this.instance ||= new j();
      return this.instance;
    }
    updateNodeInfoMap(e, t) {
      let {
        nodeInfoMap: n,
        setNodeInfoMap: r
      } = writingSkillStore.writingSkillStore.getState();
      let i = n[e];
      r(e, {
        ...i,
        ...t
      });
    }
    async loadInitialData() {
      let {
        setNodeListMap: e
      } = writingSkillStore.writingSkillStore.getState();
      try {
        let {
          data: n
        } = await apiServicesCollection.SamanthaApiService.GetOrInitOtterRootNodeInfo();
        let r = n == null ? undefined : n.root_node_meta?.id;
        if (!r) {
          e("0", []);
          r = "0";
        }
        this.baseDocSpaceId = r;
      } catch (t) {
        e("0", []);
        this.baseDocSpaceId = "0";
      }
      return this.baseDocSpaceId;
    }
    async fetchShareNodeList({
      size: e,
      cursor: t,
      isLoadMore: n = false
    } = {}) {
      try {
        let {
          nodeListMap: r,
          setNodeListStatusMap: i,
          setNodeListMap: o
        } = writingSkillStore.writingSkillStore.getState();
        let {
          data: l
        } = await apiServicesCollection.OtterDocApiService.AGWListPageFromShare({
          cursor: t,
          size: e ?? 50
        });
        if (!l) {
          return Promise.reject(Error("FetchShareNodeInfoApiDataNotFound"));
        }
        let {
          pages: s = [],
          next_cursor: c
        } = l;
        let d = [];
        if (!n) {
          this.clearSelectedNodes();
        }
        s.forEach(e => {
          let t = function (e) {
            let {
              role: t,
              title: n,
              obj_token: r,
              create_time_sec: i,
              owner: a,
              grant_role_time_sec: o,
              action_list: l
            } = e;
            if (r) {
              return {
                id: r,
                name: n,
                key: r,
                nodeType: businessLayoutConstants.ItemType.Pages,
                ownerName: a == null ? undefined : a.name,
                role: t,
                actions: l,
                content: {
                  pageType: businessLayoutConstants.ProviderType.Otter
                },
                createTime: String(i),
                updateTime: String(o)
              };
            } else {
              return null;
            }
          }(e);
          if (t == null ? undefined : t.id) {
            d.push(t);
            this.updateNodeInfoMap(t.id, t);
          }
        });
        let u = n && r[P] || [];
        let f = d.map(e => e.id).filter(e => !isUndefinedCheck.isUndefined(e));
        o(P, [...u, ...f]);
        i(P, {
          hasMore: !!c,
          nextCursor: c || ""
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "doc_fetch_share_node_info_api_error",
          message: "FetchShareNodeInfoApiError",
          error: e
        });
        return Promise.reject(e);
      }
    }
    async fetchRecentNodeList({
      size: e,
      cursor: t,
      isLoadMore: n = false
    } = {}) {
      try {
        let {
          nodeListMap: r,
          setNodeListStatusMap: i,
          setNodeListMap: o
        } = writingSkillStore.writingSkillStore.getState();
        let {
          data: l
        } = await apiServicesCollection.SamanthaApiService.LatestUsedOtterDoc({
          cursor: t,
          limit: e ?? 50
        });
        if (!l) {
          throw Error("fetch recent node info data error");
        }
        let {
          next_cursor: s,
          has_more: c = false
        } = l;
        let d = l.docs || [];
        let u = [];
        if (!n) {
          this.clearSelectedNodes();
        }
        d.forEach(e => {
          let t = function (e) {
            let {
              role: t,
              meta: n,
              owner: r,
              node_info: i,
              report_time_ms: a,
              action_list: o
            } = e;
            let {
              token: l,
              title: s,
              create_time: c
            } = n ?? {};
            let {
              node_id: d,
              parent_id: u
            } = i ?? {};
            if (l) {
              return {
                id: d || l,
                name: s,
                key: l,
                nodeType: businessLayoutConstants.ItemType.Pages,
                ownerName: (r == null ? undefined : r.name) || "",
                role: t,
                actions: o,
                parentId: u || I,
                content: {
                  pageType: businessLayoutConstants.ProviderType.Otter
                },
                createTime: String(c),
                accessTime: String(a)
              };
            } else {
              return null;
            }
          }(e);
          if (t == null ? undefined : t.id) {
            u.push(t);
            this.updateNodeInfoMap(t.id, t);
          }
        });
        let f = n && r[I] || [];
        let h = u.map(e => e.id).filter(e => !isUndefinedCheck.isUndefined(e));
        o(I, [...f, ...h]);
        i(I, {
          hasMore: c,
          nextCursor: s || ""
        });
        this.loadInitialData().then(() => {
          this.fetchAndUpdateNodeInfo(this.baseDocSpaceId);
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "doc_fetch_recent_node_info_api_error",
          message: "FetchRecentNodeInfoApiError",
          error: e
        });
        throw e;
      }
    }
    async fetchAndUpdateNodeInfo(e, {
      needFullPath: t = false,
      size: n
    } = {}) {
      e = e || this.baseDocSpaceId;
      let {
        setNodeListStatusMap: r,
        setNodeListMap: i
      } = writingSkillStore.writingSkillStore.getState();
      e ||= await this.loadInitialData();
      let o = await samanthaAiSpaceApiServices.fetchNodeInfo({
        node_id: e,
        need_full_path: t,
        otter_pack_option: {
          disable_default_name: true
        },
        size: n
      });
      let {
        children: l = [],
        node_info: s,
        next_cursor: c,
        has_more: d
      } = o || {};
      let u = l.map(e => e.id).filter(e => !isUndefinedCheck.isUndefined(e));
      i(e, u);
      [s, ...l].forEach(e => {
        let t = fileEntityTypeMapper.convertApiResponse(e);
        if (e.id && t) {
          this.updateNodeInfoMap(e.id, t);
        }
      });
      if (!isUndefinedCheck.isUndefined(d) && !isUndefinedCheck.isUndefined(c)) {
        r(e, {
          hasMore: d,
          nextCursor: c
        });
      }
      return o;
    }
    async delayRefreshNode(e, t) {
      let {
        delay: n = 500
      } = t || {};
      await promiseAsyncUtilities.createDelayedPromise(n);
      if (e === "0") {
        e = this.baseDocSpaceId;
        await this.loadInitialData();
      }
      this.spaceUpdateRootId(this.baseDocSpaceId);
      this.fetchAndUpdateNodeInfo(e);
    }
    async loadMoreShareNodeList() {
      try {
        let {
          nextCursor: e,
          hasMore: t
        } = writingSkillStore.writingSkillStore.getState().nodeListStatusMap[P] || {};
        if (!t) {
          return;
        }
        this.fetchShareNodeList({
          isLoadMore: true,
          cursor: e
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          message: "WriteSpaceController_loadMoreShareNodeListError",
          error: e
        });
        return Promise.reject(e);
      }
    }
    async loadMoreRecentNodeList() {
      try {
        let t = writingSkillStore.writingSkillStore.getState().nodeListStatusMap;
        let {
          nextCursor: n,
          hasMore: r
        } = t[I] ?? {};
        if (!r) {
          return;
        }
        this.fetchRecentNodeList({
          isLoadMore: true,
          cursor: n
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          message: "WriteSpaceController_loadMoreRecentNodeListError",
          error: e
        });
        return Promise.reject(e);
      }
    }
    async loadMoreNodeList(e, t) {
      let {
        size: n = 50
      } = t || {};
      let {
        nodeListStatusMap: r,
        setNodeListStatusMap: i,
        nodeListMap: o,
        setNodeListMap: l,
        setNodeInfoMap: s
      } = writingSkillStore.writingSkillStore.getState();
      try {
        if (e === P) {
          this.loadMoreShareNodeList();
          return;
        }
        if (e === I) {
          this.loadMoreRecentNodeList();
          return;
        }
        let {
          nextCursor: t,
          hasMore: c
        } = r[e] || {};
        if (!c) {
          return;
        }
        let {
          data: d
        } = await apiServicesCollection.SamanthaApiService.AISpaceNodeInfo({
          node_id: e,
          cursor: t,
          size: n
        });
        let {
          children: u,
          next_cursor: p,
          has_more: f
        } = d || {};
        if (!isUndefinedCheck.isUndefined(f) && !isUndefinedCheck.isUndefined(p)) {
          i(e, {
            hasMore: f,
            nextCursor: p
          });
        }
        if (!u) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "doc_load_more_node_list_found_no_children",
            error: Error("WriteSpaceController_LoadMoreNodeListFoundNoChildren")
          });
          return;
        }
        let h = o[e] || [];
        let m = u.map(e => e.id).filter(e => !isUndefinedCheck.isUndefined(e));
        l(e, [...h, ...m]);
        u.forEach(e => {
          let t = fileEntityTypeMapper.convertApiResponse(e);
          if (e.id && t) {
            s(e.id, t);
          }
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          message: "WriteSpaceController_FetchNodeInfoApiError",
          error: e
        });
        return Promise.reject(e);
      }
    }
    getCurrentNodeId(e) {
      let {
        currentPathStack: i,
        rootId: a,
        nodeInfoMap: o
      } = writingSkillStore.writingSkillStore.getState();
      if (e && o[e]?.parentId) {
        return o[e]?.parentId ?? "";
      } else {
        return i[i.length - 1] || a;
      }
    }
    checkDirectoryDepthValid(e = 1) {
      return writingSkillStore.writingSkillStore.getState().currentPathStack.length + 1 + e <= 10;
    }
    async createNewFolder(e, t) {
      if (!this.checkDirectoryDepthValid()) {
        samanthaToastFactory.defaultToast.error(i18nTranslationUtils.i18nextTranslate("aispace_current_directory_cannot_add_more_subfolders"));
        return;
      }
      try {
        var r;
        let {
          data: a
        } = await apiServicesCollection.SamanthaApiService.AISpaceUploadNode({
          node_list: [{
            local_id: uuidV1Generator.generateUuid(),
            name: e,
            parent_id: t,
            node_type: businessLayoutConstants.ItemType.Directory
          }],
          scene: chatAiConstants.docType.Pages
        });
        teaAnalyticsEventTracker.trackEvent("create_new_folder_status", {
          folder_id: a == null ? undefined : (r = a.node_list) === null || r === undefined ? undefined : r[0]?.id,
          success: "1",
          click_from: "above_ai_doc_list"
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "doc_create_new_folder_api_error",
          error: e
        });
        teaAnalyticsEventTracker.trackEvent("create_new_folder_status", {
          success: "0",
          error_code: apiErrorChecker.isApiError(e) ? e.errorOption.code : "0",
          click_from: "above_ai_doc_list"
        });
        samanthaAiSpaceApiServices.handleAiSpaceError({
          t: i18nTranslationUtils.i18nextTranslate,
          error: e,
          defaultTip: i18nTranslationUtils.i18nextTranslate("aispace_folder_creation_failed_please_try_again_later")
        });
        return Promise.reject(e);
      }
      samanthaToastFactory.defaultToast.success(i18nTranslationUtils.i18nextTranslate("aispace_folder_created_successfully"));
      await this.delayRefreshNode(t);
      setTimeout(() => {
        this.delayRefreshNode(t);
        setTimeout(() => {
          this.delayRefreshNode(t);
        }, 2000);
      }, 1000);
    }
    getRootNodeId() {
      return writingSkillStore.writingSkillStore.getState().rootId;
    }
    async moveNode(e, t, n, {
      reportParams: r
    } = {}) {
      if (t === n) {
        samanthaToastFactory.defaultToast.error(i18nTranslationUtils.i18nextTranslate("aispace_cannot_move_file_to_itself_or_its_subfiles"));
        return;
      }
      let {
        rootId: i
      } = writingSkillStore.writingSkillStore.getState();
      try {
        await apiServicesCollection.SamanthaApiService.AISpaceMoveNode({
          node_list: e.map(e => ({
            id: e
          })),
          current_parent_id: t,
          target_parent_id: n,
          scene: chatAiConstants.docType.Pages
        });
        teaAnalyticsEventTracker.trackEvent("file_function_status", {
          ...r,
          button_name: "move_to",
          success: "1"
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "doc_move_node_api_error",
          error: e
        });
        teaAnalyticsEventTracker.trackEvent("file_function_status", {
          ...r,
          button_name: "move_to",
          success: "0",
          error_code: apiErrorChecker.isApiError(e) ? e.errorOption.code : "0"
        });
        samanthaAiSpaceApiServices.handleAiSpaceError({
          t: i18nTranslationUtils.i18nextTranslate,
          error: e,
          defaultTip: i18nTranslationUtils.i18nextTranslate("aispace_operation_failed_please_try_again_later")
        });
        return Promise.reject(e);
      }
      samanthaToastFactory.defaultToast.success(i18nTranslationUtils.i18nextTranslate("aispace_file_moved_successfully"));
      if (!collectionIncludesUtil.includes([P, I], i)) {
        await this.delayRefreshNode(t);
        setTimeout(() => {
          this.delayRefreshNode(t);
        }, 1000);
      }
    }
    async deleteNode(e, {
      reportParams: t
    } = {}) {
      if (e.length) {
        try {
          await apiServicesCollection.SamanthaApiService.AISpaceDeleteNode({
            node_list: e.map(e => ({
              id: e
            })),
            scene: chatAiConstants.docType.Pages
          });
          teaAnalyticsEventTracker.trackEvent("file_function_status", {
            ...t,
            button_name: "delete",
            success: "1"
          });
        } catch (e) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "doc_delete_node_api_error",
            error: e
          });
          teaAnalyticsEventTracker.trackEvent("file_function_status", {
            ...t,
            button_name: "delete",
            success: "0",
            error_code: apiErrorChecker.isApiError(e) ? e.errorOption.code : "0"
          });
          samanthaAiSpaceApiServices.handleAiSpaceError({
            t: i18nTranslationUtils.i18nextTranslate,
            error: e,
            defaultTip: i18nTranslationUtils.i18nextTranslate("aispace_operation_failed_please_try_again_later")
          });
          return Promise.reject(e);
        }
        samanthaToastFactory.defaultToast.success(i18nTranslationUtils.i18nextTranslate("aispace_file_deleted_successfully"));
        writingSkillStore.writingSkillStore.getState().deleteNodes(this.getCurrentNodeId(), e);
        writingSkillStore.writingSkillStore.getState().updateSelectedNodeIds([]);
        this.loadMoreNodeList(this.getCurrentNodeId(), {
          size: e.length
        });
      }
    }
    async renameNode(e, t, {
      reportParams: n
    } = {}) {
      let r = writingSkillStore.writingSkillStore.getState().nodeInfoMap[e];
      if ((r == null ? undefined : r.name) !== t) {
        try {
          await apiServicesCollection.SamanthaApiService.AISpaceRenameNode({
            node_id: e,
            node_name: t,
            scene: chatAiConstants.docType.Pages
          });
          teaAnalyticsEventTracker.trackEvent("file_function_status", {
            ...n,
            button_name: "rename",
            success: "1"
          });
        } catch (e) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "doc_rename_node_api_error",
            error: e
          });
          teaAnalyticsEventTracker.trackEvent("file_function_status", {
            ...n,
            button_name: "rename",
            success: "0",
            error_code: apiErrorChecker.isApiError(e) ? e.errorOption.code : "0"
          });
          samanthaAiSpaceApiServices.handleAiSpaceError({
            t: i18nTranslationUtils.i18nextTranslate,
            error: e,
            defaultTip: i18nTranslationUtils.i18nextTranslate("aispace_operation_failed_please_try_again_later")
          });
          return Promise.reject(e);
        }
        samanthaToastFactory.defaultToast.success(i18nTranslationUtils.i18nextTranslate("aispace_file_renamed_successfully"));
        writingSkillStore.writingSkillStore.getState().renameNode(e, t);
      }
    }
    refreshList(e) {
      let {
        settings: t
      } = userPreferenceStore.userPreferenceStore.getState();
      switch (t == null ? undefined : t.recent_doc_tab) {
        case chatAiConstants.recentDocTab.RecentDocTabRecentVisit:
          this.spaceUpdateRootId(I);
          this.fetchRecentNodeList();
          break;
        case chatAiConstants.recentDocTab.RecentDocTabMyDoc:
          this.spaceUpdateRootId(this.baseDocSpaceId);
          this.fetchAndUpdateNodeInfo(e);
          break;
        case chatAiConstants.recentDocTab.RecentDocTabShareMe:
          this.spaceUpdateRootId(P);
          this.fetchShareNodeList();
          break;
        case chatAiConstants.recentDocTab.RecentDocTabQuickStart:
          this.clearSelectedNodes();
      }
    }
    changeActiveTab(e) {
      userPreferenceStore.userPreferenceStore.getState().setUserPreferenceSync({
        recent_doc_tab: e
      });
      this.refreshList();
    }
    clearSelectedNodes() {
      let {
        updateCurrentPathStack: e,
        updateSelectedNodeIds: t
      } = writingSkillStore.writingSkillStore.getState();
      e([]);
      t([]);
    }
    spaceUpdateRootId(e) {
      writingSkillStore.writingSkillStore.getState().updateRootId(e);
    }
    constructor() {
      Z(this, "baseDocSpaceId", "");
      Z(this, "debounceRefreshCurrentNodeInfo", debounceUtil_1_1.debounce(async () => {
        let e = this.getCurrentNodeId();
        let t = e;
        if (e === "0") {
          t = this.baseDocSpaceId;
          await this.loadInitialData();
        }
        this.refreshList(t);
      }, 2000));
      Z(this, "copyNodeLink", async (e, t) => {
        if (!e.length) {
          return;
        }
        let i = writingSkillStore.writingSkillStore.getState().nodeInfoMap[e[0]];
        let a = (i == null ? undefined : i.key) ?? "";
        let o = await documentUpgradeAndCreationUtils.upgradeDocumentAndGetId(a, i == null ? undefined : i.conversationId);
        let l = o ? `/doc/${o}?enter_from=share_link` : documentNavigationAndCreationUtils.buildCanvasOpenUrl(a, (i == null ? undefined : i.conversationId) ?? "");
        c(`${window.location.origin}${l}`);
        samanthaToastFactory.defaultToast.success(i18nTranslationUtils.i18nextTranslate("doc_copy_link_success_toast"));
        teaAnalyticsEventTracker.trackEvent("file_function_status", {
          ...(t == null ? undefined : t.reportParams),
          button_name: "copy_link",
          success: "1"
        });
        teaAnalyticsEventTracker.trackEvent("doc_share_link_success_popup_show", {
          ...(t == null ? undefined : t.reportParams),
          page_token: o,
          show_from: "ai_doc_list",
          entrance_type: "canvas_top"
        });
      });
      Z(this, "duplicateNode", async (e, t) => {
        if (!e.length) {
          return;
        }
        let n = writingSkillStore.writingSkillStore.getState().nodeInfoMap[e[0]];
        if (n == null ? undefined : n.key) {
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "create_docx",
            meta: {
              scene: threadContentTypes.ThreadTypes.Duplicate,
              url_path: location.pathname
            }
          });
          try {
            let e;
            let {
              key: i,
              name: a,
              conversationId: l = "",
              parentId: s
            } = n;
            let c = [writingSkillStore.writingSkillStore.getState().rootId, s].some(e => collectionIncludesUtil.includes([P, I], e)) ? undefined : s;
            let d = await documentUpgradeAndCreationUtils.upgradeDocumentAndGetId(i, l);
            if (d) {
              let t = await documentUpgradeAndCreationUtils.duplicateDocument({
                pageToken: d,
                title: a,
                parentNodeId: c
              });
              if (!(e = t == null ? undefined : t.token)) {
                throw Error("Empty duplicated doc id");
              }
            } else {
              e = await documentUpgradeAndCreationUtils.checkPageUpgradeStatus({
                docId: i,
                parentNodeId: c
              });
            }
            let f = `/doc/${e}`;
            window.open(xssContentSanitizer.sanitizeUrl(`${window.location.origin}${f}?enter_from=${aiDocCreateTracking.clickChannels.COPY_DOC}&prev_page=${pageVisitTrackContext.getCurrentPage()}`, null, {
              logType: "js.window.location",
              reportOnly: "false",
              blackConfig: "{}",
              configMode: "merge",
              isCloseSSRReport: false,
              bid: "flow_web",
              region: "cn",
              urlLimit: "-1",
              htmlLimit: "-1",
              isSaveValidUrl: false,
              isRuntimeLog: false,
              isDOMParser: true,
              escapeRule: "escape-report",
              reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
              scmBranch: "release_train_samantha_2026-03-09_1120843696898",
              scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
              scmVersion: "1.0.4.168",
              webpackPluginVersion: "3.4.5",
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkROS2NH%khWWFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-WmtNMHB3Wk$k$mR*cEhP$3BN$np*b1ltM%dibHB-T$d4aWJsRjJX$Ek1ZFdSS$NuWmlSM2hzWTJrNWNHSnR$bXhs%Xp$d1l6Tm9hR050WkR*amR6MDk"
            }));
            this.debounceRefreshCurrentNodeInfo();
            teaAnalyticsEventTracker.trackEvent("file_function_status", {
              ...(t == null ? undefined : t.reportParams),
              button_name: "create_copy",
              success: "1"
            });
            aiDocCreateTracking.trackDocCreate({
              clickFrom: aiDocCreateTracking.createEntryPoints.CopyDoc,
              createWay: aiDocCreateTracking.docCreateModes.CopyDoc,
              fromPageToken: i,
              pageToken: e
            });
          } catch (e) {
            loggerServiceCore.defaultLogger.persist.error({
              eventName: "doc_duplicate_copy_api_error",
              error: e
            });
            teaAnalyticsEventTracker.trackEvent("file_function_status", {
              ...(t == null ? undefined : t.reportParams),
              button_name: "create_copy",
              success: "0",
              error_code: apiErrorChecker.isApiError(e) ? e.errorOption.code : "0"
            });
            if (apiErrorChecker.isApiError(e) && [chatErrorCodes.chatErrorCodes.UPGRADED_FUSION_DOC, chatErrorCodes.chatErrorCodes.UPGRADING_FUSION_DOC].includes(Number(e == null ? undefined : e.errorOption?.code))) {
              dbxSonnerToasterWrapper.dbxToastAPI.info(reactJsxRuntimeCoreReexport.jsx(driveDocsUpgradeToast.DocsUpgradeToast, {}), {
                duration: 3000
              });
            } else {
              samanthaAiSpaceApiServices.handleAiSpaceError({
                t: i18nTranslationUtils.i18nextTranslate,
                error: e,
                defaultTip: i18nTranslationUtils.i18nextTranslate("aispace_operation_failed_please_try_again_later")
              });
            }
            return Promise.reject(e);
          }
        }
      });
      this.loadInitialData();
    }
  }
  Z(j, "instance", undefined);
  require.d(exports, {
    WriteSpaceController: function () {
      return j;
    }
  });
}