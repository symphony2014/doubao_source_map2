// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'V' to 'parseMarkdown'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 849340
         */
module.exports = function (module, exports, require) {
  var n;
  var i = {};
  var textContentExtractor = require("text-content-extractor") /*id: 413007*/;
  var arraySpliceUtils = require("array-splice-utils") /*id: 511403*/;
  class a {
    constructor(e) {
      this.left = e ? [...e] : [];
      this.right = [];
    }
    get(e) {
      if (e < 0 || e >= this.left.length + this.right.length) {
        throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
      }
      if (e < this.left.length) {
        return this.left[e];
      } else {
        return this.right[this.right.length - e + this.left.length - 1];
      }
    }
    get length() {
      return this.left.length + this.right.length;
    }
    shift() {
      this.setCursor(0);
      return this.right.pop();
    }
    slice(e, t) {
      let r = t == null ? Number.POSITIVE_INFINITY : t;
      if (r < this.left.length) {
        return this.left.slice(e, r);
      } else if (e > this.left.length) {
        return this.right.slice(this.right.length - r + this.left.length, this.right.length - e + this.left.length).reverse();
      } else {
        return this.left.slice(e).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
      }
    }
    splice(e, t, r) {
      this.setCursor(Math.trunc(e));
      let n = this.right.splice(this.right.length - (t || 0), Number.POSITIVE_INFINITY);
      if (r) {
        c(this.left, r);
      }
      return n.reverse();
    }
    pop() {
      this.setCursor(Number.POSITIVE_INFINITY);
      return this.left.pop();
    }
    push(e) {
      this.setCursor(Number.POSITIVE_INFINITY);
      this.left.push(e);
    }
    pushMany(e) {
      this.setCursor(Number.POSITIVE_INFINITY);
      c(this.left, e);
    }
    unshift(e) {
      this.setCursor(0);
      this.right.push(e);
    }
    unshiftMany(e) {
      this.setCursor(0);
      c(this.right, e.reverse());
    }
    setCursor(e) {
      if (e !== this.left.length && (!(e > this.left.length) || this.right.length !== 0) && (!(e < 0) || this.left.length !== 0)) {
        if (e < this.left.length) {
          let t = this.left.splice(e, Number.POSITIVE_INFINITY);
          c(this.right, t.reverse());
        } else {
          let t = this.right.splice(this.left.length + this.right.length - e, Number.POSITIVE_INFINITY);
          c(this.left, t.reverse());
        }
      }
    }
  }
  function c(e, t) {
    let r = 0;
    if (t.length < 10000) {
      e.push(...t);
    } else {
      while (r < t.length) {
        e.push(...t.slice(r, r + 10000));
        r += 10000;
      }
    }
  }
  function l(e) {
    let t;
    let r;
    let n;
    let i;
    let o;
    let c;
    let l;
    let s = {};
    let f = -1;
    let p = new a(e);
    while (++f < p.length) {
      while (f in s) {
        f = s[f];
      }
      t = p.get(f);
      if (f && t[1].type === "chunkFlow" && p.get(f - 1)[1].type === "listItemPrefix" && ((n = 0) < (c = t[1]._tokenizer.events).length && c[n][1].type === "lineEndingBlank" && (n += 2), n < c.length && c[n][1].type === "content")) {
        while (++n < c.length && c[n][1].type !== "content") {
          if (c[n][1].type === "chunkText") {
            c[n][1]._isInFirstContentOfListItem = true;
            n++;
          }
        }
      }
      if (t[0] === "enter") {
        if (t[1].contentType) {
          Object.assign(s, function (e, t) {
            let r;
            let n;
            let i = e.get(t)[1];
            let o = e.get(t)[2];
            let u = t - 1;
            let a = [];
            let c = i._tokenizer;
            if (!c) {
              c = o.parser[i.contentType](i.start);
              if (i._contentTypeTextTrailing) {
                c._contentTypeTextTrailing = true;
              }
            }
            let l = c.events;
            let s = [];
            let f = {};
            let p = -1;
            let h = i;
            let d = 0;
            let g = 0;
            let m = [0];
            while (h) {
              while (e.get(++u)[1] !== h);
              a.push(u);
              if (!h._tokenizer) {
                r = o.sliceStream(h);
                if (!h.next) {
                  r.push(null);
                }
                if (n) {
                  c.defineSkip(h.start);
                }
                if (h._isInFirstContentOfListItem) {
                  c._gfmTasklistFirstContentOfListItem = true;
                }
                c.write(r);
                if (h._isInFirstContentOfListItem) {
                  c._gfmTasklistFirstContentOfListItem = undefined;
                }
              }
              n = h;
              h = h.next;
            }
            for (h = i; ++p < l.length;) {
              if (l[p][0] === "exit" && l[p - 1][0] === "enter" && l[p][1].type === l[p - 1][1].type && l[p][1].start.line !== l[p][1].end.line) {
                g = p + 1;
                m.push(g);
                h._tokenizer = undefined;
                h.previous = undefined;
                h = h.next;
              }
            }
            c.events = [];
            if (h) {
              h._tokenizer = undefined;
              h.previous = undefined;
            } else {
              m.pop();
            }
            p = m.length;
            while (p--) {
              let t = l.slice(m[p], m[p + 1]);
              let r = a.pop();
              s.push([r, r + t.length - 1]);
              e.splice(r, 2, t);
            }
            s.reverse();
            p = -1;
            while (++p < s.length) {
              f[d + s[p][0]] = d + s[p][1];
              d += s[p][1] - s[p][0] - 1;
            }
            return f;
          }(p, f));
          f = s[f];
          l = true;
        }
      } else if (t[1]._container) {
        n = f;
        r = undefined;
        while (n--) {
          if ((i = p.get(n))[1].type === "lineEnding" || i[1].type === "lineEndingBlank") {
            if (i[0] === "enter") {
              if (r) {
                p.get(r)[1].type = "lineEndingBlank";
              }
              i[1].type = "lineEnding";
              r = n;
            }
          } else if (i[1].type === "linePrefix" || i[1].type === "listItemIndent") ;else {
            break;
          }
        }
        if (r) {
          t[1].end = {
            ...p.get(r)[1].start
          };
          (o = p.slice(r, f)).unshift(t);
          p.splice(r, f - r + 1, o);
        }
      }
    }
    arraySpliceUtils.spliceArray(e, 0, Number.POSITIVE_INFINITY, p.slice(0));
    return !l;
  }
  var mergeOrderedConfigs = require("merge-ordered-configs") /*id: 80316*/;
  var spaceLikeHandler = require("space-like-handler") /*id: 784097*/;
  var charClassificationUtils = require("char-classification-utils") /*id: 140430*/;
  let h = {
    tokenize: function (e) {
      let t;
      let r = e.attempt(this.parser.constructs.contentInitial, function (t) {
        if (t === null) {
          e.consume(t);
          return;
        }
        e.enter("lineEnding");
        e.consume(t);
        e.exit("lineEnding");
        return spaceLikeHandler.createSpaceHandler(e, r, "linePrefix");
      }, function (r) {
        e.enter("paragraph");
        return function r(n) {
          let i = e.enter("chunkText", {
            contentType: "text",
            previous: t
          });
          if (t) {
            t.next = i;
          }
          t = i;
          return function t(n) {
            if (n === null) {
              e.exit("chunkText");
              e.exit("paragraph");
              e.consume(n);
              return;
            }
            if (charClassificationUtils.isInvalidChar(n)) {
              e.consume(n);
              e.exit("chunkText");
              return r;
            } else {
              e.consume(n);
              return t;
            }
          }(n);
        }(r);
      });
      return r;
    }
  };
  let d = {
    tokenize: function (e) {
      let t;
      let r;
      let n;
      let i = this;
      let o = [];
      let a = 0;
      return c;
      function c(t) {
        if (a < o.length) {
          let r = o[a];
          i.containerState = r[1];
          return e.attempt(r[0].continuation, l, s)(t);
        }
        return s(t);
      }
      function l(e) {
        a++;
        if (i.containerState._closeFlow) {
          let r;
          i.containerState._closeFlow = undefined;
          if (t) {
            v();
          }
          let n = i.events.length;
          let o = n;
          while (o--) {
            if (i.events[o][0] === "exit" && i.events[o][1].type === "chunkFlow") {
              r = i.events[o][1].end;
              break;
            }
          }
          y(a);
          let c = n;
          while (c < i.events.length) {
            i.events[c][1].end = {
              ...r
            };
            c++;
          }
          arraySpliceUtils.spliceArray(i.events, o + 1, 0, i.events.slice(n));
          i.events.length = c;
          return s(e);
        }
        return c(e);
      }
      function s(r) {
        if (a === o.length) {
          if (!t) {
            return d(r);
          }
          if (t.currentConstruct && t.currentConstruct.concrete) {
            return b(r);
          }
          i.interrupt = !!t.currentConstruct && !t._gfmTableDynamicInterruptHack;
        }
        i.containerState = {};
        return e.check(g, f, h)(r);
      }
      function f(e) {
        if (t) {
          v();
        }
        y(a);
        return d(e);
      }
      function h(e) {
        i.parser.lazy[i.now().line] = a !== o.length;
        n = i.now().offset;
        return b(e);
      }
      function d(t) {
        i.containerState = {};
        return e.attempt(g, m, b)(t);
      }
      function m(e) {
        a++;
        o.push([i.currentConstruct, i.containerState]);
        return d(e);
      }
      function b(n) {
        if (n === null) {
          if (t) {
            v();
          }
          y(0);
          e.consume(n);
          return;
        }
        t = t || i.parser.flow(i.now());
        e.enter("chunkFlow", {
          _tokenizer: t,
          contentType: "flow",
          previous: r
        });
        return function t(r) {
          if (r === null) {
            D(e.exit("chunkFlow"), true);
            y(0);
            e.consume(r);
            return;
          }
          if (charClassificationUtils.isInvalidChar(r)) {
            e.consume(r);
            D(e.exit("chunkFlow"));
            a = 0;
            i.interrupt = undefined;
            return c;
          } else {
            e.consume(r);
            return t;
          }
        }(n);
      }
      function D(e, o) {
        let c = i.sliceStream(e);
        if (o) {
          c.push(null);
        }
        e.previous = r;
        if (r) {
          r.next = e;
        }
        r = e;
        t.defineSkip(e.start);
        t.write(c);
        if (i.parser.lazy[e.start.line]) {
          let e;
          let r;
          let o = t.events.length;
          while (o--) {
            if (t.events[o][1].start.offset < n && (!t.events[o][1].end || t.events[o][1].end.offset > n)) {
              return;
            }
          }
          let c = i.events.length;
          let l = c;
          while (l--) {
            if (i.events[l][0] === "exit" && i.events[l][1].type === "chunkFlow") {
              if (e) {
                r = i.events[l][1].end;
                break;
              }
              e = true;
            }
          }
          y(a);
          o = c;
          while (o < i.events.length) {
            i.events[o][1].end = {
              ...r
            };
            o++;
          }
          arraySpliceUtils.spliceArray(i.events, l + 1, 0, i.events.slice(c));
          i.events.length = o;
        }
      }
      function y(t) {
        let r = o.length;
        while (r-- > t) {
          let t = o[r];
          i.containerState = t[1];
          t[0].exit.call(i, e);
        }
        o.length = t;
      }
      function v() {
        t.write([null]);
        r = undefined;
        t = undefined;
        i.containerState._closeFlow = undefined;
      }
    }
  };
  let g = {
    tokenize: function (e, t, r) {
      return spaceLikeHandler.createSpaceHandler(e, e.attempt(this.parser.constructs.document, t, r), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4);
    }
  };
  var spaceTokenizerUtils = require("space-tokenizer-utils") /*id: 349997*/;
  let b = {
    resolve: function (e) {
      l(e);
      return e;
    },
    tokenize: function (e, t) {
      let r;
      return function (t) {
        e.enter("content");
        r = e.enter("chunkContent", {
          contentType: "content"
        });
        return n(t);
      };
      function n(t) {
        if (t === null) {
          return i(t);
        } else if (charClassificationUtils.isInvalidChar(t)) {
          return e.check(D, o, i)(t);
        } else {
          e.consume(t);
          return n;
        }
      }
      function i(r) {
        e.exit("chunkContent");
        e.exit("content");
        return t(r);
      }
      function o(t) {
        e.consume(t);
        e.exit("chunkContent");
        r.next = e.enter("chunkContent", {
          contentType: "content",
          previous: r
        });
        r = r.next;
        return n;
      }
    }
  };
  let D = {
    partial: true,
    tokenize: function (e, t, r) {
      let n = this;
      return function (t) {
        e.exit("chunkContent");
        e.enter("lineEnding");
        e.consume(t);
        e.exit("lineEnding");
        return spaceLikeHandler.createSpaceHandler(e, i, "linePrefix");
      };
      function i(i) {
        if (i === null || charClassificationUtils.isInvalidChar(i)) {
          return r(i);
        }
        let o = n.events[n.events.length - 1];
        if (!n.parser.constructs.disable.null.includes("codeIndented") && o && o[1].type === "linePrefix" && o[2].sliceSerialize(o[1], true).length >= 4) {
          return t(i);
        } else {
          return e.interrupt(n.parser.constructs.flow, r, t)(i);
        }
      }
    }
  };
  let y = {
    tokenize: function (e) {
      let t = this;
      let r = e.attempt(spaceTokenizerUtils.spaceTokenizer, function (n) {
        if (n === null) {
          e.consume(n);
          return;
        }
        e.enter("lineEndingBlank");
        e.consume(n);
        e.exit("lineEndingBlank");
        t.currentConstruct = undefined;
        return r;
      }, e.attempt(this.parser.constructs.flowInitial, n, spaceLikeHandler.createSpaceHandler(e, e.attempt(this.parser.constructs.flow, n, e.attempt(b, n)), "linePrefix")));
      return r;
      function n(n) {
        if (n === null) {
          e.consume(n);
          return;
        }
        e.enter("lineEnding");
        e.consume(n);
        e.exit("lineEnding");
        t.currentConstruct = undefined;
        return r;
      }
    }
  };
  let v = k("string");
  let x = k("text");
  function k(e) {
    var t;
    return {
      resolveAll: (t = e === "text" ? w : undefined, function (e, r) {
        let n;
        let i = -1;
        while (++i <= e.length) {
          if (n === undefined) {
            if (e[i] && e[i][1].type === "data") {
              n = i;
              i++;
            }
          } else if (!e[i] || e[i][1].type !== "data") {
            if (i !== n + 2) {
              e[n][1].end = e[i - 1][1].end;
              e.splice(n + 2, i - n - 2);
              i = n + 2;
            }
            n = undefined;
          }
        }
        if (t) {
          return t(e, r);
        } else {
          return e;
        }
      }),
      tokenize: function (t) {
        let r = this;
        let n = this.parser.constructs[e];
        let i = t.attempt(n, o, u);
        return o;
        function o(e) {
          if (c(e)) {
            return i(e);
          } else {
            return u(e);
          }
        }
        function u(e) {
          if (e === null) {
            t.consume(e);
            return;
          }
          t.enter("data");
          t.consume(e);
          return a;
        }
        function a(e) {
          if (c(e)) {
            t.exit("data");
            return i(e);
          } else {
            t.consume(e);
            return a;
          }
        }
        function c(e) {
          if (e === null) {
            return true;
          }
          let t = n[e];
          let i = -1;
          if (t) {
            while (++i < t.length) {
              let e = t[i];
              if (!e.previous || e.previous.call(r, r.previous)) {
                return true;
              }
            }
          }
          return false;
        }
      }
    };
  }
  function w(e, t) {
    let r = 0;
    while (++r <= e.length) {
      if ((r === e.length || e[r][1].type === "lineEnding") && e[r - 1][1].type === "data") {
        let n;
        let i = e[r - 1][1];
        let o = t.sliceStream(i);
        let u = o.length;
        let a = -1;
        let c = 0;
        while (u--) {
          let e = o[u];
          if (typeof e == "string") {
            for (a = e.length; e.charCodeAt(a - 1) === 32;) {
              c++;
              a--;
            }
            if (a) {
              break;
            }
            a = -1;
          } else if (e === -2) {
            n = true;
            c++;
          } else if (e === -1) ;else {
            u++;
            break;
          }
        }
        if (t._contentTypeTextTrailing && r === e.length) {
          c = 0;
        }
        if (c) {
          let o = {
            type: r === e.length || n || c < 2 ? "lineSuffix" : "hardBreakTrailing",
            start: {
              _bufferIndex: u ? a : i.start._bufferIndex + a,
              _index: i.start._index + u,
              line: i.end.line,
              column: i.end.column - c,
              offset: i.end.offset - c
            },
            end: {
              ...i.end
            }
          };
          i.end = {
            ...o.start
          };
          if (i.start.offset === i.end.offset) {
            Object.assign(i, o);
          } else {
            e.splice(r, 0, ["enter", o, t], ["exit", o, t]);
            r += 2;
          }
        }
        r++;
      }
    }
    return e;
  }
  let C = {
    name: "thematicBreak",
    tokenize: function (e, t, r) {
      let n;
      let i = 0;
      return function (o) {
        var u;
        e.enter("thematicBreak");
        n = u = o;
        return function o(u) {
          if (u === n) {
            e.enter("thematicBreakSequence");
            return function t(r) {
              if (r === n) {
                e.consume(r);
                i++;
                return t;
              } else {
                e.exit("thematicBreakSequence");
                if (charClassificationUtils.isSpaceLike(r)) {
                  return spaceLikeHandler.createSpaceHandler(e, o, "whitespace")(r);
                } else {
                  return o(r);
                }
              }
            }(u);
          } else if (i >= 3 && (u === null || charClassificationUtils.isInvalidChar(u))) {
            e.exit("thematicBreak");
            return t(u);
          } else {
            return r(u);
          }
        }(u);
      };
    }
  };
  let E = {
    continuation: {
      tokenize: function (e, t, r) {
        let n = this;
        n.containerState._closeFlow = undefined;
        return e.check(spaceTokenizerUtils.spaceTokenizer, function (r) {
          n.containerState.furtherBlankLines = n.containerState.furtherBlankLines || n.containerState.initialBlankLine;
          return spaceLikeHandler.createSpaceHandler(e, t, "listItemIndent", n.containerState.size + 1)(r);
        }, function (r) {
          if (n.containerState.furtherBlankLines || !charClassificationUtils.isSpaceLike(r)) {
            n.containerState.furtherBlankLines = undefined;
            n.containerState.initialBlankLine = undefined;
            return i(r);
          } else {
            n.containerState.furtherBlankLines = undefined;
            n.containerState.initialBlankLine = undefined;
            return e.attempt(S, t, i)(r);
          }
        });
        function i(i) {
          n.containerState._closeFlow = true;
          n.interrupt = undefined;
          return spaceLikeHandler.createSpaceHandler(e, e.attempt(E, t, r), "linePrefix", n.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(i);
        }
      }
    },
    exit: function (e) {
      e.exit(this.containerState.type);
    },
    name: "list",
    tokenize: function (e, t, r) {
      let n = this;
      let i = n.events[n.events.length - 1];
      let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], true).length : 0;
      let u = 0;
      return function (t) {
        let i = n.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
        if (i === "listUnordered" ? !n.containerState.marker || t === n.containerState.marker : charClassificationUtils.isDigit(t)) {
          if (!n.containerState.type) {
            n.containerState.type = i;
            e.enter(i, {
              _container: true
            });
          }
          if (i === "listUnordered") {
            e.enter("listItemPrefix");
            if (t === 42 || t === 45) {
              return e.check(C, r, a)(t);
            } else {
              return a(t);
            }
          }
          if (!n.interrupt || t === 49) {
            e.enter("listItemPrefix");
            e.enter("listItemValue");
            return function t(i) {
              if (charClassificationUtils.isDigit(i) && ++u < 10) {
                e.consume(i);
                return t;
              } else if ((!n.interrupt || u < 2) && (n.containerState.marker ? i === n.containerState.marker : i === 41 || i === 46)) {
                e.exit("listItemValue");
                return a(i);
              } else {
                return r(i);
              }
            }(t);
          }
        }
        return r(t);
      };
      function a(t) {
        e.enter("listItemMarker");
        e.consume(t);
        e.exit("listItemMarker");
        n.containerState.marker = n.containerState.marker || t;
        return e.check(spaceTokenizerUtils.spaceTokenizer, n.interrupt ? r : c, e.attempt(A, s, l));
      }
      function c(e) {
        n.containerState.initialBlankLine = true;
        o++;
        return s(e);
      }
      function l(t) {
        if (charClassificationUtils.isSpaceLike(t)) {
          e.enter("listItemPrefixWhitespace");
          e.consume(t);
          e.exit("listItemPrefixWhitespace");
          return s;
        } else {
          return r(t);
        }
      }
      function s(r) {
        n.containerState.size = o + n.sliceSerialize(e.exit("listItemPrefix"), true).length;
        return t(r);
      }
    }
  };
  let A = {
    partial: true,
    tokenize: function (e, t, r) {
      let n = this;
      return spaceLikeHandler.createSpaceHandler(e, function (e) {
        let i = n.events[n.events.length - 1];
        if (!charClassificationUtils.isSpaceLike(e) && i && i[1].type === "listItemPrefixWhitespace") {
          return t(e);
        } else {
          return r(e);
        }
      }, "listItemPrefixWhitespace", n.parser.constructs.disable.null.includes("codeIndented") ? undefined : 5);
    }
  };
  let S = {
    partial: true,
    tokenize: function (e, t, r) {
      let n = this;
      return spaceLikeHandler.createSpaceHandler(e, function (e) {
        let i = n.events[n.events.length - 1];
        if (i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], true).length === n.containerState.size) {
          return t(e);
        } else {
          return r(e);
        }
      }, "listItemIndent", n.containerState.size + 1);
    }
  };
  let q = {
    continuation: {
      tokenize: function (e, t, r) {
        let n = this;
        return function (t) {
          if (charClassificationUtils.isSpaceLike(t)) {
            return spaceLikeHandler.createSpaceHandler(e, i, "linePrefix", n.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(t);
          } else {
            return i(t);
          }
        };
        function i(n) {
          return e.attempt(q, t, r)(n);
        }
      }
    },
    exit: function (e) {
      e.exit("blockQuote");
    },
    name: "blockQuote",
    tokenize: function (e, t, r) {
      let n = this;
      return function (t) {
        if (t === 62) {
          let r = n.containerState;
          if (!r.open) {
            e.enter("blockQuote", {
              _container: true
            });
            r.open = true;
          }
          e.enter("blockQuotePrefix");
          e.enter("blockQuoteMarker");
          e.consume(t);
          e.exit("blockQuoteMarker");
          return i;
        }
        return r(t);
      };
      function i(r) {
        if (charClassificationUtils.isSpaceLike(r)) {
          e.enter("blockQuotePrefixWhitespace");
          e.consume(r);
          e.exit("blockQuotePrefixWhitespace");
          e.exit("blockQuotePrefix");
          return t;
        } else {
          e.exit("blockQuotePrefix");
          return t(r);
        }
      }
    }
  };
  function T(e, t, r, n, i, o, u, a, c) {
    let l = c || Number.POSITIVE_INFINITY;
    let s = 0;
    return function (t) {
      if (t === 60) {
        e.enter(n);
        e.enter(i);
        e.enter(o);
        e.consume(t);
        e.exit(o);
        return f;
      } else if (t === null || t === 32 || t === 41 || charClassificationUtils.isControlChar(t)) {
        return r(t);
      } else {
        e.enter(n);
        e.enter(u);
        e.enter(a);
        e.enter("chunkString", {
          contentType: "string"
        });
        return g(t);
      }
    };
    function f(r) {
      if (r === 62) {
        e.enter(o);
        e.consume(r);
        e.exit(o);
        e.exit(i);
        e.exit(n);
        return t;
      } else {
        e.enter(a);
        e.enter("chunkString", {
          contentType: "string"
        });
        return h(r);
      }
    }
    function h(t) {
      if (t === 62) {
        e.exit("chunkString");
        e.exit(a);
        return f(t);
      } else if (t === null || t === 60 || charClassificationUtils.isInvalidChar(t)) {
        return r(t);
      } else {
        e.consume(t);
        if (t === 92) {
          return d;
        } else {
          return h;
        }
      }
    }
    function d(t) {
      if (t === 60 || t === 62 || t === 92) {
        e.consume(t);
        return h;
      } else {
        return h(t);
      }
    }
    function g(i) {
      if (!s && (i === null || i === 41 || charClassificationUtils.isWhitespaceOrNeg(i))) {
        e.exit("chunkString");
        e.exit(a);
        e.exit(u);
        e.exit(n);
        return t(i);
      } else if (s < l && i === 40) {
        e.consume(i);
        s++;
        return g;
      } else if (i === 41) {
        e.consume(i);
        s--;
        return g;
      } else if (i === null || i === 32 || i === 40 || charClassificationUtils.isControlChar(i)) {
        return r(i);
      } else {
        e.consume(i);
        if (i === 92) {
          return m;
        } else {
          return g;
        }
      }
    }
    function m(t) {
      if (t === 40 || t === 41 || t === 92) {
        e.consume(t);
        return g;
      } else {
        return g(t);
      }
    }
  }
  function B(e, t, r, n, i, o) {
    let u;
    let a = this;
    let c = 0;
    return function (t) {
      e.enter(n);
      e.enter(i);
      e.consume(t);
      e.exit(i);
      e.enter(o);
      return l;
    };
    function l(f) {
      if (c > 999 || f === null || f === 91 || f === 93 && !u || f === 94 && !c && "_hiddenFootnoteSupport" in a.parser.constructs) {
        return r(f);
      } else if (f === 93) {
        e.exit(o);
        e.enter(i);
        e.consume(f);
        e.exit(i);
        e.exit(n);
        return t;
      } else if (charClassificationUtils.isInvalidChar(f)) {
        e.enter("lineEnding");
        e.consume(f);
        e.exit("lineEnding");
        return l;
      } else {
        e.enter("chunkString", {
          contentType: "string"
        });
        return s(f);
      }
    }
    function s(t) {
      if (t === null || t === 91 || t === 93 || charClassificationUtils.isInvalidChar(t) || c++ > 999) {
        e.exit("chunkString");
        return l(t);
      } else {
        e.consume(t);
        u ||= !charClassificationUtils.isSpaceLike(t);
        if (t === 92) {
          return f;
        } else {
          return s;
        }
      }
    }
    function f(t) {
      if (t === 91 || t === 92 || t === 93) {
        e.consume(t);
        c++;
        return s;
      } else {
        return s(t);
      }
    }
  }
  function L(e, t, r, n, i, o) {
    let u;
    return function (t) {
      if (t === 34 || t === 39 || t === 40) {
        e.enter(n);
        e.enter(i);
        e.consume(t);
        e.exit(i);
        u = t === 40 ? 41 : t;
        return a;
      } else {
        return r(t);
      }
    };
    function a(r) {
      if (r === u) {
        e.enter(i);
        e.consume(r);
        e.exit(i);
        e.exit(n);
        return t;
      } else {
        e.enter(o);
        return c(r);
      }
    }
    function c(t) {
      if (t === u) {
        e.exit(o);
        return a(u);
      } else if (t === null) {
        return r(t);
      } else if (charClassificationUtils.isInvalidChar(t)) {
        e.enter("lineEnding");
        e.consume(t);
        e.exit("lineEnding");
        return spaceLikeHandler.createSpaceHandler(e, c, "linePrefix");
      } else {
        e.enter("chunkString", {
          contentType: "string"
        });
        return l(t);
      }
    }
    function l(t) {
      if (t === u || t === null || charClassificationUtils.isInvalidChar(t)) {
        e.exit("chunkString");
        return c(t);
      } else {
        e.consume(t);
        if (t === 92) {
          return s;
        } else {
          return l;
        }
      }
    }
    function s(t) {
      if (t === u || t === 92) {
        e.consume(t);
        return l;
      } else {
        return l(t);
      }
    }
  }
  function F(e, t) {
    let r;
    return function n(i) {
      if (charClassificationUtils.isInvalidChar(i)) {
        e.enter("lineEnding");
        e.consume(i);
        e.exit("lineEnding");
        r = true;
        return n;
      } else if (charClassificationUtils.isSpaceLike(i)) {
        return spaceLikeHandler.createSpaceHandler(e, n, r ? "linePrefix" : "lineSuffix")(i);
      } else {
        return t(i);
      }
    };
  }
  var textNormalizeUpper = require("text-normalize-upper") /*id: 523800*/;
  let R = {
    partial: true,
    tokenize: function (e, t, r) {
      return function (t) {
        if (charClassificationUtils.isWhitespaceOrNeg(t)) {
          return F(e, n)(t);
        } else {
          return r(t);
        }
      };
      function n(t) {
        return L(e, i, r, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
      }
      function i(t) {
        if (charClassificationUtils.isSpaceLike(t)) {
          return spaceLikeHandler.createSpaceHandler(e, o, "whitespace")(t);
        } else {
          return o(t);
        }
      }
      function o(e) {
        if (e === null || charClassificationUtils.isInvalidChar(e)) {
          return t(e);
        } else {
          return r(e);
        }
      }
    }
  };
  let N = {
    name: "codeIndented",
    tokenize: function (e, t, r) {
      let n = this;
      return function (t) {
        e.enter("codeIndented");
        return spaceLikeHandler.createSpaceHandler(e, i, "linePrefix", 5)(t);
      };
      function i(t) {
        let i = n.events[n.events.length - 1];
        if (i && i[1].type === "linePrefix" && i[2].sliceSerialize(i[1], true).length >= 4) {
          return function t(r) {
            if (r === null) {
              return o(r);
            } else if (charClassificationUtils.isInvalidChar(r)) {
              return e.attempt(z, t, o)(r);
            } else {
              e.enter("codeFlowValue");
              return function r(n) {
                if (n === null || charClassificationUtils.isInvalidChar(n)) {
                  e.exit("codeFlowValue");
                  return t(n);
                } else {
                  e.consume(n);
                  return r;
                }
              }(r);
            }
          }(t);
        } else {
          return r(t);
        }
      }
      function o(r) {
        e.exit("codeIndented");
        return t(r);
      }
    }
  };
  let z = {
    partial: true,
    tokenize: function (e, t, r) {
      let n = this;
      return i;
      function i(t) {
        if (n.parser.lazy[n.now().line]) {
          return r(t);
        } else if (charClassificationUtils.isInvalidChar(t)) {
          e.enter("lineEnding");
          e.consume(t);
          e.exit("lineEnding");
          return i;
        } else {
          return spaceLikeHandler.createSpaceHandler(e, o, "linePrefix", 5)(t);
        }
      }
      function o(e) {
        let o = n.events[n.events.length - 1];
        if (o && o[1].type === "linePrefix" && o[2].sliceSerialize(o[1], true).length >= 4) {
          return t(e);
        } else if (charClassificationUtils.isInvalidChar(e)) {
          return i(e);
        } else {
          return r(e);
        }
      }
    }
  };
  let O = {
    name: "setextUnderline",
    resolveTo: function (e, t) {
      let r;
      let n;
      let i;
      let o = e.length;
      while (o--) {
        if (e[o][0] === "enter") {
          if (e[o][1].type === "content") {
            r = o;
            break;
          }
          if (e[o][1].type === "paragraph") {
            n = o;
          }
        } else {
          if (e[o][1].type === "content") {
            e.splice(o, 1);
          }
          if (!i && e[o][1].type === "definition") {
            i = o;
          }
        }
      }
      let u = {
        type: "setextHeading",
        start: {
          ...e[r][1].start
        },
        end: {
          ...e[e.length - 1][1].end
        }
      };
      e[n][1].type = "setextHeadingText";
      if (i) {
        e.splice(n, 0, ["enter", u, t]);
        e.splice(i + 1, 0, ["exit", e[r][1], t]);
        e[r][1].end = {
          ...e[i][1].end
        };
      } else {
        e[r][1] = u;
      }
      e.push(["exit", u, t]);
      return e;
    },
    tokenize: function (e, t, r) {
      let n;
      let i = this;
      return function (t) {
        var u;
        let a;
        let c = i.events.length;
        while (c--) {
          if (i.events[c][1].type !== "lineEnding" && i.events[c][1].type !== "linePrefix" && i.events[c][1].type !== "content") {
            a = i.events[c][1].type === "paragraph";
            break;
          }
        }
        if (!i.parser.lazy[i.now().line] && (i.interrupt || a)) {
          e.enter("setextHeadingLine");
          n = t;
          u = t;
          e.enter("setextHeadingLineSequence");
          return function t(r) {
            if (r === n) {
              e.consume(r);
              return t;
            } else {
              e.exit("setextHeadingLineSequence");
              if (charClassificationUtils.isSpaceLike(r)) {
                return spaceLikeHandler.createSpaceHandler(e, o, "lineSuffix")(r);
              } else {
                return o(r);
              }
            }
          }(u);
        } else {
          return r(t);
        }
      };
      function o(n) {
        if (n === null || charClassificationUtils.isInvalidChar(n)) {
          e.exit("setextHeadingLine");
          return t(n);
        } else {
          return r(n);
        }
      }
    }
  };
  let _ = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"];
  let U = ["pre", "script", "style", "textarea"];
  let P = {
    partial: true,
    tokenize: function (e, t, r) {
      return function (n) {
        e.enter("lineEnding");
        e.consume(n);
        e.exit("lineEnding");
        return e.attempt(spaceTokenizerUtils.spaceTokenizer, t, r);
      };
    }
  };
  let V = {
    partial: true,
    tokenize: function (e, t, r) {
      let n = this;
      return function (t) {
        if (charClassificationUtils.isInvalidChar(t)) {
          e.enter("lineEnding");
          e.consume(t);
          e.exit("lineEnding");
          return i;
        } else {
          return r(t);
        }
      };
      function i(e) {
        if (n.parser.lazy[n.now().line]) {
          return r(e);
        } else {
          return t(e);
        }
      }
    }
  };
  let j = {
    partial: true,
    tokenize: function (e, t, r) {
      let n = this;
      return function (t) {
        if (t === null) {
          return r(t);
        } else {
          e.enter("lineEnding");
          e.consume(t);
          e.exit("lineEnding");
          return i;
        }
      };
      function i(e) {
        if (n.parser.lazy[n.now().line]) {
          return r(e);
        } else {
          return t(e);
        }
      }
    }
  };
  let M = {
    concrete: true,
    name: "codeFenced",
    tokenize: function (e, t, r) {
      let n;
      let i = this;
      let o = {
        partial: true,
        tokenize: function (e, t, r) {
          let o = 0;
          return function (t) {
            e.enter("lineEnding");
            e.consume(t);
            e.exit("lineEnding");
            return u;
          };
          function u(t) {
            e.enter("codeFencedFence");
            if (charClassificationUtils.isSpaceLike(t)) {
              return spaceLikeHandler.createSpaceHandler(e, c, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(t);
            } else {
              return c(t);
            }
          }
          function c(t) {
            if (t === n) {
              e.enter("codeFencedFenceSequence");
              return function t(i) {
                if (i === n) {
                  o++;
                  e.consume(i);
                  return t;
                } else if (o >= a) {
                  e.exit("codeFencedFenceSequence");
                  if (charClassificationUtils.isSpaceLike(i)) {
                    return spaceLikeHandler.createSpaceHandler(e, l, "whitespace")(i);
                  } else {
                    return l(i);
                  }
                } else {
                  return r(i);
                }
              }(t);
            } else {
              return r(t);
            }
          }
          function l(n) {
            if (n === null || charClassificationUtils.isInvalidChar(n)) {
              e.exit("codeFencedFence");
              return t(n);
            } else {
              return r(n);
            }
          }
        }
      };
      let u = 0;
      let a = 0;
      return function (t) {
        return function (t) {
          let o = i.events[i.events.length - 1];
          u = o && o[1].type === "linePrefix" ? o[2].sliceSerialize(o[1], true).length : 0;
          n = t;
          e.enter("codeFenced");
          e.enter("codeFencedFence");
          e.enter("codeFencedFenceSequence");
          return function t(i) {
            if (i === n) {
              a++;
              e.consume(i);
              return t;
            } else if (a < 3) {
              return r(i);
            } else {
              e.exit("codeFencedFenceSequence");
              if (charClassificationUtils.isSpaceLike(i)) {
                return spaceLikeHandler.createSpaceHandler(e, c, "whitespace")(i);
              } else {
                return c(i);
              }
            }
          }(t);
        }(t);
      };
      function c(o) {
        if (o === null || charClassificationUtils.isInvalidChar(o)) {
          e.exit("codeFencedFence");
          if (i.interrupt) {
            return t(o);
          } else {
            return e.check(j, s, m)(o);
          }
        } else {
          e.enter("codeFencedFenceInfo");
          e.enter("chunkString", {
            contentType: "string"
          });
          return function t(i) {
            if (i === null || charClassificationUtils.isInvalidChar(i)) {
              e.exit("chunkString");
              e.exit("codeFencedFenceInfo");
              return c(i);
            } else if (charClassificationUtils.isSpaceLike(i)) {
              e.exit("chunkString");
              e.exit("codeFencedFenceInfo");
              return spaceLikeHandler.createSpaceHandler(e, l, "whitespace")(i);
            } else if (i === 96 && i === n) {
              return r(i);
            } else {
              e.consume(i);
              return t;
            }
          }(o);
        }
      }
      function l(t) {
        if (t === null || charClassificationUtils.isInvalidChar(t)) {
          return c(t);
        } else {
          e.enter("codeFencedFenceMeta");
          e.enter("chunkString", {
            contentType: "string"
          });
          return function t(i) {
            if (i === null || charClassificationUtils.isInvalidChar(i)) {
              e.exit("chunkString");
              e.exit("codeFencedFenceMeta");
              return c(i);
            } else if (i === 96 && i === n) {
              return r(i);
            } else {
              e.consume(i);
              return t;
            }
          }(t);
        }
      }
      function s(t) {
        return e.attempt(o, m, h)(t);
      }
      function h(t) {
        e.enter("lineEnding");
        e.consume(t);
        e.exit("lineEnding");
        return d;
      }
      function d(t) {
        if (u > 0 && charClassificationUtils.isSpaceLike(t)) {
          return spaceLikeHandler.createSpaceHandler(e, g, "linePrefix", u + 1)(t);
        } else {
          return g(t);
        }
      }
      function g(t) {
        if (t === null || charClassificationUtils.isInvalidChar(t)) {
          return e.check(j, s, m)(t);
        } else {
          e.enter("codeFlowValue");
          return function t(r) {
            if (r === null || charClassificationUtils.isInvalidChar(r)) {
              e.exit("codeFlowValue");
              return g(r);
            } else {
              e.consume(r);
              return t;
            }
          }(t);
        }
      }
      function m(r) {
        e.exit("codeFenced");
        return t(r);
      }
    }
  };
  var decodeHtmlEntityUtil = require("decode-html-entity-util") /*id: 35432*/;
  let $ = {
    name: "characterReference",
    tokenize: function (e, t, r) {
      let n;
      let i;
      let o = this;
      let u = 0;
      return function (t) {
        e.enter("characterReference");
        e.enter("characterReferenceMarker");
        e.consume(t);
        e.exit("characterReferenceMarker");
        return a;
      };
      function a(t) {
        if (t === 35) {
          e.enter("characterReferenceMarkerNumeric");
          e.consume(t);
          e.exit("characterReferenceMarkerNumeric");
          return c;
        } else {
          e.enter("characterReferenceValue");
          n = 31;
          i = charClassificationUtils.isAlphaNumeric;
          return l(t);
        }
      }
      function c(t) {
        if (t === 88 || t === 120) {
          e.enter("characterReferenceMarkerHexadecimal");
          e.consume(t);
          e.exit("characterReferenceMarkerHexadecimal");
          e.enter("characterReferenceValue");
          n = 6;
          i = charClassificationUtils.isHexDigit;
          return l;
        } else {
          e.enter("characterReferenceValue");
          n = 7;
          i = charClassificationUtils.isDigit;
          return l(t);
        }
      }
      function l(a) {
        if (a === 59 && u) {
          let n = e.exit("characterReferenceValue");
          if (i !== charClassificationUtils.isAlphaNumeric || decodeHtmlEntityUtil.decodeHtmlEntity(o.sliceSerialize(n))) {
            e.enter("characterReferenceMarker");
            e.consume(a);
            e.exit("characterReferenceMarker");
            e.exit("characterReference");
            return t;
          } else {
            return r(a);
          }
        }
        if (i(a) && u++ < n) {
          e.consume(a);
          return l;
        } else {
          return r(a);
        }
      }
    }
  };
  let G = {
    name: "characterEscape",
    tokenize: function (e, t, r) {
      return function (t) {
        e.enter("characterEscape");
        e.enter("escapeMarker");
        e.consume(t);
        e.exit("escapeMarker");
        return n;
      };
      function n(n) {
        if (charClassificationUtils.isSpecialChar(n)) {
          e.enter("characterEscapeValue");
          e.consume(n);
          e.exit("characterEscapeValue");
          e.exit("characterEscape");
          return t;
        } else {
          return r(n);
        }
      }
    }
  };
  let Z = {
    name: "lineEnding",
    tokenize: function (e, t) {
      return function (r) {
        e.enter("lineEnding");
        e.consume(r);
        e.exit("lineEnding");
        return spaceLikeHandler.createSpaceHandler(e, t, "linePrefix");
      };
    }
  };
  var resolveAllUtil = require("resolve-all-util") /*id: 221174*/;
  let J = {
    name: "labelEnd",
    resolveAll: function (e) {
      let t = -1;
      let r = [];
      while (++t < e.length) {
        let n = e[t][1];
        r.push(e[t]);
        if (n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") {
          let e = n.type === "labelImage" ? 4 : 2;
          n.type = "data";
          t += e;
        }
      }
      if (e.length !== r.length) {
        arraySpliceUtils.spliceArray(e, 0, e.length, r);
      }
      return e;
    },
    resolveTo: function (e, t) {
      let r;
      let n;
      let i;
      let o;
      let a = e.length;
      let c = 0;
      while (a--) {
        r = e[a][1];
        if (n) {
          if (r.type === "link" || r.type === "labelLink" && r._inactive) {
            break;
          }
          if (e[a][0] === "enter" && r.type === "labelLink") {
            r._inactive = true;
          }
        } else if (i) {
          if (e[a][0] === "enter" && (r.type === "labelImage" || r.type === "labelLink") && !r._balanced && (n = a, r.type !== "labelLink")) {
            c = 2;
            break;
          }
        } else if (r.type === "labelEnd") {
          i = a;
        }
      }
      let l = {
        type: e[n][1].type === "labelLink" ? "link" : "image",
        start: {
          ...e[n][1].start
        },
        end: {
          ...e[e.length - 1][1].end
        }
      };
      let s = {
        type: "label",
        start: {
          ...e[n][1].start
        },
        end: {
          ...e[i][1].end
        }
      };
      let f = {
        type: "labelText",
        start: {
          ...e[n + c + 2][1].end
        },
        end: {
          ...e[i - 2][1].start
        }
      };
      o = [["enter", l, t], ["enter", s, t]];
      o = arraySpliceUtils.concatArrays(o, e.slice(n + 1, n + c + 3));
      o = arraySpliceUtils.concatArrays(o, [["enter", f, t]]);
      o = arraySpliceUtils.concatArrays(o, resolveAllUtil.resolveAll(t.parser.constructs.insideSpan.null, e.slice(n + c + 4, i - 3), t));
      o = arraySpliceUtils.concatArrays(o, [["exit", f, t], e[i - 2], e[i - 1], ["exit", s, t]]);
      o = arraySpliceUtils.concatArrays(o, e.slice(i + 1));
      o = arraySpliceUtils.concatArrays(o, [["exit", l, t]]);
      arraySpliceUtils.spliceArray(e, n, e.length, o);
      return e;
    },
    tokenize: function (e, t, r) {
      let n;
      let i;
      let o = this;
      let u = o.events.length;
      while (u--) {
        if ((o.events[u][1].type === "labelImage" || o.events[u][1].type === "labelLink") && !o.events[u][1]._balanced) {
          n = o.events[u][1];
          break;
        }
      }
      return function (t) {
        if (n) {
          if (n._inactive) {
            return s(t);
          } else {
            i = o.parser.defined.includes(textNormalizeUpper.normalizeTextUpper(o.sliceSerialize({
              start: n.end,
              end: o.now()
            })));
            e.enter("labelEnd");
            e.enter("labelMarker");
            e.consume(t);
            e.exit("labelMarker");
            e.exit("labelEnd");
            return a;
          }
        } else {
          return r(t);
        }
      };
      function a(t) {
        if (t === 40) {
          return e.attempt(Q, l, i ? l : s)(t);
        } else if (t === 91) {
          return e.attempt(W, l, i ? c : s)(t);
        } else if (i) {
          return l(t);
        } else {
          return s(t);
        }
      }
      function c(t) {
        return e.attempt(X, l, s)(t);
      }
      function l(e) {
        return t(e);
      }
      function s(e) {
        n._balanced = true;
        return r(e);
      }
    }
  };
  let Q = {
    tokenize: function (e, t, r) {
      return function (t) {
        e.enter("resource");
        e.enter("resourceMarker");
        e.consume(t);
        e.exit("resourceMarker");
        return n;
      };
      function n(t) {
        if (charClassificationUtils.isWhitespaceOrNeg(t)) {
          return F(e, i)(t);
        } else {
          return i(t);
        }
      }
      function i(t) {
        if (t === 41) {
          return l(t);
        } else {
          return T(e, o, u, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
        }
      }
      function o(t) {
        if (charClassificationUtils.isWhitespaceOrNeg(t)) {
          return F(e, a)(t);
        } else {
          return l(t);
        }
      }
      function u(e) {
        return r(e);
      }
      function a(t) {
        if (t === 34 || t === 39 || t === 40) {
          return L(e, c, r, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t);
        } else {
          return l(t);
        }
      }
      function c(t) {
        if (charClassificationUtils.isWhitespaceOrNeg(t)) {
          return F(e, l)(t);
        } else {
          return l(t);
        }
      }
      function l(n) {
        if (n === 41) {
          e.enter("resourceMarker");
          e.consume(n);
          e.exit("resourceMarker");
          e.exit("resource");
          return t;
        } else {
          return r(n);
        }
      }
    }
  };
  let W = {
    tokenize: function (e, t, r) {
      let n = this;
      return function (t) {
        return B.call(n, e, i, o, "reference", "referenceMarker", "referenceString")(t);
      };
      function i(e) {
        if (n.parser.defined.includes(textNormalizeUpper.normalizeTextUpper(n.sliceSerialize(n.events[n.events.length - 1][1]).slice(1, -1)))) {
          return t(e);
        } else {
          return r(e);
        }
      }
      function o(e) {
        return r(e);
      }
    }
  };
  let X = {
    tokenize: function (e, t, r) {
      return function (t) {
        e.enter("reference");
        e.enter("referenceMarker");
        e.consume(t);
        e.exit("referenceMarker");
        return n;
      };
      function n(n) {
        if (n === 93) {
          e.enter("referenceMarker");
          e.consume(n);
          e.exit("referenceMarker");
          e.exit("reference");
          return t;
        } else {
          return r(n);
        }
      }
    }
  };
  let K = {
    name: "labelStartImage",
    resolveAll: J.resolveAll,
    tokenize: function (e, t, r) {
      let n = this;
      return function (t) {
        e.enter("labelImage");
        e.enter("labelImageMarker");
        e.consume(t);
        e.exit("labelImageMarker");
        return i;
      };
      function i(t) {
        if (t === 91) {
          e.enter("labelMarker");
          e.consume(t);
          e.exit("labelMarker");
          e.exit("labelImage");
          return o;
        } else {
          return r(t);
        }
      }
      function o(e) {
        if (e === 94 && "_hiddenFootnoteSupport" in n.parser.constructs) {
          return r(e);
        } else {
          return t(e);
        }
      }
    }
  };
  var charTokenTypeClassifier = require("char-token-type-classifier") /*id: 967710*/;
  let et = {
    name: "attention",
    resolveAll: function (e, t) {
      let r;
      let n;
      let i;
      let o;
      let a;
      let c;
      let l;
      let s;
      let f = -1;
      while (++f < e.length) {
        if (e[f][0] === "enter" && e[f][1].type === "attentionSequence" && e[f][1]._close) {
          for (r = f; r--;) {
            if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[f][1]).charCodeAt(0)) {
              if ((e[r][1]._close || e[f][1]._open) && (e[f][1].end.offset - e[f][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[f][1].end.offset - e[f][1].start.offset) % 3)) {
                continue;
              }
              c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[f][1].end.offset - e[f][1].start.offset > 1 ? 2 : 1;
              let p = {
                ...e[r][1].end
              };
              let h = {
                ...e[f][1].start
              };
              er(p, -c);
              er(h, c);
              o = {
                type: c > 1 ? "strongSequence" : "emphasisSequence",
                start: p,
                end: {
                  ...e[r][1].end
                }
              };
              a = {
                type: c > 1 ? "strongSequence" : "emphasisSequence",
                start: {
                  ...e[f][1].start
                },
                end: h
              };
              i = {
                type: c > 1 ? "strongText" : "emphasisText",
                start: {
                  ...e[r][1].end
                },
                end: {
                  ...e[f][1].start
                }
              };
              n = {
                type: c > 1 ? "strong" : "emphasis",
                start: {
                  ...o.start
                },
                end: {
                  ...a.end
                }
              };
              e[r][1].end = {
                ...o.start
              };
              e[f][1].start = {
                ...a.end
              };
              l = [];
              if (e[r][1].end.offset - e[r][1].start.offset) {
                l = arraySpliceUtils.concatArrays(l, [["enter", e[r][1], t], ["exit", e[r][1], t]]);
              }
              l = arraySpliceUtils.concatArrays(l, [["enter", n, t], ["enter", o, t], ["exit", o, t], ["enter", i, t]]);
              l = arraySpliceUtils.concatArrays(l, resolveAllUtil.resolveAll(t.parser.constructs.insideSpan.null, e.slice(r + 1, f), t));
              l = arraySpliceUtils.concatArrays(l, [["exit", i, t], ["enter", a, t], ["exit", a, t], ["exit", n, t]]);
              if (e[f][1].end.offset - e[f][1].start.offset) {
                s = 2;
                l = arraySpliceUtils.concatArrays(l, [["enter", e[f][1], t], ["exit", e[f][1], t]]);
              } else {
                s = 0;
              }
              arraySpliceUtils.spliceArray(e, r - 1, f - r + 3, l);
              f = r + l.length - s - 2;
              break;
            }
          }
        }
      }
      for (f = -1; ++f < e.length;) {
        if (e[f][1].type === "attentionSequence") {
          e[f][1].type = "data";
        }
      }
      return e;
    },
    tokenize: function (e, t) {
      let r;
      let n = this.parser.constructs.attentionMarkers.null;
      let i = this.previous;
      let o = charTokenTypeClassifier.getCharTokenType(i);
      return function (u) {
        r = u;
        e.enter("attentionSequence");
        return function u(a) {
          if (a === r) {
            e.consume(a);
            return u;
          }
          let c = e.exit("attentionSequence");
          let l = charTokenTypeClassifier.getCharTokenType(a);
          let s = !l || l === 2 && o || n.includes(a);
          let f = !o || o === 2 && l || n.includes(i);
          c._open = !!(r === 42 ? s : s && (o || !f));
          c._close = !!(r === 42 ? f : f && (l || !s));
          return t(a);
        }(u);
      };
    }
  };
  function er(e, t) {
    e.column += t;
    e.offset += t;
    e._bufferIndex += t;
  }
  let en = {
    name: "labelStartLink",
    resolveAll: J.resolveAll,
    tokenize: function (e, t, r) {
      let n = this;
      return function (t) {
        e.enter("labelLink");
        e.enter("labelMarker");
        e.consume(t);
        e.exit("labelMarker");
        e.exit("labelLink");
        return i;
      };
      function i(e) {
        if (e === 94 && "_hiddenFootnoteSupport" in n.parser.constructs) {
          return r(e);
        } else {
          return t(e);
        }
      }
    }
  };
  let ei = {
    42: E,
    43: E,
    45: E,
    48: E,
    49: E,
    50: E,
    51: E,
    52: E,
    53: E,
    54: E,
    55: E,
    56: E,
    57: E,
    62: q
  };
  let eo = {
    91: {
      name: "definition",
      tokenize: function (e, t, r) {
        let n;
        let i = this;
        return function (t) {
          var n;
          e.enter("definition");
          n = t;
          return B.call(i, e, o, r, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(n);
        };
        function o(t) {
          n = textNormalizeUpper.normalizeTextUpper(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1));
          if (t === 58) {
            e.enter("definitionMarker");
            e.consume(t);
            e.exit("definitionMarker");
            return u;
          } else {
            return r(t);
          }
        }
        function u(t) {
          if (charClassificationUtils.isWhitespaceOrNeg(t)) {
            return F(e, a)(t);
          } else {
            return a(t);
          }
        }
        function a(t) {
          return T(e, c, r, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
        }
        function c(t) {
          return e.attempt(R, l, l)(t);
        }
        function l(t) {
          if (charClassificationUtils.isSpaceLike(t)) {
            return spaceLikeHandler.createSpaceHandler(e, s, "whitespace")(t);
          } else {
            return s(t);
          }
        }
        function s(o) {
          if (o === null || charClassificationUtils.isInvalidChar(o)) {
            e.exit("definition");
            i.parser.defined.push(n);
            return t(o);
          } else {
            return r(o);
          }
        }
      }
    }
  };
  let eu = {
    [-2]: N,
    [-1]: N,
    32: N
  };
  let ea = {
    35: {
      name: "headingAtx",
      resolve: function (e, t) {
        let r;
        let n;
        let i = e.length - 2;
        let o = 3;
        if (e[3][1].type === "whitespace") {
          o += 2;
        }
        if (i - 2 > o && e[i][1].type === "whitespace") {
          i -= 2;
        }
        if (e[i][1].type === "atxHeadingSequence" && (o === i - 1 || i - 4 > o && e[i - 2][1].type === "whitespace")) {
          i -= o + 1 === i ? 2 : 4;
        }
        if (i > o) {
          r = {
            type: "atxHeadingText",
            start: e[o][1].start,
            end: e[i][1].end
          };
          n = {
            type: "chunkText",
            start: e[o][1].start,
            end: e[i][1].end,
            contentType: "text"
          };
          arraySpliceUtils.spliceArray(e, o, i - o + 1, [["enter", r, t], ["enter", n, t], ["exit", n, t], ["exit", r, t]]);
        }
        return e;
      },
      tokenize: function (e, t, r) {
        let n = 0;
        return function (i) {
          var o;
          e.enter("atxHeading");
          o = i;
          e.enter("atxHeadingSequence");
          return function i(o) {
            if (o === 35 && n++ < 6) {
              e.consume(o);
              return i;
            } else if (o === null || charClassificationUtils.isWhitespaceOrNeg(o)) {
              e.exit("atxHeadingSequence");
              return function r(n) {
                if (n === 35) {
                  e.enter("atxHeadingSequence");
                  return function t(n) {
                    if (n === 35) {
                      e.consume(n);
                      return t;
                    } else {
                      e.exit("atxHeadingSequence");
                      return r(n);
                    }
                  }(n);
                } else if (n === null || charClassificationUtils.isInvalidChar(n)) {
                  e.exit("atxHeading");
                  return t(n);
                } else if (charClassificationUtils.isSpaceLike(n)) {
                  return spaceLikeHandler.createSpaceHandler(e, r, "whitespace")(n);
                } else {
                  e.enter("atxHeadingText");
                  return function t(n) {
                    if (n === null || n === 35 || charClassificationUtils.isWhitespaceOrNeg(n)) {
                      e.exit("atxHeadingText");
                      return r(n);
                    } else {
                      e.consume(n);
                      return t;
                    }
                  }(n);
                }
              }(o);
            } else {
              return r(o);
            }
          }(o);
        };
      }
    },
    42: C,
    45: [O, C],
    60: {
      concrete: true,
      name: "htmlFlow",
      resolveTo: function (e) {
        let t = e.length;
        while (t-- && (e[t][0] !== "enter" || e[t][1].type !== "htmlFlow"));
        if (t > 1 && e[t - 2][1].type === "linePrefix") {
          e[t][1].start = e[t - 2][1].start;
          e[t + 1][1].start = e[t - 2][1].start;
          e.splice(t - 2, 2);
        }
        return e;
      },
      tokenize: function (e, t, r) {
        let n;
        let i;
        let o;
        let u;
        let a;
        let c = this;
        return function (t) {
          var r;
          r = t;
          e.enter("htmlFlow");
          e.enter("htmlFlowData");
          e.consume(r);
          return l;
        };
        function l(u) {
          if (u === 33) {
            e.consume(u);
            return s;
          } else if (u === 47) {
            e.consume(u);
            i = true;
            return d;
          } else if (u === 63) {
            e.consume(u);
            n = 3;
            if (c.interrupt) {
              return t;
            } else {
              return I;
            }
          } else if (charClassificationUtils.isLetter(u)) {
            e.consume(u);
            o = String.fromCharCode(u);
            return g;
          } else {
            return r(u);
          }
        }
        function s(i) {
          if (i === 45) {
            e.consume(i);
            n = 2;
            return f;
          } else if (i === 91) {
            e.consume(i);
            n = 5;
            u = 0;
            return h;
          } else if (charClassificationUtils.isLetter(i)) {
            e.consume(i);
            n = 4;
            if (c.interrupt) {
              return t;
            } else {
              return I;
            }
          } else {
            return r(i);
          }
        }
        function f(n) {
          if (n === 45) {
            e.consume(n);
            if (c.interrupt) {
              return t;
            } else {
              return I;
            }
          } else {
            return r(n);
          }
        }
        function h(n) {
          let i = "CDATA[";
          if (n === i.charCodeAt(u++)) {
            e.consume(n);
            if (u === i.length) {
              if (c.interrupt) {
                return t;
              } else {
                return E;
              }
            } else {
              return h;
            }
          } else {
            return r(n);
          }
        }
        function d(t) {
          if (charClassificationUtils.isLetter(t)) {
            e.consume(t);
            o = String.fromCharCode(t);
            return g;
          } else {
            return r(t);
          }
        }
        function g(u) {
          if (u === null || u === 47 || u === 62 || charClassificationUtils.isWhitespaceOrNeg(u)) {
            let a = u === 47;
            let l = o.toLowerCase();
            if (!a && !i && U.includes(l)) {
              n = 1;
              if (c.interrupt) {
                return t(u);
              } else {
                return E(u);
              }
            } else if (_.includes(o.toLowerCase())) {
              n = 6;
              if (a) {
                e.consume(u);
                return m;
              } else if (c.interrupt) {
                return t(u);
              } else {
                return E(u);
              }
            } else {
              n = 7;
              if (c.interrupt && !c.parser.lazy[c.now().line]) {
                return r(u);
              } else if (i) {
                return function t(r) {
                  if (charClassificationUtils.isSpaceLike(r)) {
                    e.consume(r);
                    return t;
                  } else {
                    return w(r);
                  }
                }(u);
              } else {
                return b(u);
              }
            }
          }
          if (u === 45 || charClassificationUtils.isAlphaNumeric(u)) {
            e.consume(u);
            o += String.fromCharCode(u);
            return g;
          } else {
            return r(u);
          }
        }
        function m(n) {
          if (n === 62) {
            e.consume(n);
            if (c.interrupt) {
              return t;
            } else {
              return E;
            }
          } else {
            return r(n);
          }
        }
        function b(t) {
          if (t === 47) {
            e.consume(t);
            return w;
          } else if (t === 58 || t === 95 || charClassificationUtils.isLetter(t)) {
            e.consume(t);
            return D;
          } else if (charClassificationUtils.isSpaceLike(t)) {
            e.consume(t);
            return b;
          } else {
            return w(t);
          }
        }
        function D(t) {
          if (t === 45 || t === 46 || t === 58 || t === 95 || charClassificationUtils.isAlphaNumeric(t)) {
            e.consume(t);
            return D;
          } else {
            return y(t);
          }
        }
        function y(t) {
          if (t === 61) {
            e.consume(t);
            return v;
          } else if (charClassificationUtils.isSpaceLike(t)) {
            e.consume(t);
            return y;
          } else {
            return b(t);
          }
        }
        function v(t) {
          if (t === null || t === 60 || t === 61 || t === 62 || t === 96) {
            return r(t);
          } else if (t === 34 || t === 39) {
            e.consume(t);
            a = t;
            return x;
          } else if (charClassificationUtils.isSpaceLike(t)) {
            e.consume(t);
            return v;
          } else {
            return function t(r) {
              if (r === null || r === 34 || r === 39 || r === 47 || r === 60 || r === 61 || r === 62 || r === 96 || charClassificationUtils.isWhitespaceOrNeg(r)) {
                return y(r);
              } else {
                e.consume(r);
                return t;
              }
            }(t);
          }
        }
        function x(t) {
          if (t === a) {
            e.consume(t);
            a = null;
            return k;
          } else if (t === null || charClassificationUtils.isInvalidChar(t)) {
            return r(t);
          } else {
            e.consume(t);
            return x;
          }
        }
        function k(e) {
          if (e === 47 || e === 62 || charClassificationUtils.isSpaceLike(e)) {
            return b(e);
          } else {
            return r(e);
          }
        }
        function w(t) {
          if (t === 62) {
            e.consume(t);
            return C;
          } else {
            return r(t);
          }
        }
        function C(t) {
          if (t === null || charClassificationUtils.isInvalidChar(t)) {
            return E(t);
          } else if (charClassificationUtils.isSpaceLike(t)) {
            e.consume(t);
            return C;
          } else {
            return r(t);
          }
        }
        function E(t) {
          if (t === 45 && n === 2) {
            e.consume(t);
            return T;
          } else if (t === 60 && n === 1) {
            e.consume(t);
            return B;
          } else if (t === 62 && n === 4) {
            e.consume(t);
            return R;
          } else if (t === 63 && n === 3) {
            e.consume(t);
            return I;
          } else if (t === 93 && n === 5) {
            e.consume(t);
            return F;
          } else if (charClassificationUtils.isInvalidChar(t) && (n === 6 || n === 7)) {
            e.exit("htmlFlowData");
            return e.check(P, N, A)(t);
          } else if (t === null || charClassificationUtils.isInvalidChar(t)) {
            e.exit("htmlFlowData");
            return A(t);
          } else {
            e.consume(t);
            return E;
          }
        }
        function A(t) {
          return e.check(V, S, N)(t);
        }
        function S(t) {
          e.enter("lineEnding");
          e.consume(t);
          e.exit("lineEnding");
          return q;
        }
        function q(t) {
          if (t === null || charClassificationUtils.isInvalidChar(t)) {
            return A(t);
          } else {
            e.enter("htmlFlowData");
            return E(t);
          }
        }
        function T(t) {
          if (t === 45) {
            e.consume(t);
            return I;
          } else {
            return E(t);
          }
        }
        function B(t) {
          if (t === 47) {
            e.consume(t);
            o = "";
            return L;
          } else {
            return E(t);
          }
        }
        function L(t) {
          if (t === 62) {
            let r = o.toLowerCase();
            if (U.includes(r)) {
              e.consume(t);
              return R;
            } else {
              return E(t);
            }
          }
          if (charClassificationUtils.isLetter(t) && o.length < 8) {
            e.consume(t);
            o += String.fromCharCode(t);
            return L;
          } else {
            return E(t);
          }
        }
        function F(t) {
          if (t === 93) {
            e.consume(t);
            return I;
          } else {
            return E(t);
          }
        }
        function I(t) {
          if (t === 62) {
            e.consume(t);
            return R;
          } else if (t === 45 && n === 2) {
            e.consume(t);
            return I;
          } else {
            return E(t);
          }
        }
        function R(t) {
          if (t === null || charClassificationUtils.isInvalidChar(t)) {
            e.exit("htmlFlowData");
            return N(t);
          } else {
            e.consume(t);
            return R;
          }
        }
        function N(r) {
          e.exit("htmlFlow");
          return t(r);
        }
      }
    },
    61: O,
    95: C,
    96: M,
    126: M
  };
  let ec = {
    38: $,
    92: G
  };
  let el = {
    [-5]: Z,
    [-4]: Z,
    [-3]: Z,
    33: K,
    38: $,
    42: et,
    60: [{
      name: "autolink",
      tokenize: function (e, t, r) {
        let n = 0;
        return function (t) {
          e.enter("autolink");
          e.enter("autolinkMarker");
          e.consume(t);
          e.exit("autolinkMarker");
          e.enter("autolinkProtocol");
          return i;
        };
        function i(t) {
          if (charClassificationUtils.isLetter(t)) {
            e.consume(t);
            return o;
          } else if (t === 64) {
            return r(t);
          } else {
            return a(t);
          }
        }
        function o(t) {
          if (t === 43 || t === 45 || t === 46 || charClassificationUtils.isAlphaNumeric(t)) {
            n = 1;
            return function t(r) {
              if (r === 58) {
                e.consume(r);
                n = 0;
                return u;
              } else if ((r === 43 || r === 45 || r === 46 || charClassificationUtils.isAlphaNumeric(r)) && n++ < 32) {
                e.consume(r);
                return t;
              } else {
                n = 0;
                return a(r);
              }
            }(t);
          } else {
            return a(t);
          }
        }
        function u(n) {
          if (n === 62) {
            e.exit("autolinkProtocol");
            e.enter("autolinkMarker");
            e.consume(n);
            e.exit("autolinkMarker");
            e.exit("autolink");
            return t;
          } else if (n === null || n === 32 || n === 60 || charClassificationUtils.isControlChar(n)) {
            return r(n);
          } else {
            e.consume(n);
            return u;
          }
        }
        function a(t) {
          if (t === 64) {
            e.consume(t);
            return c;
          } else if (charClassificationUtils.isTokenChar(t)) {
            e.consume(t);
            return a;
          } else {
            return r(t);
          }
        }
        function c(i) {
          if (charClassificationUtils.isAlphaNumeric(i)) {
            return function i(o) {
              if (o === 46) {
                e.consume(o);
                n = 0;
                return c;
              } else if (o === 62) {
                e.exit("autolinkProtocol").type = "autolinkEmail";
                e.enter("autolinkMarker");
                e.consume(o);
                e.exit("autolinkMarker");
                e.exit("autolink");
                return t;
              } else {
                return function t(o) {
                  if ((o === 45 || charClassificationUtils.isAlphaNumeric(o)) && n++ < 63) {
                    let r = o === 45 ? t : i;
                    e.consume(o);
                    return r;
                  }
                  return r(o);
                }(o);
              }
            }(i);
          } else {
            return r(i);
          }
        }
      }
    }, {
      name: "htmlText",
      tokenize: function (e, t, r) {
        let n;
        let i;
        let o;
        let u = this;
        return function (t) {
          e.enter("htmlText");
          e.enter("htmlTextData");
          e.consume(t);
          return a;
        };
        function a(t) {
          if (t === 33) {
            e.consume(t);
            return c;
          } else if (t === 47) {
            e.consume(t);
            return k;
          } else if (t === 63) {
            e.consume(t);
            return v;
          } else if (charClassificationUtils.isLetter(t)) {
            e.consume(t);
            return C;
          } else {
            return r(t);
          }
        }
        function c(t) {
          if (t === 45) {
            e.consume(t);
            return l;
          } else if (t === 91) {
            e.consume(t);
            i = 0;
            return g;
          } else if (charClassificationUtils.isLetter(t)) {
            e.consume(t);
            return y;
          } else {
            return r(t);
          }
        }
        function l(t) {
          if (t === 45) {
            e.consume(t);
            return d;
          } else {
            return r(t);
          }
        }
        function s(t) {
          if (t === null) {
            return r(t);
          } else if (t === 45) {
            e.consume(t);
            return h;
          } else if (charClassificationUtils.isInvalidChar(t)) {
            o = s;
            return F(t);
          } else {
            e.consume(t);
            return s;
          }
        }
        function h(t) {
          if (t === 45) {
            e.consume(t);
            return d;
          } else {
            return s(t);
          }
        }
        function d(e) {
          if (e === 62) {
            return L(e);
          } else if (e === 45) {
            return h(e);
          } else {
            return s(e);
          }
        }
        function g(t) {
          let n = "CDATA[";
          if (t === n.charCodeAt(i++)) {
            e.consume(t);
            if (i === n.length) {
              return m;
            } else {
              return g;
            }
          } else {
            return r(t);
          }
        }
        function m(t) {
          if (t === null) {
            return r(t);
          } else if (t === 93) {
            e.consume(t);
            return b;
          } else if (charClassificationUtils.isInvalidChar(t)) {
            o = m;
            return F(t);
          } else {
            e.consume(t);
            return m;
          }
        }
        function b(t) {
          if (t === 93) {
            e.consume(t);
            return D;
          } else {
            return m(t);
          }
        }
        function D(t) {
          if (t === 62) {
            return L(t);
          } else if (t === 93) {
            e.consume(t);
            return D;
          } else {
            return m(t);
          }
        }
        function y(t) {
          if (t === null || t === 62) {
            return L(t);
          } else if (charClassificationUtils.isInvalidChar(t)) {
            o = y;
            return F(t);
          } else {
            e.consume(t);
            return y;
          }
        }
        function v(t) {
          if (t === null) {
            return r(t);
          } else if (t === 63) {
            e.consume(t);
            return x;
          } else if (charClassificationUtils.isInvalidChar(t)) {
            o = v;
            return F(t);
          } else {
            e.consume(t);
            return v;
          }
        }
        function x(e) {
          if (e === 62) {
            return L(e);
          } else {
            return v(e);
          }
        }
        function k(t) {
          if (charClassificationUtils.isLetter(t)) {
            e.consume(t);
            return w;
          } else {
            return r(t);
          }
        }
        function w(t) {
          if (t === 45 || charClassificationUtils.isAlphaNumeric(t)) {
            e.consume(t);
            return w;
          } else {
            return function t(r) {
              if (charClassificationUtils.isInvalidChar(r)) {
                o = t;
                return F(r);
              } else if (charClassificationUtils.isSpaceLike(r)) {
                e.consume(r);
                return t;
              } else {
                return L(r);
              }
            }(t);
          }
        }
        function C(t) {
          if (t === 45 || charClassificationUtils.isAlphaNumeric(t)) {
            e.consume(t);
            return C;
          } else if (t === 47 || t === 62 || charClassificationUtils.isWhitespaceOrNeg(t)) {
            return E(t);
          } else {
            return r(t);
          }
        }
        function E(t) {
          if (t === 47) {
            e.consume(t);
            return L;
          } else if (t === 58 || t === 95 || charClassificationUtils.isLetter(t)) {
            e.consume(t);
            return A;
          } else if (charClassificationUtils.isInvalidChar(t)) {
            o = E;
            return F(t);
          } else if (charClassificationUtils.isSpaceLike(t)) {
            e.consume(t);
            return E;
          } else {
            return L(t);
          }
        }
        function A(t) {
          if (t === 45 || t === 46 || t === 58 || t === 95 || charClassificationUtils.isAlphaNumeric(t)) {
            e.consume(t);
            return A;
          } else {
            return function t(r) {
              if (r === 61) {
                e.consume(r);
                return S;
              } else if (charClassificationUtils.isInvalidChar(r)) {
                o = t;
                return F(r);
              } else if (charClassificationUtils.isSpaceLike(r)) {
                e.consume(r);
                return t;
              } else {
                return E(r);
              }
            }(t);
          }
        }
        function S(t) {
          if (t === null || t === 60 || t === 61 || t === 62 || t === 96) {
            return r(t);
          } else if (t === 34 || t === 39) {
            e.consume(t);
            n = t;
            return q;
          } else if (charClassificationUtils.isInvalidChar(t)) {
            o = S;
            return F(t);
          } else if (charClassificationUtils.isSpaceLike(t)) {
            e.consume(t);
            return S;
          } else {
            e.consume(t);
            return T;
          }
        }
        function q(t) {
          if (t === n) {
            e.consume(t);
            n = undefined;
            return B;
          } else if (t === null) {
            return r(t);
          } else if (charClassificationUtils.isInvalidChar(t)) {
            o = q;
            return F(t);
          } else {
            e.consume(t);
            return q;
          }
        }
        function T(t) {
          if (t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96) {
            return r(t);
          } else if (t === 47 || t === 62 || charClassificationUtils.isWhitespaceOrNeg(t)) {
            return E(t);
          } else {
            e.consume(t);
            return T;
          }
        }
        function B(e) {
          if (e === 47 || e === 62 || charClassificationUtils.isWhitespaceOrNeg(e)) {
            return E(e);
          } else {
            return r(e);
          }
        }
        function L(n) {
          if (n === 62) {
            e.consume(n);
            e.exit("htmlTextData");
            e.exit("htmlText");
            return t;
          } else {
            return r(n);
          }
        }
        function F(t) {
          e.exit("htmlTextData");
          e.enter("lineEnding");
          e.consume(t);
          e.exit("lineEnding");
          return I;
        }
        function I(t) {
          if (charClassificationUtils.isSpaceLike(t)) {
            return spaceLikeHandler.createSpaceHandler(e, R, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4)(t);
          } else {
            return R(t);
          }
        }
        function R(t) {
          e.enter("htmlTextData");
          return o(t);
        }
      }
    }],
    91: en,
    92: [{
      name: "hardBreakEscape",
      tokenize: function (e, t, r) {
        return function (t) {
          e.enter("hardBreakEscape");
          e.consume(t);
          return n;
        };
        function n(n) {
          if (charClassificationUtils.isInvalidChar(n)) {
            e.exit("hardBreakEscape");
            return t(n);
          } else {
            return r(n);
          }
        }
      }
    }, G],
    93: J,
    95: et,
    96: {
      name: "codeText",
      previous: function (e) {
        return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
      },
      resolve: function (e) {
        let t;
        let r;
        let n = e.length - 4;
        let i = 3;
        if ((e[3][1].type === "lineEnding" || e[i][1].type === "space") && (e[n][1].type === "lineEnding" || e[n][1].type === "space")) {
          for (t = i; ++t < n;) {
            if (e[t][1].type === "codeTextData") {
              e[i][1].type = "codeTextPadding";
              e[n][1].type = "codeTextPadding";
              i += 2;
              n -= 2;
              break;
            }
          }
        }
        t = i - 1;
        n++;
        while (++t <= n) {
          if (r === undefined) {
            if (t !== n && e[t][1].type !== "lineEnding") {
              r = t;
            }
          } else if (t === n || e[t][1].type === "lineEnding") {
            e[r][1].type = "codeTextData";
            if (t !== r + 2) {
              e[r][1].end = e[t - 1][1].end;
              e.splice(r + 2, t - r - 2);
              n -= t - r - 2;
              t = r + 2;
            }
            r = undefined;
          }
        }
        return e;
      },
      tokenize: function (e, t, r) {
        let n;
        let i;
        let o = 0;
        return function (t) {
          e.enter("codeText");
          e.enter("codeTextSequence");
          return function t(r) {
            if (r === 96) {
              e.consume(r);
              o++;
              return t;
            } else {
              e.exit("codeTextSequence");
              return u(r);
            }
          }(t);
        };
        function u(c) {
          if (c === null) {
            return r(c);
          } else if (c === 32) {
            e.enter("space");
            e.consume(c);
            e.exit("space");
            return u;
          } else if (c === 96) {
            i = e.enter("codeTextSequence");
            n = 0;
            return function r(u) {
              if (u === 96) {
                e.consume(u);
                n++;
                return r;
              } else if (n === o) {
                e.exit("codeTextSequence");
                e.exit("codeText");
                return t(u);
              } else {
                i.type = "codeTextData";
                return a(u);
              }
            }(c);
          } else if (charClassificationUtils.isInvalidChar(c)) {
            e.enter("lineEnding");
            e.consume(c);
            e.exit("lineEnding");
            return u;
          } else {
            e.enter("codeTextData");
            return a(c);
          }
        }
        function a(t) {
          if (t === null || t === 32 || t === 96 || charClassificationUtils.isInvalidChar(t)) {
            e.exit("codeTextData");
            return u(t);
          } else {
            e.consume(t);
            return a;
          }
        }
      }
    }
  };
  let es = {
    null: [et, {
      resolveAll: function (e, t) {
        let r;
        let n = -1;
        while (++n <= e.length) {
          if (r === undefined) {
            if (e[n] && e[n][1].type === "data") {
              r = n;
              n++;
            }
          } else if (!e[n] || e[n][1].type !== "data") {
            if (n !== r + 2) {
              e[r][1].end = e[n - 1][1].end;
              e.splice(r + 2, n - r - 2);
              n = r + 2;
            }
            r = undefined;
          }
        }
        return e;
      }
    }]
  };
  let ef = {
    null: [42, 95]
  };
  let ep = {
    null: []
  };
  let eh = /[\0\t\n\r]/g;
  var safeCodePointConverter = require("safe-code-point-converter") /*id: 281560*/;
  var htmlEntityDecoder = require("html-entity-decoder") /*id: 789710*/;
  var sourceLocationFormatter = require("source-location-formatter") /*id: 648255*/;
  let eb = {}.hasOwnProperty;
  function eD(e, t, r) {
    let n;
    let a;
    let c;
    let f;
    if (typeof t != "string") {
      r = t;
      t = undefined;
    }
    return function (e) {
      let t = {
        transforms: [],
        canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
        enter: {
          autolink: n(D),
          autolinkProtocol: s,
          autolinkEmail: s,
          atxHeading: n(g),
          blockQuote: n(function () {
            return {
              type: "blockquote",
              children: []
            };
          }),
          characterEscape: s,
          characterReference: s,
          codeFenced: n(d),
          codeFencedFenceInfo: i,
          codeFencedFenceMeta: i,
          codeIndented: n(d, i),
          codeText: n(function () {
            return {
              type: "inlineCode",
              value: ""
            };
          }, i),
          codeTextData: s,
          data: s,
          codeFlowValue: s,
          definition: n(function () {
            return {
              type: "definition",
              identifier: "",
              label: null,
              title: null,
              url: ""
            };
          }),
          definitionDestinationString: i,
          definitionLabelString: i,
          definitionTitleString: i,
          emphasis: n(function () {
            return {
              type: "emphasis",
              children: []
            };
          }),
          hardBreakEscape: n(m),
          hardBreakTrailing: n(m),
          htmlFlow: n(b, i),
          htmlFlowData: s,
          htmlText: n(b, i),
          htmlTextData: s,
          image: n(function () {
            return {
              type: "image",
              title: null,
              url: "",
              alt: null
            };
          }),
          label: i,
          link: n(D),
          listItem: n(function (e) {
            return {
              type: "listItem",
              spread: e._spread,
              checked: null,
              children: []
            };
          }),
          listItemValue: function (e) {
            if (this.data.expectingFirstListItemValue) {
              this.stack[this.stack.length - 2].start = Number.parseInt(this.sliceSerialize(e), 10);
              this.data.expectingFirstListItemValue = undefined;
            }
          },
          listOrdered: n(y, function () {
            this.data.expectingFirstListItemValue = true;
          }),
          listUnordered: n(y),
          paragraph: n(function () {
            return {
              type: "paragraph",
              children: []
            };
          }),
          reference: function () {
            this.data.referenceType = "collapsed";
          },
          referenceString: i,
          resourceDestinationString: i,
          resourceTitleString: i,
          setextHeading: n(g),
          strong: n(function () {
            return {
              type: "strong",
              children: []
            };
          }),
          thematicBreak: n(function () {
            return {
              type: "thematicBreak"
            };
          })
        },
        exit: {
          atxHeading: a(),
          atxHeadingSequence: function (e) {
            let t = this.stack[this.stack.length - 1];
            if (!t.depth) {
              let r = this.sliceSerialize(e).length;
              t.depth = r;
            }
          },
          autolink: a(),
          autolinkEmail: function (e) {
            f.call(this, e);
            this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e);
          },
          autolinkProtocol: function (e) {
            f.call(this, e);
            this.stack[this.stack.length - 1].url = this.sliceSerialize(e);
          },
          blockQuote: a(),
          characterEscapeValue: f,
          characterReferenceMarkerHexadecimal: h,
          characterReferenceMarkerNumeric: h,
          characterReferenceValue: function (e) {
            let t;
            let r = this.sliceSerialize(e);
            let n = this.data.characterReferenceType;
            if (n) {
              t = safeCodePointConverter.safeFromCodePoint(r, n === "characterReferenceMarkerNumeric" ? 10 : 16);
              this.data.characterReferenceType = undefined;
            } else {
              t = decodeHtmlEntityUtil.decodeHtmlEntity(r);
            }
            let i = this.stack[this.stack.length - 1];
            i.value += t;
          },
          characterReference: function (e) {
            this.stack.pop().position.end = ey(e.end);
          },
          codeFenced: a(function () {
            let e = this.resume();
            this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
            this.data.flowCodeInside = undefined;
          }),
          codeFencedFence: function () {
            if (!this.data.flowCodeInside) {
              this.buffer();
              this.data.flowCodeInside = true;
            }
          },
          codeFencedFenceInfo: function () {
            let e = this.resume();
            this.stack[this.stack.length - 1].lang = e;
          },
          codeFencedFenceMeta: function () {
            let e = this.resume();
            this.stack[this.stack.length - 1].meta = e;
          },
          codeFlowValue: f,
          codeIndented: a(function () {
            let e = this.resume();
            this.stack[this.stack.length - 1].value = e.replace(/(\r?\n|\r)$/g, "");
          }),
          codeText: a(function () {
            let e = this.resume();
            this.stack[this.stack.length - 1].value = e;
          }),
          codeTextData: f,
          data: f,
          definition: a(),
          definitionDestinationString: function () {
            let e = this.resume();
            this.stack[this.stack.length - 1].url = e;
          },
          definitionLabelString: function (e) {
            let t = this.resume();
            let r = this.stack[this.stack.length - 1];
            r.label = t;
            r.identifier = textNormalizeUpper.normalizeTextUpper(this.sliceSerialize(e)).toLowerCase();
          },
          definitionTitleString: function () {
            let e = this.resume();
            this.stack[this.stack.length - 1].title = e;
          },
          emphasis: a(),
          hardBreakEscape: a(p),
          hardBreakTrailing: a(p),
          htmlFlow: a(function () {
            let e = this.resume();
            this.stack[this.stack.length - 1].value = e;
          }),
          htmlFlowData: f,
          htmlText: a(function () {
            let e = this.resume();
            this.stack[this.stack.length - 1].value = e;
          }),
          htmlTextData: f,
          image: a(function () {
            let e = this.stack[this.stack.length - 1];
            if (this.data.inReference) {
              let t = this.data.referenceType || "shortcut";
              e.type += "Reference";
              e.referenceType = t;
              delete e.url;
              delete e.title;
            } else {
              delete e.identifier;
              delete e.label;
            }
            this.data.referenceType = undefined;
          }),
          label: function () {
            let e = this.stack[this.stack.length - 1];
            let t = this.resume();
            let r = this.stack[this.stack.length - 1];
            this.data.inReference = true;
            if (r.type === "link") {
              let t = e.children;
              r.children = t;
            } else {
              r.alt = t;
            }
          },
          labelText: function (e) {
            let t = this.sliceSerialize(e);
            let r = this.stack[this.stack.length - 2];
            r.label = htmlEntityDecoder.decodeEscapeChars(t);
            r.identifier = textNormalizeUpper.normalizeTextUpper(t).toLowerCase();
          },
          lineEnding: function (e) {
            let r = this.stack[this.stack.length - 1];
            if (this.data.atHardBreak) {
              r.children[r.children.length - 1].position.end = ey(e.end);
              this.data.atHardBreak = undefined;
              return;
            }
            if (!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(r.type)) {
              s.call(this, e);
              f.call(this, e);
            }
          },
          link: a(function () {
            let e = this.stack[this.stack.length - 1];
            if (this.data.inReference) {
              let t = this.data.referenceType || "shortcut";
              e.type += "Reference";
              e.referenceType = t;
              delete e.url;
              delete e.title;
            } else {
              delete e.identifier;
              delete e.label;
            }
            this.data.referenceType = undefined;
          }),
          listItem: a(),
          listOrdered: a(),
          listUnordered: a(),
          paragraph: a(),
          referenceString: function (e) {
            let t = this.resume();
            let r = this.stack[this.stack.length - 1];
            r.label = t;
            r.identifier = textNormalizeUpper.normalizeTextUpper(this.sliceSerialize(e)).toLowerCase();
            this.data.referenceType = "full";
          },
          resourceDestinationString: function () {
            let e = this.resume();
            this.stack[this.stack.length - 1].url = e;
          },
          resourceTitleString: function () {
            let e = this.resume();
            this.stack[this.stack.length - 1].title = e;
          },
          resource: function () {
            this.data.inReference = undefined;
          },
          setextHeading: a(function () {
            this.data.setextHeadingSlurpLineEnding = undefined;
          }),
          setextHeadingLineSequence: function (e) {
            this.stack[this.stack.length - 1].depth = this.sliceSerialize(e).codePointAt(0) === 61 ? 1 : 2;
          },
          setextHeadingText: function () {
            this.data.setextHeadingSlurpLineEnding = true;
          },
          strong: a(),
          thematicBreak: a()
        }
      };
      (function e(t, r) {
        let n = -1;
        while (++n < r.length) {
          let i = r[n];
          if (Array.isArray(i)) {
            e(t, i);
          } else {
            (function (e, t) {
              let r;
              for (r in t) {
                if (eb.call(t, r)) {
                  switch (r) {
                    case "canContainEols":
                      {
                        let n = t[r];
                        if (n) {
                          e[r].push(...n);
                        }
                        break;
                      }
                    case "transforms":
                      {
                        let n = t[r];
                        if (n) {
                          e[r].push(...n);
                        }
                        break;
                      }
                    case "enter":
                    case "exit":
                      {
                        let n = t[r];
                        if (n) {
                          Object.assign(e[r], n);
                        }
                      }
                  }
                }
              }
            })(t, i);
          }
        }
      })(t, (e || {}).mdastExtensions || []);
      let r = {};
      return function (e) {
        let n = {
          type: "root",
          children: []
        };
        let o = {
          stack: [n],
          tokenStack: [],
          config: t,
          enter: u,
          exit: c,
          buffer: i,
          resume: l,
          data: r
        };
        let a = [];
        let s = -1;
        while (++s < e.length) {
          if (e[s][1].type === "listOrdered" || e[s][1].type === "listUnordered") {
            if (e[s][0] === "enter") {
              a.push(s);
            } else {
              s = function (e, t, r) {
                let n;
                let i;
                let o;
                let u;
                let a = t - 1;
                let c = -1;
                let l = false;
                while (++a <= r) {
                  let t = e[a];
                  switch (t[1].type) {
                    case "listUnordered":
                    case "listOrdered":
                    case "blockQuote":
                      if (t[0] === "enter") {
                        c++;
                      } else {
                        c--;
                      }
                      u = undefined;
                      break;
                    case "lineEndingBlank":
                      if (t[0] === "enter") {
                        if (!!n && !u && !c && !o) {
                          o = a;
                        }
                        u = undefined;
                      }
                      break;
                    case "linePrefix":
                    case "listItemValue":
                    case "listItemMarker":
                    case "listItemPrefix":
                    case "listItemPrefixWhitespace":
                      break;
                    default:
                      u = undefined;
                  }
                  if (!c && t[0] === "enter" && t[1].type === "listItemPrefix" || c === -1 && t[0] === "exit" && (t[1].type === "listUnordered" || t[1].type === "listOrdered")) {
                    if (n) {
                      let u = a;
                      for (i = undefined; u--;) {
                        let t = e[u];
                        if (t[1].type === "lineEnding" || t[1].type === "lineEndingBlank") {
                          if (t[0] === "exit") {
                            continue;
                          }
                          if (i) {
                            e[i][1].type = "lineEndingBlank";
                            l = true;
                          }
                          t[1].type = "lineEnding";
                          i = u;
                        } else if (t[1].type === "linePrefix" || t[1].type === "blockQuotePrefix" || t[1].type === "blockQuotePrefixWhitespace" || t[1].type === "blockQuoteMarker" || t[1].type === "listItemIndent") ;else {
                          break;
                        }
                      }
                      if (o && (!i || o < i)) {
                        n._spread = true;
                      }
                      n.end = Object.assign({}, i ? e[i][1].start : t[1].end);
                      e.splice(i || a, 0, ["exit", n, t[2]]);
                      a++;
                      r++;
                    }
                    if (t[1].type === "listItemPrefix") {
                      let i = {
                        type: "listItem",
                        _spread: false,
                        start: Object.assign({}, t[1].start),
                        end: undefined
                      };
                      n = i;
                      e.splice(a, 0, ["enter", i, t[2]]);
                      a++;
                      r++;
                      o = undefined;
                      u = true;
                    }
                  }
                }
                e[t][1]._spread = l;
                return r;
              }(e, a.pop(), s);
            }
          }
        }
        for (s = -1; ++s < e.length;) {
          let r = t[e[s][0]];
          if (eb.call(r, e[s][1].type)) {
            r[e[s][1].type].call(Object.assign({
              sliceSerialize: e[s][2].sliceSerialize
            }, o), e[s][1]);
          }
        }
        if (o.tokenStack.length > 0) {
          let e = o.tokenStack[o.tokenStack.length - 1];
          (e[1] || ev).call(o, undefined, e[0]);
        }
        n.position = {
          start: ey(e.length > 0 ? e[0][1].start : {
            line: 1,
            column: 1,
            offset: 0
          }),
          end: ey(e.length > 0 ? e[e.length - 2][1].end : {
            line: 1,
            column: 1,
            offset: 0
          })
        };
        s = -1;
        while (++s < t.transforms.length) {
          n = t.transforms[s](n) || n;
        }
        return n;
      };
      function n(e, t) {
        return function (r) {
          u.call(this, e(r), r);
          if (t) {
            t.call(this, r);
          }
        };
      }
      function i() {
        this.stack.push({
          type: "fragment",
          children: []
        });
      }
      function u(e, t, r) {
        this.stack[this.stack.length - 1].children.push(e);
        this.stack.push(e);
        this.tokenStack.push([t, r || undefined]);
        e.position = {
          start: ey(t.start),
          end: undefined
        };
      }
      function a(e) {
        return function (t) {
          if (e) {
            e.call(this, t);
          }
          c.call(this, t);
        };
      }
      function c(e, t) {
        let r = this.stack.pop();
        let n = this.tokenStack.pop();
        if (n) {
          if (n[0].type !== e.type) {
            if (t) {
              t.call(this, e, n[0]);
            } else {
              (n[1] || ev).call(this, e, n[0]);
            }
          }
        } else {
          throw Error("Cannot close `" + e.type + "` (" + sourceLocationFormatter.formatLocation({
            start: e.start,
            end: e.end
          }) + "): it’s not open");
        }
        r.position.end = ey(e.end);
      }
      function l() {
        return textContentExtractor.getTextContent(this.stack.pop());
      }
      function s(e) {
        let t = this.stack[this.stack.length - 1].children;
        let r = t[t.length - 1];
        if (!r || r.type !== "text") {
          (r = {
            type: "text",
            value: ""
          }).position = {
            start: ey(e.start),
            end: undefined
          };
          t.push(r);
        }
        this.stack.push(r);
      }
      function f(e) {
        let t = this.stack.pop();
        t.value += this.sliceSerialize(e);
        t.position.end = ey(e.end);
      }
      function p() {
        this.data.atHardBreak = true;
      }
      function h(e) {
        this.data.characterReferenceType = e.type;
      }
      function d() {
        return {
          type: "code",
          lang: null,
          meta: null,
          value: ""
        };
      }
      function g() {
        return {
          type: "heading",
          depth: 0,
          children: []
        };
      }
      function m() {
        return {
          type: "break"
        };
      }
      function b() {
        return {
          type: "html",
          value: ""
        };
      }
      function D() {
        return {
          type: "link",
          title: null,
          url: "",
          children: []
        };
      }
      function y(e) {
        return {
          type: "list",
          ordered: e.type === "listOrdered",
          start: null,
          spread: e._spread,
          children: []
        };
      }
    }(r)(function (e) {
      while (!l(e));
      return e;
    }(function (e) {
      var t;
      var r;
      var n;
      var o;
      var a;
      let c = {
        constructs: mergeOrderedConfigs.mergeOrderedConfigs([i, ...((e || {}).extensions || [])]),
        content: (t = h, function (e) {
          return function (e, t, r) {
            let n = {
              _bufferIndex: -1,
              _index: 0,
              line: r && r.line || 1,
              column: r && r.column || 1,
              offset: r && r.offset || 0
            };
            let i = {};
            let o = [];
            let a = [];
            let c = [];
            let l = {
              attempt: b(function (e, t) {
                D(e, t.from);
              }),
              check: b(m),
              consume: function (e) {
                if (charClassificationUtils.isInvalidChar(e)) {
                  n.line++;
                  n.column = 1;
                  n.offset += e === -3 ? 2 : 1;
                  v();
                } else if (e !== -1) {
                  n.column++;
                  n.offset++;
                }
                if (n._bufferIndex < 0) {
                  n._index++;
                } else {
                  n._bufferIndex++;
                  if (n._bufferIndex === a[n._index].length) {
                    n._bufferIndex = -1;
                    n._index++;
                  }
                }
                s.previous = e;
              },
              enter: function (e, t) {
                let r = t || {};
                r.type = e;
                r.start = d();
                s.events.push(["enter", r, s]);
                c.push(r);
                return r;
              },
              exit: function (e) {
                let t = c.pop();
                t.end = d();
                s.events.push(["exit", t, s]);
                return t;
              },
              interrupt: b(m, {
                interrupt: true
              })
            };
            let s = {
              code: null,
              containerState: {},
              defineSkip: function (e) {
                i[e.line] = e.column;
                v();
              },
              events: [],
              now: d,
              parser: e,
              previous: null,
              sliceSerialize: function (e, t) {
                return function (e, t) {
                  let r;
                  let n = -1;
                  let i = [];
                  while (++n < e.length) {
                    let o;
                    let u = e[n];
                    if (typeof u == "string") {
                      o = u;
                    } else {
                      switch (u) {
                        case -5:
                          o = "\r";
                          break;
                        case -4:
                          o = "\n";
                          break;
                        case -3:
                          o = "\r\n";
                          break;
                        case -2:
                          o = t ? " " : "\t";
                          break;
                        case -1:
                          if (!t && r) {
                            continue;
                          }
                          o = " ";
                          break;
                        default:
                          o = String.fromCharCode(u);
                      }
                    }
                    r = u === -2;
                    i.push(o);
                  }
                  return i.join("");
                }(h(e), t);
              },
              sliceStream: h,
              write: function (e) {
                a = arraySpliceUtils.concatArrays(a, e);
                (function () {
                  let e;
                  while (n._index < a.length) {
                    let t = a[n._index];
                    if (typeof t == "string") {
                      e = n._index;
                      if (n._bufferIndex < 0) {
                        n._bufferIndex = 0;
                      }
                      while (n._index === e && n._bufferIndex < t.length) {
                        (function (e) {
                          f = f(e);
                        })(t.charCodeAt(n._bufferIndex));
                      }
                    } else {
                      (function (e) {
                        f = f(e);
                      })(t);
                    }
                  }
                })();
                if (a[a.length - 1] !== null) {
                  return [];
                } else {
                  D(t, 0);
                  s.events = resolveAllUtil.resolveAll(o, s.events, s);
                  return s.events;
                }
              }
            };
            let f = t.tokenize.call(s, l);
            if (t.resolveAll) {
              o.push(t);
            }
            return s;
            function h(e) {
              return function (e, t) {
                let r;
                let n = t.start._index;
                let i = t.start._bufferIndex;
                let o = t.end._index;
                let u = t.end._bufferIndex;
                if (n === o) {
                  r = [e[n].slice(i, u)];
                } else {
                  r = e.slice(n, o);
                  if (i > -1) {
                    let e = r[0];
                    if (typeof e == "string") {
                      r[0] = e.slice(i);
                    } else {
                      r.shift();
                    }
                  }
                  if (u > 0) {
                    r.push(e[o].slice(0, u));
                  }
                }
                return r;
              }(a, e);
            }
            function d() {
              let {
                _bufferIndex: e,
                _index: t,
                line: r,
                column: i,
                offset: o
              } = n;
              return {
                _bufferIndex: e,
                _index: t,
                line: r,
                column: i,
                offset: o
              };
            }
            function g(e) {
              f = f(e);
            }
            function m(e, t) {
              t.restore();
            }
            function b(e, t) {
              return function (r, n, i) {
                var o;
                let u;
                let a;
                let c;
                let f;
                if (Array.isArray(r)) {
                  return p(r);
                } else if ("tokenize" in r) {
                  return p([r]);
                } else {
                  o = r;
                  return function (e) {
                    let t = e !== null && o[e];
                    let r = e !== null && o.null;
                    return p([...(Array.isArray(t) ? t : t ? [t] : []), ...(Array.isArray(r) ? r : r ? [r] : [])])(e);
                  };
                }
                function p(e) {
                  u = e;
                  a = 0;
                  if (e.length === 0) {
                    return i;
                  } else {
                    return function (e) {
                      return function (r) {
                        f = y();
                        c = e;
                        if (!e.partial) {
                          s.currentConstruct = e;
                        }
                        if (e.name && s.parser.constructs.disable.null.includes(e.name)) {
                          return d(r);
                        } else {
                          return e.tokenize.call(t ? Object.assign(Object.create(s), t) : s, l, h, d)(r);
                        }
                      };
                    }(e[a]);
                  }
                }
                function h(t) {
                  e(c, f);
                  return n;
                }
                function d(e) {
                  f.restore();
                  if (++a < u.length) {
                    var r;
                    r = u[a];
                    return function (e) {
                      f = y();
                      c = r;
                      if (!r.partial) {
                        s.currentConstruct = r;
                      }
                      if (r.name && s.parser.constructs.disable.null.includes(r.name)) {
                        return d(e);
                      } else {
                        return r.tokenize.call(t ? Object.assign(Object.create(s), t) : s, l, h, d)(e);
                      }
                    };
                  }
                  return i;
                }
              };
            }
            function D(e, t) {
              if (e.resolveAll && !o.includes(e)) {
                o.push(e);
              }
              if (e.resolve) {
                arraySpliceUtils.spliceArray(s.events, t, s.events.length - t, e.resolve(s.events.slice(t), s));
              }
              if (e.resolveTo) {
                s.events = e.resolveTo(s.events, s);
              }
            }
            function y() {
              let e = d();
              let t = s.previous;
              let r = s.currentConstruct;
              let i = s.events.length;
              let o = Array.from(c);
              return {
                from: i,
                restore: function () {
                  n = e;
                  s.previous = t;
                  s.currentConstruct = r;
                  s.events.length = i;
                  c = o;
                  v();
                }
              };
            }
            function v() {
              if (n.line in i && n.column < 2) {
                n.column = i[n.line];
                n.offset += i[n.line] - 1;
              }
            }
          }(c, t, e);
        }),
        defined: [],
        document: (r = d, function (e) {
          return function (e, t, r) {
            let n = {
              _bufferIndex: -1,
              _index: 0,
              line: r && r.line || 1,
              column: r && r.column || 1,
              offset: r && r.offset || 0
            };
            let i = {};
            let o = [];
            let a = [];
            let c = [];
            let l = {
              attempt: b(function (e, t) {
                D(e, t.from);
              }),
              check: b(m),
              consume: function (e) {
                if (charClassificationUtils.isInvalidChar(e)) {
                  n.line++;
                  n.column = 1;
                  n.offset += e === -3 ? 2 : 1;
                  v();
                } else if (e !== -1) {
                  n.column++;
                  n.offset++;
                }
                if (n._bufferIndex < 0) {
                  n._index++;
                } else {
                  n._bufferIndex++;
                  if (n._bufferIndex === a[n._index].length) {
                    n._bufferIndex = -1;
                    n._index++;
                  }
                }
                s.previous = e;
              },
              enter: function (e, t) {
                let r = t || {};
                r.type = e;
                r.start = d();
                s.events.push(["enter", r, s]);
                c.push(r);
                return r;
              },
              exit: function (e) {
                let t = c.pop();
                t.end = d();
                s.events.push(["exit", t, s]);
                return t;
              },
              interrupt: b(m, {
                interrupt: true
              })
            };
            let s = {
              code: null,
              containerState: {},
              defineSkip: function (e) {
                i[e.line] = e.column;
                v();
              },
              events: [],
              now: d,
              parser: e,
              previous: null,
              sliceSerialize: function (e, t) {
                return function (e, t) {
                  let r;
                  let n = -1;
                  let i = [];
                  while (++n < e.length) {
                    let o;
                    let u = e[n];
                    if (typeof u == "string") {
                      o = u;
                    } else {
                      switch (u) {
                        case -5:
                          o = "\r";
                          break;
                        case -4:
                          o = "\n";
                          break;
                        case -3:
                          o = "\r\n";
                          break;
                        case -2:
                          o = t ? " " : "\t";
                          break;
                        case -1:
                          if (!t && r) {
                            continue;
                          }
                          o = " ";
                          break;
                        default:
                          o = String.fromCharCode(u);
                      }
                    }
                    r = u === -2;
                    i.push(o);
                  }
                  return i.join("");
                }(h(e), t);
              },
              sliceStream: h,
              write: function (e) {
                a = arraySpliceUtils.concatArrays(a, e);
                (function () {
                  let e;
                  while (n._index < a.length) {
                    let t = a[n._index];
                    if (typeof t == "string") {
                      e = n._index;
                      if (n._bufferIndex < 0) {
                        n._bufferIndex = 0;
                      }
                      while (n._index === e && n._bufferIndex < t.length) {
                        (function (e) {
                          f = f(e);
                        })(t.charCodeAt(n._bufferIndex));
                      }
                    } else {
                      (function (e) {
                        f = f(e);
                      })(t);
                    }
                  }
                })();
                if (a[a.length - 1] !== null) {
                  return [];
                } else {
                  D(t, 0);
                  s.events = resolveAllUtil.resolveAll(o, s.events, s);
                  return s.events;
                }
              }
            };
            let f = t.tokenize.call(s, l);
            if (t.resolveAll) {
              o.push(t);
            }
            return s;
            function h(e) {
              return function (e, t) {
                let r;
                let n = t.start._index;
                let i = t.start._bufferIndex;
                let o = t.end._index;
                let u = t.end._bufferIndex;
                if (n === o) {
                  r = [e[n].slice(i, u)];
                } else {
                  r = e.slice(n, o);
                  if (i > -1) {
                    let e = r[0];
                    if (typeof e == "string") {
                      r[0] = e.slice(i);
                    } else {
                      r.shift();
                    }
                  }
                  if (u > 0) {
                    r.push(e[o].slice(0, u));
                  }
                }
                return r;
              }(a, e);
            }
            function d() {
              let {
                _bufferIndex: e,
                _index: t,
                line: r,
                column: i,
                offset: o
              } = n;
              return {
                _bufferIndex: e,
                _index: t,
                line: r,
                column: i,
                offset: o
              };
            }
            function g(e) {
              f = f(e);
            }
            function m(e, t) {
              t.restore();
            }
            function b(e, t) {
              return function (r, n, i) {
                var o;
                let u;
                let a;
                let c;
                let f;
                if (Array.isArray(r)) {
                  return p(r);
                } else if ("tokenize" in r) {
                  return p([r]);
                } else {
                  o = r;
                  return function (e) {
                    let t = e !== null && o[e];
                    let r = e !== null && o.null;
                    return p([...(Array.isArray(t) ? t : t ? [t] : []), ...(Array.isArray(r) ? r : r ? [r] : [])])(e);
                  };
                }
                function p(e) {
                  u = e;
                  a = 0;
                  if (e.length === 0) {
                    return i;
                  } else {
                    return function (e) {
                      return function (r) {
                        f = y();
                        c = e;
                        if (!e.partial) {
                          s.currentConstruct = e;
                        }
                        if (e.name && s.parser.constructs.disable.null.includes(e.name)) {
                          return d(r);
                        } else {
                          return e.tokenize.call(t ? Object.assign(Object.create(s), t) : s, l, h, d)(r);
                        }
                      };
                    }(e[a]);
                  }
                }
                function h(t) {
                  e(c, f);
                  return n;
                }
                function d(e) {
                  f.restore();
                  if (++a < u.length) {
                    var r;
                    r = u[a];
                    return function (e) {
                      f = y();
                      c = r;
                      if (!r.partial) {
                        s.currentConstruct = r;
                      }
                      if (r.name && s.parser.constructs.disable.null.includes(r.name)) {
                        return d(e);
                      } else {
                        return r.tokenize.call(t ? Object.assign(Object.create(s), t) : s, l, h, d)(e);
                      }
                    };
                  }
                  return i;
                }
              };
            }
            function D(e, t) {
              if (e.resolveAll && !o.includes(e)) {
                o.push(e);
              }
              if (e.resolve) {
                arraySpliceUtils.spliceArray(s.events, t, s.events.length - t, e.resolve(s.events.slice(t), s));
              }
              if (e.resolveTo) {
                s.events = e.resolveTo(s.events, s);
              }
            }
            function y() {
              let e = d();
              let t = s.previous;
              let r = s.currentConstruct;
              let i = s.events.length;
              let o = Array.from(c);
              return {
                from: i,
                restore: function () {
                  n = e;
                  s.previous = t;
                  s.currentConstruct = r;
                  s.events.length = i;
                  c = o;
                  v();
                }
              };
            }
            function v() {
              if (n.line in i && n.column < 2) {
                n.column = i[n.line];
                n.offset += i[n.line] - 1;
              }
            }
          }(c, r, e);
        }),
        flow: (n = y, function (e) {
          return function (e, t, r) {
            let n = {
              _bufferIndex: -1,
              _index: 0,
              line: r && r.line || 1,
              column: r && r.column || 1,
              offset: r && r.offset || 0
            };
            let i = {};
            let o = [];
            let a = [];
            let c = [];
            let l = {
              attempt: b(function (e, t) {
                D(e, t.from);
              }),
              check: b(m),
              consume: function (e) {
                if (charClassificationUtils.isInvalidChar(e)) {
                  n.line++;
                  n.column = 1;
                  n.offset += e === -3 ? 2 : 1;
                  v();
                } else if (e !== -1) {
                  n.column++;
                  n.offset++;
                }
                if (n._bufferIndex < 0) {
                  n._index++;
                } else {
                  n._bufferIndex++;
                  if (n._bufferIndex === a[n._index].length) {
                    n._bufferIndex = -1;
                    n._index++;
                  }
                }
                s.previous = e;
              },
              enter: function (e, t) {
                let r = t || {};
                r.type = e;
                r.start = d();
                s.events.push(["enter", r, s]);
                c.push(r);
                return r;
              },
              exit: function (e) {
                let t = c.pop();
                t.end = d();
                s.events.push(["exit", t, s]);
                return t;
              },
              interrupt: b(m, {
                interrupt: true
              })
            };
            let s = {
              code: null,
              containerState: {},
              defineSkip: function (e) {
                i[e.line] = e.column;
                v();
              },
              events: [],
              now: d,
              parser: e,
              previous: null,
              sliceSerialize: function (e, t) {
                return function (e, t) {
                  let r;
                  let n = -1;
                  let i = [];
                  while (++n < e.length) {
                    let o;
                    let u = e[n];
                    if (typeof u == "string") {
                      o = u;
                    } else {
                      switch (u) {
                        case -5:
                          o = "\r";
                          break;
                        case -4:
                          o = "\n";
                          break;
                        case -3:
                          o = "\r\n";
                          break;
                        case -2:
                          o = t ? " " : "\t";
                          break;
                        case -1:
                          if (!t && r) {
                            continue;
                          }
                          o = " ";
                          break;
                        default:
                          o = String.fromCharCode(u);
                      }
                    }
                    r = u === -2;
                    i.push(o);
                  }
                  return i.join("");
                }(h(e), t);
              },
              sliceStream: h,
              write: function (e) {
                a = arraySpliceUtils.concatArrays(a, e);
                (function () {
                  let e;
                  while (n._index < a.length) {
                    let t = a[n._index];
                    if (typeof t == "string") {
                      e = n._index;
                      if (n._bufferIndex < 0) {
                        n._bufferIndex = 0;
                      }
                      while (n._index === e && n._bufferIndex < t.length) {
                        (function (e) {
                          f = f(e);
                        })(t.charCodeAt(n._bufferIndex));
                      }
                    } else {
                      (function (e) {
                        f = f(e);
                      })(t);
                    }
                  }
                })();
                if (a[a.length - 1] !== null) {
                  return [];
                } else {
                  D(t, 0);
                  s.events = resolveAllUtil.resolveAll(o, s.events, s);
                  return s.events;
                }
              }
            };
            let f = t.tokenize.call(s, l);
            if (t.resolveAll) {
              o.push(t);
            }
            return s;
            function h(e) {
              return function (e, t) {
                let r;
                let n = t.start._index;
                let i = t.start._bufferIndex;
                let o = t.end._index;
                let u = t.end._bufferIndex;
                if (n === o) {
                  r = [e[n].slice(i, u)];
                } else {
                  r = e.slice(n, o);
                  if (i > -1) {
                    let e = r[0];
                    if (typeof e == "string") {
                      r[0] = e.slice(i);
                    } else {
                      r.shift();
                    }
                  }
                  if (u > 0) {
                    r.push(e[o].slice(0, u));
                  }
                }
                return r;
              }(a, e);
            }
            function d() {
              let {
                _bufferIndex: e,
                _index: t,
                line: r,
                column: i,
                offset: o
              } = n;
              return {
                _bufferIndex: e,
                _index: t,
                line: r,
                column: i,
                offset: o
              };
            }
            function g(e) {
              f = f(e);
            }
            function m(e, t) {
              t.restore();
            }
            function b(e, t) {
              return function (r, n, i) {
                var o;
                let u;
                let a;
                let c;
                let f;
                if (Array.isArray(r)) {
                  return p(r);
                } else if ("tokenize" in r) {
                  return p([r]);
                } else {
                  o = r;
                  return function (e) {
                    let t = e !== null && o[e];
                    let r = e !== null && o.null;
                    return p([...(Array.isArray(t) ? t : t ? [t] : []), ...(Array.isArray(r) ? r : r ? [r] : [])])(e);
                  };
                }
                function p(e) {
                  u = e;
                  a = 0;
                  if (e.length === 0) {
                    return i;
                  } else {
                    return function (e) {
                      return function (r) {
                        f = y();
                        c = e;
                        if (!e.partial) {
                          s.currentConstruct = e;
                        }
                        if (e.name && s.parser.constructs.disable.null.includes(e.name)) {
                          return d(r);
                        } else {
                          return e.tokenize.call(t ? Object.assign(Object.create(s), t) : s, l, h, d)(r);
                        }
                      };
                    }(e[a]);
                  }
                }
                function h(t) {
                  e(c, f);
                  return n;
                }
                function d(e) {
                  f.restore();
                  if (++a < u.length) {
                    var r;
                    r = u[a];
                    return function (e) {
                      f = y();
                      c = r;
                      if (!r.partial) {
                        s.currentConstruct = r;
                      }
                      if (r.name && s.parser.constructs.disable.null.includes(r.name)) {
                        return d(e);
                      } else {
                        return r.tokenize.call(t ? Object.assign(Object.create(s), t) : s, l, h, d)(e);
                      }
                    };
                  }
                  return i;
                }
              };
            }
            function D(e, t) {
              if (e.resolveAll && !o.includes(e)) {
                o.push(e);
              }
              if (e.resolve) {
                arraySpliceUtils.spliceArray(s.events, t, s.events.length - t, e.resolve(s.events.slice(t), s));
              }
              if (e.resolveTo) {
                s.events = e.resolveTo(s.events, s);
              }
            }
            function y() {
              let e = d();
              let t = s.previous;
              let r = s.currentConstruct;
              let i = s.events.length;
              let o = Array.from(c);
              return {
                from: i,
                restore: function () {
                  n = e;
                  s.previous = t;
                  s.currentConstruct = r;
                  s.events.length = i;
                  c = o;
                  v();
                }
              };
            }
            function v() {
              if (n.line in i && n.column < 2) {
                n.column = i[n.line];
                n.offset += i[n.line] - 1;
              }
            }
          }(c, n, e);
        }),
        lazy: {},
        string: (o = v, function (e) {
          return function (e, t, r) {
            let n = {
              _bufferIndex: -1,
              _index: 0,
              line: r && r.line || 1,
              column: r && r.column || 1,
              offset: r && r.offset || 0
            };
            let i = {};
            let o = [];
            let a = [];
            let c = [];
            let l = {
              attempt: b(function (e, t) {
                D(e, t.from);
              }),
              check: b(m),
              consume: function (e) {
                if (charClassificationUtils.isInvalidChar(e)) {
                  n.line++;
                  n.column = 1;
                  n.offset += e === -3 ? 2 : 1;
                  v();
                } else if (e !== -1) {
                  n.column++;
                  n.offset++;
                }
                if (n._bufferIndex < 0) {
                  n._index++;
                } else {
                  n._bufferIndex++;
                  if (n._bufferIndex === a[n._index].length) {
                    n._bufferIndex = -1;
                    n._index++;
                  }
                }
                s.previous = e;
              },
              enter: function (e, t) {
                let r = t || {};
                r.type = e;
                r.start = d();
                s.events.push(["enter", r, s]);
                c.push(r);
                return r;
              },
              exit: function (e) {
                let t = c.pop();
                t.end = d();
                s.events.push(["exit", t, s]);
                return t;
              },
              interrupt: b(m, {
                interrupt: true
              })
            };
            let s = {
              code: null,
              containerState: {},
              defineSkip: function (e) {
                i[e.line] = e.column;
                v();
              },
              events: [],
              now: d,
              parser: e,
              previous: null,
              sliceSerialize: function (e, t) {
                return function (e, t) {
                  let r;
                  let n = -1;
                  let i = [];
                  while (++n < e.length) {
                    let o;
                    let u = e[n];
                    if (typeof u == "string") {
                      o = u;
                    } else {
                      switch (u) {
                        case -5:
                          o = "\r";
                          break;
                        case -4:
                          o = "\n";
                          break;
                        case -3:
                          o = "\r\n";
                          break;
                        case -2:
                          o = t ? " " : "\t";
                          break;
                        case -1:
                          if (!t && r) {
                            continue;
                          }
                          o = " ";
                          break;
                        default:
                          o = String.fromCharCode(u);
                      }
                    }
                    r = u === -2;
                    i.push(o);
                  }
                  return i.join("");
                }(h(e), t);
              },
              sliceStream: h,
              write: function (e) {
                a = arraySpliceUtils.concatArrays(a, e);
                (function () {
                  let e;
                  while (n._index < a.length) {
                    let t = a[n._index];
                    if (typeof t == "string") {
                      e = n._index;
                      if (n._bufferIndex < 0) {
                        n._bufferIndex = 0;
                      }
                      while (n._index === e && n._bufferIndex < t.length) {
                        (function (e) {
                          f = f(e);
                        })(t.charCodeAt(n._bufferIndex));
                      }
                    } else {
                      (function (e) {
                        f = f(e);
                      })(t);
                    }
                  }
                })();
                if (a[a.length - 1] !== null) {
                  return [];
                } else {
                  D(t, 0);
                  s.events = resolveAllUtil.resolveAll(o, s.events, s);
                  return s.events;
                }
              }
            };
            let f = t.tokenize.call(s, l);
            if (t.resolveAll) {
              o.push(t);
            }
            return s;
            function h(e) {
              return function (e, t) {
                let r;
                let n = t.start._index;
                let i = t.start._bufferIndex;
                let o = t.end._index;
                let u = t.end._bufferIndex;
                if (n === o) {
                  r = [e[n].slice(i, u)];
                } else {
                  r = e.slice(n, o);
                  if (i > -1) {
                    let e = r[0];
                    if (typeof e == "string") {
                      r[0] = e.slice(i);
                    } else {
                      r.shift();
                    }
                  }
                  if (u > 0) {
                    r.push(e[o].slice(0, u));
                  }
                }
                return r;
              }(a, e);
            }
            function d() {
              let {
                _bufferIndex: e,
                _index: t,
                line: r,
                column: i,
                offset: o
              } = n;
              return {
                _bufferIndex: e,
                _index: t,
                line: r,
                column: i,
                offset: o
              };
            }
            function g(e) {
              f = f(e);
            }
            function m(e, t) {
              t.restore();
            }
            function b(e, t) {
              return function (r, n, i) {
                var o;
                let u;
                let a;
                let c;
                let f;
                if (Array.isArray(r)) {
                  return p(r);
                } else if ("tokenize" in r) {
                  return p([r]);
                } else {
                  o = r;
                  return function (e) {
                    let t = e !== null && o[e];
                    let r = e !== null && o.null;
                    return p([...(Array.isArray(t) ? t : t ? [t] : []), ...(Array.isArray(r) ? r : r ? [r] : [])])(e);
                  };
                }
                function p(e) {
                  u = e;
                  a = 0;
                  if (e.length === 0) {
                    return i;
                  } else {
                    return function (e) {
                      return function (r) {
                        f = y();
                        c = e;
                        if (!e.partial) {
                          s.currentConstruct = e;
                        }
                        if (e.name && s.parser.constructs.disable.null.includes(e.name)) {
                          return d(r);
                        } else {
                          return e.tokenize.call(t ? Object.assign(Object.create(s), t) : s, l, h, d)(r);
                        }
                      };
                    }(e[a]);
                  }
                }
                function h(t) {
                  e(c, f);
                  return n;
                }
                function d(e) {
                  f.restore();
                  if (++a < u.length) {
                    var r;
                    r = u[a];
                    return function (e) {
                      f = y();
                      c = r;
                      if (!r.partial) {
                        s.currentConstruct = r;
                      }
                      if (r.name && s.parser.constructs.disable.null.includes(r.name)) {
                        return d(e);
                      } else {
                        return r.tokenize.call(t ? Object.assign(Object.create(s), t) : s, l, h, d)(e);
                      }
                    };
                  }
                  return i;
                }
              };
            }
            function D(e, t) {
              if (e.resolveAll && !o.includes(e)) {
                o.push(e);
              }
              if (e.resolve) {
                arraySpliceUtils.spliceArray(s.events, t, s.events.length - t, e.resolve(s.events.slice(t), s));
              }
              if (e.resolveTo) {
                s.events = e.resolveTo(s.events, s);
              }
            }
            function y() {
              let e = d();
              let t = s.previous;
              let r = s.currentConstruct;
              let i = s.events.length;
              let o = Array.from(c);
              return {
                from: i,
                restore: function () {
                  n = e;
                  s.previous = t;
                  s.currentConstruct = r;
                  s.events.length = i;
                  c = o;
                  v();
                }
              };
            }
            function v() {
              if (n.line in i && n.column < 2) {
                n.column = i[n.line];
                n.offset += i[n.line] - 1;
              }
            }
          }(c, o, e);
        }),
        text: (a = x, function (e) {
          return function (e, t, r) {
            let n = {
              _bufferIndex: -1,
              _index: 0,
              line: r && r.line || 1,
              column: r && r.column || 1,
              offset: r && r.offset || 0
            };
            let i = {};
            let o = [];
            let a = [];
            let c = [];
            let l = {
              attempt: b(function (e, t) {
                D(e, t.from);
              }),
              check: b(m),
              consume: function (e) {
                if (charClassificationUtils.isInvalidChar(e)) {
                  n.line++;
                  n.column = 1;
                  n.offset += e === -3 ? 2 : 1;
                  v();
                } else if (e !== -1) {
                  n.column++;
                  n.offset++;
                }
                if (n._bufferIndex < 0) {
                  n._index++;
                } else {
                  n._bufferIndex++;
                  if (n._bufferIndex === a[n._index].length) {
                    n._bufferIndex = -1;
                    n._index++;
                  }
                }
                s.previous = e;
              },
              enter: function (e, t) {
                let r = t || {};
                r.type = e;
                r.start = d();
                s.events.push(["enter", r, s]);
                c.push(r);
                return r;
              },
              exit: function (e) {
                let t = c.pop();
                t.end = d();
                s.events.push(["exit", t, s]);
                return t;
              },
              interrupt: b(m, {
                interrupt: true
              })
            };
            let s = {
              code: null,
              containerState: {},
              defineSkip: function (e) {
                i[e.line] = e.column;
                v();
              },
              events: [],
              now: d,
              parser: e,
              previous: null,
              sliceSerialize: function (e, t) {
                return function (e, t) {
                  let r;
                  let n = -1;
                  let i = [];
                  while (++n < e.length) {
                    let o;
                    let u = e[n];
                    if (typeof u == "string") {
                      o = u;
                    } else {
                      switch (u) {
                        case -5:
                          o = "\r";
                          break;
                        case -4:
                          o = "\n";
                          break;
                        case -3:
                          o = "\r\n";
                          break;
                        case -2:
                          o = t ? " " : "\t";
                          break;
                        case -1:
                          if (!t && r) {
                            continue;
                          }
                          o = " ";
                          break;
                        default:
                          o = String.fromCharCode(u);
                      }
                    }
                    r = u === -2;
                    i.push(o);
                  }
                  return i.join("");
                }(h(e), t);
              },
              sliceStream: h,
              write: function (e) {
                a = arraySpliceUtils.concatArrays(a, e);
                (function () {
                  let e;
                  while (n._index < a.length) {
                    let t = a[n._index];
                    if (typeof t == "string") {
                      e = n._index;
                      if (n._bufferIndex < 0) {
                        n._bufferIndex = 0;
                      }
                      while (n._index === e && n._bufferIndex < t.length) {
                        (function (e) {
                          f = f(e);
                        })(t.charCodeAt(n._bufferIndex));
                      }
                    } else {
                      (function (e) {
                        f = f(e);
                      })(t);
                    }
                  }
                })();
                if (a[a.length - 1] !== null) {
                  return [];
                } else {
                  D(t, 0);
                  s.events = resolveAllUtil.resolveAll(o, s.events, s);
                  return s.events;
                }
              }
            };
            let f = t.tokenize.call(s, l);
            if (t.resolveAll) {
              o.push(t);
            }
            return s;
            function h(e) {
              return function (e, t) {
                let r;
                let n = t.start._index;
                let i = t.start._bufferIndex;
                let o = t.end._index;
                let u = t.end._bufferIndex;
                if (n === o) {
                  r = [e[n].slice(i, u)];
                } else {
                  r = e.slice(n, o);
                  if (i > -1) {
                    let e = r[0];
                    if (typeof e == "string") {
                      r[0] = e.slice(i);
                    } else {
                      r.shift();
                    }
                  }
                  if (u > 0) {
                    r.push(e[o].slice(0, u));
                  }
                }
                return r;
              }(a, e);
            }
            function d() {
              let {
                _bufferIndex: e,
                _index: t,
                line: r,
                column: i,
                offset: o
              } = n;
              return {
                _bufferIndex: e,
                _index: t,
                line: r,
                column: i,
                offset: o
              };
            }
            function g(e) {
              f = f(e);
            }
            function m(e, t) {
              t.restore();
            }
            function b(e, t) {
              return function (r, n, i) {
                var o;
                let u;
                let a;
                let c;
                let f;
                if (Array.isArray(r)) {
                  return p(r);
                } else if ("tokenize" in r) {
                  return p([r]);
                } else {
                  o = r;
                  return function (e) {
                    let t = e !== null && o[e];
                    let r = e !== null && o.null;
                    return p([...(Array.isArray(t) ? t : t ? [t] : []), ...(Array.isArray(r) ? r : r ? [r] : [])])(e);
                  };
                }
                function p(e) {
                  u = e;
                  a = 0;
                  if (e.length === 0) {
                    return i;
                  } else {
                    return function (e) {
                      return function (r) {
                        f = y();
                        c = e;
                        if (!e.partial) {
                          s.currentConstruct = e;
                        }
                        if (e.name && s.parser.constructs.disable.null.includes(e.name)) {
                          return d(r);
                        } else {
                          return e.tokenize.call(t ? Object.assign(Object.create(s), t) : s, l, h, d)(r);
                        }
                      };
                    }(e[a]);
                  }
                }
                function h(t) {
                  e(c, f);
                  return n;
                }
                function d(e) {
                  f.restore();
                  if (++a < u.length) {
                    var r;
                    r = u[a];
                    return function (e) {
                      f = y();
                      c = r;
                      if (!r.partial) {
                        s.currentConstruct = r;
                      }
                      if (r.name && s.parser.constructs.disable.null.includes(r.name)) {
                        return d(e);
                      } else {
                        return r.tokenize.call(t ? Object.assign(Object.create(s), t) : s, l, h, d)(e);
                      }
                    };
                  }
                  return i;
                }
              };
            }
            function D(e, t) {
              if (e.resolveAll && !o.includes(e)) {
                o.push(e);
              }
              if (e.resolve) {
                arraySpliceUtils.spliceArray(s.events, t, s.events.length - t, e.resolve(s.events.slice(t), s));
              }
              if (e.resolveTo) {
                s.events = e.resolveTo(s.events, s);
              }
            }
            function y() {
              let e = d();
              let t = s.previous;
              let r = s.currentConstruct;
              let i = s.events.length;
              let o = Array.from(c);
              return {
                from: i,
                restore: function () {
                  n = e;
                  s.previous = t;
                  s.currentConstruct = r;
                  s.events.length = i;
                  c = o;
                  v();
                }
              };
            }
            function v() {
              if (n.line in i && n.column < 2) {
                n.column = i[n.line];
                n.offset += i[n.line] - 1;
              }
            }
          }(c, a, e);
        })
      };
      return c;
    }(r).document().write((a = 1, c = "", f = true, function (e, t, r) {
      let i;
      let o;
      let u;
      let l;
      let s;
      let p = [];
      e = c + (typeof e == "string" ? e.toString() : new TextDecoder(t || undefined).decode(e));
      u = 0;
      c = "";
      if (f) {
        if (e.charCodeAt(0) === 65279) {
          u++;
        }
        f = undefined;
      }
      while (u < e.length) {
        eh.lastIndex = u;
        l = (i = eh.exec(e)) && i.index !== undefined ? i.index : e.length;
        s = e.charCodeAt(l);
        if (!i) {
          c = e.slice(u);
          break;
        }
        if (s === 10 && u === l && n) {
          p.push(-3);
          n = undefined;
        } else {
          if (n) {
            p.push(-5);
            n = undefined;
          }
          if (u < l) {
            p.push(e.slice(u, l));
            a += l - u;
          }
          switch (s) {
            case 0:
              p.push(65533);
              a++;
              break;
            case 9:
              o = Math.ceil(a / 4) * 4;
              p.push(-2);
              while (a++ < o) {
                p.push(-1);
              }
              break;
            case 10:
              p.push(-4);
              a = 1;
              break;
            default:
              n = true;
              a = 1;
          }
        }
        u = l + 1;
      }
      if (r) {
        if (n) {
          p.push(-5);
        }
        if (c) {
          p.push(c);
        }
        p.push(null);
      }
      return p;
    })(e, t, true))));
  }
  function ey(e) {
    return {
      line: e.line,
      column: e.column,
      offset: e.offset
    };
  }
  function ev(e, t) {
    if (e) {
      throw Error("Cannot close `" + e.type + "` (" + sourceLocationFormatter.formatLocation({
        start: e.start,
        end: e.end
      }) + "): a different token (`" + t.type + "`, " + sourceLocationFormatter.formatLocation({
        start: t.start,
        end: t.end
      }) + ") is open");
    }
    throw Error("Cannot close document, a token (`" + t.type + "`, " + sourceLocationFormatter.formatLocation({
      start: t.start,
      end: t.end
    }) + ") is still open");
  }
  require.d(exports, {
    parseMarkdown: function () {
      return eD;
    }
  });
  require.r(i);
  require.d(i, {
    attentionMarkers: function () {
      return ef;
    },
    contentInitial: function () {
      return eo;
    },
    disable: function () {
      return ep;
    },
    document: function () {
      return ei;
    },
    flow: function () {
      return ea;
    },
    flowInitial: function () {
      return eu;
    },
    insideSpan: function () {
      return es;
    },
    string: function () {
      return ec;
    },
    text: function () {
      return el;
    }
  });
}