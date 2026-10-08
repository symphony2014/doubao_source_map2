// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'k' to 'FormattedText'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_paid_subscription.2a41bf28.js
         * chunkId: 60668
         * moduleId: 77044
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let r = e => {
    let {
      text: i,
      formats: o,
      noWrapper: r
    } = e;
    let a = i.split(/({\s*\w+?\s*})/g).map(e => {
      let i = /{\s*(\w+?)\s*}/.exec(e);
      if (i && o[i[1]]) {
        return o[i[1]];
      } else {
        return e;
      }
    });
    if (r) {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: a
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("span", {
        children: a
      });
    }
  };
  require.d(exports, {
    FormattedText: function () {
      return r;
    }
  });
}