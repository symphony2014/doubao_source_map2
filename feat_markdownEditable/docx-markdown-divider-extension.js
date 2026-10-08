// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatUserInfoService'
// - Resolved require(152763) to 'chat-user-info-service'
// - Renamed variable 'i' to 'markdownExtensionConstants'
// - Resolved require(546936) to 'markdown-extension-constants'
// - Renamed variable 'o' to 'docxMarkdownFormattingUtils'
// - Resolved require(368183) to 'docx-markdown-formatting-utils'
// - Renamed variable 'l' to 'aiBlockTypeUtils'
// - Resolved require(173943) to 'ai-block-type-utils'
// - Renamed variable 'a' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'c' to 'docxToolboxConstants_3'
// - Resolved require(42034) to 'docx-toolbox-constants_3'
// - Updated imported property 'IW' to 'hasAiBlockInPath' (module 173943)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'z' to 'userInfoService' (module 152763)
// - Updated imported property 'Vp' to 'removeRangeWithRevision' (module 368183)
// - Updated imported property 'S' to 'toolboxCommands' (module 42034)
// - Updated imported property 'Ej' to 'BlockTypeMap' (module 546936)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_markdownEditable.588b3f6b.js
         * chunkId: 82407
         * moduleId: 692675
         */
module.exports = function (module, exports, require) {
  var chatUserInfoService = require("chat-user-info-service") /*id: 152763*/;
  var markdownExtensionConstants = require("markdown-extension-constants") /*id: 546936*/;
  var docxMarkdownFormattingUtils = require("docx-markdown-formatting-utils") /*id: 368183*/;
  var aiBlockTypeUtils = require("ai-block-type-utils") /*id: 173943*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxToolboxConstants_3 = require("docx-toolbox-constants_3") /*id: 42034*/;
  let u = (e, t, n) => {
    let r = n.exec(e);
    if (aiBlockTypeUtils.hasAiBlockInPath(t.blockManager, t.id) || !r) {
      return null;
    } else {
      return {
        leftMatchKeyLength: 3,
        rangeToReplace: [0, r[1].length],
        rangeAfterReplace: [0, 0]
      };
    }
  };
  let g = e => {
    let {
      replaceWithLine: t,
      match: n
    } = e;
    t((e, t) => {
      let {
        snapshot: i
      } = e;
      let l = [];
      l.push({
        parent_id: i.parent_id,
        type: docBlockTypeConstants.blockTypeConstants.DIVIDER,
        author: chatUserInfoService.userInfoService.getCurrentUser().get("id")
      });
      l.push(Object.assign({}, i, {
        text: docxMarkdownFormattingUtils.removeRangeWithRevision(e, n.rangeToReplace, t).toAttributeText()
      }));
      return l;
    });
  };
  let d = [{
    moduleSettingName: docxToolboxConstants_3.toolboxCommands.MARKDOWN,
    setting: {
      name: "divider",
      triggerKey: "-",
      replaceTriggerKey: true,
      match: (e, t) => u(e, t, /^([-]{3})([\s\S])*/),
      action: g,
      blockType: docBlockTypeConstants.blockTypeConstants.DIVIDER
    },
    options: {
      priority: markdownExtensionConstants.BlockTypeMap.DIVIDER
    }
  }, {
    moduleSettingName: docxToolboxConstants_3.toolboxCommands.MARKDOWN,
    setting: {
      name: "divider",
      triggerKey: "*",
      replaceTriggerKey: true,
      match: (e, t) => u(e, t, /^([*]{3})([\s\S])*/),
      action: g,
      blockType: docBlockTypeConstants.blockTypeConstants.DIVIDER
    },
    options: {
      priority: markdownExtensionConstants.BlockTypeMap.DIVIDER_ASTERISK
    }
  }];
  exports.default = d;
  require.r(exports);
}