// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'SM' to 'getUserProfile'
// - Renamed export 'WN' to 'updateUserProfile'
// - Renamed export 'nw' to 'genDefaultProfile'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 210590
         */
module.exports = function (module, exports, require) {
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var apiErrorChecker = require("api-error-checker") /*id: 429379*/;
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var userProfileStoreHooks = require("user-profile-store-hooks") /*id: 462051*/;
  let p = async (e, t) => {
    if (!e) {
      return Promise.reject(Error("user_id_str is empty"));
    }
    let n = eventReportingService.createEventReporter({
      eventName: "get_profile_info",
      meta: {
        user_id: e
      }
    });
    try {
      let {
        data: t
      } = await apiServicesCollection.ProfileApiService.ProfileInfo({
        avatar_format: "png",
        visit_id: e
      });
      if (t) {
        if (t.profile_brief) {
          userProfileStoreHooks.setUserProfile(t.profile_brief);
        }
        n.success();
        return t.profile_brief;
      }
      n.error({
        reason: "no data"
      });
    } catch (i) {
      if (apiErrorChecker.isApiError(i) && i.errorOption.code === chatErrorCodes.chatErrorCodes.USER_NOT_EXISTED.toString()) {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "gen_user_profile_for_user_stay_on_chat_page",
          meta: {
            user_id: e
          }
        });
        if (t) {
          throw Error("get profile only get");
        }
        if ((await _({
          entity_id: e,
          avatar_url: "",
          nickname: "",
          user_name: ""
        })) !== 0) {
          userProfileStoreHooks.markProfileLoaded();
          n.error({
            reason: "with update fail",
            error: i
          });
        }
      } else {
        n.error({
          reason: "unhandle catch",
          error: i instanceof Error ? i : Error(String(i))
        });
      }
    }
  };
  let _ = async e => {
    let t = eventReportingService.createEventReporter({
      eventName: "update_user_profile",
      meta: {
        user_id: e.entity_id
      }
    });
    try {
      t.addDurationPoint("start");
      let {
        code: n,
        msg: i,
        data: o
      } = await apiServicesCollection.ProfileApiService.UpdateProfile(e);
      if (n === 0 && (o == null ? undefined : o.entity_id)) {
        t.addDurationPoint("success");
        t.success();
        await p(o == null ? undefined : o.entity_id);
        return 0;
      }
      if (i) {
        samanthaToastFactory.toastInstance.error(i);
      }
      if (n === 0) {
        return -1001;
      } else {
        return Number(n);
      }
    } catch (n) {
      t.error({
        reason: "update_user_profile_failed",
        error: n instanceof Error ? n : Error(String(n))
      });
      if (apiErrorChecker.isApiError(n) && (e.nickname || !e.entity_id)) {
        if (n.errorOption.message) {
          samanthaToastFactory.toastInstance.error(n.errorOption.message);
        }
        if (isNullishCheck.isNil(n.errorOption.code)) {
          return -1002;
        } else {
          return parseInt(n.errorOption.code, 10);
        }
      }
      try {
        let n = await asyncRetryUtils.asyncRetry(() => p(e.entity_id, true), 3, e => e * 800, (e, n) => {
          t.updateMeta({
            retry: n,
            [`retry${n}`]: e
          });
        });
        if (n == null ? undefined : n.entity_id) {
          t.updateMeta({
            retrySuccess: 1
          });
          return 0;
        }
        throw Error("retry not entity_id");
      } catch (e) {
        t.updateMeta({
          retrySuccess: 0,
          retryFail: e
        });
      }
      return -1003;
    }
  };
  let v = async e => {
    try {
      var n;
      let i = await Promise.all([apiServicesCollection.ProfileApiService.UpdateProfile({
        entity_id: e,
        avatar_url: "",
        nickname: "",
        user_name: ""
      }), apiServicesCollection.ProfileApiService.UserHitProfileRegister()]);
      return (i == null ? undefined : (n = i[1]) === null || n === undefined ? undefined : n.data?.profile_enable) || false;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "gen_user_default_profile_error",
        message: "[genUserDefaultProfile] genUserDefaultProfile failed",
        error: e instanceof Error ? e : Error(String(e))
      });
      return false;
    }
  };
  require.d(exports, {
    getUserProfile: function () {
      return p;
    },
    updateUserProfile: function () {
      return _;
    },
    genDefaultProfile: function () {
      return v;
    }
  });
}