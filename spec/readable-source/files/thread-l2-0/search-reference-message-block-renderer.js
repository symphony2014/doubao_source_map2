// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'iC' to 'renderSearchReferenceMessageBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 640296
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var asyncSkillContentBlock_5 = require("async-skill-content-block_5") /*id: 837193*/;
  var searchSkillTypes = require("search-skill-types") /*id: 248215*/;
  var aiSearchResultDisplay = require("ai-search-result-display") /*id: 32776*/;
  var chatDeepSearchErrorRetry = require("chat-deep-search-error-retry") /*id: 718314*/;
  var asyncSkillReceiveMessageAction_2 = require("async-skill-receive-message-action_2") /*id: 169033*/;
  var c = {
    "search-reference": "search-reference-seTRsm"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      contentBlock: t
    } = e;
    let n = t == null ? undefined : t.text;
    let i = (t == null ? undefined : t.search_references) || [];
    let l = {
      has_more: false,
      query_params: {
        text_card: [{
          offset: 0,
          search_type: "text_card",
          search_id: "",
          has_more: true
        }]
      },
      search_result: {
        text_card: {
          card_list: i.map(e => e.text_card).filter(Boolean)
        },
        video_card: {
          card_list: i.map(e => e.video_card).filter(Boolean)
        }
      },
      ext: {
        search_url_web: ""
      }
    };
    let {
      meta_infos: o = []
    } = t || {};
    return {
      meta: o,
      textContent: n ?? "",
      searchType: searchSkillTypes.searchSkillTypes.SimpleSearch,
      searchReferenceData: l
    };
  };
  let p = e => {
    var n;
    var u;
    let {
      inView: p,
      meta: m,
      searchType: v,
      message: f,
      textContent: h,
      searchReferenceData: g
    } = e;
    if (!f) {
      return null;
    }
    let _ = messageContentTypeAndStatusChecker.xsI(f);
    let b = messageContentTypeAndStatusChecker.f8g(f);
    let k = !!h || messageContentTypeAndStatusChecker.R6A(f);
    let y = messageContentTypeAndStatusChecker.lcM(f) || messageContentTypeAndStatusChecker.qOw(f);
    let x = g == null ? undefined : (n = g.search_result) === null || n === undefined ? undefined : n.text_card?.card_list;
    let w = g == null ? undefined : (u = g.search_result) === null || u === undefined ? undefined : u.video_card?.card_list;
    let S = (x && x.length > 0 || w && w.length > 0) && (!b || b && (f == null ? undefined : f.think_reason_is_hide));
    let R = b && !(f == null ? undefined : f.think_reason_is_hide);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [S && reactJsxRuntimeCoreReexport.jsx(aiSearchResultDisplay.SearchResultDisplay, {
        isInSearching: false,
        onTrackEvent: () => ({}),
        data: g,
        className: c["search-reference"],
        defaultExpand: false
      }), reactJsxRuntimeCoreReexport.jsx(asyncSkillReceiveMessageAction_2.AsyncSkillReceiveMessageAction, {
        hidden: !R,
        message: f,
        searchType: v,
        searchReferenceData: g
      }), k && reactJsxRuntimeCoreReexport.jsx(asyncSkillContentBlock_5.AsyncSkillContentBlock, {
        inView: p,
        messageBlockText: h,
        messageBlockMeta: m,
        message: f,
        messageBlockTextFinish: undefined,
        messageBlockTextBroken: undefined,
        customRenderOptions: {
          enableCustomIndicator: y
        }
      }), _ && reactJsxRuntimeCoreReexport.jsx(chatDeepSearchErrorRetry.DeepSearchErrorRetry, {
        message: f
      })]
    });
  };
  let m = e => {
    let {
      inView: t,
      contentBlock: n,
      message: i
    } = e;
    let {
      meta: l,
      textContent: r,
      searchType: o,
      searchReferenceData: a
    } = u({
      contentBlock: n,
      message: i
    });
    return reactJsxRuntimeCoreReexport.jsx(p, {
      meta: l,
      inView: t != null && t,
      textContent: r,
      message: i,
      searchReferenceData: a,
      searchType: o
    });
  };
  require.d(exports, {
    renderSearchReferenceMessageBlock: function () {
      return m;
    }
  });
}