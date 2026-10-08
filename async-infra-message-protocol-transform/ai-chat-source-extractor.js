// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G5' to 'extractChatSources'
// - Renamed export 'PK' to 'processCardArray'
// - Renamed export 'Rp' to 'hasThinkingBlock'
// - Renamed export 'hH' to 'getCurrentDate'
// - Renamed export 've' to 'isThinkMessage'
// - Renamed export 'wW' to 'validateThinkUI'
// - Renamed export 'xE' to 'getThinkStatusLabel'
// - Renamed export 'y9' to 'extractThinkMeta'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 27860.52534198.js
         * chunkId: 27860
         * moduleId: 268836
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var collectionArrayGrouper = require("collection-array-grouper") /*id: 177883*/;
  var toEntriesUtil = require("to-entries-util") /*id: 537539*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var markdownMetaRenderUtils = require("markdown-meta-render-utils") /*id: 80625*/;
  var douyinVideoUrl = require("douyin-video-url") /*id: 751684*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var aiSearchStepTypes = require("ai-search-step-types") /*id: 759872*/;
  let p = e => e.type === chatMessageTypes.MetaType.WebDocReference;
  let m = e => e.type === chatMessageTypes.MetaType.Think;
  let h = (e, t) => {
    var n;
    var l;
    var c;
    var m;
    var h;
    var f;
    let {
      text_card: _,
      video_card: g
    } = e ?? {};
    let {
      copilot: v
    } = e || {};
    if (isUndefinedCheck.isUndefined(e) || !t) {
      return {
        sources: [],
        referenceInUsed: []
      };
    }
    let x = (v == null ? undefined : v.filter(e => e.step_type === aiSearchStepTypes.StepType.StepTypeConsideringSource)) || [];
    let w = [];
    x.map(e => {
      w.push(...((e == null ? undefined : e.step_contents) || []));
    });
    let b = [...((w == null ? undefined : (n = w.map(e => e == null ? undefined : e.text_card)) === null || n === undefined ? undefined : n.filter(isObjectOrFunction_1_1.isObjectOrFunction)) || [])];
    let y = [...((w == null ? undefined : (l = w.map(e => e == null ? undefined : e.video_card)) === null || l === undefined ? undefined : l.filter(isObjectOrFunction_1_1.isObjectOrFunction)) || [])];
    let k = [...((_ == null ? undefined : (c = _.card_list) === null || c === undefined ? undefined : c.map(e => ({
      title: e.title || "",
      site_name: e.sitename || "",
      logo_url: e.logo_url || "",
      url: e.url || "",
      card_type: "text",
      search_id: "",
      image_url: e.image_url || "",
      summary: e.summary || "",
      index: e.index || "",
      doc_id: e.doc_id || ""
    })).filter(isObjectOrFunction_1_1.isObjectOrFunction)) || []), ...((g == null ? undefined : (m = g.card_list) === null || m === undefined ? undefined : m.map(e => ({
      title: e.video_captions || "",
      site_name: e.source_app_name || "",
      logo_url: e.source_app_icon || "",
      url: `${douyinVideoUrl.douyinVideoUrl}${e.item_id}` || "",
      card_type: "video",
      search_id: "",
      image_url: (e == null ? undefined : e.album_image) || "",
      summary: "",
      index: e.index || "",
      doc_id: e.item_id || ""
    })).filter(isObjectOrFunction_1_1.isObjectOrFunction)) || []), ...((b == null ? undefined : b.map(e => ({
      title: (e == null ? undefined : e.title) || "",
      site_name: (e == null ? undefined : e.sitename) || "",
      logo_url: (e == null ? undefined : e.logo_url) || "",
      url: (e == null ? undefined : e.url) || "",
      card_type: "text",
      search_id: "",
      image_url: (e == null ? undefined : e.image_url) || "",
      summary: e.summary || "",
      index: e.index || "",
      doc_id: e.doc_id || ""
    })).filter(isObjectOrFunction_1_1.isObjectOrFunction)) || []), ...((y == null ? undefined : y.map(e => ({
      title: e.video_captions || "",
      site_name: e.source_app_name || "",
      logo_url: e.source_app_icon || "",
      url: `${douyinVideoUrl.douyinVideoUrl}${e.item_id}` || "",
      card_type: "video",
      search_id: "",
      image_url: (e == null ? undefined : e.album_image) || "",
      summary: "",
      index: e.index || "",
      doc_id: e.item_id || ""
    })).filter(isObjectOrFunction_1_1.isObjectOrFunction)) || [])];
    let T = [...((_ == null ? undefined : (h = _.card_list) === null || h === undefined ? undefined : h.map(e => ({
      text_card: {
        url: e.url || "",
        title: e.title || ""
      }
    })).filter(isObjectOrFunction_1_1.isObjectOrFunction)) || []), ...((g == null ? undefined : (f = g.card_list) === null || f === undefined ? undefined : f.map(e => ({
      video_card: {
        video_captions: e.video_captions || "",
        main_site_url: `${douyinVideoUrl.douyinVideoUrl}${e.item_id}` || ""
      }
    })).filter(isObjectOrFunction_1_1.isObjectOrFunction)) || [])];
    let S = t ? markdownMetaRenderUtils.filterMetaObjects(t) : [];
    let E = [];
    if (S.length > 0) {
      let e = S.filter(p);
      let t = collectionArrayGrouper.groupValuesToArray(e, e => {
        var n;
        if ((n = e.data) === null || n === undefined) {
          return undefined;
        } else {
          return n.pos?.[0];
        }
      });
      for (let [, e] of toEntriesUtil.toEntries(t)) {
        e.sort((e, t) => {
          return Number(e.data?.insert_text) - Number(t.data?.insert_text);
        });
        if (e != null) {
          e.map(e => {
            let {
              data: t
            } = e;
            let n = {
              title: (t == null ? undefined : t.title) || "",
              url: (t == null ? undefined : t.url) || "",
              logo_url: (t == null ? undefined : t.icon) || "",
              site_name: (t == null ? undefined : t.website_name) || "",
              card_type: "text",
              search_id: "",
              image_url: "",
              summary: (t == null ? undefined : t.summary) || ""
            };
            E.push(n);
          });
        }
      }
    }
    return {
      sources: k,
      deepThinkingReference: T,
      referenceInUsed: E
    };
  };
  let f = function (e = []) {
    let t = e.map(e => e.text_card).filter(Boolean);
    let n = e.map(e => e.video_card).filter(Boolean);
    if (e.length === 0) {
      return {
        sources: [],
        referenceInUsed: []
      };
    } else {
      return {
        sources: [...t.map(e => ({
          title: e.title || "",
          site_name: e.sitename || "",
          logo_url: e.logo_url || "",
          url: e.url || "",
          card_type: "text",
          search_id: "",
          image_url: e.image_url || "",
          summary: e.summary || "",
          index: e.index || "",
          doc_id: e.doc_id || ""
        })), ...n.map(e => ({
          title: e.video_captions || "",
          site_name: e.source_app_name || "",
          logo_url: e.source_app_icon || "",
          url: `${douyinVideoUrl.douyinVideoUrl}${e.item_id}` || "",
          card_type: "video",
          search_id: "",
          image_url: (e == null ? undefined : e.album_image) || "",
          summary: "",
          index: e.index || "",
          doc_id: e.item_id || ""
        }))],
        deepThinkingReference: [...t.map(e => ({
          text_card: {
            url: e.url || "",
            title: e.title || ""
          }
        })), ...n.map(e => ({
          video_card: {
            video_captions: e.video_captions || "",
            main_site_url: `${douyinVideoUrl.douyinVideoUrl}${e.item_id}` || ""
          }
        }))],
        referenceInUsed: []
      };
    }
  };
  let _ = (e, t, n) => e.length > 0 && !t ? n("web_search_deep_think_thinking_with_search_label_temp", {
    postProcess: "sprintf",
    sprintf: [e.length]
  }) : e.length !== 0 || t ? t ? n("web_search_deep_think_thinking_done_label") : n("web_search_deep_think_thinking_done_label") : n("web_search_deep_think_thinking_label");
  let g = e => {
    if (!e || e.length === 0) {
      return {
        text: "",
        position: 0,
        is_finish: true,
        is_hide: false,
        title: ""
      };
    }
    let r = (e ? markdownMetaRenderUtils.filterMetaObjects(e) : []).filter(m);
    return {
      ...((r == null ? undefined : r[0]?.data) ?? {})
    };
  };
  let v = e => {
    let {
      element: t,
      onError: n
    } = e;
    if (!t.querySelector("[data-testid=think_collapse_button]")) {
      if (n != null) {
        n({
          reason: "think_collapse_button_error"
        });
      }
      return;
    }
    let r = t.querySelector("[data-testid=think_quota_block]");
    if (!r) {
      if (n != null) {
        n({
          reason: "think_quota_block_error"
        });
      }
      return;
    }
    if (!r.textContent) {
      if (n != null) {
        n({
          reason: "think_quota_block_text_content_null"
        });
      }
      return;
    }
  };
  let x = e => {
    var t;
    var n;
    return !!(e == null ? undefined : (t = e.content_blocks) === null || t === undefined ? undefined : t.some(e => (e == null ? undefined : e.block_type) === chatConstantsEnum.messageContentType.BLOCK_THINKING)) || !!(e == null ? undefined : (n = e.content_blocks_v2) === null || n === undefined ? undefined : n.some(e => (e == null ? undefined : e.block_type) === chatConstantsEnum.messageContentType.BLOCK_THINKING));
  };
  let w = () => {
    let e = new Date();
    let t = e.getFullYear();
    let n = String(e.getMonth() + 1).padStart(2, "0");
    let r = String(e.getDate()).padStart(2, "0");
    return `${t}-${n}-${r}`;
  };
  require.d(exports, {
    extractChatSources: function () {
      return h;
    },
    processCardArray: function () {
      return f;
    },
    hasThinkingBlock: function () {
      return x;
    },
    getCurrentDate: function () {
      return w;
    },
    isThinkMessage: function () {
      return m;
    },
    validateThinkUI: function () {
      return v;
    },
    getThinkStatusLabel: function () {
      return _;
    },
    extractThinkMeta: function () {
      return g;
    }
  });
}