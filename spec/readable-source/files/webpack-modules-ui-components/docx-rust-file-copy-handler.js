// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'copyFilesToDocxRust'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 842885
         */
module.exports = function (module, exports, require) {
  var docxRustFileOperations = require("docx-rust-file-operations") /*id: 966944*/;
  async function i(e, r, n) {
    try {
      if (typeof window.ShellAPI != "object") {
        return;
      }
      let i = e.map(e => window.LarkAPI.fs.getFileAbsolutePath(e));
      let l = (await Promise.all(i)).map((e, i) => {
        let l = r[i];
        let a = {
          local_path: e,
          obj_token: n,
          obj_type: 22
        };
        if (l.file) {
          a = Object.assign(a, {
            resource_type: 1
          });
        }
        return docxRustFileOperations.copyFilePath(a);
      });
      return Promise.all(l);
    } catch (e) {}
  }
  require.d(exports, {
    copyFilesToDocxRust: function () {
      return i;
    }
  });
}