// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$J' to 'generateInlineDocData'
// - Renamed export 'CL' to 'isNodeUnreadable'
// - Renamed export 'FP' to 'getContentStatusMessage'
// - Renamed export 'Gi' to 'normalizeSuiteType'
// - Renamed export 'K3' to 'fetchDriveMetaBatch'
// - Renamed export 'OG' to 'getDefaultTitleByType'
// - Renamed export 'dJ' to 'getRootToken'
// - Renamed export 'eX' to 'isContentApplyable'
// - Renamed export 'g8' to 'isContentUnreadable'
// - Renamed export 'jG' to 'parseDriveUrlWithToken'
// - Renamed export 'tW' to 'getTitleFromMeta'
// - Renamed export 'wm' to 'fetchDriveMeta'
// - Renamed export 'xW' to 'getDocumentToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 759062
         */
module.exports = function (module, exports, require) {
  var driveUrlParserAxios = require("drive-url-parser-axios") /*id: 508792*/;
  var driveMetaBatchFetch = require("drive-meta-batch-fetch") /*id: 598363*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var driveFileTypeConstants_1 = require("drive-file-type-constants_1") /*id: 944521*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var embedObjectNameAccess = require("embed-object-name-access") /*id: 223936*/;
  var docHostTypeChecker = require("doc-host-type-checker") /*id: 713546*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var docPermissionStatusSelectors = require("doc-permission-status-selectors") /*id: 16982*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var syncedBlockFeatureFlags = require("synced-block-feature-flags") /*id: 711756*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var moduleActionConstants = require("module-action-constants") /*id: 47051*/;
  var customIconParser = require("custom-icon-parser") /*id: 148182*/;
  var mentionDocDataUpdateProvider = require("mention-doc-data-update-provider") /*id: 387558*/;
  var editorDataManagerClass = require("editor-data-manager-class") /*id: 699568*/;
  var inlineComponentConstants = require("inline-component-constants") /*id: 427890*/;
  var stubTrueFunctions = require("stub-true-functions") /*id: 386838*/;
  var otterDocApiServiceDi = require("otter-doc-api-service-di") /*id: 53616*/;
  let y = e => {
    let n = driveUrlParserAxios.parseDriveUrl(e, false);
    if ((n == null ? undefined : n.token) === "public") {
      let e = n.restText.match(/^\/([^#\/]+)(?=#|\/|$)/);
      n.token = (e == null ? undefined : e[1]) || "";
      n.url = n.token ? `${n.url + n.restText}` : n.url;
      n.restText = n.token ? "" : n.restText;
    }
    if (!(n == null ? undefined : n.token)) {
      return n;
    }
    let {
      token: r
    } = n;
    try {
      if (JSON.stringify(r).length - r.length > 10) {
        docxEventCollector.wrappedCollector("docs_blocks_abnormal_behaviour_trace_dev", {
          action: "has_ctrl_chars"
        });
        let e = [...r].filter(e => /^[a-zA-Z0-9]$/.test(e)).join("");
        return {
          ...n,
          token: e
        };
      }
      return n;
    } catch (e) {
      docxEventCollector.wrappedCollector("docs_blocks_abnormal_behaviour_trace_dev", {
        action: "has_ctrl_chars_catch"
      });
      return n;
    }
  };
  async function O(e, n) {
    var r;
    let o = n == null ? undefined : (r = n.editorAPI) === null || r === undefined ? undefined : r.getService(embedObjectNameAccess.embedObjectName);
    if (e.length <= 10) {
      return await S(e, o);
    }
    let i = function (e, n = 10) {
      let r = [];
      for (let o = 0; o < e.length; o += n) {
        r.push(e.slice(o, o + n));
      }
      return r;
    }(e, 10);
    let l = {};
    let c = i.map(e => S(e, o));
    (await Promise.all(c)).forEach(e => {
      if (e && typeof e == "object") {
        Object.assign(l, e);
      }
    });
    return l;
  }
  async function S(e, n) {
    return await driveMetaBatchFetch.getDriveMetaBatch(e, {
      post: async (e, r) => {
        let i = (await otterDocApiServiceDi.getOtterDocService().AGWMGetPageMeta({
          page_tokens: Object.values(r.tokens).reduce((e, n) => e.concat(n), []) || []
        })).data?.metas;
        let c = {};
        let u = [];
        if (i) {
          Object.keys(i).forEach(n => {
            let r = i[n].meta || {};
            let o = i[n].action_list || [];
            let a = r.title || platformDocUtils.getEmptyString(r.obj_type);
            c[n] = {
              ...r,
              token: n,
              create_date: r.create_time || 0,
              create_uid: r.creator_uid || 0,
              owner_id: r.owner_uid || 0,
              title: a,
              type: r.obj_type,
              url: e
            };
            u.push({
              token: n,
              title: a,
              type: r.obj_type,
              action_list: o
            });
          });
          if (n != null) {
            n.addPermissionFromMeta(u);
          }
        }
        return {
          data: c
        };
      }
    });
  }
  async function A(e) {
    let {
      token: n,
      mentionTypeNum: r,
      suiteTypeNum: o,
      url: i,
      blockToken: u,
      blockTypeNum: s,
      blockManager: d
    } = e;
    if (!n || isUndefinedCheck.isUndefined(r)) {
      docxEventCollector.wrappedCollector("docs_blocks_abnormal_behaviour_trace_dev", {
        action: "generateInlineDocData_return_1",
        info: `token: ${!!n}, mentionTypeNum: ${r}`
      });
      return;
    }
    let f = await O([{
      typeNum: o,
      token: n,
      blockToken: u,
      blockTypeNum: s
    }], d);
    let h = u ?? n;
    let _ = f[h];
    if (!_) {
      docxEventCollector.wrappedCollector("docs_blocks_abnormal_behaviour_trace_dev", {
        action: "generateInlineDocData_return_2"
      });
      return;
    }
    _.tenant_id;
    let g = _.title || platformDocUtils.getEmptyString(_.type) || t("common.unnamed_document");
    let E = _.type === platformDocUtils.kNj.DOC ? driveFileTypeConstants_1.FileType.DOC : _.type;
    let m = _.icon_info ? customIconParser.parseCustomIcon(_.icon_info, moduleActionConstants.actionTypes.API_BACKREF) : undefined;
    return {
      file_type: u ? _.type : r,
      suite_real_type_num: _.type,
      suite_real_url: _.url,
      icon_type: E,
      token: h,
      tenant_id: _.tenant_id,
      raw_url: i,
      title: g,
      icon_info: m && m.type !== 0 ? {
        type: m.type,
        key: m.key
      } : undefined
    };
  }
  async function L(e, n) {
    let r = [];
    e.forEach(e => {
      let n = y(e.component.data.raw_url);
      if (n) {
        r.push({
          typeNum: n.suiteTypeNum,
          token: n.token,
          blockTypeNum: n.blockTypeNum,
          blockToken: n.blockToken
        });
      }
    });
    let o = await O(r, n);
    e.forEach(async e => {
      let {
        data: {
          raw_url: r,
          token: i,
          file_type: u
        },
        id: a
      } = e.component;
      let {
        recordId: d
      } = e;
      let f = o[i];
      if (!f) {
        return;
      }
      let h = n.getRecord(d).snapshot.text;
      let _ = deepCloneWrapper_1.deepClone(h);
      editorDataManagerClass.EditorDataManager.replaceMark(_, inlineComponentConstants.componentType, (e, n) => {
        let o = JSON.parse(n);
        if (o.id !== a) {
          return n;
        }
        let s = f.title || platformDocUtils.getEmptyString(u) || t("common.unnamed_document");
        let d = f.type === platformDocUtils.kNj.DOC ? driveFileTypeConstants_1.FileType.DOC : f.type;
        let h = f.icon_info && stubTrueFunctions.alwaysTrueHelper() ? customIconParser.parseCustomIcon(f.icon_info, moduleActionConstants.actionTypes.API_META) : undefined;
        let _ = {
          file_type: u,
          icon_type: d,
          token: i,
          tenant_id: f.tenant_id,
          raw_url: r,
          title: s,
          icon_info: h && h.type !== 0 ? {
            type: h.type,
            key: h.key
          } : undefined
        };
        o.data = _;
        return JSON.stringify(o);
      });
      await n.applyTransaction("replaceInlineDocMeta", e => {
        e.replace(d, ["text"], _);
      }, {
        undoable: false
      });
    });
    let i = n.editorAPI.getService(mentionDocDataUpdateProvider.mentionDocDataToken, {
      optional: true,
      async: true
    });
    if (i != null) {
      i.then(e => e == null ? undefined : e.updateMentionIconInfo(o));
    }
  }
  function N(e, n, r) {
    if (n === driveFileTypeConstants_1.FileType.DOCX) {
      return r || t("common.unnamed_document");
    } else if (n === driveFileTypeConstants_1.FileType.SHEET) {
      return r || t("common.unnamed_sheet");
    } else {
      return r || "";
    }
  }
  function B(e) {
    let {
      title: n,
      type: r
    } = e;
    if (r === driveFileTypeConstants_1.FileType.DOCX) {
      return n || "";
    } else {
      return n;
    }
  }
  let D = e => {
    let {
      UNREADABLE_NOT_ALLOW_APPLY: n,
      NETWORK_ERROR: r
    } = inlineComponentConstants.contentStatus;
    return [n, r].includes(e);
  };
  let w = e => e === inlineComponentConstants.contentStatus.UNREADABLE_ALLOW_APPLY;
  let M = (e, n) => D(docPermissionStatusSelectors.getPermissionStatusForNode(reduxStoreInitializer.reduxStore.getState(), e, n));
  let P = e => e.config.get("noteToken") || e.config.get("rootRecordId") || e.config.get("token");
  let F = e => docHostTypeChecker.isSheetHost(e.config) ? docTokenHelperUtils.getRawDocToken() : syncedReferenceBlockUtils.isSyncedReferenceBlock(e.editorAPI) ? syncedBlockFeatureFlags.isSyncedBlockAuthEnabled() ? P(e) : docTokenHelperUtils.getRawDocToken() : syncUrlBlockUtils.isSyncingActive() ? syncedBlockFeatureFlags.isSyncedBlockAuthEnabled() ? syncUrlBlockUtils.getUrlToken() : docTokenHelperUtils.getRawDocToken() : P(e);
  function x(e) {
    return platformDocUtils.hco[e] || e;
  }
  function U(e, n) {
    let r = n ? t("LarkCCM_Docs_Perm_DisableViewDescription_InText_Tooltip_1_Mobile") : t("LarkCCM_Docs_Perm_DisableViewDescription_InText_Tooltip_1_Common");
    switch (e) {
      case inlineComponentConstants.contentStatus.NETWORK_ERROR:
        return t("LarkCCM_Docs_Perm_DisableViewDescription_InText_TimeOut_1_Common");
      case inlineComponentConstants.contentStatus.UNREADABLE_NOT_ALLOW_APPLY:
        return r;
      case inlineComponentConstants.contentStatus.NOT_EXIST:
        return t("common.document.not_exist");
      default:
        return t("LarkCCM_Docs_Perm_DisableViewDescription_InText_TimeOut_1_Common");
    }
  }
  require.d(exports, {
    generateInlineDocData: function () {
      return L;
    },
    isNodeUnreadable: function () {
      return M;
    },
    getContentStatusMessage: function () {
      return U;
    },
    normalizeSuiteType: function () {
      return x;
    },
    fetchDriveMetaBatch: function () {
      return O;
    },
    getDefaultTitleByType: function () {
      return N;
    },
    getRootToken: function () {
      return P;
    },
    isContentApplyable: function () {
      return w;
    },
    isContentUnreadable: function () {
      return D;
    },
    parseDriveUrlWithToken: function () {
      return y;
    },
    getTitleFromMeta: function () {
      return B;
    },
    fetchDriveMeta: function () {
      return A;
    },
    getDocumentToken: function () {
      return F;
    }
  });
}