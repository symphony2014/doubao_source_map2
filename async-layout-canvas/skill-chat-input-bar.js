// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'SkillChatInputBar'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 543454
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var skillChatSendButton = require("skill-chat-send-button") /*id: 778915*/;
  var addButtonWithTooltip = require("add-button-with-tooltip") /*id: 538250*/;
  var asyncSkillChatInputStyles = require("async-skill-chat-input-styles") /*id: 316817*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function u(e) {
    let {
      beforeNodes: t,
      customButton: n,
      hideSplitLine: i,
      hideSendAndBreakBtn: u,
      small: c,
      breakBtnVisible: d,
      sendMessageHoverText: p,
      breakBtnHoverText: f,
      sendMessageClassName: h,
      sendMessageButtonText: m,
      disableToSend: v,
      onClickSendButton: g,
      onClickDisabledSendButton: y,
      onClickBreakButton: _,
      enableLocalBeakButtonTooltip: b = true,
      onWrapperClick: w
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: asyncSkillChatInputStyles.chatInputStyles.container,
      onClick: w,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: r(asyncSkillChatInputStyles.chatInputStyles["left-area"]),
        children: t
      }), !i && !!t && !u && reactJsxRuntimeCoreReexport.jsx("div", {
        className: r(asyncSkillChatInputStyles.chatInputStyles.splitLineWrapper, c && asyncSkillChatInputStyles.chatInputStyles.small),
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: asyncSkillChatInputStyles.chatInputStyles.splitLine
        })
      }), u ? null : reactJsxRuntimeCoreReexport.jsx("div", {
        className: r(asyncSkillChatInputStyles.chatInputStyles["right-area"]),
        children: n || reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx(addButtonWithTooltip.AddButton, {
            onClick: _,
            className: r(asyncSkillChatInputStyles.chatInputStyles["break-btn"], {
              "!hidden": !d,
              [asyncSkillChatInputStyles.chatInputStyles.small]: c
            }),
            tooltipContent: f,
            enableTooltip: b,
            "data-testid": "chat_input_local_break_button"
          }), reactJsxRuntimeCoreReexport.jsx(skillChatSendButton.ChatSendButton, {
            "data-testid": "chat_input_send_button",
            disableToSend: v,
            sendMessageHoverText: p,
            buttonText: m,
            className: r(h, {
              "!hidden": d,
              [asyncSkillChatInputStyles.chatInputStyles.small]: c
            }),
            onClick: g,
            onDisabledClick: y
          })]
        })
      })]
    });
  }
  require.d(exports, {
    SkillChatInputBar: function () {
      return u;
    }
  });
}