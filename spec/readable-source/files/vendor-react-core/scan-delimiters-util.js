// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 584597
         */
module.exports = function (module, exports, require) {
  module.exports = function (t, e) {
    for (var r = t.pos; r < t.posMax && !function (t) {
      switch (t) {
        case 10:
        case 33:
        case 35:
        case 36:
        case 37:
        case 38:
        case 42:
        case 43:
        case 45:
        case 58:
        case 60:
        case 61:
        case 62:
        case 64:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 123:
        case 125:
        case 126:
          return true;
        default:
          return false;
      }
    }(t.src.charCodeAt(r));) {
      r++;
    }
    return r !== t.pos && (e || (t.pending += t.src.slice(t.pos, r)), t.pos = r, true);
  };
}