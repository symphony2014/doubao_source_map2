// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'chatDrivePath'
// - Resolved require(323874) to 'chat-drive-path'
// - Renamed variable 'o' to 'iconButtonWithTooltip'
// - Resolved require(158007) to 'icon-button-with-tooltip'
// - Renamed variable 'a' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'l' to 'semiToastNotification'
// - Resolved require(520872) to 'semi-toast-notification'
// - Renamed variable 's' to 'useNavigateRuntimeResolver'
// - Resolved require(267059) to 'use-navigate-runtime-resolver'
// - Renamed variable 'd' to 'sendMessageCheckIconSvg'
// - Resolved require(560249) to 'send-message-check-icon-svg'
// - Renamed variable 'c' to 'aiSpaceMessageNodeStore'
// - Resolved require(939801) to 'ai-space-message-node-store'
// - Renamed variable 'u' to 'aiSpaceRevertCheckHook'
// - Resolved require(376316) to 'ai-space-revert-check-hook'
// - Renamed variable 'v' to 'chatReceiveMessageAction'
// - Resolved require(736142) to 'chat-receive-message-action'
// - Renamed variable 'f' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 's' to 'useNavigateResolver' (module 267059)
// - Updated imported property 'H' to 'useAiSpaceRevertCheck' (module 376316)
// - Updated imported property 'Y' to 'messageNodeInfoStore' (module 939801)
// - Updated imported property 'Z' to 'toastInstance' (module 520872)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'K' to 'IconButton' (module 158007)
// - Updated imported property 'h' to 'SendMessageCheckIcon' (module 560249)
// - Updated imported property '_' to 'chatDrivePath' (module 323874)
// - Updated imported property 'O' to 'receiveMsgAction' (module 736142)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 191063
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatDrivePath = require("chat-drive-path") /*id: 323874*/;
  var iconButtonWithTooltip = require("icon-button-with-tooltip") /*id: 158007*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var semiToastNotification = require("semi-toast-notification") /*id: 520872*/;
  var useNavigateRuntimeResolver = require("use-navigate-runtime-resolver") /*id: 267059*/;
  var sendMessageCheckIconSvg = require("send-message-check-icon-svg") /*id: 560249*/;
  var aiSpaceMessageNodeStore = require("ai-space-message-node-store") /*id: 939801*/;
  var aiSpaceRevertCheckHook = require("ai-space-revert-check-hook") /*id: 376316*/;
  var chatReceiveMessageAction = require("chat-receive-message-action") /*id: 736142*/;
  var p = {
    "toast-icon": "toast-icon-hFULrj",
    toastIcon: "toast-icon-hFULrj"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function m(e, t, n) {
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
  let g = e => {
    let {
      message: t
    } = e;
    let n = useNavigateRuntimeResolver.useNavigateResolver();
    let v = t.message_id;
    let m = aiSpaceRevertCheckHook.useAiSpaceRevertCheck();
    let {
      updateMessageNodeInfo: g,
      getMessageNodeInfos: h,
      getHasToasted: _,
      updateToasted: b
    } = aiSpaceMessageNodeStore.messageNodeInfoStore();
    let y = h(v);
    let w = reactCoreLibraryReexport.useCallback(() => {
      if (!_()) {
        let e = semiToastNotification.toastInstance.info({
          content: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "flex items-center gap-16",
            children: [i18nTranslationUtils.i18nextTranslate("web_chatFile_tooltip_saved"), reactJsxRuntimeCoreReexport.jsx("span", {
              className: p["toast-icon"],
              onClick: () => {
                semiToastNotification.toastInstance.close(e);
              },
              children: i18nTranslationUtils.i18nextTranslate("web_chatFile_toast_save_aiDrive_gotIt")
            })]
          })
        });
        b(true);
      }
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (m) {
        g(v);
      }
    }, [m]);
    reactCoreLibraryReexport.useEffect(() => {
      if (y == null ? undefined : y.length) {
        w();
      }
    }, [y]);
    if (!(y == null ? undefined : y.length) || !m) {
      return null;
    }
    let k = y[0];
    return reactJsxRuntimeCoreReexport.jsx(iconButtonWithTooltip.IconButton, {
      prefix: reactJsxRuntimeCoreReexport.jsx(sendMessageCheckIconSvg.SendMessageCheckIcon, {
        className: p["aispace-icon"]
      }),
      tooltipContent: i18nTranslationUtils.i18nextTranslate("web_chatFile_tooltip_saved"),
      onClick: () => {
        n(`${chatDrivePath.chatDrivePath}${k.parent_id}?tab=chat&highlightId=${k.id}`, {
          state: {
            enter_from: "chatfile_autosave_click"
          }
        });
      }
    });
  };
  class h {
    constructor() {
      m(this, "pluginIdentifier", chatReceiveMessageAction.receiveMsgAction);
      m(this, "ButtonContentGroups", [g]);
    }
  }
  require.r(exports);
  require.d(exports, {
    AISpaceReceiveMessageActionButtonPlugin: function () {
      return h;
    }
  });
}