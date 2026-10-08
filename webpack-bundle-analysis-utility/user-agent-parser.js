// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 97038.67ba788d.js
         * chunkId: 97038
         * moduleId: 78254
         */
module.exports = function (module, exports, require) {
  function r() {
    var e;
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var r = arguments.length > 1 ? arguments[1] : undefined;
    var n = arguments.length > 2 ? arguments[2] : undefined;
    t = t.toLowerCase();
    var o = {};
    var i = {};
    if (e = t.match(/android;?[\s/]+([\d.]+)?/)) {
      o.android = true;
      if (e[1]) {
        o.version = e[1];
      }
    } else {
      if (e = t.match(/ipod(?:.*os\s([\d_]+))?/)) {
        o.ipod = true;
        if (e[1]) {
          o.version = e[1].split("_").join(".");
        }
      } else if (e = t.match(/ipad.*os\s([\d_]+)/)) {
        o.ipad = true;
        o.version = e[1].split("_").join(".");
      } else if (r === "MacIntel" && n > 1 && (e = t.match(/version\/([\d.]+)/))) {
        o.ipad = true;
        o.version = e[1];
      } else if (e = t.match(/iphone\sos\s([\d_]+)/)) {
        o.iphone = true;
        o.version = e[1].split("_").join(".");
      }
      o.ios = o.ipad || o.iphone || o.ipod;
    }
    if (e = t.match(/micromessenger[\s/]+([\d.]+)/)) {
      i.weixin = true;
      i.version = e[1];
    } else if (e = t.match(/\sqq[\s/]+([\d.]+)/)) {
      i.qq = true;
      i.version = e[1];
    } else if (e = t.match(/weibo[\s_]+([\d.]+)/)) {
      i.weibo = true;
      i.version = e[1];
    }
    return {
      browser: i,
      os: o
    };
  }
  exports.default = undefined;
  r.default = r;
  exports.default = r;
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}