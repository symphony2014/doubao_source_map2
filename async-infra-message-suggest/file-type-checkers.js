// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DG' to 'isTextType'
// - Renamed export 'Kk' to 'isDirectoryType'
// - Renamed export 'g7' to 'isLarkDocType'
// - Renamed export 'jQ' to 'isImageType'
// - Renamed export 'sV' to 'isLinkType'
// - Renamed export 'xR' to 'isFileType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 412342
         */
module.exports = function (module, exports, require) {
  let i = e => (e == null ? undefined : e.type) === "attachment" || (e == null ? undefined : e.type) === "file";
  let r = e => (e == null ? undefined : e.type) === "image";
  let s = e => (e == null ? undefined : e.type) === "directory";
  let a = e => (e == null ? undefined : e.type) === "link";
  let o = e => (e == null ? undefined : e.type) === "text";
  let l = e => (e == null ? undefined : e.type) === "lark_doc";
  require.d(exports, {
    isTextType: function () {
      return o;
    },
    isDirectoryType: function () {
      return s;
    },
    isLarkDocType: function () {
      return l;
    },
    isImageType: function () {
      return r;
    },
    isLinkType: function () {
      return a;
    },
    isFileType: function () {
      return i;
    }
  });
}