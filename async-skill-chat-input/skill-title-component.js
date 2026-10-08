// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'SkillTitle'
// - Renamed export 'f' to 'SkillDivider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 608417
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var reactTooltipComponent = require("react-tooltip-component") /*id: 228812*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var chatInputExpandBtn = require("chat-input-expand-btn") /*id: 573547*/;
  var l = {
    "skill-title-container": "skill-title-container-HZyn43",
    normal: "normal-ZhsIVI",
    blue: "blue-IlmkQS",
    gray: "gray-z1QIIt",
    "skill-title-content": "skill-title-content-lETdEG",
    "icon-wrapper": "icon-wrapper-w4veCu",
    content: "content-Q9TGRc",
    title: "title-Vwcqlu",
    "after-title": "after-title-AaCd0F",
    right: "right-FG_P02",
    "close-btn-wrapper": "close-btn-wrapper-drniKD",
    "close-btn-svg": "close-btn-svg-ISN4XS",
    shortcut: "shortcut-BVeQlq",
    "shortcut-name": "shortcut-name-ZkJy6y",
    "shortcut-key": "shortcut-key-GZFwtq",
    small: "small-Zkxktz",
    divider: "divider-AHF9xh"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => {
    let {
      icon: t,
      className: n,
      title: i,
      afterTitleNode: c,
      background: d,
      expandBtnStatus: p = chatInputExpandBtn.ExpandStatus.Invisible,
      injectedComponents: f,
      size: h = "default",
      expandBtnText: m,
      closeBtnTooltipText: v,
      beforeCloseBtn: g,
      onClickExpandBtn: y,
      onClick: _,
      onClickCloseBtn: b
    } = e;
    let {
      Tooltip: w = reactTooltipComponent.TooltipComponent
    } = f || {};
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: r(n, l["skill-title-container"], "skill-title-container", {
        [l.normal]: d === "normal",
        [l.blue]: d === "blue",
        [l.gray]: d === "gray"
      }, {
        [l.small]: h === "small"
      }),
      onClick: _,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: l["skill-title-content"],
        children: [t && reactJsxRuntimeCoreReexport.jsx("div", {
          className: l["icon-wrapper"],
          children: t
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: l.content,
          children: [i && reactJsxRuntimeCoreReexport.jsx("div", {
            className: l.title,
            "data-testid": "skill_header_title",
            children: i
          }), c && reactJsxRuntimeCoreReexport.jsx("div", {
            className: l["after-title"],
            children: c
          })]
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: l.right,
          children: [g ?? reactJsxRuntimeCoreReexport.jsx(chatInputExpandBtn.ExpandButton, {
            status: p,
            text: m,
            size: h,
            onClick: y
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            children: reactJsxRuntimeCoreReexport.jsx(w, {
              trigger: "hover",
              position: "top",
              content: reactJsxRuntimeCoreReexport.jsxs("div", {
                className: l.shortcut,
                children: [v && reactJsxRuntimeCoreReexport.jsx("div", {
                  className: l["shortcut-name"],
                  children: v
                }), reactJsxRuntimeCoreReexport.jsx("div", {
                  className: l["shortcut-key"],
                  children: "ESC"
                })]
              }),
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                className: r(l["close-btn-wrapper"]),
                onClick: e => {
                  e.stopPropagation();
                  if (b != null) {
                    b();
                  }
                },
                "data-testid": "skill_header_close_button",
                children: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
                  className: l["close-btn-svg"]
                })
              })
            })
          })]
        })]
      })
    });
  };
  let d = e => {
    let {
      className: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: r(l.divider, t),
      children: "·"
    });
  };
  require.d(exports, {
    SkillTitle: function () {
      return c;
    },
    SkillDivider: function () {
      return d;
    }
  });
}