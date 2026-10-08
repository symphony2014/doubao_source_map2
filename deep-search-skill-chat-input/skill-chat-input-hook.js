// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'useSkillBarTrack'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-skill-chat-input.5642b6e3.js
         * chunkId: 18383
         * moduleId: 219869
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  let o = function ({
    onCheckLoadSuccess: e,
    loadSuccessReportParams: t
  } = {}) {
    let {
      skillType: n
    } = t ?? {};
    reactCoreLibraryReexport.useEffect(() => {
      if ((e == null ? undefined : e()) && n) {
        chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService").then(e => {
          var t;
          if (e != null && (t = e.getSkillReportEvent({
            skillType: n,
            eventName: "skill_bar_open_input"
          })) !== null && t !== undefined) {
            t.success();
          }
        });
      }
    }, []);
  };
  require.d(exports, {
    useSkillBarTrack: function () {
      return o;
    }
  });
}