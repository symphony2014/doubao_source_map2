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
// - Updated imported property 'v1' to 'headingTypeArray' (module 433991)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'Vp' to 'removeRangeWithRevision' (module 368183)
// - Updated imported property 'Ej' to 'BlockTypeMap' (module 546936)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_markdownEditable.588b3f6b.js
         * chunkId: 82407
         * moduleId: 968271
         */
module.exports = function (module, exports, require) {
  var markdownExtensionConstants = require("markdown-extension-constants") /*id: 546936*/;
  var docxMarkdownFormattingUtils = require("docx-markdown-formatting-utils") /*id: 368183*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxToolboxConstants_3 = require("docx-toolbox-constants_3") /*id: 42034*/;
  let a = () => true;
  var c = [{
    moduleSettingName: docxToolboxConstants_3.toolboxCommands.MARKDOWN,
    setting: {
      name: "heading",
      replaceTriggerKey: true,
      triggerKey: " ",
      match: (e, t, n) => {
        let {
          type: r
        } = t;
        let i = /^(#{1,9}\s)(\S*|\S+[\s\S]*)$/.exec(e);
        let l = [0, 0];
        let c = {
          leftMatchKeyLength: 1,
          rangeAfterReplace: l,
          rangeToReplace: l
        };
        if (i) {
          if ((i[1].length - 1).toString() === r.split("heading")[1]) {
            return null;
          } else {
            c.rangeToReplace = [0, i[1].length];
            c.level = i[1].length - 1;
            return c;
          }
        }
        if (a() && docBlockTypeConstants.headingTypeArray.includes(r)) {
          let r = e.replace(/。/g, ".");
          let i = /^((\d+[.。]+)+\s)([\s\S]*)$/.exec(r);
          if (i) {
            var u;
            c.rangeToReplace = [0, i[1].length];
            let e = r.trim().split(".");
            let o = parseInt(e[e.length - 2], 10);
            if (e[0] === "0" || Number.isNaN(o) || o === 0) {
              return null;
            }
            let l = n == null ? undefined : (u = n.headingModule) === null || u === undefined ? undefined : u.getMarkdownAfterInsertInfo(t.id, e);
            if (l) {
              c.seq = l.seq;
              c.seq_level = l.seqLevel;
            }
            return c;
          }
        }
        return null;
      },
      action: e => {
        let {
          match: t,
          replaceWithLine: n
        } = e;
        let {
          level: r,
          seq: l,
          seq_level: a
        } = t;
        n((e, n) => {
          let {
            snapshot: c
          } = e;
          let u = docxMarkdownFormattingUtils.removeRangeWithRevision(e, t.rangeToReplace, n).toAttributeText();
          let g = {};
          let d = false;
          if (r) {
            g.type = `heading${r}`;
          }
          if (e.snapshot.type === docBlockTypeConstants.blockTypeConstants.ORDERED) {
            g.seq = "auto";
          }
          if (l || a) {
            g.seq = String(l);
            g.seq_level = String(a);
            d = !!c.folded;
          }
          return Object.assign({}, c, {
            text: u,
            folded: d,
            ...g
          });
        });
      },
      blockType: docBlockTypeConstants.blockTypeConstants.HEADING1
    },
    options: {
      priority: markdownExtensionConstants.BlockTypeMap.HEADING
    }
  }];
  require.r(exports);
  require.d(exports, {
    default: function () {
      return c;
    }
  });
}