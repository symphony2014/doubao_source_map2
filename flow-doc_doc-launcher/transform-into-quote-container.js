// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'lastElementHelper'
// - Resolved require(715951) to 'last-element-helper'
// - Renamed variable 'o' to 'uuidGeneratorUtil'
// - Resolved require(641535) to 'uuid-generator-util'
// - Renamed variable 'l' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'a' to 'docxClipboardUtils'
// - Resolved require(538199) to 'docx-clipboard-utils'
// - Renamed variable 's' to 'clipboardPasteDataHandlers'
// - Resolved require(324971) to 'clipboard-paste-data-handlers'
// - Updated imported property 'lk' to 'traverseAndFilterRecords' (module 538199)
// - Updated imported property 'Z' to 'getLastElement' (module 715951)
// - Updated imported property 'Z' to 'generateUuid' (module 641535)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'rd' to 'pasteLifecycleHooks' (module 324971)
// - Updated imported property 'Z7' to 'dataTransformOps' (module 324971)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 810341
         */
module.exports = function (module, exports, require) {
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxClipboardUtils = require("docx-clipboard-utils") /*id: 538199*/;
  var clipboardPasteDataHandlers = require("clipboard-paste-data-handlers") /*id: 324971*/;
  function c(e) {
    let {
      data: i
    } = e;
    let {
      recordMap: n,
      recordIds: s,
      payloadMap: c
    } = i;
    let d = new Map();
    let u = "ROOT";
    docxClipboardUtils.traverseAndFilterRecords(s, n, (e, i) => {
      i ||= u;
      let o = c[e]?.usedToBeQuote;
      let l = d.get(i);
      if (!o) {
        if (l) {
          l.prevBlockIsUseToBeQuote = false;
        }
        return;
      }
      if (!l) {
        l = {
          result: [],
          prevBlockIsUseToBeQuote: false
        };
        d.set(i, l);
      }
      let {
        result: a,
        prevBlockIsUseToBeQuote: s
      } = l;
      l.prevBlockIsUseToBeQuote = true;
      let h = lastElementHelper.getLastElement(a);
      if (s && h) {
        h.push(e);
      } else {
        a.push([e]);
      }
      return {
        stop: true
      };
    });
    Array.from(d.entries()).forEach(e => {
      let [i, r] = e;
      let {
        result: a
      } = r;
      let c = i === u ? s : n[i].snapshot.children;
      a.forEach(e => {
        let i = uuidGeneratorUtil.generateUuid();
        n[i] = {
          id: i,
          snapshot: {
            children: e,
            type: docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER
          }
        };
        let r = c.findIndex(i => i === e[0]);
        c.splice(r, e.length, i);
      });
    });
  }
  let d = [{
    hookName: clipboardPasteDataHandlers.pasteLifecycleHooks.preprocessData,
    hookCallback: c,
    options: {
      priority: clipboardPasteDataHandlers.dataTransformOps.transformIntoQuoteContainer
    }
  }];
  exports.default = d;
  require.r(exports);
  require.d(exports, {
    transformIntoQuoteContainer: function () {
      return c;
    }
  });
}