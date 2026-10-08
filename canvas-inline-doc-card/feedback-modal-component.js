// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'hF' to 'postFeedbackMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-feedback.2262a137.js
         * chunkId: 31747
         * moduleId: 640688
         */
module.exports = function (module, exports, require) {
  var n;
  var i;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var observableSubjectClass = require("observable-subject-class") /*id: 292580*/;
  var observableFirstValue = require("observable-first-value") /*id: 244525*/;
  var emptySequenceErrorClass = require("empty-sequence-error-class") /*id: 685595*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var u = classnamesUtils;
  var imageUploaderFactory = require("image-uploader-factory") /*id: 429851*/;
  var aiSpaceAttachmentConstants = require("ai-space-attachment-constants") /*id: 241695*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var useOnUnmountHook = require("use-on-unmount-hook") /*id: 297204*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var mediaFileUtils = require("media-file-utils") /*id: 759863*/;
  var tabsComponentAdapter = require("tabs-component-adapter") /*id: 826897*/;
  var tabPaneComponent = require("tab-pane-component") /*id: 772025*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var modalConfirmDialogManager = require("modal-confirm-dialog-manager") /*id: 948195*/;
  var smartTextareaWithFormFieldWrapper = require("smart-textarea-with-form-field-wrapper") /*id: 126704*/;
  var rtlCloseIcon = require("rtl-close-icon") /*id: 851909*/;
  let x = {
    image: ["jpeg", "jpg", "png", "gif", "bmp"],
    video: ["mp4", "quicktime", "x-m4v", "x-flv", "x-matroska", "webm", "3gpp"]
  };
  let S = e => e == null ? undefined : e.map(e => {
    var t;
    return ((t = x[e]) === null || t === undefined ? undefined : t.map(t => `${e}/${t.toLowerCase()}`)) ?? [`${e}/*`];
  }).flat();
  (n = {}).SUBMIT = "submit";
  n.HISTORY = "history";
  let k = n;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let E = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 22,
    height: 21,
    fill: "none",
    viewBox: "0 0 22 21",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#FC8800",
      fillRule: "evenodd",
      d: "M9.227 1.399.526 18.075C-.17 19.406.797 21 2.299 21H19.7c1.502 0 2.468-1.594 1.774-2.925L12.773 1.399c-.748-1.434-2.799-1.434-3.546 0M12.14 13.01a1.153 1.153 0 0 1-2.283 0l-.575-4.03a1.735 1.735 0 1 1 3.434 0zm.359 4.49a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0",
      clipRule: "evenodd"
    })
  });
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var userAgentParser_1_1 = require("user-agent-parser_1_1") /*id: 956882*/;
  var R = userAgentParser_1_1;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var semiTextareaComponent = require("semi-textarea-component") /*id: 252810*/;
  var buttonComponent = require("button-component") /*id: 899242*/;
  var samanthaButtonComponent = require("samantha-button-component") /*id: 307533*/;
  var rtlImageIconComponent = require("rtl-image-icon-component") /*id: 267266*/;
  let D = (e, t) => {
    let r = e.mediaData.mediaType;
    if (!t.includes(r)) {
      throw Error(`Not allowed media type: ${r}, only allowed ${t.join(", ")} now.`);
    }
  };
  (i = {})[i.UPLOADING = 0] = "UPLOADING";
  i[i.FAILED = 1] = "FAILED";
  i[i.FINISHED = 2] = "FINISHED";
  let W = i;
  let L = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 20,
    height: 20,
    fill: "none",
    viewBox: "0 0 20 20",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#fff",
      d: "M3.525 16q-1.21 0-1.87-.613Q1 14.773 1 13.599V6.474q0-1.176.676-1.825.676-.65 1.85-.649h7.524q1.209 0 1.842.649.633.65.633 1.817v7.06q0 1.176-.662 1.825-.654.65-1.863.649zm11.1-3.57V7.62l2.368-2.04q.244-.21.489-.332.252-.13.496-.13.454 0 .734.295Q19 5.71 19 6.2v7.658q0 .491-.288.786-.28.296-.734.296-.244 0-.496-.13a2.7 2.7 0 0 1-.49-.339z"
    })
  });
  let z = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 30,
    height: 30,
    fill: "none",
    viewBox: "0 0 30 30",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#fff",
      d: "M5.146 16.287q0-2.042.762-3.83a9.872 9.872 0 0 1 5.23-5.241 9.6 9.6 0 0 1 4.668-.728q.408.045.783.121l-2.67-2.637a1.2 1.2 0 0 1-.221-.331 1 1 0 0 1-.077-.397q0-.465.298-.773.31-.32.761-.32.464 0 .761.31l4.524 4.612q.343.33.343.794 0 .22-.089.42a1.1 1.1 0 0 1-.254.375l-4.524 4.568q-.286.298-.76.298-.442 0-.751-.309a1.03 1.03 0 0 1-.31-.761q0-.21.078-.387.088-.187.232-.342l3.001-2.968a8 8 0 0 0-.916-.132 9 9 0 0 0-1.037-.056 7.5 7.5 0 0 0-3.001.596 7.7 7.7 0 0 0-2.428 1.656 7.7 7.7 0 0 0-1.644 2.45 7.7 7.7 0 0 0-.585 3.012 7.6 7.6 0 0 0 .596 3A8 8 0 0 0 9.56 21.75a7.8 7.8 0 0 0 2.45 1.655 7.7 7.7 0 0 0 3.001.585q1.59 0 2.98-.585a7.6 7.6 0 0 0 2.449-1.655 7.9 7.9 0 0 0 1.655-2.461 7.6 7.6 0 0 0 .596-3.001q0-.497.287-.806.298-.309.772-.309.497 0 .795.309.309.31.309.806a9.8 9.8 0 0 1-.762 3.85 9.7 9.7 0 0 1-2.107 3.145 9.7 9.7 0 0 1-3.145 2.108 9.7 9.7 0 0 1-3.829.761 9.8 9.8 0 0 1-3.85-.761 9.6 9.6 0 0 1-3.135-2.108 10.1 10.1 0 0 1-2.118-3.144 9.8 9.8 0 0 1-.762-3.852"
    })
  });
  let B = e => reactJsxRuntimeCoreReexport.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 18,
    height: 18,
    fill: "none",
    viewBox: "0 0 18 18",
    ...e,
    children: [reactJsxRuntimeCoreReexport.jsx("rect", {
      width: 18,
      height: 18,
      fill: "#000",
      fillOpacity: 0.6,
      rx: 9
    }), reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#fff",
      d: "M5.797 12.199a.6.6 0 0 1-.16-.278.66.66 0 0 1 .005-.318.6.6 0 0 1 .15-.27L8.123 9l-2.33-2.33a.6.6 0 0 1-.15-.269.7.7 0 0 1 0-.318.6.6 0 0 1 .155-.277.55.55 0 0 1 .277-.16.7.7 0 0 1 .323 0 .56.56 0 0 1 .273.151L9 8.122l2.326-2.326a.56.56 0 0 1 .274-.15.622.622 0 0 1 .596.16.6.6 0 0 1 .159.276.63.63 0 0 1-.152.592L9.878 8.999l2.326 2.33a.56.56 0 0 1 .15.274.66.66 0 0 1-.004.318.56.56 0 0 1-.155.277.57.57 0 0 1-.277.155.66.66 0 0 1-.318.005.54.54 0 0 1-.274-.155L9 9.877l-2.33 2.33a.57.57 0 0 1-.273.146.63.63 0 0 1-.319 0 .6.6 0 0 1-.281-.155"
    })]
  });
  var semiToastNotification = require("semi-toast-notification") /*id: 520872*/;
  let U = () => {
    let e = reactCoreLibraryReexport.useRef(0);
    return () => e.current++;
  };
  let H = e => reactCoreLibraryReexport.useMemo(() => semiToastNotification.ToastFactory.create({
    getPopupContainer: () => e.current
  }), []);
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  let J = () => {
    let [e, t] = reactCoreLibraryReexport.useState(true);
    return {
      _logPath: {},
      submitLoading: false,
      setSubmitLoading: emptyExportFunction.emptyFunction,
      logChecker: e,
      setLogChecker: t,
      handleUploadLog: e => "api request",
      preHandleSubmitApi: () => ({}),
      getTimeoutPromise: () => Promise.resolve("timeout")
    };
  };
  var K = e => {
    let {
      children: t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: t ?? null
    });
  };
  var reactTransitionComponent = require("react-transition-component") /*id: 888866*/;
  var useIntervalCallback = require("use-interval-callback") /*id: 601556*/;
  var reactUseUpdateEffect = require("react-use-update-effect") /*id: 141220*/;
  var semiProgressComponent = require("semi-progress-component") /*id: 821198*/;
  var ee = {
    container: "container-yOqpNS",
    animated: "animated-_d1a1i",
    forward: "forward-TY0VkA",
    entering: "entering-GUysfQ",
    entered: "entered-kq9zbg",
    exiting: "exiting-KZic2b",
    exited: "exited-PsxGE7",
    unmounted: "unmounted-Q_O1yE"
  };
  let et = e => {
    let {
      isEnabled: t = true,
      isFinished: r,
      className: n,
      style: i,
      children: o
    } = e;
    let [a, l] = reactCoreLibraryReexport.useState(0);
    useIntervalCallback.useIntervalCallback(() => {
      l(Math.min(a + 20, 80));
    }, r && t ? undefined : 1000, {
      immediate: true
    });
    reactUseUpdateEffect.useUpdateEffect(() => {
      if (r) {
        l(100);
      } else {
        l(0);
      }
    }, [r]);
    return reactJsxRuntimeCoreReexport.jsx(reactTransitionComponent.Transition, {
      in: !r && t,
      mountOnEnter: true,
      timeout: 300,
      children: e => reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [o == null ? undefined : o(u(ee.animated, ee.reverse, ee[e])), e !== "exited" && e !== "unmounted" && reactJsxRuntimeCoreReexport.jsx("div", {
          className: u(n, ee.container, ee.animated, ee.forward, ee[e]),
          style: i,
          children: reactJsxRuntimeCoreReexport.jsx(semiProgressComponent.Progress, {
            percent: a,
            type: "circle",
            size: "small",
            stroke: "white",
            width: 20,
            strokeWidth: 2.5,
            strokeLinecap: "square",
            orbitStroke: "rgba(255,255,255,0.6)"
          })
        })]
      })
    });
  };
  var er = {
    container: "container-kvfYQX",
    entered: "entered-J8BEIY",
    entering: "entering-KgAMT2",
    exiting: "exiting-jfjktb",
    exited: "exited-NOV_dM",
    unmounted: "unmounted-NF2kkW",
    loading: "loading-M6LwvI",
    icon: "icon-_242Yu",
    rotate: "rotate-WfwsMX",
    rotation: "rotation-EuDMmY"
  };
  let en = e => {
    let {
      loading: t,
      title: r,
      toast: n
    } = e;
    let i = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(() => {
      if (t) {
        i.current = n.success({
          icon: reactJsxRuntimeCoreReexport.jsx("div", {
            className: er.loading,
            children: reactJsxRuntimeCoreReexport.jsx("img", {
              className: u(er.icon, er.rotate),
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$i$nB-$m10WmJ$WnFZW*s1ZW1OdFR-WlpNamwwWTBjNWRWcFhO$EJqZ$RsdFdsZFdhMWx0%m1wa*$%RjZaRmRLZEd*W$$-%mpSMFox$2xkM2Rsa3lPWFJq%npsM$ds-zFNR041T1cxa1-zaHp%RmhD-%Zve$Z-%mlSemxv$2tkc2RWcD$PWEJp-lZKc1p$TTFNR016-%doamJX%XhZM2M5%FE9PQ"
              })
            })
          }),
          content: r,
          duration: 100000000,
          showClose: false
        });
      } else if (i.current) {
        n.close(i.current);
        i.current = undefined;
      }
    }, [t]);
    return reactJsxRuntimeCoreReexport.jsx(reactTransitionComponent.Transition, {
      in: t,
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: 150,
      children: e => reactJsxRuntimeCoreReexport.jsx("div", {
        className: u(er.container, er[e])
      })
    });
  };
  var ei = {
    container: "container-LwM3r9",
    content: "content-Ydsu8O",
    textarea: "textarea-ruJG5c",
    white: "white-j4Npmi",
    grey: "grey-g1VtNz",
    input: "input-h1Ac6h",
    count: "count-ckbaor",
    red: "red-zLxYm9",
    "file-list": "file-list-I8ou3c",
    fileList: "file-list-I8ou3c",
    item: "item-sfCJID",
    background: "background-j0PWfa",
    close: "close-jZI9Mc",
    icon: "icon-evtwC3",
    uploading: "uploading-W20qX8",
    failed: "failed-DTAJ6E",
    "video-overlay": "video-overlay-fb3ryR",
    videoOverlay: "video-overlay-fb3ryR",
    adder: "adder-usmXoP",
    "add-icon": "add-icon-CfUpRi",
    addIcon: "add-icon-CfUpRi",
    "submit-button": "submit-button-FBcvEp",
    submitButton: "submit-button-FBcvEp",
    tapable: "tapable-FvJKul",
    hoverable: "hoverable-AQMoJO",
    clientSubmitButton: "clientSubmitButton-m3Ormn",
    "bottom-bar": "bottom-bar-MS08ML",
    bottomBar: "bottom-bar-MS08ML"
  };
  let es = e => e.mediaData.mediaType === "image" && e.size > 5242880 || e.mediaData.mediaType === "video" && e.size > 52428800;
  let eo = e => {
    let {
      className: r,
      contentClassName: n,
      textAreaClassName: i,
      fileUploadClassName: o,
      style: a,
      theme: l = "white",
      onChooseMedia: c,
      onUploadMedia: d,
      onSubmit: h,
      onChange: m,
      onChangeLogChecker: f,
      submitButtonClassName: g,
      submitButtonDisabled: b = false,
      textAreaPlaceholderTitle: y,
      submitButtonTitle: A,
      logRemindText: w,
      showFullPageSubmitLoading: _,
      notAllAssetsFinishedTitle: x,
      oversizeToastTitle: S,
      allowedMediaType: k,
      renderTextArea: E,
      renderContentChild: N,
      mobile: V = false
    } = e;
    let [X, q] = reactCoreLibraryReexport.useState("");
    let {
      submitLoading: G,
      logChecker: Q,
      setLogChecker: Y,
      handleUploadLog: ee,
      preHandleSubmitApi: er,
      getTimeoutPromise: eo
    } = J();
    let ea = i18nTranslationUtils.useTranslationWithFallback();
    let el = reactCoreLibraryReexport.useRef(null);
    let ec = H(el);
    let [eu, ed] = reactCoreLibraryReexport.useState([]);
    let [eh, ep] = reactCoreLibraryReexport.useState(false);
    let em = U();
    reactCoreLibraryReexport.useEffect(() => {
      if (m != null) {
        m({
          content: X,
          choosedMediaList: eu
        });
      }
    }, [X, eu]);
    let ef = async e => {
      let t = mediaFileUtils.base64ToBlob(e.base64PreviewImage);
      if (t) {
        return await d({
          type: "file",
          mimeType: "image/png",
          mediaType: "image",
          value: t
        }, ec);
      } else {
        return null;
      }
    };
    let ev = async () => {
      let e = false;
      if (!X) {
        return;
      }
      if (eu.some(e => e.status !== W.FINISHED)) {
        ec.error(x);
        return;
      }
      let t = eu.filter(e => e.mediaData.mediaType === "image");
      let r = eu.find(e => e.mediaData.mediaType === "video");
      let n = t.map(e => e.uploaded).filter(e => !!e);
      ep(true);
      let i = r && (await ef(r));
      let s = R.getParser(navigator.userAgent);
      let o = async () => {
        var o;
        let c = er();
        await h({
          content: X,
          image_list: n,
          video_cover_height: i == null ? undefined : i.image_height,
          video_cover_width: i == null ? undefined : i.image_width,
          video_cover_url: (i == null ? undefined : i.image_uri) ?? "",
          video_play_url: (r == null ? undefined : r.uploaded?.image_uri) ?? "",
          extra_params: JSON.stringify({
            is_private_video: 1,
            is_private_image: 1,
            path: location.pathname + location.search,
            version: String(window.gfdatav1?.ver || "unknown"),
            ug_url: storageWrapperWithFallback.LocalStorageWrapper.getItem("flow_web_landing_page_url"),
            is_samantha_client: "0",
            os: s.getOSName(),
            browser: s.getBrowserName(),
            browser_version: s.getBrowserVersion(),
            tea_uid: (o = window.Tea) === null || o === undefined ? undefined : o.getConfig("user_unique_id"),
            ...c
          }),
          multi_image: "1"
        });
      };
      try {
        await Promise.race([ee(e), eo()]);
        if (!e) {
          e = true;
          await o();
        }
      } finally {
        ep(false);
      }
    };
    let eg = e => {
      ed(immerCoreImplementation.produce(t => {
        let r = t.findIndex(t => t.id === e);
        if (r !== -1) {
          t.splice(r, 1);
        }
      }));
    };
    let eb = () => {
      let e = ["image"];
      if (eu.filter(e => e.mediaData.mediaType === "video").length < 1) {
        e.push("video");
      }
      if (k) {
        return e.filter(e => k == null ? undefined : k.includes(e));
      } else {
        return e;
      }
    };
    let {
      run: ey
    } = useDebouncedCallbackHook_1.useDebouncedCallback(async e => {
      if (eu.length >= 4) {
        return;
      }
      let t = e ?? em();
      let r = eb();
      let n = !isUndefinedCheck.isUndefined(e) && eu.find(t => t.id === e);
      if (n) {
        let {
          status: e,
          mediaData: {
            mediaType: t
          }
        } = n;
        if (e === W.FAILED) {
          if (!r.includes(t)) {
            r.push(t);
          }
        } else {
          throw Error(`Not allow to reupload because it's not failed status: ${e}`, {
            cause: n
          });
        }
      }
      let i = n || (await c({
        allowedMediaType: r
      }, ec));
      if (i) {
        D(i, r);
        if (es(i)) {
          ec.warning(S);
          return;
        }
        ed(immerCoreImplementation.produce(r => {
          let n = r.find(t => t.id === e);
          if (n) {
            n.status = W.UPLOADING;
          } else {
            r.push({
              ...i,
              id: t,
              status: W.UPLOADING
            });
          }
        }));
        try {
          let e = await d(i.mediaData, ec);
          ed(immerCoreImplementation.produce(r => {
            let n = r.find(e => e.id === t);
            if (n) {
              n.status = W.FINISHED;
              n.uploaded = e;
            }
          }));
        } catch (e) {
          ed(immerCoreImplementation.produce(e => {
            let r = e.find(e => e.id === t);
            if (r) {
              r.status = W.FAILED;
            }
          }));
        }
      }
    }, {
      leading: true,
      trailing: false,
      wait: 500
    });
    let eA = {
      placeholder: y,
      value: X,
      onChange: e => {
        q(e.slice(0, 300));
      },
      className: ei.input,
      rows: 10,
      autosize: true,
      disabled: eh
    };
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-testid": "feedback_submit_panel",
      className: u(ei.container, r),
      style: a,
      ref: el,
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: u(ei.content, n),
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: u(ei.textarea, ei[l], i),
          children: [(E == null ? undefined : E(eA)) ?? reactJsxRuntimeCoreReexport.jsx(semiTextareaComponent.TextArea, {
            ...eA
          }), reactJsxRuntimeCoreReexport.jsxs("div", {
            className: ei["bottom-bar"],
            children: [(k == null ? undefined : k.length) ? reactJsxRuntimeCoreReexport.jsxs("div", {
              children: [reactJsxRuntimeCoreReexport.jsx("div", {
                className: ei["file-list"],
                children: eu.map(e => reactJsxRuntimeCoreReexport.jsxs("div", {
                  "data-testid": "feedback_image",
                  className: u(ei.item, o),
                  children: [reactJsxRuntimeCoreReexport.jsx(et, {
                    className: ei.uploading,
                    isFinished: e.status === W.FINISHED,
                    isEnabled: e.status !== W.FAILED,
                    children: t => reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
                      children: [reactJsxRuntimeCoreReexport.jsx("img", {
                        className: u(ei.background, t),
                        src: xssContentSanitizer.sanitizeUrl(e.base64PreviewImage, null, {
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
                          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$i$nB-$m10WmJ$WnFZW*s1ZW1OdFR-WlpNamwwWTBjNWRWcFhO$EJqZ$RsdFdsZFdhMWx0%m1wa*$%RjZaRmRLZEd*W$$-%mpSMFox$2xkM2RtRlhO$3Rh$0dkM$pFaE9ORmxZ%201a1dFMDk"
                        })
                      }), e.status === W.FAILED && reactJsxRuntimeCoreReexport.jsx("div", {
                        className: u(ei.failed, ei.tapable, t, {
                          [ei.hoverable]: !V
                        }),
                        onClick: () => {
                          ey(e.id);
                        },
                        children: reactJsxRuntimeCoreReexport.jsx(z, {
                          className: ei.icon
                        })
                      }), e.status === W.FINISHED && e.mediaData.mediaType === "video" && reactJsxRuntimeCoreReexport.jsx("div", {
                        className: u(ei["video-overlay"]),
                        children: reactJsxRuntimeCoreReexport.jsx(L, {
                          className: ei.icon
                        })
                      })]
                    })
                  }), reactJsxRuntimeCoreReexport.jsx("div", {
                    className: u(ei.close, ei.tapable, {
                      [ei.hoverable]: !V
                    }),
                    onClick: () => {
                      eg(e.id);
                    },
                    children: reactJsxRuntimeCoreReexport.jsx(B, {
                      className: ei.icon
                    })
                  })]
                }, e.id))
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: u(ei[l]),
                onClick: () => ey(),
                children: reactJsxRuntimeCoreReexport.jsxs(samanthaButtonComponent.SamanthaButton, {
                  type: "tertiary",
                  disabled: eu.length >= 4 || eh,
                  icon: reactJsxRuntimeCoreReexport.jsx(rtlImageIconComponent.ImageRtlIcon, {}),
                  children: [ea("skill_video_input_upload_image"), " (", eu.length, "/", 4, ")"]
                })
              })]
            }) : null, reactJsxRuntimeCoreReexport.jsxs("div", {
              "data-testid": "feedback_submit_panel_input_count",
              className: u(ei.count, {
                [ei.red]: X.length >= 300
              }),
              children: [X.length, "/", 300]
            })]
          })]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          children: N
        })]
      }), reactJsxRuntimeCoreReexport.jsx(K, {
        logChecker: Q,
        logRemindText: w,
        setLogChecker: e => {
          Y(e != null && e);
          if (f != null) {
            f(e != null && e);
          }
        },
        children: reactJsxRuntimeCoreReexport.jsx(() => reactJsxRuntimeCoreReexport.jsx(buttonComponent.Button, {
          "data-testid": "feedback_submit_panel_submit",
          className: u(ei["submit-button"], g, ""),
          width: "full",
          loading: G,
          onClick: async () => {
            if (_) {
              ev();
            } else {
              await ev();
            }
          },
          disabled: !X || b,
          children: A
        }), {})
      }), _ && reactJsxRuntimeCoreReexport.jsx(en, {
        loading: eh,
        title: _.submittingToastTitle,
        toast: ec
      })]
    });
  };
  var useRequestHook_1 = require("use-request-hook_1") /*id: 458670*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var avatarComponent = require("avatar-component") /*id: 16165*/;
  var semiImageComponent = require("semi-image-component") /*id: 87078*/;
  let ed = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 20,
    height: 20,
    fill: "none",
    viewBox: "0 0 20 20",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      fill: "#fff",
      d: "M3.525 16q-1.21 0-1.87-.613Q1 14.773 1 13.599V6.474q0-1.176.676-1.825.676-.65 1.85-.649h7.524q1.209 0 1.842.649.633.65.633 1.817v7.06q0 1.176-.662 1.825-.654.65-1.863.649zm11.1-3.57V7.62l2.368-2.04q.244-.21.489-.332.252-.13.496-.13.454 0 .734.295Q19 5.71 19 6.2v7.658q0 .491-.288.786-.28.296-.734.296-.244 0-.496-.13a2.7 2.7 0 0 1-.49-.339z"
    })
  });
  var eh = require.p + "static/image/doubao_logo.5604ea40.jpeg";
  var ep = {
    itemContent: "itemContent-TIkE6W",
    avatar: "avatar-NyH8oq",
    contentInfo: "contentInfo-h5lBu6",
    contentHeader: "contentHeader-Oyrfld",
    time: "time-yob2wZ",
    content: "content-6s60pp",
    media: "media-hBO5St",
    item: "item-lfWakZ",
    image: "image-twQEMZ",
    "video-overlay": "video-overlay-YuCKOM",
    icon: "icon-SzgvGX"
  };
  let em = e => Number(e) < 10 ? `0${e}` : e;
  let ef = e => {
    if (!e) {
      return;
    }
    let t = new Date(Number(e) * 1000);
    let r = `${t.getFullYear()}/`;
    let n = `${t.getMonth() + 1 < 10 ? `0${t.getMonth() + 1}` : t.getMonth() + 1}/`;
    let i = `${t.getDate()} `;
    let s = `${t.getHours()}`;
    let o = `${t.getMinutes()}`;
    let a = `${t.getSeconds()}`;
    return `${r + n + i + em(s)}:${em(o)}:${em(a)}`;
  };
  let ev = e => {
    let {
      item: t,
      userAvatar: r,
      className: n,
      style: i,
      selfUserTitle: s,
      botUserTitle: o
    } = e;
    let {
      content: a,
      pub_date: l,
      type: c,
      image_list: d,
      video_cover_url: h
    } = t;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      "data-testid": "feedback_history_item",
      className: u(ep.itemContent, n),
      style: i,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: ep.avatar,
        children: reactJsxRuntimeCoreReexport.jsx(avatarComponent.AvatarComponent, {
          src: xssContentSanitizer.sanitizeUrl(t.type === 0 ? r : eh, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$i$nB-$m10WmJ$WnFZW*s1ZW1OdFR-WlpNamwwWTBjNWRWcFhO$EJqZ$RsdFdsZFdhMWx0%m1wa*$%RnZZ$mhPT%dJelNq$k1XR%pvWW0x$2Mwd3l%blpp$0$KMlltM$dk$1JJ$Fha-WJWWnNXa2RL-%ZreWMz%mhXRkpzWWxNNWNHSnR$bXhs%Xp$d1l6Tm9hR050WkR*amR6MDk"
          }),
          size: "default"
        })
      }), reactJsxRuntimeCoreReexport.jsxs("div", {
        className: ep.contentInfo,
        children: [reactJsxRuntimeCoreReexport.jsxs("div", {
          className: ep.contentHeader,
          children: [reactJsxRuntimeCoreReexport.jsx("strong", {
            children: c === 0 ? s : o
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: ep.time,
            children: ef(l)
          })]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: ep.content,
          children: a
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: ep.media,
          children: [d == null ? undefined : d.map((e, t) => {
            let {
              image_url: r
            } = e;
            return reactJsxRuntimeCoreReexport.jsx("div", {
              className: ep.item,
              children: reactJsxRuntimeCoreReexport.jsx(semiImageComponent.SemiImage, {
                className: ep.image,
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
                  filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$i$nB-$m10WmJ$WnFZW*s1ZW1OdFR-WlpNamwwWTBjNWRWcFhO$EJqZ$RsdFdsZFdhMWx0%m1wa*$%RnZZ$mhPT%dJelNq$k1XR%pvWW0x$2Mwd3l%blpp$0$KMlltM$dk$1JJ$Fha-WJWWnNXa2RL-%ZreWMz%mhXRkpzWWxNNWNHSnR$bXhs%Xp$d1l6Tm9hR050WkR*amR6MDk"
                }),
                preview: false
              })
            }, t);
          }), h && reactJsxRuntimeCoreReexport.jsxs("div", {
            className: ep.item,
            children: [reactJsxRuntimeCoreReexport.jsx(semiImageComponent.SemiImage, {
              className: ep.image,
              src: xssContentSanitizer.sanitizeUrl(h, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$J-%lJXRXBxW$$NNWFX%ll%bkJp-lZaNlkzaz$i$nB-$m10WmJ$WnFZW*s1ZW1OdFR-WlpNamwwWTBjNWRWcFhO$EJqZ$RsdFdsZFdhMWx0%m1wa*$%RnZZ$mhPT%dJelNq$k1XR%pvWW0x$2Mwd3l%blpp$0$KMlltM$dk$1JJ$Fha-WJWWnNXa2RL-%ZreWMz%mhXRkpzWWxNNWNHSnR$bXhs%Xp$d1l6Tm9hR050WkR*amR6MDk"
              }),
              preview: false
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              children: reactJsxRuntimeCoreReexport.jsx("div", {
                className: ep["video-overlay"],
                children: reactJsxRuntimeCoreReexport.jsx(ed, {
                  className: ep.icon
                })
              })
            })]
          })]
        })]
      })]
    });
  };
  var eg = {
    container: "container-nGimP6",
    item: "item-aKddM_",
    "bottom-loading": "bottom-loading-ps5s7f",
    "show-scrollbar": "show-scrollbar-BZWgRz",
    empty: "empty-DWaX8N",
    emptyHistory: "emptyHistory-jyqmME"
  };
  let eb = e => {
    let {
      className: t,
      emptyClassName: r,
      style: n,
      showScrollBar: i = true,
      userAvatar: o,
      onFeedbackListFetch: a,
      emptyListTitle: l,
      selfUserTitle: c,
      botUserTitle: d,
      forceLoading: h = false
    } = e;
    let p = reactCoreLibraryReexport.useRef(null);
    let {
      data: m,
      loading: f,
      loadingMore: v,
      noMore: g
    } = useRequestHook_1.useRequest(async e => {
      var r;
      var i;
      let {
        current: o,
        pageSize: l
      } = e;
      let c = l * (o - 1) - 1;
      if (c !== -1 && !(m == null ? undefined : (r = m.list) === null || r === undefined ? undefined : r[c]?.id)) {
        return {
          list: [],
          total: m == null ? undefined : m.total
        };
      }
      let u = await a({
        max_id: m == null ? undefined : (i = m.list) === null || i === undefined ? undefined : i[c]?.id,
        count: l
      });
      return {
        list: u,
        total: ((m == null ? undefined : m.total) ?? 0) + u.length + 1
      };
    }, {
      ref: p,
      initPageSize: 20,
      incrementSize: 20
    });
    return reactJsxRuntimeCoreReexport.jsx("div", {
      "data-testid": "feedback_history_panel",
      ref: p,
      className: u(eg.container, t, {
        [eg.empty]: !(m == null ? undefined : m.list.length),
        [eg["show-scrollbar"]]: i
      }),
      style: n,
      children: h || f ? reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
        size: "middle"
      }) : reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: (m == null ? undefined : m.list) && m.list.length > 0 ? reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [m.list.map(e => reactJsxRuntimeCoreReexport.jsx(ev, {
            className: eg.item,
            userAvatar: o,
            item: e,
            selfUserTitle: c,
            botUserTitle: d
          }, e.id)), !g && v && reactJsxRuntimeCoreReexport.jsx("div", {
            className: eg["bottom-loading"],
            children: reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
              size: "middle"
            })
          })]
        }) : reactJsxRuntimeCoreReexport.jsx("div", {
          className: u(eg.emptyHistory, r),
          children: l
        })
      })
    });
  };
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var getOwnKeys = require("get-own-keys") /*id: 362947*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  function eT(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  let eE = e => {
    try {
      return JSON.stringify(e);
    } catch (e) {
      return "";
    }
  };
  class e$ extends Error {
    constructor(e) {
      super();
      eT(this, "code", undefined);
      eT(this, "extra", undefined);
      this.code = e.code;
      this.extra = e.extra;
    }
  }
  let ej = e => {
    let t = {};
    for (let r of getOwnKeys.getOwnKeys(e)) {
      let n = e[r];
      if (isStringTypeCheck.isString(n) || isNumberUtil.isNumber(n) || isBooleanUtil.isBoolean(n) || isNullishCheck.isNil(n)) {
        t[r] = n;
      } else {
        t[r] = eE(n) || String(n);
      }
    }
    return t;
  };
  let eO = async e => {
    let {
      data: t,
      isPost: r = false,
      commonParams: n,
      logger: i,
      onPost: s,
      onGet: o
    } = e;
    let a = ej({
      ...t,
      ...n
    });
    let l = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    try {
      let e = r ? await s({
        data: a,
        headers: l
      }) : await o({
        params: a,
        headers: l
      });
      if (e.message === "error") {
        throw new e$({
          code: e.err_code,
          extra: e
        });
      }
      return e;
    } catch (e) {
      if (i != null) {
        i.persist.error({
          eventName: "feedback_request_error",
          error: e
        });
      }
      throw e;
    }
  };
  var serviceRequestHelpers = require("service-request-helpers") /*id: 410370*/;
  let eR = async e => {
    let {
      url: t,
      data: r,
      isPost: n = false,
      logger: i,
      aid: s,
      deviceId: o,
      appName: a,
      appkey: l,
      baseUrl: c = "",
      reqQueryParams: u
    } = e;
    let d = e => isFunctionUtil_1.isFunction(c) ? c(e) : c + e;
    return eO({
      data: r,
      isPost: n,
      logger: i,
      commonParams: {
        aid: s,
        device_id: o,
        appName: a,
        appkey: l
      },
      onPost: async e => {
        let {
          params: r,
          headers: n,
          data: i
        } = e;
        let {
          data: s
        } = await serviceRequestHelpers.normalRequest({
          method: "POST",
          url: d(t),
          data: i,
          params: {
            ...(r || {}),
            ...(u || {})
          },
          headers: n
        }, {
          overrideConfig: {
            ignoreResponseInterceptors: true
          }
        });
        return s;
      },
      onGet: async e => {
        let {
          params: r,
          headers: n
        } = e;
        let {
          data: i
        } = await serviceRequestHelpers.normalRequest({
          method: "GET",
          url: d(t),
          params: {
            ...(r || {}),
            ...(u || {})
          },
          headers: n
        }, {
          overrideConfig: {
            ignoreResponseInterceptors: true
          }
        });
        return i;
      }
    });
  };
  let eI = async (e, t) => {
    let {
      channel: r
    } = t;
    return eR({
      url: "/feedback/2/post_message/",
      data: {
        ...e,
        channel: r,
        extra_persistent_params: JSON.stringify({
          samantha_web: 1,
          ...safeJsonUtils.safeParse(e.extra_persistent_params, {})
        })
      },
      isPost: true,
      ...t
    });
  };
  var eM = {
    container: "container-qmRnvC",
    tabs: "tabs-Ogroba",
    item: "item-UhijaA",
    "feedback-submit-panel": "feedback-submit-panel-OPssiI",
    "feedback-history-panel": "feedback-history-panel-YBntAD",
    close: "close-OhYJvE",
    icon: "icon-Rc1KN1",
    "modal-icon": "modal-icon-sjeRam",
    hoverable: "hoverable-BXCpIq",
    "file-input": "file-input-SAfXBC"
  };
  let eF = e => {
    let {
      containerClassName: t,
      userAvatar: r,
      userId: n,
      showFeedbackList: i = true,
      getFeedbackList: c,
      visible: x,
      onClose: $,
      showFileList: j = true,
      submitButtonDisabled: O,
      source: N,
      extraParams: R = {},
      zIndex: I,
      renderContentChild: M,
      ...F
    } = e;
    let C = i18nTranslationUtils.useTranslationWithFallback();
    let {
      logger: P,
      aid: Z
    } = F;
    let [D, W] = reactCoreLibraryReexport.useState({});
    let [L, z] = reactCoreLibraryReexport.useState();
    let B = reactCoreLibraryReexport.useRef(null);
    let V = reactCoreLibraryReexport.useRef(null);
    let [U, H] = reactCoreLibraryReexport.useState(k.SUBMIT);
    useOnUnmountHook.useOnUnmount(() => {
      var e;
      if ((e = V.current) !== null && e !== undefined) {
        e.complete();
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      H(k.SUBMIT);
    }, [x]);
    let X = imageUploaderFactory.createImageUploader({
      userId: n,
      appId: Z,
      logger: P,
      scene: aiSpaceAttachmentConstants.spaceSceneIds.FEEDBACK,
      type: aiSpaceAttachmentConstants.attachmentTypes.Image
    });
    let J = async () => {
      if (!B.current) {
        throw Error("File input element is not exist");
      }
      if (V.current) {
        V.current.complete();
        V.current = null;
      }
      V.current = new observableSubjectClass.Subject();
      B.current.value = "";
      B.current.click();
      return await observableFirstValue.firstValueFrom(V.current);
    };
    let K = async e => {
      let {
        allowedMediaType: t
      } = e;
      if (!t.length) {
        return false;
      }
      z(t);
      await promiseAsyncUtilities.createDelayedPromise(200);
      try {
        let e = await J();
        if (e.length !== 1) {
          return false;
        }
        let t = e[0];
        let r = mediaFileUtils.isVideoType(t.type) ? await mediaFileUtils.extractVideoFrame(t) : t;
        let n = r && (await mediaFileUtils.fileToDataURL(r));
        return {
          base64PreviewImage: n ?? "",
          mediaData: {
            type: "file",
            value: t,
            mimeType: t.type,
            mediaType: mediaFileUtils.isVideoType(t.type) ? "video" : "image"
          },
          size: t.size
        };
      } catch (e) {
        if (e instanceof emptySequenceErrorClass.EmptyError) {
          return false;
        }
        throw e;
      }
    };
    let q = async e => {
      try {
        let {
          feedback_id: r
        } = await eI({
          ...e,
          extra_params: JSON.stringify({
            ...JSON.parse(e.extra_params ?? "{}"),
            ...R
          })
        }, F);
        P.persist.success({
          eventName: "feedback_submit_success",
          meta: {
            feedback_id: r,
            source: N
          }
        });
        samanthaToastFactory.toastInstance.success({
          content: C("feedback_submit_success"),
          showClose: false
        });
        $({
          type: "success",
          feedback_id: r
        });
      } catch (e) {
        samanthaToastFactory.toastInstance.error({
          content: C("feedback_submit_failed"),
          showClose: false
        });
        P.persist.error({
          eventName: "feedback_submit_error",
          error: e,
          meta: {
            source: N
          }
        });
        throw e;
      }
    };
    let G = () => {
      if (D.content || D.choosedMediaList?.length) {
        H(k.SUBMIT);
        modalConfirmDialogManager.ModalConfirmDialog.confirm({
          icon: reactJsxRuntimeCoreReexport.jsx(E, {
            className: eM["modal-icon"]
          }),
          title: C("feedback_leave_confirmation_title"),
          okText: C("feedback_leave_confirmation_leave"),
          cancelText: C("feedback_leave_confirmation_cancel"),
          zIndex: 1020,
          centered: true,
          okButtonProps: {
            type: "danger-primary"
          },
          onOk: () => {
            $({
              type: "close"
            });
          }
        });
      } else {
        $({
          type: "close"
        });
      }
    };
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsxs(modalConfirmDialogManager.ModalConfirmDialog, {
        zIndex: I,
        "data-testid": "feedback_modal",
        className: u(eM.container, t),
        visible: x,
        title: null,
        footer: null,
        closable: false,
        maskClosable: false,
        closeOnEsc: false,
        width: 540,
        centered: true,
        onCancel: G,
        keepDOM: false,
        children: [reactJsxRuntimeCoreReexport.jsxs(tabsComponentAdapter.TabsComponent, {
          className: eM.tabs,
          type: "line",
          activeKey: U,
          onChange: e => H(e),
          children: [reactJsxRuntimeCoreReexport.jsx(tabPaneComponent.TabPane, {
            className: eM.item,
            tab: C("submit_feedback"),
            itemKey: k.SUBMIT,
            children: reactJsxRuntimeCoreReexport.jsx(eo, {
              className: eM["feedback-submit-panel"],
              theme: "grey",
              onChooseMedia: K,
              onUploadMedia: X,
              onSubmit: q,
              onChange: W,
              submitButtonDisabled: O,
              textAreaPlaceholderTitle: C("feedback_placeholder"),
              submitButtonTitle: C("feedback_submit_button"),
              oversizeToastTitle: C("feedback_file_large_error"),
              notAllAssetsFinishedTitle: C("feedback_file_uploading_error"),
              allowedMediaType: j ? ["image"] : [],
              renderContentChild: M,
              renderTextArea: e => reactJsxRuntimeCoreReexport.jsx(smartTextareaWithFormFieldWrapper.SmartTextArea, {
                theme: "default",
                ...e
              })
            })
          }), i && reactJsxRuntimeCoreReexport.jsx(tabPaneComponent.TabPane, {
            className: eM.item,
            tab: C("feedback_history"),
            itemKey: k.HISTORY,
            children: reactJsxRuntimeCoreReexport.jsx(eb, {
              className: eM["feedback-history-panel"],
              emptyListTitle: C("no_feedback_history"),
              selfUserTitle: C("feedback_history_user"),
              botUserTitle: C("feedback_platform_cn"),
              onFeedbackListFetch: async e => {
                let {
                  appkey: t
                } = F;
                let {
                  data: r = []
                } = await c({
                  ...e,
                  appkey: t
                });
                return r;
              },
              userAvatar: r || "data:image/png;base64,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"
            })
          })]
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: u(eM.close, eM.hoverable),
          onClick: G,
          children: reactJsxRuntimeCoreReexport.jsx(rtlCloseIcon.RtlCloseIcon, {
            className: eM.icon
          })
        })]
      }), reactJsxRuntimeCoreReexport.jsx("input", {
        className: eM["file-input"],
        multiple: false,
        type: "file",
        ref: B,
        accept: L && S(L).join(", "),
        onChange: e => {
          var t;
          let n = [...(e.target.files ?? [])];
          if ((t = V.current) !== null && t !== undefined) {
            t.next(n);
          }
        }
      })]
    });
  };
  require.d(exports, {
    FeedbackModal: function () {
      return eF;
    },
    postFeedbackMessage: function () {
      return eI;
    }
  });
}