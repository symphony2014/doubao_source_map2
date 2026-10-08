// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BY' to 'prepareSubmitData'
// - Renamed export 'Fd' to 'getRatioValue'
// - Renamed export 'QB' to 'InputKeys'
// - Renamed export 'wF' to 'getOptionValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine-submit.e2260d4f.js
         * chunkId: 2122
         * moduleId: 540748
         */
module.exports = function (module, exports, require) {
  var n;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  (n = {}).RATIO = "ratio";
  n.Movement = "movement";
  let l = n;
  function a(e) {
    let {
      editorValue: i,
      newValue: n,
      text: a,
      key: s,
      inputOptionsMap: c,
      inputConfig: d
    } = e;
    let _ = [];
    _.push(...((i == null ? undefined : i.data) ?? []));
    let f = _.findIndex(e => e.type === chatFieldTypes.getFieldTypes.Select && s === l.RATIO);
    if (f !== -1 && s === l.RATIO) {
      _[f] = u(d, n);
    } else {
      o(_, a);
      if (s === l.RATIO) {
        let e = u(d, n);
        _.push(e);
      } else {
        let e = p(n, c);
        _.push(...e);
      }
    }
    return {
      data: _
    };
  }
  let o = function (e, t = "") {
    let i = e[e.length - 1];
    if ((i == null ? undefined : i.type) !== chatFieldTypes.getFieldTypes.Text || /(,\s|，)$/.test(i.text)) {
      e.push(d(t));
    } else {
      let i = t;
      i = `\u{FF0C}${i}`;
      let n = d(e.find(e => e.type === chatFieldTypes.getFieldTypes.Text && e.text.trim() !== "") ? i : t);
      e.push(n);
    }
    return e;
  };
  function u(e, t) {
    var i;
    var a;
    var o;
    let u = ((i = e.options) === null || i === undefined ? undefined : i.find(e => !!e.is_default)) || e.options?.[0];
    let s = (a = e.options) === null || a === undefined ? undefined : a.find(e => e.value === t);
    return {
      type: chatFieldTypes.getFieldTypes.Select,
      optionList: ((o = e.options) === null || o === undefined ? undefined : o.map(t => ({
        label: t.show_name || "",
        value: ((e == null ? undefined : e.value) === l.RATIO ? t == null ? undefined : t.value : t == null ? undefined : t.show_name) || "",
        image: t.background_url
      }))) || [],
      value: ((e == null ? undefined : e.value) === l.RATIO ? s == null ? undefined : s.value : s == null ? undefined : s.show_name) || (u == null ? undefined : u.show_name) || "",
      title: e == null ? undefined : e.show_name,
      key: e == null ? undefined : e.value
    };
  }
  let s = (e, t) => {
    var n;
    if (e && t) {
      if ((n = t.options) === null || n === undefined) {
        return undefined;
      } else {
        return n.find(i => ((t == null ? undefined : t.value) === l.RATIO ? i == null ? undefined : i.value : i == null ? undefined : i.show_name) === e)?.value;
      }
    }
  };
  let c = e => {
    var t;
    let i = e == null ? undefined : (t = e.data) === null || t === undefined ? undefined : t.find(e => e.type === chatFieldTypes.getFieldTypes.Select && e.key === l.RATIO);
    if (i == null) {
      return undefined;
    } else {
      return i.value;
    }
  };
  function d(e) {
    return {
      type: chatFieldTypes.getFieldTypes.Text,
      text: e
    };
  }
  let p = (e, t) => {
    if (!e) {
      return [];
    }
    let i = /(\${(.*?)\})/g.exec(e);
    if (i == null ? undefined : i[1]) {
      var l;
      let [u, s] = e.split((i == null ? undefined : i[1]) ?? "").map(e => d(e));
      return [u, (l = t[i[2]], {
        type: chatFieldTypes.getFieldTypes.Placeholder,
        placeholder: l.placeholder?.placeholder || "",
        text: l.placeholder?.default_text || ""
      }), s];
    }
    return [d(e)];
  };
  require.d(exports, {
    prepareSubmitData: function () {
      return a;
    },
    getRatioValue: function () {
      return c;
    },
    InputKeys: function () {
      return l;
    },
    getOptionValue: function () {
      return s;
    }
  });
}