// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'useFileUpload'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67052.e31f852f.js
         * chunkId: 67052
         * moduleId: 249388
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var supportedFileExtensionsUtility = require("supported-file-extensions-utility") /*id: 79808*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var codingSkillChatInput_1 = require("coding-skill-chat-input_1") /*id: 965068*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      onFilesChange: t,
      onClickTrack: n,
      testId: p
    } = e;
    let h = supportedFileExtensionsUtility.getSupportedFileExtensions();
    let {
      uploadFileAllowedTypes: f,
      enabledSendMultiFileMessage: m,
      uploadMultiEntityConf: {
        maxFileCount: _
      }
    } = attachmentUploadStoreHooks.getUploadConfig();
    let g = reactCoreLibraryReexport.useRef(null);
    let v = () => void (g.current && (g.current.value = ""));
    let b = () => {
      var e;
      if ((e = g.current) === null || e === undefined) {
        return undefined;
      } else {
        return e.click();
      }
    };
    let {
      chatId: y,
      chatType: k
    } = chatStoreManager.useStoreSelector("chatViewCoreStore", e => {
      return {
        chatId: e.currentChatViewConfig?.chatId || "",
        chatType: e.currentChatViewConfig?.chatType
      };
    }, deepEqualityUtil.deepEqual);
    let x = chatConversationSelectors.selectConvLink(y, k);
    let w = m || codingSkillChatInput_1.codingSkillChatFlag;
    let E = (x && w ? _ : 1) > 1;
    let C = reactCoreLibraryReexport.useMemo(() => (x ? h : f).filter(e => !!e).map(e => `.${e}`).join(","), [f]);
    let T = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (e != null) {
        e.stopPropagation();
      }
      v();
      b();
      if (n != null) {
        n({
          chatId: y,
          entranceType: "browse_file"
        });
      }
    });
    let $ = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (e.target.files) {
        t([...e.target.files]);
      }
    });
    return {
      handleClickButton: T,
      inputElement: reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsx("input", {
        "data-testid": p || "",
        ref: g,
        className: "hidden",
        multiple: E,
        type: "file",
        accept: C,
        onChange: $
      }), [C, E, p])
    };
  };
  require.d(exports, {
    useFileUpload: function () {
      return p;
    }
  });
}