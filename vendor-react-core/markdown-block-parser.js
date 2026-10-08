// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'parserRuleManager'
// - Resolved require(624533) to 'parser-rule-manager'
// - Resolved require(995304) to 'markdown-table-rule'
// - Resolved require(769415) to 'markdown-code-block-rule'
// - Resolved require(125536) to 'markdown-code-fence-rule'
// - Resolved require(128190) to 'markdown-blockquote-rule'
// - Resolved require(959735) to 'markdown-hr-rule-parser'
// - Resolved require(326750) to 'markdown-list-parser'
// - Resolved require(542607) to 'markdown-reference-definition'
// - Resolved require(351130) to 'markdown-html-block-rule'
// - Resolved require(631495) to 'markdown-atx-heading-parser'
// - Resolved require(170534) to 'markdown-setext-heading-rule'
// - Resolved require(900128) to 'markdown-paragraph-rule'
// - Resolved require(633302) to 'markdown-state-block'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 757005
         */
module.exports = function (module, exports, require) {
  var parserRuleManager = require("parser-rule-manager") /*id: 624533*/;
  var i = [["table", require("markdown-table-rule") /*id: 995304*/, ["paragraph", "reference"]], ["code", require("markdown-code-block-rule") /*id: 769415*/], ["fence", require("markdown-code-fence-rule") /*id: 125536*/, ["paragraph", "reference", "blockquote", "list"]], ["blockquote", require("markdown-blockquote-rule") /*id: 128190*/, ["paragraph", "reference", "blockquote", "list"]], ["hr", require("markdown-hr-rule-parser") /*id: 959735*/, ["paragraph", "reference", "blockquote", "list"]], ["list", require("markdown-list-parser") /*id: 326750*/, ["paragraph", "reference", "blockquote"]], ["reference", require("markdown-reference-definition") /*id: 542607*/], ["html_block", require("markdown-html-block-rule") /*id: 351130*/, ["paragraph", "reference", "blockquote"]], ["heading", require("markdown-atx-heading-parser") /*id: 631495*/, ["paragraph", "reference", "blockquote"]], ["lheading", require("markdown-setext-heading-rule") /*id: 170534*/], ["paragraph", require("markdown-paragraph-rule") /*id: 900128*/]];
  function o() {
    this.ruler = new parserRuleManager();
    for (var t = 0; t < i.length; t++) {
      this.ruler.push(i[t][0], i[t][1], {
        alt: (i[t][2] || []).slice()
      });
    }
  }
  o.prototype.tokenize = function (t, e, r) {
    var n;
    var i = this.ruler.getRules("");
    var o = i.length;
    var s = e;
    var a = false;
    var c = t.md.options.maxNesting;
    while (s < r && (t.line = s = t.skipEmptyLines(s), !(s >= r) && !(t.sCount[s] < t.blkIndent))) {
      if (t.level >= c) {
        t.line = r;
        break;
      }
      for (n = 0; n < o && !i[n](t, s, r, false); n++);
      t.tight = !a;
      if (t.isEmpty(t.line - 1)) {
        a = true;
      }
      if ((s = t.line) < r && t.isEmpty(s)) {
        a = true;
        s++;
        t.line = s;
      }
    }
  };
  o.prototype.parse = function (t, e, r, n) {
    var i;
    if (t) {
      i = new this.State(t, e, r, n);
      this.tokenize(i, i.line, i.lineMax);
    }
  };
  o.prototype.State = require("markdown-state-block") /*id: 633302*/;
  module.exports = o;
}