// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'sq' to 'useDeepThinkUi'
// - Renamed export 'we' to 'useDeepThinkRef'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 470286
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  let a = () => {
    let [e, t] = reactCoreLibraryReexport.useState(() => {
      let e = chatStoreManager.getStore("deepThinkingControlStore");
      return !("persist" in e) || !!e.persist.hasHydrated();
    });
    reactCoreLibraryReexport.useEffect(() => {
      let e = chatStoreManager.getStore("deepThinkingControlStore");
      if ("persist" in e && !e.persist.hasHydrated()) {
        e.persist.onFinishHydration(() => t(true));
        return;
      }
      t(true);
    }, []);
    return e;
  };
  let l = e => {
    let {
      scene: t,
      activeSkillType: n
    } = e;
    let i = chatStoreManager.useStoreSelector("deepThinkingControlStore", e => e.uiPortalTarget);
    let {
      guidanceGenericInputMode: a,
      guidanceSkillActiveInputMode: l,
      inputAggregateList: s
    } = chatLauncherConfigHooks.useLauncherConfig();
    let u = (t === "bottom_bar" || t === "landing") && !!(n ? l : a);
    let c = !n && a === chatLauncherConfigHooks.inputModeConstants.ActionBarWithSingleLine;
    if (!i) {
      return {
        newActiveSkill: u,
        asActionBarItem: c
      };
    }
    let d = i && !n && !(s == null ? undefined : s.includes("generic")) && a === chatLauncherConfigHooks.inputModeConstants.ActionBarWithSingleLine;
    return {
      newActiveSkill: u,
      portalTarget: i,
      needPortal: d,
      asActionBarItem: c
    };
  };
  let s = () => {
    let e = a();
    return {
      targetRef: reactCoreLibraryReexport.useCallback(t => {
        if (e) {
          chatStoreManager.getStore("deepThinkingControlStore").setState({
            uiPortalTarget: t || undefined
          });
        }
      }, [e]),
      mounted: chatStoreManager.useStoreSelector("deepThinkingControlStore", e => e.uiHasDeepThinkBtn)
    };
  };
  require.d(exports, {
    useDeepThinkUi: function () {
      return l;
    },
    useDeepThinkRef: function () {
      return s;
    }
  });
}