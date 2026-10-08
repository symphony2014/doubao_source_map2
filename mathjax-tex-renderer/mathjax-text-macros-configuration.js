// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// - Resolved require(751670) to 'mathml-configuration'
// - Renamed variable 'i' to 'mathjaxEquationTaggingSystem'
// - Resolved require(9120) to 'mathjax-equation-tagging-system'
// - Renamed variable 'a' to 'mathjaxEqnarrayTags'
// - Resolved require(962632) to 'mathjax-eqnarray-tags'
// - Renamed variable 'u' to 'mathjaxTextParser'
// - Resolved require(82218) to 'mathjax-text-parser'
// - Renamed variable 's' to 'textMacrosMethods'
// - Resolved require(259813) to 'text-macros-methods'
// - Resolved require(265364) to 'tex-text-macros-parser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 75161
         */
module.exports = function (module, exports, require) {
  var r;
  var T = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.TextMacrosConfiguration = exports.TextBaseConfiguration = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  var o = T(require("mathml-configuration") /*id: 751670*/);
  var mathjaxEquationTaggingSystem = require("mathjax-equation-tagging-system") /*id: 9120*/;
  var mathjaxEqnarrayTags = require("mathjax-eqnarray-tags") /*id: 962632*/;
  var mathjaxTextParser = require("mathjax-text-parser") /*id: 82218*/;
  var textMacrosMethods = require("text-macros-methods") /*id: 259813*/;
  function l(t, e, Q, r) {
    var T = t.configuration.packageData.get("textmacros");
    if (!(t instanceof mathjaxTextParser.TextParser)) {
      T.texParser = t;
    }
    return [new mathjaxTextParser.TextParser(e, r ? {
      mathvariant: r
    } : {}, T.parseOptions, Q).mml()];
  }
  require("tex-text-macros-parser") /*id: 265364*/;
  exports.TextBaseConfiguration = mathjaxParserConfiguration.Configuration.create("text-base", {
    parser: "text",
    handler: {
      character: ["command", "text-special"],
      macro: ["text-macros"]
    },
    fallback: {
      character: function (t, e) {
        t.text += e;
      },
      macro: function (t, e) {
        var Q = t.texParser;
        var r = Q.lookup("macro", e);
        if (r && r._func !== textMacrosMethods.TextMacrosMethods.Macro) {
          t.Error("MathMacro", "%1 is only supported in math mode", "\\" + e);
        }
        Q.parse("macro", [t, e]);
      }
    },
    items: ((r = {})[mathjaxEqnarrayTags.StartItem.prototype.kind] = mathjaxEqnarrayTags.StartItem, r[mathjaxEqnarrayTags.StopItem.prototype.kind] = mathjaxEqnarrayTags.StopItem, r[mathjaxEqnarrayTags.MmlItem.prototype.kind] = mathjaxEqnarrayTags.MmlItem, r[mathjaxEqnarrayTags.StyleItem.prototype.kind] = mathjaxEqnarrayTags.StyleItem, r)
  });
  exports.TextMacrosConfiguration = mathjaxParserConfiguration.Configuration.create("textmacros", {
    config: function (t, e) {
      var Q = new mathjaxParserConfiguration.ParserConfiguration(e.parseOptions.options.textmacros.packages, ["tex", "text"]);
      Q.init();
      var r = new o.default(Q, []);
      r.options = e.parseOptions.options;
      Q.config(e);
      mathjaxEquationTaggingSystem.TagsFactory.addTags(Q.tags);
      r.tags = mathjaxEquationTaggingSystem.TagsFactory.getDefault();
      r.tags.configuration = r;
      r.packageData = e.parseOptions.packageData;
      r.packageData.set("textmacros", {
        parseOptions: r,
        jax: e,
        texParser: null
      });
      r.options.internalMath = l;
    },
    preprocessors: [function (t) {
      var e = t.data.packageData.get("textmacros");
      e.parseOptions.nodeFactory.setMmlFactory(e.jax.mmlFactory);
    }],
    options: {
      textmacros: {
        packages: ["text-base"]
      }
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}