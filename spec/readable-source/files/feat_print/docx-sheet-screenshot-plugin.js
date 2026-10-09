// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'n' to 'sheetBlockViewManager'
// - Resolved require(137221) to 'sheet-block-view-manager'
// - Renamed variable 's' to 'docxIndexState'
// - Resolved require(283622) to 'docx-index-state'
// - Updated imported property 'VF' to 'positionConstants' (module 433991)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'Z' to 'SheetBlockViewManager' (module 137221)
// - Updated imported property 'p' to 'docxIndexState' (module 283622)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_print.4e882bbd.js
         * chunkId: 99126
         * moduleId: 122362
         */
module.exports = function (module, exports, require) {
  let o;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var sheetBlockViewManager = require("sheet-block-view-manager") /*id: 137221*/;
  var docxIndexState = require("docx-index-state") /*id: 283622*/;
  async function l(e) {
    let {
      notifyOptions: {
        status: t,
        detail: i
      }
    } = e;
    let s = e.blockView;
    if (t === docBlockTypeConstants.positionConstants.start) {
      if (!sheetBlockViewManager.SheetBlockViewManager.startTakeScreenshot) {
        var l;
        var a;
        sheetBlockViewManager.SheetBlockViewManager.startTakeScreenshot = true;
        let e = (a = i == null ? undefined : i.isBlob) === null || a === undefined || a;
        o = await ((l = s.bridge) === null || l === undefined ? undefined : l.takeScreenShot(e));
      }
    } else if (t === docBlockTypeConstants.positionConstants.end && sheetBlockViewManager.SheetBlockViewManager.startTakeScreenshot) {
      sheetBlockViewManager.SheetBlockViewManager.startTakeScreenshot = false;
      await (o == null ? undefined : o.done());
    }
  }
  async function a(e) {
    let t = e.blockView;
    let i = docxIndexState.docxIndexState.getHasSheetTakeScreenshot();
    if ((await function (e) {
      let {
        blockView: t
      } = e;
      return new Promise(e => {
        let i = () => {
          if (t.isBlockRendered) {
            e(true);
          } else {
            setTimeout(() => {
              i();
            }, 300);
          }
        };
        i();
      });
    }({
      blockView: t
    })) && !i) {
      docxIndexState.docxIndexState.setHasSheetTakeScreenshot(true);
      let e = {
        status: 0,
        detail: {
          isBlob: false
        }
      };
      try {
        await l({
          notifyOptions: e,
          blockView: t
        });
      } catch (i) {
        e = {
          status: 1
        };
        await l({
          notifyOptions: e,
          blockView: t
        });
      }
    }
  }
  async function d(e) {
    let t = e.blockView;
    if (!docxIndexState.docxIndexState.getHasSheetTakeScreenshot()) {
      docxIndexState.docxIndexState.setHasSheetTakeScreenshot(true);
      await l({
        notifyOptions: {
          status: 1
        },
        blockView: t
      });
    }
  }
  var h = [{
    blockSettingList: [{
      blockType: docBlockTypeConstants.blockTypeConstants.SHEET,
      onPrintReady: a,
      onPrintFinish: d
    }]
  }];
  require.r(exports);
  require.d(exports, {
    default: function () {
      return h;
    }
  });
}