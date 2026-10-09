// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68251.2640fd41.js
         * chunkId: 68251
         * moduleId: 259859
         */
module.exports = function (module, exports, require) {
  function n(e) {
    var r = {};
    var t = e.split(" ");
    var n = 0;
    for (; n < t.length; ++n) {
      r[t[n]] = true;
    }
    return r;
  }
  var a = n("Tcl safe after append array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd close concat continue dde eof encoding error eval exec exit expr fblocked fconfigure fcopy file fileevent filename filename flush for foreach format gets glob global history http if incr info interp join lappend lindex linsert list llength load lrange lreplace lsearch lset lsort memory msgcat namespace open package parray pid pkg::create pkg_mkIndex proc puts pwd re_syntax read regex regexp registry regsub rename resource return scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_wordBreakAfter tcl_startOfPreviousWord tcl_wordBreakBefore tcltest tclvars tell time trace unknown unset update uplevel upvar variable vwait");
  var o = n("if elseif else and not or eq ne in ni for foreach while switch");
  var i = /[+\-*&%=<>!?^\/\|]/;
  function l(e, r, t) {
    r.tokenize = t;
    return t(e, r);
  }
  function f(e, r) {
    var t;
    var n = r.beforeParams;
    r.beforeParams = false;
    var c = e.next();
    if ((c == "\"" || c == "'") && r.inParams) {
      ;
      return l(e, r, (t = c, function (e, r) {
        var n;
        var a = false;
        var o = false;
        while ((n = e.next()) != null) {
          if (n == t && !a) {
            o = true;
            break;
          }
          a = !a && n == "\\";
        }
        if (o) {
          r.tokenize = f;
        }
        return "string";
      }));
    }
    if (/[\[\]{}\(\),;\.]/.test(c)) {
      if (c == "(" && n) {
        r.inParams = true;
      } else if (c == ")") {
        r.inParams = false;
      }
      return null;
    }
    if (/\d/.test(c)) {
      e.eatWhile(/[\w\.]/);
      return "number";
    }
    if (c == "#") {
      if (e.eat("*")) {
        return l(e, r, s);
      } else if (c == "#" && e.match(/ *\[ *\[/)) {
        return l(e, r, u);
      } else {
        e.skipToEnd();
        return "comment";
      }
    }
    if (c == "\"") {
      e.skipTo(/"/);
      return "comment";
    }
    if (c == "$") {
      e.eatWhile(/[$_a-z0-9A-Z\.{:]/);
      e.eatWhile(/}/);
      r.beforeParams = true;
      return "builtin";
    }
    if (i.test(c)) {
      e.eatWhile(i);
      return "comment";
    }
    e.eatWhile(/[\w\$_{}\xa1-\uffff]/);
    var m = e.current().toLowerCase();
    if (a && a.propertyIsEnumerable(m)) {
      return "keyword";
    } else if (o && o.propertyIsEnumerable(m)) {
      r.beforeParams = true;
      return "keyword";
    } else {
      return null;
    }
  }
  function s(e, r) {
    var t;
    var n = false;
    while (t = e.next()) {
      if (t == "#" && n) {
        r.tokenize = f;
        break;
      }
      n = t == "*";
    }
    return "comment";
  }
  function u(e, r) {
    var t;
    var n = 0;
    while (t = e.next()) {
      if (t == "#" && n == 2) {
        r.tokenize = f;
        break;
      }
      if (t == "]") {
        n++;
      } else if (t != " ") {
        n = 0;
      }
    }
    return "meta";
  }
  let c = {
    name: "tcl",
    startState: function () {
      return {
        tokenize: f,
        beforeParams: false,
        inParams: false
      };
    },
    token: function (e, r) {
      if (e.eatSpace()) {
        return null;
      } else {
        return r.tokenize(e, r);
      }
    },
    languageData: {
      commentTokens: {
        line: "#"
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    tcl: function () {
      return c;
    }
  });
}