// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Bz' to 'extractContentBlocks'
// - Renamed export 'ER' to 'cleanCodeTypeAttr'
// - Renamed export 'z0' to 'formatCodeBlock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 778320
         */
module.exports = function (module, exports, require) {
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  let l = e => {
    if ((e == null ? undefined : e.content_blocks_tree?.children) && e.content_blocks_tree.children.length !== 0) {
      return e.content_blocks_tree.children.map(e => {
        let {
          block_type: t,
          content_obj: n
        } = e;
        if (t === chatConstantsEnum.messageContentType.BLOCK_CODE) {
          return o(n, true);
        } else {
          return t === chatConstantsEnum.messageContentType.BLOCK_TEXT && (n == null ? undefined : n.text) || "";
        }
      }).filter(Boolean).join("\n");
    } else {
      return "";
    }
  };
  let r = e => e.startsWith("```STDOUT") ? e : `\`\`\`STDOUT
${e}
\`\`\``;
  let o = function (e, t = false) {
    let {
      code: n = "",
      std_out_list: i = [],
      type: l,
      content: o
    } = e || {};
    let a = o || n || "";
    if (a.trim()) {
      if (l === 1) {
        if (i && i.length !== 0) {
          return [a, ...i.map(e => r(e.content))].filter(Boolean).map(e => t ? s(e) : e).join("\n");
        } else if (t) {
          return s(a);
        } else {
          return a;
        }
      } else if (i && i.length !== 0) {
        return [`\`\`\`
${a}
\`\`\``, ...i.filter(e => !!e.content.trim()).map(e => `\`\`\`STDOUT
${e.content}
\`\`\``)].join("\n");
      } else {
        return `\`\`\`
${a}
\`\`\``;
      }
    } else {
      return "";
    }
  };
  let a = /(```\w*)\s+type="\w+"/;
  let s = e => e.replace(a, "$1");
  let c = /(```\w*)\s+type="\w+"/g;
  let d = e => e && typeof e == "string" ? e.replace(c, "$1") : e;
  require.d(exports, {
    extractContentBlocks: function () {
      return l;
    },
    cleanCodeTypeAttr: function () {
      return d;
    },
    formatCodeBlock: function () {
      return o;
    }
  });
}