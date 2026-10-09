// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'highlightjsLanguageResolver'
// - Resolved require(553850) to 'highlightjs-language-resolver'
// - Renamed variable 'i' to 'docxToolboxConstants_3'
// - Resolved require(42034) to 'docx-toolbox-constants_3'
// - Renamed variable 'o' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'l' to 'docxCodeBlockUtils'
// - Resolved require(352632) to 'docx-code-block-utils'
// - Renamed variable 'a' to 'docxMarkdownFormattingUtils'
// - Resolved require(368183) to 'docx-markdown-formatting-utils'
// - Renamed variable 'c' to 'markdownExtensionConstants'
// - Resolved require(546936) to 'markdown-extension-constants'
// - Updated imported property 'Vp' to 'removeRangeWithRevision' (module 368183)
// - Updated imported property 'pZ' to 'processCodeDelta' (module 352632)
// - Updated imported property 'x' to 'getCodeBlockLang' (module 352632)
// - Updated imported property 'k' to 'resolveLanguage' (module 553850)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'S' to 'toolboxCommands' (module 42034)
// - Updated imported property 'Ej' to 'BlockTypeMap' (module 546936)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_markdownEditable.588b3f6b.js
         * chunkId: 82407
         * moduleId: 198452
         */
module.exports = function (module, exports, require) {
  var highlightjsLanguageResolver = require("highlightjs-language-resolver") /*id: 553850*/;
  var docxToolboxConstants_3 = require("docx-toolbox-constants_3") /*id: 42034*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxCodeBlockUtils = require("docx-code-block-utils") /*id: 352632*/;
  var docxMarkdownFormattingUtils = require("docx-markdown-formatting-utils") /*id: 368183*/;
  var markdownExtensionConstants = require("markdown-extension-constants") /*id: 546936*/;
  let u = {
    name: "code",
    replaceTriggerKey: true,
    triggerKey: " ",
    match: e => {
      let t = e.match(/[`·]{3}(\S*)(?:\s|Enter)/);
      if (t) {
        return {
          rangeToReplace: [0, t[0].length],
          rangeAfterReplace: [0, 0],
          leftMatchKeyLength: 3,
          language: t[1]
        };
      } else {
        return null;
      }
    },
    action: e => {
      let {
        replaceWithLine: t,
        match: n
      } = e;
      t((e, t) => {
        let {
          snapshot: i
        } = e;
        let o = docxMarkdownFormattingUtils.removeRangeWithRevision(e, n.rangeToReplace, t);
        let c = docxCodeBlockUtils.processCodeDelta(o, e.blockManager.editorAPI.modelService);
        return Object.assign({}, i, {
          text: o.applyDeltaWithClone(c).toAttributeText(),
          type: "code",
          language: highlightjsLanguageResolver.resolveLanguage(n.language, docxCodeBlockUtils.getCodeBlockLang())
        });
      });
    },
    blockType: docBlockTypeConstants.blockTypeConstants.CODE
  };
  let g = [{
    moduleSettingName: docxToolboxConstants_3.toolboxCommands.MARKDOWN,
    setting: u,
    options: {
      priority: markdownExtensionConstants.BlockTypeMap.CODE
    }
  }, {
    moduleSettingName: docxToolboxConstants_3.toolboxCommands.MARKDOWN,
    setting: {
      ...u,
      triggerKey: "Enter"
    },
    options: {
      priority: markdownExtensionConstants.BlockTypeMap.CODE_ENTER
    }
  }];
  exports.default = g;
  require.r(exports);
}