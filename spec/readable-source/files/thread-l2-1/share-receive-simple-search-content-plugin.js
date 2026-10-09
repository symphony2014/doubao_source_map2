// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'receiveSimpleSearchContent'
// - Resolved require(303178) to 'receive-simple-search-content'
// - Renamed variable 'l' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'a' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 's' to 'asyncSkillContentBlock_5'
// - Resolved require(837193) to 'async-skill-content-block_5'
// - Renamed variable 'c' to 'chatThemeStyleConfig'
// - Resolved require(400045) to 'chat-theme-style-config'
// - Renamed variable 'd' to 'tipContentRenderer'
// - Resolved require(579314) to 'tip-content-renderer'
// - Renamed variable 'u' to 'asyncSkillReceiveMessageAction_2'
// - Resolved require(169033) to 'async-skill-receive-message-action_2'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'p' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'm' to 'searchReferencesList'
// - Resolved require(263161) to 'search-references-list'
// - Renamed variable 'v' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'f' to 'semiCollapseComponent'
// - Resolved require(795379) to 'semi-collapse-component'
// - Renamed variable 'h' to 'iconChevronDown'
// - Resolved require(521832) to 'icon-chevron-down'
// - Renamed variable 'g' to 'chevronDownIconComponent'
// - Resolved require(634936) to 'chevron-down-icon-component'
// - Renamed variable '_' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'k' to 'contentTypeEnums'
// - Resolved require(153202) to 'content-type-enums'
// - Renamed variable 'y' to 'chatContextProviders'
// - Resolved require(793426) to 'chat-context-providers'
// - Renamed variable 'x' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'w' to 'jsonSafeUtils_1'
// - Resolved require(176900) to 'json-safe-utils_1'
// - Renamed variable 'S' to 'musicShareCardWidget'
// - Resolved require(485054) to 'music-share-card-widget'
// - Renamed variable 'j' to 'aiSearchResultDisplay'
// - Resolved require(32776) to 'ai-search-result-display'
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'Z' to 'Collapse' (module 795379)
// - Updated imported property 'Z' to 'ChevronDownIcon' (module 521832)
// - Updated imported property 'Z' to 'ChevronDownIcon' (module 634936)
// - Updated imported property '_' to 'SearchReferences' (module 263161)
// - Updated imported property 'K1' to 'contentTypeAuth' (module 153202)
// - Updated imported property 'p3' to 'useArtifactClick' (module 793426)
// - Updated imported property 'Z' to 'MusicShareCard' (module 485054)
// - Updated imported property 'Y' to 'jsonUtils' (module 176900)
// - Updated imported property 'o' to 'chatThemeConfig' (module 400045)
// - Updated imported property 'z' to 'SearchResultDisplay' (module 32776)
// - Updated imported property 'D' to 'AsyncSkillReceiveMessageAction' (module 169033)
// - Updated imported property 'N' to 'AsyncSkillContentBlock' (module 837193)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'j' to 'TipContentRenderer' (module 579314)
// - Updated imported property 'M' to 'receiveSearchToken' (module 303178)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 991997
         */
module.exports = function (module, exports, require) {
  var receiveSimpleSearchContent = require("receive-simple-search-content") /*id: 303178*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var asyncSkillContentBlock_5 = require("async-skill-content-block_5") /*id: 837193*/;
  var chatThemeStyleConfig = require("chat-theme-style-config") /*id: 400045*/;
  var tipContentRenderer = require("tip-content-renderer") /*id: 579314*/;
  var asyncSkillReceiveMessageAction_2 = require("async-skill-receive-message-action_2") /*id: 169033*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var searchReferencesList = require("search-references-list") /*id: 263161*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var semiCollapseComponent = require("semi-collapse-component") /*id: 795379*/;
  var iconChevronDown = require("icon-chevron-down") /*id: 521832*/;
  var chevronDownIconComponent = require("chevron-down-icon-component") /*id: 634936*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let b = e => {
    let {
      searchReferences: t
    } = e;
    let n = i18nTranslationUtils.useTranslationWithFallback();
    if (isEmptyUtil.isEmpty(t)) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(semiCollapseComponent.Collapse, {
        className: "search-reference-APJAs3",
        expandIcon: reactJsxRuntimeCoreReexport.jsx(iconChevronDown.ChevronDownIcon, {
          className: "text-12 p-2"
        }),
        collapseIcon: reactJsxRuntimeCoreReexport.jsx(chevronDownIconComponent.ChevronDownIcon, {
          className: "text-12 p-2"
        }),
        children: reactJsxRuntimeCoreReexport.jsx(semiCollapseComponent.Collapse.Panel, {
          header: reactJsxRuntimeCoreReexport.jsx("span", {
            className: "mr-6 text-16",
            children: n("considering_sources_status_test_1", {
              postProcess: "sprintf",
              sprintf: [` ${t.length} `]
            })
          }),
          itemKey: "1",
          className: "bg-none border-none mb-16",
          children: reactJsxRuntimeCoreReexport.jsx(searchReferencesList.SearchReferences, {
            childrenCollapse: false,
            classname: "ml-4",
            references: t
          })
        })
      });
    }
  };
  var contentTypeEnums = require("content-type-enums") /*id: 153202*/;
  var chatContextProviders = require("chat-context-providers") /*id: 793426*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var jsonSafeUtils_1 = require("json-safe-utils_1") /*id: 176900*/;
  var musicShareCardWidget = require("music-share-card-widget") /*id: 485054*/;
  let R = e => {
    try {
      return new TextEncoder().encode(e);
    } catch (e) {}
  };
  let $ = e => {
    if (e) {
      try {
        return new TextDecoder().decode(e);
      } catch (e) {}
    }
  };
  let C = {
    [contentTypeEnums.contentTypeAuth.Music]: e => {
      let {
        message: t,
        appletData: n
      } = e;
      let {
        onArtifactCardClick: i
      } = chatContextProviders.useArtifactClick();
      return reactJsxRuntimeCoreReexport.jsx(musicShareCardWidget.MusicShareCard, {
        widgetContent: n,
        handleClick: i,
        teaReportFn: teaAnalyticsEventTracker.trackEvent,
        message: t
      });
    }
  };
  let T = e => {
    let {
      metaInfos: t,
      message: n,
      messageText: i
    } = e;
    let l = [];
    let r = R(i);
    let a = messageContentTypeAndStatusChecker.JJ7(n);
    if ((r == null ? undefined : r.length) && a) {
      t.forEach(e => {
        let t = e.data;
        if (!n || !("card_type" in t) || t.card_type !== "applet") {
          return;
        }
        let i = jsonSafeUtils_1.jsonUtils.parse(t.value);
        if (!i) {
          return;
        }
        let o = C[i.applet_id];
        if (!o) {
          return;
        }
        let {
          pos: a
        } = t;
        if (a === undefined) {
          return;
        }
        let s = $(r.slice(0, a));
        if (!s) {
          return;
        }
        let c = s.length;
        l.push({
          range: c,
          render: () => reactJsxRuntimeCoreReexport.jsx(o, {
            appletData: i,
            message: n,
            metaInfo: t
          })
        });
      });
    }
    return l;
  };
  var aiSearchResultDisplay = require("ai-search-result-display") /*id: 32776*/;
  var N = {
    "search-reference": "search-reference-g4sn6c"
  };
  let E = e => {
    let n = (e == null ? undefined : e.content_obj?.search_references) || [];
    return {
      searchReferenceData: {
        has_more: false,
        query_params: {},
        search_result: {
          text_card: {
            card_list: n.map(e => e.text_card).filter(Boolean)
          },
          video_card: {
            card_list: n.map(e => e.video_card).filter(Boolean)
          }
        },
        ext: {
          search_url_web: ""
        }
      },
      searchReferences: n
    };
  };
  let P = e => {
    var n;
    var l;
    var f;
    let {
      inView: h,
      message: g,
      theme: k = "samantha"
    } = e;
    let {
      searchReferenceData: y,
      searchReferences: x
    } = E(g);
    if (!g) {
      return null;
    }
    let w = messageContentTypeAndStatusChecker.f8g(g);
    let S = (n = y.search_result) === null || n === undefined ? undefined : n.text_card?.card_list;
    let R = (l = y.search_result) === null || l === undefined ? undefined : l.video_card?.card_list;
    let $ = (S && S.length > 0 || R && R.length > 0) && (!w || w && (g == null ? undefined : g.think_reason_is_hide));
    let C = w && !(g == null ? undefined : g.think_reason_is_hide);
    let P = !(g == null ? undefined : g.content_obj?.text) && messageContentTypeAndStatusChecker.R6A(g);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: r(chatThemeStyleConfig.chatThemeConfig[k]?.receiveClassNames),
      style: chatThemeStyleConfig.chatThemeConfig[k].cssVar,
      children: [$ ? k === "coco" || k === "coco-immerse" ? reactJsxRuntimeCoreReexport.jsx(b, {
        searchReferences: x
      }) : reactJsxRuntimeCoreReexport.jsx(aiSearchResultDisplay.SearchResultDisplay, {
        isInSearching: false,
        onTrackEvent: () => ({}),
        data: y,
        className: N["search-reference"],
        defaultExpand: false
      }) : null, reactJsxRuntimeCoreReexport.jsx(asyncSkillReceiveMessageAction_2.AsyncSkillReceiveMessageAction, {
        message: g,
        hidden: !C,
        isShare: true,
        searchReferenceData: y
      }), reactJsxRuntimeCoreReexport.jsx(asyncSkillContentBlock_5.AsyncSkillContentBlock, {
        inView: h,
        message: g,
        messageBlockText: undefined,
        messageBlockTextFinish: undefined,
        messageBlockTextBroken: undefined,
        theme: k,
        customRenderOptions: {
          ...(P ? {
            overrideTextContent: ""
          } : {}),
          useCustomReplacementElements: e => [...T(e)]
        }
      }), (chatMessageStatusCheck.isMessageFinished(g) || messageContentTypeAndStatusChecker.vlk(g)) && reactJsxRuntimeCoreReexport.jsx(tipContentRenderer.TipContentRenderer, {
        jsonString: (f = g.verbose) === null || f === undefined ? undefined : f.extra?.risk_tips
      })]
    });
  };
  function I(e, t, n) {
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
  class W {
    constructor() {
      I(this, "pluginIdentifier", receiveSimpleSearchContent.receiveSearchToken);
      I(this, "Content", P);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveSimpleSearchContentPlugin: function () {
      return W;
    }
  });
}