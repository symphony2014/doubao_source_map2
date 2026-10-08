// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N8' to 'hasFoldedContent'
// - Renamed export 'el' to 'unfoldContent'
// - Renamed export 'tp' to 'extractUnfoldedText'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_shortcut.41d20a88.js
         * chunkId: 35682
         * moduleId: 35914
         */
module.exports = function (module, exports, require) {
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var contentFoldOperations = require("content-fold-operations") /*id: 849924*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  let c = e => Object.values(e.apool.numToAttrib).some(e => e[0] === contentFoldOperations.FOLDED_CONSTANT);
  let d = e => {
    let i = deltaSetChangesetConverter_1.attributedTextToDeltaSet(e.initialAttributedTexts, e.apool);
    i.get(editorModuleConstantsConfig.defaultVersion).forEach(e => {
      if (deltaSetCore.isInsertString(e) && e.attributes?.[contentFoldOperations.FOLDED_CONSTANT]) {
        delete e.attributes[contentFoldOperations.FOLDED_CONSTANT];
      }
    });
    return deltaSetChangesetConverter_1.extractAttributedTexts(i, {
      filterInitialAttributedText: true
    });
  };
  let u = (e, i) => {
    if (!editorTextBlockUtilities.hasTextWithApoolSimple(e.snapshot)) {
      return;
    }
    let r = d(e.snapshot.text);
    i.replace(e.id, ["text"], r);
  };
  require.d(exports, {
    hasFoldedContent: function () {
      return c;
    },
    unfoldContent: function () {
      return u;
    },
    extractUnfoldedText: function () {
      return d;
    }
  });
}