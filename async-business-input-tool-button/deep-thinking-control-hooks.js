// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'QD' to 'useDeepThinkSwitch'
// - Renamed export 'Xy' to 'useDeepThinkEnabled'
// - Renamed export '_l' to 'useDeepThinkUiState'
// - Renamed export 'c6' to 'useDeepThinkInit'
// - Renamed export 'j4' to 'useDeepThinkTrack'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 180129
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var skillTypeMappings = require("skill-type-mappings") /*id: 361602*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  let u = () => {
    let e = userInfoStatusSelectors.selectUserInfoSuccess_1();
    let t = userInfoStatusSelectors.selectUserInfoLoading();
    let n = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (!t && !n.current) {
        n.current = true;
        chatStoreManager.getStore("deepThinkingControlStore").setState(t => t.lastTriggerLoginState !== undefined && t.deepThinkingSwitchValue ? {
          deepThinkingSwitchValue: e === t.lastTriggerLoginState
        } : {});
      }
    }, [e, t]);
  };
  let d = (e, t) => {
    let n = chatStoreManager.useStoreSelector("deepThinkingControlStore", e => e.memoDeepThinkingSwitchValue);
    reactCoreLibraryReexport.useEffect(() => {
      if (!n) {
        chatStoreManager.getStore("deepThinkingControlStore").setState({
          deepThinkingSwitchValue: false
        });
      }
    }, [t, e, n]);
  };
  let p = e => {
    let {
      activeSkillType: t
    } = e;
    let {
      run: n
    } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
      teaAnalyticsEventTracker.trackEvent("deep_thinking_switch_show", {
        skill_id: (t == null ? undefined : t.toString()) ?? null,
        skill_name: skillTypeMappings.getSkillName(t)
      });
    }, {
      leading: true,
      trailing: false,
      wait: 100
    });
    reactCoreLibraryReexport.useEffect(() => {
      let e = true;
      let t = setTimeout(() => e && n(), 200);
      return () => {
        e = false;
        return clearTimeout(t);
      };
    }, []);
    return null;
  };
  let h = () => {
    let {
      enableDeepThinkingSwitch: e
    } = chatStoreManager.useStoreSelector("deepThinkingControlStore", e => ({
      enableDeepThinkingSwitch: e.enableDeepThinkingSwitch
    }), deepEqualityUtil.deepEqual);
    return {
      enableDeepThinkingSwitch: e
    };
  };
  let f = e => {
    let {
      disabled: t
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      chatStoreManager.getStore("deepThinkingControlStore").setState({
        uiHasDeepThinkBtnDisabled: t
      });
    }, [t]);
    reactCoreLibraryReexport.useEffect(() => {
      chatStoreManager.getStore("deepThinkingControlStore").setState({
        uiHasDeepThinkBtn: true
      });
      let e = chatStoreManager.getStore("deepThinkingControlStore").subscribe((e, t) => {
        if (!e.uiHasDeepThinkBtn && t.uiHasDeepThinkBtn) {
          chatStoreManager.getStore("deepThinkingControlStore").setState({
            uiHasDeepThinkBtn: true
          });
        }
      });
      return () => {
        e();
        chatStoreManager.getStore("deepThinkingControlStore").setState({
          uiHasDeepThinkBtn: false,
          uiHasDeepThinkBtnDisabled: false
        });
      };
    }, []);
  };
  require.d(exports, {
    useDeepThinkSwitch: function () {
      return d;
    },
    useDeepThinkEnabled: function () {
      return h;
    },
    useDeepThinkUiState: function () {
      return f;
    },
    useDeepThinkInit: function () {
      return u;
    },
    useDeepThinkTrack: function () {
      return p;
    }
  });
}