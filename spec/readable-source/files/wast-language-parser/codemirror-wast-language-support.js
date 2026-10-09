// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'codemirrorLanguageSupport'
// - Resolved require(976653) to 'codemirror-language-support'
// - Renamed variable 'r' to 'syntaxHighlightTags'
// - Resolved require(852622) to 'syntax-highlight-tags'
// - Renamed variable 'h' to 'lrParserDefinition'
// - Resolved require(556971) to 'lr-parser-definition'
// - Updated imported property 'WQ' to 'LrParser' (module 556971)
// - Updated imported property 'qp' to 'Parser' (module 976653)
// - Updated imported property 'uj' to 'indentNodeProp' (module 976653)
// - Updated imported property 'vw' to 'continuedIndent' (module 976653)
// - Updated imported property 'x0' to 'foldState' (module 976653)
// - Updated imported property 'Dv' to 'getFoldRange' (module 976653)
// - Updated imported property 'ri' to 'Language' (module 976653)
// - Updated imported property 'Gv' to 'defineHighlighter' (module 852622)
// - Updated imported property 'pJ' to 'defaultTags' (module 852622)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21043.2eee2206.js
         * chunkId: 21043
         * moduleId: 970549
         */
module.exports = function (module, exports, require) {
  var codemirrorLanguageSupport = require("codemirror-language-support") /*id: 976653*/;
  var syntaxHighlightTags = require("syntax-highlight-tags") /*id: 852622*/;
  var lrParserDefinition = require("lr-parser-definition") /*id: 556971*/;
  let n = {
    __proto__: null,
    anyref: 34,
    dataref: 34,
    eqref: 34,
    externref: 34,
    i31ref: 34,
    funcref: 34,
    i8: 34,
    i16: 34,
    i32: 34,
    i64: 34,
    f32: 34,
    f64: 34
  };
  let o = lrParserDefinition.LrParser.deserialize({
    version: 14,
    states: "!^Q]QPOOOqQPO'#CbOOQO'#Cd'#CdOOQO'#Cl'#ClOOQO'#Ch'#ChQ]QPOOOOQO,58|,58|OxQPO,58|OOQO-E6f-E6fOOQO1G.h1G.h",
    stateData: "!P~O_OSPOSQOS~OTPOVROXROYROZROaQO~OSUO~P]OSXO~P]O",
    goto: "xaPPPPPPbPbPPPhPPPrXROPTVQTOQVPTWTVXSOPTV",
    nodeNames: "⚠ LineComment BlockComment Module ) ( App Identifier Type Keyword Number String",
    maxTerm: 17,
    nodeProps: [["isolate", -3, 1, 2, 11, ""], ["openedBy", 4, "("], ["closedBy", 5, ")"], ["group", -6, 6, 7, 8, 9, 10, 11, "Expression"]],
    skippedNodes: [0, 1, 2],
    repeatNodeCount: 1,
    tokenData: "0o~R^XY}YZ}]^}pq}rs!Stu#pxy'Uyz(e{|(j}!O(j!Q!R(s!R![*p!]!^.^#T#o.{~!SO_~~!VVOr!Srs!ls#O!S#O#P!q#P;'S!S;'S;=`#j<%lO!S~!qOZ~~!tRO;'S!S;'S;=`!};=`O!S~#QWOr!Srs!ls#O!S#O#P!q#P;'S!S;'S;=`#j;=`<%l!S<%lO!S~#mP;=`<%l!S~#siqr%bst%btu%buv%bvw%bwx%bz{%b{|%b}!O%b!O!P%b!P!Q%b!Q![%b![!]%b!^!_%b!_!`%b!`!a%b!a!b%b!b!c%b!c!}%b#Q#R%b#R#S%b#S#T%b#T#o%b#p#q%b#r#s%b~%giV~qr%bst%btu%buv%bvw%bwx%bz{%b{|%b}!O%b!O!P%b!P!Q%b!Q![%b![!]%b!^!_%b!_!`%b!`!a%b!a!b%b!b!c%b!c!}%b#Q#R%b#R#S%b#S#T%b#T#o%b#p#q%b#r#s%b~'ZPT~!]!^'^~'aTO!]'^!]!^'p!^;'S'^;'S;=`(_<%lO'^~'sVOy'^yz(Yz!]'^!]!^'p!^;'S'^;'S;=`(_<%lO'^~(_OQ~~(bP;=`<%l'^~(jOS~~(mQ!Q!R(s!R![*p~(xUY~!O!P)[!Q![*p!g!h){#R#S+U#X#Y){#l#m+[~)aRY~!Q![)j!g!h){#X#Y){~)oSY~!Q![)j!g!h){#R#S*j#X#Y){~*OR{|*X}!O*X!Q![*_~*[P!Q![*_~*dQY~!Q![*_#R#S*X~*mP!Q![)j~*uTY~!O!P)[!Q![*p!g!h){#R#S+U#X#Y){~+XP!Q![*p~+_R!Q![+h!c!i+h#T#Z+h~+mVY~!O!P,S!Q![+h!c!i+h!r!s-P#R#S+[#T#Z+h#d#e-P~,XTY~!Q![,h!c!i,h!r!s-P#T#Z,h#d#e-P~,mUY~!Q![,h!c!i,h!r!s-P#R#S.Q#T#Z,h#d#e-P~-ST{|-c}!O-c!Q![-o!c!i-o#T#Z-o~-fR!Q![-o!c!i-o#T#Z-o~-tSY~!Q![-o!c!i-o#R#S-c#T#Z-o~.TR!Q![,h!c!i,h#T#Z,h~.aP!]!^.d~.iSP~OY.dZ;'S.d;'S;=`.u<%lO.d~.xP;=`<%l.d~/QiX~qr.{st.{tu.{uv.{vw.{wx.{z{.{{|.{}!O.{!O!P.{!P!Q.{!Q![.{![!].{!^!_.{!_!`.{!`!a.{!a!b.{!b!c.{!c!}.{#Q#R.{#R#S.{#S#T.{#T#o.{#p#q.{#r#s.{",
    tokenizers: [0],
    topRules: {
      Module: [0, 3]
    },
    specialized: [{
      term: 9,
      get: t => n[t] || -1
    }],
    tokenPrec: 0
  });
  let a = codemirrorLanguageSupport.Parser.define({
    name: "wast",
    parser: o.configure({
      props: [codemirrorLanguageSupport.indentNodeProp.add({
        App: codemirrorLanguageSupport.continuedIndent({
          closing: ")",
          align: false
        })
      }), codemirrorLanguageSupport.foldState.add({
        App: codemirrorLanguageSupport.getFoldRange,
        BlockComment: t => ({
          from: t.from + 2,
          to: t.to - 2
        })
      }), syntaxHighlightTags.defineHighlighter({
        Keyword: syntaxHighlightTags.defaultTags.keyword,
        Type: syntaxHighlightTags.defaultTags.typeName,
        Number: syntaxHighlightTags.defaultTags.number,
        String: syntaxHighlightTags.defaultTags.string,
        Identifier: syntaxHighlightTags.defaultTags.variableName,
        LineComment: syntaxHighlightTags.defaultTags.lineComment,
        BlockComment: syntaxHighlightTags.defaultTags.blockComment,
        "( )": syntaxHighlightTags.defaultTags.paren
      })]
    }),
    languageData: {
      commentTokens: {
        line: ";;",
        block: {
          open: "(;",
          close: ";)"
        }
      },
      closeBrackets: {
        brackets: ["(", "\""]
      }
    }
  });
  function l() {
    return new codemirrorLanguageSupport.Language(a);
  }
  require.r(exports);
  require.d(exports, {
    wast: function () {
      return l;
    },
    wastLanguage: function () {
      return a;
    }
  });
}