// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N' to 'getDataFromIndexedDB'
// - Renamed export 'K' to 'setDataToIndexedDB'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: image-canvas-openurl-url-parse-plugin.3e6c43f8.js
         * chunkId: 17547
         * moduleId: 190352
         */
module.exports = function (module, exports, require) {
  var i;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var neotixChannelService = require("neotix-channel-service") /*id: 872542*/;
  var shellApiLoggingUtils = require("shell-api-logging-utils") /*id: 191846*/;
  let l = typeof globalThis != "undefined" && (i = globalThis.neotix) !== null && i !== undefined ? i : {};
  let d = typeof window != "undefined" ? window.neotix?.indexedDBAccessor : l == null ? undefined : l.indexedDBAccessor;
  let c = {
    get: shellApiLoggingUtils.wrapWithLogging(async e => await (d == null ? undefined : d.get(e)), "neotix.indexedDBAccessor.get"),
    set: shellApiLoggingUtils.wrapWithLogging(async e => await (d == null ? undefined : d.set(e)), "neotix.indexedDBAccessor.set"),
    sendDataToTarget: shellApiLoggingUtils.wrapWithLogging(async e => await (d == null ? undefined : d.sendDataToTarget(e)), "neotix.indexedDBAccessor.sendDataToTarget")
  };
  shellApiLoggingUtils.wrapApiHandler(async e => await (d == null ? undefined : d.get(e)), "neotix.indexedDBAccessor.get");
  shellApiLoggingUtils.wrapApiHandler(async e => await (d == null ? undefined : d.set(e)), "neotix.indexedDBAccessor.set");
  shellApiLoggingUtils.wrapApiHandler(async e => await (d == null ? undefined : d.sendDataToTarget(e)), "neotix.indexedDBAccessor.sendDataToTarget");
  let u = async (e, t) => new Promise((n, a) => {
    let i = uuidGeneratorUtil.generateUuid();
    let {
      timeout: s = 2000
    } = t || {};
    try {
      let t = e => {
        var s;
        if ((e == null ? undefined : (s = e.data) === null || s === undefined ? undefined : s.bizData?.uniqueId) === i) {
          if ((e == null ? undefined : e.type) === "data_found") {
            n(e == null ? undefined : e.data?.indexdbData);
          } else {
            a(Error(e == null ? undefined : e.type));
          }
          neotixChannelService.NeotixChannel.off("get_indexeddb_data", t);
        }
      };
      setTimeout(() => {
        neotixChannelService.NeotixChannel.off("get_indexeddb_data", t);
        a(Error(`getDataFromIdb openArgs:${JSON.stringify(e)} timeout: ${s}ms`));
      }, s);
      neotixChannelService.NeotixChannel.on("get_indexeddb_data", t);
      c.get({
        openArgs: e,
        bizData: {
          uniqueId: i
        }
      });
    } catch (e) {
      a(e);
    }
  });
  let f = async (e, t, n) => new Promise((a, i) => {
    let s = uuidGeneratorUtil.generateUuid();
    let {
      timeout: l = 2000
    } = n || {};
    try {
      let n = e => {
        var o;
        if ((e == null ? undefined : (o = e.data) === null || o === undefined ? undefined : o.bizData?.uniqueId) === s) {
          if ((e == null ? undefined : e.type) === "set_succeeded") {
            a(e == null ? undefined : e.data);
          } else {
            i(Error(e == null ? undefined : e.type));
          }
          neotixChannelService.NeotixChannel.off("set_indexeddb_data", n);
        }
      };
      setTimeout(() => {
        neotixChannelService.NeotixChannel.off("set_indexeddb_data", n);
        i(Error(`setData2Idb openArgs:${JSON.stringify(e)} timeout: ${l}ms`));
      }, l);
      neotixChannelService.NeotixChannel.on("set_indexeddb_data", n);
      c.set({
        openArgs: e,
        bizData: {
          uniqueId: s
        },
        newData: t
      });
    } catch (e) {
      i(e);
    }
  });
  require.d(exports, {
    getDataFromIndexedDB: function () {
      return u;
    },
    setDataToIndexedDB: function () {
      return f;
    }
  });
}