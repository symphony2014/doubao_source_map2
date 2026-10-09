// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'getSelectionWidth'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 837526
         */
module.exports = function (module, exports, require) {
  require("primitive-converters") /*id: 383327*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  function o(e, i) {
    var r;
    if (!i) {
      return;
    }
    let o = e.editor.selection.toDOMRange(editorRangeUtilities.convertRangeWithZone(e, i));
    if (!o) {
      return;
    }
    let l = ".ace-line";
    let {
      startContainer: s,
      endContainer: a
    } = o;
    if (s === a) {
      return;
    }
    let c = 0;
    let d = 0;
    let u = (r = s.parentNode) === null || r === undefined ? undefined : r.closest(l);
    let h = document.createNodeIterator(u, NodeFilter.SHOW_ELEMENT);
    let f = false;
    while (u) {
      let e = h.nextNode();
      if (e === s.parentNode) {
        f = true;
        continue;
      }
      if (e === a.parentNode) {
        u = null;
      }
      if (e) {
        if (f && e.tagName === "SPAN") {
          let {
            width: i
          } = e.getBoundingClientRect();
          d += i;
          c = Math.max(c, d);
        }
      } else {
        d = 0;
        u = u.closest(l).nextSibling;
        h = document.createNodeIterator(u, NodeFilter.SHOW_ELEMENT);
      }
    }
    return c;
  }
  require("fold-code-event-types") /*id: 525302*/;
  require("docx-block-selection-handler_1") /*id: 801350*/;
  require.d(exports, {
    getSelectionWidth: function () {
      return o;
    }
  });
}