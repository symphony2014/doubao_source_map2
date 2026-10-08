// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'useExerciseSkillInput'
// - Renamed export 'Z' to 'ExerciseSkillInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 597310
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var chatAsrButtonHook = require("chat-asr-button-hook") /*id: 370968*/;
  var chatSkillPluginSymbols = require("chat-skill-plugin-symbols") /*id: 886094*/;
  var eduUploadPluginSymbol = require("edu-upload-plugin-symbol") /*id: 565377*/;
  var skillGuidanceInputContainer = require("skill-guidance-input-container") /*id: 216652*/;
  var selectSkillBtnPluginId = require("select-skill-btn-plugin-id") /*id: 730494*/;
  var asrToolButtonSymbol = require("asr-tool-button-symbol") /*id: 100129*/;
  var skillToolButtonRenderer = require("skill-tool-button-renderer") /*id: 812051*/;
  var chatSkillExitEventTracker = require("chat-skill-exit-event-tracker") /*id: 466492*/;
  var chatLauncherConfigHooks = require("chat-launcher-config-hooks") /*id: 317711*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var skillGuidanceClasses = require("skill-guidance-classes") /*id: 523377*/;
  var asyncSkillGuidanceInput = require("async-skill-guidance-input") /*id: 316165*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = e => {
    let {
      chatId: t,
      chatType: n,
      disabled: r,
      className: y,
      skill: k,
      trackParams: w,
      reportParams: b,
      isToolButtonSmall: x,
      renderBeforeUploadNode: S,
      onKeyDown: C,
      onBeforeSendMessage: E,
      onAfterSendMessage: T,
      onClickUploadButton: R,
      ...P
    } = e;
    let {
      skill_type: N
    } = k || {};
    let j = N == null ? undefined : N.toString();
    let {
      submit: I,
      closeEvent: M
    } = asyncSkillGuidanceInput.useSkillTextSubmit({
      skill: k,
      trackParams: w,
      reportParams: b,
      onAfterSendMessage: T,
      onBeforeSendMessage: E
    });
    let {
      submitFiles: D
    } = asyncSkillGuidanceInput.useSkillFileUpload({
      skill: k,
      reportParams: b,
      onBeforeSendMessage: E,
      onAfterSendMessage: T
    });
    let {
      editorRefCallback: Z,
      sendBtnProps: $,
      ...O
    } = asyncSkillGuidanceInput.useSkillInputProps({
      disabled: r,
      skill: k,
      submit: I,
      submitFiles: D,
      closeEvent: () => M(chatSkillExitEventTracker.EventInputTypes.Keyboard),
      trackParams: w,
      isToolButtonSmall: x,
      onKeyDown: C
    });
    let A = {
      type: "editor",
      chatId: t,
      chatType: n,
      getValue: () => O.editorProps.value,
      isToolButtonSmall: x,
      onUpdateValue: O.editorProps.onChange
    };
    let {
      customButton: B,
      disableRightTools: F
    } = chatAsrButtonHook.useChatAsrButton({
      scene: P == null ? undefined : P.scene,
      skill: k,
      temporaryShow: $.disableToSend && !r,
      onUpdateValue: A.onUpdateValue,
      getValue: A.getValue,
      onStopSubmit: () => $.onClickSendButton()
    });
    if (!k) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "[ExerciseSkillInput]: skill_not_found",
        error: Error("[ExerciseSkillInput]: skill_not_found")
      });
      return null;
    }
    let W = {
      type: "editor",
      chatId: t,
      chatType: n,
      scene: P == null ? undefined : P.scene,
      skill: k,
      trackParams: w,
      onClickExitButton: () => M(chatSkillExitEventTracker.EventInputTypes.Click),
      skillId: j,
      uploadDisabled: !!R,
      onClickUploadButton: R,
      onSubmitFiles: D
    };
    let {
      skillToolUIV2: L
    } = chatLauncherConfigHooks.useSkillToolLayout(P == null ? undefined : P.scene);
    let V = reactCoreLibraryReexport.useMemo(() => {
      let e = [];
      if (L && P.showExitSkillButton) {
        e.push(chatSkillPluginSymbols.exitSkillPluginSym);
      }
      e.push(eduUploadPluginSymbol.eduUploadPluginId, selectSkillBtnPluginId.selectSkillBtnId);
      return e;
    }, [L]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      "data-testid": "skill-modal-exercise-skill",
      className: l(skillGuidanceClasses.classNames["exercise-skill-container"], "test"),
      children: reactJsxRuntimeCoreReexport.jsx(skillGuidanceInputContainer.SkillGuidanceInput, {
        ref: Z,
        ...P,
        className: y,
        ...O,
        enableDragUpload: true,
        leftTools: reactJsxRuntimeCoreReexport.jsx(skillToolButtonRenderer.SkillToolButtonList, {
          toolButtonProps: W,
          list: V
        }),
        sendBtnProps: $,
        rightSendBtn: B,
        rightTools: F ? null : reactJsxRuntimeCoreReexport.jsx(skillToolButtonRenderer.SkillToolButton, {
          identifier: asrToolButtonSymbol.asrToolButtonSymbol,
          ...A
        }),
        onClickExitButton: () => M(chatSkillExitEventTracker.EventInputTypes.Click)
      })
    });
  };
  exports.ExerciseSkillInput = y;
  require.d(exports, {
    useExerciseSkillInput: function () {
      return y;
    }
  });
}