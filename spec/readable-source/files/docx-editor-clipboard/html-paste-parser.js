// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'isValidToken'
// - Renamed export 'Z' to 'HtmlParseRules'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 985949
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var isDomElementUtil_1 = require("is-dom-element-util_1") /*id: 425304*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var collectionMapMatcher = require("collection-map-matcher") /*id: 300366*/;
  var driveUrlParserAxios = require("drive-url-parser-axios") /*id: 508792*/;
  var larkDocLinkFormatParser = require("lark-doc-link-format-parser") /*id: 919616*/;
  var atUserFormatManager = require("at-user-format-manager") /*id: 667456*/;
  var highlightjsLanguageResolver = require("highlightjs-language-resolver") /*id: 553850*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var chatUserInfoService = require("chat-user-info-service") /*id: 152763*/;
  var docxTableDomUtils = require("docx-table-dom-utils") /*id: 40695*/;
  var domNodeTypesConstants = require("dom-node-types-constants") /*id: 196330*/;
  var colorUtils = require("color-utils") /*id: 845364*/;
  var k = colorUtils;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var browserThemeManager = require("browser-theme-manager") /*id: 542418*/;
  var themeDesignTokensProvider = require("theme-design-tokens-provider") /*id: 408160*/;
  var colorPaletteUtils = require("color-palette-utils") /*id: 824160*/;
  var themeColorManagerFacade = require("theme-color-manager-facade") /*id: 552375*/;
  var uiThemeColorDefinitions = require("ui-theme-color-definitions") /*id: 434278*/;
  var uiThemeConstants = require("ui-theme-constants") /*id: 541237*/;
  let C = themeDesignTokensProvider.getTokenByMode("bg-body", browserThemeManager.ThemeMode.LIGHT);
  let N = themeDesignTokensProvider.getTokenByMode("text-title", browserThemeManager.ThemeMode.LIGHT);
  let M = {
    [uiThemeColorDefinitions.colorConstants.COLOR_ORANGE_LIGHT_BACKGROUND]: k({
      r: 254,
      g: 212,
      b: 164
    }).toRgb(),
    [uiThemeColorDefinitions.colorConstants.COLOR_YELLOW_LIGHT_BACKGROUND]: k({
      r: 255,
      g: 248,
      b: 149
    }).toRgb(),
    [uiThemeColorDefinitions.colorConstants.COLOR_GREEN_LIGHT_BACKGROUND]: k({
      r: 197,
      g: 240,
      b: 192
    }).toRgb(),
    [uiThemeColorDefinitions.colorConstants.COLOR_BLUE_LIGHT_BACKGROUND]: k({
      r: 207,
      g: 221,
      b: 254
    }).toRgb(),
    [uiThemeColorDefinitions.colorConstants.COLOR_BLUE_DARK_BACKGROUND]: k({
      r: 158,
      g: 187,
      b: 254
    }).toRgb(),
    [uiThemeColorDefinitions.colorConstants.COLOR_PURPLE_LIGHT_BACKGROUND]: k({
      r: 220,
      g: 201,
      b: 252
    }).toRgb(),
    [uiThemeColorDefinitions.colorConstants.COLOR_PURPLE_DARK_BACKGROUND]: k({
      r: 196,
      g: 164,
      b: 250
    }).toRgb()
  };
  let w = [...themeColorManagerFacade.getLightThemeMap(uiThemeConstants.basicTheme.Background), [uiThemeColorDefinitions.colorConstants.COLOR_DEFAULT_BACKGROUND, C]].map(e => {
    let [o, r] = e;
    let {
      r: n,
      g: i,
      b: a
    } = M[o] ? M[o] : k(r).toRgb();
    return {
      key: o,
      value: r,
      R: n,
      G: i,
      B: a
    };
  });
  let S = [...themeColorManagerFacade.getLightThemeMap(uiThemeConstants.basicTheme.Text), [uiThemeColorDefinitions.colorConstants.COLOR_DEFAULT_TEXT, N]].map(e => {
    let [o, r] = e;
    let {
      r: n,
      g: i,
      b: a
    } = k(r).toRgb();
    return {
      key: o,
      value: r,
      R: n,
      G: i,
      B: a
    };
  });
  function D(e) {
    let o = e === uiThemeConstants.basicTheme.Background ? w : S;
    return r => {
      if (r === "transparent") {
        return;
      }
      let n = o.find(e => k.equals(r, e.value));
      if (n) {
        return themeColorManagerFacade.getLightThemeMap(e).get(n.key);
      }
    };
  }
  let A = D(uiThemeConstants.basicTheme.Text);
  let x = D(uiThemeConstants.basicTheme.Background);
  function O(e, o) {
    if (e === "transparent") {
      return;
    }
    let r = k(e);
    if (!r) {
      return;
    }
    let {
      r: n,
      g: i,
      b: a,
      a: l
    } = r.toRgb();
    let {
      s,
      v: c
    } = r.toHsv();
    if (o === "text") {
      if (c <= 0.3) {
        return;
      }
      if (c > 0.3 && s < 0.08) {
        return themeColorManagerFacade.getLightThemeMap(uiThemeConstants.basicTheme.Text).get(uiThemeColorDefinitions.colorConstants.COLOR_GRAY_TEXT);
      }
      let e = colorPaletteUtils.closest({
        R: n,
        G: i,
        B: a,
        A: l
      }, S);
      if (e.key === uiThemeColorDefinitions.colorConstants.COLOR_DEFAULT_TEXT) {
        return;
      }
      return themeColorManagerFacade.getLightThemeMap(uiThemeConstants.basicTheme.Text).get(e.key);
    }
    if (l === 0) {
      return;
    }
    if (c <= 0.3) {
      return themeColorManagerFacade.getLightThemeMap(uiThemeConstants.basicTheme.Background).get(uiThemeColorDefinitions.colorConstants.COLOR_GRAY_DARK_BACKGROUND);
    }
    if (s < 0.04) {
      if (c > 0.96) {
        return;
      }
      if (c >= 0.76) {
        return themeColorManagerFacade.getLightThemeMap(uiThemeConstants.basicTheme.Background).get(uiThemeColorDefinitions.colorConstants.COLOR_GRAY_LIGHT_BACKGROUND);
      }
      if (c < 0.76) {
        return themeColorManagerFacade.getLightThemeMap(uiThemeConstants.basicTheme.Background).get(uiThemeColorDefinitions.colorConstants.COLOR_GRAY_DARK_BACKGROUND);
      }
    }
    let d = colorPaletteUtils.closest({
      R: n,
      G: i,
      B: a,
      A: l
    }, w);
    if (d.key !== uiThemeColorDefinitions.colorConstants.COLOR_DEFAULT_BACKGROUND) {
      return themeColorManagerFacade.getLightThemeMap(uiThemeConstants.basicTheme.Background).get(d.key);
    }
  }
  let $ = browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp;
  let L = new Map();
  L.set("color", (e, o) => {
    let r = A(o);
    if (r) {
      e.mark.textHighlight = r;
      return;
    }
    if (!e.supportStyle || $) {
      return;
    }
    let n = O(o, "text");
    if (n) {
      e.mark.textHighlight = n;
    }
  });
  L.set("background-color", (e, o) => {
    let r = x(o);
    if (r) {
      e.mark.textHighlightBackground = r;
      return;
    }
    if (!e.supportStyle || $) {
      return;
    }
    let n = O(k(o).toRgbString(), "background");
    if (n) {
      e.mark.textHighlightBackground = n;
    }
  });
  L.set("background", (e, o) => {
    if (!e.supportStyle && !$) {
      return;
    }
    let r = O(k(o).toRgbString(), "background");
    if (r) {
      e.mark.textHighlightBackground = r;
    }
  });
  L.set("text-align", (e, o) => {
    if (["left", "right", "center"].includes(o)) {
      e.align = o;
    }
  });
  L.set("margin-left", (e, o) => {
    if (o.endsWith("em")) {
      e.indentLevel = docxTableDomUtils.extractLeadingNumber(o, 0);
    }
  });
  L.set("font-weight", (e, o) => {
    if (isNaN(Number(o))) {
      if (o.includes("bold")) {
        e.mark.bold = true;
      } else {
        e.mark.bold = false;
      }
    } else if (Number(o) < 700) {
      e.mark.bold = false;
    } else {
      e.mark.bold = true;
      e.parseBoldByNumberFontWeight = true;
    }
  });
  L.set("text-decoration", (e, o) => {
    if (o.includes("line-through")) {
      e.mark.strikethrough = true;
    }
    if (o.includes("underline")) {
      e.mark.underline = true;
    }
  });
  L.set("font-style", (e, o) => {
    if (o.includes("italic")) {
      e.mark.italic = true;
    }
  });
  L.set("vertical-align", (e, o, r) => {
    if (o === "super" || o === "sub") {
      r.innerText = `(${r.innerText})`;
    }
  });
  L.set("font-size", (e, o) => {
    if (!e.textType && Math.round(docxTableDomUtils.extractLeadingNumber(o, 12)) >= 20) {
      e.textType = docBlockTypeConstants.blockTypeConstants.HEADING1;
    }
  });
  L.set("mso-list", (e, o) => {
    if (o === "Ignore") {
      e._ignoreChild = true;
    }
  });
  L.set("mso-ignore", (e, o) => {
    if (o === "vglayout") {
      e.microLayoutIgnore = true;
    }
  });
  L.set("white-space", (e, o) => {
    if (/^pre/.test(o) || /break-spaces/.test(o)) {
      e.isWhiteSpacePre = true;
    }
  });
  var docBlockParserUtils = require("doc-block-parser-utils") /*id: 247471*/;
  let F = {
    list: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["OL", "UL"]
      },
      enter(e) {
        let {
          context: o,
          node: r
        } = e;
        let n = r.firstElementChild;
        if (!n) {
          return;
        }
        let i = docBlockParserUtils.parseBlockListData(n);
        if (i) {
          o.textType = i.type;
          o.level = i.level;
          o.done = i.isDone;
        } else {
          o.textType = r.nodeName === "OL" ? docBlockTypeConstants.blockTypeConstants.ORDERED : docBlockTypeConstants.blockTypeConstants.BULLET;
          o.level = Number.isInteger(o.level) ? o.level + 1 : 1;
          if (r.nodeName === "OL") {
            let e = r.getAttribute("start");
            o.orderedListNumber = Number(e) >= 1 ? e : "";
          }
        }
      },
      exit(e) {
        if (e.context.done) {
          e.data.done = true;
        }
        e.children.forEach((o, r) => {
          if (r === 0 && e.context.orderedListNumber) {
            o.context.orderedListNumber = e.context.orderedListNumber;
          }
          if (o.context.done) {
            o.data.done = true;
          }
        });
      }
    }
  };
  var docBlockTypeConstants_1 = require("doc-block-type-constants_1") /*id: 240222*/;
  var docxBlockToHtmlConverter = require("docx-block-to-html-converter") /*id: 107524*/;
  var docxClipboardUtils = require("docx-clipboard-utils") /*id: 538199*/;
  var documentViewMediaUtils = require("document-view-media-utils") /*id: 811061*/;
  var inlineComponentFacade = require("inline-component-facade") /*id: 678614*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var tableLayoutConstants_1 = require("table-layout-constants_1") /*id: 673543*/;
  var docxSheetPasteUtils = require("docx-sheet-paste-utils") /*id: 88608*/;
  var docxBlockValidatorUtils_1 = require("docx-block-validator-utils_1") /*id: 869432*/;
  var docxImageNodeCreator = require("docx-image-node-creator") /*id: 41944*/;
  var urlValidationUtils_1 = require("url-validation-utils_1") /*id: 233855*/;
  var fileUtilsAndViewHelpers = require("file-utils-and-view-helpers") /*id: 192103*/;
  var docxDocumentNodeFactory = require("docx-document-node-factory") /*id: 52340*/;
  var diagramConstants = require("diagram-constants") /*id: 75626*/;
  let et = () => platformDocUtils.k8J("ccm.docx.pc.chart_block");
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var driveUrlValidationUtilities = require("drive-url-validation-utilities") /*id: 262405*/;
  var docUrlProcessingUtilities = require("doc-url-processing-utilities") /*id: 330118*/;
  let ei = e => {
    let o = [e.match(/language-(\S+)/), e.match(/hljs (\S+)/)].filter(e => e);
    if (o.length && o[0]) {
      return highlightjsLanguageResolver.resolveLanguage(decodeURIComponent(o[0][1]));
    } else {
      return "Plaintext";
    }
  };
  let ea = e => {
    let o = {};
    if (isDomElementUtil_1.isDomElement(e) && docBlockTypeConstants_1.validHtmlTags.includes(e.nodeName)) {
      try {
        o = window.getComputedStyle(e);
      } catch (e) {}
    }
    return o;
  };
  let el = e => e.length === 22 || e.length === 27;
  let es = ["heading-h1", "heading-h2", "heading-h3", "heading-h4", "heading-h5", "heading-h6", "heading-h7", "heading-h8", "heading-h9"];
  let ec = {
    styleParse: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT
      },
      enter(e) {
        let {
          node: o,
          context: r
        } = e;
        if (o.className === "callout-block" || !o.getAttribute) {
          return;
        }
        let n = o.getAttribute("style") || "";
        let i = ea(o);
        if (!n && isEmptyUtil.isEmpty(i)) {
          return;
        }
        let l = {};
        n.split(";").forEach(e => {
          let o = e.split(":");
          if (!o || o.length !== 2) {
            return;
          }
          let [r, n] = o;
          l[r.trim()] = n.trim();
        });
        L.forEach((e, n) => {
          let a = l[n] || i[n];
          if (a) {
            r.mark ||= {};
            e(r, a, o);
          }
        });
      }
    },
    blockquote: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["BLOCKQUOTE"]
      },
      addEmptyTextIfNoChild: true,
      enter(e) {
        e.context.usedToBeQuote = true;
      }
    },
    heading: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["H1", "H2", "H3", "H4", "H5", "H6", "SPAN", "DIV", "OL", "UL"]
      },
      enter(e) {
        let r;
        let {
          node: n,
          context: i
        } = e;
        if (!i.textType || i.textType !== docBlockTypeConstants.blockTypeConstants.TODO) {
          if (n.nodeName === "SPAN" || n.nodeName === "DIV" || n.nodeName === "OL" || n.nodeName === "UL") {
            r = 0;
            es.forEach((e, o) => {
              if (n.classList.contains(e)) {
                r = o + 1;
              }
            });
          } else {
            r = parseInt((n.nodeName.match && n.nodeName.match(/^H(\d)$/))[1]);
          }
          if (i.textType === "ordered") {
            i.seq = "auto";
          }
          if (r > 0) {
            i.headingLevel = r;
          } else if (i.headingLevel) {
            r = i.headingLevel;
          }
          switch (r) {
            case 1:
              i.textType = docBlockTypeConstants.blockTypeConstants.HEADING1;
              break;
            case 2:
              i.textType = docBlockTypeConstants.blockTypeConstants.HEADING2;
              break;
            case 3:
              i.textType = docBlockTypeConstants.blockTypeConstants.HEADING3;
              break;
            case 4:
              i.textType = docBlockTypeConstants.blockTypeConstants.HEADING4;
              break;
            case 5:
              i.textType = docBlockTypeConstants.blockTypeConstants.HEADING5;
              break;
            case 6:
              i.textType = docBlockTypeConstants.blockTypeConstants.HEADING6;
              break;
            case 7:
              i.textType = docBlockTypeConstants.blockTypeConstants.HEADING7;
              break;
            case 8:
              i.textType = docBlockTypeConstants.blockTypeConstants.HEADING8;
              break;
            case 9:
              i.textType = docBlockTypeConstants.blockTypeConstants.HEADING9;
          }
          if (i.textType && docBlockTypeConstants.headingTypeArray.includes(i.textType) && i.mark?.bold && i.parseBoldByNumberFontWeight) {
            i.mark.bold = false;
          }
        }
      }
    },
    img: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["IMG"]
      },
      preprocess(e) {
        let {
          node: o
        } = e;
        return true;
      },
      enter(e) {
        let {
          data: o,
          node: r,
          payload: i
        } = e;
        o.type = docBlockTypeConstants.blockTypeConstants.IMAGE;
        let {
          image: a
        } = docxImageNodeCreator.createDefaultImageNode();
        o.image = a;
        let l = r.getAttribute("src");
        let s = r.getAttribute("data-suite");
        let c = r.getAttribute("data-lark-image-width");
        let d = r.getAttribute("data-lark-image-height");
        if (r.hasAttribute("data-lark-image-uri")) {
          let e = r.getAttribute("data-lark-image-uri");
          i.imFileKey = e || "imkey://";
        }
        if (c) {
          a.width = Number(c);
        }
        if (d) {
          a.height = Number(d);
        }
        if ((l || s) && (i.src = xssContentSanitizer.sanitizeUrl(l, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFwW$R-WlpiW*gy$1RKemR*bH$WbkJp%jFKc1kyaz$l$1J-Z%d4am$%bDBX$mRzZF$4d$NqRmlSM$o2$Ec1%2$sbFlTbT$r$0%wOQ"
        }), s)) {
          try {
            let {
              fileToken: e
            } = docxBlockToHtmlConverter.decodeSnapshotData(s);
            i.fileToken = e;
          } catch (e) {}
          if (r.dataset.width && r.dataset.height) {
            let e = docxTableDomUtils.extractLeadingNumber(r.dataset.width, 240);
            let o = docxTableDomUtils.extractLeadingNumber(r.dataset.height, 240);
            a.width = e || 240;
            a.height = o || 240;
          } else if (r.getAttribute("width") && r.getAttribute("height")) {
            a.width = docxTableDomUtils.extractLeadingNumber(r.getAttribute("width"), 240) || 240;
            a.height = docxTableDomUtils.extractLeadingNumber(r.getAttribute("height"), 240) || 240;
          }
          if (r.dataset.type === "minder" && r.dataset.json) {
            try {
              let {
                data: e
              } = JSON.parse(decodeURIComponent(r.dataset.json));
              a.width = e.ow;
              a.height = e.oh;
            } catch (e) {}
          }
        }
      }
    },
    video: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["VIDEO"]
      },
      preprocess: () => true,
      enter(e) {
        let {
          data: o,
          node: r,
          payload: n,
          context: i,
          children: a
        } = e;
        o.type = docBlockTypeConstants.blockTypeConstants.FILE;
        let {
          file: l
        } = docxDocumentNodeFactory.createDefaultFileNode();
        o.file = l;
        let [s, c, d, u, p] = ["data-lark-video-width", "data-lark-video-height", "data-lark-video-mime", "data-lark-video-size", "data-lark-video-name"].map(e => r.getAttribute(e) || "");
        l.mimeType = d || l.mimeType;
        l.name = p || l.name;
        l.size = Number(u) || l.size;
        if (Number(s) && Number(c)) {
          let {
            adjustHeight: e,
            adjustWidth: o
          } = fileUtilsAndViewHelpers.adjustImageDimensions(Number(s), Number(c));
          l.width = o;
          l.height = e;
          l.originWidth = Number(s);
          l.originHeight = Number(c);
        } else {
          l.width = Number(s) || l.width;
          l.height = Number(c) || l.height;
        }
        if (r.hasAttribute("data-lark-video-uri")) {
          let e = r.getAttribute("data-lark-video-uri");
          n.imFileKey = e || "imkey://";
        }
        if (!n.imFileKey) {
          return;
        }
        let h = documentViewMediaUtils.createFileViewNode({
          name: l.name,
          size: l.size
        }, true);
        e.data = h;
        i._ignoreChild = true;
        e.alive = true;
        e.children = [{
          node: r,
          context: i,
          data: o,
          children: a,
          payload: n
        }];
      }
    },
    localVideo: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["LOCALVIDEO"]
      },
      preprocess: () => !!browserEnvironmentDetectionUtils.browserDetector.isMobile,
      enter(e) {
        let {
          data: o,
          node: r,
          payload: n,
          context: i,
          children: a
        } = e;
        o.type = docBlockTypeConstants.blockTypeConstants.FILE;
        let {
          file: l
        } = docxDocumentNodeFactory.createDefaultFileNode();
        o.file = l;
        if (r.hasAttribute("data-lark-video-local-path")) {
          let e = r.getAttribute("data-lark-video-local-path");
          n.imLocalPath = e || "/";
        }
        if (!n.imLocalPath) {
          return;
        }
        let s = documentViewMediaUtils.createFileViewNode({
          name: l.name,
          size: l.size
        }, true);
        e.data = s;
        i._ignoreChild = true;
        e.alive = true;
        e.children = [{
          node: r,
          context: i,
          data: o,
          children: a,
          payload: n
        }];
      }
    },
    mindmap: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["UL"]
      },
      preprocess(e) {
        var o;
        var r;
        var n;
        let {
          node: i,
          context: a
        } = e;
        if (((o = (r = i.classList).contains) === null || o === undefined ? undefined : o.call(r, "mm-editor-clipboard")) && ((n = i.getAttribute) === null || n === undefined ? undefined : n.call(i, "data-type")) === "minder") {
          a._ignoreChild = true;
          return {
            html: i
          };
        }
      },
      enter(e, o, r) {
        let {
          data: n,
          payload: i
        } = e;
        let {
          html: a
        } = r;
        n.type = docBlockTypeConstants.blockTypeConstants.MINDMAP;
        n.token = "";
        i.html = a;
      }
    },
    ...F,
    "list-nested": {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["OL", "UL", "DIV"]
      },
      exit(e) {
        let o = e.context.textType;
        if (o === docBlockTypeConstants.blockTypeConstants.ORDERED || o === docBlockTypeConstants.blockTypeConstants.BULLET || o === docBlockTypeConstants.blockTypeConstants.TODO) {
          e.children = e.children.reduce((e, o) => {
            let r = e.length;
            let n = e[r - 1];
            if (r > 0 && n.context.level && n.context.level < o.context.level) {
              n.children.push(o);
            } else {
              e.push(o);
            }
            return e;
          }, []);
        }
      }
    },
    indent: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["DIV"]
      },
      exit(e) {
        let {
          context: o,
          children: r
        } = e;
        let n = o.textType;
        if (n && n !== docBlockTypeConstants.blockTypeConstants.TEXT) {
          return;
        }
        let i = "indentLevel";
        e.children = docxTableDomUtils.buildNestedTree(r, i, (e, o) => {
          let r = e.data.type;
          if ((o == null ? undefined : o.context[i]) > 1 && !e.context[i] && (!r || r === docBlockTypeConstants.blockTypeConstants.TEXT || docBlockTypeConstants.headingTypeArray.includes(r))) {
            e.context.indentLevel = 1;
          }
        });
      }
    },
    listitem: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["LI"]
      },
      enter(e) {
        let {
          context: r,
          node: n
        } = e;
        let i = docBlockParserUtils.parseBlockListData(n);
        if (i) {
          r.textType = i.type;
          r.done = i.isDone;
        }
        if (r.textType !== docBlockTypeConstants.blockTypeConstants.ORDERED) {
          return;
        }
        let a = n.dataset.start || n.getAttribute("start");
        let l = n.dataset.olId ?? "fake";
        if (a !== undefined) {
          r.orderedListNumber = a;
          r.orderedListId = l;
        }
      },
      exit(e) {
        let {
          children: o
        } = e;
        if (o.length <= 1) {
          return;
        }
        let r = e.data.type;
        if (r === docBlockTypeConstants.blockTypeConstants.ORDERED || r === docBlockTypeConstants.blockTypeConstants.BULLET || r === docBlockTypeConstants.blockTypeConstants.TODO) {
          e.children = o.reduce((e, o) => {
            if (e.length === 0) {
              e.push(o);
              return e;
            }
            let r = e[e.length - 1];
            if (r.context.level && o && o.context.singleline) {
              if (o.context.level === r.context.level && o.data.type) {
                o.data.type = docxBlockValidatorUtils_1.isListBlockType(o.data.type) ? docBlockTypeConstants.blockTypeConstants.TEXT : o.data.type;
              }
              if (r.data.type && !docxBlockValidatorUtils_1.isListBlockType(r.data.type)) {
                r.data.type = docBlockTypeConstants.blockTypeConstants.BULLET;
              }
              r.children.push(o);
            } else {
              e.push(o);
            }
            return e;
          }, []);
        }
      }
    },
    hr: {
      matches: {
        nodeName: ["HR"]
      },
      enter(e) {
        e.data.type = docBlockTypeConstants.blockTypeConstants.DIVIDER;
      }
    },
    inlinecode: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["CODE"]
      },
      enter(e) {
        let {
          context: o
        } = e;
        if (o.textType !== docBlockTypeConstants.blockTypeConstants.CODE) {
          o.mark ||= {};
          o.mark.inlineCode = true;
        }
      }
    },
    doclink: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["SPAN", "A"]
      },
      enter(e) {
        let {
          data: r,
          context: n,
          node: i
        } = e;
        let a = new larkDocLinkFormatParser.LarkDocLinkFormat({
          dom: i
        }).parse();
        if (!a) {
          return;
        }
        let {
          url: s,
          title: u
        } = a;
        if (!s || !u) {
          return;
        }
        let {
          token: p,
          type: h,
          mentionTypeNum: g,
          blockTypeNum: m,
          blockToken: f
        } = driveUrlParserAxios.parseDriveUrl(s, true) || {};
        if (!p || !h || isUndefinedCheck.isUndefined(g) || !el(p)) {
          return;
        }
        let b = inlineComponentFacade.createBlockObject(inlineComponentFacade.mentionTypes.DOC, {
          raw_url: s,
          title: u,
          token: f ?? p,
          file_type: m ?? g,
          tenant_id: ""
        });
        r.nodes = inlineComponentFacade.createEmbedContent(b, n);
        r.type = n.textType ?? docBlockTypeConstants.blockTypeConstants.TEXT;
        n._ignoreChild = true;
        e.alive = true;
      }
    },
    atuser: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["SPAN", "A"]
      },
      enter(e) {
        let {
          data: r,
          context: n,
          node: i
        } = e;
        let a = new atUserFormatManager.AtUserFormatManager({
          dom: i
        }).parse();
        let l = i.getAttribute("data-lark-user-id");
        if (!a && !l) {
          return;
        }
        let s = l ?? (a == null ? undefined : a.userid);
        if (!s || s === "all" || isNaN(Number(s))) {
          return;
        }
        let c = inlineComponentFacade.createBlockObject(inlineComponentFacade.mentionTypes.USER, {
          uid: s
        });
        r.nodes = inlineComponentFacade.createEmbedContent(c, n);
        r.type = n.textType ?? docBlockTypeConstants.blockTypeConstants.TEXT;
        n._ignoreChild = true;
        e.alive = true;
      }
    },
    "inlinecode-mobile": {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["SPAN"],
        selector: ".inline-code"
      },
      enter(e) {
        let {
          context: o
        } = e;
        if (o.textType !== docBlockTypeConstants.blockTypeConstants.CODE) {
          o.mark ||= {};
          o.mark.inlineCode = true;
        }
      }
    },
    codeblock: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["PRE"]
      },
      enter(e) {
        let {
          data: o,
          context: r,
          node: n
        } = e;
        r.isPre = true;
        let i = docxTableDomUtils.findCodeChild(n);
        if (i) {
          if (n.dataset.wrap === "true") {
            o.wrap = true;
          }
          r.textType = docBlockTypeConstants.blockTypeConstants.CODE;
          o.nodes = [{
            text: "",
            type: editorModuleConstantsConfig.editorContentTypes.PLAINTEXT
          }];
          let a = `language-${i.dataset.larkLanguage}`;
          o.language = ei(`${i.className} ${e.node.className} ${a}`);
        } else {
          e.data.type = docBlockTypeConstants.blockTypeConstants.TEXT;
          o.nodes = [{
            text: "",
            type: editorModuleConstantsConfig.editorContentTypes.PLAINTEXT
          }];
        }
      },
      exit(e) {
        if (e.children.length && e.context.textType === docBlockTypeConstants.blockTypeConstants.CODE) {
          e.data.type = docBlockTypeConstants.blockTypeConstants.CODE;
          let o = e.children.map(e => {
            if (e.data.nodes) {
              let o = e.data.nodes[e.data.nodes.length - 1];
              if (!/\n$/.test(o.text)) {
                o.text = `${o.text}
`;
              }
            }
            return e.data.nodes;
          }).filter(function (e) {
            return e !== undefined;
          }).reduce((e, o) => [...e, ...o]);
          e.children = [];
          e.data.nodes = o;
        }
      }
    },
    plaintext: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.TEXT
      },
      preprocess: e => !e.node.parentElement || !e.node.parentElement.dataset.zeroSpace,
      enter(e) {
        let {
          node: o,
          data: r,
          context: n
        } = e;
        let i = o.textContent || " ";
        i = i.replace(/\u00a0/g, " ");
        let a = i = docxClipboardUtils.normalizeTextForClipboard(i);
        i = a = n.isWhiteSpacePre || n.isPre ? a.replace(/\r/g, " ") : a.replace(/\r\n/g, " ").replace(/\r|\n/g, " ");
        if (n.align) {
          r.align = n.align;
        }
        if (n.seq) {
          r.seq = n.seq;
        }
        r.nodes = n.mark ? [{
          text: i,
          mark: n.mark,
          type: editorModuleConstantsConfig.editorContentTypes.PLAINTEXT
        }] : [{
          text: i,
          type: editorModuleConstantsConfig.editorContentTypes.PLAINTEXT
        }];
      },
      exit(e) {
        let {
          data: o,
          context: r
        } = e;
        if (!o.type && r.textType) {
          o.type = r.textType;
        } else {
          o.type = docBlockTypeConstants.blockTypeConstants.TEXT;
        }
      }
    },
    iframe: {
      matches: {
        nodeName: "IFRAME"
      },
      enter(e) {
        let {
          data: o,
          node: r
        } = e;
        let n = r.src;
        o.original_text = n;
        o.type = docBlockTypeConstants.blockTypeConstants.IFRAME;
      }
    },
    break: {
      matches: {
        nodeName: "BR"
      },
      enter(e) {
        e.data.nodes = [{
          text: "\n",
          type: editorModuleConstantsConfig.editorContentTypes.PLAINTEXT
        }];
        e.data.type = e.data.type || docBlockTypeConstants.blockTypeConstants.TEXT;
      }
    },
    link: {
      matches: {
        nodeName: "A"
      },
      enter(e) {
        let {
          context: o,
          node: r,
          data: n
        } = e;
        let i = e.node.getAttribute("href");
        if (!i || i.trim().startsWith("javascript:") || (browserEnvironmentDetectionUtils.browserDetector.isSafari && i.startsWith("#") && (i = location.origin + location.pathname + i), !docUrlProcessingUtilities.openUrlInNewWindow(i, true, true))) {
          return;
        }
        let a = r.dataset.larkIsCustom;
        let s = platformDocUtils.oOl(i) || driveUrlValidationUtilities.isValidUnknownUrl(i) || urlValidationUtils_1.isApplinkUrlNoPreview(i);
        if (a && a === "false" && s) {
          r.textContent = i;
        }
        o.mark ||= {};
        if (!n.type && o.textType) {
          n.type = o.textType;
        }
        if (docBlockParserUtils.validateHrefOrMention(r)) {
          let {
            token: a,
            type: s,
            mentionTypeNum: d
          } = driveUrlParserAxios.parseDriveUrl(i, true) || {};
          if (!a || !s || isUndefinedCheck.isUndefined(d) || !el(a)) {
            return;
          }
          let u = JSON.stringify(inlineComponentFacade.createBlockObject(inlineComponentFacade.mentionTypes.DOC, {
            file_type: d,
            token: a,
            tenant_id: "",
            raw_url: i,
            title: r.innerText
          }));
          n.nodes = [{
            text: " ",
            mark: {
              [inlineComponentFacade.componentType]: u,
              ...o.mark
            },
            type: editorModuleConstantsConfig.editorContentTypes.EMBED
          }];
          if (!o.textType) {
            n.type = docBlockTypeConstants.blockTypeConstants.TEXT;
          }
          o._ignoreChild = true;
          e.alive = true;
        } else {
          o.mark.link = encodeURIComponent(i);
          if (r.childNodes.length === 0) {
            n.nodes = [{
              text: "",
              mark: o.mark,
              type: editorModuleConstantsConfig.editorContentTypes.PLAINTEXT
            }];
            n.type = n.type || docBlockTypeConstants.blockTypeConstants.TEXT;
          }
        }
      }
    },
    emptyInlineMark: {
      matches: {
        nodeName: ["SPAN"]
      },
      enter(e) {
        let o = e.node.getAttribute("data-diagram-type");
        if (o) {
          o = o === diagramConstants.diagramTypes.UML ? diagramConstants.diagramTypes.UML : diagramConstants.diagramTypes.FLOWCHART;
          let r = e.node.getAttribute("data-diagram-record") || "";
          let n = null;
          try {
            n = JSON.parse(r);
          } catch (e) {}
          if (n && n.data) {
            e.data.type = docBlockTypeConstants.blockTypeConstants.DIAGRAM;
            e.data.diagram = {
              data: n.data,
              diagramType: o
            };
          }
          return;
        }
      }
    },
    bold: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["STRONG", "B"]
      },
      enter(e) {
        let {
          context: r,
          node: n
        } = e;
        if (r.mark?.bold === undefined || !n.style.fontWeight) {
          r.mark ||= {};
          r.mark.bold = true;
        }
      }
    },
    italic: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["I", "EM"]
      },
      enter(e) {
        let {
          context: o
        } = e;
        o.mark ||= {};
        o.mark.italic = true;
      }
    },
    strike: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["STRIKE", "S"]
      },
      enter(e) {
        let {
          context: o
        } = e;
        o.mark ||= {};
        o.mark.strikethrough = true;
      }
    },
    underline: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["U"]
      },
      enter(e) {
        let {
          context: o
        } = e;
        o.mark ||= {};
        o.mark.underline = true;
      }
    },
    emptytext: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["P", "LI", "UL", "OL", "H1", "H2", "H3", "H4", "H5", "BLOCKQUOTE"]
      },
      exit(e) {
        var o;
        let {
          children: r,
          data: n,
          context: i,
          node: a
        } = e;
        if (r.length !== 0 || n.nodes && n.nodes.length !== 0) {
          if (r.length === 1 && r[0].data.type === docBlockTypeConstants.blockTypeConstants.TEXT && ((o = r[0].data.nodes) === null || o === undefined ? undefined : o[0].text) === "") {
            r[0].data.type = i.textType || docBlockTypeConstants.blockTypeConstants.TEXT;
            if (i.seq) {
              r[0].data.seq = i.seq;
            }
          }
        } else {
          n.nodes = [{
            text: a.textContent || "",
            type: editorModuleConstantsConfig.editorContentTypes.PLAINTEXT
          }];
          n.type = i.textType || docBlockTypeConstants.blockTypeConstants.TEXT;
          if (i.seq) {
            n.seq = i.seq;
          }
        }
      }
    },
    singleline: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT
      },
      exit(e) {
        let {
          context: o,
          children: r,
          node: n
        } = e;
        let {
          nodeName: i
        } = n;
        if (["P", "LI", "PRE", "H1", "H2", "H3", "H4", "H5", "H6", "BLOCKQUOTE", "HR", "IMG"].includes(i) || i === "DIV" && (!n.dataset.eleid || n.childElementCount !== 1 || n.children[0].nodeName !== "A")) {
          o.singleline = true;
        }
        if (!(r.length <= 1)) {
          e.children = r.reduce((e, o) => {
            if (e.length === 0) {
              e.push(o);
              return e;
            }
            let r = e[e.length - 1];
            if (r.context.singleline || o.context.singleline) {
              e.push(o);
            } else if (Array.isArray(r.data.nodes) && Array.isArray(o.data.nodes)) {
              r.data.nodes.push(...o.data.nodes);
            } else {
              e.push(o);
            }
            return e;
          }, []);
        }
      }
    },
    td: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["TD", "TH"]
      },
      addEmptyTextIfNoChild: true,
      enter(e) {
        let {
          node: o,
          context: r
        } = e;
        let n = o.getAttribute("rowspan") || "1";
        let i = o.getAttribute("colspan") || "1";
        r.width = o.width;
        r.rowspan = parseInt(n);
        r.colspan = parseInt(i);
        r.cells = r.rowspan * r.colspan;
        e.alive = true;
      }
    },
    tr: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: "TR"
      },
      exit(e) {
        let {
          context: o
        } = e;
        let {
          children: r
        } = e;
        r = r.filter(e => {
          let {
            node: o
          } = e;
          return o.tagName === "TD" || o.tagName === "TH";
        });
        let n = [];
        let [i, a, l] = r.reduce((e, o) => {
          let {
            cells: r,
            colspan: i,
            rowspan: a,
            width: l
          } = o.context;
          let [s, c, d] = e;
          n.push(l);
          return [s + r, c + i, Math.max(d, a)];
        }, [0, 0, 0]);
        o.lineCellsNum = i;
        o.lineColsNum = a;
        o.lineMaxRowspan = l;
        o.lineColsWidth = n;
        let s = {
          ...e,
          data: {},
          children: r
        };
        e.children = [s];
      }
    },
    chart: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["SHEET-BLOCKS-HTML-ORIGIN"],
        selector: "[data-block-type=\"CHART\"]"
      },
      preprocess: () => !!et(),
      enter(e, o) {
        let {
          data: r,
          payload: n,
          context: i,
          node: a
        } = e;
        i._ignoreChild = true;
        r.type = docBlockTypeConstants.blockTypeConstants.CHART_REFER;
        r.token = a.getAttribute("data-block-token") || "";
        r.revision = -1;
        r.creatorId = chatUserInfoService.userInfoService.getCurrentUser().get("id");
        r.align = "left";
        r.width = 725;
        r.height = 595;
        n.html = a;
      },
      exit(e) {
        e.alive = true;
      }
    },
    sheet: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["TABLE", "BYTE-SHEET-HTML-ORIGIN"]
      },
      preprocess(e) {
        let {
          node: o
        } = e;
        return false;
      },
      enter(e, o) {
        let {
          data: r,
          payload: n,
          context: i,
          node: a
        } = e;
        i._ignoreChild = true;
        let l = o.querySelectorAll("style");
        let c = collectionMapMatcher.mapWithMatcher(l, e => e.outerHTML);
        r.type = docBlockTypeConstants.blockTypeConstants.SHEET;
        r.token = "";
        n.styles = c;
        n.html = a;
      },
      exit(e) {
        e.alive = true;
      }
    },
    bitable: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["TABLE"]
      },
      preprocess(e) {
        let {
          node: o,
          context: r
        } = e;
        let n = o && o.dataset && o.dataset.byteBitable;
        return !!n && (r._ignoreChild = true, {
          initData: n
        });
      },
      enter(e, o, r) {
        let {
          data: n,
          node: i,
          payload: a
        } = e;
        let {
          initData: l
        } = r;
        n.type = docBlockTypeConstants.blockTypeConstants.BITABLE;
        n.token = "";
        a.initData = l;
        a.html = i;
      },
      exit(e) {
        e.alive = true;
      }
    },
    table: {
      matches: {
        nodeName: ["TABLE"]
      },
      preprocess(e, o) {
        let {
          node: r
        } = e;
        return !docxSheetPasteUtils.isValidTablePaste(r, o);
      },
      enter(e) {
        delete e.context.textType;
      },
      exit(e, o) {
        if (e.data.type === docBlockTypeConstants.blockTypeConstants.SHEET) {
          return;
        }
        let {
          node: r,
          context: n
        } = e;
        let {
          children: i
        } = e;
        if (n.microLayoutIgnore) {
          n._ignoreChild = true;
          let {
            textContent: o
          } = r;
          if (!o) {
            return;
          }
          e.children = [];
          e.data = {
            nodes: [{
              text: o.replace(/\n/g, ""),
              type: editorModuleConstantsConfig.editorContentTypes.PLAINTEXT
            }],
            type: docBlockTypeConstants.blockTypeConstants.TEXT
          };
          return;
        }
        let a = (i = i.filter(e => {
          let {
            node: o
          } = e;
          return o.tagName === "TR";
        })).length;
        let l = i.reduce((e, o) => Math.max(e, o.context.lineColsNum), 0);
        if (i.length === 0) {
          return;
        }
        if (l === 0) {
          ec.sheet.enter(e, o);
          ec.sheet.exit(e, o);
          return;
        }
        let s = [];
        let c = r.getElementsByTagName("colgroup");
        if ((s = c[0] ? Array.from(c[0].children).map(e => e.style.width ? docxTableDomUtils.extractLeadingNumber(e.style.width, tableLayoutConstants_1.tableConstant100) : Number(e.width)) : i[0].context.lineColsWidth).some(e => e < 0)) {
          docxEventCollector.wrappedCollector("doc_bug_track_dev", {
            action: "paste_column_width_check",
            info: JSON.stringify({
              colWidth: s,
              isFromColGroup: c[0]
            })
          });
        }
        let d = docxTableLayoutUtils.createColumnIds(l);
        let u = d.reduce((e, o, r) => {
          e[o] = {
            column_width: Math.max(0, Math.ceil(s[r])) || tableLayoutConstants_1.tableConstant100
          };
          return e;
        }, {});
        let p = docxTableLayoutUtils.createRowIds(a);
        let h = {};
        let g = (e, o, r, n, i) => {
          if (p[e] && d[o]) {
            h[`${p[e]}${d[o]}`] = {
              children: i ? i.children : [],
              merge_info: {
                row_span: r,
                col_span: n
              }
            };
          }
        };
        for (let e = 0; e < a; e++) {
          let {
            children: o
          } = i[e];
          let r = 0;
          for (let n = 0; n < l; n++) {
            let i;
            let a;
            if (h[`${p[e]}${d[n]}`]) {
              continue;
            }
            let l = o[r++];
            if (l) {
              i = l.context.colspan;
              a = l.context.rowspan;
            } else {
              i = 1;
              a = 1;
            }
            g(e, n, a, i, l);
            if (a > 1 || i > 1) {
              for (let o = 0; o < a; o++) {
                for (let r = 0; r < i; r++) {
                  if (o !== 0 || r !== 0) {
                    g(e + o, n + r, 1, 1);
                  }
                }
              }
            }
          }
        }
        let f = {
          cell_set: h,
          column_set: u,
          columns_id: d,
          rows_id: p,
          type: docBlockTypeConstants.blockTypeConstants.TABLE
        };
        docxTableDomUtils.expandTableRows(f);
        e.data = f;
        e.alive = true;
        e.children = [];
      }
    }
  };
  var ed = ec;
  require.d(exports, {
    isValidToken: function () {
      return el;
    },
    HtmlParseRules: function () {
      return ed;
    }
  });
}