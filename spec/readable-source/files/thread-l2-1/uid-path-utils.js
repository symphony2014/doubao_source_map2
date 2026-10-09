// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'getFileName'
// - Renamed export '_' to 'parseUidPath'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 368151
         */
module.exports = function (module, exports, require) {
  function i(e) {
    let t = e.split("/");
    if (t.length === 0) {
      return "";
    } else {
      return t[t.length - 1];
    }
  }
  function l(e) {
    if (!e) {
      return {
        uid: "",
        path: ""
      };
    }
    let t = decodeURI(e).match(/([^\/]+)\/(.+)/);
    let n = (t == null ? undefined : t[1]) || "";
    return {
      uid: n,
      path: (t == null ? undefined : t[2]) || "",
      uidPath: e
    };
  }
  require.d(exports, {
    getFileName: function () {
      return i;
    },
    parseUidPath: function () {
      return l;
    }
  });
}