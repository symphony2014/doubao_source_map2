// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'ChatInputActions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 124989
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var buttonComponentExport = require("button-component-export") /*id: 576887*/;
  var downloadArrowIcon = require("download-arrow-icon") /*id: 259591*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = reactCoreLibraryReexport.lazy(() => Promise.resolve().then(require.bind(require, "tooltip-component-exports") /*id: 341865*/).then(e => ({
    default: e.DbxTooltip
  })));
  let c = e => {
    let {
      "data-testid": t,
      disableToSend: n,
      sendMessageHoverText: r,
      onClick: c,
      className: d,
      onDisabledClick: h,
      ...m
    } = e;
    let g = reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsx(buttonComponentExport.Button, {
      id: "flow-end-msg-send",
      color: n ? "grey-filled" : "brand-filled",
      className: o("size-36 !rounded-full flex items-center justify-center p-0 border-0 overflow-hidden", {
        "!bg-dbx-fill-highlight": !n,
        "hover:!bg-dbx-fill-highlight-hover": !n,
        "active:!bg-dbx-fill-highlight-hover": !n,
        "!bg-dbx-fill-trans-20-disable": n
      }),
      disabled: n,
      "aria-disabled": n,
      "aria-label": typeof r == "string" ? r : undefined,
      "data-testid": t,
      onClick: c,
      children: reactJsxRuntimeCoreReexport.jsx(downloadArrowIcon.DownloadArrowIcon, {
        className: o("size-18", {
          "text-dbx-text-disable": n,
          "text-dbx-static-white": !n
        })
      })
    }), [n, r, c, t]);
    let f = reactCoreLibraryReexport.useMemo(() => r ? reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
      fallback: g,
      children: reactJsxRuntimeCoreReexport.jsx(u, {
        content: r,
        position: "bottom",
        clickToHide: true,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          children: g
        })
      })
    }) : g, [r, g]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: o("shrink-0 flex items-center h-[34px] send-btn-wrapper group", d),
      onClick: () => {
        if (n) {
          if (h != null) {
            h();
          }
        }
      },
      ...m,
      children: f
    });
  };
  let d = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M21.1504 12C21.1504 6.94659 17.0534 2.84961 12 2.84961C6.94659 2.84961 2.84961 6.94659 2.84961 12C2.84961 17.0534 6.94659 21.1504 12 21.1504V22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75V21.1504C17.0534 21.1504 21.1504 17.0534 21.1504 12Z",
      fill: "currentColor"
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M7.5 11.5C7.5 9.61438 7.5 8.67157 8.08579 8.08579C8.67157 7.5 9.61438 7.5 11.5 7.5H12.5C14.3856 7.5 15.3284 7.5 15.9142 8.08579C16.5 8.67157 16.5 9.61438 16.5 11.5V12.5C16.5 14.3856 16.5 15.3284 15.9142 15.9142C15.3284 16.5 14.3856 16.5 12.5 16.5H11.5C9.61438 16.5 8.67157 16.5 8.08579 15.9142C7.5 15.3284 7.5 14.3856 7.5 12.5V11.5Z",
      fill: "currentColor"
    })]
  });
  let h = reactCoreLibraryReexport.lazy(() => Promise.resolve().then(require.bind(require, "tooltip-component-exports") /*id: 341865*/).then(e => ({
    default: e.DbxTooltip
  })));
  function m(e) {
    let {
      onClick: t,
      className: n,
      tooltipContent: r,
      enableTooltip: a = true,
      ...l
    } = e;
    let u = reactJsxRuntimeCoreReexport.jsx("div", {
      className: o("size-34 rounded-full hover:bg-dbx-fill-trans-20-hover bg-dbx-fill-trans-20", "overflow-hidden cursor-pointer flex items-center justify-center", n),
      onClick: t,
      ...l,
      children: reactJsxRuntimeCoreReexport.jsx(d, {
        className: "block size-18"
      })
    });
    if (a && r) {
      return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
        fallback: u,
        children: reactJsxRuntimeCoreReexport.jsx(h, {
          position: "bottom",
          content: r,
          children: u
        })
      });
    } else {
      return u;
    }
  }
  var asyncSkillChatInputStyles = require("async-skill-chat-input-styles") /*id: 316817*/;
  function f(e) {
    let {
      beforeNodes: t,
      hideSendAndBreakBtn: n,
      small: i,
      breakBtnVisible: r,
      sendMessageHoverText: a,
      breakBtnHoverText: l,
      sendMessageClassName: u,
      sendMessageButtonText: d,
      disableToSend: h,
      onClickSendButton: f,
      onClickDisabledSendButton: p,
      onClickBreakButton: _,
      enableLocalBeakButtonTooltip: v = true,
      onWrapperClick: b,
      customButton: S
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "flex items-center gap-8",
      onClick: b,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: `
          flex items-center gap-2
          empty:hidden
        `,
        children: t
      }), n ? null : reactJsxRuntimeCoreReexport.jsx("div", {
        className: "flex size-36 items-center justify-center",
        children: S || reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx(m, {
            onClick: _,
            className: o(asyncSkillChatInputStyles.chatInputStyles["break-btn"], {
              "!hidden": !r,
              [asyncSkillChatInputStyles.chatInputStyles.small]: i
            }, "size-36 rounded-full cursor-pointer"),
            tooltipContent: l,
            enableTooltip: v,
            "data-testid": "chat_input_local_break_button"
          }), reactJsxRuntimeCoreReexport.jsx(c, {
            "data-testid": "chat_input_send_button",
            disableToSend: h,
            sendMessageHoverText: a,
            buttonText: d,
            className: o(u, {
              "!hidden": r,
              [asyncSkillChatInputStyles.chatInputStyles.small]: i
            }),
            onClick: f,
            onDisabledClick: p
          })]
        })
      })]
    });
  }
  require.d(exports, {
    ChatInputActions: function () {
      return f;
    }
  });
}