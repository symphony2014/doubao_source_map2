// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'useMessageArtifactRenderers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80498.c69c3e39.js
         * chunkId: 80498
         * moduleId: 570
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  let c = e => {
    let {
      replyId: t,
      conversationId: r
    } = e;
    let i = reactCoreLibraryReexport.useMemo(() => t && r ? conversationMessageUtils_1.getMessageById(chatMessageStoreFactory.createMessageStore.getState(), r, t) : null, [t, r]);
    let a = reactCoreLibraryReexport.useMemo(() => {
      var r;
      return !!i && (!!i.content_obj?.link_model || !!i.attachments?.length || !!((r = i.references) === null || r === undefined ? undefined : r.filter(e => !!e.key || !!e.identifier).length));
    }, [i]);
    return {
      replyMessage: i,
      messageHasAttachments: a
    };
  };
  var chatCanvasContentOpener = require("chat-canvas-content-opener") /*id: 559958*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let f = e => {
    let {
      meta: t,
      conversationId: r,
      message: i,
      replyMessage: a
    } = e;
    let {
      openFileByKey: o,
      openRepo: s
    } = chatCanvasContentOpener.useContentOpener();
    let l = reactCoreLibraryReexport.useMemo(() => {
      if (a == null ? undefined : a.content_obj?.link_model) {
        let e = a.content_obj?.link_model;
        return [{
          type: "link",
          name: e.extra?.repo_name || e.url,
          url: e.url,
          key: e.extra?.repo_id || "",
          repo_id: e.extra?.repo_id || "",
          file_parse_state: messagingConstants.parseState.ParseState_Success
        }];
      }
      if (a == null ? undefined : a.attachments?.length) {
        if (a == null) {
          return undefined;
        } else {
          return a.attachments;
        }
      } else if (a == null ? undefined : a.references?.length) {
        return (a == null ? undefined : a.references.filter(e => !!e.key || !!e.url)).map(e => e.type === "link" ? {
          type: e.type,
          key: e.identifier,
          url: e.url,
          name: e.url,
          repo_id: e.identifier,
          file_parse_state: messagingConstants.parseState.ParseState_Success
        } : e);
      } else {
        return [];
      }
    }, [a]);
    let c = reactCoreLibraryReexport.useCallback((e, t) => {
      if (!a || !t || !i || !l || l.length === 0) {
        return;
      }
      let s = l.find(t => t.name === e.name);
      if (s) {
        o(s.key, {
          messageId: i.message_id,
          conversationId: r,
          attachments: l.map(e => ({
            key: e.key,
            name: e.name,
            type: "file"
          })),
          activePath: e.path
        }, {
          messageId: i == null ? undefined : i.message_id,
          skillType: a == null ? undefined : a.skill?.skill_type_no_default
        }, t);
      }
    }, [i, a, l]);
    let f = reactCoreLibraryReexport.useCallback((e, t) => {
      if (a && t && i) {
        if (l.length === 1 && l[0].type === "link") {
          s({
            id: l[0].repo_id,
            name: l[0].name,
            url: l[0].url,
            activePath: e.path
          }, {
            messageId: i == null ? undefined : i.message_id,
            skillType: a == null ? undefined : a.skill?.skill_type_no_default
          }, t);
          return;
        }
        o(l[0].key, {
          messageId: i.message_id,
          conversationId: r,
          attachments: l.map(e => ({
            key: e.key,
            name: e.name,
            type: "directory"
          })),
          activePath: e.path
        }, {
          messageId: i == null ? undefined : i.message_id,
          skillType: a == null ? undefined : a.skill?.skill_type_no_default
        }, t);
      }
    }, [a, r, i, l]);
    let m = reactCoreLibraryReexport.useCallback((e, t) => {
      var n;
      var a;
      let o = false;
      if (e.type === 2) {
        o = true;
        c(e, t == null ? undefined : (n = t.getBoundingClientRect) === null || n === undefined ? undefined : n.call(t));
      } else if (e.type === 1 || e.type === 3) {
        o = true;
        f(e, t == null ? undefined : (a = t.getBoundingClientRect) === null || a === undefined ? undefined : a.call(t));
      }
      if (o) {
        teaAnalyticsEventTracker.trackEvent("code_file_click", {
          current_page: "chat",
          conversation_id: r,
          bot_id: i == null ? undefined : i.bot_id,
          message_id: i == null ? undefined : i.message_id,
          link_detail: e.path
        });
      }
    }, [f, c, r, i]);
    return reactJsxRuntimeCoreReexport.jsx("span", {
      className: "code-file-path-SKOTFB",
      onClick: e => m(t, e.currentTarget),
      children: t.name
    });
  };
  var groupArtifactsByKey = require("group-artifacts-by-key") /*id: 158258*/;
  var artifactMetaUtils = require("artifact-meta-utils") /*id: 398594*/;
  let v = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        CodeArtifactCard: e
      } = await require.e("code-artifact-card") /*id: 48776*/.then(require.bind(require, "code-artifact-card-component") /*id: 363638*/);
      return {
        default: e
      };
    }
  })));
  let _ = e => {
    let {
      message: r,
      isShareOrCollectionMessage: n,
      onClick: a,
      enableOpenCanvas: o = true,
      loadingIconClassName: s,
      metaInfos: l,
      enableCodePathElements: d = true
    } = e;
    let u = artifactMetaUtils.parseArtifactList(r);
    let h = r == null ? undefined : r.conversation_id;
    let {
      messageHasAttachments: _,
      replyMessage: y
    } = c({
      replyId: (r == null ? undefined : r.reply_id) ?? "",
      conversationId: h
    });
    if (!r) {
      return [];
    }
    if (!n && h && _ && (l == null ? undefined : l.length) && d && function (e = []) {
      return e.some(e => e.type === chatMessageTypes.MetaType.CodeAssistantFilePath);
    }(l)) {
      let e = new Map();
      l.forEach(t => {
        let {
          start_position: r,
          end_position: n,
          path: i,
          name: a
        } = t.data;
        let o = `${r}-${n}-${i}-${a}`;
        if (!e.has(o)) {
          e.set(o, t);
        }
      });
      return Array.from(e.values()).map(e => {
        let t = e.data;
        return {
          range: [t.start_position, t.end_position + 1],
          render: () => reactJsxRuntimeCoreReexport.jsx(f, {
            meta: t,
            conversationId: h,
            message: r,
            replyMessage: y
          })
        };
      });
    }
    if (u == null ? undefined : u.length) {
      return groupArtifactsByKey.groupByArtifactKey(u).map((e, t) => {
        let {
          offset: c = {
            start: 0
          },
          identifier: d,
          artifactId: u,
          artifactKey: h
        } = (e == null ? undefined : e[0]) ?? {};
        let {
          start: f = 0
        } = c;
        let m = u ?? d ?? "";
        return {
          range: f,
          render: () => reactJsxRuntimeCoreReexport.jsx(v, {
            message: r,
            artifactId: m,
            artifactKey: h,
            artifactMeta: e,
            autoOpen: t === 0,
            isShareOrCollectionMessage: n,
            enableOpenCanvas: o,
            onClick: a,
            loadingIconClassName: s
          }, h ?? t)
        };
      });
    } else {
      return [];
    }
  };
  require.d(exports, {
    useMessageArtifactRenderers: function () {
      return _;
    }
  });
}