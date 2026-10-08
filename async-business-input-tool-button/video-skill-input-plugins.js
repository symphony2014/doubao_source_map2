// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'skillChatImgUploadBtn'
// - Resolved require(907496) to 'skill-chat-img-upload-btn'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'asyncSkillChatInputBtn'
// - Resolved require(159621) to 'async-skill-chat-input-btn'
// - Renamed variable 'o' to 'chatLauncherConfigHooks'
// - Resolved require(317711) to 'chat-launcher-config-hooks'
// - Renamed variable 'l' to 'dropdownMenuSelectComponent'
// - Resolved require(339350) to 'dropdown-menu-select-component'
// - Renamed variable 's' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'c' to 'rtlChatIconComponent'
// - Resolved require(723947) to 'rtl-chat-icon-component'
// - Renamed variable 'u' to 'sparkleIcon'
// - Resolved require(152694) to 'sparkle-icon'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'f' to 'deepEqualityUtil_1'
// - Resolved require(550444) to 'deep-equality-util_1'
// - Renamed variable 'm' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Renamed variable 'g' to 'chatEventEmitter'
// - Resolved require(740942) to 'chat-event-emitter'
// - Renamed variable 'v' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable '_' to 'userInfoStatusSelectors'
// - Resolved require(480327) to 'user-info-status-selectors'
// - Renamed variable 'b' to 'businessInputToolIcon'
// - Resolved require(307681) to 'business-input-tool-icon'
// - Renamed variable 'y' to 'businessInputSubmit'
// - Resolved require(540748) to 'business-input-submit'
// - Renamed variable 'w' to 'videoSkillStore'
// - Resolved require(297271) to 'video-skill-store'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Vk' to 'useSkillToolLayout' (module 317711)
// - Updated imported property 'f' to 'SparkleIcon' (module 152694)
// - Updated imported property 'Z' to 'ChatRtlIcon' (module 723947)
// - Updated imported property 'j' to 'DropdownMenuSelect' (module 339350)
// - Updated imported property 'g' to 'SkillChatInputBtn' (module 159621)
// - Updated imported property 'nu' to 'selectUserInfoSuccess_1' (module 480327)
// - Updated imported property 'dI' to 'useVideoSkillStore' (module 297271)
// - Updated imported property 'X' to 'isDeepEqual' (module 550444)
// - Updated imported property 'BY' to 'prepareSubmitData' (module 540748)
// - Updated imported property 'QB' to 'InputKeys' (module 540748)
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 'v' to 'chatEmitter' (module 740942)
// - Updated imported property 'J' to 'BusinessInputIcon' (module 307681)
// - Updated imported property 'Q' to 'skillChatImgBtn' (module 907496)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 381708
         */
module.exports = function (module, exports, require) {
  var skillChatImgUploadBtn = require("skill-chat-img-upload-btn") /*id: 907496*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var asyncSkillChatInputBtn = require("async-skill-chat-input-btn") /*id: 159621*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var dropdownMenuSelectComponent = require("dropdown-menu-select-component") /*id: 339350*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var rtlChatIconComponent = require("rtl-chat-icon-component") /*id: 723947*/;
  var sparkleIcon = require("sparkle-icon") /*id: 152694*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = "seedance_2_0";
  let h = e => {
    let {
      isOverflow: t,
      isToolButtonSmall: n,
      scene: i
    } = e;
    let h = i18nTranslationUtils.useTranslationWithFallback();
    let {
      skillToolUIV2: f
    } = chatLauncherConfigHooks.useSkillToolLayout(i);
    let [m] = reactCoreLibraryReexport.useState(p);
    let g = reactCoreLibraryReexport.useMemo(() => [{
      label: h("aiVideo_tag_seedance_2.0_pc_actionbar"),
      value: p,
      extraInfo: h("aiVideo_desc_seedance_2.0_pc")
    }], [h]);
    let v = g.find(e => e.value === m);
    let _ = f ? reactJsxRuntimeCoreReexport.jsx(sparkleIcon.SparkleIcon, {}) : reactJsxRuntimeCoreReexport.jsx(rtlChatIconComponent.ChatRtlIcon, {});
    return reactJsxRuntimeCoreReexport.jsx(dropdownMenuSelectComponent.DropdownMenuSelect, {
      value: m,
      isOverflow: t,
      list: g,
      title: v == null ? undefined : v.label,
      showLabel: false,
      renderTrigger: e => reactJsxRuntimeCoreReexport.jsx(asyncSkillChatInputBtn.SkillChatInputBtn, {
        isOverflow: t,
        small: n,
        scene: i,
        leadingIcon: _,
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex items-center gap-4",
          children: [v == null ? undefined : v.label, f ? e : null]
        })
      })
    });
  };
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var businessInputToolIcon = require("business-input-tool-icon") /*id: 307681*/;
  var businessInputSubmit = require("business-input-submit") /*id: 540748*/;
  var videoSkillStore = require("video-skill-store") /*id: 297271*/;
  let x = e => e == null ? undefined : e.map(e => ({
    label: e.show_name || "",
    value: (e == null ? undefined : e.value) || "",
    image: e.background_url
  }));
  let C = e => {
    let {
      isOverflow: i,
      isToolButtonSmall: c,
      scene: u,
      trackParams: p,
      skill: h,
      ratioSort: C = 0,
      value: k = "",
      onChange: S,
      getValue: E,
      onUpdateValue: T
    } = e;
    let j = i18nTranslationUtils.useTranslationWithFallback();
    let {
      skillToolUIV2: P
    } = chatLauncherConfigHooks.useSkillToolLayout(u);
    let N = userInfoStatusSelectors.selectUserInfoSuccess_1();
    let [R] = videoSkillStore.useVideoSkillStore(e => [e.inputOptionsMap], deepEqualityUtil_1.isDeepEqual);
    let I = "skill_input_ratio";
    let O = (R == null ? undefined : R.ratio?.options) ?? [];
    let M = (e, t) => {
      if (S != null) {
        S(e.value);
      }
      if (T != null) {
        T(businessInputSubmit.prepareSubmitData({
          editorValue: E == null ? undefined : E(),
          newValue: e.value,
          text: t,
          key: businessInputSubmit.InputKeys.RATIO,
          inputConfig: R.ratio,
          inputOptionsMap: R
        }));
      }
      videoSkillStore.useVideoSkillStore.getState().updateFocusedState(true);
    };
    reactCoreLibraryReexport.useEffect(() => {
      teaAnalyticsEventTracker.trackEvent("input_bar_skill_option_show", {
        ...p,
        show_position: objectPathGetDefault.getObjectPathDefault(p, "show_position") ?? C,
        option_label: I,
        is_default: 0,
        is_choose_required: 0
      });
    }, []);
    let D = e => {
      if (!N) {
        chatEventEmitter.chatEmitter.emit("chat.guest.login", {
          source: e
        });
        return true;
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(dropdownMenuSelectComponent.DropdownMenuSelect, {
      value: k,
      isOverflow: i,
      title: j("skill_image_intput_ratio"),
      list: x(O),
      "data-testid": "image-creation-chat-input-video-ration-panel",
      renderTrigger: e => reactJsxRuntimeCoreReexport.jsx(asyncSkillChatInputBtn.SkillChatInputBtn, {
        isOverflow: i,
        small: c,
        scene: u,
        onMouseUp: () => {
          teaAnalyticsEventTracker.trackEvent("video_generation_button_click", {
            ...p,
            button_name: "ratio"
          });
        },
        leadingIcon: reactJsxRuntimeCoreReexport.jsx(businessInputToolIcon.BusinessInputIcon, {}),
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex items-center gap-4",
          children: [j("skill_image_intput_ratio"), P ? e : null]
        })
      }),
      onChange: e => {
        var t;
        var n;
        if (!D("video_send_message")) {
          M(e, `${j("skill_image_intput_ratio")} `);
          if (S != null) {
            S(e.value || "");
          }
          teaAnalyticsEventTracker.trackEvent("input_bar_enter_click", {
            ...p,
            button_name: "ratio",
            skill_id: h == null ? undefined : (t = h.skill_type) === null || t === undefined ? undefined : t.toString(),
            skill_name: h == null ? undefined : h.show_name
          });
          teaAnalyticsEventTracker.trackEvent("input_bar_skill_option_click", {
            ...p,
            option_label: I,
            option_sub_label: e.value || "",
            action_type: "select",
            show_position: (n = O.map(e => e.value)) === null || n === undefined ? undefined : n.indexOf(e.value),
            is_default: 0,
            is_choose_required: 0
          });
        }
      },
      onOpenChange: e => {
        if (e && (O == null ? undefined : O.length)) {
          O.map((e, t) => {
            teaAnalyticsEventTracker.trackEvent("input_bar_skill_option_show", {
              ...p,
              option_label: I,
              option_sub_label: e.value || "",
              show_position: t,
              is_default: 0,
              is_choose_required: 0
            });
          });
        }
      }
    });
  };
  function k(e, t, n) {
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
  class S {
    constructor() {
      k(this, "Content", skillChatImgUploadBtn.skillChatImgBtn);
    }
  }
  class E {
    constructor() {
      k(this, "Content", C);
    }
  }
  class T {
    constructor() {
      k(this, "Content", h);
    }
  }
  require.r(exports);
  require.d(exports, {
    VideoRatioSelectPlugin: function () {
      return E;
    },
    VideoModelSelectPlugin: function () {
      return T;
    },
    VideoUploadFilePlugin: function () {
      return S;
    }
  });
}