// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'userInfoStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 130751
         */
module.exports = function (module, exports, require) {
  let i = require("redux-persist-store-factory") /*id: 273160*/.createPersistStore({
    id: Symbol("flow-account-user-info-store"),
    createSlice: () => ({
      userInfo: null,
      isUserInfoLoaded: false
    })
  });
  require.d(exports, {
    userInfoStore: function () {
      return i;
    }
  });
}