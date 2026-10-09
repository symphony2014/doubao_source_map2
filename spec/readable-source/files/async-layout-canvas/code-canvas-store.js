// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'CodeCanvasProvider'
// - Renamed export 'j7' to 'useCodeCanvasStore'
// - Renamed export 'gt' to 'useCanvasSelector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 355082
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactStoreHookFactory = require("react-store-hook-factory") /*id: 65636*/;
  var throttledDeepCloneUtil_2 = require("throttled-deep-clone-util_2") /*id: 739988*/;
  var immerStateWrapperUtil = require("immer-state-wrapper-util") /*id: 38922*/;
  var reduxDevtoolsPersistIntegration = require("redux-devtools-persist-integration") /*id: 383133*/;
  let l = e => {
    let t = {
      themeMode: "light",
      openTimestamp: Date.now(),
      readonly: false,
      activeTab: "",
      showAside: false,
      showPanel: false,
      panelHeight: 200,
      panelMinHeight: 0,
      panelMaxHeight: 250
    };
    return a => ({
      ...t,
      ...e,
      setThemeMode: e => {
        a(t => {
          t.window.themeMode = e;
        });
      },
      setReadOnly: e => a(t => {
        t.window.readonly = e;
      }),
      setActiveTab: e => a(t => {
        t.window.activeTab = e;
      }),
      setShowAside: e => {
        a(t => {
          t.window.showAside = e;
        });
      },
      setAsideCollapsed: e => {
        a(t => {
          t.window.asideCollapsed = e;
        });
      },
      toggleAsideCollapsed: () => {
        a(e => {
          e.window.asideCollapsed = !e.window.asideCollapsed;
        });
      },
      setShowPanel: e => {
        a(t => {
          t.window.showPanel = e;
        });
      },
      setPanelCollapsed: e => {
        a(t => {
          t.window.panelCollapsed = e;
        });
      },
      setPanelHeight: e => {
        a(t => {
          t.window.panelHeight = e;
        });
      },
      setPanelMinHeight: e => {
        a(t => {
          t.window.panelMinHeight = e;
        });
      },
      setPanelMaxHeight: e => {
        a(t => {
          t.window.panelMaxHeight = e;
        });
      }
    });
  };
  var layoutCanvasArtifactUtils = require("layout-canvas-artifact-utils") /*id: 997557*/;
  var asyncLayoutCanvasEnums = require("async-layout-canvas-enums") /*id: 414846*/;
  let p = e => {
    let t = {
      conversationId: "",
      messageId: "",
      artifactId: "",
      artifactKey: "",
      artifactMetaList: [],
      activeFilePath: "",
      isFollowingStreaming: false,
      isRunning: false,
      isLogTruncated: false,
      showShareEntry: false,
      runCodeLogs: [],
      files: [],
      workingFiles: [],
      htmlReviewedImages: {},
      canvasSubTypeParams: {},
      errorDescription: "",
      abResults: {},
      layoutType: asyncLayoutCanvasEnums.DeviceType.Default,
      isPreviewMd: true,
      designStyleTemplates: []
    };
    return (a, i) => ({
      ...t,
      ...e,
      setArtifactKey: e => a(t => {
        t.artifacts.artifactKey = e;
      }),
      addArtifactMetaList: e => {
        a(t => {
          t.artifacts.artifactMetaList = layoutCanvasArtifactUtils.mergeArtifactLists(t.artifacts.artifactMetaList, layoutCanvasArtifactUtils.normalizeArtifacts(e));
        });
      },
      removeArtifactMetaList: function (e) {
        let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        a(a => {
          let i = a.artifacts.artifactMetaList.filter(t => t.artifactKey && !e.includes(t.artifactKey));
          let r = a.artifacts.artifactMetaList.filter(t => {
            return t.artifactKey && e.includes(t.artifactKey) && t.code?.node_id === "root";
          });
          if (t) {
            a.artifacts.artifactMetaList = i;
          } else {
            a.artifacts.artifactMetaList = i.concat(r);
          }
        });
      },
      getArtifactMetaList: () => i().artifacts.artifactMetaList,
      setActiveFilePath: e => a(t => {
        t.artifacts.activeFilePath = e;
      }),
      setIsFollowingStreaming: e => a(t => {
        t.artifacts.isFollowingStreaming = e;
      }),
      setIsRunning: e => a(t => {
        t.artifacts.isRunning = e;
      }),
      setRunCodeLogs: e => a(t => {
        t.artifacts.runCodeLogs = e;
      }),
      setRunCodeError: e => a(t => {
        t.artifacts.runCodeError = e;
      }),
      setIsLogTruncated: e => a(t => {
        t.artifacts.isLogTruncated = e;
      }),
      setAutoRun: e => a(t => {
        t.artifacts.autoRun = e;
      }),
      setIsComparing: e => a(t => {
        t.artifacts.isComparing = e;
      }),
      setIsComparingWorkspace: e => a(t => {
        t.artifacts.isComparingWorkspace = e;
      }),
      setCompareOriginalFile: e => a(t => {
        t.artifacts.compareOriginalFile = e;
      }),
      setCompareModifiedFile: e => a(t => {
        t.artifacts.compareModifiedFile = e;
      }),
      addFile: e => {
        a(t => {
          let a = t.artifacts.files.find(t => t.uri === e.uri);
          if (a) {
            a.content = e.content;
          } else {
            t.artifacts.files.push(e);
          }
        });
      },
      removeFile: e => {
        a(t => {
          t.artifacts.files = t.artifacts.files.filter(t => t.uri !== e.uri);
        });
      },
      setFiles: e => {
        a(t => {
          t.artifacts.files = e;
        });
      },
      addWorkingFile: e => {
        a(t => {
          let a = t.artifacts.workingFiles.find(t => t.artifactKey === e.artifactKey && t.filePath === e.filePath);
          if (a) {
            a.content = e.content;
          } else {
            t.artifacts.workingFiles.push(e);
          }
        });
      },
      removeWorkingFile: e => {
        a(t => {
          t.artifacts.workingFiles = t.artifacts.workingFiles.filter(t => t.artifactKey !== e.artifactKey || t.filePath !== e.filePath);
        });
      },
      setWorkingFiles: e => {
        a(t => {
          t.artifacts.workingFiles = e;
        });
      },
      updateReviewedImages: e => {
        a(t => {
          t.artifacts.htmlReviewedImages = {
            ...t.artifacts.htmlReviewedImages,
            ...e
          };
        });
      },
      setIsHtmlEditing: e => a(t => {
        t.artifacts.isHtmlEditing = e;
      }),
      setCanvasSubTypeParams: e => {
        a(t => {
          t.artifacts.canvasSubTypeParams = e;
        });
      },
      setErrorDescription: e => a(t => {
        t.artifacts.errorDescription = e;
      }),
      setAbResults: e => {
        a(t => {
          t.artifacts.abResults = e;
        });
      },
      setLayoutType: e => {
        a(t => {
          t.artifacts.layoutType = e;
        });
      },
      setIsPreviewMd(e) {
        a(t => {
          t.artifacts.isPreviewMd = e;
        });
      },
      setDesignStyleTemplates: e => {
        a(t => {
          t.artifacts.designStyleTemplates = e;
        });
      }
    });
  };
  let u = e => reactStoreHookFactory.createStoreHook()(reduxDevtoolsPersistIntegration.withDevTools(immerStateWrapperUtil.immerStateWrapper(function () {
    var t = arguments.length;
    var a = Array(t);
    var i = 0;
    for (; i < t; i++) {
      a[i] = arguments[i];
    }
    return {
      window: l(e == null ? undefined : e.window)(...a),
      artifacts: p(e == null ? undefined : e.artifacts)(...a)
    };
  }), {
    name: "code-canvas-store"
  }));
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let g = reactCoreLibraryReexport.createContext(null);
  function k(e) {
    let {
      children: t,
      initialStates: a,
      states: r
    } = e;
    let s = reactCoreLibraryReexport.useRef();
    s.current ||= u({
      ...a,
      ...r
    });
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      if ((e = s.current) !== null && e !== undefined) {
        e.setState(e => {
          throttledDeepCloneUtil_2.throttledCloneDeep(e, r, e => {
            if (Array.isArray(e)) {
              return e;
            }
          });
        });
      }
    }, [r]);
    return reactJsxRuntimeCoreReexport.jsx(g.Provider, {
      value: s.current,
      children: t
    });
  }
  function h(e) {
    let t = reactCoreLibraryReexport.useContext(g);
    if (!t) {
      throw Error("Missing CanvasProvider in the tree");
    }
    return reactStoreHookFactory.useStoreSelector(t, e);
  }
  function y() {
    return reactCoreLibraryReexport.useContext(g);
  }
  require.d(exports, {
    CodeCanvasProvider: function () {
      return k;
    },
    useCodeCanvasStore: function () {
      return y;
    },
    useCanvasSelector: function () {
      return h;
    }
  });
}