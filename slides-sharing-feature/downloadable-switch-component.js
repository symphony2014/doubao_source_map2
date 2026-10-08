// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'DownloadableSwitch'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10991.1ee21c16.js
         * chunkId: 10991
         * moduleId: 570618
         */
module.exports = function (module, exports, require) {
  var switchLoadingComponent = require("switch-loading-component") /*id: 403106*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let i = e => {
    let {
      downloadable: t,
      setDownloadable: a,
      downloadableLoading: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: `
        mr-20 mb-20 ml-20 flex h-54 items-center justify-between
        rounded-s-radius-xxss bg-dbx-bg-base-web pr-12 pl-12
      `,
      children: [reactJsxRuntimeCoreReexport.jsx("span", {
        className: `
          text-14 leading-22 font-normal
          text-s-color-text-static-black-secondary
        `,
        children: "允许其他用户下载"
      }), reactJsxRuntimeCoreReexport.jsx(switchLoadingComponent.LoadingSwitch, {
        loading: i,
        checked: t,
        onCheckedChange: a
      })]
    });
  };
  require.d(exports, {
    DownloadableSwitch: function () {
      return i;
    }
  });
}