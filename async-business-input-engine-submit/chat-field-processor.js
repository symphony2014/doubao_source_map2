// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fd' to 'getRatioValue'
// - Renamed export 'QB' to 'fieldConstants'
// - Renamed export 'Ql' to 'parseTemplate'
// - Renamed export 'YH' to 'extractStyle'
// - Renamed export 'aj' to 'validateImage'
// - Renamed export 'g9' to 'getStyleValue'
// - Renamed export 'qP' to 'processChatData'
// - Renamed export 'wF' to 'findOptionValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14700.69a942fb.js
         * chunkId: 14700
         * moduleId: 880637
         */
module.exports = function (module, exports, require) {
  var i;
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  (i = {}).RATIO = "ratio";
  i.STYLE = "style";
  i.MODEL = "model";
  let a = i;
  function r(e, t, l, i, o, r) {
    var s;
    var d;
    let u = [];
    let m = e == null ? undefined : (s = e.data) === null || s === undefined ? undefined : s.find(e => e.type === chatFieldTypes.getFieldTypes.Select && e.key === o);
    let p = e == null ? undefined : (d = e.data) === null || d === undefined ? undefined : d.findIndex(e => e.type === chatFieldTypes.getFieldTypes.Select && e.key === o);
    u.push(...e.data);
    if (m) {
      let e = {
        ...m,
        value: o === a.STYLE ? l : t
      };
      if (p !== undefined) {
        u[p] = e;
      }
    } else if (o === a.RATIO) {
      let l = u[u.length - 1];
      let o = i;
      if ((l == null ? undefined : l.type) === chatFieldTypes.getFieldTypes.Text && !/(,\s|，)$/.test(l.text)) {
        o = `\u{FF0C}${o}`;
      }
      let a = _(e.data.find(e => e.type === chatFieldTypes.getFieldTypes.Text && e.text.trim() !== "") ? o : i);
      u.push(a);
      let s = c(r, t);
      u.push(s);
    } else {
      let e = _("，");
      u.unshift(e);
      let l = c(r, t);
      u.unshift(l);
      let n = _(i);
      u.unshift(n);
    }
    return {
      data: u
    };
  }
  function s(e, t) {
    let l = [];
    let i = 0;
    let a = /\$\{(.*?)\}/g;
    let r = a.exec(e);
    while (r) {
      let s = r[0];
      let [d, ...u] = r[1].split(".");
      let {
        index: m
      } = r;
      let p = e.slice(i, m);
      l.push(_(p));
      let v = t == null ? undefined : t[d];
      if ((v == null ? undefined : v.type) === chatAiConstants.placeholderType.Placeholder) {
        l.push(function (e) {
          return {
            type: chatFieldTypes.getFieldTypes.Placeholder,
            placeholder: e.placeholder?.placeholder || "",
            text: e.placeholder?.default_text || ""
          };
        }(v));
      } else if ((v == null ? undefined : v.type) === chatAiConstants.placeholderType.Select) {
        l.push(c(v, u == null ? undefined : u.join(".")));
      }
      i = m + s.length;
      r = a.exec(e);
    }
    if (i < e.length) {
      l.push(_(e.slice(i)));
    }
    return {
      data: l
    };
  }
  function c(e, t) {
    var l;
    var o;
    var r;
    let s = ((l = e.options) === null || l === undefined ? undefined : l.find(e => !!e.is_default)) || e.options?.[0];
    let c = (o = e.options) === null || o === undefined ? undefined : o.find(e => e.value === t);
    return {
      type: chatFieldTypes.getFieldTypes.Select,
      optionList: ((r = e.options) === null || r === undefined ? undefined : r.map(t => ({
        label: t.show_name || "",
        value: ((e == null ? undefined : e.value) === a.RATIO ? t == null ? undefined : t.value : t == null ? undefined : t.show_name) || "",
        image: t.background_url
      }))) || [],
      value: ((e == null ? undefined : e.value) === a.RATIO ? c == null ? undefined : c.value : c == null ? undefined : c.show_name) || (s == null ? undefined : s.show_name) || "",
      title: e == null ? undefined : e.show_name,
      key: e == null ? undefined : e.value
    };
  }
  let d = (e, t) => {
    var i;
    if (e && t) {
      if ((i = t.options) === null || i === undefined) {
        return undefined;
      } else {
        return i.find(l => ((t == null ? undefined : t.value) === a.RATIO ? l == null ? undefined : l.value : l == null ? undefined : l.show_name) === e)?.value;
      }
    }
  };
  let u = e => {
    if (!e) {
      return;
    }
    let t = /\$\{(.*?)\}/g.exec(e);
    let [l, ...i] = ((t == null ? undefined : t[1]) || "").split(".");
    if (l === a.STYLE) {
      if (i == null) {
        return undefined;
      } else {
        return i.join(".");
      }
    }
  };
  let m = e => {
    var t;
    let l = e == null ? undefined : (t = e.data) === null || t === undefined ? undefined : t.find(e => e.type === chatFieldTypes.getFieldTypes.Select && e.key === a.STYLE);
    if (l == null) {
      return undefined;
    } else {
      return l.value;
    }
  };
  let p = e => {
    var t;
    let l = e == null ? undefined : (t = e.data) === null || t === undefined ? undefined : t.find(e => e.type === chatFieldTypes.getFieldTypes.Select && e.key === a.RATIO);
    if (l == null) {
      return undefined;
    } else {
      return l.value;
    }
  };
  function _(e) {
    return {
      type: chatFieldTypes.getFieldTypes.Text,
      text: e
    };
  }
  let v = async e => {
    let {
      file: t
    } = e;
    return new Promise((e, l) => {
      let i = new FileReader();
      i.readAsDataURL(t);
      i.onload = function (t) {
        let i = new Image();
        i.src = t.target?.result;
        i.onload = function () {
          let {
            width: t,
            height: l
          } = i;
          e(t > 40 && l > 40);
        };
      };
      i.onerror = l;
    });
  };
  require.d(exports, {
    getRatioValue: function () {
      return p;
    },
    fieldConstants: function () {
      return a;
    },
    parseTemplate: function () {
      return s;
    },
    extractStyle: function () {
      return u;
    },
    validateImage: function () {
      return v;
    },
    getStyleValue: function () {
      return m;
    },
    processChatData: function () {
      return r;
    },
    findOptionValue: function () {
      return d;
    }
  });
}