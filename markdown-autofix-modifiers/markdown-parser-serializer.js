// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'eL' to 'parseMarkdown'
// - Renamed export 'jO' to 'hasChildren'
// - Renamed export 'U$' to 'serializeAst'
// - Renamed export 'Xy' to 'isHeadingNode'
// - Renamed export 'C_' to 'isRootNode'
// - Renamed export 'AC' to 'hasValue'
// - Renamed export 'mB' to 'extractText'
// - Renamed export 'Xd' to 'isNodeType'
// - Renamed export 'zj' to 'serializeMarkdown'
// - Renamed export 'UY' to 'hasNodeChildren'
// - Renamed export 'Or' to 'isImageNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 52853.7f831412.js
         * chunkId: 52853
         * moduleId: 512638
         */
module.exports = function (module, exports, require) {
  var tasklistCheckTokenizer = require("tasklist-check-tokenizer") /*id: 563371*/;
  var markdownTableExtension = require("markdown-table-extension") /*id: 598673*/;
  var markdownMathSyntaxParser = require("markdown-math-syntax-parser") /*id: 464544*/;
  var markdownStrikethroughSyntax = require("markdown-strikethrough-syntax") /*id: 999380*/;
  var gfmFootnoteSyntaxExtension = require("gfm-footnote-syntax-extension") /*id: 546103*/;
  var markdownSerializerCore = require("markdown-serializer-core") /*id: 482428*/;
  var markdownMathConfig = require("markdown-math-config") /*id: 468286*/;
  var markdownTaskListSerializer = require("markdown-task-list-serializer") /*id: 112265*/;
  var markdownTableSerializer = require("markdown-table-serializer") /*id: 657939*/;
  var markdownStrikethroughExt = require("markdown-strikethrough-ext") /*id: 604648*/;
  var gfmFootnoteParserCompiler = require("gfm-footnote-parser-compiler") /*id: 583857*/;
  var markdownParserCore = require("markdown-parser-core") /*id: 849340*/;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  let y = () => ({
    disable: {
      null: ["setextUnderline"]
    }
  });
  let g = () => ({
    disable: {
      null: ["codeIndented"]
    }
  });
  let b = function (e, t = {}) {
    let {
      enableIndentedCode: r = false,
      enableFootnote: a = false,
      enableDollarTex: m = true
    } = t;
    let h = [markdownTableExtension.markdownTable(), y(), markdownStrikethroughSyntax.strikethroughSyntax({
      singleTilde: false
    }), tasklistCheckTokenizer.tasklistTokenizer()];
    let b = [markdownTableSerializer.getTableHandlers(), markdownStrikethroughExt.strikeSyntax(), markdownTaskListSerializer.taskListExits()];
    if (!r) {
      h.push(g());
    }
    if (a) {
      h.push(gfmFootnoteSyntaxExtension.gfmFootnoteExtension());
      b.push(gfmFootnoteParserCompiler.footnoteParser());
    }
    if (m) {
      h.push(markdownMathSyntaxParser.createMathParser());
      b.push(markdownMathConfig.createMathParser());
    }
    return markdownParserCore.parseMarkdown(e, {
      extensions: h,
      mdastExtensions: b
    });
  };
  let x = function (e, t = false) {
    let {
      enableFootnote: r = false,
      strip: i = false,
      enableDollarTex: n = true
    } = isBooleanUtil.isBoolean(t) ? {} : t;
    let l = isBooleanUtil.isBoolean(t) ? t : i;
    let o = [markdownTableSerializer.getTableSerializer(), markdownStrikethroughExt.strikeSerialize(), markdownTaskListSerializer.taskListExtension()];
    if (r) {
      o.push(gfmFootnoteParserCompiler.footnoteCompiler());
    }
    if (n) {
      o.push(markdownMathConfig.createMathCompiler());
    }
    let u = markdownSerializerCore.serializeMarkdown(e, {
      extensions: o,
      resourceLink: true,
      fences: true
    });
    if (l) {
      return u.trim();
    } else {
      return u;
    }
  };
  let _ = function (e, t = false) {
    if (!e.length) {
      return "";
    }
    let r = x({
      type: "root",
      children: e
    }, true);
    if (t) {
      return r.replace(/\n/g, "");
    } else {
      return r;
    }
  };
  let w = e => !isUndefinedCheck.isUndefined(e == null ? undefined : e.children);
  let $ = e => !isUndefinedCheck.isUndefined(e == null ? undefined : e.children);
  let j = e => !isUndefinedCheck.isUndefined(e == null ? undefined : e.value);
  let S = e => (e == null ? undefined : e.type) === "image";
  let P = e => (e == null ? undefined : e.type) === "root";
  let E = function (e) {
    var t = arguments.length;
    var r = Array(t > 1 ? t - 1 : 0);
    var i = 1;
    for (; i < t; i++) {
      r[i - 1] = arguments[i];
    }
    return r.some(t => (e == null ? undefined : e.type) === t);
  };
  let Z = e => w(e) && e.type === "heading";
  let O = function (e, t = {}) {
    let {
      filter: r
    } = t;
    if (r && !r(e)) {
      return "";
    } else if (w(e)) {
      return `${e.children.map(e => O(e, t)).join("")}
`;
    } else if (j(e)) {
      return e.value;
    } else {
      return "";
    }
  };
  require.d(exports, {
    parseMarkdown: function () {
      return b;
    },
    hasChildren: function () {
      return w;
    },
    serializeAst: function () {
      return _;
    },
    isHeadingNode: function () {
      return Z;
    },
    isRootNode: function () {
      return P;
    },
    hasValue: function () {
      return j;
    },
    extractText: function () {
      return O;
    },
    isNodeType: function () {
      return E;
    },
    serializeMarkdown: function () {
      return x;
    },
    hasNodeChildren: function () {
      return $;
    },
    isImageNode: function () {
      return S;
    }
  });
}