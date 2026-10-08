// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'iframeEventNames'
// - Renamed export 'x' to 'docNodeTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_index_delay.3c55e6b1.js
         * chunkId: 82165
         * moduleId: 124597
         */
module.exports = function (module, exports, require) {
  var o;
  var a;
  (o = {}).onIframeDomCopied = "onIframeDomCopied";
  let n = o;
  (a = {})[a.BITABLE = 10] = "BITABLE";
  a[a.FILE = 20] = "FILE";
  a[a.AI = 30] = "AI";
  a[a.ISV = 40] = "ISV";
  a[a.DOC_INFO = 50] = "DOC_INFO";
  a[a.IMAGE = 60] = "IMAGE";
  a[a.IFRAME = 70] = "IFRAME";
  a[a.TABLE = 80] = "TABLE";
  a[a.CHART = 90] = "CHART";
  a[a.MEEGO = 100] = "MEEGO";
  a[a.TASK_LIST = 110] = "TASK_LIST";
  let s = a;
  require.d(exports, {
    iframeEventNames: function () {
      return n;
    },
    docNodeTypes: function () {
      return s;
    }
  });
}