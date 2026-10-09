// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'mb' to 'NotifyType'
// - Renamed export 'Kk' to 'sendMentionNotify'
// - Renamed export 'dS' to 'sendBatchMentionNotify'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 610637
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var apiClientInstance = require("api-client-instance") /*id: 22981*/;
  var spaceApiConfig = require("space-api-config") /*id: 11507*/;
  (r = s || {})[r.LARK = 0] = "LARK";
  var s = r;
  (o = {})[o.SINGLE = 0] = "SINGLE";
  o[o.ALL = 1] = "ALL";
  let c = o;
  function u(e, n) {
    var i;
    let {
      userId: r,
      fileToken: o,
      fileType: c
    } = n;
    i = {
      to_user: [r],
      source: c,
      target: s.LARK,
      note_token: o,
      from_user: e
    };
    return apiClientInstance.apiClient.post("/mention/notify/", i, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache,no-store"
      },
      baseURL: spaceApiConfig.getSpaceApiFn()
    });
  }
  function d(e) {
    let {
      userIds: n,
      fileToken: i,
      fileType: r,
      mentionIds: o,
      isWhole: c,
      entities: u,
      source: d
    } = e;
    let h = {
      source: d,
      token: i,
      obj_type: r,
      target: s.LARK,
      mention_ids: o,
      is_whole: c
    };
    if (n.length) {
      h.to_user = n;
    }
    if (u) {
      h.entities = u;
    }
    return apiClientInstance.apiClient.post("/mention/batch_notification/", h, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache,no-store"
      },
      baseURL: spaceApiConfig.getSpaceApiFn()
    });
  }
  require.d(exports, {
    NotifyType: function () {
      return c;
    },
    sendMentionNotify: function () {
      return u;
    },
    sendBatchMentionNotify: function () {
      return d;
    }
  });
}