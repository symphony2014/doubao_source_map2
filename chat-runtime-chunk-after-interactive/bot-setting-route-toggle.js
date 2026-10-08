// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'BotSettingButton'
// - Renamed export 'P' to 'useBotSettingToggle'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 983173
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var routeStoreHook = require("route-store-hook") /*id: 795456*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var semiButtonWrapperForwardRef = require("semi-button-wrapper-forward-ref") /*id: 126818*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var d = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 20,
    height: 20,
    fill: "currentColor",
    viewBox: "0 0 22 22",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fillRule: "evenodd",
      d: "M5.5 11a1.833 1.833 0 1 1-3.667 0A1.833 1.833 0 0 1 5.5 11m7.333 0a1.833 1.833 0 1 1-3.666 0 1.833 1.833 0 0 1 3.666 0m5.5 1.834a1.833 1.833 0 1 0 0-3.667 1.833 1.833 0 0 0 0 3.667",
      clipRule: "evenodd"
    })
  }), {}));
  let u = e => {
    let {
      className: t,
      visible: n = true,
      showPicTemBtn: i = false,
      chatId: r,
      icon: o,
      theme: a = "borderless",
      enterMethod: l,
      ...u
    } = e;
    let {
      wrapperToggle: f
    } = h(r, i);
    if (n) {
      return reactJsxRuntimeCoreReexport.jsx(semiButtonWrapperForwardRef.SemiButtonWrapperForwardRef, {
        ...u,
        theme: a,
        className: t,
        icon: o || reactJsxRuntimeCoreReexport.jsx(d, {}),
        onClick: () => f({
          enter_from: l || "click_chat_setting"
        })
      });
    } else {
      return null;
    }
  };
  let h = function (e, t = false) {
    let [n, s, l, c, d, u] = routeStoreHook.routeStore(e => [e.activeKey, e.setActiveKey, e.setStack, e.setLastShowStatus, e.changeMode, e.mode], deepEqualityUtil_1.isDeepEqual);
    let h = () => chatConversationSelectors_2.getConversation(chatFeedStoreFactory.useFeedStore.getState(), e);
    return {
      wrapperToggle: function ({
        enter_from: i
      } = {}) {
        let o = h();
        if (u === "setting" && n === e) {
          s(undefined);
        } else {
          d("setting");
          s(e);
          l(["/bot-setting"], {
            enter_from: i
          });
          if (t && o && (o == null ? undefined : o.bot_id)) {
            c(o == null ? undefined : o.bot_id, {
              status: routeStoreHook.routeStatus.CLOSE
            });
          }
        }
      },
      toggle: function ({
        enter_from: i
      } = {}) {
        let o = h();
        if (n === e) {
          s(undefined);
          d("");
        } else {
          l(["/bot-setting"], {
            enter_from: i
          });
          d("setting");
          s(e);
          if (t && o && (o == null ? undefined : o.bot_id)) {
            c(o == null ? undefined : o.bot_id, {
              status: routeStoreHook.routeStatus.CLOSE
            });
          }
        }
      },
      close() {
        s(undefined);
      },
      openCharacterSetting: () => {
        l(["/bot-setting", "/character-setting"]);
        s(e);
      },
      visible: e && n === e
    };
  };
  require.d(exports, {
    BotSettingButton: function () {
      return u;
    },
    useBotSettingToggle: function () {
      return h;
    }
  });
}