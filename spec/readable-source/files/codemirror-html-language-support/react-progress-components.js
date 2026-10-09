// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'l' to 'codemirrorLanguageSupport'
// - Resolved require(976653) to 'codemirror-language-support'
// - Renamed variable 'r' to 'codemirrorHtmlLanguageSupport'
// - Resolved require(850002) to 'codemirror-html-language-support'
// - Renamed variable 'n' to 'codemirrorJavascriptLangSupport'
// - Resolved require(911677) to 'codemirror-javascript-lang-support'
// - Renamed variable 'O' to 'syntaxHighlightTags'
// - Resolved require(852622) to 'syntax-highlight-tags'
// - Renamed variable 's' to 'syntaxTreeCore'
// - Resolved require(655745) to 'syntax-tree-core'
// - Renamed variable 'o' to 'lrParserDefinition'
// - Resolved require(556971) to 'lr-parser-definition'
// - Updated imported property 'WQ' to 'LrParser' (module 556971)
// - Updated imported property 'RA' to 'ExternalTokenizer' (module 556971)
// - Updated imported property 'Gv' to 'defineHighlighter' (module 852622)
// - Updated imported property 'pJ' to 'defaultTags' (module 852622)
// - Updated imported property 'FE' to 'createNestedParse' (module 655745)
// - Updated imported property 'qp' to 'Parser' (module 976653)
// - Updated imported property 'ri' to 'Language' (module 976653)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 37522.80d71e28.js
         * chunkId: 37522
         * moduleId: 461077
         */
module.exports = function (module, exports, require) {
  var codemirrorLanguageSupport = require("codemirror-language-support") /*id: 976653*/;
  var codemirrorHtmlLanguageSupport = require("codemirror-html-language-support") /*id: 850002*/;
  var codemirrorJavascriptLangSupport = require("codemirror-javascript-lang-support") /*id: 911677*/;
  var syntaxHighlightTags = require("syntax-highlight-tags") /*id: 852622*/;
  var syntaxTreeCore = require("syntax-tree-core") /*id: 655745*/;
  var lrParserDefinition = require("lr-parser-definition") /*id: 556971*/;
  let i = lrParserDefinition.LrParser.deserialize({
    version: 14,
    states: "%pOVOWOOObQPOOOpOSO'#C_OOOO'#Cp'#CpQVOWOOQxQPOOO!TQQOOQ!YQPOOOOOO,58y,58yO!_OSO,58yOOOO-E6n-E6nO!dQQO'#CqQ{QPOOO!iQPOOQ{QPOOO!qQPOOOOOO1G.e1G.eOOQO,59],59]OOQO-E6o-E6oO!yOpO'#CiO#RO`O'#CiQOQPOOO#ZO#tO'#CmO#fO!bO'#CmOOQO,59T,59TO#qOpO,59TO#vO`O,59TOOOO'#Cr'#CrO#{O#tO,59XOOQO,59X,59XOOOO'#Cs'#CsO$WO!bO,59XOOQO1G.o1G.oOOOO-E6p-E6pOOQO1G.s1G.sOOOO-E6q-E6q",
    stateData: "$g~OjOS~OQROUROkQO~OWTOXUOZUO`VO~OSXOTWO~OXUO[]OlZO~OY^O~O[_O~OT`O~OYaO~OmcOodO~OmfOogO~O^iOnhO~O_jOphO~ObkOqkOrmO~OcnOsnOtmO~OnpO~OppO~ObkOqkOrrO~OcnOsnOtrO~OWX`~",
    goto: "!^hPPPiPPPPPPPPPmPPPpPPsy!Q!WTROSRe]Re_QSORYSS[T^Rb[QlfRqlQogRso",
    nodeNames: "⚠ Content Text Interpolation InterpolationContent }} Entity Attribute VueAttributeName : Identifier @ Is ScriptAttributeValue AttributeScript AttributeScript AttributeName AttributeValue Entity Entity",
    maxTerm: 36,
    nodeProps: [["isolate", -3, 3, 13, 17, ""]],
    skippedNodes: [0],
    repeatNodeCount: 4,
    tokenData: "'y~RdXY!aYZ!a]^!apq!ars!rwx!w}!O!|!O!P#t!Q![#y![!]$s!_!`%g!b!c%l!c!}#y#R#S#y#T#j#y#j#k%q#k#o#y%W;'S#y;'S;:j$m<%lO#y~!fSj~XY!aYZ!a]^!apq!a~!wOm~~!|Oo~!b#RX`!b}!O!|!Q![!|![!]!|!c!}!|#R#S!|#T#o!|%W;'S!|;'S;:j#n<%lO!|!b#qP;=`<%l!|~#yOl~%W$QXY#t`!b}!O!|!Q![#y![!]!|!c!}#y#R#S#y#T#o#y%W;'S#y;'S;:j$m<%lO#y%W$pP;=`<%l#y~$zXX~`!b}!O!|!Q![!|![!]!|!c!}!|#R#S!|#T#o!|%W;'S!|;'S;:j#n<%lO!|~%lO[~~%qOZ~%W%xXY#t`!b}!O&e!Q![#y![!]!|!c!}#y#R#S#y#T#o#y%W;'S#y;'S;:j$m<%lO#y!b&jX`!b}!O!|!Q![!|![!]!|!c!}'V#R#S!|#T#o'V%W;'S!|;'S;:j#n<%lO!|!b'^XW!b`!b}!O!|!Q![!|![!]!|!c!}'V#R#S!|#T#o'V%W;'S!|;'S;:j#n<%lO!|",
    tokenizers: [6, 7, new lrParserDefinition.ExternalTokenizer("b~RP#q#rU~XP#q#r[~aOT~~", 17, 4), new lrParserDefinition.ExternalTokenizer("!k~RQvwX#o#p!_~^TU~Opmq!]m!^;'Sm;'S;=`!X<%lOm~pUOpmq!]m!]!^!S!^;'Sm;'S;=`!X<%lOm~!XOU~~![P;=`<%lm~!bP#o#p!e~!jOk~~", 72, 2), new lrParserDefinition.ExternalTokenizer("[~RPwxU~ZOp~~", 11, 15), new lrParserDefinition.ExternalTokenizer("[~RPrsU~ZOn~~", 11, 14), new lrParserDefinition.ExternalTokenizer("!e~RQvwXwx!_~^Tc~Opmq!]m!^;'Sm;'S;=`!X<%lOm~pUOpmq!]m!]!^!S!^;'Sm;'S;=`!X<%lOm~!XOc~~![P;=`<%lm~!dOt~~", 66, 35), new lrParserDefinition.ExternalTokenizer("!e~RQrsXvw^~^Or~~cTb~Oprq!]r!^;'Sr;'S;=`!^<%lOr~uUOprq!]r!]!^!X!^;'Sr;'S;=`!^<%lOr~!^Ob~~!aP;=`<%lr~", 66, 33)],
    topRules: {
      Content: [0, 1],
      Attribute: [1, 7]
    },
    tokenPrec: 157
  });
  let u = codemirrorJavascriptLangSupport.javascriptLanguage.parser.configure({
    top: "SingleExpression"
  });
  let p = i.configure({
    props: [syntaxHighlightTags.defineHighlighter({
      Text: syntaxHighlightTags.defaultTags.content,
      Is: syntaxHighlightTags.defaultTags.definitionOperator,
      AttributeName: syntaxHighlightTags.defaultTags.attributeName,
      VueAttributeName: syntaxHighlightTags.defaultTags.keyword,
      Identifier: syntaxHighlightTags.defaultTags.variableName,
      "AttributeValue ScriptAttributeValue": syntaxHighlightTags.defaultTags.attributeValue,
      Entity: syntaxHighlightTags.defaultTags.character,
      "{{ }}": syntaxHighlightTags.defaultTags.brace,
      "@ :": syntaxHighlightTags.defaultTags.punctuation
    })]
  });
  let c = {
    parser: u
  };
  let d = p.configure({
    wrap: syntaxTreeCore.createNestedParse((e, t) => e.name == "InterpolationContent" ? c : null)
  });
  let m = p.configure({
    wrap: syntaxTreeCore.createNestedParse((e, t) => e.name == "AttributeScript" ? c : null),
    top: "Attribute"
  });
  let f = {
    parser: d
  };
  let S = {
    parser: m
  };
  let g = codemirrorHtmlLanguageSupport.html();
  function h(e) {
    return e.configure({
      dialect: "selfClosing",
      wrap: syntaxTreeCore.createNestedParse(P)
    }, "vue");
  }
  let b = h(g.language);
  function P(e, t) {
    switch (e.name) {
      case "Attribute":
        if (/^(@|:|v-)/.test(t.read(e.from, e.from + 2))) {
          return S;
        } else {
          return null;
        }
      case "Text":
        return f;
    }
    return null;
  }
  function x(e = {}) {
    let t = g;
    if (e.base) {
      if (e.base.language.name != "html" || !(e.base.language instanceof codemirrorLanguageSupport.Parser)) {
        throw RangeError("The base option must be the result of calling html(...)");
      }
      t = e.base;
    }
    return new codemirrorLanguageSupport.Language(t.language == g.language ? b : h(t.language), [t.support, t.language.data.of({
      closeBrackets: {
        brackets: ["{", "\""]
      }
    })]);
  }
  require.r(exports);
  require.d(exports, {
    vue: function () {
      return x;
    },
    vueLanguage: function () {
      return b;
    }
  });
}