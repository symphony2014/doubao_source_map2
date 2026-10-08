// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I3' to 'isPlaceholderType'
// - Renamed export 'Iz' to 'toEditorBlocks'
// - Renamed export 'XE' to 'isDataEmpty'
// - Renamed export 'Z6' to 'extractText'
// - Renamed export 'dz' to 'isTextType'
// - Renamed export 'on' to 'normalizeElements'
// - Renamed export 'yW' to 'isSelectType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 352793
         */
module.exports = function (module, exports, require) {
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  var inputToolElementUtils = require("input-tool-element-utils") /*id: 16749*/;
  let o = e => e.type === chatFieldTypes.getFieldTypes.Select;
  let a = e => e.type === chatFieldTypes.getFieldTypes.Text;
  let l = e => e.type === chatFieldTypes.getFieldTypes.Placeholder;
  let s = e => e.map((t, n) => {
    if (inputToolElementUtils.hasType(t)) {
      if (inputToolElementUtils.isParagraph(t)) {
        let {
          children: r
        } = t;
        return s(r).concat(n === e.length - 1 ? [] : [{
          type: chatFieldTypes.getFieldTypes.Text,
          text: "\n"
        }]);
      }
      if (inputToolElementUtils.isLabeledInput(t)) {
        let {
          children: e,
          placeholder: n,
          key: o,
          clickable: a
        } = t;
        return {
          type: chatFieldTypes.getFieldTypes.Placeholder,
          placeholder: n,
          text: inputToolElementUtils.extractElementText(e),
          key: o,
          clickable: a
        };
      }
      if (inputToolElementUtils.isLabeledSelect(t)) {
        let {
          value: e,
          options: n,
          title: r,
          key: o
        } = t;
        return {
          type: chatFieldTypes.getFieldTypes.Select,
          title: r,
          key: o,
          optionList: n,
          value: e
        };
      }
    }
    return {
      type: chatFieldTypes.getFieldTypes.Text,
      text: "text" in t ? t.text : ""
    };
  }).flat();
  let u = e => {
    if (!e.length) {
      return [{
        type: "paragraph",
        children: [{
          text: ""
        }]
      }];
    }
    let t = [{
      type: "paragraph",
      children: []
    }];
    for (let n of e) {
      if (n.type === chatFieldTypes.getFieldTypes.Text && n.text === "\n") {
        t.push({
          type: "paragraph",
          children: []
        });
      } else if (l(n)) {
        let {
          text: e,
          placeholder: i,
          key: r,
          clickable: o
        } = n;
        t[t.length - 1].children.push({
          type: "labeled_input",
          children: [{
            text: e
          }],
          placeholder: i,
          key: r,
          clickable: o
        });
      } else if (o(n)) {
        let {
          optionList: e,
          value: i,
          title: r,
          key: o
        } = n;
        t[t.length - 1].children.push({
          type: "labeled_select",
          title: r,
          key: o,
          options: e,
          value: i,
          children: [{
            text: ""
          }]
        });
      } else if (a(n)) {
        let {
          text: e
        } = n;
        t[t.length - 1].children.push({
          text: e
        });
      }
    }
    return t;
  };
  let c = function (e, t = {}) {
    let {
      stringifyItem: n
    } = t;
    return e.map(e => {
      if (l(e)) {
        return e.text || e.placeholder;
      }
      if (o(e)) {
        return (n == null ? undefined : n(e)) ?? e.value;
      }
      if (a(e)) {
        return e.text;
      }
    }).join("");
  };
  let d = e => c(e.data).length === 0;
  require.d(exports, {
    isPlaceholderType: function () {
      return l;
    },
    toEditorBlocks: function () {
      return u;
    },
    isDataEmpty: function () {
      return d;
    },
    extractText: function () {
      return c;
    },
    isTextType: function () {
      return a;
    },
    normalizeElements: function () {
      return s;
    },
    isSelectType: function () {
      return o;
    }
  });
}