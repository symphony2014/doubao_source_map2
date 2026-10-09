// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Qg' to 'searchAttachments'
// - Renamed export 'Wq' to 'handleAiSpaceError'
// - Renamed export 'Ws' to 'fetchHomepage'
// - Renamed export 'XY' to 'fetchShareHistory'
// - Renamed export 'Yj' to 'fetchLatestUsed'
// - Renamed export 'nG' to 'fetchNodeInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19113.77dfd3b6.js
         * chunkId: 19113
         * moduleId: 563338
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  var businessLayoutConstants = require("business-layout-constants") /*id: 252973*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  var apiErrorChecker = require("api-error-checker") /*id: 429379*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  function p(e) {
    if (!e) {
      return false;
    }
    let {
      node_type: a
    } = e || {};
    let n = e.content?.directory_type;
    return !isUndefinedCheck.isUndefined(n) && a === businessLayoutConstants.ItemType.Directory && n !== businessLayoutConstants.ViewCategory.Default;
  }
  async function m(e) {
    let t;
    try {
      let {
        data: a
      } = await apiServicesCollection.SamanthaApiService.AISpaceNodeInfo(e);
      if (!a) {
        return Promise.reject(Error("FetchNodeInfoApiDataNotFound"));
      }
      let {
        children: i
      } = a;
      a.children = i == null ? undefined : i.filter(e => !p(e));
      t = a;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        message: "FetchNodeInfoApiError",
        error: e
      });
      return Promise.reject(e);
    }
    return t;
  }
  async function f(e) {
    let t;
    try {
      let {
        data: a
      } = await apiServicesCollection.SamanthaApiService.AISpaceHomepage(e);
      if (!a) {
        return Promise.reject(Error("FetchAISpaceHomepageDataApiDataNotFound"));
      }
      let {
        children: i
      } = a;
      a.children = i == null ? undefined : i.filter(e => !p(e));
      t = a;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        message: "FetchNodeInfoApiError",
        error: e
      });
      return Promise.reject(e);
    }
    return t;
  }
  async function h(e) {
    try {
      let {
        data: t
      } = await apiServicesCollection.SamanthaApiService.AISpaceShareHistory(e);
      if (!t) {
        throw Error("FetchAISpaceShareHistoryDataNotFound");
      }
      return t;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        message: "FetchAISpaceShareHistoryApiError",
        error: e
      });
      throw e;
    }
  }
  let v = {
    [chatErrorCodes.chatErrorCodes.AI_SPACE_NODE_COUNT_EXCEED_ERROR]: "aispace_operation_failed_exceeds_file_number_limit_of_folder",
    [chatErrorCodes.chatErrorCodes.AI_SPACE_TREE_DEPTH_EXCEED_ERROR]: "aispace_current_directory_cannot_add_more_subfolders",
    [chatErrorCodes.chatErrorCodes.AI_SPACE_NODE_SIZE_EXCEED_ERROR]: "aispace_exceeds_maximum_single_file_size_of_100M",
    [chatErrorCodes.chatErrorCodes.AI_SPACE_STORAGE_EXCEED_ERROR]: "aispace_cannot_upload_exceeds_space_capacity_limit",
    [chatErrorCodes.chatErrorCodes.AI_SPACE_NODE_NOT_EXIST_ERROR]: "aispace_node_does_not_exist",
    [chatErrorCodes.chatErrorCodes.AI_SPACE_NODE_UNDER_REVIEW_ERROR]: "aispace_content_reviewing_visitor"
  };
  let y = e => {
    let {
      t,
      error: a,
      defaultTip: i,
      scene: o
    } = e;
    if (apiErrorChecker.isApiError(a)) {
      let {
        code: e
      } = a.errorOption;
      let {
        msg: i
      } = a.errorOption.response || {};
      if (String(e) === String(chatErrorCodes.chatErrorCodes.SECURITY_RESOURCE_REJECTED) && i && typeof i == "string") {
        samanthaToastFactory.toastInstance.error(i);
        return;
      }
      let s = e && objectPathGetDefault.getObjectPathDefault(v, e);
      if (s) {
        return samanthaToastFactory.toastInstance.error(t(s));
      }
      if (String(e) === String(chatErrorCodes.chatErrorCodes.AI_SPACE_NODE_MIGRATING)) {
        let e = {
          [chatAiConstants.docType.Pages]: "drive_toast_docs_upgrading",
          [chatAiConstants.docType.Default]: "drive_toast_drive_upgrading",
          [chatAiConstants.docType.MeetingMinutes]: "drive_toast_drive_upgrading",
          [chatAiConstants.docType.Creation]: "drive_toast_drive_upgrading"
        };
        return samanthaToastFactory.toastInstance.info(t(e[o || chatAiConstants.docType.Default]));
      }
      if (String(e) === String(chatErrorCodes.chatErrorCodes.AI_SPACE_NODE_MIGRATED)) {
        return modalConfirmDialogManager.ModalConfirmDialog.confirm({
          title: t("drive_toast_upgraded_useNew_cta"),
          okText: t("drive_toast_upgraded_useNew_cta"),
          content: t("drive_toast_upgraded_useNew", {
            s_newDrive: t("drive_toast_upgraded_useNew_cta")
          }),
          hasCancel: false,
          zIndex: 1020,
          centered: true,
          onOk: () => {
            window.location.href = "/chat/drive";
          }
        });
      }
    }
    if ((a == null ? undefined : a.name) === "feishusdkapierror") {
      let e = {
        4: t("drive_larkCCM_errorCode_4", {
          brandName_feishu: t("brandName_feishu")
        }),
        10004: t("drive_larkCCM_errorCode_10004", {
          brandName_feishu: t("brandName_feishu")
        }),
        10042: t("drive_larkCCM_errorCode_10042", {
          brandName_feishu: t("brandName_feishu")
        }),
        10055: t("drive_larkCCM_errorCode_10055", {
          brandName_feishu: t("brandName_feishu")
        })
      };
      let i = a == null ? undefined : a.code;
      if (Object.hasOwnProperty.call(e, i)) {
        samanthaToastFactory.toastInstance.error(e[i]);
        return;
      }
    }
    if (i) {
      return samanthaToastFactory.toastInstance.error(i);
    }
  };
  let S = async e => {
    let t;
    try {
      let {
        data: a
      } = await apiServicesCollection.SamanthaApiService.AISpaceAttachmentSearch(e);
      if (!a) {
        return Promise.reject(Error("FetchAISpaceSearchDataApiDataNotFound"));
      }
      t = a;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        message: "FetchAISpaceSearchDataApiError",
        error: e
      });
      return Promise.reject(e);
    }
    return t;
  };
  let g = async e => {
    let t;
    let {
      fileTypes: a,
      limit: i
    } = e;
    try {
      let {
        data: e
      } = await apiServicesCollection.SamanthaApiService.AISpaceAttachmentLatestUsed({
        file_types: a,
        limit: i
      });
      if (!e) {
        return Promise.reject(Error("FetchAISpaceLatestUsingApiDataNotFound"));
      }
      t = e;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        message: "FetchLatestUsingApiError",
        error: e
      });
      return Promise.reject(e);
    }
    return t;
  };
  require.d(exports, {
    searchAttachments: function () {
      return S;
    },
    handleAiSpaceError: function () {
      return y;
    },
    fetchHomepage: function () {
      return f;
    },
    fetchShareHistory: function () {
      return h;
    },
    fetchLatestUsed: function () {
      return g;
    },
    fetchNodeInfo: function () {
      return m;
    }
  });
}