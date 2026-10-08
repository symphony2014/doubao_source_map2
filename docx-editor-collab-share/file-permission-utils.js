// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Iv' to 'copyToClipboard'
// - Renamed export 'Kx' to 'roleToPermission'
// - Renamed export 'Zh' to 'generateInviteUrl'
// - Renamed export 'kJ' to 'getPermissionFromBitmask'
// - Renamed export 'me' to 'isValidPermissionType'
// - Renamed export 'mn' to 'generateDocxUrl'
// - Renamed export 'q8' to 'permissionToRole'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 70666.7b9c3546.js
         * chunkId: 70666
         * moduleId: 759649
         */
module.exports = function (module, exports, require) {
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var s = clipboardCopyHelper;
  var filePermissionConstants = require("file-permission-constants") /*id: 890549*/;
  var filePermissionErrorMappings = require("file-permission-error-mappings") /*id: 120017*/;
  let c = e => e || location.origin;
  let u = (e, t) => `${c(e)}/${t ? "doc" : "docx"}/invite`;
  let d = e => `${c(e)}/docx`;
  let h = e => !!collectionIncludesUtil.includes(objectValuesHelper.getObjectValues(filePermissionConstants.permissionTypes), e);
  let f = e => {
    try {
      navigator.clipboard.write([new ClipboardItem({
        "text/plain": new Blob([e], {
          type: "text/plain"
        })
      })]);
    } catch (t) {
      s(e);
    }
  };
  let m = {
    [filePermissionConstants.permissionTypes.read]: filePermissionConstants.userRoles.visitor,
    [filePermissionConstants.permissionTypes.edit]: filePermissionConstants.userRoles.member,
    [filePermissionConstants.permissionTypes.manage]: filePermissionConstants.userRoles.manager
  };
  let v = {
    [filePermissionConstants.userRoles.visitor]: filePermissionConstants.permissionTypes.read,
    [filePermissionConstants.userRoles.member]: filePermissionConstants.permissionTypes.edit,
    [filePermissionConstants.userRoles.manager]: filePermissionConstants.permissionTypes.manage
  };
  let g = e => m[e];
  let p = e => v[e];
  let b = e => [filePermissionConstants.permissionTypes.manage, filePermissionConstants.permissionTypes.edit, filePermissionConstants.permissionTypes.read].find(t => (e & t) === t) || filePermissionErrorMappings.readPermissionType;
  require.d(exports, {
    copyToClipboard: function () {
      return f;
    },
    roleToPermission: function () {
      return p;
    },
    generateInviteUrl: function () {
      return u;
    },
    getPermissionFromBitmask: function () {
      return b;
    },
    isValidPermissionType: function () {
      return h;
    },
    generateDocxUrl: function () {
      return d;
    },
    permissionToRole: function () {
      return g;
    }
  });
}