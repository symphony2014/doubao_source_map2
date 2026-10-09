// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ov' to 'SkillContentBlock'
// - Renamed export 'm3' to 'renderSkillContent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-content-block.6ec955b1.js
         * chunkId: 43569
         * moduleId: 313138
         */
module.exports = function (module, exports, require) {
  var i;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var thinkingQueryItem = require("thinking-query-item") /*id: 860711*/;
  var searchReferenceUiComponent = require("search-reference-ui-component") /*id: 676486*/;
  var skillMessageLifecycleTypes = require("skill-message-lifecycle-types") /*id: 617019*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var configSyncLoader = require("config-sync-loader") /*id: 985012*/;
  var asyncSkillContentBlock_1 = require("async-skill-content-block_1") /*id: 939272*/;
  (i = {}).AISearch = "ai_search";
  i.DeepSearch = "deep_search";
  i.AcademicSearch = "academic_search";
  i.WritingOutlineSearch = "writing_outline_search";
  i.ComplexSearch = "complex_search";
  i.SimpleSearch = "simple_search";
  let v = i;
  var writeArtifactPreviewId = require("write-artifact-preview-id") /*id: 896254*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  let g = () => {
    let {
      isExpand: t,
      matchedCanvasPluginIdentifier: n
    } = chatStoreManager.getStore("chatViewCanvasStore").getState() ?? {};
    let i = t && n === writeArtifactPreviewId.artifactPreviewId;
    let [o, l] = reactCoreLibraryReexport.useState(i);
    reactCoreLibraryReexport.useEffect(() => {
      let e = chatStoreManager.getStore("chatViewCanvasStore").subscribe(e => {
        let {
          isExpand: t,
          matchedCanvasPluginIdentifier: n
        } = e;
        l(t && n === writeArtifactPreviewId.artifactPreviewId);
      });
      return () => {
        e();
      };
    }, []);
    return {
      isWriteCanvasExpand: o
    };
  };
  var skillContentBlockTracker = require("skill-content-block-tracker") /*id: 837089*/;
  var asyncSkillContentStyles = require("async-skill-content-styles") /*id: 405330*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let k = [];
  let w = e => {
    var n;
    let {
      isBlockFinished: i,
      isBroken: o,
      blockId: d,
      blockContent: u,
      conversationId: h,
      trackEvent: m,
      enableOpenCanvasDefault: f = true,
      blockV2: _,
      popoverTrigger: w,
      isMessageFinished: C = true
    } = e;
    let {
      summary: x,
      queries: S = [],
      scene: T,
      results: R = [],
      vlm_rich_media_results: E
    } = u || {};
    let {
      searchSource: $,
      isThinkScene: j,
      resolveSummary: I,
      vlmRichMediaResults: P,
      isStreaming: N
    } = reactCoreLibraryReexport.useMemo(() => {
      let e = T === skillMessageLifecycleTypes.messageRole.Thinking;
      return {
        isThinkScene: e,
        resolveSummary: e ? x : "",
        searchSource: R,
        vlmRichMediaResults: E,
        isStreaming: !C
      };
    }, [R, T, E, C]);
    let O = configSyncLoader.getConfig("chatMessageBoxConfig");
    let A = (n = O == null ? undefined : O.deepThinkingContent?.enableOpenCanvas) === null || n === undefined || n;
    let {
      isWriteCanvasExpand: M
    } = g();
    let L = reactCoreLibraryReexport.useCallback(e => {
      let {
        renderTitle: t,
        queryNode: n
      } = e;
      let i = x == null ? undefined : x.split("%s");
      return reactJsxRuntimeCoreReexport.jsxs("span", {
        className: "flex",
        children: [t(i == null ? undefined : i[0]), n, t(i == null ? undefined : i.slice(1).join(""))]
      });
    }, [x]);
    if (!i && o) {
      return null;
    } else if (i) {
      if (j) {
        return reactJsxRuntimeCoreReexport.jsx(searchReferenceUiComponent.SearchReferenceUIComponent, {
          classname: l(asyncSkillContentStyles.skillContentStyles.searchBtn, {
            [asyncSkillContentStyles.skillContentStyles["think-style"]]: j
          }),
          title: I,
          inBlock: true,
          meta: k,
          useDeepThinking: j,
          conversationId: h,
          messageReplyId: d,
          autoOpenCanvas: true,
          showFrom: j ? "cot" : "answer_complete",
          enableOpenCanvas: f && A && !M,
          onTrackEvent: m,
          referenceInBlock: $,
          vlmRichMediaResults: P,
          searchType: v.SimpleSearch,
          popoverTrigger: w,
          isStreaming: N
        });
      } else {
        return null;
      }
    } else {
      return reactJsxRuntimeCoreReexport.jsx(thinkingQueryItem.ThinkingQueryItem, {
        loading: true,
        renderContent: _ ? L : undefined,
        parseQueryText: _ ? e => e : undefined,
        title: x,
        query: S
      });
    }
  };
  let C = e => {
    let {
      message: t,
      contentBlock: n
    } = e;
    let {
      is_finish: i,
      id: r
    } = n ?? {};
    let o = n == null ? undefined : n.content_obj;
    let l = messageContentTypeAndStatusChecker.vlk(t);
    let a = chatMessageStatusCheck.isMessageFinished(t);
    let {
      trackBase: s
    } = skillContentBlockTracker.createSkillBlockTracker({
      message: t,
      blockContent: o
    });
    return reactJsxRuntimeCoreReexport.jsx(w, {
      ...asyncSkillContentBlock_1.skillContentBlock,
      isBlockFinished: i,
      isMessageFinished: a,
      isBroken: l,
      blockId: r,
      blockContent: o,
      conversationId: t == null ? undefined : t.conversation_id,
      trackEvent: s
    });
  };
  require.d(exports, {
    SkillContentBlock: function () {
      return C;
    },
    renderSkillContent: function () {
      return w;
    }
  });
}