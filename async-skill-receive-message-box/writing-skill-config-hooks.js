// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'useWritingInputOptions'
// - Renamed export 'HP' to 'useWritingBaseConfig'
// - Renamed export 'J5' to 'useWritingProfessionalGenres'
// - Renamed export 'Oc' to 'useWritingLongArticleConfig'
// - Renamed export 'SY' to 'useWritingGenreConfig'
// - Renamed export 'Zo' to 'useWritingParagraphOptions'
// - Renamed export 'cl' to 'useWritingTemplateList'
// - Renamed export 'dF' to 'useWritingToolList'
// - Renamed export 'lj' to 'useWritingFilteredTemplates'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 276565
         */
module.exports = function (module, exports, require) {
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var writingSkillStore = require("writing-skill-store") /*id: 704044*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  let c = () => chatStoreManager.useStoreSelector("chatInputStore", e => {
    var n;
    if ((n = e.skills) === null || n === undefined) {
      return undefined;
    } else {
      return n.input_config?.write_assistant;
    }
  });
  let d = () => {
    let {
      config: e
    } = b();
    let {
      long_article: t = {}
    } = (e == null ? undefined : e.meta) || {};
    return t;
  };
  let u = function (e = {}) {
    let {
      source: t = "input_config"
    } = e;
    let n = chatGuidanceSelectors.useSkillConfig();
    let r = (() => {
      if (n) {
        let t = n == null ? undefined : n.findIndex(e => e.write_assistant);
        if (n && !isNullishCheck.isNil(t) && t !== -1) {
          return n[t]?.write_assistant;
        }
      }
    })();
    let o = c();
    if (t === "input_config") {
      return o;
    } else if (t === "side_bar") {
      return r;
    } else {
      return undefined;
    }
  };
  let _ = () => {
    let {
      config: e
    } = b();
    let {
      tool_list: t = []
    } = (e == null ? undefined : e.meta) || {};
    return t;
  };
  let m = () => {
    let {
      config: t
    } = b();
    let {
      base_config: n
    } = (t == null ? undefined : t.meta) ?? {};
    return n;
  };
  let v = e => {
    let {
      filteredCategoryIndexes: n,
      source: o
    } = e;
    let {
      config: a,
      initd: l,
      loading: s
    } = b();
    let {
      template: c = {}
    } = a ?? {};
    let {
      genre_category: d = []
    } = c;
    let {
      genre_list: _ = []
    } = c;
    let {
      write: m = {}
    } = u({
      source: o
    }) ?? {};
    let {
      template: v = []
    } = m;
    let f = _;
    if (l && !s && isEmptyUtil.isEmpty(a)) {
      f = v;
    }
    let p = isNullishCheck.isNil(d) ? [] : d;
    let h = n == null ? undefined : n.map(e => {
      return p[e]?.genre_list ?? [];
    }).flat();
    let g = f.filter(e => !!e.genre && !!(h == null ? undefined : h.includes(e.genre))) || [];
    if (isEmptyUtil.isEmpty(h)) {
      return f;
    } else {
      return g;
    }
  };
  let f = function () {
    let t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let {
      source: n
    } = t;
    let {
      write: i = {}
    } = u({
      source: n
    }) ?? {};
    let {
      config: o,
      initd: a,
      loading: l
    } = b();
    let {
      option_list: s = []
    } = (o == null ? undefined : o.meta) || {};
    if (a && !l && isEmptyUtil.isEmpty(o)) {
      return i.input_options;
    } else {
      return s.reduce((e, t) => {
        if (t.value) {
          e[t.value] = t;
        }
        return e;
      }, {});
    }
  };
  let p = () => {
    let {
      config: t
    } = b();
    let {
      genre_list: n = []
    } = (t == null ? undefined : t.template) ?? {};
    return n.filter(e => e.type === chatAiConstants.serviceLevel.Professional).map(e => ({
      show_name: e.show_name,
      value: e.genre
    }));
  };
  let h = () => {
    let {
      config: t
    } = b();
    let {
      genre_list: n = []
    } = (t == null ? undefined : t.template) ?? {};
    return {
      genre: {
        type: 3,
        options: n.filter(e => e.type === chatAiConstants.serviceLevel.Professional).map((e, t) => ({
          is_default: t === 0,
          show_name: e == null ? undefined : e.show_name,
          value: e == null ? undefined : e.value
        }))
      }
    };
  };
  let g = () => {
    let {
      config: t
    } = b();
    let {
      option_list: n = []
    } = (t == null ? undefined : t.meta) ?? {};
    let i = n.find(e => e.value === "paragraph_count");
    if (i == null) {
      return undefined;
    } else {
      return i.options;
    }
  };
  let b = () => {
    let [e, t, n = {}, i] = writingSkillStore.writingSkillStore(e => [e.isWriteConfigInitd, e.isWriteConfigLoading, e.writeConfig, e.fetchWriteConfig]);
    if (!e && !t) {
      i();
    }
    return {
      initd: e,
      loading: t,
      config: n
    };
  };
  require.d(exports, {
    useWritingInputOptions: function () {
      return f;
    },
    useWritingBaseConfig: function () {
      return m;
    },
    useWritingProfessionalGenres: function () {
      return p;
    },
    useWritingLongArticleConfig: function () {
      return b;
    },
    useWritingGenreConfig: function () {
      return h;
    },
    useWritingParagraphOptions: function () {
      return g;
    },
    useWritingTemplateList: function () {
      return d;
    },
    useWritingToolList: function () {
      return _;
    },
    useWritingFilteredTemplates: function () {
      return v;
    }
  });
}