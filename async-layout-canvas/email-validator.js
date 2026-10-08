// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 339725
         */
module.exports = function (module, exports, require) {
  var n = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  exports.validate = function (e) {
    if (!e || e.length > 254 || !n.test(e)) {
      return false;
    }
    var t = e.split("@");
    return !(t[0].length > 64) && !t[1].split(".").some(function (e) {
      return e.length > 63;
    });
  };
}