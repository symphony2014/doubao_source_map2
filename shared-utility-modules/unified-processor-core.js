// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'baseProcessor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 302429
         */
module.exports = function (module, exports, require) {
  function n(t) {
    if (t) {
      throw t;
    }
  }
  var objectDeepExtend = require("object-deep-extend") /*id: 197211*/;
  var webpackEmptyModuleStub = require("webpack-empty-module-stub") /*id: 927617*/;
  function o(t) {
    if (typeof t != "object" || t === null) {
      return false;
    }
    let e = Object.getPrototypeOf(t);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
  }
  var virtualFile = require("virtual-file") /*id: 579776*/;
  let l = function (t) {
    let e = this.constructor.prototype;
    let i = e[t];
    let n = function () {
      return i.apply(n, arguments);
    };
    Object.setPrototypeOf(n, e);
    return n;
  };
  let u = {}.hasOwnProperty;
  class h extends l {
    constructor() {
      super("copy");
      this.Compiler = undefined;
      this.Parser = undefined;
      this.attachers = [];
      this.compiler = undefined;
      this.freezeIndex = -1;
      this.frozen = undefined;
      this.namespace = {};
      this.parser = undefined;
      this.transformers = function () {
        let t = [];
        let e = {
          run: function (...e) {
            let i = -1;
            let n = e.pop();
            if (typeof n != "function") {
              throw TypeError("Expected function as last argument, not " + n);
            }
            (function r(s, ...o) {
              let a = t[++i];
              let l = -1;
              if (s) {
                n(s);
                return;
              }
              while (++l < e.length) {
                if (o[l] === null || o[l] === undefined) {
                  o[l] = e[l];
                }
              }
              e = o;
              if (a) {
                (function (t, e) {
                  let i;
                  return function (...e) {
                    let s;
                    let o = t.length > e.length;
                    if (o) {
                      e.push(n);
                    }
                    try {
                      s = t.apply(this, e);
                    } catch (t) {
                      if (o && i) {
                        throw t;
                      }
                      return n(t);
                    }
                    if (!o) {
                      if (s && s.then && typeof s.then == "function") {
                        s.then(r, n);
                      } else if (s instanceof Error) {
                        n(s);
                      } else {
                        r(s);
                      }
                    }
                  };
                  function n(t, ...r) {
                    if (!i) {
                      i = true;
                      e(t, ...r);
                    }
                  }
                  function r(t) {
                    n(null, t);
                  }
                })(a, r)(...o);
              } else {
                n(null, ...o);
              }
            })(null, ...e);
          },
          use: function (i) {
            if (typeof i != "function") {
              throw TypeError("Expected `middelware` to be a function, not " + i);
            }
            t.push(i);
            return e;
          }
        };
        return e;
      }();
    }
    copy() {
      let t = new h();
      let e = -1;
      while (++e < this.attachers.length) {
        let i = this.attachers[e];
        t.use(...i);
      }
      t.data(objectDeepExtend(true, {}, this.namespace));
      return t;
    }
    data(t, e) {
      if (typeof t == "string") {
        if (arguments.length == 2) {
          f("data", this.frozen);
          this.namespace[t] = e;
          return this;
        } else {
          return u.call(this.namespace, t) && this.namespace[t] || undefined;
        }
      } else if (t) {
        f("data", this.frozen);
        this.namespace = t;
        return this;
      } else {
        return this.namespace;
      }
    }
    freeze() {
      if (this.frozen) {
        return this;
      }
      while (++this.freezeIndex < this.attachers.length) {
        let [t, ...e] = this.attachers[this.freezeIndex];
        if (e[0] === false) {
          continue;
        }
        if (e[0] === true) {
          e[0] = undefined;
        }
        let i = t.call(this, ...e);
        if (typeof i == "function") {
          this.transformers.use(i);
        }
      }
      this.frozen = true;
      this.freezeIndex = Number.POSITIVE_INFINITY;
      return this;
    }
    parse(t) {
      this.freeze();
      let e = v(t);
      let i = this.parser || this.Parser;
      d("parse", i);
      return i(String(e), e);
    }
    process(t, e) {
      let i = this;
      this.freeze();
      d("process", this.parser || this.Parser);
      p("process", this.compiler || this.Compiler);
      if (e) {
        return n(undefined, e);
      } else {
        return new Promise(n);
      }
      function n(n, r) {
        let o = v(t);
        let a = i.parse(o);
        function l(t, i) {
          if (t || !i) {
            r(t);
          } else if (n) {
            n(i);
          } else {
            webpackEmptyModuleStub.okStub(e, "`done` is defined if `resolve` is not");
            e(undefined, i);
          }
        }
        i.run(a, o, function (t, e, n) {
          var r;
          var s;
          if (t || !e || !n) {
            return l(t);
          }
          let o = i.stringify(e, n);
          if (typeof (r = o) == "string" || (s = r) && typeof s == "object" && "byteLength" in s && "byteOffset" in s) {
            n.value = o;
          } else {
            n.result = o;
          }
          l(t, n);
        });
      }
    }
    processSync(t) {
      let e;
      let i = false;
      this.freeze();
      d("processSync", this.parser || this.Parser);
      p("processSync", this.compiler || this.Compiler);
      this.process(t, function (t, r) {
        i = true;
        n(t);
        e = r;
      });
      g("processSync", "process", i);
      webpackEmptyModuleStub.okStub(e, "we either bailed on an error or have a tree");
      return e;
    }
    run(t, e, i) {
      m(t);
      this.freeze();
      let n = this.transformers;
      if (!i && typeof e == "function") {
        i = e;
        e = undefined;
      }
      if (i) {
        return r(undefined, i);
      } else {
        return new Promise(r);
      }
      function r(r, o) {
        webpackEmptyModuleStub.okStub(typeof e != "function", "`file` can’t be a `done` anymore, we checked");
        let a = v(e);
        n.run(t, a, function (e, n, a) {
          let l = n || t;
          if (e) {
            o(e);
          } else if (r) {
            r(l);
          } else {
            webpackEmptyModuleStub.okStub(i, "`done` is defined if `resolve` is not");
            i(undefined, l, a);
          }
        });
      }
    }
    runSync(t, e) {
      let i;
      let r = false;
      this.run(t, e, function (t, e) {
        n(t);
        i = e;
        r = true;
      });
      g("runSync", "run", r);
      webpackEmptyModuleStub.okStub(i, "we either bailed on an error or have a tree");
      return i;
    }
    stringify(t, e) {
      this.freeze();
      let i = v(e);
      let n = this.compiler || this.Compiler;
      p("stringify", n);
      m(t);
      return n(t, i);
    }
    use(t, ...e) {
      let i = this.attachers;
      let n = this.namespace;
      f("use", this.frozen);
      if (t == null) ;else if (typeof t == "function") {
        l(t, e);
      } else if (typeof t == "object") {
        if (Array.isArray(t)) {
          a(t);
        } else {
          s(t);
        }
      } else {
        throw TypeError("Expected usable value, not `" + t + "`");
      }
      return this;
      function s(t) {
        if (!("plugins" in t) && !("settings" in t)) {
          throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
        }
        a(t.plugins);
        if (t.settings) {
          n.settings = objectDeepExtend(true, n.settings, t.settings);
        }
      }
      function a(t) {
        let e = -1;
        if (t == null) ;else if (Array.isArray(t)) {
          while (++e < t.length) {
            (function (t) {
              if (typeof t == "function") {
                l(t, []);
              } else if (typeof t == "object") {
                if (Array.isArray(t)) {
                  let [e, ...i] = t;
                  l(e, i);
                } else {
                  s(t);
                }
              } else {
                throw TypeError("Expected usable value, not `" + t + "`");
              }
            })(t[e]);
          }
        } else {
          throw TypeError("Expected a list of plugins, not `" + t + "`");
        }
      }
      function l(t, e) {
        let n = -1;
        let s = -1;
        while (++n < i.length) {
          if (i[n][0] === t) {
            s = n;
            break;
          }
        }
        if (s === -1) {
          i.push([t, ...e]);
        } else if (e.length > 0) {
          let [n, ...a] = e;
          let l = i[s][1];
          if (o(l) && o(n)) {
            n = objectDeepExtend(true, l, n);
          }
          i[s] = [t, n, ...a];
        }
      }
    }
  }
  let c = new h().freeze();
  function d(t, e) {
    if (typeof e != "function") {
      throw TypeError("Cannot `" + t + "` without `parser`");
    }
  }
  function p(t, e) {
    if (typeof e != "function") {
      throw TypeError("Cannot `" + t + "` without `compiler`");
    }
  }
  function f(t, e) {
    if (e) {
      throw Error("Cannot call `" + t + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
    }
  }
  function m(t) {
    if (!o(t) || typeof t.type != "string") {
      throw TypeError("Expected node, got `" + t + "`");
    }
  }
  function g(t, e, i) {
    if (!i) {
      throw Error("`" + t + "` finished async. Use `" + e + "` instead");
    }
  }
  function v(t) {
    var e;
    if ((e = t) && typeof e == "object" && "message" in e && "messages" in e) {
      return t;
    } else {
      return new virtualFile.VFile(t);
    }
  }
  require.d(exports, {
    baseProcessor: function () {
      return c;
    }
  });
}