// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 908126
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var a = function (e) {
    var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
    var n = 0;
    var r = {};
    var i = {
      manual: e.Prism && e.Prism.manual,
      disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
      util: {
        encode: function e(t) {
          if (t instanceof a) {
            return new a(t.type, e(t.content), t.alias);
          } else if (Array.isArray(t)) {
            return t.map(e);
          } else {
            return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          }
        },
        type: function (e) {
          return Object.prototype.toString.call(e).slice(8, -1);
        },
        objId: function (e) {
          if (!e.__id) {
            Object.defineProperty(e, "__id", {
              value: ++n
            });
          }
          return e.__id;
        },
        clone: function e(t, n) {
          var r;
          var a;
          n = n || {};
          switch (i.util.type(t)) {
            case "Object":
              if (n[a = i.util.objId(t)]) {
                return n[a];
              }
              r = {};
              n[a] = r;
              for (var o in t) {
                if (t.hasOwnProperty(o)) {
                  r[o] = e(t[o], n);
                }
              }
              return r;
            case "Array":
              if (n[a = i.util.objId(t)]) {
                return n[a];
              }
              r = [];
              n[a] = r;
              t.forEach(function (t, i) {
                r[i] = e(t, n);
              });
              return r;
            default:
              return t;
          }
        },
        getLanguage: function (e) {
          while (e) {
            var n = t.exec(e.className);
            if (n) {
              return n[1].toLowerCase();
            }
            e = e.parentElement;
          }
          return "none";
        },
        setLanguage: function (e, n) {
          e.className = e.className.replace(RegExp(t, "gi"), "");
          e.classList.add("language-" + n);
        },
        currentScript: function () {
          if (typeof document == "undefined") {
            return null;
          }
          if ("currentScript" in document) {
            return document.currentScript;
          }
          try {
            throw Error();
          } catch (r) {
            var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1];
            if (e) {
              var t = document.getElementsByTagName("script");
              for (var n in t) {
                if (t[n].src == e) {
                  return t[n];
                }
              }
            }
            return null;
          }
        },
        isActive: function (e, t, n) {
          var r = "no-" + t;
          for (; e;) {
            var i = e.classList;
            if (i.contains(t)) {
              return true;
            }
            if (i.contains(r)) {
              return false;
            }
            e = e.parentElement;
          }
          return !!n;
        }
      },
      languages: {
        plain: r,
        plaintext: r,
        text: r,
        txt: r,
        extend: function (e, t) {
          var n = i.util.clone(i.languages[e]);
          for (var r in t) {
            n[r] = t[r];
          }
          return n;
        },
        insertBefore: function (e, t, n, r) {
          var a = (r = r || i.languages)[e];
          var o = {};
          for (var s in a) {
            if (a.hasOwnProperty(s)) {
              if (s == t) {
                for (var l in n) {
                  if (n.hasOwnProperty(l)) {
                    o[l] = n[l];
                  }
                }
              }
              if (!n.hasOwnProperty(s)) {
                o[s] = a[s];
              }
            }
          }
          var u = r[e];
          r[e] = o;
          i.languages.DFS(i.languages, function (t, n) {
            if (n === u && t != e) {
              this[t] = o;
            }
          });
          return o;
        },
        DFS: function e(t, n, r, a) {
          a = a || {};
          var o = i.util.objId;
          for (var s in t) {
            if (t.hasOwnProperty(s)) {
              n.call(t, s, t[s], r || s);
              var l = t[s];
              var u = i.util.type(l);
              if (u !== "Object" || a[o(l)]) {
                if (u === "Array" && !a[o(l)]) {
                  a[o(l)] = true;
                  e(l, n, s, a);
                }
              } else {
                a[o(l)] = true;
                e(l, n, null, a);
              }
            }
          }
        }
      },
      plugins: {},
      highlightAll: function (e, t) {
        i.highlightAllUnder(document, e, t);
      },
      highlightAllUnder: function (e, t, n) {
        var r = {
          callback: n,
          container: e,
          selector: "code[class*=\"language-\"], [class*=\"language-\"] code, code[class*=\"lang-\"], [class*=\"lang-\"] code"
        };
        i.hooks.run("before-highlightall", r);
        r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector));
        i.hooks.run("before-all-elements-highlight", r);
        var a;
        var o = 0;
        while (a = r.elements[o++]) {
          i.highlightElement(a, t === true, r.callback);
        }
      },
      highlightElement: function (t, n, r) {
        var a = i.util.getLanguage(t);
        var o = i.languages[a];
        i.util.setLanguage(t, a);
        var s = t.parentElement;
        if (s && s.nodeName.toLowerCase() === "pre") {
          i.util.setLanguage(s, a);
        }
        var l = t.textContent;
        var u = {
          element: t,
          language: a,
          grammar: o,
          code: l
        };
        function c(e) {
          u.highlightedCode = e;
          i.hooks.run("before-insert", u);
          u.element.innerHTML = u.highlightedCode;
          i.hooks.run("after-highlight", u);
          i.hooks.run("complete", u);
          if (r) {
            r.call(u.element);
          }
        }
        i.hooks.run("before-sanity-check", u);
        if ((s = u.element.parentElement) && s.nodeName.toLowerCase() === "pre" && !s.hasAttribute("tabindex")) {
          s.setAttribute("tabindex", "0");
        }
        if (!u.code) {
          i.hooks.run("complete", u);
          if (r) {
            r.call(u.element);
          }
          return;
        }
        i.hooks.run("before-highlight", u);
        if (!u.grammar) {
          c(i.util.encode(u.code));
          return;
        }
        if (n && e.Worker) {
          var d = new Worker(i.filename);
          d.onmessage = function (e) {
            c(e.data);
          };
          d.postMessage(JSON.stringify({
            language: u.language,
            code: u.code,
            immediateClose: true
          }));
        } else {
          c(i.highlight(u.code, u.grammar, u.language));
        }
      },
      highlight: function (e, t, n) {
        var r = {
          code: e,
          grammar: t,
          language: n
        };
        i.hooks.run("before-tokenize", r);
        if (!r.grammar) {
          throw Error("The language \"" + r.language + "\" has no grammar.");
        }
        r.tokens = i.tokenize(r.code, r.grammar);
        i.hooks.run("after-tokenize", r);
        return a.stringify(i.util.encode(r.tokens), r.language);
      },
      tokenize: function (e, t) {
        var n = t.rest;
        if (n) {
          for (var r in n) {
            t[r] = n[r];
          }
          delete t.rest;
        }
        var u = new s();
        l(u, u.head, e);
        (function e(t, n, r, s, u, c) {
          for (var d in r) {
            if (r.hasOwnProperty(d) && r[d]) {
              var f = r[d];
              f = Array.isArray(f) ? f : [f];
              for (var h = 0; h < f.length; ++h) {
                if (c && c.cause == d + "," + h) {
                  return;
                }
                var p = f[h];
                var g = p.inside;
                var m = !!p.lookbehind;
                var v = !!p.greedy;
                var y = p.alias;
                if (v && !p.pattern.global) {
                  var w = p.pattern.toString().match(/[imsuy]*$/)[0];
                  p.pattern = RegExp(p.pattern.source, w + "g");
                }
                var b = p.pattern || p;
                var x = s.next;
                var S = u;
                for (; x !== n.tail && (!c || !(S >= c.reach)); S += x.value.length, x = x.next) {
                  var C;
                  var j = x.value;
                  if (n.length > t.length) {
                    return;
                  }
                  if (!(j instanceof a)) {
                    var O = 1;
                    if (v) {
                      if (!(C = o(b, S, t, m)) || C.index >= t.length) {
                        break;
                      }
                      var R = C.index;
                      var E = C.index + C[0].length;
                      var P = S;
                      for (P += x.value.length; R >= P;) {
                        P += (x = x.next).value.length;
                      }
                      P -= x.value.length;
                      S = P;
                      if (x.value instanceof a) {
                        continue;
                      }
                      for (var k = x; k !== n.tail && (P < E || typeof k.value == "string"); k = k.next) {
                        O++;
                        P += k.value.length;
                      }
                      O--;
                      j = t.slice(S, P);
                      C.index -= S;
                    } else if (!(C = o(b, 0, j, m))) {
                      continue;
                    }
                    var R = C.index;
                    var D = C[0];
                    var M = j.slice(0, R);
                    var A = j.slice(R + D.length);
                    var _ = S + j.length;
                    if (c && _ > c.reach) {
                      c.reach = _;
                    }
                    var T = x.prev;
                    if (M) {
                      T = l(n, T, M);
                      S += M.length;
                    }
                    (function (e, t, n) {
                      var r = t.next;
                      var i = 0;
                      for (; i < n && r !== e.tail; i++) {
                        r = r.next;
                      }
                      t.next = r;
                      r.prev = t;
                      e.length -= i;
                    })(n, T, O);
                    x = l(n, T, new a(d, g ? i.tokenize(D, g) : D, y, D));
                    if (A) {
                      l(n, x, A);
                    }
                    if (O > 1) {
                      var N = {
                        cause: d + "," + h,
                        reach: _
                      };
                      e(t, n, r, x.prev, S, N);
                      if (c && N.reach > c.reach) {
                        c.reach = N.reach;
                      }
                    }
                  }
                }
              }
            }
          }
        })(e, u, t, u.head, 0);
        return function (e) {
          var t = [];
          var n = e.head.next;
          while (n !== e.tail) {
            t.push(n.value);
            n = n.next;
          }
          return t;
        }(u);
      },
      hooks: {
        all: {},
        add: function (e, t) {
          var n = i.hooks.all;
          n[e] = n[e] || [];
          n[e].push(t);
        },
        run: function (e, t) {
          var n = i.hooks.all[e];
          if (n && n.length) {
            var r;
            var a = 0;
            while (r = n[a++]) {
              r(t);
            }
          }
        }
      },
      Token: a
    };
    function a(e, t, n, r) {
      this.type = e;
      this.content = t;
      this.alias = n;
      this.length = (r || "").length | 0;
    }
    function o(e, t, n, r) {
      e.lastIndex = t;
      var i = e.exec(n);
      if (i && r && i[1]) {
        var a = i[1].length;
        i.index += a;
        i[0] = i[0].slice(a);
      }
      return i;
    }
    function s() {
      var e = {
        value: null,
        prev: null,
        next: null
      };
      var t = {
        value: null,
        prev: e,
        next: null
      };
      e.next = t;
      this.head = e;
      this.tail = t;
      this.length = 0;
    }
    function l(e, t, n) {
      var r = t.next;
      var i = {
        value: n,
        prev: t,
        next: r
      };
      t.next = i;
      r.prev = i;
      e.length++;
      return i;
    }
    e.Prism = i;
    a.stringify = function e(t, n) {
      if (typeof t == "string") {
        return t;
      }
      if (Array.isArray(t)) {
        var r = "";
        t.forEach(function (t) {
          r += e(t, n);
        });
        return r;
      }
      var a = {
        type: t.type,
        content: e(t.content, n),
        tag: "span",
        classes: ["token", t.type],
        attributes: {},
        language: n
      };
      var o = t.alias;
      if (o) {
        if (Array.isArray(o)) {
          Array.prototype.push.apply(a.classes, o);
        } else {
          a.classes.push(o);
        }
      }
      i.hooks.run("wrap", a);
      var s = "";
      for (var l in a.attributes) {
        s += " " + l + "=\"" + (a.attributes[l] || "").replace(/"/g, "&quot;") + "\"";
      }
      return "<" + a.tag + " class=\"" + a.classes.join(" ") + "\"" + s + ">" + a.content + "</" + a.tag + ">";
    };
    if (!e.document) {
      if (e.addEventListener) {
        if (!i.disableWorkerMessageHandler) {
          e.addEventListener("message", function (t) {
            var n = JSON.parse(t.data);
            var r = n.language;
            var a = n.code;
            var o = n.immediateClose;
            e.postMessage(i.highlight(a, i.languages[r], r));
            if (o) {
              e.close();
            }
          }, false);
        }
      }
      return i;
    }
    var u = i.util.currentScript();
    function c() {
      if (!i.manual) {
        i.highlightAll();
      }
    }
    if (u) {
      i.filename = u.src;
      if (u.hasAttribute("data-manual")) {
        i.manual = true;
      }
    }
    if (!i.manual) {
      var d = document.readyState;
      if (d === "loading" || d === "interactive" && u && u.defer) {
        document.addEventListener("DOMContentLoaded", c);
      } else if (window.requestAnimationFrame) {
        window.requestAnimationFrame(c);
      } else {
        window.setTimeout(c, 16);
      }
    }
    return i;
  }(typeof window != "undefined" ? window : typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope ? self : {});
  module.exports &&= a;
  if (require.g !== undefined) {
    require.g.Prism = a;
  }
  a.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: true
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: true
    },
    doctype: {
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: true,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: true,
          greedy: true,
          inside: null
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: true
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: true
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: true,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [{
              pattern: /^=/,
              alias: "attr-equals"
            }, {
              pattern: /^(\s*)["']|["']$/,
              lookbehind: true
            }]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [{
      pattern: /&[\da-z]{1,8};/i,
      alias: "named-entity"
    }, /&#x?[\da-f]{1,8};/i]
  };
  a.languages.markup.tag.inside["attr-value"].inside.entity = a.languages.markup.entity;
  a.languages.markup.doctype.inside["internal-subset"].inside = a.languages.markup;
  a.hooks.add("wrap", function (e) {
    if (e.type === "entity") {
      e.attributes.title = e.content.replace(/&amp;/, "&");
    }
  });
  Object.defineProperty(a.languages.markup.tag, "addInlined", {
    value: function (e, t) {
      var n = {
        ["language-" + t]: {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: true,
          inside: a.languages[t]
        },
        cdata: /^<!\[CDATA\[|\]\]>$/i
      };
      var r = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: n
        }
      };
      r["language-" + t] = {
        pattern: /[\s\S]+/,
        inside: a.languages[t]
      };
      var i = {};
      i[e] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
          return e;
        }), "i"),
        lookbehind: true,
        greedy: true,
        inside: r
      };
      a.languages.insertBefore("markup", "cdata", i);
    }
  });
  Object.defineProperty(a.languages.markup.tag, "addAttribute", {
    value: function (e, t) {
      a.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
        lookbehind: true,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: true,
                alias: [t, "language-" + t],
                inside: a.languages[t]
              },
              punctuation: [{
                pattern: /^=/,
                alias: "attr-equals"
              }, /"|'/]
            }
          }
        }
      });
    }
  });
  a.languages.html = a.languages.markup;
  a.languages.mathml = a.languages.markup;
  a.languages.svg = a.languages.markup;
  a.languages.xml = a.languages.extend("markup", {});
  a.languages.ssml = a.languages.xml;
  a.languages.atom = a.languages.xml;
  a.languages.rss = a.languages.xml;
  r = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  a.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + r.source + ")*?" + /(?:;|(?=\s*\{))/.source),
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: true,
          alias: "selector"
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: true
        }
      }
    },
    url: {
      pattern: RegExp("\\burl\\((?:" + r.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: true,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: {
          pattern: RegExp("^" + r.source + "$"),
          alias: "url"
        }
      }
    },
    selector: {
      pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + r.source + ")*(?=\\s*\\{)"),
      lookbehind: true
    },
    string: {
      pattern: r,
      greedy: true
    },
    property: {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: true
    },
    important: /!important\b/i,
    function: {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: true
    },
    punctuation: /[(){};:,]/
  };
  a.languages.css.atrule.inside.rest = a.languages.css;
  if (i = a.languages.markup) {
    i.tag.addInlined("style", "css");
    i.tag.addAttribute("style", "css");
  }
  a.languages.clike = {
    comment: [{
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: true,
      greedy: true
    }, {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: true,
      greedy: true
    }],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: true,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  };
  a.languages.javascript = a.languages.extend("clike", {
    "class-name": [a.languages.clike["class-name"], {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: true
    }],
    keyword: [{
      pattern: /((?:^|\})\s*)catch\b/,
      lookbehind: true
    }, {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: true
    }],
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source) + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source),
      lookbehind: true
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  });
  a.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
  a.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: true,
          alias: "language-regex",
          inside: a.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [{
      pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: true,
      inside: a.languages.javascript
    }, {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: true,
      inside: a.languages.javascript
    }, {
      pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: true,
      inside: a.languages.javascript
    }, {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: true,
      inside: a.languages.javascript
    }],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  });
  a.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: true,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: true,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: true,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: a.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: true,
      greedy: true,
      alias: "property"
    }
  });
  a.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: true,
      alias: "property"
    }
  });
  if (a.languages.markup) {
    a.languages.markup.tag.addInlined("script", "javascript");
    a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
  }
  a.languages.js = a.languages.javascript;
  (function () {
    if (a !== undefined && typeof document != "undefined") {
      Element.prototype.matches ||= Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
      var e = {
        js: "javascript",
        py: "python",
        rb: "ruby",
        ps1: "powershell",
        psm1: "powershell",
        sh: "bash",
        bat: "batch",
        h: "c",
        tex: "latex"
      };
      var t = "data-src-status";
      var n = "loading";
      var r = "loaded";
      var i = "pre[data-src]:not([" + t + "=\"" + r + "\"]):not([" + t + "=\"" + n + "\"])";
      a.hooks.add("before-highlightall", function (e) {
        e.selector += ", " + i;
      });
      a.hooks.add("before-sanity-check", function (o) {
        var s = o.element;
        if (s.matches(i)) {
          o.code = "";
          s.setAttribute(t, n);
          var l;
          var u;
          var c;
          var d = s.appendChild(document.createElement("CODE"));
          d.textContent = "Loading…";
          var f = s.getAttribute("data-src");
          var h = o.language;
          if (h === "none") {
            var p = (/\.(\w+)$/.exec(f) || [, "none"])[1];
            h = e[p] || p;
          }
          a.util.setLanguage(d, h);
          a.util.setLanguage(s, h);
          var g = a.plugins.autoloader;
          if (g) {
            g.loadLanguages(h);
          }
          l = function (e) {
            s.setAttribute(t, r);
            var n = function (e) {
              var t = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e || "");
              if (t) {
                var n = Number(t[1]);
                var r = t[2];
                var i = t[3];
                if (r) {
                  if (i) {
                    return [n, Number(i)];
                  } else {
                    return [n, undefined];
                  }
                } else {
                  return [n, n];
                }
              }
            }(s.getAttribute("data-range"));
            if (n) {
              var i = e.split(/\r\n?|\n/g);
              var o = n[0];
              var l = n[1] == null ? i.length : n[1];
              if (o < 0) {
                o += i.length;
              }
              o = Math.max(0, Math.min(o - 1, i.length));
              if (l < 0) {
                l += i.length;
              }
              l = Math.max(0, Math.min(l, i.length));
              e = i.slice(o, l).join("\n");
              if (!s.hasAttribute("data-start")) {
                s.setAttribute("data-start", String(o + 1));
              }
            }
            d.textContent = e;
            a.highlightElement(d);
          };
          u = function (e) {
            s.setAttribute(t, "failed");
            d.textContent = e;
          };
          (c = new XMLHttpRequest()).open("GET", f, true);
          c.onreadystatechange = function () {
            if (c.readyState == 4) {
              if (c.status < 400 && c.responseText) {
                l(c.responseText);
              } else if (c.status >= 400) {
                u("✖ Error " + c.status + " while fetching file: " + c.statusText);
              } else {
                u("✖ Error: File does not exist or is empty");
              }
            }
          };
          c.send(null);
        }
      });
      a.plugins.fileHighlight = {
        highlight: function (e) {
          var t;
          var n = (e || document).querySelectorAll(i);
          var r = 0;
          while (t = n[r++]) {
            a.highlightElement(t);
          }
        }
      };
      var o = false;
      a.fileHighlight = function () {
        o ||= true;
        a.plugins.fileHighlight.highlight.apply(this, arguments);
      };
    }
  })();
}