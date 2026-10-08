// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'asyncSkillChatInputBtn'
// - Resolved require(159621) to 'async-skill-chat-input-btn'
// - Renamed variable 'r' to 'chatInputExpandBtn'
// - Resolved require(573547) to 'chat-input-expand-btn'
// - Renamed variable 'o' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 's' to 'asyncSkillReceiveMessageBox_1_1'
// - Resolved require(794651) to 'async-skill-receive-message-box_1_1'
// - Renamed variable 'a' to 'svgExpandIconComponent'
// - Resolved require(993319) to 'svg-expand-icon-component'
// - Renamed variable 'l' to 'reactSvgIcon_2'
// - Resolved require(975719) to 'react-svg-icon_2'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'u' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'h' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'p' to 'responsiveScreenHooks'
// - Resolved require(221846) to 'responsive-screen-hooks'
// - Renamed variable 'm' to 'tooltipComponentExports'
// - Resolved require(341865) to 'tooltip-component-exports'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'N' to 'useMessageBoxUpdate' (module 794651)
// - Updated imported property 'P' to 'ExpandStatus' (module 573547)
// - Updated imported property 'H' to 'ExpandIcon' (module 993319)
// - Updated imported property 'K' to 'SvgIcon' (module 975719)
// - Updated imported property 'g' to 'SkillChatInputBtn' (module 159621)
// - Updated imported property 'PG' to 'useIsNarrowScreen' (module 221846)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-tool-button.3b5f4e57.js
         * chunkId: 76842
         * moduleId: 711700
         */
module.exports = function (module, exports, require) {
  var asyncSkillChatInputBtn = require("async-skill-chat-input-btn") /*id: 159621*/;
  var chatInputExpandBtn = require("chat-input-expand-btn") /*id: 573547*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var asyncSkillReceiveMessageBox_1_1 = require("async-skill-receive-message-box_1_1") /*id: 794651*/;
  var svgExpandIconComponent = require("svg-expand-icon-component") /*id: 993319*/;
  var reactSvgIcon_2 = require("react-svg-icon_2") /*id: 975719*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => {
    let {
      isOverflow: n,
      isToolButtonSmall: c,
      scene: u,
      expandPopoverRef: h
    } = e;
    let p = i18nTranslationUtils.useTranslationWithFallback();
    let m = h == null ? undefined : h.current?.expandBtnStatus;
    let [, g] = asyncSkillReceiveMessageBox_1_1.useMessageBoxUpdate();
    let f = {
      [chatInputExpandBtn.ExpandStatus.Expand]: reactJsxRuntimeCoreReexport.jsx(svgExpandIconComponent.ExpandIcon, {}),
      [chatInputExpandBtn.ExpandStatus.Collapse]: reactJsxRuntimeCoreReexport.jsx(reactSvgIcon_2.SvgIcon, {}),
      [chatInputExpandBtn.ExpandStatus.Invisible]: null
    };
    if (u === "landing") {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(asyncSkillChatInputBtn.SkillChatInputBtn, {
        "data-testid": "expand_btn_wrapper",
        isOverflow: n,
        small: c,
        scene: u,
        leadingIcon: m ? f[m] : null,
        onClick: () => {
          let e = h == null ? undefined : h.current;
          if ((e == null ? undefined : e.expandBtnStatus) === chatInputExpandBtn.ExpandStatus.Collapse) {
            if (e != null) {
              e.showPopover();
            }
          } else if ((e == null ? undefined : e.expandBtnStatus) === chatInputExpandBtn.ExpandStatus.Expand) {
            if (e != null) {
              e.hidePopover();
            }
          }
          setTimeout(() => g());
        },
        children: p("chat_input_popover_toggle_button_templates")
      });
    }
  };
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var responsiveScreenHooks = require("responsive-screen-hooks") /*id: 221846*/;
  var tooltipComponentExports = require("tooltip-component-exports") /*id: 341865*/;
  let g = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M17.4395 4.43945C18.0252 3.85366 18.9748 3.85366 19.5606 4.43945C20.1463 5.02523 20.1463 5.97475 19.5606 6.56054L14.1211 12L19.5606 17.4394C20.1463 18.0252 20.1463 18.9748 19.5606 19.5605C18.9748 20.1463 18.0252 20.1463 17.4395 19.5605L12 14.1211L6.56056 19.5605C5.97477 20.1463 5.02525 20.1463 4.43946 19.5605C3.85368 18.9748 3.85368 18.0252 4.43946 17.4394L9.87891 12L4.43946 6.56054C3.85368 5.97475 3.85368 5.02523 4.43946 4.43945C5.02525 3.85366 5.97477 3.85366 6.56056 4.43945L12 9.8789L17.4395 4.43945Z",
      fill: "currentColor"
    })
  });
  let f = e => {
    let {
      className: t,
      showNameClassName: n,
      chatId: i,
      skill: r,
      skillShowName: s,
      onClickExitButton: a,
      isToolButtonSmall: l
    } = e;
    let c = i18nTranslationUtils.useTranslationWithFallback();
    let f = responsiveScreenHooks.useIsNarrowScreen();
    let v = () => {
      if (i) {
        chatStoreManager.getStore("chatInputStore").getState().closeSkillPanel(i);
        if (a != null) {
          a();
        }
      }
    };
    let w = reactCoreLibraryReexport.useMemo(() => (r == null ? undefined : r.Tag) || reactCoreLibraryReexport.Fragment, []);
    return reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
      position: "top",
      content: reactJsxRuntimeCoreReexport.jsxs("p", {
        className: "text-dbx-text-static-white-primary",
        children: [c("chat_inputBox_tooltip_quitSkill"), reactJsxRuntimeCoreReexport.jsx("span", {
          className: "ml-4 text-dbx-text-static-white-secondary",
          children: "ESC"
        })]
      }),
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: `
          flex cursor-pointer items-center gap-2 rounded-xl
          bg-dbx-fill-highlight-trans-10 px-4 text-dbx-body font-normal
          text-dbx-text-highlight
          ${l ? "h-28 text-12" : "h-32 text-14"}
          ${t}
          !mr-10
        `,
        "data-testid": "skill_input_exit_button",
        contentEditable: false,
        onClick: v,
        children: [(() => {
          let e = `
      mr-2 ml-4 text-dbx-text-highlight
      ${l ? "size-14" : "size-18"}
    `;
          let t = r == null ? undefined : r.DBXIcon;
          if (t) {
            return reactJsxRuntimeCoreReexport.jsx(t, {
              className: e
            });
          } else {
            return null;
          }
        })(), reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
            select-none
            ${n}
          `,
          children: s || f && (r == null ? undefined : r.show_name_short) || (r == null ? undefined : r.show_name)
        }), w && reactJsxRuntimeCoreReexport.jsx(w, {
          type: "exit"
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: `
            flex h-20 w-20 items-center justify-center rounded-sm
            hover:cursor-pointer hover:bg-dbx-fill-highlight-trans-10
          `,
          children: reactJsxRuntimeCoreReexport.jsx(g, {
            className: `
              h-12 w-12 text-dbx-caption text-dbx-text-highlight-secondary
            `,
            onClick: v
          })
        })]
      })
    });
  };
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
  class w {
    constructor() {
      v(this, "Content", f);
    }
  }
  class _ {
    constructor() {
      v(this, "Content", c);
    }
  }
  require.r(exports);
  require.d(exports, {
    SkillTemplateButtonPlugin: function () {
      return _;
    },
    ExitSkillButtonPlugin: function () {
      return w;
    }
  });
}