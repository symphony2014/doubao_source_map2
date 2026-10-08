// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'vU' to 'statusCodes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 497936
         */
module.exports = function (module, exports, require) {
  let i = {
    TIMEOUT: "ECONNABORTED",
    SUCCESS: 0,
    FAILED: 1,
    INVALID_PARAMETERS: 2,
    NOT_FOUND: 3,
    FORBIDDEN: 4,
    LOGIN_REQUIRED: 5,
    DATA_EXCEED_LIMIT: 6,
    OBJCT_DELETED: 7,
    SCOPE_FAIL: 9,
    RESOURCE_EXPIRED: 600,
    CONNECT_ERROR: "-8",
    JS_INTERNAL_ERROR: "-9",
    REQUEST_BIZ_ERROR: "-10",
    NOTE_DELETED: 1002,
    CONNECT_ABORT: "CONNECT_ABORT",
    PROMPT_MODIFY_WHEN_VIOLATE_POLICIES: 10009,
    PROMPT_CONTACT_WHEN_VIOLATE_POLICIES: 10013,
    PASSWORD_REQUIRED: 10016,
    KEY_INVALID: 900021001,
    JSSDK_SESSION_SERVICE_TIMEOUT: 254126802,
    DOCX_OFFLINE_NOT_SYNCED: -20,
    DOCX_OFFLINE_NOT_SYNCED_FINISH: -21
  };
  i.LOGIN_REQUIRED;
  i.INVALID_PARAMETERS;
  i.FORBIDDEN;
  i.NOTE_DELETED;
  i.OBJCT_DELETED;
  i.NOT_FOUND;
  i.PROMPT_MODIFY_WHEN_VIOLATE_POLICIES;
  i.PROMPT_CONTACT_WHEN_VIOLATE_POLICIES;
  let o = {
    STATUS_CODE: i
  };
  require.d(exports, {
    statusCodes: function () {
      return o;
    }
  });
}