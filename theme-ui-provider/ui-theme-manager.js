// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 44598.8b5bdfe8.js
         * chunkId: 44598
         * moduleId: 376390
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