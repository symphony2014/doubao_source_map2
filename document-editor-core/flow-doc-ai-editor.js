// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$g' to 'FlowDocAiEditor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 38746.3a784493.js
         * chunkId: 38746
         * moduleId: 35642
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var n;
  var a;
  var l;
  var c;
  var s;
  var d;
  var _;
  var u;
  var m;
  var p;
  var h;
  var g;
  var f;
  var x;
  var v;
  var y;
  var b;
  var w;
  var k;
  var j;
  var C;
  var N;
  var S;
  var E;
  var Z;
  var R;
  var $;
  var T;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var observableFirstValue = require("observable-first-value") /*id: 244525*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var randomNumberUtil = require("random-number-util") /*id: 636015*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var A = classnamesUtils;
  var reactIntersectionObserver_1 = require("react-intersection-observer_1") /*id: 728951*/;
  var objectDefaultsUtil = require("object-defaults-util") /*id: 679337*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var dateFormatUtils_1 = require("date-format-utils_1") /*id: 179094*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var useLatestRef_1 = require("use-latest-ref_1") /*id: 335903*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var reactUseRunOnce = require("react-use-run-once") /*id: 561418*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let Y = e => {
    let {
      value: t,
      key: o,
      encode: r,
      decode: i
    } = e;
    if (r && !i || i && !r) {
      throw Error("encode and decode must be passed in simultaneously");
    }
    let n = reactCoreLibraryReexport.useRef(t);
    let a = useLatestRef_1.useLatestRef(o);
    reactUseRunOnce.useRunOnce(() => {
      let t = storageWrapperWithFallback.LocalStorageWrapper.getItem(a.current);
      if (!t) {
        return;
      }
      let o = safeJsonUtils.safeParse(t, {})?.value;
      let r = i && isStringTypeCheck.isString(o) ? i(o) : o;
      n.current = r;
    });
    return reactCoreLibraryReexport.useMemo(() => new Proxy(n, {
      get: (e, t) => e[t],
      set(e, t, o) {
        if (t !== "current") {
          return false;
        }
        e[t] = o;
        if (isUndefinedCheck.isUndefined(o)) {
          storageWrapperWithFallback.LocalStorageWrapper.removeItem(a.current);
        } else {
          let e = r ? r(o) : o;
          storageWrapperWithFallback.LocalStorageWrapper.setItem(a.current, safeJsonUtils.safeStringify({
            value: e
          }));
        }
        return true;
      }
    }), []);
  };
  var skillPinModalCallback = require("skill-pin-modal-callback") /*id: 381053*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var reactUseUpdateEffect = require("react-use-update-effect") /*id: 141220*/;
  var useEventListenerHook = require("use-event-listener-hook") /*id: 629504*/;
  var useOnUnmountHook = require("use-on-unmount-hook") /*id: 297204*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var modalDialogComponent = require("modal-dialog-component") /*id: 903195*/;
  var semiToastNotification = require("semi-toast-notification") /*id: 520872*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  let ec = e => e ? safeJsonUtils.safeStringify(e ? e.deltas : null) : String(e);
  let es = e => {
    let t = safeJsonUtils.safeParse(e, null);
    if (t) {
      return new deltaSetCore.DeltaSet(t);
    }
  };
  var skillPinApplyModeTracker = require("skill-pin-apply-mode-tracker") /*id: 789345*/;
  var safeObservableMergeUtil = require("safe-observable-merge-util") /*id: 229102*/;
  var observableCoreClass = require("observable-core-class") /*id: 392610*/;
  var observableTypeCheck = require("observable-type-check") /*id: 279182*/;
  var observableOfUtility = require("observable-of-utility") /*id: 972100*/;
  var createSafeMergeMap = require("create-safe-merge-map") /*id: 47471*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var safePropertyAssignUtil = require("safe-property-assign-util") /*id: 377863*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var deferredExecutionUtils = require("deferred-execution-utils") /*id: 43572*/;
  let ey = e => {
    let {
      remoteVersion: t,
      isMatchByVersion: o = Object.is
    } = e;
    let [r, i] = reactCoreLibraryReexport.useState();
    let [n, a] = reactCoreLibraryReexport.useState(true);
    reactCoreLibraryReexport.useEffect(() => {
      if (isUndefinedCheck.isUndefined(t) || isUndefinedCheck.isUndefined(r)) {
        i(t);
        a(true);
        return;
      }
      a(o(r, t));
    }, [t]);
    return {
      isMatch: n,
      reset: () => {
        i(undefined);
        a(true);
      },
      sync: () => {
        i(t);
        a(true);
      }
    };
  };
  let eb = {
    title: undefined,
    value: undefined,
    version: undefined,
    updateTime: undefined,
    background: undefined
  };
  let ew = e => {
    let {
      docId: t,
      docVersion: o,
      onFetchDoc: r,
      onUpdateDoc: i,
      throwError: n = false,
      isMatchByVersion: a,
      pendingStream: l = false
    } = e;
    let [c, s] = reactCoreLibraryReexport.useState(null);
    let d = useLatestRef_1.useLatestRef(c);
    let [_, u] = reactCoreLibraryReexport.useState();
    let [m, p] = reactCoreLibraryReexport.useState();
    let [h, g] = reactCoreLibraryReexport.useState(false);
    let [f, x] = reactCoreLibraryReexport.useState();
    let v = useLatestRef_1.useLatestRef(l);
    let {
      isMatch: y,
      reset: b,
      sync: w
    } = ey({
      remoteVersion: c == null ? undefined : c.version,
      isMatchByVersion: a
    });
    let k = useLatestRef_1.useLatestRef(t);
    let j = useLatestRef_1.useLatestRef(o);
    let C = skillPinModalCallback.useSkillPinCallback(() => k.current === t && j.current === o);
    reactCoreLibraryReexport.useEffect(() => {
      S();
    }, [t, o]);
    let N = e => safeObservableMergeUtil.safeMergeObservable(new observableCoreClass.Observable(e => {
      if (!v.current) {
        e.complete();
        return;
      }
      let t = setInterval(() => {
        if (e.closed) {
          clearInterval(t);
          return;
        }
        if (!v.current) {
          e.complete();
        }
      }, 100);
    }), new observableCoreClass.Observable(t => {
      deferredExecutionUtils.invokeImmediate(async () => {
        let o = await e();
        if (observableTypeCheck.isObservable(o)) {
          t.next(o);
        } else if (isStringTypeCheck.isString(o)) {
          t.next(observableOfUtility.observableOf(o));
        }
        t.complete();
      });
    }).pipe(createSafeMergeMap.createSafeMergeMap()));
    let S = () => {
      s(null);
      g(false);
      x(undefined);
      b();
      Z();
    };
    let E = (e, i) => {
      let a = i ? throttledPathFilterStringify.throttledPathStr(e, ...i, "updateTime") : {
        ...e
      };
      return immerCoreImplementation.produce(d.current ?? eb, e => {
        if (observableTypeCheck.isObservable(a.value)) {
          if (observableTypeCheck.isObservable(e.value)) {
            delete a.value;
          } else {
            a.value = N(async () => {
              let {
                value: e
              } = await r({
                docId: t,
                docVersion: o
              });
              if (!e || !deltaSetCore.isDeltaSet(e)) {
                return e;
              }
            });
          }
        }
        safePropertyAssignUtil.safePropertyAssign(e, a);
      });
    };
    let Z = async function (e) {
      let i = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      try {
        if (i) {
          g(true);
        }
        let n = await r({
          docId: t,
          docVersion: o,
          omitContent: e && !e.includes("value")
        });
        if (C()) {
          s(E(n, e));
          u(t);
          p(o);
        }
      } catch (e) {
        if (C() && i) {
          x(e);
        }
        if (!n) {
          return;
        }
        throw e;
      } finally {
        if (C() && i) {
          g(false);
        }
      }
    };
    let R = async e => {
      let {
        title: r,
        deltaSet: a,
        markdown: l
      } = e;
      try {
        await i({
          docId: t,
          docVersion: o,
          title: r,
          version: c == null ? undefined : c.version,
          content: a && safeJsonUtils.safeStringify(a.deltas),
          markdown: l
        });
      } catch (e) {
        x(e);
        if (!n) {
          return;
        }
        throw e;
      }
      b();
      await Z(["version", "title"], false);
    };
    return {
      doc: c,
      currentId: _,
      currentVersion: m,
      loading: h,
      error: f,
      isVersionMatch: y,
      resetVersionMatch: b,
      syncVersionMatch: w,
      reset: S,
      refreshDoc: Z,
      updateDoc: R
    };
  };
  var docEditorStrings = require("doc-editor-strings") /*id: 359052*/;
  var configErrorClass = require("config-error-class") /*id: 394787*/;
  var aiEditorWrapper = require("ai-editor-wrapper") /*id: 91148*/;
  var deltaToMarkdownConverter = require("delta-to-markdown-converter") /*id: 935302*/;
  var editorDeltaSetUtils = require("editor-delta-set-utils") /*id: 201746*/;
  var editorZoneDeltaOps = require("editor-zone-delta-ops") /*id: 824737*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var scrollViewComponent = require("scroll-view-component") /*id: 683125*/;
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var reactUseRefStateHook = require("react-use-ref-state-hook") /*id: 377533*/;
  var reactUseConstantHook = require("react-use-constant-hook") /*id: 402486*/;
  var useDebouncedValueHook = require("use-debounced-value-hook") /*id: 510920*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var useStableObjectHook = require("use-stable-object-hook") /*id: 141660*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var semiTextareaComponent = require("semi-textarea-component") /*id: 252810*/;
  var rtlInfoOutlinedIcon = require("rtl-info-outlined-icon") /*id: 918336*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var editorZoneRenderer = require("editor-zone-renderer") /*id: 566183*/;
  var flowDocErrorClass = require("flow-doc-error-class") /*id: 664202*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  let eH = e => {
    var t;
    return ((t = e.getContentState().getZoneState(zeroConstantModule_1.versionValue)) === null || t === undefined ? undefined : t.getModelText()) ?? "";
  };
  let eJ = e => eH(e).length;
  let eG = e => eH(e).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").length;
  var stringSuffixTrimUtil = require("string-suffix-trim-util") /*id: 478725*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var diffOperationValidators = require("diff-operation-validators") /*id: 735530*/;
  var editorZoneDeltaState = require("editor-zone-delta-state") /*id: 800502*/;
  var markdownToEditorDeltaProcessor = require("markdown-to-editor-delta-processor") /*id: 689610*/;
  let e0 = e => {
    let {
      text: t = [],
      markdown: o
    } = e;
    let r = new deltaSetCore.DeltaSet();
    let i = isStringTypeCheck.isString(t) ? [t] : t;
    let n = new contentStructureDelta.ContentDelta({
      zoneId: zeroConstantModule_1.versionValue
    });
    for (let e of i) {
      n = n.insert(e);
    }
    r = r.compose(n);
    if (o) {
      r = r.concat(markdownToEditorDeltaProcessor.markdownDeltaConvert(o));
    }
    return r;
  };
  let e1 = function (e, t = zeroConstantModule_1.versionValue) {
    let o = e.get(t);
    if (!o) {
      return e;
    }
    let r = new editorZoneDeltaState.ZoneDeltaState(t, o).getModelText();
    let i = stringSuffixTrimUtil.trimStringSuffix(r, "\n").length;
    if (r.length === i) {
      return e;
    }
    let n = 0;
    let a = [];
    for (let e of o.ops) {
      if (!e.insert || !isStringTypeCheck.isString(e.insert)) {
        throw Error(`not all op is insert when trim ${t} of deltaset`);
      }
      a.push({
        insert: e.insert.slice(0, i - n),
        attributes: e.attributes
      });
      if (n + e.insert.length > i) {
        break;
      }
      n += e.insert.length;
    }
    return e.replace(t, new contentStructureDelta.ContentDelta({
      zoneId: t,
      ops: a
    }));
  };
  let e2 = e => {
    var t;
    let {
      editor: o,
      selection: r
    } = e;
    let i = o.getContentState().rangeToPosition(r);
    if (!i) {
      return;
    }
    let {
      start: n,
      len: a
    } = i;
    return arrayFirstElement.getFirstElement((t = editorDeltaSetUtils.getRangeDeltaSet({
      deltaSet: o.getContent(),
      start: Math.max(n, n + a - 1),
      end: n + a
    })) === null || t === undefined ? undefined : t.get(zeroConstantModule_1.versionValue).ops);
  };
  let e4 = e => {
    let {
      editor: t,
      text: o,
      markdown: r,
      selection: i = t.selection.getSelection(),
      applyType: n
    } = e;
    let a = t.getContentState();
    let l = a.rangeToPosition(i);
    if (!l) {
      throw Error("Cannot find position of selection");
    }
    let {
      start: c,
      len: s
    } = l;
    let d = e2({
      editor: t,
      selection: i
    });
    let _ = e1(e0({
      text: o,
      markdown: r
    }));
    let {
      zoneId: u
    } = i.end;
    let m = d && diffOperationValidators.isWildcardInsert(d) ? Math.max(s - 1, 0) : s;
    a.apply(new deltaSetCore.DeltaSet({
      [u]: new contentStructureDelta.ContentDelta({
        zoneId: u
      }).retain(c + m)
    }).concat(_), {
      type: n
    });
  };
  let e5 = e => {
    let {
      editor: t,
      selection: o = t.selection.getSelection(),
      text: r,
      markdown: i,
      applyType: n
    } = e;
    let a = t.getContentState();
    let l = a.rangeToPosition(o);
    if (!l) {
      throw Error("Cannot find position of selection");
    }
    let {
      start: c,
      len: s
    } = l;
    let d = e2({
      editor: t,
      selection: o
    });
    let _ = e1(e0({
      text: r,
      markdown: i
    }));
    let {
      zoneId: u
    } = o.end;
    let m = d && diffOperationValidators.isWildcardInsert(d) ? Math.max(s - 1, 0) : s;
    a.apply(new deltaSetCore.DeltaSet({
      [u]: new contentStructureDelta.ContentDelta({
        zoneId: u
      }).retain(c).delete(m)
    }).concat(_), {
      type: n
    });
  };
  let e3 = e => {
    if (e.target instanceof HTMLElement) {
      let n = e.currentTarget;
      let a = e.target.parentElement;
      if (n && a && a.matches("a")) {
        let l = a.getAttribute("href");
        if (!(l == null ? undefined : l.startsWith("#"))) {
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        try {
          var t;
          var o;
          var r;
          var i;
          let a = n.querySelector(l);
          if (a) {
            a.scrollIntoView({
              behavior: "smooth"
            });
            return;
          }
          let c = n.querySelectorAll(".heading-h1>[data-leaf=true]:first-child,.heading-h2>[data-leaf=true]:first-child,.heading-h3>[data-leaf=true]:first-child,.heading-h4>[data-leaf=true]:first-child");
          let s = (t = l.split("#")[1]) === null || t === undefined ? undefined : t.trim().toLowerCase();
          let d = (r = e.target.innerText) === null || r === undefined ? undefined : (o = r.trim()) === null || o === undefined ? undefined : o.toLowerCase();
          for (let e of c) {
            let t = e == null ? undefined : (i = e.innerText) === null || i === undefined ? undefined : i.toLowerCase();
            if (t === s || t === d) {
              e.scrollIntoView({
                behavior: "smooth"
              });
              break;
            }
          }
        } catch (e) {}
      }
    }
  };
  var aiEditorConstants = require("ai-editor-constants") /*id: 383014*/;
  var generationStatusConstants = require("generation-status-constants") /*id: 505195*/;
  let e9 = e => {
    let {
      editor: t
    } = e;
    let [o, r] = reactCoreLibraryReexport.useState(() => t == null ? undefined : t.isEmpty());
    let i = reactFunctionMemoHook.useMemoizedCallback(() => {
      r(t == null ? undefined : t.isEmpty());
    });
    reactCoreLibraryReexport.useEffect(() => {
      i();
      if (t) {
        t.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, i);
      }
      return () => {
        if (t != null) {
          t.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, i);
        }
      };
    }, [t]);
    return {
      isEditorEmpty: o
    };
  };
  var editorPositionClass = require("editor-position-class") /*id: 77106*/;
  var editorContentOperations = require("editor-content-operations") /*id: 444792*/;
  let tt = e => {
    let {
      editor: t,
      title: o
    } = e;
    let [r, i] = reactCoreLibraryReexport.useState("");
    let n = reactCoreLibraryReexport.useRef(null);
    let a = useLatestRef_1.useLatestRef(r);
    let [l, c] = reactCoreLibraryReexport.useState();
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        t.on(editorEventConstants.editorEventTypes.DELETE_KEY, s);
        return () => {
          t.off(editorEventConstants.editorEventTypes.DELETE_KEY, s);
        };
      }
    }, [t]);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if (!isUndefinedCheck.isUndefined(l) && n.current) {
        n.current.setSelectionRange(l, l);
        n.current.focus();
        c(undefined);
      }
    }, [l]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!isUndefinedCheck.isUndefined(o)) {
        i(o);
      }
    }, [o]);
    let s = async () => {
      if (!t || !n.current) {
        return;
      }
      let e = editorContentOperations.removeFirstLineIfEmpty({
        editor: t
      });
      if (e === null) {
        return;
      }
      let o = a.current;
      i(t => `${t}${e.trim()}`);
      if (e === "") {
        await promiseAsyncUtilities.createDelayedPromise(0);
      }
      c(o.length);
    };
    return {
      title: r,
      setTitle: e => {
        let [o, ...r] = e.split("\n");
        i(o);
        if (!r.length || !t) {
          return;
        }
        let n = new editorPositionClass.EditorPosition({
          editor: t,
          start: 0,
          len: 0,
          isBackward: false
        }).toRange();
        e4({
          editor: t,
          selection: n,
          text: r.map(e => `${e}
`)
        });
        t.selection.setSelection(n);
        t.selection.focus();
      },
      titleAreaRef: n
    };
  };
  let to = e => {
    let {
      editor: t
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        t.on(editorEventConstants.editorEventTypes.DELETE_KEY, o);
        return () => {
          t.off(editorEventConstants.editorEventTypes.DELETE_KEY, o);
        };
      }
    }, [t]);
    let o = () => {
      if (t) {
        editorContentOperations.moveToPreviousZone({
          editor: t
        });
      }
    };
  };
  let tr = e => e.ops.length === 1 && e.ops[0].retain;
  let ti = e => {
    let {
      image: t,
      src: o
    } = e || {};
    return t && o && o.startsWith("blob:");
  };
  let tn = e => {
    let {
      image: t,
      src: o
    } = e || {};
    return t && o;
  };
  let ta = e => {
    let {
      editor: t
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        t.on(editorEventConstants.editorEventTypes.DID_PASTE, o);
        return () => {
          t.off(editorEventConstants.editorEventTypes.DID_PASTE, o);
        };
      }
    }, [t]);
    let o = skillPinModalCallback.useSkillPinCallback(e => {
      let {
        deltaSet: t,
        isInternalPaste: o
      } = e;
      if (o) {
        return;
      }
      let i = [];
      t.forEach((e, t) => {
        i.push(t);
      });
      i.forEach(e => {
        r(e, t);
      });
    });
    let r = (e, o) => {
      if (!t) {
        return;
      }
      let r = t.getContentState();
      let i = t.getContent();
      let n = o.get(e);
      let a = i.get(e);
      if (!n || !a) {
        return;
      }
      let l = n.ops.reduce((e, t) => {
        let o = t.attributes || {};
        if (tn(o)) {
          return [...e, o.src];
        } else {
          return e;
        }
      }, []);
      if (tr(n) || !isEmptyUtil.isEmpty(l)) {
        let t = new contentStructureDelta.ContentDelta({
          zoneId: e
        });
        a.ops.forEach(e => {
          let r = isUndefinedCheck.isUndefined(e.insert) ? 0 : Number(e.insert.length);
          if (ti(e.attributes) || collectionIncludesUtil.includes(l, e.attributes?.src)) {
            t.delete(r);
          } else {
            t.retain(r);
          }
        });
        r.apply(t);
      }
    };
  };
  var observableSafeOperatorUtil = require("observable-safe-operator-util") /*id: 179988*/;
  var asyncSkillDeepChangeCb = require("async-skill-deep-change-cb") /*id: 29951*/;
  var useSmoothTextHook = require("use-smooth-text-hook") /*id: 899617*/;
  var useStateRefHook = require("use-state-ref-hook") /*id: 739141*/;
  let t_ = e => {
    let {
      source: t,
      enableSmooth: o = true,
      onEnd: r,
      onStart: i,
      onStartReset: n,
      onError: a
    } = e;
    let [l, c, s] = useStateRefHook.useStateRef("");
    let d = skillPinModalCallback.useSkillPinCallback(r);
    let [_, u] = reactCoreLibraryReexport.useState(!t);
    let [m, p] = reactCoreLibraryReexport.useState(false);
    let [h, g] = reactCoreLibraryReexport.useState(false);
    let f = reactCoreLibraryReexport.useRef(false);
    let x = _ || m;
    let v = reactCoreLibraryReexport.useRef();
    let {
      text: y,
      flushCursor: b
    } = useSmoothTextHook.useSmoothText(l, {
      enable: o && !x,
      maxSpeed: 150
    });
    let w = () => {
      if (v.current) {
        v.current.unsubscribe();
        v.current = undefined;
      }
    };
    let k = e => {
      if (f.current !== e) {
        g(e);
        f.current = e;
        if (e) {
          if (i != null) {
            i();
          }
        } else if (n != null) {
          n();
        }
      }
    };
    let j = skillPinModalCallback.useSkillPinCallback(e => {
      let t = s();
      let o = t;
      if (isStringTypeCheck.isString(e)) {
        o = t + e;
      } else {
        let {
          text: r,
          replaceFromIndex: i,
          directlyOnScreen: n = false
        } = e;
        o = (isUndefinedCheck.isUndefined(i) ? t : t.slice(0, i)) + r;
        if (n) {
          b();
        }
      }
      if (o !== t) {
        k(true);
        c(o);
      }
    });
    let C = skillPinModalCallback.useSkillPinCallback(() => {
      k(true);
      u(true);
      if (d != null) {
        d({
          type: "finished"
        });
      }
    });
    let N = skillPinModalCallback.useSkillPinCallback(e => {
      k(true);
      p(true);
      if (d != null) {
        d({
          type: "error"
        });
      }
      if (a != null) {
        a(e);
      }
    });
    let S = () => {
      c("");
      u(false);
      p(false);
    };
    reactCoreLibraryReexport.useEffect(() => {
      k(false);
      if (t) {
        S();
        v.current = t.subscribe({
          next: j,
          complete: C,
          error: N
        });
        return w;
      }
    }, [t]);
    return {
      value: y,
      isFinished: _,
      isError: m,
      isEnd: x,
      isStarted: h,
      stop: () => {
        w();
        u(true);
        if (d != null) {
          d({
            type: "stopped"
          });
        }
      }
    };
  };
  var editorZoneDeltaDiff = require("editor-zone-delta-diff") /*id: 212178*/;
  let tm = e => {
    let {
      source: t,
      initialContent: o,
      onDiff: r,
      onEnd: i,
      onError: n,
      referenceQuoteManager: a
    } = e;
    let {
      value: l,
      ...c
    } = t_({
      source: t,
      onEnd: i,
      onError: n
    });
    let {
      isEnd: s
    } = c;
    let d = !s;
    let _ = reactCoreLibraryReexport.useRef(editorDeltaSetUtils.createInitialDelta());
    reactCoreLibraryReexport.useEffect(() => {
      _.current = editorDeltaSetUtils.createInitialDelta();
    }, [t]);
    reactCoreLibraryReexport.useEffect(() => {
      let e = markdownToEditorDeltaProcessor.markdownDeltaConvert(l, {
        fixEnding: d,
        removeTruncatedImage: true,
        enabledHtmlTags: ["img"],
        referenceData: a == null ? undefined : a.getReferenceQuoteList()
      });
      let t = o && l ? o.concat(e) : e;
      let i = editorZoneDeltaDiff.diffEditorZones(_.current, t);
      r(i);
      _.current = _.current.compose(i);
    }, [l, d]);
    return c;
  };
  let tp = e => {
    let t = reactCoreLibraryReexport.useRef(editorDeltaSetUtils.createInitialDelta());
    let o = e => {
      t.current = t.current ? t.current.compose(e) : e;
    };
    return {
      diffRebase: e => {
        o(e);
      },
      apply: o => {
        e(t.current.transform(o, true));
      },
      reset: () => {
        t.current = editorDeltaSetUtils.createInitialDelta();
      },
      getMergedRebase: () => t.current
    };
  };
  let th = e => {
    let {
      editor: t,
      value: o,
      clearWhenEmpty: r = true,
      initialContent: i,
      onBeforeApply: n,
      process: a,
      onDiff: l,
      onError: c,
      referenceQuoteManager: s
    } = e;
    let [d, _] = reactCoreLibraryReexport.useState();
    let [u, m] = reactCoreLibraryReexport.useState();
    let p = reactCoreLibraryReexport.useMemo(() => o == null ? undefined : o.pipe(observableSafeOperatorUtil.createSafeOperator(e => v(e))), [o]);
    let {
      diffRebase: h,
      apply: g,
      reset: f,
      getMergedRebase: x
    } = tp(e => {
      if (!t || !p) {
        return;
      }
      let o = a ? a(e) : e;
      if (n != null) {
        n(o);
      }
      t.getContentState().apply(o, {
        type: editorZoneDeltaOps.modeAutoApply,
        normalize: false,
        nonundoable: true
      });
      if (l != null) {
        l({
          diff: o,
          rawDiff: e
        });
      }
    });
    let v = skillPinModalCallback.useSkillPinCallback(e => {
      if (isStringTypeCheck.isString(e)) {
        return;
      }
      let {
        progress: t,
        expectedTime: o
      } = e;
      _(t);
      m(o);
    });
    let y = e => {
      if (!editorZoneDeltaOps.isAutoApplyMode(e)) {
        h(e.deltaSet);
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        t.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, y);
      }
    }, [t]);
    reactCoreLibraryReexport.useEffect(() => {
      if (t && p) {
        if (r) {
          editorZoneDeltaOps.resetEditorZone({
            editor: t
          });
        }
        f();
      }
    }, [t, p]);
    let b = () => {
      _(undefined);
      m(undefined);
    };
    reactCoreLibraryReexport.useEffect(() => {
      b();
    }, [p]);
    return {
      ...tm({
        source: p,
        initialContent: i,
        onDiff: g,
        onError: c,
        referenceQuoteManager: s
      }),
      progress: d,
      expectedRemainingTime: u,
      getMergedRebase: x
    };
  };
  let tg = e => {
    let {
      editor: t,
      value: o,
      referenceQuoteManager: r
    } = e;
    reactCoreLibraryReexport.useEffect(() => {
      if (!!t && !isUndefinedCheck.isUndefined(o)) {
        editorZoneDeltaOps.setEditorMarkdown({
          editor: t,
          value: o,
          type: editorZoneDeltaOps.modeAutoApply,
          nonundoable: true,
          referenceQuoteList: r == null ? undefined : r.getReferenceQuoteList()
        });
      }
    }, [t, o]);
  };
  let tf = e => {
    let {
      editor: t,
      value: o
    } = e;
    asyncSkillDeepChangeCb.createDeepChangeCallback(() => {
      if (!!t && !isUndefinedCheck.isUndefined(o)) {
        editorZoneDeltaOps.setEditorContent({
          editor: t,
          value: o,
          type: editorZoneDeltaOps.modeAutoApply,
          nonundoable: true
        });
      }
    }, [o]);
  };
  let tx = e => {
    let {
      editor: t,
      value: o,
      onError: r,
      referenceQuoteManager: i
    } = e;
    let n = reactCoreLibraryReexport.useMemo(() => isStringTypeCheck.isString(o) ? markdownToEditorDeltaProcessor.markdownDeltaConvert(o, {
      referenceData: i == null ? undefined : i.getReferenceQuoteList()
    }) : o && deltaSetCore.isDeltaSet(o) ? o : editorDeltaSetUtils.createInitialDelta({
      withLineMaker: true
    }), [i == null ? undefined : i.getReferenceQuoteList()]);
    let {
      stop: a,
      ...l
    } = th({
      editor: t,
      value: observableTypeCheck.isObservable(o) ? o : undefined,
      onError: r,
      referenceQuoteManager: i
    });
    tg({
      editor: t,
      value: isStringTypeCheck.isString(o) ? o : undefined,
      referenceQuoteManager: i
    });
    tf({
      editor: t,
      value: o && deltaSetCore.isDeltaSet(o) ? o : undefined
    });
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (isUndefinedCheck.isUndefined(o) && t) {
        editorZoneDeltaOps.resetEditorZone({
          editor: t
        });
      }
    }, [o]);
    return {
      ...l,
      initialDeltaSet: n,
      stopIfStream: () => {
        if (observableTypeCheck.isObservable(o)) {
          a();
        }
      }
    };
  };
  var editorContentOperationsHelper = require("editor-content-operations-helper") /*id: 676428*/;
  let ty = e => {
    let {
      editor: t
    } = e;
    let [o, r] = reactCoreLibraryReexport.useState([]);
    let i = () => {
      if (t) {
        r(editorContentOperationsHelper.getActiveBlockTypes({
          editor: t
        }) ?? {});
      }
    };
    let n = () => {
      if (t) {
        r(editorContentOperationsHelper.getActiveBlockTypes({
          editor: t
        }) ?? {});
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        t.on(editorEventConstants.editorEventTypes.SELECTION_CHANGE, i);
        t.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, n);
        return () => {
          t.off(editorEventConstants.editorEventTypes.SELECTION_CHANGE, i);
          t.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, n);
        };
      }
    }, [t]);
    return o;
  };
  var reactObservableHooks = require("react-observable-hooks") /*id: 48721*/;
  var observableInitialValue = require("observable-initial-value") /*id: 509357*/;
  let tk = {
    doc_editor_ai_writing: "AI 撰写中",
    doc_editor_ai_skill: "AI 改写",
    doc_editor_ai_skill_input_placeholder: "输入优化文本的指令，或者搜索技能",
    doc_editor_ai_skill_panel_insert: "插入",
    doc_editor_ai_skill_panel_replace: "替换",
    doc_editor_ai_skill_panel_retry: "重试",
    doc_editor_ai_skill_panel_stop: "停止",
    doc_editor_title_placeholder: "请输入标题",
    doc_editor_toolbar_text: "正文",
    doc_editor_toolbar_heading_1: "一级标题",
    doc_editor_toolbar_heading_2: "二级标题",
    doc_editor_toolbar_heading_3: "三级标题",
    doc_editor_toolbar_heading_4: "四级标题",
    doc_editor_toolbar_ordered_list: "有序列表",
    doc_editor_toolbar_unordered_list: "无序列表",
    doc_editor_toolbar_strong: "粗体",
    doc_editor_toolbar_italic: "斜体",
    doc_editor_toolbar_underline: "下划线",
    doc_editor_toolbar_delete: "删除线",
    doc_editor_toolbar_image: "图片",
    doc_editor_toolbar_blockquote: "引用",
    doc_editor_toolbar_table: "表格",
    doc_editor_toolbar_code_block: "代码块",
    doc_editor_toolbar_inline_code: "代码",
    doc_editor_toolbar_link: "链接",
    doc_editor_toolbar_word_count: "总字数",
    doc_editor_toolbar_char_count: "总字符数",
    doc_editor_toolbar_copy: "复制全文",
    doc_editor_toolbar_copy_success: "复制成功",
    doc_editor_toolbar_download: "下载导出",
    doc_editor_toolbar_download_loading: "正在导出文档",
    doc_editor_toolbar_close: "关闭退出",
    doc_editor_link_text: "文本",
    doc_editor_link_url: "链接",
    doc_editor_link_confirm: "确定",
    doc_editor_code_block_switch_language: "切换代码语言",
    doc_editor_code_block_search: "搜索",
    doc_editor_code_block_wrap: "自动换行",
    doc_editor_code_block_nowrap: "取消自动换行",
    doc_editor_code_block_copy: "复制",
    doc_editor_image_scale: "图片比例",
    doc_editor_image_origin_scale: "原始尺寸",
    doc_editor_image_change_image: "更换图片",
    doc_editor_image_search_web: "全网搜索",
    doc_editor_image_image_generate: "图像生成",
    doc_editor_image_local_update: "本地上传",
    doc_editor_image_add_image: "添加图片",
    doc_editor_image_adding_image: "添加图片中",
    doc_editor_image_delete: "删除",
    doc_editor_image_invalid: "图片失效",
    doc_editor_image_failed_to_upload: "上传失败",
    doc_editor_image_failed_to_add: "添加失败",
    doc_editor_paragraph_rewriting: "段落改写",
    doc_editor_paragraph_delete: "删除",
    doc_editor_paragraph_edit_reference: "修改参考",
    doc_editor_paragraph_title: "标题",
    doc_editor_paragraph_title_placeholder: "输入标题",
    doc_editor_paragraph_desc: "描述",
    doc_editor_paragraph_desc_placeholder: "输入段落引导内容",
    doc_editor_paragraph_cancel: "取消",
    doc_editor_paragraph_regenerate: "重新生成",
    doc_editor_paragraph_generate: "生成",
    doc_editor_paragraph_original: "原文",
    doc_editor_paragraph_generated: "改进",
    doc_editor_paragraph_confirm: "确认",
    doc_editor_paragraph_exit: "退出",
    doc_editor_paragraph_cancel_modal_title: "确定退出吗",
    doc_editor_paragraph_cancel_modal_desc: "退出后，改进的内容将消失，并还原原文内容。",
    doc_editor_paragraph_cancel_modal_cancel_button_text: "取消",
    doc_editor_paragraph_cancel_modal_confirm_button_text: "确定",
    doc_editor_paragraph_error_modal_title: "生成过程出错",
    doc_editor_paragraph_error_modal_keep_now: "保留现状",
    doc_editor_quick_raise_placeholder: "输入“/”可快速添加 AI 段落",
    doc_editor_ai_writing_progress_tip_text: "预计需要 %d 分钟，我们可以先聊点别的",
    doc_editor_ai_writing_progress_tip_new_chat: "新建对话",
    doc_editor_stop_writing_confirm_alert_title: "确定停止生成吗？",
    doc_editor_stop_writing_confirm_alert_desc: "停止后，当前已生成的内容会保留，但将无法继续生成内容。",
    confirm_button_title: "确认",
    cancel_button_title: "取消",
    doc_editor_stop_generating: "停止生成",
    doc_editor_char_count_exceed: "字数超出，仅能基于部分内容进行 AI 创作",
    doc_editor_newline_placeholder: "撰写任何内容...",
    doc_editor_diagram_tab_image: "图片",
    doc_editor_diagram_tab_code: "代码",
    doc_editor_diagram_download_image: "下载图片",
    doc_editor_diagram_copy_image: "复制图片",
    doc_editor_diagram_copy_text: "复制文本",
    doc_editor_diagram_copy_rich_text: "复制富文本",
    doc_editor_diagram_copy_success: "复制成功",
    doc_editor_diagram_zoom_in: "放大",
    doc_editor_diagram_zoom_out: "缩小",
    doc_editor_diagram_zoom_fit: "适应页面",
    doc_editor_diagram_full_screen_view: "全屏查看",
    doc_editor_diagram_close: "关闭",
    doc_editor_diagram_error: "生成失败，换个方式问问吧",
    doc_editor_first_line_placeholder: "撰写或粘贴任何内容， 按“空格”让__BUTTON__，按“/”快捷插入内容",
    doc_editor_first_line_placeholder_ai_write_button: "AI 帮我写",
    doc_editor_ai_write_input_placeholder: "输入你想撰写的主题，或从下列场景中选择：",
    doc_editor_ai_write_input_genre_requirement_placeholder: "输入主题和撰写要求…",
    doc_editor_ai_write_result_confirm_menu_item_accept: "接受",
    doc_editor_ai_write_result_confirm_menu_item_discard: "放弃",
    doc_editor_ai_write_result_exit_alert_title: "要放弃 AI 改写的内容吗？",
    doc_editor_ai_write_result_exit_alert_discard_button: "放弃",
    doc_editor_ai_write_result_exit_alert_continue_button: "继续编辑",
    doc_editor_ai_write_result_confirm_menu_item_regenerate: "重新生成",
    doc_editor_writing_canvas_auto_gen_option_save: "接受",
    doc_editor_writing_canvas_auto_gen_option_discard: "拒绝",
    doc_editor_writing_canvas_auto_gen_option_regenerate: "重试",
    brandName_cici: "Dola",
    brandName_dola: "Dola",
    brandName_doubao: "豆包"
  };
  let tj = reactCoreLibraryReexport.createContext(null);
  let tC = tj.Provider;
  let tN = () => {
    let t = reactCoreLibraryReexport.useContext(tj);
    let {
      value: o
    } = reactObservableHooks.useObservableState(observableInitialValue.hasInitialValue(t) ? t : null);
    let r = observableInitialValue.hasInitialValue(t) ? null : t;
    return o ?? r ?? tk;
  };
  let tS = () => {
    let e = tN();
    return t => e[t];
  };
  let tE = reactCoreLibraryReexport.createContext(null);
  let tZ = tE.Provider;
  function tR() {
    let e = reactCoreLibraryReexport.useContext(tE);
    if (!e) {
      throw Error("Expect DocEditorContext when invoke useDocEditor");
    }
    return e;
  }
  var rewriteApplyConstant = require("rewrite-apply-constant") /*id: 160238*/;
  var arrayConcatFlattenFunction = require("array-concat-flatten-function") /*id: 876471*/;
  var behaviorSubjectClass = require("behavior-subject-class") /*id: 263814*/;
  var isEqualUtil_1 = require("is-equal-util_1") /*id: 999658*/;
  let tW = (e, t, o) => {
    let r = reactCoreLibraryReexport.useRef(undefined);
    if (!r.current || !o(t, r.current)) {
      r.current = t;
    }
    reactCoreLibraryReexport.useEffect(e, r.current);
  };
  let tz = function (e, t = {}) {
    let {
      isEqual: o = isEqualUtil_1.isEqual
    } = t;
    let r = reactCoreLibraryReexport.useMemo(() => new behaviorSubjectClass.BehaviorSubject(e), []);
    useOnUnmountHook.useOnUnmount(() => {
      r.complete();
    });
    tW(() => {
      r.next(e);
    }, [e], (e, t) => e.length === t.length && e.every((e, r) => o(e, t[r])));
    return reactCoreLibraryReexport.useMemo(() => observableInitialValue.setInitialValue(r.asObservable(), e), [r]);
  };
  var larkDocsPasteSupport = require("lark-docs-paste-support") /*id: 234319*/;
  var larkDocxPasteSupportPlugin = require("lark-docx-paste-support-plugin") /*id: 523382*/;
  var googleDocsPasteSupportPlugin = require("google-docs-paste-support-plugin") /*id: 240012*/;
  var tencentDocsPasteSupportPlugin = require("tencent-docs-paste-support-plugin") /*id: 368849*/;
  var keyboardShortcutsRenderer = require("keyboard-shortcuts-renderer") /*id: 307048*/;
  var markdownEditorPlugin_1 = require("markdown-editor-plugin_1") /*id: 506005*/;
  var richTextIndentPlugin = require("rich-text-indent-plugin") /*id: 905956*/;
  var plainTextHandlerRenderer = require("plain-text-handler-renderer") /*id: 685325*/;
  var autoSpaceEditorPlugin = require("auto-space-editor-plugin") /*id: 365421*/;
  var codeHighlightRenderer = require("code-highlight-renderer") /*id: 127099*/;
  var codeBlockPlugin = require("code-block-plugin") /*id: 337472*/;
  var editorBoldPlugin = require("editor-bold-plugin") /*id: 13270*/;
  var italicAttributeRenderer = require("italic-attribute-renderer") /*id: 675703*/;
  var editorUnderlinePlugin = require("editor-underline-plugin") /*id: 368359*/;
  var editorStrikethroughRender = require("editor-strikethrough-render") /*id: 486446*/;
  var documentMarginCalculator = require("document-margin-calculator") /*id: 628830*/;
  var tableComponentWithScrollableEditor = require("table-component-with-scrollable-editor") /*id: 748693*/;
  var inlineCodeRenderer = require("inline-code-renderer") /*id: 20665*/;
  var editorHeadingPlugin = require("editor-heading-plugin") /*id: 899523*/;
  var richTextEditorListPlugin = require("rich-text-editor-list-plugin") /*id: 656274*/;
  var editorChecklistRenderer = require("editor-checklist-renderer") /*id: 744100*/;
  var editorHyperlinkPopupManager = require("editor-hyperlink-popup-manager") /*id: 594133*/;
  var editorHorizontalLineRenderer = require("editor-horizontal-line-renderer") /*id: 274854*/;
  var blockquoteRenderer = require("blockquote-renderer") /*id: 954935*/;
  var blockElementDeserializer = require("block-element-deserializer") /*id: 120234*/;
  var textNodeDeserializer = require("text-node-deserializer") /*id: 232530*/;
  var editorModuleConstants = require("editor-module-constants") /*id: 21060*/;
  var virtualListModule = require("virtual-list-module") /*id: 727271*/;
  var popoverComponent = require("popover-component") /*id: 973583*/;
  var editorKitEquationEditor = require("editor-kit-equation-editor") /*id: 843399*/;
  var editorKitEquationView = require("editor-kit-equation-view") /*id: 588269*/;
  require("empty-module-stub_7") /*id: 954761*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let on = e => {
    let {
      displayMode: t,
      isEditMode: r,
      equation: i,
      inputPlaceholder: n,
      mathPlaceholder: a,
      onEquationChange: l,
      onIsEditModeChange: c
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
      trigger: "click",
      visible: r,
      placement: "bottomLeft",
      showArrow: false,
      overlayStyle: {
        width: 400
      },
      content: reactJsxRuntimeCoreReexport.jsx("div", {
        children: reactJsxRuntimeCoreReexport.jsx(editorKitEquationEditor.EquationEditor, {
          placeholder: n,
          equation: i,
          onEquationChange: l,
          scrollerOptions: {
            disableBodyScroll: true
          }
        })
      }),
      onVisibleChange: c || undefined,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "container-QOp1hg",
        children: reactJsxRuntimeCoreReexport.jsx(editorKitEquationView.EquationView, {
          value: i,
          getKatex: async () => {
            let {
              default: e
            } = await Promise.resolve().then(require.bind(require, "katex-core-renderer") /*id: 811377*/);
            return e;
          },
          viewDisplay: t,
          placeholder: a,
          errorPlaceholder: "LaTex error"
        })
      })
    });
  };
  var editorEquationRenderer = require("editor-equation-renderer") /*id: 485858*/;
  class ol extends editorEquationRenderer.EquationRenderer {
    serialize(e) {
      let {
        equation: r
      } = e.op?.attributes ?? {};
      if (e.type === "leaf" && r) {
        e.node = document.createTextNode(`\\(${r}\\)`);
      }
      return e;
    }
  }
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var randomStringGenerator = require("random-string-generator") /*id: 62944*/;
  var richTextEditorImagePlugin = require("rich-text-editor-image-plugin") /*id: 424832*/;
  var reactDomContextDecorator = require("react-dom-context-decorator") /*id: 955275*/;
  var editorPluginManager = require("editor-plugin-manager") /*id: 903878*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  (r = {}).AutoWebSearch = "auto_web_search";
  r.AutoLocalUpload = "auto_local_upload";
  r.AutoAiSearch = "auto_ai_search";
  let oh = r;
  (i = {}).LoadById = "load_by_id";
  i.LoadByKey = "load_by_key";
  i.LoadBySrc = "load_by_src";
  i.LoadByAutoAddAndUpdate = "need_search_image_by_title";
  let og = i;
  let of = e => e === "undefined" ? undefined : e === "null" ? null : e;
  let ox = e => collectionIncludesUtil.includes(objectValuesHelper.getObjectValues(og), e);
  let ov = e => {
    try {
      let t = JSON.parse(e);
      return {
        width: t.width,
        height: t.height,
        id: t.id,
        type: t.type,
        key: t.key
      };
    } catch (t) {
      if (ox(e)) {
        return {
          type: e
        };
      }
      return {
        type: og.LoadBySrc
      };
    }
  };
  var editorLeafTextComponent = require("editor-leaf-text-component") /*id: 374368*/;
  let ob = e => {
    let {
      value: t,
      scale: o,
      size: r
    } = e;
    let i = {};
    if (!isUndefinedCheck.isUndefined(t)) {
      if (t) {
        let {
          src: e,
          alt: o = "",
          source: r
        } = t;
        Object.assign(i, {
          image: "true",
          src: e,
          alt: o,
          source: r
        });
      } else {
        Object.assign(i, {
          image: "true",
          src: xssContentSanitizer.sanitizeUrl("", null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1ZDJKS$ZtNWhWel-2$EROT2JHSnRiSFpq-$R*d1lsZEdibHB%T1dwa%1qRjNZakkx-kdKd$$ucE1NbXgw$1Zka2JFeFlXbkJh$0dOMFds-3hh$nB-$$haa1d*SndZa2hOZFdSS$Rta*pi$1F4WTNjO$BRPT0"
          }),
          alt: ""
        });
      }
    }
    if (!isUndefinedCheck.isUndefined(o)) {
      Object.assign(i, {
        scale: o
      });
    }
    if (!isUndefinedCheck.isUndefined(r)) {
      Object.assign(i, {
        width: String(r.width),
        height: String(r.height)
      });
    }
    return i;
  };
  let ow = e => {
    let {
      editor: t,
      id: o
    } = e;
    let r = t.getContentState();
    let i = r.getEntities((e, t) => e === "uuid" && t === o);
    if (!i.length) {
      return null;
    }
    if (i.length > 1) {
      throw Error(`Find more than 1 image entity which uuid is ${o}`);
    }
    let n = i[0];
    return r.rangeToPosition(n);
  };
  let ok = e => {
    let {
      editor: t,
      id: o,
      zoneId: r,
      value: i,
      scale: n,
      size: a
    } = e;
    let l = t.getContentState();
    let c = ow({
      editor: t,
      id: o
    });
    if (!c) {
      return;
    }
    let {
      start: s,
      len: d
    } = c;
    l.apply(new contentStructureDelta.ContentDelta({
      zoneId: r
    }).retain(s).retain(d, ob({
      value: i,
      scale: n,
      size: a
    })), {
      type: editorZoneDeltaOps.modeSkipRestore
    });
  };
  let oj = e => {
    let {
      editor: t,
      zoneId: o,
      id: r
    } = e;
    let i = t.getContentState();
    let n = ow({
      editor: t,
      id: r
    });
    if (!n) {
      return;
    }
    let {
      start: a,
      len: l
    } = n;
    i.apply(new contentStructureDelta.ContentDelta({
      zoneId: o
    }).retain(a).delete(l));
  };
  let oC = e => {
    let {
      editor: o
    } = e;
    let r = o.selection.getSelection();
    if (r.isCollapsed()) {
      return false;
    }
    let i = o.getContentState().getEntities(r);
    return i.length === 1 && i[0].attributes?.image === "true";
  };
  let oN = e => {
    let {
      element: t,
      pointX: o,
      pointY: r
    } = e;
    if (!t) {
      return false;
    }
    let {
      x: i,
      y: n,
      width: a,
      height: l
    } = t.getBoundingClientRect();
    return o > i && o < i + a && r > n && r < n + l;
  };
  var syncedReferenceBlockManager = require("synced-reference-block-manager") /*id: 750510*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var reactResizableEntry = require("react-resizable-entry") /*id: 952428*/;
  var numberClampUtil = require("number-clamp-util") /*id: 317214*/;
  let oT = e => {
    let t = reactCoreLibraryReexport.useRef();
    if (!t.current && e) {
      t.current = e;
    }
    return t.current;
  };
  var oI = {
    container: "container-ACCL_w",
    active: "active-tySGt7",
    handle: "handle-LQU5R8",
    calculator: "calculator-sklXHm",
    ne: "ne-vIqPNx",
    se: "se-WvgeoK",
    sw: "sw-AshdpL",
    nw: "nw-wI_YiU"
  };
  let oF = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: o,
      style: r,
      active: i = true,
      lockAspectRatio: n = true,
      initialWidth: a = 700,
      initialHeight: l,
      minWidth: c = 150,
      maxWidth: s = 700,
      children: d,
      onResize: _
    } = e;
    let u = reactCoreLibraryReexport.useRef(false);
    let {
      ref: m,
      width: p,
      height: h
    } = resizeObserverHooks.useResizeObserverEx();
    let g = oT(h && p && h / p * a);
    let [f = a, x] = reactCoreLibraryReexport.useState();
    let [v = g ?? l, y] = reactCoreLibraryReexport.useState();
    let b = reactCoreLibraryReexport.useRef(f);
    let w = skillPinModalCallback.useSkillPinCallback(e => {
      let {
        width: t,
        height: o,
        scaleToWidth: r
      } = e;
      let i = r ?? (t && numberClampUtil.clampNumber(t, c, s));
      let n = i && t && o && i / t * o;
      x(i);
      y(n);
    });
    let k = skillPinModalCallback.useSkillPinCallback(() => ({
      width: f,
      height: v ?? 0
    }));
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      getSize: k,
      setSize: w
    }), []);
    reactCoreLibraryReexport.useEffect(() => {
      if (!u.current) {
        w({
          width: p,
          height: h
        });
      }
    }, [p, h, c]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!u.current) {
        w({
          width: p,
          height: h,
          scaleToWidth: Math.min(s, b.current)
        });
      }
    }, [s]);
    let j = e => {
      if (_ != null) {
        _(e);
      }
      b.current = e.size.width;
    };
    return reactJsxRuntimeCoreReexport.jsx(reactResizableEntry.ResizableBox, {
      className: A(oI.container, o, {
        [oI.active]: i
      }),
      style: r,
      width: f || undefined,
      height: v || undefined,
      lockAspectRatio: n,
      resizeHandles: ["ne", "se", "sw", "nw"],
      onResizeStart: () => {
        u.current = true;
      },
      onResizeStop: () => {
        u.current = false;
      },
      handle: (e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
        ref: t,
        className: A(oI.handle, oI[e])
      }),
      onResize: (e, t) => j(t),
      maxConstraints: h && p ? [s, s / p * h] : undefined,
      minConstraints: h && p ? [c, c / p * h] : undefined,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        ref: m,
        className: oI.calculator,
        children: d
      })
    });
  });
  var oW = {
    container: "container-Zrxf4A",
    "scale-wrapper": "scale-wrapper-EBumyO",
    "inner-wrapper": "inner-wrapper-cfU0uF",
    inner: "inner-facpas"
  };
  let oz = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: o,
      style: r,
      scale: i,
      children: n,
      ...a
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: t,
      className: A(oW.container, o),
      style: r,
      ...a,
      children: isUndefinedCheck.isUndefined(i) ? n : reactJsxRuntimeCoreReexport.jsx("div", {
        className: A(oW["scale-wrapper"]),
        style: {
          paddingTop: `${1 / i * 100}%`
        },
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: oW["inner-wrapper"],
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: oW.inner,
            children: n
          })
        })
      })
    });
  });
  var useControlledStateHook = require("use-controlled-state-hook") /*id: 263107*/;
  var useBooleanHook = require("use-boolean-hook") /*id: 240989*/;
  var useClickOutsideHook = require("use-click-outside-hook") /*id: 649182*/;
  var semiImageComponent = require("semi-image-component") /*id: 87078*/;
  var semiTooltipWrapper = require("semi-tooltip-wrapper") /*id: 905177*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var rtlChatIcon = require("rtl-chat-icon") /*id: 797101*/;
  var calculatorIconComponent = require("calculator-icon-component") /*id: 461263*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  let oJ = e => {
    let {
      src: o,
      source: r
    } = e;
    if (r === null) {
      return null;
    } else {
      return r ?? urlParamUtils.parseUrlSafe(o)?.host;
    }
  };
  let oG = {
    defaultValue: null,
    initialValue: null,
    value: undefined,
    onChange: undefined
  };
  let oV = {
    defaultValue: "raw",
    initialValue: "raw",
    value: undefined,
    onChange: undefined
  };
  let oX = {
    "1-1": 1,
    "16-9": 16 / 9,
    "4-3": 4 / 3,
    raw: undefined
  };
  var imageThinkingComponent = require("image-thinking-component") /*id: 602617*/;
  var oU = "show-iy3AH4";
  let oY = e => {
    let {
      initialSize: t,
      style: o,
      loadingType: r = "search"
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "empty-loading-container-UANRne",
      style: o,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: A("empty-image-ai-qfTwrk", {
          [oU]: r === "generate"
        }),
        children: reactJsxRuntimeCoreReexport.jsx(imageThinkingComponent.ImageThinkingView, {
          width: t == null ? undefined : t.width,
          height: t == null ? undefined : t.height,
          className: "loading-JqD2Ts"
        })
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: A("empty-image-search-c5kSrV", {
          [oU]: r === "search"
        })
      })]
    });
  };
  var businessSkillBar = require("business-skill-bar") /*id: 342181*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var searchOutlinedIconComponent_1 = require("search-outlined-icon-component_1") /*id: 772730*/;
  var rtlSettingsIconComponent = require("rtl-settings-icon-component") /*id: 996282*/;
  var codingSkillChatInputIcon = require("coding-skill-chat-input-icon") /*id: 517798*/;
  var refreshRtlIcon = require("refresh-rtl-icon") /*id: 151364*/;
  var arrayChunk = require("array-chunk") /*id: 554639*/;
  var numericRangeUtil = require("numeric-range-util") /*id: 685991*/;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  var semiInputComponent = require("semi-input-component") /*id: 410861*/;
  var searchIconComponent_2 = require("search-icon-component_2") /*id: 773676*/;
  var re = "inner-V3ZMO_";
  var rt = "row-uoc76H";
  var ro = "item-qftm7q";
  var rr = "border-QsWCVM";
  let ri = e => {
    let {
      initialInput: t = "",
      placeholder: o,
      initialImages: r = [],
      onFetchImageList: i,
      onCheckImage: n
    } = e;
    let a = reactCoreLibraryReexport.useRef(null);
    let [l, c] = reactCoreLibraryReexport.useState(t);
    let s = () => Promise.resolve(i(l));
    let {
      loading: d = false,
      data: {
        images: _
      } = {
        images: undefined
      }
    } = useRequestHook.useRequest(s, {
      refreshDeps: [l],
      debounceLeading: false,
      debounceTrailing: true,
      debounceWait: 500
    });
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "container-_W6Cm5",
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "search-input-FWW8Iq",
        children: [reactJsxRuntimeCoreReexport.jsx(searchIconComponent_2.SearchIcon, {
          className: "icon-gqeAh6"
        }), reactJsxRuntimeCoreReexport.jsx(semiInputComponent.InputComponent, {
          ref: a,
          className: "input-fzp6Si",
          placeholder: o,
          value: l,
          onChange: c,
          onEnterPress: () => {
            var e;
            s();
            if ((e = a.current) !== null && e !== undefined) {
              e.blur();
            }
          }
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "list-bzFqI8",
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: re,
          children: d ? arrayChunk.arrayChunk(numericRangeUtil.createRange(9), 3).map((e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
            className: rt,
            children: e.map(e => reactJsxRuntimeCoreReexport.jsxs("div", {
              className: ro,
              children: [reactJsxRuntimeCoreReexport.jsx(oz, {
                className: A(re, "loading-Hyx_Fx"),
                scale: 170 / 95
              }, e), reactJsxRuntimeCoreReexport.jsx("div", {
                className: rr
              })]
            }))
          }, t)) : arrayChunk.arrayChunk(_ || r, 3).map((e, t) => reactJsxRuntimeCoreReexport.jsx("div", {
            className: rt,
            children: e.map((e, t) => {
              let {
                src: o
              } = e;
              return reactJsxRuntimeCoreReexport.jsxs("div", {
                className: ro,
                children: [reactJsxRuntimeCoreReexport.jsx(oz, {
                  className: A(re, "loaded-QgGOJ5"),
                  scale: 170 / 95,
                  onClick: () => {
                    if (n != null) {
                      n(e);
                    }
                  },
                  children: reactJsxRuntimeCoreReexport.jsx("img", {
                    className: "image-U68iBo",
                    src: xssContentSanitizer.sanitizeUrl(o, null, {
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
                      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1-W1Je%1-Z*lNalZzWW01%2$rd3liSFJa$jJSc1R*a*FjRnBZWTNaWk1qbDBZM*M1ZFZwWE5%Qmpl$*w2$2xkR2$Wa3laM1JrTWxacFR*aENhR0p0$m5OT%1teDFXa2RXTk$4d$$uc*xSMFo1$2pO$2$nPT0"
                    })
                  })
                }, t), reactJsxRuntimeCoreReexport.jsx("div", {
                  className: rr
                })]
              });
            })
          }, t))
        })
      })]
    });
  };
  let rn = e => {
    let {
      size: t,
      icon: o,
      onClick: r,
      popoverDisabled: i = false,
      searchConfig: n,
      visible: a,
      onVisibleChange: l,
      onGenerateImage: c,
      onBeforeGenerateImage: s,
      onFetchImageList: d,
      onUploadImage: _,
      onChangeImage: u,
      autoExecutedType: m,
      ...p
    } = e;
    let h = tS();
    let [g, f] = reactCoreLibraryReexport.useState(false);
    let [x, v] = reactCoreLibraryReexport.useState(false);
    let [y, b] = reactCoreLibraryReexport.useState(false);
    let [w, k] = reactCoreLibraryReexport.useState();
    let [j, C] = reactCoreLibraryReexport.useState();
    let N = !!d;
    let S = async () => {
      if (c) {
        b(true);
        try {
          let e = await c();
          if (e) {
            e.source = null;
            await (u == null ? undefined : u(e));
            return;
          }
          if (e === null) {
            if (u != null) {
              u(null);
            }
            return;
          }
          return e;
        } finally {
          b(false);
        }
      }
    };
    let E = async () => {
      if (_) {
        v(true);
        try {
          let e = await _();
          if (e) {
            if (isUndefinedCheck.isUndefined(e.source)) {
              e.source = null;
            }
            await (u == null ? undefined : u(e));
            return;
          }
          if (e === null) {
            if (u != null) {
              u(null);
            }
            return;
          }
          return e;
        } catch (e) {
          if (m) {
            if (u != null) {
              u(null);
            }
          }
          samanthaToastFactory.toastInstance.error({
            content: h("doc_editor_image_failed_to_upload"),
            top: 68
          });
        } finally {
          v(false);
        }
      }
    };
    let Z = () => {
      f(false);
      v(false);
      b(false);
    };
    let R = [{
      label: h("doc_editor_image_search_web"),
      value: "search_web",
      icon: reactJsxRuntimeCoreReexport.jsx(searchOutlinedIconComponent_1.SearchOutlinedIcon, {}),
      visible: N,
      onClick: () => {
        f(true);
        return false;
      }
    }, {
      label: h("doc_editor_image_image_generate"),
      value: "image_generate",
      icon: reactJsxRuntimeCoreReexport.jsx(rtlSettingsIconComponent.RtlSettingsIcon, {}),
      waitForPromise: true,
      disabled: y,
      loading: y,
      visible: !!s,
      onClick: s
    }, {
      label: h("doc_editor_image_local_update"),
      value: "local_upload",
      icon: reactJsxRuntimeCoreReexport.jsx(codingSkillChatInputIcon.CodingChatInputIcon, {}),
      waitForPromise: true,
      disabled: x,
      loading: x,
      visible: !!_,
      onClick: E
    }];
    let $ = skillPinModalCallback.useSkillPinCallback(async e => {
      let t = await (d == null ? undefined : d(e));
      C(e);
      k(t);
      return t ?? {
        images: []
      };
    });
    let T = async () => {
      let t = {
        src: xssContentSanitizer.sanitizeUrl("", null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1-W1Je%1-Z*lNalZzWW01%2$rd3liSFJa$jJSc1R*a*FjRnBZWTNaWk1qbDBZM*M1ZFZwWE5%Qmpl$*xxW$$kR2RWb3lWWFJo$np*b1dqSlZkRmx1$mpCa1J6bDF%REpzZFZwSFZq%k1ibEo2Wl$kR2$Wb3pWbm89"
        })
      };
      let {
        images: o
      } = await $("");
      let r = arrayFirstElement.getFirstElement(o) ?? t;
      if (u != null) {
        u(r);
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      switch (m) {
        case oh.AutoWebSearch:
          T();
          break;
        case oh.AutoAiSearch:
          S();
          break;
        case oh.AutoLocalUpload:
          E();
      }
    }, [m]);
    return reactJsxRuntimeCoreReexport.jsx(businessSkillBar.BusinessSkillBar, {
      className: "popover-qcdFHW",
      contentClassName: "content-h730T8",
      disabled: (!g || !N) && i,
      options: R,
      defaultValue: "",
      theme: "rounded",
      spacing: 4,
      position: g ? "bottom" : "bottomLeft",
      selectable: false,
      visible: a,
      newIcon: true,
      content: e => {
        let {
          setVisible: t
        } = e;
        return g && d && reactJsxRuntimeCoreReexport.jsx(ri, {
          ...n,
          placeholder: (w == null ? undefined : w.rewrittenQuery) || (n == null ? undefined : n.placeholder),
          initialInput: j,
          initialImages: w == null ? undefined : w.images,
          onFetchImageList: $,
          onCheckImage: e => {
            if (u != null) {
              u(e);
            }
            t(false);
          }
        });
      },
      rePosKey: String(g),
      onVisibleChange: async e => {
        if (l != null) {
          l(e);
        }
        if (!e) {
          await promiseAsyncUtilities.createDelayedPromise(200);
          Z();
        }
      },
      children: e => {
        let {
          setVisible: i
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          size: t ?? "small",
          icon: o ?? reactJsxRuntimeCoreReexport.jsx(refreshRtlIcon.RefreshIcon, {}),
          onClick: e => {
            i(true);
            if (r != null) {
              r(e);
            }
            e.stopPropagation();
          },
          ...p,
          children: h("doc_editor_image_change_image")
        });
      }
    });
  };
  var ra = {
    "display-none-action": "display-none-action-iOUB6E",
    empty: "empty-Hdmz0W"
  };
  let rl = e => {
    let {
      directive: t,
      searchConfig: o,
      onGenerateImage: r,
      onFetchImageList: i,
      onUploadImage: n,
      onChangeImage: a,
      initialSize: l,
      loadingType: c = "search"
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: ra.empty,
      children: [reactJsxRuntimeCoreReexport.jsx(oY, {
        initialSize: l,
        loadingType: c
      }), t && reactJsxRuntimeCoreReexport.jsx("div", {
        className: ra["display-none-action"],
        children: reactJsxRuntimeCoreReexport.jsx(rn, {
          autoExecutedType: t,
          searchConfig: o,
          onGenerateImage: r,
          visible: false,
          onUploadImage: n,
          onFetchImageList: i,
          onChangeImage: a
        })
      })]
    });
  };
  var reactLottiePlayerComponent = require("react-lottie-player-component") /*id: 31951*/;
  var rs = reactLottiePlayerComponent;
  var tooltipWrapperComponent = require("tooltip-wrapper-component") /*id: 379673*/;
  var twoColumnLayoutWithResize = require("two-column-layout-with-resize") /*id: 180797*/;
  var infoCircleIconRtl = require("info-circle-icon-rtl") /*id: 30576*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  var rp = {
    nm: "Flow 1",
    ddd: 0,
    h: 24,
    w: 24,
    meta: {
      g: "LottieFiles Figma v57"
    },
    layers: [{
      ty: 4,
      nm: "06",
      sr: 1,
      st: 0,
      op: 145,
      ip: 0,
      hd: false,
      ddd: 0,
      bm: 0,
      hasMask: false,
      ao: 0,
      ks: {
        a: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [2, 2],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [2, 2],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [2, 2],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [2, 2],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [2, 2],
            t: 144
          }, {
            s: [2, 2],
            t: 168
          }]
        },
        s: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100, 100],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100, 100],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100, 100],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100, 100],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [100, 100],
            t: 144
          }, {
            s: [100, 100],
            t: 168
          }]
        },
        sk: {
          a: 0,
          k: 0
        },
        p: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [9, 7],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [9, 7],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [7, 15],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [7, 15],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [9, 7],
            t: 144
          }, {
            s: [9, 7],
            t: 168
          }]
        },
        r: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [-90],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [-90],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [0],
            t: 144
          }, {
            s: [0],
            t: 168
          }]
        },
        sa: {
          a: 0,
          k: 0
        },
        o: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [100],
            t: 144
          }, {
            s: [100],
            t: 168
          }]
        }
      },
      shapes: [{
        ty: "sh",
        bm: 0,
        hd: false,
        nm: "",
        d: 1,
        ks: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 144
          }, {
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 168
          }]
        }
      }, {
        ty: "fl",
        bm: 0,
        hd: false,
        nm: "",
        c: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0.098, 0.1098, 0.1216],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0.098, 0.1098, 0.1216],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0.098, 0.1098, 0.1216],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0.098, 0.1098, 0.1216],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [0.098, 0.1098, 0.1216],
            t: 144
          }, {
            s: [0.098, 0.1098, 0.1216],
            t: 168
          }]
        },
        r: 1,
        o: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [100],
            t: 144
          }, {
            s: [100],
            t: 168
          }]
        }
      }],
      ind: 1
    }, {
      ty: 4,
      nm: "04",
      sr: 1,
      st: 0,
      op: 145,
      ip: 0,
      hd: false,
      ddd: 0,
      bm: 0,
      hasMask: false,
      ao: 0,
      ks: {
        a: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [2, 2],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [2, 2],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [2, 2],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [2, 2],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [2, 2],
            t: 144
          }, {
            s: [2, 2],
            t: 168
          }]
        },
        s: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100, 100],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100, 100],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100, 100],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100, 100],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [100, 100],
            t: 144
          }, {
            s: [100, 100],
            t: 168
          }]
        },
        sk: {
          a: 0,
          k: 0
        },
        p: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [9, 17],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [9, 17],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [17, 15],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [17, 15],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [9, 17],
            t: 144
          }, {
            s: [9, 17],
            t: 168
          }]
        },
        r: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [-90],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [-90],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [0],
            t: 144
          }, {
            s: [0],
            t: 168
          }]
        },
        sa: {
          a: 0,
          k: 0
        },
        o: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [100],
            t: 144
          }, {
            s: [100],
            t: 168
          }]
        }
      },
      shapes: [{
        ty: "sh",
        bm: 0,
        hd: false,
        nm: "",
        d: 1,
        ks: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 144
          }, {
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 168
          }]
        }
      }, {
        ty: "fl",
        bm: 0,
        hd: false,
        nm: "",
        c: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0, 0, 0],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0, 0, 0],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0, 0, 0],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0, 0, 0],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [0, 0, 0],
            t: 144
          }, {
            s: [0, 0, 0],
            t: 168
          }]
        },
        r: 1,
        o: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [85],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [85],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [85],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [85],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [85],
            t: 144
          }, {
            s: [85],
            t: 168
          }]
        }
      }],
      ind: 2
    }, {
      ty: 4,
      nm: "03",
      sr: 1,
      st: 0,
      op: 145,
      ip: 0,
      hd: false,
      ddd: 0,
      bm: 0,
      hasMask: false,
      ao: 0,
      ks: {
        a: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [2, 2],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [2, 2],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [2, 2],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [2, 2],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [2, 2],
            t: 144
          }, {
            s: [2, 2],
            t: 168
          }]
        },
        s: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100, 100],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100, 100],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100, 100],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100, 100],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [100, 100],
            t: 144
          }, {
            s: [100, 100],
            t: 168
          }]
        },
        sk: {
          a: 0,
          k: 0
        },
        p: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [15, 17],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [15, 17],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [17, 9],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [17, 9],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [15, 17],
            t: 144
          }, {
            s: [15, 17],
            t: 168
          }]
        },
        r: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [-90],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [-90],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [0],
            t: 144
          }, {
            s: [0],
            t: 168
          }]
        },
        sa: {
          a: 0,
          k: 0
        },
        o: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [100],
            t: 144
          }, {
            s: [100],
            t: 168
          }]
        }
      },
      shapes: [{
        ty: "sh",
        bm: 0,
        hd: false,
        nm: "",
        d: 1,
        ks: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 144
          }, {
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 168
          }]
        }
      }, {
        ty: "fl",
        bm: 0,
        hd: false,
        nm: "",
        c: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0, 0, 0],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0, 0, 0],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0, 0, 0],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0, 0, 0],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [0, 0, 0],
            t: 144
          }, {
            s: [0, 0, 0],
            t: 168
          }]
        },
        r: 1,
        o: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [85],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [85],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [85],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [85],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [85],
            t: 144
          }, {
            s: [85],
            t: 168
          }]
        }
      }],
      ind: 3
    }, {
      ty: 4,
      nm: "02",
      sr: 1,
      st: 0,
      op: 145,
      ip: 0,
      hd: false,
      ddd: 0,
      bm: 0,
      hasMask: false,
      ao: 0,
      ks: {
        a: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [2, 2],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [2, 2],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [2, 2],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [2, 2],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [2, 2],
            t: 144
          }, {
            s: [2, 2],
            t: 168
          }]
        },
        s: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100, 100],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100, 100],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100, 100],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100, 100],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [100, 100],
            t: 144
          }, {
            s: [100, 100],
            t: 168
          }]
        },
        sk: {
          a: 0,
          k: 0
        },
        p: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [18, 12],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [18, 12],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [12, 6],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [12, 6],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [18, 12],
            t: 144
          }, {
            s: [18, 12],
            t: 168
          }]
        },
        r: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [-90],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [-90],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [0],
            t: 144
          }, {
            s: [0],
            t: 168
          }]
        },
        sa: {
          a: 0,
          k: 0
        },
        o: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [100],
            t: 144
          }, {
            s: [100],
            t: 168
          }]
        }
      },
      shapes: [{
        ty: "sh",
        bm: 0,
        hd: false,
        nm: "",
        d: 1,
        ks: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 144
          }, {
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 168
          }]
        }
      }, {
        ty: "fl",
        bm: 0,
        hd: false,
        nm: "",
        c: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0, 0, 0],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0, 0, 0],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0, 0, 0],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0, 0, 0],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [0, 0, 0],
            t: 144
          }, {
            s: [0, 0, 0],
            t: 168
          }]
        },
        r: 1,
        o: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [85],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [85],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [85],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [85],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [85],
            t: 144
          }, {
            s: [85],
            t: 168
          }]
        }
      }],
      ind: 4
    }, {
      ty: 4,
      nm: "01",
      sr: 1,
      st: 0,
      op: 145,
      ip: 0,
      hd: false,
      ddd: 0,
      bm: 0,
      hasMask: false,
      ao: 0,
      ks: {
        a: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [2, 2],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [2, 2],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [2, 2],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [2, 2],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [2, 2],
            t: 144
          }, {
            s: [2, 2],
            t: 168
          }]
        },
        s: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100, 100],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100, 100],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100, 100],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100, 100],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [100, 100],
            t: 144
          }, {
            s: [100, 100],
            t: 168
          }]
        },
        sk: {
          a: 0,
          k: 0
        },
        p: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [15, 7],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [15, 7],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [7, 9],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [7, 9],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [15, 7],
            t: 144
          }, {
            s: [15, 7],
            t: 168
          }]
        },
        r: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [-90],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [-90],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [0],
            t: 144
          }, {
            s: [0],
            t: 168
          }]
        },
        sa: {
          a: 0,
          k: 0
        },
        o: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [100],
            t: 144
          }, {
            s: [100],
            t: 168
          }]
        }
      },
      shapes: [{
        ty: "sh",
        bm: 0,
        hd: false,
        nm: "",
        d: 1,
        ks: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 144
          }, {
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 168
          }]
        }
      }, {
        ty: "fl",
        bm: 0,
        hd: false,
        nm: "",
        c: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0, 0, 0],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0, 0, 0],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0, 0, 0],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0, 0, 0],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [0, 0, 0],
            t: 144
          }, {
            s: [0, 0, 0],
            t: 168
          }]
        },
        r: 1,
        o: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [85],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [85],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [85],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [85],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [85],
            t: 144
          }, {
            s: [85],
            t: 168
          }]
        }
      }],
      ind: 5
    }, {
      ty: 4,
      nm: "05",
      sr: 1,
      st: 0,
      op: 145,
      ip: 0,
      hd: false,
      ddd: 0,
      bm: 0,
      hasMask: false,
      ao: 0,
      ks: {
        a: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [2, 2],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [2, 2],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [2, 2],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [2, 2],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [2, 2],
            t: 144
          }, {
            s: [2, 2],
            t: 168
          }]
        },
        s: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100, 100],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100, 100],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100, 100],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100, 100],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [100, 100],
            t: 144
          }, {
            s: [100, 100],
            t: 168
          }]
        },
        sk: {
          a: 0,
          k: 0
        },
        p: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [6, 12],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [6, 12],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [12, 18],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [12, 18],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [6, 12],
            t: 144
          }, {
            s: [6, 12],
            t: 168
          }]
        },
        r: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [-90],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [-90],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [0],
            t: 144
          }, {
            s: [0],
            t: 168
          }]
        },
        sa: {
          a: 0,
          k: 0
        },
        o: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [100],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [100],
            t: 144
          }, {
            s: [100],
            t: 168
          }]
        }
      },
      shapes: [{
        ty: "sh",
        bm: 0,
        hd: false,
        nm: "",
        d: 1,
        ks: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 144
          }, {
            s: [{
              c: true,
              i: [[0, -1.1], [0, 0], [1.1, 0], [0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0]],
              o: [[0, 0], [0, 1.1], [0, 0], [-1.1, 0], [0, 0], [0, -1.1], [0, 0], [1.1, 0]],
              v: [[4, 2], [4, 2], [2, 4], [2, 4], [0, 2], [0, 2], [2, 0], [2, 0]]
            }],
            t: 168
          }]
        }
      }, {
        ty: "fl",
        bm: 0,
        hd: false,
        nm: "",
        c: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0, 0, 0],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0, 0, 0],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0, 0, 0],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [0, 0, 0],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [0, 0, 0],
            t: 144
          }, {
            s: [0, 0, 0],
            t: 168
          }]
        },
        r: 1,
        o: {
          a: 1,
          k: [{
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [85],
            t: 0
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [85],
            t: 24
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [85],
            t: 72
          }, {
            o: {
              x: 0.4,
              y: 0
            },
            i: {
              x: 0,
              y: 1.5
            },
            s: [85],
            t: 96
          }, {
            o: {
              x: 0,
              y: 0
            },
            i: {
              x: 1,
              y: 1
            },
            s: [85],
            t: 144
          }, {
            s: [85],
            t: 168
          }]
        }
      }],
      ind: 6
    }],
    v: "5.7.0",
    fr: 60,
    op: 144,
    ip: 0,
    assets: []
  };
  var rh = {
    container: "container-a_MKe0",
    loading: "loading-OEYegy",
    right: "right-LImoE3",
    invalid: "invalid-vNbHVB",
    content: "content-fXHBDf",
    icon: "icon-voeprR",
    text: "text-xbgGZy",
    left: "left-FBDZDu",
    "close-normal": "close-normal-PJLtI9",
    "solid-button": "solid-button-CbxnSK"
  };
  let rg = e => {
    let {
      className: t,
      style: o,
      invalid: r = false,
      onAutoAddImage: i,
      onChangeImage: n,
      onClose: a,
      onGenerateImage: l,
      onUploadImage: c,
      onFetchImageList: s,
      ...d
    } = e;
    let _ = tS();
    let [u, m] = reactCoreLibraryReexport.useState(false);
    let p = async () => {
      if (!u && !r && i) {
        m(true);
        try {
          let e = await i();
          await (n == null ? undefined : n(e));
        } catch (e) {
          samanthaToastFactory.toastInstance.error({
            content: _("doc_editor_image_failed_to_add"),
            top: 68
          });
        } finally {
          m(false);
        }
      }
    };
    let h = e => {
      e.stopPropagation();
      if (a != null) {
        a();
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(twoColumnLayoutWithResize.TwoColumnLayout, {
      ...throttledOmitPathStringify.omitPathStringify(d, "ref"),
      className: A(rh.container, t, {
        [rh.loading]: u,
        [rh.invalid]: r
      }),
      style: o,
      left: reactJsxRuntimeCoreReexport.jsx("div", {
        className: rh.left
      }),
      content: reactJsxRuntimeCoreReexport.jsx("div", {
        className: rh.content,
        children: r ? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx(infoCircleIconRtl.InfoCircleIcon, {
            className: rh.icon
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: rh.text,
            children: _("doc_editor_image_invalid")
          })]
        }) : u ? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx(rs, {
            animationData: rp,
            className: A(rh.icon, rh.loading)
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: rh.text,
            children: _("doc_editor_image_adding_image")
          })]
        }) : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx(rtlSettingsIconComponent.RtlSettingsIcon, {
            className: rh.icon
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: rh.text,
            children: _("doc_editor_image_add_image")
          })]
        })
      }),
      right: reactJsxRuntimeCoreReexport.jsx("div", {
        className: rh.right,
        children: r ? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx(rn, {
            className: rh["solid-button"],
            onGenerateImage: l,
            onUploadImage: c,
            onFetchImageList: s,
            onChangeImage: n
          }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            className: rh["solid-button"],
            size: "small",
            icon: reactJsxRuntimeCoreReexport.jsx(calculatorIconComponent.CalculatorIcon, {}),
            onClick: h
          })]
        }) : reactJsxRuntimeCoreReexport.jsx(tooltipWrapperComponent.TooltipWrapper, {
          content: _("doc_editor_image_delete"),
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: rh["close-normal"],
            children: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
              className: rh.icon,
              onClick: h
            })
          })
        })
      }),
      onClick: p
    });
  };
  var smartTextareaWithFormFieldWrapper = require("smart-textarea-with-form-field-wrapper") /*id: 126704*/;
  var skillBarIconComponent = require("skill-bar-icon-component") /*id: 278022*/;
  var arrowDownIcon = require("arrow-down-icon") /*id: 158729*/;
  var ry = {
    panel: "panel-IcYsPG",
    left: "left-oMimNh",
    icon: "icon-z4rptm",
    container: "container-hLYBm9",
    input: "input-ZNNkYc",
    right: "right-Exdpns",
    action: "action-Vdkhuc",
    popover: "popover-NR1A_c",
    loading: "loading-bQ_fCU",
    popoverContent: "popoverContent-p85H6H"
  };
  let rb = e => {
    let {
      children: t,
      isGenerateShow: o,
      closeGeneratePanel: r,
      getCurrentSize: i,
      onGenerateImage: n,
      onChangeImage: a
    } = e;
    let l = tR();
    let [c, s] = reactCoreLibraryReexport.useState();
    let [d, _] = reactCoreLibraryReexport.useState();
    let u = reactCoreLibraryReexport.useRef(null);
    let [m, {
      setTrue: p,
      setFalse: h
    }] = useBooleanHook.useBoolean(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (o) {
        g();
      }
    }, [o]);
    let g = () => {
      var e;
      let {
        currentParagraph: o,
        preParagraph: r,
        nextParagraph: n
      } = (l == null ? undefined : l.getParagraphContext()) ?? {};
      s(c || o || r || n);
      if ((e = u.current) !== null && e !== undefined) {
        e.focus();
      }
      _(i == null ? undefined : i());
    };
    let f = async () => {
      if (c) {
        if (r != null) {
          r();
        }
        if (n) {
          p();
          try {
            let e = await n(c);
            if (e) {
              e.source = null;
              await (a == null ? undefined : a(e));
              return;
            }
            if (e === null) {
              if (a != null) {
                a(null);
              }
              return;
            }
          } finally {
            s("");
            h();
          }
        }
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
      className: ry.popover,
      visible: o,
      trigger: "custom",
      content: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: ry.panel,
        style: {
          width: d == null ? undefined : d.width
        },
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: ry.left,
          children: reactJsxRuntimeCoreReexport.jsx(skillBarIconComponent.SkillBarIcon, {
            className: ry.icon
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: ry.container,
          children: reactJsxRuntimeCoreReexport.jsx(smartTextareaWithFormFieldWrapper.SmartTextArea, {
            rows: 3,
            hideScrollBar: true,
            ref: u,
            className: ry.input,
            value: c,
            onChange: s,
            onEnterPress: e => {
              if (e != null) {
                e.preventDefault();
              }
              f();
            }
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: ry.right,
          children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
            type: "primary",
            size: "small",
            disabled: !c,
            className: ry.action,
            onClick: f,
            icon: reactJsxRuntimeCoreReexport.jsx(arrowDownIcon.ArrowDownIcon, {})
          })
        })]
      }),
      onClickOutSide: r,
      position: "bottom",
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: ry.popoverContent,
        children: [m && reactJsxRuntimeCoreReexport.jsx("div", {
          className: ry.loading,
          children: reactJsxRuntimeCoreReexport.jsx(oY, {
            loadingType: "generate",
            initialSize: d
          })
        }), t]
      })
    });
  };
  var rtlExpandFrameIcon = require("rtl-expand-frame-icon") /*id: 59653*/;
  var docPanelRtlIcon = require("doc-panel-rtl-icon") /*id: 180128*/;
  var docPanelOutlinedIcon = require("doc-panel-outlined-icon") /*id: 941841*/;
  var frameBorderIcon = require("frame-border-icon") /*id: 362911*/;
  var canvasDocPanelIcon = require("canvas-doc-panel-icon") /*id: 850372*/;
  let rS = e => {
    let {
      icon: t,
      size: o,
      onClick: r,
      value: i,
      onChange: n,
      popoverDisabled: a = false,
      visible: l,
      onVisibleChange: c,
      ...s
    } = e;
    let d = tS();
    let _ = [{
      label: d("doc_editor_image_origin_scale"),
      value: "raw",
      icon: reactJsxRuntimeCoreReexport.jsx(rtlExpandFrameIcon.RtlExpandFrameIcon, {})
    }, {
      label: "16:9",
      value: "16-9",
      icon: reactJsxRuntimeCoreReexport.jsx(docPanelRtlIcon.DocPanelRtlIcon, {})
    }, {
      label: "4:3",
      value: "4-3",
      icon: reactJsxRuntimeCoreReexport.jsx(docPanelOutlinedIcon.DocPanelOutlined, {})
    }, {
      label: "1:1",
      value: "1-1",
      icon: reactJsxRuntimeCoreReexport.jsx(frameBorderIcon.FrameBorderIcon, {})
    }];
    return reactJsxRuntimeCoreReexport.jsx(businessSkillBar.BusinessSkillBar, {
      className: "popover-eY3Cba",
      contentClassName: "content-YKUTd5",
      itemClassName: "option-item-vZaSOr",
      disabled: a,
      title: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "title-lJ6Z5j",
        children: d("doc_editor_image_scale")
      }),
      options: _,
      defaultValue: "raw",
      spacing: 4,
      position: "bottomLeft",
      value: i,
      onChange: n,
      visible: l,
      onVisibleChange: c,
      newIcon: true,
      children: e => {
        let {
          option: i,
          setVisible: n
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          size: o ?? "small",
          icon: t ?? reactJsxRuntimeCoreReexport.jsx(canvasDocPanelIcon.CanvasDocPanelIcon, {}),
          onClick: e => {
            n(true);
            if (r != null) {
              r(e);
            }
          },
          ...s,
          children: i == null ? undefined : i.label
        });
      }
    });
  };
  var rE = {
    container: "container-gDzqGo",
    editable: "editable-onArDm",
    hover: "hover-RU_gIS",
    overlay: "overlay-dLrGnj",
    "auto-hide": "auto-hide-D0VmPT",
    error: "error-YrG84d",
    button: "button-sMxO_I",
    "display-none": "display-none-v9_kSi",
    fall: "fall-U1LpeQ",
    icon: "icon-tFAvn_",
    image: "image-PdFdmh",
    operation: "operation-OrwBPk",
    "source-tag": "source-tag-qaesRd"
  };
  let rZ = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: o,
      style: r,
      imageConfig: i = {},
      scaleConfig: n = {},
      editable: a = true,
      resizable: l = false,
      showSourceTag: c = true,
      invalid: s = false,
      initialSize: d,
      directive: _,
      maxWidth: u,
      onGenerateImage: m,
      onUploadImage: p,
      onAutoAddImage: h,
      onFetchImageList: g,
      onClose: f,
      onCheckImageValid: x,
      onResize: v,
      onClickOutside: y,
      searchConfig: b,
      ...w
    } = e;
    let k = tS();
    let j = tR();
    let C = reactCoreLibraryReexport.useRef(null);
    let N = reactCoreLibraryReexport.useRef(null);
    let [S, E] = reactCoreLibraryReexport.useState(true);
    let [Z, R] = reactCoreLibraryReexport.useState(false);
    let [$, T] = reactCoreLibraryReexport.useState(false);
    let [F, W] = reactCoreLibraryReexport.useState(true);
    let M = !s && F;
    let P = !S && a;
    let L = P && l;
    let [O, K] = useControlledStateHook.useControlledState(objectDefaultsUtil.defaults(syncedReferenceBlockManager.syncReferenceBlock(i), oG));
    let [H, {
      setTrue: J,
      setFalse: G
    }] = useBooleanHook.useBoolean(false);
    let [V, X] = reactCoreLibraryReexport.useState(O == null ? undefined : O.src);
    let [q, U] = reactCoreLibraryReexport.useState(V);
    let [Y, Q] = useControlledStateHook.useControlledState(objectDefaultsUtil.defaults(syncedReferenceBlockManager.syncReferenceBlock(n), oV));
    let [ee, et] = reactCoreLibraryReexport.useState(false);
    let [eo, er] = reactCoreLibraryReexport.useState(false);
    let ei = collectionIncludesUtil.includes([og.LoadByAutoAddAndUpdate, og.LoadById, og.LoadByKey], O == null ? undefined : O.type);
    let en = (!!isNullishCheck.isNil(V) || !M) && !ei;
    let ea = O && oJ(O);
    let el = og.LoadById === (O == null ? undefined : O.type);
    let {
      alt: ec
    } = O ?? {};
    useClickOutsideHook.useClickOutside(C.current, e => {
      if (!ee && !eo) {
        if (y != null) {
          y(e);
        }
      }
    });
    let es = async () => {
      var e;
      var t;
      if ((O == null ? undefined : O.type) === og.LoadById) {
        let t = await ((e = j.image) === null || e === undefined ? undefined : e.loadImageById({
          id: O == null ? undefined : O.id
        }));
        if (t == null ? undefined : t.src) {
          X(t == null ? undefined : t.src);
          ed(t);
        } else if (f != null) {
          f();
        }
        return;
      }
      if ((O == null ? undefined : O.type) === og.LoadByKey) {
        let e = await ((t = j.image) === null || t === undefined ? undefined : t.loadImageByKey({
          key: O == null ? undefined : O.key
        }));
        if (e == null ? undefined : e.src) {
          X(e == null ? undefined : e.src);
          ed(e);
        } else if (f != null) {
          f();
        }
        return;
      }
      if ((O == null ? undefined : O.type) === og.LoadByAutoAddAndUpdate) {
        let e = await (h == null ? undefined : h());
        if (e) {
          X(e.src);
          ed(e);
        }
        return;
      }
      if ((O == null ? undefined : O.type) === og.LoadBySrc) {
        X(O.src);
        return;
      }
      X(O == null ? undefined : O.src);
    };
    reactCoreLibraryReexport.useEffect(() => {
      es();
    }, [O]);
    let ed = async e => {
      if (e === null) {
        if (en) {
          if (f != null) {
            f();
          }
        }
        return;
      }
      if ((await (x == null ? undefined : x(e))) === false) {
        W(false);
        return;
      }
      K(e);
    };
    reactCoreLibraryReexport.useEffect(() => {
      W(true);
    }, [O]);
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      if ((e = j.image) !== null && e !== undefined) {
        e.processImageBeforeLoad(V).then(e => {
          U(e || V);
        }).catch(() => {
          U(V);
        });
      }
    }, [V, j]);
    if (en && _) {
      return reactJsxRuntimeCoreReexport.jsx(rl, {
        initialSize: d,
        loadingType: oh.AutoAiSearch === _ ? "generate" : "search",
        directive: _,
        searchConfig: b,
        onClose: f,
        onGenerateImage: m,
        onFetchImageList: g,
        onUploadImage: p,
        onChangeImage: ed
      });
    } else if (en) {
      return reactJsxRuntimeCoreReexport.jsx(rg, {
        ...w,
        className: o,
        style: r,
        invalid: !M,
        onClose: f,
        onAutoAddImage: h,
        onGenerateImage: m,
        onFetchImageList: g,
        onUploadImage: p,
        onChangeImage: ed
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(rb, {
        isGenerateShow: H,
        closeGeneratePanel: G,
        onGenerateImage: m,
        onChangeImage: ed,
        getCurrentSize: () => {
          var e;
          if ((e = N.current) === null || e === undefined) {
            return undefined;
          } else {
            return e.getSize();
          }
        },
        children: reactJsxRuntimeCoreReexport.jsx(oF, {
          ref: N,
          active: L && !Z,
          onResize: e => {
            let {
              size: t
            } = e;
            G();
            if (v != null) {
              v(t);
            }
          },
          initialWidth: d == null ? undefined : d.width,
          initialHeight: d == null ? undefined : d.height,
          maxWidth: u,
          children: reactJsxRuntimeCoreReexport.jsxs(oz, {
            ref: e => {
              if (isFunctionUtil_1.isFunction(t)) {
                t(e);
              } else if (t) {
                t.current = e;
              }
              C.current = e;
            },
            ...throttledOmitPathStringify.omitPathStringify(w, "ref"),
            className: A(rE.container, o, {
              [rE.editable]: P,
              [rE.hover]: $ || eo,
              [rE.error]: Z
            }),
            style: r,
            scale: oX[Y],
            onMouseEnter: () => {
              T(true);
            },
            onMouseLeave: () => {
              T(false);
            },
            children: [reactJsxRuntimeCoreReexport.jsx(semiImageComponent.SemiImage, {
              className: A(rE.image, {
                [rE.error]: Z
              }),
              src: xssContentSanitizer.sanitizeUrl(q, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1-W1Je%1-Z*lNalZzWW01%2$rd3liSFJa$jJSc1R*a*FjRnBZWTNaaFZ6$nJXb*huZFdSS$Rq%lpXRXB1WkZoTlBRPT0"
              }),
              alt: ec,
              onLoad: e => {
                E(false);
                R(false);
                if (!N.current || !u) {
                  return;
                }
                let {
                  width: t,
                  height: o
                } = e.target.getBoundingClientRect();
                if (o / t < 3 / 4) {
                  N.current.setSize({
                    width: u,
                    height: u / t * o
                  });
                } else {
                  N.current.setSize({
                    width: 525 / o * t,
                    height: 525
                  });
                }
              },
              preview: false,
              style: S || Z ? {
                width: u,
                height: u && u / 2
              } : undefined,
              fallback: reactJsxRuntimeCoreReexport.jsx("div", {
                className: rE.fall,
                children: reactJsxRuntimeCoreReexport.jsx(rtlChatIcon.RtlChatIcon, {
                  className: rE.icon
                })
              }),
              onError: () => {
                E(false);
                R(true);
              },
              placeholder: reactJsxRuntimeCoreReexport.jsx(oY, {
                loadingType: el ? "generate" : "search"
              })
            }), P && reactJsxRuntimeCoreReexport.jsxs("div", {
              className: rE.overlay,
              children: [reactJsxRuntimeCoreReexport.jsxs("div", {
                className: rE.operation,
                children: [reactJsxRuntimeCoreReexport.jsx(rS, {
                  className: A(rE.button, rE["auto-hide"], {
                    [rE["display-none"]]: Z
                  }),
                  popoverDisabled: !$,
                  value: Y,
                  onChange: Q,
                  visible: ee,
                  onVisibleChange: et
                }), reactJsxRuntimeCoreReexport.jsx(rn, {
                  className: A(rE.button, rE["auto-hide"]),
                  popoverDisabled: !$,
                  searchConfig: b,
                  visible: eo,
                  onVisibleChange: er,
                  onBeforeGenerateImage: J,
                  onFetchImageList: g,
                  onUploadImage: p,
                  onChangeImage: ed
                }), reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
                  position: "top",
                  content: reactJsxRuntimeCoreReexport.jsx("span", {
                    className: "flex items-center",
                    children: k("doc_editor_image_delete")
                  }),
                  children: reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
                    className: A(rE.button, rE["auto-hide"]),
                    size: "small",
                    icon: reactJsxRuntimeCoreReexport.jsx(calculatorIconComponent.CalculatorIcon, {}),
                    onClick: f
                  })
                })]
              }), c && !Z && ea && reactJsxRuntimeCoreReexport.jsx("div", {
                className: A(rE["source-tag"], rE["auto-hide"]),
                children: ea
              })]
            })]
          })
        })
      });
    }
  });
  let rR = e => {
    let {
      className: t,
      style: o,
      editor: r,
      zoneId: i,
      uuid: n,
      initialImage: a,
      initialScale: l,
      directive: c,
      initialWidth: s,
      initialHeight: d,
      lineState: _,
      docRootRef: u,
      ...m
    } = e;
    let {
      ref: p,
      width: h = 700
    } = resizeObserverHooks.useResizeObserverEx();
    let [g, f] = reactCoreLibraryReexport.useState(() => r.isEditable());
    let [x, v] = reactCoreLibraryReexport.useState(false);
    let [y, b] = reactCoreLibraryReexport.useState(false);
    let [w, k] = reactCoreLibraryReexport.useState(a || null);
    let [j, C] = reactCoreLibraryReexport.useState(l ?? "raw");
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      var t;
      if (!r) {
        return;
      }
      let o = (e = r.virtualListManager) === null || e === undefined ? undefined : e.getVirtualListModuleOfZone(i);
      if (!(o == null ? undefined : o.isEnabled)) {
        return;
      }
      let n = _ == null ? undefined : (t = _.getNode()) === null || t === undefined ? undefined : t.querySelector("img");
      if (_ && n && !n.complete) {
        n.addEventListener("load", () => {
          o.notifyInnerNodeLayoutUpdate(_);
        }, {
          once: true
        });
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      let e = e => {
        f(e.current);
      };
      r.on(editorEventConstants.editorEventTypes.EDITABLE_CHANGE, e);
      return () => {
        r.off(editorEventConstants.editorEventTypes.EDITABLE_CHANGE, e);
      };
    }, [r]);
    reactCoreLibraryReexport.useEffect(() => {
      b(x);
    }, [x]);
    reactUseUpdateEffect.useUpdateEffect(() => {
      ok({
        editor: r,
        id: n,
        zoneId: i,
        value: w
      });
    }, [w]);
    reactUseUpdateEffect.useUpdateEffect(() => {
      ok({
        editor: r,
        zoneId: i,
        id: n,
        scale: j
      });
    }, [j]);
    let {
      run: N
    } = useDebouncedCallbackHook_1.useDebouncedCallback(e => {
      ok({
        editor: r,
        zoneId: i,
        id: n,
        size: e
      });
    }, {
      leading: false,
      trailing: true,
      wait: 500
    });
    let S = s && d ? {
      width: s,
      height: d
    } : undefined;
    return reactJsxRuntimeCoreReexport.jsx(editorLeafTextComponent.LeafTextWithContext, {
      className: A(t, "container-vSxs3T"),
      style: o,
      onSelect: () => {
        v(true);
      },
      onDeselect: () => {
        v(false);
      },
      disableDefaultSelected: true,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        ref: p,
        className: "inner-aY9PDS",
        children: reactJsxRuntimeCoreReexport.jsx(rZ, {
          ...m,
          resizable: g && x && y,
          editable: g,
          imageConfig: {
            value: w,
            onChange: k
          },
          scaleConfig: {
            value: j,
            onChange: C
          },
          initialSize: S ?? (c ? {
            width: h,
            height: 390
          } : undefined),
          directive: c,
          maxWidth: h || undefined,
          onResize: N,
          onClose: () => {
            oj({
              editor: r,
              zoneId: i,
              id: n
            });
          },
          onClickOutside: e => {
            let {
              clientX: o,
              clientY: i
            } = e;
            if (oC({
              editor: r
            }) && oN({
              element: (u == null ? undefined : u.current) ?? undefined,
              pointX: o,
              pointY: i
            })) {
              b(false);
            }
          },
          onClick: () => {
            b(true);
          }
        })
      })
    });
  };
  function r$(e, t, o) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var o = e[Symbol.toPrimitive];
      if (o !== undefined) {
        var r = o.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = o;
    }
    return e;
  }
  j = editorPluginManager.createPriority(999);
  C = reactDomContextDecorator.withContextConsumer();
  N = class e extends richTextEditorImagePlugin.ImagePlugin {
    match(t) {
      return t === e.KEY;
    }
    _oldDataToNewData(e) {
      if (!e[richTextEditorImagePlugin.ImagePlugin.KEY] || e[richTextEditorImagePlugin.ImagePlugin.KEY] === "true") {
        return e;
      }
      try {
        let t = JSON.parse(e[richTextEditorImagePlugin.ImagePlugin.KEY]);
        e = {
          ...t.attributes,
          [richTextEditorImagePlugin.ImagePlugin.KEY]: "true",
          src: xssContentSanitizer.sanitizeUrl(t.src, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1ZDJKS$ZtNWhWel-2$EROT2JHSnRiSFpq-$R*d1lsZEdibHB%T1hCaWJWSnNa$%0xT%dNemFHa*pi$1F4WTNjO$BRPT0"
          }),
          uuid: randomStringGenerator.createRandomString(8)
        };
      } catch (e) {}
      return e;
    }
    render(e) {
      let {
        attributes: t,
        lineState: o
      } = e;
      let {
        src: r,
        alt: i,
        source: n,
        uuid: a,
        scale: l,
        width: c,
        height: s,
        directive: d
      } = this._oldDataToNewData(t);
      let _ = o.getZoneId();
      e.key = `${a}_${!!r}`;
      let {
        type: u,
        width: m,
        height: p,
        id: h,
        key: g
      } = ov(i);
      let f = {
        src: r,
        alt: i,
        source: of(n),
        type: u,
        id: h,
        key: g
      };
      return reactJsxRuntimeCoreReexport.jsx(tZ, {
        value: this.docEditor,
        children: reactJsxRuntimeCoreReexport.jsx(tC, {
          value: this.i18n,
          children: reactJsxRuntimeCoreReexport.jsx(rR, {
            ...this.extraConfig,
            editor: this.editor,
            zoneId: _,
            uuid: a,
            initialImage: f,
            initialScale: l,
            directive: d,
            initialWidth: infraUtilFunctions.parseNumber(c || m),
            initialHeight: infraUtilFunctions.parseNumber(s || p),
            lineState: o,
            docRootRef: this.docRootRef,
            contentEditable: false,
            suppressContentEditableWarning: true
          })
        })
      });
    }
    constructor(e) {
      var t;
      let {
        editor: o,
        docEditor: r,
        onAutoAddImage: i,
        onFetchImageList: n,
        onGenerateImage: a,
        onUploadImage: l,
        onCheckImageValid: c,
        i18n: s,
        docRootRef: d
      } = e;
      super({
        editor: o
      });
      r$(this, "editor", undefined);
      r$(this, "docEditor", undefined);
      r$(this, "extraConfig", undefined);
      r$(this, "i18n", undefined);
      r$(this, "docRootRef", undefined);
      this.editor = o;
      this.docEditor = r;
      this.i18n = s;
      this.extraConfig = {
        onAutoAddImage: i,
        onFetchImageList: n,
        onGenerateImage: a,
        onUploadImage: l,
        onCheckImageValid: c
      };
      this.docRootRef = d;
      if ((t = this.destroy) !== null && t !== undefined) {
        t.call(this);
      }
    }
  };
  r$(N, "KEY", "image");
  n = N.prototype;
  a = "render";
  l = [j, C];
  c = Object.getOwnPropertyDescriptor(N.prototype, "render");
  s = N.prototype;
  d = {};
  Object.keys(c).forEach(function (e) {
    d[e] = c[e];
  });
  d.enumerable = !!d.enumerable;
  d.configurable = !!d.configurable;
  if ("value" in d || d.initializer) {
    d.writable = true;
  }
  d = l.slice().reverse().reduce(function (e, t) {
    return t(n, a, e) || e;
  }, d);
  if (s && d.initializer !== undefined) {
    d.value = d.initializer ? d.initializer.call(s) : undefined;
    d.initializer = undefined;
  }
  if (d.initializer === undefined) {
    Object.defineProperty(n, a, d);
  }
  let rT = N;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var writingMoveLottieLazyLoader = require("writing-move-lottie-lazy-loader") /*id: 608838*/;
  var rW = {
    container: "container-Gk20pE",
    "icon-wrapper": "icon-wrapper-kaqWCC",
    icon: "icon-EwjTZK",
    title: "title-B4khOK"
  };
  let rz = e => {
    let {
      className: t,
      style: o,
      title: r,
      icon: i
    } = e;
    let n = tS();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: A(rW.container, t),
      style: o,
      children: [i !== false && (i ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: rW["icon-wrapper"],
        children: i
      }) : reactJsxRuntimeCoreReexport.jsx(writingMoveLottieLazyLoader.WritingMoveLottieComponent, {
        className: rW.icon
      })), reactJsxRuntimeCoreReexport.jsx("div", {
        className: rW.title,
        children: r ?? n("doc_editor_ai_writing")
      })]
    });
  };
  var rM = {
    container: "container-VC45cE",
    "color-blue": "color-blue-CPBZu5",
    colorBlue: "color-blue-CPBZu5",
    "color-grey": "color-grey-Jzd39z",
    colorGrey: "color-grey-Jzd39z",
    "loading-bar": "loading-bar-rcaIHI",
    loadingBar: "loading-bar-rcaIHI",
    "skeleton-loading": "skeleton-loading-WwaQch",
    skeletonLoading: "skeleton-loading-WwaQch",
    large: "large-Msd6a6",
    middle: "middle-CedfCh",
    small: "small-chL347"
  };
  let rP = e => {
    let {
      className: t,
      style: o,
      loadingTitle: r,
      showStreamingTag: i = true,
      size: n = "middle",
      color: a = "blue"
    } = e;
    let l = tS();
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: A(rM.container, t, rM[`color-${a}`]),
      style: o,
      children: [n === "middle" && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: A(rM["loading-bar"], rM.middle)
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: A(rM["loading-bar"], rM.small)
        })]
      }), n === "large" && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: A(rM["loading-bar"], rM.large)
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: A(rM["loading-bar"], rM.middle)
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: A(rM["loading-bar"], rM.small)
        })]
      }), i && reactJsxRuntimeCoreReexport.jsx(rz, {
        title: r ?? l("doc_editor_ai_writing")
      })]
    });
  };
  function rL(e, t, o) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var o = e[Symbol.toPrimitive];
      if (o !== undefined) {
        var r = o.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = o;
    }
    return e;
  }
  class rB extends baseRendererClass.BaseRenderer {
    match(e) {
      return e === rB.KEY;
    }
    render() {
      return reactJsxRuntimeCoreReexport.jsx(tC, {
        value: this.i18n,
        children: reactJsxRuntimeCoreReexport.jsx(editorLeafTextComponent.LeafTextWithContext, {
          children: reactJsxRuntimeCoreReexport.jsx(rP, {})
        })
      });
    }
    constructor(e = {}) {
      let {
        i18n: t
      } = e;
      super();
      rL(this, "i18n", undefined);
      this.i18n = t;
    }
  }
  rL(rB, "KEY", "clientside-generating_skeleton");
  var clipboardCopyHelper = require("clipboard-copy-helper") /*id: 735474*/;
  var rA = clipboardCopyHelper;
  var prismCodeBlockHighlighterComponent = require("prism-code-block-highlighter-component") /*id: 360333*/;
  var blockTypeConstants = require("block-type-constants") /*id: 403997*/;
  var diagramCodePanelComponent = require("diagram-code-panel-component") /*id: 179830*/;
  var mindmapComponent_1 = require("mindmap-component_1") /*id: 805794*/;
  var doubaoConfigConstants_1 = require("doubao-config-constants_1") /*id: 234080*/;
  let rV = {
    flow_web_ext_search_mindmap_download: "doc_editor_diagram_download_image",
    flow_web_ext_search_mindmap_copy: "doc_editor_diagram_copy_image",
    flow_web_ext_mindmap_copy_rich_text: "doc_editor_diagram_copy_rich_text",
    flow_web_ext_search_mindmap_zoom_in: "doc_editor_diagram_zoom_in",
    flow_web_ext_search_mindmap_zoom_out: "doc_editor_diagram_zoom_out",
    flow_web_ext_search_mindmap_fit: "doc_editor_diagram_zoom_fit",
    flow_web_ext_close_upper_case: "doc_editor_diagram_close"
  };
  let rX = e => {
    let {
      value: t,
      active: o
    } = e;
    let r = tS();
    let i = reactCoreLibraryReexport.useRef(null);
    return reactJsxRuntimeCoreReexport.jsx(diagramCodePanelComponent.DiagramCodePanel, {
      className: A("container-NtiwU1", {
        "active-P6M3ct": o
      }),
      i18nConfig: {
        diagramTitle: r("doc_editor_diagram_tab_image"),
        codeTitle: r("doc_editor_diagram_tab_code"),
        downloadImage: r("doc_editor_diagram_download_image"),
        copyImage: r("doc_editor_diagram_copy_image"),
        copyRichText: r("doc_editor_diagram_copy_rich_text"),
        zoomIn: r("doc_editor_diagram_zoom_in"),
        zoomOut: r("doc_editor_diagram_zoom_out"),
        fitPage: r("doc_editor_diagram_zoom_fit"),
        fullscreenView: r("doc_editor_diagram_full_screen_view"),
        copyText: r("doc_editor_diagram_copy_text"),
        copyDoneText: r("doc_editor_diagram_copy_success")
      },
      onDownloadImage: () => {
        var e;
        var t;
        if ((t = i.current) !== null && t !== undefined && (e = t.downloadImage) !== null && e !== undefined) {
          e.call(t);
        }
      },
      onCopyImage: () => {
        var e;
        var t;
        if ((t = i.current) !== null && t !== undefined && (e = t.copyImage) !== null && e !== undefined) {
          e.call(t);
        }
      },
      onCopyHtml: () => {
        var e;
        var t;
        if ((t = i.current) !== null && t !== undefined && (e = t.copyHtml) !== null && e !== undefined) {
          e.call(t);
        }
      },
      onZoomOut: () => {
        var e;
        var t;
        if ((t = i.current) !== null && t !== undefined && (e = t.zoomOut) !== null && e !== undefined) {
          e.call(t);
        }
      },
      onZoomIn: () => {
        var e;
        var t;
        if ((t = i.current) !== null && t !== undefined && (e = t.zoomIn) !== null && e !== undefined) {
          e.call(t);
        }
      },
      onZoomFit: () => {
        var e;
        var t;
        if ((t = i.current) !== null && t !== undefined && (e = t.zoomFit) !== null && e !== undefined) {
          e.call(t);
        }
      },
      onFullScreenEnter: e => {
        if (e === blockTypeConstants.blockTypes.Diagram) {
          var t;
          var o;
          if ((o = i.current) !== null && o !== undefined && (t = o.enterFullscreen) !== null && t !== undefined) {
            t.call(o);
          }
          return;
        }
      },
      onCopyText: () => {
        rA(t);
      },
      diagram: reactJsxRuntimeCoreReexport.jsx(mindmapComponent_1.default, {
        value: t,
        actionButtonRef: i,
        isDone: true,
        hideAction: true,
        t: (e, t) => {
          return r(rV[e]) ?? t;
        },
        handleRetry: emptyExportFunction.emptyFunction,
        extName: doubaoConfigConstants_1.productNameChinese,
        iconUrl: "",
        minHeight: 338,
        maxHeight: 338
      }),
      code: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "code-XzT4Dw",
        children: reactJsxRuntimeCoreReexport.jsx(prismCodeBlockHighlighterComponent.PrismCodeBlockHighlighter, {
          code: t
        })
      })
    });
  };
  let rq = e => {
    let {
      className: t,
      style: o,
      value: r
    } = e;
    let [i, n] = reactCoreLibraryReexport.useState(false);
    return reactJsxRuntimeCoreReexport.jsx(editorLeafTextComponent.LeafTextWithContext, {
      className: A(t, "container-U1sIHk"),
      style: o,
      disableDefaultSelected: true,
      autoSelectOnClick: false,
      onSelect: () => {
        n(true);
      },
      onDeselect: () => {
        n(false);
      },
      children: reactJsxRuntimeCoreReexport.jsx(rX, {
        value: r,
        active: i
      })
    });
  };
  function rU(e, t, o) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var o = e[Symbol.toPrimitive];
      if (o !== undefined) {
        var r = o.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = o;
    }
    return e;
  }
  S = editorPluginManager.createPriority(999);
  E = reactDomContextDecorator.withContextConsumer();
  Z = class e extends baseRendererClass.BaseRenderer {
    match(t) {
      return t === e.KEY;
    }
    render(e) {
      let {
        attributes: t = {}
      } = e;
      let {
        mindmap: o,
        id: r
      } = t;
      e.key = r;
      return reactJsxRuntimeCoreReexport.jsx(tC, {
        value: this.i18n,
        children: reactJsxRuntimeCoreReexport.jsx(rq, {
          value: o
        })
      });
    }
    constructor(e = {}) {
      let {
        i18n: t
      } = e;
      super();
      rU(this, "i18n", undefined);
      this.i18n = t;
    }
  };
  rU(Z, "KEY", "mindmap");
  _ = Z.prototype;
  u = "render";
  m = [S, E];
  p = Object.getOwnPropertyDescriptor(Z.prototype, "render");
  h = Z.prototype;
  g = {};
  Object.keys(p).forEach(function (e) {
    g[e] = p[e];
  });
  g.enumerable = !!g.enumerable;
  g.configurable = !!g.configurable;
  if ("value" in g || g.initializer) {
    g.writable = true;
  }
  g = m.slice().reverse().reduce(function (e, t) {
    return t(_, u, e) || e;
  }, g);
  if (h && g.initializer !== undefined) {
    g.value = g.initializer ? g.initializer.call(h) : undefined;
    g.initializer = undefined;
  }
  if (g.initializer === undefined) {
    Object.defineProperty(_, u, g);
  }
  let rY = Z;
  var imageExportHook = require("image-export-hook") /*id: 714582*/;
  var mindmapExportCard = require("mindmap-export-card") /*id: 244147*/;
  var mermaidDiagramZoomableRenderer = require("mermaid-diagram-zoomable-renderer") /*id: 935111*/;
  var diagramFullscreenContainer = require("diagram-fullscreen-container") /*id: 709999*/;
  let r4 = e => {
    let {
      value: t,
      active: o = false
    } = e;
    let r = tS();
    let i = reactCoreLibraryReexport.useRef(null);
    let n = reactCoreLibraryReexport.useRef(null);
    let [a, l] = reactCoreLibraryReexport.useState(false);
    let {
      svgContainerRef: c,
      brandAreaRef: s,
      downloadImage: d,
      copyImage: _
    } = imageExportHook.useImageExport();
    let u = e => {
      if (e === blockTypeConstants.blockTypes.Diagram) {
        l(true);
        return;
      }
    };
    let m = reactCoreLibraryReexport.useMemo(() => ({
      errorText: r("doc_editor_diagram_error")
    }), [r]);
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx(diagramCodePanelComponent.DiagramCodePanel, {
        className: A("container-oMwHIW", {
          "active-q6KFOX": o
        }),
        onZoomIn: () => {
          var e;
          if ((e = i.current) !== null && e !== undefined) {
            e.zoomIn();
          }
        },
        onZoomOut: () => {
          var e;
          if ((e = i.current) !== null && e !== undefined) {
            e.zoomOut();
          }
        },
        onZoomFit: () => {
          var e;
          if ((e = i.current) !== null && e !== undefined) {
            e.fit();
          }
        },
        onCopyText: () => {
          rA(t);
        },
        onTabChange: e => {
          if (e === blockTypeConstants.blockTypes.Diagram) {
            var t;
            if ((t = i.current) !== null && t !== undefined) {
              t.fit();
            }
          }
        },
        onFullScreenEnter: u,
        onDownloadImage: d,
        onCopyImage: _,
        enableCopyRichText: false,
        i18nConfig: {
          diagramTitle: r("doc_editor_diagram_tab_image"),
          codeTitle: r("doc_editor_diagram_tab_code"),
          downloadImage: r("doc_editor_diagram_download_image"),
          copyImage: r("doc_editor_diagram_copy_image"),
          copyRichText: r("doc_editor_diagram_copy_rich_text"),
          zoomIn: r("doc_editor_diagram_zoom_in"),
          zoomOut: r("doc_editor_diagram_zoom_out"),
          fitPage: r("doc_editor_diagram_zoom_fit"),
          fullscreenView: r("doc_editor_diagram_full_screen_view"),
          copyText: r("doc_editor_diagram_copy_text"),
          copyDoneText: r("doc_editor_diagram_copy_success")
        },
        diagram: reactJsxRuntimeCoreReexport.jsx(mermaidDiagramZoomableRenderer.ZoomableMermaidDiagram, {
          chart: t,
          ref: i,
          loading: false,
          i18nConfig: m
        }),
        code: reactJsxRuntimeCoreReexport.jsx("div", {
          className: "code-OgDaJq",
          children: reactJsxRuntimeCoreReexport.jsx(prismCodeBlockHighlighterComponent.PrismCodeBlockHighlighter, {
            code: t
          })
        })
      }), a ? reactJsxRuntimeCoreReexport.jsx(diagramFullscreenContainer.DiagramFullscreenContainer, {
        onZoomIn: () => {
          var e;
          if ((e = n.current) !== null && e !== undefined) {
            e.zoomIn();
          }
        },
        onZoomOut: () => {
          var e;
          if ((e = n.current) !== null && e !== undefined) {
            e.zoomOut();
          }
        },
        onZoomFit: () => {
          var e;
          if ((e = n.current) !== null && e !== undefined) {
            e.fit();
          }
        },
        onFullScreenEnter: u,
        onDownloadImage: d,
        onCopyImage: _,
        i18nConfig: {
          downloadImage: r("doc_editor_diagram_download_image"),
          copyImage: r("doc_editor_diagram_copy_image"),
          copyHtml: r("doc_editor_diagram_copy_rich_text"),
          zoomIn: r("doc_editor_diagram_zoom_in"),
          zoomOut: r("doc_editor_diagram_zoom_out"),
          zoomFit: r("doc_editor_diagram_zoom_fit"),
          close: r("doc_editor_diagram_close")
        },
        onCloseClick: () => l(false),
        enableCopyRichText: false,
        children: reactJsxRuntimeCoreReexport.jsx(mermaidDiagramZoomableRenderer.ZoomableMermaidDiagram, {
          chart: t,
          loading: false,
          ref: n,
          i18nConfig: m
        })
      }) : null, reactJsxRuntimeCoreReexport.jsx(mindmapExportCard.MindmapExportCard, {
        i18nConfig: {
          brandName: r("brandName_doubao"),
          brandDesc: ""
        },
        svgContainerRef: c,
        brandAreaRef: s,
        children: reactJsxRuntimeCoreReexport.jsx(mermaidDiagramZoomableRenderer.ZoomableMermaidDiagram, {
          chart: t,
          loading: false,
          i18nConfig: m
        })
      })]
    });
  };
  let r5 = e => {
    let {
      className: t,
      style: o,
      value: r
    } = e;
    let [i, n] = reactCoreLibraryReexport.useState(false);
    return reactJsxRuntimeCoreReexport.jsx(editorLeafTextComponent.LeafTextWithContext, {
      className: A(t, "container-o010qD"),
      style: o,
      disableDefaultSelected: true,
      autoSelectOnClick: false,
      onSelect: () => {
        n(true);
      },
      onDeselect: () => {
        n(false);
      },
      children: reactJsxRuntimeCoreReexport.jsx(r4, {
        value: r,
        active: i
      })
    });
  };
  function r3(e, t, o) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var o = e[Symbol.toPrimitive];
      if (o !== undefined) {
        var r = o.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = o;
    }
    return e;
  }
  R = editorPluginManager.createPriority(999);
  $ = reactDomContextDecorator.withContextConsumer();
  T = class e extends baseRendererClass.BaseRenderer {
    match(t) {
      return t === e.KEY;
    }
    render(e) {
      let {
        attributes: t = {}
      } = e;
      let {
        mermaid: o,
        id: r
      } = t;
      e.key = r;
      return reactJsxRuntimeCoreReexport.jsx(tC, {
        value: this.i18n,
        children: reactJsxRuntimeCoreReexport.jsx(r5, {
          value: o
        })
      });
    }
    constructor(e = {}) {
      let {
        i18n: t
      } = e;
      super();
      r3(this, "i18n", undefined);
      this.i18n = t;
    }
  };
  r3(T, "KEY", "mermaid");
  f = T.prototype;
  x = "render";
  v = [R, $];
  y = Object.getOwnPropertyDescriptor(T.prototype, "render");
  b = T.prototype;
  w = {};
  Object.keys(y).forEach(function (e) {
    w[e] = y[e];
  });
  w.enumerable = !!w.enumerable;
  w.configurable = !!w.configurable;
  if ("value" in w || w.initializer) {
    w.writable = true;
  }
  w = v.slice().reverse().reduce(function (e, t) {
    return t(f, x, e) || e;
  }, w);
  if (b && w.initializer !== undefined) {
    w.value = w.initializer ? w.initializer.call(b) : undefined;
    w.initializer = undefined;
  }
  if (w.initializer === undefined) {
    Object.defineProperty(f, x, w);
  }
  let r6 = T;
  function r8(e, t, o) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var o = e[Symbol.toPrimitive];
      if (o !== undefined) {
        var r = o.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = o;
    }
    return e;
  }
  class r9 extends baseRendererClass.BaseRenderer {
    match(e) {
      return e === r9.KEY;
    }
    render(e) {
      let {
        op: t,
        children: o,
        style: r
      } = e;
      if (isStringTypeCheck.isString(t.insert)) {
        r.color = "var(--s-color-brand-primary-press, #003DB3)";
        r.backgroundColor = "var(--s-color-brand-primary-transparent-1, rgba(0, 102, 255, 0.06))";
      }
      return o;
    }
    constructor({
      editor: e
    }) {
      super();
      r8(this, "editor", undefined);
      this.editor = e;
    }
  }
  r8(r9, "KEY", "new_content_draft");
  let r7 = "clientside-auto_continue_write_draft";
  var localStoragePersistedStateHook = require("local-storage-persisted-state-hook") /*id: 429278*/;
  var rtlChevronLeftIcon = require("rtl-chevron-left-icon") /*id: 400992*/;
  var arrowRightRtlIcon = require("arrow-right-rtl-icon") /*id: 371018*/;
  var userAgentPlatformUtils = require("user-agent-platform-utils") /*id: 221233*/;
  var arrowRightIconSvg = require("arrow-right-icon-svg") /*id: 623696*/;
  var plusIcon = require("plus-icon") /*id: 578680*/;
  var il = {
    "control-bar-wrapper": "control-bar-wrapper-fFZxH7",
    divider: "divider-hqkTLG",
    "action-button": "action-button-mOY2XT",
    primary: "primary-B7TRK_",
    "action-button-icon-wrapper": "action-button-icon-wrapper-zVbL_U",
    "action-button-icon-combine": "action-button-icon-combine-aY_RaW",
    "font-size-inherit": "font-size-inherit-y9DFBD"
  };
  let ic = e => {
    let {
      action: t,
      label: o,
      primary: r,
      onClick: i
    } = e;
    let n = userAgentPlatformUtils.isWindows();
    let a = A(il["action-button-icon-wrapper"], {
      [il.primary]: r
    });
    let l = t ? {
      accept: reactJsxRuntimeCoreReexport.jsx("span", {
        className: a,
        children: reactJsxRuntimeCoreReexport.jsx(arrowRightIconSvg.ArrowRightIcon, {
          className: il["font-size-inherit"]
        })
      }),
      reject: reactJsxRuntimeCoreReexport.jsx("span", {
        className: a,
        children: "Esc"
      }),
      regenerate: n ? reactJsxRuntimeCoreReexport.jsxs("span", {
        className: il["action-button-icon-combine"],
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          className: a,
          children: "Ctrl"
        }), reactJsxRuntimeCoreReexport.jsx(plusIcon.PlusIcon, {
          className: il["font-size-inherit"]
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: a,
          children: reactJsxRuntimeCoreReexport.jsx(arrowRightIconSvg.ArrowRightIcon, {
            className: il["font-size-inherit"]
          })
        })]
      }) : reactJsxRuntimeCoreReexport.jsxs("span", {
        className: a,
        children: ["⌘", reactJsxRuntimeCoreReexport.jsx(arrowRightIconSvg.ArrowRightIcon, {
          className: il["font-size-inherit"]
        })]
      })
    }[t] : null;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: A(il["action-button"], {
        [il.primary]: r
      }),
      onClick: i,
      children: [o, l]
    });
  };
  let is = e => {
    let {
      alwaysVisible: t,
      children: o,
      pagerNode: r,
      onAccept: i,
      onReject: n,
      onRegenerate: a,
      onVisibleChange: l
    } = e;
    let c = tS();
    let s = [{
      action: "accept",
      label: c("doc_editor_writing_canvas_auto_gen_option_save"),
      primary: true,
      onClick: i
    }, {
      action: "regenerate",
      label: c("doc_editor_writing_canvas_auto_gen_option_regenerate"),
      onClick: a
    }, {
      action: "reject",
      label: c("doc_editor_writing_canvas_auto_gen_option_discard"),
      onClick: n
    }];
    return reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
      mouseEnterDelay: 0,
      mouseLeaveDelay: 300,
      trigger: t ? "custom" : undefined,
      visible: !!t || undefined,
      content: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: il["control-bar-wrapper"],
        children: [s.map(e => reactJsxRuntimeCoreReexport.jsx(ic, {
          ...e
        }, e.action)), r && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: il.divider
          }), r]
        })]
      }),
      onVisibleChange: l,
      children: o
    }, String(t));
  };
  let id = () => {
    let [e, t] = reactCoreLibraryReexport.useState([]);
    let [o, r] = reactCoreLibraryReexport.useState(0);
    return {
      setPrev: () => {
        r(Math.max(0, o - 1));
      },
      setNext: () => {
        r(Math.min(e.length - 1, o + 1));
      },
      push: o => {
        t([...e, o]);
        r(e.length);
      },
      reset: e => {
        t(isUndefinedCheck.isUndefined(e) ? [] : [e]);
        r(0);
      },
      hasNext: o < e.length - 1,
      hasPrev: o > 0,
      currentValue: e[o],
      count: e.length,
      currentIndex: o
    };
  };
  var i_ = {
    container: "container-oQIiWp",
    "generated-text": "generated-text-NmuzUJ",
    "is-generating": "is-generating-uIIeyf",
    pager: "pager-rs0E_J",
    "prev-button": "prev-button-a5zupT",
    "next-button": "next-button-vu0KNk",
    disabled: "disabled-vq2_uD",
    "page-count": "page-count-vIaPT2"
  };
  let iu = e => {
    let {
      draftKey: t,
      editor: o,
      docEditor: r,
      onGenerate: i,
      onReject: n
    } = e;
    let a = userAgentPlatformUtils.isWindows();
    let [l, c] = reactCoreLibraryReexport.useState();
    let s = reactCoreLibraryReexport.useRef(false);
    let [d, _] = reactCoreLibraryReexport.useState();
    let [u, m] = localStoragePersistedStateHook.useLocalStorageState("auto_continue_write_draft_confirm_always_visible", {
      defaultValue: true
    });
    let [p, {
      setTrue: h,
      setFalse: g
    }] = useBooleanHook.useBoolean(false);
    let {
      setNext: f,
      setPrev: x,
      push: v,
      reset: y,
      currentValue: b,
      hasPrev: w,
      hasNext: k,
      currentIndex: j,
      count: C
    } = id();
    let {
      value: N,
      isFinished: S,
      stop: E
    } = t_({
      source: l,
      enableSmooth: false,
      onEnd: e => {
        let {
          type: t
        } = e;
        if (t === "finished") {
          if (s.current) {
            v(N);
          } else {
            y(N);
          }
        }
      }
    });
    let Z = functionInvoker.invoke(() => p ? "" : S && b != null ? b : "");
    let R = !!Z;
    let $ = !!S && !!Z;
    reactCoreLibraryReexport.useEffect(() => {
      if (!o) {
        return;
      }
      let e = W();
      if (e) {
        P(e);
      }
      return () => {
        E();
      };
    }, [o]);
    reactCoreLibraryReexport.useEffect(() => {
      if (o) {
        o.on(editorEventConstants.editorEventTypes.COMPOSITION_START, h);
        o.on(editorEventConstants.editorEventTypes.COMPOSITION_END, g);
        o.on(editorEventConstants.editorEventTypes.KEYDOWN, T);
        return () => {
          o.off(editorEventConstants.editorEventTypes.COMPOSITION_START, h);
          o.off(editorEventConstants.editorEventTypes.COMPOSITION_END, g);
          o.off(editorEventConstants.editorEventTypes.KEYDOWN, T);
        };
      }
    }, [o]);
    let T = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (o) {
        if (e.key === "ArrowRight") {
          if (e.altKey || e.shiftKey) {
            return;
          }
          if (a ? e.ctrlKey : e.metaKey) {
            M({
              isHotkey: true
            });
            return;
          }
          L({
            isHotkey: true
          });
          return;
        }
        if (e.key === "Escape") {
          B({
            isHotkey: true
          });
          return;
        }
      }
    });
    let F = reactFunctionMemoHook.useMemoizedCallback(() => {
      if (!o) {
        return null;
      }
      let e = o.getContentState();
      let r = e.getEntities([[r7, t]])[0];
      if (r) {
        return e.rangeToPosition({
          start: r.start,
          end: r.start
        });
      } else {
        return null;
      }
    });
    let W = reactFunctionMemoHook.useMemoizedCallback(() => {
      let e = F();
      if (!o || !e) {
        return;
      }
      let t = new editorPositionClass.EditorPosition({
        editor: o,
        ...e
      }).toRange();
      let r = o.getContentState().getZoneState(e.zoneId);
      let i = r == null ? undefined : r.getLine(t.start.line);
      let n = r == null ? undefined : r.getModelText();
      if (n && i) {
        return {
          cursor_position: +!i.isTextEmpty(),
          content_before_cursor: n.slice(0, e.start + 1),
          content_after_cursor: n.slice(e.start + 2)
        };
      }
    });
    let z = reactFunctionMemoHook.useMemoizedCallback(async e => {
      let t = await (i == null ? undefined : i(e));
      if (t) {
        c(t);
      }
    });
    let M = reactFunctionMemoHook.useMemoizedCallback(function ({
      isHotkey: e
    } = {}) {
      if (d && $) {
        m(false);
        s.current = true;
        z({
          ...d,
          content_of_last_continue_writing: Z
        });
        if (o != null) {
          o.selection.focus();
        }
        J({
          method: e ? "hotkey" : "click",
          actionName: "retry"
        });
      }
    });
    let P = reactFunctionMemoHook.useMemoizedCallback(e => {
      s.current = false;
      _(e);
      z(e);
    });
    let L = reactFunctionMemoHook.useMemoizedCallback(function ({
      isHotkey: e
    } = {}) {
      if (!o || !$) {
        return;
      }
      m(false);
      let t = F();
      if (t) {
        o.getContentState().apply(new contentStructureDelta.ContentDelta({
          zoneId: t.zoneId
        }).retain(t.start).delete(t.len).insert(Z || ""));
        o.selection.setSelection(new editorPositionClass.EditorPosition({
          zoneId: t.zoneId,
          start: t.start - t.len + (Z || "").length,
          len: 0,
          editor: o
        }));
        o.selection.focus();
        J({
          method: e ? "hotkey" : "click",
          actionName: "accept"
        });
      }
    });
    let B = reactFunctionMemoHook.useMemoizedCallback(function ({
      isHotkey: e
    } = {}) {
      if (!o || !$) {
        return;
      }
      m(false);
      let t = F();
      if (t) {
        if (n != null) {
          n(t.start);
        }
        if (o != null) {
          o.selection.focus();
        }
        J({
          method: e ? "hotkey" : "click",
          actionName: "reject"
        });
      }
    });
    let O = reactFunctionMemoHook.useMemoizedCallback(() => {
      let e;
      let t = F();
      if (o && t) {
        var r;
        var n;
        let a = new editorPositionClass.EditorPosition({
          editor: o,
          ...t
        }).toRange();
        let l = (r = o.getContentState().getZoneState(t.zoneId)) === null || r === undefined ? undefined : r.getLine(a.start.line);
        e = (l == null ? undefined : (n = l.getContent().ops.find(diffOperationValidators.isWildcardInsert)) === null || n === undefined ? undefined : n.attributes?.list) ? "list" : (l == null ? undefined : l.isTextEmpty()) ? "header" : "tail";
      }
      return e;
    });
    let D = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (e) {
        if (r != null) {
          r.behavior.emit("autoContinueWriteGeneratedTextShow", {
            trigger_scene: O()
          });
        }
      }
    });
    let H = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (e) {
        if (r != null) {
          r.behavior.emit("autoContinueWriteActionsShow", {
            trigger_scene: O()
          });
        }
      }
    });
    let J = reactFunctionMemoHook.useMemoizedCallback(e => {
      let {
        method: t,
        actionName: o
      } = e;
      if (r != null) {
        r.behavior.emit("autoContinueWriteActionClick", {
          trigger_scene: O(),
          method: t,
          button_name: o
        });
      }
    });
    let G = C > 1 ? reactJsxRuntimeCoreReexport.jsxs("div", {
      className: i_.pager,
      children: [reactJsxRuntimeCoreReexport.jsx(rtlChevronLeftIcon.ChevronLeftIcon, {
        className: A(i_["prev-button"], w ? undefined : i_.disabled),
        onClick: () => {
          m(false);
          x();
          if (o != null) {
            o.selection.focus();
          }
        }
      }), reactJsxRuntimeCoreReexport.jsxs("span", {
        className: i_["page-count"],
        children: [j + 1, "/", C]
      }), reactJsxRuntimeCoreReexport.jsx(arrowRightRtlIcon.ArrowRightRtlIcon, {
        className: A(i_["next-button"], k ? undefined : i_.disabled),
        onClick: () => {
          m(false);
          f();
          if (o != null) {
            o.selection.focus();
          }
        }
      })]
    }) : null;
    let V = reactJsxRuntimeCoreReexport.jsx(reactIntersectionObserver_1.InView, {
      as: "span",
      className: i_["generated-text"],
      "data-placeholder": Z,
      triggerOnce: true,
      onChange: D
    });
    return reactJsxRuntimeCoreReexport.jsx(editorLeafTextComponent.LeafTextWithContext, {
      className: A(i_.container, S ? undefined : i_["is-generating"]),
      "data-fake-text": " ",
      autoSelectOnClick: false,
      suppressContentEditableWarning: true,
      children: R && ($ ? reactJsxRuntimeCoreReexport.jsx(is, {
        alwaysVisible: u,
        pagerNode: G,
        onAccept: L,
        onReject: B,
        onRegenerate: M,
        onVisibleChange: H,
        children: V
      }) : V)
    });
  };
  function im(e, t, o) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var o = e[Symbol.toPrimitive];
      if (o !== undefined) {
        var r = o.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = o;
    }
    return e;
  }
  class ip extends baseRendererClass.BaseRenderer {
    match(e) {
      return e === ip.KEY;
    }
    render(e) {
      let {
        attributes: t
      } = e;
      return reactJsxRuntimeCoreReexport.jsx(tC, {
        value: this.i18n,
        children: reactJsxRuntimeCoreReexport.jsx(iu, {
          draftKey: t[ip.KEY],
          editor: this.editor,
          docEditor: this.docEditor,
          onGenerate: this.onGenerate,
          onReject: this.onReject
        }, t[ip.KEY])
      });
    }
    constructor({
      i18n: e,
      editor: t,
      docEditor: o,
      onGenerate: r,
      onReject: i
    }) {
      super();
      im(this, "i18n", undefined);
      im(this, "editor", undefined);
      im(this, "docEditor", undefined);
      im(this, "onGenerate", undefined);
      im(this, "onReject", undefined);
      this.i18n = e;
      this.editor = t;
      this.docEditor = o;
      this.onGenerate = r;
      this.onReject = i;
    }
  }
  im(ip, "KEY", r7);
  var samanthaPopoverWrapperComponent = require("samantha-popover-wrapper-component") /*id: 137563*/;
  var rtlLinkIcon = require("rtl-link-icon") /*id: 70222*/;
  var ix = {
    referenceCard: "referenceCard-WKL2F9",
    header: "header-J_yRW0",
    source: "source-bP9rCd",
    sourceIcon: "sourceIcon-IQT_LG",
    defaultSource: "defaultSource-EsBaWa",
    title: "title-wUI_mP",
    contentWrapper: "contentWrapper-f7gAE1",
    contentBackground: "contentBackground-uij1tt",
    content: "content-VGYNUp",
    normalText: "normalText-Z85tLU",
    highlightText: "highlightText-VGCZxX"
  };
  let iv = e => {
    let {
      title: t = "",
      source: o = "",
      logoUrl: r = "",
      onOpenUrl: i,
      content: n
    } = e;
    let a = new URL(o);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: ix.referenceCard,
      onClick: i,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: ix.header,
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: ix.source,
          children: [r ? reactJsxRuntimeCoreReexport.jsx("img", {
            src: xssContentSanitizer.sanitizeUrl(r, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1ZDJKS$ZtNWhWel-2$ERK%2RsbD$NW*xh$jFwc1kyM$dk$mt5$lhaWk1qbDBZM*M1ZFZwWE5%Qmpl$*w1$2xk-WJHTnRWblZaTWxWMFd%Skdl$nBET1hCaWJWSnNa$%0xT%dNemFHa*pi$1F4WTNjO$BRPT0"
            }),
            className: ix.sourceIcon
          }) : reactJsxRuntimeCoreReexport.jsx(rtlLinkIcon.LinkIcon, {
            className: A(ix.sourceIcon, ix.defaultSource)
          }), o && reactJsxRuntimeCoreReexport.jsx("span", {
            children: a == null ? undefined : a.host
          })]
        })
      }), reactJsxRuntimeCoreReexport.jsx("h3", {
        className: ix.title,
        children: t
      }), (n == null ? undefined : n.length) ? reactJsxRuntimeCoreReexport.jsxs("div", {
        className: ix.contentWrapper,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: ix.contentBackground
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: ix.content,
          children: n.map((e, t) => reactJsxRuntimeCoreReexport.jsx("p", {
            className: t === 1 ? ix.highlightText : ix.normalText,
            children: e
          }, t))
        })]
      }) : null]
    });
  };
  let iy = e => {
    let {
      uuid: o,
      referenceId: r,
      referenceQuoteManager: i,
      deleteReferenceByUnLink: n,
      getCanUnlinkReference: a,
      handleTrackEventShow: l,
      handleTrackEventClick: c
    } = e;
    let {
      url: s = "",
      title: d = "",
      logo: _ = ""
    } = (i == null ? undefined : i.getReferenceDetail(r)) ?? {};
    let u = Number(r) >= 10;
    return reactJsxRuntimeCoreReexport.jsx(reactIntersectionObserver_1.InView, {
      as: "span",
      onChange: e => {
        if (e) {
          l({
            showFrom: "in_text"
          });
        }
      },
      children: reactJsxRuntimeCoreReexport.jsx("span", {
        className: "badge-Kk4XS9",
        children: reactJsxRuntimeCoreReexport.jsx("sup", {
          className: "badgeSup-EoXA5P",
          children: reactJsxRuntimeCoreReexport.jsx(samanthaPopoverWrapperComponent.SamanthaPopover, {
            className: "popover-RsPYAv",
            onVisibleChange: e => {
              if (e) {
                l({
                  showFrom: "in_text_hover"
                });
              }
            },
            content: reactJsxRuntimeCoreReexport.jsx(iv, {
              uuid: o,
              referenceId: r,
              title: d,
              source: s,
              onDelete: n,
              logoUrl: _,
              getCanUnlinkReference: a,
              onOpenUrl: () => {
                window.open(xssContentSanitizer.sanitizeUrl(s, null, {
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
                  filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1ZDJKS$ZtNWhWel-2$ERK%2RsbD$NW*xh$jFwc1kyM$dk$mt5$lhaWk1qbDBZM*M1ZFZwWE5%Qmpl$*x3WW0x%2JH$kRO$EJqTTJob1kyMWtN$04z%FQwPQ"
                }), "_blank");
                c({
                  clickFrom: "in_text_hover"
                });
              }
            }),
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: "badgeInfo-rPA8nf",
              style: {
                padding: u ? "0 5px" : "0 3px",
                width: u ? "15px" : "12px"
              },
              onClick: () => {
                window.open(xssContentSanitizer.sanitizeUrl(s, null, {
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
                  filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1ZDJKS$ZtNWhWel-2$ERK%2RsbD$NW*xh$jFwc1kyM$dk$mt5$lhaWk1qbDBZM*M1ZFZwWE5%Qmpl$*x3WW0x%2JH$kRO$EJqTTJob1kyMWtN$04z%FQwPQ"
                }), "_blank");
                c({
                  clickFrom: "in_text"
                });
              },
              children: r
            })
          })
        })
      })
    });
  };
  var docReferenceHtmlEntities = require("doc-reference-html-entities") /*id: 958118*/;
  var iw = {
    wrapper: "wrapper-wdF9ND"
  };
  function ik(e, t, o) {
    var r;
    if ((t = typeof (r = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var o = e[Symbol.toPrimitive];
      if (o !== undefined) {
        var r = o.call(e, t || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? r : r + "") in e) {
      Object.defineProperty(e, t, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = o;
    }
    return e;
  }
  class ij extends baseRendererClass.BaseRenderer {
    match(e) {
      return e === ij.KEY;
    }
    editorWillCopy(e) {
      let {
        deltaSet: t
      } = e;
      t.forEach(e => {
        if (e instanceof contentStructureDelta.ContentDelta) {
          e.ops = e.ops.filter(e => {
            return !e.attributes?.[docReferenceHtmlEntities.docReference];
          });
        }
      });
      e.deltaSet = t;
    }
    render(e) {
      let {
        op: t,
        children: o
      } = e;
      let {
        attributes: r = {}
      } = t;
      let i = r[docReferenceHtmlEntities.docReference];
      if (r[docReferenceHtmlEntities.docReference] && r.type === "end") {
        return reactJsxRuntimeCoreReexport.jsx(tC, {
          value: this.i18n,
          children: reactJsxRuntimeCoreReexport.jsx(editorLeafTextComponent.LeafTextWithContext, {
            className: iw.wrapper,
            children: reactJsxRuntimeCoreReexport.jsx(iy, {
              deleteReferenceByUnLink: this.deleteReferenceByUnLink,
              uuid: r.uuid,
              referenceId: i,
              referenceQuoteManager: this.referenceQuoteManager,
              getCanUnlinkReference: () => this.editor.isEditable(),
              handleTrackEventShow: this.handleTrackEventShow,
              handleTrackEventClick: this.handleTrackEventClick
            })
          })
        });
      } else {
        return o;
      }
    }
    constructor(e) {
      let {
        i18n: t,
        editor: o,
        referenceQuoteManager: r,
        docEditor: i
      } = e;
      super();
      ik(this, "editor", undefined);
      ik(this, "docEditor", undefined);
      ik(this, "i18n", undefined);
      ik(this, "referenceQuoteManager", undefined);
      ik(this, "deleteReferenceByUnLink", (e, t) => {
        if (t) {
          let e = this.editor.getContentState();
          let o = e.getEntities([["uuid", t]]);
          let r = new deltaSetCore.DeltaSet();
          if (o != null) {
            o.forEach(t => {
              let o = e.rangeToPosition(t);
              if (o) {
                let e = new contentStructureDelta.ContentDelta({
                  zoneId: o == null ? undefined : o.zoneId
                }).retain(o.start).delete(1);
                r = r.compose(e);
              }
            });
          }
          e.apply(r);
        }
      });
      ik(this, "handleTrackEventShow", e => {
        var t;
        let {
          showFrom: o
        } = e;
        if ((t = this.docEditor) !== null && t !== undefined) {
          t.behavior.emit("referenceQuoteShow", {
            showFrom: o
          });
        }
      });
      ik(this, "handleTrackEventClick", e => {
        var t;
        let {
          clickFrom: o
        } = e;
        if ((t = this.docEditor) !== null && t !== undefined) {
          t.behavior.emit("referenceQuoteClick", {
            clickFrom: o
          });
        }
      });
      this.editor = o;
      this.docEditor = i;
      this.i18n = t;
      this.referenceQuoteManager = r;
    }
  }
  ik(ij, "KEY", "doc-reference");
  let iC = {
    language: "zh",
    "hyperlink.add-link": "粘贴或输入一个超链接",
    "hyperlink.determine": "确定",
    "hyperlink.enter-text": "请输入文本",
    "hyperlink.link": "链接",
    "hyperlink.text": "文本",
    "mention.mentioned": "提及",
    "mention.no-result-and-try-another": "没有结果，换个关键词试试",
    "mention.notification": "通知",
    "mention.recently": "最近",
    "mention.last_update": "最后更新：",
    "toolbar.align-center": "居中对齐",
    "toolbar.align-left": "左对齐",
    "toolbar.align-right": "右对齐",
    "toolbar.blockquote": "引用",
    "toolbar.bold": "粗体",
    "toolbar.checkbox": "任务列表",
    "toolbar.h1": "1级标题",
    "toolbar.h2": "2级标题",
    "toolbar.h3": "3级标题",
    "toolbar.horizontal-line": "分割线",
    "toolbar.hyperlink": "超链接",
    "toolbar.image": "图片",
    "toolbar.italic": "斜体",
    "toolbar.orderlist": "有序列表",
    "toolbar.redo": "重做",
    "toolbar.strikethrough": "中划线",
    "toolbar.table": "表格",
    "toolbar.text-indent": "缩进",
    "toolbar.underline": "下划线",
    "toolbar.undo": "撤销",
    "toolbar.unorderlist": "无序列表",
    "toolbar.font-size-small": "小",
    "toolbar.font-size-normal": "正常",
    "toolbar.font-size-large": "大",
    "toolbar.font-size-max": "最大",
    "toolbar.video": "视频",
    "toolbar.codeblock": "代码块",
    "codeblock.search": "搜索",
    "codeblock.change_language": "切换代码语言",
    "codeblock.search_placeholder": "无匹配结果",
    "codeblock.copy": "复制",
    "codeblock.cancel_auto_wrap": "取消自动换行",
    "codeblock.auto_wrap": "自动换行",
    "common.copied": "复制成功",
    "toolbar.color.font": "",
    "toolbar.color.background": ""
  };
  var indentDirectionConstants = require("indent-direction-constants") /*id: 277000*/;
  var alignRendererPlugin = require("align-renderer-plugin") /*id: 385107*/;
  var editorUndoModule = require("editor-undo-module") /*id: 933023*/;
  let iZ = [{
    key: editorHeadingPlugin.HeadingPlugin.KEY,
    value: "h1",
    shortcut: {
      windows: {
        altKey: true,
        ctrlKey: true,
        keyCode: 49
      },
      mac: {
        altKey: true,
        metaKey: true,
        keyCode: 49
      }
    }
  }, {
    key: editorHeadingPlugin.HeadingPlugin.KEY,
    value: "h2",
    shortcut: {
      windows: {
        altKey: true,
        ctrlKey: true,
        keyCode: 50
      },
      mac: {
        altKey: true,
        metaKey: true,
        keyCode: 50
      }
    }
  }, {
    key: editorHeadingPlugin.HeadingPlugin.KEY,
    value: "h3",
    shortcut: {
      windows: {
        altKey: true,
        ctrlKey: true,
        keyCode: 51
      },
      mac: {
        altKey: true,
        metaKey: true,
        keyCode: 51
      }
    }
  }, {
    key: editorHeadingPlugin.HeadingPlugin.KEY,
    value: "h4",
    shortcut: {
      windows: {
        altKey: true,
        ctrlKey: true,
        keyCode: 52
      },
      mac: {
        altKey: true,
        metaKey: true,
        keyCode: 52
      }
    }
  }, {
    key: editorBoldPlugin.BoldPlugin.KEY,
    shortcut: {
      windows: {
        keyCode: 66,
        ctrlKey: true
      },
      mac: {
        metaKey: true,
        keyCode: 66
      }
    }
  }, {
    key: italicAttributeRenderer.ItalicRenderer.KEY,
    shortcut: {
      windows: {
        keyCode: 73,
        ctrlKey: true
      },
      mac: {
        keyCode: 73,
        metaKey: true
      }
    }
  }, {
    key: editorUnderlinePlugin.UnderlinePlugin.KEY,
    shortcut: {
      windows: {
        keyCode: 85,
        ctrlKey: true
      },
      mac: {
        keyCode: 85,
        metaKey: true
      }
    }
  }, {
    key: editorStrikethroughRender.StrikethroughRender.KEY,
    shortcut: {
      windows: {
        keyCode: 88,
        ctrlKey: true,
        shiftKey: true
      },
      mac: {
        keyCode: 88,
        metaKey: true,
        shiftKey: true
      }
    }
  }, {
    key: editorUndoModule.undoCommand,
    shortcut: {
      windows: {
        ctrlKey: true,
        keyCode: 90
      },
      mac: {
        metaKey: true,
        keyCode: 90
      }
    }
  }, {
    key: editorUndoModule.redoCommand,
    shortcut: [{
      windows: {
        ctrlKey: true,
        keyCode: 90,
        shiftKey: true
      },
      mac: {
        metaKey: true,
        keyCode: 90,
        shiftKey: true
      }
    }, {
      windows: {
        ctrlKey: true,
        keyCode: 89
      }
    }]
  }, {
    key: indentDirectionConstants.indentConstants.INDENT_LEFT,
    shortcut: {
      windows: {
        ctrlKey: false,
        keyCode: 9,
        shiftKey: true
      },
      mac: {
        metaKey: false,
        keyCode: 9,
        shiftKey: true
      }
    }
  }, {
    key: indentDirectionConstants.indentConstants.INDENT_RIGHT,
    shortcut: {
      windows: {
        ctrlKey: false,
        keyCode: 9,
        shiftKey: false
      },
      mac: {
        metaKey: false,
        keyCode: 9,
        shiftKey: false
      }
    }
  }, {
    key: editorHyperlinkPopupManager.HyperlinkPopupManager.KEY,
    shortcut: {
      windows: {
        ctrlKey: true,
        keyCode: 75
      },
      mac: {
        metaKey: true,
        keyCode: 75
      }
    }
  }, {
    key: documentMarginCalculator.getMarginValue.KEY,
    shortcut: {
      windows: {
        altKey: true,
        ctrlKey: true,
        keyCode: 65
      },
      mac: {
        metaKey: true,
        altKey: true,
        keyCode: 65
      }
    }
  }, {
    key: blockquoteRenderer.BlockquoteRenderer.KEY,
    value: "true",
    shortcut: {
      windows: {
        shiftKey: true,
        ctrlKey: true,
        keyCode: 190
      },
      mac: {
        metaKey: true,
        shiftKey: true,
        keyCode: 190
      }
    }
  }, {
    key: alignRendererPlugin.AlignRenderer.KEY,
    value: "left",
    shortcut: {
      windows: {
        shiftKey: true,
        ctrlKey: true,
        keyCode: 76
      },
      mac: {
        metaKey: true,
        shiftKey: true,
        keyCode: 76
      }
    }
  }, {
    key: alignRendererPlugin.AlignRenderer.KEY,
    value: "center",
    shortcut: {
      windows: {
        shiftKey: true,
        ctrlKey: true,
        keyCode: 69
      },
      mac: {
        metaKey: true,
        shiftKey: true,
        keyCode: 69
      }
    }
  }, {
    key: alignRendererPlugin.AlignRenderer.KEY,
    value: "right",
    shortcut: {
      windows: {
        shiftKey: true,
        ctrlKey: true,
        keyCode: 82
      },
      mac: {
        metaKey: true,
        shiftKey: true,
        keyCode: 82
      }
    }
  }, {
    key: editorChecklistRenderer.CheckboxRenderer.KEY,
    value: "check",
    shortcut: {
      windows: {
        altKey: true,
        ctrlKey: true,
        keyCode: 84
      },
      mac: {
        metaKey: true,
        altKey: true,
        keyCode: 84
      }
    }
  }, {
    key: indentDirectionConstants.indentConstants.INDENT_RIGHT,
    shortcut: {
      windows: {
        ctrlKey: true,
        keyCode: 221
      },
      mac: {
        metaKey: true,
        keyCode: 221
      }
    }
  }, {
    key: editorHorizontalLineRenderer.HorizontalLineRenderer.KEY,
    shortcut: {
      windows: {
        altKey: true,
        ctrlKey: true,
        keyCode: 83
      },
      mac: {
        metaKey: true,
        altKey: true,
        keyCode: 83
      }
    }
  }, {
    key: richTextEditorListPlugin.ListPlugin.KEY,
    value: "bullet",
    shortcut: {
      windows: {
        shiftKey: true,
        ctrlKey: true,
        keyCode: 56
      },
      mac: {
        metaKey: true,
        shiftKey: true,
        keyCode: 56
      }
    }
  }, {
    key: richTextEditorListPlugin.ListPlugin.KEY,
    value: "number",
    shortcut: {
      windows: {
        shiftKey: true,
        ctrlKey: true,
        keyCode: 55
      },
      mac: {
        metaKey: true,
        shiftKey: true,
        keyCode: 55
      }
    }
  }, {
    key: codeBlockPlugin.CodeBlockPlugin.KEY,
    shortcut: {
      windows: {
        altKey: true,
        ctrlKey: true,
        keyCode: 67
      },
      mac: {
        metaKey: true,
        altKey: true,
        keyCode: 67
      }
    }
  }];
  var contentZoneStateManager = require("content-zone-state-manager") /*id: 102479*/;
  var editorRangeZoneClass = require("editor-range-zone-class") /*id: 731872*/;
  var editorReturnKeyHandler = require("editor-return-key-handler") /*id: 336730*/;
  let iI = {
    [editorModuleConstants.editorModuleConsts.ContentState]: contentZoneStateManager.ZoneContentState,
    [editorModuleConstants.editorModuleConsts.ZoneState]: editorZoneDeltaState.ZoneDeltaState,
    [editorModuleConstants.editorModuleConsts.Range]: editorRangeZoneClass.EditorRangeZone,
    [editorModuleConstants.editorModuleConsts.UndoModule]: editorUndoModule.UndoModule,
    [editorModuleConstants.editorModuleConsts.InputModel]: editorReturnKeyHandler.ReturnKeyHandler
  };
  let iF = {
    types: [markdownEditorPlugin_1.MarkdownFeature.heading, markdownEditorPlugin_1.MarkdownFeature.ul, markdownEditorPlugin_1.MarkdownFeature.ol, markdownEditorPlugin_1.MarkdownFeature.checkbox, markdownEditorPlugin_1.MarkdownFeature.bold, markdownEditorPlugin_1.MarkdownFeature.italic, markdownEditorPlugin_1.MarkdownFeature.underline, markdownEditorPlugin_1.MarkdownFeature.blockQuote, markdownEditorPlugin_1.MarkdownFeature.strikethrough, markdownEditorPlugin_1.MarkdownFeature.horizontal]
  };
  var schemaResolver = require("schema-resolver") /*id: 289076*/;
  var cssDisplayTypes = require("css-display-types") /*id: 226292*/;
  let iM = new schemaResolver.SchemaResolver({
    enter: {
      displayEnter: true
    },
    bold: {
      mark: true
    },
    fontcolor: {
      mark: true
    },
    fontweight: {
      mark: true
    },
    italic: {
      mark: true
    },
    fontfamily: {
      mark: true
    },
    fontsize: {
      mark: true
    },
    underline: {
      mark: true
    },
    strikethrough: {
      mark: true
    },
    "comment-.*": {
      mark: true
    },
    backcolor: {
      mark: true
    },
    backgroundcolor: {
      mark: true
    },
    "at-holder": {
      mark: true
    },
    "at-uuid_.*": {
      mark: true
    },
    "clientside-mention-placeholder": {
      mark: true
    },
    "inline-code": {
      mark: true,
      tailInherit: false
    },
    "url-.*": {
      mark: true,
      tailInherit: false,
      refresh: true
    },
    "clientside-highlight": {
      mark: true
    },
    hyperlink: {
      mark: true,
      tailInherit: false,
      refresh: true
    },
    "horizontal-line": {
      display: cssDisplayTypes.displayTypes.block,
      displayEnter: false
    },
    textcolor: {
      mark: true
    },
    aceTable: {
      display: cssDisplayTypes.displayTypes.block,
      displayEnter: false,
      attributes: e => ["author"].includes(e)
    },
    image: {
      display: cssDisplayTypes.displayTypes.block,
      displayEnter: false
    },
    video: {
      display: cssDisplayTypes.displayTypes.block,
      displayEnter: false
    },
    language: {
      display: cssDisplayTypes.displayTypes.block,
      displayEnter: false
    },
    heading: {
      lmkr: true
    },
    list: {
      lmkr: true
    },
    align: {
      lmkr: true
    },
    blockquote: {
      lmkr: true
    },
    mermaid: {
      display: cssDisplayTypes.displayTypes.block,
      displayEnter: false
    },
    mindmap: {
      display: cssDisplayTypes.displayTypes.block,
      displayEnter: false
    },
    "clientside-generating_skeleton": {
      display: cssDisplayTypes.displayTypes.block,
      displayEnter: false
    }
  });
  let iP = e => {
    let {
      children: o,
      businessKey: r,
      onAutoAddImage: i,
      onFetchImageList: n,
      onGenerateImage: a,
      onUploadImage: l,
      onCheckImageValid: c,
      onGenerateStream: s,
      docRootRef: d,
      virtualScroll: _,
      getRootContainer: u,
      onAutoContinueWriteReject: m,
      referenceQuoteManager: p,
      ...h
    } = e;
    let g = tS();
    let f = tR();
    let x = {
      ...iC,
      "hyperlink.text": g("doc_editor_link_text"),
      "hyperlink.link": g("doc_editor_link_url"),
      "codeblock.search": g("doc_editor_code_block_search"),
      "codeblock.copy": g("doc_editor_code_block_copy"),
      "codeblock.auto_wrap": g("doc_editor_code_block_wrap"),
      "codeblock.cancel_auto_wrap": g("doc_editor_code_block_nowrap"),
      "codeblock.change_language": g("doc_editor_code_block_switch_language"),
      "codeblock.search_placeholder": g("doc_editor_code_block_search")
    };
    let v = tz(tN(), {
      isEqual: deepEqualUtil_1.deepEqual
    });
    let y = reactFunctionMemoHook.useMemoizedCallback(e => s == null ? undefined : s({
      type: aiEditorConstants.aiActions.AutoContinueWriting,
      ...e
    }));
    let b = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (m != null) {
        m(e);
      }
    });
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: o == null ? undefined : o({
        modules: {
          ...iI,
          ...(_ ? {
            [editorModuleConstants.virtualListConsts.VirtualListModule]: [virtualListModule.VirtualListModule, {
              bufferHeight: () => window.innerHeight / 2,
              useIdleModule: true,
              useViewportLockModule: true,
              virtualListScroller: (u == null ? undefined : u()) ?? document.body
            }]
          } : {})
        },
        register: e => arrayConcatFlattenFunction.concatAndFlatten([new larkDocsPasteSupport.LarkPasteSupport(), new larkDocxPasteSupportPlugin.LarkDocxPasteSupport(), new googleDocsPasteSupportPlugin.GoogleDocsPasteSupport(), new tencentDocsPasteSupportPlugin.TencentDocsPasteSupportPlugin(), new keyboardShortcutsRenderer.KeyboardShortcutsRenderer({
          editor: e,
          shortcutsMap: iZ
        }), new markdownEditorPlugin_1.MarkdownPlugin({
          editor: e,
          markdownOptions: iF
        }), new richTextIndentPlugin.IndentRenderer({
          editor: e
        }), new plainTextHandlerRenderer.PlainTextHandler(), new autoSpaceEditorPlugin.AutoSpacePlugin({
          editor: e
        }), new blockElementDeserializer.BlockDeserializer(), new textNodeDeserializer.TextNodeDeserializer(), new codeHighlightRenderer.CodeHighlight({
          editor: e
        }), new codeBlockPlugin.CodeBlockPlugin({
          editor: e,
          i18n: x,
          foldable: false
        }), new editorBoldPlugin.BoldPlugin({
          editor: e
        }), new italicAttributeRenderer.ItalicRenderer({
          editor: e
        }), new editorUnderlinePlugin.UnderlinePlugin({
          editor: e
        }), new editorStrikethroughRender.StrikethroughRender({
          editor: e
        }), new documentMarginCalculator.getMarginValue({
          editor: e,
          render: tableComponentWithScrollableEditor.TableComponent
        }), new inlineCodeRenderer.InlineCodeRenderer(), new editorHeadingPlugin.HeadingPlugin({
          editor: e
        }), new richTextEditorListPlugin.ListPlugin({
          editor: e
        }), new editorChecklistRenderer.CheckboxRenderer({
          editor: e
        }), new editorHyperlinkPopupManager.HyperlinkPopupManager({
          editor: e,
          i18n: x
        }), new editorHorizontalLineRenderer.HorizontalLineRenderer({
          editor: e
        }), new blockquoteRenderer.BlockquoteRenderer({
          editor: e
        }), new ol({
          editor: e,
          renderEquationContent: e => reactJsxRuntimeCoreReexport.jsx(on, {
            ...e
          })
        }), new rT({
          editor: e,
          docEditor: f,
          onAutoAddImage: i,
          onFetchImageList: n,
          onGenerateImage: a,
          onUploadImage: l,
          onCheckImageValid: c,
          docRootRef: d,
          i18n: v
        }), new rB({
          i18n: v
        }), new rY({
          i18n: v
        }), new r6({
          i18n: v
        }), new r9({
          editor: e
        }), new ip({
          i18n: v,
          editor: e,
          docEditor: f,
          onGenerate: y,
          onReject: b
        }), new ij({
          i18n: v,
          editor: e,
          referenceQuoteManager: p,
          docEditor: f
        })]),
        businessKey: r,
        schema: iM,
        ...h
      })
    });
  };
  var controlBarActionListComponent = require("control-bar-action-list-component") /*id: 716645*/;
  var useMediaQueryHook = require("use-media-query-hook") /*id: 510619*/;
  var rtlChartIconComponent = require("rtl-chart-icon-component") /*id: 425108*/;
  var noteOutlinedIcon = require("note-outlined-icon") /*id: 356739*/;
  var topBarActionItem = require("top-bar-action-item") /*id: 543961*/;
  var inlineDocxPanelIcon = require("inline-docx-panel-icon") /*id: 832543*/;
  var resizeHorizontalIcon = require("resize-horizontal-icon") /*id: 753245*/;
  var shuffleIconRtlComponent = require("shuffle-icon-rtl-component") /*id: 297545*/;
  let iG = e => {
    let {
      className: t,
      style: o,
      disabled: r,
      position: i = "bottomLeft",
      bottom: n
    } = e;
    let a = tS();
    let l = tR();
    let [c, s] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (c) {
        l.behavior.emit("expandMore");
      }
    }, [c]);
    return reactJsxRuntimeCoreReexport.jsx(businessSkillBar.BusinessSkillBar, {
      contentClassName: A("container-au7wqS", t),
      style: o,
      defaultValue: "",
      selectable: false,
      scrollable: false,
      visible: c,
      onVisibleChange: s,
      position: i,
      newIcon: true,
      iconSize: "middle",
      options: arrayConcatFlattenFunction.concatAndFlatten({
        label: a("doc_editor_toolbar_table"),
        icon: reactJsxRuntimeCoreReexport.jsx(inlineDocxPanelIcon.InlineDocxPanelIcon, {}),
        value: "table",
        onClick: () => {
          l.setTable();
        }
      }, {
        label: a("doc_editor_toolbar_code_block"),
        icon: reactJsxRuntimeCoreReexport.jsx(resizeHorizontalIcon.ResizeHorzIcon, {}),
        value: "code_block",
        onClick: () => {
          l.setCodeBlock();
        }
      }, {
        label: a("doc_editor_toolbar_link"),
        icon: reactJsxRuntimeCoreReexport.jsx(rtlLinkIcon.LinkIcon, {}),
        value: "link",
        onClick: () => {
          l.setLink();
        }
      }),
      bottom: n,
      children: reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
        onClick: () => {
          s(true);
        },
        disabled: r,
        newIcon: true,
        children: reactJsxRuntimeCoreReexport.jsx(shuffleIconRtlComponent.ShuffleIcon, {})
      })
    });
  };
  var rtlExpandArrowsIcon = require("rtl-expand-arrows-icon") /*id: 399455*/;
  var docExportPopoverComponent = require("doc-export-popover-component") /*id: 782617*/;
  let iq = e => {
    let {
      className: t,
      style: o,
      position: r,
      disabled: i = false
    } = e;
    let n = tS();
    let [a, l] = reactCoreLibraryReexport.useState(false);
    let c = tR();
    return reactJsxRuntimeCoreReexport.jsx(docExportPopoverComponent.DocExportPopover, {
      className: t,
      style: o,
      loadingText: n("doc_editor_toolbar_download_loading"),
      position: r,
      loadingToastTop: 68,
      visible: a,
      onVisibleChange: l,
      onFetchDoc: () => c,
      children: reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
        onClick: () => {
          l(true);
        },
        disabled: i,
        tooltip: n("doc_editor_toolbar_download"),
        newIcon: true,
        "data-testid": "flow_doc_editor_download_button",
        children: reactJsxRuntimeCoreReexport.jsx(rtlExpandArrowsIcon.ExpandArrowsIcon, {})
      })
    });
  };
  var dataProcessor = require("data-processor") /*id: 395538*/;
  var fileStatusOutlinedIcon = require("file-status-outlined-icon") /*id: 154688*/;
  var rtlArrowLeftIcon_2 = require("rtl-arrow-left-icon_2") /*id: 442568*/;
  var pinIconComponent = require("pin-icon-component") /*id: 425165*/;
  var strikethroughRtlIcon = require("strikethrough-rtl-icon") /*id: 872208*/;
  var iconChevronDown = require("icon-chevron-down") /*id: 521832*/;
  var rtlIconComponent_1_3 = require("rtl-icon-component_1_3") /*id: 383994*/;
  var rtlIconFactory = require("rtl-icon-factory") /*id: 682145*/;
  var i3 = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M2.5 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0v-7h9v7a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0v7h-9V4a1 1 0 0 0-1-1M18.104 12.91a.4.4 0 0 1-.585-.355c0-.533 0-.774.004-1.582a.4.4 0 0 1 .203-.347l2.769-1.568A.4.4 0 0 1 20.697 9h1.404c.234 0 .423.21.423.468V19.95c0 .593-.483 1.073-1.075 1.073a1.07 1.07 0 0 1-1.07-1.073v-8.228z"
    })
  }), {}));
  var i6 = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M2 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0v-7h9v7a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0v7H3V4a1 1 0 0 0-1-1M22.993 19.872c0-.561-.455-1.015-1.017-1.015h-3.121l3.407-4.272q.73-.931.731-2.126c-.01-.992-.347-1.816-1.005-2.464-.647-.651-1.492-.984-2.523-.995-.931.011-1.72.34-2.356.982-.37.386-.941 1.044-.941 1.602 0 .591.48 1.07 1.07 1.07.563 0 .769-.347.993-.726.06-.101.12-.204.19-.304q.083-.117.186-.214c.262-.252.584-.376.982-.376.447.01.784.15 1.02.423.234.28.35.606.35.987q0 .219-.057.471c-.05.152-.156.341-.315.548l-4.402 5.506a.4.4 0 0 0-.087.25v1.022c0 .221.267.65.606.65h5.272c.562 0 1.017-.457 1.017-1.019"
    })
  }), {}));
  var i8 = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M2 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0v-7h9v7a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0v7H3V4a1 1 0 0 0-1-1M23 17.296q0-.766-.324-1.461a2.9 2.9 0 0 0-.877-1.044q.566-.445.816-1.001c.17-.44.252-.886.252-1.348a3.48 3.48 0 0 0-.943-2.385C21.274 9.363 20.398 9.01 19.31 9a3.18 3.18 0 0 0-2.251.932c-.349.336-.848.879-.848 1.384a1 1 0 0 0 1 1c.482 0 .767-.352 1.043-.692l.09-.11q.085-.105.192-.185c.256-.2.53-.296.834-.296q.645.014 1.049.405c.267.267.406.61.415 1.04 0 .417-.133.75-.4 1.008-.335.335-.766.387-1.212.387a.958.958 0 1 0 0 1.917h.088c.452-.002.824-.003 1.205.353.29.277.442.674.452 1.201-.01.51-.16.894-.451 1.162-.296.296-.65.44-1.076.44q-.598-.001-.944-.316l-.008-.008a8 8 0 0 1-.213-.207c-.1-.099-.178-.207-.254-.31-.193-.264-.366-.5-.81-.5a1 1 0 0 0-1 1c0 .574.543 1.19.954 1.533.635.53 1.35.84 2.174.84 1.057-.01 1.93-.35 2.609-1.018.69-.651 1.04-1.545 1.052-2.664"
    })
  }), {}));
  var i9 = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M2 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0v-7h9v7a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0v7H3V4a1 1 0 0 0-1-1M21.681 10.19c0-.658-.486-1.19-1.143-1.19-.402 0-.824.204-1.043.542l-4.428 6.821a.27.27 0 0 0-.043.145v1.62c0 .22.18.4.4.4h4.404v1.363c0 .512.43.927.941.927a.914.914 0 0 0 .912-.927v-1.363h.4a.954.954 0 0 0 .943-.956.934.934 0 0 0-.944-.932h-.399zm-4.53 6.45 2.677-4.177v4.177z"
    })
  }), {}));
  var i7 = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M4.577 1.809a.543.543 0 0 0-.819-.469l-.502.296-.004.003-.309.187c-.342.207-.858.519-1.142.701a.57.57 0 0 0-.261.485c0 .482.544.774.948.522.227-.141.465-.287.642-.395v3.478a.723.723 0 1 0 1.447 0zM3.678 8.937c-1.233 0-2.056.817-2.056 1.84 0 .139.112.251.25.251h.892a.26.26 0 0 0 .258-.259c0-.32.228-.589.609-.589a.62.62 0 0 1 .428.15.52.52 0 0 1 .16.396c0 .315-.188.579-.538.949l-1.815 1.968a.672.672 0 0 0 .494 1.127h3.003a.63.63 0 0 0 0-1.26H3.744l.933-1.047c.61-.652.99-1.127.99-1.834a1.57 1.57 0 0 0-.563-1.226c-.356-.3-.852-.466-1.426-.466M3.693 16.366c-1.006 0-1.692.478-1.946 1.178a.54.54 0 0 0 .107.553c.122.137.307.22.503.22a.77.77 0 0 0 .478-.18c.125-.098.23-.222.312-.33.096-.124.257-.224.511-.224.21 0 .37.063.472.152a.46.46 0 0 1 .16.359v.002a.5.5 0 0 1-.165.391.7.7 0 0 1-.483.16h-.14a.606.606 0 1 0 0 1.213h.168c.275 0 .468.074.59.178a.54.54 0 0 1 .186.42.55.55 0 0 1-.185.435c-.122.107-.314.184-.583.184-.32 0-.528-.114-.644-.264a1.8 1.8 0 0 0-.308-.323.77.77 0 0 0-.47-.174.68.68 0 0 0-.504.22.55.55 0 0 0-.114.55c.244.717.926 1.22 2.012 1.22.602 0 1.161-.168 1.575-.478.416-.311.683-.768.676-1.323-.01-.69-.376-1.122-.793-1.332.34-.231.63-.644.621-1.224-.019-.962-.92-1.583-2.036-1.583M8 4a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M8 12a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M8 20a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"
    })
  }), {}));
  var rtlListIcon = require("rtl-list-icon") /*id: 658544*/;
  var rtlSvgIcon = require("rtl-svg-icon") /*id: 197635*/;
  var no = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      d: "M7.86 1.753c.49 0 .889.447.889.938s-.398.84-.889.84h-.644c-.844 0-1.244.46-1.244 1.426v4.3c0 1.086-.41 1.892-1.218 2.407-.231.147-.24.543-.011.694.816.542 1.23 1.33 1.23 2.385v4.322c0 .922.4 1.405 1.243 1.405h.644c.49 0 .889.423.889.914 0 .49-.398.863-.889.863H6.817c-.978 0-1.733-.33-2.266-.944-.489-.57-.733-1.36-.733-2.325v-4.126q0-.954-.4-1.382c-.164-.185-.857-.323-1.494-.418-.532-.08-.934-.523-.924-1.06.01-.533.403-.98.93-1.06.633-.095 1.325-.23 1.488-.402q.4-.46.4-1.383V5.044c0-.987.244-1.777.733-2.348.533-.636 1.288-.943 2.266-.943zM16.295 22.247c-.491 0-.89-.447-.89-.938s.399-.84.89-.84h.643c.844 0 1.244-.46 1.244-1.425v-4.301c0-1.086.41-1.892 1.219-2.407.23-.147.239-.543.011-.694-.816-.542-1.23-1.33-1.23-2.385V4.935c0-.922-.4-1.405-1.244-1.405h-.643c-.491 0-.89-.423-.89-.914 0-.49.399-.863.89-.863h1.043c.977 0 1.733.33 2.266.944.488.57.733 1.36.733 2.325v4.126q0 .954.4 1.382c.16.18.764.32 1.342.419.53.09.933.533.923 1.07a1.1 1.1 0 0 1-.93 1.063c-.575.092-1.177.22-1.335.388q-.4.46-.4 1.382v4.104c0 .987-.245 1.777-.733 2.348-.533.636-1.289.943-2.266.943z"
    })
  }), {}));
  let nr = e => {
    let {
      onChecked: t
    } = e;
    let o = tS();
    let r = tR();
    let i = e => {
      let {
        label: o,
        icon: r,
        value: i,
        onClick: n,
        topDivider: a
      } = e;
      return {
        label: o,
        icon: r,
        value: i,
        topDivider: a,
        onClick: () => {
          if (n != null) {
            n();
          }
          if (t != null) {
            t({
              type: i,
              label: o
            });
          }
        }
      };
    };
    return arrayConcatFlattenFunction.concatAndFlatten(i({
      label: o("doc_editor_toolbar_text"),
      icon: reactJsxRuntimeCoreReexport.jsx(rtlIconComponent_1_3.RtlIcon, {}),
      value: aiEditorConstants.blockTypes.Text,
      onClick: () => {
        r.removeInlineAttributes();
      }
    }), i({
      label: o("doc_editor_toolbar_heading_1"),
      icon: reactJsxRuntimeCoreReexport.jsx(i3, {}),
      value: aiEditorConstants.blockTypes.Heading1,
      onClick: () => {
        r.setHeader({
          level: 1
        });
      }
    }), i({
      label: o("doc_editor_toolbar_heading_2"),
      icon: reactJsxRuntimeCoreReexport.jsx(i6, {}),
      value: aiEditorConstants.blockTypes.Heading2,
      onClick: () => {
        r.setHeader({
          level: 2
        });
      }
    }), i({
      label: o("doc_editor_toolbar_heading_3"),
      icon: reactJsxRuntimeCoreReexport.jsx(i8, {}),
      value: aiEditorConstants.blockTypes.Heading3,
      onClick: () => {
        r.setHeader({
          level: 3
        });
      }
    }), i({
      label: o("doc_editor_toolbar_heading_4"),
      icon: reactJsxRuntimeCoreReexport.jsx(i9, {}),
      value: aiEditorConstants.blockTypes.Heading4,
      onClick: () => {
        r.setHeader({
          level: 4
        });
      }
    }), i({
      label: o("doc_editor_toolbar_ordered_list"),
      icon: reactJsxRuntimeCoreReexport.jsx(i7, {}),
      value: aiEditorConstants.blockTypes.OrderedList,
      onClick: () => {
        r.setOrderedList();
      }
    }), i({
      label: o("doc_editor_toolbar_unordered_list"),
      icon: reactJsxRuntimeCoreReexport.jsx(rtlListIcon.ListIcon, {}),
      value: aiEditorConstants.blockTypes.UnorderedList,
      onClick: () => {
        r.setUnorderedList();
      }
    }), i({
      label: o("doc_editor_toolbar_blockquote"),
      icon: reactJsxRuntimeCoreReexport.jsx(rtlSvgIcon.RtlSvgIcon, {}),
      value: aiEditorConstants.blockTypes.Blockquote,
      topDivider: true,
      onClick: () => {
        r.setBlockquote();
      }
    }), i({
      label: o("doc_editor_toolbar_inline_code"),
      icon: reactJsxRuntimeCoreReexport.jsx(no, {}),
      value: aiEditorConstants.blockTypes.InlineCode,
      onClick: () => {
        r.setInlineCode();
      }
    }));
  };
  var ni = {
    container: "container-cqq0GR",
    "header-button": "header-button-Qk3H97",
    inner: "inner-n0lMwp",
    reverse: "reverse-SFH0C_",
    icon: "icon-KK7DeD"
  };
  let nn = e => {
    let {
      className: t,
      style: o,
      spacing: r,
      position: i,
      size: n,
      disabled: a,
      checkedAttributes: l = [],
      visible: c,
      onVisibleChange: s,
      onItemClick: d
    } = e;
    let [_, u] = useControlledStateHook.useControlledState({
      defaultValue: false,
      value: c,
      onChange: s
    });
    let [m, p] = reactCoreLibraryReexport.useState(aiEditorConstants.blockTypes.Text);
    let h = nr({
      onChecked: e => {
        let {
          type: t
        } = e;
        p(t);
        if (d != null) {
          d(e);
        }
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      let e = l.filter(e => h.find(t => t.value === e));
      if (!e.includes(m)) {
        p(arrayFirstElement.getFirstElement(e) ?? aiEditorConstants.blockTypes.Text);
      }
    }, [l]);
    let g = h.find(e => e.value === m);
    return reactJsxRuntimeCoreReexport.jsx(businessSkillBar.BusinessSkillBar, {
      contentClassName: A(ni.container, t),
      style: o,
      defaultValue: "",
      selectable: false,
      scrollable: false,
      visible: _,
      onVisibleChange: u,
      spacing: r,
      position: i,
      options: h,
      newIcon: true,
      iconSize: "middler",
      children: g && reactJsxRuntimeCoreReexport.jsxs(topBarActionItem.TopBarActionItem, {
        "data-testid": "text_tool_popover",
        onClick: e => {
          e.stopPropagation();
          u(!_);
        },
        checked: g.checked,
        bordered: _,
        disabled: a || g.disabled,
        size: n,
        newIcon: true,
        children: [g.icon, reactJsxRuntimeCoreReexport.jsx("div", {
          className: ni["header-button"],
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: A(ni.inner, {
              [ni.reverse]: _
            }),
            children: reactJsxRuntimeCoreReexport.jsx(iconChevronDown.ChevronDownIcon, {
              className: ni.icon
            })
          })
        })]
      })
    });
  };
  let na = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      checkedAttributes: o = [],
      left: r = [],
      right: i = [],
      disabled: n,
      iconSize: a,
      onTextPopoverVisibleChange: l,
      onItemClick: c,
      ...s
    } = e;
    let d = tS();
    let _ = tR();
    let [u, m] = reactCoreLibraryReexport.useState([]);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      resetPreChecked: () => {
        m([]);
      }
    }), []);
    asyncSkillDeepChangeCb.createDeepChangeCallback(() => {
      m([]);
    }, [o]);
    let p = e => {
      let {
        elementType: t,
        tooltip: r,
        onClick: i,
        icon: a
      } = e;
      return {
        type: "icon",
        icon: i && a,
        onClick: e => {
          m(e => e.includes(t) ? e.filter(e => e !== t) : dataProcessor.processData([...e, t]));
          if (i != null) {
            i(e);
          }
          if (c != null) {
            c({
              type: t,
              label: r ?? ""
            });
          }
        },
        checked: u.includes(t) || o.includes(t),
        tooltip: r,
        disabled: n
      };
    };
    return reactJsxRuntimeCoreReexport.jsx(controlBarActionListComponent.ControlBarActionList, {
      ...s,
      iconSize: a,
      newIcon: true,
      items: [...r, {
        type: "custom",
        element: reactJsxRuntimeCoreReexport.jsx(nn, {
          position: "bottomLeft",
          disabled: n,
          checkedAttributes: o,
          size: a,
          onVisibleChange: l,
          onItemClick: c
        })
      }, {
        type: "divider"
      }, p({
        elementType: aiEditorConstants.blockTypes.Bold,
        icon: reactJsxRuntimeCoreReexport.jsx(fileStatusOutlinedIcon.FileStatusOutlined, {}),
        onClick: () => {
          _.setBold();
        },
        tooltip: d("doc_editor_toolbar_strong")
      }), p({
        elementType: aiEditorConstants.blockTypes.Italic,
        icon: reactJsxRuntimeCoreReexport.jsx(rtlArrowLeftIcon_2.RtlArrowLeftIcon, {}),
        onClick: () => {
          _.setItalic();
        },
        tooltip: d("doc_editor_toolbar_italic")
      }), p({
        elementType: aiEditorConstants.blockTypes.Underline,
        icon: reactJsxRuntimeCoreReexport.jsx(pinIconComponent.PinIcon, {}),
        onClick: () => {
          _.setUnderline();
        },
        tooltip: d("doc_editor_toolbar_underline")
      }), p({
        elementType: aiEditorConstants.blockTypes.StrikeThrough,
        icon: reactJsxRuntimeCoreReexport.jsx(strikethroughRtlIcon.StrikethroughIcon, {}),
        onClick: () => {
          _.setStrikeThrough();
        },
        tooltip: d("doc_editor_toolbar_delete")
      }), ...i]
    });
  });
  var nl = {
    container: "container-k1lSNV",
    content: "content-g1ElnM",
    left: "left-uqjOzf",
    title: "title-WwCM6O",
    text: "text-zLgzAq",
    center: "center-gG3lix",
    right: "right-PEyCXX",
    "extra-tool-bottom": "extra-tool-bottom-rOtFM3",
    extraToolBottom: "extra-tool-bottom-rOtFM3",
    divider: "divider-lvBCf4",
    item: "item-m9ynaZ",
    grey: "grey-g66z0f"
  };
  let nc = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: o,
      style: r,
      editable: i = true,
      moreActions: n = [],
      charLength: a,
      wordLength: l,
      checkedAttributes: c,
      downloadable: s = true,
      onMouseDown: d,
      onClose: _
    } = e;
    let u = tS();
    let m = tR();
    let {
      ref: p,
      width: h = 0
    } = resizeObserverHooks.useResizeObserverEx();
    let {
      ref: g,
      width: f = 0
    } = resizeObserverHooks.useResizeObserverEx();
    let {
      ref: x,
      width: v = 0
    } = resizeObserverHooks.useResizeObserverEx();
    let y = v - 24;
    let b = useMediaQueryHook.mediaQueryHook({
      maxWidth: 420
    });
    let w = n.filter(e => e.position === "left-starting");
    let k = n.filter(e => e.position === "left-ending");
    let j = n.filter(e => e.position === "center-starting");
    let C = n.filter(e => e.position === "center-ending");
    let N = n.filter(e => e.position === "right-starting");
    let S = n.filter(e => !e.position || e.position === "right-ending");
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: A(nl.container, o),
      style: {
        ...r,
        "--control-bar-gap": "12px"
      },
      onMouseDown: d,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        ref: x,
        className: nl.content,
        children: [!b && reactJsxRuntimeCoreReexport.jsx(controlBarActionListComponent.ControlBarActionList, {
          className: nl.left,
          style: {
            width: Math.min(y - f - h, (y - f) / 2)
          },
          newIcon: true,
          items: [...w, {
            type: "icon",
            icon: _ && reactJsxRuntimeCoreReexport.jsx(rtlChevronLeftIcon.ChevronLeftIcon, {}),
            onClick: () => {
              if (_ != null) {
                _();
              }
              m.behavior.emit("close");
            }
          }, ...k]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          ref: g,
          className: nl.center,
          children: reactJsxRuntimeCoreReexport.jsx(na, {
            ref: t,
            disabled: !i,
            checkedAttributes: c,
            newIcon: true,
            left: j,
            right: [{
              type: "divider"
            }, {
              type: "icon",
              icon: reactJsxRuntimeCoreReexport.jsx(rtlChartIconComponent.RtlChartIcon, {}),
              tooltip: u("doc_editor_toolbar_image"),
              disabled: !i,
              onClick: () => {
                m.setImage();
              }
            }, {
              type: "custom",
              element: reactJsxRuntimeCoreReexport.jsx(iG, {
                disabled: !i,
                bottom: !isUndefinedCheck.isUndefined(l) && !isUndefinedCheck.isUndefined(a) && reactJsxRuntimeCoreReexport.jsxs("div", {
                  className: nl["extra-tool-bottom"],
                  children: [reactJsxRuntimeCoreReexport.jsx("div", {
                    className: nl.divider
                  }), !isUndefinedCheck.isUndefined(l) && reactJsxRuntimeCoreReexport.jsxs("div", {
                    className: A(nl.item, nl.grey),
                    children: [u("doc_editor_toolbar_word_count"), ":", " ", String(l ?? "-")]
                  }), !isUndefinedCheck.isUndefined(a) && reactJsxRuntimeCoreReexport.jsxs("div", {
                    className: A(nl.item, nl.grey),
                    children: [u("doc_editor_toolbar_char_count"), ":", " ", String(a ?? "-")]
                  })]
                })
              })
            }, ...C]
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: nl.right,
          style: {
            minWidth: "fit-content",
            width: (y - f) / 2
          },
          children: reactJsxRuntimeCoreReexport.jsx(controlBarActionListComponent.ControlBarActionList, {
            ref: p,
            className: nl.inner,
            newIcon: true,
            items: [...N, {
              type: "icon",
              icon: reactJsxRuntimeCoreReexport.jsx(noteOutlinedIcon.NoteOutlinedIcon, {}),
              onClick: () => {
                m.copy({
                  type: "all"
                });
                samanthaToastFactory.toastInstance.success({
                  content: u("doc_editor_toolbar_copy_success"),
                  top: 68
                });
              },
              tooltip: u("doc_editor_toolbar_copy")
            }, {
              type: "custom",
              element: reactJsxRuntimeCoreReexport.jsx(iq, {
                disabled: !s
              })
            }, ...S]
          })
        })]
      })
    });
  });
  function ns(e) {
    let {
      value: t,
      observerElementRef: o,
      style: r,
      ...i
    } = e;
    let [n, a] = reactUseRefStateHook.useRefState(null);
    let l = n.current;
    let {
      ref: c,
      height: s
    } = resizeObserverHooks.useResizeObserverEx();
    let {
      height: d
    } = resizeObserverHooks.useResizeObserverEx({
      ref: o
    });
    let {
      initialDeltaSet: _
    } = tx({
      editor: l,
      value: t
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "editor-background-RiTc1N",
      style: {
        height: s,
        ...r
      },
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "editor-content-NZ3vR4",
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: "editor-action-XyJIXu",
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: "editor-rolling-I0hvC8",
            style: {
              height: d
            }
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          ref: c,
          children: reactJsxRuntimeCoreReexport.jsx(editorZoneRenderer.EditorComponent, {
            ...i,
            className: "background-MLyuD0",
            editable: false,
            copyable: false,
            onInit: a,
            initData: _
          })
        })]
      })
    });
  }
  var skillStateHook = require("skill-state-hook") /*id: 377944*/;
  var reactUseEventListener = require("react-use-event-listener") /*id: 55281*/;
  let nu = e => {
    let {
      editor: t
    } = e;
    return editorContentOperationsHelper.hasAttributesInSelection({
      editor: t,
      attributes: {
        image: "true"
      }
    });
  };
  let nm = () => {
    let [e, t] = reactCoreLibraryReexport.useState();
    let o = reactCoreLibraryReexport.useRef();
    let r = tR().raw;
    reactCoreLibraryReexport.useEffect(() => {
      if (r) {
        r.on(editorEventConstants.editorEventTypes.SELECTION_CHANGE, i);
        return () => {
          r.off(editorEventConstants.editorEventTypes.SELECTION_CHANGE, i);
        };
      }
    }, [r]);
    let i = e => {
      if (!r) {
        return;
      }
      let t = e.current;
      if (deepEqualUtil_1.deepEqual(t.start, t.end) || nu({
        editor: r
      })) {
        a();
        return;
      }
      o.current = e.current;
    };
    let n = skillPinModalCallback.useSkillPinCallback(e => {
      if (!r) {
        return;
      }
      let i = e ?? o.current;
      if (i) {
        t(r.rectModule.getRangeRect(i));
      }
    });
    let a = skillPinModalCallback.useSkillPinCallback(() => {
      o.current = undefined;
      t(undefined);
    });
    return {
      rect: e,
      open: n,
      reset: a
    };
  };
  let np = {
    "clientside-link_background": "true"
  };
  let nh = e => e.attributes.image === "true";
  let ng = () => {
    let e = reactCoreLibraryReexport.useRef();
    let t = tR().raw;
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        t.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, i);
        t.on(editorEventConstants.editorEventTypes.DELETE_KEY, r);
        t.on(editorEventConstants.editorEventTypes.COPY, r);
        t.on(editorEventConstants.editorEventTypes.CUT, r);
        return () => {
          t.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, i);
          t.off(editorEventConstants.editorEventTypes.DELETE_KEY, r);
          t.off(editorEventConstants.editorEventTypes.COPY, r);
          t.off(editorEventConstants.editorEventTypes.CUT, r);
        };
      }
    }, [t]);
    let o = skillPinModalCallback.useSkillPinCallback(o => {
      if (!t) {
        return;
      }
      let i = o ?? t.selection.getSelection();
      if (editorContentOperations.hasValidSelection({
        editor: t,
        selection: i
      })) {
        r();
        editorContentOperationsHelper.applyAttributesToSelection({
          editor: t,
          attributes: np,
          selection: i,
          removeWhen: "never",
          skipWhen: nh,
          nonundoable: true
        });
        e.current = i;
      }
    });
    let r = skillPinModalCallback.useSkillPinCallback(() => {
      if (!t || !e.current) {
        return;
      }
      let o = t.getContentState().getZoneState(e.current.start.zoneId);
      if (!o) {
        return;
      }
      let r = new editorPositionClass.EditorPosition({
        editor: t,
        start: 0,
        len: o.getModelText().length
      }).toRange();
      editorContentOperationsHelper.applyAttributesToSelection({
        editor: t,
        attributes: np,
        selection: r,
        removeWhen: "always",
        skipWhen: nh,
        nonundoable: true
      });
      e.current = undefined;
    });
    let i = skillPinModalCallback.useSkillPinCallback(e => {
      if (t && e.options?.type === "undo") {
        r();
      }
    });
    useOnUnmountHook.useOnUnmount(r);
    return {
      setHighlight: o,
      resetHighlight: r
    };
  };
  var markdownRendererComponentWrapper = require("markdown-renderer-component-wrapper") /*id: 880688*/;
  var reactUsePreviousRef = require("react-use-previous-ref") /*id: 744719*/;
  var nv = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M16.793 21.207a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L18.5 18.086V3.5a1 1 0 1 0-2 0v14.586l-2.293-2.293a1 1 0 0 0-1.414 1.414zM7.207 2.793a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L5.5 5.914V20.5a1 1 0 1 0 2 0V5.914l2.293 2.293a1 1 0 0 0 1.414-1.414z",
      clipRule: "evenodd"
    })
  }), {}));
  var ny = rtlIconFactory.createRtlIcon(reactJsxRuntimeCoreReexport.jsx(e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M12 21a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2h-8a1 1 0 0 0-1 1m0-6a1 1 0 0 0 1 1h8a1 1 0 1 0 0-2h-8a1 1 0 0 0-1 1m-9-5a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2zM2 3a1 1 0 0 0 1 1h18a1 1 0 1 0 0-2H3a1 1 0 0 0-1 1m1.5 10a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h.75v-1.633a.8.8 0 0 1 1.309-.618l3.193 2.634a.8.8 0 0 1 0 1.234L7.559 21.25a.8.8 0 0 1-1.309-.617V19H5.5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1",
      clipRule: "evenodd"
    })
  }), {}));
  var rtlChatCheckIconComponent = require("rtl-chat-check-icon-component") /*id: 690527*/;
  var skillPinIconComponent = require("skill-pin-icon-component") /*id: 730868*/;
  var plusCircleRtlIcon = require("plus-circle-rtl-icon") /*id: 973157*/;
  let nj = e => {
    var t;
    var o;
    var r;
    if ((t = window.getSelection()) !== null && t !== undefined) {
      t.removeAllRanges();
    }
    let i = document.createRange();
    i.selectNode(e);
    if ((o = window.getSelection()) !== null && o !== undefined) {
      o.addRange(i);
    }
    document.execCommand("copy");
    if ((r = window.getSelection()) !== null && r !== undefined) {
      r.removeAllRanges();
    }
  };
  let nC = () => {
    let [e, t] = reactCoreLibraryReexport.useState(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (e) {
        setTimeout(() => {
          t(false);
        }, 2000);
      }
    }, [e]);
    return {
      isCopyDone: e,
      setCopy: () => {
        t(true);
      }
    };
  };
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var exitOutlinedIcon = require("exit-outlined-icon") /*id: 379234*/;
  let nE = e => e.flatMap(e => e.children ? nE(e.children) : e);
  let nZ = function (e = {}) {
    let {
      based: t
    } = e;
    let [o, r] = reactCoreLibraryReexport.useState(0);
    return {
      refresh: () => {
        r(e => e + 1);
      },
      refreshedKey: reactCoreLibraryReexport.useMemo(() => (isUndefinedCheck.isUndefined(t) ? [o] : [t, o]).map(String).join("_"), [t, o])
    };
  };
  var nR = {
    container: "container-maRIv7",
    "right-icon": "right-icon-oujjaf"
  };
  let n$ = e => {
    let {
      contentClassName: t,
      focus: o = false,
      rewriteActions: r = [],
      children: i,
      onClickItem: n,
      onArrowInput: a,
      visible: l,
      forceVisible: c,
      rePosKey: s,
      iconSize: d = "middle",
      fontSize: _ = "large",
      ...u
    } = e;
    let m = tR();
    let [p, h] = reactCoreLibraryReexport.useState();
    let g = reactCoreLibraryReexport.useMemo(() => nE(r), [r]);
    let {
      refreshedKey: f,
      refresh: x
    } = nZ();
    reactCoreLibraryReexport.useEffect(() => {
      m.on("scroll", v);
      return () => {
        m.off("scroll", v);
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (!isUndefinedCheck.isUndefined(p)) {
        h(Math.min(g.length - 1, p));
      }
    }, [g.length]);
    reactCoreLibraryReexport.useEffect(() => {
      h(o ? 0 : undefined);
    }, [o]);
    reactUseEventListener.useEventListener("ArrowUp", e => {
      if (l) {
        if (a != null) {
          a();
        }
        if (!!o && !isUndefinedCheck.isUndefined(p)) {
          e.preventDefault();
          h(Math.max(0, p - 1));
        }
      }
    });
    reactUseEventListener.useEventListener("ArrowDown", e => {
      if (l) {
        if (a != null) {
          a();
        }
        if (!!o && !isUndefinedCheck.isUndefined(p)) {
          e.preventDefault();
          h(Math.min(g.length - 1, p + 1));
        }
      }
    });
    reactUseEventListener.useEventListener("Enter", e => {
      if (!l || !o || isUndefinedCheck.isUndefined(p)) {
        return;
      }
      e.preventDefault();
      let t = g[p];
      if (t) {
        y(t);
      }
    });
    let v = skillPinModalCallback.useSkillPinCallback(() => {
      requestAnimationFrame(x);
    });
    let y = e => {
      let {
        onClick: t,
        key: o
      } = e;
      if (t) {
        t();
        return;
      }
      if (o) {
        if (n != null) {
          n(o);
        }
      }
    };
    let b = (e, t) => {
      let o = t.flatMap(e => {
        return e.children ?? e;
      });
      let r = arrayFirstElement.getFirstElement(o);
      let i = lastElementHelper.getLastElement(o);
      let n = r && g.indexOf(r);
      let a = i && g.indexOf(i);
      return !isUndefinedCheck.isUndefined(n) && !isUndefinedCheck.isUndefined(a) && e <= a && e >= n;
    };
    let w = e => e.map(e => {
      let {
        key: t,
        label: o,
        icon: r,
        children: i
      } = e;
      let n = g.indexOf(e);
      return {
        value: t ?? "",
        icon: r,
        label: o,
        hovered: n === p || !!i && !isUndefinedCheck.isUndefined(p) && !!b(p, i),
        rightIcon: n === p ? reactJsxRuntimeCoreReexport.jsx(exitOutlinedIcon.ExitOutlined, {
          className: nR["right-icon"]
        }) : undefined,
        onClick: () => {
          y(e);
        },
        subOptions: i && w(i)
      };
    });
    return reactJsxRuntimeCoreReexport.jsx(businessSkillBar.BusinessSkillBar, {
      ...u,
      iconSize: d,
      fontSize: _,
      rePosKey: `${s}_${f}`,
      visible: l,
      contentClassName: A(nR.container, t),
      defaultValue: "",
      selectable: false,
      scrollable: false,
      newIcon: true,
      forceVisible: !!r.length && c,
      options: w(r),
      onItemInViewChange: e => {
        let {
          current: t,
          parents: o,
          visible: r
        } = e;
        m.behavior.emit("rewriteOptionVisibleChange", {
          current: t,
          parents: o,
          visible: r
        });
      },
      onItemClick: e => {
        let {
          current: t,
          parents: o
        } = e;
        m.behavior.emit("rewriteOptionClick", {
          current: t,
          parents: o
        });
      },
      children: i
    });
  };
  var nT = {
    container: "container-UrT6RF",
    result: "result-wcVQ4v",
    text: "text-_fYafR",
    actions: "actions-P92jbW",
    left: "left-SZWeOH",
    right: "right-MouU7a",
    icon: "icon-qbdgYr",
    "regenerate-switch": "regenerate-switch-ulpzlw",
    disabled: "disabled-IdIhN2",
    input: "input-Og7010",
    center: "center-c05eiz",
    textarea: "textarea-gdQZfQ",
    "send-button": "send-button-oZHqdg",
    "break-button": "break-button-YycvmN",
    hoverable: "hoverable-kr3enr"
  };
  let nI = e => {
    let {
      width: t,
      rewriteActions: o = [],
      delayShowActions: r = false,
      onGenerateByKey: i,
      onGenerateByText: n,
      onGenerateWithEmpty: a,
      onInsert: l,
      onReplace: c,
      onExit: s
    } = e;
    let d = tS();
    let _ = tR();
    let u = reactCoreLibraryReexport.useRef(false);
    let m = reactCoreLibraryReexport.useRef(null);
    let p = reactCoreLibraryReexport.useRef(null);
    let [h, g] = reactCoreLibraryReexport.useState(false);
    let [f, x] = reactCoreLibraryReexport.useState();
    let [v, y] = reactCoreLibraryReexport.useState();
    let [b, w] = reactCoreLibraryReexport.useState();
    let [k, j] = reactCoreLibraryReexport.useState(false);
    let [C, N] = reactCoreLibraryReexport.useState(false);
    let S = reactUsePreviousRef.usePreviousRef({
      value: C
    });
    let [E, Z] = reactCoreLibraryReexport.useState();
    let {
      ref: R,
      height: $
    } = resizeObserverHooks.useResizeObserverEx();
    let {
      setNext: T,
      setPrev: F,
      push: W,
      reset: z,
      currentValue: M,
      hasPrev: P,
      hasNext: L,
      currentIndex: B,
      count: O
    } = id();
    let {
      isCopyDone: K,
      setCopy: D
    } = nC();
    let {
      value: J,
      isEnd: G,
      isFinished: V,
      isError: X,
      stop: q
    } = t_({
      source: v,
      enableSmooth: false,
      onEnd: e => {
        let {
          type: t
        } = e;
        if (t === "finished") {
          if (u.current) {
            W(J);
          } else {
            z(J);
          }
        }
      },
      onStart: () => {
        j(true);
      },
      onStartReset: () => {
        j(false);
      },
      onError: e => {
        if (flowDocErrorClass.isFlowDocError(e)) {
          Z(e.message);
        }
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      Y();
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (h) {
        N(!b);
      }
    }, [h]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!isUndefinedCheck.isUndefined(b)) {
        N(!b);
      }
    }, [b]);
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (v) {
        N(false);
      }
    }, [v]);
    reactUseEventListener.useEventListener("Escape", () => {
      if (!G) {
        Q();
        return;
      }
      if (s != null) {
        s();
      }
    });
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (!G) {
        g(false);
      }
    }, [G]);
    let U = functionInvoker.invoke(() => X ? E ?? "" : G ? M ?? "" : J);
    let Y = async () => {
      if (r) {
        if (!isUndefinedCheck.isUndefined(S.current)) {
          return;
        }
        await promiseAsyncUtilities.createDelayedPromise(100);
      }
      N(true);
    };
    let Q = () => {
      if (!G) {
        q();
        _.behavior.emit("rewriteAbort");
        if (!O) {
          j(false);
        }
      }
    };
    let ee = async e => {
      if (e.type === "text") {
        let t = await (n == null ? undefined : n(e.value));
        if (!t) {
          if (a != null) {
            a();
          }
          return;
        }
        y(t);
      } else if (e.type === "key") {
        let t = await (i == null ? undefined : i(e.value));
        if (!t) {
          if (a != null) {
            a();
          }
          return;
        }
        y(t);
      }
    };
    let eo = e => {
      u.current = false;
      x(e);
      ee(e);
    };
    let er = async () => {
      if (n && b) {
        eo({
          type: "text",
          value: {
            text: b,
            prevGeneratedText: M
          }
        });
        await promiseAsyncUtilities.createDelayedPromise(100);
        w(undefined);
        _.behavior.emit("rewriteGenerateByText");
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-testid": "canvas_rewrite_panel",
      ref: R,
      className: nT.container,
      style: {
        width: t
      },
      onMouseDown: e => {
        e.stopPropagation();
        N(false);
      },
      children: [k && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: nT.result,
        children: [reactJsxRuntimeCoreReexport.jsx(markdownRendererComponentWrapper.MdBoxLazy, {
          ref: m,
          className: nT.text,
          markDown: U,
          smooth: {
            enable: !G
          },
          autoFixSyntax: {
            autoFixEnding: !G
          }
        }), V && reactJsxRuntimeCoreReexport.jsxs("div", {
          className: nT.actions,
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: nT.left,
            children: [reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
              "data-testid": "canvas_rewrite_replace_button",
              type: "primary",
              icon: reactJsxRuntimeCoreReexport.jsx(nv, {}),
              onClick: () => {
                if (M) {
                  if (c != null) {
                    c(M);
                  }
                  if (s != null) {
                    s();
                  }
                  _.behavior.emit("rewriteReplace");
                }
              },
              children: d("doc_editor_ai_skill_panel_replace")
            }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
              "data-testid": "canvas_rewrite_insert_button",
              type: "tertiary",
              icon: reactJsxRuntimeCoreReexport.jsx(ny, {}),
              onClick: () => {
                if (M) {
                  if (l != null) {
                    l(M);
                  }
                  if (s != null) {
                    s();
                  }
                  _.behavior.emit("rewriteInsert");
                }
              },
              children: d("doc_editor_ai_skill_panel_insert")
            })]
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: nT.right,
            children: [O > 1 && reactJsxRuntimeCoreReexport.jsxs("div", {
              className: nT["regenerate-switch"],
              children: [reactJsxRuntimeCoreReexport.jsx(rtlChevronLeftIcon.ChevronLeftIcon, {
                className: A(nT.icon, {
                  [nT.disabled]: !P
                }),
                onClick: F
              }), reactJsxRuntimeCoreReexport.jsxs("div", {
                className: nT.text,
                children: [B + 1, " / ", O]
              }), reactJsxRuntimeCoreReexport.jsx(arrowRightRtlIcon.ArrowRightRtlIcon, {
                className: A(nT.icon, {
                  [nT.disabled]: !L
                }),
                onClick: T
              })]
            }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
              "data-testid": "canvas_rewrite_copy_button",
              type: "tertiary",
              icon: K ? reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {
                className: nT.icon
              }) : reactJsxRuntimeCoreReexport.jsx(noteOutlinedIcon.NoteOutlinedIcon, {
                className: nT.icon
              }),
              onClick: () => {
                var e;
                let o = ((e = m.current) === null || e === undefined ? undefined : e.getRootElement()) ?? null;
                if (!K && o) {
                  nj(o);
                  D();
                  _.behavior.emit("rewriteCopy");
                }
              }
            }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
              "data-testid": "canvas_rewrite_regenerate_button",
              type: "tertiary",
              icon: reactJsxRuntimeCoreReexport.jsx(refreshRtlIcon.RefreshIcon, {
                className: nT.icon
              }),
              onClick: () => {
                if (f) {
                  u.current = true;
                  ee(f);
                  _.behavior.emit("rewriteRegenerate");
                }
              }
            }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
              "data-testid": "canvas_rewrite_delete_button",
              type: "tertiary",
              icon: reactJsxRuntimeCoreReexport.jsx(calculatorIconComponent.CalculatorIcon, {
                className: nT.icon
              }),
              onClick: () => {
                y(undefined);
                j(false);
                x(undefined);
                w(undefined);
                N(true);
                Z(undefined);
                _.behavior.emit("rewriteCancel");
              }
            })]
          })]
        })]
      }), reactJsxRuntimeCoreReexport.jsx(n$, {
        rewriteActions: o,
        visible: G && C,
        mouseEnterDelay: 1000,
        spacing: 4,
        position: "bottomLeft",
        focus: !h,
        rePosKey: `${$}`,
        onClickItem: e => {
          eo({
            type: "key",
            value: {
              key: e,
              prevGeneratedText: M
            }
          });
        },
        onArrowInput: () => {
          var e;
          if ((e = p.current) !== null && e !== undefined) {
            e.blur();
          }
          N(true);
        },
        onMouseDown: e => {
          e.stopPropagation();
        },
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: nT.input,
          children: [reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
            size: "larger",
            type: "lite",
            color: "purple",
            newIcon: true,
            children: reactJsxRuntimeCoreReexport.jsx(skillBarIconComponent.SkillBarIcon, {
              className: nT.icon
            })
          }), G ? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [reactJsxRuntimeCoreReexport.jsx(semiTextareaComponent.TextArea, {
              "data-testid": "canvas_rewrite_input",
              ref: p,
              className: A(nT.center, nT.textarea),
              value: b,
              onChange: w,
              autosize: {
                minRows: 1,
                maxRows: 3
              },
              onKeyDown: e => {
                if (e.key === "Enter" && !e.shiftKey && !e.altKey) {
                  e.preventDefault();
                  e.stopPropagation();
                  er();
                  return;
                }
                if (e.key === "Escape") {
                  e.preventDefault();
                }
              },
              placeholder: d("doc_editor_ai_skill_input_placeholder"),
              onFocus: () => {
                g(true);
              },
              onBlur: () => {
                g(false);
              },
              onMouseDown: e => {
                e.stopPropagation();
              }
            }), reactJsxRuntimeCoreReexport.jsx(skillPinIconComponent.SkillPinIcon, {
              className: A(nT.right, nT["send-button"], {
                [nT.disabled]: !b,
                [nT.hoverable]: !!b
              }),
              "data-testid": "canvas_rewrite_send_button",
              onClick: er
            })]
          }) : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [reactJsxRuntimeCoreReexport.jsx("div", {
              className: nT.center,
              children: reactJsxRuntimeCoreReexport.jsx(rz, {
                className: nT.text,
                icon: false
              })
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: nT.right,
              children: reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
                "data-testid": "canvas_rewrite_stop_button",
                size: "huge",
                onClick: Q,
                newIcon: true,
                children: reactJsxRuntimeCoreReexport.jsx(plusCircleRtlIcon.PlusCircleIcon, {
                  className: nT["break-button"]
                })
              })
            })]
          })]
        })
      })]
    });
  };
  let nF = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      closeOnEsc: o = true,
      visible: r,
      onVisibleChange: i,
      checkedAttributes: n,
      rewriteActions: a,
      docRootRef: l,
      onGenerateByKey: c,
      onGenerateByText: s,
      onInsert: d,
      onReplace: _
    } = e;
    let u = tS();
    let m = tR();
    let p = reactCoreLibraryReexport.useRef(true);
    let {
      ref: h,
      width: g
    } = resizeObserverHooks.useResizeObserverEx();
    let {
      ref: f,
      height: x
    } = resizeObserverHooks.useResizeObserverEx();
    let [v, y] = reactCoreLibraryReexport.useState(false);
    let [b, w] = reactCoreLibraryReexport.useState(false);
    let [k, j] = skillStateHook.useSkillState({
      value: r,
      onChange: i,
      defaultValue: true
    });
    let [C, N] = reactCoreLibraryReexport.useState(false);
    let {
      open: S,
      reset: E,
      rect: Z
    } = nm();
    let {
      setHighlight: R,
      resetHighlight: $
    } = ng();
    let T = skillPinModalCallback.useSkillPinCallback(e => {
      let {
        range: t,
        showRewrite: o = false,
        highlight: r = true
      } = e;
      S(t);
      y(o);
      w(true);
      p.current = r;
      if (t) {
        var i;
        if ((i = m.raw) !== null && i !== undefined) {
          i.selection.setSelection(t);
        }
      }
    });
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      open: T,
      close: () => {
        F();
      }
    }), []);
    useClickOutsideHook.useClickOutside(() => f.current, async () => {
      if (!v && !C) {
        await promiseAsyncUtilities.createDelayedPromise(0);
        j(false);
      }
    });
    reactUseEventListener.useEventListener("Escape", () => {
      if ((!v || b) && o) {
        j(false);
      }
    });
    useEventListenerHook.useEventListener("mouseup", async () => {
      await promiseAsyncUtilities.createDelayedPromise(100);
      S();
    }, {
      target: l
    });
    useEventListenerHook.useEventListener("keydown", async e => {
      if (e.ctrlKey || e.metaKey || e.key === "a") {
        await promiseAsyncUtilities.createDelayedPromise(100);
        S();
      }
    }, {
      target: l
    });
    useOnUnmountHook.useOnUnmount(() => {
      $();
      m.behavior.emit("selectionToolbarVisibleChange", {
        visible: false
      });
    });
    reactCoreLibraryReexport.useEffect(() => {
      W(k);
      m.behavior.emit("selectionToolbarVisibleChange", {
        visible: k
      });
    }, [k]);
    reactCoreLibraryReexport.useEffect(() => {
      if (v) {
        var e;
        if ((e = m.raw) !== null && e !== undefined) {
          e.blur();
        }
      } else {
        w(false);
      }
    }, [v]);
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (!C) {
        j(false);
      }
    }, [C]);
    asyncSkillDeepChangeCb.createDeepChangeCallback(() => {
      j(!!Z);
    }, [Z]);
    let F = () => {
      p.current = true;
      E();
      $();
    };
    let W = async e => {
      if (e) {
        if (p.current) {
          R();
        }
      } else {
        p.current = true;
        $();
        await promiseAsyncUtilities.createDelayedPromise(100);
        y(false);
      }
    };
    if (!Z) {
      return null;
    }
    let {
      top: z,
      height: M
    } = Z;
    return reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
      trigger: "custom",
      className: "popover-lB5P1g",
      rePosKey: `${editorContentOperations.serializeRect(Z)}_${v}_${x}`,
      position: "bottom",
      content: reactJsxRuntimeCoreReexport.jsx("div", {
        ref: f,
        className: "container-cT6T4t",
        onMouseUp: e => {
          e.stopPropagation();
        },
        onClick: e => {
          e.stopPropagation();
        },
        children: v ? reactJsxRuntimeCoreReexport.jsx(nI, {
          width: g,
          rewriteActions: a,
          delayShowActions: b,
          onGenerateByKey: c,
          onGenerateByText: s,
          onInsert: d,
          onReplace: _,
          onExit: () => {
            y(false);
          },
          onGenerateWithEmpty: () => {
            j(false);
          }
        }) : reactJsxRuntimeCoreReexport.jsx(na, {
          className: "toolbar-c1Cbs9",
          spacing: "small",
          iconSize: "large",
          checkedAttributes: n,
          onTextPopoverVisibleChange: N,
          left: [{
            type: "custom",
            element: reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
              "data-testid": "ai_skill_button",
              className: "ai-skill-button-bRiHwW",
              size: "large",
              color: "purple",
              newIcon: true,
              title: reactJsxRuntimeCoreReexport.jsx("div", {
                className: "title-srFC97",
                children: u("doc_editor_ai_skill")
              }),
              onClick: () => {
                y(true);
              },
              children: reactJsxRuntimeCoreReexport.jsx(skillBarIconComponent.SkillBarIcon, {})
            })
          }, {
            type: "divider"
          }],
          right: [{
            type: "divider"
          }, {
            type: "custom",
            element: reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
              size: "large",
              newIcon: true,
              title: u("doc_editor_code_block_copy"),
              onClick: () => {
                m.copy({
                  type: "selection"
                });
                samanthaToastFactory.toastInstance.success({
                  content: u("doc_editor_toolbar_copy_success"),
                  top: 68
                });
                j(false);
              },
              children: reactJsxRuntimeCoreReexport.jsx(noteOutlinedIcon.NoteOutlinedIcon, {})
            })
          }],
          onItemClick: e => {
            let {
              type: t,
              label: o
            } = e;
            m.behavior.emit("selectionToolbarClick", {
              type: t,
              label: o
            });
          }
        })
      }),
      spacing: 4,
      visible: k,
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: "anchor-rect-APg3lT",
        ref: h,
        style: v ? {
          left: -12,
          top: z,
          width: "calc(100% + 24px)",
          height: M
        } : Z
      })
    });
  });
  var canvasDocPanelIcon_1 = require("canvas-doc-panel-icon_1") /*id: 507860*/;
  let nz = e => {
    let {
      start: {
        zoneId: t
      }
    } = e;
    return t === zeroConstantModule_1.versionValue;
  };
  let nM = (e, t) => {
    let o = e.getContentState();
    let {
      start: {
        zoneId: r,
        line: i
      },
      end: {
        line: n
      }
    } = t;
    let a = o.getZoneState(r);
    if (a) {
      return numericRangeUtil.createRange(i, n + 1).every(e => {
        let t = a.getLine(e);
        return !!t && (t.getText() === "\n" || t.getText() === " \n" && t.getEntities([[r7]]).length);
      });
    }
  };
  let nP = e => {
    let {
      editor: t,
      refreshKey: o
    } = e;
    let [r, i] = reactCoreLibraryReexport.useState();
    let n = () => {
      if (!t) {
        return;
      }
      let e = t == null ? undefined : t.selection.getSelection();
      if (e.isCollapsed() && nz(e) && nM(t, e)) {
        i(t.rectModule.getRangeRect(e));
      } else {
        i(undefined);
      }
    };
    let a = skillPinModalCallback.useSkillPinCallback(() => {
      n();
    });
    reactCoreLibraryReexport.useEffect(() => {
      n();
    }, [o]);
    reactCoreLibraryReexport.useEffect(() => {
      if (t != null) {
        t.on(editorEventConstants.editorEventTypes.SELECTION_CHANGE, a);
      }
      return () => {
        if (t != null) {
          t.off(editorEventConstants.editorEventTypes.SELECTION_CHANGE, a);
        }
      };
    }, [t]);
    return {
      placeholderArea: r
    };
  };
  var nL = {
    selectContainer: "selectContainer-mMYnMi",
    header: "header-ZOF8kO",
    box: "box-GqDT3y",
    item: "item-n8xFr3",
    itemContainer: "itemContainer-FYCg2C",
    container: "container-wKAJjL",
    block: "block-zkFsT9",
    hidden: "hidden-CoZ5fa"
  };
  let nB = e => {
    let {
      className: t,
      style: o,
      disabled: r,
      position: i = "bottomLeft",
      checkedAttributes: n,
      bottom: a,
      refreshKey: l,
      showPlaceholder: c = true
    } = e;
    let s = tS();
    let d = tR();
    let [_, u] = reactCoreLibraryReexport.useState(false);
    let [m, {
      setFalse: p,
      setTrue: h
    }] = useBooleanHook.useBoolean(true);
    let [g, f] = reactCoreLibraryReexport.useState(true);
    let {
      placeholderArea: x
    } = nP({
      editor: d.raw,
      refreshKey: l
    });
    let v = throttledPathFilterStringify.throttledPathStr(x, ["left", "top"]);
    let y = d.raw;
    reactCoreLibraryReexport.useEffect(() => {
      if (y) {
        y.on(editorEventConstants.editorEventTypes.COMPOSITION_START, p);
        y.on(editorEventConstants.editorEventTypes.COMPOSITION_END, h);
        y.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, b);
        return () => {
          y.off(editorEventConstants.editorEventTypes.COMPOSITION_START, p);
          y.off(editorEventConstants.editorEventTypes.COMPOSITION_END, h);
          y.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, b);
        };
      }
    }, [y]);
    let b = reactFunctionMemoHook.useMemoizedCallback(() => {
      var e;
      if (!y) {
        return;
      }
      let t = y.selection.getSelection();
      if (!t.isCollapsed()) {
        return;
      }
      let o = (e = y.getContentState().getZoneState(t.start.zoneId)) === null || e === undefined ? undefined : e.getLine(t.start.line);
      if (o) {
        f(o.getText() === "\n");
      }
    });
    let w = e => {
      let {
        tooltip: t,
        onClick: o,
        icon: i
      } = e;
      return {
        type: "icon",
        icon: o && i,
        onClick: e => {
          var t;
          u(false);
          if (o != null) {
            o(e);
          }
          if ((t = d.raw) !== null && t !== undefined) {
            t.selection.focus();
          }
        },
        tooltip: t,
        disabled: r
      };
    };
    let k = [w({
      tooltip: s("doc_editor_toolbar_heading_1"),
      icon: reactJsxRuntimeCoreReexport.jsx(i3, {}),
      onClick: () => {
        d.setHeader({
          level: 1
        });
      }
    }), w({
      tooltip: s("doc_editor_toolbar_heading_2"),
      icon: reactJsxRuntimeCoreReexport.jsx(i6, {}),
      onClick: () => {
        d.setHeader({
          level: 2
        });
      }
    }), w({
      tooltip: s("doc_editor_toolbar_heading_3"),
      icon: reactJsxRuntimeCoreReexport.jsx(i8, {}),
      onClick: () => {
        d.setHeader({
          level: 3
        });
      }
    }), w({
      tooltip: s("doc_editor_toolbar_heading_4"),
      icon: reactJsxRuntimeCoreReexport.jsx(i9, {}),
      onClick: () => {
        d.setHeader({
          level: 4
        });
      }
    }), w({
      tooltip: s("doc_editor_toolbar_unordered_list"),
      icon: reactJsxRuntimeCoreReexport.jsx(rtlListIcon.ListIcon, {}),
      onClick: () => {
        d.setUnorderedList();
      }
    }), w({
      tooltip: s("doc_editor_toolbar_ordered_list"),
      icon: reactJsxRuntimeCoreReexport.jsx(i7, {}),
      onClick: () => {
        d.setOrderedList();
      }
    }), w({
      icon: reactJsxRuntimeCoreReexport.jsx(rtlSvgIcon.RtlSvgIcon, {}),
      onClick: () => {
        d.setBlockquote();
      },
      tooltip: s("doc_editor_toolbar_blockquote")
    }), w({
      icon: reactJsxRuntimeCoreReexport.jsx(no, {}),
      onClick: () => {
        d.setCodeBlock();
      },
      tooltip: s("doc_editor_toolbar_code_block")
    }), w({
      icon: reactJsxRuntimeCoreReexport.jsx(rtlLinkIcon.LinkIcon, {}),
      onClick: () => {
        d.setLink();
      },
      tooltip: s("doc_editor_toolbar_link")
    })];
    if (!isEmptyUtil.isEmpty(n) || isEmptyUtil.isEmpty(x)) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(businessSkillBar.BusinessSkillBar, {
          contentClassName: A(nL.selectContainer, t),
          itemClassName: nL.itemContainer,
          style: o,
          defaultValue: "",
          selectable: false,
          scrollable: false,
          visible: _,
          newIcon: true,
          iconSize: "middle",
          onVisibleChange: u,
          position: i,
          title: reactJsxRuntimeCoreReexport.jsx("div", {
            className: nL.header,
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: nL.box,
              children: k.map((e, t) => {
                let {
                  disabled: o,
                  checked: r,
                  onClick: i,
                  tooltip: n,
                  icon: a
                } = e;
                return reactJsxRuntimeCoreReexport.jsx("div", {
                  className: A(nL.item),
                  children: reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
                    disabled: o,
                    checked: r,
                    onClick: e => {
                      e.stopPropagation();
                      if (i != null) {
                        i(e);
                      }
                    },
                    tooltip: n,
                    size: "larger",
                    newIcon: true,
                    children: a
                  })
                }, t);
              })
            })
          }),
          options: arrayConcatFlattenFunction.concatAndFlatten({
            label: s("doc_editor_image_search_web"),
            icon: reactJsxRuntimeCoreReexport.jsx(searchIconComponent_2.SearchIcon, {}),
            value: "search",
            topDivider: true,
            onClick: () => {
              d.setImage({
                attribute: {
                  directive: oh.AutoWebSearch
                }
              });
            }
          }, {
            label: s("doc_editor_image_image_generate"),
            icon: reactJsxRuntimeCoreReexport.jsx(rtlSettingsIconComponent.RtlSettingsIcon, {}),
            value: "ai_search",
            onClick: () => {
              d.setImage({
                attribute: {
                  directive: oh.AutoAiSearch
                }
              });
            }
          }, {
            label: s("doc_editor_image_local_update"),
            icon: reactJsxRuntimeCoreReexport.jsx(canvasDocPanelIcon_1.DocPanelOutlined, {}),
            value: "upload",
            onClick: () => {
              d.setImage({
                attribute: {
                  directive: oh.AutoLocalUpload
                }
              });
            }
          }, {
            label: s("doc_editor_toolbar_table"),
            icon: reactJsxRuntimeCoreReexport.jsx(inlineDocxPanelIcon.InlineDocxPanelIcon, {}),
            value: "table",
            topDivider: true,
            onClick: () => {
              d.setTable();
            }
          }),
          bottom: a,
          children: reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
            onClick: () => {
              u(true);
            },
            className: nL.container,
            disabled: r,
            style: v,
            size: "small",
            newIcon: true,
            children: reactJsxRuntimeCoreReexport.jsx(plusIcon.PlusIcon, {
              className: nL.icon
            })
          })
        }), c && m && g && isEmptyUtil.isEmpty(n) && reactJsxRuntimeCoreReexport.jsx("div", {
          style: v,
          className: nL.block,
          children: s("doc_editor_newline_placeholder")
        })]
      });
    }
  };
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var reactDeepMemoHook = require("react-deep-memo-hook") /*id: 196129*/;
  var rtlWarningIcon = require("rtl-warning-icon") /*id: 317332*/;
  var wrenchToolIcon = require("wrench-tool-icon") /*id: 457145*/;
  let nH = (e, t) => {
    let o = e.getContentState();
    let {
      start: {
        zoneId: r
      }
    } = t;
    let i = o.getZoneState(r);
    if (!i) {
      throw Error(`Cannot find zone state of range start zone: ${r}`);
    }
    return new deltaSetCore.DeltaSet({
      [r]: i.slice(t.start, t.end).getContent()
    });
  };
  let nJ = (e, t) => {
    let {
      start: {
        zoneId: o
      }
    } = t;
    let r = nH(e, t).get(o);
    if (!r) {
      throw Error(`Cannot find zone when get range text: ${o}`);
    }
    return new editorZoneDeltaState.ZoneDeltaState(o, r).getModelText();
  };
  let nG = (e, t) => {
    let o = nX(e, t);
    if (!o) {
      return nJ(e, t);
    }
    let r = t.toPosition();
    let i = o.toPosition();
    let n = i.start + i.len;
    let a = r.start + r.len - n;
    let l = new editorPositionClass.EditorPosition({
      editor: e,
      zoneId: t.start.zoneId,
      start: n,
      len: a
    }).toRange();
    return nJ(e, l);
  };
  let nV = (e, t) => {
    var o;
    var r;
    let {
      start: {
        zoneId: i
      }
    } = t;
    if (!editorContentOperations.hasValidSelection({
      editor: e,
      selection: t
    })) {
      return null;
    }
    let n = (o = e.getContentState().getZoneState(i)) === null || o === undefined ? undefined : o.slice(t.start, t.end);
    if (!n) {
      return null;
    }
    let a = n.getLine(0);
    if (a && a.hasLineMarker() && ((r = a.getAttributes().toMap().heading) === null || r === undefined ? undefined : r.startsWith("h"))) {
      return a;
    } else {
      return null;
    }
  };
  let nX = function (e, t, o = {}) {
    let {
      withEndline: r = false
    } = o;
    let i = nV(e, t);
    if (!i) {
      return null;
    }
    let {
      start: n
    } = t.toPosition();
    let a = i.getOffset();
    let l = i.getText().endsWith("\n");
    return new editorPositionClass.EditorPosition({
      editor: e,
      zoneId: t.start.zoneId,
      start: n + a.start,
      len: a.end - a.start - (l && !r ? 1 : 0)
    }).toRange();
  };
  let nq = (e, t) => {
    let o = nV(e, t);
    if (o) {
      return o.getText().trim();
    } else {
      return null;
    }
  };
  let nU = (e, t) => {
    let o = nV(e, t);
    if (o) {
      return editorDeltaSetUtils.getHeadingLevel(o.getLineAttributes().toMap());
    } else {
      return null;
    }
  };
  let nY = e => {
    let {
      editor: t,
      range: o,
      onError: r
    } = e;
    let [i, n] = reactCoreLibraryReexport.useState();
    let [a, l] = reactCoreLibraryReexport.useState();
    let [c, s] = reactCoreLibraryReexport.useState(o);
    let d = reactCoreLibraryReexport.useRef();
    let _ = reactCoreLibraryReexport.useRef();
    let [u, m] = reactCoreLibraryReexport.useState(true);
    let p = reactCoreLibraryReexport.useRef(false);
    let h = u && i ? c : o;
    asyncSkillDeepChangeCb.createDeepChangeCallback(() => {
      j();
    }, [o]);
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (u) {
        editorZoneDeltaOps.replaceZoneRange({
          editor: t,
          range: o,
          replaceBy: d.current,
          nonundoable: true
        });
      } else {
        k();
        editorZoneDeltaOps.replaceZoneRange({
          editor: t,
          range: c,
          replaceBy: _.current,
          nonundoable: true
        });
      }
    }, [u]);
    let {
      isEnd: g,
      isError: f,
      isFinished: x,
      isStarted: v,
      stop: y,
      getMergedRebase: b
    } = th({
      editor: t,
      value: i,
      clearWhenEmpty: false,
      initialContent: a,
      process: e => editorDeltaSetUtils.concatDeltaAt(t, h.start, e),
      onDiff: e => {
        let {
          rawDiff: r
        } = e;
        d.current = (d.current ?? editorDeltaSetUtils.createInitialDelta()).compose(r);
        let {
          start: i,
          zoneId: n
        } = h.toPosition();
        s(new editorPositionClass.EditorPosition({
          editor: t,
          zoneId: n,
          start: i,
          len: Math.min(editorDeltaSetUtils.getDeltaLength(d.current), editorDeltaSetUtils.getZoneTextLength(t, n) - i)
        }).toRange());
      },
      onBeforeApply: e => {
        if (!editorDeltaSetUtils.isReadOnlyDelta(e)) {
          k();
        }
      },
      onError: e => {
        k();
        if (r != null) {
          r(e);
        }
      }
    });
    let w = () => {
      editorContentOperations.insertSpaceAtPoint({
        editor: t,
        point: h.start,
        type: editorZoneDeltaOps.modeAutoApply,
        nonundoable: true,
        normalize: false
      });
      p.current = true;
    };
    let k = () => {
      if (p.current) {
        editorContentOperations.deleteCharacterAtPoint({
          editor: t,
          point: h.start,
          type: editorZoneDeltaOps.modeAutoApply,
          nonundoable: true
        });
        p.current = false;
      }
    };
    let j = function () {
      let e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
      if (e) {
        _.current = nH(t, h);
      }
      k();
      d.current = undefined;
      n(undefined);
      l(undefined);
      s(h);
    };
    return {
      isEnd: g,
      isError: f,
      isFinished: x,
      isStarted: v,
      contentRange: h,
      showDraft: u,
      stop: y,
      reset: j,
      setStreaming: e => {
        let {
          source: o,
          initialContent: r
        } = e;
        if (!g) {
          throw Error("Cannot set streaming when streaming");
        }
        j(false);
        m(true);
        let {
          start: i,
          zoneId: a
        } = h.toPosition();
        s(new editorPositionClass.EditorPosition({
          editor: t,
          zoneId: a,
          start: i,
          len: 0
        }).toRange());
        editorZoneDeltaOps.replaceZoneRange({
          editor: t,
          range: h,
          nonundoable: true
        });
        w();
        n(o);
        l(r);
      },
      switchToDrafted: () => {
        if (!g) {
          y();
        }
        m(true);
      },
      switchToInitial: () => {
        if (!g) {
          y();
        }
        m(false);
      },
      getMergedRebase: b
    };
  };
  function nQ(e) {
    let {
      className: t,
      style: o,
      options: r,
      defaultValue: i,
      value: n,
      onChange: a
    } = e;
    let l = reactDeepMemoHook.useDeepMemo(() => {
      let t = arrayFirstElement.getFirstElement(r);
      return (t == null ? undefined : t.key) ?? i;
    }, [r, i]);
    let [c, s] = useControlledStateHook.useControlledState({
      defaultValue: l,
      value: n,
      onChange: e => {
        if (!isUndefinedCheck.isUndefined(e) && a != null) {
          a(e);
        }
      }
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: A("container-VusY4N", t),
      style: o,
      children: r.map(e => {
        let {
          key: t,
          title: o
        } = e;
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: A("item-cbE5Uu", {
            "selected-tAa2R_": c === t
          }),
          onClick: () => {
            s(t);
          },
          children: o
        });
      })
    });
  }
  var n0 = {
    container: "container-G4CSg6",
    top: "top-jzVuAW",
    row: "row-MSyeoT",
    title: "title-CLjVmI",
    "input-wrapper": "input-wrapper-SKhdXK",
    skeleton: "skeleton-sowydP",
    textarea: "textarea-Vz8G6D",
    input: "input-D7SaTZ",
    bottom: "bottom-RTnzbr"
  };
  let n1 = e => {
    let {
      width: o,
      titlePlaceholder: r,
      contentPlaceholder: i,
      initialTitle: n,
      title: a,
      onTitleChange: l,
      initialContent: c,
      content: s,
      onContentChange: d,
      onCancel: _,
      onSubmit: u,
      onGenerateContent: m
    } = e;
    let p = tS();
    let [h, g] = useControlledStateHook.useControlledState({
      defaultValue: "",
      initialValue: n,
      value: a,
      onChange: l
    });
    let [f, x] = useControlledStateHook.useControlledState({
      defaultValue: "",
      initialValue: c,
      value: s,
      onChange: d
    });
    let [v, y] = reactCoreLibraryReexport.useState();
    let b = reactCoreLibraryReexport.useMemo(() => m == null ? undefined : m(), []);
    let {
      value: w,
      isEnd: k,
      isError: j
    } = t_({
      source: b,
      onError(e) {
        if (flowDocErrorClass.isFlowDocError(e)) {
          y(e.message);
        }
      }
    });
    let C = !!k && !!h && !!f;
    reactCoreLibraryReexport.useEffect(() => {
      if (w) {
        x(w);
      }
    }, [w]);
    reactCoreLibraryReexport.useEffect(() => {
      if (j && v) {
        x(v);
      }
    }, [j]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: n0.container,
      style: {
        width: o
      },
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: n0.top,
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: n0.row,
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: n0.title,
            children: p("doc_editor_paragraph_title")
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: n0["input-wrapper"],
            children: reactJsxRuntimeCoreReexport.jsx(semiInputComponent.InputComponent, {
              className: n0.input,
              value: h,
              onChange: g,
              placeholder: r ?? n ?? p("doc_editor_paragraph_title_placeholder")
            })
          })]
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: n0.row,
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: n0.title,
            children: p("doc_editor_paragraph_desc")
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: n0["input-wrapper"],
            children: k || f ? reactJsxRuntimeCoreReexport.jsx(semiTextareaComponent.TextArea, {
              className: n0.textarea,
              value: f,
              onChange: x,
              autosize: {
                minRows: 1,
                maxRows: 8
              },
              placeholder: i ?? p("doc_editor_paragraph_desc_placeholder"),
              disabled: !k
            }) : reactJsxRuntimeCoreReexport.jsx("div", {
              className: n0.skeleton
            })
          })]
        })]
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: n0.bottom,
        children: [reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          type: "tertiary",
          size: "small",
          onClick: _,
          children: p("doc_editor_paragraph_cancel")
        }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
          type: "primary",
          size: "small",
          onClick: () => {
            if (C) {
              if (u != null) {
                u({
                  title: h,
                  content: f
                });
              }
            }
          },
          disabled: !C,
          children: p(b ? "doc_editor_paragraph_regenerate" : "doc_editor_paragraph_generate")
        })]
      })]
    });
  };
  var asyncSkillReceiveHook = require("async-skill-receive-hook") /*id: 463729*/;
  let n4 = e => {
    let {
      containerRef: t,
      ref: o,
      rect: r,
      thresholdX: i = 0,
      thresholdY: n = 0,
      onlyFullTarget: a = false
    } = e;
    let [l, c] = reactCoreLibraryReexport.useState(false);
    let [s, d] = reactCoreLibraryReexport.useState(true);
    let _ = skillPinModalCallback.useSkillPinCallback(() => {
      if (!(t == null ? undefined : t.current) || !(o == null ? undefined : o.current)) {
        return true;
      }
      let {
        left: e,
        top: r,
        width: i,
        height: n
      } = o.current.getBoundingClientRect();
      let {
        left: a,
        top: l,
        width: c,
        height: s
      } = t.current.getBoundingClientRect();
      return e >= a && r >= l && e + i <= a + c && r + n <= l + s;
    });
    let {
      run: u
    } = asyncSkillReceiveHook.useSkillReceive(e => {
      var t;
      let {
        clientX: d,
        clientY: u
      } = e;
      let m = (o == null ? undefined : (t = o.current) === null || t === undefined ? undefined : t.getBoundingClientRect()) ?? r;
      if (!m) {
        return;
      }
      let {
        left: p,
        top: h,
        width: g,
        height: f
      } = m;
      let x = d > p - i && d < p + g + i && u > h - n && u < h + f + n && (!a || _());
      if (x !== l) {
        c(x);
      }
    }, {
      wait: 50
    });
    useEventListenerHook.useEventListener("mousemove", u, {
      target: t
    });
    useEventListenerHook.useEventListener("mouseenter", () => {
      d(true);
    }, {
      target: t
    });
    useEventListenerHook.useEventListener("mouseleave", () => {
      d(false);
    }, {
      target: t
    });
    return s && l;
  };
  let n5 = e => {
    let {
      ref: t,
      onClickInside: o,
      onClickOutside: r
    } = e;
    let [i, n] = reactCoreLibraryReexport.useState(false);
    useEventListenerHook.useEventListener("click", e => {
      let {
        clientX: a,
        clientY: l
      } = e;
      if (!t.current) {
        return;
      }
      let {
        left: c,
        top: s,
        width: d,
        height: _
      } = t.current.getBoundingClientRect();
      let u = a > c && a < c + d && l > s && l < s + _;
      if (u) {
        if (o != null) {
          o();
        }
      } else if (r != null) {
        r();
      }
      if (u !== i) {
        n(u);
      }
    });
    return i;
  };
  let n3 = e => {
    let o = e.match(/^x(?<rolZoneId>.+)r[0-9]+x(?<colZoneId>.+)c[0-9]+$/);
    if (!o) {
      return null;
    }
    let {
      rolZoneId: r,
      colZoneId: i
    } = o.groups ?? {};
    return `${r} ${i}`;
  };
  let n6 = e => {
    let t = e.selection.getSelection();
    let {
      start: {
        zoneId: o
      }
    } = t;
    if (t.start.zoneId === zeroConstantModule_1.versionValue) {
      return t;
    }
    let r = e.getContentState();
    let i = r.getZoneState(zeroConstantModule_1.versionValue);
    if (!i) {
      throw Error("Cannot find default zone state");
    }
    let n = r.getEntities(new editorPositionClass.EditorPosition({
      editor: e,
      start: 0,
      len: i.getModelText().length,
      zoneId: zeroConstantModule_1.versionValue
    }).toRange());
    let a = n3(o);
    for (let t of n) {
      var l;
      let {
        attributes: r,
        start: i,
        end: n
      } = t;
      let c = new editorRangeZoneClass.EditorRangeZone({
        editor: e,
        start: i,
        end: n
      });
      if (r.type === "codeblock" && r.zoneId === o || ((l = r.aceTable) === null || l === undefined ? undefined : l.toLowerCase()) === a) {
        return c;
      }
    }
    return null;
  };
  let n8 = (e, t) => {
    if (!e || !t) {
      return false;
    }
    let o = n6(e);
    if (!o) {
      return false;
    }
    let r = o.toPosition();
    let i = t.toPosition();
    return !(r.start + r.len < i.start) && !(i.start + i.len < r.start);
  };
  let n9 = e => {
    let {
      editor: t,
      range: o
    } = e;
    let [r, i] = reactCoreLibraryReexport.useState(() => n8(t, o));
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        t.on(editorEventConstants.editorEventTypes.SELECTION_CHANGE, n);
        return () => {
          t.off(editorEventConstants.editorEventTypes.SELECTION_CHANGE, n);
        };
      }
    }, [t]);
    let n = skillPinModalCallback.useSkillPinCallback(() => {
      if (t) {
        i(n8(t, o));
      }
    });
    return r;
  };
  var n7 = {
    container: "container-_cL8Ga",
    hover: "hover-RkrprY",
    active: "active-yaJme1",
    "popover-anchor-line": "popover-anchor-line-Ejd3tw",
    "title-anchor-box": "title-anchor-box-oNCbtj",
    popover: "popover-TfmHG1",
    "content-wrapper": "content-wrapper-auZolj",
    "action-list": "action-list-ilrQx5",
    "large-margin-left": "large-margin-left-DYezQS",
    "button-item": "button-item-facvwE",
    divider: "divider-PQD4O0",
    close: "close-pyQDxe",
    "warning-icon": "warning-icon-J7CsqD",
    "error-icon": "error-icon-dQ7ioz"
  };
  (k = ae || {})[k.NotStart = 0] = "NotStart";
  k[k.Input = 1] = "Input";
  k[k.Generating = 2] = "Generating";
  k[k.Finished = 3] = "Finished";
  k[k.Error = 4] = "Error";
  var ae = k;
  let at = e => e === ae.NotStart || e === ae.Finished ? "top" : e === ae.Input ? "bottom" : undefined;
  let ao = e => {
    let {
      editor: t,
      range: o,
      width: r,
      refreshKey: i,
      disabled: n = false,
      onLock: a,
      onUnlock: l,
      onActiveChange: c,
      onGenerateParagraph: s,
      onGenerateSummary: d
    } = e;
    let _ = tS();
    let [u, m] = reactCoreLibraryReexport.useState(ae.NotStart);
    let [p, h] = reactCoreLibraryReexport.useState(false);
    let [g, f] = reactCoreLibraryReexport.useState();
    let x = reactCoreLibraryReexport.useRef(false);
    let [v, y] = reactCoreLibraryReexport.useState();
    let b = reactCoreLibraryReexport.useMemo(() => {
      return nq(t, o) ?? "";
    }, [t, o]);
    let w = reactCoreLibraryReexport.useMemo(() => nU(t, o), [t, o]);
    let k = reactDeepMemoHook.useDeepMemo(() => nX(t, o), [t, o]);
    let {
      refreshedKey: j,
      refresh: C
    } = nZ({
      based: i
    });
    reactCoreLibraryReexport.useEffect(() => {
      X();
    }, [v]);
    let {
      isEnd: N,
      isError: S,
      contentRange: E,
      showDraft: Z,
      setStreaming: R,
      switchToDrafted: $,
      switchToInitial: T,
      reset: F
    } = nY({
      editor: t,
      range: o,
      onError: e => {
        if (flowDocErrorClass.isFlowDocError(e)) {
          f(e);
        }
      }
    });
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (p) {
        if (a != null) {
          a();
        }
      } else if (l != null) {
        l();
      }
    }, [p]);
    useOnUnmountHook.useOnUnmount(() => {
      if (p) {
        if (l != null) {
          l();
        }
      }
    });
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (S) {
        m(ae.Error);
      }
    }, [S]);
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (g) {
        q(g);
      }
    }, [g]);
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (N && !x.current) {
        m(ae.Finished);
      }
    }, [N]);
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (u === ae.NotStart) {
        h(false);
        y(undefined);
        F();
      }
    }, [u]);
    let {
      left: W,
      top: z,
      width: M,
      height: P
    } = reactDeepMemoHook.useDeepMemo(() => t.rectModule.getRangeRect(E.clone()), [E, i]);
    let L = reactDeepMemoHook.useDeepMemo(() => k && t.rectModule.getLineRect(k.clone().start), [k, i]);
    let B = r ?? M;
    let O = reactCoreLibraryReexport.useRef(null);
    let K = reactCoreLibraryReexport.useRef(null);
    let D = n4({
      ref: K
    });
    let H = n5({
      ref: O,
      onClickOutside: () => {
        V();
      }
    });
    let J = n9({
      editor: t,
      range: k ?? undefined
    });
    let G = !n && (H && J || u !== ae.NotStart);
    reactCoreLibraryReexport.useEffect(() => {
      if (c != null) {
        c(G);
      }
    }, [G]);
    let V = () => {
      if ([ae.Generating, ae.Finished].includes(u)) {
        U();
      }
    };
    let X = () => {
      if (!v) {
        return;
      }
      let e = s == null ? undefined : s(v);
      if (!e) {
        return;
      }
      let {
        title: t
      } = v;
      reactDomEntryWrapper.flushSync(() => {
        h(true);
      });
      m(ae.Generating);
      R({
        source: e,
        initialContent: editorDeltaSetUtils.createHeadingDelta({
          level: w ?? 3,
          title: t
        })
      });
    };
    let q = e => {
      x.current = true;
      modalDialogComponent.Modal.confirm({
        icon: reactJsxRuntimeCoreReexport.jsx(rtlInfoOutlinedIcon.InfoOutlinedIcon, {
          className: n7["error-icon"]
        }),
        title: _("doc_editor_paragraph_error_modal_title"),
        content: e.message,
        cancelText: _("doc_editor_paragraph_error_modal_keep_now"),
        okText: _("doc_editor_paragraph_regenerate"),
        onOk: e => {
          e.stopPropagation();
          X();
          x.current = false;
        },
        onCancel: e => {
          e.stopPropagation();
          reactDomEntryWrapper.flushSync(() => {
            T();
            m(ae.NotStart);
          });
          x.current = false;
        },
        centered: true,
        zIndex: 3000
      });
    };
    let U = () => {
      if (!x.current) {
        x.current = true;
        modalDialogComponent.Modal.confirm({
          icon: reactJsxRuntimeCoreReexport.jsx(rtlWarningIcon.WarningOutlinedIcon, {
            className: n7["warning-icon"]
          }),
          title: _("doc_editor_paragraph_cancel_modal_title"),
          content: _("doc_editor_paragraph_cancel_modal_desc"),
          cancelText: _("doc_editor_paragraph_cancel_modal_cancel_button_text"),
          okText: _("doc_editor_paragraph_cancel_modal_confirm_button_text"),
          onOk: e => {
            e.stopPropagation();
            reactDomEntryWrapper.flushSync(() => {
              T();
              m(ae.NotStart);
            });
            x.current = false;
          },
          onCancel: e => {
            e.stopPropagation();
            x.current = false;
          },
          zIndex: 3000,
          centered: true
        });
      }
    };
    let Y = e => {
      e.stopPropagation();
    };
    let Q = u === ae.NotStart ? reactJsxRuntimeCoreReexport.jsxs("div", {
      className: n7["action-list"],
      children: [reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
        className: n7["button-item"],
        title: _("doc_editor_paragraph_rewriting"),
        disabled: !J,
        newIcon: true,
        onClick: () => {
          m(ae.Input);
        },
        children: reactJsxRuntimeCoreReexport.jsx(wrenchToolIcon.WrenchToolIcon, {})
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: n7.divider
      }), reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
        className: n7["button-item"],
        tooltip: _("doc_editor_paragraph_delete"),
        disabled: !J,
        newIcon: true,
        onClick: () => {
          editorZoneDeltaOps.replaceZoneRange({
            editor: t,
            range: E
          });
          t.selection.updateBrowserSelection();
          h(false);
        },
        children: reactJsxRuntimeCoreReexport.jsx(calculatorIconComponent.CalculatorIcon, {})
      })]
    }) : u === ae.Input ? reactJsxRuntimeCoreReexport.jsx(n1, {
      width: B,
      initialTitle: b,
      titlePlaceholder: b,
      onContentChange: C,
      onGenerateContent: () => d == null ? undefined : d({
        selectedText: nG(t, E),
        title: b
      }),
      onSubmit: e => {
        let {
          title: o,
          content: r
        } = e;
        y({
          currentText: nG(t, E),
          title: o,
          content: r
        });
      },
      onCancel: () => {
        m(ae.NotStart);
      }
    }) : u === ae.Finished ? reactJsxRuntimeCoreReexport.jsxs("div", {
      className: n7["action-list"],
      children: [reactJsxRuntimeCoreReexport.jsx(nQ, {
        value: Z,
        options: [{
          key: false,
          title: _("doc_editor_paragraph_original")
        }, {
          key: true,
          title: _("doc_editor_paragraph_generated")
        }],
        onChange: e => {
          if (e) {
            $();
          } else {
            T();
          }
        }
      }), reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
        className: n7["button-item"],
        tooltip: _("doc_editor_paragraph_regenerate"),
        onClick: X,
        newIcon: true,
        children: reactJsxRuntimeCoreReexport.jsx(refreshRtlIcon.RefreshIcon, {})
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: n7.divider
      }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
        className: n7["large-margin-left"],
        type: "primary",
        size: "small",
        onClick: () => {
          m(ae.NotStart);
        },
        children: _("doc_editor_paragraph_confirm")
      }), reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
        className: n7["button-item"],
        tooltip: _("doc_editor_paragraph_exit"),
        onClick: U,
        newIcon: true,
        children: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
          className: n7.close
        })
      })]
    }) : undefined;
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        ref: O,
        className: A(n7.container, {
          [n7.hover]: !n && D,
          [n7.active]: G
        }),
        style: {
          left: W - 12,
          top: z - 8,
          width: B + 24,
          height: P + 16
        },
        children: reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
          className: n7.popover,
          spacing: 8,
          trigger: "custom",
          content: Q && reactJsxRuntimeCoreReexport.jsx("div", {
            className: n7["content-wrapper"],
            onMouseMove: Y,
            onClick: Y,
            children: Q
          }),
          visible: G && !!Q,
          position: at(u),
          rePosKey: `${u}_${j}`,
          onClickOutSide: () => {
            if (u === ae.Input) {
              m(ae.NotStart);
            }
          },
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: n7["popover-anchor-line"]
          })
        })
      }), L && reactJsxRuntimeCoreReexport.jsx("div", {
        ref: K,
        className: n7["title-anchor-box"],
        style: L
      })]
    });
  };
  let ar = e => {
    let {
      editor: t,
      ...o
    } = e;
    let [r, i] = reactCoreLibraryReexport.useState([]);
    let n = skillPinModalCallback.useSkillPinCallback(() => {
      if (t) {
        i(editorContentOperations.getLeafParagraphRanges({
          editor: t,
          ...o
        }));
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        n();
        t.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, n);
        return () => {
          t.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, n);
        };
      }
    }, [t]);
    return r;
  };
  let ai = e => {
    let {
      onEditingChange: t,
      ...o
    } = e;
    let r = tR().raw;
    let [i, n] = reactCoreLibraryReexport.useState();
    let [a, l] = reactCoreLibraryReexport.useState();
    let c = ar({
      editor: r
    });
    let s = i ?? c;
    return r && reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: s.map(e => {
        let i = JSON.stringify(e.start);
        return reactJsxRuntimeCoreReexport.jsx(ao, {
          range: e,
          editor: r,
          ...o,
          disabled: !!a && a !== i,
          onLock: () => {
            n(c);
            if (t != null) {
              t(true);
            }
          },
          onUnlock: () => {
            n(undefined);
            if (t != null) {
              t(false);
            }
          },
          onActiveChange: e => {
            l(e ? i : undefined);
          }
        }, i);
      })
    });
  };
  var useKeyPressHook = require("use-key-press-hook") /*id: 707737*/;
  let aa = e => {
    let {
      start: {
        zoneId: t
      }
    } = e;
    return t === zeroConstantModule_1.versionValue;
  };
  let al = (e, t) => {
    let o = e.getContentState();
    let {
      zoneId: r
    } = t;
    let i = o.getZoneState(r);
    if (!i) {
      return null;
    }
    let n = i.getLine(t.line);
    if (!n) {
      return null;
    }
    let {
      start: a
    } = n.getOffset();
    return new editorPositionClass.EditorPosition({
      start: a,
      len: 0,
      zoneId: r,
      editor: e
    }).toRange().start;
  };
  let ac = (e, t, o) => {
    let r = e.getContentState();
    let {
      zoneId: i,
      line: n
    } = t;
    let a = r.getZoneState(i);
    if (!a) {
      return;
    }
    let l = a.getLine(n);
    if (!l || !o(l)) {
      return;
    }
    let {
      start: c,
      end: s
    } = l.getOffset();
    let d = n === a.length() - 1 ? Math.max(s - 1, c) : s;
    let _ = new contentStructureDelta.ContentDelta({
      zoneId: i
    }).retain(c).delete(d - c);
    r.apply(_);
  };
  var as = {
    placeholder: "placeholder-h6_LO0",
    text: "text-zRwlkg",
    "anchor-area": "anchor-area-XlsldZ",
    popover: "popover-C7cF2g"
  };
  let ad = e => {
    let {
      editor: t,
      raiseKey: o = "/",
      refreshKey: r,
      maxWidth: i,
      onGenerateFinished: n,
      onGenerateParagraph: a,
      onGenerateError: l
    } = e;
    let c = tS();
    let [s, d] = reactCoreLibraryReexport.useState();
    let _ = reactCoreLibraryReexport.useRef();
    let [u, m] = reactCoreLibraryReexport.useState();
    let [p, h] = reactCoreLibraryReexport.useState();
    let [g, f] = reactCoreLibraryReexport.useState(() => t.isFocus());
    let [x, v] = reactCoreLibraryReexport.useState(() => t.isEditable());
    let {
      refreshedKey: y,
      refresh: b
    } = nZ({
      based: r
    });
    let {
      placeholderArea: w
    } = nP({
      editor: t,
      refreshKey: r
    });
    let k = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(() => {
      t.on(editorEventConstants.editorEventTypes.KEYDOWN, E);
      t.on(editorEventConstants.editorEventTypes.FOCUS, R);
      t.on(editorEventConstants.editorEventTypes.EDITABLE_CHANGE, $);
      return () => {
        t.off(editorEventConstants.editorEventTypes.KEYDOWN, E);
        t.off(editorEventConstants.editorEventTypes.FOCUS, R);
        t.off(editorEventConstants.editorEventTypes.EDITABLE_CHANGE, $);
      };
    }, [t]);
    let {
      isEnd: j,
      getMergedRebase: C
    } = th({
      editor: t,
      value: u,
      clearWhenEmpty: false,
      initialContent: p,
      process: e => {
        let r = _.current;
        if (r) {
          return editorDeltaSetUtils.concatDeltaAt(t, al(t, r) ?? r, e);
        } else {
          return e;
        }
      },
      onBeforeApply: e => {
        if (!editorDeltaSetUtils.isReadOnlyDelta(e)) {
          S();
        }
      },
      onError: e => {
        S();
        if (l != null) {
          l(e);
        }
      }
    });
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (j) {
        m(undefined);
        h(undefined);
        if (n != null) {
          n();
        }
      }
    }, [j]);
    useKeyPressHook.useKeyPress(27, () => {
      Z();
    });
    let N = () => {
      if (!_.current || k.current) {
        return;
      }
      let o = al(t, _.current) ?? _.current;
      editorContentOperations.insertSpaceAtPoint({
        editor: t,
        point: o,
        type: editorZoneDeltaOps.modeAutoApply,
        nonundoable: true
      });
      k.current = t.getContentState().rangePointToOffset(o);
    };
    let S = () => {
      if (k.current && _.current) {
        editorContentOperations.deleteCharacterAtPoint({
          editor: t,
          point: k.current,
          type: editorZoneDeltaOps.modeAutoApply,
          nonundoable: true,
          rebaseFrom: C()
        });
        k.current = null;
      }
    };
    let E = skillPinModalCallback.useSkillPinCallback(e => {
      if (e.key === "Backspace") {
        Z();
        return;
      }
      if (e.key !== o) {
        return;
      }
      let r = t.selection.getSelection();
      if (!r.isCollapsed() || !aa(r)) {
        return;
      }
      let {
        start: i
      } = r;
      let {
        zoneId: n,
        line: a
      } = i;
      let l = t.getContentState().getZoneState(n);
      let c = l == null ? undefined : l.getLine(a);
      let s = c == null ? undefined : c.getText().trim();
      if (l && c && (!s || s === o)) {
        _.current = r.start;
        d(t.rectModule.getCaretRect(i));
      }
    });
    let Z = () => {
      d(undefined);
    };
    let R = () => {
      f(t.isFocus());
    };
    let $ = e => {
      let {
        current: t
      } = e;
      v(t);
    };
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: as.placeholder,
        style: {
          ...(w && throttledPathFilterStringify.throttledPathStr(w, "left", "top", "height")),
          maxWidth: i
        },
        children: w && g && x && reactJsxRuntimeCoreReexport.jsx("div", {
          className: as.text,
          style: {
            lineHeight: w && `${w.height}px`
          },
          children: c("doc_editor_quick_raise_placeholder")
        })
      }), reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
        className: as.popover,
        spacing: 5,
        trigger: "custom",
        content: reactJsxRuntimeCoreReexport.jsx(n1, {
          width: i,
          onCancel: Z,
          onSubmit: e => {
            let {
              title: r,
              content: i
            } = e;
            if (!_.current) {
              return;
            }
            let n = a == null ? undefined : a({
              title: r,
              content: i
            });
            if (n) {
              ac(t, _.current, e => e.getText().trim() === o);
              N();
              m(n);
              h(editorDeltaSetUtils.createHeadingDelta({
                title: r,
                level: 3
              }));
              Z();
            }
          },
          onContentChange: b
        }),
        visible: !!s,
        position: "bottomLeft",
        rePosKey: y,
        onClickOutSide: Z,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: as["anchor-area"],
          style: s && throttledPathFilterStringify.throttledPathStr(s, "left", "top", "height")
        })
      })]
    });
  };
  let a_ = e => {
    let t = reactCoreLibraryReexport.useRef(false);
    let o = reactCoreLibraryReexport.useRef();
    let r = tR();
    let i = r.raw;
    let n = r => {
      if (t.current !== r) {
        e(r);
        t.current = r;
        if (r) {
          o.current = performance.now();
        }
      }
    };
    let a = skillPinModalCallback.useSkillPinCallback(e => {
      if (!editorZoneDeltaOps.isAutoApplyMode(e)) {
        n(true);
      }
    });
    let l = skillPinModalCallback.useSkillPinCallback(() => {
      n(true);
    });
    useEventListenerHook.useEventListener("mousemove", () => {
      if (!isUndefinedCheck.isUndefined(o.current) && !!t.current && !(performance.now() - o.current < 1000)) {
        n(false);
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (i) {
        i.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, a);
        r.on("scroll", l);
        return () => {
          i.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, a);
          r.off("scroll", l);
        };
      }
    }, []);
  };
  let au = e => !!e && !e.selection.getSelection().isCollapsed();
  let am = e => {
    let {
      editor: t
    } = e;
    let [o, r] = reactCoreLibraryReexport.useState(() => t != null && !!t.isFocus() && au(t));
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        t.on(editorEventConstants.editorEventTypes.SELECTION_CHANGE, i);
        return () => {
          t.off(editorEventConstants.editorEventTypes.SELECTION_CHANGE, i);
        };
      }
    }, [t]);
    let i = skillPinModalCallback.useSkillPinCallback(() => {
      if (t) {
        r(au(t));
      }
    });
    return o;
  };
  let ap = e => {
    let {
      range: t,
      docRootRef: o,
      focusWhenOverlap: r = false,
      fullWidth: i,
      contentWidth: n,
      refreshKey: a,
      onRewrite: l
    } = e;
    let c = tS();
    let s = tR().raw;
    let d = reactCoreLibraryReexport.useRef(null);
    let [_, u] = reactCoreLibraryReexport.useState(false);
    let [m, p] = reactCoreLibraryReexport.useState(false);
    let [h, g] = reactCoreLibraryReexport.useState(false);
    let f = reactDeepMemoHook.useDeepMemo(() => s == null ? undefined : s.rectModule.getRangeRect(t), [t, a, i]);
    let x = i && n && (i - n) / 2;
    let v = n4({
      containerRef: o,
      ref: d,
      thresholdX: x,
      thresholdY: -4,
      onlyFullTarget: true
    });
    let {
      ref: y,
      width: b = 0
    } = resizeObserverHooks.useResizeObserverEx();
    let w = n9({
      editor: s,
      range: t
    });
    let k = r && w && m;
    let j = am({
      editor: s
    });
    let C = !isUndefinedCheck.isUndefined(x) && x - 28 >= 50;
    let N = !h && !j && (v || _) && !k;
    let S = _ && C;
    a_(g);
    reactCoreLibraryReexport.useEffect(() => {
      if (!N) {
        u(false);
      }
    }, [N]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!r) {
        p(false);
      }
    }, [r]);
    reactCoreLibraryReexport.useEffect(() => {
      g(false);
    }, [v]);
    if (f) {
      return reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
        className: "popover-izs33f",
        trigger: "custom",
        position: "leftTop",
        rePosKey: `${a}_${editorContentOperations.serializeRect(f)}`,
        spacing: 3,
        visible: N,
        motion: false,
        zIndex: 1029,
        content: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: A("rewrite-entry-orQx_U", {
            "hover-fAtA0S": S
          }),
          onClick: () => {
            if (l) {
              p(true);
              l();
            }
          },
          onMouseEnter: () => {
            u(true);
          },
          onMouseLeave: () => {
            u(false);
          },
          style: {
            width: S ? 32 + b : undefined
          },
          children: [reactJsxRuntimeCoreReexport.jsx(skillBarIconComponent.SkillBarIcon, {
            className: "icon-OKySgo"
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            ref: y,
            className: "text-T_kSJK",
            children: c("doc_editor_ai_skill")
          })]
        }),
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          ref: d,
          className: A("content-anchor-box-gg6k6W", {
            "overlay-Ixxj7U": _ || k
          }),
          style: {
            left: f.left - 5,
            top: f.top - 4,
            width: f.width + 10,
            height: f.height + 8
          }
        })
      });
    } else {
      return null;
    }
  };
  let ah = e => {
    let {
      onRewrite: t,
      ...o
    } = e;
    let r = ar({
      editor: tR().raw
    });
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: r.map((e, r) => reactJsxRuntimeCoreReexport.jsx(ap, {
        ...o,
        range: e,
        onRewrite: () => t == null ? undefined : t({
          range: e
        })
      }, r))
    });
  };
  var reactUnmountHook = require("react-unmount-hook") /*id: 977933*/;
  var useClampedCounter = require("use-clamped-counter") /*id: 912956*/;
  let ax = e => {
    e.forEach(e => {
      e.ops.forEach(e => {
        if (deltaSetCore.isInsertOp(e) && isStringTypeCheck.isString(e.insert)) {
          e.attributes = {
            ...e.attributes,
            new_content_draft: "true"
          };
        }
      });
    });
  };
  let av = e => {
    let {
      editor: t,
      range: o
    } = e;
    let {
      zoneId: r,
      start: i,
      len: n
    } = o.toPosition();
    let a = t.getContentState();
    if (!a.getZoneState(r)) {
      return;
    }
    let l = new contentStructureDelta.ContentDelta({
      zoneId: r
    }).retain(i).retain(n, {
      new_content_draft: ""
    });
    a.apply(l, {
      nonundoable: true
    });
  };
  let ay = e => {
    let [t, o] = reactCoreLibraryReexport.useState(e);
    let r = reactCoreLibraryReexport.useRef(e);
    return {
      value: t,
      valueRef: r,
      setValue: e => {
        o(e);
        r.current = e;
      }
    };
  };
  var useElementSizeHook_2 = require("use-element-size-hook_2") /*id: 486741*/;
  var arrowLeftIconComponent = require("arrow-left-icon-component") /*id: 901793*/;
  let ak = () => {
    let [e, {
      setTrue: t
    }] = useBooleanHook.useBoolean(false);
    reactCoreLibraryReexport.useEffect(() => {
      t();
    }, []);
    return e;
  };
  var treeNodeFlattener = require("tree-node-flattener") /*id: 881316*/;
  var businessSkillBarMenuWrapper = require("business-skill-bar-menu-wrapper") /*id: 126623*/;
  var aN = {
    container: "container-hoEbW6",
    input: "input-DL477r",
    left: "left-Q_Nhus",
    right: "right-FPTVqT",
    center: "center-F5Sh1A",
    text: "text-L1gLeW",
    textarea: "textarea-HCAQ1w",
    "send-button": "send-button-pg6RIS",
    disabled: "disabled-avw4yv",
    "break-button": "break-button-QB8dtA",
    hoverable: "hoverable-JSA0Ly",
    "selected-genre": "selected-genre-tAcQmI",
    "go-back-icon": "go-back-icon-gpw1rv",
    "genre-label": "genre-label-kWVBRz",
    "popover-reference": "popover-reference-yEFZO7",
    "esc-icon": "esc-icon-Xgpa0o"
  };
  let aS = e => {
    let {
      width: t,
      refreshKey: o,
      newContentActions: r,
      isGeneratingSteaming: i,
      isEnd: n,
      waitConfirm: a,
      onGenerate: l,
      onStopGenerate: c,
      onAccept: s,
      onReject: d,
      onExit: _
    } = e;
    let u = tS();
    let m = tR();
    let p = reactCoreLibraryReexport.useRef(null);
    let h = reactCoreLibraryReexport.useRef(null);
    let {
      width: g,
      height: f
    } = useElementSizeHook_2.useElementSize(h) || {};
    let {
      refreshedKey: x,
      refresh: v
    } = nZ({
      based: o
    });
    let y = useDebouncedValueHook.useDebouncedValue(x, {
      wait: 30
    });
    let [b, w] = reactCoreLibraryReexport.useState(false);
    let k = ak();
    let [j, C] = reactCoreLibraryReexport.useState();
    let N = reactCoreLibraryReexport.useMemo(() => treeNodeFlattener.flattenTreeNodes(r || []), [r]);
    let [S, E] = reactCoreLibraryReexport.useState();
    let Z = reactCoreLibraryReexport.useMemo(() => N.find(e => e.key === S), [S, N]);
    let [R, $] = reactCoreLibraryReexport.useState();
    let T = useDebouncedValueHook.useDebouncedValue(n && !i && !a && !S && k, {
      wait: 100
    });
    let F = useDebouncedValueHook.useDebouncedValue(n && !i && a, {
      wait: 100
    });
    reactUseEventListener.useEventListener("Escape", () => {
      if (F) {
        L();
        return;
      }
      if (!n) {
        M();
        return;
      }
      if (_ != null) {
        _();
      }
    });
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (!n) {
        w(false);
      }
    }, [n]);
    reactCoreLibraryReexport.useEffect(() => {
      m.on("scroll", W);
      m.behavior.emit("createNewFileAIWriteMenuShow");
      return () => {
        m.off("scroll", W);
      };
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      W();
    }, [g, f]);
    let W = reactFunctionMemoHook.useMemoizedCallback(() => {
      requestAnimationFrame(v);
    });
    let z = e => {
      E(e);
      m.behavior.emit("createNewFileAIWriteMenuClick", e);
      if (e) {
        var t;
        if ((t = p.current) !== null && t !== undefined) {
          t.focus();
        }
      }
    };
    let M = () => {
      if (!n) {
        if (c != null) {
          c();
        }
      }
    };
    let P = () => {
      if (!R) {
        return;
      }
      let e = {
        text: R,
        genre_label: `${S || (r == null ? undefined : r[0].key) || ""}`
      };
      C(e);
      if (l != null) {
        l(e, {
          withPrevContent: !!F
        });
      }
      z(undefined);
      $(undefined);
    };
    let L = () => {
      m.behavior.emit("createNewFileAIWriteResultClick", {
        buttonName: "reject"
      });
      if (F) {
        let {
          destroy: e
        } = modalDialogComponent.Modal.confirm({
          icon: null,
          zIndex: 1030,
          centered: true,
          title: u("doc_editor_ai_write_result_exit_alert_title"),
          footer: reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
              type: "tertiary",
              onClick: () => e(),
              children: u("doc_editor_ai_write_result_exit_alert_continue_button")
            }), reactJsxRuntimeCoreReexport.jsx(samanthaButtonComponent.SamanthaButton, {
              type: "primary",
              onClick: () => {
                e();
                if (d != null) {
                  d();
                }
              },
              children: u("doc_editor_ai_write_result_exit_alert_discard_button")
            })]
          })
        });
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: h,
      className: aN.container,
      style: {
        width: t
      },
      onMouseDown: e => {
        e.stopPropagation();
      },
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: aN.input,
        children: n ? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [Z && reactJsxRuntimeCoreReexport.jsxs("div", {
            className: A(aN.left, aN["selected-genre"]),
            onClick: () => z(undefined),
            children: [reactJsxRuntimeCoreReexport.jsx(arrowLeftIconComponent.ArrowLeftIcon, {
              className: aN["go-back-icon"]
            }), reactJsxRuntimeCoreReexport.jsx("span", {
              className: aN["genre-label"],
              children: Z.label
            })]
          }), reactJsxRuntimeCoreReexport.jsx(semiTextareaComponent.TextArea, {
            ref: p,
            className: A(aN.center, aN.textarea),
            value: R,
            onChange: $,
            autosize: {
              minRows: 1,
              maxRows: 3
            },
            onKeyDown: e => {
              if (e.key === "Enter" && !e.shiftKey && !e.altKey) {
                e.preventDefault();
                e.stopPropagation();
                P();
                return;
              }
              if (e.key === "Escape") {
                e.preventDefault();
              }
            },
            placeholder: Z || F ? u("doc_editor_ai_write_input_genre_requirement_placeholder") : u("doc_editor_ai_write_input_placeholder"),
            onFocus: () => {
              w(true);
            },
            onBlur: () => {
              w(false);
            },
            onMouseDown: e => {
              e.stopPropagation();
            }
          }), reactJsxRuntimeCoreReexport.jsx(skillPinIconComponent.SkillPinIcon, {
            className: A(aN.right, aN["send-button"], {
              [aN.disabled]: !R,
              [aN.hoverable]: !!R
            }),
            onClick: P
          })]
        }) : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx("div", {
            className: aN.center,
            children: reactJsxRuntimeCoreReexport.jsx(rz, {
              className: aN.text,
              icon: false
            })
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: aN.right,
            children: reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
              size: "large",
              onClick: M,
              children: reactJsxRuntimeCoreReexport.jsx(plusCircleRtlIcon.PlusCircleIcon, {
                className: aN["break-button"]
              })
            })
          })]
        })
      }), reactJsxRuntimeCoreReexport.jsx(businessSkillBarMenuWrapper.BusinessSkillBarMenu, {
        actions: r,
        visible: T,
        mouseEnterDelay: 1000,
        mouseLeaveDelay: 1000,
        spacing: 4,
        position: "bottomLeft",
        focus: !b && !F,
        rePosKey: y,
        onClickItem: z,
        onArrowInput: () => {
          var e;
          if ((e = p.current) !== null && e !== undefined) {
            e.blur();
          }
        },
        onMouseDown: e => {
          e.stopPropagation();
        },
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: aN["popover-reference"]
        })
      }), reactJsxRuntimeCoreReexport.jsx(businessSkillBarMenuWrapper.BusinessSkillBarMenu, {
        actions: [{
          key: "accept",
          label: u("doc_editor_ai_write_result_confirm_menu_item_accept"),
          icon: reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {}),
          onClick: () => {
            m.behavior.emit("createNewFileAIWriteResultClick", {
              buttonName: "accept"
            });
            if (F) {
              if (s != null) {
                s();
              }
            }
          }
        }, {
          key: "reject",
          label: u("doc_editor_ai_write_result_confirm_menu_item_discard"),
          icon: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {}),
          hotkey: "Esc",
          hotkeyIcon: reactJsxRuntimeCoreReexport.jsx("div", {
            className: aN["esc-icon"],
            children: "Esc"
          }),
          onClick: L
        }, {
          key: "regenerate",
          label: u("doc_editor_ai_write_result_confirm_menu_item_regenerate"),
          icon: reactJsxRuntimeCoreReexport.jsx(refreshRtlIcon.RefreshIcon, {}),
          onClick: () => {
            if (j) {
              m.behavior.emit("createNewFileAIWriteResultClick", {
                buttonName: "regenerate"
              });
              if (l != null) {
                l(j, {
                  withPrevContent: true
                });
              }
            }
          }
        }],
        visible: F,
        mouseEnterDelay: 1000,
        mouseLeaveDelay: 1000,
        spacing: 4,
        position: "bottomLeft",
        focus: !b && !T,
        rePosKey: y,
        onArrowInput: () => {
          var e;
          if ((e = p.current) !== null && e !== undefined) {
            e.blur();
          }
        },
        onMouseDown: e => {
          e.stopPropagation();
        },
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: aN["popover-reference"]
        })
      })]
    });
  };
  let aE = e => {
    let {
      editor: t
    } = e;
    let [o, r] = reactCoreLibraryReexport.useState(() => t == null ? undefined : t.isEditable());
    let i = reactFunctionMemoHook.useMemoizedCallback(e => {
      let {
        current: t
      } = e;
      r(t);
    });
    reactCoreLibraryReexport.useEffect(() => {
      i({
        current: t == null ? undefined : t.isEditable()
      });
      if (t) {
        t.on(editorEventConstants.editorEventTypes.EDITABLE_CHANGE, i);
      }
      return () => {
        if (t != null) {
          t.off(editorEventConstants.editorEventTypes.EDITABLE_CHANGE, i);
        }
      };
    }, [t]);
    return o;
  };
  let aZ = e => {
    let {
      editor: t
    } = e;
    let [o, r] = reactCoreLibraryReexport.useState(() => t == null ? undefined : t.getStatus("isComposing"));
    let i = reactFunctionMemoHook.useMemoizedCallback(() => {
      r(t == null ? undefined : t.getStatus("isComposing"));
    });
    reactCoreLibraryReexport.useEffect(() => {
      i();
      if (t) {
        t.on(editorEventConstants.editorEventTypes.COMPOSITION_START, i);
        t.on(editorEventConstants.editorEventTypes.COMPOSITION_END, i);
      }
      return () => {
        if (t != null) {
          t.off(editorEventConstants.editorEventTypes.COMPOSITION_START, i);
        }
        if (t != null) {
          t.off(editorEventConstants.editorEventTypes.COMPOSITION_END, i);
        }
      };
    }, [t]);
    return o;
  };
  let aR = e => {
    reactCoreLibraryReexport.useLayoutEffect(() => {
      window.addEventListener("resize", e);
      return () => window.removeEventListener("resize", e);
    }, []);
  };
  var a$ = {
    placeholder: "placeholder-lyKEpW",
    "text-content": "text-content-u13flq",
    "ai-help-write-button": "ai-help-write-button-ol1CEq",
    icon: "icon-BP0JJd",
    text: "text-hncKQN",
    "anchor-area": "anchor-area-X8e5OX",
    popover: "popover-SIHKu7"
  };
  let aT = e => {
    let {
      raiseKey: t = " ",
      refreshKey: o,
      maxWidth: r,
      newContentActions: i,
      onGenerate: n,
      onGenerateError: a,
      onNewContentGenerateStateChange: l
    } = e;
    let c = tS();
    let s = tR();
    let d = s.raw;
    let _ = reactCoreLibraryReexport.useRef();
    let [u, m] = reactCoreLibraryReexport.useState();
    let {
      value: p,
      valueRef: h,
      setValue: g
    } = ay(false);
    let [f, x] = reactCoreLibraryReexport.useState();
    let [v, {
      inc: y
    }] = useClampedCounter.useClampedCounter(0);
    let b = reactCoreLibraryReexport.useMemo(() => u && d && d.rectModule.getRangeRect(u, zeroConstantModule_1.versionValue), [u, v]);
    let [w, k] = reactCoreLibraryReexport.useState();
    let [j, C] = reactCoreLibraryReexport.useState(false);
    let N = aE({
      editor: d
    });
    let S = aZ({
      editor: d
    });
    let {
      isEditorEmpty: E
    } = e9({
      editor: d
    });
    let Z = functionInvoker.invoke(() => {
      if (!f) {
        return {};
      }
      if (b && p && !E) {
        let {
          left: e,
          top: t,
          height: o
        } = b;
        return {
          width: r,
          left: e,
          top: t + o,
          height: 4
        };
      }
      let {
        left: e,
        top: t,
        height: o
      } = f;
      return {
        width: r,
        left: e,
        top: t + o / 2 - 29 - 5
      };
    });
    let R = Object.values(Z).join("_");
    let {
      placeholderArea: $
    } = nP({
      editor: d,
      refreshKey: o
    });
    let [T, F] = reactCoreLibraryReexport.useMemo(() => c("doc_editor_first_line_placeholder").split("__BUTTON__"), []);
    let W = reactCoreLibraryReexport.useRef();
    let {
      isEnd: z,
      stop: M
    } = th({
      editor: d,
      value: w,
      clearWhenEmpty: false,
      process: e => {
        let o = _.current?.start;
        if (!d || !o) {
          return e;
        }
        let r = editorDeltaSetUtils.concatDeltaAt(d, o, e);
        ax(r);
        return r;
      },
      onDiff: e => {
        let {
          rawDiff: o
        } = e;
        W.current = (W.current ?? editorDeltaSetUtils.createInitialDelta()).compose(o);
        if (!d || !_.current) {
          return;
        }
        let {
          start: r,
          zoneId: i
        } = _.current.toPosition();
        m(new editorPositionClass.EditorPosition({
          editor: d,
          zoneId: i,
          start: r,
          len: Math.min(editorDeltaSetUtils.getDeltaLength(W.current), editorDeltaSetUtils.getZoneTextLength(d, i) - r)
        }).toRange());
      },
      onBeforeApply: () => {},
      onError: e => {
        if (a != null) {
          a(e);
        }
      }
    });
    reactUnmountHook.useUnmountCallback(() => {
      if (l != null) {
        l(generationStatusConstants.generationStatus.NotStart);
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (d) {
        d.on(editorEventConstants.editorEventTypes.KEYDOWN, O);
        return () => {
          d.off(editorEventConstants.editorEventTypes.KEYDOWN, O);
        };
      }
    }, [d]);
    aR(() => {
      y();
    });
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (z) {
        k(undefined);
        if (l != null) {
          l(generationStatusConstants.generationStatus.WaitForFeedback);
        }
      }
    }, [z]);
    useKeyPressHook.useKeyPress(27, () => {
      B();
    });
    let P = () => {
      x(undefined);
      _.current = undefined;
      m(undefined);
      g(false);
      k(undefined);
      C(false);
      W.current = undefined;
      if (l != null) {
        l(generationStatusConstants.generationStatus.NotStart);
      }
    };
    let L = () => {
      if (!d) {
        return;
      }
      let e = d.selection.getSelection();
      if (!e.isCollapsed() || !nz(e)) {
        return;
      }
      let {
        start: t
      } = e;
      let {
        zoneId: o,
        line: r
      } = t;
      let i = d.getContentState().getZoneState(o);
      let n = i == null ? undefined : i.getLine(r);
      let a = d.isEmpty();
      if (i && n && a) {
        d.blur();
        _.current = e;
        x(d.rectModule.getCaretRect(t));
        if (l != null) {
          l(generationStatusConstants.generationStatus.StartNotSend);
        }
        W.current = undefined;
      }
    };
    let B = () => {
      if (!h.current) {
        P();
      }
    };
    let O = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (e.key !== t || !!e.ctrlKey || !!e.shiftKey || !!e.altKey || !!e.metaKey || !E || !!f) {
        B();
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      e.preventEvent();
      e.stopEvent();
      s.behavior.emit("createNewFileBlankPageClick", {
        contentDetail: "ai_writing_short_cut"
      });
      L();
    });
    let A = () => {
      if (d && u) {
        editorZoneDeltaOps.replaceZoneRange({
          editor: d,
          range: u,
          nonundoable: true,
          type: editorZoneDeltaOps.modeAutoApply
        });
      }
    };
    let K = async (e, t) => {
      let {
        withPrevContent: o
      } = t;
      if (!_.current) {
        return;
      }
      C(true);
      let r = await (n == null ? undefined : n({
        ...e,
        last_generated_content: o && W.current ? await deltaToMarkdownConverter.convertDeltaToMarkdown({
          docEditor: s,
          deltaSet: W.current
        }) : undefined
      }));
      C(false);
      if (r) {
        if (l != null) {
          l(generationStatusConstants.generationStatus.Generating);
        }
        A();
        k(r);
        g(true);
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [$ && N && E && !S && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: a$.placeholder,
        style: {
          left: $.left,
          top: -$.top,
          width: r,
          height: 0
        },
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          className: a$["text-content"],
          children: T
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: a$["ai-help-write-button"],
          onClick: () => {
            s.behavior.emit("createNewFileBlankPageClick", {
              contentDetail: "ai_writing_button_click"
            });
            L();
          },
          children: [reactJsxRuntimeCoreReexport.jsx(skillBarIconComponent.SkillBarIcon, {
            className: a$.icon
          }), reactJsxRuntimeCoreReexport.jsx("span", {
            className: a$.text,
            children: c("doc_editor_first_line_placeholder_ai_write_button")
          })]
        }), reactJsxRuntimeCoreReexport.jsx("span", {
          className: a$["text-content"],
          children: F
        })]
      }), reactJsxRuntimeCoreReexport.jsx(popoverComponent.PopoverComponent, {
        className: a$.popover,
        spacing: 5,
        trigger: "custom",
        content: reactJsxRuntimeCoreReexport.jsx(aS, {
          width: r,
          refreshKey: `${o}_${R}`,
          newContentActions: i,
          isGeneratingSteaming: j,
          isEnd: z,
          waitConfirm: p,
          onGenerate: K,
          onStopGenerate: M,
          onAccept: () => {
            g(false);
            B();
            if (d && u) {
              av({
                editor: d,
                range: u
              });
            }
          },
          onReject: () => {
            g(false);
            B();
            A();
          }
        }),
        visible: !!f,
        position: "bottomLeft",
        rePosKey: `${o}_${R}`,
        onClickOutSide: B,
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: a$["anchor-area"],
          style: Z
        })
      })]
    });
  };
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var deepEqualityCheck_1 = require("deep-equality-check_1") /*id: 956585*/;
  let aW = e => {
    if (!e) {
      return false;
    }
    let t = e.getContent().ops.find(diffOperationValidators.isWildcardInsert);
    if (!t) {
      return true;
    }
    let o = Object.keys(t.attributes || {});
    return o.length === 1 || o.length === 2 && o.includes("list");
  };
  let az = e => {
    let {
      editor: t
    } = e;
    let o = reactCoreLibraryReexport.useRef(false);
    let [r, i] = reactCoreLibraryReexport.useState();
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        t.on(editorEventConstants.editorEventTypes.SELECTION_CHANGE, n);
        return () => {
          t.off(editorEventConstants.editorEventTypes.SELECTION_CHANGE, n);
        };
      }
    }, [t]);
    let n = reactFunctionMemoHook.useMemoizedCallback(() => {
      let e = a();
      let t = e ? throttledPathFilterStringify.throttledPathStr(e, "line", "offset", "zoneId") : undefined;
      i(e => e && t && deepEqualityCheck_1.deepEqual(e, t) ? e : t);
    });
    let a = reactFunctionMemoHook.useMemoizedCallback(() => {
      var r;
      if (!t || t.isEmpty() || (o.current ||= t.isFocus(), !o.current)) {
        return;
      }
      let i = t.selection.getSelection();
      let {
        zoneId: n
      } = i.start;
      if (!i.isCollapsed() || n !== zeroConstantModule_1.versionValue) {
        return;
      }
      let a = t.getContentState();
      let l = a.getZoneState(n);
      let c = l == null ? undefined : l.getLine(i.start.line);
      if (!c || !aW(c)) {
        return;
      }
      let s = c.isEndOfLine(i.start.offset);
      let d = c.isEndOfLine(i.start.offset + 1);
      let _ = (r = c.getEntities([[r7]])[0]) === null || r === undefined ? undefined : r.end?.offset;
      let u = !!isNumberUtil.isNumber(_) && c.isEndOfLine(_);
      if (s && u) {
        let e = new editorPositionClass.EditorPosition({
          editor: t,
          zoneId: n,
          start: i.toPosition().start - 1,
          len: 0
        });
        t.selection.setSelection(e, true);
        t.selection.focus();
        return e.toRange(a).start;
      }
      if (s || d && u) {
        return i.start;
      }
    });
    return r;
  };
  let aM = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let o = tR().raw;
    let r = az({
      editor: o
    });
    let i = reactCoreLibraryReexport.useMemo(() => o && r ? new editorRangeZoneClass.EditorRangeZone({
      editor: o,
      start: r,
      end: r
    }).toPosition() : undefined, [o, r]);
    let [n, a] = reactCoreLibraryReexport.useState();
    let l = useDebouncedValueHook.useDebouncedValue(i == null ? undefined : i.start, {
      wait: 3000
    });
    let c = !!i && i.start === l && l !== n;
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      hideAIContent: s
    }));
    reactCoreLibraryReexport.useEffect(() => () => {
      u();
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      a(undefined);
    }, [l]);
    reactCoreLibraryReexport.useEffect(() => {
      d();
    }, [c]);
    let s = reactFunctionMemoHook.useMemoizedCallback(e => {
      a(e);
    });
    let d = reactFunctionMemoHook.useMemoizedCallback(() => {
      if (o && (u(), c && i)) {
        o.selection.focus(true, true);
        let e = o.selection.getSelection();
        if (e.isCollapsed()) {
          _({
            entityId: randomStringGenerator.createRandomString(),
            position: new editorRangeZoneClass.EditorRangeZone({
              editor: o,
              start: e.end,
              end: e.end
            }).toPosition()
          });
        }
      }
    });
    let _ = reactFunctionMemoHook.useMemoizedCallback(e => {
      let {
        entityId: t,
        position: r
      } = e;
      let {
        zoneId: i
      } = r;
      if (!o || !t || !i) {
        return;
      }
      let n = o.getContentState();
      if (!n.getZoneState(i)) {
        return;
      }
      let a = new contentStructureDelta.ContentDelta({
        zoneId: i
      }).retain(r.start).insert(" ", {
        [r7]: t
      });
      n.apply(a, {
        nonundoable: true,
        type: editorZoneDeltaOps.modeAutoApply
      });
    });
    let u = reactFunctionMemoHook.useMemoizedCallback(() => {
      if (!o) {
        return;
      }
      let e = o.getContentState();
      let t = e.getEntities([[r7]]).map(e => e.attributes[r7]);
      while (t.length) {
        let o = t.pop();
        let r = o ? e.getEntities([[r7, o]])[0] : undefined;
        if (!r) {
          continue;
        }
        let i = e.getZoneState(r.start.zoneId);
        let n = e.rangeToPosition(throttledPathFilterStringify.throttledPathStr(r, "start", "end"));
        if (i && n) {
          e.apply(new contentStructureDelta.ContentDelta().retain(n.start).delete(n.len), {
            nonundoable: true,
            type: editorZoneDeltaOps.modeAutoApply
          });
        }
      }
    });
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {});
  });
  var aP = {
    container: "container-i5OlFg"
  };
  let aL = e => {
    let {
      className: t,
      style: o,
      limitedCount: r,
      cuttentCount: i
    } = e;
    let n = tS();
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: i > r && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: A(aP.container, t),
        style: o,
        children: [n("doc_editor_char_count_exceed"), " (", i, "/", r, ")"]
      })
    });
  };
  var aB = {
    bottom: "bottom-Aw9wJp",
    process: "process-AeLJrv",
    "bg-spin": "bg-spin-dd4pvC",
    bgSpin: "bg-spin-dd4pvC",
    tip: "tip-CRygwu",
    "tip-creat-thread": "tip-creat-thread-PNpOOe",
    tipCreatThread: "tip-creat-thread-PNpOOe",
    "stop-popover-ok-button": "stop-popover-ok-button-LdSo6a",
    stopPopoverOkButton: "stop-popover-ok-button-LdSo6a",
    "stop-popover-cancel-button": "stop-popover-cancel-button-_gbI4F",
    stopPopoverCancelButton: "stop-popover-cancel-button-_gbI4F"
  };
  let aO = e => e / 1000;
  let aA = e => Math.ceil(aO(e) / 60);
  let aK = e => {
    let t = tS();
    let {
      streamProgress: o,
      expectedRemainingTime: r,
      onStopDocGenerate: i,
      onCreateNewChat: n
    } = e;
    let a = !!r && !!(aO(r) > 3);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: aB.bottom,
      "data-testid": "flow_doc_editor_generate_bar",
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: A(aB.process, {
          "mb-14": !a
        }),
        children: [reactJsxRuntimeCoreReexport.jsx(rz, {
          className: aB["streaming-tag"],
          title: isUndefinedCheck.isUndefined(o) ? t("doc_editor_ai_writing") : `${t("doc_editor_ai_writing")} ${o ?? 0}%`
        }), reactJsxRuntimeCoreReexport.jsx(topBarActionItem.TopBarActionItem, {
          size: "larger-icon",
          color: "grey",
          newIcon: true,
          tooltip: t("doc_editor_stop_generating"),
          onClick: () => {
            modalDialogComponent.Modal.warning({
              title: t("doc_editor_stop_writing_confirm_alert_title"),
              content: t("doc_editor_stop_writing_confirm_alert_desc"),
              okText: t("confirm_button_title"),
              cancelText: t("cancel_button_title"),
              onOk: i,
              zIndex: 10000,
              centered: true,
              bodyStyle: {
                borderRadius: "24px"
              },
              closable: false,
              okButtonProps: {
                className: aB["stop-popover-ok-button"]
              },
              cancelButtonProps: {
                className: aB["stop-popover-cancel-button"]
              }
            });
          },
          children: reactJsxRuntimeCoreReexport.jsx(plusCircleRtlIcon.PlusCircleIcon, {})
        })]
      }), a && reactJsxRuntimeCoreReexport.jsxs("div", {
        className: aB.tip,
        children: [reactJsxRuntimeCoreReexport.jsx("span", {
          className: "mr-6",
          children: t("doc_editor_ai_writing_progress_tip_text").replace("%d", String(aA(r ?? 0)))
        }), n && reactJsxRuntimeCoreReexport.jsx("span", {
          className: aB["tip-creat-thread"],
          onClick: n,
          children: t("doc_editor_ai_writing_progress_tip_new_chat")
        })]
      })]
    });
  };
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var useHoverStateHook = require("use-hover-state-hook") /*id: 105691*/;
  var semiDividerComponent = require("semi-divider-component") /*id: 384623*/;
  var chevronDownIconComponent = require("chevron-down-icon-component") /*id: 634936*/;
  var aV = {
    wrapper: "wrapper-GQFHRp",
    title: "title-nQA2eK",
    sublogos: "sublogos-Gg_ien",
    "collepas-icon-wrapper": "collepas-icon-wrapper-CraZlm",
    "collepas-icon": "collepas-icon-lK9AjB",
    "content-wrapper": "content-wrapper-LuArua",
    "content-item": "content-item-j8K3so",
    "content-item-index": "content-item-index-yBBDpL",
    "content-item-logo": "content-item-logo-eM3Lnx",
    "content-item-logo-default": "content-item-logo-default-ewwHPg",
    "content-item-title": "content-item-title-h2lFK_",
    "title-content": "title-content-anJg0J",
    "wrapper-collapsed": "wrapper-collapsed-HQufe7"
  };
  let aX = e => {
    let {
      data: t,
      docEditor: o
    } = e;
    let r = i18nTranslationUtils.useTranslationWithFallback();
    let i = reactCoreLibraryReexport.useRef(null);
    let [n, a] = reactCoreLibraryReexport.useState(false);
    let [l, c] = reactCoreLibraryReexport.useState(false);
    useHoverStateHook.useHoverState(i, {
      onChange: c
    });
    let s = () => {
      a(!n);
    };
    let d = {
      className: aV["collepas-icon"]
    };
    let _ = t.filter(e => e.logoUrl).slice(0, 3);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: A([aV.wrapper, n ? aV["wrapper-collapsed"] : ""]),
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: A(aV.title),
        onClick: () => {
          c(false);
          setTimeout(() => {
            s();
          }, 100);
        },
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex items-center justify-center",
          children: [!!n && _.map(e => e.logoUrl ? reactJsxRuntimeCoreReexport.jsx("img", {
            className: aV.sublogos,
            src: xssContentSanitizer.sanitizeUrl(e.logoUrl, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3pTbXhh-lZaN$ds-zFhbHB%T$hoa1Z6a3dXbE14ZEZsWE5Xa*FNbFo1$ERKT2RtSllRblpp-lZaM$pFaE5kb%Z-Tld0-$dHZDFaRWhPTkZsW$NtNWtXRTA5"
            })
          }) : reactJsxRuntimeCoreReexport.jsx(rtlLinkIcon.LinkIcon, {
            className: aV.sublogos
          })), reactJsxRuntimeCoreReexport.jsxs("span", {
            className: aV["title-content"],
            children: [r("write_reference_list_header"), " (", t.length, ")"]
          })]
        }), reactJsxRuntimeCoreReexport.jsx(semiTooltipWrapper.SemiTooltip, {
          visible: l,
          content: r(n ? "write_reference_list_tooltip_show" : "write_reference_list_tooltip_hide"),
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: aV["collepas-icon-wrapper"],
            ref: i,
            children: n ? reactJsxRuntimeCoreReexport.jsx(iconChevronDown.ChevronDownIcon, {
              ...d
            }) : reactJsxRuntimeCoreReexport.jsx(chevronDownIconComponent.ChevronDownIcon, {
              ...d
            })
          })
        })]
      }), n ? null : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(semiDividerComponent.Divider, {
          margin: 16
        }), reactJsxRuntimeCoreReexport.jsx(scrollViewComponent.ScrollView, {
          className: aV["content-wrapper"],
          autoShowScrollbar: true,
          children: t.map((e, t) => reactJsxRuntimeCoreReexport.jsx(reactIntersectionObserver_1.InView, {
            onChange: e => {
              if (e) {
                o.behavior.emit("referenceQuoteShow", {
                  showFrom: "after_text"
                });
              }
            },
            children: reactJsxRuntimeCoreReexport.jsxs("div", {
              className: aV["content-item"],
              onClick: () => {
                window.open(xssContentSanitizer.sanitizeUrl(e.url, null, {
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
                  filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3pTbXhh-lZaN$ds-zFhbHB%T$hoa1Z6a3dXbE14ZEZsWE5Xa*FNbFo1$ERKT2RtSllRblpp-lZaM$pFaE5kb%Z-Tld0-$dHZDFaRWhPTkZsW$NtNWtXRTA5"
                }), "_blank");
                o.behavior.emit("referenceQuoteClick", {
                  clickFrom: "after_text"
                });
              },
              children: [reactJsxRuntimeCoreReexport.jsx("span", {
                className: aV["content-item-index"],
                children: t + 1
              }), e.logoUrl ? reactJsxRuntimeCoreReexport.jsx("img", {
                className: aV["content-item-logo"],
                src: xssContentSanitizer.sanitizeUrl(e.logoUrl, null, {
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
                  filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3pTbXhh-lZaN$ds-zFhbHB%T$hoa1Z6a3dXbE14ZEZsWE5Xa*FNbFo1$ERKT2RtSllRblpp-lZaM$pFaE5kb%Z-Tld0-$dHZDFaRWhPTkZsW$NtNWtXRTA5"
                })
              }) : reactJsxRuntimeCoreReexport.jsx(rtlLinkIcon.LinkIcon, {
                className: A(aV["content-item-logo"], aV["content-item-logo-default"])
              }), reactJsxRuntimeCoreReexport.jsx("span", {
                className: aV["content-item-title"],
                children: e.title
              })]
            })
          }))
        })]
      })]
    });
  };
  var aq = {
    container: "container-LwhKrb",
    "size-middle": "size-middle-DFwnKe",
    sizeMiddle: "size-middle-DFwnKe",
    "size-small": "size-small-YNW9RL",
    sizeSmall: "size-small-YNW9RL",
    header: "header-BRySjr",
    content: "content-CYKQKF",
    scroller: "scroller-Tb6Zbh",
    scrollable: "scrollable-rL0YD3",
    "bottom-spacing": "bottom-spacing-P6Gl_w",
    bottomSpacing: "bottom-spacing-P6Gl_w",
    inner: "inner-NB_7LW",
    title: "title-hXfnFH",
    readonly: "readonly-Pd6nAM",
    doc: "doc-ytsK3v",
    skeleton: "skeleton-llCX8U",
    editor: "editor-hDj7kU",
    "first-h1-as-title": "first-h1-as-title-NLMKLo",
    firstH1AsTitle: "first-h1-as-title-NLMKLo",
    "error-icon": "error-icon-deTVlu",
    errorIcon: "error-icon-deTVlu"
  };
  let aU = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var o;
    let {
      className: i,
      style: n,
      value: a,
      background: l,
      size: c = "middle",
      title: s,
      editable: d = true,
      copyable: _ = true,
      showTitle: u = true,
      showControlBar: m = true,
      showStreamProgress: p = true,
      virtualScroll: h = true,
      rewriteActions: g,
      newContentActions: f,
      moreActions: x,
      allowEditOnStreaming: v = true,
      forceStreaming: y = false,
      enableParagraphOperation: b = false,
      enableGenerateParagraph: w = true,
      enableNewlineAdder: k = false,
      enableParagraphRewrite: j = true,
      enableNewContentHelper: C = false,
      enableAutoContinueWrite: N = false,
      charCountLimit: S,
      bottomAttaching: E,
      bottomSpacing: Z = true,
      askWhenStreamError: R = true,
      onClose: $,
      getRootContainer: T,
      onScroll: F,
      onTitleChange: W,
      onContentChange: z,
      onSelectionChange: M,
      onStreamingStateChange: P,
      onSelectionAttributesChange: L,
      onDocFocus: B,
      onDocBlur: O,
      onCopy: K,
      onGenerateStream: D,
      onParagraphEditingChange: J,
      onCreateNewChat: G,
      onStopDocGenerate: X,
      onSecondGenerateFinished: q,
      onAutoAddImage: U,
      onFetchImageList: Y,
      onGenerateImage: eo,
      onUploadImage: er,
      onCheckImageValid: ei,
      onLoadImageById: ea,
      onLoadImageByKey: el,
      onNewContentGenerateStateChange: ec,
      onProcessImageBeforeLoad: es,
      referenceQuoteManager: ed
    } = e;
    let e_ = tS();
    let {
      ref: eu,
      height: em,
      width: ep
    } = resizeObserverHooks.useResizeObserverEx();
    let {
      ref: eh,
      width: eg
    } = resizeObserverHooks.useResizeObserverEx();
    let ef = reactCoreLibraryReexport.useRef(null);
    let ex = reactCoreLibraryReexport.useRef(null);
    let ev = reactCoreLibraryReexport.useRef(null);
    let ey = reactCoreLibraryReexport.useRef(null);
    let eb = reactCoreLibraryReexport.useRef();
    let ew = reactCoreLibraryReexport.useRef();
    let ek = reactCoreLibraryReexport.useRef(null);
    let [eM, eD] = reactUseRefStateHook.useRefState(null);
    let [eH, eV] = reactCoreLibraryReexport.useState(false);
    let [eX, eq] = reactCoreLibraryReexport.useState(generationStatusConstants.generationStatus.NotStart);
    let eU = reactCoreLibraryReexport.useMemo(() => [generationStatusConstants.generationStatus.Generating, generationStatusConstants.generationStatus.WaitForFeedback].includes(eX), [eX]);
    let [eY, eQ] = reactCoreLibraryReexport.useState(0);
    let [e0, e1] = reactCoreLibraryReexport.useState(0);
    let [e2, e7] = reactCoreLibraryReexport.useState(false);
    let [te, tr] = reactCoreLibraryReexport.useState(false);
    let ti = eM.current;
    let {
      isEditorEmpty: tn
    } = e9({
      editor: ti
    });
    let {
      title: tl,
      setTitle: tc,
      titleAreaRef: ts
    } = tt({
      editor: ti,
      title: s
    });
    let td = useLatestRef_1.useLatestRef(tl);
    let t_ = reactUseConstantHook.useConstant(() => new aiEditorWrapper.AiEditor({
      title: td,
      editor: eM,
      scroller: ef,
      image: {
        loadImageById: e => tT(e),
        loadImageByKey: el,
        processImageBeforeLoad: es
      }
    }));
    reactCoreLibraryReexport.useEffect(() => {
      if (ti) {
        tz(ti);
        Object.assign(window, {
          editor: ti
        });
        ti.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, tM);
        ti.on(editorEventConstants.editorEventTypes.SELECTION_CHANGE, tP);
        if (B) {
          ti.on(editorEventConstants.editorEventTypes.FOCUS, B);
        }
        if (O) {
          ti.on(editorEventConstants.editorEventTypes.BLUR, O);
        }
        ti.on(editorEventConstants.editorEventTypes.COPY, tI);
        return () => {
          ti.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, tM);
          ti.off(editorEventConstants.editorEventTypes.SELECTION_CHANGE, tP);
          if (B) {
            ti.off(editorEventConstants.editorEventTypes.FOCUS, B);
          }
          if (O) {
            ti.off(editorEventConstants.editorEventTypes.BLUR, O);
          }
          ti.off(editorEventConstants.editorEventTypes.COPY, tI);
        };
      }
    }, [ti]);
    reactCoreLibraryReexport.useEffect(() => {
      t_.__internalEvents.on("stopGenerate", tO);
      return () => {
        t_.__internalEvents.removeAllListeners();
        t_.removeAllListeners();
        t_.behavior.removeAllListeners();
      };
    }, []);
    reactCoreLibraryReexport.useImperativeHandle(t, () => t_, []);
    to({
      editor: ti
    });
    ta({
      editor: ti
    });
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (W != null) {
        W(tl);
      }
    }, [tl]);
    let {
      isError: tu,
      isFinished: tm,
      isEnd: tp,
      isStarted: th,
      initialDeltaSet: tg,
      stopIfStream: tf,
      progress: tv,
      expectedRemainingTime: tb
    } = tx({
      editor: ti,
      value: a,
      onError: e => tF(e),
      referenceQuoteManager: ed
    });
    let tw = !tp && !th;
    let tk = ty({
      editor: ti
    });
    let tj = useDebouncedValueHook.useDebouncedValue(!!a, {
      trailing: true,
      leading: false,
      wait: 200
    });
    let tC = d && !eH && !eU && !tw && (!!v || !tp);
    let tN = !!l && !tp;
    let tE = u && (tC || !!tl);
    reactCoreLibraryReexport.useEffect(() => {
      if (L != null) {
        L(tk);
      }
    }, [tk]);
    reactCoreLibraryReexport.useEffect(() => {
      t_.emit("emptyStateChange", tn);
    }, [tn]);
    reactCoreLibraryReexport.useEffect(() => {
      if (P != null) {
        P({
          isFinished: tm,
          isError: tu,
          isStarted: th
        });
      }
    }, [tu, tm, th]);
    let tR = async e => {
      try {
        let t = S ? editorDeltaSetUtils.getRangeDeltaSet({
          deltaSet: e,
          start: 0,
          end: S
        }) : e;
        return deltaToMarkdownConverter.convertDeltaToMarkdown({
          docEditor: t_,
          deltaSet: t,
          enableLoadImageById: false
        });
      } catch (e) {
        t_.error(new configErrorClass.ConfigError({
          id: "on_update_to_markdown_error",
          rawError: e
        }));
        return null;
      }
    };
    let tT = skillPinModalCallback.useSkillPinCallback(async e => {
      let {
        id: o
      } = e;
      if (!o || !ea) {
        return null;
      }
      let r = ew.current?.[o];
      if (r) {
        return r;
      }
      let i = await ea(e);
      if (i) {
        ew.current ||= {};
        ew.current[o] = i;
        return i;
      } else {
        return null;
      }
    });
    let {
      run: tI
    } = useDebouncedCallbackHook_1.useDebouncedCallback(e => {
      if (!ti) {
        return;
      }
      let {
        start: t,
        len: o,
        zoneId: r
      } = ti.selection.getSelection().toPosition();
      let i = t + o;
      if (K != null) {
        K({
          content: editorDeltaSetUtils.getRangeDeltaSet({
            deltaSet: ti.getContent(),
            start: t,
            end: i,
            zoneId: r
          }),
          start: t,
          end: i,
          zoneId: r,
          event: e
        });
      }
    }, {
      leading: true,
      trailing: false,
      wait: 200,
      maxWait: 400
    });
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      let t = e => tI(e);
      if ((e = eh.current) !== null && e !== undefined) {
        e.addEventListener("copy", t);
      }
      return () => {
        var e;
        if ((e = eh.current) === null || e === undefined) {
          return undefined;
        } else {
          return e.removeEventListener("copy", t);
        }
      };
    }, []);
    let tF = skillPinModalCallback.useSkillPinCallback(e => {
      if (flowDocErrorClass.isFlowDocError(e) && R) {
        modalDialogComponent.Modal.confirm({
          icon: reactJsxRuntimeCoreReexport.jsx(rtlInfoOutlinedIcon.InfoOutlinedIcon, {
            className: aq["error-icon"]
          }),
          title: e_("doc_editor_paragraph_error_modal_title"),
          content: e.message,
          cancelText: e_("doc_editor_paragraph_error_modal_keep_now"),
          okButtonProps: {
            style: {
              display: "none"
            }
          },
          centered: true,
          zIndex: 3000
        });
      }
    });
    let tW = async () => {
      if (ti) {
        await promiseAsyncUtilities.createDelayedPromise(0);
        if (!ti.selection.getSelection().isCollapsed()) {
          ti.selection.updateBrowserSelection();
        }
      }
    };
    let tz = e => {
      if (e) {
        eQ(eJ(e));
        e1(eG(e));
      }
    };
    let tM = skillPinModalCallback.useSkillPinCallback(async e => {
      var t;
      if (!ti) {
        return;
      }
      let o = (t = e.deltaSet) === null || t === undefined ? undefined : t.reduce((e, t) => {
        return e = e + (t == null ? undefined : t.ops?.length) || 0;
      }, 0);
      if (e.deltaSet && o === 0) {
        return;
      }
      let r = e.current.toDeltaSet(false, true);
      if (z != null) {
        z({
          autoApply: editorZoneDeltaOps.isAutoApplyMode(e),
          event: e,
          markdown: await tR(r)
        });
      }
      tz(ti);
    });
    let tP = skillPinModalCallback.useSkillPinCallback(() => {
      if (!ti) {
        return;
      }
      let e = ti.selection.getSelection();
      let t = eb.current;
      if (!deepEqualUtil_1.deepEqual(e, t)) {
        var o;
        if ((o = ev.current) !== null && o !== undefined) {
          o.resetPreChecked();
        }
        if (M != null) {
          M(e);
        }
        eb.current = e;
      }
    });
    let tL = async () => {
      let e = await t_.getSelectionText();
      if (e === null) {
        throw Error("Cannot get selection text");
      }
      return e;
    };
    let tB = async () => {
      let e = await t_.getSelectionParagraphText();
      return e ?? undefined;
    };
    let tO = skillPinModalCallback.useSkillPinCallback(() => {
      if (tf != null) {
        tf();
      }
      if (X != null) {
        X();
      }
    });
    let tA = reactFunctionMemoHook.useMemoizedCallback(e => {
      var t;
      if ((t = ek.current) !== null && t !== undefined) {
        t.hideAIContent(e);
      }
    });
    return reactJsxRuntimeCoreReexport.jsx(tZ, {
      value: t_,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        ref: eh,
        className: A(aq.container, i, aq[`size-${c}`]),
        "data-testid": "flow_doc_editor",
        children: [m && reactJsxRuntimeCoreReexport.jsx(nc, {
          ref: ev,
          className: aq.header,
          editable: !e2 && tC,
          title: tl,
          moreActions: x,
          charLength: eY,
          wordLength: e0,
          checkedAttributes: tk,
          downloadable: tp,
          onMouseDown: tW,
          onClose: $
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: aq.content,
          children: [reactJsxRuntimeCoreReexport.jsx(scrollViewComponent.ScrollView, {
            ref: ef,
            className: aq.scroller,
            scrollableClassName: A(aq.scrollable, "flow-doc-scrollable", {
              [aq["bottom-spacing"]]: Z
            }),
            style: n,
            autoShowScrollbar: true,
            bottomAttaching: isUndefinedCheck.isUndefined(E) ? tj : E && tj,
            onScroll: () => {
              if (F != null) {
                F();
              }
              t_.emit("scroll");
            },
            children: reactJsxRuntimeCoreReexport.jsxs("div", {
              ref: eu,
              className: A(aq.inner, "flow-doc-inner", {
                [aq["bottom-spacing"]]: !isUndefinedCheck.isUndefined(S)
              }),
              children: [tE && reactJsxRuntimeCoreReexport.jsx(semiTextareaComponent.TextArea, {
                ref: ts,
                className: A(aq.title, {
                  [aq.readonly]: !tC
                }),
                placeholder: e_("doc_editor_title_placeholder"),
                value: tl,
                onChange: tc,
                autosize: {
                  minRows: 1
                },
                onFocus: () => e7(true),
                onBlur: () => e7(false)
              }), reactJsxRuntimeCoreReexport.jsxs("div", {
                className: aq.doc,
                onClickCapture: e3,
                children: [tN && reactJsxRuntimeCoreReexport.jsx(iP, {
                  businessKey: "flow_doc_editor_background",
                  getRootContainer: T,
                  onLog: emptyExportFunction.emptyFunction,
                  editable: false,
                  copyable: false,
                  isFixToCommonZone: true,
                  virtualScroll: h,
                  referenceQuoteManager: ed,
                  children: e => reactJsxRuntimeCoreReexport.jsx(ns, {
                    ...e,
                    observerElementRef: ex,
                    value: l
                  })
                }), reactJsxRuntimeCoreReexport.jsxs("div", {
                  className: A(aq.content),
                  ref: ex,
                  children: [tw && !tN && reactJsxRuntimeCoreReexport.jsx(rP, {
                    className: aq.skeleton,
                    showStreamingTag: false,
                    size: "large",
                    color: "grey"
                  }), reactJsxRuntimeCoreReexport.jsx(iP, {
                    businessKey: "flow_doc_editor",
                    editable: tC,
                    copyable: _,
                    getRootContainer: T,
                    onLog: emptyExportFunction.emptyFunction,
                    initData: tg,
                    onError: e => {
                      t_.error(new configErrorClass.ConfigError({
                        id: "editor_kit_inner_error",
                        rawError: e
                      }));
                    },
                    isFixToCommonZone: true,
                    virtualScroll: h,
                    onAutoAddImage: U,
                    onFetchImageList: Y,
                    onGenerateImage: eo,
                    onUploadImage: er,
                    onCheckImageValid: ei,
                    onGenerateStream: D,
                    onAutoContinueWriteReject: tA,
                    docRootRef: eh,
                    referenceQuoteManager: ed,
                    children: e => reactJsxRuntimeCoreReexport.jsx(editorZoneRenderer.EditorComponent, {
                      ...e,
                      className: A(aq.editor, {
                        [aq["bottom-spacing"]]: Z,
                        [aq["first-h1-as-title"]]: !tE
                      }),
                      onInit: eD
                    })
                  }), ti && tC && reactJsxRuntimeCoreReexport.jsx(nF, {
                    ref: ey,
                    visible: te,
                    onVisibleChange: tr,
                    rewriteActions: g,
                    checkedAttributes: tk,
                    onInsert: e => {
                      var t;
                      if (ti) {
                        if ((t = ey.current) !== null && t !== undefined) {
                          t.close();
                        }
                        e4({
                          editor: ti,
                          markdown: e,
                          applyType: rewriteApplyConstant.rewriteApply
                        });
                      }
                    },
                    onReplace: e => {
                      var t;
                      if (ti) {
                        if ((t = ey.current) !== null && t !== undefined) {
                          t.close();
                        }
                        e5({
                          editor: ti,
                          markdown: e,
                          applyType: rewriteApplyConstant.rewriteApply
                        });
                      }
                    },
                    onGenerateByKey: async e => {
                      let {
                        key: t
                      } = e;
                      if (D == null) {
                        return undefined;
                      } else {
                        return D({
                          type: aiEditorConstants.aiActions.RewriteByKey,
                          selectedText: await tL(),
                          paragraphText: await tB(),
                          key: t
                        });
                      }
                    },
                    onGenerateByText: async e => {
                      let {
                        text: t,
                        prevGeneratedText: o
                      } = e;
                      if (D == null) {
                        return undefined;
                      } else {
                        return D({
                          type: aiEditorConstants.aiActions.RewriteByText,
                          selectedText: await tL(),
                          paragraphText: await tB(),
                          prevGeneratedText: o,
                          text: t
                        });
                      }
                    }
                  }), ti && tC && tp && k && reactJsxRuntimeCoreReexport.jsx(nB, {
                    refreshKey: em,
                    checkedAttributes: tk,
                    showPlaceholder: !C || !tn
                  }), ti && b && (tC || eH) && tp && reactJsxRuntimeCoreReexport.jsx(ai, {
                    width: ep,
                    refreshKey: em,
                    onGenerateSummary: e => D == null ? undefined : D({
                      type: aiEditorConstants.aiActions.ParagraphSummary,
                      ...e
                    }),
                    onGenerateParagraph: e => D == null ? undefined : D({
                      type: aiEditorConstants.aiActions.Paragraph,
                      ...e
                    }),
                    onEditingChange: e => {
                      eV(e);
                      if (J != null) {
                        J(e);
                      }
                    }
                  }), ti && tC && tp && !k && w && reactJsxRuntimeCoreReexport.jsx(ad, {
                    editor: ti,
                    maxWidth: ep,
                    refreshKey: em,
                    onGenerateParagraph: e => D == null ? undefined : D({
                      type: aiEditorConstants.aiActions.Paragraph,
                      ...e
                    }),
                    onGenerateFinished: q,
                    onGenerateError: tF
                  }), j && tC && reactJsxRuntimeCoreReexport.jsx(ah, {
                    docRootRef: eh,
                    refreshKey: em,
                    fullWidth: eg,
                    contentWidth: ep,
                    focusWhenOverlap: te,
                    onRewrite: e => {
                      var t;
                      let {
                        range: o
                      } = e;
                      if ((t = ey.current) !== null && t !== undefined) {
                        t.open({
                          range: o,
                          showRewrite: true,
                          highlight: false
                        });
                      }
                    }
                  }), ti && C && (tC || eU) && tp && reactJsxRuntimeCoreReexport.jsx(aT, {
                    maxWidth: ep,
                    refreshKey: em,
                    newContentActions: f,
                    onGenerate: e => D == null ? undefined : D({
                      type: aiEditorConstants.aiActions.InlineHelpMeWrite,
                      ...e
                    }),
                    onNewContentGenerateStateChange: e => {
                      eq(e);
                      if (ec != null) {
                        ec(e);
                      }
                      t_.emit("newContentGenerateStateChange", e);
                    }
                  }), ti && N && tC && tp && reactJsxRuntimeCoreReexport.jsx(aM, {
                    ref: ek
                  }), tp && !((o = eM.current) === null || o === undefined ? undefined : o.isEmpty()) && !!(ed == null ? undefined : ed.getReferenceList()?.length) && reactJsxRuntimeCoreReexport.jsx("div", {
                    style: {
                      marginTop: "64px"
                    },
                    children: reactJsxRuntimeCoreReexport.jsx(aX, {
                      data: ed.getReferenceList(),
                      docEditor: t_
                    })
                  })]
                })]
              })]
            })
          }), !isUndefinedCheck.isUndefined(S) && reactJsxRuntimeCoreReexport.jsx(aL, {
            limitedCount: S,
            cuttentCount: eY
          })]
        }), (y || !tp) && p && reactJsxRuntimeCoreReexport.jsx(aK, {
          streamProgress: tv,
          expectedRemainingTime: tb,
          onStopDocGenerate: tO,
          onCreateNewChat: G
        })]
      })
    });
  });
  let aY = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      i18nConfig: o,
      ...r
    } = e;
    let i = useStableObjectHook.useStableObject(r);
    return reactJsxRuntimeCoreReexport.jsx(tC, {
      value: o,
      children: reactJsxRuntimeCoreReexport.jsx(aU, {
        ref: t,
        ...i
      })
    });
  });
  var aQ = {
    container: "container-R3Xrt8",
    "update-time": "update-time-XByqbA"
  };
  let a0 = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: i,
      style: n,
      docId: a,
      docVersion: l,
      title: c,
      moreActions: s = [],
      autoRestoreCachedBufferDiff: d = true,
      overrideWhenFetchedUpdated: _ = false,
      showTitle: u,
      pendingStream: m,
      onFetchDoc: p,
      onUpdateDoc: h,
      onStreamingStateChange: g,
      onParagraphEditingChange: f,
      onClose: x,
      onDocFetched: v,
      onDocStartUpdate: y,
      isMatchByVersion: b,
      ...w
    } = e;
    let {
      editable: k = true,
      i18nConfig: j
    } = w;
    let C = objectDefaultsUtil.defaults({
      ...j
    }, docEditorStrings.docEditorTexts);
    let N = reactCoreLibraryReexport.useRef(null);
    let S = reactCoreLibraryReexport.useRef(false);
    let [E, Z] = reactCoreLibraryReexport.useState(false);
    let R = reactCoreLibraryReexport.useRef(false);
    let $ = reactCoreLibraryReexport.useRef(false);
    let T = Y({
      key: `flow_doc_editor_buffered_title_${a}`
    });
    let F = reactCoreLibraryReexport.useRef();
    let W = reactCoreLibraryReexport.useRef();
    let {
      update: M,
      pop: P
    } = skillPinApplyModeTracker.useApplyModeTracker();
    let L = Y({
      key: `flow_doc_editor_buffered_diff_deltaset_${a}`,
      encode: ec,
      decode: es
    });
    let B = reactCoreLibraryReexport.useRef(false);
    let O = reactCoreLibraryReexport.useRef(true);
    let {
      doc: G,
      currentId: V,
      currentVersion: X,
      isVersionMatch: q,
      updateDoc: U,
      refreshDoc: el,
      resetVersionMatch: e_,
      syncVersionMatch: eu
    } = ew({
      docId: a,
      docVersion: l,
      onFetchDoc: p,
      onUpdateDoc: h,
      throwError: true,
      isMatchByVersion: b,
      pendingStream: m
    });
    let em = T.current ?? (G == null ? undefined : G.title) ?? c;
    let ep = reactCoreLibraryReexport.useRef();
    let eh = skillPinModalCallback.useSkillPinCallback(() => {
      if ($.current || !R.current || !T.current && !F.current || !isUndefinedCheck.isUndefined(ep.current) && ep.current === (G == null ? undefined : G.version) || !k) {
        return;
      }
      ep.current = G == null ? undefined : G.version;
      let e = T.current;
      let t = F.current;
      let o = {
        title: e,
        deltaSet: t,
        markdown: W.current
      };
      if (y != null) {
        y({
          ...o,
          type: P()
        });
      }
      return U(o).then(() => {
        if (T.current === e) {
          T.current = undefined;
        }
        if (F.current === t) {
          F.current = undefined;
          L.current = undefined;
        }
      }).catch(e => {
        var t;
        if ((t = N.current) !== null && t !== undefined) {
          t.error(new configErrorClass.ConfigError({
            id: "update_doc_error",
            rawError: e
          }));
        }
      }).finally(() => {
        ep.current = undefined;
      });
    });
    let {
      run: eg
    } = useDebouncedCallbackHook_1.useDebouncedCallback(eh, {
      trailing: true,
      leading: false,
      wait: 2000
    });
    let ef = () => {
      let t = N.current?.raw;
      if (t) {
        F.current = t.getContent();
        eg();
      }
    };
    let ex = skillPinModalCallback.useSkillPinCallback(async () => {
      await el();
      eu();
    });
    let ev = skillPinModalCallback.useSkillPinCallback(async function (e = {}) {
      let {
        force: t = false
      } = e;
      if (t) {
        e_();
      }
      await el();
    });
    reactCoreLibraryReexport.useEffect(() => {
      let e = N.current;
      if (e) {
        e.on("resync", ev);
        e.on("flush", eh);
      }
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      if (q) {
        return;
      }
      if (_) {
        ex();
        return;
      }
      let {
        destroy: e
      } = modalDialogComponent.Modal.warning({
        centered: true,
        title: C == null ? undefined : C.doc_editor_conflict_alert_title,
        content: C == null ? undefined : C.doc_editor_conflict_alert_description,
        cancelText: C == null ? undefined : C.doc_editor_toolbar_copy,
        okText: C == null ? undefined : C.doc_editor_conflict_alert_primary_button_title,
        visible: true,
        closable: false,
        maskClosable: false,
        closeOnEsc: false,
        onOk: ex,
        onCancel() {
          var e;
          if ((e = N.current) !== null && e !== undefined) {
            e.copy({
              type: "all"
            });
          }
          semiToastNotification.toastInstance.success({
            content: C == null ? undefined : C.doc_editor_toolbar_copy_success,
            showClose: false
          });
        },
        zIndex: 2000
      });
      return e;
    }, [q]);
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (v != null) {
        v(G && V ? {
          ...G,
          docId: V,
          docVersion: X
        } : null);
      }
    }, [G, V, X]);
    useEventListenerHook.useEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible" && S.current && R.current) {
        el(["version"]);
      }
    });
    useEventListenerHook.useEventListener("beforeunload", e => {
      if (eh()) {
        e.returnValue = null;
      }
    });
    useOnUnmountHook.useOnUnmount(() => {
      eh();
    });
    let ey = functionInvoker.invoke(() => {
      let e = s.slice();
      let {
        updateTime: t
      } = G ?? {};
      if (!isUndefinedCheck.isUndefined(t) && E) {
        if (x || s.some(e => e.position === "left-starting")) {
          e.push({
            type: "divider",
            position: "left-ending"
          });
        }
        e.push({
          type: "custom",
          position: "left-ending",
          element: reactJsxRuntimeCoreReexport.jsxs("span", {
            className: aQ["update-time"],
            children: [C == null ? undefined : C.doc_editor_last_update_time, dateFormatUtils_1.formatRelativeDate(t * 1000)]
          })
        });
      }
      return e;
    });
    let eb = async e => {
      var o;
      let r = N.current?.raw;
      if (g != null) {
        g(e);
      }
      let {
        isFinished: i,
        isError: n
      } = e;
      R.current = i;
      $.current = n;
      Z(i);
      if (O.current) {
        O.current = false;
        return;
      }
      if (i && !n) {
        await el(["version"]);
        e_();
        if (!r) {
          if ((o = N.current) === null || o === undefined) {
            return undefined;
          } else {
            return o.error(new configErrorClass.ConfigError({
              id: "no_editor_instance_when_finished"
            }));
          }
        }
        let e = r.getContent();
        F.current &&= e;
        if (W.current && aiEditorWrapper.isAiEditorInstance(N.current)) {
          W.current = await deltaToMarkdownConverter.convertDeltaToMarkdown({
            docEditor: N.current,
            deltaSet: e,
            enableLoadImageById: false,
            enableReferenceQuote: false
          });
        }
        eg();
      }
    };
    let eZ = () => {
      let t = N.current?.raw;
      if (!t) {
        return;
      }
      let o = t.getContent();
      let r = t.getContentState();
      if (!L.current) {
        B.current = true;
        return;
      }
      if (!B.current && !(editorDeltaSetUtils.getDeltaLength(o) <= editorDeltaSetUtils.getDeltaLength(L.current))) {
        r.apply(L.current, {
          type: docEditorStrings.restoredApplyAction
        });
        B.current = true;
      }
    };
    let eR = reactCoreLibraryReexport.useCallback(e => {
      N.current = e;
      if (isFunctionUtil_1.isFunction(t)) {
        t(e);
      } else if (t) {
        t.current = e;
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(reactIntersectionObserver_1.InView, {
      className: A(aQ.container, i),
      style: n,
      onChange: e => {
        S.current = e;
      },
      children: reactJsxRuntimeCoreReexport.jsx(aY, {
        ref: eR,
        value: G == null ? undefined : G.value,
        title: em,
        background: G == null ? undefined : G.background,
        onStreamingStateChange: eb,
        onTitleChange: e => {
          if (e !== em) {
            T.current = e;
            eg();
          }
        },
        onContentChange: e => {
          let {
            event: t,
            autoApply: o,
            markdown: r
          } = e;
          let i = t.options.type;
          if (!editorDeltaSetUtils.isReadOnlyDelta(t.deltaSet)) {
            M({
              eventType: i,
              autoApply: o
            });
            if (d && i !== docEditorStrings.restoredApplyAction) {
              eZ();
            }
            if (!o) {
              if (!B.current && L.current) {
                L.current = undefined;
              }
              if (i !== editorZoneDeltaOps.modeSkipRestore) {
                L.current = L.current && i !== docEditorStrings.restoredApplyAction ? L.current.compose(t.deltaSet) : t.deltaSet;
              }
              F.current = t.current.toDeltaSet(false, true);
              W.current = r ?? undefined;
              eg();
            }
          }
        },
        onParagraphEditingChange: e => {
          if (f != null) {
            f(e);
          }
          if (!e) {
            ef();
          }
        },
        onSecondGenerateFinished: ef,
        onClose: x && (() => {
          if (x != null) {
            x();
          }
          eh();
        }),
        moreActions: ey,
        editable: !!G && k,
        showTitle: isUndefinedCheck.isUndefined(u) ? !!G : u && !!G,
        ...w
      })
    });
  });
  var a1 = "item-zKZ72a";
  let a2 = e => {
    let {
      className: t,
      style: o
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: A("container-FgP43k", t),
      style: o,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: A(a1, "first-TF5Hf6")
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: A(a1, "second-IPUyjP")
      })]
    });
  };
  var a4 = {
    container: "container-uce9f_",
    header: "header-eZQ5NH",
    content: "content-dcppXG",
    inner: "inner-DP7jto",
    "title-skeleton": "title-skeleton-QnwOTu",
    "streaming-tag": "streaming-tag-A6vHlj"
  };
  let a5 = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: o,
      style: r,
      title: i,
      moreActions: n,
      i18nConfig: a,
      loading: l,
      onClose: c
    } = e;
    let s = reactUseConstantHook.useConstant(() => new aiEditorWrapper.AiEditor({
      title: null,
      editor: null,
      scroller: null,
      image: null
    }));
    return reactJsxRuntimeCoreReexport.jsx(tC, {
      value: a,
      children: reactJsxRuntimeCoreReexport.jsx(tZ, {
        value: s,
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: A(a4.container, o),
          style: r,
          children: [reactJsxRuntimeCoreReexport.jsx(nc, {
            className: a4.header,
            title: i,
            moreActions: n,
            downloadable: false,
            onClose: c
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: a4.content,
            children: reactJsxRuntimeCoreReexport.jsx("div", {
              className: a4.inner,
              children: l && reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
                children: [reactJsxRuntimeCoreReexport.jsx(a2, {
                  className: a4["title-skeleton"]
                }), reactJsxRuntimeCoreReexport.jsx(rz, {
                  className: a4["streaming-tag"]
                })]
              })
            })
          })]
        })
      })
    });
  });
  var resourceUrlSigner = require("resource-url-signer") /*id: 869102*/;
  var aiPptImageConstants = require("ai-ppt-image-constants") /*id: 72143*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var disableSelectBarConst = require("disable-select-bar-const") /*id: 554633*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var inlineDocxActionTypes = require("inline-docx-action-types") /*id: 598431*/;
  var samanthaPagesApiService = require("samantha-pages-api-service") /*id: 122025*/;
  let la = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    return {
      doc_editor_conflict_alert_title: e("doc_editor_conflict_alert_title"),
      doc_editor_conflict_alert_description: e("doc_editor_conflict_alert_description"),
      doc_editor_conflict_alert_primary_button_title: e("doc_editor_conflict_alert_primary_button_title"),
      doc_editor_ai_writing: e("doc_editor_ai_writing"),
      doc_editor_ai_skill: e("doc_editor_ai_skill"),
      doc_editor_ai_skill_input_placeholder: e("doc_editor_ai_skill_input_placeholder"),
      doc_editor_ai_skill_panel_insert: e("doc_editor_ai_skill_panel_insert"),
      doc_editor_ai_skill_panel_replace: e("doc_editor_ai_skill_panel_replace"),
      doc_editor_ai_skill_panel_retry: e("doc_editor_ai_skill_panel_retry"),
      doc_editor_ai_skill_panel_stop: e("doc_editor_ai_skill_panel_stop"),
      doc_editor_title_placeholder: e("doc_editor_title_placeholder"),
      doc_editor_toolbar_heading_1: e("doc_editor_toolbar_heading_1"),
      doc_editor_toolbar_heading_2: e("doc_editor_toolbar_heading_2"),
      doc_editor_toolbar_heading_3: e("doc_editor_toolbar_heading_3"),
      doc_editor_toolbar_heading_4: e("doc_editor_toolbar_heading_4"),
      doc_editor_toolbar_ordered_list: e("doc_editor_toolbar_ordered_list"),
      doc_editor_toolbar_unordered_list: e("doc_editor_toolbar_unordered_list"),
      doc_editor_toolbar_text: e("doc_editor_toolbar_text"),
      doc_editor_toolbar_strong: e("doc_editor_toolbar_bold"),
      doc_editor_toolbar_inline_code: e("doc_editor_toolbar_inline_code"),
      doc_editor_toolbar_italic: e("doc_editor_toolbar_italic"),
      doc_editor_toolbar_underline: e("doc_editor_toolbar_underline"),
      doc_editor_toolbar_delete: e("doc_editor_toolbar_strikethrough"),
      doc_editor_toolbar_image: e("doc_editor_toolbar_image"),
      doc_editor_toolbar_blockquote: e("doc_editor_toolbar_blockquote"),
      doc_editor_toolbar_table: e("doc_editor_toolbar_table"),
      doc_editor_toolbar_code_block: e("doc_editor_toolbar_code_block"),
      doc_editor_toolbar_link: e("doc_editor_toolbar_link"),
      doc_editor_toolbar_word_count: e("doc_editor_toolbar_word_count"),
      doc_editor_toolbar_char_count: e("doc_editor_toolbar_char_count"),
      doc_editor_toolbar_copy: e("doc_editor_toolbar_copy"),
      doc_editor_toolbar_copy_success: e("doc_editor_toolbar_copy_success"),
      doc_editor_toolbar_download: e("doc_editor_toolbar_download"),
      doc_editor_toolbar_download_loading: e("doc_editor_toolbar_download_loading"),
      doc_editor_toolbar_close: e("doc_editor_toolbar_close"),
      doc_editor_link_text: e("doc_editor_link_text"),
      doc_editor_link_url: e("doc_editor_link_url"),
      doc_editor_link_confirm: e("doc_editor_link_confirm"),
      doc_editor_code_block_switch_language: e("doc_editor_code_block_switch_language"),
      doc_editor_code_block_search: e("doc_editor_code_block_search"),
      doc_editor_code_block_wrap: e("doc_editor_code_block_wrap"),
      doc_editor_code_block_nowrap: e("doc_editor_code_block_nowrap"),
      doc_editor_code_block_copy: e("doc_editor_code_block_copy"),
      doc_editor_image_scale: e("doc_editor_image_scale"),
      doc_editor_image_origin_scale: e("doc_editor_image_origin_scale"),
      doc_editor_image_change_image: e("doc_editor_image_change_image"),
      doc_editor_image_search_web: e("doc_editor_image_search_web"),
      doc_editor_image_image_generate: e("doc_editor_image_image_generate"),
      doc_editor_image_local_update: e("doc_editor_image_local_update"),
      doc_editor_image_add_image: e("doc_editor_image_add_image"),
      doc_editor_image_adding_image: e("doc_editor_image_adding_image"),
      doc_editor_image_delete: e("doc_editor_image_delete"),
      doc_editor_image_invalid: e("doc_editor_image_invalid"),
      doc_editor_image_failed_to_upload: e("doc_editor_image_failed_to_upload"),
      doc_editor_image_failed_to_add: e("doc_editor_image_failed_to_add"),
      doc_editor_paragraph_rewriting: e("doc_editor_paragraph_rewriting"),
      doc_editor_paragraph_delete: e("doc_editor_paragraph_delete"),
      doc_editor_paragraph_edit_reference: e("doc_editor_paragraph_edit_reference"),
      doc_editor_paragraph_title: e("doc_editor_paragraph_title"),
      doc_editor_paragraph_title_placeholder: e("doc_editor_paragraph_title_placeholder"),
      doc_editor_paragraph_desc: e("doc_editor_paragraph_desc"),
      doc_editor_paragraph_desc_placeholder: e("doc_editor_paragraph_desc_placeholder"),
      doc_editor_paragraph_cancel: e("cancel_button_title"),
      doc_editor_paragraph_regenerate: e("doc_editor_paragraph_regenerate"),
      doc_editor_paragraph_generate: e("doc_editor_paragraph_generate"),
      doc_editor_paragraph_original: e("doc_editor_paragraph_original"),
      doc_editor_paragraph_generated: e("doc_editor_paragraph_generated"),
      doc_editor_paragraph_confirm: e("confirm_button_title"),
      doc_editor_paragraph_exit: e("doc_editor_paragraph_exit"),
      doc_editor_paragraph_cancel_modal_title: e("doc_editor_paragraph_cancel_modal_title"),
      doc_editor_paragraph_cancel_modal_desc: e("doc_editor_paragraph_cancel_modal_desc"),
      doc_editor_paragraph_cancel_modal_cancel_button_text: e("cancel_button_title"),
      doc_editor_paragraph_cancel_modal_confirm_button_text: e("confirm_button_title"),
      doc_editor_paragraph_error_modal_title: e("doc_editor_paragraph_error_modal_title"),
      doc_editor_paragraph_error_modal_keep_now: e("doc_editor_paragraph_error_modal_keep_now"),
      doc_editor_quick_raise_placeholder: e("doc_editor_quick_raise_placeholder"),
      doc_editor_last_update_time: e("skill_writing_last_edited_time"),
      doc_editor_ai_writing_progress_tip_text: e("doc_editor_ai_writing_progress_tip_text"),
      doc_editor_ai_writing_progress_tip_new_chat: e("doc_editor_ai_writing_progress_tip_newChat"),
      doc_editor_stop_writing_confirm_alert_title: e("doc_editor_stop_writing_confirm_alert_title"),
      doc_editor_stop_writing_confirm_alert_desc: e("doc_editor_stop_writing_confirm_alert_desc"),
      confirm_button_title: e("confirm_button_title"),
      cancel_button_title: e("cancel_button_title"),
      doc_editor_stop_generating: e("doc_editor_stop_generating"),
      doc_editor_char_count_exceed: e("canvas_word_limitation_notice_info"),
      doc_editor_newline_placeholder: e("doc_editor_newline_placeholder"),
      doc_editor_diagram_tab_image: e("mindmap_previewer_tab_image"),
      doc_editor_diagram_tab_code: e("mindmap_previewer_tab_code"),
      doc_editor_diagram_download_image: e("flow_web_ext_search_mindmap_download"),
      doc_editor_diagram_copy_image: e("flow_web_ext_search_mindmap_copy"),
      doc_editor_diagram_copy_text: e("skill_search_copytext"),
      doc_editor_diagram_copy_rich_text: e("flow_web_ext_mindmap_copy_rich_text"),
      doc_editor_diagram_copy_success: e("text_copied_tip"),
      doc_editor_diagram_zoom_in: e("flow_web_ext_search_mindmap_zoom_in"),
      doc_editor_diagram_zoom_out: e("flow_web_ext_search_mindmap_zoom_out"),
      doc_editor_diagram_zoom_fit: e("flow_web_ext_search_mindmap_fit"),
      doc_editor_diagram_full_screen_view: e("flow_web_ext_search_mindmap_full"),
      doc_editor_diagram_close: e("flow_web_ext_close_upper_case"),
      doc_editor_diagram_error: e("reading_mindmap_toast_reAsk"),
      doc_editor_first_line_placeholder: e("doc_editor_firstLine_placeholder"),
      doc_editor_first_line_placeholder_ai_write_button: e("doc_editor_firstLine_placeholder_AIWrite_button"),
      doc_editor_ai_write_input_placeholder: e("doc_editor_AIWrite_input_placeholder"),
      doc_editor_ai_write_input_genre_requirement_placeholder: e("doc_editor_AIWrite_input_genre_requirement_placeholder"),
      doc_editor_ai_write_result_confirm_menu_item_accept: e("doc_editor_AIWrite_result_confirm_menu_item_accept"),
      doc_editor_ai_write_result_confirm_menu_item_discard: e("doc_editor_AIWrite_result_confirm_menu_item_discard"),
      doc_editor_ai_write_result_exit_alert_title: e("doc_editor_AIWrite_result_exit_alert_title"),
      doc_editor_ai_write_result_exit_alert_discard_button: e("doc_editor_AIWrite_result_exit_alert_discard_button"),
      doc_editor_ai_write_result_exit_alert_continue_button: e("doc_editor_AIWrite_result_exit_alert_continue_button"),
      doc_editor_ai_write_result_confirm_menu_item_regenerate: e("doc_editor_AIWrite_result_confirm_menu_item_regenerate"),
      doc_editor_writing_canvas_auto_gen_option_save: e("writing_canvas_autoGen_option_save"),
      doc_editor_writing_canvas_auto_gen_option_discard: e("writing_canvas_autoGen_option_discard"),
      doc_editor_writing_canvas_auto_gen_option_regenerate: e("writing_canvas_autoGen_option_regenerate"),
      brandName_cici: e("brandName_dola"),
      brandName_dola: e("brandName_dola"),
      brandName_doubao: e("brandName_doubao")
    };
  };
  var rtlSearchIcon = require("rtl-search-icon") /*id: 717963*/;
  var businessSkillBarIcon = require("business-skill-bar-icon") /*id: 282062*/;
  var rtlListIconComponent = require("rtl-list-icon-component") /*id: 48768*/;
  var skillBarIcon = require("skill-bar-icon") /*id: 384648*/;
  let l_ = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    return [{
      key: inlineDocxActionTypes.getDocxActionTypes.Polish,
      icon: reactJsxRuntimeCoreReexport.jsx(rtlSearchIcon.SearchRtlIcon, {}),
      label: e("doc_editor_ai_skill_polishing")
    }, {
      key: inlineDocxActionTypes.getDocxActionTypes.Expansion,
      icon: reactJsxRuntimeCoreReexport.jsx(businessSkillBarIcon.SkillBarIcon, {}),
      label: e("doc_editor_ai_skill_expand_writing")
    }, {
      key: inlineDocxActionTypes.getDocxActionTypes.Abbreviation,
      icon: reactJsxRuntimeCoreReexport.jsx(rtlListIconComponent.RtlListIcon, {}),
      label: e("doc_editor_ai_skill_short_writing")
    }, {
      key: "modify",
      icon: reactJsxRuntimeCoreReexport.jsx(skillBarIcon.SkillBarIcon, {}),
      label: e("doc_editor_ai_skill_change_tone"),
      children: [{
        key: inlineDocxActionTypes.getDocxActionTypes.InlineToneProfessional,
        icon: reactJsxRuntimeCoreReexport.jsx(skillBarIcon.SkillBarIcon, {}),
        label: e("doc_editor_ai_skill_change_tone_professional")
      }, {
        key: inlineDocxActionTypes.getDocxActionTypes.InlineToneCasual,
        icon: reactJsxRuntimeCoreReexport.jsx(skillBarIcon.SkillBarIcon, {}),
        label: e("doc_editor_ai_skill_change_tone_casual")
      }, {
        key: inlineDocxActionTypes.getDocxActionTypes.InlineToneReadable,
        icon: reactJsxRuntimeCoreReexport.jsx(skillBarIcon.SkillBarIcon, {}),
        label: e("doc_editor_ai_skill_change_tone_readable")
      }, {
        key: inlineDocxActionTypes.getDocxActionTypes.InlineToneSubtle,
        icon: reactJsxRuntimeCoreReexport.jsx(skillBarIcon.SkillBarIcon, {}),
        label: e("doc_editor_ai_skill_change_tone_subtle")
      }, {
        key: inlineDocxActionTypes.getDocxActionTypes.InlineToneAcademic,
        icon: reactJsxRuntimeCoreReexport.jsx(skillBarIcon.SkillBarIcon, {}),
        label: e("doc_editor_ai_skill_change_tone_academic")
      }, {
        key: inlineDocxActionTypes.getDocxActionTypes.InlineToneElegant,
        icon: reactJsxRuntimeCoreReexport.jsx(skillBarIcon.SkillBarIcon, {}),
        label: e("doc_editor_ai_skill_change_tone_elegant")
      }, {
        key: inlineDocxActionTypes.getDocxActionTypes.InlineToneTrendy,
        icon: reactJsxRuntimeCoreReexport.jsx(skillBarIcon.SkillBarIcon, {}),
        label: e("doc_editor_ai_skill_change_tone_trendy")
      }]
    }];
  };
  var rtlArrowLeftIcon = require("rtl-arrow-left-icon") /*id: 31280*/;
  let lm = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    return [{
      key: e("bookmarks_article_readerview"),
      icon: reactJsxRuntimeCoreReexport.jsx(rtlArrowLeftIcon.RtlArrowLeftIcon, {}),
      label: e("doc_editor_AIWrite_genre_list_article")
    }, {
      key: e("skill_writing_template_paper1"),
      icon: reactJsxRuntimeCoreReexport.jsx(rtlArrowLeftIcon.RtlArrowLeftIcon, {}),
      label: e("doc_editor_AIWrite_genre_list_paper")
    }, {
      key: e("skill_writing_template_reasearchReport1"),
      icon: reactJsxRuntimeCoreReexport.jsx(rtlArrowLeftIcon.RtlArrowLeftIcon, {}),
      label: e("doc_editor_AIWrite_genre_list_reasearchReport")
    }, {
      key: e("skill_writing_template_summaryReport1"),
      icon: reactJsxRuntimeCoreReexport.jsx(rtlArrowLeftIcon.RtlArrowLeftIcon, {}),
      label: e("doc_editor_AIWrite_genre_list_summaryReport")
    }, {
      key: e("skill_writing_template_composition1"),
      icon: reactJsxRuntimeCoreReexport.jsx(rtlArrowLeftIcon.RtlArrowLeftIcon, {}),
      label: e("doc_editor_AIWrite_genre_list_composition")
    }, {
      key: e("skill_writing_template_xiaohongshu1"),
      icon: reactJsxRuntimeCoreReexport.jsx(rtlArrowLeftIcon.RtlArrowLeftIcon, {}),
      label: e("doc_editor_AIWrite_genre_list_xiaohongshu")
    }, {
      key: e("skill_writing_template_marketingCopy1"),
      icon: reactJsxRuntimeCoreReexport.jsx(rtlArrowLeftIcon.RtlArrowLeftIcon, {}),
      label: e("doc_editor_AIWrite_genre_list_marketingCopy")
    }];
  };
  let lp = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: o,
      style: r,
      sendStreamExt: i,
      onStreamFirstReceive: n,
      onStreamFirstError: a,
      ...l
    } = e;
    let {
      moreActions: c,
      onClose: s,
      docId: d,
      extraEventParams: _
    } = l;
    let u = i18nTranslationUtils.useTranslationWithFallback();
    let m = reactCoreLibraryReexport.useRef(null);
    let p = reactCoreLibraryReexport.useRef(null);
    let h = la();
    let g = l_();
    let f = lm();
    let x = reactCoreLibraryReexport.useMemo(() => new observableSubjectClass.Subject(), []);
    let v = reactCoreLibraryReexport.useRef(false);
    let y = reactCoreLibraryReexport.useRef(false);
    let b = userInfoStatusSelectors.selectUserInfoSuccess_1();
    let w = async () => {
      let e = await chatIocServiceLoaderHook.loadServiceAsync("chatInputService");
      let t = await (e == null ? undefined : e.getSkillService(chatAppEnums.SkillType.ImageGeneration));
      if (t != null) {
        t.initImageList();
      }
    };
    reactCoreLibraryReexport.useEffect(() => {
      w();
      if (!m.current) {
        return;
      }
      m.current.on("error", R);
      let {
        behavior: e
      } = m.current;
      e.on("copy", () => S("copy"));
      e.on("expandMore", () => S("more"));
      e.on("download", e => {
        let {
          type: t
        } = e;
        if (t === "pdf") {
          S("download_to_pdf");
        } else if (t === "docx") {
          S("download_to_doc");
        }
      });
      e.on("rewriteInsert", () => S("insert"));
      e.on("rewriteReplace", () => S("replace"));
      e.on("rewriteRegenerate", () => S("regen"));
      e.on("docToolsClick", e => {
        let {
          type: t
        } = e;
        if (t === aiEditorConstants.blockTypes.Table) {
          S("sheet");
        } else if (t === aiEditorConstants.blockTypes.Link) {
          S("link");
        } else if (t === aiEditorConstants.blockTypes.Blockquote) {
          S("phrase_quote");
        } else if (t === aiEditorConstants.blockTypes.CodeBlock) {
          S("coding_base");
        } else if (t === aiEditorConstants.blockTypes.Image) {
          S("image");
        } else {
          S("word_alt");
        }
      });
    }, []);
    let k = () => {
      var e;
      var t;
      let i = (((e = m.current) === null || e === undefined ? undefined : e.getSelectionHeadings()) ?? []).map(e => e.value).join("，");
      return {
        title: ((t = m.current) === null || t === undefined ? undefined : t.getTitle()) ?? "",
        query: i
      };
    };
    let j = () => {
      var e;
      let {
        currentParagraph: o,
        preParagraph: r,
        nextParagraph: i
      } = ((e = m.current) === null || e === undefined ? undefined : e.getParagraphContext()) ?? {};
      return o || r || i;
    };
    let C = e => {
      let {
        ext: t,
        ...o
      } = e;
      let {
        action: r
      } = o;
      return samanthaPagesApiService.fetchDocument({
        ...o,
        ext: {
          ...(isFunctionUtil_1.isFunction(i) ? i({
            action: r,
            ext: t
          }) : i),
          ...t
        },
        onFirstReceive: () => {
          if (n != null) {
            n({
              action: r,
              scene: o.track?.scene
            });
          }
        },
        onFirstError: () => {
          if (a != null) {
            a({
              action: r,
              scene: o.track?.scene
            });
          }
        }
      });
    };
    let N = () => isFunctionUtil_1.isFunction(_) ? _() : _;
    let S = skillPinModalCallback.useSkillPinCallback(e => {
      teaAnalyticsEventTracker.trackEvent("writing_outline_button_click", {
        button_name: e,
        ...N()
      });
    });
    let E = async () => {
      if (!p.current) {
        return false;
      }
      S("upload_pic");
      p.current.value = "";
      p.current.click();
      y.current = true;
      let e = await observableFirstValue.firstValueFrom(x);
      if (isEmptyUtil.isEmpty(e)) {
        return null;
      }
      if (e.length !== 1) {
        return false;
      }
      let t = e[0];
      return await samanthaPagesApiService.uploadImage({
        blob: t
      });
    };
    useEventListenerHook.useEventListener("focus", async () => {
      await promiseAsyncUtilities.createDelayedPromise(500);
      if (!v.current && y.current) {
        x.next([]);
      }
      v.current = false;
      y.current = false;
    });
    let Z = async e => {
      var t;
      let o = j();
      let r = (t = m.current) === null || t === undefined ? undefined : t.getTitle();
      try {
        return await samanthaPagesApiService.generateImage({
          text: e || o || r || "",
          scene: aiPptImageConstants.imageTypes.WriteT2i
        });
      } catch (e) {
        samanthaToastFactory.toastInstance.error({
          content: u("doc_editor_ai_image_generation_failed_toast")
        });
        return null;
      }
    };
    let R = skillPinModalCallback.useSkillPinCallback(e => {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: `doc_editor_${e.id}`,
        error: e.rawError,
        meta: e.extra
      });
    });
    let $ = async e => {
      let {
        key: t
      } = e ?? {};
      return await samanthaPagesApiService.getPlaceholderImageUrl({
        key: t,
        pagesId: d
      });
    };
    let T = async () => {
      let {
        images: e
      } = await samanthaPagesApiService.searchDocumentImages({
        ...k()
      });
      return e[randomNumberUtil.generateRandom(0, e.length - 1)];
    };
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [d ? reactJsxRuntimeCoreReexport.jsx(a0, {
        ref: e => {
          m.current = e;
          if (isFunctionUtil_1.isFunction(t)) {
            t(e);
          } else if (t) {
            t.current = e;
          }
        },
        className: A(o, disableSelectBarConst.disableSelectBar),
        style: r,
        onCopy: e => {
          let {
            content: o,
            start: r,
            end: i,
            zoneId: n,
            event: a
          } = e;
          let l = o.get(n);
          if (l && (a.currentTarget === document || objectPathGetDefault.getObjectPathDefault(a.currentTarget, "dataset.testid") === "flow_doc_editor")) {
            teaAnalyticsEventTracker.trackEvent("right_click_copy", {
              start_index: r,
              end_index: i,
              is_image: +(l.ops.length === 1 && l.ops[0].attributes?.image === "true"),
              content_type: "doc",
              click_from: "writing_station",
              ...N()
            });
          }
        },
        onFetchDoc: samanthaPagesApiService.fetchDocumentWithStatus,
        onUpdateDoc: samanthaPagesApiService.updateDocument,
        virtualScroll: false,
        enableGenerateParagraph: false,
        onStopDocGenerate: () => {
          if (d) {
            samanthaPagesApiService.stopDocumentGeneration({
              docId: d
            });
          }
        },
        rewriteActions: g,
        newContentActions: f,
        onProcessImageBeforeLoad: e => resourceUrlSigner.getSignedUrl(e),
        onGenerateStream: e => {
          if (!b) {
            chatIocServiceLoaderHook.loadServiceAsync("chatNavigateService").then(e => e == null ? undefined : e.navigateToLoginPage("writing_doc"));
            chatEventEmitter.chatEmitter.emit("chat.guest.login", {
              source: "writing_doc"
            });
            return;
          }
          if (e.type === aiEditorConstants.aiActions.RewriteByKey) {
            let {
              selectedText: t,
              key: o,
              paragraphText: r
            } = e;
            let i = {
              paragraph_content: r ?? "",
              selected_content: t
            };
            return C({
              memoryType: 2,
              action: o,
              continue_writing_input: o === inlineDocxActionTypes.getDocxActionTypes.ContinueWriting ? i : undefined,
              expansion_input: o === inlineDocxActionTypes.getDocxActionTypes.Expansion ? i : undefined,
              abbreviation_input: o === inlineDocxActionTypes.getDocxActionTypes.Abbreviation ? i : undefined,
              polish_input: o === inlineDocxActionTypes.getDocxActionTypes.Polish ? i : undefined,
              summarize_input: o === inlineDocxActionTypes.getDocxActionTypes.Summarize ? i : undefined,
              inline_tone_input: collectionIncludesUtil.includes([inlineDocxActionTypes.getDocxActionTypes.InlineToneProfessional, inlineDocxActionTypes.getDocxActionTypes.InlineToneCasual, inlineDocxActionTypes.getDocxActionTypes.InlineToneReadable, inlineDocxActionTypes.getDocxActionTypes.InlineToneSubtle, inlineDocxActionTypes.getDocxActionTypes.InlineToneAcademic, inlineDocxActionTypes.getDocxActionTypes.InlineToneElegant, inlineDocxActionTypes.getDocxActionTypes.InlineToneTrendy], o) ? i : undefined,
              track: {
                scene: "canvas_selection_bar"
              }
            });
          }
          if (e.type === aiEditorConstants.aiActions.RewriteByText) {
            let {
              text: t,
              selectedText: o,
              prevGeneratedText: r,
              paragraphText: i
            } = e;
            return C({
              memoryType: 2,
              action: inlineDocxActionTypes.getDocxActionTypes.ChatInDoc,
              text: t,
              chat_in_doc_input: {
                paragraph_content: i ?? "",
                last_generated_content: r ?? "",
                selected_content: o
              },
              track: {
                scene: "canvas_selection_bar"
              }
            });
          }
          if (e.type === aiEditorConstants.aiActions.ParagraphSummary) {
            let {
              selectedText: t,
              title: o
            } = e;
            return C({
              action: inlineDocxActionTypes.getDocxActionTypes.ExtractParagraphDescription,
              extract_paragraph_description_input: {
                paragraph_content: t,
                paragraph_title: o
              }
            });
          }
          if (e.type === aiEditorConstants.aiActions.Paragraph) {
            let {
              currentText: t,
              title: o,
              content: r
            } = e;
            return C({
              action: inlineDocxActionTypes.getDocxActionTypes.RegenerateParagraphDoc,
              re_gen_paragraph_doc_input: {
                paragraph_content: t ?? "",
                paragraph_title: o,
                paragraph_description: r
              },
              track: {
                scene: "canvas_insert_paragraph"
              }
            });
          }
          if (e.type === aiEditorConstants.aiActions.InlineHelpMeWrite) {
            let {
              text: t,
              genre_label: o,
              last_generated_content: r
            } = e;
            if (r) {
              return C({
                action: inlineDocxActionTypes.getDocxActionTypes.ChatInDoc,
                text: t,
                chat_in_doc_input: {
                  paragraph_content: "",
                  last_generated_content: "",
                  selected_content: r
                }
              });
            } else {
              return C({
                action: inlineDocxActionTypes.getDocxActionTypes.InlineHelpMeWrite,
                text: t,
                help_me_write_input: {
                  genre_label: o ?? "",
                  last_generated_content: ""
                }
              });
            }
          } else if (e.type === aiEditorConstants.aiActions.AutoContinueWriting) {
            let {
              cursor_position: t,
              content_before_cursor: o,
              content_after_cursor: r,
              content_of_last_continue_writing: i
            } = e;
            return C({
              action: inlineDocxActionTypes.getDocxActionTypes.AutoContinueWriting,
              auto_continue_writing_input: {
                cursor_position: t,
                content_before_cursor: o,
                content_after_cursor: r,
                content_of_last_continue_writing: i
              },
              track: {
                scene: i ? "canvas_ai_generate_retry" : "canvas_ai_generate_accept"
              }
            });
          }
        },
        onAutoAddImage: T,
        onLoadImageById: samanthaPagesApiService.getImageBannerUrl,
        onLoadImageByKey: $,
        onFetchImageList: e => {
          let {
            query: t,
            title: o
          } = k();
          let r = j();
          return samanthaPagesApiService.searchDocumentImages({
            query: e || r || t,
            title: o,
            needRewrite: !e
          });
        },
        onUploadImage: E,
        onGenerateImage: Z,
        i18nConfig: h,
        ...l
      }, d) : reactJsxRuntimeCoreReexport.jsx(a5, {
        loading: true,
        moreActions: c,
        onClose: s,
        i18nConfig: h
      }), reactJsxRuntimeCoreReexport.jsx("input", {
        className: "hidden",
        multiple: false,
        type: "file",
        ref: p,
        accept: "image/*",
        onChange: e => {
          let o = [...(e.target.files ?? [])];
          v.current = !!e.target.files;
          x.next(o);
        }
      })]
    });
  });
  require.d(exports, {
    FlowDocAiEditor: function () {
      return lp;
    }
  });
}