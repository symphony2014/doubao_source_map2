// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'ChatInputLayout'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.2dd70858.js
         * chunkId: 51606
         * moduleId: 106065
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var messageSkeletonLoader = require("message-skeleton-loader") /*id: 449904*/;
  var chatMaxWidthLayout = require("chat-max-width-layout") /*id: 871367*/;
  var userAgentPlatformUtils = require("user-agent-platform-utils") /*id: 221233*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var skillPinIconComponent = require("skill-pin-icon-component") /*id: 730868*/;
  var c = {
    "chat-input": "chat-input-hs45l3",
    "single-line": "single-line-x0qcsF",
    bottom: "bottom-poNn6O",
    placeholder: "placeholder-OyRols",
    "box-shadow": "box-shadow-Jd3IQK",
    small: "small-qMRoMK",
    "chat-input-with-upload": "chat-input-with-upload-oKw73K",
    "chat-input-button": "chat-input-button-Rp2_c4",
    "chat-input-content": "chat-input-content-MXMAyx",
    "chat-input-tool": "chat-input-tool-KZqEmo",
    "chat-input-button-round": "chat-input-button-round-naJF8K"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = false;
  let f = e => {
    let {
      placeholder: t,
      style: n,
      className: a,
      uploadIcon: o,
      boxShadow: s = false,
      singleLine: l = true
    } = e;
    let f = reactCoreLibraryReexport.useRef(null);
    let [m, h] = reactCoreLibraryReexport.useState(_);
    reactCoreLibraryReexport.useEffect(() => {
      let t = f.current?.clientWidth;
      let n = isNullishCheck.isNil(t) || t === 0 ? _ : t < 480;
      _ = n;
      h(n);
    }, []);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: f,
      className: r(c["chat-input"], l && c["single-line"], s && c["box-shadow"], m && c.small, o && c["chat-input-with-upload"], a),
      style: n,
      children: l ? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: c["chat-input-content"]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: c["chat-input-tool"]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: c["chat-input-tool"]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: c["chat-input-button-round"]
        })]
      }) : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("textarea", {
          disabled: true,
          placeholder: t
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: c.bottom,
          children: [o, reactJsxRuntimeCoreReexport.jsx("div", {
            className: c.placeholder
          }), reactJsxRuntimeCoreReexport.jsx(skillPinIconComponent.SkillPinIcon, {
            className: c["chat-input-button"]
          })]
        })]
      })
    });
  };
  let m = e => {
    let {
      showInput: t = true,
      type: n,
      placeholder: i,
      content: a,
      hideHeader: d = false
    } = e;
    let u = userAgentPlatformUtils.isIPad();
    return reactJsxRuntimeCoreReexport.jsx(chatMaxWidthLayout.chatLayout.MaxWidthLayout, {
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: r("flex flex-col flex-1 items-center relative mr-1 h-screen", "container-wrapper-EcnUaV", {
          "ipad-N9HVqK": u
        }),
        style: {
          backgroundColor: "var(--chat-bg-color, var(--s-color-bg-body, #ffffff))"
        },
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
            mx-auto flex h-full w-full flex-1 flex-col overflow-hidden
            pt-[var(--safe-top)]
          `,
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "flex h-full min-h-0 w-full flex-col",
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: "h-[var(--header-height)] w-full",
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                className: "fixed flex h-[var(--header-height)] items-center",
                style: {
                  right: "var(--right-side-width)",
                  opacity: +!d
                },
                children: Array.from({
                  length: 2
                }).map((e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
                  className: "mr-20 h-24 w-24 rounded-full",
                  style: {
                    background: "rgba(153, 153, 153, 0.1)"
                  }
                }, t))
              })
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: "min-h-0 flex-1 flex-col justify-start",
              children: a ?? reactJsxRuntimeCoreReexport.jsx(messageSkeletonLoader.MessageSkeleton, {
                type: n
              })
            }), t && reactJsxRuntimeCoreReexport.jsx("div", {
              className: `
                  h-fit w-full shrink-0
                  mb-12
                `,
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                className: `
                    relative flex flex-col items-center justify-between pt-16
                  `,
                children: reactJsxRuntimeCoreReexport.jsx(f, {
                  placeholder: i
                })
              })
            })]
          })
        })
      })
    });
  };
  require.d(exports, {
    ChatInputLayout: function () {
      return m;
    }
  });
}