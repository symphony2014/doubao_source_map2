// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'o' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'a' to 'chatTooltipWrapper'
// - Resolved require(355361) to 'chat-tooltip-wrapper'
// - Renamed variable 's' to 'useMergedContextHook'
// - Resolved require(203934) to 'use-merged-context-hook'
// - Renamed variable 'l' to 'chatResponsiveSize'
// - Resolved require(836635) to 'chat-responsive-size'
// - Renamed variable 'u' to 'chatInputExpandBtn'
// - Resolved require(573547) to 'chat-input-expand-btn'
// - Renamed variable 'c' to 'skillTitleComponent'
// - Resolved require(608417) to 'skill-title-component'
// - Renamed variable 'd' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'p' to 'chatSkillExitHook'
// - Resolved require(123849) to 'chat-skill-exit-hook'
// - Renamed variable 'f' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'P' to 'ExpandStatus' (module 573547)
// - Updated imported property 't' to 'ChatTooltip' (module 355361)
// - Updated imported property 'x$' to 'useMergedContext' (module 203934)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'y' to 'useChatScreenSize' (module 836635)
// - Updated imported property 'H' to 'useSkillExitHook' (module 123849)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'n' to 'SkillTitle' (module 608417)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 629792
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatTooltipWrapper = require("chat-tooltip-wrapper") /*id: 355361*/;
  var useMergedContextHook = require("use-merged-context-hook") /*id: 203934*/;
  var chatResponsiveSize = require("chat-responsive-size") /*id: 836635*/;
  var chatInputExpandBtn = require("chat-input-expand-btn") /*id: 573547*/;
  var skillTitleComponent = require("skill-title-component") /*id: 608417*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatSkillExitHook = require("chat-skill-exit-hook") /*id: 123849*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = e => {
    let {
      skill: t,
      icon: n,
      background: h,
      closeEvent: m,
      expandBtnStatus: v = chatInputExpandBtn.ExpandStatus.Invisible,
      afterTitle: g,
      expandBtnText: y,
      beforeCloseBtn: _,
      onClickCollapseBtn: b,
      onClickExpandBtn: w,
      onClick: S
    } = e;
    let {
      Tooltip: E = chatTooltipWrapper.ChatTooltip
    } = useMergedContextHook.useMergedContext();
    let x = i18nTranslationUtils.useTranslationWithFallback();
    let k = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return e.currentChatViewConfig?.chatId;
    });
    let T = reactCoreLibraryReexport.useRef(m);
    T.current = m;
    let P = chatResponsiveSize.useChatScreenSize() === "sm";
    chatSkillExitHook.useSkillExitHook({
      onCloseSkillEvent: m
    });
    reactCoreLibraryReexport.useEffect(() => {
      let e = t == null ? undefined : t.skill_type;
      if (e) {
        chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService").then(t => {
          var n;
          if (t != null && (n = t.getSkillReportEvent({
            skillType: e,
            eventName: "skill_input_panel"
          })) !== null && n !== undefined) {
            n.success();
          }
        });
      }
    }, [t]);
    let C = (P ? t == null ? undefined : t.show_name_short : t == null ? undefined : t.show_name) || (t == null ? undefined : t.show_name);
    return reactJsxRuntimeCoreReexport.jsx(skillTitleComponent.SkillTitle, {
      icon: n,
      title: C,
      afterTitleNode: g,
      background: h,
      expandBtnStatus: v,
      injectedComponents: {
        Tooltip: E
      },
      size: P ? "small" : "default",
      closeBtnTooltipText: x("exit_skill_tooltip"),
      onClickExpandBtn: e => {
        if (e === chatInputExpandBtn.ExpandStatus.Expand) {
          if (b != null) {
            b();
          }
        } else if (e === chatInputExpandBtn.ExpandStatus.Collapse) {
          if (w != null) {
            w();
          }
        }
      },
      expandBtnText: y,
      onClick: S,
      onClickCloseBtn: () => {
        var e;
        chatStoreManager.getStoreState("chatInputStore").closeSkillPanel(k || "");
        if ((e = T.current) !== null && e !== undefined) {
          e.call(T);
        }
      },
      beforeCloseBtn: _
    });
  };
  require.r(exports);
  require.d(exports, {
    SkillHeader: function () {
      return h;
    }
  });
}