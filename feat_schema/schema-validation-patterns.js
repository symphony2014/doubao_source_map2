// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Bf' to 'uuidPattern'
// - Renamed export 'Fo' to 'rgbaPattern'
// - Renamed export 'LV' to 'alignmentOptions'
// - Renamed export 'Lw' to 'asciiRange'
// - Renamed export 'j1' to 'phonePattern'
// - Renamed export 'sH' to 'isEnabled'
// - Renamed export 'wI' to 'rgbPattern'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_schema.e09e7e82.js
         * chunkId: 99280
         * moduleId: 800876
         */
module.exports = function (module, exports, require) {
  let i = true;
  let a = ["left", "center", "right"];
  let o = "^(1\\d{7,}|[2-9]\\d{7,})$";
  let n = "^rgb\\(\\s*(?:(?:0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(?:0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(?:0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])|(?:0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])%\\s*,\\s*(?:0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])%\\s*,\\s*(?:0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])%)\\s*\\)$";
  let d = "^rgba\\(\\s*(?:(?:0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(?:0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(?:0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])|(?:0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])%\\s*,\\s*(?:0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])%\\s*,\\s*(?:0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])%)\\s*,\\s*(?:(?:0.[1-9]*)|[01])\\s*\\)$";
  let s = "\\x00-\\x7F";
  let l = "^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$";
  require.d(exports, {
    uuidPattern: function () {
      return l;
    },
    rgbaPattern: function () {
      return d;
    },
    alignmentOptions: function () {
      return a;
    },
    asciiRange: function () {
      return s;
    },
    phonePattern: function () {
      return o;
    },
    isEnabled: function () {
      return i;
    },
    rgbPattern: function () {
      return n;
    }
  });
}