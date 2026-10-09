// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-block-icon-setting.2fba5dba.js
         * chunkId: 20343
         * moduleId: 484940
         */
module.exports = function (module, exports, require) {
  let r = [{
    isTargetBlock: t => {
      return t.model?.isEmpty;
    },
    lineHeight: t => {
      return parseInt(window.getComputedStyle(t.querySelector(".text-editor") ?? t).height.slice(0, -2));
    }
  }];
  exports.default = r;
  require.r(exports);
}