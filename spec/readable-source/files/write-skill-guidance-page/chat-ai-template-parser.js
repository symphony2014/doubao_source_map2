// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Gj' to 'parseChatTemplate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42241.852052e1.js
         * chunkId: 42241
         * moduleId: 635776
         */
module.exports = function (module, exports, require) {
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  function s(e, t) {
    let n = [];
    let s = 0;
    let a = /\$\{(.*?)\}/g;
    let o = a.exec(e);
    while (o) {
      let c = o[0];
      let u = o[1];
      let {
        index: d
      } = o;
      n.push(l(e.slice(s, d)));
      let h = t == null ? undefined : t[u];
      if ((h == null ? undefined : h.type) === chatAiConstants.placeholderType.Placeholder) {
        n.push(function (e, t) {
          return {
            type: chatFieldTypes.getFieldTypes.Placeholder,
            placeholder: e.placeholder?.placeholder || "",
            text: e.placeholder?.default_text || "",
            key: t
          };
        }(h, u));
      } else if ((h == null ? undefined : h.type) === chatAiConstants.placeholderType.Select) {
        n.push(function (e, t) {
          var n;
          var s;
          let l = ((n = e.options) === null || n === undefined ? undefined : n.find(e => !!e.is_default)) || e.options?.[0];
          return {
            type: chatFieldTypes.getFieldTypes.Select,
            optionList: ((s = e.options) === null || s === undefined ? undefined : s.map(e => ({
              label: e.show_name || "",
              value: e.show_name || ""
            }))) || [],
            value: (l == null ? undefined : l.show_name) || "",
            key: t
          };
        }(h, u));
      } else if ((h == null ? undefined : h.type) === chatAiConstants.placeholderType.Language) {
        n.push(function (e) {
          var t;
          var i;
          let s = ((t = e.language_options) === null || t === undefined ? undefined : t.find(e => !!e.is_default)) || e.language_options?.[0];
          return {
            type: chatFieldTypes.getFieldTypes.Select,
            optionList: ((i = e.language_options) === null || i === undefined ? undefined : i.map(e => ({
              label: e.show_name || "",
              value: e.show_name || ""
            }))) || [],
            value: (s == null ? undefined : s.show_name) || ""
          };
        }(h));
      }
      s = d + c.length;
      o = a.exec(e);
    }
    if (s < e.length) {
      n.push(l(e.slice(s)));
    }
    return {
      data: n
    };
  }
  function l(e) {
    return {
      type: chatFieldTypes.getFieldTypes.Text,
      text: e
    };
  }
  require.d(exports, {
    parseChatTemplate: function () {
      return s;
    }
  });
}