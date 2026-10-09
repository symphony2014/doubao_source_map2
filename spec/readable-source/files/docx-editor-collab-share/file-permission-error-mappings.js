// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'LI' to 'invitationLinkErrors'
// - Renamed export 'OV' to 'driveErrorCodes'
// - Renamed export 'V1' to 'readPermissionType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 70666.7b9c3546.js
         * chunkId: 70666
         * moduleId: 120017
         */
module.exports = function (module, exports, require) {
  let i = require("file-permission-constants") /*id: 890549*/.permissionTypes.read;
  let r = {
    4: "drive_larkCCM_errorCode_4",
    10004: "drive_larkCCM_errorCode_10004",
    10029: "文档未开启对外分享",
    10042: "drive_larkCCM_errorCode_10042",
    10055: "drive_larkCCM_errorCode_10055"
  };
  let o = {
    "-32002": "生成邀请链接失败"
  };
  require.d(exports, {
    invitationLinkErrors: function () {
      return o;
    },
    driveErrorCodes: function () {
      return r;
    },
    readPermissionType: function () {
      return i;
    }
  });
}