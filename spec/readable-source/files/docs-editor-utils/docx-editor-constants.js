// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A$' to 'editorFlag'
// - Renamed export 'An' to 'wechatPrefix'
// - Renamed export 'Ho' to 'editorMinSize'
// - Renamed export 'R8' to 'maxEditorWidth'
// - Renamed export 'Ti' to 'editorLimit'
// - Renamed export 'VN' to 'editorPadding'
// - Renamed export 'Zb' to 'mediaDomain'
// - Renamed export 'aH' to 'cropperTool'
// - Renamed export 'e0' to 'commandWhitelist'
// - Renamed export 'iI' to 'maxFileSize'
// - Renamed export 'sK' to 'mediaTypes'
// - Renamed export 'xm' to 'backspaceCmds'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 708986
         */
module.exports = function (module, exports, require) {
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  let l = docxEditorConstantsConfig.maxEditorWidth;
  let c = 50;
  let u = 32;
  let a = 10485760;
  let s = [0, 0, 1, 1];
  let d = 1;
  let f = "mmbiz.qpic.cn";
  let h = "wx_";
  let _ = [docEditorCommandConstants.turnIntoQuoteContainer, docEditorCommandConstants.selectAllCommand, docEditorCommandConstants.shiftArrowDown, docEditorCommandConstants.shiftArrowUp, docEditorCommandConstants.switchToReadMode, docEditorCommandConstants.switchHelpSlideBar, docEditorCommandConstants.commandFind, docEditorCommandConstants.commandReplace, docEditorCommandConstants.presentationMode, docEditorCommandConstants.advancedSearchCommand];
  let p = [docEditorCommandConstants.commandBackspace];
  let g = "image-cropper";
  let E = ["image", "caption"];
  require.d(exports, {
    editorFlag: function () {
      return d;
    },
    wechatPrefix: function () {
      return h;
    },
    editorMinSize: function () {
      return u;
    },
    maxEditorWidth: function () {
      return l;
    },
    editorLimit: function () {
      return c;
    },
    editorPadding: function () {
      return s;
    },
    mediaDomain: function () {
      return f;
    },
    cropperTool: function () {
      return g;
    },
    commandWhitelist: function () {
      return _;
    },
    maxFileSize: function () {
      return a;
    },
    mediaTypes: function () {
      return E;
    },
    backspaceCmds: function () {
      return p;
    }
  });
}