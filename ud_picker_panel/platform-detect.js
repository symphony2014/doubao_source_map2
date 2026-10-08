// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ED' to 'isWindows'
// - Renamed export 'IJ' to 'isLinux'
// - Renamed export 'V5' to 'isMac'
// - Renamed export 'i7' to 'isChromeOpera'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 602082
         */
module.exports = function (module, exports, require) {
  let r = navigator.userAgent.toLowerCase();
  let o = navigator.platform.toLowerCase();
  let i = o === "win32" || o === "windows";
  let a = i && r.indexOf("windows nt 5.1") > -1;
  let c = o === "macintel" || o === "macintosh" || o === "macppc" || o === "mac68k";
  let u = o.indexOf("linux") > -1;
  /electron/i.test(r);
  let s = /(opera|chrome(?=\/))\/?\s*(\d+)/i.test(r);
  if (r.indexOf("mobile") !== -1) {
    r.indexOf("applewebkit");
  }
  if (r.indexOf("safari") !== -1 && r.indexOf("chrome") === -1) {
    r.indexOf("version/");
  }
  require.d(exports, {
    isWindows: function () {
      return i;
    },
    isLinux: function () {
      return u;
    },
    isMac: function () {
      return c;
    },
    isChromeOpera: function () {
      return s;
    }
  });
}