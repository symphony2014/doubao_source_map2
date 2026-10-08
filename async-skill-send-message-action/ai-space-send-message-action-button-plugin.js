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
// - Renamed variable 's' to 'semiToastNotification'
// - Resolved require(520872) to 'semi-toast-notification'
// - Renamed variable 'l' to 'useNavigateRuntimeResolver'
// - Resolved require(267059) to 'use-navigate-runtime-resolver'
// - Renamed variable 'u' to 'sendMessageCheckIconSvg'
// - Resolved require(560249) to 'send-message-check-icon-svg'
// - Renamed variable 'c' to 'aiSpaceMessageNodeStore'
// - Resolved require(939801) to 'ai-space-message-node-store'
// - Renamed variable 'd' to 'aiSpaceRevertCheckHook'
// - Resolved require(376316) to 'ai-space-revert-check-hook'
// - Renamed variable 'p' to 'sendMessageActionSymbol'
// - Resolved require(221606) to 'send-message-action-symbol'
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
// - Updated imported property 'k' to 'sendMessageAction' (module 221606)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-action.e6a2cf79.js
         * chunkId: 29547
         * moduleId: 175272
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
  var sendMessageActionSymbol = require("send-message-action-symbol") /*id: 221606*/;
  var h = {
    "toast-icon": "toast-icon-eAV3Cd",
    toastIcon: "toast-icon-eAV3Cd"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function g(e, t, n) {
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
  let m = e => {
    let {
      message: t
    } = e;
    let n = useNavigateRuntimeResolver.useNavigateResolver();
    let p = t.message_id;
    let g = aiSpaceRevertCheckHook.useAiSpaceRevertCheck();
    let {
      updateMessageNodeInfo: m,
      getMessageNodeInfos: v,
      getHasToasted: y,
      updateToasted: C
    } = aiSpaceMessageNodeStore.messageNodeInfoStore();
    let _ = v(p);
    let b = reactCoreLibraryReexport.useCallback(() => {
      if (!y()) {
        let e = semiToastNotification.toastInstance.info({
          content: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "flex items-center gap-16",
            children: [i18nTranslationUtils.i18nextTranslate("web_chatFile_tooltip_saved"), reactJsxRuntimeCoreReexport.jsx("span", {
              className: h["toast-icon"],
              onClick: () => {
                semiToastNotification.toastInstance.close(e);
              },
              children: i18nTranslationUtils.i18nextTranslate("web_chatFile_toast_save_aiDrive_gotIt")
            })]
          })
        });
        C(true);
      }
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (g) {
        m(p);
      }
    }, [g]);
    reactCoreLibraryReexport.useEffect(() => {
      if (_ == null ? undefined : _.length) {
        b();
      }
    }, [_]);
    if (!(_ == null ? undefined : _.length) || !g) {
      return null;
    }
    let x = _[0];
    return reactJsxRuntimeCoreReexport.jsx(iconButtonWithTooltip.IconButton, {
      prefix: reactJsxRuntimeCoreReexport.jsx(sendMessageCheckIconSvg.SendMessageCheckIcon, {
        className: h["aispace-icon"]
      }),
      tooltipContent: i18nTranslationUtils.i18nextTranslate("web_chatFile_tooltip_saved"),
      onClick: () => {
        n(`${chatDrivePath.chatDrivePath}${x.parent_id}?tab=chat&highlightId=${x.id}`, {
          state: {
            enter_from: "chatfile_autosave_click"
          }
        });
      }
    });
  };
  class v {
    constructor() {
      g(this, "pluginIdentifier", sendMessageActionSymbol.sendMessageAction);
      g(this, "ButtonContentGroups", [m]);
    }
  }
  require.r(exports);
  require.d(exports, {
    AISpaceSendMessageActionButtonPlugin: function () {
      return v;
    }
  });
}