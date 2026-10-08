// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactIntersectionObserver'
// - Resolved require(637954) to 'react-intersection-observer'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'deepCloneWrapper_1'
// - Resolved require(391722) to 'deep-clone-wrapper_1'
// - Renamed variable 'o' to 'asyncSkillChatInputBtn'
// - Resolved require(159621) to 'async-skill-chat-input-btn'
// - Renamed variable 'l' to 'chatInputStoreHelpers'
// - Resolved require(411117) to 'chat-input-store-helpers'
// - Renamed variable 's' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'c' to 'chatFieldTypes'
// - Resolved require(660462) to 'chat-field-types'
// - Renamed variable 'u' to 'inputToolConverter'
// - Resolved require(352793) to 'input-tool-converter'
// - Renamed variable 'd' to 'dropdownMenuSelectComponent'
// - Resolved require(339350) to 'dropdown-menu-select-component'
// - Renamed variable 'p' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'h' to 'asyncBusinessInputToolButtonIcon'
// - Resolved require(244107) to 'async-business-input-tool-button-icon'
// - Renamed variable 'f' to 'sparkleIcon'
// - Resolved require(152694) to 'sparkle-icon'
// - Renamed variable 'm' to 'businessInputToolIcon_2'
// - Resolved require(675641) to 'business-input-tool-icon_2'
// - Renamed variable 'g' to 'svgMenuListIcon'
// - Resolved require(552152) to 'svg-menu-list-icon'
// - Renamed variable 'v' to 'hamburgerMenuIcon'
// - Resolved require(501522) to 'hamburger-menu-icon'
// - Renamed variable '_' to 'aiPptTemplateStore_1'
// - Resolved require(698449) to 'ai-ppt-template-store_1'
// - Renamed variable 'b' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'zm' to 'aiPptTemplateStore' (module 698449)
// - Updated imported property 'f' to 'SparkleIcon' (module 152694)
// - Updated imported property 'P' to 'BusinessInputIcon' (module 675641)
// - Updated imported property 'K' to 'MenuListIcon' (module 552152)
// - Updated imported property 'T' to 'HamburgerMenuIcon' (module 501522)
// - Updated imported property 'f' to 'getFieldTypes' (module 660462)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'YD' to 'useInView' (module 637954)
// - Updated imported property 'E' to 'renderInputToolButtonIcon' (module 244107)
// - Updated imported property 'nC' to 'useEditorValue' (module 411117)
// - Updated imported property 'Z' to 'deepClone' (module 391722)
// - Updated imported property 'Z6' to 'extractText' (module 352793)
// - Updated imported property 'j' to 'DropdownMenuSelect' (module 339350)
// - Updated imported property 'g' to 'SkillChatInputBtn' (module 159621)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 345739
         */
module.exports = function (module, exports, require) {
  var reactIntersectionObserver = require("react-intersection-observer") /*id: 637954*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var asyncSkillChatInputBtn = require("async-skill-chat-input-btn") /*id: 159621*/;
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var dropdownMenuSelectComponent = require("dropdown-menu-select-component") /*id: 339350*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var asyncBusinessInputToolButtonIcon = require("async-business-input-tool-button-icon") /*id: 244107*/;
  var sparkleIcon = require("sparkle-icon") /*id: 152694*/;
  var businessInputToolIcon_2 = require("business-input-tool-icon_2") /*id: 675641*/;
  var svgMenuListIcon = require("svg-menu-list-icon") /*id: 552152*/;
  var hamburgerMenuIcon = require("hamburger-menu-icon") /*id: 501522*/;
  var aiPptTemplateStore_1 = require("ai-ppt-template-store_1") /*id: 698449*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = () => {
    let {
      pageConfigs: e,
      loadActionBarConfig: t
    } = aiPptTemplateStore_1.aiPptTemplateStore(e => ({
      pageConfigs: e.pageConfigs,
      loadActionBarConfig: e.loadActionBarConfig
    }));
    reactCoreLibraryReexport.useEffect(() => {
      t();
    }, []);
    return reactCoreLibraryReexport.useMemo(() => {
      let t = e.map(e => ({
        value: e.id,
        label: e.name,
        starling_key: e.starling_key
      }));
      let n = [reactJsxRuntimeCoreReexport.jsx(sparkleIcon.SparkleIcon, {
        className: "mr-8 size-16"
      }), reactJsxRuntimeCoreReexport.jsx(businessInputToolIcon_2.BusinessInputIcon, {
        className: "mr-8 size-16"
      }), reactJsxRuntimeCoreReexport.jsx(svgMenuListIcon.MenuListIcon, {
        className: "mr-8 size-16"
      }), reactJsxRuntimeCoreReexport.jsx(hamburgerMenuIcon.HamburgerMenuIcon, {
        className: "mr-8 size-16"
      })];
      if (t.length <= n.length) {
        t.forEach((e, t) => e.icon = n[t]);
      } else {
        t[0].icon = n[0];
        t[1].icon = n[1];
        t[t.length - 1].icon = n[3];
        for (let e = 2; e < t.length - 2; e++) {
          t[e].icon = n[2];
        }
      }
      return t;
    }, [e]);
  };
  let w = new Set([",", ".", "!", "?", ":", ";", "，", "。", "！", "？", "：", "；", "、"]);
  function x(e) {
    return e.type === chatFieldTypes.getFieldTypes.Select;
  }
  let C = e => e === undefined ? {
    data: []
  } : typeof e == "string" ? {
    data: [{
      type: chatFieldTypes.getFieldTypes.Text,
      text: e
    }]
  } : e;
  var k = e => {
    let {
      isOverflow: f,
      isToolButtonSmall: m,
      scene: g,
      getValue: v,
      onChange: _,
      onUpdateValue: k
    } = e;
    let S = i18nTranslationUtils.useTranslationWithFallback();
    let {
      ref: E
    } = reactIntersectionObserver.useInView();
    let T = y();
    let j = reactJsxRuntimeCoreReexport.jsx(asyncBusinessInputToolButtonIcon.renderInputToolButtonIcon, {});
    let P = reactCoreLibraryReexport.useRef();
    let N = chatInputStoreHelpers.useEditorValue() ?? C(v == null ? undefined : v());
    let R = reactCoreLibraryReexport.useCallback(e => {
      let t = deepCloneWrapper_1.deepClone(N);
      let n = t.data.find(x);
      if (n) {
        n.value = n.optionList[e].value;
        n.starling_key = n.optionList[e].starling_key;
      } else {
        var i;
        var l;
        let n = inputToolConverter.extractText(t.data);
        let a = n.length === 0;
        let s = `${S("slides_mainPage_inputBox_length")}`;
        if (!a) {
          let e = n.substring(n.length - 1);
          if (!w.has(e)) {
            s = `\u{3002}${s}`;
          }
        }
        if ((i = t.data) !== null && i !== undefined) {
          i.push({
            type: chatFieldTypes.getFieldTypes.Text,
            text: s
          });
        }
        if ((l = t.data) !== null && l !== undefined) {
          l.push({
            type: chatFieldTypes.getFieldTypes.Select,
            title: S("slides_mainPage_inputBox_length", "篇幅"),
            value: (T == null ? undefined : T[e]?.label) || "",
            starling_key: T == null ? undefined : T[e]?.starling_key,
            optionList: [...T.map(e => ({
              value: e.label,
              label: e.label,
              starling_key: e.starling_key
            }))]
          });
        }
      }
      let d = P.current;
      let p = t.data.find(x);
      if (!d || !p || d.value !== p.value) {
        teaAnalyticsEventTracker.trackEvent("input_bar_enter_click", {
          skill_id: "5000",
          skill_name: "ai_slides",
          button_name: (p == null ? undefined : p.starling_key) || (p == null ? undefined : p.value)
        });
      }
      P.current = deepCloneWrapper_1.deepClone(p);
      if (k) {
        k({
          ...t
        });
      }
    }, [N, T]);
    let I = reactJsxRuntimeCoreReexport.jsx("span", {
      ref: E,
      children: S("slides_mainPage_inputBox_length")
    });
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: reactJsxRuntimeCoreReexport.jsx(dropdownMenuSelectComponent.DropdownMenuSelect, {
        isOverflow: f,
        title: I,
        list: T,
        value: (T == null ? undefined : T[0]?.label) || "",
        "data-testid": "ai-slides-content-length-select-panel",
        renderTrigger: e => reactJsxRuntimeCoreReexport.jsx(asyncSkillChatInputBtn.SkillChatInputBtn, {
          small: m,
          isOverflow: f,
          scene: g,
          leadingIcon: j,
          "data-testid": "ai-slides-content-length-select-button",
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "flex items-center gap-4",
            children: [I, e]
          })
        }),
        leadingIcon: j,
        onChange: e => {
          if (_ != null) {
            _(e.value);
          }
          R(T.findIndex(t => e.value === t.value));
        },
        onOpenChange: e => {
          if (e) {
            teaAnalyticsEventTracker.trackEvent("input_bar_enter_click", {
              skill_id: "5000",
              skill_name: "ai_slides",
              button_name: "slides_mainPage_inputBox_length"
            });
          }
        }
      })
    });
  };
  class S {
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
          value: k,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = k;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    AIPPTContentLengthPlugin: function () {
      return S;
    }
  });
}