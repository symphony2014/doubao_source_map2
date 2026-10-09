// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 15300.afc491e7.js
         * chunkId: 15300
         * moduleId: 237003
         */
module.exports = function (module, exports, require) {
  function o(e) {
    return RegExp("^((" + e.join(")|(") + "))\\b", "i");
  }
  var n = RegExp("^[\\+\\-\\*/&#!_?\\\\<>=\\'\\[\\]]");
  var a = RegExp("^(('=)|(<=)|(>=)|('>)|('<)|([[)|(]])|(^$))");
  var r = RegExp("^[\\.,:]");
  var c = /[()]/;
  var m = RegExp("^[%A-Za-z][A-Za-z0-9]*");
  var i = o(["\\$ascii", "\\$char", "\\$data", "\\$ecode", "\\$estack", "\\$etrap", "\\$extract", "\\$find", "\\$fnumber", "\\$get", "\\$horolog", "\\$io", "\\$increment", "\\$job", "\\$justify", "\\$length", "\\$name", "\\$next", "\\$order", "\\$piece", "\\$qlength", "\\$qsubscript", "\\$query", "\\$quit", "\\$random", "\\$reverse", "\\$select", "\\$stack", "\\$test", "\\$text", "\\$translate", "\\$view", "\\$x", "\\$y", "\\$a", "\\$c", "\\$d", "\\$e", "\\$ec", "\\$es", "\\$et", "\\$f", "\\$fn", "\\$g", "\\$h", "\\$i", "\\$j", "\\$l", "\\$n", "\\$na", "\\$o", "\\$p", "\\$q", "\\$ql", "\\$qs", "\\$r", "\\$re", "\\$s", "\\$st", "\\$t", "\\$tr", "\\$v", "\\$z"]);
  var l = o(["break", "close", "do", "else", "for", "goto", "halt", "hang", "if", "job", "kill", "lock", "merge", "new", "open", "quit", "read", "set", "tcommit", "trollback", "tstart", "use", "view", "write", "xecute", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "q", "r", "s", "tc", "tro", "ts", "u", "v", "w", "x"]);
  let d = {
    name: "mumps",
    startState: function () {
      return {
        label: false,
        commandMode: 0
      };
    },
    token: function (e, t) {
      var $;
      var o;
      var d;
      $ = e;
      o = t;
      if ($.sol()) {
        o.label = true;
        o.commandMode = 0;
      }
      var s = ((d = $.peek()) == " " || d == "\t" ? (o.label = false, o.commandMode == 0 ? o.commandMode = 1 : (o.commandMode < 0 || o.commandMode == 2) && (o.commandMode = 0)) : d != "." && o.commandMode > 0 && (d == ":" ? o.commandMode = -1 : o.commandMode = 2), (d === "(" || d === "\t") && (o.label = false), d === ";") ? ($.skipToEnd(), "comment") : $.match(/^[-+]?\d+(\.\d+)?([eE][-+]?\d+)?/) ? "number" : d == "\"" ? $.skipTo("\"") ? ($.next(), "string") : ($.skipToEnd(), "error") : $.match(a) || $.match(n) ? "operator" : $.match(r) ? null : c.test(d) ? ($.next(), "bracket") : o.commandMode > 0 && $.match(l) ? "controlKeyword" : $.match(i) ? "builtin" : $.match(m) ? "variable" : d === "$" || d === "^" ? ($.next(), "builtin") : d === "@" ? ($.next(), "string.special") : /[\w%]/.test(d) ? ($.eatWhile(/[\w%]/), "variable") : ($.next(), "error");
      if (t.label) {
        return "tag";
      } else {
        return s;
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    mumps: function () {
      return d;
    }
  });
}