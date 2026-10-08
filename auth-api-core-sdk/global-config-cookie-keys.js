// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 882833
         */
module.exports = function (module, exports, require) {
  exports.CookieKey = exports.GlobalConfig = undefined;
  var r = function () {
    function e(e) {
      this.origin = "";
      this.locale = "zh-CN";
      this.isOversea = false;
      this.config(e);
    }
    e.prototype.config = function (e) {
      var t = this;
      Object.keys(e).forEach(function (r) {
        t[r] = e[r];
      });
    };
    return e;
  }();
  exports.GlobalConfig = r;
  (exports.CookieKey ||= {}).CSRF = "swp_csrf_token";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}