// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'renderMessageMeta'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28821.95116918.js
         * chunkId: 28821
         * moduleId: 146384
         */
module.exports = function (module, exports, require) {
  var collectionArrayGrouper = require("collection-array-grouper") /*id: 177883*/;
  var toEntriesUtil = require("to-entries-util") /*id: 537539*/;
  var utf8EncodingUtils_1 = require("utf8-encoding-utils_1") /*id: 858081*/;
  var chatMessageMetaTypeCheckers = require("chat-message-meta-type-checkers") /*id: 156228*/;
  var searchReferenceComponent = require("search-reference-component") /*id: 558696*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = (e, t) => t.map(t => {
    let {
      data: i
    } = t;
    return {
      ...t,
      data: {
        ...i,
        index: i.pos?.[0] ? e[i.pos?.[0] ?? 0] : i.pos_rune?.[0]
      }
    };
  });
  let c = e => {
    let {
      metaInfos: t,
      message: n,
      messageText: c,
      options: u,
      useNewSearchRef: m = false,
      onTrackEvent: h
    } = e;
    let _ = t.filter(chatMessageMetaTypeCheckers.isWebDocReference);
    let p = t.filter(chatMessageMetaTypeCheckers.isBrandSuperscript);
    let v = collectionArrayGrouper.groupValuesToArray(_, e => {
      var n;
      if ((n = e.data) === null || n === undefined) {
        return undefined;
      } else {
        return n.pos?.[0];
      }
    });
    let f = p.map(e => [e.data.pos, e.data.pos]).flat(2).filter(e => e !== undefined).map(e => Number(e));
    let g = d(utf8EncodingUtils_1.Utf8Utils.posCalcRange(c, f), p);
    let x = collectionArrayGrouper.groupValuesToArray(g, e => e.data.index);
    let k = [];
    let w = [];
    let b = 0;
    for (let [e, t] of toEntriesUtil.toEntries(x)) {
      let o = [];
      for (let [e, r] of toEntriesUtil.toEntries(t)) {
        b += 1;
        o.push(reactJsxRuntimeCoreReexport.jsx(searchReferenceComponent.SearchRef, {
          data: r.data,
          text: c,
          message: n,
          refPosition: b,
          isLastRef: Number(e) === (t == null ? undefined : t.length) - 1,
          useNewUI: true,
          options: u,
          trackEvent: h
        }, e));
      }
      k.push({
        range: Number(e),
        render: () => reactJsxRuntimeCoreReexport.jsx("span", {
          children: o.map(e => e)
        })
      });
    }
    for (let [e, t] of toEntriesUtil.toEntries(v)) {
      t.sort((e, t) => {
        return Number(e.data?.insert_text) - Number(t.data?.insert_text);
      });
      let o = [];
      t.map(e => {
        if ((e == null ? undefined : e.data?.insert_text) && !w.find(t => {
          return Number(t == null ? undefined : t.data?.insert_text) === Number(e == null ? undefined : e.data?.insert_text);
        })) {
          o.push(e);
          w.push(e);
        }
      });
      if (o.length >= 3) {
        o = o.slice(0, 2);
      }
      if (o.length === 0) {
        o = (t == null ? undefined : t[0]) ? [t[0]] : [];
      }
      let r = m ? o : t;
      let i = [];
      for (let [e, t] of toEntriesUtil.toEntries(r)) {
        b += 1;
        i.push(reactJsxRuntimeCoreReexport.jsx(searchReferenceComponent.SearchRef, {
          data: t.data,
          text: c,
          message: n,
          refPosition: b,
          trackEvent: h,
          isLastRef: Number(e) === (r == null ? undefined : r.length) - 1,
          useNewUI: m,
          options: u
        }, e));
      }
      k.push({
        range: Number(e),
        render: () => reactJsxRuntimeCoreReexport.jsx("span", {
          children: i.map(e => e)
        })
      });
    }
    return k;
  };
  var chatMessageBlockParser = require("chat-message-block-parser") /*id: 452214*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var markdownMetaRenderUtils = require("markdown-meta-render-utils") /*id: 80625*/;
  var urlLinkNormalizer = require("url-link-normalizer") /*id: 365828*/;
  var markdownLinkReplacer = require("markdown-link-replacer") /*id: 686473*/;
  let v = e => {
    let {
      metaInfos: t,
      messageText: n,
      onTrackEvent: o,
      onLinkClick: l,
      onSendMessage: a
    } = e;
    let d = t.filter(chatMessageMetaTypeCheckers.isReplaceable);
    let c = [];
    let u = d.map(e => [e.data.start, e.data.end]).flat(2).filter(e => e !== undefined).map(e => Number(e));
    let v = utf8EncodingUtils_1.Utf8Utils.posCalcRange(n, u);
    for (let e of d) {
      let {
        data: {
          start: t,
          end: n,
          replace_text: r = "",
          source_type: i = ""
        }
      } = e;
      let {
        groups: d
      } = markdownMetaRenderUtils.parseMarkdownLink(r);
      if (isUndefinedCheck.isUndefined(t) || isUndefinedCheck.isUndefined(n) || markdownMetaRenderUtils.isValidUrl((d == null ? undefined : d.link) ?? "", i)) {
        continue;
      }
      let u = v[t];
      let x = v[n];
      if (!isUndefinedCheck.isUndefined(u) && !isUndefinedCheck.isUndefined(x)) {
        if (markdownMetaRenderUtils.hasAppletId((d == null ? undefined : d.link) ?? "")) {
          let e = urlLinkNormalizer.normalizeLink(d.link);
          if (!e) {
            continue;
          }
          c.push({
            range: [u, x],
            render: () => `[${d.title}](${e})`,
            mode: "raw"
          });
        } else {
          c.push({
            range: [u, x],
            render: () => reactJsxRuntimeCoreReexport.jsx(markdownLinkReplacer.Replaceable, {
              value: e.data,
              onTrackEvent: o,
              onLinkClick: l,
              onSendMessage: a
            })
          });
        }
      }
    }
    return c;
  };
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var memoryContentPopoverComponent = require("memory-content-popover-component") /*id: 188650*/;
  let x = e => {
    let {
      metaInfos: t,
      messageText: n,
      options: r,
      viewOnly: a,
      message: d,
      onTrackEvent: c
    } = e;
    let u = t.filter(chatMessageMetaTypeCheckers.isMemoryCard);
    let m = collectionArrayGrouper.groupValuesToArray(u, e => {
      return e.data?.pos;
    });
    let {
      isFinishedMessage: h = true
    } = r ?? {};
    let _ = [];
    for (let [e, t] of toEntriesUtil.toEntries(m)) {
      let o = Number(e);
      if (o < 0) {
        if (!h) {
          continue;
        }
        o = n.length;
      }
      let l = t.find(e => {
        var t;
        return (t = e.data) !== null && t !== undefined && !!t.can_replace && !!safeJsonUtils.safeParse(e == null ? undefined : e.data?.value, {}).memory_loading_hide;
      });
      let r = t.find(e => {
        var t;
        return (t = e.data) === null || t === undefined || !t.can_replace;
      });
      let i = r || t.find(e => {
        if (e == null) {
          return undefined;
        } else {
          return e.data?.can_replace;
        }
      });
      if (!l && !a) {
        _.push({
          range: o,
          type: "newline",
          render: () => {
            return reactJsxRuntimeCoreReexport.jsx(memoryContentPopoverComponent.MemoryContentPopover, {
              isUpdate: !r,
              value: safeJsonUtils.safeParse(i == null ? undefined : i.data?.value, {}),
              conversationId: d == null ? undefined : d.conversation_id,
              trackEvent: c
            });
          }
        });
      }
    }
    return _;
  };
  let k = e => e.type === "custom";
  let w = e => {
    let {
      metaInfos: t
    } = e;
    return t.filter(k).map(e => e.data);
  };
  let b = e => [...v(e), ...w(e), ...chatMessageBlockParser.parseSpecialBlocks(e), ...c(e), ...x(e)];
  require.d(exports, {
    renderMessageMeta: function () {
      return b;
    }
  });
}