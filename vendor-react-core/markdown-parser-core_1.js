// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'parserRuleManager'
// - Resolved require(624533) to 'parser-rule-manager'
// - Resolved require(408625) to 'normalize-source-string'
// - Resolved require(556484) to 'markdown-inline-block-parser'
// - Resolved require(339611) to 'markdown-inline-token-parser'
// - Resolved require(985970) to 'markdown-linkify-inline'
// - Resolved require(966963) to 'markdown-typographer-plugin'
// - Resolved require(593635) to 'markdown-typographer-quotes'
// - Resolved require(380311) to 'markdown-parser-state'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 872297
         */
module.exports = function (module, exports, require) {
  var parserRuleManager = require("parser-rule-manager") /*id: 624533*/;
  var i = [["normalize", require("normalize-source-string") /*id: 408625*/], ["block", require("markdown-inline-block-parser") /*id: 556484*/], ["inline", require("markdown-inline-token-parser") /*id: 339611*/], ["linkify", require("markdown-linkify-inline") /*id: 985970*/], ["replacements", require("markdown-typographer-plugin") /*id: 966963*/], ["smartquotes", require("markdown-typographer-quotes") /*id: 593635*/]];
  function o() {
    this.ruler = new parserRuleManager();
    for (var t = 0; t < i.length; t++) {
      this.ruler.push(i[t][0], i[t][1]);
    }
  }
  o.prototype.process = function (t) {
    var e;
    var r;
    var n;
    e = 0;
    r = (n = this.ruler.getRules("")).length;
    for (; e < r; e++) {
      n[e](t);
    }
  };
  o.prototype.State = require("markdown-parser-state") /*id: 380311*/;
  module.exports = o;
}