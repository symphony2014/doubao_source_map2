// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'a' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 's' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'l' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'u' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'c' to 'storageWrapperWithFallback'
// - Resolved require(319763) to 'storage-wrapper-with-fallback'
// - Renamed variable 'd' to 'reactPlusCircleIcon'
// - Resolved require(705322) to 'react-plus-circle-icon'
// - Renamed variable 'f' to 'closeIconComponent_1_1'
// - Resolved require(259726) to 'close-icon-component_1_1'
// - Renamed variable 'p' to 'superTaskStore'
// - Resolved require(654619) to 'super-task-store'
// - Renamed variable '_' to 'superTaskConfigHook'
// - Resolved require(700903) to 'super-task-config-hook'
// - Renamed variable 'h' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'yQ' to 'LocalStorageWrapper' (module 319763)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'GL' to 'superTaskStore' (module 654619)
// - Updated imported property 'd' to 'useSuperTaskConfig' (module 700903)
// - Updated imported property 'Sv' to 'getAvailableMessage' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'X' to 'PlusCircleIcon' (module 705322)
// - Updated imported property 'V' to 'CloseIcon' (module 259726)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-list.169e7e3e.js
         * chunkId: 66228
         * moduleId: 632159
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var reactPlusCircleIcon = require("react-plus-circle-icon") /*id: 705322*/;
  var closeIconComponent_1_1 = require("close-icon-component_1_1") /*id: 259726*/;
  var superTaskStore = require("super-task-store") /*id: 654619*/;
  var superTaskConfigHook = require("super-task-config-hook") /*id: 700903*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let m = "super-task-slow-tip";
  let g = () => !!storageWrapperWithFallback.LocalStorageWrapper.getItem(m);
  let v = () => storageWrapperWithFallback.LocalStorageWrapper.setItem(m, "1");
  let y = e => {
    let t = i18nTranslationUtils.useTranslationWithFallback();
    let {
      conversationId: n,
      inViewMessageList: i,
      unionMessageList: c
    } = e;
    let [m, y] = reactCoreLibraryReexport.useState("");
    let [b, S] = reactCoreLibraryReexport.useState(false);
    let E = superTaskStore.superTaskStore(e => e.overloadStatusMap);
    let {
      enableSuperTaskSideBarMode: T
    } = superTaskConfigHook.useSuperTaskConfig();
    reactCoreLibraryReexport.useEffect(() => {
      let e = conversationMessageUtils_1.getAvailableMessage(chatMessageStoreFactory.createMessageStore.getState(), n);
      if ((e == null ? undefined : e.message_id) && messageContentTypeAndStatusChecker.fjb(e) && E[e == null ? undefined : e.message_id]) {
        if (i.find(t => {
          var n;
          return t.type === "block" && ((n = t.data) === null || n === undefined ? undefined : n.some(t => t.messageId === e.message_id));
        })) {
          y(e.message_id);
        } else {
          y("");
        }
      }
    }, [c, i, E]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!g()) {
        let e = setTimeout(() => {
          if (!g()) {
            S(true);
            v();
          }
        }, 30000);
        return () => clearTimeout(e);
      }
    }, []);
    if (m || b) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: "tip-container-zHZ67g",
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: o("tip-UucAP1", "v2-xnBndD"),
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: "prefix-ioJUuL",
            children: reactJsxRuntimeCoreReexport.jsx(reactPlusCircleIcon.PlusCircleIcon, {
              className: "size-16"
            })
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: "text-Yk2G36",
            children: t(b ? T ? "complexTask_chat_bottom_notice_moreTime" : "agent_chat_bottom_ntoice_moreTime" : "superAgent_chat_msg_slowResponse")
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            onClick: () => {
              y("");
              S(false);
              superTaskStore.superTaskStore.getState().updateOverloadMessageToastMap(m, false);
            },
            className: `
              flex h-22 w-22 cursor-pointer items-center justify-center
              text-[var(--dbx-text-tertiary)]
            `,
            children: reactJsxRuntimeCoreReexport.jsx(closeIconComponent_1_1.CloseIcon, {
              className: "size-14"
            })
          })]
        })
      });
    } else {
      return null;
    }
  };
  class b {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var r = n.call(e, t || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: y,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = y;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    SuperTaskMessageListBottomBtnPlugin: function () {
      return b;
    }
  });
}