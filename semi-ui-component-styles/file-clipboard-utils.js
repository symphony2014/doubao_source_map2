// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A0' to 'copyToClipboard'
// - Renamed export 'DH' to 'downloadPdfFile'
// - Renamed export 'hl' to 'createFileObject'
// - Renamed export 'qd' to 'fetchUrlBlob'
// - Renamed export 'yl' to 'copyImageUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 63418.ca113907.js
         * chunkId: 63418
         * moduleId: 256419
         */
module.exports = function (module, exports, require) {
  let n = async function (e, t = "image/png") {
    try {
      await navigator.clipboard.write([new ClipboardItem({
        [t]: e
      })]);
    } catch (e) {}
  };
  function r(e, t, a = "image/png") {
    return new File([e], t, {
      type: a
    });
  }
  let i = async function (e, t = "image/png") {
    return await n(await l(e), t);
  };
  let l = async e => await (await fetch(e)).blob();
  let o = async e => new File([await (await fetch("/samantha/pdf/download", {
    method: "POST",
    body: JSON.stringify({
      url: e
    })
  })).blob()], "PDF", {
    type: "application/pdf"
  });
  require.d(exports, {
    copyToClipboard: function () {
      return n;
    },
    downloadPdfFile: function () {
      return o;
    },
    createFileObject: function () {
      return r;
    },
    fetchUrlBlob: function () {
      return l;
    },
    copyImageUrl: function () {
      return i;
    }
  });
}