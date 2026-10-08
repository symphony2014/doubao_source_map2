// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'createImageUploader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-feedback.2262a137.js
         * chunkId: 31747
         * moduleId: 429851
         */
module.exports = function (module, exports, require) {
  var mediaFileUtils = require("media-file-utils") /*id: 759863*/;
  var fileUploaderService = require("file-uploader-service") /*id: 566355*/;
  let s = e => {
    if (e.type === "path") {
      throw Error("Cannot get Blob from PathMediaData");
    }
    if (e.type === "base64") {
      return mediaFileUtils.base64ToBlob(e.value);
    } else {
      return e.value;
    }
  };
  let o = e => a(e);
  let a = e => {
    let t;
    let {
      userId: r,
      appId: n,
      logger: o,
      scene: a,
      type: l
    } = e;
    let c = null;
    t = async e => {
      if (!(c == null ? undefined : c.client)) {
        c = new fileUploaderService.UploaderService({
          type: l,
          scene: a,
          userId: r,
          appId: n
        });
      }
      let t = c;
      return new Promise((r, n) => {
        let i = s(e);
        t.upload(i, {
          complete: e => {
            let {
              Uri: i,
              ImageHeight: s = 0,
              ImageWidth: o = 0
            } = e.uploadResult ?? {};
            if (!i) {
              n(Error("uploaded result is empty"));
              return;
            }
            r({
              image_uri: i,
              image_height: s,
              image_width: o
            });
          },
          error: e => {
            n(e);
          }
        });
      });
    };
    return async e => {
      try {
        return await t(e);
      } catch (e) {
        o.persist.error({
          eventName: `${a}_upload_to_imagex_error`,
          error: e
        });
        throw e;
      }
    };
  };
  let l = e => {
    let t = o(e);
    return async e => {
      if (e.type === "path") {
        throw Error("Not support to upload PathMedia");
      }
      return t(e);
    };
  };
  require.d(exports, {
    createImageUploader: function () {
      return l;
    }
  });
}