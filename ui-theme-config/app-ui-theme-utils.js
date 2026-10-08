// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49483.57adb2f4.js
         * chunkId: 49483
         * moduleId: 230462
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