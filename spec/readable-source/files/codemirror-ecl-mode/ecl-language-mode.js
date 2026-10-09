// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 81653.c0e7146e.js
         * chunkId: 81653
         * moduleId: 736867
         */
module.exports = function (module, exports, require) {
  function r(e) {
    var t = {};
    var n = e.split(" ");
    var r = 0;
    for (; r < n.length; ++r) {
      t[n[r]] = true;
    }
    return t;
  }
  var a;
  var o = r("abs acos allnodes ascii asin asstring atan atan2 ave case choose choosen choosesets clustersize combine correlation cos cosh count covariance cron dataset dedup define denormalize distribute distributed distribution ebcdic enth error evaluate event eventextra eventname exists exp failcode failmessage fetch fromunicode getisvalid global graph group hash hash32 hash64 hashcrc hashmd5 having if index intformat isvalid iterate join keyunicode length library limit ln local log loop map matched matchlength matchposition matchtext matchunicode max merge mergejoin min nolocal nonempty normalize parse pipe power preload process project pull random range rank ranked realformat recordof regexfind regexreplace regroup rejected rollup round roundup row rowdiff sample set sin sinh sizeof soapcall sort sorted sqrt stepped stored sum table tan tanh thisnode topn tounicode transfer trim truncate typeof ungroup unicodeorder variance which workunit xmldecode xmlencode xmltext xmlunicode");
  var i = r("apply assert build buildindex evaluate fail keydiff keypatch loadxml nothor notify output parallel sequential soapcall wait");
  var l = r("__compressed__ all and any as atmost before beginc++ best between case const counter csv descend encrypt end endc++ endmacro except exclusive expire export extend false few first flat from full function group header heading hole ifblock import in interface joined keep keyed last left limit load local locale lookup macro many maxcount maxlength min skew module named nocase noroot noscan nosort not of only opt or outer overwrite packed partition penalty physicallength pipe quote record relationship repeat return right scan self separator service shared skew skip sql store terminator thor threshold token transform trim true type unicodeorder unsorted validate virtual whole wild within xml xpath");
  var s = r("ascii big_endian boolean data decimal ebcdic integer pattern qstring real record rule set of string token udecimal unicode unsigned varstring varunicode");
  var u = r("checkpoint deprecated failcode failmessage failure global independent onwarning persist priority recovery stored success wait when");
  var c = r("catch class do else finally for if switch try while");
  var p = r("true false null");
  var d = {
    "#": function (e, t) {
      return !!t.startOfLine && (e.skipToEnd(), "meta");
    }
  };
  var m = /[+\-*&%=<>!?|\/]/;
  function f(e, t) {
    var n;
    var r = e.next();
    if (d[r]) {
      var y = d[r](e, t);
      if (y !== false) {
        return y;
      }
    }
    if (r == "\"" || r == "'") {
      ;
      n = r;
      t.tokenize = function (e, t) {
        var r;
        var a = false;
        var o = false;
        while ((r = e.next()) != null) {
          if (r == n && !a) {
            o = true;
            break;
          }
          a = !a && r == "\\";
        }
        if (o || !a) {
          t.tokenize = f;
        }
        return "string";
      };
      return t.tokenize(e, t);
    }
    if (/[\[\]{}\(\),;\:\.]/.test(r)) {
      a = r;
      return null;
    }
    if (/\d/.test(r)) {
      e.eatWhile(/[\w\.]/);
      return "number";
    }
    if (r == "/") {
      if (e.eat("*")) {
        t.tokenize = h;
        return h(e, t);
      }
      if (e.eat("/")) {
        e.skipToEnd();
        return "comment";
      }
    }
    if (m.test(r)) {
      e.eatWhile(m);
      return "operator";
    }
    e.eatWhile(/[\w\$_]/);
    var g = e.current().toLowerCase();
    if (o.propertyIsEnumerable(g)) {
      if (c.propertyIsEnumerable(g)) {
        a = "newstatement";
      }
      return "keyword";
    }
    if (i.propertyIsEnumerable(g)) {
      if (c.propertyIsEnumerable(g)) {
        a = "newstatement";
      }
      return "variable";
    }
    if (l.propertyIsEnumerable(g)) {
      if (c.propertyIsEnumerable(g)) {
        a = "newstatement";
      }
      return "modifier";
    }
    if (s.propertyIsEnumerable(g)) {
      if (c.propertyIsEnumerable(g)) {
        a = "newstatement";
      }
      return "type";
    }
    if (u.propertyIsEnumerable(g)) {
      if (c.propertyIsEnumerable(g)) {
        a = "newstatement";
      }
      return "builtin";
    }
    for (var b = g.length - 1; b >= 0 && (!isNaN(g[b]) || g[b] == "_");) {
      --b;
    }
    if (b > 0) {
      var v = g.substr(0, b + 1);
      if (s.propertyIsEnumerable(v)) {
        if (c.propertyIsEnumerable(v)) {
          a = "newstatement";
        }
        return "type";
      }
    }
    if (p.propertyIsEnumerable(g)) {
      return "atom";
    } else {
      return null;
    }
  }
  function h(e, t) {
    var n;
    var r = false;
    while (n = e.next()) {
      if (n == "/" && r) {
        t.tokenize = f;
        break;
      }
      r = n == "*";
    }
    return "comment";
  }
  function y(e, t, n, r, a) {
    this.indented = e;
    this.column = t;
    this.type = n;
    this.align = r;
    this.prev = a;
  }
  function g(e, t, n) {
    return e.context = new y(e.indented, t, n, null, e.context);
  }
  function b(e) {
    var t = e.context.type;
    if (t == ")" || t == "]" || t == "}") {
      e.indented = e.context.indented;
    }
    return e.context = e.context.prev;
  }
  let v = {
    name: "ecl",
    startState: function (e) {
      return {
        tokenize: null,
        context: new y(-e, 0, "top", false),
        indented: 0,
        startOfLine: true
      };
    },
    token: function (e, t) {
      var n = t.context;
      if (e.sol()) {
        if (n.align == null) {
          n.align = false;
        }
        t.indented = e.indentation();
        t.startOfLine = true;
      }
      if (e.eatSpace()) {
        return null;
      }
      a = null;
      var r = (t.tokenize || f)(e, t);
      if (r == "comment" || r == "meta") {
        return r;
      }
      if (n.align == null) {
        n.align = true;
      }
      if ((a == ";" || a == ":") && n.type == "statement") {
        b(t);
      } else if (a == "{") {
        g(t, e.column(), "}");
      } else if (a == "[") {
        g(t, e.column(), "]");
      } else if (a == "(") {
        g(t, e.column(), ")");
      } else if (a == "}") {
        while (n.type == "statement") {
          n = b(t);
        }
        for (n.type == "}" && (n = b(t)); n.type == "statement";) {
          n = b(t);
        }
      } else if (a == n.type) {
        b(t);
      } else if (n.type == "}" || n.type == "top" || n.type == "statement" && a == "newstatement") {
        g(t, e.column(), "statement");
      }
      t.startOfLine = false;
      return r;
    },
    indent: function (e, t, n) {
      if (e.tokenize != f && e.tokenize != null) {
        return 0;
      }
      var r = e.context;
      var a = t && t.charAt(0);
      if (r.type == "statement" && a == "}") {
        r = r.prev;
      }
      var o = a == r.type;
      if (r.type == "statement") {
        return r.indented + (a == "{" ? 0 : n.unit);
      } else if (r.align) {
        return r.column + +!o;
      } else {
        return r.indented + (o ? 0 : n.unit);
      }
    },
    languageData: {
      indentOnInput: /^\s*[{}]$/
    }
  };
  require.r(exports);
  require.d(exports, {
    ecl: function () {
      return v;
    }
  });
}