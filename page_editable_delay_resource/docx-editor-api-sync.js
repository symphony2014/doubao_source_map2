// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useEditorApiSync'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 203075
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let i = new (require("observable-subject-class") /*id: 292580*/.Subject)();
  function l(e, n) {
    let [r, l] = reactCoreLibraryReexport.useState(false);
    let a = reactCoreLibraryReexport.useCallback(n => {
      let {
        editorAPI: r
      } = n;
      l(!!r && r !== e.editorAPI);
    }, [e]);
    reactCoreLibraryReexport.useEffect(() => {
      i.next({
        editorAPI: n ? e.editorAPI : null
      });
      return () => {
        if (n) {
          i.next({
            editorAPI: null
          });
        }
      };
    }, [n, e]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = i.subscribe(a);
      return () => {
        e.unsubscribe();
      };
    }, [a]);
    return [r];
  }
  require.d(exports, {
    useEditorApiSync: function () {
      return l;
    }
  });
}