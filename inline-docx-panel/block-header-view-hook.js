// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'useBlockHeaderView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67342.cd008787.js
         * chunkId: 67342
         * moduleId: 558499
         */
module.exports = function (module, exports, require) {
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactReduxExports = require("react-redux-exports") /*id: 426907*/;
  var docMetaSelectors = require("doc-meta-selectors") /*id: 359612*/;
  let s = function (e, n = {}) {
    let {
      rootMargin: o
    } = n;
    let s = reactReduxExports.useSelector(docMetaSelectors.selectDocTitle);
    let {
      ref: c,
      inView: d
    } = reactIntersectionObserver_1.useInView({
      rootMargin: o ?? "0px 0px 0px 0px",
      threshold: 0,
      initialInView: true
    });
    reactCoreLibraryReexport.useEffect(() => {
      var n;
      if (!e) {
        return;
      }
      let o = e.getBlockViewByBlockIdNotCheck(e.rootBlockId);
      let i = o == null ? undefined : (n = o.hostElement) === null || n === undefined ? undefined : n.querySelector(".page-block-header");
      if (i) {
        c(i);
        return () => {
          c(null);
        };
      }
    }, [e, c]);
    return {
      inViewBlockHeader: d,
      docxTitle: s
    };
  };
  require.d(exports, {
    useBlockHeaderView: function () {
      return s;
    }
  });
}