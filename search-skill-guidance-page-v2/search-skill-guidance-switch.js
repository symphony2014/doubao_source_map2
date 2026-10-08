// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'SearchSkillSwitch'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: search-skill-guidance-page-v2.6f4bfe01.js
         * chunkId: 29927
         * moduleId: 213617
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var switchAdapterComponent = require("switch-adapter-component") /*id: 962937*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var deepSearchSkillChatInputStore = require("deep-search-skill-chat-input-store") /*id: 679775*/;
  var searchSkillGuidanceStyles = require("search-skill-guidance-styles") /*id: 577364*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      classname: t,
      switchClassName: n,
      checkedClassName: i,
      withDivide: p,
      useDeepSearchSkill: m,
      updateActiveSkill: f
    } = e;
    let g = i18nTranslationUtils.useTranslationWithFallback();
    let [b, v] = reactCoreLibraryReexport.useState(m);
    let y = async e => {
      let t = e ? chatAppEnums.SkillType.DeepSearch : chatAppEnums.SkillType.Search;
      if ((await f(t)) !== false) {
        deepSearchSkillChatInputStore.deepSearchChatInputStore.getState().updateActiveSearchValue(t);
        v(e);
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (b) {
        f(chatAppEnums.SkillType.DeepSearch);
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: a(searchSkillGuidanceStyles.searchSkillStyles["skill-header-title-after"], t),
      children: [p && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "w-1 h-12 bg-[var(--s-color-border-secondary)]"
      }), reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
        showArrow: true,
        content: reactJsxRuntimeCoreReexport.jsx("div", {
          children: g("deepsearchexplain")
        }),
        position: "top",
        style: {
          minWidth: "206px",
          maxWidth: "250px",
          minHeight: "56px",
          font: "var(--s-font-xs-strong)",
          borderRadius: "10px",
          padding: "10px 16px",
          boxShadow: "0px 6px 10px 0px rgba(42, 60, 79, 0.10)",
          borderColor: "var(--s-color-bg-body)"
        },
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: a(searchSkillGuidanceStyles.searchSkillStyles.switch, n),
          onClick: e => {
            e.stopPropagation();
            y(!b);
          },
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: a("whitespace-nowrap", {
              [searchSkillGuidanceStyles.searchSkillStyles["switch-checked"]]: b
            }, b && i),
            children: g("deepsearch")
          }), reactJsxRuntimeCoreReexport.jsx(switchAdapterComponent.SwitchComponent, {
            checked: b,
            size: "small",
            "data-testid": "deep-search-switch-checkbox"
          })]
        })
      })]
    });
  };
  require.d(exports, {
    SearchSkillSwitch: function () {
      return p;
    }
  });
}