// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'qLanguageMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 96786.dc651c1c.js
         * chunkId: 96786
         * moduleId: 445124
         */
module.exports = function (module, exports, require) {
  var r;
  var o = RegExp("^(abs|acos|aj|aj0|all|and|any|asc|asin|asof|atan|attr|avg|avgs|bin|by|ceiling|cols|cor|cos|count|cov|cross|csv|cut|delete|deltas|desc|dev|differ|distinct|div|do|each|ej|enlist|eval|except|exec|exit|exp|fby|fills|first|fkeys|flip|floor|from|get|getenv|group|gtime|hclose|hcount|hdel|hopen|hsym|iasc|idesc|if|ij|in|insert|inter|inv|key|keys|last|like|list|lj|load|log|lower|lsq|ltime|ltrim|mavg|max|maxs|mcount|md5|mdev|med|meta|min|mins|mmax|mmin|mmu|mod|msum|neg|next|not|null|or|over|parse|peach|pj|plist|prd|prds|prev|prior|rand|rank|ratios|raze|read0|read1|reciprocal|reverse|rload|rotate|rsave|rtrim|save|scan|select|set|setenv|show|signum|sin|sqrt|ss|ssr|string|sublist|sum|sums|sv|system|tables|tan|til|trim|txf|type|uj|ungroup|union|update|upper|upsert|value|var|view|views|vs|wavg|where|where|while|within|wj|wj1|wsum|xasc|xbar|xcol|xcols|xdesc|xexp|xgroup|xkey|xlog|xprev|xrank)$");
  var i = /[|/&^!+:\\\-*%$=~#;@><,?_\'\"\[\(\]\)\s{}]/;
  function s(t, e) {
    var n = t.sol();
    var a = t.next();
    r = null;
    if (n) {
      if (a == "/") {
        return (e.tokenize = c)(t, e);
      }
      if (a == "\\") {
        if (t.eol() || /\s/.test(t.peek())) {
          t.skipToEnd();
          if (/^\\\s*$/.test(t.current())) {
            (e.tokenize = l)(t);
          } else {
            e.tokenize = s;
          }
          return "comment";
        } else {
          e.tokenize = s;
          return "builtin";
        }
      }
    }
    if (/\s/.test(a)) {
      if (t.peek() == "/") {
        t.skipToEnd();
        return "comment";
      } else {
        return "null";
      }
    }
    if (a == "\"") {
      return (e.tokenize = u)(t, e);
    }
    if (a == "`") {
      t.eatWhile(/[A-Za-z\d_:\/.]/);
      return "macroName";
    }
    if (a == "." && /\d/.test(t.peek()) || /\d/.test(a)) {
      var d = null;
      t.backUp(1);
      if (t.match(/^\d{4}\.\d{2}(m|\.\d{2}([DT](\d{2}(:\d{2}(:\d{2}(\.\d{1,9})?)?)?)?)?)/) || t.match(/^\d+D(\d{2}(:\d{2}(:\d{2}(\.\d{1,9})?)?)?)/) || t.match(/^\d{2}:\d{2}(:\d{2}(\.\d{1,9})?)?/) || t.match(/^\d+[ptuv]{1}/)) {
        d = "temporal";
      } else if (t.match(/^0[NwW]{1}/) || t.match(/^0x[\da-fA-F]*/) || t.match(/^[01]+[b]{1}/) || t.match(/^\d+[chijn]{1}/) || t.match(/-?\d*(\.\d*)?(e[+\-]?\d+)?(e|f)?/)) {
        d = "number";
      }
      if (d && (!(a = t.peek()) || i.test(a))) {
        return d;
      } else {
        t.next();
        return "error";
      }
    }
    if (/[A-Za-z]|\./.test(a)) {
      t.eatWhile(/[A-Za-z._\d]/);
      if (o.test(t.current())) {
        return "keyword";
      } else {
        return "variable";
      }
    } else if (/[|/&^!+:\\\-*%$=~#;@><\.,?_\']/.test(a) || /[{}\(\[\]\)]/.test(a)) {
      return null;
    } else {
      return "error";
    }
  }
  function c(t, e) {
    t.skipToEnd();
    if (/\/\s*$/.test(t.current())) {
      (e.tokenize = a)(t, e);
    } else {
      e.tokenize = s;
    }
    return "comment";
  }
  function a(t, e) {
    var n = t.sol() && t.peek() == "\\";
    t.skipToEnd();
    if (n && /^\\\s*$/.test(t.current())) {
      e.tokenize = s;
    }
    return "comment";
  }
  function l(t) {
    t.skipToEnd();
    return "comment";
  }
  function u(t, e) {
    var n;
    var r = false;
    var o = false;
    while (n = t.next()) {
      if (n == "\"" && !r) {
        o = true;
        break;
      }
      r = !r && n == "\\";
    }
    if (o) {
      e.tokenize = s;
    }
    return "string";
  }
  function d(t, e, n) {
    t.context = {
      prev: t.context,
      indent: t.indent,
      col: n,
      type: e
    };
  }
  function m(t) {
    t.indent = t.context.indent;
    t.context = t.context.prev;
  }
  let p = {
    name: "q",
    startState: function () {
      return {
        tokenize: s,
        context: null,
        indent: 0,
        col: 0
      };
    },
    token: function (t, e) {
      if (t.sol()) {
        if (e.context && e.context.align == null) {
          e.context.align = false;
        }
        e.indent = t.indentation();
      }
      var n = e.tokenize(t, e);
      if (n != "comment" && e.context && e.context.align == null && e.context.type != "pattern") {
        e.context.align = true;
      }
      if (r == "(") {
        d(e, ")", t.column());
      } else if (r == "[") {
        d(e, "]", t.column());
      } else if (r == "{") {
        d(e, "}", t.column());
      } else if (/[\]\}\)]/.test(r)) {
        while (e.context && e.context.type == "pattern") {
          m(e);
        }
        if (e.context && r == e.context.type) {
          m(e);
        }
      } else if (r == "." && e.context && e.context.type == "pattern") {
        m(e);
      } else if (/atom|string|variable/.test(n) && e.context) {
        if (/[\}\]]/.test(e.context.type)) {
          d(e, "pattern", t.column());
        } else if (e.context.type == "pattern" && !e.context.align) {
          e.context.align = true;
          e.context.col = t.column();
        }
      }
      return n;
    },
    indent: function (t, e, n) {
      var r = e && e.charAt(0);
      var o = t.context;
      if (/[\]\}]/.test(r)) {
        while (o && o.type == "pattern") {
          o = o.prev;
        }
      }
      var i = o && r == o.type;
      if (o) {
        if (o.type == "pattern") {
          return o.col;
        } else if (o.align) {
          return o.col + +!i;
        } else {
          return o.indent + (i ? 0 : n.unit);
        }
      } else {
        return 0;
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    qLanguageMode: function () {
      return p;
    }
  });
}