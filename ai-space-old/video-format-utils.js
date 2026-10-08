// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'formatTime'
// - Renamed export 'z' to 'formatResolution'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 403486
         */
module.exports = function (module, exports, require) {
  let n = (e, t) => {
    let i = Number(e);
    let n = Math.floor(i / 3600);
    let a = Math.floor(i % 3600 / 60);
    let r = Math.floor(i % 3600 % 60);
    let o = n < 10 ? `0${n}` : n;
    let l = a < 10 ? `0${a}` : a;
    let s = r < 10 ? `0${r}` : r;
    if (n !== 0 || t) {
      return `${o}:${l}:${s}`;
    } else {
      return `${l}:${s}`;
    }
  };
  let a = e => {
    if (!e) {
      return "";
    }
    let t = "";
    switch (true) {
      case e > 0 && e < 720:
        t = `\u{6D41}\u{7545}\u{FF08}${e}P\u{FF09}`;
        break;
      case e >= 720 && e < 1080:
        t = `\u{9AD8}\u{6E05}\u{FF08}${e}P\u{FF09}`;
        break;
      case e >= 1080:
        t = `\u{8D85}\u{6E05}\u{FF08}${e}P\u{FF09}`;
    }
    return t;
  };
  require.d(exports, {
    formatTime: function () {
      return n;
    },
    formatResolution: function () {
      return a;
    }
  });
}