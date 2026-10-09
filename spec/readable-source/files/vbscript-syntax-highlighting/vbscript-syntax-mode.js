// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 69676.58818692.js
         * chunkId: 69676
         * moduleId: 263272
         */
module.exports = function (module, exports, require) {
  function r(e) {
    var t = "error";
    function n(e) {
      return RegExp("^((" + e.join(")|(") + "))\\b", "i");
    }
    var r = RegExp("^[\\+\\-\\*/&\\\\\\^<>=]");
    var a = RegExp("^((<>)|(<=)|(>=))");
    var i = RegExp("^[\\.,]");
    var o = RegExp("^[\\(\\)]");
    var c = RegExp("^[A-Za-z][_A-Za-z0-9]*");
    var b = n(["and", "or", "not", "xor", "is", "mod", "eqv", "imp"]);
    var l = ["WScript", "err", "debug", "RegExp"];
    var u = ["clear", "execute", "raise", "replace", "test", "write", "writeline", "close", "open", "state", "eof", "update", "addnew", "end", "createobject", "quit"].concat(["description", "firstindex", "global", "helpcontext", "helpfile", "ignorecase", "length", "number", "pattern", "source", "value", "count"]);
    l = l.concat(["vbBlack", "vbRed", "vbGreen", "vbYellow", "vbBlue", "vbMagenta", "vbCyan", "vbWhite", "vbBinaryCompare", "vbTextCompare", "vbSunday", "vbMonday", "vbTuesday", "vbWednesday", "vbThursday", "vbFriday", "vbSaturday", "vbUseSystemDayOfWeek", "vbFirstJan1", "vbFirstFourDays", "vbFirstFullWeek", "vbGeneralDate", "vbLongDate", "vbShortDate", "vbLongTime", "vbShortTime", "vbObjectError", "vbOKOnly", "vbOKCancel", "vbAbortRetryIgnore", "vbYesNoCancel", "vbYesNo", "vbRetryCancel", "vbCritical", "vbQuestion", "vbExclamation", "vbInformation", "vbDefaultButton1", "vbDefaultButton2", "vbDefaultButton3", "vbDefaultButton4", "vbApplicationModal", "vbSystemModal", "vbOK", "vbCancel", "vbAbort", "vbRetry", "vbIgnore", "vbYes", "vbNo", "vbCr", "VbCrLf", "vbFormFeed", "vbLf", "vbNewLine", "vbNullChar", "vbNullString", "vbTab", "vbVerticalTab", "vbUseDefault", "vbTrue", "vbFalse", "vbEmpty", "vbNull", "vbInteger", "vbLong", "vbSingle", "vbDouble", "vbCurrency", "vbDate", "vbString", "vbObject", "vbError", "vbBoolean", "vbVariant", "vbDataObject", "vbDecimal", "vbByte", "vbArray"]);
    if (e.isASP) {
      l = l.concat(["server", "response", "request", "session", "application"]);
      u = u.concat(["addheader", "appendtolog", "binarywrite", "end", "flush", "redirect", "binaryread", "remove", "removeall", "lock", "unlock", "abandon", "getlasterror", "htmlencode", "mappath", "transfer", "urlencode"], ["buffer", "cachecontrol", "charset", "contenttype", "expires", "expiresabsolute", "isclientconnected", "pics", "status", "clientcertificate", "cookies", "form", "querystring", "servervariables", "totalbytes", "contents", "staticobjects", "codepage", "lcid", "sessionid", "timeout", "scripttimeout"]);
    }
    var s = n(["dim", "redim", "then", "until", "randomize", "byval", "byref", "new", "property", "exit", "in", "const", "private", "public", "get", "set", "let", "stop", "on error resume next", "on error goto 0", "option explicit", "call", "me"]);
    var v = n(["true", "false", "nothing", "empty", "null"]);
    var d = n(["abs", "array", "asc", "atn", "cbool", "cbyte", "ccur", "cdate", "cdbl", "chr", "cint", "clng", "cos", "csng", "cstr", "date", "dateadd", "datediff", "datepart", "dateserial", "datevalue", "day", "escape", "eval", "execute", "exp", "filter", "formatcurrency", "formatdatetime", "formatnumber", "formatpercent", "getlocale", "getobject", "getref", "hex", "hour", "inputbox", "instr", "instrrev", "int", "fix", "isarray", "isdate", "isempty", "isnull", "isnumeric", "isobject", "join", "lbound", "lcase", "left", "len", "loadpicture", "log", "ltrim", "rtrim", "trim", "maths", "mid", "minute", "month", "monthname", "msgbox", "now", "oct", "replace", "rgb", "right", "rnd", "round", "scriptengine", "scriptenginebuildversion", "scriptenginemajorversion", "scriptengineminorversion", "second", "setlocale", "sgn", "sin", "space", "split", "sqr", "strcomp", "string", "strreverse", "tan", "time", "timer", "timeserial", "timevalue", "typename", "ubound", "ucase", "unescape", "vartype", "weekday", "weekdayname", "year"]);
    var m = n(l);
    var p = n(u);
    var f = n(["class", "sub", "select", "while", "if", "function", "property", "with", "for"]);
    var h = n(["else", "elseif", "case"]);
    var y = n(["next", "loop", "wend"]);
    var g = n(["end"]);
    var x = n(["do"]);
    var k = n(["on error resume next", "exit"]);
    var w = n(["rem"]);
    function L(e, t) {
      t.currentIndent++;
    }
    function C(e, t) {
      t.currentIndent--;
    }
    function I(e, n) {
      if (e.eatSpace()) {
        return null;
      }
      if (e.peek() === "'" || e.match(w)) {
        e.skipToEnd();
        return "comment";
      }
      if (e.match(/^((&H)|(&O))?[0-9\.]/i, false) && !e.match(/^((&H)|(&O))?[0-9\.]+[a-z_]/i, false)) {
        var l;
        var u;
        var D;
        var S = false;
        if (e.match(/^\d*\.\d+/i)) {
          S = true;
        } else if (e.match(/^\d+\.\d*/)) {
          S = true;
        } else if (e.match(/^\.\d+/)) {
          S = true;
        }
        if (S) {
          e.eat(/J/i);
          return "number";
        }
        var E = false;
        if (e.match(/^&H[0-9a-f]+/i)) {
          E = true;
        } else if (e.match(/^&O[0-7]+/i)) {
          E = true;
        } else if (e.match(/^[1-9]\d*F?/)) {
          e.eat(/J/i);
          E = true;
        } else if (e.match(/^0(?![\dx])/i)) {
          E = true;
        }
        if (E) {
          e.eat(/L/i);
          return "number";
        }
      }
      if (e.match("\"")) {
        u = (l = e.current()).length == 1;
        D = "string";
        n.tokenize = function (e, t) {
          while (!e.eol()) {
            e.eatWhile(/[^'"]/);
            if (e.match(l)) {
              t.tokenize = I;
              return D;
            }
            e.eat(/['"]/);
          }
          if (u) {
            t.tokenize = I;
          }
          return D;
        };
        return n.tokenize(e, n);
      } else if (e.match(a) || e.match(r) || e.match(b)) {
        return "operator";
      } else if (e.match(i)) {
        return null;
      } else if (e.match(o)) {
        return "bracket";
      } else if (e.match(k)) {
        n.doInCurrentLine = true;
        return "keyword";
      } else if (e.match(x)) {
        L(e, n);
        n.doInCurrentLine = true;
        return "keyword";
      } else if (e.match(f)) {
        if (n.doInCurrentLine) {
          n.doInCurrentLine = false;
        } else {
          L(e, n);
        }
        return "keyword";
      } else if (e.match(h)) {
        return "keyword";
      } else if (e.match(g)) {
        C(e, n);
        C(e, n);
        return "keyword";
      } else if (e.match(y)) {
        if (n.doInCurrentLine) {
          n.doInCurrentLine = false;
        } else {
          C(e, n);
        }
        return "keyword";
      } else if (e.match(s)) {
        return "keyword";
      } else if (e.match(v)) {
        return "atom";
      } else if (e.match(p)) {
        return "variableName.special";
      } else if (e.match(d) || e.match(m)) {
        return "builtin";
      } else if (e.match(c)) {
        return "variable";
      } else {
        e.next();
        return t;
      }
    }
    return {
      name: "vbscript",
      startState: function () {
        return {
          tokenize: I,
          lastToken: null,
          currentIndent: 0,
          nextLineIndent: 0,
          doInCurrentLine: false,
          ignoreKeyword: false
        };
      },
      token: function (e, n) {
        if (e.sol()) {
          n.currentIndent += n.nextLineIndent;
          n.nextLineIndent = 0;
          n.doInCurrentLine = 0;
        }
        var r = function (e, n) {
          var r = n.tokenize(e, n);
          var a = e.current();
          if (a === ".") {
            r = n.tokenize(e, n);
            a = e.current();
            if (!r || r.substr(0, 8) !== "variable" && r !== "builtin" && r !== "keyword") {
              return t;
            }
            if (r === "builtin" || r === "keyword") {
              r = "variable";
            }
            if (u.indexOf(a.substr(1)) > -1) {
              r = "keyword";
            }
          }
          return r;
        }(e, n);
        n.lastToken = {
          style: r,
          content: e.current()
        };
        if (r === null) {
          r = null;
        }
        return r;
      },
      indent: function (e, t, n) {
        var r = t.replace(/^\s+|\s+$/g, "");
        if (r.match(y) || r.match(g) || r.match(h)) {
          return n.unit * (e.currentIndent - 1);
        } else if (e.currentIndent < 0) {
          return 0;
        } else {
          return e.currentIndent * n.unit;
        }
      }
    };
  }
  let a = r({});
  let i = r({
    isASP: true
  });
  require.r(exports);
  require.d(exports, {
    vbScript: function () {
      return a;
    },
    vbScriptASP: function () {
      return i;
    }
  });
}