// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 53224.ebaf78df.js
         * chunkId: 53224
         * moduleId: 753894
         */
module.exports = function (module, exports, require) {
  var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  exports.encode = function (e) {
    if (e >= 0 && e < n.length) {
      return n[e];
    }
    throw TypeError("Must be between 0 and 63: " + e);
  };
  exports.decode = function (e) {
    if (e >= 65 && e <= 90) {
      return e - 65;
    } else if (e >= 97 && e <= 122) {
      return e - 97 + 26;
    } else if (e >= 48 && e <= 57) {
      return e - 48 + 52;
    } else if (e == 43) {
      return 62;
    } else if (e == 47) {
      return 63;
    } else {
      return -1;
    }
  };
}