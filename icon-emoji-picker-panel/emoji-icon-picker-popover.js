// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'EmojiIconPickerPopover'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47996.8a642cb0.js
         * chunkId: 47996
         * moduleId: 448979
         */
module.exports = function (module, exports, require) {
  var o;
  var r;
  var i;
  var a;
  var c;
  var u;
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var _ = classnamesUtils;
  var toastNotificationManagerWrapper = require("toast-notification-manager-wrapper") /*id: 314333*/;
  var archiveBoxPopover = require("archive-box-popover") /*id: 102490*/;
  var uiDefaultContextProvider = require("ui-default-context-provider") /*id: 792028*/;
  var popperUiComponent = require("popper-ui-component") /*id: 372005*/;
  var localeThemeProvider = require("locale-theme-provider") /*id: 292816*/;
  var i18nTranslationHook_1 = require("i18n-translation-hook_1") /*id: 895147*/;
  var iconAssetConstants = require("icon-asset-constants") /*id: 443476*/;
  var uiConstantsEmojiConfig = require("ui-constants-emoji-config") /*id: 592082*/;
  var emojiIconAnalyticsUtil = require("emoji-icon-analytics-util") /*id: 642105*/;
  var i18nContextProvider = require("i18n-context-provider") /*id: 894325*/;
  var k = {
    Bitable_ChangeIcon_Section_Icon_Text: "Icons",
    Bitable_ChangeIcon_Section_Restore_Button: "Reset",
    Bitable_ChangeIcon_Section_SelectColor_Text: "Pick a color",
    Bitable_ChangeIcon_Section_SelectIcon_Text: "Select icon",
    LarkCCM_CM_CustomIcon_Activities_Tab: "Activities",
    LarkCCM_CM_CustomIcon_Animals_Tab: "Animals",
    LarkCCM_CM_CustomIcon_Emoticons_Tab: "Emojis",
    LarkCCM_CM_CustomIcon_FailToUpdate_Toast: "Unable to update the emoji. Please try again later.",
    LarkCCM_CM_CustomIcon_Food_Tab: "Food",
    LarkCCM_CM_CustomIcon_Objects_Tab: "Objects",
    LarkCCM_CM_CustomIcon_Place_Tab: "Places",
    LarkCCM_CM_CustomIcon_Recommend_Title: "Recommended",
    LarkCCM_CM_CustomIcon_Search_Placeholder: "Search",
    LarkCCM_CM_CustomIcon_Symbols_Tab: "Symbols",
    LarkCCM_Docs_CalloutEmoji_Random_Tooltip: "Random",
    LarkCCM_Docs_CalloutEmoji_Remove_Button: "Remove",
    LarkCCM_Docs_Icon_Recents_Title: "Recents"
  };
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var findMaxByUtilValue = require("find-max-by-util-value") /*id: 804972*/;
  var reactLoadableComponent = require("react-loadable-component") /*id: 35867*/;
  var Z = reactLoadableComponent;
  var tabPaneRenderLogic = require("tab-pane-render-logic") /*id: 764827*/;
  var ratioTabsComponent = require("ratio-tabs-component") /*id: 729117*/;
  var reactErrorBoundaryHoc = require("react-error-boundary-hoc") /*id: 999451*/;
  var resourceTypeEnum = require("resource-type-enum") /*id: 342261*/;
  var emojiPickerStylesConstants = require("emoji-picker-styles-constants") /*id: 492426*/;
  var clientEmojiFeatureCheck = require("client-emoji-feature-check") /*id: 527329*/;
  var axiosHttpClientLibrary = require("axios-http-client-library") /*id: 936615*/;
  var queryStringUtils_5 = require("query-string-utils_5") /*id: 298966*/;
  var j = queryStringUtils_5;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var isPlainObjectUtil = require("is-plain-object-util") /*id: 435967*/;
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  var logIdGenerator = require("log-id-generator") /*id: 456614*/;
  (o = a ||= {}).MOBILE_WEB = "mobile_web";
  o.PC_WEB = "pc_web";
  o.WECHAT = "weixin_web";
  o.QQ = "qq_web";
  o.WEIBO = "weibo_web";
  o.TOUTIAO = "toutiao_web";
  o.OTHERS = "others";
  (r = c ||= {}).MAC = "mac";
  r.WINDOWS = "windows";
  r.IPAD = "iPad";
  r.OTHERS = "others";
  (i = u ||= {}).LARKDOCS = "LarkDocs";
  i.LARK = "Lark";
  i.WEB = "web";
  i.OTHERS = "others";
  let H = {
    REQUEST_BIZ_ERROR: "-10"
  };
  var stringFormatConversionUtils = require("string-format-conversion-utils") /*id: 708138*/;
  var cookieValueGetter = require("cookie-value-getter") /*id: 985120*/;
  let V = e => {
    if (!e || !e.requestId) {
      return `${stringFormatConversionUtils.genRandomString(12)}-${(window == null ? undefined : window.User)?.id || "userid"}`;
    }
    return e.requestId;
  };
  let K = e => {
    let t = V(e);
    return {
      "Request-Id": t,
      "X-Request-Id": t,
      "x-tt-trace-id": t,
      "X-CSRFToken": cookieValueGetter.getCookieValue("_csrf_token") || "",
      "F-Version": window && window.rv_rev || "",
      "X-TT-LOGID": logIdGenerator.genLogID()
    };
  };
  u.LARK;
  if (browserEnvDetectionUtil.browserDetector.isIPad) {
    c.IPAD;
  } else if (browserEnvDetectionUtil.browserDetector.isMac) {
    c.MAC;
  } else if (browserEnvDetectionUtil.browserDetector.isWindows) {
    c.WINDOWS;
  } else {
    c.OTHERS;
  }
  if (browserEnvDetectionUtil.browserDetector.isFeishu || browserEnvDetectionUtil.browserDetector.isLark) {
    u.LARK;
  } else if (browserEnvDetectionUtil.browserDetector.isPcWeb) {
    u.WEB;
  } else {
    u.OTHERS;
  }
  var globalConfigUtils = require("global-config-utils") /*id: 115973*/;
  async function J(e) {
    var t;
    if (e.ignoreInterceptors) {
      return e;
    } else {
      return Object.assign(Object.assign({}, e), {
        data: (t = e, objectPathGetDefault.getObjectPathDefault(t, ["headers", "Content-Type"]) !== "application/json" && t.method === "post" && isPlainObjectUtil.isPlainObject(t.data) ? j.stringify(t.data, {
          arrayFormat: "repeat"
        }) : t.data),
        headers: function (e) {
          let t = Object.assign(Object.assign({}, K(e)), e.headers);
          if (browserEnvDetectionUtil.browserDetector.isIE) {
            t["Cache-Control"] = "no-cache";
            t.Pragma = "no-cache";
          }
          return t;
        }(e),
        timeout: e.timeout || 10000
      });
    }
  }
  function q(e) {
    let {
      url: t = "",
      baseURL: n = ""
    } = e;
    if (t || n) {
      if (function (e = "", t = "") {
        let n = window.location.origin;
        let o = (e = "") => /^https:\/\//.test(e);
        let r = e => RegExp(`^${n}`).test(e);
        let i = globalConfigUtils.isBoeEnvironment() ? /^https:\/\/(.*)(?:)(\.feishu-boe\.cn)/ : /^https:\/\/(.*)(?:)(\.feishu\.cn)/;
        let a = e => i.test(e);
        if ([e, t].every(o)) {
          return r(e) && a(e);
        } else if ([e, t].some(o)) {
          return [e, t].some(e => r(e) && a(e));
        } else {
          return a(n);
        }
      }(t, n)) {
        let t = objectPathGetDefault.getObjectPathDefault(window, "User.settingsConfig");
        if (t && t.gray_policy) {
          e.headers = Object.assign(e.headers, t.gray_policy);
        }
      }
      return e;
    }
  }
  let Y = axiosHttpClientLibrary.axios.create({
    baseURL: "/space",
    withCredentials: true,
    paramsSerializer: function (e) {
      return j.stringify(e, {
        arrayFormat: "repeat"
      });
    },
    headers: {
      "Content-Type": "application/json"
    }
  });
  Y.interceptors.request.use(J);
  (function (e) {
    e.interceptors.request.use(q);
  })(Y);
  Y.interceptors.response.use(function (e) {
    let t = e.config;
    if (!t || t.ignoreResponseInterceptors) {
      return e;
    }
    let n = objectPathGetDefault.getObjectPathDefault(e, "data.code");
    if (n !== undefined && n !== 0) {
      return Promise.reject(function (e) {
        let {
          data: t
        } = e;
        let {
          code: n,
          msg: o
        } = t;
        let r = Error(o);
        r.code = n || H.REQUEST_BIZ_ERROR;
        r.config = e.config;
        r.request = e.request;
        r.response = e;
        let i = "response.data.";
        let a = objectPathGetDefault.getObjectPathDefault(r, `${i}data`);
        let c = objectPathGetDefault.getObjectPathDefault(r, `${i}meta`, {});
        r.data = a;
        r.meta = c;
        r.msg = o || "REQUEST_BIZ_ERROR";
        return r;
      }(e));
    } else {
      return function (e) {
        let t = e.config;
        let n = e.data;
        let o = {
          headers: e.headers,
          config: e.config
        };
        if (!t) {
          return e;
        }
        let {
          meta: r,
          data: i,
          code: a
        } = n;
        let c = r || {};
        if (t.mergeRequestHeaderIntoMeta) {
          c = Object.assign(Object.assign({}, c), t.headers);
        }
        if (typeof t.__startTime == "number") {
          c = Object.assign(Object.assign({}, c), {
            durationTime: new Date().getTime() - t.__startTime
          });
        }
        if (i) {
          return Object.assign({
            code: a,
            data: i,
            meta: c
          }, o);
        } else {
          return Object.assign({
            code: a,
            data: n,
            meta: c
          }, o);
        }
      }(e);
    }
  });
  async function X({
    fileToken: e,
    fileType: t,
    memberId: n,
    iconType: o,
    iconKey: r
  }) {
    try {
      let i = Object.assign({
        token: e,
        type: t,
        icon_type: o,
        icon_key: r
      }, n ? {
        member_id: n
      } : {});
      let a = await Y.post("/api/icon/update/", i, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
      emojiIconAnalyticsUtil.trackIconSuccess();
      return a;
    } catch (e) {
      emojiIconAnalyticsUtil.trackIconError(e, "更新图标接口失败");
      return {
        code: -1,
        message: "Error"
      };
    }
  }
  var gameAssetDefinitions = require("game-asset-definitions") /*id: 250704*/;
  let Q = ["dizzy_face", "rage", "angry", "face_with_symbols_on_mouth", "mask", "nauseated_face", "face_vomiting", "smiling_imp", "imp", "japanese_ogre", "japanese_goblin", "skull_and_crossbones", "middle_finger", "anger", "bomb", "hocho", "crossed_swords", "gun", "coffin", "funeral_urn", "right_anger_bubble", "face_with_head_bandage", "face_with_thermometer"];
  let ee = ["persevere", "disappointed_relieved", "tired_face", "unamused", "sweat", "pensive", "confused", "white_frowning_face", "slightly_frowning_face", "disappointed", "worried", "triumph", "cry", "sob", "weary", "rage", "angry", "face_with_symbols_on_mouth", "imp", "crying_cat_face", "-1", "broken_heart", "black_heart", "anger", "sos"];
  async function et() {
    let {
      getPickData: e
    } = await Promise.all([require.e("emoji-picker-component") /*id: 24087*/, require.e("88435") /*id: emoji-picker*/]).then(require.bind(require, "emoji-data-config") /*id: 184968*/);
    let t = e();
    let o = t.categories.reduce((e, t) => e.concat(t.emojis), []);
    let r = function () {
      let e = objectPathGetDefault.getObjectPathDefault(window, "User.settingsConfig");
      let t = objectPathGetDefault.getObjectPathDefault(e, "ccm_docx_random_pick_emoji_blocklist");
      let n = objectPathGetDefault.getObjectPathDefault(t, "list");
      return new Set(n || [...Q, ...ee]);
    }();
    let i = function (e) {
      let t = Math.floor(Math.random() * e.length);
      return e[t];
    }(o.filter(e => !r.has(e)));
    let a = t.emojis[i].skins[0].unified;
    let c = t.emojis[i].id;
    return {
      key: a,
      serverKey: a,
      type: uiConstantsEmojiConfig.iconTypes.EMOJI,
      emojiId: c
    };
  }
  var unifiedButtonComponent = require("unified-button-component") /*id: 488299*/;
  var visibleLockOutlinedIcon = require("visible-lock-outlined-icon") /*id: 700898*/;
  let er = e => {
    let {
      disabled: t,
      onClick: n
    } = e;
    let o = i18nTranslationHook_1.useI18n();
    return reactCoreLibraryReexport.createElement(unifiedButtonComponent.UnifiedButton, {
      className: `${iconAssetConstants.bizSuiteIconName}__remove-btn`,
      type: "text",
      icon: reactCoreLibraryReexport.createElement(visibleLockOutlinedIcon.VisibleLockOutlined, null),
      disabled: t,
      onClick: n
    }, o("LarkCCM_Docs_CalloutEmoji_Remove_Button"));
  };
  var loadingComponent = require("loading-component") /*id: 666260*/;
  let ea = () => reactCoreLibraryReexport.createElement("div", {
    className: `${iconAssetConstants.bizSuiteIconName}__picker-loading`
  }, reactCoreLibraryReexport.createElement(loadingComponent.LoadingComponent, null));
  require("biz-suite-custom-icon-styles_3") /*id: 601304*/;
  let ec = (...e) => undefined;
  function eu(e) {
    let t = reactCoreLibraryReexport.useRef(e || ec);
    t.current = e || ec;
    let n = reactCoreLibraryReexport.useRef();
    n.current ||= function (...e) {
      return t.current.apply(this, e);
    };
    return n.current;
  }
  let es = Z({
    loader: () => Promise.all([require.e("emoji-picker-component") /*id: 24087*/, require.e("88435") /*id: emoji-picker*/]).then(require.bind(require, "emoji-picker-component") /*id: 280293*/),
    loading: ea,
    render: (e, t) => {
      let {
        EmojiPicker: n
      } = e;
      return reactCoreLibraryReexport.createElement(n, Object.assign({}, t));
    }
  });
  let el = Z({
    loader: () => require.e("base-icon-picker-component") /*id: 30799*/.then(require.bind(require, "bitable-icon-picker") /*id: 165639*/),
    loading: ea,
    render: (e, t) => {
      let {
        BaseIconPicker: n
      } = e;
      return reactCoreLibraryReexport.createElement(n, Object.assign({}, t));
    }
  });
  var ed = reactErrorBoundaryHoc.withErrorBoundary(e => {
    let {
      currentIcon: t,
      fileToken: n,
      fileType: o,
      memberId: r,
      innerHeight: i,
      disableSendRequest: a,
      isIconPanelEnabled: c = clientEmojiFeatureCheck.iconPanelFeature,
      isBaseResetIconUseEmpty: u,
      onUpdate: s,
      autoFocus: d,
      emojiOnly: p,
      supportRandom: m,
      supportReset: C = true,
      source: v
    } = e;
    let {
      type: y,
      key: k
    } = t;
    let T = i18nTranslationHook_1.useI18n();
    let Z = eu(s);
    let [R, P] = reactCoreLibraryReexport.useState(gameAssetDefinitions.isValidAsset(k) ? k : undefined);
    let B = reactCoreLibraryReexport.useMemo(() => o === resourceTypeEnum.ResourceType.BITABLE, [o]);
    let j = reactCoreLibraryReexport.useMemo(() => B && (!R || !u && R === iconAssetConstants.purpleIconPath), [B, R, u]);
    let D = {
      "--inner-height": `${findMaxByUtilValue.findMaxByUtilValue([i, iconAssetConstants.imageWidth])}px`
    };
    let N = e => {
      if (Z != null) {
        Z(Object.assign(Object.assign({}, t), {
          serverKey: e ? gameAssetDefinitions.formatAssetName(t.key) : t.key
        }));
      }
      toastNotificationManagerWrapper.toastManagerWrapper.error({
        content: T("LarkCCM_CM_CustomIcon_FailToUpdate_Toast")
      });
    };
    let z = eu(async (e, i) => {
      if (a || deepEqualUtil_1.deepEqual(e, t)) {
        return;
      }
      let {
        type: c,
        key: u,
        serverKey: s
      } = e;
      if (!n || !o) {
        N(i);
        return;
      }
      let {
        code: l
      } = await X({
        fileToken: n,
        fileType: o,
        memberId: r,
        iconType: c,
        iconKey: i ? s : u
      });
      if (l !== 0) {
        N(i);
      }
    });
    let F = reactCoreLibraryReexport.useCallback(debounceUtil_1_1.debounce(z, 500), []);
    let H = async () => {
      let e = await et();
      if (Z != null) {
        Z(e);
      }
      z(e, false);
    };
    let W = reactCoreLibraryReexport.useCallback(debounceUtil_1_1.debounce(async (e, t) => {
      if (!gameAssetDefinitions.isValidAsset(e)) {
        return;
      }
      let n = {
        type: t ? uiConstantsEmojiConfig.iconTypes.UNSET : uiConstantsEmojiConfig.iconTypes.ICON,
        key: t ? "" : e,
        serverKey: t ? "" : gameAssetDefinitions.formatAssetName(e)
      };
      if (Z != null) {
        Z(n);
      }
      z(n, true);
    }, 500), [Z, a, n, o, r]);
    let U = reactCoreLibraryReexport.useCallback(debounceUtil_1_1.debounce(async e => {
      P(iconAssetConstants.orangeIconPath);
      let t = Object.assign(Object.assign({}, e), {
        serverKey: e.key
      });
      if (Z != null) {
        Z(t);
      }
      F(t, false);
    }, 200), [Z, a, n, o, r]);
    let V = reactCoreLibraryReexport.useCallback(() => {
      U({
        type: uiConstantsEmojiConfig.iconTypes.UNSET,
        key: "",
        emojiId: ""
      });
      let e = y === uiConstantsEmojiConfig.iconTypes.EMOJI ? emojiIconAnalyticsUtil.EmojiTabTypes.REMOVE_EMOJI : emojiIconAnalyticsUtil.IconActionTypes.recover;
      emojiIconAnalyticsUtil.trackEmojiPanelClick(e, {
        target: "none"
      });
    }, [y, U]);
    let K = reactCoreLibraryReexport.useCallback(() => {
      P(u ? undefined : iconAssetConstants.purpleIconPath);
      W(iconAssetConstants.purpleIconPath, u);
      emojiIconAnalyticsUtil.trackEmojiPanelClick(emojiIconAnalyticsUtil.IconActionTypes.recover, {
        target: "none"
      });
    }, [W, u]);
    let $ = e => {
      let {
        unified: t,
        id: n
      } = e;
      let o = t || "";
      U({
        type: uiConstantsEmojiConfig.iconTypes.EMOJI,
        key: o,
        emojiId: n
      });
      emojiIconAnalyticsUtil.trackEmojiPanelClick(emojiIconAnalyticsUtil.EmojiTabTypes.EMOJI, {
        target: "none",
        emoji_id: o
      });
    };
    let J = e => {
      let t;
      switch (e) {
        case emojiPickerStylesConstants.iconTypeConstants.EMOJI:
          t = emojiIconAnalyticsUtil.EmojiTabTypes.EMOJI_TAB;
          break;
        case emojiPickerStylesConstants.iconTypeConstants.ICON:
          t = emojiIconAnalyticsUtil.EmojiTabTypes.ICON_TAB;
          break;
        default:
          t = "";
      }
      emojiIconAnalyticsUtil.trackEmojiPanelClick(t);
    };
    let q = reactCoreLibraryReexport.useMemo(() => B ? emojiPickerStylesConstants.iconTypeConstants.ICON : emojiPickerStylesConstants.iconTypeConstants.EMOJI, [B]);
    let Y = reactCoreLibraryReexport.useMemo(() => {
      let t = emojiPickerStylesConstants.iconTypeMap[y] ?? q;
      if (!B && !c) {
        t = emojiPickerStylesConstants.iconTypeConstants.EMOJI;
      }
      return t;
    }, [y, q, B, c]);
    let Q = () => reactCoreLibraryReexport.createElement(es, {
      onEmojiSelect: $,
      autoFocus: d,
      supportRandom: m,
      onRandomPick: H,
      source: v
    });
    let ee = reactCoreLibraryReexport.useMemo(() => ({
      onClick: B ? K : V,
      disabled: B ? j : !k
    }), [j, B, k, K, V]);
    return reactCoreLibraryReexport.createElement("div", {
      className: _(`${iconAssetConstants.bizSuiteIconName}__panel-wrapper`, {
        "support-random": m,
        "emoji-only": p
      }),
      style: D,
      onClick: e => {
        e.stopPropagation();
      }
    }, p ? Q() : (() => {
      let e = reactCoreLibraryReexport.createElement(tabPaneRenderLogic.TabPane, {
        tab: T("LarkCCM_CM_CustomIcon_Emoticons_Tab"),
        key: emojiPickerStylesConstants.iconTypeConstants.EMOJI
      }, Q());
      let t = reactCoreLibraryReexport.createElement(tabPaneRenderLogic.TabPane, {
        tab: T("Bitable_ChangeIcon_Section_Icon_Text"),
        key: emojiPickerStylesConstants.iconTypeConstants.ICON
      }, reactCoreLibraryReexport.createElement(el, {
        isBase: B,
        value: R,
        onChange: e => {
          P(e);
          W(e);
        }
      }));
      let n = [e, c ? t : undefined];
      return reactCoreLibraryReexport.createElement(ratioTabsComponent.Tabs, {
        defaultActiveKey: Y,
        onChange: J
      }, B ? [t] : n);
    })(), !!C && reactCoreLibraryReexport.createElement(er, Object.assign({}, ee)));
  });
  let e_ = i18nContextProvider.createI18nProvider(ed, {
    localesMaps: {
      "zh-TW": {
        Bitable_ChangeIcon_Section_Icon_Text: "圖示",
        Bitable_ChangeIcon_Section_Restore_Button: "還原預設",
        Bitable_ChangeIcon_Section_SelectColor_Text: "選擇顏色",
        Bitable_ChangeIcon_Section_SelectIcon_Text: "選擇圖示",
        LarkCCM_CM_CustomIcon_Activities_Tab: "活動",
        LarkCCM_CM_CustomIcon_Animals_Tab: "動物",
        LarkCCM_CM_CustomIcon_Emoticons_Tab: "表情符號",
        LarkCCM_CM_CustomIcon_FailToUpdate_Toast: "無法更換圖示，請稍後重試",
        LarkCCM_CM_CustomIcon_Food_Tab: "食物",
        LarkCCM_CM_CustomIcon_Objects_Tab: "物件",
        LarkCCM_CM_CustomIcon_Place_Tab: "地點",
        LarkCCM_CM_CustomIcon_Recommend_Title: "推薦",
        LarkCCM_CM_CustomIcon_Search_Placeholder: "搜尋",
        LarkCCM_CM_CustomIcon_Symbols_Tab: "符號",
        LarkCCM_Docs_CalloutEmoji_Random_Tooltip: "隨機",
        LarkCCM_Docs_CalloutEmoji_Remove_Button: "移除",
        LarkCCM_Docs_Icon_Recents_Title: "最近"
      },
      "pt-BR": {
        Bitable_ChangeIcon_Section_Icon_Text: "Ícones",
        Bitable_ChangeIcon_Section_Restore_Button: "Redefinir",
        Bitable_ChangeIcon_Section_SelectColor_Text: "Escolha uma cor",
        Bitable_ChangeIcon_Section_SelectIcon_Text: "Selecionar ícone",
        LarkCCM_CM_CustomIcon_Activities_Tab: "Atividades",
        LarkCCM_CM_CustomIcon_Animals_Tab: "Animais",
        LarkCCM_CM_CustomIcon_Emoticons_Tab: "Emojis",
        LarkCCM_CM_CustomIcon_FailToUpdate_Toast: "Não é possível atualizar o emoji. Tente novamente mais tarde.",
        LarkCCM_CM_CustomIcon_Food_Tab: "Comida",
        LarkCCM_CM_CustomIcon_Objects_Tab: "Objetos",
        LarkCCM_CM_CustomIcon_Place_Tab: "Locais",
        LarkCCM_CM_CustomIcon_Recommend_Title: "Recomendado",
        LarkCCM_CM_CustomIcon_Search_Placeholder: "Pesquisar",
        LarkCCM_CM_CustomIcon_Symbols_Tab: "Símbolos",
        LarkCCM_Docs_CalloutEmoji_Random_Tooltip: "Aleatório",
        LarkCCM_Docs_CalloutEmoji_Remove_Button: "Remover",
        LarkCCM_Docs_Icon_Recents_Title: "Recentes"
      },
      "fr-FR": {
        Bitable_ChangeIcon_Section_Icon_Text: "Icônes",
        Bitable_ChangeIcon_Section_Restore_Button: "Réinitialiser",
        Bitable_ChangeIcon_Section_SelectColor_Text: "Choisir une couleur",
        Bitable_ChangeIcon_Section_SelectIcon_Text: "Sélectionner l'icône",
        LarkCCM_CM_CustomIcon_Activities_Tab: "Activités",
        LarkCCM_CM_CustomIcon_Animals_Tab: "Animaux",
        LarkCCM_CM_CustomIcon_Emoticons_Tab: "Emojis",
        LarkCCM_CM_CustomIcon_FailToUpdate_Toast: "Impossible de mettre à jour l'emoji. Veuillez réessayer plus tard.",
        LarkCCM_CM_CustomIcon_Food_Tab: "Nourriture",
        LarkCCM_CM_CustomIcon_Objects_Tab: "Objets",
        LarkCCM_CM_CustomIcon_Place_Tab: "Espaces",
        LarkCCM_CM_CustomIcon_Recommend_Title: "Recommandé",
        LarkCCM_CM_CustomIcon_Search_Placeholder: "Rechercher",
        LarkCCM_CM_CustomIcon_Symbols_Tab: "Symboles",
        LarkCCM_Docs_CalloutEmoji_Random_Tooltip: "Aléatoire",
        LarkCCM_Docs_CalloutEmoji_Remove_Button: "Retirer",
        LarkCCM_Docs_Icon_Recents_Title: "Récents"
      },
      "zh-CN": {
        Bitable_ChangeIcon_Section_Icon_Text: "图标",
        Bitable_ChangeIcon_Section_Restore_Button: "恢复默认",
        Bitable_ChangeIcon_Section_SelectColor_Text: "选择颜色",
        Bitable_ChangeIcon_Section_SelectIcon_Text: "选择图标",
        LarkCCM_CM_CustomIcon_Activities_Tab: "活动",
        LarkCCM_CM_CustomIcon_Animals_Tab: "动物",
        LarkCCM_CM_CustomIcon_Emoticons_Tab: "表情符号",
        LarkCCM_CM_CustomIcon_FailToUpdate_Toast: "无法更换图标，请稍后重试",
        LarkCCM_CM_CustomIcon_Food_Tab: "食物",
        LarkCCM_CM_CustomIcon_Objects_Tab: "物件",
        LarkCCM_CM_CustomIcon_Place_Tab: "地点",
        LarkCCM_CM_CustomIcon_Recommend_Title: "推荐",
        LarkCCM_CM_CustomIcon_Search_Placeholder: "搜索",
        LarkCCM_CM_CustomIcon_Symbols_Tab: "符号",
        LarkCCM_Docs_CalloutEmoji_Random_Tooltip: "随机",
        LarkCCM_Docs_CalloutEmoji_Remove_Button: "移除",
        LarkCCM_Docs_Icon_Recents_Title: "最近"
      },
      "ko-KR": {
        Bitable_ChangeIcon_Section_Icon_Text: "아이콘",
        Bitable_ChangeIcon_Section_Restore_Button: "재설정",
        Bitable_ChangeIcon_Section_SelectColor_Text: "색상 선택",
        Bitable_ChangeIcon_Section_SelectIcon_Text: "선택 아이콘",
        LarkCCM_CM_CustomIcon_Activities_Tab: "활동",
        LarkCCM_CM_CustomIcon_Animals_Tab: "동물",
        LarkCCM_CM_CustomIcon_Emoticons_Tab: "이모지",
        LarkCCM_CM_CustomIcon_FailToUpdate_Toast: "이모지를 업데이트할 수 없습니다. 나중에 다시 시도하세요.",
        LarkCCM_CM_CustomIcon_Food_Tab: "음식",
        LarkCCM_CM_CustomIcon_Objects_Tab: "개체",
        LarkCCM_CM_CustomIcon_Place_Tab: "자리",
        LarkCCM_CM_CustomIcon_Recommend_Title: "추천",
        LarkCCM_CM_CustomIcon_Search_Placeholder: "검색",
        LarkCCM_CM_CustomIcon_Symbols_Tab: "기호",
        LarkCCM_Docs_CalloutEmoji_Random_Tooltip: "랜덤",
        LarkCCM_Docs_CalloutEmoji_Remove_Button: "제거",
        LarkCCM_Docs_Icon_Recents_Title: "최근 항목"
      },
      "vi-VN": {
        Bitable_ChangeIcon_Section_Icon_Text: "Biểu tượng",
        Bitable_ChangeIcon_Section_Restore_Button: "Đặt lại",
        Bitable_ChangeIcon_Section_SelectColor_Text: "Chọn một màu",
        Bitable_ChangeIcon_Section_SelectIcon_Text: "Chọn biểu tượng",
        LarkCCM_CM_CustomIcon_Activities_Tab: "Hoạt động",
        LarkCCM_CM_CustomIcon_Animals_Tab: "Động vật",
        LarkCCM_CM_CustomIcon_Emoticons_Tab: "Biểu tượng cảm xúc",
        LarkCCM_CM_CustomIcon_FailToUpdate_Toast: "Không thể cập nhật biểu tượng cảm xúc. Vui lòng thử lại sau.",
        LarkCCM_CM_CustomIcon_Food_Tab: "Thực phẩm",
        LarkCCM_CM_CustomIcon_Objects_Tab: "Đối tượng",
        LarkCCM_CM_CustomIcon_Place_Tab: "Vị trí",
        LarkCCM_CM_CustomIcon_Recommend_Title: "Đề xuất",
        LarkCCM_CM_CustomIcon_Search_Placeholder: "Tìm kiếm",
        LarkCCM_CM_CustomIcon_Symbols_Tab: "Biểu tượng",
        LarkCCM_Docs_CalloutEmoji_Random_Tooltip: "Ngẫu nhiên",
        LarkCCM_Docs_CalloutEmoji_Remove_Button: "Xóa",
        LarkCCM_Docs_Icon_Recents_Title: "Gần đây"
      },
      "it-IT": {
        Bitable_ChangeIcon_Section_Icon_Text: "Icone",
        Bitable_ChangeIcon_Section_Restore_Button: "Ripristina",
        Bitable_ChangeIcon_Section_SelectColor_Text: "Scegli un colore",
        Bitable_ChangeIcon_Section_SelectIcon_Text: "Seleziona icona",
        LarkCCM_CM_CustomIcon_Activities_Tab: "Attività",
        LarkCCM_CM_CustomIcon_Animals_Tab: "Animali",
        LarkCCM_CM_CustomIcon_Emoticons_Tab: "Emoji",
        LarkCCM_CM_CustomIcon_FailToUpdate_Toast: "Impossibile aggiornare l'emoji. Riprova più tardi.",
        LarkCCM_CM_CustomIcon_Food_Tab: "Cibo",
        LarkCCM_CM_CustomIcon_Objects_Tab: "Oggetti",
        LarkCCM_CM_CustomIcon_Place_Tab: "Luoghi",
        LarkCCM_CM_CustomIcon_Recommend_Title: "Consigliato",
        LarkCCM_CM_CustomIcon_Search_Placeholder: "Cerca",
        LarkCCM_CM_CustomIcon_Symbols_Tab: "Simboli",
        LarkCCM_Docs_CalloutEmoji_Random_Tooltip: "Casuale",
        LarkCCM_Docs_CalloutEmoji_Remove_Button: "Rimuovi",
        LarkCCM_Docs_Icon_Recents_Title: "Recenti"
      },
      "de-DE": {
        Bitable_ChangeIcon_Section_Icon_Text: "Symbole",
        Bitable_ChangeIcon_Section_Restore_Button: "Zurücksetzen",
        Bitable_ChangeIcon_Section_SelectColor_Text: "Eine Farbe wählen",
        Bitable_ChangeIcon_Section_SelectIcon_Text: "Symbol auswählen",
        LarkCCM_CM_CustomIcon_Activities_Tab: "Aktivitäten",
        LarkCCM_CM_CustomIcon_Animals_Tab: "Tiere",
        LarkCCM_CM_CustomIcon_Emoticons_Tab: "Emojis",
        LarkCCM_CM_CustomIcon_FailToUpdate_Toast: "Aktualisieren des Emoji nicht möglich. Bitte versuchen Sie es später erneut.",
        LarkCCM_CM_CustomIcon_Food_Tab: "Lebensmittel",
        LarkCCM_CM_CustomIcon_Objects_Tab: "Objekte",
        LarkCCM_CM_CustomIcon_Place_Tab: "Orte",
        LarkCCM_CM_CustomIcon_Recommend_Title: "Empfohlen",
        LarkCCM_CM_CustomIcon_Search_Placeholder: "Suchen",
        LarkCCM_CM_CustomIcon_Symbols_Tab: "Symbole",
        LarkCCM_Docs_CalloutEmoji_Random_Tooltip: "Zufällig",
        LarkCCM_Docs_CalloutEmoji_Remove_Button: "Entfernen",
        LarkCCM_Docs_Icon_Recents_Title: "Neuere"
      },
      "id-ID": {
        Bitable_ChangeIcon_Section_Icon_Text: "Ikon",
        Bitable_ChangeIcon_Section_Restore_Button: "Reset",
        Bitable_ChangeIcon_Section_SelectColor_Text: "Pilih warna",
        Bitable_ChangeIcon_Section_SelectIcon_Text: "Pilih ikon",
        LarkCCM_CM_CustomIcon_Activities_Tab: "Aktivitas",
        LarkCCM_CM_CustomIcon_Animals_Tab: "Hewan",
        LarkCCM_CM_CustomIcon_Emoticons_Tab: "Emoji",
        LarkCCM_CM_CustomIcon_FailToUpdate_Toast: "Gagal memperbarui emoji. Coba lagi nanti.",
        LarkCCM_CM_CustomIcon_Food_Tab: "Makanan",
        LarkCCM_CM_CustomIcon_Objects_Tab: "Objek",
        LarkCCM_CM_CustomIcon_Place_Tab: "Tempat",
        LarkCCM_CM_CustomIcon_Recommend_Title: "Direkomendasikan",
        LarkCCM_CM_CustomIcon_Search_Placeholder: "Cari",
        LarkCCM_CM_CustomIcon_Symbols_Tab: "Simbol",
        LarkCCM_Docs_CalloutEmoji_Random_Tooltip: "Acak",
        LarkCCM_Docs_CalloutEmoji_Remove_Button: "Hapus",
        LarkCCM_Docs_Icon_Recents_Title: "Terbaru"
      },
      "ru-RU": {
        Bitable_ChangeIcon_Section_Icon_Text: "Значки",
        Bitable_ChangeIcon_Section_Restore_Button: "Сброс",
        Bitable_ChangeIcon_Section_SelectColor_Text: "Выберите цвет",
        Bitable_ChangeIcon_Section_SelectIcon_Text: "Выберите значок",
        LarkCCM_CM_CustomIcon_Activities_Tab: "Деятельность",
        LarkCCM_CM_CustomIcon_Animals_Tab: "Животные",
        LarkCCM_CM_CustomIcon_Emoticons_Tab: "Эмодзи",
        LarkCCM_CM_CustomIcon_FailToUpdate_Toast: "Не удалось обновить эмодзи. Повторите попытку позже.",
        LarkCCM_CM_CustomIcon_Food_Tab: "Еда",
        LarkCCM_CM_CustomIcon_Objects_Tab: "Объекты",
        LarkCCM_CM_CustomIcon_Place_Tab: "Места",
        LarkCCM_CM_CustomIcon_Recommend_Title: "Рекомендуемые",
        LarkCCM_CM_CustomIcon_Search_Placeholder: "Поиск",
        LarkCCM_CM_CustomIcon_Symbols_Tab: "Символы",
        LarkCCM_Docs_CalloutEmoji_Random_Tooltip: "Случайно",
        LarkCCM_Docs_CalloutEmoji_Remove_Button: "Удалить",
        LarkCCM_Docs_Icon_Recents_Title: "Недавние"
      },
      "zh-HK": {
        Bitable_ChangeIcon_Section_Icon_Text: "圖標",
        Bitable_ChangeIcon_Section_Restore_Button: "恢復預設",
        Bitable_ChangeIcon_Section_SelectColor_Text: "選擇顏色",
        Bitable_ChangeIcon_Section_SelectIcon_Text: "選擇圖標",
        LarkCCM_CM_CustomIcon_Activities_Tab: "活動",
        LarkCCM_CM_CustomIcon_Animals_Tab: "動物",
        LarkCCM_CM_CustomIcon_Emoticons_Tab: "表情符號",
        LarkCCM_CM_CustomIcon_FailToUpdate_Toast: "無法更換圖標，請稍後重試",
        LarkCCM_CM_CustomIcon_Food_Tab: "食物",
        LarkCCM_CM_CustomIcon_Objects_Tab: "物件",
        LarkCCM_CM_CustomIcon_Place_Tab: "地點",
        LarkCCM_CM_CustomIcon_Recommend_Title: "推薦",
        LarkCCM_CM_CustomIcon_Search_Placeholder: "搜尋",
        LarkCCM_CM_CustomIcon_Symbols_Tab: "符號",
        LarkCCM_Docs_CalloutEmoji_Random_Tooltip: "隨機",
        LarkCCM_Docs_CalloutEmoji_Remove_Button: "移除",
        LarkCCM_Docs_Icon_Recents_Title: "最近"
      },
      "ja-JP": {
        Bitable_ChangeIcon_Section_Icon_Text: "アイコン",
        Bitable_ChangeIcon_Section_Restore_Button: "リセット",
        Bitable_ChangeIcon_Section_SelectColor_Text: "色を選択",
        Bitable_ChangeIcon_Section_SelectIcon_Text: "アイコンを選択",
        LarkCCM_CM_CustomIcon_Activities_Tab: "アクティビティ",
        LarkCCM_CM_CustomIcon_Animals_Tab: "動物",
        LarkCCM_CM_CustomIcon_Emoticons_Tab: "絵文字",
        LarkCCM_CM_CustomIcon_FailToUpdate_Toast: "絵文字をアップデートすることができません。後で再試行してください。",
        LarkCCM_CM_CustomIcon_Food_Tab: "食べ物",
        LarkCCM_CM_CustomIcon_Objects_Tab: "物",
        LarkCCM_CM_CustomIcon_Place_Tab: "場所",
        LarkCCM_CM_CustomIcon_Recommend_Title: "おすすめ",
        LarkCCM_CM_CustomIcon_Search_Placeholder: "検索",
        LarkCCM_CM_CustomIcon_Symbols_Tab: "記号",
        LarkCCM_Docs_CalloutEmoji_Random_Tooltip: "ランダム",
        LarkCCM_Docs_CalloutEmoji_Remove_Button: "取り消す",
        LarkCCM_Docs_Icon_Recents_Title: "最近"
      },
      "th-TH": {
        Bitable_ChangeIcon_Section_Icon_Text: "ไอคอน",
        Bitable_ChangeIcon_Section_Restore_Button: "รีเซ็ต",
        Bitable_ChangeIcon_Section_SelectColor_Text: "เลือกสี",
        Bitable_ChangeIcon_Section_SelectIcon_Text: "เลือกไอคอน",
        LarkCCM_CM_CustomIcon_Activities_Tab: "กิจกรรม",
        LarkCCM_CM_CustomIcon_Animals_Tab: "สัตว์",
        LarkCCM_CM_CustomIcon_Emoticons_Tab: "อีโมจิ",
        LarkCCM_CM_CustomIcon_FailToUpdate_Toast: "ไม่สามารถอัปเดตอีโมจิ โปรดลองอีกครั้งในภายหลัง",
        LarkCCM_CM_CustomIcon_Food_Tab: "อาหาร",
        LarkCCM_CM_CustomIcon_Objects_Tab: "ออบเจ็กต์",
        LarkCCM_CM_CustomIcon_Place_Tab: "สถานที่",
        LarkCCM_CM_CustomIcon_Recommend_Title: "รายการที่แนะนำ",
        LarkCCM_CM_CustomIcon_Search_Placeholder: "ค้นหา",
        LarkCCM_CM_CustomIcon_Symbols_Tab: "สัญลักษณ์",
        LarkCCM_Docs_CalloutEmoji_Random_Tooltip: "สุ่ม",
        LarkCCM_Docs_CalloutEmoji_Remove_Button: "ลบออก",
        LarkCCM_Docs_Icon_Recents_Title: "ล่าสุด"
      },
      "hi-IN": {},
      "en-US": k,
      "es-ES": {
        Bitable_ChangeIcon_Section_Icon_Text: "Iconos",
        Bitable_ChangeIcon_Section_Restore_Button: "Restablecer",
        Bitable_ChangeIcon_Section_SelectColor_Text: "Elegir un color",
        Bitable_ChangeIcon_Section_SelectIcon_Text: "Seleccionar icono",
        LarkCCM_CM_CustomIcon_Activities_Tab: "Actividades",
        LarkCCM_CM_CustomIcon_Animals_Tab: "Animales",
        LarkCCM_CM_CustomIcon_Emoticons_Tab: "Emojis",
        LarkCCM_CM_CustomIcon_FailToUpdate_Toast: "No se puede actualizar el emoji. Inténtalo de nuevo más tarde.",
        LarkCCM_CM_CustomIcon_Food_Tab: "Comida",
        LarkCCM_CM_CustomIcon_Objects_Tab: "Objetos",
        LarkCCM_CM_CustomIcon_Place_Tab: "Lugares",
        LarkCCM_CM_CustomIcon_Recommend_Title: "Recomendada",
        LarkCCM_CM_CustomIcon_Search_Placeholder: "Buscar",
        LarkCCM_CM_CustomIcon_Symbols_Tab: "Símbolos",
        LarkCCM_Docs_CalloutEmoji_Random_Tooltip: "Aleatorio",
        LarkCCM_Docs_CalloutEmoji_Remove_Button: "Quitar",
        LarkCCM_Docs_Icon_Recents_Title: "Recientes"
      },
      "ms-MY": {
        Bitable_ChangeIcon_Section_Icon_Text: "Ikon",
        Bitable_ChangeIcon_Section_Restore_Button: "Tetapkan semula",
        Bitable_ChangeIcon_Section_SelectColor_Text: "Pilih warna",
        Bitable_ChangeIcon_Section_SelectIcon_Text: "Pilih ikon",
        LarkCCM_CM_CustomIcon_Activities_Tab: "Aktiviti",
        LarkCCM_CM_CustomIcon_Animals_Tab: "Haiwan",
        LarkCCM_CM_CustomIcon_Emoticons_Tab: "Emojis",
        LarkCCM_CM_CustomIcon_FailToUpdate_Toast: "Tidak dapat mengemas kini emoji. Sila cuba lagi kemudian.",
        LarkCCM_CM_CustomIcon_Food_Tab: "Makanan",
        LarkCCM_CM_CustomIcon_Objects_Tab: "Objek",
        LarkCCM_CM_CustomIcon_Place_Tab: "Tempat",
        LarkCCM_CM_CustomIcon_Recommend_Title: "Disyorkan",
        LarkCCM_CM_CustomIcon_Search_Placeholder: "Cari",
        LarkCCM_CM_CustomIcon_Symbols_Tab: "Simbol",
        LarkCCM_Docs_CalloutEmoji_Random_Tooltip: "Rawak",
        LarkCCM_Docs_CalloutEmoji_Remove_Button: "Alih keluar",
        LarkCCM_Docs_Icon_Recents_Title: "Terbaharu"
      },
      "": k
    }
  });
  i18nContextProvider.createLangProvider(ed);
  require("inject-popover-styles") /*id: 111109*/;
  let ef = e => {
    let {
      currentIcon: t,
      fileToken: n,
      fileType: o,
      memberId: r,
      disableSendRequest: i,
      innerHeight: a,
      locale: c,
      isIconPanelEnabled: u,
      isBaseResetIconUseEmpty: d,
      defaultVisible: y = false,
      onUpdate: k,
      randomPickEmojiWhenEmpty: I,
      emojiOnly: w,
      supportRandom: E,
      supportReset: T,
      autoFocus: Z,
      destroyOnHide: x,
      source: L,
      disableFloatingUIPopperSidecar: R,
      fallbackPlacements: S
    } = e;
    let O = typescriptRuntimeHelpers.objectRest(e, ["currentIcon", "fileToken", "fileType", "memberId", "disableSendRequest", "innerHeight", "locale", "isIconPanelEnabled", "isBaseResetIconUseEmpty", "defaultVisible", "onUpdate", "randomPickEmojiWhenEmpty", "emojiOnly", "supportRandom", "supportReset", "autoFocus", "destroyOnHide", "source", "disableFloatingUIPopperSidecar", "fallbackPlacements"]);
    let {
      enabled: A,
      onPicked: P
    } = I || {};
    let B = i18nTranslationHook_1.useI18n();
    let {
      children: j,
      overlayClassName: D,
      onOpenChange: N,
      placement: z
    } = O;
    let [F, H] = reactCoreLibraryReexport.useState(y);
    let W = reactCoreLibraryReexport.useRef(null);
    let U = () => {
      if (k != null) {
        k(Object.assign(Object.assign({}, t), {
          serverKey: t.key
        }));
      }
      toastNotificationManagerWrapper.toastManagerWrapper.error({
        content: B("LarkCCM_CM_CustomIcon_FailToUpdate_Toast")
      });
    };
    let V = async e => {
      if (A && !t.key) {
        let e = await et();
        if (k != null) {
          k(e);
        }
        if (P != null) {
          P();
        }
        if (!n || !o) {
          U();
          return;
        }
        let {
          code: t
        } = await X({
          fileToken: n,
          fileType: o,
          memberId: r,
          iconType: uiConstantsEmojiConfig.iconTypes.EMOJI,
          iconKey: e.key
        });
        if (t !== 0) {
          U();
        }
      } else {
        H(e);
        if (N != null) {
          N(e);
        }
      }
      if (e) {
        emojiIconAnalyticsUtil.trackEmojiPanelView();
      } else {
        emojiIconAnalyticsUtil.trackEmojiPanelClick(emojiIconAnalyticsUtil.IconActionTypes.save, {
          target: "none",
          is_emoji_changed: true,
          is_color_changed: true
        });
      }
    };
    let K = e => {
      e.preventDefault();
      e.stopPropagation();
      V(!F);
    };
    reactCoreLibraryReexport.useEffect(() => {
      let e = W.current;
      if (e) {
        e.addEventListener("click", K);
        return () => {
          e.removeEventListener("click", K);
        };
      }
    }, [K]);
    let $ = reactCoreLibraryReexport.createElement(e_, {
      currentIcon: t,
      fileToken: n,
      fileType: o,
      memberId: r,
      innerHeight: a,
      disableSendRequest: i,
      isIconPanelEnabled: u,
      isBaseResetIconUseEmpty: d,
      onUpdate: k,
      autoFocus: Z,
      emojiOnly: w,
      supportRandom: E,
      supportReset: T,
      source: L
    });
    let J = reactCoreLibraryReexport.createElement(archiveBoxPopover.archiveBoxPopover, Object.assign({
      showArrow: false,
      trigger: "click",
      placement: z || "bottom",
      offset: 9,
      destroyOnHide: x,
      mode: "pure"
    }, O, {
      visible: F,
      content: $,
      onVisibleChange: V,
      overlayClassName: _(`${iconAssetConstants.bizSuiteIconName}__popover`, D),
      flip: {
        fallbackPlacements: S || ["bottom-start", "right-start"]
      }
    }), R ? j : reactCoreLibraryReexport.createElement("div", {
      style: {
        width: "fit-content"
      },
      ref: W
    }, typeof j == "function" ? j({
      popoverVisible: F
    }) : j));
    let q = R ? J : reactCoreLibraryReexport.createElement(uiDefaultContextProvider.UiContextConnector, {
      PopperSidecar: popperUiComponent.PopperComponent
    }, J);
    if (c) {
      return reactCoreLibraryReexport.createElement(localeThemeProvider.LocaleThemeProvider, {
        locale: c
      }, q);
    } else {
      return q;
    }
  };
  require.d(exports, {
    EmojiIconPickerPopover: function () {
      return ef;
    }
  });
}