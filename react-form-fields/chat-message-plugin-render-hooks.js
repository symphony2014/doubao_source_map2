// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Po' to 'useReceiveBoxLeftPlugin'
// - Renamed export 'SQ' to 'useReceiveContentBlockThreadShare'
// - Renamed export 'aP' to 'useReceiveBoxRightPlugin'
// - Renamed export 'dN' to 'useReceiveBoxTopPlugin'
// - Renamed export 'ff' to 'useReceiveBoxBottomPlugin'
// - Renamed export 'lE' to 'useReceiveContentBlock'
// - Renamed export 'mD' to 'useReceiveBoxThreadShare'
// - Renamed export 'ob' to 'useReceiveBoxPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 781098
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var chatPluginMatcherRegistry = require("chat-plugin-matcher-registry") /*id: 107672*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var infraStringFilter = require("infra-string-filter") /*id: 435337*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      pluginIdentifier: t,
      contentBlock: n,
      pluginLoadCounter: i,
      duplicateIdentifierList: s,
      ...c
    } = e;
    let {
      plugin: u,
      loading: p,
      error: f
    } = chatPluginIocManager.contentBlockPluginHook(t);
    let h = reactCoreLibraryReexport.useMemo(() => uuidGeneratorUtil.generateUuid(), [t]);
    reactCoreLibraryReexport.useEffect(() => {
      if (i != null) {
        i(h, p);
      }
    }, [p]);
    reactCoreLibraryReexport.useEffect(() => {
      if (i != null) {
        i(h, p);
      }
      return () => {
        if (i != null) {
          i(h, false);
        }
      };
    }, [h]);
    if (f) {
      throw f;
    }
    if (p) {
      return null;
    }
    if (s.length > 1) {
      let e = Error(`${s.join(", ")}`);
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "duplicate_matcher_of_receive_message_block",
        error: e
      });
    }
    if (u) {
      return reactJsxRuntimeCoreReexport.jsx(u.Content, {
        contentBlock: n,
        ...c
      }, n.id);
    } else {
      return null;
    }
  };
  let p = e => {
    let {
      pluginIdentifier: t,
      contentBlock: n,
      pluginLoadCounter: i,
      duplicateIdentifierList: s,
      ...c
    } = e;
    let {
      plugin: u,
      loading: p,
      error: f
    } = chatPluginIocManager.contentBlockPluginHook(t, "THREAD_SHARE");
    let h = reactCoreLibraryReexport.useMemo(() => uuidGeneratorUtil.generateUuid(), [t]);
    reactCoreLibraryReexport.useEffect(() => {
      if (i != null) {
        i(h, p);
      }
    }, [p]);
    reactCoreLibraryReexport.useEffect(() => {
      if (i != null) {
        i(h, p);
      }
      return () => {
        if (i != null) {
          i(h, false);
        }
      };
    }, [h]);
    if (f) {
      throw f;
    }
    if (p) {
      return null;
    }
    if (s.length > 1) {
      let e = Error(`${s.join(", ")}`);
      loggerServiceCore.defaultLogger.persist.warning({
        eventName: "duplicate_matcher_of_receive_message_block",
        error: e
      });
    }
    if (u) {
      return reactJsxRuntimeCoreReexport.jsx(u.Content, {
        contentBlock: n,
        ...c
      }, n.id);
    } else {
      return null;
    }
  };
  let f = (e, t) => {
    let {
      matcher: n
    } = chatPluginMatcherRegistry.useReceiveContentBlockMatcher();
    return {
      contentBlockRenderConfigs: e.filter(t).map(e => {
        var t;
        let r = n == null ? undefined : (t = n.filter(t => {
          return t.matchContentBlock(e.block_type, {
            resourceType: e.content_obj?.resource_type
          });
        })) === null || t === undefined ? undefined : t.map(e => e.pluginIdentifier);
        if (r == null ? undefined : r.length) {
          return {
            block: e,
            pluginIdentifier: r[0],
            duplicateIdentifierList: r
          };
        }
      }).filter(e => !!e).map(e => ({
        block: e.block,
        pluginIdentifier: e.pluginIdentifier,
        PluginContentRender: u,
        duplicateIdentifierList: e.duplicateIdentifierList
      }))
    };
  };
  let h = (e, t) => {
    let {
      matcher: n
    } = chatPluginMatcherRegistry.useReceiveContentBlockMatcher("THREAD_SHARE");
    return {
      contentBlockRenderConfigs: e.filter(t).map(e => {
        var t;
        let r = n == null ? undefined : (t = n.filter(t => {
          return t.matchContentBlock(e.block_type, {
            resourceType: e.content_obj?.resource_type
          });
        })) === null || t === undefined ? undefined : t.map(e => e.pluginIdentifier);
        if (r) {
          return {
            block: e,
            pluginIdentifier: r[0],
            duplicateIdentifierList: r
          };
        }
      }).filter(e => !!e).map(e => ({
        block: e.block,
        pluginIdentifier: e.pluginIdentifier,
        PluginContentRender: p,
        duplicateIdentifierList: e.duplicateIdentifierList
      }))
    };
  };
  let m = function (e = []) {
    return f(e, e => e.block_type !== aiAssistantSkillTypes.SamanthaTypes.SamanthaSuggest);
  };
  let v = function (e = []) {
    return h(e, e => e.block_type !== aiAssistantSkillTypes.SamanthaTypes.SamanthaSuggest);
  };
  let g = e => {
    let {
      matcher: t
    } = chatPluginMatcherRegistry.useReceiveBoxMatcher();
    let n = (t ?? []).map(t => t.matchPlugin(e) ? t.pluginIdentifier : undefined).filter(e => e !== undefined);
    let i = n[0];
    let l = reactCoreLibraryReexport.useMemo(() => uuidGeneratorUtil.generateUuid(), [i]);
    let d = infraStringFilter.filterInfraStrings(n);
    let {
      plugin: u,
      loading: p,
      error: f
    } = chatPluginIocManager.receiveMsgBoxHook(i ?? "");
    if (f) {
      throw f;
    }
    return {
      pluginLoadId: l,
      plugin: u,
      pluginIdentifier: i,
      loading: p,
      duplicateIdentifierList: d
    };
  };
  let b = e => {
    let {
      matcher: t
    } = chatPluginMatcherRegistry.useReceiveBoxMatcher("THREAD_SHARE");
    let n = (t ?? []).map(t => t.matchPlugin(e) ? t.pluginIdentifier : undefined).filter(e => e !== undefined);
    let i = n[0];
    let l = reactCoreLibraryReexport.useMemo(() => uuidGeneratorUtil.generateUuid(), [i]);
    let d = infraStringFilter.filterInfraStrings(n);
    let {
      plugin: u,
      loading: p,
      error: f
    } = chatPluginIocManager.receiveMsgBoxHook(i ?? "", "THREAD_SHARE");
    if (f) {
      throw f;
    }
    return {
      pluginLoadId: l,
      plugin: u,
      pluginIdentifier: i,
      loading: p,
      duplicateIdentifierList: d
    };
  };
  let y = e => {
    let {
      matcher: t = []
    } = chatPluginMatcherRegistry.useReceiveBoxBottomMatcher();
    let n = (t ?? []).map(t => t.matchPlugin(e) ? t.pluginIdentifier : undefined).filter(e => e !== undefined);
    let r = n[0];
    let o = infraStringFilter.filterInfraStrings(n);
    let {
      plugin: i,
      loading: l
    } = chatPluginIocManager.receiveMsgBoxBottomHook(r);
    return {
      plugin: i,
      pluginIdentifier: r,
      loading: l,
      duplicateIdentifierList: o
    };
  };
  let _ = e => {
    let {
      matcher: t = []
    } = chatPluginMatcherRegistry.useReceiveBoxTopMatcher();
    let n = (t ?? []).map(t => t.matchPlugin(e) ? t.pluginIdentifier : undefined).filter(e => e !== undefined);
    let r = n[0];
    let o = infraStringFilter.filterInfraStrings(n);
    let {
      plugin: i,
      loading: l
    } = chatPluginIocManager.receiveMsgBoxTopHook(r);
    return {
      plugin: i,
      pluginIdentifier: r,
      loading: l,
      duplicateIdentifierList: o
    };
  };
  let x = e => {
    let {
      matcher: t = []
    } = chatPluginMatcherRegistry.useReceiveBoxLeftMatcher();
    let n = (t ?? []).map(t => t.matchPlugin(e) ? t.pluginIdentifier : undefined).filter(e => e !== undefined);
    let r = n[0];
    let o = infraStringFilter.filterInfraStrings(n);
    let {
      plugin: i,
      loading: l
    } = chatPluginIocManager.receiveMsgBoxLeftHook(r);
    return {
      plugin: i,
      pluginIdentifier: r,
      loading: l,
      duplicateIdentifierList: o
    };
  };
  let w = e => {
    let {
      matcher: t = []
    } = chatPluginMatcherRegistry.useReceiveBoxRightMatcher();
    let n = (t ?? []).map(t => t.matchPlugin(e) ? t.pluginIdentifier : undefined).filter(e => e !== undefined);
    let r = n[0];
    let o = infraStringFilter.filterInfraStrings(n);
    let {
      plugin: i,
      loading: l
    } = chatPluginIocManager.receiveMsgBoxRightHook(r);
    return {
      plugin: i,
      pluginIdentifier: r,
      loading: l,
      duplicateIdentifierList: o
    };
  };
  require.d(exports, {
    useReceiveBoxLeftPlugin: function () {
      return x;
    },
    useReceiveContentBlockThreadShare: function () {
      return v;
    },
    useReceiveBoxRightPlugin: function () {
      return w;
    },
    useReceiveBoxTopPlugin: function () {
      return _;
    },
    useReceiveBoxBottomPlugin: function () {
      return y;
    },
    useReceiveContentBlock: function () {
      return m;
    },
    useReceiveBoxThreadShare: function () {
      return b;
    },
    useReceiveBoxPlugin: function () {
      return g;
    }
  });
}