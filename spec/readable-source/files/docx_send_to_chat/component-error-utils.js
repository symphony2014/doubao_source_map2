// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'JU' to 'createErrorInfo'
// - Renamed export 'Q_' to 'StatusCodes'
// - Renamed export 'RY' to 'ComponentName'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_send_to_chat.7c9030fe.js
         * chunkId: 82045
         * moduleId: 631657
         */
module.exports = function (module, exports, require) {
  let i = "ccm_component_dev";
  let n = {
    SUCCESS: "success",
    FAIL: "fail"
  };
  function a(e, t) {
    let d = (e == null ? undefined : e.msg) || (e == null ? undefined : e.message);
    if (!d) {
      try {
        d = e instanceof Error ? e.toString() : JSON.stringify(e);
      } catch (e) {
        d = "";
      }
    }
    try {
      let p = Object.assign({
        errorMsg: d || ""
      }, typeof t == "object" ? t : {
        otherMsg: t
      });
      return {
        code: (e == null ? undefined : e.code) || -99999,
        statusCode: (e == null ? undefined : e.originalError)?.response?.status || (e == null ? undefined : e.response)?.status || -99999,
        logid: (e == null ? undefined : e.originalError)?.response?.config?.logId || (e == null ? undefined : e.response)?.config?.headers?.["X-TT-LOGID"] || "",
        message: JSON.stringify(p)
      };
    } catch (e) {
      return {
        code: -99999,
        statusCode: -99999,
        logid: "",
        message: ""
      };
    }
  }
  require.d(exports, {
    createErrorInfo: function () {
      return a;
    },
    StatusCodes: function () {
      return n;
    },
    ComponentName: function () {
      return i;
    }
  });
}