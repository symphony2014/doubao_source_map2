// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Rk' to 'searchTypes'
// - Renamed export 'V2' to 'isBrandSuperscript'
// - Renamed export 'fF' to 'isMemoryCard'
// - Renamed export 'kR' to 'isWebDocReference'
// - Renamed export 'rq' to 'isReplaceable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-markdown-common-meta-render-plugin.cced7776.js
         * chunkId: 26875
         * moduleId: 156228
         */
module.exports = function (module, exports, require) {
  var r;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  (r = {}).SearchCtrip = "search_ctrip";
  let a = r;
  let l = e => e.type === chatMessageTypes.MetaType.Replaceable;
  let o = e => e.type === chatMessageTypes.MetaType.WebDocReference;
  let s = e => e.type === chatMessageTypes.MetaType.BrandSuperscript;
  let d = e => e.type === chatMessageTypes.MetaType.CommonCard && e.data.card_type === "memory";
  require.d(exports, {
    searchTypes: function () {
      return a;
    },
    isBrandSuperscript: function () {
      return s;
    },
    isMemoryCard: function () {
      return d;
    },
    isWebDocReference: function () {
      return o;
    },
    isReplaceable: function () {
      return l;
    }
  });
}