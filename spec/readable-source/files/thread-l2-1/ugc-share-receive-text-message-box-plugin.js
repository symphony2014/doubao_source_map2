// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'ugcReceiveMessageBoxSymbol'
// - Resolved require(168719) to 'ugc-receive-message-box-symbol'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'o' to 'aiChatSourceExtractor'
// - Resolved require(268836) to 'ai-chat-source-extractor'
// - Renamed variable 'a' to 'deepThinkingContainer'
// - Resolved require(210562) to 'deep-thinking-container'
// - Renamed variable 's' to 'chatMessageStatusCheck'
// - Resolved require(884389) to 'chat-message-status-check'
// - Renamed variable 'c' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'd' to 'skillMessageProcessor'
// - Resolved require(397273) to 'skill-message-processor'
// - Renamed variable 'u' to 'asyncSkillContentBlock_5'
// - Resolved require(837193) to 'async-skill-content-block_5'
// - Renamed variable 'p' to 'chatThemeStyleConfig'
// - Resolved require(400045) to 'chat-theme-style-config'
// - Renamed variable 'm' to 'tipContentRenderer'
// - Resolved require(579314) to 'tip-content-renderer'
// - Renamed variable 'v' to 'chatMessageTypes'
// - Resolved require(243788) to 'chat-message-types'
// - Renamed variable 'f' to 'functionInvoker'
// - Resolved require(144910) to 'function-invoker'
// - Renamed variable 'h' to 'arrayIsArrayUtil'
// - Resolved require(447761) to 'array-is-array-util'
// - Renamed variable 'g' to 'objectMatchUtil'
// - Resolved require(941914) to 'object-match-util'
// - Renamed variable '_' to 'collectionMatchUtil'
// - Resolved require(394199) to 'collection-match-util'
// - Renamed variable 'b' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Renamed variable 'k' to 'genericFilterUtil'
// - Resolved require(159692) to 'generic-filter-util'
// - Renamed variable 'y' to 'collectionMapMatcher'
// - Resolved require(300366) to 'collection-map-matcher'
// - Renamed variable 'R' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'isArray' (module 447761)
// - Updated imported property 'Z' to 'checkObjectMatch' (module 941914)
// - Updated imported property 'Z' to 'checkCollectionMatch' (module 394199)
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// - Updated imported property 'Z' to 'genericFilter' (module 159692)
// - Updated imported property 'Z' to 'mapWithMatcher' (module 300366)
// - Updated imported property 'wA' to 'thinkBrokenFlag' (module 397273)
// - Updated imported property 'e' to 'invoke' (module 144910)
// - Updated imported property 'y9' to 'extractThinkMeta' (module 268836)
// - Updated imported property 'o' to 'chatThemeConfig' (module 400045)
// - Updated imported property 'c' to 'ThinkingContainer' (module 210562)
// - Updated imported property 'N' to 'AsyncSkillContentBlock' (module 837193)
// - Updated imported property 'z' to 'isMessageFinished' (module 884389)
// - Updated imported property 'j' to 'TipContentRenderer' (module 579314)
// - Updated imported property 'h' to 'ugcMsgBoxTextSymbol' (module 168719)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 288745
         */
module.exports = function (module, exports, require) {
  var ugcReceiveMessageBoxSymbol = require("ugc-receive-message-box-symbol") /*id: 168719*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var aiChatSourceExtractor = require("ai-chat-source-extractor") /*id: 268836*/;
  var deepThinkingContainer = require("deep-thinking-container") /*id: 210562*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var skillMessageProcessor = require("skill-message-processor") /*id: 397273*/;
  var asyncSkillContentBlock_5 = require("async-skill-content-block_5") /*id: 837193*/;
  var chatThemeStyleConfig = require("chat-theme-style-config") /*id: 400045*/;
  var tipContentRenderer = require("tip-content-renderer") /*id: 579314*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var objectMatchUtil = require("object-match-util") /*id: 941914*/;
  var collectionMatchUtil = require("collection-match-util") /*id: 394199*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var genericFilterUtil = require("generic-filter-util") /*id: 159692*/;
  var collectionMapMatcher = require("collection-map-matcher") /*id: 300366*/;
  let x = e => arrayIsArrayUtil.isArray(e) && objectMatchUtil.checkObjectMatch(e, e => e.video_card || e.text_card);
  let w = e => arrayIsArrayUtil.isArray(e) && collectionMatchUtil.checkCollectionMatch(e, e => !isUndefinedCheck.isUndefined(e));
  let S = e => {
    let n = e == null ? undefined : e.content_obj?.search_references;
    let i = x(n) ? n : [];
    let l = genericFilterUtil.genericFilter(collectionMapMatcher.mapWithMatcher(i, e => e.text_card), e => !isUndefinedCheck.isUndefined(e));
    let r = w(l) ? l : [];
    let o = genericFilterUtil.genericFilter(collectionMapMatcher.mapWithMatcher(i, e => e.video_card), e => !isUndefinedCheck.isUndefined(e));
    return {
      searchReferenceData: {
        has_more: false,
        query_params: {},
        search_result: {
          text_card: {
            card_list: r
          },
          video_card: {
            card_list: w(o) ? o : []
          }
        },
        ext: {
          search_url_web: ""
        }
      },
      searchReferences: i
    };
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let $ = e => {
    var g;
    let {
      message: _,
      inView: b,
      theme: k = "coco"
    } = e;
    let {
      searchReferenceData: y
    } = S(_);
    let x = skillMessageProcessor.thinkBrokenFlag(_ == null ? undefined : _.ext);
    let {
      think: w,
      isHide: $
    } = functionInvoker.invoke(() => {
      var e;
      if (!((e = _.meta_infos) === null || e === undefined ? undefined : e.some(e => e.type === chatMessageTypes.MetaType.Think))) {
        return {
          think: "",
          isHide: true
        };
      }
      let t = aiChatSourceExtractor.extractThinkMeta(_.meta_infos);
      return {
        think: t == null ? undefined : t.text,
        isHide: t == null ? undefined : t.is_hide
      };
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: r(chatThemeStyleConfig.chatThemeConfig[k]?.receiveClassNames),
      style: chatThemeStyleConfig.chatThemeConfig[k].cssVar,
      children: [!!w && !$ && k !== "coco-immerse" && reactJsxRuntimeCoreReexport.jsx(deepThinkingContainer.ThinkingContainer, {
        isThinkingFinished: true,
        isThinkingBroken: x,
        thinkExpandStatus: true,
        isShare: true,
        meta: _ == null ? undefined : _.meta_infos,
        references: y == null ? undefined : y.search_result,
        content: w || "",
        messageId: _ == null ? undefined : _.message_id,
        botId: _ == null ? undefined : _.bot_id,
        skillType: _ == null ? undefined : _.skill?.skill_type_no_default,
        skillId: _ == null ? undefined : _.skill?.skill_id_no_default,
        conversationId: _ == null ? undefined : _.conversation_id,
        messageText: (_ == null ? undefined : _.content_obj?.text) || ""
      }), reactJsxRuntimeCoreReexport.jsx(asyncSkillContentBlock_5.AsyncSkillContentBlock, {
        messageBlockText: undefined,
        messageBlockTextFinish: undefined,
        messageBlockTextBroken: undefined,
        message: _,
        inView: b,
        theme: k
      }), (chatMessageStatusCheck.isMessageFinished(_) || messageContentTypeAndStatusChecker.vlk(_)) && reactJsxRuntimeCoreReexport.jsx(tipContentRenderer.TipContentRenderer, {
        jsonString: (g = _.verbose) === null || g === undefined ? undefined : g.extra?.risk_tips
      })]
    });
  };
  function C(e, t, n) {
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
  class T {
    constructor() {
      C(this, "pluginIdentifier", ugcReceiveMessageBoxSymbol.ugcMsgBoxTextSymbol);
      C(this, "Content", $);
    }
  }
  require.r(exports);
  require.d(exports, {
    UgcShareReceiveTextMessageBoxPlugin: function () {
      return T;
    }
  });
}