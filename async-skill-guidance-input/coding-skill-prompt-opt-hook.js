// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'useCodingPromptOpt'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-skill-chat-input.5642b6e3.js
         * chunkId: 18383
         * moduleId: 470581
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var chatMessageStreamProcessor = require("chat-message-stream-processor") /*id: 850590*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var uuidV1GeneratorWrapper = require("uuid-v1-generator-wrapper") /*id: 471924*/;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var codingCanvasEventTracker = require("coding-canvas-event-tracker") /*id: 943129*/;
  var skillActionConstants = require("skill-action-constants") /*id: 418389*/;
  let _ = e => {
    let {
      editorValue: t,
      setEditorValue: n,
      containerRef: _,
      chatId: v,
      from: g
    } = e;
    let [b, y] = reactCoreLibraryReexport.useState(true);
    let [x, C] = reactCoreLibraryReexport.useState({});
    let {
      trackCodingBaseEvent: w
    } = codingCanvasEventTracker.codingEventTracker({
      chatId: v
    });
    let k = reactCoreLibraryReexport.useRef({});
    let E = reactCoreLibraryReexport.useRef({});
    let S = reactCoreLibraryReexport.useRef("");
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      if ((e = t.data) === null || e === undefined ? undefined : e.some(e => e.type === "Text" && e.text)) {
        y(false);
      } else {
        y(true);
      }
    }, [t]);
    let N = reactCoreLibraryReexport.useMemo(() => !!S.current && x[S.current], [x]);
    let j = reactFunctionMemoHook.useMemoizedCallback(e => inputToolConverter.extractText(e, {
      stringifyItem: e => {
        if (e.type === chatFieldTypes.getFieldTypes.Select) {
          return "「" + e.value + "」";
        }
      }
    }));
    let T = reactFunctionMemoHook.useMemoizedCallback(e => {
      k.current[e] = "";
      C(t => ({
        ...t,
        [e]: false
      }));
    });
    let P = reactFunctionMemoHook.useMemoizedCallback(async () => {
      if (b) {
        return;
      }
      let e = j(t.data);
      let i = {
        skill_id: chatAppEnums.SkillType.CodeAssistant.toString(),
        skill_type: chatAppEnums.SkillType.CodeAssistant
      };
      let c = {
        code_assistant_source: skillActionConstants.ConfigKeys.InstructionOpt
      };
      let p = {
        useSamanthaChat: "true",
        content: "",
        input_skill: JSON.stringify(i),
        reference_content: JSON.stringify([{
          type: "text",
          text: "",
          extra: {
            context_variables: JSON.stringify(c)
          }
        }]),
        send_from_skill_guidance_or_suggestion: "1"
      };
      let m = uuidV1GeneratorWrapper.generateUuidV1();
      S.current = m;
      n({
        data: []
      });
      C(e => ({
        ...e,
        [m]: true
      }));
      w("prompt_optimize_click", {
        click_from: g,
        button_name: "start"
      });
      return new Promise((t, i) => {
        chatMessageStreamProcessor.streamChatMessageProcessing({
          mode: "samantha",
          message: {
            is_delta: false,
            conversation_type: chatCoreConstants.BotTypes.Coco,
            content_type: aiAssistantSkillTypes.SamanthaTypes.SamanthaCodeAssistantInput,
            content_obj: {
              text: e
            },
            attachments: [],
            ext: p,
            skill: {
              skill_type: aiAssistantSkillTypes.SkillTypes.SkillCodeAssistant,
              skill_type_no_default: aiAssistantSkillTypes.SkillTypes.SkillCodeAssistant,
              skill_id: `${aiAssistantSkillTypes.SkillTypes.SkillCodeAssistant}`,
              skill_id_no_default: `${aiAssistantSkillTypes.SkillTypes.SkillCodeAssistant}`
            },
            local_message_id: m
          },
          onMessage(e) {
            var i;
            if (!e) {
              return;
            }
            if (E.current[m]) {
              T(m);
              t();
              return;
            }
            let {
              content_type: o,
              content_obj: r
            } = e;
            if (o !== aiAssistantSkillTypes.SamanthaTypes.SamanthaCodeAssistantOutput || !r || isEmptyUtil.isEmpty(r)) {
              return;
            }
            let s = k.current[m];
            let c = `${s || ""}${r.text || ""}`;
            k.current[m] = c;
            n({
              data: [{
                type: chatFieldTypes.getFieldTypes.Text,
                text: c
              }]
            });
            let u = _ == null ? undefined : (i = _.current) === null || i === undefined ? undefined : i.querySelector("[data-slate-editor=\"true\"]");
            let p = u == null ? undefined : u.scrollHeight;
            if (p) {
              if (u != null) {
                u.scrollTo({
                  top: p,
                  behavior: "smooth"
                });
              }
            }
          },
          onError(e) {
            T(m);
            i(e);
          },
          async onFinish() {
            await promiseAsyncUtilities.createDelayedPromise(500);
            T(m);
            t();
          }
        });
      });
    });
    return {
      promptOptStreaming: N,
      promptOptiDisabled: b,
      sendPromptOptMessage: P,
      canBreakPromptOpt: N,
      breakPromptOptMessage: reactFunctionMemoHook.useMemoizedCallback(() => {
        E.current[S.current] = true;
        w("prompt_optimize_click", {
          click_from: g,
          button_name: "stop"
        });
      })
    };
  };
  require.d(exports, {
    useCodingPromptOpt: function () {
      return _;
    }
  });
}