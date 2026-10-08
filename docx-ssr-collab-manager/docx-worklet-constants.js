// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$o' to 'workletStates'
// - Renamed export 'B4' to 'updateOfflineUsableStatus'
// - Renamed export 'Kt' to 'ccmWorklet'
// - Renamed export 'WA' to 'downloadResource'
// - Renamed export 'Yl' to 'createDocxSuccess'
// - Renamed export 'd' to 'createDocxError'
// - Renamed export 'tB' to 'updateClientvars'
// - Renamed export 'to' to 'updateOpenWebviewToken'
// - Renamed export 'yR' to 'restoreCreate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 9960.98cb0478.js
         * chunkId: 9960
         * moduleId: 256071
         */
module.exports = function (module, exports, require) {
  var s;
  let n = "ccm-worklet";
  let o = "updateClientvars";
  let a = "updateOpenWebviewToken";
  let l = "restoreCreate";
  let c = "downloadResource";
  let h = "updateOfflineUsableStatus";
  let d = "CREATE_DOCX_SUCCESS";
  let u = "CREATE_DOCX_ERROR";
  (s = {})[s.open = 0] = "open";
  s[s.close = 1] = "close";
  s[s.create = 2] = "create";
  let f = s;
  require.d(exports, {
    workletStates: function () {
      return f;
    },
    updateOfflineUsableStatus: function () {
      return h;
    },
    ccmWorklet: function () {
      return n;
    },
    downloadResource: function () {
      return c;
    },
    createDocxSuccess: function () {
      return d;
    },
    createDocxError: function () {
      return u;
    },
    updateClientvars: function () {
      return o;
    },
    updateOpenWebviewToken: function () {
      return a;
    },
    restoreCreate: function () {
      return l;
    }
  });
}