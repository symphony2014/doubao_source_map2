// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Cd' to 'generateUuid'
// - Renamed export 'Ms' to 'generateRandomId'
// - Renamed export 'ZP' to 'createTimestampId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 912031
         */
module.exports = function (module, exports, require) {
  function i(e) {
    return `${e}-${new Date().getTime()}-${Math.random()}`;
  }
  function r() {
    var e;
    try {
      return ((e = crypto == null ? undefined : crypto.randomUUID) === null || e === undefined ? undefined : e.call(crypto)) ?? String(-99990013000).replace(/[018]/g, e => (Number(e) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> Number(e) / 4).toString(16));
    } catch (e) {
      return i("semi");
    }
  }
  function s(e = {}) {
    let {
      prefix: t = "",
      length: n = 7
    } = e;
    let i = "0123456789abcdefghijklmnopqrstuvwxyz";
    let r = i.length;
    let s = "";
    for (let e = 0; e < n; e++) {
      let e = Math.floor(Math.random() * r);
      s += i.charAt(e);
    }
    if (t) {
      return `${t}-${s}`;
    } else {
      return s;
    }
  }
  require.d(exports, {
    generateUuid: function () {
      return r;
    },
    generateRandomId: function () {
      return s;
    },
    createTimestampId: function () {
      return i;
    }
  });
}