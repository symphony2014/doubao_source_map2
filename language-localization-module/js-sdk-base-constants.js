// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'SQ' to 'SdkLanguages'
// - Renamed export 't9' to 'callApiStub'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68685.ba4452d3.js
         * chunkId: 68685
         * moduleId: 32813
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  let o = e => {
    throw Error(`JSSDK.base.callApi no impl ${e}`);
  };
  (i = n ||= {})[i.Chinese = 1] = "Chinese";
  i[i.English = 2] = "English";
  i[i.Japanese = 3] = "Japanese";
  require.d(exports, {
    SdkLanguages: function () {
      return n;
    },
    callApiStub: function () {
      return o;
    }
  });
}