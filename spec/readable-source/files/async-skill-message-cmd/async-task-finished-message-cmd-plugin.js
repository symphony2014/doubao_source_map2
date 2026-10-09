// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatRouteConstants'
// - Resolved require(323118) to 'chat-route-constants'
// - Renamed variable 'r' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'o' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'a' to 'eventEmitterInstance'
// - Resolved require(842485) to 'event-emitter-instance'
// - Renamed variable 's' to 'notificationManager'
// - Resolved require(161823) to 'notification-manager'
// - Renamed variable 'l' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'u' to 'typographyWrapperModule'
// - Resolved require(954330) to 'typography-wrapper-module'
// - Renamed variable 'd' to 'samanthaButtonComponent'
// - Resolved require(307533) to 'samantha-button-component'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'p' to 'rtlIconFactory'
// - Resolved require(682145) to 'rtl-icon-factory'
// - Renamed variable 'h' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'm' to 'rtlCloseIcon'
// - Resolved require(851909) to 'rtl-close-icon'
// - Renamed variable '_' to 'asyncTaskFinishedSymbol'
// - Resolved require(580425) to 'async-task-finished-symbol'
// - Updated imported property 'G' to 'createRtlIcon' (module 682145)
// - Updated imported property 'Z' to 'TypographyWrapper' (module 954330)
// - Updated imported property 'R' to 'SamanthaButton' (module 307533)
// - Updated imported property 'Z' to 'RtlCloseIcon' (module 851909)
// - Updated imported property '$' to 'getAsyncTaskSymbol' (module 580425)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 's' to 'notificationManager' (module 161823)
// - Updated imported property 'X9' to 'i18nextTranslate' (module 852399)
// - Updated imported property 'l' to 'eventEmitter' (module 842485)
// - Updated imported property 'fU' to 'routeChatRoot' (module 323118)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-cmd.8d57d096.js
         * chunkId: 6355
         * moduleId: 763937
         */
module.exports = function (module, exports, require) {
  var chatRouteConstants = require("chat-route-constants") /*id: 323118*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var eventEmitterInstance = require("event-emitter-instance") /*id: 842485*/;
  var notificationManager = require("notification-manager") /*id: 161823*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var c = classnamesUtils;
  var typographyWrapperModule = require("typography-wrapper-module") /*id: 954330*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var f = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsxs("g", {
      fill: "#000",
      fillOpacity: 0.8,
      clipPath: "url(#icon_supermode_svg__a)",
      children: [reactJsxRuntimeCoreReexport.jsx("path", {
        d: "M11.587 16.908a.5.5 0 0 1-.282.227.49.49 0 0 1-.366-.02.54.54 0 0 1-.269-.263q-.346-.704-.633-1.172a3.2 3.2 0 0 0-.586-.726 1.6 1.6 0 0 0-.679-.354 2.9 2.9 0 0 0-.906-.043q-.525.041-1.262.186a.517.517 0 0 1-.62-.351.49.49 0 0 1 .026-.368.57.57 0 0 1 .27-.276 14 14 0 0 0 1.126-.598q.442-.268.693-.56.25-.29.345-.67a3.2 3.2 0 0 0 .07-.92 18 18 0 0 0-.137-1.325.54.54 0 0 1 .071-.372.48.48 0 0 1 .281-.227.5.5 0 0 1 .366.02q.173.078.264.265.346.703.634 1.171.285.465.59.725.3.259.68.354.376.09.901.045.524-.046 1.265-.193a.53.53 0 0 1 .38.064.5.5 0 0 1 .234.289.5.5 0 0 1-.018.37.57.57 0 0 1-.273.273q-.68.333-1.123.602-.447.27-.698.56-.25.292-.34.67-.096.38-.071.92.027.548.133 1.326a.57.57 0 0 1-.067.37"
      }), reactJsxRuntimeCoreReexport.jsx("path", {
        fillRule: "evenodd",
        d: "M21.341 12.096a9.278 9.278 0 0 1-16.34 5.92c-1.064.003-2.037-.113-2.836-.385-.86-.294-1.676-.828-2.014-1.748-.358-.971-.032-1.958.485-2.772.503-.79 1.28-1.577 2.228-2.325.595-4.55 4.487-8.064 9.2-8.064 2.36 0 4.515.882 6.153 2.334q.042-.006.086-.008c1.276-.061 2.442.03 3.381.319.921.284 1.808.825 2.166 1.796.312.849.1 1.714-.297 2.451-.398.739-1.042 1.467-1.828 2.157q-.185.162-.384.325m-2.066-.96c-1.3.926-2.991 1.858-4.95 2.674a1.008 1.008 0 1 0 .776 1.86 30 30 0 0 0 4.04-2.035 7.262 7.262 0 1 1 .134-2.499m.658-4.053q.68.061 1.157.21c.648.2.824.446.868.566.039.106.065.346-.179.798-.157.291-.402.622-.74.982a9.2 9.2 0 0 0-1.106-2.556M3.65 15.915a9.2 9.2 0 0 1-.748-2.443 5 5 0 0 0-.565.72c-.364.573-.34.874-.295.995.042.115.2.34.774.536q.352.12.834.192",
        clipRule: "evenodd"
      })]
    }), reactJsxRuntimeCoreReexport.jsx("defs", {
      children: reactJsxRuntimeCoreReexport.jsx("clipPath", {
        id: "icon_supermode_svg__a",
        children: reactJsxRuntimeCoreReexport.jsx("path", {
          fill: "#fff",
          d: "M0 0h24v24H0z"
        })
      })
    })]
  }), {}));
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  let g = e => {
    let {
      title: t,
      text: n,
      onClose: i,
      onClick: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex-row flex items-center gap-10 text-14",
      children: [reactJsxRuntimeCoreReexport.jsx(f, {
        className: c("w-36 h-36 leading-36", "flex justify-center items-center", "rounded-full text-[s-color-text-secondary]", "border-1 border-solid border-[var(--s-color-border-tertiary)]")
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex max-w-[200px] flex-1 cursor-pointer flex-col gap-4",
        onClick: r,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
            line-clamp-1 leading-22 font-medium
            text-[var(--s-color-text-secondary)]
          `,
          children: t
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
            line-clamp-1 leading-18 text-[var(--s-color-text-tertiary)]
          `,
          children: reactJsxRuntimeCoreReexport.jsx(typographyWrapperModule.TypographyWrapper.Text, {
            ellipsis: {
              showTooltip: true
            },
            children: n
          })
        })]
      }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
        type: "quartary",
        size: "small",
        className: "!h-22 !w-22 !p-4 text-[s-color-text-tertiary]",
        icon: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {}),
        onClick: i
      })]
    });
  };
  var asyncTaskFinishedSymbol = require("async-task-finished-symbol") /*id: 580425*/;
  function v(e, t, n) {
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
  class y {
    constructor() {
      v(this, "pluginIdentifier", asyncTaskFinishedSymbol.getAsyncTaskSymbol);
      v(this, "handleCmd", e => {
        if (e.data.version === "1.0") {
          if (e.data.data.conversation_id === chatFeedStoreFactory.useFeedStore.getState().currentActiveConversationId || document.visibilityState !== "visible") {
            return;
          }
          let c = e.data.data.ext?.code_assist_process_style === "3";
          let u = "";
          u = notificationManager.notificationManager.notification.open({
            className: "async-task-notification",
            content: reactJsxRuntimeCoreReexport.jsx(g, {
              title: c ? i18nTranslationUtils.i18nextTranslate("coding_website_build_generated_tip") : i18nTranslationUtils.i18nextTranslate("web_ai_coding_agent_completed_notice_title"),
              text: e.data.data.ext?.title ?? "",
              onClose: () => {
                notificationManager.notificationManager.notification.close(u);
              },
              onClick: () => {
                if (e.data.version === "1.0") {
                  notificationManager.notificationManager.notification.close(u);
                  eventEmitterInstance.eventEmitter.emit("route.push", {
                    pathname: `${chatRouteConstants.routeChatRoot}${e.data.data.conversation_id}`
                  });
                }
              }
            }),
            duration: 0,
            position: "topRight",
            showClose: false
          });
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    AsyncTaskFinishedMessageCmdPlugin: function () {
      return y;
    }
  });
}