// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'loadShareToolbar'
// - Renamed export 'T' to 'ThreadShareToolbar'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 177563
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var useSearchParamsChangeEffect = require("use-search-params-change-effect") /*id: 984541*/;
  let s = () => null;
  let l = e => {
    loggerServiceCore.defaultLogger.persist.error({
      error: e
    });
    return Promise.resolve({
      ThreadShareToolbar: s
    });
  };
  let c = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(async () => {
    let {
      ThreadShareToolbar: e
    } = await Promise.all([require.e("html2canvas-renderer") /*id: 87547*/, require.e("semi-design-ui-core") /*id: 18872*/, require.e("semi-conversation-share-ui") /*id: 33772*/]).then(require.bind(require, "thread-share-toolbar-component") /*id: 444833*/).catch(l);
    return {
      default: useSearchParamsChangeEffect.useSearchParamsChange(e)
    };
  }), s);
  let d = () => Promise.all([require.e("html2canvas-renderer") /*id: 87547*/, require.e("semi-design-ui-core") /*id: 18872*/, require.e("semi-conversation-share-ui") /*id: 33772*/]).then(require.bind(require, "thread-share-toolbar-component") /*id: 444833*/).catch(l);
  require.d(exports, {
    loadShareToolbar: function () {
      return d;
    },
    ThreadShareToolbar: function () {
      return c;
    }
  });
}