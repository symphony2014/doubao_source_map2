// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'useSuperTaskConfig'
// - Renamed export 'r' to 'useClaudeFeatureFlag'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 700903
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var superTaskStore = require("super-task-store") /*id: 654619*/;
  var docPageChecker = require("doc-page-checker") /*id: 912796*/;
  let h = "super-task-config-key";
  let m = () => safeJsonUtils.safeParse(storageWrapperWithFallback.LocalStorageWrapper.getItem(h), undefined);
  let g = e => {
    storageWrapperWithFallback.LocalStorageWrapper.setItem(h, e ? safeJsonUtils.safeStringify(e) : "");
  };
  let f = onceFunctionFactory.createOnce(() => {
    let e = e => {
      let {
        taskAbConfig: t,
        setSuperTaskAbConfig: n
      } = superTaskStore.superTaskStore.getState();
      let i = m();
      if (!deepEqualUtil_1.deepEqual(t, i)) {
        if (isEmptyUtil.isEmpty(t)) {
          if (e && i && !isEmptyUtil.isEmpty(i)) {
            n(i);
          }
        } else {
          g(t);
        }
      }
    };
    e(true);
    superTaskStore.superTaskStore.subscribe((t, n) => {
      if (t.taskAbConfig !== n.taskAbConfig && !deepEqualUtil_1.deepEqual(t.taskAbConfig, n.taskAbConfig)) {
        e(false);
      }
    });
  });
  let p = () => {
    let {
      taskAbConfig: e
    } = superTaskStore.superTaskStore(e => ({
      taskAbConfig: e.taskAbConfig
    }));
    let t = reactCoreLibraryReexport.useMemo(() => m(), []);
    reactCoreLibraryReexport.useEffect(() => {
      f();
    }, []);
    let n = isEmptyUtil.isEmpty(e) ? t : e;
    let r = !docPageChecker.isDocPage() && !!(n == null ? undefined : n.enable);
    let o = !!(n == null ? undefined : n.enable_sidebar_complex_task);
    let s = !!(n == null ? undefined : n.enable_skill_bar);
    let {
      guidanceGenericInputMode: u
    } = chatLauncherConfigHooks.useLauncherConfig();
    let h = [chatLauncherConfigHooks.inputModeConstants.ActionBarWithSingleLine, chatLauncherConfigHooks.inputModeConstants.InlineExpandSkillbar].includes(u);
    reactCoreLibraryReexport.useEffect(() => {
      if (r && h && !o) {
        superTaskStore.superTaskStore.setState({
          taskAbConfig: {
            ...e,
            enable_sidebar_complex_task: true
          }
        });
      }
    }, [r, o, h]);
    return {
      enabled: r,
      loading: !n,
      enableClaude: !!(n == null ? undefined : n.route_flowpc),
      enableSuperTaskInputMode: r && !o && !h && !s,
      enableSuperTaskSideBarMode: r && o,
      enableSkillBarMode: r && s
    };
  };
  let _ = () => {
    let e = p();
    return {
      loading: e.loading,
      value: e.enableClaude
    };
  };
  require.d(exports, {
    useSuperTaskConfig: function () {
      return p;
    },
    useClaudeFeatureFlag: function () {
      return _;
    }
  });
}