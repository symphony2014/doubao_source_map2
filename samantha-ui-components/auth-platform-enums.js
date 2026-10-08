// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'fY' to 'clientTypes'
// - Renamed export 'me' to 'authStates'
// - Renamed export 'zz' to 'osTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50418.2df2ac84.js
         * chunkId: 50418
         * moduleId: 9360
         */
module.exports = function (module, exports, require) {
  var t;
  var o;
  var a;
  (t = {}).NewState = "new";
  t.ScannedState = "scanned";
  t.ConfirmedState = "confirmed";
  t.RefusedState = "refused";
  t.ExpiredState = "expired";
  t.LoginState = "login";
  let r = t;
  (o = {})[o.FLOW = 1] = "FLOW";
  o[o.LARK = 2] = "LARK";
  let c = o;
  (a = {})[a.PC = 1] = "PC";
  a[a.WEB = 2] = "WEB";
  a[a.ANDROID = 3] = "ANDROID";
  a[a.IOS = 4] = "IOS";
  a[a.HARMONYOS = 5] = "HARMONYOS";
  let s = a;
  require.d(exports, {
    clientTypes: function () {
      return c;
    },
    authStates: function () {
      return r;
    },
    osTypes: function () {
      return s;
    }
  });
}