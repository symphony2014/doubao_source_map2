// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'deepCloneWrapper_1'
// - Resolved require(391722) to 'deep-clone-wrapper_1'
// - Renamed variable 'l' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'o' to 'docQuoteContainerOps'
// - Resolved require(780546) to 'doc-quote-container-ops'
// - Updated imported property 'Z' to 'deepClone' (module 391722)
// - Updated imported property 'Mw' to 'validateQuoteSel' (module 780546)
// - Updated imported property 'ug' to 'exitQuoteContainer' (module 780546)
// - Updated imported property 'h2' to 'turnIntoQuote' (module 780546)
// - Updated imported property 'Jy' to 'canTurnIntoQuote' (module 780546)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_turnIntoEditable.3eb83575.js
         * chunkId: 72034
         * moduleId: 647798
         */
module.exports = function (module, exports, require) {
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docQuoteContainerOps = require("doc-quote-container-ops") /*id: 780546*/;
  async function i(e, t, n, l, i) {
    let {
      toggle: d,
      beforeTurnInto: u,
      beforeTurnIntoApplyOptions: c,
      updateSelection: a = true
    } = t;
    n = deepCloneWrapper_1.deepClone(n);
    let f = !!a && i.isTextSelectionAcrossBlocks(n);
    let s = d ?? docQuoteContainerOps.validateQuoteSel(e);
    let p = await (s ? docQuoteContainerOps.exitQuoteContainer({
      blockManager: l,
      models: e,
      isMultipleSelection: f,
      selections: n
    }) : docQuoteContainerOps.turnIntoQuote({
      blockManager: l,
      models: e,
      beforeTurnInto: u,
      beforeTurnIntoApplyOptions: c,
      isMultipleSelection: f,
      selections: n
    }));
    if (a) {
      i.setSelection(p);
    }
  }
  let d = [function (e) {
    let {
      blockManager: t,
      selectionAPI: n
    } = e;
    let r = {
      type: docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER,
      h: async (e, r) => {
        await i(e, {
          ...r,
          updateSelection: false
        }, [], t, n);
      }
    };
    return {
      specialTurnIntoCase: {
        cond: e => e === docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER,
        h: async (e, r, l) => {
          let d = function (e, t) {
            let {
              extractModelsBySelection: n,
              fixOperateTargets: r
            } = e;
            return r(n(t, true), true);
          }(e, l);
          if (docQuoteContainerOps.canTurnIntoQuote(d)) {
            return i(d, r, l, t, n);
          }
        }
      },
      specialTurnIntoActionRule: r,
      fixOperateTargetsRule: {
        cond: (e, t) => e.type === docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER && !t,
        h: e => e.children
      },
      modelsMatchRule: {
        type: docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER,
        h: docQuoteContainerOps.validateQuoteSel
      },
      canDoTurnIntoRule: {
        type: docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER,
        h: docQuoteContainerOps.canTurnIntoQuote
      }
    };
  }];
  exports.default = d;
  require.r(exports);
}