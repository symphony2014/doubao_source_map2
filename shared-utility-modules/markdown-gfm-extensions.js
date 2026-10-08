// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'initGfmExtensions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 81337.852c574d.js
         * chunkId: 81337
         * moduleId: 775055
         */
module.exports = function (module, exports, require) {
  function r(e, a) {
    let t = String(e);
    if (typeof a != "string") {
      throw TypeError("Expected character");
    }
    let r = 0;
    let n = t.indexOf(a);
    while (n !== -1) {
      r++;
      n = t.indexOf(a, n + a.length);
    }
    return r;
  }
  var webpackEmptyModuleStub = require("webpack-empty-module-stub") /*id: 927617*/;
  var charClassificationUtils = require("char-classification-utils") /*id: 140430*/;
  var eventTextReplaceUtil = require("event-text-replace-util") /*id: 92199*/;
  let s = "phrasing";
  let l = ["autolink", "link", "image", "label"];
  function c(e) {
    this.enter({
      type: "link",
      title: null,
      url: "",
      children: []
    }, e);
  }
  function u(e) {
    this.config.enter.autolinkProtocol.call(this, e);
  }
  function d(e) {
    this.config.exit.autolinkProtocol.call(this, e);
  }
  function p(e) {
    this.config.exit.data.call(this, e);
    let a = this.stack[this.stack.length - 1];
    webpackEmptyModuleStub.okStub(a.type === "link");
    a.url = "http://" + this.sliceSerialize(e);
  }
  function f(e) {
    this.config.exit.autolinkEmail.call(this, e);
  }
  function g(e) {
    this.exit(e);
  }
  function y(e) {
    eventTextReplaceUtil.replaceTextContent(e, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, h], [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, m]], {
      ignore: ["link", "linkReference"]
    });
  }
  function h(e, a, t, n, o) {
    let i = "";
    if (!_(o) || (/^w/i.test(a) && (t = a + t, a = "", i = "http://"), !function (e) {
      let a = e.split(".");
      return !(a.length < 2) && (!a[a.length - 1] || !/_/.test(a[a.length - 1]) && !!/[a-zA-Z\d]/.test(a[a.length - 1])) && (!a[a.length - 2] || !/_/.test(a[a.length - 2]) && !!/[a-zA-Z\d]/.test(a[a.length - 2]));
    }(t))) {
      return false;
    }
    let s = function (e) {
      let a = /[!"&'),.:;<>?\]}]+$/.exec(e);
      if (!a) {
        return [e, undefined];
      }
      e = e.slice(0, a.index);
      let t = a[0];
      let n = t.indexOf(")");
      let o = r(e, "(");
      let i = r(e, ")");
      while (n !== -1 && o > i) {
        e += t.slice(0, n + 1);
        n = (t = t.slice(n + 1)).indexOf(")");
        i++;
      }
      return [e, t];
    }(t + n);
    if (!s[0]) {
      return false;
    }
    let l = {
      type: "link",
      title: null,
      url: i + a + s[0],
      children: [{
        type: "text",
        value: a + s[0]
      }]
    };
    if (s[1]) {
      return [l, {
        type: "text",
        value: s[1]
      }];
    } else {
      return l;
    }
  }
  function m(e, a, t, r) {
    return !!_(r, true) && !/[-\d_]$/.test(t) && {
      type: "link",
      title: null,
      url: "mailto:" + a + "@" + t,
      children: [{
        type: "text",
        value: a + "@" + t
      }]
    };
  }
  function _(e, a) {
    let t = e.input.charCodeAt(e.index - 1);
    return (e.index === 0 || charClassificationUtils.isWhitespace(t) || charClassificationUtils.isPunctuation(t)) && (!a || t !== 47);
  }
  var gfmFootnoteParserCompiler = require("gfm-footnote-parser-compiler") /*id: 583857*/;
  var markdownStrikethroughExt = require("markdown-strikethrough-ext") /*id: 604648*/;
  var markdownTableSerializer = require("markdown-table-serializer") /*id: 657939*/;
  var markdownTaskListSerializer = require("markdown-task-list-serializer") /*id: 112265*/;
  var mergeOrderedConfigs = require("merge-ordered-configs") /*id: 80316*/;
  let E = {
    tokenize: function (e, a, t) {
      let r = 0;
      return function a(o) {
        if ((o === 87 || o === 119) && r < 3) {
          r++;
          e.consume(o);
          return a;
        } else if (o === 46 && r === 3) {
          e.consume(o);
          return n;
        } else {
          return t(o);
        }
      };
      function n(e) {
        if (e === null) {
          return t(e);
        } else {
          return a(e);
        }
      }
    },
    partial: true
  };
  let D = {
    tokenize: function (e, a, t) {
      let r;
      let n;
      let i;
      return s;
      function s(a) {
        if (a === 46 || a === 95) {
          return e.check(A, c, l)(a);
        } else if (a === null || charClassificationUtils.isWhitespaceOrNeg(a) || charClassificationUtils.isWhitespace(a) || a !== 45 && charClassificationUtils.isPunctuation(a)) {
          return c(a);
        } else {
          i = true;
          e.consume(a);
          return s;
        }
      }
      function l(a) {
        if (a === 95) {
          r = true;
        } else {
          n = r;
          r = undefined;
        }
        e.consume(a);
        return s;
      }
      function c(e) {
        if (n || r || !i) {
          return t(e);
        } else {
          return a(e);
        }
      }
    },
    partial: true
  };
  let x = {
    tokenize: function (e, a) {
      let t = 0;
      let r = 0;
      return n;
      function n(s) {
        if (s === 40) {
          t++;
          e.consume(s);
          return n;
        } else if (s === 41 && r < t) {
          return i(s);
        } else if (s === 33 || s === 34 || s === 38 || s === 39 || s === 41 || s === 42 || s === 44 || s === 46 || s === 58 || s === 59 || s === 60 || s === 63 || s === 93 || s === 95 || s === 126) {
          return e.check(A, a, i)(s);
        } else if (s === null || charClassificationUtils.isWhitespaceOrNeg(s) || charClassificationUtils.isWhitespace(s)) {
          return a(s);
        } else {
          e.consume(s);
          return n;
        }
      }
      function i(a) {
        if (a === 41) {
          r++;
        }
        e.consume(a);
        return n;
      }
    },
    partial: true
  };
  let A = {
    tokenize: function (e, a, t) {
      return r;
      function r(s) {
        if (s === 33 || s === 34 || s === 39 || s === 41 || s === 42 || s === 44 || s === 46 || s === 58 || s === 59 || s === 63 || s === 95 || s === 126) {
          e.consume(s);
          return r;
        } else if (s === 38) {
          e.consume(s);
          return i;
        } else if (s === 93) {
          e.consume(s);
          return n;
        } else if (s === 60 || s === null || charClassificationUtils.isWhitespaceOrNeg(s) || charClassificationUtils.isWhitespace(s)) {
          return a(s);
        } else {
          return t(s);
        }
      }
      function n(e) {
        if (e === null || e === 40 || e === 91 || charClassificationUtils.isWhitespaceOrNeg(e) || charClassificationUtils.isWhitespace(e)) {
          return a(e);
        } else {
          return r(e);
        }
      }
      function i(a) {
        if (charClassificationUtils.isLetter(a)) {
          return function a(n) {
            if (n === 59) {
              e.consume(n);
              return r;
            } else if (charClassificationUtils.isLetter(n)) {
              e.consume(n);
              return a;
            } else {
              return t(n);
            }
          }(a);
        } else {
          return t(a);
        }
      }
    },
    partial: true
  };
  let C = {
    tokenize: function (e, a, t) {
      return function (a) {
        e.consume(a);
        return r;
      };
      function r(e) {
        if (charClassificationUtils.isAlphaNumeric(e)) {
          return t(e);
        } else {
          return a(e);
        }
      }
    },
    partial: true
  };
  let N = {
    name: "wwwAutolink",
    tokenize: function (e, a, t) {
      let r = this;
      return function (a) {
        if (a !== 87 && a !== 119 || !j.call(r, r.previous) || R(r.events)) {
          return t(a);
        } else {
          e.enter("literalAutolink");
          e.enter("literalAutolinkWww");
          return e.check(E, e.attempt(D, e.attempt(x, n), t), t)(a);
        }
      };
      function n(t) {
        e.exit("literalAutolinkWww");
        e.exit("literalAutolink");
        return a(t);
      }
    },
    previous: j
  };
  let F = {
    name: "protocolAutolink",
    tokenize: function (e, a, t) {
      let r = this;
      let n = "";
      let i = false;
      return function (a) {
        if ((a === 72 || a === 104) && T.call(r, r.previous) && !R(r.events)) {
          e.enter("literalAutolink");
          e.enter("literalAutolinkHttp");
          n += String.fromCodePoint(a);
          e.consume(a);
          return s;
        } else {
          return t(a);
        }
      };
      function s(a) {
        if (charClassificationUtils.isLetter(a) && n.length < 5) {
          n += String.fromCodePoint(a);
          e.consume(a);
          return s;
        }
        if (a === 58) {
          let t = n.toLowerCase();
          if (t === "http" || t === "https") {
            e.consume(a);
            return l;
          }
        }
        return t(a);
      }
      function l(a) {
        if (a === 47) {
          e.consume(a);
          if (i) {
            return c;
          } else {
            i = true;
            return l;
          }
        } else {
          return t(a);
        }
      }
      function c(a) {
        if (a === null || charClassificationUtils.isControlChar(a) || charClassificationUtils.isWhitespaceOrNeg(a) || charClassificationUtils.isWhitespace(a) || charClassificationUtils.isPunctuation(a)) {
          return t(a);
        } else {
          return e.attempt(D, e.attempt(x, u), t)(a);
        }
      }
      function u(t) {
        e.exit("literalAutolinkHttp");
        e.exit("literalAutolink");
        return a(t);
      }
    },
    previous: T
  };
  let S = {
    name: "emailAutolink",
    tokenize: function (e, a, t) {
      let r;
      let n;
      let i = this;
      return function (a) {
        if (!I(a) || !B.call(i, i.previous) || R(i.events)) {
          return t(a);
        } else {
          e.enter("literalAutolink");
          e.enter("literalAutolinkEmail");
          return function a(r) {
            if (I(r)) {
              e.consume(r);
              return a;
            } else if (r === 64) {
              e.consume(r);
              return s;
            } else {
              return t(r);
            }
          }(a);
        }
      };
      function s(a) {
        if (a === 46) {
          return e.check(C, c, l)(a);
        } else if (a === 45 || a === 95 || charClassificationUtils.isAlphaNumeric(a)) {
          n = true;
          e.consume(a);
          return s;
        } else {
          return c(a);
        }
      }
      function l(a) {
        e.consume(a);
        r = true;
        return s;
      }
      function c(s) {
        if (n && r && charClassificationUtils.isLetter(i.previous)) {
          e.exit("literalAutolinkEmail");
          e.exit("literalAutolink");
          return a(s);
        } else {
          return t(s);
        }
      }
    },
    previous: B
  };
  let O = {};
  let M = 48;
  while (M < 123) {
    O[M] = S;
    if (++M == 58) {
      M = 65;
    } else if (M === 91) {
      M = 97;
    }
  }
  function j(e) {
    return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || charClassificationUtils.isWhitespaceOrNeg(e);
  }
  function T(e) {
    return !charClassificationUtils.isLetter(e);
  }
  function B(e) {
    return e !== 47 && !I(e);
  }
  function I(e) {
    return e === 43 || e === 45 || e === 46 || e === 95 || charClassificationUtils.isAlphaNumeric(e);
  }
  function R(e) {
    let a = e.length;
    let t = false;
    while (a--) {
      let r = e[a][1];
      if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
        t = true;
        break;
      }
      if (r._gfmAutolinkLiteralWalkedInto) {
        t = false;
        break;
      }
    }
    if (e.length > 0 && !t) {
      e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = true;
    }
    return t;
  }
  O[43] = S;
  O[45] = S;
  O[46] = S;
  O[95] = S;
  O[72] = [S, F];
  O[104] = [S, F];
  O[87] = [S, N];
  O[119] = [S, N];
  var gfmFootnoteSyntaxExtension = require("gfm-footnote-syntax-extension") /*id: 546103*/;
  var markdownStrikethroughSyntax = require("markdown-strikethrough-syntax") /*id: 999380*/;
  var markdownTableExtension = require("markdown-table-extension") /*id: 598673*/;
  var tasklistCheckTokenizer = require("tasklist-check-tokenizer") /*id: 563371*/;
  let $ = {};
  function H(e) {
    let a = e || $;
    let t = this.data();
    let r = t.micromarkExtensions ||= [];
    let n = t.fromMarkdownExtensions ||= [];
    let o = t.toMarkdownExtensions ||= [];
    r.push(mergeOrderedConfigs.mergeOrderedConfigs([{
      text: O
    }, gfmFootnoteSyntaxExtension.gfmFootnoteExtension(), markdownStrikethroughSyntax.strikethroughSyntax(a), markdownTableExtension.markdownTable(), tasklistCheckTokenizer.tasklistTokenizer()]));
    n.push([{
      transforms: [y],
      enter: {
        literalAutolink: c,
        literalAutolinkEmail: u,
        literalAutolinkHttp: u,
        literalAutolinkWww: u
      },
      exit: {
        literalAutolink: g,
        literalAutolinkEmail: f,
        literalAutolinkHttp: d,
        literalAutolinkWww: p
      }
    }, gfmFootnoteParserCompiler.footnoteParser(), markdownStrikethroughExt.strikeSyntax(), markdownTableSerializer.getTableHandlers(), markdownTaskListSerializer.taskListExits()]);
    o.push({
      extensions: [{
        unsafe: [{
          character: "@",
          before: "[+\\-.\\w]",
          after: "[\\-.\\w]",
          inConstruct: s,
          notInConstruct: l
        }, {
          character: ".",
          before: "[Ww]",
          after: "[\\-.\\w]",
          inConstruct: s,
          notInConstruct: l
        }, {
          character: ":",
          before: "[ps]",
          after: "\\/",
          inConstruct: s,
          notInConstruct: l
        }]
      }, gfmFootnoteParserCompiler.footnoteCompiler(a), markdownStrikethroughExt.strikeSerialize(), markdownTableSerializer.getTableSerializer(a), markdownTaskListSerializer.taskListExtension()]
    });
  }
  require.d(exports, {
    initGfmExtensions: function () {
      return H;
    }
  });
}