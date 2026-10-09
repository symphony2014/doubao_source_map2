// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'p' to 'WritingOutlineComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-message-node.b65fce36.js
         * chunkId: 44236
         * moduleId: 948439
         */
module.exports = function (module, exports, require) {
  var r;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var useSmoothTextHook = require("use-smooth-text-hook") /*id: 899617*/;
  var skillActionStatusEnums = require("skill-action-status-enums") /*id: 313178*/;
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var sortableListComponents = require("sortable-list-components") /*id: 678580*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var arrayPickHelper = require("array-pick-helper") /*id: 89042*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var _ = classnamesUtils;
  var useControlledStateHook = require("use-controlled-state-hook") /*id: 263107*/;
  var dateFormatUtils_1 = require("date-format-utils_1") /*id: 179094*/;
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  var modalDialogComponent = require("modal-dialog-component") /*id: 903195*/;
  let b = () => String(Math.random() * Math.random() * Math.random());
  let y = function (e, t = false) {
    if (!e) {
      return;
    }
    let {
      height: n
    } = e.getBoundingClientRect();
    if (t) {
      e.style.minHeight = "auto";
    } else {
      e.style.minHeight = `${n}px`;
    }
  };
  var objectDefaultsUtil = require("object-defaults-util") /*id: 679337*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var rtlListIconComponent = require("rtl-list-icon-component") /*id: 48768*/;
  var businessSkillBarIcon_1 = require("business-skill-bar-icon_1") /*id: 353219*/;
  var businessSkillBarIcon = require("business-skill-bar-icon") /*id: 282062*/;
  let C = {
    reference_modal_title: "搜索参考资料",
    reference_modal_search_input_placeholder: "输入关键词联网搜索",
    reference_modal_add_button_title: "添加",
    confirm_button_title: "确认",
    cancel_button_title: "取消",
    reference_modal_selected_item_view: "查看已选: %d 个",
    reference_modal_loading: "加载中",
    reference_modal_selection_limit_toast: "最多选择 %d 个",
    reference_modal_reference_item_delete: "删除该来源",
    reference_modal_reference_item_clickToView: "前往查看",
    reference_modal_search_result_empty: "未搜索到任何内容",
    reference_modal_selected_item: "已选：%d 个",
    reference_modal_all_reference_title: "所有资料",
    reference_modal_empty_placeholder: "暂无内容，请联网搜索或手动添加",
    reference_modal_view_all_reference: "查看所有资料：%d",
    reference_modal_add_type_localFile: "本地文件",
    reference_modal_add_type_webpage: "网页链接",
    reference_modal_urlInput_placeholder: "输入网页链接",
    add_button_title: "添加",
    reference_modal_reference_item_type_pdf: "PDF 文件",
    reference_modal_reference_item_type_word: "Word 文件",
    reference_modal_reference_item_type_text: "纯文本",
    reference_modal_reference_item_type_webpage: "网页链接",
    reference_modal_reference_item_status_parsing: "解析中...",
    reference_modal_reference_item_parse_error: "解析失败",
    reference_modal_add_files_limit_toast: "最多可以同时上传 5 个文件",
    reference_modal_add_webpage_repeat_toast: "添加了重复的网页链接",
    reference_modal_reference_item_status_uploading: "上传中...",
    reference_modal_add_webpage_notSubmitted_toast: "请先完成上一个网页链接的提交，再新增更多",
    reference_modal_add_webpage_invalidURL_toast: "请输入有效的网页链接"
  };
  (r = {})[r.Uploading = -1] = "Uploading";
  let N = r;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let I = () => String(Math.random() * Math.random() * Math.random());
  let E = e => ({
    title: "",
    description: "",
    _key: I(),
    level: isNumberUtil.isNumber(e) ? e + 1 : 7,
    references: [],
    reference_status: skillActionStatusEnums.SearchStatus.Searched
  });
  let A = e => {
    return !e.description && !e.title && !e.references?.length && !e.sub_paragraph_content?.length;
  };
  let Z = {
    short: reactJsxRuntimeCoreReexport.jsx(rtlListIconComponent.RtlListIcon, {}),
    medium: reactJsxRuntimeCoreReexport.jsx(businessSkillBarIcon_1.SkillBarIcon, {}),
    long: reactJsxRuntimeCoreReexport.jsx(businessSkillBarIcon.SkillBarIcon, {})
  };
  let P = [{
    show_name: "段落简短",
    value: "short",
    is_default: true
  }, {
    show_name: "段落适中",
    value: "medium",
    is_default: false
  }, {
    show_name: "段落较长",
    value: "long",
    is_default: false
  }];
  let F = {
    professional_writing_add_chapter: "添加章节",
    professional_writing_chapter_title: "章节标题",
    professional_writing_heading: "文章标题",
    professional_writing_subtitle: "子标题",
    professional_writing_subtitle_theme: "该段内容的主题",
    professional_writing_add_title: "添加下级标题",
    professional_writing_del_chapter: "删除段落",
    skill_writing_outline_paragraph_setting: "段落设置",
    skill_writing_outline_reference_modified_alert_title: "检测到内容调整，是否重新检索参考来源",
    skill_writing_outline_reference_modified_alert_button_searchAgain: "重新检索",
    skill_writing_outline_reference_modified_alert_button_doNoting: "保持现状",
    skill_writing_outline_reference_searching: "检索中",
    skill_writing_outline_reference_modify: "修改参考",
    skill_writing_outline_title_label: "标题",
    skill_writing_outline_reference_addNew: "添加参考",
    skill_writing_last_edited_time: "编辑时间：",
    skill_writing_delete_confirm_dialogue_title: "确定删除么？",
    skill_writing_delete_confirm_dialogue_content: "删除后内容将无法找回，请谨慎操作。",
    general_btn_delete: "删除",
    general_btn_cancel: "取消"
  };
  let M = {
    ...F,
    ...C
  };
  let O = () => {
    let [e, t] = reactCoreLibraryReexport.useState(false);
    return {
      active: e,
      inputProps: {
        autosize: true,
        rows: 1,
        onFocus: () => {
          t(true);
        },
        onBlur: () => {
          t(false);
        }
      }
    };
  };
  let L = reactCoreLibraryReexport.createContext(M);
  let B = e => {
    let {
      value: t = {},
      children: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(L.Provider, {
      value: objectDefaultsUtil.defaults(t, M),
      children: n
    });
  };
  let W = () => {
    let e = reactCoreLibraryReexport.useContext(L);
    return t => e[t];
  };
  let $ = reactCoreLibraryReexport.createContext({});
  let D = e => {
    let {
      value: t = {},
      children: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx($.Provider, {
      value: objectDefaultsUtil.defaults(t, {}),
      children: n
    });
  };
  let H = () => reactCoreLibraryReexport.useContext($);
  let z = () => ({
    handleDragStart: () => {
      document.body.classList.add("no-select");
    },
    handleDragEnd: () => {
      document.body.classList.remove("no-select");
    }
  });
  let U = (e, t, n) => {
    let r = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      if (A(e)) {
        var t;
        if ((t = r.current) !== null && t !== undefined) {
          t.focus();
        }
      }
    }, []);
    let {
      run: l
    } = useDebouncedCallbackHook_1.useDebouncedCallback(() => {
      if (!t && A(e)) {
        n();
      }
    }, {
      wait: 300
    });
    reactCoreLibraryReexport.useEffect(() => {
      l();
    }, [t, l]);
    return r;
  };
  let X = e => {
    let t = W();
    return () => modalDialogComponent.Modal.confirm({
      title: t("skill_writing_delete_confirm_dialogue_title"),
      content: t("skill_writing_delete_confirm_dialogue_content"),
      okText: t("general_btn_delete"),
      cancelText: t("general_btn_cancel"),
      onOk: e,
      centered: true,
      zIndex: 10001
    });
  };
  let V = (e, t) => {
    if (e == null ? undefined : e.length) {
      for (let r of e) {
        if (!r._key) {
          r._key = b();
          r.level = t;
        }
        V(r.sub_paragraph_content ?? [], t + 1);
      }
      return e;
    }
  };
  let J = e => {
    let t = reactCoreLibraryReexport.useRef();
    let n = reactCoreLibraryReexport.useRef();
    let r = reactCoreLibraryReexport.useMemo(() => {
      return V(e.content?.sub_paragraph_content, 1) ?? [];
    }, [e]);
    if (r !== n.current) {
      t.current = n.current;
      n.current = r;
    }
    return r;
  };
  let G = function (e, t, n = (e, t) => e === t) {
    let [r, l] = reactCoreLibraryReexport.useState(false);
    let o = reactCoreLibraryReexport.useRef();
    let a = useLatestRef_1.useLatestRef(e);
    let s = useLatestRef_1.useLatestRef(n);
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        o.current = a.current();
      } else {
        let e = a.current();
        l(s.current(o.current, e));
      }
    }, [s, t, a]);
    return [r, l];
  };
  let q = function (e, t, n) {
    let r = reactCoreLibraryReexport.useRef();
    let l = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(() => {
      if (!r.current && e) {
        l.current = setTimeout(() => {
          t(e);
          l.current = null;
        }, n ?? 200);
      } else {
        if (l.current) {
          clearTimeout(l.current);
        }
        l.current = null;
      }
      r.current = e;
    }, [e]);
    return r.current;
  };
  var smartTextareaWithFormFieldWrapper = require("smart-textarea-with-form-field-wrapper") /*id: 126704*/;
  var Q = {
    active: "active-m5kxPT",
    hoverable: "hoverable-aXBUCm",
    "icon-btn": "icon-btn-Kkx0lj",
    iconBtn: "icon-btn-Kkx0lj",
    container: "container-YTmg_D",
    heading: "heading-t8z4Hp",
    chapter: "chapter-wfMvdN",
    "chapter-header": "chapter-header-ojBacj",
    chapterHeader: "chapter-header-ojBacj",
    "input-container": "input-container-fkJJjo",
    inputContainer: "input-container-fkJJjo",
    "input-title": "input-title-prH0zM",
    inputTitle: "input-title-prH0zM",
    "input-prompt": "input-prompt-RW0LRU",
    inputPrompt: "input-prompt-RW0LRU",
    "moving-title": "moving-title-HC0rOF",
    movingTitle: "moving-title-HC0rOF",
    title: "title-prPWHZ",
    closeIcon: "closeIcon-ls84c4",
    "drag-icon": "drag-icon-C999fj",
    dragIcon: "drag-icon-C999fj",
    "collapse-container": "collapse-container-XEnuxT",
    collapseContainer: "collapse-container-XEnuxT",
    "collapse-container__close": "collapse-container__close-nQ1HGK",
    collapseContainerClose: "collapse-container__close-nQ1HGK",
    zero: "zero-EsHtjy"
  };
  let Y = e => {
    let {
      heading: t,
      onChange: n
    } = e;
    let r = W();
    let {
      editable: i
    } = H();
    let {
      active: l,
      inputProps: o
    } = O();
    let a = !i;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: _(Q.heading, Q.container, Q.hoverable, "outline-heading", {
        [Q.active]: l
      }),
      children: [reactJsxRuntimeCoreReexport.jsx("span", {
        children: "标题："
      }), reactJsxRuntimeCoreReexport.jsx(smartTextareaWithFormFieldWrapper.SmartTextArea, {
        className: "input-heading-ub2AKq",
        disabled: a,
        value: t,
        ...o,
        onChange: n,
        hideScrollBar: true,
        placeholder: a ? "" : r("professional_writing_heading")
      }), " "]
    });
  };
  var semiDividerComponent = require("semi-divider-component") /*id: 384623*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var en = require("rtl-icon-factory") /*id: 682145*/.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M8.75 6.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5M8.75 13.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5M10.5 19.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0M15.253 6.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5M17 12a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0M15.253 21a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
    })
  }), {}));
  var rtlArrowLeftIcon_1 = require("rtl-arrow-left-icon_1") /*id: 531850*/;
  var calculatorIconComponent = require("calculator-icon-component") /*id: 461263*/;
  var plusIcon = require("plus-icon") /*id: 578680*/;
  var useLatestRef = require("use-latest-ref") /*id: 397834*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var searchSpinAnimationLazyComponent = require("search-spin-animation-lazy-component") /*id: 955234*/;
  var useBooleanHook = require("use-boolean-hook") /*id: 240989*/;
  var popoverComponent = require("popover-component") /*id: 973583*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  let ep = reactCoreLibraryReexport.createContext(null);
  let ev = e => {
    let {
      value: t,
      children: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(ep.Provider, {
      value: t || {},
      children: n
    });
  };
  let e_ = () => {
    let e = reactCoreLibraryReexport.useContext(ep);
    if (!e) {
      throw Error("WritingOutlineServiceContext is expected when calling useService");
    }
    return e;
  };
  let eh = reactCoreLibraryReexport.createContext(null);
  let em = e => {
    let {
      value: t,
      children: n
    } = e;
    let r = objectDefaultsUtil.defaults({
      ...t
    }, {
      onAddPhrase: emptyExportFunction.emptyFunction,
      onDeletePhrase: emptyExportFunction.emptyFunction,
      onOrderPhrase: emptyExportFunction.emptyFunction,
      onOutlineTextEdit: emptyExportFunction.emptyFunction,
      onSetWordCount: emptyExportFunction.emptyFunction,
      onChangeCountStyle: emptyExportFunction.emptyFunction,
      onAddSubTitle: emptyExportFunction.emptyFunction,
      onDeleteSubTitle: emptyExportFunction.emptyFunction,
      onOutlineReferenceClick: emptyExportFunction.emptyFunction,
      onReferenceModalShow: emptyExportFunction.emptyFunction,
      onReferenceModalClose: emptyExportFunction.emptyFunction,
      onReferenceModalConfirm: emptyExportFunction.emptyFunction,
      onReferenceSelected: emptyExportFunction.emptyFunction,
      onReferenceSearch: emptyExportFunction.emptyFunction,
      onReferenceSearchSelected: emptyExportFunction.emptyFunction,
      onReferenceAddFileClick: emptyExportFunction.emptyFunction,
      onReferenceAddLinkClick: emptyExportFunction.emptyFunction,
      onReferenceAddLinkCancel: emptyExportFunction.emptyFunction,
      onReferenceAddLinkConfirm: emptyExportFunction.emptyFunction,
      onReferenceShowAll: emptyExportFunction.emptyFunction
    });
    return reactJsxRuntimeCoreReexport.jsx(eh.Provider, {
      value: r,
      children: n
    });
  };
  let eg = () => {
    let e = reactCoreLibraryReexport.useContext(eh);
    if (!e) {
      throw Error("WritingOutlineBehaviorContext is expected when calling useBehavior");
    }
    return e;
  };
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var avatarGroupComponent = require("avatar-group-component") /*id: 261602*/;
  var avatarComponent = require("avatar-component") /*id: 16165*/;
  var doubaoConfigConstants_1 = require("doubao-config-constants_1") /*id: 234080*/;
  let ek = e => ({
    [skillActionStatusEnums.LinkSourceType.WEBLink]: "web_link",
    [skillActionStatusEnums.LinkSourceType.ManualFile]: "manual_file",
    [skillActionStatusEnums.LinkSourceType.ManualLink]: "manual_link"
  })[e];
  let eS = e => e[ek(e.type)];
  let ej = () => {
    let [e, t] = reactCoreLibraryReexport.useState(false);
    return {
      active: e,
      inputProps: {
        autosize: true,
        rows: 1,
        onFocus: () => {
          t(true);
        },
        onBlur: () => {
          t(false);
        }
      }
    };
  };
  let eR = e => {
    let {
      references: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "reference-icon-group-xkNOn4",
      children: reactJsxRuntimeCoreReexport.jsx(avatarGroupComponent.AvatarGroup, {
        maxCount: 2,
        size: "extra-extra-small",
        overlapFrom: "end",
        children: t.filter(e => e.is_selected).map((e, t) => {
          let n = eS(e);
          return reactJsxRuntimeCoreReexport.jsx(avatarComponent.AvatarComponent, {
            src: xssContentSanitizer.sanitizeUrl((n == null ? undefined : n.icon_url) || `${doubaoConfigConstants_1.flowCdnUrl}/samantha/ic_link_placeholder.png`, null, {
              logType: "js.href/src",
              reportOnly: "false",
              blackConfig: "{}",
              configMode: "merge",
              isCloseSSRReport: false,
              bid: "flow_web",
              region: "cn",
              urlLimit: "-1",
              htmlLimit: "-1",
              isSaveValidUrl: false,
              isRuntimeLog: false,
              isDOMParser: true,
              escapeRule: "escape-report",
              reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
              scmBranch: "release_train_samantha_2026-03-09_1120843696898",
              scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
              scmVersion: "1.0.4.168",
              webpackPluginVersion: "3.4.5",
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3pTbXhh-lZaN$ds-zFhbHB%T$hw-$-wWj$X$EpuZEdNe$ZuTmFWMDR3WWpOSmRtTnRWbTFh$0$wc1ltM%9iRXhZ%214aWJWSnNZMmt4T$d*$E5%QmpNMmhvWTIxa01XTjNQ$DA9"
            }),
            alt: n == null ? undefined : n.title
          }, t);
        })
      })
    });
  };
  var rtlChevronLeftIcon = require("rtl-chevron-left-icon") /*id: 400992*/;
  var scrollViewComponent = require("scroll-view-component") /*id: 683125*/;
  var reactTooltipComponent = require("react-tooltip-component") /*id: 228812*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var checkboxWrapperComponent = require("checkbox-wrapper-component") /*id: 495136*/;
  var skeletonComponent = require("skeleton-component") /*id: 619442*/;
  var topBarActionItem = require("top-bar-action-item") /*id: 543961*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  let eB = e => {
    let {
      selectedItems: t = [],
      searchService: n,
      i18nConfig: r,
      onConfirm: l,
      onCancel: o,
      loacalReferences: s = [],
      onQueryReferenceStatus: c,
      onAddLocalReference: d,
      onDeleteLocalReference: u,
      behavior: f
    } = e;
    let {
      onReferenceModalShow: p,
      onReferenceModalClose: v,
      onReferenceModalConfirm: _,
      onReferenceSelected: h,
      onReferenceSearch: m,
      onReferenceSearchSelected: g,
      onReferenceAddFileClick: x,
      onReferenceAddLinkCancel: b,
      onReferenceAddLinkClick: y,
      onReferenceAddLinkConfirm: w,
      onReferenceShowAll: k
    } = f;
    let [S, j] = reactCoreLibraryReexport.useState(false);
    let [R, C] = reactCoreLibraryReexport.useState("");
    let [T, I] = reactCoreLibraryReexport.useState(s == null ? undefined : s.concat(t));
    let [E, A] = reactCoreLibraryReexport.useState(() => deepCloneWrapper_1.deepClone(t.filter(e => e.is_selected)));
    let Z = reactCoreLibraryReexport.useRef(0);
    let [P, F] = reactCoreLibraryReexport.useState([]);
    let [M, O] = reactCoreLibraryReexport.useState("default");
    let {
      data: L,
      loading: B
    } = useRequestHook.useRequest(async () => n(R), {
      refreshDeps: [R],
      debounceWait: 300
    });
    let W = reactCoreLibraryReexport.useMemo(() => {
      let e = new Set(T.filter(e => e.is_selected).map(e => e.id));
      if (L != null) {
        L.forEach(t => t.is_selected = e.has(t.id));
      }
      return L ?? [];
    }, [L, T]);
    let $ = reactCoreLibraryReexport.useMemo(() => T.filter(e => e.is_selected), [T]);
    let D = reactCoreLibraryReexport.useMemo(() => ({
      default: E,
      full: T
    })[M], [T, E, M]);
    let H = reactFunctionMemoHook.useMemoizedCallback(() => {
      l(P.filter(e => "status" in e && e.status === skillActionStatusEnums.ProcessingStatus.SUCCESS).concat(T));
    });
    let z = false;
    let U = e => {
      if (c != null) {
        c(e).then(e => {
          let t = e.filter(e => e.status !== skillActionStatusEnums.ProcessingStatus.PROCESSING);
          if (t.length > 0) {
            t.forEach(e => {
              let t = P.find(t => t.id === e.uuid);
              if (!t || !("status" in t)) {
                return;
              }
              let n = deepCloneWrapper_1.deepClone(t);
              n.status = e.status;
              if ("manual_link" in n) {
                if (e.title !== "") {
                  n.manual_link.title = e.title;
                }
                n.manual_link.content = e.content;
                n.manual_link.url = t.manual_link?.title;
              }
              if ("manual_file" in n) {
                n.manual_file.content = e.content;
              }
              F(immerCoreImplementation.produce(t => {
                let r = P.findIndex(t => t.id === e.uuid);
                if (r !== -1) {
                  t.splice(r, 1, n);
                }
              }));
              if (e.status === skillActionStatusEnums.ProcessingStatus.SUCCESS) {
                let e = deepCloneWrapper_1.deepClone(n);
                e.is_selected = false;
                if (d != null) {
                  d(e);
                }
              }
            });
          } else {
            z = true;
          }
        });
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (P.length === 0) {
        return;
      }
      let e = P.filter(e => "status" in e && e.status === skillActionStatusEnums.ProcessingStatus.PROCESSING).map(e => {
        return e.id ?? "";
      });
      if (e.length > 0 || z) {
        Z.current = 0;
        let t = setInterval(() => {
          U(e);
          Z.current += 1;
          if (Z.current >= 20) {
            clearInterval(t);
            F(immerCoreImplementation.produce(t => {
              for (let n of t) {
                if (collectionIncludesUtil.includes(e, n.id) && "status" in n) {
                  n.status = skillActionStatusEnums.ProcessingStatus.FAILED;
                }
              }
            }));
          }
        }, 1000);
        return () => {
          clearInterval(t);
        };
      }
    }, [P, z]);
    return {
      searchKeyword: R,
      setSearchKeyword: C,
      searchedReferences: W,
      fullReferences: T,
      selectedReferences: $,
      showMode: M,
      setShowMode: O,
      revertReferenceSelectState: e => {
        let t = deepCloneWrapper_1.deepClone(T);
        let n = deepCloneWrapper_1.deepClone(E);
        let r = deepCloneWrapper_1.deepClone(P);
        let i = !e.is_selected;
        let l = r.findIndex(t => t.id === e.id);
        if (l !== -1) {
          r[l].is_selected = i;
          F([...r]);
        } else {
          if (!t.find(t => t.id === e.id)) {
            t.unshift(e);
          }
          if (!n.find(t => t.id === e.id)) {
            n.unshift(e);
          }
          let r = t.findIndex(t => t.id === e.id);
          let l = n.findIndex(t => t.id === e.id);
          if (r < 0 || l < 0) {
            return;
          }
          t[r].is_selected = i;
          n[l].is_selected = i;
          A([...n]);
          I([...t]);
        }
      },
      dropReference: e => {
        A(t => t.filter(t => e.id !== t.id));
        I(t => t.filter(t => e.id !== t.id));
        F(t => t.filter(t => e.id !== t.id));
        if (s.findIndex(t => t.id === e.id) !== -1) {
          if (u != null) {
            u(e);
          }
        }
      },
      isSearchingReferences: B,
      displayingReferences: D,
      onConfirm: H,
      onCancel: o,
      disableAddBtn: reactCoreLibraryReexport.useMemo(() => P.some(e => "status" in e && (e.status === skillActionStatusEnums.ProcessingStatus.PROCESSING || e.status === N.Uploading)), [P]),
      searchIsFocus: S,
      setSearchIsFocus: j,
      currentLocalReferences: P,
      setCurrentLocalReferences: F,
      onReferenceModalShow: p,
      onReferenceModalClose: v,
      onReferenceModalConfirm: _,
      onReferenceSelected: h,
      onReferenceSearch: m,
      onReferenceSearchSelected: g,
      onReferenceAddFileClick: x,
      onReferenceAddLinkCancel: b,
      onReferenceAddLinkClick: y,
      onReferenceAddLinkConfirm: w,
      onReferenceShowAll: k
    };
  };
  let eW = reactCoreLibraryReexport.createContext(null);
  let e$ = () => {
    let e = reactCoreLibraryReexport.useContext(eW);
    if (!e) {
      throw Error("「useSearchReferenceSvc」 only can be use in child component of「SearchReferenceSelectorSvcContext.Provider」");
    }
    return e;
  };
  let eD = reactCoreLibraryReexport.createContext(null);
  let eH = e => {
    let {
      i18nConfig: t,
      children: n
    } = e;
    let r = Object.assign({}, t);
    return reactJsxRuntimeCoreReexport.jsx(eD.Provider, {
      value: r,
      children: n
    });
  };
  let ez = e => {
    let {
      children: t
    } = e;
    let n = Object.assign({}, C, reactCoreLibraryReexport.useContext(eD));
    return reactJsxRuntimeCoreReexport.jsx(eD.Provider, {
      value: n,
      children: t
    });
  };
  let eU = () => {
    let e = reactCoreLibraryReexport.useContext(eD);
    if (!e) {
      throw Error("should use in I18nProvider children component");
    }
    return reactFunctionMemoHook.useMemoizedCallback(t => {
      return e[t] ?? t;
    });
  };
  var eX = "data:image/png;base64,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";
  var eV = {
    "header-container": "header-container-GjcBmH",
    headerContainer: "header-container-GjcBmH",
    "header-container-icon": "header-container-icon-JBWzFD",
    headerContainerIcon: "header-container-icon-JBWzFD",
    container: "container-f2hGuu",
    "action-btn": "action-btn-se0YwV",
    actionBtn: "action-btn-se0YwV",
    "search-reference-result-scroll-view": "search-reference-result-scroll-view-YEMOAB",
    searchReferenceResultScrollView: "search-reference-result-scroll-view-YEMOAB",
    "search-reference-result-scroll-view--compact": "search-reference-result-scroll-view--compact-MmUfGP",
    searchReferenceResultScrollViewCompact: "search-reference-result-scroll-view--compact-MmUfGP",
    "search-reference-preview": "search-reference-preview-nirNRq",
    searchReferencePreview: "search-reference-preview-nirNRq",
    "search-reference-preview--compact": "search-reference-preview--compact-aXELbu",
    searchReferencePreviewCompact: "search-reference-preview--compact-aXELbu",
    "search-reference-preview-header-tools-trash": "search-reference-preview-header-tools-trash-NacMm1",
    searchReferencePreviewHeaderToolsTrash: "search-reference-preview-header-tools-trash-NacMm1",
    "search-reference-preview-header": "search-reference-preview-header-lEi9HC",
    searchReferencePreviewHeader: "search-reference-preview-header-lEi9HC",
    "search-reference-preview-header-pdf": "search-reference-preview-header-pdf-I5U1yx",
    searchReferencePreviewHeaderPdf: "search-reference-preview-header-pdf-I5U1yx",
    "search-reference-preview-header-icon": "search-reference-preview-header-icon-ulr8ec",
    searchReferencePreviewHeaderIcon: "search-reference-preview-header-icon-ulr8ec",
    "search-reference-preview-header-title": "search-reference-preview-header-title-fPy7bw",
    searchReferencePreviewHeaderTitle: "search-reference-preview-header-title-fPy7bw",
    "search-reference-preview-header-title-text": "search-reference-preview-header-title-text-DFjPhw",
    searchReferencePreviewHeaderTitleText: "search-reference-preview-header-title-text-DFjPhw",
    "search-reference-preview-header-tools": "search-reference-preview-header-tools-zh3Bkm",
    searchReferencePreviewHeaderTools: "search-reference-preview-header-tools-zh3Bkm",
    "search-reference-preview-header-link": "search-reference-preview-header-link-RR_YM9",
    searchReferencePreviewHeaderLink: "search-reference-preview-header-link-RR_YM9",
    "search-reference-preview-header-input": "search-reference-preview-header-input-FrOpo1",
    searchReferencePreviewHeaderInput: "search-reference-preview-header-input-FrOpo1",
    "search-reference-preview-header-spin": "search-reference-preview-header-spin-Uq92Pt",
    searchReferencePreviewHeaderSpin: "search-reference-preview-header-spin-Uq92Pt",
    "search-reference-preview-summary": "search-reference-preview-summary-STfzRT",
    searchReferencePreviewSummary: "search-reference-preview-summary-STfzRT",
    "search-reference-preview-desc": "search-reference-preview-desc-ypgq9X",
    searchReferencePreviewDesc: "search-reference-preview-desc-ypgq9X",
    "search-reference-preview-error": "search-reference-preview-error-d52q4w",
    searchReferencePreviewError: "search-reference-preview-error-d52q4w",
    "search-reference-preview-skeleton": "search-reference-preview-skeleton-e9ALA5",
    searchReferencePreviewSkeleton: "search-reference-preview-skeleton-e9ALA5",
    "search-reference-preview-skeleton--compact": "search-reference-preview-skeleton--compact-fHV8Rw",
    searchReferencePreviewSkeletonCompact: "search-reference-preview-skeleton--compact-fHV8Rw",
    "search-reference-preview-skeleton-header": "search-reference-preview-skeleton-header-GAFlqh",
    searchReferencePreviewSkeletonHeader: "search-reference-preview-skeleton-header-GAFlqh",
    "search-reference-preview-skeleton-header-icon": "search-reference-preview-skeleton-header-icon-nC8vqL",
    searchReferencePreviewSkeletonHeaderIcon: "search-reference-preview-skeleton-header-icon-nC8vqL",
    "search-reference-preview-skeleton-header-title": "search-reference-preview-skeleton-header-title-pA4uSJ",
    searchReferencePreviewSkeletonHeaderTitle: "search-reference-preview-skeleton-header-title-pA4uSJ",
    "search-reference-preview-skeleton-summary": "search-reference-preview-skeleton-summary-H26AfV",
    searchReferencePreviewSkeletonSummary: "search-reference-preview-skeleton-summary-H26AfV",
    "reference-modal-footer": "reference-modal-footer-_VJ7yX",
    referenceModalFooter: "reference-modal-footer-_VJ7yX",
    "reference-modal-footer-to-selected": "reference-modal-footer-to-selected-RCz8xd",
    referenceModalFooterToSelected: "reference-modal-footer-to-selected-RCz8xd",
    "reference-modal-footer-selected": "reference-modal-footer-selected-wbUAf1",
    referenceModalFooterSelected: "reference-modal-footer-selected-wbUAf1"
  };
  let eJ = function (e) {
    let {
      reference: n,
      onDropReference: r,
      onRevertReferenceSelectStatus: i
    } = e;
    let l = eU();
    let o = n[ek(n.type)] ?? {};
    let s = e => "file_type" in e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-testid": "writer_search_reference_preview_item",
      className: eV["search-reference-preview"],
      onClick: () => i == null ? undefined : i(n),
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: _(eV["search-reference-preview-header"]),
        children: [reactJsxRuntimeCoreReexport.jsx("img", {
          className: eV["search-reference-preview-header-pdf"],
          src: xssContentSanitizer.sanitizeUrl((e => {
            if (!s(e)) {
              return eX;
            }
            switch (e.file_type) {
              case "pdf":
                return "data:image/png;base64,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";
              case "txt":
                return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAxgSURBVHgB7VtfjFZHFT8zd75v+bsNFBZoqUK7pYJCaEpi1ca0YvSJEP88lKYxMf7po33exsQU8cUXffClib41mBhJakjUPiiohEBYMdWYprK0NdXuLgW6wC4L+907nnPmnLnzXeoLc6F9uKf9uN+dO3fuzO/7nb9zF6CTTjrppJNOOumkk0466aR1MdCmPOs39UtY6ytY4Sw46IVmV4DpGfB0BAseKjzHo3PhGvXhro7/B4cnZQm+wGt97FdYMF/eCWuffRJOj280s3AXxUEb8l2/wl2Bz/gSVpR0bgEqHLnw+AkP8daAqfBY4D8jPTBlBR4vQ+XBIJh+gCBQP2+5H/SKcC/+wwBVBjbiPQfPTfvv302QLOSKgDNA1mgTMYMXhyC4ft2VFlogOINSviM4hoCqGJzQhkdqCwOFcQb1EGMI3osI0hjcJckH6DJsI3AKWVRKSQaD2mnhyQXHKGA7Hm0fwREghDHAfZFVDJ4X8Aq2B/QMAueugZQNEP7qm3lhPbFnulgBwQkrQABUdhBbjBWmiFQEWgk6DFhSu6KeqK9t5l0DKQ+gfX5Fib8wsyGM5hkIPCcb43ziBGzox2qki66CijGWeI0B6bGdMvTdyLhko2imJrDKEFD42YDX7zhIeQCtgeXJSN7h5NW2FDUggTH4GbE1YASMEQ8VwaELVWAWEamQ/t4k9xFI3EQW/c6DlK9i9A+55yqxM6JevMBq2P7EBytYJnguEFZRX6tqGWYYAY6TNYFxwrAxPD94p0DKBqg0Ia6hhdB3VZ8h9dLFpNcRiL7YrdRz0bEKMROD0zeBUf++BFfjeH44fisMrLd3CKQ2jHTtomXiTJiEEVF8DUh6fzzaoGo2HUf6n5+G+ZsDWIKh4bCvid/HEKiD0y2DlO/mSWglwhA12GR7iuQyMceZOr4hIba4hC0KiBpnFVw4q9x/L8Pb6XVx+9qHWLr+RgEvtglSFkCrwwheXThHzeqlSO1cAKVIjHPKHrI93tcM8k02mdo20VhHJ+HsjSW4xvcmalYl37F9DEFqjUnZDFLPxdyhI7qfshHfkHAfoQgzSj6uqNWwSNArTK1maqPOTcO1XxyD3y7chHmxaWERwigFTZjUCkhZyerqb/h7b3r4bAwMUUbk2MeVlZJq8HVy/SNhodSXbVfCLif2hxZOxptBsdKXXH8ffE9Bw7av7oHxsTVw7z0jsApjp34RQOLr+qujsZ/92e/g0EvPmSW4TclOVlOV0ahXXDNHwQyMJp4DZguHMAyaqFIaNVMGj1Ggr+SeQuIiCiqpgc0dnr9yBs5hReBfHLkXCRtlLCMesLcMRrHpItymtGKklT1FGHHI5qTiVMWwY6V2qxrui5E552i0uEJKATaJvulaT3I79nhiwOloZSwam6sHOJdRyJN8gEydpJJKcWAINZuirVFwJGpO1SjNuZhNVW1/0nzNimckAPRaBIeAdeGmXk9CD8iX/DhIsm3oSZ4lM6MSRZHkU9y3CJ5LE1JlB/fRsCCm9WGMVLUYHAGMjt7UCa+VoJPsVOXFaJv8gmB+wUyZItF0AUmQp/FKMLZcJOvXoKnHUZUM5Q8TCmgMLhZ/Th8/um9u7sLj23c+9vPxbbumCDDruF9kiBWbR89BcEDDg48Eg7S2Q8xhg6olCxPUgNuFNc0Im77GOEjYoAkrHU4eO3Jgdubt79xYXNj52uRfDl2Zu7QyMUVhAVUdnatqt6VePD5kChXECAC2Py6okE6SRA22Zuxpm7ZzcSyJvKNQbCxSVX7l/NVLq6SODapGzDrN+hGsqhpOfHMln0GSeRcppTVDl1gonof+Xtmj6kXsocVpcPjXE0f3XXjn3Njn9n7l8Nr1Gw9T2+aPj/8UPzP6CK4wBgPPlcdK4is23gJeOYBsaSUOKgFgKO8S0JyN9ohBUjoYLcNKHERNGiKc+uOvn5m7OH3g8sX/7H+sKCae+uLXDk+98bdT27bvPm8b4YO4drCyCqs7Jj1mUmBYCVnSTrIqtqOZZJYySWJP396ac/G5qWs/p/5w5ACBw/cOBmOTJ1/9EbHkIQQnunsNBo14TydFNMndtB9uG7HKQaZkATS6GkLNBhesbl2pD2qcpQakOxmawUfKlaH/5IkjT89deveZODFj5h/evvsnkETHqj5FQlc29FUdMBYShPZ6+eDII/KkkGpgUdYTIs/ibHK9FHvjpJ7s6xIILfjMcVSrS4E5fD+Cs+PRJyYe2bHrTSubjLYI7EgNOZdtnahaKNMajczLSlZ321lYkBbsvNgUE/KoNGpmu1PxTqmBJDF2ySrPnrgVnE8hOA8/sutNqT9TUGgIb46B5N6ejV4xqDfU6kD3edkQgEzJB6hR75FIl1UrBYI8F004LbNOHvvVt67Nze7XPsqcrQKOBoXxURII9sXrIXtCzQiGo2YvCW4bNqgdFYPai/FRQLM+qhaLl3iJrp0+9vL3rl97f6+Ow+DsemLiIQRHB5KKoZEcLIQCksBGANTdg9SbxLXb8KxsyfZiuq+VhvZFUuHjIHIgQMn55P8DZ0cAxyp7xDBr6qCRtmbrRSGuvagTV36mCzGQsfkq1krRnico+1yxHYYzeirE0/mZBjiFc7OfQHC2IHMoOlZATJKUahqhJQwqd2gwyI8oYxQ9FCCWmTEQSTtGWihefBDcNr6d4ZE5zy82wNm1Z+/Epi3jM0S5fsIUrvXY2sYoq8AOG3vWYh/V2PCbJfJChK33fG9b8ov2zSkke18pOK8df/n5JnM+uedLExs/Nj6bsoO/i3G1VV0zqmQDUsuwfQGOwKGYh1hDwBBpvPSlz83FPEPdipG2GnOYGpC+jLxw9b2VU2d//+3F+SY4eyfuv28rg+Ol4EUg0QL7TmyL1HZ6EucggNHOMZhS2uA8DGOspSUGleeiatZflsehPICwnmmu4AT6EvZDvfWDB39j/vKq10+9cqhcWnxQb4nMQXDi0xEVKzGUFNFiDVqrhWy0afFaIDOs0qRKzBjcSQFlErSQpKrkAXQl0JhmLMkmL4rSCtrAeHfq9Keb4GxH5mwU5rAH1JRAqcFlRKr4h+i5kFOdaczBGqvgpDkBJpY6PtRIGhnkF8OEaV/eyesI6r3ev/BWzK0YnEf3TmzYND5z6k+YlL5X5123I8uWLTv/9Nf3v7Bu3bp5rQ7UzwpgkXqOQJ7k14NAqnmyp65VxKl/vPqFCjNyLDHOr7pn/W+2o1pt2Dw+c+bP+eCQLC4uPvjP188xO1nFBsIaF4w1GfM2EtZWatK8QRjsQ5zQ6Jqxt5YvH31h7IHx86Or182T58Ei2Ab6Rdauv+8wuSVrTTSg6Ks53yIDRCs0fA3bqJUMDforQwVdSnWxXL961aqZp558/O/q0ulWVbH4JloLxZx8gCR1oJWm28ibtuyeSt8mo190PTLo/q3jv4zbPUY2C2WoXl9qOuS5XM1Gvd+J0Y6VkgDIUN6VfqfruRjlu3lJK0aCNfVoZE0s1Itw7KJxi9gL29iSifvzAMnbU8Gdi5uP15tCETP+EKE410hQc+OgfBIWjR1VKaqXVR0wpjsPWjbl+EaL9eraP2AfK9290OtasE8DRwLGJ8Gk3p8bB+VVFKHxiw7qsiuVNWgbWVWDJXmLgyJhVZcqeX2GJ2XCq8EgxTAdnp2Bqwv2rEI2AKN9qC2NpHOlFQbp7gTbFS9bQBCYZHVDUX/ZJAMn8ZK1KxDpPn98XS/5Hg1xYmeqNEl2MTXxbexqZAFUXoTruosBg1p9dFeDhNnTyK3UEHNfd6shdGmE7esqgRbnm9+tFMiUVSTKopFFuA4ZkgXQ5EtmAZe+pCkCbxiKsaacKrJC+us+FkXarF6NaiEk7In9ybE3+vKORaJaCpSXdwO8sJlY9IPncI4Zkq1iVQnTMdRXWyL76y48wadvYVCTK+pFOSn29MQexXK22q4kDND6DgWAab1Z7ZBRtRI7hP+9A5mSXzCbgzdwqgtxlxQalbyqsQ8GoUQRf33feGEzyblIxdKYx0otmu1LWatZLJAlYyBoCyuv4dwyJRsgUrOqDydxJNZ1Lbb7xksFygiv3svV7JHX75hxvEur4YEbViH97mX3NE5CQa3iHv3Cink4mate/DxoUT7/Q/9AcQNGqx6s4PXb+g/i6C/mFAQnf2hX6ItPKMvpQk/e8giRdOwnB6B6D20BYVDqlxrtqMODagALzsPFH3/TTEMnnXTSSSeddNJJJ5100slHV/4HxenaFW2puP8AAAAASUVORK5CYII=";
              default:
                return eX;
            }
          })(o), null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: false,
            bid: "flow_web",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: true,
            escapeRule: "escape-report",
            reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
            scmBranch: "release_train_samantha_2026-03-09_1120843696898",
            scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
            scmVersion: "1.0.4.168",
            webpackPluginVersion: "3.4.5",
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3pTbXhh-lZaN$ds-zFhbHB%T$hw-$-wWj$X$EpuZEdNe$ZuTmFWMDR3WWpOSmRtTnRWbTFh$0$wc1ltM%9iRXhZ$*14WldFcHFZ$%14ZEdJe$$ta*lRemw1$2xoT01XSkl$WFJq%0$wc1pHMXNiR1I1T$hwWk0wcDJZa2QzZEdKS*JIc*tRel$3WXpOb2FHTnRaREZqZHowOQ"
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: _("!ml-[-4px]", eV["search-reference-preview-header-title"]),
          children: reactJsxRuntimeCoreReexport.jsx(reactTooltipComponent.TooltipComponent, {
            content: l("reference_modal_reference_item_clickToView"),
            children: reactJsxRuntimeCoreReexport.jsx("span", {
              className: eV["search-reference-preview-header-title-text"],
              children: o.title
            })
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: eV["search-reference-preview-header-tools"],
          children: reactJsxRuntimeCoreReexport.jsx(reactTooltipComponent.TooltipComponent, {
            content: l("reference_modal_reference_item_delete"),
            zIndex: 10700,
            children: r && reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
              className: eV["search-reference-preview-header-tools-trash"],
              size: "small",
              color: "grey",
              newIcon: true,
              onClick: e => {
                r(n);
                e.stopPropagation();
              },
              children: reactJsxRuntimeCoreReexport.jsx(calculatorIconComponent.CalculatorIcon, {})
            })
          })
        }), "status" in n && (n.status === skillActionStatusEnums.ProcessingStatus.PROCESSING || n.status === N.Uploading) ? reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
          wrapperClassName: eV["search-reference-preview-header-spin"]
        }) : reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: "status" in n && n.status === skillActionStatusEnums.ProcessingStatus.FAILED ? null : reactJsxRuntimeCoreReexport.jsx(checkboxWrapperComponent.CheckboxWrapper, {
            checked: n.is_selected,
            onChange: () => i(n)
          })
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: eV["search-reference-preview-desc"],
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          children: (e => {
            if (!s(e)) {
              return l("reference_modal_reference_item_type_word");
            }
            switch (e.file_type) {
              case "pdf":
                return l("reference_modal_reference_item_type_pdf");
              case "txt":
                return l("reference_modal_reference_item_type_text");
              default:
                return l("reference_modal_reference_item_type_word");
            }
          })(o)
        }), "status" in n && n.status === N.Uploading && reactJsxRuntimeCoreReexport.jsxs("div", {
          children: [l("reference_modal_reference_item_status_uploading"), `${n == null ? undefined : n.percent} %`]
        }), "status" in n && n.status === skillActionStatusEnums.ProcessingStatus.PROCESSING && reactJsxRuntimeCoreReexport.jsx("div", {
          children: l("reference_modal_reference_item_status_parsing")
        }), "status" in n && n.status === skillActionStatusEnums.ProcessingStatus.FAILED && reactJsxRuntimeCoreReexport.jsx("div", {
          className: eV["search-reference-preview-error"],
          children: l("reference_modal_reference_item_parse_error")
        })]
      })]
    });
  };
  let eG = function (e) {
    let {
      reference: n,
      onDropReference: r,
      onRevertReferenceSelectStatus: l,
      onAddReference: o
    } = e;
    let s = eU();
    let c = n[ek(n.type)] ?? {};
    let d = e => "url" in e;
    let u = e => "status" in e;
    let [f, p] = reactCoreLibraryReexport.useState("");
    let {
      currentLocalReferences: v,
      setCurrentLocalReferences: h,
      onReferenceAddLinkConfirm: m,
      onReferenceAddLinkCancel: g
    } = e$();
    let x = e => {
      try {
        new URL(e);
        return true;
      } catch (e) {
        return false;
      }
    };
    let b = () => {
      let e = v.findIndex(e => e.id === n.id);
      if (f !== "") {
        if (!x(f)) {
          samanthaToastFactory.defaultToast.warning({
            content: s("reference_modal_add_webpage_invalidURL_toast"),
            showClose: false,
            theme: "light",
            zIndex: 10800
          });
          return;
        }
        if (v.some(e => {
          return "manual_link" in e && u(e) && e.status !== N.Uploading && e.manual_link?.title === f;
        })) {
          samanthaToastFactory.defaultToast.warning({
            content: s("reference_modal_add_webpage_repeat_toast"),
            showClose: false,
            theme: "light",
            zIndex: 10800
          });
          return;
        }
        if (e !== -1) {
          let r = {
            type: skillActionStatusEnums.LinkSourceType.ManualLink,
            status: skillActionStatusEnums.ProcessingStatus.PROCESSING,
            id: n.id ?? "",
            is_selected: true,
            manual_link: {
              title: f,
              content: ""
            }
          };
          if (o != null) {
            o({
              uuid: n.id,
              link: f
            });
          }
          let i = [...v];
          i.splice(e, 1, r);
          h(i);
        }
      }
    };
    let y = () => {
      if (v.findIndex(e => e.id === n.id) !== -1) {
        h(v.filter(e => e.id !== n.id));
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-testid": "writer_search_reference_preview_item",
      className: eV["search-reference-preview"],
      onClick: () => l == null ? undefined : l(n),
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: _(eV["search-reference-preview-header"]),
        children: [reactJsxRuntimeCoreReexport.jsx("img", {
          className: eV["search-reference-preview-header-pdf"],
          src: xssContentSanitizer.sanitizeUrl("data:image/png;base64,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", null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: false,
            bid: "flow_web",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: true,
            escapeRule: "escape-report",
            reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
            scmBranch: "release_train_samantha_2026-03-09_1120843696898",
            scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
            scmVersion: "1.0.4.168",
            webpackPluginVersion: "3.4.5",
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3pTbXhh-lZaN$ds-zFhbHB%T$hw-$-wWj$X$EpuZEdNe$ZuTmFWMDR3WWpOSmRtTnRWbTFh$0$wc1ltM%9iRXhZ$*14WldFcHFZ$%14ZEdJe$$ta*lRemw1$2xoT01XSkl$WFJq%0$wc1pHMXNiR1I1T$hwWk0wcDJZa2QzZEdKS*JIc*tRel$3WXpOb2FHTnRaREZqZHowOQ"
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: _("!ml-[-4px]", eV["search-reference-preview-header-title"]),
          children: u(n) && n.status === N.Uploading ? reactJsxRuntimeCoreReexport.jsx("input", {
            "data-testid": "writer_search_reference_preview_item_input",
            className: _(eV["search-reference-preview-header-link"], eV["search-reference-preview-header-input"]),
            placeholder: s("reference_modal_urlInput_placeholder"),
            onChange: e => {
              p(e.target.value);
            },
            id: "link-input",
            autoFocus: true
          }) : reactJsxRuntimeCoreReexport.jsx(reactTooltipComponent.TooltipComponent, {
            content: s("reference_modal_reference_item_clickToView"),
            children: reactJsxRuntimeCoreReexport.jsx("span", {
              className: eV["search-reference-preview-header-title-text"],
              onClick: e => {
                if (d(c)) {
                  window.open(xssContentSanitizer.sanitizeUrl(c.url, null, {
                    logType: "js.window.location",
                    reportOnly: "false",
                    blackConfig: "{}",
                    configMode: "merge",
                    isCloseSSRReport: false,
                    bid: "flow_web",
                    region: "cn",
                    urlLimit: "-1",
                    htmlLimit: "-1",
                    isSaveValidUrl: false,
                    isRuntimeLog: false,
                    isDOMParser: true,
                    escapeRule: "escape-report",
                    reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
                    scmBranch: "release_train_samantha_2026-03-09_1120843696898",
                    scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
                    scmVersion: "1.0.4.168",
                    webpackPluginVersion: "3.4.5",
                    filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3pTbXhh-lZaN$ds-zFhbHB%T$hw-$-wWj$X$EpuZEdNe$ZuTmFWMDR3WWpOSmRtTnRWbTFh$0$wc1ltM%9iRXhZ$*14WldFcHFZ$%14ZEdJe$$ta*lRemw1$2xoT01XSkl$WFJq%0$wc1pHMXNiR1I1T$hwWk0wcDJZa2QzZEdKS*JIc*tRel$3WXpOb2FHTnRaREZqZHowOQ"
                  }));
                  e.stopPropagation();
                }
              },
              children: c.title
            })
          })
        }), (!u(n) || n.status !== N.Uploading) && reactJsxRuntimeCoreReexport.jsx("div", {
          className: eV["search-reference-preview-header-tools"],
          children: reactJsxRuntimeCoreReexport.jsx(reactTooltipComponent.TooltipComponent, {
            content: s("reference_modal_reference_item_delete"),
            zIndex: 10700,
            children: r && reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
              className: eV["search-reference-preview-header-tools-trash"],
              size: "small",
              color: "grey",
              newIcon: true,
              onClick: e => {
                r(n);
                e.stopPropagation();
              },
              children: reactJsxRuntimeCoreReexport.jsx(calculatorIconComponent.CalculatorIcon, {})
            })
          })
        }), u(n) && n.status === N.Uploading ? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            "data-testid": "writer_search_reference_preview_item_cancel_btn",
            size: "small",
            type: "quartary",
            onClick: e => {
              y();
              e.stopPropagation();
              if (g != null) {
                g();
              }
            },
            className: "mr-4",
            children: s("cancel_button_title")
          }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            "data-testid": "writer_search_reference_preview_item_add_btn",
            size: "small",
            type: "primary",
            onClick: e => {
              b();
              e.stopPropagation();
              if (m != null) {
                m();
              }
            },
            disabled: f === "",
            children: s("add_button_title")
          })]
        }) : reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: u(n) && n.status === skillActionStatusEnums.ProcessingStatus.PROCESSING ? reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
            wrapperClassName: eV["search-reference-preview-header-spin"]
          }) : reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
            children: u(n) && n.status === skillActionStatusEnums.ProcessingStatus.FAILED ? null : reactJsxRuntimeCoreReexport.jsx(checkboxWrapperComponent.CheckboxWrapper, {
              checked: n.is_selected,
              onChange: () => l(n)
            })
          })
        })]
      }), (!u(n) || n.status !== N.Uploading) && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: eV["search-reference-preview-desc"],
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          children: [" ", s("reference_modal_reference_item_type_webpage")]
        }), u(n) && n.status === N.Uploading && reactJsxRuntimeCoreReexport.jsx("div", {
          children: s("reference_modal_reference_item_status_parsing")
        }), u(n) && n.status === skillActionStatusEnums.ProcessingStatus.FAILED && reactJsxRuntimeCoreReexport.jsx("div", {
          className: eV["search-reference-preview-error"],
          children: s("reference_modal_reference_item_parse_error")
        })]
      })]
    });
  };
  let eq = function (e) {
    let {
      reference: r,
      onDropReference: i,
      onRevertReferenceSelectStatus: l,
      onReferenceAction: o
    } = e;
    let a = eU();
    let s = r[ek(r.type)] ?? {};
    let c = e => "url" in e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: eV["search-reference-preview"],
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: eV["search-reference-preview-header"],
        children: [reactJsxRuntimeCoreReexport.jsx(avatarComponent.AvatarComponent, {
          className: eV["search-reference-preview-header-icon"],
          src: xssContentSanitizer.sanitizeUrl((s == null ? undefined : s.icon_url) || `${doubaoConfigConstants_1.flowCdnUrl}/samantha/ic_link_placeholder.png`, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: false,
            bid: "flow_web",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: true,
            escapeRule: "escape-report",
            reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
            scmBranch: "release_train_samantha_2026-03-09_1120843696898",
            scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
            scmVersion: "1.0.4.168",
            webpackPluginVersion: "3.4.5",
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3pTbXhh-lZaN$ds-zFhbHB%T$hw-$-wWj$X$EpuZEdNe$ZuTmFWMDR3WWpOSmRtTnRWbTFh$0$wc1ltM%9iRXhZ$*14WldFcHFZ$%14ZEdJe$$ta*lRemw1$2xoT01XSkl$WFJq%0$wc1pHMXNiR1I1T$hwWk0wcDJZa2QzZEdKS*JIc*tRel$3WXpOb2FHTnRaREZqZHowOQ"
          }),
          alt: s.title?.[0]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: eV["search-reference-preview-header-title"],
          children: reactJsxRuntimeCoreReexport.jsx(reactTooltipComponent.TooltipComponent, {
            content: a("reference_modal_reference_item_clickToView"),
            zIndex: 10700,
            children: reactJsxRuntimeCoreReexport.jsx("span", {
              className: eV["search-reference-preview-header-title-text"],
              onClick: () => {
                if (c(s)) {
                  window.open(xssContentSanitizer.sanitizeUrl(s == null ? undefined : s.url, null, {
                    logType: "js.window.location",
                    reportOnly: "false",
                    blackConfig: "{}",
                    configMode: "merge",
                    isCloseSSRReport: false,
                    bid: "flow_web",
                    region: "cn",
                    urlLimit: "-1",
                    htmlLimit: "-1",
                    isSaveValidUrl: false,
                    isRuntimeLog: false,
                    isDOMParser: true,
                    escapeRule: "escape-report",
                    reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
                    scmBranch: "release_train_samantha_2026-03-09_1120843696898",
                    scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
                    scmVersion: "1.0.4.168",
                    webpackPluginVersion: "3.4.5",
                    filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3pTbXhh-lZaN$ds-zFhbHB%T$hw-$-wWj$X$EpuZEdNe$ZuTmFWMDR3WWpOSmRtTnRWbTFh$0$wc1ltM%9iRXhZ$*14WldFcHFZ$%14ZEdJe$$ta*lRemw1$2xoT01XSkl$WFJq%0$wc1pHMXNiR1I1T$hwWk0wcDJZa2QzZEdKS*JIc*tRel$3WXpOb2FHTnRaREZqZHowOQ"
                  }));
                }
              },
              children: s.title
            })
          })
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: eV["search-reference-preview-header-tools"],
          children: [reactJsxRuntimeCoreReexport.jsx(reactTooltipComponent.TooltipComponent, {
            content: a("reference_modal_reference_item_delete"),
            zIndex: 10700,
            children: i && reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
              className: eV["search-reference-preview-header-tools-trash"],
              size: "small",
              color: "grey",
              newIcon: true,
              onClick: e => {
                i(r);
                e.stopPropagation();
              },
              children: reactJsxRuntimeCoreReexport.jsx(calculatorIconComponent.CalculatorIcon, {})
            })
          }), l && reactJsxRuntimeCoreReexport.jsx(checkboxWrapperComponent.CheckboxWrapper, {
            "data-testid": "writer_reference_modal_checkbox",
            checked: r.is_selected,
            onChange: () => {
              l(r);
              if (o != null) {
                o();
              }
            }
          })]
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        "data-testid": "writer_search_reference_preview_summary_btn",
        className: eV["search-reference-preview-summary"],
        onClick: () => l == null ? undefined : l(r),
        children: s == null ? undefined : s.summary
      })]
    });
  };
  let eK = e => {
    let {
      mode: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      },
      children: [,,,].fill(0).map((e, n) => reactJsxRuntimeCoreReexport.jsxs("div", {
        className: _(eV["search-reference-preview-skeleton"], {
          [eV["search-reference-preview-skeleton--compact"]]: t === "compact"
        }),
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: eV["search-reference-preview-skeleton-header"],
          children: [reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Avatar, {
            className: eV["search-reference-preview-skeleton-header-icon"]
          }), reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Title, {
            className: eV["search-reference-preview-skeleton-header-title"],
            style: {
              borderRadius: 8,
              width: "100%",
              maxWidth: 262,
              height: 20
            }
          })]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: eV["search-reference-preview-skeleton-summary"]
        })]
      }, n))
    });
  };
  let eQ = e => {
    let {
      references: t,
      isLoading: n = false,
      emptyTip: r,
      enableDrop: i = true,
      mode: l,
      style: o,
      onAddReference: s
    } = e;
    let {
      dropReference: c,
      revertReferenceSelectState: d,
      onReferenceSelected: u,
      onReferenceSearchSelected: f
    } = e$();
    let p = (e, t) => e.type === skillActionStatusEnums.LinkSourceType.WEBLink ? reactJsxRuntimeCoreReexport.jsx(eq, {
      reference: e,
      onDropReference: i ? c : undefined,
      onRevertReferenceSelectStatus: d,
      onReferenceAction: i ? u : f
    }, `${e.id}${t}`) : e.type === skillActionStatusEnums.LinkSourceType.ManualLink ? reactJsxRuntimeCoreReexport.jsx(eG, {
      reference: e,
      onDropReference: i ? c : undefined,
      onRevertReferenceSelectStatus: d,
      onAddReference: s
    }, `${e.id}${t}`) : reactJsxRuntimeCoreReexport.jsx(eJ, {
      reference: e,
      onDropReference: i ? c : undefined,
      onRevertReferenceSelectStatus: d
    }, `${e.id}${t}`);
    return reactJsxRuntimeCoreReexport.jsx(scrollViewComponent.ScrollView, {
      autoShowScrollbar: true,
      style: o,
      children: reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton, {
        loading: n,
        placeholder: reactJsxRuntimeCoreReexport.jsx(eK, {
          mode: l
        }),
        children: (t == null ? undefined : t.length) ? reactJsxRuntimeCoreReexport.jsx("div", {
          className: _(eV["search-reference-result-scroll-view"], eV[`search-reference-result-scroll-view--${l}`]),
          children: t.map((e, t) => p(e, t))
        }) : !n && reactJsxRuntimeCoreReexport.jsx("div", {
          style: {
            width: "100%",
            height: o == null ? undefined : o.height,
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
          },
          children: r
        })
      })
    });
  };
  var searchIconComponent_2 = require("search-icon-component_2") /*id: 773676*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var alertCircleRtlIcon = require("alert-circle-rtl-icon") /*id: 397758*/;
  let e2 = e => {
    let {
      tip: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "empty-status-NZuYmS",
      children: [reactJsxRuntimeCoreReexport.jsx(alertCircleRtlIcon.AlertCircleIcon, {
        className: "empty-status-icon-pvxpLE"
      }), reactJsxRuntimeCoreReexport.jsx("p", {
        children: t
      })]
    });
  };
  let e6 = () => {
    let e = eU();
    return reactJsxRuntimeCoreReexport.jsx(e2, {
      tip: e("reference_modal_search_result_empty")
    });
  };
  let e4 = () => {
    let e = eU();
    return reactJsxRuntimeCoreReexport.jsx(e2, {
      tip: e("reference_modal_empty_placeholder")
    });
  };
  var e3 = {
    "search-reference-input-container": "search-reference-input-container-uArfhA",
    "search-reference-input": "search-reference-input-Z09HA4",
    "search-reference-input-search-icon": "search-reference-input-search-icon-WlcfSN",
    "search-reference-input-search-icon--active": "search-reference-input-search-icon--active-RYVq3S",
    "search-reference-input-textarea": "search-reference-input-textarea-s9BMKx",
    "search-reference-input-clear": "search-reference-input-clear-tahSDT",
    "search-reference-result": "search-reference-result-_TSedp"
  };
  let e5 = () => {
    let {
      searchKeyword: e,
      setSearchKeyword: t,
      searchedReferences: n,
      isSearchingReferences: r,
      setSearchIsFocus: l,
      onReferenceSearch: o
    } = e$();
    let a = reactCoreLibraryReexport.useRef(null);
    let [s, c] = reactCoreLibraryReexport.useState(false);
    let d = reactCoreLibraryReexport.useRef(null);
    let u = reactCoreLibraryReexport.useRef(null);
    let {
      active: f,
      inputProps: p
    } = ej();
    reactCoreLibraryReexport.useEffect(() => {
      c(!!e);
    }, [e]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!s) {
        return;
      }
      let e = e => {
        let t = e.target;
        while (t) {
          if (t === d.current || t === u.current) {
            return;
          }
          t = t.parentElement;
        }
        c(false);
      };
      document.addEventListener("click", e);
      return () => {
        document.removeEventListener("click", e);
      };
    }, [s, e, c]);
    let v = a.current && a.current.contains(document.activeElement);
    reactCoreLibraryReexport.useEffect(() => {
      if (v || s) {
        l(true);
      } else {
        l(false);
      }
    }, [v, s]);
    let h = eU();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: _(e3["search-reference-input-container"], "z-10"),
      ref: u,
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: e3["search-reference-input"],
        children: [reactJsxRuntimeCoreReexport.jsx(searchIconComponent_2.SearchIcon, {
          className: _(e3["search-reference-input-search-icon"], {
            [e3["search-reference-input-search-icon--active"]]: f
          })
        }), reactJsxRuntimeCoreReexport.jsx(smartTextareaWithFormFieldWrapper.SmartTextArea, {
          "data-testid": "search_reference_input_textarea_btn",
          ...p,
          className: e3["search-reference-input-textarea"],
          rows: 1,
          autosize: false,
          value: e,
          onChange: e => {
            t(e);
            if (o != null) {
              o();
            }
          },
          placeholder: h("reference_modal_search_input_placeholder"),
          ref: a,
          autoFocus: false
        }), !!e.length && reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
          className: e3["search-reference-input-clear"],
          onClick: () => {
            t("");
            if (o != null) {
              o();
            }
          }
        })]
      }), s && reactJsxRuntimeCoreReexport.jsx("div", {
        ref: d,
        className: e3["search-reference-result"],
        children: reactJsxRuntimeCoreReexport.jsx(eQ, {
          enableDrop: false,
          references: n,
          isLoading: r,
          emptyTip: reactJsxRuntimeCoreReexport.jsx(e6, {}),
          mode: "compact",
          style: {
            height: 414
          }
        })
      })]
    });
  };
  var uuidV1Generator = require("uuid-v1-generator") /*id: 278878*/;
  var samanthaDropdownWrapper = require("samantha-dropdown-wrapper") /*id: 686264*/;
  var skillPinIcon_1 = require("skill-pin-icon_1") /*id: 646133*/;
  var rtlLinkIcon = require("rtl-link-icon") /*id: 70222*/;
  var tt = "icon-MRPPnj";
  let tn = e => {
    let {
      onUpload: t,
      onAddReference: n
    } = e;
    let r = eU();
    let {
      currentLocalReferences: l,
      setCurrentLocalReferences: o,
      onReferenceAddFileClick: s,
      onReferenceAddLinkClick: c
    } = e$();
    let [d, u] = reactCoreLibraryReexport.useState(false);
    let f = reactCoreLibraryReexport.useRef(null);
    let p = reactCoreLibraryReexport.useRef(null);
    let v = e => {
      let t = "dataTransfer" in e ? e.dataTransfer.files : e.target.files;
      if (t && t.length !== 0) {
        if (t.length > 5) {
          samanthaToastFactory.defaultToast.error({
            content: r("reference_modal_add_files_limit_toast"),
            showClose: false,
            theme: "light",
            zIndex: 10800
          });
          return;
        }
        [...t].forEach(e => h(e));
        u(false);
      }
    };
    let h = e => {
      let r = uuidV1Generator.generateUuid();
      let i = e == null ? undefined : e.name.replace(/\.[^.]+$/, "");
      let l = (e == null ? undefined : e.type.includes("pdf")) ? "pdf" : "word";
      let s = {
        type: skillActionStatusEnums.LinkSourceType.ManualFile,
        status: N.Uploading,
        id: r,
        percent: 0,
        manual_file: {
          title: i,
          file_type: l
        }
      };
      o(e => [s, ...e]);
      let c = t == null ? undefined : t(e);
      if (c != null) {
        c.subscribe({
          next: e => {
            let {
              status: t,
              percent: s,
              uri: c
            } = e;
            if (t === "progress") {
              o(immerCoreImplementation.produce(e => {
                let t = e.find(e => e.id === r);
                if (t && "percent" in t) {
                  t.percent = s;
                }
              }));
            } else if (t === "done") {
              let e = {
                type: skillActionStatusEnums.LinkSourceType.ManualFile,
                is_selected: true,
                id: r,
                status: skillActionStatusEnums.ProcessingStatus.PROCESSING,
                manual_file: {
                  title: i,
                  file_type: l,
                  uri: c ?? "",
                  content: ""
                }
              };
              if (n != null) {
                n({
                  uuid: r,
                  uri: c ?? ""
                });
              }
              o(immerCoreImplementation.produce(t => {
                let n = t.findIndex(e => e.id === r);
                if (n !== -1) {
                  t.splice(n, 1, e);
                }
              }));
            }
          }
        });
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown, {
        render: reactJsxRuntimeCoreReexport.jsxs(samanthaDropdownWrapper.SamanthaDropdown.Menu, {
          children: [reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown.Item, {
            "data-testid": "reference-add-file-btn",
            icon: reactJsxRuntimeCoreReexport.jsx(skillPinIcon_1.SkillPinIcon, {
              className: tt
            }),
            active: true,
            className: "upload-y3dS9y",
            onClick: e => {
              if (s != null) {
                s();
              }
              if (p.current) {
                p.current.value = "";
                p.current.click();
              }
              if (e != null) {
                e.stopPropagation();
              }
            },
            children: r("reference_modal_add_type_localFile")
          }), reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown.Item, {
            "data-testid": "reference-add-link-btn",
            icon: reactJsxRuntimeCoreReexport.jsx(rtlLinkIcon.LinkIcon, {
              className: tt
            }),
            active: true,
            className: "add-link-DksL0F",
            onClick: () => {
              if (c != null) {
                c();
              }
              if (l.some(e => "status" in e && e.status === N.Uploading && e.type === skillActionStatusEnums.LinkSourceType.ManualLink)) {
                samanthaToastFactory.defaultToast.warning({
                  content: r("reference_modal_add_webpage_notSubmitted_toast"),
                  showClose: false,
                  theme: "light",
                  zIndex: 10800
                });
                let e = document.getElementById("link-input");
                if (e) {
                  e.focus();
                }
                u(false);
                return;
              }
              let e = uuidV1Generator.generateUuid();
              o([{
                type: skillActionStatusEnums.LinkSourceType.ManualLink,
                id: e,
                status: N.Uploading,
                manual_link: {
                  title: ""
                }
              }, ...l]);
              u(false);
            },
            children: r("reference_modal_add_type_webpage")
          })]
        }),
        position: "bottomRight",
        trigger: "custom",
        zIndex: 10700,
        clickToHide: true,
        clickTriggerToHide: true,
        onVisibleChange: e => {
          u(e);
        },
        getPopupContainer: () => {
          return f.current ?? document.body;
        },
        visible: d,
        children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          "data-testid": "reference-add-file-or-link-btn",
          className: "btn-M8E_bJ",
          iconPosition: "left",
          size: "medium",
          icon: reactJsxRuntimeCoreReexport.jsx(plusIcon.PlusIcon, {
            className: _(tt, "small-eLLKR7")
          }),
          type: "quartary",
          ref: f,
          onClick: () => {
            u(true);
          },
          children: r("reference_modal_add_button_title")
        })
      }), reactJsxRuntimeCoreReexport.jsx("input", {
        className: "input-upload-W_V4pX",
        type: "file",
        onChange: e => v(e),
        ref: p,
        accept: ".pdf, .docx, .doc",
        multiple: true
      })]
    });
  };
  let tr = () => {
    let {
      fullReferences: e,
      setShowMode: t,
      showMode: n,
      onCancel: r,
      onConfirm: i,
      selectedReferences: l,
      disableAddBtn: o,
      currentLocalReferences: a,
      onReferenceModalConfirm: s,
      onReferenceModalClose: c,
      onReferenceShowAll: d
    } = e$();
    let u = eU();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: eV["reference-modal-footer"],
      children: [{
        default: reactJsxRuntimeCoreReexport.jsx("span", {
          className: eV["reference-modal-footer-to-selected"],
          onClick: () => {
            t("full");
            if (d != null) {
              d();
            }
          },
          children: u("reference_modal_view_all_reference").replace("%d", String(e.length + a.length))
        }),
        full: reactJsxRuntimeCoreReexport.jsx("span", {
          className: eV["reference-modal-footer-selected"],
          children: u("reference_modal_selected_item").replace("%d", String(l.length))
        })
      }[n], reactJsxRuntimeCoreReexport.jsxs("div", {
        className: eV["reference-modal-footer-buttons"],
        children: [reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          "data-testid": "writer_reference_modal_cancel_btn",
          className: eV["action-btn"],
          onClick: () => {
            r();
            if (c != null) {
              c();
            }
          },
          type: "tertiary",
          autoFocus: false,
          children: u("cancel_button_title")
        }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          "data-testid": "writer_reference_modal_confirm_btn",
          className: eV["action-btn"],
          type: "primary",
          onClick: () => {
            if (!o) {
              i();
              if (s != null) {
                s();
              }
            }
          },
          disabled: o,
          autoFocus: true,
          children: u("confirm_button_title")
        })]
      })]
    });
  };
  let ti = () => {
    let e = eU();
    let {
      showMode: t,
      setShowMode: n
    } = e$();
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: eV["header-container"],
      children: {
        default: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
          children: e("reference_modal_title")
        }),
        full: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx(rtlChevronLeftIcon.ChevronLeftIcon, {
            className: eV["header-container-icon"],
            onClick: () => n("default")
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            children: e("reference_modal_all_reference_title")
          })]
        })
      }[t]
    });
  };
  let tl = function (e) {
    let n = eB(e);
    let {
      visible: r,
      onUpload: l,
      onAddReference: o
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      var t;
      var n;
      if ((t = (n = e.behavior).onReferenceModalShow) !== null && t !== undefined) {
        t.call(n);
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(ez, {
      children: reactJsxRuntimeCoreReexport.jsx(eW.Provider, {
        value: n,
        children: reactJsxRuntimeCoreReexport.jsxs(modalDialogComponent.Modal, {
          "data-testid": "reference_modal",
          closable: false,
          width: "80%",
          height: 600,
          visible: r,
          closeOnEsc: true,
          maskClosable: true,
          className: eV.container,
          title: reactJsxRuntimeCoreReexport.jsx(ti, {}),
          centered: true,
          footer: reactJsxRuntimeCoreReexport.jsx(tr, {}),
          zIndex: 9990,
          children: [n.showMode === "default" && reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "flex gap-8 w-full",
            children: [reactJsxRuntimeCoreReexport.jsx(e5, {}), !n.searchIsFocus && reactJsxRuntimeCoreReexport.jsx(tn, {
              onUpload: l,
              onAddReference: o
            })]
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            style: {
              marginTop: (n.showMode === "default") * 8
            },
            children: reactJsxRuntimeCoreReexport.jsx(eQ, {
              references: n.currentLocalReferences.concat(n.displayingReferences ?? []),
              isLoading: false,
              emptyTip: reactJsxRuntimeCoreReexport.jsx(e4, {}),
              style: {
                height: n.showMode === "default" ? "410px" : "452px"
              },
              onAddReference: o
            })
          })]
        })
      })
    });
  };
  var to = {
    popoverContainer: "popover-container-OX7ykn",
    container: "container-JHmboQ",
    "url-icons": "url-icons-DP2ozf",
    "update-search-result": "update-search-result-z_LN8a",
    icon: "icon-zp_HC0",
    "refresh-modal": "refresh-modal-PHUAi1",
    "refresh-modal-tip": "refresh-modal-tip-M8s9uv",
    "refresh-modal-btn": "refresh-modal-btn-zwvbPg",
    "search-reference-loading": "search-reference-loading-VRRcsw",
    "search-reference-loading-icon": "search-reference-loading-icon-yeuUSw"
  };
  let ta = function (e) {
    var n;
    let {
      chapter: l,
      onChangeReferences: o,
      chapterChanged: s,
      setChapterChanged: c,
      onUpload: d,
      onAddReference: u,
      onQueryReferenceStatus: f
    } = e;
    let p = W();
    let [v, {
      setFalse: _,
      setTrue: h
    }] = useBooleanHook.useBoolean(false);
    let m = eg();
    let [g, x] = reactCoreLibraryReexport.useState([]);
    let {
      searchReferenceService: b,
      refreshChapterReferenceService: y
    } = e_();
    let {
      editable: w,
      isNarrow: k
    } = H();
    let S = useLatestRef.useLatestRef(o);
    let j = async () => {
      var e;
      var n;
      var i;
      c(false);
      if (o != null) {
        o(skillActionStatusEnums.SearchStatus.WaitingForSearch);
      }
      let s = ((e = l.references) === null || e === undefined ? undefined : e.filter(e => e.type !== skillActionStatusEnums.LinkSourceType.WEBLink && e.is_selected)) ?? [];
      try {
        let e = (await (y == null ? undefined : y(l))) ?? [];
        e.forEach(e => e.is_selected = true);
        if ((n = S.current) !== null && n !== undefined) {
          n.call(S, skillActionStatusEnums.SearchStatus.Searched, [...s, ...e]);
        }
      } catch (e) {
        if ((i = S.current) !== null && i !== undefined) {
          i.call(S, skillActionStatusEnums.SearchStatus.Searched);
        }
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (s && skillActionStatusEnums.SearchStatus.Searched === l.reference_status) {
        j();
      }
    }, [s, l.reference_status]);
    reactCoreLibraryReexport.useEffect(() => {
      if (v) {
        m.onOutlineReferenceClick();
      }
    }, [v]);
    if (l.reference_status && skillActionStatusEnums.SearchStatus.WaitingForSearch !== l.reference_status) {
      return reactJsxRuntimeCoreReexport.jsxs(popoverComponent.PopoverComponent, {
        visible: s && skillActionStatusEnums.SearchStatus.Modified === l.reference_status,
        position: "top",
        content: () => reactJsxRuntimeCoreReexport.jsxs("div", {
          className: to["refresh-modal"],
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: to["refresh-modal-tip"],
            children: p("skill_writing_outline_reference_modified_alert_title")
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: to["refresh-modal-btn"],
            children: [reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
              onClick: () => c(false),
              size: "small",
              type: "tertiary",
              children: p("skill_writing_outline_reference_modified_alert_button_doNoting")
            }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
              size: "small",
              type: "primary",
              onClick: j,
              children: p("skill_writing_outline_reference_modified_alert_button_searchAgain")
            })]
          })]
        }),
        trigger: "custom",
        showArrow: true,
        className: to.popoverContainer,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: to.container,
          "data-testid": "writer_update_search_result_btn",
          onClick: w ? h : emptyExportFunction.emptyFunction,
          children: (l == null ? undefined : (n = l.references) === null || n === undefined ? undefined : n.filter(e => e.is_selected)?.length) || k ? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [!k && reactJsxRuntimeCoreReexport.jsx("span", {
              className: to["url-icons"],
              children: reactJsxRuntimeCoreReexport.jsx(eR, {
                references: l.references ?? []
              })
            }), reactJsxRuntimeCoreReexport.jsx("span", {
              className: to["update-search-result"],
              children: p("skill_writing_outline_reference_modify")
            })]
          }) : reactJsxRuntimeCoreReexport.jsxs("span", {
            className: to["update-search-result"],
            children: [reactJsxRuntimeCoreReexport.jsx(plusIcon.PlusIcon, {
              className: to.icon
            }), p("skill_writing_outline_reference_addNew")]
          })
        }), v && reactJsxRuntimeCoreReexport.jsx(tl, {
          visible: true,
          onCancel: _,
          searchService: b ?? (() => []),
          selectedItems: l.references,
          onConfirm: e => {
            if (o != null) {
              o(skillActionStatusEnums.SearchStatus.Modified, e);
            }
            e.forEach(e => {
              x(immerCoreImplementation.produce(t => {
                let n = g.findIndex(t => t.id === e.id);
                if (n !== -1) {
                  t.splice(n, 1);
                }
              }));
            });
            _();
          },
          onUpload: d,
          loacalReferences: g,
          onAddLocalReference: e => {
            x(t => [e, ...t]);
          },
          behavior: m,
          onAddReference: u,
          onQueryReferenceStatus: f,
          onDeleteLocalReference: e => {
            x(immerCoreImplementation.produce(t => {
              let n = t.findIndex(t => t.id === e.id);
              if (n !== -1) {
                t.splice(n, 1);
              }
            }));
          }
        })]
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: to["search-reference-loading"],
        children: [reactJsxRuntimeCoreReexport.jsx(searchSpinAnimationLazyComponent.SearchSpinAnimationComponent, {
          className: to["search-reference-loading-icon"]
        }), p("skill_writing_outline_reference_searching")]
      });
    }
  };
  var dropdownComponent = require("dropdown-component") /*id: 748649*/;
  var rtlChatCheckIconComponent = require("rtl-chat-check-icon-component") /*id: 690527*/;
  var alignRightIcon = require("align-right-icon") /*id: 893650*/;
  var tu = {
    container: "container-zz9OGm",
    "container-title": "container-title-eWeqFp",
    containerTitle: "container-title-eWeqFp",
    "drop-section": "drop-section-PHI4RS",
    dropSection: "drop-section-PHI4RS",
    "select-group-container": "select-group-container-RgN4mB",
    selectGroupContainer: "select-group-container-RgN4mB",
    "select-group-container-item": "select-group-container-item-nKIEGZ",
    selectGroupContainerItem: "select-group-container-item-nKIEGZ",
    "title-with-icon": "title-with-icon-AjXq4B",
    titleWithIcon: "title-with-icon-AjXq4B",
    "checked-icon": "checked-icon-RrY9dh",
    checkedIcon: "checked-icon-RrY9dh",
    "select-group-container-item--active": "select-group-container-item--active-mc5ZWU",
    selectGroupContainerItemActive: "select-group-container-item--active-mc5ZWU",
    "checked-icon--active": "checked-icon--active-dJLymU",
    checkedIconActive: "checked-icon--active-dJLymU"
  };
  let tf = function (e) {
    let {
      options: t,
      value: n,
      onChange: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: tu["select-group-container"],
      children: t.map((e, t) => reactJsxRuntimeCoreReexport.jsxs("div", {
        className: _(tu["select-group-container-item"], {
          [tu["select-group-container-item--active"]]: e.value === n
        }),
        onClick: () => r == null ? undefined : r(e.value),
        children: [reactJsxRuntimeCoreReexport.jsxs("span", {
          className: tu["title-with-icon"],
          children: [reactJsxRuntimeCoreReexport.jsx("span", {
            children: e.icon
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            children: e.label
          })]
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: tu["checked-icon"],
          children: e.value === n && reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {})
        })]
      }, t))
    });
  };
  let tp = function (e) {
    let {
      countStyleOptions: t = [],
      countStyle: n,
      onChangeCountStyle: r,
      onDelete: l
    } = e;
    let o = W();
    let a = eg();
    let s = reactCoreLibraryReexport.useMemo(() => {
      return t.find(e => e.is_default)?.value;
    }, [t]);
    let [c, d] = useControlledStateHook.useControlledState({
      defaultValue: s,
      value: n,
      onChange: r
    });
    let u = reactCoreLibraryReexport.useMemo(() => t.map(e => ({
      icon: Z[e.value],
      value: e.value,
      label: e.show_name
    })), [t]);
    let {
      editable: f
    } = H();
    let p = X(l);
    if (u.length) {
      return reactJsxRuntimeCoreReexport.jsx(dropdownComponent.Dropdown, {
        trigger: "click",
        render: f ? reactJsxRuntimeCoreReexport.jsxs(dropdownComponent.Dropdown.Menu, {
          className: tu.container,
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: tu["container-title"],
            children: reactJsxRuntimeCoreReexport.jsx("span", {
              children: o("skill_writing_outline_paragraph_setting")
            })
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: tu["size-select-section"],
            children: reactJsxRuntimeCoreReexport.jsx(tf, {
              value: c,
              options: u,
              onChange: e => {
                d(e);
                a.onChangeCountStyle();
              }
            })
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: tu["drop-section"],
            onClick: f ? p : undefined,
            children: [reactJsxRuntimeCoreReexport.jsx(calculatorIconComponent.CalculatorIcon, {}), reactJsxRuntimeCoreReexport.jsx("span", {
              children: o("professional_writing_del_chapter")
            })]
          })]
        }) : null,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: Q["icon-btn"],
          children: reactJsxRuntimeCoreReexport.jsx(alignRightIcon.AlignRightIcon, {})
        })
      });
    } else {
      return null;
    }
  };
  var markdownParserSerializer = require("markdown-parser-serializer") /*id: 512638*/;
  function t_(e, t, n) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let th = e => markdownParserSerializer.isNodeType(e, "blockquote", "code", "heading", "paragraph", "table", "math", "list", "listItem", "thematicBreak");
  function tm(e, t = false) {
    if (t) {
      return markdownParserSerializer.serializeMarkdown(e);
    }
    if (e.children) {
      let {
        children: n
      } = e;
      let r = "";
      for (let e = 0, i = n.length; e < i; e++) {
        let l = n[e];
        let o = tm(l, t);
        let a = th(l) ? "\n" : "";
        if (e !== i - 1) {
          r += o + a;
        } else {
          r += o;
        }
      }
      return r;
    }
    if (typeof e.value == "string") {
      return e.value;
    } else {
      return "";
    }
  }
  let tg = ["paragraph", "list"];
  let tx = (e, t) => ({
    type: "heading",
    depth: t,
    children: [{
      type: "text",
      value: e
    }]
  });
  let tb = e => ({
    type: "paragraph",
    children: [{
      type: "text",
      value: e
    }]
  });
  class ty {
    parse(e, t) {
      let {
        keepInlineMarks: n
      } = this;
      let r = markdownParserSerializer.parseMarkdown(e);
      let i = {
        genre: this.genre,
        content: {},
        markdown_content: ""
      };
      let l = 0;
      let o = {
        title: "",
        _key: "",
        level: -1,
        description: "",
        count_style: undefined,
        references: [],
        sub_paragraph_content: [],
        reference_status: undefined
      };
      (function (e, t) {
        let {
          keepInlineMarks: n = false,
          onNodeParse: r
        } = t;
        let i = false;
        let l = false;
        let o = 0;
        let a = {
          level: -1,
          value: undefined,
          preNode: undefined
        };
        for (let t = 0, d = e.children.length; t < d; t++) {
          let d = e.children[t];
          if (d.type === "heading" && (d == null ? undefined : d.depth) <= 4) {
            if ((d == null ? undefined : d.depth) === 2 && o === 1) {
              l = true;
            }
            let e = l ? (d == null ? undefined : d.depth) - 1 : d == null ? undefined : d.depth;
            let t = !i && (d == null ? undefined : d.depth) === 1;
            let u = {
              level: t ? e - 1 : e
            };
            u.value = r({
              type: i ? "chapter" : "heading",
              level: e,
              text: tm(d, n)
            });
            if ((d == null ? undefined : d.depth) === 1) {
              i = true;
              o++;
            }
            if (u.value) {
              var s;
              var c;
              while (a.level !== -1 && a.level >= u.level) {
                a = a.preNode;
              }
              if ((c = a.value) !== null && c !== undefined && (s = c.sub_paragraph_content) !== null && s !== undefined) {
                s.push(u.value);
              }
              u.preNode = a;
              a = u;
            }
          } else if (tg.includes(d.type)) {
            r({
              type: "prompt",
              text: tm(d, n)
            }, a);
          }
        }
      })(r, {
        keepInlineMarks: n,
        onNodeParse: (e, n) => {
          let {
            type: r,
            text: s,
            level: c
          } = e;
          if (s) {
            if (r === "heading") {
              i.content = {
                title: s,
                sub_paragraph_content: []
              };
              return i.content;
            }
            if (r === "chapter") {
              var u;
              var f;
              return {
                ...deepCloneWrapper_1.deepClone(o),
                title: s,
                level: c,
                description: "",
                _key: t ? undefined : b(),
                count_style: this.isHeritage ? (f = this.heritageOutlineOption) === null || f === undefined ? undefined : (u = f.style_list) === null || u === undefined ? undefined : u.at(l++)?.count_style : undefined,
                reference_status: this.isHeritage ? skillActionStatusEnums.SearchStatus.Searched : undefined
              };
            }
            if (r === "prompt" && (n == null ? undefined : n.value)) {
              n.value.description += `${n.value.description ? "\n" : ""}${s}`;
              return n.value;
            }
          }
        }
      });
      return i;
    }
    dispose(e, t) {
      let a = markdownParserSerializer.parseMarkdown("");
      if (e.content?.title) {
        a.children.push(tx(e.content?.title, 1));
      }
      if (e.content?.sub_paragraph_content) {
        (function e(t, n, r) {
          if (t != null) {
            t.forEach(t => {
              if (t.title) {
                r.children.push(tx(t.title, n));
              }
              if (t.description) {
                r.children.push(tb(t.description));
              }
              if (t.sub_paragraph_content && !isEmptyUtil.isEmpty(t.sub_paragraph_content)) {
                e(t.sub_paragraph_content, n + 1, r);
              }
            });
          }
        })(e.content?.sub_paragraph_content, t ? 1 : 2, a);
      }
      return markdownParserSerializer.serializeMarkdown(a);
    }
    constructor({
      genre: e = "",
      keepInlineMarks: t = false,
      isHeritage: n = false,
      heritageOutlineOption: r
    } = {}) {
      t_(this, "keepInlineMarks", undefined);
      t_(this, "genre", undefined);
      t_(this, "isHeritage", undefined);
      t_(this, "heritageOutlineOption", undefined);
      this.genre = e;
      this.keepInlineMarks = t;
      this.isHeritage = n;
      this.heritageOutlineOption = r;
    }
  }
  var tw = {
    "icon-btn": "icon-btn-W1FFoQ",
    title: "title-gBaI4N",
    "sub-drag-icon": "sub-drag-icon-pmF09O",
    "divider-container": "divider-container-A2IgSA",
    divider: "divider-Lu7jQ8",
    "drag-container": "drag-container-XaOEVI",
    dragging: "dragging-CC0Fby"
  };
  let tk = sortableListComponents.sortableHandle(e => {
    let {
      hasChildren: t,
      isClose: n = false,
      changOpen: r
    } = e;
    let l = reactCoreLibraryReexport.useMemo(() => t ? rtlArrowLeftIcon_1.RtlArrowLeftIcon : en, [t, n]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      onMouseDown: () => {
        if (t) {
          r();
        }
      },
      children: reactJsxRuntimeCoreReexport.jsx(l, {
        className: _(Q["drag-icon"], tw["sub-drag-icon"])
      })
    });
  });
  let tS = e => {
    let {
      subParagraph: n,
      onChange: r,
      setSubActive: l,
      isDragging: o = false,
      children: a
    } = e;
    let s = W();
    let {
      editable: c,
      simplify: d
    } = H();
    let {
      active: u,
      inputProps: f
    } = O();
    let [p, v] = reactCoreLibraryReexport.useState(false);
    let h = isNumberUtil.isNumber(n == null ? undefined : n.level) && (n == null ? undefined : n.level) < 3;
    let m = !!(n == null ? undefined : n.sub_paragraph_content) && !!((n == null ? undefined : n.sub_paragraph_content?.length) > 0);
    reactCoreLibraryReexport.useEffect(() => {
      l(u);
    }, [u, l]);
    let g = !c;
    let x = X(() => {
      r();
    });
    let b = U(n, u, () => r());
    let y = p || o;
    q(o, () => {
      v(true);
    }, 300);
    let w = n.level === 2;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: _(tw["divider-container"], {
        [tw["drag-container"]]: !w,
        [tw.dragging]: o
      }),
      children: [m && !y && reactJsxRuntimeCoreReexport.jsx(semiDividerComponent.Divider, {
        className: tw.divider,
        layout: "vertical",
        dashed: true
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: _(tw.title, Q.title, "outline-title", {
          [Q.active]: u,
          [Q.closeIcon]: m && y
        }),
        children: [A(n) ? null : reactJsxRuntimeCoreReexport.jsx(tk, {
          hasChildren: m,
          isClose: p,
          changOpen: () => {
            v(!p);
          }
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: _(Q["input-container"], "flex flex-col w-full"),
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "flex items-center",
            children: [reactJsxRuntimeCoreReexport.jsx(smartTextareaWithFormFieldWrapper.SmartTextArea, {
              ref: b,
              className: _(Q["input-title"], "leading-22 text-14"),
              disabled: g,
              value: n.title,
              ...f,
              onChange: e => {
                r({
                  ...n,
                  title: e
                });
              },
              hideScrollBar: true,
              placeholder: g ? "" : s("professional_writing_subtitle")
            }), !d && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
              children: [reactJsxRuntimeCoreReexport.jsx("div", {
                className: _(Q["icon-btn"], tw["icon-btn"], "self-start ml-12"),
                onClick: g ? undefined : x,
                children: reactJsxRuntimeCoreReexport.jsx(calculatorIconComponent.CalculatorIcon, {})
              }), h ? reactJsxRuntimeCoreReexport.jsx(reactTooltipComponent.TooltipComponent, {
                content: s("professional_writing_add_title"),
                position: "top",
                children: reactJsxRuntimeCoreReexport.jsx("div", {
                  className: _(Q["icon-btn"], tw["icon-btn"], "self-start ml-12"),
                  onClick: g ? undefined : () => {
                    var e;
                    v(false);
                    if ((e = n.sub_paragraph_content) === null || e === undefined) {
                      n.sub_paragraph_content = [];
                    }
                    n.sub_paragraph_content.push(E(n.level));
                    r(n);
                  },
                  children: reactJsxRuntimeCoreReexport.jsx(plusIcon.PlusIcon, {})
                })
              }) : null]
            })]
          }), reactJsxRuntimeCoreReexport.jsx(smartTextareaWithFormFieldWrapper.SmartTextArea, {
            className: _(Q["input-prompt"], {
              [Q.zero]: !n.description && !u
            }),
            disabled: g,
            value: n.description,
            ...f,
            onChange: e => {
              r({
                ...n,
                description: e
              });
            },
            hideScrollBar: true,
            placeholder: g ? "" : s("professional_writing_subtitle_theme")
          })]
        })]
      }), a ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: _(Q["collapse-container"], {
          [Q["collapse-container__close"]]: y
        }),
        children: a
      }) : null]
    });
  };
  var tj = {
    active: "active-ETIsV_",
    hoverable: "hoverable-WawHcg",
    "icon-btn": "icon-btn-xjJcDX",
    iconBtn: "icon-btn-xjJcDX",
    container: "container-nXaxsl",
    heading: "heading-DmZd4z",
    chapter: "chapter-znup8k",
    "chapter-header": "chapter-header-g7dDnN",
    chapterHeader: "chapter-header-g7dDnN",
    "input-container": "input-container-qKYYmJ",
    inputContainer: "input-container-qKYYmJ",
    "input-title": "input-title-u0_EMr",
    inputTitle: "input-title-u0_EMr",
    "input-prompt": "input-prompt-kmysX0",
    inputPrompt: "input-prompt-kmysX0",
    "moving-title": "moving-title-APhglc",
    movingTitle: "moving-title-APhglc",
    title: "title-WuGwgk",
    closeIcon: "closeIcon-ANtyd9",
    "drag-icon": "drag-icon-VGxBvr",
    dragIcon: "drag-icon-VGxBvr",
    "collapse-container": "collapse-container-AnG2_1",
    collapseContainer: "collapse-container-AnG2_1",
    "collapse-container__close": "collapse-container__close-NIx89v",
    collapseContainerClose: "collapse-container__close-NIx89v",
    zero: "zero-YLc1Pf",
    "input-chapter": "input-chapter-WQFFzA",
    inputChapter: "input-chapter-WQFFzA",
    actions: "actions-V0kwBQ",
    "actions-reference": "actions-reference-fB5x2P",
    actionsReference: "actions-reference-fB5x2P",
    "actions-reference--narrow": "actions-reference--narrow-PKdTAe",
    actionsReferenceNarrow: "actions-reference--narrow-PKdTAe",
    "chapter-container": "chapter-container-YSxFSA",
    chapterContainer: "chapter-container-YSxFSA",
    "chapter-drag-icon": "chapter-drag-icon-sQLZ9k",
    chapterDragIcon: "chapter-drag-icon-sQLZ9k",
    dragging: "dragging-_MwJ6i"
  };
  let tR = sortableListComponents.sortableHandle(e => {
    let {
      hasChildren: t,
      isClose: n = false,
      changOpen: r
    } = e;
    let l = reactCoreLibraryReexport.useMemo(() => t ? rtlArrowLeftIcon_1.RtlArrowLeftIcon : en, [t, n]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      onMouseDown: () => {
        if (t) {
          r();
        }
      },
      children: reactJsxRuntimeCoreReexport.jsx(l, {
        className: _(Q["drag-icon"], tj["chapter-drag-icon"])
      })
    });
  });
  let tC = sortableListComponents.sortableElement(e => reactJsxRuntimeCoreReexport.jsx(tS, {
    ...e
  }));
  let tN = sortableListComponents.sortableContainer(e => {
    let {
      subs: t,
      changeSubChapter: n,
      setSubActive: r,
      changeChapter: i,
      moveIndex: l,
      chapterKeys: o = []
    } = e;
    let {
      editable: a
    } = H();
    return reactJsxRuntimeCoreReexport.jsx("div", {
      children: t.map((e, t) => {
        return reactJsxRuntimeCoreReexport.jsx(tC, {
          disabled: !a,
          index: t,
          subParagraph: e,
          onChange: e => n(e, t),
          isDragging: l === t,
          setSubActive: r,
          children: (e == null ? undefined : e.sub_paragraph_content?.length) ? reactJsxRuntimeCoreReexport.jsx(tT, {
            chapterKeys: [...o, e == null ? undefined : e._key],
            paragraph: e.sub_paragraph_content,
            changeChapter: i,
            setSubActive: r
          }) : null
        }, (e == null ? undefined : e._key) || t);
      })
    });
  });
  let tT = reactCoreLibraryReexport.memo(e => {
    let {
      paragraph: t = [],
      setSubActive: n,
      changeChapter: r,
      chapterKeys: l = []
    } = e;
    let {
      handleDragStart: o,
      handleDragEnd: a
    } = z();
    let [s, c] = reactCoreLibraryReexport.useState(-1);
    let d = reactCoreLibraryReexport.useRef(null);
    let p = e => {
      let {
        oldIndex: n,
        newIndex: i
      } = e;
      a();
      if (n === i) {
        return;
      }
      let o = t[n];
      t[n] = t[i];
      t[i] = o;
      r(t, l);
    };
    if (t.length) {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: tj.titles,
        ref: d,
        children: reactJsxRuntimeCoreReexport.jsx(tN, {
          chapterKeys: l,
          subs: t,
          changeSubChapter: (e, n) => {
            if (!isNullishCheck.isNil(n)) {
              if (n < t.length) {
                if (e) {
                  t[n] = e;
                } else {
                  arrayPickHelper.pickArrayElements(t, [n]);
                }
              }
              if ((t == null ? undefined : t.length) === n && e) {
                t.push(e);
              }
              r(t, l);
            }
          },
          onSortEnd: e => {
            y(d.current, true);
            c(-1);
            p(e);
          },
          onSortStart: o,
          useDragHandle: true,
          updateBeforeSortStart: e => {
            let {
              index: t
            } = e;
            y(d.current);
            c(t);
          },
          moveIndex: s,
          helperClass: Q["moving-title"],
          lockAxis: "y",
          lockToContainerEdges: true,
          lockOffset: "10%",
          setSubActive: n,
          changeChapter: r
        })
      });
    } else {
      return null;
    }
  });
  let tI = e => {
    let {
      className: r,
      style: o,
      onChange: s,
      chapter: c,
      isDragging: d = false,
      paragraphCountOptions: u,
      showOutlineOptions: f,
      showSubTitle: p,
      onUpload: v,
      onAddReference: h,
      onQueryReferenceStatus: m
    } = e;
    let g = W();
    let {
      editable: x,
      isNarrow: b,
      simplify: y
    } = H();
    let w = !x;
    let {
      active: k,
      inputProps: S
    } = O();
    let [j, R] = reactCoreLibraryReexport.useState(false);
    let C = eg();
    let N = k || j;
    let [I, Z] = reactCoreLibraryReexport.useState(false);
    let [P, F] = G(() => {
      var e;
      return {
        referenceStatus: c.reference_status,
        chapterSnapshot: (c.title || "") + c.description,
        subChapterSnapshot: new Set((e = c.sub_paragraph_content) === null || e === undefined ? undefined : e.map(e => (e.title || "") + e.description || "").filter(Boolean))
      };
    }, N, (e, t) => !!e && skillActionStatusEnums.SearchStatus.WaitingForSearch !== c.reference_status && (C.onOutlineTextEdit(), t.chapterSnapshot !== e.chapterSnapshot || t.subChapterSnapshot.size > 0 && Array.from(t.subChapterSnapshot).some(t => !e.subChapterSnapshot.has(t))));
    let M = !!(c == null ? undefined : c.sub_paragraph_content?.length);
    let L = () => {
      s();
    };
    let B = X(() => {
      s();
    });
    let $ = U(c, k, L);
    let D = reactCoreLibraryReexport.useCallback((e, t) => {
      if (isEmptyUtil.isEmpty(t)) {
        c.sub_paragraph_content = e;
      } else {
        let r = c;
        while (!isEmptyUtil.isEmpty(t)) {
          var n;
          let e = t == null ? undefined : t.shift();
          r = r == null ? undefined : (n = r.sub_paragraph_content) === null || n === undefined ? undefined : n.find(t => t._key === e);
        }
        if (r) {
          r.sub_paragraph_content = e;
        }
      }
      s(c);
    }, [c]);
    let z = I || d;
    q(d, () => {
      Z(true);
    }, 300);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-testid": "writer_outline_chapter",
      style: o,
      className: _(Q.chapter, tj["chapter-container"], Q.container, "outline-chapter", {
        [Q.active]: k,
        [Q.hoverable]: !M,
        [tj.dragging]: d
      }, r),
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: _(Q["chapter-header"], {
          [Q.closeIcon]: M && z
        }),
        children: [A(c) ? null : reactJsxRuntimeCoreReexport.jsx(tR, {
          hasChildren: M,
          isClose: I,
          changOpen: () => {
            if (!w) {
              Z(!I);
            }
          }
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: _(Q["input-container"], "flex flex-col w-full"),
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "flex items-center",
            children: [reactJsxRuntimeCoreReexport.jsx(smartTextareaWithFormFieldWrapper.SmartTextArea, {
              ref: $,
              className: _(tj["input-chapter"], Q["input-title"], "text-14 leading-22"),
              disabled: w,
              value: c == null ? undefined : c.title,
              ...S,
              onChange: e => {
                s({
                  ...c,
                  title: e
                });
              },
              hideScrollBar: true,
              placeholder: w ? "" : g("professional_writing_chapter_title")
            }), !y && reactJsxRuntimeCoreReexport.jsxs("div", {
              className: tj.actions,
              children: [v && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
                children: [reactJsxRuntimeCoreReexport.jsx("div", {
                  className: _(tj["actions-reference"], {
                    [tj["actions-reference--narrow"]]: b
                  }),
                  children: reactJsxRuntimeCoreReexport.jsx(ta, {
                    chapter: c,
                    onChangeReferences: (e, t) => {
                      c.reference_status = e;
                      c.references = t ?? c.references;
                      s(c);
                    },
                    chapterChanged: P,
                    setChapterChanged: F,
                    onUpload: v,
                    onAddReference: h,
                    onQueryReferenceStatus: m
                  })
                }), reactJsxRuntimeCoreReexport.jsx(semiDividerComponent.Divider, {
                  layout: "vertical",
                  style: {
                    height: 12,
                    marginLeft: 8
                  }
                })]
              }), f ? reactJsxRuntimeCoreReexport.jsx(tp, {
                countStyle: c.count_style,
                onChangeCountStyle: e => {
                  c.count_style = e;
                  s(c);
                },
                countStyleOptions: u,
                onDelete: L
              }) : reactJsxRuntimeCoreReexport.jsx("div", {
                className: _(Q["icon-btn"], tj["icon-btn"], "self-start ml-12 invisible"),
                onClick: w ? undefined : B,
                children: reactJsxRuntimeCoreReexport.jsx(calculatorIconComponent.CalculatorIcon, {})
              }), reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
                content: g("professional_writing_add_title"),
                position: "top",
                children: reactJsxRuntimeCoreReexport.jsx("div", {
                  className: Q["icon-btn"],
                  onClick: w ? undefined : () => {
                    var e;
                    Z(false);
                    if ((e = c.sub_paragraph_content) === null || e === undefined) {
                      c.sub_paragraph_content = [];
                    }
                    c.sub_paragraph_content.push(E(c.level));
                    s(c);
                  },
                  children: reactJsxRuntimeCoreReexport.jsx(plusIcon.PlusIcon, {})
                })
              })]
            })]
          }), p && reactJsxRuntimeCoreReexport.jsx(smartTextareaWithFormFieldWrapper.SmartTextArea, {
            className: _(Q["input-prompt"], {
              [Q.zero]: !c.description && !k
            }),
            disabled: w,
            value: c.description ?? "",
            ...S,
            onChange: e => {
              s({
                ...c,
                description: e
              });
            },
            hideScrollBar: true,
            placeholder: w ? "" : g("professional_writing_subtitle_theme")
          })]
        })]
      }), M ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: _(Q["collapse-container"], {
          [Q["collapse-container__close"]]: z
        }),
        children: reactJsxRuntimeCoreReexport.jsx(tT, {
          paragraph: c.sub_paragraph_content,
          setSubActive: R,
          changeChapter: D
        })
      }) : null]
    });
  };
  var plusCircleIcon_1 = require("plus-circle-icon_1") /*id: 112134*/;
  let tA = e => {
    let {
      onAdd: t
    } = e;
    let n = W();
    let {
      editable: r
    } = H();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "add-chapter-JA1OFV",
      onClick: r ? t : undefined,
      "data-testid": "outline_add_chapter",
      children: [reactJsxRuntimeCoreReexport.jsx(plusCircleIcon_1.PlusCircleIcon, {
        className: "add-icon-FXJxN9"
      }), reactJsxRuntimeCoreReexport.jsx("span", {
        children: n("professional_writing_add_chapter")
      })]
    });
  };
  var tZ = {
    "update-tip": "update-tip-k0H7ZJ"
  };
  let tP = sortableListComponents.sortableElement(e => reactJsxRuntimeCoreReexport.jsx(tI, {
    ...e
  }));
  let tF = sortableListComponents.sortableContainer(e => {
    let {
      chapters: t,
      changeChapter: n,
      paragraphCountOptions: r,
      moveIndex: i,
      showOutlineOptions: l,
      showSubTitle: o,
      onUpload: a,
      onAddReference: s,
      onQueryReferenceStatus: c
    } = e;
    let {
      editable: d
    } = H();
    return reactJsxRuntimeCoreReexport.jsx("div", {
      children: t.map((e, t) => reactJsxRuntimeCoreReexport.jsx(tP, {
        disabled: !d,
        index: t,
        chapter: e,
        isDragging: i === t,
        onChange: e => n(e, t),
        paragraphCountOptions: r,
        showOutlineOptions: l,
        showSubTitle: o,
        onUpload: a,
        onAddReference: s,
        onQueryReferenceStatus: c
      }, e._key))
    });
  });
  let tM = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      outline: o,
      onSave: a,
      paragraphCountOptions: s = P,
      updateTime: c,
      showOutlineOptions: d,
      showSubTitle: p,
      onUpload: v,
      onAddReference: g,
      onQueryReferenceStatus: x
    } = e;
    let [b, w] = useControlledStateHook.useControlledState({
      value: o,
      defaultValue: o,
      onChange: a
    });
    let {
      editable: k
    } = H();
    let S = W();
    let j = reactCoreLibraryReexport.useRef(null);
    let {
      handleDragStart: R,
      handleDragEnd: C
    } = z();
    let [N, I] = reactCoreLibraryReexport.useState(-1);
    let A = eg();
    let Z = J(b);
    let F = (e, t) => {
      if (!isNullishCheck.isNil(t)) {
        if (t < Z.length) {
          if (e) {
            Z[t] = {
              ...e
            };
          } else {
            arrayPickHelper.pickArrayElements(Z, [t]);
            A.onDeletePhrase();
          }
        }
        if (Z.length === t && e) {
          Z.push({
            ...e
          });
          A.onAddPhrase();
        }
        w({
          ...b,
          content: {
            ...(b.content || {}),
            sub_paragraph_content: [...Z]
          }
        });
      }
    };
    let M = e => {
      let {
        oldIndex: r,
        newIndex: i
      } = e;
      C();
      if (r === i) {
        return;
      }
      let l = b.content?.sub_paragraph_content ?? [];
      let o = l[r];
      l[r] = l[i];
      l[i] = o;
      w({
        ...b
      });
      A.onOrderPhrase();
    };
    if (isEmptyUtil.isEmpty(b.content)) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: _("writing-outline", {
          "writing-outline-ineditable": !k
        }),
        ref: t,
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          ref: j,
          children: [reactJsxRuntimeCoreReexport.jsx(Y, {
            heading: b.content?.title ?? "",
            onChange: e => {
              w(t => (t == null ? undefined : t.content) ? (t.content.title = e, {
                ...t
              }) : t);
            }
          }), Z.length ? reactJsxRuntimeCoreReexport.jsx(tF, {
            paragraphCountOptions: s,
            chapters: Z,
            changeChapter: F,
            onSortEnd: e => {
              y(j.current, true);
              M(e);
              I(-1);
            },
            onSortStart: () => {
              R();
            },
            updateBeforeSortStart: e => {
              let {
                index: t
              } = e;
              y(j.current);
              I(t);
            },
            moveIndex: N,
            useDragHandle: true,
            helperClass: Q["moving-chapter"],
            lockAxis: "y",
            lockToContainerEdges: true,
            lockOffset: "10%",
            onUpload: v,
            onAddReference: g,
            onQueryReferenceStatus: x,
            showOutlineOptions: d,
            showSubTitle: p
          }) : null, k && reactJsxRuntimeCoreReexport.jsx(tA, {
            onAdd: () => {
              var t;
              F(E(0), ((t = b.content) === null || t === undefined ? undefined : t.sub_paragraph_content?.length) ?? 0);
            }
          }), c && Number.isFinite(Number(c)) ? reactJsxRuntimeCoreReexport.jsxs("p", {
            className: tZ["update-tip"],
            children: [S("skill_writing_last_edited_time"), dateFormatUtils_1.formatRelativeDate(Number(c) * 1000)]
          }) : reactJsxRuntimeCoreReexport.jsx("div", {
            style: {
              height: 12
            }
          })]
        })
      });
    }
  });
  let tO = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      i18nConfig: n,
      editable: r,
      behavior: i,
      services: l,
      simplify: o,
      isNarrow: a,
      ...s
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(B, {
      value: throttledPathFilterStringify.throttledPathStr(n, Object.keys(F)),
      children: reactJsxRuntimeCoreReexport.jsx(eH, {
        i18nConfig: throttledPathFilterStringify.throttledPathStr(n, Object.keys(C)),
        children: reactJsxRuntimeCoreReexport.jsx(em, {
          value: i,
          children: reactJsxRuntimeCoreReexport.jsx(D, {
            value: {
              editable: r,
              simplify: o,
              isNarrow: a
            },
            children: reactJsxRuntimeCoreReexport.jsx(ev, {
              value: l,
              children: reactJsxRuntimeCoreReexport.jsx(tM, {
                ref: t,
                ...s
              })
            })
          })
        })
      })
    });
  });
  let tL = (e, t) => {
    var n;
    var r;
    if ((r = e.content) !== null && r !== undefined && (n = r.sub_paragraph_content) !== null && n !== undefined) {
      n.forEach((e, n) => {
        var i;
        let l = (i = t.content) === null || i === undefined ? undefined : i.sub_paragraph_content?.[n];
        if ((l == null ? undefined : l.reference_status) && l.reference_status !== skillActionStatusEnums.SearchStatus.WaitingForSearch) {
          e.reference_status = l.reference_status;
          e.references = l.references;
        }
      });
    }
    return e;
  };
  let tB = reactCoreLibraryReexport.forwardRef(function (e) {
    let {
      isHeritageOutline: t,
      markdown: n,
      editable: r,
      isStreaming: a,
      meta: d,
      smooth: u = false,
      globalCountOptions: f,
      paragraphCountOptions: p,
      i18nConfig: v,
      behavior: _,
      onUpdate: h,
      onParse: m,
      services: g,
      heritageOutlineOption: x,
      suspenseMeta: b,
      updateTime: y,
      showOutlineOptions: w = true,
      showSubTitle: k = true,
      isDoc: S = true,
      simplify: j = false,
      onUpload: R,
      onAddReference: C,
      onQueryReferenceStatus: N
    } = e;
    let {
      ref: I,
      width: E
    } = resizeObserverHooks.useResizeObserverEx();
    let {
      text: A
    } = useSmoothTextHook.useSmoothText(n, u);
    let Z = reactCoreLibraryReexport.useMemo(() => new ty({
      isHeritage: t,
      heritageOutlineOption: x
    }), [x, t]);
    let P = reactCoreLibraryReexport.useMemo(() => {
      let t = Z.parse(A);
      if (b && (t == null ? undefined : t.content) && t.content.sub_paragraph_content?.length) {
        tL(t, b);
      }
      return t;
    }, [Z, A, b]);
    let F = a || t || isEmptyUtil.isEmpty(d) ? P : d;
    reactCoreLibraryReexport.useEffect(() => {
      if (F) {
        if (m != null) {
          m({
            content: A,
            outlineMeta: F
          });
        }
      }
    }, [m, F, A]);
    let {
      run: O
    } = useDebouncedCallbackHook_1.useDebouncedCallback(e => {
      if (e !== F) {
        h({
          meta: e,
          content: Z.dispose(e, S)
        });
      }
    }, {
      trailing: true,
      wait: 500
    });
    if (F) {
      return reactJsxRuntimeCoreReexport.jsx(tO, {
        ref: I,
        outline: F,
        editable: r,
        isNarrow: (E ?? 0) < 500,
        simplify: j,
        onSave: O,
        globalCountOptions: f,
        paragraphCountOptions: p,
        i18nConfig: v ?? M,
        behavior: _,
        services: g,
        updateTime: y,
        onUpload: R,
        onQueryReferenceStatus: N,
        onAddReference: C,
        showOutlineOptions: w,
        showSubTitle: k
      });
    } else {
      return null;
    }
  });
  require.d(exports, {
    WritingOutlineComponent: function () {
      return tB;
    }
  });
}