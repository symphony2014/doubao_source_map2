// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatRouteSkillMapper'
// - Resolved require(467072) to 'chat-route-skill-mapper'
// - Renamed variable 'r' to 'useLocationWrapper'
// - Resolved require(999635) to 'use-location-wrapper'
// - Renamed variable 'o' to 'creditConfigCheck'
// - Resolved require(492264) to 'credit-config-check'
// - Renamed variable 'a' to 'deepEqualityUtil'
// - Resolved require(249434) to 'deep-equality-util'
// - Renamed variable 's' to 'sendMessageIcon'
// - Resolved require(11499) to 'send-message-icon'
// - Renamed variable 'l' to 'uiPanelStateStore'
// - Resolved require(440908) to 'ui-panel-state-store'
// - Renamed variable 'c' to 'creditPanelInitActions'
// - Resolved require(437103) to 'credit-panel-init-actions'
// - Renamed variable 'd' to 'fetchCreditInfoRequestHook'
// - Resolved require(406055) to 'fetch-credit-info-request-hook'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g' to 'fetchCreditInfoRequest' (module 406055)
// - Updated imported property 'w' to 'usePanelStore' (module 440908)
// - Updated imported property 'X' to 'deepEqual' (module 249434)
// - Updated imported property 'x' to 'CreditPanelActions' (module 437103)
// - Updated imported property 'l' to 'SendIcon' (module 11499)
// - Updated imported property 'V' to 'isCreditEnabled' (module 492264)
// - Updated imported property 'T' to 'useLocationWrapper' (module 999635)
// - Updated imported property 'rF' to 'skillTypeKeys' (module 467072)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 515832
         */
module.exports = function (module, exports, require) {
  var chatRouteSkillMapper = require("chat-route-skill-mapper") /*id: 467072*/;
  var useLocationWrapper = require("use-location-wrapper") /*id: 999635*/;
  var creditConfigCheck = require("credit-config-check") /*id: 492264*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var sendMessageIcon = require("send-message-icon") /*id: 11499*/;
  var uiPanelStateStore = require("ui-panel-state-store") /*id: 440908*/;
  var creditPanelInitActions = require("credit-panel-init-actions") /*id: 437103*/;
  var fetchCreditInfoRequestHook = require("fetch-credit-info-request-hook") /*id: 406055*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = () => {
    fetchCreditInfoRequestHook.fetchCreditInfoRequest();
    let {
      creditInfo: t
    } = uiPanelStateStore.usePanelStore(e => ({
      creditInfo: e.creditInfo
    }), deepEqualityUtil.deepEqual);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: `
        flex h-[30px] cursor-pointer items-center justify-center rounded-10
        pr-[6px] pl-[10px]
        hover:bg-s-color-bg-trans
      `,
      onClick: () => creditPanelInitActions.CreditPanelActions.openCreditPanel({
        from: "personal_profile"
      }),
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "mr-[2px] flex-none text-[14px] font-semibold",
        children: (t == null ? undefined : t.total_credit_num) ?? "-"
      }), reactJsxRuntimeCoreReexport.jsx(sendMessageIcon.SendIcon, {
        className: "size-[16px] flex-none text-dbx-color-yellow-500"
      })]
    });
  };
  let f = () => creditConfigCheck.isCreditEnabled() ? reactJsxRuntimeCoreReexport.jsx(h, {}) : null;
  let p = () => {
    let e = useLocationWrapper.useLocationWrapper().pathname.includes(chatRouteSkillMapper.skillTypeKeys.Image);
    let t = creditConfigCheck.isCreditEnabled();
    if (e && t) {
      return reactJsxRuntimeCoreReexport.jsx(f, {});
    } else {
      return null;
    }
  };
  class m {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
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
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: p,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = p;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    CreditEntranceChatHeaderToolButtonPlugin: function () {
      return m;
    }
  });
}