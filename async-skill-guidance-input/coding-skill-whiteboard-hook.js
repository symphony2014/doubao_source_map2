// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'useWhiteboardHook'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-skill-chat-input.5642b6e3.js
         * chunkId: 18383
         * moduleId: 194674
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var codingCanvasEventTracker = require("coding-canvas-event-tracker") /*id: 943129*/;
  var codingSkillChatUtils_1 = require("coding-skill-chat-utils_1") /*id: 269786*/;
  var codingSkillChatInput_3 = require("coding-skill-chat-input_3") /*id: 117608*/;
  let d = e => {
    let {
      attachmentStates: t,
      handleAddImages: n,
      clearAttachments: d,
      setExtraContents: c,
      extraContextVariable: u,
      chatId: p,
      from: h
    } = e;
    let [m, f] = reactCoreLibraryReexport.useState(false);
    let [_, v] = reactCoreLibraryReexport.useState();
    let [g, b] = reactCoreLibraryReexport.useState();
    let [y, x] = reactCoreLibraryReexport.useState();
    let {
      trackCodingBaseEvent: C
    } = codingCanvasEventTracker.codingEventTracker({
      chatId: p
    });
    let {
      isDevMode: w,
      contextVariables: k
    } = codingSkillChatInput_3.useCodingChatInput();
    let E = reactCoreLibraryReexport.useMemo(() => !!g, [g]);
    let S = reactCoreLibraryReexport.useMemo(() => g || y, [g, y]);
    let N = reactCoreLibraryReexport.useMemo(() => {
      return (t == null ? undefined : t[0]?.fileKey) || "";
    }, [t]);
    reactCoreLibraryReexport.useEffect(() => {
      if (t.length === 0) {
        b(undefined);
      }
    }, [t]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!w) {
        c(undefined);
        return;
      }
      if (g && N) {
        c({
          useSamanthaChat: "true",
          reference_content: JSON.stringify([{
            type: "text",
            text: "",
            extra: {
              context_variables: JSON.stringify({
                code_assistant_whiteboard_reference: {
                  uri: N
                },
                ...k,
                ...u
              })
            }
          }]),
          send_from_skill_guidance_or_suggestion: "1"
        });
      }
    }, [g, c, N, w, k, u]);
    let j = reactFunctionMemoHook.useMemoizedCallback(() => {
      let n = _ == null ? undefined : _.getContent();
      if (!n || Object.keys(n.nodes ?? {}).length !== 0 && Object.keys(n.relation ?? {}).length !== 0) {
        return n;
      }
    });
    let T = reactFunctionMemoHook.useMemoizedCallback(() => {
      let e = j();
      return e && !deepEqualUtil_1.deepEqual(e, g);
    });
    let P = reactFunctionMemoHook.useMemoizedCallback(function () {
      let e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
      let t = j();
      if (!e) {
        b(t);
      }
      x(t);
    });
    let O = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (e == null ? undefined : e.length) {
        n({
          type: "change",
          target: {
            files: e
          },
          fileType: "drawboard"
        });
      }
    });
    let I = reactFunctionMemoHook.useMemoizedCallback(() => {
      C("drawboard_panel_click", {
        button_name: "delete_drawboard"
      });
      b(undefined);
      d({});
    });
    let R = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (e === "attachment") {
        C("drawboard_panel_click", {
          button_name: "chat_drawboard"
        });
      } else {
        C("drawboard_btn_click", {
          show_from: h
        });
      }
      f(true);
    });
    let D = reactFunctionMemoHook.useMemoizedCallback(() => {
      C("drawboard_panel_click", {
        button_name: "cancel_drawboard"
      });
      P();
      f(false);
    });
    let A = reactFunctionMemoHook.useMemoizedCallback(() => {
      C("drawboard_panel_click", {
        button_name: "confirm_drawboard"
      });
      if (!T()) {
        f(false);
        return;
      }
      if (d != null) {
        d({});
      }
      setTimeout(async () => {
        var e;
        P(false);
        let t = _ == null ? undefined : _.getRatioApp();
        let n = await (t == null ? undefined : (e = t.ratioAppProxy) === null || e === undefined ? undefined : e.getOriginImageDataByNodeId(24, [""], false, 4));
        if (n) {
          let {
            data: e
          } = n;
          O([await codingSkillChatUtils_1.canvasImageToFile(e, "whiteboard_exported_image.png")]);
        }
        f(false);
      }, 0);
    });
    return {
      whiteboardVisible: m,
      radioApp: _,
      setRadioApp: v,
      initWhiteboard: S,
      clearWhiteboardAttachment: I,
      isWhiteboardAttachment: E,
      showWhiteboard: R,
      onWhiteboardCancel: D,
      onWhiteboardSave: A
    };
  };
  require.d(exports, {
    useWhiteboardHook: function () {
      return d;
    }
  });
}