// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'T' to 'symbolParseMaps'
// - Resolved require(664746) to 'symbol-parse-maps'
// - Renamed variable 'n' to 'texConstantDefinitions'
// - Resolved require(16944) to 'tex-constant-definitions'
// - Renamed variable 'o' to 'textMacrosMethods'
// - Resolved require(259813) to 'text-macros-methods'
// - Resolved require(142412) to 'mathjax-utilities'
// - Renamed variable 'a' to 'mathjaxTextParser'
// - Resolved require(82218) to 'mathjax-text-parser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 912919
         */
module.exports = function (module, exports, require) {
  var r = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  var symbolParseMaps = require("symbol-parse-maps") /*id: 664746*/;
  var texConstantDefinitions = require("tex-constant-definitions") /*id: 16944*/;
  var textMacrosMethods = require("text-macros-methods") /*id: 259813*/;
  var i = r(require("mathjax-utilities") /*id: 142412*/);
  var mathjaxTextParser = require("mathjax-text-parser") /*id: 82218*/;
  new symbolParseMaps.CommandMap("textcomp-macros", {
    textasciicircum: ["Insert", "^"],
    textasciitilde: ["Insert", "~"],
    textasteriskcentered: ["Insert", "*"],
    textbackslash: ["Insert", "\\"],
    textbar: ["Insert", "|"],
    textbraceleft: ["Insert", "{"],
    textbraceright: ["Insert", "}"],
    textbullet: ["Insert", "•"],
    textdagger: ["Insert", "†"],
    textdaggerdbl: ["Insert", "‡"],
    textellipsis: ["Insert", "…"],
    textemdash: ["Insert", "—"],
    textendash: ["Insert", "–"],
    textexclamdown: ["Insert", "¡"],
    textgreater: ["Insert", ">"],
    textless: ["Insert", "<"],
    textordfeminine: ["Insert", "ª"],
    textordmasculine: ["Insert", "º"],
    textparagraph: ["Insert", "¶"],
    textperiodcentered: ["Insert", "·"],
    textquestiondown: ["Insert", "¿"],
    textquotedblleft: ["Insert", "“"],
    textquotedblright: ["Insert", "”"],
    textquoteleft: ["Insert", "‘"],
    textquoteright: ["Insert", "’"],
    textsection: ["Insert", "§"],
    textunderscore: ["Insert", "_"],
    textvisiblespace: ["Insert", "␣"],
    textacutedbl: ["Insert", "˝"],
    textasciiacute: ["Insert", "´"],
    textasciibreve: ["Insert", "˘"],
    textasciicaron: ["Insert", "ˇ"],
    textasciidieresis: ["Insert", "¨"],
    textasciimacron: ["Insert", "¯"],
    textgravedbl: ["Insert", "˵"],
    texttildelow: ["Insert", "˷"],
    textbaht: ["Insert", "฿"],
    textcent: ["Insert", "¢"],
    textcolonmonetary: ["Insert", "₡"],
    textcurrency: ["Insert", "¤"],
    textdollar: ["Insert", "$"],
    textdong: ["Insert", "₫"],
    texteuro: ["Insert", "€"],
    textflorin: ["Insert", "ƒ"],
    textguarani: ["Insert", "₲"],
    textlira: ["Insert", "₤"],
    textnaira: ["Insert", "₦"],
    textpeso: ["Insert", "₱"],
    textsterling: ["Insert", "£"],
    textwon: ["Insert", "₩"],
    textyen: ["Insert", "¥"],
    textcircledP: ["Insert", "℗"],
    textcompwordmark: ["Insert", "‌"],
    textcopyleft: ["Insert", "🄯"],
    textcopyright: ["Insert", "©"],
    textregistered: ["Insert", "®"],
    textservicemark: ["Insert", "℠"],
    texttrademark: ["Insert", "™"],
    textbardbl: ["Insert", "‖"],
    textbigcircle: ["Insert", "◯"],
    textblank: ["Insert", "␢"],
    textbrokenbar: ["Insert", "¦"],
    textdiscount: ["Insert", "⁒"],
    textestimated: ["Insert", "℮"],
    textinterrobang: ["Insert", "‽"],
    textinterrobangdown: ["Insert", "⸘"],
    textmusicalnote: ["Insert", "♪"],
    textnumero: ["Insert", "№"],
    textopenbullet: ["Insert", "◦"],
    textpertenthousand: ["Insert", "‱"],
    textperthousand: ["Insert", "‰"],
    textrecipe: ["Insert", "℞"],
    textreferencemark: ["Insert", "※"],
    textlangle: ["Insert", "〈"],
    textrangle: ["Insert", "〉"],
    textlbrackdbl: ["Insert", "⟦"],
    textrbrackdbl: ["Insert", "⟧"],
    textlquill: ["Insert", "⁅"],
    textrquill: ["Insert", "⁆"],
    textcelsius: ["Insert", "℃"],
    textdegree: ["Insert", "°"],
    textdiv: ["Insert", "÷"],
    textdownarrow: ["Insert", "↓"],
    textfractionsolidus: ["Insert", "⁄"],
    textleftarrow: ["Insert", "←"],
    textlnot: ["Insert", "¬"],
    textmho: ["Insert", "℧"],
    textminus: ["Insert", "−"],
    textmu: ["Insert", "µ"],
    textohm: ["Insert", "Ω"],
    textonehalf: ["Insert", "½"],
    textonequarter: ["Insert", "¼"],
    textonesuperior: ["Insert", "¹"],
    textpm: ["Insert", "±"],
    textrightarrow: ["Insert", "→"],
    textsurd: ["Insert", "√"],
    textthreequarters: ["Insert", "¾"],
    textthreesuperior: ["Insert", "³"],
    texttimes: ["Insert", "×"],
    texttwosuperior: ["Insert", "²"],
    textuparrow: ["Insert", "↑"],
    textborn: ["Insert", "*"],
    textdied: ["Insert", "†"],
    textdivorced: ["Insert", "⚮"],
    textmarried: ["Insert", "⚭"],
    textcentoldstyle: ["Insert", "¢", texConstantDefinitions.TexConstant.Variant.OLDSTYLE],
    textdollaroldstyle: ["Insert", "$", texConstantDefinitions.TexConstant.Variant.OLDSTYLE],
    textzerooldstyle: ["Insert", "0", texConstantDefinitions.TexConstant.Variant.OLDSTYLE],
    textoneoldstyle: ["Insert", "1", texConstantDefinitions.TexConstant.Variant.OLDSTYLE],
    texttwooldstyle: ["Insert", "2", texConstantDefinitions.TexConstant.Variant.OLDSTYLE],
    textthreeoldstyle: ["Insert", "3", texConstantDefinitions.TexConstant.Variant.OLDSTYLE],
    textfouroldstyle: ["Insert", "4", texConstantDefinitions.TexConstant.Variant.OLDSTYLE],
    textfiveoldstyle: ["Insert", "5", texConstantDefinitions.TexConstant.Variant.OLDSTYLE],
    textsixoldstyle: ["Insert", "6", texConstantDefinitions.TexConstant.Variant.OLDSTYLE],
    textsevenoldstyle: ["Insert", "7", texConstantDefinitions.TexConstant.Variant.OLDSTYLE],
    texteightoldstyle: ["Insert", "8", texConstantDefinitions.TexConstant.Variant.OLDSTYLE],
    textnineoldstyle: ["Insert", "9", texConstantDefinitions.TexConstant.Variant.OLDSTYLE]
  }, {
    Insert: function (t, e, Q, r) {
      if (t instanceof mathjaxTextParser.TextParser) {
        if (!r) {
          textMacrosMethods.TextMacrosMethods.Insert(t, e, Q);
          return;
        }
        t.saveText();
      }
      t.Push(i.default.internalText(t, Q, r ? {
        mathvariant: r
      } : {}));
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}