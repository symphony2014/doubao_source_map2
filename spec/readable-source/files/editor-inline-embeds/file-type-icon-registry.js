// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DS' to 'GenericFileIcon'
// - Renamed export 'Z7' to 'FileTypeIconMap'
// - Renamed export 'a0' to 'DocxFileIcon'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 76856.d4ed01da.js
         * chunkId: 76856
         * moduleId: 903941
         */
module.exports = function (module, exports, require) {
  var fileLinkWordIcon_1 = require("file-link-word-icon_1") /*id: 318277*/;
  var fileLinkWordIcon = require("file-link-word-icon") /*id: 987062*/;
  var fileLinkSheetIcon = require("file-link-sheet-icon") /*id: 420059*/;
  var fileLinkBitableIcon = require("file-link-bitable-icon") /*id: 968947*/;
  var fileLinkMindnoteIcon = require("file-link-mindnote-icon") /*id: 313215*/;
  var fileLinkOtherIcon = require("file-link-other-icon") /*id: 197851*/;
  var fileLinkSlidesIcon = require("file-link-slides-icon") /*id: 287809*/;
  var vcWhiteboardOutlinedIcon = require("vc-whiteboard-outlined-icon") /*id: 838577*/;
  var driveFileTypeConstants_1 = require("drive-file-type-constants_1") /*id: 944521*/;
  let p = fileLinkWordIcon_1.FileLinkWordIcon;
  let f = fileLinkWordIcon.FileLinkWordIcon;
  let v = fileLinkSheetIcon.FileLinkSheetIcon;
  let g = fileLinkBitableIcon.FileLinkBitableIcon;
  let b = fileLinkMindnoteIcon.FileLinkMindnoteOutlined;
  let m = fileLinkOtherIcon.FileLinkOtherIcon;
  let y = fileLinkSlidesIcon.FileLinkSlidesIcon;
  let k = {
    [driveFileTypeConstants_1.FileType.DOCX]: p,
    [driveFileTypeConstants_1.FileType.FILE]: f,
    [driveFileTypeConstants_1.FileType.SHEET]: v,
    [driveFileTypeConstants_1.FileType.BITABLE]: g,
    [driveFileTypeConstants_1.FileType.MINDNOTE]: b,
    [driveFileTypeConstants_1.FileType.BOX]: m,
    [driveFileTypeConstants_1.FileType.SLIDES]: y,
    [driveFileTypeConstants_1.FileType.WHITEBOARD]: vcWhiteboardOutlinedIcon.VcWhiteboardOutlinedIcon
  };
  require.d(exports, {
    GenericFileIcon: function () {
      return f;
    },
    FileTypeIconMap: function () {
      return k;
    },
    DocxFileIcon: function () {
      return p;
    }
  });
}