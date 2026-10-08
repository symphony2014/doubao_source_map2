// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 60351.5684edc0.js
         * chunkId: 60351
         * moduleId: 612149
         */
module.exports = function (module, exports, require) {
  var n = function (e) {
    var t = {};
    var r = e.split(" ");
    var n = 0;
    for (; n < r.length; ++n) {
      t[r[n]] = true;
    }
    return t;
  }("absolute and array asm begin case const constructor destructor div do downto else end file for function goto if implementation in inherited inline interface label mod nil not object of operator or packed procedure program record reintroduce repeat self set shl shr string then to type unit until uses var while with xor as class dispinterface except exports finalization finally initialization inline is library on out packed property raise resourcestring threadvar try absolute abstract alias assembler bitpacked break cdecl continue cppdecl cvar default deprecated dynamic enumerator experimental export external far far16 forward generic helper implements index interrupt iocheck local message name near nodefault noreturn nostackframe oldfpccall otherwise overload override pascal platform private protected public published read register reintroduce result safecall saveregisters softfloat specialize static stdcall stored strict unaligned unimplemented varargs virtual write");
  var a = {
    null: true
  };
  var i = /[+\-*&%=<>!?|\/]/;
  function o(e, t) {
    var r;
    var n = false;
    while (r = e.next()) {
      if (r == ")" && n) {
        t.tokenize = null;
        break;
      }
      n = r == "*";
    }
    return "comment";
  }
  function l(e, t) {
    for (var r; r = e.next();) {
      if (r == "}") {
        t.tokenize = null;
        break;
      }
    }
    return "comment";
  }
  let s = {
    name: "pascal",
    startState: function () {
      return {
        tokenize: null
      };
    },
    token: function (e, t) {
      if (e.eatSpace()) {
        return null;
      }
      var r = (t.tokenize || function (e, t) {
        var r;
        var s = e.next();
        if (s == "#" && t.startOfLine) {
          e.skipToEnd();
          return "meta";
        }
        if (s == "\"" || s == "'") {
          ;
          r = s;
          t.tokenize = function (e, t) {
            var n;
            var a = false;
            var i = false;
            while ((n = e.next()) != null) {
              if (n == r && !a) {
                i = true;
                break;
              }
              a = !a && n == "\\";
            }
            if (i || !a) {
              t.tokenize = null;
            }
            return "string";
          };
          return t.tokenize(e, t);
        }
        if (s == "(" && e.eat("*")) {
          t.tokenize = o;
          return o(e, t);
        }
        if (s == "{") {
          t.tokenize = l;
          return l(e, t);
        }
        if (/[\[\]\(\),;\:\.]/.test(s)) {
          return null;
        }
        if (/\d/.test(s)) {
          e.eatWhile(/[\w\.]/);
          return "number";
        }
        if (s == "/" && e.eat("/")) {
          e.skipToEnd();
          return "comment";
        }
        if (i.test(s)) {
          e.eatWhile(i);
          return "operator";
        }
        e.eatWhile(/[\w\$_]/);
        var u = e.current();
        if (n.propertyIsEnumerable(u)) {
          return "keyword";
        } else if (a.propertyIsEnumerable(u)) {
          return "atom";
        } else {
          return "variable";
        }
      })(e, t);
      return r;
    },
    languageData: {
      indentOnInput: /^\s*[{}]$/,
      commentTokens: {
        block: {
          open: "(*",
          close: "*)"
        }
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    pascal: function () {
      return s;
    }
  });
}