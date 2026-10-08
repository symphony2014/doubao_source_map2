// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'UriImagePreview'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-input-ref-content.a6a08894.js
         * chunkId: 3821
         * moduleId: 259456
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      uri: t,
      url: n,
      className: i
    } = e;
    let [u, a] = reactCoreLibraryReexport.useState("");
    reactCoreLibraryReexport.useEffect(() => {
      if (!n && t) {
        apiServicesCollection.ResourceApiService.GetFileURL({
          uris: [t],
          type: "image"
        }).then(e => {
          var n;
          let {
            data: r
          } = e;
          a((r == null ? undefined : (n = r.file_urls) === null || n === undefined ? undefined : n[0]?.main_url) || "");
        });
      }
    }, [t]);
    let c = n || u;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: l("size-20 rounded-4 bg-cover shrink-0", i),
      style: c ? {
        backgroundImage: `url(${c})`
      } : {}
    });
  };
  require.d(exports, {
    UriImagePreview: function () {
      return u;
    }
  });
}