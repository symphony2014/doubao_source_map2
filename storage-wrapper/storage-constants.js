// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'HB' to 'storageTypes'
// - Renamed export 'hu' to 'storageStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47421.f728df43.js
         * chunkId: 47421
         * moduleId: 340491
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var i;
  var a;
  var u;
  var c;
  (a = n ||= {}).LOCALSTORAGESYNC = "localStorageSync";
  a.INDEXEDDB = "asyncStorage";
  a.WEBSQL = "webSQLStorage";
  a.LOCALSTORAGEASYNC = "localStorageWrapper";
  (u = o ||= {}).LocalStorage = "localStorage";
  u.IndexedDB = "persistentStorage";
  u.SessionStorage = "sessionStorage";
  (c = i ||= {})[c.SUCCESS = 0] = "SUCCESS";
  c[c.FAIL = 1] = "FAIL";
  require.d(exports, {
    storageTypes: function () {
      return n;
    },
    storageStatus: function () {
      return i;
    }
  });
}