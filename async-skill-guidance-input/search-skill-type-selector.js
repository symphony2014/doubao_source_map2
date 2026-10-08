// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'SearchSkillTypeSelector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: search-skill-guidance-page-v2.6f4bfe01.js
         * chunkId: 29927
         * moduleId: 718556
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var dropdownSelectionMenu = require("dropdown-selection-menu") /*id: 943067*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var samanthaPopoverWrapperComponent = require("samantha-popover-wrapper-component") /*id: 137563*/;
  var iconSunOutline = require("icon-sun-outline") /*id: 700480*/;
  var chatSettingsOutlinedIcon = require("chat-settings-outlined-icon") /*id: 8717*/;
  var rtlChevronIcon = require("rtl-chevron-icon") /*id: 90045*/;
  var deepSearchSkillChatInputStore = require("deep-search-skill-chat-input-store") /*id: 679775*/;
  var g = "title-x1XFHS";
  var b = "menu-icon-kDREGV";
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = [{
    icon: reactJsxRuntimeCoreReexport.jsx(iconSunOutline.SunIcon, {
      className: b
    }),
    title: "doubao_web_search_home_default_mode",
    desc: "doubao_web_search_home_default_mode_label",
    skillId: chatAppEnums.SkillType.Search
  }, {
    icon: reactJsxRuntimeCoreReexport.jsx(chatSettingsOutlinedIcon.ChatSettingsOutlined, {
      className: b
    }),
    title: "skill_search_AcademicSearch",
    desc: "doubao_web_search_home_academic_search_detail_label",
    skillId: chatAppEnums.SkillType.AcademicSearch
  }];
  let w = e => {
    let {
      classname: n,
      trackParams: i,
      small: h,
      isOverflow: p,
      currentActiveSkill: b,
      updateActiveSkillType: w
    } = e;
    let x = i18nTranslationUtils.useTranslationWithFallback();
    let [C, _] = reactCoreLibraryReexport.useState(false);
    let [E, S] = reactCoreLibraryReexport.useState(y.find(e => e.skillId === b) ?? y[0]);
    let T = async e => {
      _(false);
      if ((await (w == null ? undefined : w(e.skillId))) !== false) {
        S(e);
        teaAnalyticsEventTracker.trackEvent("search_type_click", {
          ...i,
          current_page: "search_detailpage",
          skill_id: e.skillId.toString(),
          skill_name: skillTypeMappings.getSkillName(e.skillId)
        });
        deepSearchSkillChatInputStore.deepSearchChatInputStore.getState().updateActiveSearchValue(e.skillId);
      }
    };
    return reactJsxRuntimeCoreReexport.jsx("div", {
      children: reactJsxRuntimeCoreReexport.jsx(samanthaPopoverWrapperComponent.SamanthaPopover, {
        trigger: "custom",
        visible: C,
        position: "bottomLeft",
        className: "popover-UAEq3u",
        content: reactJsxRuntimeCoreReexport.jsx(dropdownSelectionMenu.dropdownSelection, {
          list: y,
          value: E,
          itemRender: e => {
            teaAnalyticsEventTracker.trackEvent("search_type_show", {
              ...i,
              current_page: "search_detailpage"
            });
            return reactJsxRuntimeCoreReexport.jsxs("div", {
              className: "item-Bq6Vl0",
              children: [reactJsxRuntimeCoreReexport.jsx("span", {
                className: "pt-3 text-s-color-text-secondary",
                children: e.icon
              }), reactJsxRuntimeCoreReexport.jsxs("div", {
                className: "flex flex-col",
                children: [reactJsxRuntimeCoreReexport.jsx("span", {
                  className: g,
                  children: x(e.title)
                }), reactJsxRuntimeCoreReexport.jsx("span", {
                  className: "desc-JoWnqp",
                  children: x(e.desc)
                })]
              })]
            });
          },
          onChange: T,
          semiDropdownMenuProps: {
            className: "search-dropdown-menu-_NIron"
          },
          showTick: true
        }),
        spacing: 8,
        onClickOutSide: () => _(false),
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: a("inner-krLwgm", n, {
            "inner-academic-IQ5Rn_": E.skillId !== chatAppEnums.SkillType.Search,
            "inner-selecting-yK_5Fg": C,
            "small-JDHwvC": h,
            "overflow-TA0MXr": p
          }),
          onClick: () => {
            teaAnalyticsEventTracker.trackEvent("search_action_bar_click", {
              ...i,
              current_page: "search_detailpage"
            });
            _(true);
          },
          children: [reactJsxRuntimeCoreReexport.jsx("span", {
            className: "flex text-0 text-s-color-text-secondary",
            children: E == null ? undefined : E.icon
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: a(g, "title"),
            children: x(E == null ? undefined : E.title)
          }), reactJsxRuntimeCoreReexport.jsx(rtlChevronIcon.RtlChevronIcon, {
            className: a("icon-_blrrl", {
              "up-jhUj3i": C
            })
          })]
        })
      })
    });
  };
  require.d(exports, {
    SearchSkillTypeSelector: function () {
      return w;
    }
  });
}