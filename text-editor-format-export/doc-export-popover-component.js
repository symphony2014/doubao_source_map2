// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'DocExportPopover'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68834.ebc1ffcc.js
         * chunkId: 68834
         * moduleId: 782617
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var promiseAsyncUtilities = require("promise-async-utilities") /*id: 592307*/;
  var skillPinModalCallback = require("skill-pin-modal-callback") /*id: 381053*/;
  var functionInvoker = require("function-invoker") /*id: 144910*/;
  var fileDownloadUtilities = require("file-download-utilities") /*id: 552822*/;
  var businessSkillBar = require("business-skill-bar") /*id: 342181*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var lazyLottiePlayerWrapper = require("lazy-lottie-player-wrapper") /*id: 364746*/;
  var docFileIconComponent = require("doc-file-icon-component") /*id: 936985*/;
  var pdfFileTypeIcon = require("pdf-file-type-icon") /*id: 604202*/;
  var fileTypeTxtIcon = require("file-type-txt-icon") /*id: 593286*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var aiEditorWrapper = require("ai-editor-wrapper") /*id: 91148*/;
  var markdownToEditorDeltaProcessor = require("markdown-to-editor-delta-processor") /*id: 689610*/;
  var xmlBuilderAndUtils = require("xml-builder-and-utils") /*id: 730126*/;
  var numericRangeUtil = require("numeric-range-util") /*id: 685991*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var assertErrorHelper = require("assert-error-helper") /*id: 85083*/;
  var blockTypeEnum = require("block-type-enum") /*id: 678364*/;
  var deltaSetWalkerPlugin = require("delta-set-walker-plugin") /*id: 831379*/;
  function F(e, t, r) {
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
  class Z extends deltaSetWalkerPlugin.DeltaSetWalker {
    match(e) {
      let {
        curOp: r
      } = e;
      return !!r.attributes?.list;
    }
    constructor(...e) {
      super(...e);
      F(this, "name", "list");
      F(this, "type", blockTypeEnum.BlockTypes.ContainerBlock);
    }
  }
  let j = e => {
    let {
      level: t,
      text: r,
      format: n,
      blued: i = false
    } = e;
    return {
      level: t,
      format: n,
      text: r,
      alignment: xmlBuilderAndUtils.B1p.START,
      style: {
        paragraph: {
          indent: {
            left: xmlBuilderAndUtils.vwV(0.2 + t * 0.3),
            hanging: xmlBuilderAndUtils.vwV(0.2)
          }
        },
        run: i ? {
          color: "3370FF",
          size: 22
        } : undefined
      }
    };
  };
  let M = e => {
    let t = [xmlBuilderAndUtils.WaB.DECIMAL, xmlBuilderAndUtils.WaB.LOWER_LETTER, xmlBuilderAndUtils.WaB.LOWER_ROMAN];
    return j({
      level: e,
      format: t[e % t.length],
      text: `%${e + 1}.`,
      blued: true
    });
  };
  let I = e => {
    let t = ["•", "◦", "▪"];
    return j({
      level: e,
      format: xmlBuilderAndUtils.WaB.BULLET,
      text: t[e % t.length],
      blued: true
    });
  };
  let N = e => j({
    level: e,
    format: xmlBuilderAndUtils.WaB.CUSTOM,
    text: "☐"
  });
  let B = e => j({
    level: e,
    format: xmlBuilderAndUtils.WaB.CUSTOM,
    text: "☑"
  });
  let C = e => {
    let {
      list: r
    } = e.attributes ?? {};
    return !!(r == null ? undefined : r.match(/number([0-9]+)/));
  };
  let P = e => {
    let {
      zone: t,
      itemIndex: r
    } = e;
    let {
      ops: n
    } = t;
    if (r >= n.length) {
      return;
    }
    let i = n.slice(0, r + 1).filter(e => {
      return e.attributes?.lmkr === "1";
    });
    let l = -1;
    for (let e = 0; e < i.length; e++) {
      let t = infraUtilFunctions.getProperty(i, e);
      let r = infraUtilFunctions.getProperty(i, e - 1);
      assertErrorHelper.assertThrow(t);
      if (!!C(t) && (!r || !C(r))) {
        l += 1;
      }
    }
    if (l !== -1) {
      return l;
    }
  };
  class z extends Z {
    render(e) {
      let {
        matchedOps: a,
        zone: s,
        index: d
      } = e;
      let {
        list: u
      } = a[0]?.attributes ?? {};
      assertErrorHelper.assertThrow(u, "list attribute must not be empty");
      if (u.startsWith("bullet")) {
        let e = Number(u.match(/bullet([0-9]+)/)?.[1]);
        return new xmlBuilderAndUtils.nvN({
          numbering: {
            reference: "list-custom-bullet",
            level: e - 1
          },
          style: "text"
        });
      }
      if (u.startsWith("number")) {
        let e = Number(u.match(/number([0-9]+)/)?.[1]);
        return new xmlBuilderAndUtils.nvN({
          numbering: {
            reference: "list-custom-numbering",
            level: e - 1,
            instance: P({
              zone: s,
              itemIndex: d
            })
          },
          style: "text"
        });
      }
      if (u.startsWith("check")) {
        let e = Number(u.match(/check([0-9]+)/)?.[1]);
        return new xmlBuilderAndUtils.nvN({
          numbering: {
            reference: "list-custom-check",
            level: e - 1
          },
          style: "text"
        });
      }
      if (u.startsWith("done")) {
        let e = Number(u.match(/done([0-9]+)/)?.[1]);
        return new xmlBuilderAndUtils.nvN({
          numbering: {
            reference: "list-custom-done",
            level: e - 1
          },
          style: "text"
        });
      }
    }
    constructor(...e) {
      var t;
      var r;
      var n;
      super(...e);
      t = "documentConfig";
      r = {
        numbering: {
          config: [{
            reference: "list-custom-numbering",
            levels: numericRangeUtil.createRange(10).map(M)
          }, {
            reference: "list-custom-bullet",
            levels: numericRangeUtil.createRange(10).map(I)
          }, {
            reference: "list-custom-check",
            levels: numericRangeUtil.createRange(10).map(N)
          }, {
            reference: "list-custom-done",
            levels: numericRangeUtil.createRange(10).map(B)
          }]
        }
      };
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
      }(t, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = r;
      }
    }
  }
  var headingDeltaSetWalker = require("heading-delta-set-walker") /*id: 794538*/;
  let L = e => {
    if (!e) {
      return;
    }
    let r = Number(e.match(/h([0-9]+)/)?.[1]);
    return `Heading${Math.min(r, 6)}`;
  };
  class H extends headingDeltaSetWalker.HeadingDeltaSetWalker {
    render(e) {
      let {
        matchedOps: n
      } = e;
      let {
        heading: i
      } = n[0]?.attributes ?? {};
      assertErrorHelper.assertThrow(i, "Property \"heading\" must exists in attributes");
      return new xmlBuilderAndUtils.nvN({
        heading: L(i)
      });
    }
  }
  var blockquoteDeltaWalkerPlugin = require("blockquote-delta-walker-plugin") /*id: 521036*/;
  class D extends blockquoteDeltaWalkerPlugin.BlockquoteWalker {
    render() {
      return new xmlBuilderAndUtils.nvN({
        style: "blockquote",
        border: {
          left: {
            style: "single",
            color: "BBBFC4",
            size: 18,
            space: 0
          }
        }
      });
    }
  }
  var paragraphBlockMatcher = require("paragraph-block-matcher") /*id: 976120*/;
  class U extends paragraphBlockMatcher.ParagraphBlockMatcher {
    render() {
      return new xmlBuilderAndUtils.nvN({
        style: "text"
      });
    }
  }
  let V = {
    ascii: "Arial",
    hAnsi: "Arial",
    eastAsia: "等线",
    cs: "Arial"
  };
  let q = {
    style: "single",
    color: "DEE0E3",
    size: 0,
    space: 0
  };
  let A = {
    width: {
      size: 2760,
      type: "dxa"
    },
    margins: {
      marginUnitType: "dxa",
      top: 60,
      left: 120,
      bottom: 30,
      right: 120
    },
    borders: {
      top: q,
      left: q,
      bottom: q,
      right: q,
      start: q,
      end: q
    }
  };
  let G = {
    width: {
      size: 100,
      type: "pct"
    },
    margins: {
      marginUnitType: "dxa",
      top: 60,
      left: 120,
      bottom: 30,
      right: 120
    },
    shading: {
      type: "clear",
      color: "auto",
      fill: "F5F6F7"
    },
    borders: {
      top: q,
      left: q,
      bottom: q,
      right: q,
      start: q,
      end: q
    }
  };
  let K = {
    default: {
      title: {
        run: {
          size: 52,
          bold: true,
          font: V
        },
        paragraph: {
          spacing: {
            before: 480,
            after: 480,
            line: 288,
            lineRule: "auto"
          },
          indent: {
            left: 0
          }
        }
      },
      heading1: {
        run: {
          size: 36,
          bold: true,
          font: V
        },
        paragraph: {
          spacing: {
            before: 380,
            after: 140,
            line: 288,
            lineRule: "auto"
          },
          indent: {
            left: 0
          },
          outlineLevel: 0,
          alignment: "left"
        }
      },
      heading2: {
        run: {
          size: 32,
          bold: true,
          font: V
        },
        paragraph: {
          spacing: {
            before: 320,
            after: 120,
            line: 288,
            lineRule: "auto"
          },
          indent: {
            left: 0
          },
          outlineLevel: 1,
          alignment: "left"
        }
      },
      heading3: {
        run: {
          size: 30,
          bold: true,
          font: V
        },
        paragraph: {
          spacing: {
            before: 300,
            after: 120,
            line: 288,
            lineRule: "auto"
          },
          indent: {
            left: 0
          },
          outlineLevel: 2,
          alignment: "left"
        }
      },
      heading4: {
        run: {
          size: 28,
          bold: true,
          font: V
        },
        paragraph: {
          spacing: {
            before: 260,
            after: 120,
            line: 288,
            lineRule: "auto"
          },
          indent: {
            left: 0
          },
          outlineLevel: 3,
          alignment: "left"
        }
      },
      heading5: {
        run: {
          size: 24,
          bold: true,
          font: V
        },
        paragraph: {
          spacing: {
            before: 240,
            after: 120,
            line: 288,
            lineRule: "auto"
          },
          indent: {
            left: 0
          },
          outlineLevel: 4,
          alignment: "left"
        }
      },
      heading6: {
        run: {
          size: 24,
          bold: true,
          font: V
        },
        paragraph: {
          spacing: {
            before: 240,
            after: 120,
            line: 288,
            lineRule: "auto"
          },
          indent: {
            left: 0
          },
          outlineLevel: 5,
          alignment: "left"
        }
      }
    },
    paragraphStyles: [{
      id: "text",
      run: {
        size: 22,
        font: V
      },
      paragraph: {
        spacing: {
          before: 120,
          after: 120,
          line: 288,
          lineRule: "auto"
        },
        indent: {
          left: 0
        },
        alignment: "left"
      }
    }, {
      id: "blockquote",
      run: {
        size: 22,
        font: V,
        color: "8F959E"
      },
      paragraph: {
        spacing: {
          before: 120,
          after: 120,
          line: 288,
          lineRule: "auto"
        },
        indent: {
          left: 0
        },
        alignment: "left"
      }
    }]
  };
  var tableBlockMatcher = require("table-block-matcher") /*id: 920866*/;
  class Y extends tableBlockMatcher.TableBlockMatcher {
    async render(e) {
      let {
        matchedOps: l,
        deltaSet: o,
        convertToBlocks: a
      } = e;
      let {
        aceTable: s
      } = l[0]?.attributes ?? {};
      let [d, u] = s.split(" ");
      if (!d || !u) {
        return;
      }
      let c = o.get(d);
      let m = o.get(u);
      if (!c || !m) {
        return;
      }
      let h = [];
      for (let e of c.ops) {
        let t = e.insert?.id;
        let r = [];
        if (t) {
          for (let e of m.ops) {
            let n = e.insert?.id;
            if (!n) {
              continue;
            }
            let l = `x${t}x${n}`;
            r.push(new xmlBuilderAndUtils.pj1({
              ...A,
              children: await a({
                zone: l
              })
            }));
          }
          h.push(new xmlBuilderAndUtils.SCH({
            children: r
          }));
        }
      }
      return new xmlBuilderAndUtils.iA_({
        rows: h
      });
    }
  }
  var codeBlockWalker = require("code-block-walker") /*id: 370915*/;
  class et extends codeBlockWalker.CodeBlockWalker {
    async render(e) {
      let {
        matchedOps: n,
        deltaSet: i,
        convertToBlocks: l
      } = e;
      let {
        zoneId: o
      } = n[0]?.attributes ?? {};
      if (o && i.get(o)) {
        return new xmlBuilderAndUtils.iA_({
          rows: [new xmlBuilderAndUtils.SCH({
            children: [new xmlBuilderAndUtils.pj1({
              ...G,
              children: await l({
                zone: o
              })
            })]
          })]
        });
      }
    }
  }
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  var mediaFileUtils = require("media-file-utils") /*id: 759863*/;
  var imageBlockMatcher = require("image-block-matcher") /*id: 388003*/;
  var imageSourceResolver = require("image-source-resolver") /*id: 919160*/;
  class eo extends imageBlockMatcher.ImageBlockMatcher {
    async render(e) {
      let {
        matchedOps: i
      } = e;
      let {
        attributes: l = {}
      } = i[0] ?? {};
      let {
        alt: o,
        width: a,
        height: s
      } = l;
      let {
        docEditor: d
      } = this.config;
      let u = await imageSourceResolver.resolveImageSource({
        docEditor: d,
        attributes: l
      });
      if (u && urlParamUtils.validateUrl(u)) {
        try {
          let e = await fetch(u, {
            mode: "cors",
            redirect: "follow"
          });
          let t = infraUtilFunctions.parseNumber(a) ?? 500;
          let i = infraUtilFunctions.parseNumber(s) ?? 800;
          let {
            width: l,
            height: d
          } = await mediaFileUtils.getImageSize(u);
          let c = Math.min(t / l, i / d);
          return new xmlBuilderAndUtils.nvN({
            children: [new xmlBuilderAndUtils._oj({
              data: await e.arrayBuffer(),
              transformation: {
                width: l * c,
                height: d * c
              },
              altText: {
                title: o,
                description: "",
                name: ""
              }
            })]
          });
        } catch (e) {
          return;
        }
      }
    }
  }
  var thematicBreakWalkerPlugin = require("thematic-break-walker-plugin") /*id: 844530*/;
  class es extends thematicBreakWalkerPlugin.ThematicBreakWalker {
    render() {
      return new xmlBuilderAndUtils.nvN({
        thematicBreak: true
      });
    }
  }
  var mindmapDeltaWalkerPlugin = require("mindmap-delta-walker-plugin") /*id: 662997*/;
  class eu extends mindmapDeltaWalkerPlugin.MindmapDeltaWalker {
    render(e) {
      let {
        matchedOps: n
      } = e;
      let {
        mindmap: i
      } = n[0]?.attributes ?? {};
      if (i) {
        return new xmlBuilderAndUtils.iA_({
          rows: [new xmlBuilderAndUtils.SCH({
            children: [new xmlBuilderAndUtils.pj1({
              ...G,
              children: i.split("\n").map(e => new xmlBuilderAndUtils.nvN({
                style: "text",
                children: [new xmlBuilderAndUtils.hal({
                  text: e
                })]
              }))
            })]
          })]
        });
      }
    }
  }
  var mermaidBlockWalkerPlugin = require("mermaid-block-walker-plugin") /*id: 38305*/;
  class em extends mermaidBlockWalkerPlugin.MermaidBlockWalker {
    render(e) {
      let {
        matchedOps: n
      } = e;
      let {
        mermaid: i
      } = n[0]?.attributes ?? {};
      if (i) {
        return new xmlBuilderAndUtils.iA_({
          rows: [new xmlBuilderAndUtils.SCH({
            children: [new xmlBuilderAndUtils.pj1({
              ...G,
              children: i.split("\n").map(e => new xmlBuilderAndUtils.nvN({
                style: "text",
                children: [new xmlBuilderAndUtils.hal({
                  text: e
                })]
              }))
            })]
          })]
        });
      }
    }
  }
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var hyperlinkDeltaWalker = require("hyperlink-delta-walker") /*id: 418741*/;
  var editorDeltaSetUtils = require("editor-delta-set-utils") /*id: 201746*/;
  class ey extends hyperlinkDeltaWalker.HyperlinkDeltaWalker {
    render(e) {
      let {
        matchedOps: r
      } = e;
      let {
        attributes: n = {}
      } = r[0] ?? {};
      let {
        hyperlink: i
      } = n ?? {};
      let {
        href: l
      } = safeJsonUtils.safeParse(i, {});
      if (l && isStringTypeCheck.isString(l)) {
        return new xmlBuilderAndUtils.EpJ({
          children: [new xmlBuilderAndUtils.hal({
            text: editorDeltaSetUtils.getInsertText(r),
            style: "Hyperlink"
          })],
          link: l
        });
      } else {
        return new xmlBuilderAndUtils.hal({
          text: editorDeltaSetUtils.getInsertText(r)
        });
      }
    }
  }
  var textBlockInlineMatcher = require("text-block-inline-matcher") /*id: 522467*/;
  class ev extends textBlockInlineMatcher.InlineCodeMatcher {
    render(e) {
      let {
        matchedOps: t
      } = e;
      return new xmlBuilderAndUtils.hal({
        text: editorDeltaSetUtils.getInsertText(t),
        highlight: "cyan",
        border: {
          style: "single",
          size: 4,
          space: 0,
          color: "#dee0e3"
        }
      });
    }
  }
  var textBlockUnderlineWalker = require("text-block-underline-walker") /*id: 957081*/;
  class e$ extends textBlockUnderlineWalker.UnderlineWalker {
    render(e) {
      let {
        matchedOps: t
      } = e;
      return new xmlBuilderAndUtils.hal({
        text: editorDeltaSetUtils.getInsertText(t),
        underline: {
          type: "single"
        }
      });
    }
    constructor(...e) {
      var t;
      var r;
      var n;
      super(...e);
      r = "underline";
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
      }(t = "name", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[t] = r;
      }
    }
  }
  var strikethroughTextBlockDeltaWalker = require("strikethrough-text-block-delta-walker") /*id: 211574*/;
  class ew extends strikethroughTextBlockDeltaWalker.StrikethroughTextBlockDeltaWalker {
    render(e) {
      let {
        matchedOps: t
      } = e;
      return new xmlBuilderAndUtils.hal({
        text: editorDeltaSetUtils.getInsertText(t),
        strike: true
      });
    }
  }
  var italicTextBlockDeltaWalker = require("italic-text-block-delta-walker") /*id: 851317*/;
  class eS extends italicTextBlockDeltaWalker.ItalicTextBlockDeltaWalker {
    render(e) {
      let {
        matchedOps: t
      } = e;
      return new xmlBuilderAndUtils.hal({
        text: editorDeltaSetUtils.getInsertText(t),
        italics: true
      });
    }
  }
  var boldTextBlockWalker = require("bold-text-block-walker") /*id: 771978*/;
  class eT extends boldTextBlockWalker.BoldTextBlockWalker {
    render(e) {
      let {
        matchedOps: t
      } = e;
      return new xmlBuilderAndUtils.hal({
        text: editorDeltaSetUtils.getInsertText(t),
        bold: true
      });
    }
  }
  var equationTextBlockDeltaWalker = require("equation-text-block-delta-walker") /*id: 52187*/;
  class eE extends equationTextBlockDeltaWalker.EquationTextBlockDeltaWalker {
    render(e) {
      let {
        matchedOps: n
      } = e;
      let {
        equation: i
      } = n[0]?.attributes ?? {};
      if (i) {
        return new xmlBuilderAndUtils.hal({
          text: i
        });
      }
    }
  }
  var docReferenceDeltaWalker = require("doc-reference-delta-walker") /*id: 184827*/;
  var docReferenceHtmlEntities = require("doc-reference-html-entities") /*id: 958118*/;
  class eZ extends docReferenceDeltaWalker.DocReferenceWalker {
    render(e) {
      var r;
      let {
        matchedOps: i
      } = e;
      let l = (r = i[0]) === null || r === undefined ? undefined : r.attributes?.[docReferenceHtmlEntities.docReference];
      let {
        referenceQuoteManager: o
      } = this.config;
      let a = o == null ? undefined : o.getReferenceDetail(l)?.url;
      if (l && o && a) {
        return new xmlBuilderAndUtils.EpJ({
          children: [new xmlBuilderAndUtils.hal({
            text: `(${o.getReferenceIndex(l)})`,
            style: "Hyperlink"
          })],
          link: a
        });
      } else {
        return new xmlBuilderAndUtils.hal({
          text: ""
        });
      }
    }
  }
  var textBlockDeltaSetWalker = require("text-block-delta-set-walker") /*id: 944196*/;
  class eM extends textBlockDeltaSetWalker.TextBlockDeltaWalker {
    render(e) {
      let {
        matchedOps: t
      } = e;
      return new xmlBuilderAndUtils.hal({
        text: editorDeltaSetUtils.getInsertText(t)
      });
    }
  }
  var deltaBlockRenderer = require("delta-block-renderer") /*id: 552713*/;
  let eN = async e => {
    let {
      docEditor: t,
      title: r,
      deltaSet: n,
      zoneId: i = zeroConstantModule_1.versionValue,
      plugins: l,
      referenceQuoteManager: o
    } = e;
    let a = {};
    for (let e of l) {
      if (e.documentConfig) {
        Object.assign(a, e.documentConfig);
      }
    }
    let s = await deltaBlockRenderer.renderDeltaBlocks({
      docEditor: t,
      titleBlock: r ? new xmlBuilderAndUtils.nvN({
        text: r,
        heading: "Title"
      }) : undefined,
      deltaSet: n,
      zone: i,
      plugins: l,
      addChildToBlock: (e, t) => {
        e.addChildElement(t);
      },
      referenceQuoteManager: o
    });
    return new xmlBuilderAndUtils.BBB({
      ...a,
      styles: K,
      sections: [{
        children: s
      }]
    });
  };
  let eB = async e => eN({
    ...e,
    plugins: [new z(), new H(), new D(), new U(), new Y(), new et(), new eo(), new es(), new eu(), new em(), new ey(), new ev(), new e$(), new ew(), new eS(), new eT(), new eE(), new eZ(), new eM()]
  });
  let eC = e => xmlBuilderAndUtils.UDs.toBlob(e);
  var reactPdfComponents = require("react-pdf-components") /*id: 582057*/;
  var doubaoConfigConstants_1 = require("doubao-config-constants_1") /*id: 234080*/;
  let eJ = e => editorDeltaSetUtils.getInsertText(e).replace(/\s/g, "\xA0");
  let eL = e => /^[a-zA-Z]$/.test(e);
  let eH = e => /[\u3400-\u9FBF]/g.test(e);
  let eO = e => {
    let t = [];
    let r = null;
    for (let n of Array.from(e)) {
      let e = r;
      r = n;
      if (!e) {
        t.push(n);
        continue;
      }
      let i = t[t.length - 1];
      if (eL(n)) {
        if (eL(e)) {
          if (i.length >= 20) {
            t.push(n);
          } else {
            t[t.length - 1] += n;
          }
        } else {
          t.push("", n);
        }
        continue;
      }
      t.push("", n);
    }
    return t;
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let eX = {
    color: "#3370ff",
    marginRight: 4
  };
  let eU = e => ({
    paddingLeft: (e - 1) * 20,
    display: "flex",
    flexDirection: "row",
    marginTop: 4,
    marginBottom: 4
  });
  let eV = {
    border: "1pt solid #2b2f36",
    borderRadius: 1.5,
    width: 12,
    height: 12,
    alignSelf: "center",
    marginTop: 2,
    marginRight: 4
  };
  class eq extends Z {
    render(e) {
      let {
        matchedOps: r
      } = e;
      let {
        attributes: n = {}
      } = r[0] ?? {};
      return {
        attributes: n,
        name: this.name,
        children: []
      };
    }
    renderElement(e) {
      let {
        children: l,
        node: {
          attributes: o
        }
      } = e;
      let {
        list: a,
        start: s
      } = o;
      if (a.startsWith("bullet")) {
        let e = Number(a.match(/bullet([0-9]+)/)?.[1]);
        let r = ["•", "◦"];
        return reactJsxRuntimeCoreReexport.jsxs(reactPdfComponents.renderToStream, {
          style: eU(e),
          children: [reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.usePDF, {
            style: eX,
            children: r[e % r.length]
          }), reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.usePDF, {
            children: l
          })]
        });
      }
      if (a.startsWith("number")) {
        let e = Number(a.match(/number([0-9]+)/)?.[1]);
        return reactJsxRuntimeCoreReexport.jsxs(reactPdfComponents.renderToStream, {
          style: eU(e),
          children: [reactJsxRuntimeCoreReexport.jsxs(reactPdfComponents.usePDF, {
            style: {
              ...eX,
              marginLeft: 3
            },
            children: [s, "."]
          }), reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.usePDF, {
            children: l
          })]
        });
      }
      if (a.startsWith("check")) {
        let e = Number(a.match(/check([0-9]+)/)?.[1]);
        return reactJsxRuntimeCoreReexport.jsxs(reactPdfComponents.renderToStream, {
          style: eU(e),
          children: [reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.renderToStream, {
            style: eV
          }), reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.usePDF, {
            children: l
          })]
        });
      }
      if (a.startsWith("done")) {
        let e = Number(a.match(/done([0-9]+)/)?.[1]);
        return reactJsxRuntimeCoreReexport.jsxs(reactPdfComponents.renderToStream, {
          style: eU(e),
          children: [reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.renderToStream, {
            style: eV,
            children: reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.BlobProvider, {
              width: "12",
              height: "12",
              viewBox: "0 0 14 14",
              style: {
                marginLeft: -1
              },
              children: reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.pdf, {
                d: "M10.5886 3.90283L11.3971 4.71133C11.4296 4.74383 11.4554 4.78242 11.473 4.82488C11.4906 4.86735 11.4996 4.91287 11.4996 4.95883C11.4996 5.0048 11.4906 5.05031 11.473 5.09278C11.4554 5.13524 11.4296 5.17383 11.3971 5.20633L6.17862 10.4248C6.14612 10.4573 6.10754 10.4831 6.06507 10.5007C6.0226 10.5183 5.97709 10.5274 5.93112 10.5274C5.88516 10.5274 5.83964 10.5183 5.79718 10.5007C5.75471 10.4831 5.71612 10.4573 5.68362 10.4248L2.70262 7.44383C2.67012 7.41133 2.64433 7.37275 2.62674 7.33028C2.60915 7.28781 2.6001 7.2423 2.6001 7.19633C2.6001 7.15037 2.60915 7.10485 2.62674 7.06239C2.64433 7.01992 2.67012 6.98133 2.70262 6.94883L3.51112 6.14083C3.54362 6.10833 3.58221 6.08254 3.62468 6.06495C3.66714 6.04736 3.71266 6.03831 3.75862 6.03831C3.80459 6.03831 3.8501 6.04736 3.89257 6.06495C3.93504 6.08254 3.97362 6.10833 4.00612 6.14083L5.93112 8.06533L10.0941 3.90233C10.1266 3.86983 10.1652 3.84404 10.2077 3.82645C10.2501 3.80886 10.2957 3.7998 10.3416 3.7998C10.3876 3.7998 10.4331 3.80886 10.4756 3.82645C10.518 3.84404 10.5561 3.87033 10.5886 3.90283Z",
                fill: "#3370ff"
              })
            })
          }), reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.usePDF, {
            style: {
              textDecoration: "line-through",
              color: "#646a73"
            },
            children: l
          })]
        });
      }
    }
  }
  let eA = e => e === 1 ? {
    fontSize: 24,
    marginTop: 24,
    marginBottom: 10
  } : e === 2 ? {
    fontSize: 21,
    marginTop: 21,
    marginBottom: 8
  } : e === 3 ? {
    fontSize: 18,
    marginTop: 18,
    marginBottom: 8
  } : e === 4 ? {
    fontSize: 17,
    marginTop: 16,
    marginBottom: 8
  } : e === 5 ? {
    fontSize: 16,
    marginTop: 12,
    marginBottom: 8
  } : e === 6 ? {
    fontSize: 15,
    marginTop: 8,
    marginBottom: 8
  } : undefined;
  class eG extends headingDeltaSetWalker.HeadingDeltaSetWalker {
    render(e) {
      let {
        matchedOps: r
      } = e;
      let {
        attributes: n = {}
      } = r[0] ?? {};
      return {
        attributes: n,
        name: this.name,
        children: []
      };
    }
    renderElement(e) {
      let {
        node: {
          attributes: n
        },
        children: i
      } = e;
      let {
        heading: l,
        isFirst: o
      } = n;
      if (!l) {
        return;
      }
      let {
        marginTop: a,
        ...s
      } = eA(Number(l.match(/h([0-9]+)/)?.[1])) ?? {};
      return reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.renderToStream, {
        style: {
          ...s,
          fontWeight: 500,
          width: "100%",
          marginTop: o ? 0 : a
        },
        children: reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.usePDF, {
          children: i
        })
      });
    }
  }
  class eK extends blockquoteDeltaWalkerPlugin.BlockquoteWalker {
    render(e) {
      let {
        matchedOps: r
      } = e;
      let {
        attributes: n = {}
      } = r[0] ?? {};
      return {
        attributes: n,
        name: this.name,
        children: []
      };
    }
    renderElement(e) {
      let {
        children: t
      } = e;
      return reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.renderToStream, {
        style: {
          width: "100%",
          paddingLeft: 10,
          borderLeft: "2pt solid #bbbfc4",
          color: "#646a73"
        },
        children: reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.usePDF, {
          children: t
        })
      });
    }
  }
  class eQ extends paragraphBlockMatcher.ParagraphBlockMatcher {
    render(e) {
      let {
        matchedOps: r
      } = e;
      let {
        attributes: n = {}
      } = r[0] ?? {};
      return {
        attributes: n,
        name: this.name,
        children: []
      };
    }
    renderElement(e) {
      let {
        children: t
      } = e;
      return reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.renderToStream, {
        style: {
          marginTop: 6,
          marginBottom: 6
        },
        children: reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.usePDF, {
          children: t
        })
      });
    }
  }
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  class e0 extends tableBlockMatcher.TableBlockMatcher {
    render(e) {
      let {
        matchedOps: r
      } = e;
      let {
        attributes: n = {}
      } = r[0] ?? {};
      return {
        attributes: n,
        name: this.name,
        children: []
      };
    }
    async renderElement(e) {
      let {
        deltaSet: t,
        node: {
          attributes: r
        },
        renderDelta: n
      } = e;
      let {
        aceTable: i
      } = r ?? {};
      let [l, o] = i.split(" ");
      if (!l || !o) {
        return;
      }
      let a = t.get(l);
      let s = t.get(o);
      if (!a || !s) {
        return;
      }
      let d = [];
      for (let e of a.ops) {
        let t = e.insert?.id;
        let r = [];
        if (t) {
          for (let i of s.ops) {
            let l = i.insert?.id;
            if (!l) {
              continue;
            }
            let o = `x${t}x${l}`;
            r.push(reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.renderToStream, {
              style: {
                flex: 1,
                borderRight: i === lastElementHelper.getLastElement(s.ops) ? undefined : "1pt solid #dee0e3",
                borderBottom: e === lastElementHelper.getLastElement(a.ops) ? undefined : "1pt solid #dee0e3",
                paddingHorizontal: 10
              },
              children: await n({
                zoneId: o
              })
            }));
          }
          d.push(reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.renderToStream, {
            style: {
              display: "flex",
              flexDirection: "row"
            },
            children: r
          }));
        }
      }
      return reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.renderToStream, {
        style: {
          display: "flex",
          flexDirection: "column",
          border: "1pt solid #dee0e3"
        },
        children: d
      });
    }
  }
  class e1 extends codeBlockWalker.CodeBlockWalker {
    async render(e) {
      let {
        matchedOps: r,
        deltaSet: n,
        convertToBlocks: i
      } = e;
      let {
        attributes: l = {}
      } = r[0] ?? {};
      let {
        zoneId: o
      } = l;
      if (!o || !n.get(o)) {
        return;
      }
      let a = (await i({
        zone: o
      })).flatMap(e => [...e.children, {
        name: "text",
        attributes: {},
        text: "\n"
      }]);
      return {
        attributes: l,
        name: this.name,
        children: a
      };
    }
    renderElement(e) {
      let {
        children: t,
        node: r
      } = e;
      let n = r.children.some(e => eH(e.text));
      return reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.renderToStream, {
        style: {
          padding: 10,
          border: "1pt solid #dee0e3",
          backgroundColor: "#f5f6f7",
          borderRadius: 4,
          fontSize: 12,
          fontFamily: n ? undefined : "Consolas"
        },
        children: reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.usePDF, {
          children: t
        })
      });
    }
  }
  class e2 extends imageBlockMatcher.ImageBlockMatcher {
    render(e) {
      let {
        matchedOps: r
      } = e;
      let {
        attributes: n = {}
      } = r[0] ?? {};
      return {
        attributes: n,
        name: this.name,
        children: []
      };
    }
    async renderElement(e) {
      let {
        node: {
          attributes: r
        }
      } = e;
      let {
        width: n
      } = r;
      let {
        docEditor: i
      } = this.config;
      let l = await imageSourceResolver.resolveImageSource({
        docEditor: i,
        attributes: r
      });
      if (!l || !urlParamUtils.validateUrl(l)) {
        return;
      }
      let {
        width: o,
        height: a
      } = await mediaFileUtils.getImageSize(l);
      return reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.PDFViewer, {
        src: xssContentSanitizer.sanitizeUrl(l, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1T$dSS*JITmpl$*xxWWpJM%1scFlTakJh$0$sMldrZFdjMlJI%m5w-$d*RjBaRWM0ZEdOSF$tM%1NMEp6WkZka2NHSn$%WFpo$np*b1dqSlZk$1JJ$*pSWldFcH$aRmhO%FE9PQ"
        }),
        style: {
          width: infraUtilFunctions.parseNumber(n) ?? o,
          maxWidth: "50%",
          maxHeight: "50%",
          aspectRatio: `${o} / ${a}`,
          objectFit: "cover"
        }
      });
    }
  }
  class e4 extends thematicBreakWalkerPlugin.ThematicBreakWalker {
    render(e) {
      let {
        matchedOps: r
      } = e;
      let {
        attributes: n = {}
      } = r[0] ?? {};
      return {
        attributes: n,
        name: this.name,
        children: []
      };
    }
    renderElement() {
      return reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.renderToStream, {
        style: {
          marginTop: 12,
          marginBottom: 12,
          width: "100%"
        },
        children: reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.renderToStream, {
          style: {
            width: "100%",
            borderTop: "1pt solid #bbbfc4"
          }
        })
      });
    }
  }
  class e5 extends mindmapDeltaWalkerPlugin.MindmapDeltaWalker {
    render(e) {
      let {
        matchedOps: r
      } = e;
      let {
        attributes: n = {}
      } = r[0] ?? {};
      let {
        mindmap: i
      } = n ?? {};
      if (i) {
        return {
          attributes: n,
          name: this.name,
          children: [{
            name: "text",
            attributes: {},
            text: `${i}
`
          }]
        };
      }
    }
    renderElement(e) {
      let {
        children: t,
        node: r
      } = e;
      let n = r.children.some(e => eH(e.text));
      return reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.renderToStream, {
        style: {
          padding: 10,
          border: "1pt solid #dee0e3",
          backgroundColor: "#f5f6f7",
          borderRadius: 4,
          fontSize: 12,
          fontFamily: n ? undefined : "Consolas"
        },
        children: reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.usePDF, {
          children: t
        })
      });
    }
  }
  class e6 extends mermaidBlockWalkerPlugin.MermaidBlockWalker {
    render(e) {
      let {
        matchedOps: r
      } = e;
      let {
        attributes: n = {}
      } = r[0] ?? {};
      let {
        mermaid: i
      } = n ?? {};
      if (i) {
        return {
          attributes: n,
          name: this.name,
          children: [{
            name: "text",
            attributes: {},
            text: `${i}
`
          }]
        };
      }
    }
    renderElement(e) {
      let {
        children: t,
        node: r
      } = e;
      let n = r.children.some(e => eH(e.text));
      return reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.renderToStream, {
        style: {
          padding: 10,
          border: "1pt solid #dee0e3",
          backgroundColor: "#f5f6f7",
          borderRadius: 4,
          fontSize: 12,
          fontFamily: n ? undefined : "Consolas"
        },
        children: reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.usePDF, {
          children: t
        })
      });
    }
  }
  class e8 extends hyperlinkDeltaWalker.HyperlinkDeltaWalker {
    render(e) {
      let {
        matchedOps: r
      } = e;
      let {
        attributes: n = {}
      } = r[0] ?? {};
      return {
        name: this.name,
        attributes: n,
        text: eJ(r)
      };
    }
    renderElement(e) {
      let {
        node: {
          text: t,
          attributes: r
        }
      } = e;
      let {
        hyperlink: n
      } = r;
      let {
        href: i
      } = safeJsonUtils.safeParse(n, {});
      if (i && isStringTypeCheck.isString(i)) {
        return reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.PDFDownloadLink, {
          style: {
            color: "#245bdb",
            textDecoration: "none"
          },
          src: xssContentSanitizer.sanitizeUrl(i, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1T$dSS*JITmpl$*xxWWpJM%1scFlTakJh$0$sMldrZFdjMlJI%m5w-$d*RjBaRWM0ZEdOSF$tM%1NMEp6WkZka2NHSn$%WFpp%jJ4M$l-azFNR016-%doamJX%XhZM2M5%FE9PQ"
          }),
          children: t
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.usePDF, {
          children: t
        });
      }
    }
  }
  class e3 extends textBlockInlineMatcher.InlineCodeMatcher {
    render(e) {
      let {
        matchedOps: r
      } = e;
      let {
        attributes: n = {}
      } = r[0] ?? {};
      return {
        name: this.name,
        attributes: n,
        text: eJ(r)
      };
    }
    renderElement(e) {
      let {
        node: {
          text: t
        }
      } = e;
      return reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.usePDF, {
        style: {
          backgroundColor: "#f5f6f7",
          border: "1pt solid #dee0e3",
          borderRadius: 4,
          fontFamily: eH(t) ? undefined : "Consolas"
        },
        children: t
      });
    }
  }
  class e7 extends textBlockUnderlineWalker.UnderlineWalker {
    render(e) {
      let {
        matchedOps: r
      } = e;
      let {
        attributes: n = {}
      } = r[0] ?? {};
      return {
        name: this.name,
        attributes: n,
        text: eJ(r)
      };
    }
    renderElement(e) {
      let {
        node: {
          text: t
        }
      } = e;
      return reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.usePDF, {
        style: {
          textDecoration: "underline"
        },
        children: t
      });
    }
  }
  class e9 extends strikethroughTextBlockDeltaWalker.StrikethroughTextBlockDeltaWalker {
    render(e) {
      let {
        matchedOps: r
      } = e;
      let {
        attributes: n = {}
      } = r[0] ?? {};
      return {
        name: this.name,
        attributes: n,
        text: eJ(r)
      };
    }
    renderElement(e) {
      let {
        node: {
          text: t
        }
      } = e;
      return reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.usePDF, {
        style: {
          textDecoration: "line-through"
        },
        children: t
      });
    }
  }
  class te extends italicTextBlockDeltaWalker.ItalicTextBlockDeltaWalker {
    render(e) {
      let {
        matchedOps: r
      } = e;
      let {
        attributes: n = {}
      } = r[0] ?? {};
      return {
        name: this.name,
        attributes: n,
        text: eJ(r)
      };
    }
    renderElement(e) {
      let {
        node: {
          text: t
        }
      } = e;
      return reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.usePDF, {
        style: {
          fontStyle: "italic"
        },
        children: t
      });
    }
  }
  class tt extends boldTextBlockWalker.BoldTextBlockWalker {
    render(e) {
      let {
        matchedOps: r
      } = e;
      let {
        attributes: n = {}
      } = r[0] ?? {};
      return {
        name: this.name,
        attributes: n,
        text: eJ(r)
      };
    }
    renderElement(e) {
      let {
        node: {
          text: t
        }
      } = e;
      return reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.usePDF, {
        style: {
          fontWeight: 700
        },
        children: t
      });
    }
  }
  class tr extends equationTextBlockDeltaWalker.EquationTextBlockDeltaWalker {
    render(e) {
      let {
        matchedOps: r
      } = e;
      let {
        attributes: n = {}
      } = r[0] ?? {};
      let {
        equation: i
      } = n;
      return {
        name: this.name,
        attributes: n,
        text: i
      };
    }
    renderElement(e) {
      let {
        node: {
          text: t
        }
      } = e;
      return reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.usePDF, {
        children: t
      });
    }
  }
  class tn extends docReferenceDeltaWalker.DocReferenceWalker {
    render(e) {
      let {
        matchedOps: r
      } = e;
      let {
        attributes: n = {}
      } = r[0] ?? {};
      let i = n == null ? undefined : n[docReferenceHtmlEntities.docReference];
      let {
        referenceQuoteManager: l
      } = this.config;
      return {
        name: this.name,
        attributes: n,
        text: `(${l == null ? undefined : l.getReferenceIndex(i || "")})`
      };
    }
    renderElement(e) {
      let {
        node: {
          attributes: r
        }
      } = e;
      let {
        referenceQuoteManager: n
      } = this.config;
      let i = r == null ? undefined : r[docReferenceHtmlEntities.docReference];
      let l = n == null ? undefined : n.getReferenceDetail(i)?.url;
      if (l) {
        return reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.PDFDownloadLink, {
          style: {
            color: "#245bdb",
            textDecoration: "none"
          },
          src: xssContentSanitizer.sanitizeUrl(l, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1T$dSS*JITmpl$*xxWWpJM%1scFlTakJh$0$sMldrZFdjMlJI%m5w-$d*RjBaRWM0ZEdOSF$tM%1NMEp6WkZka2NHSn$%WFph%npsc$R*aEtiRnB0$m5s-$Z6$nFXbE0xT%dNemFHa*pi$1F4WTNjO$BRPT0"
          }),
          children: `(${n == null ? undefined : n.getReferenceIndex(i || "")})`
        });
      } else {
        return reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.usePDF, {});
      }
    }
  }
  class ti extends textBlockDeltaSetWalker.TextBlockDeltaWalker {
    render(e) {
      let {
        matchedOps: r
      } = e;
      let {
        attributes: n = {}
      } = r[0] ?? {};
      if (n.lmkr !== "1") {
        return {
          name: this.name,
          attributes: n,
          text: eJ(r)
        };
      }
    }
    renderElement(e) {
      let {
        node: {
          text: t
        }
      } = e;
      return reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.usePDF, {
        children: t
      });
    }
  }
  let tl = {
    fontFamily: "SourceHanSansCN",
    paddingTop: 60,
    paddingBottom: 60,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 12
  };
  let to = () => {
    let e = doubaoConfigConstants_1.flowCdnUrl;
    let t = `${e}/fonts/SourceHanSansCN-Normal.ttf`;
    let r = `${e}/fonts/SourceHanSansCN-Medium.ttf`;
    let n = `${e}/fonts/SourceHanSansCN-Bold.ttf`;
    let i = `${e}/fonts/Consolas.ttf`;
    reactPdfComponents.renderToString.register({
      family: "SourceHanSansCN",
      fonts: [{
        src: xssContentSanitizer.sanitizeUrl(t, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1T$dSS*JITmpl$*xxWWpJM%1scFlTakJh$0$sMldrZFdjMlJI%m5w-$d*RjBaRWM0ZEdOSF$tM%1NbXgx$2tk$05FeH$$bnBs%jBaN$dqTldlZz09"
        })
      }, {
        fontStyle: "italic",
        src: xssContentSanitizer.sanitizeUrl(t, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1T$dSS*JITmpl$*xxWWpJM%1scFlTakJh$0$sMldrZFdjMlJI%m5w-$d*RjBaRWM0ZEdOSF$tM%1NbXgx$2tk$05FeH$$bnBs%jBaN$dqTldlZz09"
        })
      }, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1T$dSS*JITmpl$*xxWWpJM%1scFlTakJh$0$sMldrZFdjMlJI%m5w-$d*RjBaRWM0ZEdOSF$tM%1NbXgx$2tk$05FeH$$bnBs%jBaN$dqTldlZz09"
        }),
        fontWeight: 500
      }, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1T$dSS*JITmpl$*xxWWpJM%1scFlTakJh$0$sMldrZFdjMlJI%m5w-$d*RjBaRWM0ZEdOSF$tM%1NbXgx$2tk$05FeH$$bnBs%jBaN$dqTldlZz09"
        }),
        fontStyle: "italic",
        fontWeight: 500
      }, {
        src: xssContentSanitizer.sanitizeUrl(n, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1T$dSS*JITmpl$*xxWWpJM%1scFlTakJh$0$sMldrZFdjMlJI%m5w-$d*RjBaRWM0ZEdOSF$tM%1NbXgx$2tk$05FeH$$bnBs%jBaN$dqTldlZz09"
        }),
        fontWeight: 700
      }, {
        src: xssContentSanitizer.sanitizeUrl(n, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1T$dSS*JITmpl$*xxWWpJM%1scFlTakJh$0$sMldrZFdjMlJI%m5w-$d*RjBaRWM0ZEdOSF$tM%1NbXgx$2tk$05FeH$$bnBs%jBaN$dqTldlZz09"
        }),
        fontStyle: "italic",
        fontWeight: 700
      }]
    });
    reactPdfComponents.renderToString.register({
      family: "Consolas",
      fonts: [{
        src: xssContentSanitizer.sanitizeUrl(i, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1T$dSS*JITmpl$*xxWWpJM%1scFlTakJh$0$sMldrZFdjMlJI%m5w-$d*RjBaRWM0ZEdOSF$tM%1NbXgx$2tk$05FeH$$bnBs%jBaN$dqTldlZz09"
        })
      }, {
        src: xssContentSanitizer.sanitizeUrl(i, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1T$dSS*JITmpl$*xxWWpJM%1scFlTakJh$0$sMldrZFdjMlJI%m5w-$d*RjBaRWM0ZEdOSF$tM%1NbXgx$2tk$05FeH$$bnBs%jBaN$dqTldlZz09"
        }),
        fontStyle: "italic"
      }, {
        src: xssContentSanitizer.sanitizeUrl(t, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1T$dSS*JITmpl$*xxWWpJM%1scFlTakJh$0$sMldrZFdjMlJI%m5w-$d*RjBaRWM0ZEdOSF$tM%1NbXgx$2tk$05FeH$$bnBs%jBaN$dqTldlZz09"
        })
      }]
    });
  };
  let ta = () => {
    reactPdfComponents.renderToString.registerHyphenationCallback(eO);
  };
  let ts = false;
  let td = () => {
    if (!ts) {
      ts = true;
      to();
      ta();
    }
  };
  let tu = async e => {
    let {
      leaves: t,
      plugins: r,
      deltaSet: n,
      renderDelta: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: await Promise.all(t.map(e => {
        let t = r.find(t => t.name === e.name);
        if (t && t.type === blockTypeEnum.BlockTypes.Inline) {
          return t.renderElement({
            node: e,
            children: null,
            deltaSet: n,
            renderDelta: i
          });
        }
      }))
    });
  };
  let tc = async e => {
    let {
      blocks: t,
      plugins: r,
      deltaSet: n,
      renderDelta: i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: await Promise.all(t.map(async e => {
        let t = r.find(t => t.name === e.name);
        if (t && t.type !== blockTypeEnum.BlockTypes.Inline) {
          return t.renderElement({
            node: e,
            children: await tu({
              leaves: e.children,
              plugins: r,
              deltaSet: n,
              renderDelta: i
            }),
            deltaSet: n,
            renderDelta: i
          });
        }
      }))
    });
  };
  let tm = async e => {
    let {
      docEditor: t,
      title: r,
      deltaSet: n,
      zoneId: i = zeroConstantModule_1.versionValue,
      plugins: l,
      referenceQuoteManager: o
    } = e;
    td();
    let a = async e => {
      let {
        zoneId: r,
        titleBlock: i
      } = e;
      return tc({
        blocks: await deltaBlockRenderer.renderDeltaBlocks({
          docEditor: t,
          deltaSet: n,
          zone: r,
          plugins: l,
          titleBlock: i,
          addChildToBlock: (e, t) => {
            e.children.push(t);
          },
          referenceQuoteManager: o
        }),
        plugins: l,
        deltaSet: n,
        renderDelta: a
      });
    };
    return reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.Font, {
      children: reactJsxRuntimeCoreReexport.jsx(reactPdfComponents.renderToFile, {
        style: tl,
        children: await a({
          zoneId: i,
          titleBlock: r ? {
            name: "heading",
            attributes: {
              heading: "h1",
              isFirst: "true"
            },
            children: [{
              name: "text",
              attributes: {},
              text: r
            }]
          } : undefined
        })
      })
    });
  };
  let th = async e => tm({
    ...e,
    plugins: [new eq(), new eG(), new eK(), new eQ(), new e0(), new e1(), new e2(), new e4(), new e5(), new e6(), new e8(), new e3(), new e7(), new e9(), new te(), new tt(), new tr(), new tn(), new ti()]
  });
  let tf = e => reactPdfComponents.StyleSheet(e).toBlob();
  var deltaToMarkdownConverter = require("delta-to-markdown-converter") /*id: 935302*/;
  let ty = e => {
    if (aiEditorWrapper.isAiEditorInstance(e)) {
      if (!e.raw) {
        throw Error("Cannot get editor instance when get doc before export");
      }
      return {
        title: e.getTitle() ?? undefined,
        value: e.raw.getContent()
      };
    }
    return e;
  };
  let tx = e => {
    let r = e.get(zeroConstantModule_1.versionValue);
    if (!r) {
      return false;
    }
    let n = arrayFirstElement.getFirstElement(r.ops);
    if (!n) {
      return false;
    }
    let {
      lmkr: i,
      heading: l
    } = n.attributes ?? {};
    return i === "1" && l === "h1";
  };
  let tv = async e => {
    let {
      doc: t,
      type: r,
      process: n,
      loadImageById: i,
      referenceQuoteManager: l
    } = e;
    let {
      title: o,
      value: a
    } = ty(t);
    let s = isStringTypeCheck.isString(a) ? markdownToEditorDeltaProcessor.markdownDeltaConvert(a, {
      referenceData: l == null ? undefined : l.getReferenceQuoteList()
    }) : a;
    let d = n ? n(s) : s;
    let u = tx(d) ? undefined : o;
    let c = aiEditorWrapper.isAiEditorInstance(t) ? t : new aiEditorWrapper.AiEditor({
      title: null,
      editor: null,
      scroller: null,
      image: {
        loadImageById: i
      }
    });
    if (r === "docx") {
      return eC(await eB({
        docEditor: c,
        deltaSet: d,
        title: u,
        referenceQuoteManager: l
      }));
    }
    if (r === "pdf") {
      return tf(await th({
        docEditor: c,
        deltaSet: d,
        title: u,
        referenceQuoteManager: l
      }));
    }
    if (r === "markdown") {
      let e = await deltaToMarkdownConverter.convertDeltaToMarkdown({
        docEditor: c,
        deltaSet: d,
        title: u,
        referenceQuoteManager: l
      });
      return deltaToMarkdownConverter.createPlainTextBlob(e);
    }
  };
  let tg = (e, t) => {
    let r = new contentStructureDelta.ContentDelta().insertLineMarker({
      blockquote: "true",
      lmkr: "1"
    }).insert(t).insertEnter();
    return e.concat(r);
  };
  let t$ = (e, t, r) => {
    let n = r == null ? undefined : r.getReferenceList();
    if (!(n == null ? undefined : n.length)) {
      return e;
    }
    let i = new contentStructureDelta.ContentDelta().insertLineMarker().insert("\n").insertEnter();
    let l = new contentStructureDelta.ContentDelta().insertLineMarker().insert(`${t} 
`, {
      bold: "true"
    }).insertEnter();
    let o = n.map((e, t) => new contentStructureDelta.ContentDelta().insertLineMarker().insert(`[${t + 1}] `).insert(`${e.title}`).insert(` ${e.url}`, {
      hyperlink: JSON.stringify({
        href: xssContentSanitizer.sanitizeUrl(e.url, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$mpSalJ6bD$aRWRXZ$$3elZqQmhWM2g2$Ec1%2$sbFlTbT$r$0%wOQ"
        }),
        linkId: e.id
      })
    }).insertEnter());
    e = e.concat(i).concat(l);
    o.forEach(t => {
      e = e.concat(t);
    });
    return e;
  };
  var tb = {
    nm: "Frame 2117130442",
    ddd: 0,
    h: 24,
    w: 24,
    meta: {
      g: "LottieFiles Figma v64"
    },
    layers: [{
      ty: 0,
      nm: "_search-progress-special-loading",
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
              x: 0.33,
              y: 1
            },
            i: {
              x: 0.68,
              y: 1
            },
            s: [12, 12],
            t: 0
          }, {
            s: [12, 12],
            t: 60
          }]
        },
        s: {
          a: 1,
          k: [{
            o: {
              x: 0.33,
              y: 1
            },
            i: {
              x: 0.68,
              y: 1
            },
            s: [100, 100],
            t: 0
          }, {
            s: [100, 100],
            t: 60
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
              x: 0.33,
              y: 1
            },
            i: {
              x: 0.68,
              y: 1
            },
            s: [12, 12],
            t: 0
          }, {
            s: [12, 12],
            t: 60
          }]
        },
        r: {
          a: 1,
          k: [{
            o: {
              x: 0.33,
              y: 1
            },
            i: {
              x: 0.68,
              y: 1
            },
            s: [0],
            t: 0
          }, {
            s: [0],
            t: 60
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
              x: 0.33,
              y: 1
            },
            i: {
              x: 0.68,
              y: 1
            },
            s: [100],
            t: 0
          }, {
            s: [100],
            t: 60
          }]
        }
      },
      w: 24,
      h: 24,
      refId: "1",
      ind: 1
    }],
    v: "5.7.0",
    fr: 60,
    op: 144,
    ip: 0,
    assets: [{
      nm: "[Asset] _search-progress-special-loading",
      id: "1",
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
        ef: [],
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
              s: [0.0667, 0.4824, 0.1725],
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
              s: [0.0667, 0.4824, 0.1725],
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
              s: [0.0667, 0.4824, 0.1725],
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
              s: [0.0667, 0.4824, 0.1725],
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
              s: [0.0667, 0.4824, 0.1725],
              t: 144
            }, {
              s: [0.0667, 0.4824, 0.1725],
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
        ef: [],
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
              s: [0.0667, 0.4824, 0.1725],
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
              s: [0.0667, 0.4824, 0.1725],
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
              s: [0.0667, 0.4824, 0.1725],
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
              s: [0.0667, 0.4824, 0.1725],
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
              s: [0.0667, 0.4824, 0.1725],
              t: 144
            }, {
              s: [0.0667, 0.4824, 0.1725],
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
        ef: [],
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
              s: [0.0667, 0.4824, 0.1725],
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
              s: [0.0667, 0.4824, 0.1725],
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
              s: [0.0667, 0.4824, 0.1725],
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
              s: [0.0667, 0.4824, 0.1725],
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
              s: [0.0667, 0.4824, 0.1725],
              t: 144
            }, {
              s: [0.0667, 0.4824, 0.1725],
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
        ef: [],
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
              s: [0.0667, 0.4824, 0.1725],
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
              s: [0.0667, 0.4824, 0.1725],
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
              s: [0.0667, 0.4824, 0.1725],
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
              s: [0.0667, 0.4824, 0.1725],
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
              s: [0.0667, 0.4824, 0.1725],
              t: 144
            }, {
              s: [0.0667, 0.4824, 0.1725],
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
        ef: [],
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
              s: [0.0667, 0.4824, 0.1725],
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
              s: [0.0667, 0.4824, 0.1725],
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
              s: [0.0667, 0.4824, 0.1725],
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
              s: [0.0667, 0.4824, 0.1725],
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
              s: [0.0667, 0.4824, 0.1725],
              t: 144
            }, {
              s: [0.0667, 0.4824, 0.1725],
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
        ef: [],
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
              s: [0.0667, 0.4824, 0.1725],
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
              s: [0.0667, 0.4824, 0.1725],
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
              s: [0.0667, 0.4824, 0.1725],
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
              s: [0.0667, 0.4824, 0.1725],
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
              s: [0.0667, 0.4824, 0.1725],
              t: 144
            }, {
              s: [0.0667, 0.4824, 0.1725],
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
        ind: 6
      }, {
        ty: 4,
        nm: "_search-progress-special-loading Bg",
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
              s: [12, 12],
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
              s: [12, 12],
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
              s: [12, 12],
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
              s: [12, 12],
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
              s: [12, 12],
              t: 144
            }, {
              s: [12, 12],
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
              s: [12, 12],
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
              s: [12, 12],
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
              s: [12, 12],
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
              s: [12, 12],
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
              s: [12, 12],
              t: 144
            }, {
              s: [12, 12],
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
              s: [0],
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
              s: [0],
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
        ef: [],
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
                i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                v: [[24, 0], [24, 24], [0, 24], [0, 0]]
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
                i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                v: [[24, 0], [24, 24], [0, 24], [0, 0]]
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
                i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                v: [[24, 0], [24, 24], [0, 24], [0, 0]]
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
                i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                v: [[24, 0], [24, 24], [0, 24], [0, 0]]
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
                i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                v: [[24, 0], [24, 24], [0, 24], [0, 0]]
              }],
              t: 144
            }, {
              s: [{
                c: true,
                i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                v: [[24, 0], [24, 24], [0, 24], [0, 0]]
              }],
              t: 168
            }]
          }
        }],
        ind: 7
      }]
    }]
  };
  let tw = {
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    pdf: "application/pdf",
    markdown: "text/markdown"
  };
  let tk = {
    docx: "docx",
    pdf: "pdf",
    markdown: "md"
  };
  var configErrorClass = require("config-error-class") /*id: 394787*/;
  let tR = {};
  var tT = {
    container: "container-qTuXFx",
    "loading-icon": "loading-icon-CrZN3B"
  };
  let tW = e => {
    let {
      className: t,
      style: r,
      children: i,
      position: x = "bottomRight",
      loadingText: v = "Downloading",
      loadingToastTop: g,
      fileName: $,
      visible: b,
      forceVisible: k,
      onVisibleChange: S,
      onFetchDoc: R,
      onBeforeExport: T,
      onAfterExport: W,
      onExportError: E,
      onLoadImageById: _,
      spacing: F = 4,
      onClickDownloadItem: Z,
      referenceQuoteManager: j,
      ...M
    } = e;
    let I = reactCoreLibraryReexport.useRef(false);
    let N = reactCoreLibraryReexport.useRef();
    let B = i18nTranslationUtils.useTranslationWithFallback();
    let C = skillPinModalCallback.useSkillPinCallback(_);
    let P = async e => {
      I.current = e;
      if (e) {
        await promiseAsyncUtilities.createDelayedPromise(200);
        if (I.current) {
          N.current = samanthaToastFactory.toastInstance.success({
            icon: reactJsxRuntimeCoreReexport.jsx(lazyLottiePlayerWrapper.LazyLottiePlayer, {
              className: tT["loading-icon"],
              animationData: tb
            }),
            content: v,
            duration: 0,
            top: g
          });
        }
      } else if (N.current) {
        samanthaToastFactory.toastInstance.close(N.current);
        N.current = undefined;
      }
    };
    let z = async e => {
      let t;
      if (Z != null) {
        Z(e);
      }
      if (!I.current && R) {
        P(true);
        try {
          var r;
          if (T != null) {
            T({
              type: e
            });
          }
          let n = await R();
          if (n === null) {
            return;
          }
          t = n;
          let {
            title: i
          } = ty(t);
          if (aiEditorWrapper.isAiEditorInstance(t)) {
            t.behavior.emit("download", {
              type: e
            });
          }
          let l = await tv({
            doc: t,
            type: e,
            process: e => {
              e = t$(e, B("write_reference_list_header"), j);
              return e = tg(e, B("tag_aiGenerated_doc_exported"));
            },
            loadImageById: C,
            referenceQuoteManager: j
          });
          if (!l) {
            throw Error(`No bytes exported when exporting ${e} of doc`);
          }
          if ((r = tR.onDownloadStart) !== null && r !== undefined) {
            r.call(tR);
          }
          fileDownloadUtilities.downloadBlobViaAnchor({
            bytes: l,
            fileName: `${$ || i || "-"}.${tk[e]}`,
            mimeType: tw[e]
          });
          if (W != null) {
            W({
              type: e
            });
          }
        } catch (r) {
          if (E != null) {
            E({
              type: e,
              error: r
            });
          }
          if (t && aiEditorWrapper.isAiEditorInstance(t)) {
            t.error(new configErrorClass.ConfigError({
              id: "export_error",
              rawError: r,
              extra: {
                type: e
              }
            }));
          }
        } finally {
          P(false);
        }
      }
    };
    let J = functionInvoker.invoke(() => {
      let e = [{
        label: "Word",
        icon: reactJsxRuntimeCoreReexport.jsx(docFileIconComponent.DocFileIcon, {}),
        value: "docx",
        onClick: () => z("docx")
      }];
      e.push({
        label: "PDF",
        icon: reactJsxRuntimeCoreReexport.jsx(pdfFileTypeIcon.PdfFileIcon, {}),
        value: "pdf",
        onClick: () => z("pdf")
      });
      e.push({
        label: "Markdown",
        icon: reactJsxRuntimeCoreReexport.jsx(fileTypeTxtIcon.FileTypeTxtIcon, {}),
        value: "markdown",
        onClick: () => z("markdown")
      });
      return e;
    });
    return reactJsxRuntimeCoreReexport.jsx(businessSkillBar.BusinessSkillBar, {
      ...M,
      contentClassName: l(tT.container, t),
      contentProps: {
        "data-testid": "doc_export_popover"
      },
      style: r,
      defaultValue: "",
      selectable: false,
      scrollable: false,
      visible: b,
      forceVisible: k,
      onVisibleChange: S,
      spacing: F,
      position: x,
      newIcon: true,
      iconSize: "middle",
      options: J,
      children: i
    });
  };
  require.d(exports, {
    DocExportPopover: function () {
      return tW;
    }
  });
}