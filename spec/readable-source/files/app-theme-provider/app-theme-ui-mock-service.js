// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30.849a967f.js
         * chunkId: 30
         * moduleId: 514722
         */
module.exports = function (module, exports, require) {
  function r() {
    return Promise.resolve({
      style: "UI3"
    });
  }
  let o = async () => Promise.resolve({
    style: "LIGHT"
  });
  let u = async () => Promise.resolve({});
  let s = e => () => {};
  let c = e => () => {};
  let f = async e => [];
  let i = async e => [];
  require.r(exports);
  require.d(exports, {
    onContentThemeChange: function () {
      return c;
    },
    onUIStateChange: function () {
      return s;
    },
    getAppThemeInfo: function () {
      return o;
    },
    getImagePathByToken: function () {
      return i;
    },
    getCSSValueByToken: function () {
      return f;
    },
    getCurrentUIState: function () {
      return u;
    },
    getAppUIInfo: function () {
      return r;
    }
  });
}