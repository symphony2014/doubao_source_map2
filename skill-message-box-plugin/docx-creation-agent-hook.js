// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'useCreationAgent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 933686
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let s = "https://bytedance.larkoffice.com/docx/A49Id3FKEoxcJnx4x0Ace2LZnAw";
  let d = {};
  let c = () => {
    let [e, t] = reactCoreLibraryReexport.useState({
      creationAgentBannerVersion: "v2",
      creationAgentBannerUrl: s,
      refImageIntoImageAttachmentEnabled: undefined,
      creationAgentBannerImage: undefined
    });
    reactCoreLibraryReexport.useEffect(() => {
      d.promise ||= n();
      d.promise.then(t).catch(() => {
        d.promise = undefined;
      });
    }, []);
    let n = reactFunctionMemoHook.useMemoizedCallback(async () => {
      try {
        let e;
        let t = await chatFgStoreHooks.fetchSourceData({
          source: chatStorageKeys.chatStorageKeys.serverAB
        });
        let {
          creation_agent_banner: n,
          creation_agent_banner_link: i,
          creation_agent_v4_enabled: l,
          ref_image_into_image_attachment_enabled: r,
          creation_agent_banner_image: d
        } = t ?? {};
        let c = l === "1";
        if (d) {
          try {
            e = JSON.parse(d);
          } catch (e) {}
        }
        return {
          creationAgentBannerVersion: n || (c ? "v4" : "v2"),
          creationAgentBannerUrl: i ? i === "0" ? undefined : i : c ? "https://bytedance.larkoffice.com/docx/XwngdqdhIowfF8xhEA4cwpS2nLb" : s,
          refImageIntoImageAttachmentEnabled: !!r,
          creationAgentBannerImage: e
        };
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "useCreationAgentV2Enabled_error",
          error: e
        });
        return {
          creationAgentBannerVersion: "v2",
          creationAgentBannerUrl: s,
          refImageIntoImageAttachmentEnabled: false,
          creationAgentBannerImage: undefined
        };
      }
    });
    return e;
  };
  require.d(exports, {
    useCreationAgent: function () {
      return c;
    }
  });
}