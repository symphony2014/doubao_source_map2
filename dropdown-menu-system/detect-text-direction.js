// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18380.923ae249.js
         * chunkId: 18380
         * moduleId: 554498
         */
module.exports = function (module, exports, require) {
  module.exports = function (e) {
    e = String(e || "");
    if (n.test(e)) {
      return "rtl";
    } else if (u.test(e)) {
      return "ltr";
    } else {
      return "neutral";
    }
  };
  var t = "֑-߿יִ-﷽ﹰ-ﻼ";
  var r = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿";
  var n = RegExp("^[^" + r + "]*[" + t + "]");
  var u = RegExp("^[^" + t + "]*[" + r + "]");
}