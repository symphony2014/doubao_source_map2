// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'r' to 'creditPanelInitActions'
// - Resolved require(437103) to 'credit-panel-init-actions'
// - Renamed variable 'a' to 'chatCreditNoticePluginId'
// - Resolved require(61604) to 'chat-credit-notice-plugin-id'
// - Updated imported property 'E' to 'creditNoticePluginId' (module 61604)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'x' to 'CreditPanelActions' (module 437103)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 255806
         */
module.exports = function (module, exports, require) {
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var creditPanelInitActions = require("credit-panel-init-actions") /*id: 437103*/;
  let o = () => false;
  var chatCreditNoticePluginId = require("chat-credit-notice-plugin-id") /*id: 61604*/;
  function s(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let l = {
    CreditUserActivity: "credit_user_activity",
    CreditFissionCampaign: "credit_fission_campaign"
  };
  class c {
    constructor() {
      s(this, "pluginIdentifier", chatCreditNoticePluginId.creditNoticePluginId);
      s(this, "handleCmd", e => {
        if (o()) {
          return;
        }
        let {
          in_app_banner_notify: a
        } = e.data?.data || {};
        if ((a == null ? undefined : a.scene) !== "credit_point") {
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "CreditNoticeCmdPlugin_not_match_scene_return",
            meta: {
              notify: a
            }
          });
          return;
        }
        try {
          let e = JSON.parse(a.data || "{}");
          if (!e.pc_display || ![l.CreditUserActivity, l.CreditFissionCampaign].includes(e.push_type ?? "")) {
            loggerServiceCore.defaultLogger.persist.info({
              eventName: "CreditNoticeCmdPlugin_not_match_pc_return",
              meta: {
                notify: a
              }
            });
            return;
          }
          if (l.CreditUserActivity === e.push_type) {
            let {
              title: e,
              content: t
            } = a;
            creditPanelInitActions.CreditPanelActions.openDailyNotice({
              title: e,
              content: t
            });
          } else if (l.CreditFissionCampaign === e.push_type) {
            creditPanelInitActions.CreditPanelActions.openInviteNotice();
          }
        } catch (e) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "CreditNoticeCmdPlugin_ParseNotifyData_Error",
            error: e,
            meta: {
              notify: a
            }
          });
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    CreditNoticeCmdPlugin: function () {
      return c;
    }
  });
}