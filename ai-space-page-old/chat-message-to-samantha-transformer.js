// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'transformMessagesToSamanthaFormat'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 603937
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var chatPluginMatcherRegistry = require("chat-plugin-matcher-registry") /*id: 107672*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var uiComponentTypeConstants = require("ui-component-type-constants") /*id: 169442*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  let c = async e => {
    let t = await chatPluginMatcherRegistry.loadProtocolTransformMatcher();
    if (t) {
      let i = t.find(t => {
        var n;
        if ((n = t.matchPluginForMessageToSamanthaChatMessage) === null || n === undefined) {
          return undefined;
        } else {
          return n.call(t, e);
        }
      })?.pluginIdentifier;
      let o = await chatPluginIocManager.protocolTransformLoader(i);
      if (o == null ? undefined : o.messageToSamanthaChatMessage) {
        if (o == null) {
          return undefined;
        } else {
          return o.messageToSamanthaChatMessage(e);
        }
      }
    }
  };
  let u = async function (e) {
    var n;
    var l;
    var h;
    var v;
    var f;
    var y;
    var w;
    var E;
    var S;
    var j;
    var $;
    var P;
    var Z;
    var M;
    var W;
    var L;
    var G;
    var z;
    var U;
    var J;
    var K;
    var ee;
    var en;
    var el;
    let er;
    let es = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let {
      memoryType: ed,
      launchStage: ec
    } = es;
    let eu = await Promise.all(e.map(c));
    let eh = (n = e[0]) === null || n === undefined ? undefined : n.ext?.samantha_onboarding;
    let ep = infraUtilFunctions.ensureBoolean(((l = e[0]) === null || l === undefined ? undefined : l.ext?.use_deep_think) === "1" || !["0", "2"].includes(((h = e[0]) === null || h === undefined ? undefined : h.ext?.use_deep_think) || "") && undefined);
    let ev = ((v = e[0]) === null || v === undefined ? undefined : v.ext?.artifact_key) ?? objectPathGetDefault.getObjectPathDefault(safeJsonUtils.safeParse(e[0].ext?.input_skill, {}), "variables.artifact_key");
    let em = infraUtilFunctions.ensureBoolean(objectPathGetDefault.getObjectPathDefault(safeJsonUtils.safeParse(e[0].ext?.input_skill, {}), "variables.disable_canvas"));
    let eg = isUndefinedCheck.isUndefined(ev) || em ? undefined : String(ev);
    if ((f = e[0]) === null || f === undefined ? undefined : f.ext?.thread_source) {
      er = (el = e[0]) === null || el === undefined ? undefined : el.ext?.thread_source;
    }
    return {
      messages: eu.filter(infraUtilFunctions.isDefined),
      completion_option: {
        is_regen: ((y = e[0]) === null || y === undefined ? undefined : y.ext?.regen) === "1",
        with_suggest: ((w = e[0]) === null || w === undefined ? undefined : w.ext?.answer_with_suggest) === "1",
        need_create_conversation: !!e[0]?.local_conversation_id,
        launch_stage: ec,
        is_replace: ((E = e[0]) === null || E === undefined ? undefined : E.ext?.replace) === "1",
        is_delete: ((S = e[0]) === null || S === undefined ? undefined : S.ext?.delete) === "1",
        is_ai_playground: ((j = e[0]) === null || j === undefined ? undefined : j.ext?.is_playground) === "1",
        memory_type: ed,
        message_from: (($ = e[0]) === null || $ === undefined ? undefined : $.ext?.send_from_desktop_launcher_share) === "1" ? uiComponentTypeConstants.uiInteractionType.SharedApp : ((P = e[0]) === null || P === undefined ? undefined : P.ext?.send_from_desktop_launcher) === "1" ? uiComponentTypeConstants.uiInteractionType.DesktopLauncher : ((Z = e[0]) === null || Z === undefined ? undefined : Z.ext?.send_from_pc_push) === "1" ? uiComponentTypeConstants.uiInteractionType.DesktopPush : ((M = e[0]) === null || M === undefined ? undefined : M.ext?.send_from_skill_guidance_or_suggestion) === "1" ? uiComponentTypeConstants.uiInteractionType.GuidanceOrSuggestion : ((W = e[0]) === null || W === undefined ? undefined : W.ext?.send_from_canvas_action_bar) === "1" ? uiComponentTypeConstants.uiInteractionType.CanvasActionbar : uiComponentTypeConstants.uiInteractionType.InputBox,
        onboarding: eh || undefined,
        artifact_key: eg,
        action_bar_skill_id: (L = e[0]) === null || L === undefined ? undefined : L.skill?.skill_type,
        disable_canvas: em,
        use_deep_think: ep,
        use_auto_cot: infraUtilFunctions.ensureBoolean(((G = e[0]) === null || G === undefined ? undefined : G.ext?.use_deep_think) === "2"),
        selected_regen_id: (z = e[0]) === null || z === undefined ? undefined : z.ext?.lastRegenerateSelectedMessageId,
        shared_app_name: ((U = e[0]) === null || U === undefined ? undefined : U.ext?.send_from_desktop_launcher_share) === "1" ? (J = e[0]) === null || J === undefined ? undefined : J.ext?.shared_app_name : undefined,
        resend_for_regen: ((K = e[0]) === null || K === undefined ? undefined : K.ext?.resend_for_regen) === "1",
        thread_source: er,
        enable_commerce_credit: e[0].ext?.commerce_credit_config_enable === "1"
      },
      evaluate_option: {
        web_ab_params: ((ee = e[0]) === null || ee === undefined ? undefined : ee.ext?.web_ab_params) || ""
      },
      related_share_id: (en = e[0]) === null || en === undefined ? undefined : en.ext?.related_share_id,
      section_id: e[0]?.section_id || undefined,
      conversation_id: e[0].conversation_id || undefined,
      local_conversation_id: e[0].local_conversation_id,
      local_message_id: e[0].local_message_id,
      message_id: e[0].message_id || undefined,
      reply_id: e[0].reply_id || undefined
    };
  };
  require.d(exports, {
    transformMessagesToSamanthaFormat: function () {
      return u;
    }
  });
}