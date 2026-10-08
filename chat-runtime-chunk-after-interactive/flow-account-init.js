// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'oauthProviderConfig'
// - Resolved require(419408) to 'oauth-provider-config'
// - Renamed variable 'r' to 'flowAccountModule'
// - Resolved require(898004) to 'flow-account-module'
// - Updated imported property 'F' to 'oauthConfig' (module 419408)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 932286
         */
module.exports = function (module, exports, require) {
  var oauthProviderConfig = require("oauth-provider-config") /*id: 419408*/;
  var flowAccountModule = require("flow-account-module") /*id: 898004*/;
  let o = e => {
    let {
      getPassportConfig: t = () => ({}),
      logoutRoute: n,
      useUserInfo: o
    } = e;
    let s = o();
    flowAccountModule.initFlowAccount({
      thirdPlatformConfig: oauthProviderConfig.oauthConfig,
      logoutRoute: n,
      ...((t == null ? undefined : t()) || {}),
      checkLogin: e => {
        let {
          onLogin: n,
          onUnlogin: i,
          onError: r
        } = e;
        if (s == null ? undefined : s.data?.user_id_str) {
          if (n != null) {
            n(s.data);
          }
        } else if (s.success) {
          if (r != null) {
            r(Error("[CheckLogin]: UserInfo success but no user_id."));
          }
        } else if (i != null) {
          i();
        }
      }
    });
  };
  require.r(exports);
  require.d(exports, {
    useInitFlowAccount: function () {
      return o;
    }
  });
}