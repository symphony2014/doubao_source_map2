// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Un' to 'skillPromptKeys'
// - Renamed export 'jp' to 'extendedSkillIcons'
// - Renamed export '_1' to 'skillIconSet'
// - Renamed export 'EW' to 'parsePromptTemplate'
// - Renamed export 'Ze' to 'focusTemplateInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29592.0fe385c7.js
         * chunkId: 29592
         * moduleId: 156336
         */
module.exports = function (module, exports, require) {
  var chatFieldTypes = require("chat-field-types") /*id: 660462*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var s = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M13.5 17a2 2 0 0 0-1.082.318L8.5 19.837V17h-5V4h17v13zm7 2h-7l-5.46 3.51a1 1 0 0 1-1.54-.842V19h-3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h17a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2M13.721 7.206a.75.75 0 1 0-1.442-.412l-2 7a.75.75 0 1 0 1.442.412zm2.31.764a.75.75 0 1 0-1.061 1.06l1.47 1.47-1.47 1.47a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06zm-7 0a.75.75 0 0 1 0 1.06L7.56 10.5l1.47 1.47a.75.75 0 1 1-1.061 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0",
      clipRule: "evenodd"
    })
  }), {}));
  var c = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M17 5.749a4.75 4.75 0 0 0-4.75-4.75h-.5A4.75 4.75 0 0 0 7 5.749v.25h2v-.25a2.75 2.75 0 0 1 2.75-2.75h.5A2.75 2.75 0 0 1 15 5.749v.25h2zM4.34 20.489a1.77 1.77 0 0 1 .791-.692c.237-.111.473-.187.843-.233l.006.01A7 7 0 0 0 12 22.999a7 7 0 0 0 6.044-3.467l-.018.032c.37.046.605.122.843.233.347.162.605.388.79.692.207.337.304.67.332 1.51h1.999c-.046-1.32-.246-1.885-.584-2.453a3.87 3.87 0 0 0-1.68-1.513 4.4 4.4 0 0 0-.933-.335l.007-.032c.13-.534.2-1.093.2-1.667v-1.5h2.359c.223 0 .304-.023.385-.067a.45.45 0 0 0 .189-.189c.044-.081.067-.162.067-.385v-.718c0-.223-.023-.304-.067-.385a.45.45 0 0 0-.189-.189c-.081-.044-.162-.067-.385-.067H19l.001-3.518c.617-.043 1.047-.162 1.436-.35.498-.239.888-.59 1.155-1.039.243-.41.383-.87.405-1.592l-2.222-.001c-.013.346-.06.512-.142.65a.54.54 0 0 1-.244.22c-.182.088-.406.13-.954.13H5.565c-.548 0-.772-.042-.954-.13a.53.53 0 0 1-.244-.22c-.082-.138-.129-.304-.141-.65H2.003c.022.723.161 1.183.405 1.593.267.448.657.8 1.155 1.04.389.187.819.306 1.437.349v3.518H2.641c-.223 0-.304.023-.385.067a.45.45 0 0 0-.189.189c-.044.081-.067.162-.067.385v.718c0 .223.023.304.067.385a.45.45 0 0 0 .189.189c.082.044.162.067.385.067H5v1.5c0 .575.07 1.133.2 1.667l.007.032-.021.005-.17.045a4.5 4.5 0 0 0-.742.285c-.724.349-1.293.86-1.68 1.512-.338.569-.538 1.134-.584 2.453h1.999c.028-.84.124-1.172.331-1.51m.923-2.582-.056-.209zm12.763 1.657q.068-.114.131-.232l-.05.09-.063.11.017-.027zM7 8.999h10v7a5 5 0 0 1-4 4.9v-9.4a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v9.4a5 5 0 0 1-4-4.9zm11.517 9.562-.005.011.01-.024zm-13.172-.384-.018-.055z",
      clipRule: "evenodd"
    })
  }), {}));
  var documentSettingsIcon = require("document-settings-icon") /*id: 918852*/;
  var u = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M3.75 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm17 5h-17v11h17z",
      clipRule: "evenodd"
    })
  }), {}));
  var chatDocumentRtlIcon = require("chat-document-rtl-icon") /*id: 846212*/;
  var rtlSearchIcon = require("rtl-search-icon") /*id: 717963*/;
  var notificationSettingsIcon = require("notification-settings-icon") /*id: 712107*/;
  var rtlChatInputIcon = require("rtl-chat-input-icon") /*id: 162129*/;
  var rtlIconComponent_3 = require("rtl-icon-component_3") /*id: 651551*/;
  let g = {
    explain: s,
    fix: c,
    translate: documentSettingsIcon.DocumentSettingsIcon,
    practice: u,
    knowledge: chatDocumentRtlIcon.ChatDocumentRtlIcon,
    sql: e => reactJsxRuntimeCoreReexport.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      fill: "none",
      viewBox: "0 0 16 16",
      ...e,
      children: [reactJsxRuntimeCoreReexport.jsxs("g", {
        fill: "currentColor",
        fillOpacity: 0.8,
        fillRule: "evenodd",
        clipPath: "url(#icon-cf-db_svg__a)",
        clipRule: "evenodd",
        children: [reactJsxRuntimeCoreReexport.jsx("path", {
          d: "M1.333 2.98c.379 0 .686.308.686.687H.647c0-.38.307-.686.686-.686m.686 9.674V3.667H.647v9c0 .608.409 1.05.813 1.337.423.3.99.542 1.629.734 1.286.386 3.022.614 4.91.614 1.89 0 3.625-.229 4.912-.614.639-.192 1.206-.434 1.628-.734.405-.287.813-.729.813-1.338v-9a.686.686 0 0 0-1.371 0v8.988c-.008.018-.049.1-.235.232-.252.179-.662.368-1.23.538-1.126.338-2.723.557-4.516.557s-3.39-.22-4.517-.557c-.568-.17-.977-.36-1.23-.538-.186-.133-.227-.213-.234-.232"
        }), reactJsxRuntimeCoreReexport.jsx("path", {
          d: "M2.019 9.653a.686.686 0 0 0-1.372.014c0 .608.409 1.05.813 1.337.423.3.99.542 1.629.734 1.286.386 3.022.614 4.91.614 1.89 0 3.625-.229 4.912-.614.639-.192 1.206-.434 1.628-.734.405-.287.813-.729.813-1.337a.686.686 0 0 0-1.371-.014c-.007.019-.048.1-.235.233-.252.179-.662.368-1.23.538-1.126.338-2.723.557-4.516.557s-3.39-.22-4.517-.557c-.568-.17-.977-.36-1.23-.538-.187-.133-.227-.214-.234-.233"
        }), reactJsxRuntimeCoreReexport.jsx("path", {
          d: "M2.019 6.653a.686.686 0 0 0-1.372.014c0 .608.409 1.05.813 1.337.423.3.99.542 1.629.734 1.286.385 3.022.614 4.91.614 1.89 0 3.625-.229 4.912-.614.639-.192 1.206-.434 1.628-.734.405-.287.813-.729.813-1.337a.686.686 0 0 0-1.371-.014c-.007.019-.048.1-.235.233-.252.179-.662.368-1.23.538-1.126.338-2.723.557-4.516.557s-3.39-.22-4.517-.557c-.568-.17-.977-.36-1.23-.538-.187-.133-.227-.214-.234-.233"
        }), reactJsxRuntimeCoreReexport.jsx("path", {
          d: "M3.089 1.262C4.375.876 6.11.647 7.999.647c1.89 0 3.625.23 4.912.615.639.192 1.206.434 1.628.733.405.287.813.73.813 1.338s-.408 1.05-.813 1.338c-.422.3-.99.542-1.628.733-1.287.386-3.023.615-4.911.615-1.889 0-3.625-.229-4.911-.615-.64-.191-1.206-.433-1.629-.733-.404-.287-.813-.73-.813-1.338s.409-1.05.813-1.338c.423-.3.99-.541 1.629-.733M2.025 3.333c.017.032.07.107.229.22.252.178.661.367 1.229.538 1.126.338 2.723.556 4.517.556 1.793 0 3.39-.218 4.517-.556.567-.17.977-.36 1.229-.539.158-.112.211-.187.229-.219-.018-.032-.071-.107-.23-.219-.251-.179-.66-.368-1.228-.538C11.39 2.238 9.793 2.019 8 2.019s-3.39.219-4.517.557c-.568.17-.977.36-1.23.538-.157.112-.21.187-.228.22"
        })]
      }), reactJsxRuntimeCoreReexport.jsx("defs", {
        children: reactJsxRuntimeCoreReexport.jsx("clipPath", {
          id: "icon-cf-db_svg__a",
          children: reactJsxRuntimeCoreReexport.jsx("path", {
            fill: "#fff",
            d: "M0 0h16v16H0z"
          })
        })
      })]
    }),
    md2html: rtlSearchIcon.SearchRtlIcon,
    data_analysis: notificationSettingsIcon.NotificationSettingsIcon,
    mindmap: rtlChatInputIcon.RtlChatInputIcon
  };
  let v = {
    ...g,
    github: rtlIconComponent_3.RtlIcon
  };
  let b = {
    explain: "web_ai_coding_prompt_title_explain",
    fix: "web_ai_coding_prompt_content_fix",
    translate: "web_ai_coding_prompt_content_translate",
    practice: "web_ai_coding_prompt_content_practice",
    knowledge: "web_ai_coding_prompt_content_knowledge",
    sql: "web_ai_coding_prompt_content_sql",
    data_analysis: "web_ai_coding_prompt_data_analysis",
    md2html: "web_ai_coding_prompt_md2html_v2",
    mindmap: "architecture_diagram",
    github: "web_ai_coding_prompt_repo_interpretation"
  };
  var y = {
    Input: "input",
    Radio: "radio"
  };
  function x(e, t = []) {
    let n = /\{(.*?)\}/g;
    let l = n.exec(e);
    let a = 0;
    let r = [];
    while (l !== null) {
      if (l.index > a) {
        r.push({
          type: chatFieldTypes.getFieldTypes.Text,
          text: e.slice(a, l.index)
        });
      }
      let u = t.find(e => e.key === (l == null ? undefined : l[1]));
      let _ = (u == null ? undefined : u.placeholder) ?? (l == null ? undefined : l[1]) ?? "";
      if ((u == null ? undefined : u.variableType) === y.Radio) {
        r.push({
          key: u == null ? undefined : u.key,
          type: chatFieldTypes.getFieldTypes.Select,
          value: _,
          optionList: t.find(e => e.key === (l == null ? undefined : l[1]))?.options ?? []
        });
      } else if ((u == null ? undefined : u.variableType) === y.Input) {
        r.push({
          key: u == null ? undefined : u.key,
          type: chatFieldTypes.getFieldTypes.Placeholder,
          text: "",
          placeholder: _
        });
      }
      ({
        lastIndex: a
      } = n);
      l = n.exec(e);
    }
    if (a < e.length) {
      r.push({
        type: chatFieldTypes.getFieldTypes.Text,
        text: e.slice(a)
      });
    }
    return {
      data: r
    };
  }
  let w = e => {
    let {
      data: t
    } = e;
    let n = 0;
    let i = false;
    for (let e of t) {
      if (inputToolConverter.isTextType(e)) {
        n += e.text.length;
      } else if (inputToolConverter.isSelectType(e)) {
        n += 1;
      } else if (inputToolConverter.isPlaceholderType(e)) {
        if (e == null ? undefined : e.text) {
          n += e.text.length;
        } else {
          n += 1;
          i = true;
          break;
        }
      }
    }
    if (i) {
      return n;
    } else {
      return -1;
    }
  };
  let k = async (e, t) => {
    var n;
    var i;
    if (!t) {
      return;
    }
    let l = w(e);
    if (l === -1) {
      if ((i = t.current) !== null && i !== undefined) {
        i.focus();
      }
      return;
    }
    await promiseAsyncUtilities.createDelayedPromise(100);
    if ((n = t.current) !== null && n !== undefined) {
      n.focus({
        toIndex: l
      });
    }
  };
  require.d(exports, {
    skillPromptKeys: function () {
      return b;
    },
    extendedSkillIcons: function () {
      return v;
    },
    skillIconSet: function () {
      return g;
    },
    parsePromptTemplate: function () {
      return x;
    },
    focusTemplateInput: function () {
      return k;
    }
  });
}