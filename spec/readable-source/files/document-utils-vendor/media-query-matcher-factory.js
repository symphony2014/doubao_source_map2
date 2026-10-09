// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 209779
         */
module.exports = function (module, exports, require) {
  function t(e) {
    this.value = e;
    this.match = function (e) {
      return this.value >= e.height;
    };
  }
  function r(e) {
    this.value = e;
    this.match = function (e) {
      return this.value < e.height;
    };
  }
  function n(e) {
    this.value = e;
    this.match = function (e) {
      return this.value >= e.width;
    };
  }
  function i(e) {
    this.value = e;
    this.match = function (e) {
      return this.value < e.width;
    };
  }
  function o(e) {
    this.value = e;
    this.match = function (e) {
      return this.value === e.orientation;
    };
  }
  module.exports = function (e, a) {
    switch (e) {
      case "max-height":
        return new t(a);
      case "min-height":
        return new r(a);
      case "max-width":
        return new n(a);
      case "min-width":
        return new i(a);
      case "orientation":
        return new o(a);
      default:
        throw Error(a);
    }
  };
}