// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(294821) to 'simple-mode-factory'
// - Updated imported property 'Q' to 'createSimpleMode' (module 294821)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14638.54843333.js
         * chunkId: 14638
         * moduleId: 651186
         */
module.exports = function (module, exports, require) {
  let r = require("simple-mode-factory") /*id: 294821*/.createSimpleMode({
    start: [{
      regex: /#?!.*/,
      token: "comment"
    }, {
      regex: /"""/,
      token: "string",
      next: "string3"
    }, {
      regex: /(STRING:)(\s)/,
      token: ["keyword", null],
      next: "string2"
    }, {
      regex: /\S*?"/,
      token: "string",
      next: "string"
    }, {
      regex: /(?:0x[\d,a-f]+)|(?:0o[0-7]+)|(?:0b[0,1]+)|(?:\-?\d+.?\d*)(?=\s)/,
      token: "number"
    }, {
      regex: /((?:GENERIC)|\:?\:)(\s+)(\S+)(\s+)(\()/,
      token: ["keyword", null, "def", null, "bracket"],
      next: "stack"
    }, {
      regex: /(M\:)(\s+)(\S+)(\s+)(\S+)/,
      token: ["keyword", null, "def", null, "tag"]
    }, {
      regex: /USING\:/,
      token: "keyword",
      next: "vocabulary"
    }, {
      regex: /(USE\:|IN\:)(\s+)(\S+)(?=\s|$)/,
      token: ["keyword", null, "tag"]
    }, {
      regex: /(\S+\:)(\s+)(\S+)(?=\s|$)/,
      token: ["keyword", null, "def"]
    }, {
      regex: /(?:;|\\|t|f|if|loop|while|until|do|PRIVATE>|<PRIVATE|\.|\S*\[|\]|\S*\{|\})(?=\s|$)/,
      token: "keyword"
    }, {
      regex: /\S+[\)>\.\*\?]+(?=\s|$)/,
      token: "builtin"
    }, {
      regex: /[\)><]+\S+(?=\s|$)/,
      token: "builtin"
    }, {
      regex: /(?:[\+\-\=\/\*<>])(?=\s|$)/,
      token: "keyword"
    }, {
      regex: /\S+/,
      token: "variable"
    }, {
      regex: /\s+|./,
      token: null
    }],
    vocabulary: [{
      regex: /;/,
      token: "keyword",
      next: "start"
    }, {
      regex: /\S+/,
      token: "tag"
    }, {
      regex: /\s+|./,
      token: null
    }],
    string: [{
      regex: /(?:[^\\]|\\.)*?"/,
      token: "string",
      next: "start"
    }, {
      regex: /.*/,
      token: "string"
    }],
    string2: [{
      regex: /^;/,
      token: "keyword",
      next: "start"
    }, {
      regex: /.*/,
      token: "string"
    }],
    string3: [{
      regex: /(?:[^\\]|\\.)*?"""/,
      token: "string",
      next: "start"
    }, {
      regex: /.*/,
      token: "string"
    }],
    stack: [{
      regex: /\)/,
      token: "bracket",
      next: "start"
    }, {
      regex: /--/,
      token: "bracket"
    }, {
      regex: /\S+/,
      token: "meta"
    }, {
      regex: /\s+|./,
      token: null
    }],
    languageData: {
      name: "factor",
      dontIndentStates: ["start", "vocabulary", "string", "string3", "stack"],
      commentTokens: {
        line: "!"
      }
    }
  });
  require.r(exports);
  require.d(exports, {
    factor: function () {
      return r;
    }
  });
}