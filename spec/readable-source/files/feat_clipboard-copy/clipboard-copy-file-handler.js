// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 't' to 'reduxStoreInitializer'
// - Resolved require(75100) to 'redux-store-initializer'
// - Renamed variable 'l' to 'fileUtilsAndViewHelpers'
// - Resolved require(192103) to 'file-utils-and-view-helpers'
// - Renamed variable 'u' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'a' to 'getDocxFileUri'
// - Resolved require(520427) to 'get-docx-file-uri'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// - Updated imported property 'ZP' to 'reduxStore' (module 75100)
// - Updated imported property 'N' to 'getDocxFileUri' (module 520427)
// - Updated imported property 'Ym' to 'formatFileSize' (module 192103)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_clipboard-copy.bc14b660.js
         * chunkId: 78903
         * moduleId: 503088
         */
module.exports = function (module, exports, require) {
  var i;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var fileUtilsAndViewHelpers = require("file-utils-and-view-helpers") /*id: 192103*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var getDocxFileUri = require("get-docx-file-uri") /*id: 520427*/;
  (i = r || {})[i.PAN_VOD = 1] = "PAN_VOD";
  i[i.PAN_IMGEX_IMG = 2] = "PAN_IMGEX_IMG";
  i[i.PAN_IMGEX_FILE = 3] = "PAN_IMGEX_FILE";
  var r = i;
  let d = ["3gp", "3gpp", "3gpp2", "asf", "avi", "dv", "flv", "m2t", "m4v", "mkv", "mov", "mp4", "mpe", "mpg", "mts", "ogv", "rm", "vob", "webm", "wmv", "ts", "ogg"];
  let _ = ["aac", "flac", "m4a", "mp3", "wav"];
  let f = {
    blockSetting: {
      blockType: docBlockTypeConstants.blockTypeConstants.FILE,
      onCopy: function (o) {
        let {
          block: {
            snapshot: e
          }
        } = o;
        if (e == null ? undefined : e.file) {
          let {
            name: o,
            size: n
          } = e.file;
          let i = reduxStoreInitializer.reduxStore.getState();
          let u = getDocxFileUri.getDocxFileUri(i, e.file.token);
          if (!u) {
            return;
          }
          let f = fileUtilsAndViewHelpers.formatFileSize(o);
          let v = _.includes(f);
          return {
            doubaoInfo: {
              doubao_uri: u,
              doubao_storage: d.includes(f) || v ? r.PAN_VOD : r.PAN_IMGEX_FILE,
              doubao_size: n,
              doubao_name: o
            }
          };
        }
        return {
          handleOnCopyBySelf: true
        };
      }
    }
  };
  exports.default = [f];
  require.r(exports);
}