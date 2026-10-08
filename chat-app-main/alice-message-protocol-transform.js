// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_i' to 'transformMessageExt'
// - Renamed export 'o6' to 'messagesToAliceProtocol'
// - Renamed export 'yN' to 'stringifyMessageContent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-alice.a1dd235d.js
         * chunkId: 20105
         * moduleId: 842186
         */
module.exports = function (module, exports, require) {
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var skillMessageProcessor = require("skill-message-processor") /*id: 397273*/;
  var chatPluginMatcherRegistry = require("chat-plugin-matcher-registry") /*id: 107672*/;
  var chatPluginIocManager = require("chat-plugin-ioc-manager") /*id: 232752*/;
  var messageActionTypes = require("message-action-types") /*id: 902861*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  function c(e) {
    if (e.content_obj?.data) {
      return safeJsonUtils.safeStringify({
        image_list: e.content_obj.data
      });
    } else {
      return safeJsonUtils.safeStringify(e.content_obj);
    }
  }
  function f(e) {
    if (e.ext?.input_skill) {
      let t = skillMessageProcessor.skillTypeInfo(e == null ? undefined : e.ext);
      if (isEmptyUtil.isEmpty(t)) {
        return {
          ...e.ext,
          input_skill: undefined
        };
      }
    }
    return e.ext;
  }
  let p = async e => {
    let t = await chatPluginMatcherRegistry.loadProtocolTransformMatcher();
    if (t) {
      let i = t.find(t => {
        var n;
        if ((n = t.matchPluginForMessageToAliceChatMessage) === null || n === undefined) {
          return undefined;
        } else {
          return n.call(t, e);
        }
      })?.pluginIdentifier;
      let o = await chatPluginIocManager.protocolTransformLoader(i);
      if (o == null ? undefined : o.messageToAliceChatMessage) {
        if (o == null) {
          return undefined;
        } else {
          return o.messageToAliceChatMessage(e);
        }
      } else {
        return safePropertyAssignUtil.safePropertyAssign({}, throttledPathFilterStringify.throttledPathStr(e, ["local_conversation_id", "bot_id", "conversation_id", "section_id", "local_message_id", "message_type", "content_type", "create_time", "message_id", "reply_id", "content_source", "template_id", "ext", "status"]), {
          ext: f(e),
          content: c(e)
        });
      }
    }
  };
  let g = async e => {
    let t = await Promise.all(e.map(p));
    return function (e) {
      if (!(e.length <= 0)) {
        return {
          ...(e.length === 1 ? {
            message: e[0]
          } : {
            message_list: e
          }),
          event_type: messageActionTypes.actionTypes.Message
        };
      }
    }(await Promise.all(t.filter(infraUtilFunctions.isDefined)));
  };
  require.d(exports, {
    transformMessageExt: function () {
      return f;
    },
    messagesToAliceProtocol: function () {
      return g;
    },
    stringifyMessageContent: function () {
      return c;
    }
  });
}