// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docxImageUrlUtils'
// - Resolved require(219802) to 'docx-image-url-utils'
// - Renamed variable 'r' to 'imageTypeDetector'
// - Resolved require(819735) to 'image-type-detector'
// - Updated imported property 'Jd' to 'buildImageUrl' (module 219802)
// - Updated imported property 'NW' to 'getImageBlob' (module 819735)
// - Updated imported property 'JB' to 'detectImageExt' (module 819735)
// - Updated imported property 'nz' to 'isAnimatedImage' (module 819735)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: utils-load-imagetype.bc875dba.js
         * chunkId: 56434
         * moduleId: 485138
         */
module.exports = function (module, exports, require) {
  var docxImageUrlUtils = require("docx-image-url-utils") /*id: 219802*/;
  var imageTypeDetector = require("image-type-detector") /*id: 819735*/;
  async function a(e) {
    let {
      maskSrc: i
    } = e.state;
    let t = i || docxImageUrlUtils.buildImageUrl(e.snapshot.image.token, e.model.record.id);
    if (t && !(t.length > 500)) {
      try {
        let i = await imageTypeDetector.getImageBlob(t);
        if (!i) {
          return;
        }
        let n = await i.arrayBuffer();
        e.imageType = imageTypeDetector.detectImageExt(n);
        if (e.imageType === "webp") {
          e.isAnimatedWebp = imageTypeDetector.isAnimatedImage(n);
        }
      } catch (e) {}
    }
  }
  require.d(exports, {
    loadImageType: function () {
      return a;
    }
  });
}