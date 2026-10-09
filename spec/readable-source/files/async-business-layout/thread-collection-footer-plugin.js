// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'reactSuspenseWrapper'
// - Resolved require(944055) to 'react-suspense-wrapper'
// - Renamed variable 'o' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'a' to 'useSearchParamsChangeEffect'
// - Resolved require(984541) to 'use-search-params-change-effect'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(87547) to 'html2canvas-renderer'
// - Resolved require.e(81840) to 'react-form-fields'
// - Resolved require.bind(698996) to 'thread-collection-toolbar'
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'y' to 'withSuspense' (module 944055)
// - Updated imported property 'p' to 'useSearchParamsChange' (module 984541)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 720227
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSuspenseWrapper = require("react-suspense-wrapper") /*id: 944055*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var useSearchParamsChangeEffect = require("use-search-params-change-effect") /*id: 984541*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = e => {
    loggerServiceCore.defaultLogger.persist.error({
      error: e
    });
    return Promise.resolve({
      ThreadCollectionToolbar: () => null
    });
  };
  let c = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(async () => {
    let {
      ThreadCollectionToolbar: e
    } = await Promise.all([require.e("html2canvas-renderer") /*id: 87547*/, require.e("react-form-fields") /*id: 81840*/]).then(require.bind(require, "thread-collection-toolbar") /*id: 698996*/).catch(l);
    return {
      default: useSearchParamsChangeEffect.useSearchParamsChange(e)
    };
  }), () => reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {}));
  class d {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var i = n.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: c,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = c;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    ThreadCollectionFooterPlugin: function () {
      return d;
    }
  });
}