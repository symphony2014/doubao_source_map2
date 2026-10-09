// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'strikethroughSyntax'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 999380
         */
module.exports = function (module, exports, require) {
  var arraySpliceUtils = require("array-splice-utils") /*id: 511403*/;
  var charTokenTypeClassifier = require("char-token-type-classifier") /*id: 967710*/;
  var resolveAllUtil = require("resolve-all-util") /*id: 221174*/;
  function u(e) {
    let t = (e || {}).singleTilde;
    let r = {
      name: "strikethrough",
      tokenize: function (e, r, n) {
        let o = this.previous;
        let u = this.events;
        let a = 0;
        return function (c) {
          if (o === 126 && u[u.length - 1][1].type !== "characterEscape") {
            return n(c);
          } else {
            e.enter("strikethroughSequenceTemporary");
            return function u(c) {
              let l = charTokenTypeClassifier.getCharTokenType(o);
              if (c === 126) {
                if (a > 1) {
                  return n(c);
                } else {
                  e.consume(c);
                  a++;
                  return u;
                }
              }
              if (a < 2 && !t) {
                return n(c);
              }
              let s = e.exit("strikethroughSequenceTemporary");
              let f = charTokenTypeClassifier.getCharTokenType(c);
              s._open = !f || f === 2 && !!l;
              s._close = !l || l === 2 && !!f;
              return r(c);
            }(c);
          }
        };
      },
      resolveAll: function (e, t) {
        let r = -1;
        while (++r < e.length) {
          if (e[r][0] === "enter" && e[r][1].type === "strikethroughSequenceTemporary" && e[r][1]._close) {
            let i = r;
            while (i--) {
              if (e[i][0] === "exit" && e[i][1].type === "strikethroughSequenceTemporary" && e[i][1]._open && e[r][1].end.offset - e[r][1].start.offset == e[i][1].end.offset - e[i][1].start.offset) {
                e[r][1].type = "strikethroughSequence";
                e[i][1].type = "strikethroughSequence";
                let u = {
                  type: "strikethrough",
                  start: Object.assign({}, e[i][1].start),
                  end: Object.assign({}, e[r][1].end)
                };
                let a = {
                  type: "strikethroughText",
                  start: Object.assign({}, e[i][1].end),
                  end: Object.assign({}, e[r][1].start)
                };
                let c = [["enter", u, t], ["enter", e[i][1], t], ["exit", e[i][1], t], ["enter", a, t]];
                let l = t.parser.constructs.insideSpan.null;
                if (l) {
                  arraySpliceUtils.spliceArray(c, c.length, 0, resolveAllUtil.resolveAll(l, e.slice(i + 1, r), t));
                }
                arraySpliceUtils.spliceArray(c, c.length, 0, [["exit", a, t], ["enter", e[r][1], t], ["exit", e[r][1], t], ["exit", u, t]]);
                arraySpliceUtils.spliceArray(e, i - 1, r - i + 3, c);
                r = i + c.length - 2;
                break;
              }
            }
          }
        }
        for (r = -1; ++r < e.length;) {
          if (e[r][1].type === "strikethroughSequenceTemporary") {
            e[r][1].type = "data";
          }
        }
        return e;
      }
    };
    if (t == null) {
      t = true;
    }
    return {
      text: {
        126: r
      },
      insideSpan: {
        null: [r]
      },
      attentionMarkers: {
        null: [126]
      }
    };
  }
  require.d(exports, {
    strikethroughSyntax: function () {
      return u;
    }
  });
}