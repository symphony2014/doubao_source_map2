// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ax' to 'useLauncherConfig'
// - Renamed export 'C7' to 'inputModeConstants'
// - Renamed export 'NK' to 'useAutoRefocusOS'
// - Renamed export 'Vk' to 'useSkillToolLayout'
// - Renamed export 'W5' to 'toolBtnLayoutConstants'
// - Renamed export 'Zn' to 'getGuidanceGenericInputMode'
// - Renamed export 'd5' to 'isModeSelectContainerEnabled'
// - Renamed export 'hG' to 'getGuidanceSkillActiveInputMode'
// - Renamed export 'lK' to 'getInputAggregateList'
// - Renamed export 'yE' to 'useInputFocusHighlight'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 317711
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var taskStatusConstants = require("task-status-constants") /*id: 100834*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  (i = {}).ActionBarWithSingleLine = "1";
  i.InlineExpandSkillbar = "2";
  let c = i;
  (r = {}).ToolBtnsBorderLessTop = "1";
  r.ToolBtnsBorderLessBottom = "2";
  let d = r;
  let h = e => objectPathGetDefault.getObjectPathDefault(e, "ab_config.ab_results.guidance_generic_input_mode");
  let m = e => objectPathGetDefault.getObjectPathDefault(e, "ab_config.ab_results.guidance_skill_active_input_mode");
  let g = e => {
    var t;
    if ((t = objectPathGetDefault.getObjectPathDefault(e, "ab_config.ab_results.input_aggregate")) === null || t === undefined) {
      return undefined;
    } else {
      return t.split(",");
    }
  };
  let f = e => !!objectPathGetDefault.getObjectPathDefault(e, "ab_config.ab_results.enable_mode_select_container");
  let p = () => {
    let [e, t, n, i, r] = chatStoreManager.useStoreSelector("launcherRawSettingStore", e => {
      let {
        settingData: t,
        settingStatus: n
      } = e;
      return [n === taskStatusConstants.TaskStatus.Loading, h(t), m(t), objectPathGetDefault.getObjectPathDefault(t, "ab_config.ab_results.input_min_rows"), g(t)];
    }, deepEqualityUtil.deepEqual);
    return {
      loading: e,
      guidanceGenericInputMode: t,
      guidanceSkillActiveInputMode: n,
      inputMinRows: i,
      inputAggregateList: r
    };
  };
  let _ = e => {
    let {
      guidanceSkillActiveInputMode: t
    } = p();
    let n = t === d.ToolBtnsBorderLessBottom || t === d.ToolBtnsBorderLessTop;
    let i = n && ["bottom_bar", "landing"].includes(e || "");
    return {
      skillToolLayoutV2: n,
      skillToolUIV2: i
    };
  };
  let v = () => ({
    inputFocusHighlight: true
  });
  let b = () => ({
    autoRefocusOSNames: chatStoreManager.useStoreSelector("launcherRawSettingStore", e => {
      var t;
      let {
        settingData: n
      } = e;
      return ((t = objectPathGetDefault.getObjectPathDefault(n, "ab_config.ab_results.input_visible_refocus_os")) === null || t === undefined ? undefined : t.split(",")) || [];
    }, deepEqualUtil_1.deepEqual)
  });
  require.d(exports, {
    useLauncherConfig: function () {
      return p;
    },
    inputModeConstants: function () {
      return c;
    },
    useAutoRefocusOS: function () {
      return b;
    },
    useSkillToolLayout: function () {
      return _;
    },
    toolBtnLayoutConstants: function () {
      return d;
    },
    getGuidanceGenericInputMode: function () {
      return h;
    },
    isModeSelectContainerEnabled: function () {
      return f;
    },
    getGuidanceSkillActiveInputMode: function () {
      return m;
    },
    getInputAggregateList: function () {
      return g;
    },
    useInputFocusHighlight: function () {
      return v;
    }
  });
}