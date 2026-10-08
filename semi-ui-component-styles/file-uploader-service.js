// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'throttledPathFilterStringify'
// - Resolved require(245841) to 'throttled-path-filter-stringify'
// - Renamed variable 'o' to 'dayjsDateLibrary'
// - Resolved require(349712) to 'dayjs-date-library'
// - Renamed variable 'a' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'l' to 'getObjectPathString'
// - Resolved require(965758) to 'get-object-path-string'
// - Renamed variable 's' to 'eventReportingService'
// - Resolved require(703133) to 'event-reporting-service'
// - Renamed variable 'c' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'd' to 'teaFileUploadSdk'
// - Resolved require(64150) to 'tea-file-upload-sdk'
// - Renamed variable 'p' to 'aiSpaceAttachmentConstants'
// - Resolved require(241695) to 'ai-space-attachment-constants'
// - Updated imported property 'zQ' to 'createEventReporter' (module 703133)
// - Updated imported property 'kZ' to 'attachmentTypes' (module 241695)
// - Updated imported property 'wV' to 'attachmentTypeNames' (module 241695)
// - Updated imported property 'SI' to 'ResourceApiService' (module 147875)
// - Updated imported property 'mH' to 'SamanthaApiService' (module 147875)
// - Updated imported property 'G' to 'getObjectPathString' (module 965758)
// - Updated imported property 'Z' to 'throttledPathStr' (module 245841)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: share-ai-ppt-modal.064c3f61.js
         * chunkId: 2298
         * moduleId: 566355
         */
module.exports = function (module, exports, require) {
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var dayjsDateLibrary = require("dayjs-date-library") /*id: 349712*/;
  var i = dayjsDateLibrary;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var getObjectPathString = require("get-object-path-string") /*id: 965758*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var teaFileUploadSdk = require("tea-file-upload-sdk") /*id: 64150*/;
  var u = teaFileUploadSdk;
  var aiSpaceAttachmentConstants = require("ai-space-attachment-constants") /*id: 241695*/;
  function f(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  let h = u;
  let m = e => "https://www.doubao.com/top/v1";
  class v {
    get stsToken() {
      var t;
      var n;
      var i;
      var l;
      var c;
      return {
        CurrentTime: ((t = this.authToken) === null || t === undefined ? undefined : t.auth?.current_time) || "",
        ExpiredTime: ((n = this.authToken) === null || n === undefined ? undefined : n.auth?.expired_time) || "",
        SessionToken: ((i = this.authToken) === null || i === undefined ? undefined : i.auth?.session_token) || "",
        AccessKeyId: ((l = this.authToken) === null || l === undefined ? undefined : l.auth?.access_key_id) || "",
        SecretAccessKey: ((c = this.authToken) === null || c === undefined ? undefined : c.auth?.secret_access_key) || ""
      };
    }
    get tokenExpired() {
      var t;
      if (!this.authToken) {
        return true;
      }
      let r = i();
      let n = i((t = this.authToken) === null || t === undefined ? undefined : t.auth?.expired_time);
      return r.isAfter(n);
    }
    get localParams() {
      return {
        type: this.type,
        scene: this.scene
      };
    }
    async refreshToken() {
      let e = eventReportingService.createEventReporter({
        eventName: "uploader_service_refresh_token",
        meta: this.localParams
      });
      try {
        var i;
        var l;
        var c;
        var d;
        let s = null;
        if (this.type !== aiSpaceAttachmentConstants.attachmentTypes.Video) {
          let {
            data: e
          } = await apiServicesCollection.ResourceApiService.ResourcePrepareUpload({
            tenant_id: "5",
            scene_id: this.scene,
            resource_type: this.type
          });
          s = {
            ...e,
            auth: {
              ...(e == null ? undefined : e.upload_auth_token),
              access_key_id: e == null ? undefined : e.upload_auth_token?.access_key,
              secret_access_key: e == null ? undefined : e.upload_auth_token?.secret_key
            }
          };
        } else if (this.type === aiSpaceAttachmentConstants.attachmentTypes.Video) {
          let {
            data: e
          } = await apiServicesCollection.SamanthaApiService.GetMediaUploadToken();
          s = {
            auth: e == null ? undefined : e.sts_token,
            upload_host: e == null ? undefined : e.upload_info?.video_host,
            space_name: e == null ? undefined : e.upload_info?.space_name
          };
        }
        if (s) {
          this.authToken = s;
          if ((i = this.client) !== null && i !== undefined) {
            i.refreshSTSToken(this.stsToken);
          }
          if (this.type === aiSpaceAttachmentConstants.attachmentTypes.Image) {
            if ((l = this.client) !== null && l !== undefined) {
              l.setOption({
                imageHost: m(`https://${s == null ? undefined : s.upload_host}`),
                imageConfig: {
                  serviceId: (s == null ? undefined : s.service_id) || ""
                }
              });
            }
          } else if (this.type === aiSpaceAttachmentConstants.attachmentTypes.Video) {
            if ((c = this.client) !== null && c !== undefined) {
              c.setOption({
                videoHost: m(s.upload_host),
                videoConfig: {
                  spaceName: s.space_name
                }
              });
            }
          } else if ((d = this.client) !== null && d !== undefined) {
            d.setOption({
              imageHost: m(`https://${s == null ? undefined : s.upload_host}`),
              objectConfig: {
                serviceId: (s == null ? undefined : s.service_id) || ""
              }
            });
          }
          e.success();
          return Promise.resolve(s);
        }
        e.error({
          reason: "GetUploadAuthToken empty",
          error: Error("GetUploadAuthToken empty")
        });
        return Promise.reject(Error("GetUploadAuthToken empty"));
      } catch (t) {
        e.error({
          reason: "GetUploadAuthToken catch",
          error: t
        });
        return Promise.reject(t);
      }
    }
    onComplete(e) {
      if (this.callbackMap[e.key]) {
        var t;
        var r;
        if ((r = this.callbackMap[e.key]) !== null && r !== undefined && (t = r.complete) !== null && t !== undefined) {
          t.call(r, e);
        }
        delete this.callbackMap[e.key];
      }
    }
    onError(e) {
      if (this.callbackMap[e.key]) {
        var t;
        var r;
        if ((r = this.callbackMap[e.key]) !== null && r !== undefined && (t = r.error) !== null && t !== undefined) {
          t.call(r, e);
        }
      }
    }
    onProgress(e) {
      var t;
      var r;
      if ((r = this.callbackMap[e.key]) !== null && r !== undefined && (t = r.progress) !== null && t !== undefined) {
        t.call(r, e);
      }
    }
    async upload(e, t) {
      var o;
      let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      let a = eventReportingService.createEventReporter({
        eventName: "uploader_service_upload",
        meta: this.localParams
      });
      if (!this.client) {
        a.error({
          reason: "client is empty"
        });
        return null;
      }
      if (this.tokenExpired) {
        try {
          await this.refreshToken();
        } catch (e) {
          a.error({
            reason: "refreshToken error",
            error: e
          });
          if (t != null && (o = t.error) !== null && o !== undefined) {
            o.call(t, {
              startTime: 0,
              endTime: 0,
              stageStartTime: 0,
              stageEndTime: 0,
              duration: 0,
              fileSize: 0,
              key: "",
              oid: "",
              percent: 0,
              signature: "",
              sliceLength: 0,
              stage: "",
              status: 3,
              task: null,
              uploadID: "",
              type: "error",
              extra: {
                error: e,
                message: "refreshToken error"
              }
            });
          }
          return null;
        }
      }
      if (!this.authToken?.auth) {
        a.error({
          reason: "authToken is empty"
        });
        throw Error("authToken is empty");
      }
      let c = {
        file: e,
        stsToken: this.stsToken,
        type: aiSpaceAttachmentConstants.attachmentTypeNames[this.type],
        useDirectUpload: this.useDirectUpload,
        callbackArgs: i.callbackArgs
      };
      a.updateMeta({
        authTokenReady: true,
        file_size: e.size,
        file_name_length: getObjectPathString.getObjectPathString("name")(e).length
      });
      let d = null;
      try {
        d = this.type === aiSpaceAttachmentConstants.attachmentTypes.Image ? this.client.addImageFile(c) : this.client.addFile(c);
        a.updateMeta({
          added: true
        });
      } catch (e) {
        a.error({
          reason: "catch add file",
          error: e
        });
      }
      if (!d) {
        a.error({
          reason: "fileKey is empty"
        });
        return null;
      }
      this.callbackMap[d] = {
        ...t,
        complete: e => {
          var r;
          a.success({
            meta: throttledPathFilterStringify.throttledPathStr(e, ["duration", "fileType", "realtimeSpeed", "speed", "totalDuration"])
          });
          if ((r = t.complete) !== null && r !== undefined) {
            r.call(t, e);
          }
        },
        error: e => {
          var i;
          a.error({
            reason: "upload error",
            error: e.extra?.error,
            meta: {
              sdk_error_msg: e.extra?.message,
              sdk_error_code: e.extra?.errorCode
            }
          });
          if ((i = t.error) !== null && i !== undefined) {
            i.call(t, e);
          }
        }
      };
      try {
        a.updateMeta({
          started: true
        });
        this.client.start(d);
      } catch (e) {
        a.error({
          reason: "catch start",
          error: e
        });
        return null;
      }
      return d;
    }
    pause(e) {
      var t;
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "uploader_service_upload_pause",
        meta: {
          fileKey: e
        }
      });
      if ((t = this.client) !== null && t !== undefined) {
        t.pause(e);
      }
    }
    resume(e) {
      var t;
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "uploader_service_upload_resume",
        meta: {
          fileKey: e
        }
      });
      if ((t = this.client) !== null && t !== undefined) {
        t.start(e);
      }
    }
    getInstance() {
      return this.client;
    }
    constructor(e) {
      f(this, "type", undefined);
      f(this, "scene", undefined);
      f(this, "authToken", undefined);
      f(this, "client", undefined);
      f(this, "useDirectUpload", undefined);
      f(this, "callbackMap", {});
      let {
        type: t,
        scene: r,
        userId: n,
        appId: o,
        useDirectUpload: i = false,
        retryUploadTime: a = 2
      } = e;
      this.useDirectUpload = i;
      this.type = t;
      this.scene = r;
      let l = eventReportingService.createEventReporter({
        eventName: "uploader_service_init",
        meta: this.localParams
      });
      try {
        var c;
        var d;
        var u;
        this.client = new h({
          appId: o,
          userId: n,
          useFileExtension: true,
          retryUploadTime: a ?? 2
        });
        if ((c = this.client) !== null && c !== undefined) {
          c.on("complete", this.onComplete.bind(this));
        }
        if ((d = this.client) !== null && d !== undefined) {
          d.on("error", this.onError.bind(this));
        }
        if ((u = this.client) !== null && u !== undefined) {
          u.on("progress", this.onProgress.bind(this));
        }
        l.success();
      } catch (e) {
        l.error({
          reason: "init error",
          error: e
        });
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    UploaderService: function () {
      return v;
    }
  });
}