// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M2' to 'buildCacheResourceUrl'
// - Renamed export 'R5' to 'isFakeFile'
// - Renamed export 'XR' to 'buildPreviewUrl'
// - Renamed export 'X_' to 'filePreviewHelpers'
// - Renamed export 'tg' to 'processTranscodeUrls'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17043.439c2bd3.js
         * chunkId: 17043
         * moduleId: 437030
         */
module.exports = function (module, exports, require) {
  var mediaConstants = require("media-constants") /*id: 655173*/;
  var filePreviewTypeUtils = require("file-preview-type-utils") /*id: 732557*/;
  let r = e => e.startsWith("fake_file_");
  let s = {
    getFileInfoParams: e => ({
      fileToken: e,
      caller: "explorer",
      dataVersion: undefined,
      riskDetectionExtra: undefined,
      version: undefined,
      getDisabledPreviewComponents: () => []
    }),
    isAudio: e => e.includes("audio"),
    isVideo: e => e.includes("video"),
    isPdf: e => e.includes("application"),
    getFileSize: e => {
      let t = 0;
      let i = e.mime_type || "";
      if (s.isPdf(i)) {
        var r;
        let i = filePreviewTypeUtils.resolvePreviewType(e) || 16;
        t = ((r = e.preview_meta) === null || r === undefined ? undefined : r.data[i]?.preview_file_size) || e.size;
      } else {
        t = e.size;
      }
      return t;
    }
  };
  let l = (e, t, i, o) => a({
    fileToken: t,
    objectToken: i,
    objectType: o,
    cacheSourceType: mediaConstants.resourceTypes.FILE,
    apiType: mediaConstants.mediaModes.PREVIEW,
    resourceType: mediaConstants.downloadModes.MGET_CCM_DOWNLOAD_NORMAL,
    mimeType: (e == null ? undefined : e.mime_type) || "",
    originUrl: e == null ? undefined : e.previewUrl
  });
  let a = e => {
    let {
      cacheSourceType: t,
      apiType: i,
      resourceType: n,
      mimeType: o,
      originUrl: s,
      fileToken: l,
      objectToken: a,
      objectType: u
    } = e;
    let d = `?biz=ccm&key=${l}`;
    let c = r(l) ? "" : `&api_type=${i}`;
    let h = `&resource_type=${n}`;
    let p = s;
    if (u && a && o) {
      p = [s, c, h, `&object_type=${String(u)}`, `&object_token=${a}`, `&mime_type=${encodeURIComponent(o)}`].join("");
    }
    let _ = `&origin_url=${encodeURIComponent(p)}`;
    return `${t ? "cache-resource://sdk/file" : "cache-resource://sdk/image"}${d}${_}`;
  };
  let u = (e, t, i, o) => {
    let r = e.mime_type || "";
    if (s.isVideo(r) || r === "application/octet-stream") {
      Object.keys((e == null ? undefined : e.preview_meta?.data) || {}).forEach(s => {
        var u;
        var d;
        let c = (d = e.preview_meta) === null || d === undefined ? undefined : (u = d.data[s]) === null || u === undefined ? undefined : u.content?.transcode_urls;
        if (c) {
          Object.keys(c).forEach(e => {
            let s = c[e];
            if (!s.includes("cache-resource")) {
              let l = a({
                fileToken: t,
                objectToken: i,
                objectType: o,
                mimeType: r,
                cacheSourceType: mediaConstants.resourceTypes.FILE,
                apiType: mediaConstants.mediaModes.PREVIEW,
                resourceType: mediaConstants.downloadModes.MGET_CCM_DOWNLOAD_NORMAL,
                originUrl: s
              });
              c[e] = l;
            }
          });
        }
      });
    }
    return e;
  };
  require.d(exports, {
    buildCacheResourceUrl: function () {
      return a;
    },
    isFakeFile: function () {
      return r;
    },
    buildPreviewUrl: function () {
      return l;
    },
    filePreviewHelpers: function () {
      return s;
    },
    processTranscodeUrls: function () {
      return u;
    }
  });
}