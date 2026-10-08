// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fd' to 'getEditorValue'
// - Renamed export 'Qk' to 'getExtractedText'
// - Renamed export 'RL' to 'setEditorValue'
// - Renamed export 'SW' to 'setActionValue'
// - Renamed export 'UG' to 'useExtractedText'
// - Renamed export 'YC' to 'getActionValue'
// - Renamed export 'l_' to 'createTextData'
// - Renamed export 'nC' to 'useEditorValue'
// - Renamed export 'oL' to 'setValue'
// - Renamed export 'p4' to 'setTextValue'
// - Renamed export 'vO' to 'clearTextValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 411117
         */
module.exports = function (module, exports, require) {
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  let l = () => chatStoreManager.useStoreSelector("chatInputStore", e => e.editorValue);
  let s = () => chatStoreManager.useStoreSelector("chatInputStore", e => inputToolConverter.extractText(e.editorValue.data));
  let u = () => {
    let {
      editorValue: e
    } = chatStoreManager.getStoreState("chatInputStore");
    return inputToolConverter.extractText(e.data);
  };
  let c = () => chatStoreManager.getStoreState("chatInputStore").editorValue;
  let d = e => chatStoreManager.getStoreState("chatInputStore").setEditorValue(e);
  let h = function (e = "") {
    return {
      data: [{
        type: chatFieldTypes.getFieldTypes.Text,
        text: e
      }]
    };
  };
  let m = e => d(h(e));
  let g = e => typeof e == "string" ? m(e) : d(e);
  let f = () => m("");
  let p = e => chatStoreManager.getStoreState("chatInputStore").actionValue[e ?? ""];
  let _ = function (e) {
    if (e) {
      return t => {
        if (t !== chatStoreManager.getStoreState("chatInputStore").actionValue?.[e]) {
          chatStoreManager.getStore("chatInputStore").setState(n => {
            let {
              actionValue: i
            } = n;
            return {
              actionValue: {
                ...i,
                [e]: t
              }
            };
          });
        }
      };
    } else {
      return emptyExportFunction.emptyFunction;
    }
  };
  require.d(exports, {
    getEditorValue: function () {
      return c;
    },
    getExtractedText: function () {
      return u;
    },
    setEditorValue: function () {
      return d;
    },
    setActionValue: function () {
      return _;
    },
    useExtractedText: function () {
      return s;
    },
    getActionValue: function () {
      return p;
    },
    createTextData: function () {
      return h;
    },
    useEditorValue: function () {
      return l;
    },
    setValue: function () {
      return g;
    },
    setTextValue: function () {
      return m;
    },
    clearTextValue: function () {
      return f;
    }
  });
}