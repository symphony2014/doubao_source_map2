// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'HS' to 'getErrorMessage'
// - Renamed export 'NI' to 'ErrorCode'
// - Renamed export 'du' to 'DataErrorCode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 187285
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  (o = {})[o.Success = 0] = "Success";
  o[o.Unknown = 1] = "Unknown";
  o[o.ParamEmptyOrInvalid = 2] = "ParamEmptyOrInvalid";
  o[o.LoginRequired = 5] = "LoginRequired";
  o[o.PermissionDenied = 4] = "PermissionDenied";
  o[o.ServerException = 5000000] = "ServerException";
  o[o.TooManyPageOperation = 5000101] = "TooManyPageOperation";
  o[o.DataDeleted = 3] = "DataDeleted";
  o[o.DataNotFound = 7] = "DataNotFound";
  o[o.AlgorithmFail = 4000040] = "AlgorithmFail";
  o[o.SchemaInvalid = 4000020] = "SchemaInvalid";
  o[o.IdConflict = 4000050] = "IdConflict";
  o[o.RequestExceedLimit = 4290000] = "RequestExceedLimit";
  o[o.MountPointError = 4000030] = "MountPointError";
  o[o.OverLimitChanges = 4130000] = "OverLimitChanges";
  o[o.OverLimitQuota = 4000000] = "OverLimitQuota";
  o[o.BlockCountOverLimit = 4000010] = "BlockCountOverLimit";
  o[o.TooManyChildrenInBlock = 4000021] = "TooManyChildrenInBlock";
  o[o.TooManyTableColumn = 4000024] = "TooManyTableColumn";
  o[o.TooManyTableCell = 4000025] = "TooManyTableCell";
  o[o.TooManyCharsInOneText = 4000027] = "TooManyCharsInOneText";
  o[o.TooOldPage = 4000090] = "TooOldPage";
  o[o.CursorExpired = 4000091] = "CursorExpired";
  o[o.NoPerm = 4030004] = "NoPerm";
  o[o.TooManyReferChartsInDocs = 4000012] = "TooManyReferChartsInDocs";
  o[o.NotFound = 4000003] = "NotFound";
  o[o.ResourceDeleted = 4000007] = "ResourceDeleted";
  o[o.SaveWatchdogError = -401001] = "SaveWatchdogError";
  o[o.SaveWatchdogDBError = -401002] = "SaveWatchdogDBError";
  o[o.WatchdocCloneFail = -401003] = "WatchdocCloneFail";
  o[o.OfflineCreateRetryOverTimes = -4020001] = "OfflineCreateRetryOverTimes";
  o[o.OfflineRestoreFail = -4030001] = "OfflineRestoreFail";
  o[o.BlockOopsError = -4000099] = "BlockOopsError";
  o[o.TRANSLATE_TRANSFORM = -5000001] = "TRANSLATE_TRANSFORM";
  o[o.DBException = 102002] = "DBException";
  o[o.RPCException = 102003] = "RPCException";
  o[o.SystemInternalError = 201001] = "SystemInternalError";
  o[o.DataException = 202001] = "DataException";
  o[o.OperateInvalid = 203002] = "OperateInvalid";
  o[o.IdNotFound = 203005] = "IdNotFound";
  o[o.NeedInvitationCode = 204001] = "NeedInvitationCode";
  o[o.UserIsExists = 204002] = "UserIsExists";
  o[o.UserNotFound = 204003] = "UserNotFound";
  o[o.InvitationCodeError = 204004] = "InvitationCodeError";
  o[o.GetUserError = 204005] = "GetUserError";
  o[o.PassportError = 204006] = "PassportError";
  o[o.SearchServiceError = 205001] = "SearchServiceError";
  o[o.DataMigrate = 900004230] = "DataMigrate";
  o[o.KEY_INVALID = 900021001] = "KEY_INVALID";
  o[o.COLD_DELETE = 600] = "COLD_DELETE";
  o[o.FetchClientVarOverTime = -16] = "FetchClientVarOverTime";
  o[o.TNS_BLOCK_CODE = 900099021] = "TNS_BLOCK_CODE";
  o[o.DocMigrating = 672040002] = "DocMigrating";
  let l = o;
  (i = {})[i.DataEmpty = -110022] = "DataEmpty";
  i[i.DataNotCompleteOrCanNotParse = -110011] = "DataNotCompleteOrCanNotParse";
  let c = i;
  let u = window.t;
  let a = {
    [l.LoginRequired]: u("err_code.login_required"),
    [l.PermissionDenied]: u("err_code.permission_denied"),
    [l.ServerException]: u("err_code.server_exception"),
    [l.DataException]: u("err_code.data_exception"),
    [l.DataDeleted]: u("err_code.data_deleted"),
    [l.DataNotFound]: u("err_code.data_not_found"),
    [l.NeedInvitationCode]: u("err_code.need_invitation_code"),
    [l.UserIsExists]: u("err_code.user_is_exists"),
    [l.UserNotFound]: u("err_code.user_ot_found"),
    [l.InvitationCodeError]: u("err_code.invitation_code_error"),
    [l.GetUserError]: u("err_code.get_user_error"),
    [l.PassportError]: u("err_code.passport_error"),
    [l.SearchServiceError]: u("err_code.search_service_error"),
    [l.RequestExceedLimit]: u("CreationDoc_Common_TooManyReq_Toast"),
    [l.DataMigrate]: u("CreationDoc_MultiGeo_900004230"),
    [l.DocMigrating]: u("doc_toast_upgrading_editNA")
  };
  function s(e) {
    if (e === undefined) {
      return u("err_code.unknown");
    }
    let n = a[e] || u("err_code.unknown");
    return `${n} [${e}]`;
  }
  require.d(exports, {
    getErrorMessage: function () {
      return s;
    },
    ErrorCode: function () {
      return l;
    },
    DataErrorCode: function () {
      return c;
    }
  });
}