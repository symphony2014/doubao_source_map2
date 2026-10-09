// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'aX' to 'buttonBgColorKey'
// - Renamed export 'oB' to 'ButtonBgColors'
// - Renamed export 'rp' to 'ColorClassMap'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 11473
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  (o = {}).LightNeutral = "light-neutral";
  o.LightRed = "light-red";
  o.LightOrigin = "light-origin";
  o.LightGreen = "light-green";
  o.LightWathet = "light-wathet";
  o.LightBlue = "light-blue";
  o.LightPurple = "light-purple";
  o.LightCarmine = "light-carmine";
  o.DeepNeutral = "deep-neutral";
  o.DeepRed = "deep-red";
  o.DeepOrigin = "deep-origin";
  o.DeepGreen = "deep-green";
  o.DeepWathet = "deep-wathet";
  o.DeepBlue = "deep-blue";
  o.DeepPurple = "deep-purple";
  o.DeepCarmine = "deep-carmine";
  let l = o;
  let c = {
    [l.LightNeutral]: "ccmtoken-doc-button-bg-neutral",
    [l.LightRed]: "ccmtoken-doc-button-bg-red",
    [l.LightOrigin]: "ccmtoken-doc-button-bg-orange",
    [l.LightGreen]: "ccmtoken-doc-button-bg-green",
    [l.LightWathet]: "ccmtoken-doc-button-bg-wathet",
    [l.LightBlue]: "ccmtoken-doc-button-bg-blue",
    [l.LightPurple]: "ccmtoken-doc-button-bg-purple",
    [l.LightCarmine]: "ccmtoken-doc-button-bg-carmine",
    [l.DeepNeutral]: "ccmtoken-doc-button-bg-neutral-solid",
    [l.DeepRed]: "ccmtoken-doc-button-bg-red-solid",
    [l.DeepOrigin]: "ccmtoken-doc-button-bg-orange-solid",
    [l.DeepGreen]: "ccmtoken-doc-button-bg-green-solid",
    [l.DeepWathet]: "ccmtoken-doc-button-bg-wathet-solid",
    [l.DeepBlue]: "ccmtoken-doc-button-bg-blue-solid",
    [l.DeepPurple]: "ccmtoken-doc-button-bg-purple-solid",
    [l.DeepCarmine]: "ccmtoken-doc-button-bg-carmine-solid"
  };
  (i = {}).ButtonBackgroundColor = "button_background_color";
  let u = i;
  require.d(exports, {
    buttonBgColorKey: function () {
      return u;
    },
    ButtonBgColors: function () {
      return l;
    },
    ColorClassMap: function () {
      return c;
    }
  });
}