// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'lrParserDefinition'
// - Resolved require(556971) to 'lr-parser-definition'
// - Renamed variable 'r' to 'syntaxHighlightTags'
// - Resolved require(852622) to 'syntax-highlight-tags'
// - Renamed variable 'o' to 'codemirrorLanguageSupport'
// - Resolved require(976653) to 'codemirror-language-support'
// - Updated imported property 'Gv' to 'defineHighlighter' (module 852622)
// - Updated imported property 'pJ' to 'defaultTags' (module 852622)
// - Updated imported property 'WQ' to 'LrParser' (module 556971)
// - Updated imported property 'qp' to 'Parser' (module 976653)
// - Updated imported property 'uj' to 'indentNodeProp' (module 976653)
// - Updated imported property 'tC' to 'renderMatch' (module 976653)
// - Updated imported property 'x0' to 'foldState' (module 976653)
// - Updated imported property 'Dv' to 'getFoldRange' (module 976653)
// - Updated imported property 'ri' to 'Language' (module 976653)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 4764.27fd6b40.js
         * chunkId: 4764
         * moduleId: 263347
         */
module.exports = function (module, exports, require) {
  var lrParserDefinition = require("lr-parser-definition") /*id: 556971*/;
  var syntaxHighlightTags = require("syntax-highlight-tags") /*id: 852622*/;
  let h = syntaxHighlightTags.defineHighlighter({
    String: syntaxHighlightTags.defaultTags.string,
    Number: syntaxHighlightTags.defaultTags.number,
    "True False": syntaxHighlightTags.defaultTags.bool,
    PropertyName: syntaxHighlightTags.defaultTags.propertyName,
    Null: syntaxHighlightTags.defaultTags.null,
    ",": syntaxHighlightTags.defaultTags.separator,
    "[ ]": syntaxHighlightTags.defaultTags.squareBracket,
    "{ }": syntaxHighlightTags.defaultTags.brace
  });
  let n = lrParserDefinition.LrParser.deserialize({
    version: 14,
    states: "$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j",
    stateData: "#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O",
    goto: "!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",
    nodeNames: "⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array",
    maxTerm: 25,
    nodeProps: [["isolate", -2, 6, 11, ""], ["openedBy", 7, "{", 12, "["], ["closedBy", 8, "}", 13, "]"]],
    propSources: [h],
    skippedNodes: [0],
    repeatNodeCount: 2,
    tokenData: "(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oc~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Oe~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zOh~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yOg~~'OO]~~'TO[~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",
    tokenizers: [0],
    topRules: {
      JsonText: [0, 1]
    },
    tokenPrec: 0
  });
  var codemirrorLanguageSupport = require("codemirror-language-support") /*id: 976653*/;
  let a = () => t => {
    try {
      JSON.parse(t.state.doc.toString());
    } catch (h) {
      var e;
      var s;
      let i;
      if (!(h instanceof SyntaxError)) {
        throw h;
      }
      e = h;
      s = t.state.doc;
      let r = (i = e.message.match(/at position (\d+)/)) ? Math.min(+i[1], s.length) : (i = e.message.match(/at line (\d+) column (\d+)/)) ? Math.min(s.line(+i[1]).from + +i[2] - 1, s.length) : 0;
      return [{
        from: r,
        message: h.message,
        severity: "error",
        to: r
      }];
    }
    return [];
  };
  let l = codemirrorLanguageSupport.Parser.define({
    name: "json",
    parser: n.configure({
      props: [codemirrorLanguageSupport.indentNodeProp.add({
        Object: codemirrorLanguageSupport.renderMatch({
          except: /^\s*\}/
        }),
        Array: codemirrorLanguageSupport.renderMatch({
          except: /^\s*\]/
        })
      }), codemirrorLanguageSupport.foldState.add({
        "Object Array": codemirrorLanguageSupport.getFoldRange
      })]
    }),
    languageData: {
      closeBrackets: {
        brackets: ["[", "{", "\""]
      },
      indentOnInput: /^\s*[\}\]]$/
    }
  });
  function c() {
    return new codemirrorLanguageSupport.Language(l);
  }
  require.r(exports);
  require.d(exports, {
    jsonLanguage: function () {
      return l;
    },
    jsonParseLinter: function () {
      return a;
    },
    json: function () {
      return c;
    }
  });
}