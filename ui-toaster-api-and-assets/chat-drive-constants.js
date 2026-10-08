// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'HF' to 'recentCategories'
// - Renamed export 'Iv' to 'recentLimit'
// - Renamed export 'MQ' to 'defaultId'
// - Renamed export 'Oh' to 'sharePagePath'
// - Renamed export 'Xi' to 'mainSharePagePath'
// - Renamed export 'Xj' to 'shareBasePath'
// - Renamed export 'Y0' to 'maxLimit'
// - Renamed export 'gk' to 'mainDrivePattern'
// - Renamed export 'zR' to 'drivePagePattern'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 44559
         */
module.exports = function (module, exports, require) {
  let n = "0";
  let a = "/chat/drive/share/";
  let r = "main_chat/drive/(node_id$)/page";
  let o = "chat_drive/(node_id$)/page";
  let s = "main_chat/drive/share/page";
  let l = "chat_drive/share/page";
  let c = 255;
  let d = 40;
  let u = ["recentAll", "recentDoc", "recentPic", "recentMedia", "recentExcel", "recentPPT", "recentCodeArtifact", "recentOther", "recentArchive", "myUpload", "recentMettingMinutes"];
  require.d(exports, {
    recentCategories: function () {
      return u;
    },
    recentLimit: function () {
      return d;
    },
    defaultId: function () {
      return n;
    },
    sharePagePath: function () {
      return l;
    },
    mainSharePagePath: function () {
      return s;
    },
    shareBasePath: function () {
      return a;
    },
    maxLimit: function () {
      return c;
    },
    mainDrivePattern: function () {
      return r;
    },
    drivePagePattern: function () {
      return o;
    }
  });
}