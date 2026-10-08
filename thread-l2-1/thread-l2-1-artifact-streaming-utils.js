// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FB' to 'observeArtifactStreaming'
// - Renamed export 'N6' to 'extractTextFromBlocks'
// - Renamed export 'Nw' to 'getArtifactMetaListByBlockId'
// - Renamed export 'Rg' to 'clearBlockArtifactRecord'
// - Renamed export 'WR' to 'hasMultipleArtifactsInBlock'
// - Renamed export 'hA' to 'getActiveArtifactPath'
// - Renamed export 'i$' to 'mergeAndFilterArtifactMeta'
// - Renamed export 'pV' to 'observeBlockArtifactStreaming'
// - Renamed export 'uG' to 'getArtifactMetaFromMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 815426
         */
module.exports = function (module, exports, require) {
  var observableCoreClass = require("observable-core-class") /*id: 392610*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var chatMessageStatusCheck = require("chat-message-status-check") /*id: 884389*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var localResourceCheck = require("local-resource-check") /*id: 392448*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var artifactMetaUtils = require("artifact-meta-utils") /*id: 398594*/;
  var codingSkillStoreModule = require("coding-skill-store-module") /*id: 528099*/;
  var streamingStutterTracker = require("streaming-stutter-tracker") /*id: 585624*/;
  let h = (e, t) => {
    var n;
    let i = [];
    if ((e == null ? undefined : e.content_obj) && Array.isArray(e == null ? undefined : e.content_obj)) {
      let n = (e == null ? undefined : e.content_obj).find(e => e.block_id === t);
      if (n) {
        i = JSON.parse(n.content).artifact || [];
      }
    }
    let l = chatMessageStatusCheck.isMessageFinished(e);
    if (i.length > 0 && i[0]) {
      i[0].code ||= {
        node_id: ""
      };
      i[0].code.node_id = "root";
    }
    if (i == null) {
      return undefined;
    } else if ((n = i.map) === null || n === undefined) {
      return undefined;
    } else {
      return n.call(i, e => artifactMetaUtils.mapArtifactMeta(e, {
        isFinished: l
      }));
    }
  };
  let g = e => {
    var i;
    let {
      blockArtifactMap: l,
      blockArtifactMetaMap: r
    } = codingSkillStoreModule.codingSkillStore.getState();
    if (e in r) {
      return !!r[e] && ((i = r[e]) === null || i === undefined ? undefined : i.codeFileBlockList?.length) > 1;
    } else {
      return !!l[e] && l[e].data?.length > 0;
    }
  };
  let _ = e => {
    let {
      clearBlockArtifactRecord: t
    } = codingSkillStoreModule.codingSkillStore.getState();
    t(e);
  };
  let b = e => {
    let i = e.filter(e => {
      return e.code?.node_id !== "root";
    }).find(e => {
      return !!e.code?.node_id && e.isStreaming;
    });
    if (i) {
      return i.code?.path;
    }
    let l = e.filter(e => {
      return e.code?.node_id !== "root";
    }).find(e => {
      return !!e.code?.node_id;
    });
    if (l) {
      return l.code?.path;
    } else {
      return "";
    }
  };
  let k = (e, t) => {
    let i = e.map(e => {
      let t = deepCloneWrapper_1.deepClone(e);
      if (t.code) {
        t.code.node_id ||= "root";
      } else {
        t.code = {
          node_id: "root"
        };
      }
      return t;
    });
    let r = i.filter(e => {
      return e.code?.node_id !== "root";
    }).find(e => {
      return !!e.code?.node_id;
    });
    if (!r) {
      return {
        messageArtifactMetaList: i,
        activeArtifactMeta: null
      };
    }
    let o = codingSkillStoreModule.codingSkillStore.getState().blockArtifactMap[t]?.data || "";
    if (r == null ? undefined : r.code) {
      r.code.content = o;
    }
    return {
      messageArtifactMetaList: i,
      activeArtifactMeta: r
    };
  };
  let y = e => e == null ? undefined : e.codeFileBlockList.map(e => deepCloneWrapper_1.deepClone(e.artifactMeta));
  let x = e => {
    let {
      blockId: t,
      messageId: n,
      conversationId: l
    } = e;
    let r = new streamingStutterTracker.StutterTracker({
      messageId: n,
      conversationId: l,
      blockId: t
    });
    let o = function () {
      let e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
      if (!r.hasError) {
        r.complete();
        if (e) {
          streamingStutterTracker.logStutterRate(r);
        }
      }
    };
    return new observableCoreClass.Observable(e => {
      let n = codingSkillStoreModule.codingSkillStore.subscribe(i => {
        if (e.closed) {
          n();
          return;
        }
        let {
          blockArtifactMetaMap: l
        } = i;
        let a = l[t];
        if (!a) {
          n();
          return;
        }
        let s = y(a);
        let c = !a.isStreaming;
        if (c) {
          artifactMetaUtils.ArtifactStreamUtil.endStreaming(s);
        }
        e.next({
          isFinished: c,
          artifactMetaList: s
        });
        r.update(null);
        if (c) {
          e.complete();
          o();
        }
      });
    });
  };
  let w = e => {
    let {
      conversationId: n,
      messageId: l,
      artifactMetaList: o,
      blockId: m
    } = e;
    let v = new streamingStutterTracker.StutterTracker({
      messageId: l,
      conversationId: n,
      blockId: m,
      artifactKey: o[0]?.artifactKey
    });
    let h = function () {
      let e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
      if (!v.hasError) {
        v.complete();
        if (e) {
          streamingStutterTracker.logStutterRate(v);
        }
      }
    };
    return new observableCoreClass.Observable(e => {
      let t = chatMessageStoreFactory.createMessageStore.subscribe(e => {
        let t = conversationMessageUtils_1.getMessageById(e, n, l);
        let i = k(o, m);
        if (chatMessageStatusCheck.isMessageFinished(t)) {
          i.messageArtifactMetaList.forEach(e => {
            e.isStreaming = false;
          });
        } else if (i.activeArtifactMeta) {
          i.activeArtifactMeta.isStreaming = true;
        }
        v.update(null);
        return [t, i.messageArtifactMetaList];
      }, n => {
        let [i, r] = n;
        if (i && r) {
          if (e.closed) {
            h();
            t();
            return;
          }
          e.next(r);
          if (chatMessageStatusCheck.isMessageFinished(i)) {
            h();
            e.complete();
            return;
          }
          if (messageContentTypeAndStatusChecker.FFC(i)) {
            let e = {};
            try {
              e = {
                messageId: l,
                isLocalMessage: localResourceCheck.isLocal(i),
                final_status: i == null ? undefined : i.final_status,
                error_details: localResourceCheck.isLocal(i) ? i == null ? undefined : i.local : i == null ? undefined : i.error_details
              };
            } catch (e) {}
            loggerServiceCore.defaultLogger.persist.error({
              eventName: "coding_canvas_streaming_block_error",
              error: Error(JSON.stringify(i)),
              meta: e
            });
            return;
          }
        }
      }, {
        equalityFn: deepEqualUtil_1.deepEqual,
        fireImmediately: true
      });
    });
  };
  let S = e => {
    let t = "";
    for (let n of e) {
      if (n.block_type === chatConstantsEnum.messageContentType.BLOCK_TEXT) {
        t += n.content_obj.text;
      }
    }
    return t;
  };
  let R = (e, t, n) => {
    let i;
    let r;
    let o = false;
    if (!e.length) {
      return t;
    }
    i = e[0];
    o = e.some(e => e.artifactType === "webview");
    let a = e;
    if (n) {
      a = e.filter(e => !t.some(t => {
        return t.code?.path === e.code?.path;
      }));
      r = deepCloneWrapper_1.deepClone(t);
    } else {
      let n = t.filter(t => !e.some(e => {
        return e.code?.path === t.code?.path;
      }));
      r = deepCloneWrapper_1.deepClone(n);
    }
    r.forEach(e => {
      e.artifactKey = (i == null ? undefined : i.artifactKey) || e.artifactKey;
      e.resourceId = (i == null ? undefined : i.resourceId) || e.resourceId;
      e.resourceVersion = (i == null ? undefined : i.resourceVersion) || e.resourceVersion;
      e.version = (i == null ? undefined : i.version) || e.version;
      e.artifactId = (i == null ? undefined : i.identifier) || e.identifier;
      e.identifier = (i == null ? undefined : i.artifactId) || e.identifier;
      e.artifactType = o ? "webview" : i == null ? undefined : i.artifactType;
      e.type = e.artifactType;
    });
    return [...a, ...r];
  };
  let $ = function (e, t, n, i) {
    let l = !(arguments.length > 4) || arguments[4] === undefined || arguments[4];
    let r = R(e, t, l);
    if (!(r == null ? undefined : r.length)) {
      return [];
    }
    let o = r.filter(e => {
      return e.code?.path === i;
    });
    if (o.length === 1) {
      return r;
    }
    {
      let e = o.findIndex(e => {
        return e.code?.node_id === n;
      });
      if (!(e >= 1)) {
        return r;
      }
      {
        let t = o[e - 1];
        return [...r].filter(e => {
          return e.code?.path !== t.code?.path || e.code?.node_id === t.code?.node_id;
        });
      }
    }
  };
  require.d(exports, {
    observeArtifactStreaming: function () {
      return w;
    },
    extractTextFromBlocks: function () {
      return S;
    },
    getArtifactMetaListByBlockId: function () {
      return h;
    },
    clearBlockArtifactRecord: function () {
      return _;
    },
    hasMultipleArtifactsInBlock: function () {
      return g;
    },
    getActiveArtifactPath: function () {
      return k;
    },
    mergeAndFilterArtifactMeta: function () {
      return $;
    },
    observeBlockArtifactStreaming: function () {
      return x;
    },
    getArtifactMetaFromMessage: function () {
      return b;
    }
  });
}