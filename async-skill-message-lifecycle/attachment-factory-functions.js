// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'JJ' to 'createLinkWithCode'
// - Renamed export 'Mq' to 'createBasicLink'
// - Renamed export 'Mw' to 'createCodeRepoLink'
// - Renamed export 'Nq' to 'createImageObject'
// - Renamed export 'QJ' to 'createFileObject'
// - Renamed export 'SQ' to 'createDirectory'
// - Renamed export 'wo' to 'createVideoObject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18848.031095ef.js
         * chunkId: 18848
         * moduleId: 651399
         */
module.exports = function (module, exports, require) {
  var attachmentConstants = require("attachment-constants") /*id: 373585*/;
  let r = (e, t, i, n) => ({
    link_url: e,
    icon_url: t,
    icon_url_dark: i,
    link_title: n
  });
  let o = (e, t, i, n, r, o) => ({
    link_url: e,
    code_extra: {
      repo_id: t,
      repo_name: i,
      source: n,
      language: r,
      ref: o
    },
    icon_url: "",
    icon_url_dark: "",
    link_title: ""
  });
  let s = (e, t) => ({
    link_url: e,
    icon_url: "",
    icon_url_dark: "",
    link_title: "",
    code_extra: t ?? undefined
  });
  let l = (e, t, i, n, r) => ({
    name: n,
    uri: e,
    image_ori: {
      url: r || "",
      width: t,
      height: i,
      format: "",
      url_formats: {}
    }
  });
  let a = (e, t, i, r) => ({
    uri: e,
    url: t,
    file_type: attachmentConstants.UploadFileType.UploadFileTypeDefault,
    name: i,
    size: Number(r)
  });
  let c = (e, t) => ({
    directory_id: e,
    name: t
  });
  let u = (e, t, i, n, r) => ({
    vid: e,
    media_type: n,
    duration: t,
    size: Number(i),
    name: r
  });
  require.d(exports, {
    createLinkWithCode: function () {
      return s;
    },
    createBasicLink: function () {
      return r;
    },
    createCodeRepoLink: function () {
      return o;
    },
    createImageObject: function () {
      return l;
    },
    createFileObject: function () {
      return a;
    },
    createDirectory: function () {
      return c;
    },
    createVideoObject: function () {
      return u;
    }
  });
}