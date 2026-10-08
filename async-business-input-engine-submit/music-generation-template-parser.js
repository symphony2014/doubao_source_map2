// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Dt' to 'getGenerationResult'
// - Renamed export 'Mk' to 'getDefaultTemplateValues'
// - Renamed export 'YQ' to 'templateKeys'
// - Renamed export 'i3' to 'updateLyricSelection'
// - Renamed export 'pZ' to 'extractTemplateValues'
// - Renamed export 'ps' to 'compareTemplateChanges'
// - Renamed export 'uS' to 'updateCustomLyricText'
// - Renamed export 'y6' to 'parseTemplateToComponents'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: music-skill-guidance-page.fa791232.js
         * chunkId: 16408
         * moduleId: 802219
         */
module.exports = function (module, exports, require) {
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  function i(e) {
    return {
      type: chatFieldTypes.getFieldTypes.Text,
      text: e
    };
  }
  let o = "musicGenaration_";
  let a = {
    theme: `${o}AI_lyric`,
    lyricType: `${o}lyricGenaration`,
    customLyric: `${o}custom_lyric`,
    mood: `${o}mood`,
    genre: `${o}genre`,
    gender: `${o}gender`
  };
  let c = ["mood", "genre", "gender"];
  function u(e) {
    let {
      arr: t,
      prevKey: r,
      prevVal: n
    } = e;
    return t.reduce((e, t) => {
      e[r(t)] = n(t);
      return e;
    }, {});
  }
  let s = (e, t) => {
    return d({
      type: chatAiConstants.placeholderType.Placeholder,
      placeholder: {
        placeholder: e.click_area?.default_text,
        default_text: ""
      },
      clickable: true
    }, t);
  };
  let d = (e, t) => {
    var r;
    return {
      ...(r = e, {
        type: chatFieldTypes.getFieldTypes.Placeholder,
        placeholder: r.placeholder?.placeholder || "",
        text: r.placeholder?.default_text || "",
        clickable: r.clickable
      }),
      key: t
    };
  };
  function p(e) {
    let {
      template: t,
      origin: r,
      inputOptions: o
    } = e;
    let p = [];
    let v = 0;
    let m = /\$\{(.*?)\}/g;
    let y = m.exec(r);
    while (y) {
      let e = y[0];
      let w = y[1];
      let {
        index: b
      } = y;
      let k = r.slice(v, b);
      p.push(i(k));
      let R = o == null ? undefined : o[w];
      if ((R == null ? undefined : R.type) === chatAiConstants.placeholderType.CliekArea) {
        p.push(s(R, w));
      } else if ((R == null ? undefined : R.type) === chatAiConstants.placeholderType.Placeholder) {
        p.push(d(R, w));
      } else if ((R == null ? undefined : R.type) === chatAiConstants.placeholderType.Select) {
        var g;
        let e = {
          [a.lyricType]: "custome_lyric",
          ...u({
            arr: c,
            prevKey: e => a[e],
            prevVal: e => t == null ? undefined : t[e]
          })
        };
        let r = (g = R.options) === null || g === undefined ? undefined : g.find(r => t ? r.value === e[w] : r.is_default)?.after_key;
        p = p.concat(function (e) {
          var t;
          var i;
          var o;
          let {
            inputOptions: p,
            currentKey: v,
            afterKey: m,
            template: y
          } = e;
          let h = p == null ? undefined : p[v];
          let g = {
            [a.lyricType]: "custome_lyric",
            ...u({
              arr: c,
              prevKey: e => a[e],
              prevVal: e => {
                if (y == null) {
                  return undefined;
                } else {
                  return y[e]?.value;
                }
              }
            })
          };
          let w = ((t = h.options) === null || t === undefined ? undefined : t.find(e => y ? e.value === g[v] : e.is_default)) || h.options?.[0];
          let b = [{
            title: f[v],
            type: chatFieldTypes.getFieldTypes.Select,
            optionList: ((i = h.options) === null || i === undefined ? undefined : i.map(e => ({
              label: e.value || "",
              value: (e == null ? undefined : e.show_name) || ""
            }))) || [],
            value: (w == null ? undefined : w.show_name) || "",
            key: v
          }];
          let k = m && m !== a.customLyric && (p == null ? undefined : p[m]);
          let R = null;
          if (k) {
            if (k.type === chatAiConstants.placeholderType.CliekArea) {
              R = s(k, m);
              if (y) {
                R.text = `${(o = y.lyric) === null || o === undefined ? undefined : o.split("\n")[0]}...`;
              }
            } else {
              R = d(k, m);
            }
            if (R) {
              b.push(R);
            }
          }
          return b;
        }({
          inputOptions: o,
          currentKey: w,
          afterKey: r,
          template: t
        }));
      }
      v = b + e.length;
      y = m.exec(r);
    }
    if (v < r.length) {
      p.push(i(r.slice(v)));
    }
    return {
      data: p
    };
  }
  let f = {
    musicGenaration_mood: "情绪",
    musicGenaration_genre: "风格"
  };
  function v(e, t) {
    var r;
    var i;
    var o;
    let c = e.data;
    let u = c.findIndex(e => e.key === a.lyricType);
    let p = {
      isCustomLyricSelected: false,
      newValue: e,
      lyricPlaceholder: ""
    };
    if (u === -1) {
      return p;
    }
    let f = c[u];
    r = f.value;
    let v = (i = t[a.lyricType].options) === null || i === undefined ? undefined : i.find(e => e.show_name === r)?.after_key;
    if (c.findIndex(e => e.key === v) === -1) {
      let e = function (e, t) {
        var n;
        let i = e.value;
        let o = (n = t[a.lyricType].options) === null || n === undefined ? undefined : n.find(e => e.show_name === i)?.after_key;
        let c = o && t[o];
        if (c) {
          if (c.type === chatAiConstants.placeholderType.Placeholder) {
            return d(c, o);
          } else if (c.type === chatAiConstants.placeholderType.CliekArea) {
            return s(c, o);
          } else {
            return null;
          }
        } else {
          return null;
        }
      }(f, t);
      if (e) {
        let r = [...c];
        let n = (o = t[a.lyricType].options) === null || o === undefined ? undefined : o.map(e => e.after_key);
        let l = r.filter(e => !(n == null ? undefined : n.includes(e.key)));
        p.isCustomLyricSelected = v === a.customLyric;
        p.lyricPlaceholder = e.placeholder;
        if (!p.isCustomLyricSelected) {
          l.splice(u + 1, 0, e);
        }
        p.newValue = {
          data: l
        };
      }
    }
    return p;
  }
  function m(e) {
    let t = e.data;
    return u({
      arr: c,
      prevKey: e => e,
      prevVal: e => {
        let n = t.find(t => t.key === a[e]);
        return (n == null ? undefined : n.optionList.find(e => e.value === (n == null ? undefined : n.value))?.label) || "";
      }
    });
  }
  function y(e) {
    return u({
      arr: c,
      prevKey: e => e,
      prevVal: t => {
        var n;
        let l = e[a[t]];
        if (l == null) {
          return undefined;
        } else if ((n = l.options) === null || n === undefined) {
          return undefined;
        } else {
          return n.find(e => e.is_default)?.value;
        }
      }
    });
  }
  function h(e, t) {
    let r = e.data.slice().map(e => ({
      ...e,
      writeable: true
    }));
    let n = r.find(e => e.key === a.customLyric);
    if (n && n.text !== t) {
      n.text = `${t.split("\n")[0]}...`;
      return {
        data: r
      };
    } else {
      return null;
    }
  }
  function g(e, t) {
    let n = e.data;
    return {
      theme: n.find(e => e.key === a.theme)?.text,
      ...u({
        arr: [...c, "lyricType"],
        prevKey: e => e === "lyricType" ? "generation_type" : e,
        prevVal: e => {
          return function (e) {
            let {
              options: r,
              name: n
            } = e;
            if (n && r) {
              return r.find(e => e.show_name === n)?.value;
            } else {
              return "";
            }
          }({
            name: n.find(t => t.key === a[e])?.value,
            options: t[a[e]]?.options
          });
        }
      })
    };
  }
  let w = (e, t) => {
    let r = e.data;
    let l = t.data;
    let i = r.filter(e => e.type === chatFieldTypes.getFieldTypes.Select).reduce((e, t) => {
      if (t.key) {
        e[t.key] = t;
      }
      return e;
    }, {});
    let c = [];
    l.filter(e => e.type === chatFieldTypes.getFieldTypes.Select).forEach(e => {
      if (!e.key) {
        return;
      }
      let {
        key: r
      } = e;
      let n = e.value;
      let l = i == null ? undefined : i[r]?.value;
      if (n !== l) {
        c.push({
          key: r === a.lyricType ? "lyric_type" : r.replace(o, ""),
          oldValue: l,
          newValue: n
        });
      }
    });
    return c;
  };
  require.d(exports, {
    getGenerationResult: function () {
      return g;
    },
    getDefaultTemplateValues: function () {
      return y;
    },
    templateKeys: function () {
      return a;
    },
    updateLyricSelection: function () {
      return v;
    },
    extractTemplateValues: function () {
      return m;
    },
    compareTemplateChanges: function () {
      return w;
    },
    updateCustomLyricText: function () {
      return h;
    },
    parseTemplateToComponents: function () {
      return p;
    }
  });
}