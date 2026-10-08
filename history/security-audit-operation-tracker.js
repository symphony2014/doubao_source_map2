// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'trackSecurityAuditOperation'
// - Renamed export 'u' to 'OperationTypeEnum'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 938820
         */
module.exports = function (module, exports, require) {
  var r;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  (r = {}).COPY = "copy";
  r.PRINT = "print";
  r.DOWNLOAD = "download";
  r.VIEW_HISTORY = "viewHistory";
  let o = r;
  let s = (e, i) => {
    platformDocUtils.y9F().then(n => {
      if (!n) {
        return;
      }
      let {
        collectSecurityAudit: r
      } = n;
      let l = n.ISecurityAudit;
      switch (e) {
        case o.COPY:
          r(l.OperationType.OperationCopyContent, {
            CCM_op_status: "success",
            ...i
          });
          break;
        case o.PRINT:
          r(l.OperationType.OperationPrint, {
            CCM_op_status: "success"
          });
          break;
        case o.DOWNLOAD:
          r(l.OperationType.OperationDownload, {
            CCM_op_status: "success",
            ...i
          });
          break;
        case o.VIEW_HISTORY:
          r(l.OperationType.OperationSpaceViewHistory, {
            CCM_op_status: "success",
            ...i
          });
      }
      return null;
    }).catch(e => {});
  };
  require.d(exports, {
    trackSecurityAuditOperation: function () {
      return s;
    },
    OperationTypeEnum: function () {
      return o;
    }
  });
}