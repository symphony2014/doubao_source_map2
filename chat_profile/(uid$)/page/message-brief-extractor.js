// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Oq' to 'getMessageBrief'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.a5b16934.js
         * chunkId: 88491
         * moduleId: 81988
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  Date.now();
  let i = e => {
    if ((e == null ? undefined : e.version) === 2) {
      let o = e.message_list?.[0];
      return objectPathGetDefault.getObjectPathDefault(o, "brief") ?? (o == null ? undefined : o.ext?.brief);
    }
    if (e == null) {
      return undefined;
    } else {
      return e.prologue;
    }
  };
  require.d(exports, {
    getMessageBrief: function () {
      return i;
    }
  });
}