// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'userEnvironmentUtils'
// - Resolved require(107339) to 'user-environment-utils'
// - Renamed variable 'o' to 'pasteRecordConstants'
// - Resolved require(780742) to 'paste-record-constants'
// - Renamed variable 'r' to 'editorRangeUtilities'
// - Resolved require(780600) to 'editor-range-utilities'
// - Renamed variable 'c' to 'editorRevisionConstants'
// - Resolved require(835842) to 'editor-revision-constants'
// - Renamed variable 'i' to 'editorRevisionUtilities'
// - Resolved require(80308) to 'editor-revision-utilities'
// - Updated imported property 'eB' to 'textualBlockType' (module 780742)
// - Updated imported property 'AX' to 'createRangeWithZone' (module 780600)
// - Updated imported property 'tX' to 'filterRevisionKeys' (module 80308)
// - Updated imported property 'tF' to 'getUserInfo' (module 107339)
// - Updated imported property 'gd' to 'diffOperationMap' (module 835842)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_replace-all.b695287c.js
         * chunkId: 1472
         * moduleId: 275276
         */
module.exports = function (module, exports, require) {
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var pasteRecordConstants = require("paste-record-constants") /*id: 780742*/;
  var editorRangeUtilities = require("editor-range-utilities") /*id: 780600*/;
  var editorRevisionConstants = require("editor-revision-constants") /*id: 835842*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  let p = {
    blockSetting: {
      blockType: pasteRecordConstants.textualBlockType,
      replaceAll: function (e) {
        let {
          block: l,
          keyword: n,
          matches: o,
          revisionId: p
        } = e;
        let u = o.map(e => {
          let {
            range: o
          } = e;
          o[1];
          o[0];
          let c = editorRangeUtilities.createRangeWithZone(l.zoneState, [o[0], o[0] + 1]);
          let p = l.getAttributes(c.start, c.end).toMap();
          let u = editorRevisionUtilities.filterRevisionKeys(p);
          u.author = userEnvironmentUtils.getUserInfo().userId;
          return {
            range: o,
            toBeReplaced: {
              text: n,
              mark: u
            }
          };
        });
        let s = p ? {
          revisionContext: {
            revisionId: p,
            type: editorRevisionConstants.diffOperationMap.REPLACE
          }
        } : {};
        return l.applyTransaction("replaceAll", e => {
          let n = n => l.apply(n, {
            extra: {
              op: e
            }
          });
          if (p) {
            l.zoneState.replaceTextsWithRevision(u, p, n);
          } else {
            l.zoneState.multiReplace(u, n);
          }
        }, {
          extra: s
        });
      }
    }
  };
  exports.default = [p];
  require.r(exports);
}