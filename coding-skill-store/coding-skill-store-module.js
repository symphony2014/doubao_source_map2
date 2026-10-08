// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'mr' to 'codingSkillStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30108.9930390a.js
         * chunkId: 30108
         * moduleId: 528099
         */
module.exports = function (module, exports, require) {
  var reduxPersistStoreFactory = require("redux-persist-store-factory") /*id: 273160*/;
  var storagePersistenceUtil = require("storage-persistence-util") /*id: 143136*/;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var immerProduceCore = require("immer-produce-core") /*id: 949322*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var skillActionConstants = require("skill-action-constants") /*id: 418389*/;
  let u = (e, t) => ({
    previewedCount: 0,
    incrAllowTryPreviewCount: () => {
      e({
        previewedCount: t().previewedCount + 1
      });
    },
    checkAllowTryPreview: () => t().previewedCount < 4
  });
  let f = e => ({
    launchPageSearchValue: "",
    launchSubmitChecked: false,
    setLaunchPageSearchValue: t => {
      e(immerProduceCore.produce(e => {
        e.launchPageSearchValue = t;
      }));
    },
    setAutoSubmitChecked: () => {
      e(immerProduceCore.produce(e => {
        e.launchSubmitChecked = true;
      }));
    }
  });
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var artifactMetaUtils = require("artifact-meta-utils") /*id: 398594*/;
  let y = () => ({
    blockIdToProcess: {},
    hasOpenCanvasViewInAsyncStreaming: false,
    isProcessDataLoading: false,
    blockIdToProcessHasInited: {},
    blockArtifactMetaMap: {},
    processBlockMetaMap: {},
    blockArtifactAutoOpenCanvasMap: {}
  });
  let _ = (e, t) => throttledDeepCloneUtil.throttledDeepClone(y(), {
    fetchAgentProcessData: async r => {
      let {
        blockId: o,
        resourceId: n
      } = r;
      if (t().blockIdToProcessHasInited?.[o]) {
        return null;
      }
      try {
        e(immerProduceCore.produce(e => {
          e.isProcessDataLoading = true;
        }));
        let {
          data: t
        } = await apiServicesCollection.SamanthaApiService.GetDeepResearchResource({
          resource_id: n
        });
        let {
          blocks: r = []
        } = t ?? {};
        let a = r.map(e => {
          return {
            ...e,
            content_obj: safeJsonUtils.safeParse(e.content, {}),
            id: (e == null ? undefined : e.block_id) ?? "",
            parent_id: e.parent_block_id
          };
        });
        e(immerProduceCore.produce(e => {
          e.blockIdToProcess[o] ||= [];
          e.blockIdToProcess[o] = a;
          e.isProcessDataLoading = false;
          e.blockIdToProcessHasInited[o] = true;
        }));
        return a;
      } catch {
        e(immerProduceCore.produce(e => {
          e.isProcessDataLoading = false;
          e.blockIdToProcessHasInited[o] = true;
        }));
        loggerServiceCore.defaultLogger.persist.warning({
          eventName: "fetch_DeepResearch_process_data_error"
        });
        return null;
      }
    },
    updateAgentProcessData(t) {
      let {
        blockId: r,
        value: a
      } = t;
      e(immerProduceCore.produce(e => {
        e.blockIdToProcess[r] ||= [];
        e.blockIdToProcess[r] = a;
      }));
    },
    setHasOpenCanvasViewInAsyncStreaming: t => {
      e(immerProduceCore.produce(e => {
        e.hasOpenCanvasViewInAsyncStreaming = t;
      }));
    },
    updateBlockArtifactMeta: t => {
      let {
        blockId: r,
        codeFileBlockList: a,
        isStreaming: o,
        activeCodeFileBlockId: n
      } = t;
      e(immerProduceCore.produce(e => {
        let {
          blockArtifactMetaMap: t
        } = e;
        t[r] = {
          ...t[r],
          codeFileBlockList: a,
          isStreaming: o,
          activeCodeFileBlockId: n
        };
      }));
    },
    updateCodeFileBlockContent: (t, r, a) => {
      e(immerProduceCore.produce(e => {
        let {
          blockArtifactMetaMap: o
        } = e;
        if (!t || !o[t]) {
          return;
        }
        let n = o[t].codeFileBlockList.find(e => {
          return e.artifactMeta.code?.path === r;
        });
        if (n) {
          n.artifactMeta.code.content = a;
        }
      }));
    },
    getBlockArtifactMetaMap: () => t().blockArtifactMetaMap,
    setEndBlockArtifactMeta: t => {
      e(immerProduceCore.produce(e => {
        let {
          blockArtifactMetaMap: r
        } = e;
        if (!r[t]) {
          return;
        }
        r[t].isStreaming = false;
        let {
          codeFileBlockList: a
        } = r[t];
        let o = a.map(e => {
          let t = deepCloneWrapper_1.deepClone(e.artifactMeta);
          artifactMetaUtils.ArtifactStreamUtil.endStreaming([t]);
          return {
            ...e,
            artifactMeta: t
          };
        });
        r[t] = {
          ...r[t],
          codeFileBlockList: o
        };
      }));
    },
    updateBlockArtifactAutoOpenCanvas: (t, r) => {
      e(immerProduceCore.produce(e => {
        e.blockArtifactAutoOpenCanvasMap = {
          ...e.blockArtifactAutoOpenCanvasMap,
          [t]: r
        };
      }));
    },
    updateProcessBlockMeta: (t, r) => {
      e(immerProduceCore.produce(e => {
        e.processBlockMetaMap[t] = r;
      }));
    },
    clearBlockArtifactRecord: t => {
      e(immerProduceCore.produce(e => {
        delete e.blockArtifactMetaMap[t];
      }));
    }
  });
  var codeAgentModeManager = require("code-agent-mode-manager") /*id: 722076*/;
  let A = {
    editorValue: {
      data: []
    },
    focused: false,
    supportedCodeFileTypes: [],
    recommendCodeBasePrompts: [],
    recommendItems: [],
    recommendOtherPrompts: [],
    recommendArtifactsItems: [],
    recommendArtifactsCategoryItems: [],
    recommendCodePromptsTemplates: [],
    githubModalVisible: false,
    loading: false,
    refKey: "",
    refInfoMap: {},
    abResults: {},
    blockArtifactMap: {},
    retainedEditorValue: undefined,
    agentMode: codeAgentModeManager.getCurrentMode(),
    blockIdMapForClarify: {},
    clarifyDebounceSavePromiseMap: {},
    isActiveChatInputCodeSkill: false
  };
  let S = e => ({
    ...A,
    updateEditorValue: t => {
      e(immerProduceCore.produce(e => {
        e.editorValue = t;
      }));
    },
    updateCurrentPromptTemplate: (t, r) => {
      e(immerProduceCore.produce(e => {
        e.currentPromptTemplate = t;
        e.currentPromptTemplateSource = r;
      }));
    },
    updateFocusedState: t => {
      e(immerProduceCore.produce(e => {
        e.focused = t;
      }));
    },
    fetchRecommendList: async () => {
      try {
        e(immerProduceCore.produce(e => {
          e.loading = true;
          e.recommendArtifactsItems = [];
          e.recommendArtifactsCategoryItems = [];
          e.recommendCodeBasePrompts = [];
          e.recommendOtherPrompts = [];
        }));
        let {
          data: t
        } = await apiServicesCollection.SamanthaApiService.SkillPack({
          skill_type: chatAppEnums.SkillType.CodeAssistant,
          condition: {
            code_assistant_condition: {}
          }
        });
        e(immerProduceCore.produce(e => {
          if (t) {
            e.loading = false;
          }
          if (t == null ? undefined : t.code_assistant?.codebase_items) {
            e.recommendCodeBasePrompts = t == null ? undefined : t.code_assistant?.codebase_items;
          }
          if (t == null ? undefined : t.code_assistant?.query_items) {
            e.recommendOtherPrompts = t == null ? undefined : t.code_assistant?.query_items;
          }
          if (t == null ? undefined : t.code_assistant?.data) {
            try {
              let r = JSON.parse(t.code_assistant.data);
              e.recommendCodeBasePrompts = r.codebase_templates.codebase_items;
              e.recommendItems = r.recommendations.recommendation_items;
              e.recommendArtifactsCategoryItems = r.artifacts_category_templates.artifacts_category_items;
              e.recommendOtherPrompts = [];
            } catch (e) {}
          }
          if (t == null ? undefined : t.code_assistant?.template) {
            try {
              let r = JSON.parse(t.code_assistant.template);
              e.recommendCodePromptsTemplates = r.prompt_list;
            } catch (e) {}
          }
        }));
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.warning({
          eventName: "init_code_recommend_error",
          error: e
        });
      }
    },
    toggleGithubModalVisible: function (t, r = undefined) {
      e(immerProduceCore.produce(e => {
        e.githubModalVisible = t;
        if (r) {
          e.githubModalEnterMethod = r;
        }
      }));
    },
    updateRefRangeInfo: (t, r) => {
      e(immerProduceCore.produce(e => {
        e.refKey = t;
        e.refInfoMap = {
          [t]: {
            ...e.refInfoMap[t],
            ...r
          }
        };
      }));
    },
    clearRefRangeInfo: () => {
      e(immerProduceCore.produce(e => {
        e.refInfoMap = {
          [e.refKey]: {
            ...e.refInfoMap[e.refKey],
            rangeStart: undefined,
            rangeEnd: undefined
          }
        };
      }));
    },
    updateAbResults: t => {
      e(immerProduceCore.produce(e => {
        e.abResults = {
          ...e.abResults,
          ...t
        };
      }));
    },
    updateBlockArtifact: t => {
      let {
        type: r,
        blockId: a,
        value: o
      } = t;
      e(immerProduceCore.produce(e => {
        let {
          blockArtifactMap: t
        } = e;
        t ||= {};
        if (r === skillActionConstants.ArtifactKeys.Status) {
          t[a] = {
            ...t[a],
            status: o
          };
        } else {
          t[a] = {
            ...t[a],
            data: o
          };
        }
      }));
    },
    setRetainedData: t => {
      e(immerProduceCore.produce(e => {
        if (t == null ? undefined : t.retainedEditorValue) {
          e.retainedEditorValue = t == null ? undefined : t.retainedEditorValue;
        }
      }));
    },
    updateAgentMode: t => {
      e(immerProduceCore.produce(e => {
        e.agentMode = t;
      }));
      codeAgentModeManager.modeManager.setMode(t);
    },
    setActiveChatInputCodeSkill: t => {
      e(immerProduceCore.produce(e => {
        e.isActiveChatInputCodeSkill = t == null || t;
      }));
    },
    addBlockIdMapForClarify: (t, r) => {
      e(immerProduceCore.produce(e => {
        e.blockIdMapForClarify[t] = r;
      }));
    },
    updateClarifyDebounceSaveInvokeMap: (t, r) => {
      e(immerProduceCore.produce(e => {
        if (r) {
          e.clarifyDebounceSavePromiseMap[t] = r;
        } else {
          delete e.clarifyDebounceSavePromiseMap[t];
        }
      }));
    }
  });
  let g = e => {
    try {
      return {
        previewedCount: e.previewedCount,
        retainedEditorValue: e.retainedEditorValue,
        launchSubmitChecked: e.launchSubmitChecked
      };
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        message: "[@Coding-skill-store] persist state limit error",
        error: e instanceof Error ? e : Error(String(e))
      });
      return {};
    }
  };
  let C = reduxPersistStoreFactory.createPersistStore({
    id: Symbol("coding-skill-store"),
    createSlice: function () {
      var e = arguments.length;
      var t = Array(e);
      var r = 0;
      for (; r < e; r++) {
        t[r] = arguments[r];
      }
      return throttledDeepCloneUtil.throttledDeepClone(S(...t), u(...t), _(...t), f(...t));
    },
    getPersistStorageOptions: () => storagePersistenceUtil.createPersistOptions({
      name: "coding-skill-store",
      prefix: "samantha-web",
      partialize: g,
      version: 1.5
    })
  });
  require.d(exports, {
    codingSkillStore: function () {
      return C;
    }
  });
}