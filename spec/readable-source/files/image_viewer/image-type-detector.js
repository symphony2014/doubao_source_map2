// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$x' to 'getExtensionByMime'
// - Renamed export 'JB' to 'detectImageExt'
// - Renamed export 'NW' to 'getImageBlob'
// - Renamed export 'nz' to 'isAnimatedImage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image_viewer.6692a311.js
         * chunkId: 38626
         * moduleId: 819735
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  let o = [{
    mime: "image/jpeg",
    ext: "jpeg",
    signature: [255, 216, 255]
  }, {
    mime: "image/png",
    ext: "png",
    signature: [137, 80, 78, 71, 13, 10, 26, 10]
  }, {
    mime: "image/gif",
    ext: "gif",
    signature: [71, 73, 70, 56, 55, 97]
  }, {
    mime: "image/gif",
    ext: "gif",
    signature: [71, 73, 70, 56, 57, 97]
  }, {
    mime: "image/webp",
    ext: "webp",
    signature: [82, 73, 70, 70, undefined, undefined, undefined, undefined, 87, 69, 66, 80, 86, 80]
  }, {
    mime: "image/x-icon",
    ext: "ico",
    signature: [0, 0, 1, 0]
  }, {
    ext: "tif",
    mime: "image/tiff",
    signature: [77, 77, 0, 42]
  }, {
    ext: "tif",
    mime: "image/tiff",
    signature: [73, 73, 42, 0]
  }, {
    ext: "bpg",
    mime: "image/bpg",
    signature: [66, 80, 71, 251]
  }, {
    mime: "image/bmp",
    ext: "bmp",
    signature: [66, 77]
  }];
  let a = {
    "image/jpeg": "jpeg",
    "image/png": "png",
    "image/gif": "gif",
    "image/webp": "webp",
    "image/tiff": "tif",
    "image/bpg": "bpg",
    "image/bmp": "bmp"
  };
  function s(e) {
    return a[e];
  }
  function l(e) {
    let i = new Uint8Array(e);
    for (let e = 0; e < o.length; e++) {
      let n = o[e];
      if (function (e, i) {
        let {
          offset: n = 0,
          signature: r
        } = i;
        for (let i = 0; i < r.length; i++) {
          if (r[i] !== undefined && r[i] !== e[i + n]) {
            return false;
          }
        }
        return true;
      }(i, n)) {
        return n.ext;
      }
    }
  }
  function h(e) {
    let i = new Uint8Array(e);
    let n = String.fromCharCode.apply(null, i.slice(0, 100));
    return !!n && (n.includes("ANIM") || n.includes("ANMF"));
  }
  async function c(e) {
    let {
      getBlob: i
    } = platformDocUtils.kG0;
    if (e.includes("docsource://")) {
      return await new Promise((i, n) => {
        let r = new XMLHttpRequest();
        r.open("GET", e);
        r.responseType = "blob";
        r.onreadystatechange = function () {
          if (this.readyState === this.DONE) {
            if (this.status === 200) {
              i(this.response);
            } else {
              n(Error("获取文件二进制失败"));
            }
          }
        };
        r.send();
      });
    } else {
      return await i(e, {
        withCredentials: true
      });
    }
  }
  require.d(exports, {
    getExtensionByMime: function () {
      return s;
    },
    detectImageExt: function () {
      return l;
    },
    getImageBlob: function () {
      return c;
    },
    isAnimatedImage: function () {
      return h;
    }
  });
}