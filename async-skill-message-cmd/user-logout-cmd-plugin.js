// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'userInfoStatusSelectors'
// - Resolved require(480327) to 'user-info-status-selectors'
// - Renamed variable 'o' to 'flowAccountModule'
// - Resolved require(898004) to 'flow-account-module'
// - Renamed variable 'n' to 'userLogoutCmdPlugin_1'
// - Resolved require(710320) to 'user-logout-cmd-plugin_1'
// - Updated imported property 'O' to 'userLogoutCmd' (module 710320)
// - Updated imported property 'M7' to 'selectUserInfoSuccess' (module 480327)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 36412.de787f1e.js
         * chunkId: 36412
         * moduleId: 484028
         */
module.exports = function (module, exports, require) {
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var flowAccountModule = require("flow-account-module") /*id: 898004*/;
  var userLogoutCmdPlugin_1 = require("user-logout-cmd-plugin_1") /*id: 710320*/;
  function u(t, r, e) {
    var i;
    if ((r = typeof (i = function (t, r) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var e = t[Symbol.toPrimitive];
      if (e !== undefined) {
        var i = e.call(t, r || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(t);
    }(r, "string")) == "symbol" ? i : i + "") in t) {
      Object.defineProperty(t, r, {
        value: e,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[r] = e;
    }
    return t;
  }
  class s {
    constructor() {
      u(this, "pluginIdentifier", userLogoutCmdPlugin_1.userLogoutCmd);
      u(this, "handleCmd", t => {
        if (userInfoStatusSelectors.selectUserInfoSuccess()) {
          flowAccountModule.getFlowAccount().passportApi.logout({
            reason: "cmd_user_logout",
            trackMeta: {
              from: "cmd",
              cmd: t
            }
          });
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    UserLogoutMessageCmdPlugin: function () {
      return s;
    }
  });
}