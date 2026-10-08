// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q$' to 'extractBlockText'
// - Renamed export 'Rn' to 'getDocumentWordCount'
// - Renamed export 'pk' to 'traverseBlockText'
// - Renamed export 'sA' to 'countTextCharsAndWords'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 813142
         */
module.exports = function (module, exports, require) {
  var r;
  var emojiPatternRegex = require("emoji-pattern-regex") /*id: 512417*/;
  var docxCaptionTextResolver = require("docx-caption-text-resolver") /*id: 811941*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  let c = "<pure_text>";
  function d(e, i, n) {
    let r = e.getBlockStructByBlockId(i);
    if (!r) {
      return;
    }
    let {
      modelService: o
    } = e;
    (function (e, i, n, r) {
      let o = new Set(docBlockTypeConstants.okrBlockTypes);
      (function e(s) {
        if (!s) {
          return;
        }
        let d = i(s);
        if (!d) {
          return;
        }
        let u = true;
        if (o.has(d.type)) {
          var h;
          var p;
          let e = g(d);
          let i = ((p = d.text) === null || p === undefined ? undefined : (h = p.initialAttributedTexts) === null || h === undefined ? undefined : h.text["0"]) || "";
          u = r(e ? e + i : i, true, s);
        } else if (d.type === docBlockTypeConstants.blockTypeConstants.IMAGE) {
          let {
            caption: e
          } = d.image;
          u = r(docxCaptionTextResolver.getCaptionText(e), false, s);
        } else if (d.type === docBlockTypeConstants.blockTypeConstants.WHITEBOARD) {
          u = r(docxCaptionTextResolver.getCaptionText(d.caption), false, s);
        } else if (d.type === c) {
          u = r(d.text, false, s);
        }
        if (u === false) {
          return false;
        }
        let f = n(s, d) || [];
        if (f) {
          for (let i of f) {
            if (e(i) === false) {
              return false;
            }
          }
        }
      })(e);
    })(r, e => {
      if (e.type === docBlockTypeConstants.blockTypeConstants.TASK && o.isBlockModelCreated(e.id)) {
        let i = o.getBlockModelByBlockId(e.id);
        if (i && i.type === docBlockTypeConstants.blockTypeConstants.TASK) {
          let e = i.getText();
          if (e !== undefined) {
            return {
              type: c,
              text: `
- ${e}`
            };
          }
        }
      }
      return e.snapshot;
    }, e => e.children, n);
  }
  function u(e, i) {
    let n = "";
    d(e, i, (e, i) => {
      n += i ? `${e}
` : e;
    });
    return n;
  }
  function h(e, i) {
    return i.reduce((i, n) => {
      let {
        id: r,
        type: o,
        selection: l
      } = n;
      if (o === docxBlockSelectionHandler_1.blockTypes.TEXT) {
        return i + function (e, i, n) {
          let r = e.getBlockModelByBlockIdNotCheck(i);
          if (!r) {
            return "";
          }
          let o = g(r.snapshot, n);
          let l = r.getText();
          let a = `${n ? l.slice(n.start, n.end) : l}
`;
          return `${o}${a}`;
        }(e, r, l);
      } else if (o === docxBlockSelectionHandler_1.blockTypes.BLOCK) {
        return i + u(e, r);
      } else {
        return i;
      }
    }, "");
  }
  function g(e, i) {
    if (i && i.start !== 0) {
      return "";
    }
    let n = e.type;
    if (n === docBlockTypeConstants.blockTypeConstants.BULLET || n === docBlockTypeConstants.blockTypeConstants.TODO) {
      return "\n- ";
    } else if (docBlockTypeConstants.orderedHeadingTypes.includes(n) && e.seq !== undefined) {
      return "\n-- ";
    } else {
      return "";
    }
  }
  function p(e) {
    let i = function (e, i = false) {
      return function (e) {
        let i;
        let n = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        let r = 0;
        for (let l = 0; l < e.length; l++) {
          var o;
          let a = e[l];
          let s = false;
          if (_.test(a)) {
            i = y.SPACE;
            if (n) {
              r++;
            }
            continue;
          }
          if (v.test(a) && !m.test(a)) {
            let n = e[l + 1];
            if (!(s = !!n && (o = a + n, b.lastIndex = 0, b.test(o)))) {
              i = y.DOUBLE;
              r++;
              continue;
            }
          }
          if (i !== y.SINGLE || n) {
            r++;
          }
          i = y.SINGLE;
          if (s) {
            l++;
          }
        }
        return r;
      }(e, i);
    }(e, false);
    return {
      charCount: e.replace(/[\n|\s]/g, "").length,
      wordCount: i
    };
  }
  function f(e) {
    return p(u(e, e.rootBlockId));
  }
  let v = /^[^\x00-\x7F]/;
  let m = /[\u00C0-\u00FF\u0100-\u017F\u01A0-\u01FF\u1EB0-\u1EFF]/;
  let b = emojiPatternRegex.emojiRegex();
  let _ = /^[\s|—]/;
  (r = y || {})[r.SPACE = 0] = "SPACE";
  r[r.SINGLE = 1] = "SINGLE";
  r[r.DOUBLE = 2] = "DOUBLE";
  var y = r;
  require.d(exports, {
    extractBlockText: function () {
      return h;
    },
    getDocumentWordCount: function () {
      return f;
    },
    traverseBlockText: function () {
      return d;
    },
    countTextCharsAndWords: function () {
      return p;
    }
  });
}