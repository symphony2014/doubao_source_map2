// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'markdownExtensionConstants'
// - Resolved require(546936) to 'markdown-extension-constants'
// - Renamed variable 'i' to 'docxMarkdownFormattingUtils'
// - Resolved require(368183) to 'docx-markdown-formatting-utils'
// - Renamed variable 'o' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'l' to 'docxToolboxConstants_3'
// - Resolved require(42034) to 'docx-toolbox-constants_3'
// - Updated imported property 'S' to 'toolboxCommands' (module 42034)
// - Updated imported property 'Vp' to 'removeRangeWithRevision' (module 368183)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'Ej' to 'BlockTypeMap' (module 546936)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_markdownEditable.588b3f6b.js
         * chunkId: 82407
         * moduleId: 215943
         */
module.exports = function (module, exports, require) {
  var markdownExtensionConstants = require("markdown-extension-constants") /*id: 546936*/;
  var docxMarkdownFormattingUtils = require("docx-markdown-formatting-utils") /*id: 368183*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxToolboxConstants_3 = require("docx-toolbox-constants_3") /*id: 42034*/;
  let a = () => [{
    moduleSettingName: docxToolboxConstants_3.toolboxCommands.MARKDOWN,
    setting: {
      name: "quote-container",
      replaceTriggerKey: true,
      triggerKey: " ",
      match: e => {
        let t = /^[>|》]\s$/.exec(e);
        if (t) {
          return {
            leftMatchKeyLength: 1,
            rangeToReplace: [0, t[0].length],
            rangeAfterReplace: [0, 0]
          };
        } else {
          return null;
        }
      },
      action: e => {
        let {
          match: t,
          replaceWithLine: n
        } = e;
        n((e, n) => {
          let {
            snapshot: r
          } = e;
          return Object.assign({}, r, {
            text: docxMarkdownFormattingUtils.removeRangeWithRevision(e, t.rangeToReplace, n).toAttributeText(),
            type: docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER
          });
        });
      },
      blockType: docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER
    },
    options: {
      priority: markdownExtensionConstants.BlockTypeMap.QUOTE_CONTAINER
    }
  }];
  exports.default = a();
  require.r(exports);
  require.d(exports, {
    getQuoteMarkdownConfigs: function () {
      return a;
    }
  });
}