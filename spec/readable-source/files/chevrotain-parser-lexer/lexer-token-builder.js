// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'LexerTokenBuilder'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 78089.de6f103c.js
         * chunkId: 78089
         * moduleId: 736338
         */
module.exports = function (module, exports, require) {
  var chevrotainParserLexerUtilities = require("chevrotain-parser-lexer-utilities") /*id: 917158*/;
  var grammarTypeValidators = require("grammar-type-validators") /*id: 279057*/;
  var astNodeUtils = require("ast-node-utils") /*id: 468838*/;
  var grammarTypeNameResolver = require("grammar-type-name-resolver") /*id: 120148*/;
  var regexpUtilityHelpers = require("regexp-utility-helpers") /*id: 880286*/;
  var lazyCollectionIterator = require("lazy-collection-iterator") /*id: 734269*/;
  class u {
    constructor() {
      this.diagnostics = [];
    }
    buildTokens(e, t) {
      let r = lazyCollectionIterator.createSequence(grammarTypeNameResolver.collectGrammarRules(e, false));
      let n = this.buildTerminalTokens(r);
      let i = this.buildKeywordTokens(r, n, t);
      n.forEach(e => {
        let t = e.PATTERN;
        if (typeof t == "object" && t && "test" in t && regexpUtilityHelpers.hasWhitespaceRegex(t)) {
          i.unshift(e);
        } else {
          i.push(e);
        }
      });
      return i;
    }
    flushLexingReport(e) {
      return {
        diagnostics: this.popDiagnostics()
      };
    }
    popDiagnostics() {
      let e = [...this.diagnostics];
      this.diagnostics = [];
      return e;
    }
    buildTerminalTokens(e) {
      return e.filter(grammarTypeValidators.isTerminalRule).filter(e => !e.fragment).map(e => this.buildTerminalToken(e)).toArray();
    }
    buildTerminalToken(e) {
      let t = grammarTypeNameResolver.generateTerminalRegex(e);
      let r = this.requiresCustomPattern(t) ? this.regexPatternFunction(t) : t;
      let i = {
        name: e.name,
        PATTERN: r
      };
      if (typeof r == "function") {
        i.LINE_BREAKS = true;
      }
      if (e.hidden) {
        i.GROUP = regexpUtilityHelpers.hasWhitespaceRegex(t) ? chevrotainParserLexerUtilities.Lexer.SKIPPED : "hidden";
      }
      return i;
    }
    requiresCustomPattern(e) {
      return !!e.flags.includes("u") || !!e.flags.includes("s") || !!e.source.includes("?<=") || !!e.source.includes("?<!");
    }
    regexPatternFunction(e) {
      let t = RegExp(e, e.flags + "y");
      return (e, r) => {
        t.lastIndex = r;
        return t.exec(e);
      };
    }
    buildKeywordTokens(e, t, r) {
      return e.filter(grammarTypeValidators.isParserRule).flatMap(e => astNodeUtils.traverseTree(e).filter(grammarTypeValidators.isKeyword)).distinct(e => e.value).toArray().sort((e, t) => t.value.length - e.value.length).map(e => this.buildKeywordToken(e, t, !!(r == null ? undefined : r.caseInsensitive)));
    }
    buildKeywordToken(e, t, r) {
      let n = this.buildKeywordPattern(e, r);
      let i = {
        name: e.value,
        PATTERN: n,
        LONGER_ALT: this.findLongerAlt(e, t)
      };
      if (typeof n == "function") {
        i.LINE_BREAKS = true;
      }
      return i;
    }
    buildKeywordPattern(e, t) {
      if (t) {
        return new RegExp(regexpUtilityHelpers.makeCaseInsensitive(e.value));
      } else {
        return e.value;
      }
    }
    findLongerAlt(e, t) {
      return t.reduce((t, r) => {
        let n = r == null ? undefined : r.PATTERN;
        if ((n == null ? undefined : n.source) && regexpUtilityHelpers.matchRegexPattern("^" + n.source + "$", e.value)) {
          t.push(r);
        }
        return t;
      }, []);
    }
  }
  require.d(exports, {
    LexerTokenBuilder: function () {
      return u;
    }
  });
}