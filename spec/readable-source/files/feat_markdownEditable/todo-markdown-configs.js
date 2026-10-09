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
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'Vp' to 'removeRangeWithRevision' (module 368183)
// - Updated imported property 'Ej' to 'BlockTypeMap' (module 546936)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_markdownEditable.588b3f6b.js
         * chunkId: 82407
         * moduleId: 739863
         */
module.exports = function (module, exports, require) {
  var markdownExtensionConstants = require("markdown-extension-constants") /*id: 546936*/;
  var docxMarkdownFormattingUtils = require("docx-markdown-formatting-utils") /*id: 368183*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxToolboxConstants_3 = require("docx-toolbox-constants_3") /*id: 42034*/;
  let a = () => [{
    moduleSettingName: docxToolboxConstants_3.toolboxCommands.MARKDOWN,
    setting: {
      name: "todo",
      replaceTriggerKey: true,
      triggerKey: " ",
      match: (e, t) => {
        let n = t.type;
        let r = /((\[]\s)|(【】\s))([\s\S]*)/.exec(e);
        if (r && n !== docBlockTypeConstants.blockTypeConstants.TODO) {
          return {
            leftMatchKeyLength: 2,
            rangeToReplace: [0, r[1].length],
            rangeAfterReplace: [0, 0],
            done: r[0].length === 4
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
            snapshot: r
          } = e;
          return Object.assign({}, r, {
            text: docxMarkdownFormattingUtils.removeRangeWithRevision(e, n.rangeToReplace, t).toAttributeText(),
            type: "todo",
            align: "",
            done: n.done
          });
        });
      },
      blockType: docBlockTypeConstants.blockTypeConstants.TODO
    },
    options: {
      priority: markdownExtensionConstants.BlockTypeMap.TODO
    }
  }];
  exports.default = a();
  require.r(exports);
  require.d(exports, {
    getTodoMarkdownConfigs: function () {
      return a;
    }
  });
}