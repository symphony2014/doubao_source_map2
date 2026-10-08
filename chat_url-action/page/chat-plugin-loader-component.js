// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o' to 'ChatPluginLoader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19113.77dfd3b6.js
         * chunkId: 19113
         * moduleId: 907735
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var noSsrWrapper = require("no-ssr-wrapper") /*id: 647730*/;
  var runtimeLinkRenderer = require("runtime-link-renderer") /*id: 870490*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = async () => {
    let {
      useChatSendMessageBoxPluginMatcher: e,
      useChatSendMessageBoxPlugin: t,
      getChatProtocolPlugin: i,
      getChatMessageLifeCyclePluginMatcher: n,
      getChatProtocolTransformPluginMatcher: r,
      getChatProtocolTransformPlugin: o,
      getChatMessageLifeCyclePlugin: s,
      getChatCanvasPluginMatcher: l,
      getChatCanvasPlugin: c
    } = await require.e("chat-plugins-runtime") /*id: 70217*/.then(require.bind(require, "chat-plugin-getter-utils") /*id: 350837*/);
    return {
      useChatSendMessageBoxPluginMatcher: e,
      useChatSendMessageBoxPlugin: t,
      getChatProtocolPlugin: i,
      getChatCanvasPluginMatcher: l,
      getChatCanvasPlugin: c,
      getChatMessageLifeCyclePluginMatcher: n,
      getChatProtocolTransformPluginMatcher: r,
      getChatProtocolTransformPlugin: o,
      getChatMessageLifeCyclePlugin: s
    };
  };
  let d = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => asyncRetryUtils.retryWithFallback({
    fn: async () => {
      let {
        useChatSendMessageBoxPluginMatcher: e,
        useChatSendMessageBoxPlugin: t
      } = await c();
      return {
        default: function () {
          e();
          t();
          return null;
        }
      };
    }
  })));
  let _ = e => {
    reactCoreLibraryReexport.useEffect(() => {
      c().then(e => {
        if (e != null) {
          e.getChatCanvasPluginMatcher();
        }
        if (e != null) {
          e.getChatProtocolTransformPluginMatcher().then(t => {
            t.forEach(t => {
              let {
                pluginIdentifier: a
              } = t;
              if (e != null) {
                e.getChatProtocolTransformPlugin(a);
              }
            });
          });
        }
        if (e != null) {
          e.getChatMessageLifeCyclePluginMatcher().then(t => {
            t.forEach(t => {
              if (e != null) {
                e.getChatMessageLifeCyclePlugin(t.pluginIdentifier);
              }
            });
          });
        }
        if (e != null) {
          e.getChatProtocolPlugin("SamanthaChat");
        }
        if (e != null) {
          e.getChatProtocolPlugin("AliceChatStream");
        }
        if (e != null) {
          e.getChatProtocolPlugin("AliceChatSocket");
        }
      });
    }, []);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(d, {}), reactJsxRuntimeCoreReexport.jsx(noSsrWrapper.NoSsrWrapper, {
        children: reactJsxRuntimeCoreReexport.jsx(runtimeLinkRenderer.RuntimeLink, {
          to: "/chat/local_11",
          prefetch: "render"
        })
      })]
    });
  };
  require.d(exports, {
    ChatPluginLoader: function () {
      return _;
    }
  });
}