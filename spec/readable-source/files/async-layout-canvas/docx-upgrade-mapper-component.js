// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'DocXUpgradeMapper'
// - Renamed export 'w' to 'DocXUpgradeMapperWithStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 877402
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var docSkeletonPanel = require("doc-skeleton-panel") /*id: 779323*/;
  var chatSkillInputConstants = require("chat-skill-input-constants") /*id: 697792*/;
  var writingSkillStore = require("writing-skill-store") /*id: 704044*/;
  var docUpgradeStatusHook = require("doc-upgrade-status-hook") /*id: 439440*/;
  var documentNavigationAndCreationUtils = require("document-navigation-and-creation-utils") /*id: 491592*/;
  var documentUpgradeAndCreationUtils = require("document-upgrade-and-creation-utils") /*id: 24188*/;
  let p = e => {
    let {
      docId: t,
      conversationId: a,
      disabled: r = false,
      onlyUpgraded: o = false,
      skip: n = false
    } = e;
    let l = () => !r && !!t;
    let [p, u] = reactCoreLibraryReexport.useState();
    let [m, g] = reactCoreLibraryReexport.useState(null);
    let [k, h] = reactCoreLibraryReexport.useState(l());
    let y = async () => {
      if (l() && t) {
        if (n) {
          u({
            status: chatSkillInputConstants.PageUpgradeStatus.NotUpgrade
          });
          return;
        }
        if (documentNavigationAndCreationUtils.isFusionDocResource({
          key: t
        })) {
          u({
            status: chatSkillInputConstants.PageUpgradeStatus.Upgraded,
            newDocId: t
          });
          h(false);
          return;
        }
        try {
          h(true);
          let e = await documentUpgradeAndCreationUtils.createBlankDocument({
            docId: t,
            conversationId: a,
            safe: true
          });
          g(e);
          if (e === chatSkillInputConstants.PageUpgradeStatus.NotUpgrade) {
            u({
              status: e
            });
            return;
          }
          if (e === chatSkillInputConstants.PageUpgradeStatus.Init && o) {
            u({
              status: chatSkillInputConstants.PageUpgradeStatus.NotUpgrade
            });
            return;
          }
          let i = await documentUpgradeAndCreationUtils.upgradeDocument({
            docId: t,
            conversationId: a
          });
          u(i);
        } finally {
          h(false);
        }
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      y();
    }, [t, r, n]);
    return {
      loading: k,
      initialStatus: m,
      upgradedData: p
    };
  };
  var businessSkillEnums = require("business-skill-enums") /*id: 594084*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var chatArtifactRetrievalUtils = require("chat-artifact-retrieval-utils") /*id: 522271*/;
  var artifactLayoutConstants = require("artifact-layout-constants") /*id: 554108*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var asyncBusinessLayout_2 = require("async-business-layout_2") /*id: 878823*/;
  let v = e => {
    let {
      type: t,
      conversationId: a,
      artifactId: i,
      artifactKey: o = "",
      disabled: s
    } = e;
    let {
      artifacts: n = [],
      loading: l
    } = chatArtifactRetrievalUtils.useSkillPinCallback({
      conversationId: a,
      artifactKey: o,
      artifactId: i
    });
    return {
      loading: l,
      data: functionInvoker.invoke(() => {
        if (s) {
          return;
        }
        if (t === asyncBusinessLayout_2.ResourceType.StepWritingPages) {
          return {
            docId: i,
            isLatest: true
          };
        }
        let l = n.find(e => !!o && e.artifact_key === o);
        if (t === asyncBusinessLayout_2.ResourceType.Pages) {
          let a = Math.max(...n.filter(e => e.resource_type === t).map(e => infraUtilFunctions.parseNumber(e.version)).filter(isNumberUtil.isNumber));
          return {
            docId: (l == null ? undefined : l.resource_id) ?? "",
            isLatest: (l == null ? undefined : l.version) === a
          };
        }
        if (collectionIncludesUtil.includes([asyncBusinessLayout_2.ResourceType.CanvasPages, asyncBusinessLayout_2.ResourceType.DocxPage, asyncBusinessLayout_2.ResourceType.StepWritingOtterPage, asyncBusinessLayout_2.ResourceType.StepDocxPage], t)) {
          return {
            docId: (l == null ? undefined : l.resource_id) ?? "",
            isLatest: (l == null ? undefined : l.version) === artifactLayoutConstants.subResourceIndex
          };
        }
      })
    };
  };
  var chatCanvasLayout = require("chat-canvas-layout") /*id: 370373*/;
  var canvasErrorPanelComponent = require("canvas-error-panel-component") /*id: 248870*/;
  var chatMessageCheckUtil = require("chat-message-check-util") /*id: 375719*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let j = e => {
    let {
      type: t,
      conversationId: a,
      messageId: o,
      artifactId: l,
      artifactKey: c,
      disabled: d = false,
      onlyMapUpgraded: u,
      onlyCheckLatest: g = false,
      renderLegacyEditor: k,
      renderDocXEditor: h,
      renderError: y,
      renderLoading: f
    } = e;
    let x = chatMessageCheckUtil.checkChatMessage({
      conversationId: a,
      messageId: o
    });
    let j = d || x;
    let {
      data: M,
      loading: R
    } = v({
      type: t,
      conversationId: a,
      artifactId: l,
      artifactKey: c,
      disabled: j
    });
    let {
      upgradedData: C,
      initialStatus: T,
      loading: I = false
    } = p({
      docId: M == null ? undefined : M.docId,
      conversationId: a,
      disabled: j || !M,
      onlyUpgraded: u,
      skip: !!g && !(M == null ? undefined : M.isLatest)
    });
    let E = collectionIncludesUtil.includes([chatSkillInputConstants.PageUpgradeStatus.Init, chatSkillInputConstants.PageUpgradeStatus.Upgrading], T);
    reactCoreLibraryReexport.useEffect(() => {
      if (C && M && C.status === chatSkillInputConstants.PageUpgradeStatus.Upgraded && C.newDocId) {
        let {
          setLegacyDocIdMapping: e
        } = writingSkillStore.writingSkillStore.getState();
        e(M.docId, C.newDocId);
      }
    }, [C, M]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!j) {
        loggerServiceCore.defaultLogger.persist.log({
          eventName: "doc_canvas_legacy_doc_show",
          meta: {
            artifact_key: c
          }
        });
      }
    }, [j]);
    let N = e => {
      let {
        source: t
      } = e;
      if (y) {
        return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: y(e)
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx(canvasErrorPanelComponent.CanvasErrorPanel, {
          source: t
        });
      }
    };
    let A = () => f ? reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: f()
    }) : reactJsxRuntimeCoreReexport.jsx(chatCanvasLayout.ChatCanvasLayout, {
      delay: true
    });
    if (j) {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: k({
          isHistoryMode: true,
          isUpgrading: false
        })
      });
    }
    if (!M) {
      if (R) {
        return A();
      } else {
        return N({
          source: "DocXUpgradeMapper_invalid_doc_detail"
        });
      }
    }
    if (I || !C) {
      return A();
    }
    let $ = collectionIncludesUtil.includes([chatSkillInputConstants.PageUpgradeStatus.Init, chatSkillInputConstants.PageUpgradeStatus.Upgrading], C == null ? undefined : C.status);
    let {
      isLatest: F
    } = M;
    if (I || !C || $) {
      if (E) {
        return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: k({
            isHistoryMode: !F,
            isUpgrading: E
          })
        });
      } else {
        return A();
      }
    }
    let {
      status: P,
      newDocId: W,
      artifactVersionId: D
    } = C;
    if (P === chatSkillInputConstants.PageUpgradeStatus.UpgradeFailed) {
      return N({
        source: "DocXUpgradeMapper_upgrade_failed"
      });
    } else if (P !== chatSkillInputConstants.PageUpgradeStatus.NotUpgrade && F) {
      if (P === chatSkillInputConstants.PageUpgradeStatus.Upgraded && W) {
        return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: h({
            docId: W,
            versionId: D
          })
        });
      } else {
        return N({
          source: "DocXUpgradeMapper_invalid_status"
        });
      }
    } else {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: k({
          isHistoryMode: !F,
          isUpgrading: false
        })
      });
    }
  };
  let M = e => {
    let {
      type: t,
      conversationId: a,
      messageId: i,
      artifactId: r,
      artifactKey: s,
      resourceId: n,
      disabled: c = false,
      onlyMapUpgraded: d,
      onlyCheckLatest: p = false,
      renderLegacyEditor: m,
      renderDocXEditor: g,
      renderError: k,
      renderLoading: h
    } = e;
    let {
      data: y,
      loading: f
    } = docUpgradeStatusHook.useDocUpgradeStatus({
      docId: n ?? ""
    });
    let x = chatMessageCheckUtil.checkChatMessage({
      conversationId: a,
      messageId: i
    });
    let {
      loading: _
    } = v({
      type: t,
      conversationId: a,
      artifactId: r,
      artifactKey: s,
      disabled: c || x
    });
    if (y && y.upgradeStatus === businessSkillEnums.TaskStatus.Succeeded && y.dstPageId) {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: g({
          docId: y.dstPageId,
          versionId: ""
        })
      });
    } else if (f || _) {
      return reactJsxRuntimeCoreReexport.jsx(docSkeletonPanel.DocSkeletonPanel, {});
    } else {
      return reactJsxRuntimeCoreReexport.jsx(j, {
        type: t,
        conversationId: a,
        messageId: i,
        artifactId: r,
        artifactKey: s,
        disabled: c,
        onlyMapUpgraded: d,
        onlyCheckLatest: p,
        renderLegacyEditor: m,
        renderDocXEditor: g,
        renderError: k,
        renderLoading: h
      });
    }
  };
  require.d(exports, {
    DocXUpgradeMapper: function () {
      return j;
    },
    DocXUpgradeMapperWithStatus: function () {
      return M;
    }
  });
}