// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'throttledOmitPathStringify'
// - Resolved require(159496) to 'throttled-omit-path-stringify'
// - Renamed variable 'o' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'u' to 'skillConstantsEnum'
// - Resolved require(791429) to 'skill-constants-enum'
// - Renamed variable 's' to 'messageTextContentRenderer'
// - Resolved require(602492) to 'message-text-content-renderer'
// - Renamed variable 'c' to 'chatThemeStyleConfig'
// - Resolved require(400045) to 'chat-theme-style-config'
// - Renamed variable 'd' to 'editingMessageTransitionComponent'
// - Resolved require(766325) to 'editing-message-transition-component'
// - Renamed variable 'v' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'f' to 'conversationMessageUtils'
// - Resolved require(45244) to 'conversation-message-utils'
// - Renamed variable 'p' to 'chatTextBlockFactory'
// - Resolved require(351389) to 'chat-text-block-factory'
// - Renamed variable '_' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'm' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'h' to 'eventReportingService'
// - Resolved require(703133) to 'event-reporting-service'
// - Renamed variable 'g' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Y' to 'renderMessageText' (module 602492)
// - Updated imported property 'o' to 'chatThemeConfig' (module 400045)
// - Updated imported property 'zQ' to 'createEventReporter' (module 703133)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'f' to 'createTextBlock' (module 351389)
// - Updated imported property 'Gq' to 'assembleContentBlocks' (module 45244)
// - Updated imported property 'cW' to 'createMessageObject' (module 45244)
// - Updated imported property 'i1' to 'parseConversationId' (module 45244)
// - Updated imported property 'Z' to 'omitPathStringify' (module 159496)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property 'b3' to 'SceneType' (module 791429)
// - Updated imported property 's' to 'messageEditTransition' (module 766325)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: im-chat-l0.82349834.js
         * chunkId: 41884
         * moduleId: 751423
         */
module.exports = function (module, exports, require) {
  let l = e => ({
    conversation_id: e.conversationId,
    message_id: e.messageId,
    ext: e.ext
  });
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var messageTextContentRenderer = require("message-text-content-renderer") /*id: 602492*/;
  var chatThemeStyleConfig = require("chat-theme-style-config") /*id: 400045*/;
  var editingMessageTransitionComponent = require("editing-message-transition-component") /*id: 766325*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var conversationMessageUtils = require("conversation-message-utils") /*id: 45244*/;
  var chatTextBlockFactory = require("chat-text-block-factory") /*id: 351389*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = reactCoreLibraryReexport.memo(e => {
    var l;
    let {
      node: i,
      theme: r = "samantha"
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(messageTextContentRenderer.renderMessageText, {
      className: a(chatThemeStyleConfig.chatThemeConfig[r]?.sendClassNames),
      style: chatThemeStyleConfig.chatThemeConfig[r].cssVar,
      text: (l = i.block.content) === null || l === undefined ? undefined : l.text_block?.text
    });
  });
  let k = reactCoreLibraryReexport.memo(e => {
    var n;
    let {
      node: l,
      ext: o,
      conversation_id: a,
      message_id: s,
      onExit: c
    } = e;
    let y = reactCoreLibraryReexport.useRef(eventReportingService.createEventReporter({
      eventName: "edit_message",
      meta: {
        conversation_id: a,
        message_id: s
      }
    }));
    let k = async e => {
      if (a && s && e) {
        teaAnalyticsEventTracker.trackEvent("edit_message_confirm", {
          message_id: s,
          edit_method: "click"
        });
        y.current.addDurationPoint("confirm");
        try {
          let t = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService");
          let n = chatTextBlockFactory.createTextBlock(e);
          let l = conversationMessageUtils.assembleContentBlocks({
            textBlock: n
          });
          let i = conversationMessageUtils.createMessageObject({
            conversation: conversationMessageUtils.parseConversationId(a),
            message: {
              content_blocks_v2: l,
              ext: {
                ...throttledOmitPathStringify.omitPathStringify(o, "regen"),
                replace: "1",
                edit_query_id: safeJsonUtils.safeStringify([s]),
                use_submit_pipeline: "0"
              }
            }
          });
          if (t != null) {
            t.sendMessage({
              message: i,
              session: {
                reportParams: {
                  scene: skillConstantsEnum.SceneType.SCENE_EDIT
                }
              }
            });
          }
          y.current.success();
        } catch (e) {
          y.current.error({
            reason: "edit message failed, unexpected error",
            error: e
          });
        }
        c();
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(editingMessageTransitionComponent.messageEditTransition, {
      text: (n = l.block.content) === null || n === undefined ? undefined : n.text_block?.text,
      onSubmit: k,
      onCancel: () => {
        teaAnalyticsEventTracker.trackEvent("edit_message_cancel", {
          message_id: s,
          edit_method: "click"
        });
        y.current.addDurationPoint("cancel");
        y.current.success();
        c();
      }
    });
  });
  function b(e, t, n) {
    var l;
    if ((t = typeof (l = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var l = n.call(e, t || "default");
        if (typeof l != "object") {
          return l;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? l : l + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class x {
    constructor() {
      b(this, "nodeTypes", ["block_type:10000"]);
      b(this, "Content", y);
      b(this, "EditableContent", k);
      b(this, "usePropsSelector", l);
    }
  }
  require.r(exports);
  require.d(exports, {
    SendTextNodeRenderPlugin: function () {
      return x;
    }
  });
}