// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'getMaxSizeLimit'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24618.f0502e34.js
         * chunkId: 24618
         * moduleId: 532036
         */
module.exports = function (module, exports, require) {
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  let l = function (e = false) {
    if (userAgentDeviceDetector.isWebKit() || e) {
      return 31457280;
    } else {
      return 10485760;
    }
  };
  let o = e => `${Number(e / 1048576).toFixed(3)} MB`;
  let s = {
    maxSizeMB: 10,
    maxWidthOrHeight: 2560,
    useWebWorker: true
  };
  let d = async (e, t, l) => {
    var d;
    var u;
    let c = eventReportingService.createEventReporter({
      eventName: "uploader_compress_image"
    });
    if (!(e == null ? undefined : (d = e.type) === null || d === undefined ? undefined : d.includes("image/gif")) && ((e == null ? undefined : (u = e.type) === null || u === undefined ? undefined : u.includes("image/svg")) || e.size.valueOf() < (l ?? 10485760) || userAgentDeviceDetector.isWebKit())) {
      c.success({
        meta: {
          skip: 1,
          type: e.type
        }
      });
      return e;
    }
    try {
      let {
        default: i
      } = await asyncRetryUtils.retryPromise(() => require.e("image-compression-processor") /*id: 24862*/.then(require.bind(require, "image-compression-utils") /*id: 925915*/));
      let r = await i(e, {
        ...s,
        ...t
      });
      c.success({
        meta: {
          skip: 0,
          type: e.type,
          before_size: o(e.size),
          after_size: o(r.size)
        }
      });
      return r;
    } catch (t) {
      c.error({
        reason: "uploader_compress_image_failed",
        error: t,
        meta: {
          type: e.type
        }
      });
      return e;
    }
  };
  require.d(exports, {
    getMaxSizeLimit: function () {
      return l;
    },
    compressor: function () {
      return d;
    }
  });
}