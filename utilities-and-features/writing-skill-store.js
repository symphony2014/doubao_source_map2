// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'writingSkillStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 704044
         */
module.exports = function (module, exports, require) {
  let i;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var reduxPersistStoreFactory = require("redux-persist-store-factory") /*id: 273160*/;
  var storagePersistenceUtil = require("storage-persistence-util") /*id: 143136*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var feishuSpaceSdkManager = require("feishu-space-sdk-manager") /*id: 858515*/;
  var fileResourceEnums = require("file-resource-enums") /*id: 602816*/;
  var fileEntityTypeMapper = require("file-entity-type-mapper") /*id: 300358*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var docPlaygroundCheck = require("doc-playground-check") /*id: 993680*/;
  var chatSkillInputConstants = require("chat-skill-input-constants") /*id: 697792*/;
  let y = () => ({
    writingEditorValue: {
      data: []
    },
    sendDisabled: false,
    isWriteConfigInitd: false,
    isWriteConfigLoading: false,
    writeConfig: {},
    keepValueOnClear: false,
    recentDocs: [],
    docAISpaceNodeId: null,
    docPageChatLayoutMode: docPlaygroundCheck.isDocPlayground() ? chatSkillInputConstants.SkillDisplayType.Sidebar : chatSkillInputConstants.SkillDisplayType.Avatar
  });
  let _ = (e, t) => throttledDeepCloneUtil.throttledDeepClone(y(), {
    updateWritingEditorValue: function (n, i = {}) {
      let {
        keepOnClear: r = false
      } = i;
      let {
        writingEditorValue: o
      } = t();
      if (!deepEqualUtil_1.deepEqual(o, n)) {
        e(immerCoreImplementation.produce(e => {
          e.writingEditorValue = n;
          e.keepValueOnClear = r;
        }));
      }
    },
    clearWritingEditorValue(t = {}) {
      let {
        skipOnceWhenKeep: n = false
      } = t;
      e(immerCoreImplementation.produce(e => {
        if (n && e.keepValueOnClear) {
          e.keepValueOnClear = false;
          return;
        }
        e.writingEditorValue = {
          data: []
        };
      }));
    },
    updateSendDisabledState: t => {
      e(immerCoreImplementation.produce(e => {
        e.sendDisabled = t;
      }));
    },
    fetchWriteConfig: async () => {
      if (!t().isWriteConfigLoading && !t().isWriteConfigInitd) {
        try {
          e(immerCoreImplementation.produce(e => {
            e.isWriteConfigLoading = true;
            e.isWriteConfigInitd = false;
          }));
          let {
            data: t
          } = await apiServicesCollection.SamanthaApiService.SkillPack({
            skill_type: chatAppEnums.SkillType.WriteAssistant,
            condition: {}
          });
          e(immerCoreImplementation.produce(e => {
            if (t == null ? undefined : t.write) {
              e.isWriteConfigLoading = false;
              e.isWriteConfigInitd = true;
              e.writeConfig = t.write;
            } else {
              e.isWriteConfigLoading = false;
            }
          }));
        } catch (e) {
          loggerServiceCore.defaultLogger.persist.warning({
            eventName: "init_write_config_error"
          });
        }
      }
    },
    refreshRecentDocs: async t => {
      try {
        if (t) {
          let t = await feishuSpaceSdkManager.FeishuSpaceManager.getInstance().getFeishuSpaceFirstScreenSDk();
          let r = await (t == null ? undefined : t.fetchRecentList({
            obj_type: [fileResourceEnums.resourceNodeTypes.Docx],
            tab_type: fileResourceEnums.fileCategories.Doc,
            length: 50,
            rank: fileResourceEnums.sortTypes.EditTime
          }));
          let {
            nodes: o = []
          } = (r == null ? undefined : r.data) ?? {};
          e({
            recentDocs: o.map(fileEntityTypeMapper.convertSharedFile).filter(e => !!e) ?? []
          });
          return;
        }
        {
          let {
            data: t
          } = await apiServicesCollection.SamanthaApiService.AISpacePagesSearch({
            limit: 10
          });
          let {
            nodes: n
          } = t ?? {};
          e({
            recentDocs: n ?? []
          });
        }
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.warning({
          eventName: "refresh_recent_docs_error",
          error: e
        });
      }
    },
    getDocAISpaceNodeId: async () => {
      let {
        docAISpaceNodeId: n
      } = t();
      if (n) {
        return n;
      }
      let {
        data: i
      } = await apiServicesCollection.SamanthaApiService.AISpaceGetSystemDirectory();
      let {
        documents_node_id: r
      } = i ?? {};
      if (!r) {
        throw Error("Fail to get doc system directory");
      }
      e({
        docAISpaceNodeId: r
      });
      return r;
    },
    updateDocPageChatLayoutMode: t => {
      e({
        docPageChatLayoutMode: t
      });
    },
    closeCopilotChat: () => {
      let {
        docPageChatLayoutMode: e,
        updateDocPageChatLayoutMode: n
      } = t();
      if (collectionIncludesUtil.includes([chatSkillInputConstants.SkillDisplayType.Sidebar, chatSkillInputConstants.SkillDisplayType.Popover], e)) {
        n(chatSkillInputConstants.SkillDisplayType.Avatar);
      }
    },
    showCopilotChat: () => {
      let {
        docPageChatLayoutMode: e,
        updateDocPageChatLayoutMode: n
      } = t();
      if (collectionIncludesUtil.includes([chatSkillInputConstants.SkillDisplayType.Avatar], e)) {
        n(chatSkillInputConstants.SkillDisplayType.Popover);
      }
    }
  });
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var chatMessageBlockUtils = require("chat-message-block-utils") /*id: 292414*/;
  var artifactDataServiceUtilities = require("artifact-data-service-utilities") /*id: 896276*/;
  var asyncSkillChatConstants = require("async-skill-chat-constants") /*id: 699048*/;
  let k = () => ({
    artifactMap: {},
    blockArtifactMap: {},
    blockArtifactIdToConvId: {},
    docArtifactMetaMap: {},
    legacyDocArtifactMap: {},
    openedArtifact: null
  });
  let T = (e, t) => throttledDeepCloneUtil.throttledDeepClone(k(), {
    fetchArtifactList: async t => {
      let {
        conversationId: n,
        artifactId: i,
        hasAbort: r,
        ifRetry: o
      } = t;
      try {
        let t = await asyncRetryUtils.pollUntilSuccess({
          value: () => artifactDataServiceUtilities.getArtifactsByConversation({
            conversationId: n,
            artifactId: i
          }),
          ifRetry: e => !e.length || !!(o == null ? undefined : o(e)),
          count: 5
        });
        if (r) {
          return;
        }
        e(immerCoreImplementation.produce(e => {
          let {
            artifactMap: r
          } = e;
          r[n] ||= {};
          r[n][i] = t;
        }));
        return t;
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "search_artifact_error",
          error: e
        });
        throw e;
      }
    },
    async refreshArtifactList() {
      let {
        conversationId: e,
        canvasContent: n
      } = chatStoreManager.getStoreState("chatViewCanvasStore");
      let i = n == null ? undefined : n.artifactId;
      if (e && i) {
        return t().fetchArtifactList({
          conversationId: e,
          artifactId: i
        });
      }
    },
    loadMobileArtifactList: async t => {
      let {
        resourceId: n,
        blockId: i
      } = t;
      try {
        let t = await apiServicesCollection.SamanthaApiService.GetDeepResearchResource({
          resource_id: n
        });
        let {
          blocks: o = []
        } = (t == null ? undefined : t.data) ?? {};
        let a = chatMessageBlockUtils.renderBlockContent(o);
        e(immerCoreImplementation.produce(e => {
          let {
            blockArtifactMap: t
          } = e;
          t ||= {};
          t[i] = {
            status: asyncSkillChatConstants.skillStatus.Succeed,
            data: a
          };
        }));
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "deep_research_resource_error",
          error: e
        });
        throw e;
      }
    },
    updateBlockArtifact: t => {
      let {
        type: n,
        blockId: i,
        value: r
      } = t;
      e(immerCoreImplementation.produce(e => {
        let {
          blockArtifactMap: t
        } = e;
        t ||= {};
        if (n === asyncSkillChatConstants.fieldNames.Status) {
          t[i] = {
            ...t[i],
            status: r
          };
        } else {
          t[i] = {
            ...t[i],
            data: r
          };
        }
      }));
    },
    updateBlockArtifactIdToConvId: t => {
      let {
        blockId: n,
        convId: i,
        status: r
      } = t;
      e(immerCoreImplementation.produce(e => {
        let {
          blockArtifactIdToConvId: t,
          blockArtifactMap: o
        } = e;
        t[n] ||= {};
        t[n] = {
          convId: i,
          status: r
        };
        let a = t ?? {};
        Object.keys(o ?? {}).forEach(e => {
          if (!a[e] || a[e]?.convId !== i && a[e]?.status) {
            delete o[e];
          }
        });
      }));
    },
    setOpenedArtifact(t) {
      e(immerCoreImplementation.produce(e => {
        e.openedArtifact = t;
      }));
    },
    async fetchDocArtifactMeta(n) {
      let {
        docId: i,
        cache: r = true,
        ifRetry: o
      } = n;
      let {
        docArtifactMetaMap: a
      } = t();
      let s = a[i];
      if (s && r) {
        let e = await s;
        if (!(o == null ? undefined : o(e))) {
          return e;
        }
      }
      let l = asyncRetryUtils.pollUntilSuccess({
        value: () => artifactDataServiceUtilities.getArtifactMetaByDocId({
          docId: i,
          needHistories: true
        }),
        count: 3,
        ifRetry: o ?? (e => {
          return !e.version_list?.length;
        })
      }).then(t => {
        e(immerCoreImplementation.produce(e => {
          let {
            docArtifactMetaMap: n
          } = e;
          if (!(i in n)) {
            n[i] = {};
          }
          n[i] = t;
        }));
        return t;
      }).catch(t => {
        e(immerCoreImplementation.produce(e => {
          let {
            docArtifactMetaMap: t
          } = e;
          delete t[i];
        }));
        throw t;
      });
      e(immerCoreImplementation.produce(e => {
        let {
          docArtifactMetaMap: t
        } = e;
        if (!(i in t)) {
          t[i] = {};
        }
        t[i] = l;
      }));
      return l;
    },
    resetDocArtifactCache(t) {
      e(immerCoreImplementation.produce(e => {
        let {
          docArtifactMetaMap: n
        } = e;
        delete n[t];
      }));
    },
    async fetchLegacyDocArtifact(n) {
      let {
        search: i,
        cache: r = true,
        ifRetry: o
      } = n;
      let {
        legacyDocArtifactMap: a
      } = t();
      let s = artifactDataServiceUtilities.generateArtifactCacheKey(i);
      let l = a[s];
      if (l && r) {
        let e = await l;
        if (!(o == null ? undefined : o(e))) {
          return e;
        }
      }
      let c = asyncRetryUtils.pollUntilSuccess({
        value: () => artifactDataServiceUtilities.getArtifactsWithErrorHandling(i),
        count: 3,
        ifRetry: o ?? (e => !(e == null ? undefined : e.length))
      }).then(t => {
        e(immerCoreImplementation.produce(e => {
          let {
            legacyDocArtifactMap: n
          } = e;
          n[s] = t;
        }));
        return t;
      }).catch(t => {
        e(immerCoreImplementation.produce(e => {
          let {
            legacyDocArtifactMap: t
          } = e;
          delete t[s];
        }));
        throw t;
      });
      e(immerCoreImplementation.produce(e => {
        let {
          legacyDocArtifactMap: t
        } = e;
        t[s] = c;
      }));
      return c;
    },
    resetLegacyDocArtifactCache(t) {
      let n = artifactDataServiceUtilities.generateArtifactCacheKey(t);
      e(immerCoreImplementation.produce(e => {
        let {
          legacyDocArtifactMap: t
        } = e;
        delete t[n];
      }));
    }
  });
  var nodeTreeStateManager = require("node-tree-state-manager") /*id: 654652*/;
  let C = () => ({
    ...nodeTreeStateManager.defaultNodeState,
    isListLoading: false,
    uploadFiles: [],
    fileStatusMap: {},
    snapshotUploadFiles: []
  });
  let O = (e, t, n) => {
    let i = nodeTreeStateManager.createStateUpdater(e, t, n);
    return throttledDeepCloneUtil.throttledDeepClone(C(), {
      ...i,
      clearUploadFiles: () => {
        e({
          uploadFiles: []
        });
      },
      appendUploadFiles: t => {
        e(immerCoreImplementation.produce(e => {
          e.uploadFiles = [...e.uploadFiles, ...t];
          e.snapshotUploadFiles = t;
        }));
      },
      deleteUploadFileWithKey: t => {
        e(immerCoreImplementation.produce(e => {
          let n = e.uploadFiles.filter(e => e.localKey !== t);
          e.uploadFiles = n;
        }));
      },
      updateUploadFileInfoWithKey: (t, n) => {
        e(immerCoreImplementation.produce(e => {
          let i = e.uploadFiles.findIndex(e => e.localKey === t);
          if (i !== -1) {
            let t = e.uploadFiles[i];
            e.uploadFiles[i] = {
              ...t,
              ...n
            };
          }
        }));
      }
    });
  };
  let N = () => ({
    referenceAndQuoteMap: {}
  });
  let I = e => throttledDeepCloneUtil.throttledDeepClone(N(), {
    updateReferenceQuoteList(t, n, i) {
      e(immerCoreImplementation.produce(e => {
        e.referenceAndQuoteMap[t] = e.referenceAndQuoteMap[t] || {};
        e.referenceAndQuoteMap[t][n] = e.referenceAndQuoteMap[t][n] || {};
        if (i == null ? undefined : i.length) {
          e.referenceAndQuoteMap[t][n].referenceQuoteList = i;
        }
      }));
    },
    updateReferenceList(t, n, i) {
      e(immerCoreImplementation.produce(e => {
        e.referenceAndQuoteMap[t] = e.referenceAndQuoteMap[t] || {};
        e.referenceAndQuoteMap[t][n] = e.referenceAndQuoteMap[t][n] || {};
        if (i == null ? undefined : i.length) {
          e.referenceAndQuoteMap[t][n].referenceList = i;
        }
      }));
    },
    clearReferenceListAndQuote(t, n) {
      e(immerCoreImplementation.produce(e => {
        var r;
        var a;
        if ((r = e.referenceAndQuoteMap[t]) === null || r === undefined ? undefined : r[n]?.referenceList) {
          e.referenceAndQuoteMap[t][n].referenceList = [];
        }
        if ((a = e.referenceAndQuoteMap[t]) === null || a === undefined ? undefined : a[n]?.referenceList) {
          e.referenceAndQuoteMap[t][n].referenceQuoteList = [];
        }
      }));
    },
    updateReferenceAndQuote(t, n, i = [], r = []) {
      e(immerCoreImplementation.produce(e => {
        e.referenceAndQuoteMap[t] = e.referenceAndQuoteMap[t] || {};
        e.referenceAndQuoteMap[t][n] = e.referenceAndQuoteMap[t][n] || {};
        if (r == null ? undefined : r.length) {
          e.referenceAndQuoteMap[t][n].referenceQuoteList = r;
        }
        if (i == null ? undefined : i.length) {
          e.referenceAndQuoteMap[t][n].referenceList = i;
        }
      }));
    }
  });
  var aiChatSkillInputUtils = require("ai-chat-skill-input-utils") /*id: 862269*/;
  let R = docPlaygroundCheck.isDocPlayground() ? aiChatSkillInputUtils.getDocPlaygroundWidth() : 400;
  let j = () => {
    if (typeof window == "undefined") {
      return {
        rightPartWidth: 0,
        rightPartWidthRatio: 0
      };
    }
    let e = window.innerWidth;
    let t = e - R;
    return {
      rightPartWidth: t,
      rightPartWidthRatio: t / e
    };
  };
  let M = e => throttledDeepCloneUtil.throttledDeepClone(j(), {
    updateRightPartWidth: t => {
      e(() => ({
        rightPartWidth: t,
        rightPartDisplayWidth: t
      }));
    }
  });
  let L = () => ({
    selectionMap: {}
  });
  let D = (e, t) => throttledDeepCloneUtil.throttledDeepClone(L(), {
    addSelection: t => {
      let {
        chatId: n,
        version: i,
        selectedContent: r,
        referenceContent: o,
        skillType: a,
        docAction: s,
        docCursorType: l
      } = t;
      e(immerCoreImplementation.produce(e => {
        e.selectionMap[n] = {
          chatId: n,
          version: i,
          selectedContent: r,
          referenceContent: o,
          skillType: a,
          docAction: s,
          docCursorType: l,
          timestamp: Date.now()
        };
      }));
    },
    getSelection: e => {
      let {
        selectionMap: n
      } = t();
      return n[e];
    },
    removeSelection: t => {
      e(immerCoreImplementation.produce(e => {
        delete e.selectionMap[t];
      }));
    },
    clearAllSelections: () => {
      e(immerCoreImplementation.produce(e => {
        e.selectionMap = {};
      }));
    }
  });
  var objectDefaultsUtil = require("object-defaults-util") /*id: 679337*/;
  let z = () => ({
    legacyDocIdMapping: {},
    openedDocId: null,
    docMetaMap: {},
    larkUserId: null
  });
  let U = (e, t) => throttledDeepCloneUtil.throttledDeepClone(z(), {
    setLegacyDocIdMapping: (t, n) => {
      e(immerCoreImplementation.produce(e => {
        let {
          legacyDocIdMapping: i
        } = e;
        i[t] = n;
      }));
    },
    setOpenedDocId: t => {
      e(immerCoreImplementation.produce(e => {
        e.openedDocId = t;
      }));
    },
    updateDocMetaMap: (t, n) => {
      e(immerCoreImplementation.produce(e => {
        e.docMetaMap[t] = objectDefaultsUtil.defaults({}, n, e.docMetaMap[t] ?? {});
      }));
    },
    getDocMeta: (e, n) => {
      let {
        docMetaMap: i
      } = t();
      let r = i[e];
      if (r) {
        return r[n];
      } else {
        return null;
      }
    },
    setLarkUserId: t => {
      e(immerCoreImplementation.produce(e => {
        e.larkUserId = t;
      }));
    }
  });
  let W = e => {
    try {
      return {
        blockArtifactMap: e.blockArtifactMap
      };
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        message: "[@write-skill-store] persist state limit error",
        error: e instanceof Error ? e : Error(String(e))
      });
      return {};
    }
  };
  let F = reduxPersistStoreFactory.createPersistStore({
    id: Symbol("write-store"),
    createSlice: function () {
      var e = arguments.length;
      var t = Array(e);
      var n = 0;
      for (; n < e; n++) {
        t[n] = arguments[n];
      }
      return throttledDeepCloneUtil.throttledDeepClone(_(...t), T(...t), O(...t), I(...t), M(...t), D(...t), U(...t));
    },
    getPersistStorageOptions: (i = null, () => i ||= storagePersistenceUtil.createPersistOptions({
      name: "writing-skill-store",
      prefix: "samantha-web",
      partialize: W,
      version: 1.5,
      merge: throttledDeepCloneUtil.throttledDeepClone
    }))
  });
  require.d(exports, {
    writingSkillStore: function () {
      return F;
    }
  });
}