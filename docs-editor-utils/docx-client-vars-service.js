// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'bl' to 'docxApiService'
// - Renamed export 'vO' to 'validateClientVars'
// - Renamed export 'VL' to 'clearClientVarsCache'
// - Renamed export 'vF' to 'setClientVarsCache'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 595324
         */
module.exports = function (module, exports, require) {
  var o;
  var memoizeFunction = require("memoize-function") /*id: 565197*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var axiosHttpClientLibrary = require("axios-http-client-library") /*id: 936615*/;
  var templateConstantsDef = require("template-constants-def") /*id: 471319*/;
  var fetchSyncConstants = require("fetch-sync-constants") /*id: 290082*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var networkStateEventCollector = require("network-state-event-collector") /*id: 67722*/;
  var fileNodeSelectorUtils = require("file-node-selector-utils") /*id: 696977*/;
  var fileTypeConstants = require("file-type-constants") /*id: 276005*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var otterDocApiServiceDi = require("otter-doc-api-service-di") /*id: 53616*/;
  var docxErrorUtils = require("docx-error-utils") /*id: 390897*/;
  var docApiConstants = require("doc-api-constants") /*id: 499049*/;
  var apiRetryInterceptor = require("api-retry-interceptor") /*id: 392268*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var docxUpdateTimeSettings = require("docx-update-time-settings") /*id: 340835*/;
  let T = function (e = docTokenHelperUtils.resolveDocToken()) {
    return {
      code: 0,
      data: {
        block_map: {
          [e]: {
            data: {
              align: "",
              author: window.User.id,
              children: [],
              comments: null,
              doc_info: {
                editors: [window.User.id],
                options: docxUpdateTimeSettings.isUpdateTimeDefault() ? ["editors", "edit_time"] : ["editors", "create_time"]
              },
              hidden: false,
              locked: false,
              parent_id: "",
              text: {
                apool: {
                  nextNum: 0,
                  numToAttrib: {}
                },
                initialAttributedTexts: {
                  attribs: {
                    0: ""
                  },
                  text: {
                    0: ""
                  }
                }
              },
              type: "page"
            },
            id: e,
            version: 1
          }
        },
        id: e,
        structure_version: 1,
        type: "CLIENT_VARS",
        user_map: {},
        meta_map: {
          [e]: {
            owner_id: window.User.id
          }
        },
        editor_map: {},
        mention_page_title: {},
        external_mention_url: {},
        skip_blocks: [],
        next_cursors: [],
        has_more: false,
        concurrent: true,
        cursor: ""
      },
      from: "LOCAL",
      msg: "success"
    };
  };
  var apiClientInstance = require("api-client-instance") /*id: 22981*/;
  var apiEndpointConstants = require("api-endpoint-constants") /*id: 403286*/;
  var docUrlResolver = require("doc-url-resolver") /*id: 199176*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxLoggerFactory = require("docx-logger-factory") /*id: 417672*/;
  var urlParseFormatUtils = require("url-parse-format-utils") /*id: 224643*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var globalConfigGetters = require("global-config-getters") /*id: 47815*/;
  var runtimeEnvFlags = require("runtime-env-flags") /*id: 573139*/;
  function B(e) {
    var r;
    if (runtimeEnvFlags.isLocalDev) {
      return window.location.origin;
    }
    let o = browserEnvironmentDetectionUtils.browserDetector.isIOS ? window.location.protocol.replace(/docsource:/, "https:") : window.location.protocol;
    return urlParseFormatUtils.format({
      protocol: o,
      host: runtimeEnvFlags.isLocalDev ? window.location.host : e || ((r = globalConfigGetters.getCommonConfig()) === null || r === undefined ? undefined : r.domain?.okr_api) || window.location.host
    });
  }
  var errorStatusCodes = require("error-status-codes") /*id: 187285*/;
  var docTokenManager = require("doc-token-manager") /*id: 632370*/;
  var documentPageIdRemapper = require("document-page-id-remapper") /*id: 375867*/;
  var offlineStatusSelectorsUtils = require("offline-status-selectors-utils") /*id: 564613*/;
  var docxOfflineClientVarStore = require("docx-offline-client-var-store") /*id: 104010*/;
  var blockActionConstants = require("block-action-constants") /*id: 699900*/;
  var docxApplyChanges = require("docx-apply-changes") /*id: 822361*/;
  var browserEnvironmentDetectionUtils_1 = require("browser-environment-detection-utils_1") /*id: 439836*/;
  var isErrorUtil = require("is-error-util") /*id: 597114*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docBlockOperationManager = require("doc-block-operation-manager") /*id: 479790*/;
  (o = {}).NONE = "NONE";
  o.LOCAL = "LOCAL";
  o.NEWEST = "NEWEST";
  let $ = o;
  let j = async e => {
    var o;
    let i;
    let {
      token: l,
      clientvars: c,
      rootType: u,
      uuid: a
    } = e;
    if (!docxApplyChanges.isDocxApplyChanges()) {
      docxLoggerFactory.createLogger("CVC").info("applyCacheChanges but isDocxClientVarsApplyChangesEnabled is false");
      return c;
    }
    try {
      i = (await docxOfflineClientVarStore.getDocxVarStore(blockActionConstants.clientVarTypes.CLIENT_VARS_OP).getItem({
        key: blockActionConstants.cacheOpListKey,
        token: l,
        noDelayExcutor: true
      }))?.data;
    } catch (e) {
      return c;
    }
    if (!i || i.ops.length === 0) {
      return c;
    }
    if (!a || a !== i.uuid || i.pageVersion !== c.structure_version) {
      docxLoggerFactory.createLogger("CVC").info(`
        uuid: ${a},
        cacheOpList.uuid: ${i.uuid},
        cacheOpList.pageVersion: ${i.pageVersion},
        clientvars.pageVersion: ${c.structure_version}
      `);
      if (a) {
        docxEventCollector.docEventCollector("ccm_doc_client_vars_cache_error_dev", {
          action: "can_not_apply",
          message: `${a !== i.uuid}, ${i.pageVersion !== c.structure_version}`,
          detail: {
            uuid: a,
            cacheOpListUuid: i.uuid,
            cacheOpListVersion: i.pageVersion,
            clientvarsVersion: c.structure_version
          }
        });
      }
      return c;
    }
    try {
      new docBlockOperationManager.DocBlockManager({
        deletedBlocks: i.deletedBlocks,
        token: l
      }).applyCacheChanges(c, i);
      docxLoggerFactory.createLogger("CVC").info(`get clientvars apply success,
      uuid: ${a},
      pageVersion: ${c.structure_version},
      changes.length: ${i.length}
    `);
      docxEventCollector.docEventCollector("ccm_doc_client_vars_cache_dev", {
        status: "get_clientvars_apply_success",
        version: c.structure_version
      });
      return c;
    } catch (i) {
      docxEventCollector.docEventCollector("ccm_doc_client_vars_cache_error_dev", {
        action: "get_clientvars_apply_error",
        message: isErrorUtil.isError(i) ? i.message : String(i),
        detail: {
          version: c.structure_version
        }
      });
      let e = u === docBlockTypeConstants.blockTypeConstants.PAGE;
      let n = `CLIENT_VARS${e ? "" : l}`;
      if ((o = await docxOfflineClientVarStore.getDocxVarStore(blockActionConstants.clientVarTypes.CLIENT_VARS).getItem({
        key: n,
        token: l,
        noDelayExcutor: true
      })) === null || o === undefined) {
        return undefined;
      } else {
        return o.data?.data;
      }
    }
  };
  let V = e => {
    let {
      localClientvars: n,
      newestClientvars: r,
      baseVersion: o
    } = e;
    let i = n == null ? undefined : n.data.structure_version;
    let l = r == null ? undefined : r.data.structure_version;
    let c = {
      matchType: $.NONE,
      localVersion: i,
      newestVersion: l,
      baseVersion: o
    };
    let u = null;
    docxLoggerFactory.createLogger("CVC").info("select clientvars by version", i, l, o);
    if (i === o) {
      u = n;
      c.matchType = $.LOCAL;
    } else if (l === o) {
      u = r;
      c.matchType = $.NEWEST;
    } else if (i && l) {
      if (i > l) {
        u = n;
        c.matchType = $.LOCAL;
      } else {
        u = r;
        c.matchType = $.NEWEST;
      }
    } else if (i) {
      u = n;
      c.matchType = $.LOCAL;
    } else if (l) {
      u = r;
      c.matchType = $.NEWEST;
    }
    docxEventCollector.docEventCollector("ccm_doc_client_vars_cache_dev", {
      status: "select_clientvars_by_version",
      detail: c
    });
    return u;
  };
  let W = async e => {
    let {
      token: n,
      rootType: r,
      getLastBackupIsRestored: o,
      getNewestClientVars: i,
      getLocalClientVars: l
    } = e;
    let c = await o();
    if (!c) {
      return i(n, r);
    }
    let {
      isEmpty: u,
      isRestored: a,
      isError: s,
      baseVersion: d
    } = c;
    docxLoggerFactory.createLogger("CVC").info("last backup status", u, a, s, d);
    if (u || a || s || !d) {
      return i(n, r);
    }
    {
      let [e, o] = await Promise.all([i(n, r), l(n, r)]);
      return V({
        localClientvars: o,
        newestClientvars: e,
        baseVersion: d
      });
    }
  };
  let X = async e => {
    if (window.DATA && window.DATA.clientVars && es(window.DATA.clientVars, e)) {
      docxLoggerFactory.createLogger("CVC").info("get clientvars from window");
      let e = window.DATA.clientVars;
      window.DATA = null;
      return e;
    }
    return null;
  };
  let Y = async (e, n, r) => {
    let i = n === docBlockTypeConstants.blockTypeConstants.PAGE;
    let l = `${r ? "LOCAL_CLIENT_VARS" : "CLIENT_VARS"}${i ? "" : e}`;
    let c = await docxOfflineClientVarStore.getDocxVarStore(blockActionConstants.clientVarTypes.CLIENT_VARS).getItem({
      key: l,
      token: e,
      noDelayExcutor: true
    });
    let u = c == null ? undefined : c.data?.data;
    if (u) {
      docxLoggerFactory.createLogger("CVC").info("get clientvars from DB");
      c.data.data = await j({
        token: e,
        clientvars: c.data.data,
        uuid: c.data.data.uuid,
        rootType: n
      });
      documentPageIdRemapper.remapDocumentPageId(docTokenManager.getDocToken(), u);
      return c.data;
    } else {
      return null;
    }
  };
  let z = async function (e = docTokenManager.getDocToken()) {
    let n = await Y(e);
    return n || (await X(e));
  };
  let q = async function (e = docTokenManager.getDocToken()) {
    let n = await X(e);
    return n || (await Y(e));
  };
  let J = async function (e = docTokenManager.getDocToken()) {
    if (offlineStatusSelectorsUtils.isDocxOfflineEnabled() && docxApplyChanges.isDocxApplyChanges()) {
      return z(e);
    } else {
      return q(e);
    }
  };
  let Q = async function (e = docTokenManager.getDocToken(), n) {
    return Y(e, n, true);
  };
  let ee = async function (e = docTokenManager.getDocToken(), n = docBlockTypeConstants.blockTypeConstants.PAGE, r) {
    if (browserEnvironmentDetectionUtils_1.isBrowserEnvironment() && r) {
      return W({
        token: e,
        rootType: n,
        getLastBackupIsRestored: r,
        getNewestClientVars: J,
        getLocalClientVars: Q
      });
    } else {
      return await J(e);
    }
  };
  var spaceApiConfig = require("space-api-config") /*id: 11507*/;
  var docxEnvFeatureService = require("docx-env-feature-service") /*id: 23798*/;
  var docxOfflineStatusUtils = require("docx-offline-status-utils") /*id: 205871*/;
  var mobileOfflineStatusCheck = require("mobile-offline-status-check") /*id: 381620*/;
  var authTokenUrlUtils = require("auth-token-url-utils") /*id: 489098*/;
  let el = {};
  let ec = new Map();
  let eu = () => {
    var n;
    var r;
    var o;
    return ((o = reduxStoreInitializer.reduxStore.getState()) === null || o === undefined ? undefined : (r = o.appState) === null || r === undefined ? undefined : (n = r.template) === null || n === undefined ? undefined : n.currentPreviewTemplate?.objToken) || docTokenHelperUtils.resolveDocToken() || "";
  };
  function ea(e) {
    delete el[e];
    ec.delete(e);
  }
  function es(e, n) {
    if (e.code !== 0 || !e.data || !e.data.block_map) {
      return false;
    }
    let {
      data: r
    } = e;
    return r.id === n && !!r.block_map[n];
  }
  function ed(e, n) {
    el[e] = n;
  }
  async function ef() {
    return apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.fetchOKRUserRegionInfo, {
      baseURL: B()
    });
  }
  let eh = memoizeFunction.memoize(ef);
  async function e_() {
    if (["larksuite.com", "larksuite-boe.com"].some(e => {
      var n;
      return (platformDocUtils.d6y === null || platformDocUtils.d6y === undefined ? undefined : (n = platformDocUtils.d6y.hostname) === null || n === undefined ? undefined : n.indexOf(e)) > -1;
    })) {
      let {
        data: e
      } = await eh();
      let {
        block_host: n
      } = e;
      return B(n);
    }
    return B();
  }
  function ep(e) {
    var n;
    return syncUrlBlockUtils.isSyncingActive() && (n = e.code, ![errorStatusCodes.DataErrorCode.DataEmpty, errorStatusCodes.DataErrorCode.DataNotCompleteOrCanNotParse, errorStatusCodes.ErrorCode.COLD_DELETE, errorStatusCodes.ErrorCode.ServerException, errorStatusCodes.ErrorCode.Unknown].includes(n));
  }
  let eg = {
    get state() {
      return reduxStoreInitializer.reduxStore.getState().docx;
    },
    createDocxToken: e => apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.createDocxToken, e),
    deletePage: e => apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.deletePage, JSON.stringify({
      token: e
    })),
    deletePageCompletely: e => apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.deletePageCompletely, JSON.stringify({
      token: e
    })),
    recoverPage: e => apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.recoverPage, JSON.stringify({
      token: e
    })),
    fetchRecentPages(e) {
      return apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.recentPages, {
        params: {
          sort: 0,
          count: e.count,
          offset: e.offset,
          space: e.space || this.state.root.spaceInfo?.token
        }
      });
    },
    searchAll(e) {
      return apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.searchAll, {
        ...e,
        space: e.space || this.state.root.spaceInfo?.token
      });
    },
    fetchSpacePages(e) {
      return apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.spacePages, {
        params: {
          space_token: e || this.state.root.spaceInfo?.token
        }
      });
    },
    fetchRefPages: e => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.refPages, {
      params: {
        topic_token: e
      }
    }),
    createPage(e) {
      return apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.createPage, JSON.stringify({
        ...e,
        space: e.create_type === docApiConstants.contentTypes.SPACE ? undefined : this.state.root.spaceInfo?.token
      }));
    },
    createSpace: e => apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.createSpace, e),
    createPageV2(e) {
      return apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.createPageV2, JSON.stringify({
        ...e,
        space: e.create_type === docApiConstants.contentTypes.SPACE ? undefined : this.state.root.spaceInfo?.token
      }));
    },
    fetchGlobalGraph() {
      return apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.globalGraph, {
        params: {
          space: this.state.root.spaceInfo?.token
        }
      });
    },
    fetchPageTopicGraph: e => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.pageTopicGraph, {
      params: {
        page_token: e
      }
    }),
    fetchTopicTopicGraph: e => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.topicTopicGraph, {
      params: {
        topic_token: e
      }
    }),
    async fetchClientVarsSlicedByCache(e, n, r, o) {
      let i = r === docBlockTypeConstants.blockTypeConstants.PAGE;
      if (docUrlResolver.isDocDomain() && i) {
        return {
          isMockData: true,
          clientVarsCache: T()
        };
      }
      if (!i || e === fetchSyncConstants.fetchModes.TOP_BOTTOM || e === fetchSyncConstants.fetchModes.AroundV2 && docxOfflineStatusUtils.isDocxOfflineEnabled()) {
        let e = await ee(n, r, o);
        let i = (e == null ? undefined : e.has_more) && (e == null ? undefined : e.timestamp) && Date.now() - e.timestamp > 388800000;
        if (e && !i) {
          window.DATA = null;
          return {
            isMockData: false,
            clientVarsCache: e
          };
        }
        docxLoggerFactory.createLogger("CVC").info(`cache isExpired, ${e == null ? undefined : e.timestamp}`);
      }
      return null;
    },
    async fetchClientVarsSliced(e) {
      let n = {
        params: {
          ...throttledOmitPathStringify.omitPathStringify(e, ["extraParams"]),
          ...e.extraParams
        },
        noDelayExcutor: true,
        forceNoRetry: ep
      };
      return apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.clientVarsSliced, n);
    },
    fetchClientVarSlicedWithAnyParams: async e => otterDocApiServiceDi.getOtterDocService().AGWGetPageClientVars({
      ...e
    }),
    async fetchClientVarsFull(e) {
      let {
        token: n,
        extraParams: r = {}
      } = e;
      return otterDocApiServiceDi.getOtterDocService().AGWGetPageClientVars({
        id: n,
        ...r
      });
    },
    async fetchClientVars(e) {
      let {
        token: o,
        level: i = docApiConstants.referenceTypes.REFERENCE_ALL,
        canUseCache: l = false,
        extraParams: c = {},
        isLocalCreate: u = docUrlResolver.isDocDomain()
      } = e;
      let {
        version: a
      } = c;
      if (u) {
        return T(o);
      }
      l = false;
      let s = `${o}-${i}${a ? `-${a}` : ""}`;
      if (window.DATA?.clientVars || l && el[s]) {
        let e = window.DATA?.clientVars || el[s];
        window.DATA = null;
        if (es(e, o)) {
          return Promise.resolve(e);
        }
        ea(s);
      }
      let f = mobileOfflineStatusCheck.isMobileOrOffline() && !networkStateEventCollector.collectNetworkState() ? ee(o) : otterDocApiServiceDi.getOtterDocService().AGWGetPageClientVars({
        id: o,
        ...authTokenUrlUtils.getAuthInfo(),
        ...c
      });
      f.finally(() => {
        ec.delete(s);
      });
      let h = ec.get(s) || f;
      h.catch(() => {
        ea(s);
      });
      ec.set(s, h);
      let _ = await h;
      if (!_) {
        throw Error("[fetchClientVars] res is null");
      }
      el[s] = _;
      return _;
    },
    fetchBidrectionalLinks: e => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.bidirectionalLinks, {
      params: {
        token: e
      }
    }),
    fetchPageLinkReference: e => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.pageLinkReference, {
      params: {
        token: e
      }
    }),
    fetchPageRecordLinkReference: e => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.pageRecordLinkReference, {
      params: {
        token: e
      }
    }),
    fetchPageUnlinkedReference: e => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.unlinkedReference, {
      params: {
        token: e
      }
    }),
    fetchPageRecommend: e => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.pageRecommend, {
      params: {
        token: e
      }
    }),
    preUploadImage: e => apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.preUploadImage, {
      file_name: e.file.name,
      size: e.file.size,
      page_token: e.pageToken
    }),
    searchTopics(e) {
      return apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.searchTopics, {
        params: {
          keywords: e,
          space: this.state.root.spaceInfo?.token
        }
      });
    },
    searchRecords(e, n, r) {
      let i = r ? {
        cancelToken: new apiClientInstance.CancelToken(r)
      } : undefined;
      return apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.searchRecords, {
        keywords: e,
        types: n,
        space: this.state.root.spaceInfo?.token
      }, i);
    },
    fetchSpaceList: () => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.spaceList),
    fetchSpaceInfo: e => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.spaceInfo, {
      params: {
        token: e
      }
    }),
    fetchUserPermission: (e, n, r) => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.fetchUserPermission, {
      params: {
        token: e,
        type: n
      },
      timeout: r,
      baseURL: spaceApiConfig.getSpaceApiFn()
    }),
    fetchMetaInfo: (e, n) => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.suiteMeta, {
      params: {
        token: e,
        type: n
      },
      baseURL: spaceApiConfig.getSpaceApiFn()
    }),
    fetchAuthorizedUsers: (e, n, r) => apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.fetchAuthorizedUsers, {
      token: e,
      type: n,
      user_ids: r
    }, {
      baseURL: spaceApiConfig.getSpaceApiFn()
    }),
    updateSpaceInfo: e => apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.spaceUpdate, {
      space: throttledOmitPathStringify.omitPathStringify(e, "token"),
      token: e.token
    }),
    deleteSpace: e => apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.deleteSpace, {
      token: e
    }),
    getSpaceTemplateList: () => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.templateSpaceList),
    getPageTemplateList: () => apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.templatePageList, {
      source: 1
    }),
    createPageByTemplate(e, n) {
      return apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.createPageByTemplate, {
        token: e,
        space: n || this.state.root.spaceInfo?.token
      });
    },
    updatePageByTemplate: (e, n) => apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.updatePageByTemplate, {
      template: e,
      token: n
    }),
    registerWithCode: e => apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.registerWithCode, {
      code: e
    }),
    verifyRegisterCode: e => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.verifyRegisterCode, {
      params: {
        code: e
      }
    }),
    fetchSpaceMemberList: e => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.spaceMembers, {
      params: {
        space_token: e
      }
    }),
    inviteSpaceMember: (e, n) => apiClientInstance.apiClient.put(apiEndpointConstants.apiEndpoints.spaceMembers, {
      space_token: e,
      invitee_emails: [n]
    }),
    removeSpaceMember: (e, n) => apiClientInstance.apiClient.request({
      url: apiEndpointConstants.apiEndpoints.spaceMembers,
      method: "DELETE",
      data: {
        space_token: e,
        invitees: [n]
      }
    }),
    fetchInviteToken: e => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.getInviteToken, {
      params: {
        space: e
      }
    }),
    joinByInviteToken: e => apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.joinByInviteToken, {
      invite_token: e
    }),
    fetchAlignableData: (e, n) => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.objectiveAlign, {
      params: {
        token: e
      },
      cancelToken: new apiClientInstance.CancelToken(n)
    }),
    recommendContentTopic: e => apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.recommendContentTopic, e),
    topicRecommendFeedback: e => apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.topicRecommendFeedback, {
      ...e
    }),
    searchAt(e, n) {
      return apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.searchAt, {
        params: {
          keywords: e,
          space: this.state.root.spaceInfo?.token,
          token: n
        }
      });
    },
    fetchUserInfo(e, n = docTokenHelperUtils.resolveDocToken()) {
      let [r, o] = docxErrorUtils.partitionByDocToken(e);
      docxErrorUtils.trackInvalidRecords(o);
      return apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.recordClientVars, {
        page_id: n,
        ids: r
      }, {
        shouldRetry: true,
        timeout: 10000
      });
    },
    accountRelatedInfos(e) {
      return apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.accountRelatedInfos, {
        params: {
          uid: e,
          space: this.state.root.spaceInfo?.token
        }
      });
    },
    getRecordClientVars(e, n, r) {
      let [o, i] = docxErrorUtils.partitionByDocToken(e);
      docxErrorUtils.trackInvalidRecords(i);
      return otterDocApiServiceDi.getOtterDocService().AGWMGetBlockClientVars({
        page_id: n,
        ids: o
      });
    },
    getDetail: e => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.getDetail, {
      params: {
        obj_type: 22,
        token: e
      },
      baseURL: spaceApiConfig.getSpaceApiFn()
    }),
    fetchTrashList() {
      return apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.fetchTrashList, {
        params: {
          space: this.state.root.spaceInfo?.token
        }
      });
    },
    createMindmapBlock(e) {
      let {
        parentToken: n,
        parentType: r,
        recordId: o,
        content: i,
        title: l
      } = e;
      return apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.createMindmapBlock, {
        parent_token: n,
        parent_type: r,
        block_id: o,
        content: i,
        title: l
      }, {
        baseURL: spaceApiConfig.getSpaceApiFn()
      });
    },
    copyMindmapBlock(e) {
      let {
        parentToken: n,
        parentType: r,
        recordId: o,
        token: i,
        title: l
      } = e;
      return apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.copyMindmapBlock, {
        parent_token: n,
        parent_type: r,
        block_id: o,
        token: i,
        title: l
      }, {
        baseURL: spaceApiConfig.getSpaceApiFn()
      });
    },
    resourceCopyTo: (e, n, r, o, i) => Promise.all(e.map(e => otterDocApiServiceDi.getOtterDocService().AgwCopyAttachment({
      source_page_token: i,
      key: e,
      target_page_token: o
    }))).then(n => ({
      code: 0,
      data: {
        succ_files: Object.fromEntries(n.map((n, r) => {
          return [e[r], n == null ? undefined : n.data?.key];
        }))
      }
    })),
    fetchHistoryList: e => otterDocApiServiceDi.getOtterDocService().AGWListPageHistory(e),
    fetchHistorySnapshot: e => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.fetchHistorySnapshot, {
      params: e
    }),
    getOKRAPIBaseURLFromUserRegion: e_,
    async fetchOKRInfo(e) {
      let {
        target_doc_id: n = "",
        with_indicator: r = false,
        objective_list: o
      } = e;
      let i = await e_();
      return apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.fetchOKRInfo, {
        target_doc_id: n,
        with_indicator: r,
        objective_list: o
      }, {
        baseURL: i
      });
    },
    async syncOKRProgress(e) {
      let n = await e_();
      return apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.syncOKRProgress, {
        ...e
      }, {
        baseURL: n
      });
    },
    revert: e => otterDocApiServiceDi.getOtterDocService().AGWRevertPageHistory(e),
    revertACK: e => otterDocApiServiceDi.getOtterDocService().AGWRevertPageHistoryStatus(e),
    fetchChanges: e => otterDocApiServiceDi.getOtterDocService().AGWGetPageChanges(e),
    fetchCoverList: e => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.fetchCoverList, {
      params: {
        obj_token: e,
        obj_type: 22
      },
      baseURL: spaceApiConfig.getSpaceApiFn()
    }),
    copyCoverImage: (e, n) => apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.multiCopy, {
      files: e.map(e => ({
        file_token: e
      })),
      dest_mount_info: {
        mount_point: docApiConstants.fileTypes.IMAGE,
        mount_key: n,
        ext: {
          drive_route_token: n
        }
      }
    }, {
      headers: {
        "Content-Type": "application/json"
      },
      baseURL: spaceApiConfig.getSpaceApiFn()
    }),
    createImage: e => apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.createImage, {
      url: e,
      type: docApiConstants.attachmentTypes.Image
    }, {
      headers: {
        "Content-Type": "application/json"
      },
      baseURL: spaceApiConfig.getSamanthaRoute()
    }),
    checkImage: e => apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.checkImage, {
      task_id_list: e
    }, {
      headers: {
        "Content-Type": "application/json"
      },
      baseURL: spaceApiConfig.getSamanthaRoute()
    }),
    fetchSubscriptionChangeset: (e, n, r) => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.fetchSubscriptionChangeset, {
      params: {
        token: e,
        start_revision: n,
        end_revision: r,
        page_id: e,
        obj_type: 22
      },
      baseURL: spaceApiConfig.getSpaceApiFn(),
      headers: {
        Accept: "application/json"
      }
    }),
    fetchCompleteChanges: (e, n) => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.fetchCompleteChanges, {
      params: {
        token: e,
        subscribe_change_id: n,
        obj_type: 22
      },
      baseURL: spaceApiConfig.getSpaceApiFn(),
      headers: {
        Accept: "application/json"
      }
    }),
    fetchSubscriptionSnapshot: (e, n) => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.fetchSubscriptionSnapshot, {
      params: {
        token: e,
        revision: n,
        page_id: e,
        obj_type: 22
      },
      baseURL: spaceApiConfig.getSpaceApiFn(),
      headers: {
        Accept: "application/json"
      }
    }),
    getTranslateLangs: () => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.getTranslateLangs, {
      headers: {
        "Content-Type": "application/json"
      },
      baseURL: spaceApiConfig.getSpaceApiFn()
    }),
    updateUserTranslateSetting: e => apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.postUpdateUserTranslateSetting, e, {
      baseURL: spaceApiConfig.getSpaceApiFn()
    }),
    updateTranslateEngineModel: e => apiClientInstance.apiClient({
      url: apiEndpointConstants.apiEndpoints.updateTranslateEngineModel,
      method: "patch",
      data: e,
      baseURL: spaceApiConfig.getSpaceApiFn()
    }),
    getTranslateModels: () => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.getTranslateModels, {
      headers: {
        "Content-Type": "application/json"
      },
      baseURL: spaceApiConfig.getSpaceApiFn()
    }),
    requestEditors: e => apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.getUserList, {
      users: e,
      obj_type: 22,
      token: fileNodeSelectorUtils.getNodeSelector(reduxStoreInitializer.reduxStore.getState())
    }, {
      baseURL: spaceApiConfig.getSpaceApiFn()
    }),
    async updateRecentList(e, n = {}) {
      return apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.clientVars, {
        params: {
          id: e,
          open_type: 2,
          ...n
        }
      });
    },
    async fetchRecommendBlockTemplate(e) {
      let {
        cancelTokenSource: n
      } = e;
      return apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.getRecommendTemplateList, {
        baseURL: spaceApiConfig.getTemplatePath,
        params: {
          obj_token: docTokenHelperUtils.resolveDocToken(),
          obj_type: fileTypeConstants.BasicFileType.DOCX,
          scene: templateConstantsDef.templateObjectTypes.BLOCK
        },
        cancelToken: n == null ? undefined : n.token
      });
    },
    async searchBlockTemplate(e) {
      let {
        keyword: n,
        token: r,
        pageCount: o = 10,
        offset: i = 0,
        buffer: l,
        cancelTokenSource: c
      } = e;
      return apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.searchBlockTemplate, {
        params: {
          obj_type: fileTypeConstants.BasicFileType.DOCX,
          obj_token: r,
          offset: i,
          buffer: l,
          page_count: o,
          keyword: n,
          docx_template: 0,
          scene: templateConstantsDef.templateObjectTypes.BLOCK
        },
        baseURL: spaceApiConfig.getTemplatePath,
        cancelToken: c == null ? undefined : c.token
      });
    },
    createChildDocTimeout: 20000,
    async createChildDoc(e) {
      return apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.phxObj, {
        node_type: 0,
        obj_type: fileTypeConstants.BasicFileType.DOCX,
        ...e
      }, {
        baseURL: "/",
        timeout: this.createChildDocTimeout
      });
    },
    updateDocTitle: async e => apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.phxUpdateTitle, e, {
      baseURL: "/"
    }),
    async fetchOwnerFg(e, n = "web", r = "0.0.3", o) {
      let i = {
        baseURL: docxEnvFeatureService.getApiBaseUrl(),
        params: {
          version: r,
          platform: n,
          user_id: e,
          app_channel: o,
          tags: "DocxOwnerFG",
          fg_tags: "DocxOwnerFG"
        },
        withCredentials: false,
        ignoreAddBaseRequestHeader: true,
        noDataCode: true
      };
      try {
        var u;
        var a;
        let e;
        if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
          let n = axiosHttpClientLibrary.axios.create();
          n.interceptors.response.use(undefined, apiRetryInterceptor.createRetryInterceptor(n));
          e = await n.get(apiEndpointConstants.apiEndpoints.settingsV3, i);
        } else {
          e = await apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.settingsV3, i);
        }
        if (e == null) {
          return undefined;
        } else if ((a = e.data) === null || a === undefined) {
          return undefined;
        } else if ((u = a.data) === null || u === undefined) {
          return undefined;
        } else {
          return u.lark_features?.values;
        }
      } catch (e) {
        return;
      }
    },
    getDocumentConfig: e => otterDocApiServiceDi.getOtterDocService().AGWGetUserObjSetting({
      obj_token: e,
      obj_type: 22
    }).then(e => {
      let {
        data: n
      } = e;
      return (n == null ? undefined : n.page) || {};
    }),
    pullSearchSettings: () => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.PULL_SEARCH_SETTINGS, {
      params: {
        search_setting_type: 1
      },
      baseURL: "/"
    }),
    updateDocumentConfig(e) {
      var n = arguments.length;
      var r = Array(n > 1 ? n - 1 : 0);
      var o = 1;
      for (; o < n; o++) {
        r[o - 1] = arguments[o];
      }
      if (r.length) {
        return otterDocApiServiceDi.getOtterDocService().AGWUpdateUserObjSetting({
          obj_token: e,
          obj_type: 22,
          settings: r.map(e => {
            let {
              scene: n,
              settingValue: r
            } = e;
            return {
              key: n,
              value: r
            };
          })
        });
      } else {
        return Promise.resolve();
      }
    },
    async getBlockSSR(e) {
      let n = `https://${globalConfigGetters.getSpaceApiConfig()[0]}`;
      return apiClientInstance.apiClient.post("/ssr/docx/blocks/", e, {
        baseURL: `${n}${spaceApiConfig.getSpaceApiFn()}`
      });
    },
    getDocumentInfo: e => apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.GET_DOCUMENT_INFO, {
      params: {
        ...e,
        obj_type: platformDocUtils.kNj.DOCX
      },
      baseURL: spaceApiConfig.getSpaceApiFn()
    }).then(e => {
      let {
        data: n
      } = e;
      return n;
    }),
    getEditorRecommentList(e = 20, n = false) {
      let r = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
      return apiClientInstance.apiClient.get(apiEndpointConstants.apiEndpoints.GET_DOCUMENT_EDITOR, {
        params: {
          obj_type: platformDocUtils.kNj.DOCX,
          limit: e,
          token: eu(),
          brief_info: n,
          order_by: r ? "create_time" : undefined
        },
        baseURL: spaceApiConfig.getSpaceApiFn()
      }).then(e => {
        let {
          data: n
        } = e;
        return (n == null ? undefined : n.editors) || [];
      }).catch(() => []);
    },
    async getEditorInfo(e) {
      let n = Math.ceil(e.length / 100);
      let r = {};
      for (let o = 0; o < n; o++) {
        let n = o * 100;
        let i = n + 100;
        let l = e.slice(n, i);
        r = Object.assign(r, await apiClientInstance.apiClient.post(apiEndpointConstants.apiEndpoints.GET_DOCUMENT_EDITOR_INFO, {
          page_id: eu(),
          uids: l
        }, {
          headers: {
            "Content-Type": "application/json"
          },
          baseURL: spaceApiConfig.getSpaceApiFn()
        }).then(e => {
          if (e.code === 0) {
            return e.data?.editors || {};
          }
          throw e;
        }).catch(e => ({})));
      }
      return r;
    }
  };
  require.d(exports, {
    docxApiService: function () {
      return eg;
    },
    validateClientVars: function () {
      return es;
    },
    clearClientVarsCache: function () {
      return ea;
    },
    setClientVarsCache: function () {
      return ed;
    }
  });
}