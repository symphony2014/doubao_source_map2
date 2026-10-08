// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'HY' to 'permissionCopyType'
// - Renamed export 'K6' to 'mimeBusinessKey'
// - Renamed export 'Z6' to 'ignoreCollectFlag'
// - Renamed export 'c5' to 'formatMarkMap'
// - Renamed export 'fF' to 'dataLineWrapAttr'
// - Renamed export 'iC' to 'mimeFragmentType'
// - Renamed export 'mX' to 'dataLineAttr'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 71435
         */
module.exports = function (module, exports, require) {
  var r = "application/x-editor-kit-fragment";
  var i = "application/x-editor-kit-business-key";
  var o = {
    underline: "u",
    bold: "b",
    blockquote: "blockquote",
    italic: "i",
    strikethrough: "s"
  };
  var a = "ignore-collect";
  var s = "COPY_WITHOUT_PERMISSION";
  var l = "data-multiple-line-wrap";
  var u = "data-line";
  require.d(exports, {
    permissionCopyType: function () {
      return s;
    },
    mimeBusinessKey: function () {
      return i;
    },
    ignoreCollectFlag: function () {
      return a;
    },
    formatMarkMap: function () {
      return o;
    },
    dataLineWrapAttr: function () {
      return l;
    },
    mimeFragmentType: function () {
      return r;
    },
    dataLineAttr: function () {
      return u;
    }
  });
}