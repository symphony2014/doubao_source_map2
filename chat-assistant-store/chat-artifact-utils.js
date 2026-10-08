// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'gh' to 'updateArtifactDoc'
// - Renamed export 'Ed' to 'handleDocReference'
// - Renamed export 'L4' to 'createChatArtifact'
// - Renamed export 'c1' to 'getArtifactValue'
// - Renamed export '$r' to 'getArtifactSnapshot'
// - Renamed export 'wz' to 'trackArtifactKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 95317.6173849c.js
         * chunkId: 95317
         * moduleId: 83242
         */
module.exports = function (module, exports, require) {
  var observableTypeCheck = require("observable-type-check") /*id: 279182*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var extractArtifactFromChatMessage = require("extract-artifact-from-chat-message") /*id: 117895*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var artifactResourceLayout = require("artifact-resource-layout") /*id: 774071*/;
  var writingSkillStore = require("writing-skill-store") /*id: 704044*/;
  var revisionStatusConstants = require("revision-status-constants") /*id: 945169*/;
  var samanthaPagesApiService = require("samantha-pages-api-service") /*id: 122025*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let g = e => {
    var r;
    let i = messageContentTypeAndStatusChecker.Hfk(e);
    let n = messageContentTypeAndStatusChecker.cnd(e);
    return {
      isBlockStreaming: i,
      blockId: e == null ? undefined : (r = e.content_blocks) === null || r === undefined ? undefined : r.find(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_RESEARCH)?.id,
      isBlockDocMessage: n
    };
  };
  var observableCoreClass = require("observable-core-class") /*id: 392610*/;
  var observableSafeMapOperator = require("observable-safe-map-operator") /*id: 297880*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var asyncSkillChatConstants = require("async-skill-chat-constants") /*id: 699048*/;
  var observableScanOperator = require("observable-scan-operator") /*id: 271081*/;
  var observableSafeFilter = require("observable-safe-filter") /*id: 669476*/;
  let S = function (e, t = {}) {
    let {
      restoredFirstChunk: r = true
    } = t;
    return e.pipe(observableScanOperator.scanOperator((e, t) => [e === null ? e : e[1], t], null), observableSafeMapOperator.createSafeMapOperator(e => {
      if (!e) {
        return "";
      }
      let [t, r] = e;
      if (t === null) {
        return r;
      } else if (r.startsWith(t)) {
        return r.slice(t.length);
      } else {
        return "";
      }
    }), observableSafeFilter.createSafeFilter(e => !!e), observableSafeMapOperator.createSafeMapOperator((e, t) => r && !t ? {
      text: e,
      directlyOnScreen: true
    } : e));
  };
  let A = e => {
    let {
      blockId: t = ""
    } = e;
    return new observableCoreClass.Observable(e => {
      let r = writingSkillStore.writingSkillStore.subscribe(e => {
        var i;
        var o;
        return [(i = e.blockArtifactMap) === null || i === undefined ? undefined : i[t]?.status, (o = e.blockArtifactMap) === null || o === undefined ? undefined : o[t]?.data];
      }, t => {
        let [i, n] = t;
        if (n) {
          if (e.closed) {
            r();
            return;
          }
          e.next(n);
          if (i === asyncSkillChatConstants.skillStatus.Succeed) {
            e.complete();
            return;
          }
        }
      }, {
        equalityFn: deepEqualUtil_1.deepEqual,
        fireImmediately: true
      });
    });
  };
  let x = e => {
    let {
      conversationId: t,
      messageId: r
    } = e;
    return new observableCoreClass.Observable(e => {
      let i = chatMessageStoreFactory.createMessageStore.subscribe(e => {
        let i = conversationMessageUtils_1.getMessageById(e, t, r);
        return [i, extractArtifactFromChatMessage.extractArtifactFromMessage(i)];
      }, t => {
        let [r, n] = t;
        if (r && n) {
          if (e.closed) {
            i();
            return;
          }
          e.next(n);
          if (chatMessageStatusCheck.isMessageFinished(r) || !n.isStreaming) {
            e.complete();
            return;
          }
          if (messageContentTypeAndStatusChecker.FFC(r)) {
            e.error(Error(`Message error when streaming to artifact: ${JSON.stringify(r.content_obj)}`));
            return;
          }
        }
      }, {
        equalityFn: deepEqualUtil_1.deepEqual,
        fireImmediately: true
      });
    });
  };
  let M = e => {
    let {
      conversationId: t,
      messageId: r
    } = e;
    return S(x({
      conversationId: t,
      messageId: r
    }).pipe(observableSafeMapOperator.createSafeMapOperator(e => {
      let {
        content: t
      } = e;
      return t ?? "";
    })));
  };
  let R = e => {
    let {
      blockOption: t = {}
    } = e;
    let {
      blockId: r = ""
    } = t ?? {};
    return S(A({
      blockId: r
    }).pipe(observableSafeMapOperator.createSafeMapOperator(e => e)));
  };
  let C = async e => {
    let {
      conversationId: t,
      artifact: r
    } = e;
    if ((r == null ? undefined : r.question_message_id) && t) {
      let e = conversationMessageUtils_1.findReplyMessage(chatMessageStoreFactory.createMessageStore.getState(), t, r.question_message_id)?.message_id;
      if (e) {
        let i = await E({
          conversationId: t,
          messageId: e,
          artifact: r
        });
        if (i == null) {
          return undefined;
        } else {
          return i.value;
        }
      }
    }
  };
  let I = e => {
    let {
      message: r,
      artifact: i
    } = e;
    let {
      title: n
    } = i;
    let {
      content: o
    } = extractArtifactFromChatMessage.extractArtifactFromMessage(r) ?? {};
    return {
      title: n,
      value: o,
      version: revisionStatusConstants.defaultState,
      updateTime: undefined
    };
  };
  let L = async e => {
    let {
      message: t,
      artifact: r
    } = e;
    let {
      resource_id: n,
      resource_version: o
    } = r;
    let l = await samanthaPagesApiService.fetchDocumentWithStatus({
      docId: n ?? "",
      docVersion: o
    });
    if (observableTypeCheck.isObservable(l.value)) {
      return {
        ...I({
          message: t,
          artifact: r
        }),
        version: l.version
      };
    } else {
      return l;
    }
  };
  let E = async e => {
    let {
      docId: r,
      conversationId: n,
      messageId: u,
      artifact: v,
      previousArtifact: p,
      overrideResourceId: h,
      overrideResourceType: m,
      omitContent: y
    } = e;
    if (m === artifactResourceLayout.layoutConstants.MobileDoc) {
      return samanthaPagesApiService.fetchMobileDocument({
        resourceId: h ?? ""
      });
    }
    if (r === revisionStatusConstants.mockDocId) {
      return {
        title: undefined,
        value: undefined,
        version: revisionStatusConstants.errorState,
        updateTime: undefined
      };
    }
    if (!v || !n || !u) {
      throw Error("Not allow empty artifact conversationId or messageId when not new content mode");
    }
    let w = conversationMessageUtils_1.getMessageById(chatMessageStoreFactory.createMessageStore.getState(), n, u);
    let {
      isStreaming: k
    } = extractArtifactFromChatMessage.extractArtifactFromMessage(w) ?? {};
    let {
      blockId: b,
      isBlockStreaming: S,
      isBlockDocMessage: A
    } = g(w);
    let {
      resource_type: x,
      resource_version: E,
      content: D,
      title: F,
      resource_id: $
    } = v;
    if (S || A && !messageContentTypeAndStatusChecker.xFg(w)) {
      return {
        title: F,
        value: R({
          blockOption: {
            blockId: b
          }
        }),
        version: revisionStatusConstants.defaultState,
        updateTime: undefined,
        background: await C({
          artifact: p,
          conversationId: n
        })
      };
    }
    if (k && !chatMessageStatusCheck.isMessageFinished(w)) {
      return {
        title: F,
        value: M({
          conversationId: n,
          messageId: u
        }),
        version: revisionStatusConstants.defaultState,
        updateTime: undefined,
        background: await C({
          artifact: p,
          conversationId: n
        })
      };
    }
    if (messageContentTypeAndStatusChecker.F3w(w)) {
      return I({
        message: w,
        artifact: v
      });
    }
    if (messageContentTypeAndStatusChecker.vlk(w) && !messageContentTypeAndStatusChecker.cnd(w)) {
      return L({
        message: w,
        artifact: v
      });
    }
    if (x === artifactResourceLayout.ArtifactResource.Pages) {
      let e = await samanthaPagesApiService.fetchDocumentWithStatus({
        docId: $ ?? "",
        docVersion: E,
        omitContent: y
      });
      if (observableTypeCheck.isObservable(e.value)) {
        if (A) {
          return {
            ...e,
            value: R({
              blockOption: {
                blockId: b
              }
            })
          };
        } else {
          return {
            ...e,
            value: M({
              conversationId: n,
              messageId: u
            })
          };
        }
      } else {
        return e;
      }
    }
    if (x === artifactResourceLayout.ArtifactResource.WriteDoc) {
      return {
        title: F,
        value: D,
        version: revisionStatusConstants.pendingState,
        updateTime: undefined
      };
    }
    throw Error(`Unsupported resource_type: ${x}`);
  };
  let D = async e => {
    let {
      conversationId: t,
      messageId: r,
      pageId: i,
      pageVersion: n,
      artifact: l,
      shareId: f
    } = e;
    try {
      if (!t || !r) {
        let {
          metaInfos: e,
          referenceList: t
        } = (await samanthaPagesApiService.fetchDocumentMeta({
          pageId: i,
          pageVersion: n,
          shareId: f
        })) || {};
        if (e && t) {
          writingSkillStore.writingSkillStore.getState().updateReferenceAndQuote(i, n, t, e);
        }
        return;
      }
      let e = conversationMessageUtils_1.getMessageById(chatMessageStoreFactory.createMessageStore.getState(), t, r);
      let {
        isStreaming: u
      } = extractArtifactFromChatMessage.extractArtifactFromMessage(e) ?? {};
      let {
        resource_type: h
      } = l || {};
      let {
        isBlockStreaming: m,
        isBlockDocMessage: y
      } = g(e);
      if (!m && !u) {
        if (y) {
          messageContentTypeAndStatusChecker.xFg(e);
        }
      }
      if (h === artifactResourceLayout.ArtifactResource.Pages && y) {
        let {
          metaInfos: e,
          referenceList: t
        } = (await samanthaPagesApiService.fetchDocumentMeta({
          pageId: i,
          pageVersion: n,
          shareId: f
        })) || {};
        if (e || t) {
          writingSkillStore.writingSkillStore.getState().updateReferenceAndQuote(i, n, t, e);
        }
        return;
      }
      writingSkillStore.writingSkillStore.getState().clearReferenceListAndQuote(i, n);
      return;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "get_doc_referenceQuote_error",
        error: e
      });
    }
  };
  let F = e => {
    let {
      conversationId: t,
      messageId: r,
      artifact: i,
      version: n,
      content: o,
      title: a,
      markdown: u
    } = e;
    let {
      resource_version: v,
      resource_type: f,
      resource_id: p
    } = i;
    let g = t && r ? conversationMessageUtils_1.getMessageById(chatMessageStoreFactory.createMessageStore.getState(), t, r) : undefined;
    if (!chatMessageStatusCheck.isMessageFinished(g)) {
      throw Error("Should not update doc when message not finished");
    }
    if (f === artifactResourceLayout.ArtifactResource.WriteDoc) {
      throw Error("Should not update doc when resource_type is ArtifactResourceType.WriteDoc");
    }
    if (f === artifactResourceLayout.ArtifactResource.Pages) {
      return samanthaPagesApiService.updateDocument({
        docId: p ?? "",
        docVersion: v,
        version: n,
        content: o,
        title: a,
        markdown: u
      });
    }
    throw Error(`Unsupported resource_type: ${f}`);
  };
  let $ = e => {
    let {
      artifact_key: t
    } = (e == null ? undefined : e.artifact) || {};
    let r = throttledOmitPathStringify.omitPathStringify(e, "artifact");
    return samanthaPagesApiService.searchDocumentImages({
      ...r,
      artifactKey: t
    });
  };
  let P = async e => {
    let {
      content: t,
      markdown: r,
      spaceNodeId: i
    } = e;
    try {
      let e = await samanthaPagesApiService.createPageArtifact({
        title: "",
        content: t,
        source_content: r,
        space_node_id: i
      });
      let n = e == null ? undefined : e.artifact;
      if (!n) {
        throw Error("Failed to create new chat artifact.");
      }
      return n;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "create_artifact_failed",
        error: e
      });
      throw e;
    }
  };
  require.d(exports, {
    updateArtifactDoc: function () {
      return F;
    },
    handleDocReference: function () {
      return D;
    },
    createChatArtifact: function () {
      return P;
    },
    getArtifactValue: function () {
      return E;
    },
    getArtifactSnapshot: function () {
      return I;
    },
    trackArtifactKey: function () {
      return $;
    }
  });
}