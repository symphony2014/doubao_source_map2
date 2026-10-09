// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'translateSkillLangUtils'
// - Resolved require(226897) to 'translate-skill-lang-utils'
// - Renamed variable 'a' to 'asyncSkillChatInputBtn'
// - Resolved require(159621) to 'async-skill-chat-input-btn'
// - Renamed variable 'o' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'l' to 'dropdownMenuSelectComponent'
// - Resolved require(339350) to 'dropdown-menu-select-component'
// - Renamed variable 's' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'c' to 'i18nextLanguageGetter'
// - Resolved require(124507) to 'i18next-language-getter'
// - Renamed variable 'u' to 'useLocalStorageHook'
// - Resolved require(296239) to 'use-local-storage-hook'
// - Renamed variable 'd' to 'chatInputGuidanceStore'
// - Resolved require(976175) to 'chat-input-guidance-store'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'y' to 'useLocalStorage' (module 296239)
// - Updated imported property 'l' to 'getCurrentLanguage' (module 124507)
// - Updated imported property 'ki' to 'useGuidanceConfig' (module 976175)
// - Updated imported property 'q5' to 'resolveLanguageCode' (module 226897)
// - Updated imported property 'j' to 'DropdownMenuSelect' (module 339350)
// - Updated imported property 'g' to 'SkillChatInputBtn' (module 159621)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 950313
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var translateSkillLangUtils = require("translate-skill-lang-utils") /*id: 226897*/;
  var asyncSkillChatInputBtn = require("async-skill-chat-input-btn") /*id: 159621*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var dropdownMenuSelectComponent = require("dropdown-menu-select-component") /*id: 339350*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var i18nextLanguageGetter = require("i18next-language-getter") /*id: 124507*/;
  var useLocalStorageHook = require("use-local-storage-hook") /*id: 296239*/;
  var chatInputGuidanceStore = require("chat-input-guidance-store") /*id: 976175*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = e => {
    let {
      isOverflow: h,
      isToolButtonSmall: f,
      scene: m,
      trackParams: g,
      value: v,
      onChange: _
    } = e;
    let b = i18nTranslationUtils.useTranslationWithFallback();
    let [y, w] = useLocalStorageHook.useLocalStorage("translate_input_target_lang", "");
    let x = reactCoreLibraryReexport.useRef(true);
    let C = i18nextLanguageGetter.getCurrentLanguage();
    let {
      config: k
    } = chatInputGuidanceStore.useGuidanceConfig();
    let S = reactCoreLibraryReexport.useMemo(() => y || C, []);
    let E = reactCoreLibraryReexport.useMemo(() => ((k == null ? undefined : k.language) || []).map(e => ({
      ...e,
      is_default: e.language_code === S
    })), [S, !!(k == null ? undefined : k.language)]);
    let T = translateSkillLangUtils.resolveLanguageCode(E, y || C) ?? "";
    let j = E.find(e => e.language_code === (v ?? T));
    let P = "target_language";
    reactCoreLibraryReexport.useEffect(() => {
      if (E.length > 0) {
        teaAnalyticsEventTracker.trackEvent("input_bar_skill_option_show", {
          ...g,
          option_label: P,
          show_position: 0,
          is_default: 1,
          is_choose_required: 1
        });
      }
    }, [E.length]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!v && x.current && (j == null ? undefined : j.language_code)) {
        x.current = false;
        if (_ != null) {
          _(j == null ? undefined : j.language_code);
        }
      }
    }, [j]);
    return reactJsxRuntimeCoreReexport.jsx(dropdownMenuSelectComponent.DropdownMenuSelect, {
      isOverflow: h,
      list: (E ?? []).map(e => ({
        label: e.language_loc || "",
        value: e.language_code || ""
      })),
      title: b("mainPage_translateTo"),
      renderTrigger: e => reactJsxRuntimeCoreReexport.jsx(asyncSkillChatInputBtn.SkillChatInputBtn, {
        small: f,
        isOverflow: h,
        scene: m,
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex items-center gap-[4px]",
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "flex items-center gap-[4px]",
            children: [reactJsxRuntimeCoreReexport.jsx("span", {
              className: "text-dbx-text-tertiary",
              children: b("mainPage_translateTo")
            }), reactJsxRuntimeCoreReexport.jsx("span", {
              className: "flex items-center",
              children: (j == null ? undefined : j.language_loc) || ""
            })]
          }), e]
        })
      }),
      onChange: e => {
        var t;
        if (_ != null) {
          _(e.value);
        }
        w(e.value);
        teaAnalyticsEventTracker.trackEvent("input_bar_skill_option_click", {
          ...g,
          option_label: P,
          option_sub_label: e.value || "",
          action_type: "select",
          show_position: (t = E.map(e => e.language_code)) === null || t === undefined ? undefined : t.indexOf(e.value),
          is_default: Number(e.value === E.find(e => e.is_default)?.language_code),
          is_choose_required: 1
        });
      },
      value: (j == null ? undefined : j.language_code) ?? (T || ""),
      onOpenChange: e => {
        if (e && (E == null ? undefined : E.length)) {
          E.map((e, t) => {
            teaAnalyticsEventTracker.trackEvent("input_bar_skill_option_show", {
              ...g,
              option_label: P,
              option_sub_label: e.language_code || "",
              show_position: t,
              is_default: Number(e.language_code === E.find(e => e.is_default)?.language_code),
              is_choose_required: 1
            });
          });
        }
      }
    });
  };
  class f {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
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
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: h,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = h;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    TranslateLanguageSelectorPlugin: function () {
      return f;
    }
  });
}