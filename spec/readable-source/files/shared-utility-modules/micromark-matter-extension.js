// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'matterExtension'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 81337.852c574d.js
         * chunkId: 81337
         * moduleId: 306788
         */
module.exports = function (module, exports, require) {
  var webpackEmptyModuleStub = require("webpack-empty-module-stub") /*id: 927617*/;
  var printfFormatUtil = require("printf-format-util") /*id: 947249*/;
  let o = Object.assign(i(Error), {
    eval: i(EvalError),
    range: i(RangeError),
    reference: i(ReferenceError),
    syntax: i(SyntaxError),
    type: i(TypeError),
    uri: i(URIError)
  });
  function i(e) {
    a.displayName = e.displayName || e.name;
    return a;
    function a(t, ...r) {
      return new e(t ? printfFormatUtil(t, ...r) : t);
    }
  }
  let s = {}.hasOwnProperty;
  let l = {
    yaml: "-",
    toml: "+"
  };
  function c(e) {
    let a = [];
    let t = -1;
    let r = Array.isArray(e) ? e : e ? [e] : ["yaml"];
    while (++t < r.length) {
      a[t] = function (e) {
        let a = e;
        if (typeof a == "string") {
          if (!s.call(l, a)) {
            throw o("Missing matter definition for `%s`", a);
          }
          a = {
            type: a,
            marker: l[a]
          };
        } else if (typeof a != "object") {
          throw o("Expected matter to be an object, not `%j`", a);
        }
        if (!s.call(a, "type")) {
          throw o("Missing `type` in matter `%j`", a);
        }
        if (!s.call(a, "fence") && !s.call(a, "marker")) {
          throw o("Missing `marker` or `fence` in matter `%j`", a);
        }
        return a;
      }(r[t]);
    }
    return a;
  }
  var escapeStringRegexp = require("escape-string-regexp") /*id: 805727*/;
  function d(e) {
    let a = this.resume();
    let t = this.stack[this.stack.length - 1];
    webpackEmptyModuleStub.okStub("value" in t);
    this.exit(e);
    t.value = a.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
  }
  function p(e) {
    this.config.enter.data.call(this, e);
    this.config.exit.data.call(this, e);
  }
  function f(e, a) {
    if (e.marker) {
      return g(e.marker, a).repeat(3);
    } else {
      return g(e.fence, a);
    }
  }
  function g(e, a) {
    if (typeof e == "string") {
      return e;
    } else {
      return e[a];
    }
  }
  var charClassificationUtils = require("char-classification-utils") /*id: 140430*/;
  function h(e, a) {
    if (e.marker) {
      return m(e.marker, a).repeat(3);
    } else {
      return m(e.fence, a);
    }
  }
  function m(e, a) {
    if (typeof e == "string") {
      return e;
    } else {
      return e[a];
    }
  }
  function _(e) {
    let a = e || "yaml";
    let t = this.data();
    let r = t.micromarkExtensions ||= [];
    let n = t.fromMarkdownExtensions ||= [];
    let o = t.toMarkdownExtensions ||= [];
    r.push(function (e) {
      let a = c(e);
      let t = {};
      let r = -1;
      while (++r < a.length) {
        let e = a[r];
        let n = h(e, "open").charCodeAt(0);
        let o = function (e) {
          let a;
          let t = e.anywhere;
          let r = e.type;
          let n = r + "Fence";
          let o = n + "Sequence";
          let i = r + "Value";
          let s = {
            tokenize: function (e, t, r) {
              let i = 0;
              return function (t) {
                if (t === a.charCodeAt(i)) {
                  e.enter(n);
                  e.enter(o);
                  return function t(n) {
                    if (i === a.length) {
                      e.exit(o);
                      if (charClassificationUtils.isSpaceLike(n)) {
                        e.enter("whitespace");
                        return function a(t) {
                          if (charClassificationUtils.isSpaceLike(t)) {
                            e.consume(t);
                            return a;
                          } else {
                            e.exit("whitespace");
                            return s(t);
                          }
                        }(n);
                      } else {
                        return s(n);
                      }
                    } else if (n === a.charCodeAt(i++)) {
                      e.consume(n);
                      return t;
                    } else {
                      return r(n);
                    }
                  }(t);
                } else {
                  return r(t);
                }
              };
              function s(a) {
                if (a === null || charClassificationUtils.isInvalidChar(a)) {
                  e.exit(n);
                  return t(a);
                } else {
                  return r(a);
                }
              }
            },
            partial: true
          };
          let l = 0;
          return {
            tokenize: function (c, u, d) {
              let p = this;
              return function (i) {
                let s = p.now();
                if (s.column === 1 && (s.line === 1 || t) && (a = h(e, "open"), l = 0, i === a.charCodeAt(l))) {
                  c.enter(r);
                  c.enter(n);
                  c.enter(o);
                  return function e(t) {
                    if (l === a.length) {
                      c.exit(o);
                      if (charClassificationUtils.isSpaceLike(t)) {
                        c.enter("whitespace");
                        return function e(a) {
                          if (charClassificationUtils.isSpaceLike(a)) {
                            c.consume(a);
                            return e;
                          } else {
                            c.exit("whitespace");
                            return f(a);
                          }
                        }(t);
                      } else {
                        return f(t);
                      }
                    } else if (t === a.charCodeAt(l++)) {
                      c.consume(t);
                      return e;
                    } else {
                      return d(t);
                    }
                  }(i);
                } else {
                  return d(i);
                }
              };
              function f(t) {
                if (charClassificationUtils.isInvalidChar(t)) {
                  c.exit(n);
                  c.enter("lineEnding");
                  c.consume(t);
                  c.exit("lineEnding");
                  a = h(e, "close");
                  l = 0;
                  return c.attempt(s, _, g);
                } else {
                  return d(t);
                }
              }
              function g(e) {
                if (e === null || charClassificationUtils.isInvalidChar(e)) {
                  return m(e);
                } else {
                  c.enter(i);
                  return function e(a) {
                    if (a === null || charClassificationUtils.isInvalidChar(a)) {
                      c.exit(i);
                      return m(a);
                    } else {
                      c.consume(a);
                      return e;
                    }
                  }(e);
                }
              }
              function m(e) {
                if (e === null) {
                  return d(e);
                } else {
                  c.enter("lineEnding");
                  c.consume(e);
                  c.exit("lineEnding");
                  return c.attempt(s, _, g);
                }
              }
              function _(e) {
                c.exit(r);
                return u(e);
              }
            },
            concrete: true
          };
        }(e);
        let i = t[n];
        if (Array.isArray(i)) {
          i.push(o);
        } else {
          t[n] = [o];
        }
      }
      return {
        flow: t
      };
    }(a));
    n.push(function (e) {
      let a = c(e);
      let t = {};
      let r = {};
      let n = -1;
      while (++n < a.length) {
        let e = a[n];
        t[e.type] = function (e) {
          return function (a) {
            this.enter({
              type: e.type,
              value: ""
            }, a);
            this.buffer();
          };
        }(e);
        r[e.type] = d;
        r[e.type + "Value"] = p;
      }
      return {
        enter: t,
        exit: r
      };
    }(a));
    o.push(function (e) {
      let a = [];
      let t = {};
      let r = c(e);
      let n = -1;
      while (++n < r.length) {
        let e = r[n];
        t[e.type] = function (e) {
          let a = f(e, "open");
          let t = f(e, "close");
          return function (e) {
            return a + (e.value ? "\n" + e.value : "") + "\n" + t;
          };
        }(e);
        let o = f(e, "open");
        a.push({
          atBreak: true,
          character: o.charAt(0),
          after: escapeStringRegexp.escapeRegExp(o.charAt(1))
        });
      }
      return {
        unsafe: a,
        handlers: t
      };
    }(a));
  }
  require.d(exports, {
    matterExtension: function () {
      return _;
    }
  });
}