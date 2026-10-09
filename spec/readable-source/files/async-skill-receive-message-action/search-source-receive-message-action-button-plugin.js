// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'deepEqualityUtil_1'
// - Resolved require(550444) to 'deep-equality-util_1'
// - Renamed variable 'o' to 'searchReferenceUiComponent'
// - Resolved require(676486) to 'search-reference-ui-component'
// - Renamed variable 'a' to 'skillMessageLifecycleTypes'
// - Resolved require(617019) to 'skill-message-lifecycle-types'
// - Renamed variable 'l' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 's' to 'searchChatReceiveRenderer'
// - Resolved require(543703) to 'search-chat-receive-renderer'
// - Renamed variable 'd' to 'deepSearchSkillChatInputStore'
// - Resolved require(679775) to 'deep-search-skill-chat-input-store'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'p' to 'chatSearchActionSymbol'
// - Resolved require(6683) to 'chat-search-action-symbol'
// - Updated imported property 'Ai' to 'useSearchMessageData' (module 543703)
// - Updated imported property 'uq' to 'deepSearchChatInputStore' (module 679775)
// - Updated imported property 'X' to 'isDeepEqual' (module 550444)
// - Updated imported property 'ZN' to 'messageRole' (module 617019)
// - Updated imported property 'W' to 'SearchReferenceUIComponent' (module 676486)
// - Updated imported property 's' to 'searchMessageAction' (module 6683)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 577851
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var searchReferenceUiComponent = require("search-reference-ui-component") /*id: 676486*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var searchChatReceiveRenderer = require("search-chat-receive-renderer") /*id: 543703*/;
  var deepSearchSkillChatInputStore = require("deep-search-skill-chat-input-store") /*id: 679775*/;
  let c = {};
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let v = e => {
    let {
      message: f
    } = e;
    let {
      searchType: m,
      searchReferenceData: g,
      onTrackEvent: h,
      isTextMessageFinished: _
    } = searchChatReceiveRenderer.useSearchMessageData({
      message: f
    });
    let [b, y] = deepSearchSkillChatInputStore.deepSearchChatInputStore(e => [e.thirdPageSidePanel, e.updateThirdPageSidePanel], deepEqualityUtil_1.isDeepEqual);
    let w = messageContentTypeAndStatusChecker.f8g(f);
    let k = messageContentTypeAndStatusChecker.vlk(f);
    let x = () => {
      if (b == null ? undefined : b.visible) {
        y({
          ...b,
          visible: false
        });
      }
    };
    let E = (g == null ? undefined : g.copilot) ? g : g == null ? undefined : g.search_result;
    let S = messageContentTypeAndStatusChecker.UQt(f);
    let {
      scene: C,
      results: T = [],
      summary: I
    } = ((S == null ? undefined : S.content_obj) || (S == null ? undefined : S.content?.search_query_result_block)) ?? {};
    let {
      blockSearchSource: R,
      isThinkScene: j,
      resolveSummary: N
    } = reactCoreLibraryReexport.useMemo(() => {
      let e = {
        text_card: {
          card_list: T.map(e => e.text_card).filter(Boolean)
        },
        video_card: {
          card_list: T.map(e => e.video_card).filter(Boolean)
        }
      };
      let t = C === skillMessageLifecycleTypes.messageRole.Thinking;
      return {
        isThinkScene: t,
        resolveSummary: t ? I : "",
        blockSearchSource: e
      };
    }, [T, C]);
    if (!_ || k || j) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(searchReferenceUiComponent.SearchReferenceUIComponent, {
        title: S ? N : undefined,
        meta: (f == null ? undefined : f.meta_infos) ?? [],
        useDeepThinking: S ? j : !!w,
        useV3: true,
        conversationId: f.conversation_id ?? "",
        messageReplyId: f == null ? undefined : f.reply_id,
        onClick: e => {
          deepSearchSkillChatInputStore.deepSearchChatInputStore.getState().updateSearchCanvasStatus({
            status: e
          });
          x();
        },
        onTrackEvent: h,
        referenceInAll: S ? R : E,
        searchType: m,
        ...c
      });
    }
  };
  var chatSearchActionSymbol = require("chat-search-action-symbol") /*id: 6683*/;
  function f(e, t, n) {
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
  class m {
    constructor() {
      f(this, "pluginIdentifier", chatSearchActionSymbol.searchMessageAction);
      f(this, "ButtonContentGroups", [v]);
    }
  }
  require.r(exports);
  require.d(exports, {
    SearchSourceReceiveMessageActionButtonPlugin: function () {
      return m;
    }
  });
}