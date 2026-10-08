// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 218425
         */
module.exports = function (module, exports, require) {
  var t = Element.prototype.removeChild;
  var e = Node.prototype.removeChild;
  Element.prototype.removeChild = function (e) {
    if (e.parentNode !== this && this instanceof HTMLElement && this.closest(".editor-kit-container")) {
      return e;
    } else {
      return t.call(this, e);
    }
  };
  Node.prototype.removeChild = function (t) {
    if (t.parentNode !== this && this instanceof HTMLElement && this.closest(".editor-kit-container")) {
      return t;
    } else {
      return e.call(this, t);
    }
  };
}