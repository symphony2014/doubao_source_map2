// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'batchFileDownload'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 958042
         */
module.exports = function (module, exports, require) {
  var durationPluginUtil = require("duration-plugin-util") /*id: 180899*/;
  var a = durationPluginUtil;
  var dayjsDateLibrary = require("dayjs-date-library") /*id: 349712*/;
  var o = dayjsDateLibrary;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var fileDownloadUtilities = require("file-download-utilities") /*id: 552822*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  async function m(e, i, t) {
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_downloadfilestart"
    });
    if (chatFgStoreHooks.getSourceKeySync("ai_space_use_new_download", {
      source: chatStorageKeys.chatStorageKeys.tea,
      defaultValue: false
    })) {
      return h(e, t);
    }
    let n = e.filter(e => e.type === "file");
    let a = e.filter(e => e.type === "image");
    let r = e.filter(e => e.type === "audio" || e.type === "video");
    let o = e.filter(e => e.type === "code_artifact");
    let m = {};
    let f = {};
    let v = {};
    async function g(e) {
      let i = await Promise.all(e.map(e => apiServicesCollection.SamanthaApiService.GetMediaPlayInfo({
        key: e.uri,
        node_id: e.nodeId
      })));
      e.forEach((e, t) => {
        var a;
        var r;
        f[e.uri] = ((r = i[t]) === null || r === undefined ? undefined : (a = r.data) === null || a === undefined ? undefined : a.original_media_info?.main_url) || "";
      });
    }
    async function k(e, i) {
      var t;
      if (!e.length) {
        return;
      }
      let {
        data: n
      } = await apiServicesCollection.ResourceApiService.GetFileURL({
        uris: e,
        type: i
      });
      if (n != null && (t = n.file_urls) !== null && t !== undefined) {
        t.forEach(e => {
          let {
            main_url: i,
            back_url: t,
            uri: n
          } = e;
          let a = i || t;
          if (n && a) {
            m[n] = a;
          }
        });
      }
    }
    async function w(e, i) {
      var t;
      if (!e.length) {
        return;
      }
      let {
        data: n
      } = await apiServicesCollection.SamanthaApiService.AISpaceGetFileUrl({
        node_id_str: e.map(e => String(e)),
        share_id: i
      });
      if (n != null && (t = n.file_urls) !== null && t !== undefined) {
        t.forEach(e => {
          let {
            main_url: i,
            backup_url: t,
            node_id: n
          } = e;
          let a = i || t;
          if (n && a) {
            v[n] = a;
          }
        });
      }
    }
    try {
      await Promise.all([k(n.map(e => e.uri), "file"), w(a.map(e => e.nodeId), i), g(r), _(o)]);
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        message: "GetFileURL api error",
        error: e
      });
      return Promise.reject(e);
    }
    let x = e.map(async e => {
      let {
        uri: i,
        nodeId: t
      } = e;
      let n = "";
      if (e.type === "audio" || e.type === "video") {
        n = f[i];
      } else if (e.type === "image") {
        n = v[t];
      }
      if (n = m[i]) {
        if (getFileExtension.getFileExtension(e.name) === "zip") {
          fileDownloadUtilities.openUrlInHiddenIframe(n);
        } else {
          await fileDownloadUtilities.downloadFileViaBlob(n, e.name);
        }
      }
    });
    await Promise.all(x);
  }
  async function _(e) {
    if (e == null ? undefined : e.length) {
      var i;
      if ((i = (await Promise.all(e.map(e => apiServicesCollection.SamanthaApiService.GetCodeArtifactMeta({
        code_id: e.uri
      })))).map(e => e.data)).length) {
        i.forEach(e => {
          let i = `/samantha/code/download_artifact?code_id=${e.resource_id}&version=${e.resource_version}&title=${e.identifier}`;
          fileDownloadUtilities.openUrlInHiddenIframe(i);
        });
      }
    }
  }
  async function h(e, i) {
    if (!(e == null ? undefined : e.length)) {
      return;
    }
    let n = e.filter(e => e.type === "code_artifact");
    let a = e.filter(e => e.type === "metting_minutes");
    let r = e.filter(e => e.type !== "code_artifact" && e.type !== "metting_minutes");
    _(n);
    (function (e, i) {
      if (!(e == null ? undefined : e.length)) {
        return;
      }
      let t = e => {
        let i = e > 3600000;
        return o.duration(e).format(i ? "HH:mm:ss" : "mm:ss");
      };
      let n = function (e = []) {
        return e.map(e => {
          let n = e.speaker?.name || "Unknown";
          let a = t(e.start_time || 0);
          return `${n}  ${a}
${e.content || ""}`;
        }).join("\n\n");
      };
      e.forEach(async e => {
        try {
          var a;
          var r;
          var s;
          var l;
          var p;
          var _;
          var f;
          let {
            uri: g
          } = e;
          let k = await apiServicesCollection.SamanthaApiService.SummaryMeetingPack({
            meeting_id: g
          });
          if (i === "transcript" && !(k == null ? undefined : (_ = k.data) === null || _ === undefined ? undefined : _.meeting_minutes?.transcript) || i === "audio" && !(k == null ? undefined : (f = k.data) === null || f === undefined ? undefined : f.meeting_minutes?.origin_audio)) {
            return;
          }
          let w = await apiServicesCollection.ResourceApiService.GetFileURL({
            uris: [i === "transcript" ? (r = k.data) === null || r === undefined ? undefined : (a = r.meeting_minutes) === null || a === undefined ? undefined : a.transcript?.token : (l = k.data) === null || l === undefined ? undefined : (s = l.meeting_minutes) === null || s === undefined ? undefined : s.origin_audio?.token],
            type: "file"
          });
          let {
            main_url: x,
            back_url: b
          } = (w == null ? undefined : (p = w.data) === null || p === undefined ? undefined : p.file_urls?.[0]) ?? {};
          let y = x ?? b;
          if (!y) {
            return;
          }
          let S = y;
          if (i === "transcript") {
            let e = await (await fetch(y)).json();
            let i = n(e);
            let t = new Blob([i], {
              type: "text/plain"
            });
            S = URL.createObjectURL(t);
          } else {
            S = y;
          }
          let I = i === "audio" ? "audio.wav" : `${e.name}.txt`;
          fileDownloadUtilities.downloadFileViaBlob(S, I);
          setTimeout(() => URL.revokeObjectURL(S), 100);
        } catch (e) {}
      });
    })(a, i || "transcript");
    if (!(r == null ? undefined : r.length)) {
      return;
    }
    let s = {};
    let l = r.map(e => {
      s[e.nodeId] = e;
      return e.nodeId;
    }).filter(Boolean).map(e => ({
      node_id: e
    }));
    let d = await apiServicesCollection.SamanthaApiService.AISpaceGetDownloadInfo({
      requests: l
    });
    let p = d == null ? undefined : d.data?.download_infos;
    if (p == null ? undefined : p.length) {
      p.forEach(e => {
        if (e.main_url) {
          fileDownloadUtilities.openUrlInHiddenIframe(e.main_url);
        }
      });
    }
  }
  o.extend(a);
  require.d(exports, {
    batchFileDownload: function () {
      return m;
    }
  });
}