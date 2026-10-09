// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Jf' to 'getMessageArtifact'
// - Renamed export 'Ps' to 'useArtifactRequest'
// - Renamed export 'bc' to 'countMessagesArtifact'
// - Renamed export 'qJ' to 'extractArtifactData'
// - Renamed export 'r4' to 'getArtifactVersions'
// - Renamed export 'z2' to 'useSkillPinCallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 522271
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var extractArtifactFromChatMessage = require("extract-artifact-from-chat-message") /*id: 117895*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var skillPinModalCallback = require("skill-pin-modal-callback") /*id: 381053*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var writingSkillStore = require("writing-skill-store") /*id: 704044*/;
  var chatArtifactSearchUtil = require("chat-artifact-search-util") /*id: 76089*/;
  var chatMessageArtifactCounter = require("chat-message-artifact-counter") /*id: 567925*/;
  let f = async e => {
    let {
      conversationId: t,
      messageId: a
    } = e;
    let i = chatMessageStoreFactory.createMessageStore.getState();
    let r = conversationMessageUtils_1.getMessageById(i, t, a);
    if (!r) {
      throw Error("Cannot find related message");
    }
    if (messageContentTypeAndStatusChecker.zwb(r)) {
      let {
        pages_id: e
      } = r.content_obj ?? {};
      if (!e) {
        throw Error("PagesId of doc message is empty");
      }
      let {
        data: a
      } = await apiServicesCollection.SamanthaApiService.SearchArtifact({
        conversation_id: t
      });
      let {
        artifacts: i = []
      } = a ?? {};
      let s = i.find(t => t.resource_id === e);
      if (!s) {
        throw Error("Cannot find artifact of doc card by pagesId");
      }
      return s.artifact_key ?? "";
    }
    if (messageContentTypeAndStatusChecker.D8H(r)) {
      let e = extractArtifactFromChatMessage.extractArtifactFromMessage(r);
      if (!(e == null ? undefined : e.artifactKey)) {
        throw Error("ArtifactKey of artifact message is empty");
      }
      let {
        artifactKey: t
      } = e;
      return t;
    }
    throw Error("Not recongnize message");
  };
  let x = e => {
    let {
      messageId: t
    } = e;
    let a = skillPinModalCallback.useSkillPinCallback(async e => {
      let {
        messageId: a,
        conversationId: i
      } = e;
      if (t && a === t) {
        try {
          let e = await f({
            conversationId: i,
            messageId: t
          });
          await apiServicesCollection.SamanthaApiService.DeleteArtifact({
            artifact_key: e
          });
        } catch (e) {
          loggerServiceCore.defaultLogger.persist.error({
            eventName: "delete_artifact_error",
            error: e,
            meta: {
              messageId: t
            }
          });
        }
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      chatEventEmitter.chatEmitter.on("chat.message.delete", a);
      return () => {
        chatEventEmitter.chatEmitter.off("chat.message.delete", a);
      };
    }, []);
  };
  let v = e => {
    let {
      conversationId: t,
      artifactId: a,
      overrideArtifacts: o,
      autoRefresh: s = false,
      refreshByKey: n,
      ifRetry: l
    } = e;
    let {
      fetchArtifactList: c
    } = writingSkillStore.writingSkillStore.getState();
    let d = () => !t || !a || !s && isUndefinedCheck.isUndefined(n);
    let [p, u] = reactCoreLibraryReexport.useState(!d());
    let m = async () => {
      if (!d()) {
        try {
          u(true);
          await c({
            conversationId: t ?? "",
            artifactId: a ?? "",
            ifRetry: l
          });
        } finally {
          u(false);
        }
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      m();
    }, [t, a, n]);
    return writingSkillStore.writingSkillStore(e => {
      if (o) {
        return {
          artifacts: o,
          isFinished: true,
          loading: false
        };
      }
      if (!t || !a) {
        return {
          artifacts: [],
          isFinished: true,
          loading: false
        };
      }
      let s = e.artifactMap[t]?.[a];
      return {
        artifacts: s ?? [],
        isFinished: !isUndefinedCheck.isUndefined(s),
        loading: p
      };
    });
  };
  let _ = e => {
    let {
      docId: t,
      refreshByKey: a,
      ready: i = true
    } = e;
    let r = userInfoStatusSelectors.selectUserInfoSuccess_1();
    let {
      fetchDocArtifactMeta: s
    } = writingSkillStore.writingSkillStore.getState();
    return useRequestHook.useRequest(function (e = false) {
      return s({
        docId: t,
        cache: !e
      });
    }, {
      refreshDeps: [t, a],
      ready: r && i
    });
  };
  let b = e => {
    let {
      artifact: t
    } = e;
    let {
      artifact_key: a,
      artifact_id: r,
      resource_id: o,
      resource_type: s
    } = t ?? {};
    reactCoreLibraryReexport.useEffect(() => {
      let {
        setOpenedArtifact: e
      } = writingSkillStore.writingSkillStore.getState();
      e({
        artifactKey: a,
        artifactId: r,
        pageToken: o,
        resourceType: s
      });
      return () => {
        e(null);
      };
    }, [a, o, s]);
  };
  let w = e => {
    let {
      conversationId: t,
      artifactKey: a,
      artifactId: i
    } = e;
    let {
      fetchLegacyDocArtifact: r
    } = writingSkillStore.writingSkillStore.getState();
    let s = chatMessageArtifactCounter.countMessagesWithArtifact({
      conversationId: t
    });
    let n = skillPinModalCallback.useSkillPinCallback(e => e == null ? undefined : e.find(e => e.artifact_key === a));
    let {
      data: l,
      loading: c
    } = useRequestHook.useRequest(() => r({
      search: {
        conversationId: t,
        artifactId: i
      },
      ifRetry: e => !n(e)
    }), {
      ready: !!t && !!i && !!a,
      refreshDeps: [a, s]
    });
    return {
      loading: c,
      target: n(l),
      artifacts: l
    };
  };
  let S = e => {
    let {
      conversationId: t,
      artifactId: a,
      overrideArtifacts: o,
      autoRefresh: s = false,
      refreshByKey: n,
      ifRetry: l,
      artifactKey: c,
      needAllVersions: d
    } = e;
    let p = () => !t || !a || !s && isUndefinedCheck.isUndefined(n);
    let [u, m] = reactCoreLibraryReexport.useState(!p());
    let [g, k] = reactCoreLibraryReexport.useState([]);
    let y = async () => {
      if (!p()) {
        try {
          m(true);
          let e = await chatArtifactSearchUtil.getArtifactVersions({
            artifactKey: c,
            needAllVersions: d,
            ifRetry: l
          });
          if (e == null ? undefined : e.length) {
            k(e);
          }
        } finally {
          m(false);
        }
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      y();
    }, [t, a, n, c, d]);
    if (o) {
      return {
        artifacts: o,
        loading: false
      };
    } else if (t && a && c) {
      return {
        artifacts: g,
        loading: u
      };
    } else {
      return {
        artifacts: [],
        loading: false
      };
    }
  };
  require.d(exports, {
    getMessageArtifact: function () {
      return x;
    },
    useArtifactRequest: function () {
      return v;
    },
    countMessagesArtifact: function () {
      return b;
    },
    extractArtifactData: function () {
      return _;
    },
    getArtifactVersions: function () {
      return S;
    },
    useSkillPinCallback: function () {
      return w;
    }
  });
}