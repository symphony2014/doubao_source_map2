// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'aq' to 'getErrorDialogInfo'
// - Renamed export 'qv' to 'isDebugModeEnabled'
// - Renamed export 'Mk' to 'getScmDebugInfo'
// - Renamed export 'fV' to 'errorStatusCategories'
// - Renamed export 'Fk' to 'docBlockLimits'
// - Renamed export 'Up' to 'findErrorCategory'
// - Renamed export 'H0' to 'filterRecordsById'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29302.5675d381.js
         * chunkId: 29302
         * moduleId: 570520
         */
module.exports = function (module, exports, require) {
  var r;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  (r = {}).RefreshOnly = "refreshOnly";
  r.CopyRefresh = "copyRefresh";
  r.ContactUs = "contactUs";
  r.PermissionDenied = "permissionDenied";
  r.OverLimit = "overLimit";
  r.Noop = "noop";
  r.NotOops = "notOops";
  r.DownloadDoubaoPcClient = "downloadDoubaoPcClient";
  let l = r;
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var errorStatusCodes = require("error-status-codes") /*id: 187285*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  let d = {
    [l.RefreshOnly]: [collaborativeEditingFlowSyncModule.ErrorType.HANDLE_NEWCHANGES_NOT_EXIST_RECORD, collaborativeEditingFlowSyncModule.ErrorType.VERSION_TOO_OLD, errorStatusCodes.ErrorCode.TooOldPage, errorStatusCodes.ErrorCode.CursorExpired, errorStatusCodes.ErrorCode.BlockCountOverLimit, errorStatusCodes.ErrorCode.TooManyTableCell, errorStatusCodes.ErrorCode.TooManyTableColumn, errorStatusCodes.ErrorCode.DataMigrate, docxEditorConstantsConfig.documentStatusCodes.UPGRADING_FUSION_DOC, docxEditorConstantsConfig.documentStatusCodes.UPGRADED_FUSION_DOC],
    [l.CopyRefresh]: [errorStatusCodes.ErrorCode.ParamEmptyOrInvalid, errorStatusCodes.ErrorCode.DataDeleted, errorStatusCodes.ErrorCode.DataNotFound, errorStatusCodes.ErrorCode.RequestExceedLimit, errorStatusCodes.ErrorCode.ServerException, errorStatusCodes.ErrorCode.OverLimitChanges, errorStatusCodes.ErrorCode.TooManyPageOperation, collaborativeEditingFlowSyncModule.ErrorType.APPLY_FAILED, collaborativeEditingFlowSyncModule.ErrorType.CHANGE_CALLBACK_ERROR, collaborativeEditingFlowSyncModule.ErrorType.ILLEGAL_RECORD_SNAPSHOT, collaborativeEditingFlowSyncModule.ErrorType.ENTITY_NOT_EXIST, collaborativeEditingFlowSyncModule.ErrorType.SET_VERSION_ERROR, collaborativeEditingFlowSyncModule.ErrorType.SET_LOCAL_FAILED, collaborativeEditingFlowSyncModule.ErrorType.COLLECT_FAILED, collaborativeEditingFlowSyncModule.ErrorType.SUBMIT_OVER_TIME],
    [l.ContactUs]: [errorStatusCodes.ErrorCode.Unknown, errorStatusCodes.ErrorCode.AlgorithmFail, errorStatusCodes.ErrorCode.SchemaInvalid, errorStatusCodes.ErrorCode.MountPointError, errorStatusCodes.ErrorCode.IdConflict, collaborativeEditingFlowSyncModule.ErrorType.COMPOSE_TO_Y_FAILED, collaborativeEditingFlowSyncModule.ErrorType.TRANSFORM_X_FAILED, collaborativeEditingFlowSyncModule.ErrorType.TRANSFORM_Y_FAILED, collaborativeEditingFlowSyncModule.ErrorType.BLOCK_BUILD_FAILED, collaborativeEditingFlowSyncModule.ErrorType.RENDER_ERROR],
    [l.PermissionDenied]: [errorStatusCodes.ErrorCode.PermissionDenied, collaborativeEditingFlowSyncModule.ErrorType.NO_PERMISSION],
    [l.OverLimit]: [errorStatusCodes.ErrorCode.BlockCountOverLimit, errorStatusCodes.ErrorCode.TooManyChildrenInBlock],
    [l.Noop]: [errorStatusCodes.ErrorCode.OverLimitQuota],
    [l.NotOops]: [collaborativeEditingFlowSyncModule.ErrorType.NETWORK_ERROR, ...collaborativeEditingFlowSyncModule.recoverableErrorCodes, errorStatusCodes.ErrorCode.TNS_BLOCK_CODE],
    [l.DownloadDoubaoPcClient]: [docxEditorConstantsConfig.documentStatusCodes.DOUBAO_PC_CLIENT_UPGRADE]
  };
  let f = {
    ...d,
    [l.NotOops]: [...d[l.NotOops], errorStatusCodes.ErrorCode.LoginRequired]
  };
  var uiActionConstants_1 = require("ui-action-constants_1") /*id: 837679*/;
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  let p = {
    page: 20000,
    table_column: 100,
    table_cell: 2000
  };
  let b = {
    ...p,
    ...boolDefaultGetterUtil.getDefaultBool("docx_block_count_limit", p)
  };
  uiActionConstants_1.actionTypes.REFRESH;
  t("CreationDoc_DocX_Refresh_Button");
  uiActionConstants_1.actionTypes.COPY;
  t("CreationDoc_DocX_CopyContent_Button");
  uiActionConstants_1.actionTypes.CONTACT;
  t("CreationDoc_DocX_ContactSupport_Button");
  uiActionConstants_1.actionTypes.CANCEL;
  t("CreationDoc_DocX_NotSynced_dialog_cancel_btn");
  uiActionConstants_1.actionTypes.CREATE;
  t("CreationDoc_Alert_CopyAll_NewDocs_btn");
  let C = {
    [errorStatusCodes.ErrorCode.BlockCountOverLimit]: {
      title: t("CreationDoc_DocX_Block_UpperLimit_Dialog_Title"),
      content: t("CreationDoc_DocX_Block_UpperLimit_Dialog_Content", undefined, undefined, b.page)
    },
    [errorStatusCodes.ErrorCode.TooManyChildrenInBlock]: {
      title: t("LarkCCM_Docs_ContentLimitReached_Title"),
      content: t("LarkCCM_Docs_ContentLimitReached_Desc")
    },
    [errorStatusCodes.ErrorCode.TooManyTableCell]: {
      title: t("CreationDoc_DocX_Block_UpperLimit_Dialog_Title"),
      content: t("CreationDoc_Docs_InlineTable_SingleCellsTooMany", undefined, undefined, `${b.table_cell}`)
    },
    [errorStatusCodes.ErrorCode.TooManyTableColumn]: {
      title: t("CreationDoc_DocX_Block_UpperLimit_Dialog_Title"),
      content: t("CreationDoc_Docs_InlineTable_SingleColumnsTooMany", undefined, undefined, `${b.table_column}`)
    },
    [errorStatusCodes.ErrorCode.TooManyCharsInOneText]: {
      title: t("CreationDoc_DocX_OverBlockLimit_Title"),
      content: t("CreationDoc_DocX_OverBlockLimit")
    },
    [errorStatusCodes.ErrorCode.TooOldPage]: {
      title: t("CreationDoc_Docs_Refresh_Title"),
      content: t("CreationDoc_DocX_ErrorMessage1_desc")
    },
    [errorStatusCodes.ErrorCode.CursorExpired]: {
      title: t("CreationDoc_Docs_Refresh_Title"),
      content: t("CreationDoc_DocX_ErrorMessage1_desc")
    },
    [errorStatusCodes.ErrorCode.DataMigrate]: {
      title: t("CreationDoc_Docs_Refresh_Title"),
      content: t("CreationDoc_MultiGeo_900004230")
    },
    [errorStatusCodes.ErrorCode.TooManyPageOperation]: {
      content: t("CreationDoc_Docs_EditsOverload_Notification")
    },
    [errorStatusCodes.ErrorCode.LoginRequired]: {
      content: t("not_authorized.login_status_error")
    },
    [errorStatusCodes.ErrorCode.FetchClientVarOverTime]: {
      content: t("LarkCCM_Docs_Ooops_TimeOut_Text")
    },
    [l.PermissionDenied]: {
      title: t("CreationDoc_Common_PermissionChanged_Title"),
      content: t("CreationDoc_Common_PermissionChangedToView_Content")
    },
    [l.RefreshOnly]: {
      content: t("CreationDoc_DocX_ErrorMessage1_desc")
    },
    [l.ContactUs]: {
      content: t("CreationDoc_DocX_ErrorMessage4_desc")
    },
    [errorStatusCodes.ErrorCode.SaveWatchdogDBError]: {
      content: t("common.operate_fail_and_try_again")
    },
    [errorStatusCodes.ErrorCode.TooManyReferChartsInDocs]: {
      title: t("common.oops"),
      content: t("LarkCCM_Docs_CopySheetGraph_ChartLinkFailed_MaxChart_Toast", {
        num: 100
      })
    },
    [docxEditorConstantsConfig.documentStatusCodes.SECURITY_REVIEW_FAILED]: {
      title: t("common.oops"),
      content: t("doc_comment_create_security_toast")
    },
    [docxEditorConstantsConfig.documentStatusCodes.UPGRADING_FUSION_DOC]: {
      title: t("common.oops"),
      content: t("drive_toast_docs_upgrading_refresh", {
        s_refresh: t("drive_toast_docs_upgrading_refresh_linkText")
      })
    },
    [docxEditorConstantsConfig.documentStatusCodes.DOUBAO_PC_CLIENT_UPGRADE]: {
      title: t("common.oops"),
      content: t("doc_upgraded_updateApp_desktop")
    }
  };
  let E = e => {
    let n = Object.entries(f).find(n => {
      let [, o] = n;
      return o.includes(e);
    });
    if (n) {
      return n[0];
    } else {
      return null;
    }
  };
  let S = (e, n, o) => {
    let r = {
      title: t("CreationDoc_DocX_DocsWentWrong_Title"),
      content: o ? t("CreationDoc_DocX_ErrorMessage2_desc") : t("CreationDoc_DocX_ErrorMessage3_desc")
    };
    let i = C[n] || C[e] || {};
    return {
      ...r,
      ...i
    };
  };
  function h() {
    let e = "";
    let n = "";
    try {
      e = JSON.stringify(window.scm);
      n = JSON.stringify(window.scmDocx);
    } catch (e) {}
    return {
      scm: e,
      scmDocx: n
    };
  }
  function A() {
    let e = platformDocUtils.o0s.parseQuery(window.location.href);
    let n = ["dev", "vdx"].includes(objectPathGetDefault.getObjectPathDefault(window, "scmdocx.stage"));
    let o = e.debug === "1" || !!e.vdx;
    let r = (n || o) && e.debug !== "0";
    let l = objectPathGetDefault.getObjectPathDefault(window, "isDebugPackage");
    return r || l || !!objectPathGetDefault.getObjectPathDefault(window, "User.isDebugMode");
  }
  function D(e, n) {
    return Array.isArray(e) && e.length && e.every(e => {
      return (e == null ? undefined : e.record?.id) !== n;
    });
  }
  require.d(exports, {
    getErrorDialogInfo: function () {
      return S;
    },
    isDebugModeEnabled: function () {
      return A;
    },
    getScmDebugInfo: function () {
      return h;
    },
    errorStatusCategories: function () {
      return l;
    },
    docBlockLimits: function () {
      return b;
    },
    findErrorCategory: function () {
      return E;
    },
    filterRecordsById: function () {
      return D;
    }
  });
}