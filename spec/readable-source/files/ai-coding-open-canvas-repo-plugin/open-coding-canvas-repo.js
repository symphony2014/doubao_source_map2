// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'aiActionConstants'
// - Resolved require(535829) to 'ai-action-constants'
// - Renamed variable 'o' to 'skillConstantsEnum'
// - Resolved require(791429) to 'skill-constants-enum'
// - Renamed variable 'r' to 'promiseAsyncUtilities'
// - Resolved require(592307) to 'promise-async-utilities'
// - Renamed variable 'a' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'G' to 'aiActionConstants' (module 535829)
// - Updated imported property 'b3' to 'SceneType' (module 791429)
// - Updated imported property 'GR' to 'createDelayedPromise' (module 592307)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-coding-open-canvas-repo-plugin.1717777f.js
         * chunkId: 52823
         * moduleId: 15565
         */
module.exports = function (module, exports, require) {
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  async function l(e) {
    var t;
    var n;
    var l;
    var u;
    let {
      openCodingCanvasByRepo: d,
      payload: c,
      sendMessage: p,
      phase3EndTime: s
    } = e;
    let _ = new URLSearchParams(window.location.search);
    let v = (t = _.get("channel")) === null || t === undefined ? undefined : t.trim();
    let m = ((n = _.get("keywordid")) === null || n === undefined ? undefined : n.trim()) || undefined;
    let f = ((l = _.get("keywordname")) === null || l === undefined ? undefined : l.trim()) || undefined;
    let h = ((u = _.get("scene")) === null || u === undefined ? undefined : u.trim()) || undefined;
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "code_repo_jump_phase4_duration",
      meta: {
        duration: Date.now() - s,
        plugin: aiActionConstants.aiActionConstants.Code_Canvas_Open_Repo
      }
    });
    let k = Date.now();
    if (!(c == null ? undefined : c.id) || !(c == null ? undefined : c.name) || !(c == null ? undefined : c.url)) {
      return;
    }
    if (!(c == null ? undefined : c.query)) {
      if (d != null) {
        d(c);
      }
      return;
    }
    let C = {
      text: "",
      reportParams: {
        scene: h || (v ? skillConstantsEnum.SceneType.OUTSIDE : ""),
        collection_id: m,
        collection_name: f,
        send_source: "new_thread_auto",
        use_skill: true
      },
      extraExt: {
        input_skill: JSON.stringify({
          skill_id: "16",
          skill_type: 16
        })
      },
      sendAttachments: [{
        key: c.id,
        identifier: c.id,
        localKey: c.id,
        type: "link",
        name: c.name,
        url: c.url,
        extra: {
          repo_id: c.id,
          repo_name: c.name
        }
      }]
    };
    try {
      await (p == null ? undefined : p([C]));
      await promiseAsyncUtilities.createDelayedPromise(500);
      if (d != null) {
        d(c);
      }
      loggerServiceCore.defaultLogger.persist.info({
        eventName: "code_repo_jump_phase5_duration",
        meta: {
          duration: Date.now() - k,
          plugin: aiActionConstants.aiActionConstants.Code_Canvas_Open_Repo
        }
      });
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "UrlAction_CodeRepo_SendMessage_Failed",
        error: e
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return l;
    }
  });
}