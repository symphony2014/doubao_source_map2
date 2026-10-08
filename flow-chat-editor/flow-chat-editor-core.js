// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'contentStructureUtils'
// - Resolved require(429644) to 'content-structure-utils'
// - Renamed variable 'l' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'o' to 'slateReactEditorCore'
// - Resolved require(950771) to 'slate-react-editor-core'
// - Renamed variable 'a' to 'slateEditorCoreUtils'
// - Resolved require(927219) to 'slate-editor-core-utils'
// - Renamed variable 's' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Renamed variable 'd' to 'isStringTypeCheck'
// - Resolved require(253558) to 'is-string-type-check'
// - Renamed variable 'c' to 'hotkeyValidationUtils'
// - Resolved require(691069) to 'hotkey-validation-utils'
// - Renamed variable 'u' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'p' to 'inputToolElementUtils'
// - Resolved require(16749) to 'input-tool-element-utils'
// - Renamed variable 'h' to 'isPlainObjectUtil'
// - Resolved require(435967) to 'is-plain-object-util'
// - Renamed variable 'y' to 'platformTypeUtils'
// - Resolved require(870332) to 'platform-type-utils'
// - Renamed variable 'R' to 'secureLinkComponent'
// - Resolved require(887200) to 'secure-link-component'
// - Renamed variable 'N' to 'chatDocumentLink'
// - Resolved require(68458) to 'chat-document-link'
// - Renamed variable 'k' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'isPlainObject' (module 435967)
// - Updated imported property 'OX' to 'operationUtils' (module 927219)
// - Updated imported property 'ML' to 'editorHelpers' (module 927219)
// - Updated imported property 'YR' to 'editorTransforms' (module 927219)
// - Updated imported property 'y$' to 'pathUtils' (module 927219)
// - Updated imported property 'xv' to 'textUtils' (module 927219)
// - Updated imported property 'Jh' to 'createEditor' (module 927219)
// - Updated imported property 'NB' to 'nodeUtils' (module 927219)
// - Updated imported property 'e6' to 'rangeUtils' (module 927219)
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// - Updated imported property 'eN' to 'urlRegex' (module 429644)
// - Updated imported property 'LJ' to 'buildEditorContent' (module 429644)
// - Updated imported property 'on' to 'normalizeContent' (module 429644)
// - Updated imported property 'BU' to 'withSlateFragment' (module 950771)
// - Updated imported property 'F3' to 'domUtils' (module 950771)
// - Updated imported property 'mH' to 'SlateProvider' (module 950771)
// - Updated imported property 'CX' to 'SlateEditor' (module 950771)
// - Updated imported property 'Cy' to 'isDeepEqual' (module 870332)
// - Updated imported property 'XO' to 'isDocLink' (module 870332)
// - Updated imported property 'Dt' to 'isAndroidDevice' (module 870332)
// - Updated imported property 'kK' to 'hasType' (module 16749)
// - Updated imported property 'xp' to 'isParagraph' (module 16749)
// - Updated imported property 'C' to 'ChatDocLink' (module 68458)
// - Updated imported property 'Z' to 'isString' (module 253558)
// - Updated imported property 'N' to 'secureLink' (module 887200)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-chat-editor.fa3e7cde.js
         * chunkId: 88860
         * moduleId: 741518
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var contentStructureUtils = require("content-structure-utils") /*id: 429644*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var slateReactEditorCore = require("slate-react-editor-core") /*id: 950771*/;
  var slateEditorCoreUtils = require("slate-editor-core-utils") /*id: 927219*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var hotkeyValidationUtils = require("hotkey-validation-utils") /*id: 691069*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var f = classnamesUtils;
  var inputToolElementUtils = require("input-tool-element-utils") /*id: 16749*/;
  var isPlainObjectUtil = require("is-plain-object-util") /*id: 435967*/;
  let m = e => isPlainObjectUtil.isPlainObject(e) && Array.isArray(e.redos) && Array.isArray(e.undos) && (e.redos.length === 0 || slateEditorCoreUtils.operationUtils.isOperationList(e.redos[0].operations)) && (e.undos.length === 0 || slateEditorCoreUtils.operationUtils.isOperationList(e.undos[0].operations));
  new WeakMap();
  let x = new WeakMap();
  let v = new WeakMap();
  let g = {
    isHistoryEditor: e => m(e.history) && slateEditorCoreUtils.editorHelpers.isEditor(e),
    isMerging: e => v.get(e),
    isSaving: e => x.get(e),
    redo(e) {
      e.redo();
    },
    undo(e) {
      e.undo();
    },
    withoutMerging(e, t) {
      let n = g.isMerging(e);
      v.set(e, false);
      t();
      v.set(e, n);
    },
    withoutSaving(e, t) {
      let n = g.isSaving(e);
      x.set(e, false);
      t();
      x.set(e, n);
    }
  };
  let b = function (e, {
    mergeTimeout: t
  } = {}) {
    let {
      apply: n
    } = e;
    e.history = {
      undos: [],
      redos: []
    };
    let r = 0;
    e.redo = () => {
      let {
        history: t
      } = e;
      let {
        redos: n
      } = t;
      if (n.length > 0) {
        let r = n[n.length - 1];
        if (r.selectionBefore) {
          slateEditorCoreUtils.editorTransforms.setSelection(e, r.selectionBefore);
        }
        g.withoutSaving(e, () => {
          slateEditorCoreUtils.editorHelpers.withoutNormalizing(e, () => {
            for (let t of r.operations) {
              e.apply(t);
            }
          });
        });
        t.redos.pop();
        e.writeHistory("undos", r);
      }
    };
    e.undo = () => {
      let {
        history: t
      } = e;
      let {
        undos: n
      } = t;
      if (n.length > 0) {
        let r = n[n.length - 1];
        g.withoutSaving(e, () => {
          slateEditorCoreUtils.editorHelpers.withoutNormalizing(e, () => {
            for (let t of r.operations.map(slateEditorCoreUtils.operationUtils.inverse).reverse()) {
              e.apply(t);
            }
            if (r.selectionBefore) {
              slateEditorCoreUtils.editorTransforms.setSelection(e, r.selectionBefore);
            }
          });
        });
        e.writeHistory("redos", r);
        t.undos.pop();
      }
    };
    e.apply = i => {
      let {
        operations: l,
        history: o
      } = e;
      let {
        undos: a
      } = o;
      let d = a[a.length - 1];
      let c = d && d.operations[d.operations.length - 1];
      i.timestamp ||= Date.now();
      let u = g.isSaving(e);
      let f = g.isMerging(e);
      if (isUndefinedCheck.isUndefined(u)) {
        u = $(i, c);
      }
      if (u) {
        if (isUndefinedCheck.isUndefined(f)) {
          if (isUndefinedCheck.isUndefined(d)) {
            r = i.timestamp;
            f = false;
          } else if (l.length !== 0) {
            r = i.timestamp;
            f = true;
          } else {
            f = w(i, c, {
              mergeTimeout: t,
              lastMergeTime: r,
              onUpdateLastMergeTime: e => {
                r = e;
              }
            });
          }
        }
        if (d && f) {
          d.operations.push(i);
        } else {
          let t = {
            operations: [i],
            selectionBefore: e.selection
          };
          e.writeHistory("undos", t);
        }
        while (a.length > 100) {
          a.shift();
        }
        o.redos = [];
      }
      n(i);
    };
    e.writeHistory = (t, n) => {
      e.history[t].push(n);
    };
    return e;
  };
  let w = function (e, t) {
    let {
      mergeTimeout: r,
      lastMergeTime: i,
      onUpdateLastMergeTime: l
    } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let o = e.timestamp ?? Date.now();
    if (isUndefinedCheck.isUndefined(r) || isUndefinedCheck.isUndefined(o) || isUndefinedCheck.isUndefined(i) || !(o - i > r)) {
      return (!!t && e.type === "insert_text" && t.type === "insert_text" && e.offset === t.offset + t.text.length && !!slateEditorCoreUtils.pathUtils.equals(e.path, t.path) || !!t && e.type === "remove_text" && t.type === "remove_text" && e.offset + e.text.length === t.offset && !!slateEditorCoreUtils.pathUtils.equals(e.path, t.path)) && (l == null || l(o), true);
    } else {
      if (l != null) {
        l(o);
      }
      return false;
    }
  };
  let $ = (e, t) => e.type !== "set_selection";
  var platformTypeUtils = require("platform-type-utils") /*id: 870332*/;
  var secureLinkComponent = require("secure-link-component") /*id: 887200*/;
  var chatDocumentLink = require("chat-document-link") /*id: 68458*/;
  var j = {
    container: "container-GbAD0C",
    paragraph: "paragraph-BM47IJ",
    disabled: "disabled-1okpar"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let T = (e, t) => {
    let {
      isInline: n,
      isVoid: r,
      markableVoid: i,
      insertData: l
    } = e;
    e.isInline = e => e.type === "doc_link" || n(e);
    e.isVoid = e => e.type === "doc_link" || r(e);
    e.markableVoid = e => e.type === "doc_link" || i(e);
    e.insertData = n => {
      let r = t == null ? undefined : t(n);
      if (r) {
        slateEditorCoreUtils.editorTransforms.insertFragment(e, r);
        return;
      }
      l(n);
    };
    return e;
  };
  let S = e => {
    let [t, n] = e;
    if (slateEditorCoreUtils.textUtils.isText(t)) {
      return Array.from(t.text.matchAll(contentStructureUtils.urlRegex)).map(e => {
        let t = e.index;
        let r = t + e[0].length;
        return {
          anchor: {
            path: n,
            offset: t
          },
          focus: {
            path: n,
            offset: r
          },
          link: e[0]
        };
      });
    } else {
      return [];
    }
  };
  let M = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      initialValue: n = [],
      value: i = n,
      onChange: u,
      disabled: h = false,
      className: m,
      onKeyDown: x,
      placeHolderClassName: v,
      history: g,
      onInsertData: w,
      onClickLink: $,
      onClickDocLink: M,
      onMount: W,
      ...Z
    } = e;
    let z = reactCoreLibraryReexport.useMemo(() => T(b(slateReactEditorCore.withSlateFragment(slateEditorCoreUtils.createEditor()), g), w), []);
    reactCoreLibraryReexport.useEffect(() => {
      if (W != null) {
        W();
      }
    }, []);
    let [E, D] = reactCoreLibraryReexport.useState(i);
    let C = () => {
      let [, e] = slateEditorCoreUtils.nodeUtils.first(z, []);
      let [t, n] = slateEditorCoreUtils.nodeUtils.last(z, []);
      return {
        anchor: {
          path: e,
          offset: 0
        },
        focus: {
          path: n,
          offset: Math.max(slateEditorCoreUtils.nodeUtils.string(t).length, 1)
        }
      };
    };
    let _ = e => {
      slateEditorCoreUtils.editorTransforms.removeNodes(z, {
        at: C()
      });
      slateEditorCoreUtils.editorTransforms.insertNodes(z, e);
    };
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      focus: function (e = {}) {
        let {
          toIndex: t
        } = e;
        slateReactEditorCore.domUtils.focus(z);
        if (!isUndefinedCheck.isUndefined(t)) {
          slateEditorCoreUtils.editorTransforms.select(z, {
            path: [0, 0],
            offset: 0
          });
          slateEditorCoreUtils.editorTransforms.move(z, {
            distance: t,
            unit: "offset"
          });
        }
      },
      blur: () => {
        slateReactEditorCore.domUtils.blur(z);
      },
      setValue: _,
      selectAll: () => {
        slateReactEditorCore.domUtils.focus(z);
        slateEditorCoreUtils.editorTransforms.select(z, C());
      },
      getValue: () => E
    }), [z, E]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!platformTypeUtils.isDeepEqual(i, n) && u != null) {
        u(E);
      }
    }, [E]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!platformTypeUtils.isDeepEqual(E, i)) {
        _(i);
      }
    }, [i]);
    return reactJsxRuntimeCoreReexport.jsx(slateReactEditorCore.SlateProvider, {
      editor: z,
      initialValue: E,
      onChange: D,
      children: reactJsxRuntimeCoreReexport.jsx(slateReactEditorCore.SlateEditor, {
        ...Z,
        className: f(j.container, m, {
          [j.disabled]: h
        }),
        decorate: S,
        onPaste: e => {
          var t;
          if ((t = Z.onPaste) === null || t === undefined) {
            return undefined;
          } else {
            return t.call(Z, e);
          }
        },
        onKeyDown: e => {
          let {
            selection: t
          } = z;
          let {
            nativeEvent: n
          } = e;
          let r = hotkeyValidationUtils.isKeyHotkey("left", n);
          let i = hotkeyValidationUtils.isKeyHotkey("right", n);
          if (t && slateEditorCoreUtils.rangeUtils.isCollapsed(t) && (r || i)) {
            e.preventDefault();
            let n = r ? z.before(t, {
              unit: "offset"
            }) : z.after(t, {
              unit: "offset"
            });
            let i = z.above({
              at: n,
              match: e => inputToolElementUtils.hasType(e) && platformTypeUtils.isDocLink(e),
              mode: "lowest"
            });
            slateEditorCoreUtils.editorTransforms.move(z, {
              unit: "offset",
              reverse: r,
              distance: i ? 2 : undefined
            });
          }
          if (x != null) {
            x(e);
          }
        },
        renderElement: e => {
          let {
            attributes: t,
            children: n,
            element: r
          } = e;
          if (platformTypeUtils.isDocLink(r)) {
            let {
              title: e,
              url: i,
              hasPermission: l
            } = r;
            return reactJsxRuntimeCoreReexport.jsxs("span", {
              ...t,
              contentEditable: false,
              children: [n, reactJsxRuntimeCoreReexport.jsx(chatDocumentLink.ChatDocLink, {
                title: e,
                url: i,
                hasPermission: l,
                onClick: () => {
                  if (M != null) {
                    M(r);
                  }
                }
              })]
            });
          }
          if (inputToolElementUtils.isParagraph(r)) {
            return reactJsxRuntimeCoreReexport.jsx("div", {
              ...t,
              className: j.paragraph,
              children: n
            });
          } else {
            return null;
          }
        },
        renderLeaf: e => {
          let {
            attributes: t,
            children: n,
            leaf: r
          } = e;
          let {
            text: i
          } = r;
          let o = "link" in r && isStringTypeCheck.isString(r.link) ? r.link : undefined;
          let a = reactJsxRuntimeCoreReexport.jsx("span", {
            ...t,
            style: {
              paddingLeft: i === "" ? 0.1 : undefined
            },
            children: n
          });
          if (o) {
            return reactJsxRuntimeCoreReexport.jsx(secureLinkComponent.secureLink, {
              href: xssContentSanitizer.sanitizeUrl(o, null, {
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
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1hOaF-wbDBX$Epv-%dSRE1Xb*hXRzkwWkROS2NH%khWWFpqTTBwc$RESktjR1ZwT$dwa%1qRjNZakkx-kdKd$$-WmFSemxxWl$Ne*FtSXlNWFJh$np$d1R*aENhR0p0$m5OT%1rNTJZb*hDZ*1KdFZu$mtTRTEy$1RJNWRHSlhWblZr%Xp*cFlr-z$hb%-1T1dwa%1qRjNZakkx-kdKd$$ucE1Naz%yWWxje*JHSn$$WFJh$jFKd1pF-z$l$Xd5$*5aa$dFSjJZbTFXZFdSS$R-WmpNbmhvWk$k$mRHSkhSbWxh$jNoc1drTXhiRnBI-kRCa%0wbDJZ$mMx-TFwW$oz$mtTRTQw$1ZoS2Jt%ll%$DA9"
              }),
              onClick: $,
              children: a
            });
          } else {
            return a;
          }
        },
        readOnly: h,
        renderPlaceholder: e => {
          let {
            attributes: t,
            children: n
          } = e;
          return reactJsxRuntimeCoreReexport.jsxs("span", {
            className: v,
            ...t,
            ref: e => {
              if (e) {
                t.ref(e);
              }
            },
            children: [n, platformTypeUtils.isAndroidDevice() && reactJsxRuntimeCoreReexport.jsx("br", {})]
          });
        }
      })
    });
  });
  let W = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      initialValue: n,
      value: l = n,
      onChange: o,
      autoFocus: a,
      ...s
    } = e;
    let d = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      focus: e => {
        var t;
        if ((t = d.current) !== null && t !== undefined) {
          t.focus(e);
        }
      },
      blur: () => {
        var e;
        if ((e = d.current) !== null && e !== undefined) {
          e.blur();
        }
      },
      setValue: e => {
        var t;
        if ((t = d.current) !== null && t !== undefined) {
          t.setValue(contentStructureUtils.buildEditorContent(e));
        }
      },
      getValue: () => {
        if (!d.current) {
          throw Error("SlateLabeledEditor not mounted");
        }
        return contentStructureUtils.normalizeContent(d.current.getValue());
      },
      selectAll: () => {
        var e;
        if ((e = d.current) !== null && e !== undefined) {
          e.selectAll();
        }
      }
    }), []);
    reactCoreLibraryReexport.useEffect(() => {
      if (d.current && a) {
        d.current.focus();
      }
    }, [a]);
    return reactJsxRuntimeCoreReexport.jsx(M, {
      ...s,
      ref: d,
      value: l && contentStructureUtils.buildEditorContent(l),
      onChange: o && (e => o(contentStructureUtils.normalizeContent(e)))
    });
  });
  var Z = W;
  require.r(exports);
  require.d(exports, {
    CommentEditor: function () {
      return W;
    },
    default: function () {
      return Z;
    }
  });
}