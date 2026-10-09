// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'safePropertyAssign'
// - Resolved require(182115) to 'safe-property-assign'
// - Renamed variable 'r' to 'throttledArgVerifyUtil'
// - Resolved require(680343) to 'throttled-arg-verify-util'
// - Renamed variable 'o' to 'getOwnKeysUtil_1'
// - Resolved require(144417) to 'get-own-keys-util_1'
// - Renamed variable 'l' to 'safePropertyAssignUtil'
// - Resolved require(377863) to 'safe-property-assign-util'
// - Renamed variable 'u' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Renamed variable 's' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'c' to 'aiSkillProtocolTransformMatcher'
// - Resolved require(71372) to 'ai-skill-protocol-transform-matcher'
// - Renamed variable 'd' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable '_' to 'isObjectOrFunction_1_1'
// - Resolved require(433743) to 'is-object-or-function_1_1'
// - Renamed variable 'f' to 'pptGenerateSymbol'
// - Resolved require(640338) to 'ppt-generate-symbol'
// - Updated imported property 'Z' to 'throttledArgVerify' (module 680343)
// - Updated imported property 'Z' to 'safePropAssign' (module 182115)
// - Updated imported property 'Z' to 'getOwnKeys' (module 144417)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property 'Z' to 'isObjectOrFunction' (module 433743)
// - Updated imported property 'Z' to 'safePropertyAssign' (module 377863)
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 'y' to 'skillToSamanthaMap' (module 71372)
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'x' to 'pptGenerateSymbol' (module 640338)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-protocol-transform.3a79ea39.js
         * chunkId: 59450
         * moduleId: 286152
         */
module.exports = function (module, exports, require) {
  var safePropertyAssign = require("safe-property-assign") /*id: 182115*/;
  var throttledArgVerifyUtil = require("throttled-arg-verify-util") /*id: 680343*/;
  var getOwnKeysUtil_1 = require("get-own-keys-util_1") /*id: 144417*/;
  var a = throttledArgVerifyUtil.throttledArgVerify(function (e, t) {
    safePropertyAssign.safePropAssign(t, getOwnKeysUtil_1.getOwnKeys(t), e);
  });
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var aiSkillProtocolTransformMatcher = require("ai-skill-protocol-transform-matcher") /*id: 71372*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  let v = e => {
    let {
      content_obj: t = {},
      ext: n = {}
    } = e;
    let {
      text: i
    } = t;
    let {
      input_skill: r
    } = n;
    let {
      variables: o
    } = safeJsonUtils.safeParse(r, {});
    if (!isObjectOrFunction_1_1.isObjectOrFunction(o)) {
      return null;
    }
    let {
      action: a
    } = o;
    if (a === "gen_outline") {
      let {
        genre: e,
        type: t
      } = o;
      return {
        text: i,
        action: a,
        gen_outline_input: {
          genre: e,
          type: Number(t)
        }
      };
    }
    if (a === "gen_ai_ppt") {
      let {
        source_meta: e,
        outline_id: t
      } = o;
      return {
        text: i,
        action: a,
        gen_ppt_input: {
          source_meta: e,
          outline_id: t
        }
      };
    }
    return {
      text: i,
      action: a
    };
  };
  var pptGenerateSymbol = require("ppt-generate-symbol") /*id: 640338*/;
  class p {
    aliceChatMessageToMessage(e, t) {
      let {
        content_obj: c
      } = e;
      let {
        outline: _,
        outline_leading_content: f,
        outline_meta: p,
        outline_id: m,
        brief: g,
        action_bar_config: h,
        samantha_code: b
      } = e.ext ?? {};
      a(e.content_obj, {
        outline: _,
        outline_leading_content: f,
        outline_meta: p,
        outline_id: m,
        brief: g,
        action_bar_config: h,
        samantha_code: b
      });
      let y = v(e);
      if (y) {
        safePropertyAssignUtil.safePropertyAssign(c, {
          ...y
        });
      }
      if (e == null ? undefined : e.ext?.input_skill) {
        let t = (e == null ? undefined : e.content_obj?.genre) ?? objectPathGetDefault.getObjectPathDefault(safeJsonUtils.safeParse(e == null ? undefined : e.ext?.input_skill, {}), "variables.genre");
        if (t !== "") {
          safePropertyAssignUtil.safePropertyAssign(c, {
            genre: t
          });
        }
      }
      safePropertyAssignUtil.safePropertyAssign(e, {
        content_obj: {
          ...c
        }
      });
      return e;
    }
    samanthaChatMessageToMessage(e, t) {
      return e;
    }
    messageToSamanthaChatMessage(e) {
      return {
        content: JSON.stringify(e.content_obj),
        content_type: aiSkillProtocolTransformMatcher.skillToSamanthaMap[aiAssistantSkillTypes.SkillTypes.SkillType_AiPPT]
      };
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = pptGenerateSymbol.pptGenerateSymbol;
      if ((e = typeof (n = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var i = n.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    PptChatProtocolTransformPlugin: function () {
      return p;
    }
  });
}