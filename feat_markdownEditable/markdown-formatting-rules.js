// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'markdownExtensionConstants'
// - Resolved require(546936) to 'markdown-extension-constants'
// - Renamed variable 'i' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'o' to 'docxToolboxConstants_3'
// - Resolved require(42034) to 'docx-toolbox-constants_3'
// - Renamed variable 'a' to 'chatUserInfoService'
// - Resolved require(152763) to 'chat-user-info-service'
// - Renamed variable 'c' to 'docxUtilityHelpers'
// - Resolved require(859002) to 'docx-utility-helpers'
// - Renamed variable 'u' to 'aiBlockTypeUtils'
// - Resolved require(173943) to 'ai-block-type-utils'
// - Renamed variable 'g' to 'docxEquationEventTracking'
// - Resolved require(80663) to 'docx-equation-event-tracking'
// - Renamed variable 'd' to 'docxToolboxUtility'
// - Resolved require(64748) to 'docx-toolbox-utility'
// - Renamed variable 's' to 'docxInlineBlockRenderers'
// - Resolved require(381474) to 'docx-inline-block-renderers'
// - Updated imported property 'S' to 'toolboxCommands' (module 42034)
// - Updated imported property 'RQ' to 'formatBold' (module 546936)
// - Updated imported property 'S2' to 'markdownConfig4_1' (module 546936)
// - Updated imported property 'Ej' to 'BlockTypeMap' (module 546936)
// - Updated imported property 'nE' to 'formatItalic' (module 546936)
// - Updated imported property 'mt' to 'markdownConfig2_2' (module 546936)
// - Updated imported property 'qm' to 'formatUnderline' (module 546936)
// - Updated imported property 'fG' to 'markdownConfig2_1' (module 546936)
// - Updated imported property 'dS' to 'formatStrike' (module 546936)
// - Updated imported property 'sw' to 'markdownConfig4_2' (module 546936)
// - Updated imported property 'Qk' to 'formatInlineCode' (module 546936)
// - Updated imported property '_D' to 'markdownConfig2' (module 546936)
// - Updated imported property 'l8' to 'formatEquation' (module 546936)
// - Updated imported property 'GR' to 'markdownConfig4' (module 546936)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'a' to 'isDocxEnabled' (module 64748)
// - Updated imported property 'IW' to 'hasAiBlockInPath' (module 173943)
// - Updated imported property 'D1' to 'generateRandomId' (module 859002)
// - Updated imported property 'CQ' to 'EquationRendererClass' (module 381474)
// - Updated imported property 'z' to 'userInfoService' (module 152763)
// - Updated imported property 'ZP' to 'trackEquationEdit' (module 80663)
// - Updated imported property 'eL' to 'InlineEditActions' (module 80663)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_markdownEditable.588b3f6b.js
         * chunkId: 82407
         * moduleId: 781810
         */
module.exports = function (module, exports, require) {
  var markdownExtensionConstants = require("markdown-extension-constants") /*id: 546936*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxToolboxConstants_3 = require("docx-toolbox-constants_3") /*id: 42034*/;
  let l = (e, t) => RegExp(`${e}{2,}.+${e}{2,}\\s`).test(t) ? null : RegExp(`${e}([^\\s${e}]+|[^\\s${e}]+[^${e}]*[^\\s${e}]+)${e}\\s`).exec(t);
  var chatUserInfoService = require("chat-user-info-service") /*id: 152763*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var aiBlockTypeUtils = require("ai-block-type-utils") /*id: 173943*/;
  var docxEquationEventTracking = require("docx-equation-event-tracking") /*id: 80663*/;
  var docxToolboxUtility = require("docx-toolbox-utility") /*id: 64748*/;
  var docxInlineBlockRenderers = require("docx-inline-block-renderers") /*id: 381474*/;
  var p = [{
    moduleSettingName: docxToolboxConstants_3.toolboxCommands.MARKDOWN,
    setting: {
      name: markdownExtensionConstants.formatBold,
      triggerKey: " ",
      match: e => {
        let t = /\*\*(\S+)\*\*\s/.exec(e);
        if (t) {
          return {
            leftMatchKeyLength: 2,
            rangeToReplace: [t.index, t.index + (t[1].length + markdownExtensionConstants.markdownConfig4_1)],
            rangeAfterReplace: [t.index, t.index + t[1].length],
            text: t[1]
          };
        } else {
          return null;
        }
      },
      action: e => {
        let {
          match: t,
          replaceWithInline: n
        } = e;
        n([{
          text: t.text,
          mark: {
            bold: "true"
          }
        }]);
      },
      blockType: docBlockTypeConstants.blockTypeConstants.TEXT
    },
    options: {
      priority: markdownExtensionConstants.BlockTypeMap.BOLD
    }
  }, {
    moduleSettingName: docxToolboxConstants_3.toolboxCommands.MARKDOWN,
    setting: {
      name: markdownExtensionConstants.formatItalic,
      triggerKey: " ",
      match: e => {
        let t = l("\\*", e);
        if (t) {
          return {
            leftMatchKeyLength: 1,
            rangeToReplace: [t.index, t.index + (t[1].length + markdownExtensionConstants.markdownConfig2_2)],
            rangeAfterReplace: [t.index, t.index + t[1].length],
            text: t[1]
          };
        } else {
          return null;
        }
      },
      action: e => {
        let {
          match: t,
          replaceWithInline: n
        } = e;
        n([{
          text: t.text,
          mark: {
            italic: "true"
          }
        }]);
      },
      blockType: docBlockTypeConstants.blockTypeConstants.TEXT
    },
    options: {
      priority: markdownExtensionConstants.BlockTypeMap.ITALIC
    }
  }, {
    moduleSettingName: docxToolboxConstants_3.toolboxCommands.MARKDOWN,
    setting: {
      name: markdownExtensionConstants.formatUnderline,
      triggerKey: " ",
      match: e => {
        let t = l("~", e);
        if (t) {
          return {
            leftMatchKeyLength: 1,
            rangeToReplace: [t.index, t.index + (t[1].length + markdownExtensionConstants.markdownConfig2_1)],
            rangeAfterReplace: [t.index, t.index + t[1].length],
            text: t[1]
          };
        } else {
          return null;
        }
      },
      action: e => {
        let {
          match: t,
          replaceWithInline: n
        } = e;
        n([{
          text: t.text,
          mark: {
            underline: "true"
          }
        }]);
      },
      blockType: docBlockTypeConstants.blockTypeConstants.TEXT
    },
    options: {
      priority: markdownExtensionConstants.BlockTypeMap.UNDERLINE
    }
  }, {
    moduleSettingName: docxToolboxConstants_3.toolboxCommands.MARKDOWN,
    setting: {
      name: markdownExtensionConstants.formatStrike,
      triggerKey: " ",
      match: e => {
        let t = /~~(\S|\S+.*\S+)~~\s/.exec(e);
        if (t) {
          return {
            leftMatchKeyLength: 2,
            rangeToReplace: [t.index, t.index + (t[1].length + markdownExtensionConstants.markdownConfig4_2)],
            rangeAfterReplace: [t.index, t.index + t[1].length],
            text: t[1]
          };
        } else {
          return null;
        }
      },
      action: e => {
        let {
          match: t,
          replaceWithInline: n
        } = e;
        n([{
          text: t.text,
          mark: {
            strikethrough: "true"
          }
        }]);
      },
      blockType: docBlockTypeConstants.blockTypeConstants.TEXT
    },
    options: {
      priority: markdownExtensionConstants.BlockTypeMap.STRIKETHROUGH
    }
  }, {
    moduleSettingName: docxToolboxConstants_3.toolboxCommands.MARKDOWN,
    setting: {
      name: markdownExtensionConstants.formatInlineCode,
      triggerKey: "`",
      replaceTriggerKey: true,
      match: (e, t, n) => {
        let i = n ? n.formattedText : null;
        let o = /(`)(\S*|\S+[\s\S]*)(`)/.exec(i || e);
        let l = o && o[2];
        if (o && l && l !== "`") {
          return {
            leftMatchKeyLength: 1,
            rangeToReplace: [o.index, o.index + (o[2].length + markdownExtensionConstants.markdownConfig2)],
            rangeAfterReplace: [o.index, o.index + o[2].length],
            text: e.slice(o.index + 1, o.index + (o[2].length + markdownExtensionConstants.markdownConfig2) - 1)
          };
        } else {
          return null;
        }
      },
      action: e => {
        let {
          match: t,
          replaceWithInline: n
        } = e;
        n([{
          text: t.text,
          mark: {
            inlineCode: "true"
          }
        }]);
      },
      blockType: docBlockTypeConstants.blockTypeConstants.TEXT
    },
    options: {
      priority: markdownExtensionConstants.BlockTypeMap.INLINE_CODE
    }
  }, {
    moduleSettingName: docxToolboxConstants_3.toolboxCommands.MARKDOWN,
    setting: {
      name: markdownExtensionConstants.formatEquation,
      replaceTriggerKey: true,
      triggerKey: "$",
      match: (e, t) => {
        if (!docxToolboxUtility.isDocxEnabled() || aiBlockTypeUtils.hasAiBlockInPath(t.blockManager, t.id)) {
          return null;
        }
        let i = /\$\$(\S|\S+.*\S+)\$\$|\${4}/.exec(e);
        if (!i) {
          return null;
        }
        let o = i.index || 0;
        let l = i[1] || "\n";
        return {
          rangeToReplace: [o, o + ((i[1]?.length || 0) + markdownExtensionConstants.markdownConfig4)],
          rangeAfterReplace: [o, o + 1],
          text: l,
          leftMatchKeyLength: 2
        };
      },
      action: e => {
        let {
          match: t,
          replaceWithInline: n
        } = e;
        let r = t.text || "\n";
        let i = docxUtilityHelpers.generateRandomId(8);
        let o = true;
        if (r === "\n") {
          docxInlineBlockRenderers.EquationRendererClass.toolboxInsertEquationSet.add(i);
          o = false;
        }
        docxInlineBlockRenderers.EquationRendererClass.initEquationSet.add(i);
        n([{
          text: " ",
          mark: {
            author: chatUserInfoService.userInfoService.getCurrentUser().get("id"),
            equation: r,
            objectID: i
          }
        }], o);
        docxEquationEventTracking.trackEquationEdit(docxEquationEventTracking.InlineEditActions.ADD);
      },
      blockType: docBlockTypeConstants.blockTypeConstants.TEXT
    },
    options: {
      priority: markdownExtensionConstants.BlockTypeMap.EQUATION
    }
  }];
  require.r(exports);
  require.d(exports, {
    default: function () {
      return p;
    }
  });
}