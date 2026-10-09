// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DQ' to 'isCommonImage'
// - Renamed export 'VO' to 'isImageFile'
// - Renamed export 'bq' to 'isNotRawImage'
// - Renamed export 'u2' to 'isSupportedImageType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 338641
         */
module.exports = function (module, exports, require) {
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  let a = ["heic", "dng", "arw", "nef", "ar2", "ar3"];
  let r = ["dng", "arw", "nef", "ar2", "ar3"];
  let o = e => {
    var i;
    var t;
    return !!e && e instanceof Blob && (((i = e.type) === null || i === undefined ? undefined : i.startsWith("image")) || a.includes((t = getFileExtension.getFileExtension(e.name)) === null || t === undefined ? undefined : t.toLocaleLowerCase()));
  };
  let s = e => !r.includes(e == null ? undefined : e.toLowerCase());
  let l = e => {
    let {
      fileName: i
    } = e;
    return !!i && ["jpg", "png", "jpeg", "webp"].includes(getFileExtension.getFileExtension(i));
  };
  let c = ["aces", "apng", "avci", "avcs", "avif", "bmp", "cgm", "dicom-rle", "dpx", "emf", "example", "fits", "g3fax", "gif", "heic", "heic-sequence", "heif", "heif-sequence", "hej2k", "hsj2", "ief", "j2c", "jaii", "jais", "jls", "jp2", "jpeg", "jpg", "jph", "jphc", "jpm", "jpx", "jxl", "jxr", "jxrA", "jxrS", "jxs", "jxsc", "jxsi", "jxss", "ktx", "ktx2", "naplps", "png", "prs.btif", "prs.pti", "pwg-raster", "svg+xml", "t38", "tiff", "tiff-fx", "vnd.adobe.photoshop", "vnd.airzip.accelerator.azv", "vnd.blockfact.facti", "vnd.clip", "vnd.cns.inf2", "vnd.dece.graphic", "vnd.djvu", "vnd.dvb.subtitle", "vnd.dwg", "vnd.dxf", "vnd.fastbidsheet", "vnd.fpx", "vnd.fst", "vnd.fujixerox.edmics-mmr", "vnd.fujixerox.edmics-rlc", "vnd.globalgraphics.pgb", "vnd.microsoft.icon", "vnd.mix", "vnd.mozilla.apng", "vnd.ms-modi", "vnd.net-fpx", "vnd.pco.b16", "vnd.radiance", "vnd.sealed.png", "vnd.sealedmedia.softseal.gif", "vnd.sealedmedia.softseal.jpg", "vnd.svf", "vnd.tencent.tap", "vnd.valve.source.texture", "vnd.wap.wbmp", "vnd.xiff", "vnd.zbrush.pcx", "webp", "wmf", "x-emf", "x-wmf"];
  let d = e => c.includes(e);
  require.d(exports, {
    isCommonImage: function () {
      return l;
    },
    isImageFile: function () {
      return o;
    },
    isNotRawImage: function () {
      return s;
    },
    isSupportedImageType: function () {
      return d;
    }
  });
}