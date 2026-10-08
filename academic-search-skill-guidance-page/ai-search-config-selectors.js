// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'SV' to 'getAcademicSearchConfig'
// - Renamed export 'Xr' to 'getAISearchConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: academic-search-skill-guidance-page.5273b5be.js
         * chunkId: 73424
         * moduleId: 581982
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var deepSearchSkillChatInputStore = require("deep-search-skill-chat-input-store") /*id: 679775*/;
  let l = () => {
    let [e, t, n, a] = deepSearchSkillChatInputStore.deepSearchChatInputStore(e => [e.isAISearchConfigInited, e.aiSearchConfigLoading, e.aiSearchConfig, e.initAISearchConfigList], deepEqualityUtil_1.isDeepEqual);
    if (!e && !t) {
      a();
    }
    return {
      inited: e,
      loading: t,
      config: n
    };
  };
  let c = () => {
    let [e, t, n, a] = deepSearchSkillChatInputStore.deepSearchChatInputStore(e => [e.isAcademicSearchConfigInited, e.academicSearchConfigLoading, e.academicSearchConfig, e.initAcademicSearchConfigList], deepEqualityUtil_1.isDeepEqual);
    if (!e && !t) {
      a();
    }
    return {
      inited: e,
      loading: t,
      config: n
    };
  };
  let s = () => {
    let {
      config: e,
      inited: t,
      loading: n
    } = l();
    if (t && !n && isEmptyUtil.isEmpty(e)) {
      return [];
    } else {
      return e;
    }
  };
  let o = () => {
    let {
      config: e,
      inited: t,
      loading: n
    } = c();
    if (t && !n && isEmptyUtil.isEmpty(e)) {
      return {};
    } else {
      return e;
    }
  };
  require.d(exports, {
    getAcademicSearchConfig: function () {
      return o;
    },
    getAISearchConfig: function () {
      return s;
    }
  });
}