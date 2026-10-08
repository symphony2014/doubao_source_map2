// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DP' to 'activateCaptionEvt'
// - Renamed export 'Ld' to 'captionEditorClass'
// - Renamed export 'QY' to 'captionShortcuts'
// - Renamed export 'hL' to 'translatedHighlight'
// - Renamed export 'j9' to 'captionEditorArea'
// - Renamed export 'oB' to 'captionEditorActive'
// - Renamed export 'zR' to 'isCaptionEnabled'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 287236
         */
module.exports = function (module, exports, require) {
  var editorUndoModule = require("editor-undo-module") /*id: 933023*/;
  let i = "caption-editor-area";
  let l = "caption-translated-highlight";
  let c = "caption-editor";
  let u = "caption-editor-active";
  let a = "activate-caption-event";
  let s = false;
  let d = [{
    key: editorUndoModule.undoCommand,
    shortcut: {
      windows: {
        ctrlKey: true,
        keyCode: 90
      },
      mac: {
        metaKey: true,
        keyCode: 90
      }
    }
  }, {
    key: editorUndoModule.redoCommand,
    shortcut: [{
      windows: {
        ctrlKey: true,
        keyCode: 90,
        shiftKey: true
      },
      mac: {
        metaKey: true,
        keyCode: 90,
        shiftKey: true
      }
    }, {
      windows: {
        ctrlKey: true,
        keyCode: 89
      }
    }]
  }];
  require.d(exports, {
    activateCaptionEvt: function () {
      return a;
    },
    captionEditorClass: function () {
      return c;
    },
    captionShortcuts: function () {
      return d;
    },
    translatedHighlight: function () {
      return l;
    },
    captionEditorArea: function () {
      return i;
    },
    captionEditorActive: function () {
      return u;
    },
    isCaptionEnabled: function () {
      return s;
    }
  });
}