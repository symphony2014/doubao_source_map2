// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'useTrackVisit'
// - Renamed export 'S' to 'useCollectVisit'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 479923
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useLocationWrapper = require("use-location-wrapper") /*id: 999635*/;
  var pageVisitTrackContext = require("page-visit-track-context") /*id: 857541*/;
  var reduxDevtoolsPersistIntegration = require("redux-devtools-persist-integration") /*id: 383133*/;
  let l = require("react-store-hook-factory") /*id: 65636*/.createStoreHook()(reduxDevtoolsPersistIntegration.enhanceSubscribe(e => ({
    isStopHocCollect: false,
    setIsStopHocCollect(t) {
      e({
        isStopHocCollect: t
      });
    }
  })));
  let s = function (e, t = [], n) {
    let {
      setIsStopHocCollect: r
    } = l.getState();
    reactCoreLibraryReexport.useEffect(() => {
      r(true);
      let t = pageVisitTrackContext.setVisitContext(e());
      return () => {
        if (n) {
          pageVisitTrackContext.setVisitContext(t);
        }
        r(false);
      };
    }, t);
  };
  let u = () => {
    let e = l(e => e.isStopHocCollect);
    let t = useLocationWrapper.useLocationWrapper();
    reactCoreLibraryReexport.useEffect(() => {
      if (e) {
        return;
      }
      let {
        curPage: t,
        prevPage: n
      } = pageVisitTrackContext.getRouteInfo();
      pageVisitTrackContext.setVisitContext(t, n);
    }, [t.pathname, e]);
  };
  require.d(exports, {
    useTrackVisit: function () {
      return u;
    },
    useCollectVisit: function () {
      return s;
    }
  });
}