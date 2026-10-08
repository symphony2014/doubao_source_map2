// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Un' to 'messageType'
// - Renamed export 'vj' to 'iconType'
// - Renamed export 'zu' to 'statusType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 631020
         */
module.exports = function (module, exports, require) {
  (o = {}).DarkSwitch = "dark_switch";
  o.Copy = "copy";
  let i = o;
  (l = {}).Loading = "loading";
  l.Success = "success";
  l.Failed = "failed";
  let r = l;
  var o;
  var l;
  var a = {
    wiki: "wiki",
    normal: "normal",
    coco: "coco"
  };
  require.d(exports, {
    messageType: function () {
      return a;
    },
    iconType: function () {
      return i;
    },
    statusType: function () {
      return r;
    }
  });
}