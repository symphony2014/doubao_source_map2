// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CF' to 'useSendMessageActionMatcher'
// - Renamed export 'CS' to 'useMessageListBottomBtnMatcher'
// - Renamed export 'Ci' to 'useChatFooterMatcher'
// - Renamed export 'F$' to 'loadContentBlockMergeMatcher'
// - Renamed export 'GQ' to 'useReceiveActionBottomMatcher'
// - Renamed export 'HC' to 'useFeedListItemToolMatcher'
// - Renamed export 'HJ' to 'loadSendBoxMatcher'
// - Renamed export 'Hq' to 'loadChatCanvasMatcher'
// - Renamed export 'IK' to 'loadMessageErrorMatcher'
// - Renamed export 'In' to 'loadProtocolTransformMatcher'
// - Renamed export 'Je' to 'loadMessageLifeCycleMatcher'
// - Renamed export 'Me' to 'loadMessageCmdMatcher'
// - Renamed export 'O$' to 'useSendBoxRightMatcher'
// - Renamed export 'PA' to 'useInputToolMenuMatcher'
// - Renamed export 'PH' to 'useReceiveGroupMatcher'
// - Renamed export 'PP' to 'useReceiveSuggestMatcher'
// - Renamed export 'TB' to 'useSkillBarMatcher'
// - Renamed export 'U5' to 'useGuidanceSuggestionsMatcher'
// - Renamed export 'Vd' to 'useChatHeaderMatcher'
// - Renamed export 'WF' to 'useReceiveBoxBottomMatcher'
// - Renamed export 'WO' to 'useReceiveContentBlockMatcher'
// - Renamed export 'XJ' to 'useLauncherDataLoaderMatcher'
// - Renamed export 'Xu' to 'useReceiveGroupBottomMatcher'
// - Renamed export '_c' to 'useSendBoxBottomMatcher'
// - Renamed export 'aU' to 'useReceiveActionBtnMatcher'
// - Renamed export 'at' to 'loadReceiveBoxMatcher'
// - Renamed export 'bY' to 'useFeedListItemMenuMatcher'
// - Renamed export 'dW' to 'useSendBoxMatcher'
// - Renamed export 'hV' to 'loadReceiveContentBlockMatcher'
// - Renamed export 'iJ' to 'useSendBoxTopMatcher'
// - Renamed export 'mk' to 'loadInputEventsMatcher'
// - Renamed export 'mn' to 'useReceiveBoxLeftMatcher'
// - Renamed export 'oX' to 'loadContentBlockResolveMatcher'
// - Renamed export 'p5' to 'useReceiveBoxRightMatcher'
// - Renamed export 'qP' to 'useReceiveActionRightMatcher'
// - Renamed export 'qd' to 'useReceiveBoxMatcher'
// - Renamed export 'r$' to 'useFooterDisclaimerMatcher'
// - Renamed export 'sk' to 'useReceiveBoxTopMatcher'
// - Renamed export 'w5' to 'useSendBoxLeftMatcher'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 107672
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactAsyncIteratorHook = require("react-async-iterator-hook") /*id: 545543*/;
  var chatIocManager = require("chat-ioc-manager") /*id: 998196*/;
  let a = (e, t, n) => {
    let {
      pluginMatcherContainer: i
    } = chatIocManager.getResourceCtrl(n);
    if (!i.isBound(e)) {
      i.bind(e, t);
    }
  };
  let l = (e, t) => {
    let {
      pluginMatcherContainer: n
    } = chatIocManager.getResourceCtrl(t);
    if (n.isBound(e)) {
      return n.get(e);
    }
  };
  let s = (e, t) => {
    let {
      resourceStore: n
    } = chatIocManager.getResourceCtrl(t);
    return n.getState()[e];
  };
  let u = e => async t => {
    let n = l(e, t);
    if (n) {
      return n;
    }
    {
      let n = s(e, t);
      let i = await (n == null ? undefined : n.load());
      if (i) {
        a(e, i, t);
        return l(e, t);
      } else {
        return [];
      }
    }
  };
  let c = e => t => {
    let [n, o] = reactCoreLibraryReexport.useState(() => {
      return l(e, t) ?? [];
    });
    let [c, d] = reactCoreLibraryReexport.useState(!(n == null ? undefined : n.length));
    let [h, m] = reactCoreLibraryReexport.useState(undefined);
    let g = u(e);
    reactAsyncIteratorHook.useAsyncIterator(async () => {
      d(true);
      m(undefined);
      o([]);
      try {
        let e = await g(t);
        o(e);
      } catch (e) {
        m(e);
      } finally {
        d(false);
      }
    }, [e]);
    let f = s(e, t);
    let p = f == null ? undefined : f.load();
    if (!p || p instanceof Promise) {
      return {
        matcher: n,
        loading: c,
        error: h
      };
    } else {
      a(e, p, t);
      return {
        matcher: l(e, t),
        loading: false,
        error: undefined
      };
    }
  };
  let d = u("chatProtocolTransformPluginMatcher");
  let h = c("chatReceiveMessageBoxPluginMatcher");
  let m = u("chatReceiveMessageBoxPluginMatcher");
  let g = c("chatSendMessageBoxPluginMatcher");
  let f = u("chatSendMessageBoxPluginMatcher");
  u("chatMessageListBottomBtnPluginMatcher");
  let p = c("chatMessageListBottomBtnPluginMatcher");
  let _ = u("chatMessageLifeCyclePluginMatcher");
  u("chatFooterPluginMatcher");
  let v = c("chatFooterPluginMatcher");
  u("chatFooterDisclaimerPluginMatcher");
  let b = c("chatFooterDisclaimerPluginMatcher");
  u("skillBarPluginMatcher");
  let S = c("skillBarPluginMatcher");
  let P = u("inputEventsPluginMatcher");
  c("inputEventsPluginMatcher");
  let C = c("inputToolMenuOptionPluginMatcher");
  let y = c("chatGuidanceSuggestionsPluginMatcher");
  let E = c("chatReceiveMessageGroupBottomPluginMatcher");
  let x = c("chatReceiveMessageGroupPluginMatcher");
  let T = u("chatMessageErrorPluginMatcher");
  let k = u("chatMessageCmdPluginMatcher");
  let R = c("chatHeaderPluginMatcher");
  let w = u("chatCanvasPluginMatcher");
  let I = c("launcherDataLoaderPluginMatcher");
  c("launcherResourceLoaderPluginMatcher");
  let M = c("feedListItemToolButtonPluginMatcher");
  let A = c("feedListItemMenuOptionPluginMatcher");
  let D = u("chatReceiveMessageContentBlockMergePluginMatcher");
  let N = u("chatReceiveMessageContentBlockResolvePluginMatcher");
  let L = u("chatReceiveMessageContentBlockPluginMatcher");
  let O = c("chatReceiveMessageContentBlockPluginMatcher");
  let B = c("chatReceiveMessageSuggestPluginMatcher");
  let G = c("chatReceiveMessageBoxTopPluginMatcher");
  let j = c("chatReceiveMessageBoxRightPluginMatcher");
  let W = c("chatReceiveMessageBoxBottomPluginMatcher");
  let U = c("chatReceiveMessageBoxLeftPluginMatcher");
  let F = c("chatSendMessageBoxTopPluginMatcher");
  let V = c("chatSendMessageBoxRightPluginMatcher");
  let Z = c("chatSendMessageBoxBottomPluginMatcher");
  let z = c("chatSendMessageBoxLeftPluginMatcher");
  let H = c("chatReceiveMessageActionButtonPluginMatcher");
  let $ = c("chatSendMessageActionButtonPluginMatcher");
  let K = c("chatReceiveMessageActionBottomPluginMatcher");
  let X = c("chatReceiveMessageActionRightPluginMatcher");
  require.d(exports, {
    useSendMessageActionMatcher: function () {
      return $;
    },
    useMessageListBottomBtnMatcher: function () {
      return p;
    },
    useChatFooterMatcher: function () {
      return v;
    },
    loadContentBlockMergeMatcher: function () {
      return D;
    },
    useReceiveActionBottomMatcher: function () {
      return K;
    },
    useFeedListItemToolMatcher: function () {
      return M;
    },
    loadSendBoxMatcher: function () {
      return f;
    },
    loadChatCanvasMatcher: function () {
      return w;
    },
    loadMessageErrorMatcher: function () {
      return T;
    },
    loadProtocolTransformMatcher: function () {
      return d;
    },
    loadMessageLifeCycleMatcher: function () {
      return _;
    },
    loadMessageCmdMatcher: function () {
      return k;
    },
    useSendBoxRightMatcher: function () {
      return V;
    },
    useInputToolMenuMatcher: function () {
      return C;
    },
    useReceiveGroupMatcher: function () {
      return x;
    },
    useReceiveSuggestMatcher: function () {
      return B;
    },
    useSkillBarMatcher: function () {
      return S;
    },
    useGuidanceSuggestionsMatcher: function () {
      return y;
    },
    useChatHeaderMatcher: function () {
      return R;
    },
    useReceiveBoxBottomMatcher: function () {
      return W;
    },
    useReceiveContentBlockMatcher: function () {
      return O;
    },
    useLauncherDataLoaderMatcher: function () {
      return I;
    },
    useReceiveGroupBottomMatcher: function () {
      return E;
    },
    useSendBoxBottomMatcher: function () {
      return Z;
    },
    useReceiveActionBtnMatcher: function () {
      return H;
    },
    loadReceiveBoxMatcher: function () {
      return m;
    },
    useFeedListItemMenuMatcher: function () {
      return A;
    },
    useSendBoxMatcher: function () {
      return g;
    },
    loadReceiveContentBlockMatcher: function () {
      return L;
    },
    useSendBoxTopMatcher: function () {
      return F;
    },
    loadInputEventsMatcher: function () {
      return P;
    },
    useReceiveBoxLeftMatcher: function () {
      return U;
    },
    loadContentBlockResolveMatcher: function () {
      return N;
    },
    useReceiveBoxRightMatcher: function () {
      return j;
    },
    useReceiveActionRightMatcher: function () {
      return X;
    },
    useReceiveBoxMatcher: function () {
      return h;
    },
    useFooterDisclaimerMatcher: function () {
      return b;
    },
    useReceiveBoxTopMatcher: function () {
      return G;
    },
    useSendBoxLeftMatcher: function () {
      return z;
    }
  });
}