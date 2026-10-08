// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'gfmFootnoteExtension'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 546103
         */
module.exports = function (module, exports, require) {
  var spaceTokenizerUtils = require("space-tokenizer-utils") /*id: 349997*/;
  var spaceLikeHandler = require("space-like-handler") /*id: 784097*/;
  var charClassificationUtils = require("char-classification-utils") /*id: 140430*/;
  var textNormalizeUpper = require("text-normalize-upper") /*id: 523800*/;
  let a = {
    tokenize: function (e, t, r) {
      let n = this;
      return spaceLikeHandler.createSpaceHandler(e, function (e) {
        let i = n.events[n.events.length - 1];
        if (i && i[1].type === "gfmFootnoteDefinitionIndent" && i[2].sliceSerialize(i[1], true).length === 4) {
          return t(e);
        } else {
          return r(e);
        }
      }, "gfmFootnoteDefinitionIndent", 5);
    },
    partial: true
  };
  function c() {
    return {
      document: {
        91: {
          name: "gfmFootnoteDefinition",
          tokenize: p,
          continuation: {
            tokenize: h
          },
          exit: d
        }
      },
      text: {
        91: {
          name: "gfmFootnoteCall",
          tokenize: f
        },
        93: {
          name: "gfmPotentialFootnoteCall",
          add: "after",
          tokenize: l,
          resolveTo: s
        }
      }
    };
  }
  function l(e, t, r) {
    let n;
    let i = this;
    let o = i.events.length;
    let a = i.parser.gfmFootnotes ||= [];
    while (o--) {
      let e = i.events[o][1];
      if (e.type === "labelImage") {
        n = e;
        break;
      }
      if (e.type === "gfmFootnoteCall" || e.type === "labelLink" || e.type === "label" || e.type === "image" || e.type === "link") {
        break;
      }
    }
    return function (o) {
      if (!n || !n._balanced) {
        return r(o);
      }
      let c = textNormalizeUpper.normalizeTextUpper(i.sliceSerialize({
        start: n.end,
        end: i.now()
      }));
      if (c.codePointAt(0) === 94 && a.includes(c.slice(1))) {
        e.enter("gfmFootnoteCallLabelMarker");
        e.consume(o);
        e.exit("gfmFootnoteCallLabelMarker");
        return t(o);
      } else {
        return r(o);
      }
    };
  }
  function s(e, t) {
    let r = e.length;
    while (r--) {
      if (e[r][1].type === "labelImage" && e[r][0] === "enter") {
        e[r][1];
        break;
      }
    }
    e[r + 1][1].type = "data";
    e[r + 3][1].type = "gfmFootnoteCallLabelMarker";
    let n = {
      type: "gfmFootnoteCall",
      start: Object.assign({}, e[r + 3][1].start),
      end: Object.assign({}, e[e.length - 1][1].end)
    };
    let i = {
      type: "gfmFootnoteCallMarker",
      start: Object.assign({}, e[r + 3][1].end),
      end: Object.assign({}, e[r + 3][1].end)
    };
    i.end.column++;
    i.end.offset++;
    i.end._bufferIndex++;
    let o = {
      type: "gfmFootnoteCallString",
      start: Object.assign({}, i.end),
      end: Object.assign({}, e[e.length - 1][1].start)
    };
    let u = {
      type: "chunkString",
      contentType: "string",
      start: Object.assign({}, o.start),
      end: Object.assign({}, o.end)
    };
    let a = [e[r + 1], e[r + 2], ["enter", n, t], e[r + 3], e[r + 4], ["enter", i, t], ["exit", i, t], ["enter", o, t], ["enter", u, t], ["exit", u, t], ["exit", o, t], e[e.length - 2], e[e.length - 1], ["exit", n, t]];
    e.splice(r, e.length - r + 1, ...a);
    return e;
  }
  function f(e, t, r) {
    let n;
    let i = this;
    let a = i.parser.gfmFootnotes ||= [];
    let c = 0;
    return function (t) {
      e.enter("gfmFootnoteCall");
      e.enter("gfmFootnoteCallLabelMarker");
      e.consume(t);
      e.exit("gfmFootnoteCallLabelMarker");
      return l;
    };
    function l(t) {
      if (t !== 94) {
        return r(t);
      } else {
        e.enter("gfmFootnoteCallMarker");
        e.consume(t);
        e.exit("gfmFootnoteCallMarker");
        e.enter("gfmFootnoteCallString");
        e.enter("chunkString").contentType = "string";
        return s;
      }
    }
    function s(l) {
      if (c > 999 || l === 93 && !n || l === null || l === 91 || charClassificationUtils.isWhitespaceOrNeg(l)) {
        return r(l);
      }
      if (l === 93) {
        e.exit("chunkString");
        let n = e.exit("gfmFootnoteCallString");
        if (a.includes(textNormalizeUpper.normalizeTextUpper(i.sliceSerialize(n)))) {
          e.enter("gfmFootnoteCallLabelMarker");
          e.consume(l);
          e.exit("gfmFootnoteCallLabelMarker");
          e.exit("gfmFootnoteCall");
          return t;
        } else {
          return r(l);
        }
      }
      if (!charClassificationUtils.isWhitespaceOrNeg(l)) {
        n = true;
      }
      c++;
      e.consume(l);
      if (l === 92) {
        return f;
      } else {
        return s;
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
  function p(e, t, r) {
    let n;
    let a;
    let c = this;
    let l = c.parser.gfmFootnotes ||= [];
    let s = 0;
    return function (t) {
      e.enter("gfmFootnoteDefinition")._container = true;
      e.enter("gfmFootnoteDefinitionLabel");
      e.enter("gfmFootnoteDefinitionLabelMarker");
      e.consume(t);
      e.exit("gfmFootnoteDefinitionLabelMarker");
      return f;
    };
    function f(t) {
      if (t === 94) {
        e.enter("gfmFootnoteDefinitionMarker");
        e.consume(t);
        e.exit("gfmFootnoteDefinitionMarker");
        e.enter("gfmFootnoteDefinitionLabelString");
        e.enter("chunkString").contentType = "string";
        return p;
      } else {
        return r(t);
      }
    }
    function p(t) {
      if (s > 999 || t === 93 && !a || t === null || t === 91 || charClassificationUtils.isWhitespaceOrNeg(t)) {
        return r(t);
      }
      if (t === 93) {
        e.exit("chunkString");
        let r = e.exit("gfmFootnoteDefinitionLabelString");
        n = textNormalizeUpper.normalizeTextUpper(c.sliceSerialize(r));
        e.enter("gfmFootnoteDefinitionLabelMarker");
        e.consume(t);
        e.exit("gfmFootnoteDefinitionLabelMarker");
        e.exit("gfmFootnoteDefinitionLabel");
        return d;
      }
      if (!charClassificationUtils.isWhitespaceOrNeg(t)) {
        a = true;
      }
      s++;
      e.consume(t);
      if (t === 92) {
        return h;
      } else {
        return p;
      }
    }
    function h(t) {
      if (t === 91 || t === 92 || t === 93) {
        e.consume(t);
        s++;
        return p;
      } else {
        return p(t);
      }
    }
    function d(t) {
      if (t === 58) {
        e.enter("definitionMarker");
        e.consume(t);
        e.exit("definitionMarker");
        if (!l.includes(n)) {
          l.push(n);
        }
        return spaceLikeHandler.createSpaceHandler(e, g, "gfmFootnoteDefinitionWhitespace");
      } else {
        return r(t);
      }
    }
    function g(e) {
      return t(e);
    }
  }
  function h(e, t, r) {
    return e.check(spaceTokenizerUtils.spaceTokenizer, t, e.attempt(a, t, r));
  }
  function d(e) {
    e.exit("gfmFootnoteDefinition");
  }
  require.d(exports, {
    gfmFootnoteExtension: function () {
      return c;
    }
  });
}