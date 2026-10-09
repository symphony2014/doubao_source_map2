// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Updated imported property 'VF' to 'positionConstants' (module 433991)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_print.4e882bbd.js
         * chunkId: 99126
         * moduleId: 318182
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  function r(e) {
    let {
      notifyOptions: {
        status: t
      }
    } = e;
    let i = e.blockView;
    if (t === docBlockTypeConstants.positionConstants.start) {
      i.forceRenderAll();
      if (i.docxHighlightController) {
        return Promise.race([i.docxHighlightController.awaitHighlightRICFinished(), new Promise(e => {
          setTimeout(() => {
            e(undefined);
          }, 5000);
        })]);
      }
    } else if (t === docBlockTypeConstants.positionConstants.end) {
      i.cancelForceRenderAll();
    }
  }
  async function n(e) {
    let t = e.blockView;
    let i = {
      status: 0,
      detail: {
        isBlob: false
      }
    };
    try {
      var o;
      if ((o = t.enterBuffer) !== null && o !== undefined) {
        o.call(t);
      }
      await r({
        notifyOptions: i,
        blockView: t
      });
    } catch (e) {
      i = {
        status: 1
      };
      await r({
        notifyOptions: i,
        blockView: t
      });
    }
  }
  async function s(e) {
    var t;
    let i = e.blockView;
    if ((t = i.enterBuffer) !== null && t !== undefined) {
      t.call(i);
    }
    await r({
      notifyOptions: {
        status: 1
      },
      blockView: i
    });
  }
  let l = {
    blockSettingList: [{
      blockType: docBlockTypeConstants.blockTypeConstants.CODE,
      onPrintReady: n,
      onPrintFinish: s
    }]
  };
  exports.default = [l];
  require.r(exports);
}