// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 's' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable '_' to 'wikiSlidesColorfulIcon'
// - Resolved require(356436) to 'wiki-slides-colorful-icon'
// - Renamed variable 'p' to 'fileSheetColorIcon'
// - Resolved require(365435) to 'file-sheet-color-icon'
// - Renamed variable 'S' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'T' to 'boxPreviewEventConstants'
// - Resolved require(654234) to 'box-preview-event-constants'
// - Renamed variable 'D' to 'filePreviewUtils'
// - Resolved require(116443) to 'file-preview-utils'
// - Renamed variable 'L' to 'fileTypeConstants_1'
// - Resolved require(331664) to 'file-type-constants_1'
// - Renamed variable 'O' to 'objectPathGetDefault'
// - Resolved require(690546) to 'object-path-get-default'
// - Resolved require(941450) to 'file-preview-contexts'
// - Updated imported property 'mP' to 'previewEventConstants' (module 654234)
// - Updated imported property 'Z' to 'WikiSlidesColorfulIcon' (module 356436)
// - Updated imported property 'Z' to 'FileSheetColorIcon' (module 365435)
// - Updated imported property 'V$' to 'isValidMessageEvent' (module 116443)
// - Updated imported property 'IO' to 'requestFullscreen' (module 116443)
// - Updated imported property 'V7' to 'exitFullscreen' (module 116443)
// - Updated imported property 'EE' to 'contentSavingStates' (module 331664)
// - Updated imported property 'm7' to 'editorStatus' (module 331664)
// - Updated imported property 'jp' to 'fileCategories' (module 331664)
// - Updated imported property 'Z' to 'getObjectPathDefault' (module 690546)
// - Updated imported property 'nO' to 'withBoxPreviewCtx' (module 941450)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: box-preview-lark-doc.ce3e170f.js
         * chunkId: 93011
         * moduleId: 394827
         */
module.exports = function (module, exports, require) {
  var a;
  var n;
  var l;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let o = e => {
    let t;
    let r = Math.max(1, e.time);
    let a = Math.max(0, e.delayTime || 0);
    let n = 0;
    let l = false;
    let s = e => {};
    let o = e => {};
    let i = () => n < r && !l;
    let u = e => {
      n++;
      if (i()) {
        clearTimeout(t);
        t = setTimeout(() => {
          clearTimeout(t);
          d();
        }, a);
      } else {
        o(e || Error("timeout"));
      }
    };
    let d = () => {
      if (!l) {
        e.runTask().then(t => {
          if (!l) {
            if (e.checkSuccess(t, n)) {
              s(t);
            } else {
              u();
            }
          }
        }).catch(e => {
          if (!l) {
            u(e);
          }
        });
      }
    };
    return {
      cancel: () => {
        l = true;
        clearTimeout(t);
        o(Error("cancel"));
      },
      getResult: () => new Promise((e, t) => {
        s = e;
        o = t;
        d();
      })
    };
  };
  let i = new WeakMap();
  function u(e) {
    if (i.has(e)) {
      return i.get(e);
    }
    let t = function (e) {
      let t = false;
      let r = [];
      let a = () => {
        if (t) {
          while (r.length) {
            try {
              var e;
              if ((e = r.shift()) !== null && e !== undefined) {
                e();
              }
            } catch (e) {}
          }
        }
      };
      let n = () => {
        e.removeEventListener("load", n);
        t = true;
        a();
      };
      e.addEventListener("load", n);
      return {
        addTask: e => {
          if (!r.includes(e)) {
            r.push(e);
          }
          a();
        }
      };
    }(e);
    i.set(e, t);
    return t;
  }
  let d = e => function () {
    var e = arguments.length;
    var t = Array(e);
    var r = 0;
    for (; r < e; r++) {
      t[r] = arguments[r];
    }
  };
  (a = {}).requestFullscreen = "requestFullscreen";
  a.exitFullscreen = "exitFullscreen";
  a.requestEditMode = "requestEditMode";
  a.exitEditMode = "exitEditMode";
  a.updateEditStatus = "updateEditStatus";
  a.updateSpreadLoadedStatus = "updateSpreadLoadedStatus";
  a.updateSlidesLoadedStatus = "updateSlidesLoadedStatus";
  a.playModeEnableChange = "playModeEnableChange";
  a.enterPlayMode = "enterPlayMode";
  a.fullscreenChange = "fullscreenChange";
  a.switchTheme = "switchTheme";
  let c = a;
  (n = {}).SPREAD_SHEETS = "spread_sheets";
  n.SLIDES = "slides";
  let f = n;
  let E = {
    [f.SPREAD_SHEETS]: "spreadSheet-iframe",
    [f.SLIDES]: "slides-iframe"
  };
  let m = d("useSwitchTheme");
  let v = (e, t) => {
    reactCoreLibraryReexport.useEffect(() => {
      if (!e.current) {
        return;
      }
      let r = u(e.current);
      let a = c.switchTheme;
      r.addTask(() => {
        var r;
        var n;
        m("postMessage", a);
        if ((n = e.current) !== null && n !== undefined && (r = n.contentWindow) !== null && r !== undefined) {
          r.postMessage({
            messageType: a,
            data: {
              theme: t
            }
          }, "*");
        }
      });
    }, [e, t]);
  };
  let h = d("useSwitchEditMode");
  let w = (e, t) => {
    reactCoreLibraryReexport.useEffect(() => {
      if (!e.current) {
        return;
      }
      let r = u(e.current);
      let a = t ? c.requestEditMode : c.exitEditMode;
      r.addTask(() => {
        var t;
        var r;
        h("postMessage", a);
        if ((r = e.current) !== null && r !== undefined && (t = r.contentWindow) !== null && t !== undefined) {
          t.postMessage({
            messageType: a
          }, "*");
        }
      });
    }, [e, t]);
  };
  var wikiSlidesColorfulIcon = require("wiki-slides-colorful-icon") /*id: 356436*/;
  var fileSheetColorIcon = require("file-sheet-color-icon") /*id: 365435*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let x = e => {
    let t = reactCoreLibraryReexport.useMemo(() => Math.min(100, Math.max(0, Number(e.progress) || 0)), [e.progress]);
    let {
      text: r,
      Icon: a
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: "lark-doc-loading-wrap",
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "lark-doc-loading-container",
        children: [a ? reactJsxRuntimeCoreReexport.jsx(a, {
          className: "lark-doc-icon"
        }) : null, r ? reactJsxRuntimeCoreReexport.jsx("div", {
          className: "lark-doc-text",
          children: r
        }) : null, reactJsxRuntimeCoreReexport.jsx("div", {
          className: "lark-doc-progress-container",
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            className: "lark-doc-progress",
            style: {
              width: `${t}%`
            }
          })
        })]
      })
    });
  };
  var boxPreviewEventConstants = require("box-preview-event-constants") /*id: 654234*/;
  let g = (e, t, r) => {
    let a = reactCoreLibraryReexport.useMemo(() => {
      switch (r) {
        case "feishu":
          return e.Bitable_Feishu_BrandName;
        case "lark":
          return e.Bitable_Lark_BrandName;
        default:
          return "feishu";
      }
    }, [r]);
    return reactCoreLibraryReexport.useMemo(() => {
      let r = t === f.SLIDES ? e.LarkCCM_Slides_OnlineEdit_PreviewAvailable_Desc : e.LarkCCM_Sheets_OpenExcelThroughSheetsLoading_Description;
      if (r) {
        return r.replace(/{{(.*)}}/, a);
      } else {
        return "";
      }
    }, [a]);
  };
  let C = (e, t, r) => {
    let a = reactCoreLibraryReexport.useRef(10);
    let [n, l] = reactCoreLibraryReexport.useState(true);
    let [o, i] = reactCoreLibraryReexport.useState(() => a.current);
    reactCoreLibraryReexport.useEffect(() => {
      var r;
      let n;
      let s = setInterval(() => {
        a.current = Math.min(a.current + 5, 90);
        i(a.current);
        if (a.current >= 90) {
          clearInterval(s);
        }
      }, 300);
      let o = () => {
        clearInterval(s);
        n = setTimeout(() => {
          a.current = 100;
          i(100);
          l(false);
          clearTimeout(n);
        }, 300);
      };
      t.eventBus.on(boxPreviewEventConstants.previewEventConstants.LARK_DOC_UPDATE_LOADED_STATUS, o);
      if ((r = e.current) !== null && r !== undefined) {
        r.addEventListener("load", o);
      }
      return () => {
        var r;
        t.eventBus.off(boxPreviewEventConstants.previewEventConstants.LARK_DOC_UPDATE_LOADED_STATUS, o);
        if ((r = e.current) !== null && r !== undefined) {
          r.removeEventListener("load", o);
        }
        clearInterval(s);
        clearTimeout(n);
      };
    }, [e]);
    let u = g(t.i18n, r, t.overrideBrandName);
    let d = r === f.SLIDES ? wikiSlidesColorfulIcon.WikiSlidesColorfulIcon : fileSheetColorIcon.FileSheetColorIcon;
    if (n) {
      return reactJsxRuntimeCoreReexport.jsx(x, {
        progress: o,
        Icon: d,
        text: u
      });
    } else {
      return null;
    }
  };
  var filePreviewUtils = require("file-preview-utils") /*id: 116443*/;
  var fileTypeConstants_1 = require("file-type-constants_1") /*id: 331664*/;
  let M = d("useIframeMessage");
  let P = (e, t) => {
    reactCoreLibraryReexport.useEffect(() => {
      let r = r => {
        if (!filePreviewUtils.isValidMessageEvent(r, e.current)) {
          M("checkMessage type error");
          return;
        }
        M("handle Message", r);
        let a = r.data;
        switch (a.messageType) {
          case c.requestFullscreen:
            filePreviewUtils.requestFullscreen(e.current);
            break;
          case c.exitFullscreen:
            filePreviewUtils.exitFullscreen();
            break;
          case c.updateEditStatus:
            switch (a.data) {
              case "USER_CHANGES":
                {
                  let e = fileTypeConstants_1.contentSavingStates.CONTENT_SAVING;
                  t.safelyEmit(boxPreviewEventConstants.previewEventConstants.LARK_DOC_UPDATE_EDIT_STATUS, {
                    status: e
                  });
                  break;
                }
              case "ACCEPT_COMMIT":
                {
                  let e = fileTypeConstants_1.contentSavingStates.CONTENT_SAVED;
                  t.safelyEmit(boxPreviewEventConstants.previewEventConstants.LARK_DOC_UPDATE_EDIT_STATUS, {
                    status: e
                  });
                }
            }
            break;
          case c.updateSpreadLoadedStatus:
          case c.updateSlidesLoadedStatus:
            {
              let e = a.data;
              t.safelyEmit(boxPreviewEventConstants.previewEventConstants.LARK_DOC_UPDATE_LOADED_STATUS, {
                status: e
              });
              break;
            }
          case c.playModeEnableChange:
            {
              let e = a.data;
              t.safelyEmit(boxPreviewEventConstants.previewEventConstants.LARK_DOC_PLAY_MODE_ENABLE_CHANGE, {
                status: e
              });
              break;
            }
          default:
            M("message type error", a);
        }
      };
      window.addEventListener("message", r);
      return () => {
        window.removeEventListener("message", r);
      };
    }, [e]);
  };
  let k = d("useIframeFullScreenChange");
  let A = (e, t) => {
    reactCoreLibraryReexport.useEffect(() => {
      var r;
      let a = () => {
        if (e.current) {
          u(e.current).addTask(() => {
            var r;
            var a;
            var n;
            var l;
            let s = !!document.fullscreenElement;
            if (t === f.SLIDES) {
              if (s) {
                if ((n = window.navigator.keyboard) !== null && n !== undefined) {
                  n.lock(["Escape"]);
                }
              } else if ((l = window.navigator.keyboard) !== null && l !== undefined) {
                l.unlock(["Escape"]);
              }
            }
            let o = c.fullscreenChange;
            let i = {
              inFullscreen: s
            };
            k("postMessage", o, i);
            if ((a = e.current) !== null && a !== undefined && (r = a.contentWindow) !== null && r !== undefined) {
              r.postMessage({
                messageType: o,
                data: i
              }, "*");
            }
          });
        }
      };
      if ((r = e.current) !== null && r !== undefined) {
        r.addEventListener("fullscreenchange", a);
      }
      return () => {
        var t;
        if ((t = e.current) !== null && t !== undefined) {
          t.removeEventListener("fullscreenchange", a);
        }
      };
    }, [e, t]);
  };
  let y = d("useEnterPlayMode");
  let b = (e, t) => {
    reactCoreLibraryReexport.useEffect(() => {
      let r = t => {
        if (e.current) {
          u(e.current).addTask(() => {
            var r;
            var a;
            let n = c.enterPlayMode;
            y("postMessage", n, t);
            if ((a = e.current) !== null && a !== undefined && (r = a.contentWindow) !== null && r !== undefined) {
              r.postMessage({
                messageType: n,
                data: t
              }, "*");
            }
          });
        }
      };
      t.on(boxPreviewEventConstants.previewEventConstants.LARK_DOC_ENTER_PLAY_MODE, r);
      return () => {
        t.off(boxPreviewEventConstants.previewEventConstants.LARK_DOC_ENTER_PLAY_MODE, r);
      };
    }, [e, t]);
  };
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  let V = d("useCheckWps");
  (l = R || {})[l.wait = 0] = "wait";
  l[l.wps = 1] = "wps";
  l[l.larkDoc = 2] = "larkDoc";
  l[l.errorOrUnKnow = 3] = "errorOrUnKnow";
  var R = l;
  let I = {
    retryCount: 10,
    delayTime: 300
  };
  let Z = {
    retryCount: 16,
    delayTime: 1500
  };
  let N = (e, t, r, a) => {
    let {
      fileToken: n,
      isInEditMode: l
    } = e;
    reactCoreLibraryReexport.useRef(e.networkController).current = e.networkController;
    let [i, u] = reactCoreLibraryReexport.useState(fileTypeConstants_1.editorStatus.waiting);
    let d = reactCoreLibraryReexport.useMemo(() => {
      let {
        retryCount: e,
        delayTime: r
      } = a === f.SLIDES ? Z : I;
      f.SPREAD_SHEETS;
      return o({
        checkSuccess: (r, a) => {
          V("checkSuccess", r);
          switch (objectPathGetDefault.getObjectPathDefault(r, "data.data.editType", R.errorOrUnKnow)) {
            case R.wps:
            case R.larkDoc:
              break;
            case R.wait:
              t.updateProgress(a / e * 50);
              return false;
            case R.errorOrUnKnow:
          }
          return true;
        },
        delayTime: r,
        runTask: async () => undefined,
        time: e
      });
    }, [n, a]);
    reactCoreLibraryReexport.useEffect(() => {
      d.getResult().then(e => {
        V("fetchResult", e);
        switch (objectPathGetDefault.getObjectPathDefault(e, "data.data.editType", R.errorOrUnKnow)) {
          case R.larkDoc:
            {
              let t = objectPathGetDefault.getObjectPathDefault(e, "data.data.url");
              if (t) {
                r(`${t}?${a === f.SLIDES ? "hideSidebar=1&hideHeader=1&isPPTX=1&noSSR=1" : "isExcel=true"}`);
                u(fileTypeConstants_1.editorStatus.larkDoc);
              } else {
                throw Error("url is exception");
              }
              break;
            }
          case R.wps:
            u(fileTypeConstants_1.editorStatus.wps);
            break;
          case R.errorOrUnKnow:
            throw Error("editType is errorOrUnKnow");
          default:
            throw Error("editType is exception");
        }
      }).catch(e => {
        V("fetchError", e);
        u(fileTypeConstants_1.editorStatus.error);
      });
      return () => {
        d.cancel();
      };
    }, [d]);
    return reactCoreLibraryReexport.useMemo(() => i !== fileTypeConstants_1.editorStatus.error || l ? i : fileTypeConstants_1.editorStatus.wps, [i, l]);
  };
  let U = d("LarkDocsContent");
  let j = (e, t) => {
    reactCoreLibraryReexport.useLayoutEffect(() => {
      if ([fileTypeConstants_1.editorStatus.error, fileTypeConstants_1.editorStatus.larkDoc, fileTypeConstants_1.editorStatus.wps].includes(e)) {
        t.safelyEmit(boxPreviewEventConstants.previewEventConstants.LARK_DOC_EDIT_TYPE_CHANGE, {
          status: e
        });
      }
    }, [t, e]);
  };
  let K = e => {
    let t = reactCoreLibraryReexport.useRef(null);
    let {
      eventBus: r,
      isInEditMode: a,
      theme: n
    } = e.fixedContextValue;
    P(t, r);
    w(t, a);
    b(t, r);
    A(t, e.docType);
    v(t, n);
    reactCoreLibraryReexport.useEffect(() => {
      e.boxPreviewContextValue.updateProgress(100);
    }, []);
    let l = C(t, e.fixedContextValue, e.docType);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      style: {
        flex: 1,
        height: " 100%",
        position: "relative"
      },
      children: [l, e.iframeSrc ? reactJsxRuntimeCoreReexport.jsx("iframe", {
        style: {
          position: "relative",
          width: "100%",
          height: "100%",
          border: "none",
          background: "var(--bg-base)"
        },
        "aha-samesite": "none",
        "data-sel": E[e.docType],
        ref: t,
        src: e.iframeSrc,
        allowFullScreen: true,
        seamless: true
      }) : null]
    });
  };
  let B = e => {
    reactCoreLibraryReexport.useEffect(() => {
      e.boxPreviewContextValue.setPreviewComponent(fileTypeConstants_1.fileCategories.WPS);
    }, []);
    return null;
  };
  let H = () => null;
  let F = e => {
    reactCoreLibraryReexport.useEffect(() => {
      e.boxPreviewContextValue.setPreviewComponent(fileTypeConstants_1.fileCategories.ERROR);
    }, []);
    return null;
  };
  let q = e => {
    let [t, r] = reactCoreLibraryReexport.useState("");
    let a = N(e.fixedContextValue, e.boxPreviewContextValue, r, e.docType);
    j(a, e.fixedContextValue.eventBus);
    U("status", a);
    if (a === fileTypeConstants_1.editorStatus.waiting) {
      return reactJsxRuntimeCoreReexport.jsx(H, {});
    } else if (a === fileTypeConstants_1.editorStatus.larkDoc) {
      return reactJsxRuntimeCoreReexport.jsx(K, {
        boxPreviewContextValue: e.boxPreviewContextValue,
        fixedContextValue: e.fixedContextValue,
        iframeSrc: t,
        docType: e.docType
      });
    } else if (a === fileTypeConstants_1.editorStatus.wps) {
      return reactJsxRuntimeCoreReexport.jsx(B, {
        boxPreviewContextValue: e.boxPreviewContextValue
      });
    } else if (e.fixedContextValue.isInEditMode) {
      return reactJsxRuntimeCoreReexport.jsx(F, {
        boxPreviewContextValue: e.boxPreviewContextValue
      });
    } else {
      return null;
    }
  };
  var W = require("file-preview-contexts") /*id: 941450*/.withBoxPreviewCtx(e => {
    let r = reactCoreLibraryReexport.useMemo(() => {
      let r = e.dynamicContextValue.fileInfo?.name;
      if (r) {
        if (r.endsWith(".xlsx")) {
          return f.SPREAD_SHEETS;
        } else if (r.endsWith(".pptx")) {
          return f.SLIDES;
        } else {
          return null;
        }
      } else {
        return null;
      }
    }, [e.dynamicContextValue.fileInfo?.name]);
    if (r) {
      return reactJsxRuntimeCoreReexport.jsx(q, {
        ...e,
        docType: r
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(F, {
        boxPreviewContextValue: e.boxPreviewContextValue
      });
    }
  });
  require.r(exports);
  require.d(exports, {
    default: function () {
      return W;
    }
  });
}