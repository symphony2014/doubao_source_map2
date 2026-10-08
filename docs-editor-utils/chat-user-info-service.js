// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'userInfoService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 152763
         */
module.exports = function (module, exports, require) {
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  let c = {
    getCurrentUser: () => ({
      get: e => e === "id" ? chatUserInfoActions.getUserIdStr() : ""
    }),
    isNewUser: e => false,
    getCurrentUserName: e => "testName",
    getCurrentUserTenant: () => ({}),
    getCurrentUserId: () => chatUserInfoActions.getUserIdStr(),
    isUserReady: () => true,
    waitUserReady: () => true,
    localeToI18nLang: () => "zh",
    getDisplayName: () => "testName",
    isEquipmentUser: () => true,
    getUserName(e) {
      var r;
      var i;
      let c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      if (arguments.length > 2 && arguments[2] !== undefined) {
        arguments[2];
      }
      if (!e) {
        return "";
      }
      let u = reduxStoreInitializer.reduxStore === null || reduxStoreInitializer.reduxStore === undefined ? undefined : reduxStoreInitializer.reduxStore.getState();
      if (!u) {
        return c;
      }
      let a = u == null ? undefined : u.appState?.members;
      if (!a) {
        return c;
      }
      let s = null;
      if ((i = objectValuesHelper.getObjectValues(a)) !== null && i !== undefined && (r = i.forEach) !== null && r !== undefined) {
        r.call(i, n => {
          var r;
          if ((r = n.forEach) !== null && r !== undefined) {
            r.call(n, n => {
              if ((n == null ? undefined : n.user_id) === e) {
                s = n == null ? undefined : n.cn_name;
              }
            });
          }
        });
      }
      return s || c;
    }
  };
  require.d(exports, {
    userInfoService: function () {
      return c;
    }
  });
}