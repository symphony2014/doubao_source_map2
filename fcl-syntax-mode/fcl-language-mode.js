// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 93565.9ef0d68e.js
         * chunkId: 93565
         * moduleId: 657535
         */
module.exports = function (module, exports, require) {
  var r = {
    term: true,
    method: true,
    accu: true,
    rule: true,
    then: true,
    is: true,
    and: true,
    or: true,
    if: true,
    default: true
  };
  var o = {
    var_input: true,
    var_output: true,
    fuzzify: true,
    defuzzify: true,
    function_block: true,
    ruleblock: true
  };
  var i = {
    end_ruleblock: true,
    end_defuzzify: true,
    end_function_block: true,
    end_fuzzify: true,
    end_var: true
  };
  var a = {
    true: true,
    false: true,
    nan: true,
    real: true,
    min: true,
    max: true,
    cog: true,
    cogs: true
  };
  var u = /[+\-*&^%:=<>!|\/]/;
  function l(e, n) {
    var t = e.next();
    if (/[\d\.]/.test(t)) {
      if (t == ".") {
        e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/);
      } else if (t == "0") {
        if (!e.match(/^[xX][0-9a-fA-F]+/)) {
          e.match(/^0[0-7]+/);
        }
      } else {
        e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/);
      }
      return "number";
    }
    if (t == "/" || t == "(") {
      if (e.eat("*")) {
        n.tokenize = c;
        return c(e, n);
      }
      if (e.eat("/")) {
        e.skipToEnd();
        return "comment";
      }
    }
    if (u.test(t)) {
      e.eatWhile(u);
      return "operator";
    }
    e.eatWhile(/[\w\$_\xa1-\uffff]/);
    var l = e.current().toLowerCase();
    if (r.propertyIsEnumerable(l) || o.propertyIsEnumerable(l) || i.propertyIsEnumerable(l)) {
      return "keyword";
    } else if (a.propertyIsEnumerable(l)) {
      return "atom";
    } else {
      return "variable";
    }
  }
  function c(e, n) {
    var t;
    var r = false;
    while (t = e.next()) {
      if ((t == "/" || t == ")") && r) {
        n.tokenize = l;
        break;
      }
      r = t == "*";
    }
    return "comment";
  }
  function f(e, n, t, r, o) {
    this.indented = e;
    this.column = n;
    this.type = t;
    this.align = r;
    this.prev = o;
  }
  let s = {
    name: "fcl",
    startState: function (e) {
      return {
        tokenize: null,
        context: new f(-e, 0, "top", false),
        indented: 0,
        startOfLine: true
      };
    },
    token: function (e, n) {
      var t;
      var r;
      var a;
      var u = n.context;
      if (e.sol()) {
        if (u.align == null) {
          u.align = false;
        }
        n.indented = e.indentation();
        n.startOfLine = true;
      }
      if (e.eatSpace()) {
        return null;
      }
      var c = (n.tokenize || l)(e, n);
      if (c == "comment") {
        return c;
      }
      if (u.align == null) {
        u.align = true;
      }
      var s = e.current().toLowerCase();
      if (o.propertyIsEnumerable(s)) {
        r = e.column();
        a = "end_block";
        n.context = new f(n.indented, r, a, null, n.context);
      } else {
        ;
        if (i.propertyIsEnumerable(s) && (t = n).context.prev) {
          if (t.context.type == "end_block") {
            t.indented = t.context.indented;
          }
          t.context = t.context.prev;
        }
      }
      n.startOfLine = false;
      return c;
    },
    indent: function (e, n, t) {
      if (e.tokenize != l && e.tokenize != null) {
        return 0;
      }
      var r = e.context;
      var o = i.propertyIsEnumerable(n);
      if (r.align) {
        return r.column + +!o;
      } else {
        return r.indented + (o ? 0 : t.unit);
      }
    },
    languageData: {
      commentTokens: {
        line: "//",
        block: {
          open: "(*",
          close: "*)"
        }
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    fcl: function () {
      return s;
    }
  });
}