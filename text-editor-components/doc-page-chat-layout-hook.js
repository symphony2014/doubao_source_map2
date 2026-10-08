// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'useDocPageChatLayout'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 498456
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatSkillInputConstants = require("chat-skill-input-constants") /*id: 697792*/;
  var writingSkillStore = require("writing-skill-store") /*id: 704044*/;
  var useUrlParamOmit = require("use-url-param-omit") /*id: 455520*/;
  let s = () => {
    let e = useUrlParamOmit.useUrlParamOmit("layout_mode");
    let i = reactCoreLibraryReexport.useMemo(() => {
      if ([chatSkillInputConstants.SkillDisplayType.Avatar, chatSkillInputConstants.SkillDisplayType.Sidebar, chatSkillInputConstants.SkillDisplayType.Popover].includes(e)) {
        return e;
      }
    }, [e]);
    let [n, s] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (i) {
        writingSkillStore.writingSkillStore.getState().updateDocPageChatLayoutMode(i);
      }
      s(true);
    }, []);
    let c = writingSkillStore.writingSkillStore(e => e.docPageChatLayoutMode);
    return reactCoreLibraryReexport.useMemo(() => n || !i ? c : i, [c, i, n]);
  };
  require.d(exports, {
    useDocPageChatLayout: function () {
      return s;
    }
  });
}