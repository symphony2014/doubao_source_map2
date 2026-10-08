// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'ToolCallResult'
// - Renamed export 'k' to 'uploadToolCallResult'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 716038
         */
module.exports = function (module, exports, require) {
  var i;
  var serviceRequestHelpers = require("service-request-helpers") /*id: 410370*/;
  (i = {})[i.Reject = 1] = "Reject";
  i[i.Accept = 2] = "Accept";
  let r = i;
  let o = (e, t) => serviceRequestHelpers.normalRequest({
    url: "/samantha/tool/upload_tool_call_result",
    method: "POST",
    data: {
      task_id: e,
      client_id: "cloud_browser",
      result: t
    }
  });
  require.d(exports, {
    ToolCallResult: function () {
      return r;
    },
    uploadToolCallResult: function () {
      return o;
    }
  });
}