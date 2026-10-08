// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10824.b3dcc85e.js
         * chunkId: 10824
         * moduleId: 874893
         */
module.exports = function (module, exports, require) {
  var r = "comment";
  var a = "string";
  var i = "symbol";
  var s = "atom";
  var c = "number";
  var l = "bracket";
  function o(e) {
    var t = {};
    var n = e.split(" ");
    var r = 0;
    for (; r < n.length; ++r) {
      t[n[r]] = true;
    }
    return t;
  }
  var d = o("λ case-lambda call/cc class cond-expand define-class define-values exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax define-macro defmacro delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt #f floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? #t tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?");
  var u = o("define let letrec let* lambda define-macro defmacro let-syntax letrec-syntax let-values let*-values define-syntax syntax-rules define-values when unless");
  function m(e, t, n) {
    this.indent = e;
    this.type = t;
    this.prev = n;
  }
  function p(e, t, n) {
    e.indentStack = new m(t, n, e.indentStack);
  }
  var f = new RegExp(/^(?:[-+]i|[-+][01]+#*(?:\/[01]+#*)?i|[-+]?[01]+#*(?:\/[01]+#*)?@[-+]?[01]+#*(?:\/[01]+#*)?|[-+]?[01]+#*(?:\/[01]+#*)?[-+](?:[01]+#*(?:\/[01]+#*)?)?i|[-+]?[01]+#*(?:\/[01]+#*)?)(?=[()\s;"]|$)/i);
  var h = new RegExp(/^(?:[-+]i|[-+][0-7]+#*(?:\/[0-7]+#*)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?@[-+]?[0-7]+#*(?:\/[0-7]+#*)?|[-+]?[0-7]+#*(?:\/[0-7]+#*)?[-+](?:[0-7]+#*(?:\/[0-7]+#*)?)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?)(?=[()\s;"]|$)/i);
  var g = new RegExp(/^(?:[-+]i|[-+][\da-f]+#*(?:\/[\da-f]+#*)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?@[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?[-+](?:[\da-f]+#*(?:\/[\da-f]+#*)?)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?)(?=[()\s;"]|$)/i);
  var x = new RegExp(/^(?:[-+]i|[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)i|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)@[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)?i|(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*))(?=[()\s;"]|$)/i);
  function b(e) {
    return e.match(f);
  }
  function v(e) {
    return e.match(h);
  }
  function k(e, t) {
    if (t === true) {
      e.backUp(1);
    }
    return e.match(x);
  }
  function y(e) {
    return e.match(g);
  }
  function E(e, t) {
    var n;
    var r = false;
    while ((n = e.next()) != null) {
      if (n == t.token && !r) {
        t.state.mode = false;
        break;
      }
      r = !r && n == "\\";
    }
  }
  let w = {
    name: "scheme",
    startState: function () {
      return {
        indentStack: null,
        indentation: 0,
        mode: false,
        sExprComment: false,
        sExprQuote: false
      };
    },
    token: function (e, t) {
      if (t.indentStack == null && e.sol()) {
        t.indentation = e.indentation();
      }
      if (e.eatSpace()) {
        return null;
      }
      var n = null;
      switch (t.mode) {
        case "string":
          E(e, {
            token: "\"",
            state: t
          });
          n = a;
          break;
        case "symbol":
          E(e, {
            token: "|",
            state: t
          });
          n = i;
          break;
        case "comment":
          var o;
          var m = false;
          while ((o = e.next()) != null) {
            if (o == "#" && m) {
              t.mode = false;
              break;
            }
            m = o == "|";
          }
          n = r;
          break;
        case "s-expr-comment":
          t.mode = false;
          if (e.peek() == "(" || e.peek() == "[") {
            t.sExprComment = 0;
          } else {
            e.eatWhile(/[^\s\(\)\[\]]/);
            n = r;
            break;
          }
        default:
          var f = e.next();
          if (f == "\"") {
            t.mode = "string";
            n = a;
          } else if (f == "'") {
            if (e.peek() == "(" || e.peek() == "[") {
              if (typeof t.sExprQuote != "number") {
                t.sExprQuote = 0;
              }
            } else {
              e.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/);
            }
            n = s;
          } else if (f == "|") {
            t.mode = "symbol";
            n = i;
          } else if (f == "#") {
            if (e.eat("|")) {
              t.mode = "comment";
              n = r;
            } else if (e.eat(/[tf]/i)) {
              n = s;
            } else if (e.eat(";")) {
              t.mode = "s-expr-comment";
              n = r;
            } else {
              var h = null;
              var g = false;
              var x = true;
              if (e.eat(/[ei]/i)) {
                g = true;
              } else {
                e.backUp(1);
              }
              if (e.match(/^#b/i)) {
                h = b;
              } else if (e.match(/^#o/i)) {
                h = v;
              } else if (e.match(/^#x/i)) {
                h = y;
              } else if (e.match(/^#d/i)) {
                h = k;
              } else if (e.match(/^[-+0-9.]/, false)) {
                x = false;
                h = k;
              } else if (!g) {
                e.eat("#");
              }
              if (h != null) {
                if (x && !g) {
                  e.match(/^#[ei]/i);
                }
                if (h(e)) {
                  n = c;
                }
              }
            }
          } else if (/^[-+0-9.]/.test(f) && k(e, true)) {
            n = c;
          } else if (f == ";") {
            e.skipToEnd();
            n = r;
          } else if (f == "(" || f == "[") {
            var w;
            var S = "";
            var _ = e.column();
            while ((w = e.eat(/[^\s\(\[\;\)\]]/)) != null) {
              S += w;
            }
            if (S.length > 0 && u.propertyIsEnumerable(S)) {
              p(t, _ + 2, f);
            } else {
              e.eatSpace();
              if (e.eol() || e.peek() == ";") {
                p(t, _ + 1, f);
              } else {
                p(t, _ + e.current().length, f);
              }
            }
            e.backUp(e.current().length - 1);
            if (typeof t.sExprComment == "number") {
              t.sExprComment++;
            }
            if (typeof t.sExprQuote == "number") {
              t.sExprQuote++;
            }
            n = l;
          } else if (f == ")" || f == "]") {
            n = l;
            if (t.indentStack != null && t.indentStack.type == (f == ")" ? "(" : "[")) {
              t.indentStack = t.indentStack.prev;
              if (typeof t.sExprComment == "number" && --t.sExprComment == 0) {
                n = r;
                t.sExprComment = false;
              }
              if (typeof t.sExprQuote == "number" && --t.sExprQuote == 0) {
                n = s;
                t.sExprQuote = false;
              }
            }
          } else {
            e.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/);
            n = d && d.propertyIsEnumerable(e.current()) ? "builtin" : "variable";
          }
      }
      if (typeof t.sExprComment == "number") {
        return r;
      } else if (typeof t.sExprQuote == "number") {
        return s;
      } else {
        return n;
      }
    },
    indent: function (e) {
      if (e.indentStack == null) {
        return e.indentation;
      } else {
        return e.indentStack.indent;
      }
    },
    languageData: {
      closeBrackets: {
        brackets: ["(", "[", "{", "\""]
      },
      commentTokens: {
        line: ";;"
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    scheme: function () {
      return w;
    }
  });
}