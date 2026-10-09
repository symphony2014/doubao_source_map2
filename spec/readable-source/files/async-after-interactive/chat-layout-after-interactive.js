// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'a' to 'deepEqualUtil_1'
// - Resolved require(702050) to 'deep-equal-util_1'
// - Renamed variable 'i' to 'cookieManagementUtils'
// - Resolved require(688115) to 'cookie-management-utils'
// - Renamed variable 'o' to 'sidebarStatusUpdateLogger'
// - Resolved require(140188) to 'sidebar-status-update-logger'
// - Renamed variable 's' to 'chatEventEmitter'
// - Resolved require(740942) to 'chat-event-emitter'
// - Renamed variable 'l' to 'responsiveScreenHooks'
// - Resolved require(221846) to 'responsive-screen-hooks'
// - Renamed variable 'c' to 'reactFunctionMemoHook'
// - Resolved require(983998) to 'react-function-memo-hook'
// - Renamed variable 'd' to 'edenxSearchParamsHook'
// - Resolved require(471794) to 'edenx-search-params-hook'
// - Renamed variable 'm' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'v' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'p' to 'reactUseUpdateEffect'
// - Resolved require(141220) to 'react-use-update-effect'
// - Renamed variable 'h' to 'useOnUnmountHook'
// - Resolved require(297204) to 'use-on-unmount-hook'
// - Renamed variable 'g' to 'resolveRuntimeHook'
// - Resolved require(770715) to 'resolve-runtime-hook'
// - Renamed variable 'b' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'lj' to 'useIsMediumScreen' (module 221846)
// - Updated imported property 'l' to 'resolveSearchParams' (module 471794)
// - Updated imported property 'v' to 'chatEmitter' (module 740942)
// - Updated imported property 'Z' to 'useMemoizedCallback' (module 983998)
// - Updated imported property 'Z' to 'useUpdateEffect' (module 141220)
// - Updated imported property 'Wp' to 'getStore' (module 537944)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'Z' to 'useOnUnmount' (module 297204)
// - Updated imported property 'S' to 'resolveUseMatches' (module 770715)
// - Updated imported property 'Z' to 'deepEqual' (module 702050)
// - Updated imported property 'd' to 'updateSidebarStatus' (module 140188)
// - Updated imported property 'Z' to 'CookieManager' (module 688115)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive.9af05afc.js
         * chunkId: 87048
         * moduleId: 942524
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var cookieManagementUtils = require("cookie-management-utils") /*id: 688115*/;
  var sidebarStatusUpdateLogger = require("sidebar-status-update-logger") /*id: 140188*/;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  var responsiveScreenHooks = require("responsive-screen-hooks") /*id: 221846*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var edenxSearchParamsHook = require("edenx-search-params-hook") /*id: 471794*/;
  let u = function () {
    let e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
    let t = arguments.length > 1 ? arguments[1] : undefined;
    let n = responsiveScreenHooks.useIsMediumScreen();
    reactCoreLibraryReexport.useEffect(() => {
      if (t != null) {
        t(e, !e || !n);
      }
    }, [e, n]);
  };
  let f = e => {
    let {
      leftSideExpand: t,
      rightSideExpand: n,
      rightSideMode: a,
      needAutoExitSkeleton: i,
      handleLinkageToggleSidebar: o,
      handleLinkageCloseCanvasPanel: l
    } = e;
    let [u, f] = edenxSearchParamsHook.resolveSearchParams();
    reactCoreLibraryReexport.useEffect(() => {
      if (i && u.get("skeleton_type")) {
        let e = () => {
          let e = new URLSearchParams(u);
          e.delete("skeleton_type");
          f(e, {
            replace: true
          });
        };
        let t = setTimeout(e, 3000);
        chatEventEmitter.chatEmitter.on("chat.canvas.entered", e);
        return () => {
          chatEventEmitter.chatEmitter.off("chat.canvas.entered", e);
          return clearTimeout(t);
        };
      }
    }, [u, i]);
    let m = reactFunctionMemoHook.useMemoizedCallback(o);
    reactCoreLibraryReexport.useEffect(() => {
      if (t && n && (a === "full" || (a === "narrow" ? window.innerWidth <= 1080 && window.innerWidth > 800 : window.innerWidth <= 1920 && window.innerWidth > 800))) {
        m(false);
        return () => m(true);
      }
    }, [n, a === "narrow"]);
    reactCoreLibraryReexport.useEffect(() => {
      if (t && n && a !== "full" && window.innerWidth <= 1080) {
        l();
      }
    }, [t]);
  };
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var reactUseUpdateEffect = require("react-use-update-effect") /*id: 141220*/;
  var useOnUnmountHook = require("use-on-unmount-hook") /*id: 297204*/;
  var resolveRuntimeHook = require("resolve-runtime-hook") /*id: 770715*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = e => {
    let {
      chatViewConfig: t
    } = e;
    let n = (t == null ? undefined : t.chatKey) || (t == null ? undefined : t.chatId);
    reactUseUpdateEffect.useUpdateEffect(() => {
      let e = chatStoreManager.getStore("chatViewCoreStore");
      if (e.getState().needSkipRouteAutoClosing === true) {
        e.setState({
          needSkipRouteAutoClosing: false
        });
        return;
      }
      chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
    }, [n]);
    useOnUnmountHook.useOnUnmount(() => chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel()));
    return null;
  };
  let w = ["chat_(id)/page"];
  let _ = ["chat_(id)/page"];
  let x = ["chat_(id)/page", "chat_url-action/page", "chat_layout"];
  let k = e => {
    let {
      leftSideExpand: t,
      rightSideExpand: n,
      rightSideMode: s
    } = e;
    let l = reactCoreLibraryReexport.useRef(false);
    let c = resolveRuntimeHook.resolveUseMatches();
    let d = chatStoreManager.useStoreSelector("chatViewCoreStore", e => e.currentChatViewConfig, deepEqualUtil_1.deepEqual);
    let p = c.some(e => w.includes(e.id));
    let h = c.some(e => _.includes(e.id));
    u(c.some(e => x.includes(e.id)), (e, t) => {
      chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(n => {
        if (n) {
          n.canvasEnabled = e;
          n.canvasAutoOpenEnaled = t;
        }
      });
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        l.current = false;
      }
    }, [t]);
    f({
      leftSideExpand: t,
      rightSideExpand: n,
      rightSideMode: s,
      needAutoExitSkeleton: h,
      handleLinkageToggleSidebar: e => {
        if (e) {
          if (l.current) {
            sidebarStatusUpdateLogger.updateSidebarStatus("open", "canvas_linkage_reopen");
          }
        } else {
          l.current = true;
          sidebarStatusUpdateLogger.updateSidebarStatus("closed", "canvas_linkage_close");
        }
      },
      handleLinkageCloseCanvasPanel: reactCoreLibraryReexport.useCallback(() => {
        chatIocServiceLoaderHook.loadServiceAsync("chatViewService").then(e => e == null ? undefined : e.closeCanvasPanel());
      }, [])
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (!l.current) {
        cookieManagementUtils.CookieManager.set("flow_ssr_sidebar_expand", t ? "1" : "0");
      }
    }, [t]);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: p && d && reactJsxRuntimeCoreReexport.jsx(y, {
        chatViewConfig: d
      })
    });
  };
  require.r(exports);
  require.d(exports, {
    LayoutAfterInteractiveComp: function () {
      return k;
    },
    CloseCanvasOnConversationSwitch: function () {
      return y;
    }
  });
}