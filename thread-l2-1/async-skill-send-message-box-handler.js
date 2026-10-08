// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'qs' to 'isSkillMessage'
// - Renamed export 'VE' to 'extractMessageAndRefContent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 801371
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var messageContentUtils = require("message-content-utils") /*id: 976464*/;
  var skillMessageBoxDataExtractor = require("skill-message-box-data-extractor") /*id: 179396*/;
  var urlValidator = require("url-validator") /*id: 714614*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var cjkAwareConcat = require("cjk-aware-concat") /*id: 234823*/;
  var p = {
    explain: "explain",
    translate: "translate",
    summarize: "summarize",
    grammar: "grammar",
    rewrite: "rewrite",
    ask: "browser_ask",
    custom: "custom"
  };
  let h = [{
    id: p.explain,
    name: "flow_web_ext_action_explain",
    icon: "explain"
  }, {
    id: p.translate,
    name: "flow_web_ext_action_translate_to",
    icon: "translate"
  }, {
    id: p.summarize,
    name: "flow_web_ext_action_summarize",
    icon: "summarize"
  }, {
    id: p.grammar,
    name: "flow_web_ext_action_grammar",
    icon: "check"
  }, {
    id: p.rewrite,
    name: "flow_web_ext_action_rewrite",
    icon: "rewrite"
  }];
  let m = e => {
    return e != null && !!e.ext && (!!(e == null ? undefined : e.ext?.browser_user_query) || !!(e == null ? undefined : e.ext?.browser_ask) || !!(e == null ? undefined : e.ext?.browser_youtube_summary_transcript) || !!f(e) || !!h.find(t => {
      return e.ext?.[t.id];
    }) || !!(e == null ? undefined : e.ext?.browser_plugin_info) && safeJsonUtils.safeParse(e.ext.browser_plugin_info, {}).skill_name === "video_summary" || !!messageContentTypeAndStatusChecker.bt$(e) || !!messageContentTypeAndStatusChecker.Fd2(e) && !!(e == null ? undefined : e.ext?.reference_content) && !messageContentTypeAndStatusChecker.Sqr(e) && !messageContentTypeAndStatusChecker.D28(e));
  };
  let f = e => [aiAssistantSkillTypes.SamanthaTypes.SamanthaCustomSkill, aiAssistantSkillTypes.SamanthaTypes.SamanthaExplain].includes(e == null ? undefined : e.content_type);
  let g = e => {
    let i = "";
    if (messageContentTypeAndStatusChecker.bt$(e) || messageContentTypeAndStatusChecker.cLH(e)) {
      i = e.content_obj?.text;
    } else {
      let t = safeJsonUtils.safeParse(e.ext?.reference_content, []);
      i = (t == null ? undefined : t.length) ? t.map(e => e.type === "text" ? e.text || (e == null ? undefined : e.content) : "").join("") : "";
    }
    return i || messageContentUtils.formatMessage(e, false) || "";
  };
  let v = e => {
    var b;
    var x;
    let {
      message: _,
      t: k,
      translateLanguage: S
    } = e;
    let C = g(_);
    let $ = safeJsonUtils.safeParse(_.ext?.browser_plugin_info, null);
    if ((_ == null ? undefined : _.ext?.browser_youtube_summary_transcript) || $ && ($ == null ? undefined : $.skill_name) === "video_summary") {
      let e = safeJsonUtils.safeParse(_ == null ? undefined : _.ext?.browser_youtube_summary_transcript, $);
      let t = e.title || C;
      return {
        refContent: t,
        messageContent: k("flow_web_ext_youtube_summarize"),
        onQuoteClick: () => window.open(xssContentSanitizer.sanitizeUrl(e.url || t, null, {
          logType: "js.window.location",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: false,
          bid: "flow_web",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: true,
          escapeRule: "escape-report",
          reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
          scmBranch: "release_train_samantha_2026-03-09_1120843696898",
          scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
          scmVersion: "1.0.4.168",
          webpackPluginVersion: "3.4.5",
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb*95$m5W-$dFcHdXW*t4ZEZwW$RucFpWMlJz$EROT2$WbD$PW*Rp%0Zad$lW-zFla3d5T$d4ak0wNW9XakpWZEZsdE9%%k1NMD$zWW0x%mRHTllWblpr%jFWMFd%ST$k$1JI$m5Wa1F6a3haRWRz-zJON%5%QmpNa1o1$2pO$2$nPT0"
        }))
      };
    }
    if (_ == null ? undefined : _.ext?.browser_user_query) {
      let e = _ == null ? undefined : _.ext?.browser_user_query;
      let t = `${e}
`;
      return {
        refContent: (C == null ? undefined : C.includes(t)) ? C == null ? undefined : (b = C.split(t)[1]) === null || b === undefined ? undefined : b.trim() : C == null ? undefined : C.trim(),
        messageContent: e
      };
    }
    if (_ == null ? undefined : _.ext?.browser_ask) {
      return {
        refContent: C,
        messageContent: safeJsonUtils.safeParse(_.ext.browser_ask, {}).query
      };
    }
    let E = skillMessageBoxDataExtractor.extractSkillBoxData(_);
    if (E.skillType === chatAppEnums.SkillType.Translate) {
      let e = E.targetLang;
      return {
        refContent: C,
        messageContent: cjkAwareConcat.smartConcat(k("flow_web_ext_action_translate_to"), e)
      };
    }
    if (messageContentTypeAndStatusChecker.Fd2(_)) {
      return {
        refContent: C,
        messageContent: (safeJsonUtils.safeParse(_ == null ? undefined : _.content, undefined) || _.content_obj).text || ""
      };
    }
    if (messageContentTypeAndStatusChecker.cLH(_)) {
      return {
        refContent: C,
        messageContent: k("flow_web_ext_action_explain")
      };
    }
    if (messageContentTypeAndStatusChecker.pEk(_)) {
      return {
        refContent: ((x = safeJsonUtils.safeParse(_ == null ? undefined : _.ext?.input_skill, {})) === null || x === undefined ? undefined : x.variables?.reference_text) || C,
        messageContent: k("flow_web_ext_action_summarize")
      };
    }
    let R = null;
    if (messageContentTypeAndStatusChecker.bt$(_)) {
      let e = function (e) {
        let n = e == null ? undefined : e.ext?.browser_plugin_info;
        if (!n) {
          return null;
        }
        let i = safeJsonUtils.safeParse(n, {});
        if (i == null ? undefined : i.custom_ref_show_variable) {
          return i.custom_ref_show_variable;
        } else {
          return null;
        }
      }(_);
      let t = urlValidator.isValidUrl((e == null ? undefined : e.icon) || "");
      let n = t && (e == null ? undefined : e.title) || "";
      let i = t ? "" : e == null ? undefined : e.title;
      R = {
        id: p.custom,
        name: n,
        icon: e == null ? undefined : e.icon,
        text: i
      };
    } else {
      R = _.content_type === aiAssistantSkillTypes.SamanthaTypes.SamanthaDesExtReferenceAsk ? {
        id: p.ask,
        name: "",
        text: _.content_obj?.text
      } : h.find(e => {
        return _.ext?.[e.id];
      }) || null;
    }
    if (R) {
      let e = `${R.text || k(R.name)}`;
      if (R.icon === p.translate) {
        e = `${e}${S}`;
      }
      return {
        messageContent: e,
        refContent: C
      };
    }
    if (messageContentTypeAndStatusChecker.ugN(_)) {
      let e = safeJsonUtils.safeParse(_ == null ? undefined : _.content, undefined) || _.content_obj;
      if (e == null ? undefined : e.text) {
        return {
          messageContent: e.text || "",
          refContent: C
        };
      }
    }
    return {
      messageContent: "",
      refContent: C
    };
  };
  require.d(exports, {
    isSkillMessage: function () {
      return m;
    },
    extractMessageAndRefContent: function () {
      return v;
    }
  });
}