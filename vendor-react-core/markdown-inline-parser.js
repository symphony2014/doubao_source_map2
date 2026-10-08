// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'parserRuleManager'
// - Resolved require(624533) to 'parser-rule-manager'
// - Resolved require(584597) to 'scan-delimiters-util'
// - Resolved require(311972) to 'markdown-newline-rule'
// - Resolved require(596636) to 'markdown-escape-parser'
// - Resolved require(624527) to 'markdown-inline-code-parser'
// - Resolved require(341835) to 'strikethrough-tokenizer'
// - Resolved require(657291) to 'markdown-emphasis-rule'
// - Resolved require(63380) to 'markdown-link-parser'
// - Resolved require(394655) to 'markdown-image-parser'
// - Resolved require(849586) to 'markdown-autolink-rule'
// - Resolved require(979324) to 'markdown-html-inline-rule'
// - Resolved require(720946) to 'markdown-html-entity-parser'
// - Resolved require(311961) to 'delimiter-token-matcher'
// - Resolved require(341835) to 'strikethrough-tokenizer'
// - Resolved require(657291) to 'markdown-emphasis-rule'
// - Resolved require(320617) to 'token-stream-processor'
// - Resolved require(336939) to 'markdown-parser-state_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 111276
         */
module.exports = function (module, exports, require) {
  var parserRuleManager = require("parser-rule-manager") /*id: 624533*/;
  var i = [["text", require("scan-delimiters-util") /*id: 584597*/], ["newline", require("markdown-newline-rule") /*id: 311972*/], ["escape", require("markdown-escape-parser") /*id: 596636*/], ["backticks", require("markdown-inline-code-parser") /*id: 624527*/], ["strikethrough", require("strikethrough-tokenizer") /*id: 341835*/.tokenize], ["emphasis", require("markdown-emphasis-rule") /*id: 657291*/.tokenize], ["link", require("markdown-link-parser") /*id: 63380*/], ["image", require("markdown-image-parser") /*id: 394655*/], ["autolink", require("markdown-autolink-rule") /*id: 849586*/], ["html_inline", require("markdown-html-inline-rule") /*id: 979324*/], ["entity", require("markdown-html-entity-parser") /*id: 720946*/]];
  var o = [["balance_pairs", require("delimiter-token-matcher") /*id: 311961*/], ["strikethrough", require("strikethrough-tokenizer") /*id: 341835*/.postProcess], ["emphasis", require("markdown-emphasis-rule") /*id: 657291*/.postProcess], ["text_collapse", require("token-stream-processor") /*id: 320617*/]];
  function s() {
    var t;
    t = 0;
    this.ruler = new parserRuleManager();
    for (; t < i.length; t++) {
      this.ruler.push(i[t][0], i[t][1]);
    }
    t = 0;
    this.ruler2 = new parserRuleManager();
    for (; t < o.length; t++) {
      this.ruler2.push(o[t][0], o[t][1]);
    }
  }
  s.prototype.skipToken = function (t) {
    var e;
    var r;
    var n = t.pos;
    var i = this.ruler.getRules("");
    var o = i.length;
    var s = t.md.options.maxNesting;
    var a = t.cache;
    if (a[n] !== undefined) {
      t.pos = a[n];
      return;
    }
    if (t.level < s) {
      for (r = 0; r < o && (t.level++, e = i[r](t, true), t.level--, !e); r++);
    } else {
      t.pos = t.posMax;
    }
    if (!e) {
      t.pos++;
    }
    a[n] = t.pos;
  };
  s.prototype.tokenize = function (t) {
    var e;
    var r;
    var n = this.ruler.getRules("");
    var i = n.length;
    var o = t.posMax;
    var s = t.md.options.maxNesting;
    while (t.pos < o) {
      if (t.level < s) {
        for (r = 0; r < i && !(e = n[r](t, false)); r++);
      }
      if (e) {
        if (t.pos >= o) {
          break;
        }
        continue;
      }
      t.pending += t.src[t.pos++];
    }
    if (t.pending) {
      t.pushPending();
    }
  };
  s.prototype.parse = function (t, e, r, n) {
    var i;
    var o;
    var s;
    var a = new this.State(t, e, r, n);
    this.tokenize(a);
    s = (o = this.ruler2.getRules("")).length;
    i = 0;
    for (; i < s; i++) {
      o[i](a);
    }
  };
  s.prototype.State = require("markdown-parser-state_1") /*id: 336939*/;
  module.exports = s;
}