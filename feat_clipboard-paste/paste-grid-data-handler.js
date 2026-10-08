// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'a' to 'gridColumnLayoutUtils'
// - Resolved require(139275) to 'grid-column-layout-utils'
// - Renamed variable 'i' to 'clipboardPasteDataHandlers'
// - Resolved require(324971) to 'clipboard-paste-data-handlers'
// - Updated imported property 'Mq' to 'isGridCompatibleBlock' (module 139275)
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'rd' to 'pasteLifecycleHooks' (module 324971)
// - Updated imported property 'VB' to 'beforeDataApplyHooks' (module 324971)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_clipboard-paste.72da7bc2.js
         * chunkId: 90580
         * moduleId: 439785
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var gridColumnLayoutUtils = require("grid-column-layout-utils") /*id: 139275*/;
  var clipboardPasteDataHandlers = require("clipboard-paste-data-handlers") /*id: 324971*/;
  function l(e) {
    let {
      data: r,
      parentBlockStruct: o,
      blockManager: i
    } = e;
    let l = o.record.id;
    let s = i.getBlockIdsByRecordId(l)[0];
    let c = i.getBlockModelByBlockId(s);
    if (!gridColumnLayoutUtils.isGridCompatibleBlock(c.record.snapshot.type, c)) {
      (function (e) {
        let {
          recordIds: r,
          recordMap: o
        } = e;
        let a = function e(r, o) {
          return r.reduce((r, a) => {
            let i = o[a];
            if (i.snapshot.type === docBlockTypeConstants.blockTypeConstants.GRID) {
              let e = i.snapshot.children.reduce((e, r) => {
                let n = o[r];
                e.push(...n.snapshot.children);
                return e;
              }, []);
              r.push(...e);
            } else {
              if (i.snapshot.children && i.snapshot.children.length) {
                i.snapshot.children = e(i.snapshot.children, o);
              }
              r.push(a);
            }
            return r;
          }, []);
        }(r, o);
        e.recordIds = a;
      })(r);
    }
  }
  let s = [{
    hookName: clipboardPasteDataHandlers.pasteLifecycleHooks.beforeBlockDataApply,
    hookCallback: l,
    options: {
      priority: clipboardPasteDataHandlers.beforeDataApplyHooks.callBeforeDataApplyForGrid
    }
  }];
  exports.default = s;
  require.r(exports);
  require.d(exports, {
    callBeforeDataApplyForGrid: function () {
      return l;
    }
  });
}