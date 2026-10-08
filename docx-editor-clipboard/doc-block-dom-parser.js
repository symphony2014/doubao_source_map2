// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DocBlockParser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 238292
         */
module.exports = function (module, exports, require) {
  var isDomElementUtil_1 = require("is-dom-element-util_1") /*id: 425304*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var mimeTypeUtils = require("mime-type-utils") /*id: 857103*/;
  var colorUtils = require("color-utils") /*id: 845364*/;
  var u = colorUtils;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var diagramConstants = require("diagram-constants") /*id: 75626*/;
  var docxDocumentNodeFactory = require("docx-document-node-factory") /*id: 52340*/;
  var docxLayoutConstants_1 = require("docx-layout-constants_1") /*id: 700786*/;
  var displayTypeConstants = require("display-type-constants") /*id: 897087*/;
  var docxInlineBlockRenderers = require("docx-inline-block-renderers") /*id: 381474*/;
  var docxTableDomUtils = require("docx-table-dom-utils") /*id: 40695*/;
  var docBlockParserUtils = require("doc-block-parser-utils") /*id: 247471*/;
  var domNodeTypesConstants = require("dom-node-types-constants") /*id: 196330*/;
  let T = [{
    type: docBlockTypeConstants.blockTypeConstants.LINK,
    match: e => {
      var o;
      return (o = e.props) !== null && o !== undefined && !!o.data && e.blockType === "LINK_BLOCK";
    },
    format: (e, o) => {
      let {
        props: {
          data: r
        }
      } = e;
      let {
        url: n,
        title: i,
        summary: l,
        cover_height: s,
        cover_url: c,
        cover_width: d,
        icon: u
      } = r;
      if (n === undefined || i === undefined) {
        throw Error();
      }
      let {
        data: p
      } = o;
      p.type = docBlockTypeConstants.blockTypeConstants.BOOKMARK;
      p.bookmark = {
        url: n,
        title: i,
        summary: l,
        icon: u,
        cover_height: s,
        cover_url: c,
        cover_width: d
      };
    }
  }, {
    type: docBlockTypeConstants.blockTypeConstants.IFRAME,
    match: e => {
      if (!e.props?.data) {
        return false;
      }
      let {
        blockType: r
      } = e;
      return r === "IFRAME_BLOCK";
    },
    format: (e, o) => {
      let {
        props: {
          data: r,
          size: n
        }
      } = e;
      let {
        width: i,
        originalWidth: a
      } = n;
      let {
        originalText: l
      } = r;
      if (!l) {
        throw Error();
      }
      let {
        data: s,
        payload: c
      } = o;
      s.original_text = l;
      if (i && a && !isNaN(i) && !isNaN(a)) {
        c.scale = i / a;
      }
    }
  }, {
    type: docBlockTypeConstants.blockTypeConstants.FILE,
    text: t("CreationDoc_DocX_Paste_DataCorrupted_toast_LocalFile"),
    match: e => {
      var r;
      if (!((r = e.props) === null || r === undefined ? undefined : r.data?.fileInfo)) {
        return false;
      }
      let {
        blockType: n
      } = e;
      return n === "FILE_CARD_BLOCK";
    },
    format: (e, o) => {
      let {
        props: {
          viewType: r,
          data: n
        }
      } = e;
      let {
        fileInfo: {
          driveKey: i,
          name: s,
          size: d,
          type: u
        }
      } = n;
      if (i === undefined) {
        throw Error();
      }
      let h = mimeTypeUtils.lookup(u) || "";
      let {
        context: g,
        node: f,
        data: k,
        payload: y
      } = o;
      let E = uuidGeneratorUtil.generateUuid();
      let T = docxDocumentNodeFactory.createFileNode({
        mime_type: h,
        name: s,
        size: d,
        token: i,
        source_block_id: E,
        source_version: 1,
        need_copy_resource: true
      }, true);
      if (r === "inline") {
        k.type = g.textType || docBlockTypeConstants.blockTypeConstants.TEXT;
        let e = {
          [displayTypeConstants.displayInlineBlock]: E
        };
        k.nodes = [{
          inlineblock: {
            id: E,
            snapshot: T
          },
          mark: e,
          text: " ",
          type: editorModuleConstantsConfig.editorContentTypes.PLAINTEXT
        }];
        y.hasInlineFile = true;
      } else {
        docBlockParserUtils.addViewChildElement(o, {
          node: f,
          context: g,
          data: T,
          children: [],
          payload: {
            token: i
          }
        }, r);
      }
    }
  }, {
    type: docBlockTypeConstants.blockTypeConstants.EQUATION,
    text: t("CreationDoc_DocX_Paste_DataCorrupted_toast_equation"),
    match: e => {
      let {
        blockType: o
      } = e;
      return o === "EQUATION_BLOCK";
    },
    format: (e, o) => {
      var n;
      let i = (e == null ? undefined : (n = e.props) === null || n === undefined ? undefined : n.data?.equation) || "\n";
      let {
        data: s,
        context: c,
        payload: d
      } = o;
      c.mark ||= {};
      let u = docxUtilityHelpers.generateRandomId(8);
      docxInlineBlockRenderers.EquationRendererClass.initEquationSet.add(u);
      s.nodes = [{
        text: " ",
        mark: {
          equation: i,
          objectID: u,
          ...c.mark
        },
        type: editorModuleConstantsConfig.editorContentTypes.EMBED
      }];
      d.inline = true;
      if (c.textType) {
        s.type = c.textType;
      } else {
        s.type = docBlockTypeConstants.blockTypeConstants.TEXT;
      }
    }
  }, {
    type: docBlockTypeConstants.blockTypeConstants.DIAGRAM,
    text: t("CreationDoc_DocX_Paste_DataCorrupted_toast_FlowChart"),
    match: e => {
      if (!e.props) {
        return false;
      }
      let {
        blockType: o
      } = e;
      return o === "DIAGRAM_BLOCK";
    },
    format: (e, o) => {
      let {
        props: {
          diagramType: r
        },
        initData: n
      } = e;
      if (n === undefined) {
        throw Error();
      }
      let {
        data: i
      } = o;
      let a = JSON.parse(unescape(n));
      delete a.lastEditTime;
      i.diagram = {
        ...a,
        diagramType: r || diagramConstants.diagramTypes.FLOWCHART
      };
    }
  }, {
    type: "unsupport",
    match: e => true,
    format: (e, o) => {
      o.data.nodes = [{
        text: t("CreationDoc_DocX_Display_Content_Unsupported_staytuned"),
        type: editorModuleConstantsConfig.editorContentTypes.PLAINTEXT
      }];
      o.data.type = docBlockTypeConstants.blockTypeConstants.TEXT;
    }
  }];
  let I = {
    type: docBlockTypeConstants.blockTypeConstants.CHAT_CARD,
    text: t("CreationDoc_DocX_Paste_DataCorrupted_toast_GroupCard"),
    match: e => {
      if (!e.props?.data) {
        return false;
      }
      let {
        blockType: r
      } = e;
      return r === "CHAT_CARD_BLOCK";
    },
    format: (e, o) => {
      let {
        props: {
          data: r
        }
      } = e;
      let {
        chatId: n
      } = r;
      let {
        data: i
      } = o;
      if (n === "none") {
        throw Error();
      }
      i.chat_id = n;
      o.alive = true;
    }
  };
  let _ = {
    type: docBlockTypeConstants.blockTypeConstants.IMAGE,
    text: t("CreationDoc_DocX_Paste_DataCorrupted_toast_image"),
    match: e => !!e.items && e.items.length !== 0,
    format: (e, o) => {
      let {
        items: r
      } = e;
      let {
        context: n,
        data: i,
        node: l,
        payload: d
      } = o;
      let u = n.align || "center";
      function p(e) {
        if (typeof e == "number") {
          return e;
        } else {
          return docxTableDomUtils.extractLeadingNumber(e, 240);
        }
      }
      function h(e) {
        let {
          uuid: o,
          width: r,
          image_type: n,
          size: i,
          natrualWidth: a,
          natrualHeight: l,
          file_token: s
        } = e;
        let d = p(a) || 240;
        let u = p(l) || 240;
        let h = p(r) / d || 1;
        return {
          height: u,
          width: d,
          mimeType: n,
          name: `${o}.${mimeTypeUtils.extension(n)}`,
          scale: h,
          size: i,
          token: s
        };
      }
      function g(e) {
        let o = l.querySelectorAll("img");
        let r = "";
        o.forEach(o => {
          let n = o.dataset.src && new URL(o.dataset.src);
          let i = e.src && new URL(decodeURIComponent(e.src));
          if ((n && n.pathname) === (i && i.pathname)) {
            r = o.src;
          }
        });
        return r;
      }
      if (r.length === 1) {
        let e = h(r[0]);
        d.src = xssContentSanitizer.sanitizeUrl(r[0].file_token ? decodeURIComponent(r[0].src) : g(r[0]), null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFwW$R-WlpiW*gy$1RKemR*bH$WbkJp%jFKc1kyaz$l$1J-Z%d4am$%bHJZakpOZFdOd$ZuTmFXRTExWk$oT2FHTnRaREZqZHowOQ"
        });
        d.fileToken = r[0].file_token;
        d.uuid = r[0].uuid;
        i.type = docBlockTypeConstants.blockTypeConstants.IMAGE;
        i.align = u;
        i.image = e;
      } else {
        let e;
        let n;
        let i = 0;
        let c = 0;
        let d = [];
        while (i < r.length) {
          if (i % docxLayoutConstants_1.configMarginMin == 0) {
            e = i;
            n = {
              data: {
                type: docBlockTypeConstants.blockTypeConstants.GRID
              },
              children: [],
              payload: {},
              context: {},
              node: l
            };
            c = r.slice(e, e + docxLayoutConstants_1.configMarginMin).reduce((e, o) => e + p(o.width), 0);
            d.push(n);
          }
          let o = r[i];
          let m = h(o);
          let b = {
            data: {
              type: docBlockTypeConstants.blockTypeConstants.GRID_COLUMN,
              width_ratio: p(o.width) / c
            },
            children: [{
              data: {
                image: m,
                type: docBlockTypeConstants.blockTypeConstants.IMAGE,
                align: u
              },
              context: {},
              payload: {
                src: xssContentSanitizer.sanitizeUrl(o.file_token ? decodeURIComponent(o.src) : g(o), null, {
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
                  filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFwW$R-WlpiW*gy$1RKemR*bH$WbkJp%jFKc1kyaz$l$1J-Z%d4am$%bHJZakpOZFdOd$ZuTmFXRTExWk$oT2FHTnRaREZqZHowOQ"
                }),
                fileToken: o.file_token
              },
              children: [],
              node: l
            }],
            payload: {},
            context: {},
            node: l
          };
          n.children.push(b);
          i++;
        }
        o.children = d;
      }
      return o;
    }
  };
  let R = {
    calloutIgnoreIcon: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        selector: ".ignore-dom"
      },
      preprocess(e) {
        var o;
        if ((o = e.node.firstElementChild) === null || o === undefined) {
          return undefined;
        } else {
          return o.classList.contains("emoji-mart-emoji-native");
        }
      },
      enter(e) {
        e.context._ignoreChild = true;
      }
    },
    callout: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        selector: ".callout-container"
      },
      addEmptyTextIfNoChild: true,
      enter(e) {
        let {
          node: o,
          data: r
        } = e;
        let n = o.dataset.emojiId;
        if (!docxTableDomUtils.isAsciiString(n)) {
          return;
        }
        let i = o.querySelector(".callout-block");
        if (!i) {
          return;
        }
        let l = e => u(e).setAlpha(1).toRgbString();
        let {
          backgroundColor: s
        } = i.style;
        let {
          borderColor: c
        } = i.style;
        r.background_color = s && l(s);
        r.border_color = c && l(c);
        r.emoji_id = n;
        r.type = docBlockTypeConstants.blockTypeConstants.CALLOUT;
        e.alive = true;
      }
    },
    docImage: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        selector: "[data-ace-gallery-json]"
      },
      ignoreChild: true,
      preprocess(e) {
        let o = e.node.getAttribute("data-ace-gallery-json");
        if (o) {
          try {
            o = JSON.parse(o);
          } catch (e) {
            return;
          }
          return {
            meta: o,
            formatter: _
          };
        }
      },
      enter(e, o, r) {
        let {
          meta: n,
          formatter: i
        } = r;
        e.data.type = i.type;
        i.format(n, e);
      }
    },
    docCommonBlock: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        selector: ".j-block-container"
      },
      ignoreChild: true,
      preprocess(e) {
        let o = docBlockParserUtils.parseJsonFromAttribute(e.node, "data-meta-block-props");
        if (!o) {
          let o = docBlockParserUtils.parseJsonFromAttribute(e.node, "data-clientside-chatcard-props");
          if (o) {
            return {
              meta: o,
              formatter: I
            };
          } else {
            e.context._ignoreChild = false;
            return;
          }
        }
        let r = T.find(e => e.match(o));
        if (!r) {
          e.context._ignoreChild = false;
          return;
        }
        return {
          meta: o,
          formatter: r
        };
      },
      enter(e, o, r) {
        let {
          meta: n,
          formatter: i
        } = r;
        e.data.type = i.type;
        try {
          i.format(n, e);
        } catch (o) {
          if (i.text) {
            e.data.nodes = [{
              text: i.text,
              type: editorModuleConstantsConfig.editorContentTypes.PLAINTEXT
            }];
            e.data.type = docBlockTypeConstants.blockTypeConstants.TEXT;
          }
        }
      }
    }
  };
  let B = {
    plaintextInGridColumn: {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.TEXT
      },
      enter(e) {
        if (e.data.type === docBlockTypeConstants.blockTypeConstants.GRID_COLUMN) {
          e.data.type = docBlockTypeConstants.blockTypeConstants.TEXT;
        }
      }
    }
  };
  var htmlPasteParser = require("html-paste-parser") /*id: 985949*/;
  var colorRgbUtils = require("color-rgb-utils") /*id: 194090*/;
  var themeColorManagerFacade = require("theme-color-manager-facade") /*id: 552375*/;
  var uiThemeColorDefinitions = require("ui-theme-color-definitions") /*id: 434278*/;
  var uiThemeConstants = require("ui-theme-constants") /*id: 541237*/;
  let D = {
    "micro-list": {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["P", "H1", "H2", "H3", "H4", "H5", "H6"]
      },
      enter(e) {
        let {
          node: o,
          context: r
        } = e;
        let n = o.getAttribute("style");
        if (!(n == null ? undefined : n.includes("mso-list"))) {
          return;
        }
        if (n) {
          /level(\d+)/.test(n);
        }
        r.level = Number(RegExp.$1) || 1;
        let i = o.querySelector("[style=\"mso-list:Ignore\"]") || o.querySelector("[style=\"mso-list:Ignore;\"]");
        if (i) {
          let e = (i.textContent || "").trim();
          r.textType = /(\.|\)|\d|、)$/.test(e) ? docBlockTypeConstants.blockTypeConstants.ORDERED : docBlockTypeConstants.blockTypeConstants.BULLET;
          i.remove();
        } else {
          r.textType = docBlockTypeConstants.blockTypeConstants.BULLET;
        }
      }
    },
    "micro-list-nest": {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["DIV"],
        selector: "#block-root"
      },
      exit(e) {
        let {
          context: o,
          children: r
        } = e;
        let n = o.textType;
        if (!n || n === docBlockTypeConstants.blockTypeConstants.ORDERED) {
          e.children = docxTableDomUtils.buildNestedTree(r, "level");
        }
      }
    },
    "micro-title": {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["P"],
        selector: ".MsoTitle"
      },
      enter(e) {
        e.context.textType = docBlockTypeConstants.blockTypeConstants.HEADING1;
        e.context.align = "center";
      }
    },
    "micro-subtitle": {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["P"],
        selector: ".MsoSubtitle"
      },
      enter(e) {
        e.data.type = docBlockTypeConstants.blockTypeConstants.TEXT;
        e.context.mark ||= {};
        e.context.mark.textHighlight = colorRgbUtils.colorToRgb(themeColorManagerFacade.getLightThemeMap(uiThemeConstants.basicTheme.Text).get(uiThemeColorDefinitions.colorConstants.COLOR_GRAY_TEXT));
      }
    },
    "micro-sup": {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        nodeName: ["SUP", "SUB"]
      },
      enter(e) {
        e.node.innerText = `(${e.node.innerText})`;
      }
    },
    "micro-color": {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        selector: ".MsoNormal"
      },
      preprocess(e) {
        let {
          context: o
        } = e;
        o.supportStyle ||= true;
        return true;
      }
    }
  };
  let A = {
    "shimo-color": {
      matches: {
        nodeType: domNodeTypesConstants.nodeTypes.ELEMENT,
        selector: "[data-shimo-docs],[data-docs-delta]"
      },
      preprocess(e) {
        let {
          context: o
        } = e;
        o.supportStyle ||= true;
        return true;
      }
    }
  };
  var x = {
    ...R,
    ...D,
    ...A,
    ...htmlPasteParser.HtmlParseRules,
    ...B
  };
  let O = e => Array.isArray(e) ? e : [e];
  class $ {
    parse(e) {
      var o;
      var r;
      let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : x;
      let a = e.getElementById("block-root");
      return {
        data: this.build(this.newPathNode(a, {}, n), a, i),
        spaceId: (o = a.querySelector("[data-space-id]")) === null || o === undefined ? undefined : o.getAttribute("data-space-id"),
        pageId: (r = a.querySelector("[data-page-id]")) === null || r === undefined ? undefined : r.getAttribute("data-page-id")
      };
    }
    build(e, o, r) {
      let s = [];
      let c = [];
      let {
        node: d
      } = e;
      let {
        nodeType: u,
        nodeName: p
      } = d;
      for (let i of Object.values(r)) {
        let r;
        if ((!i.matches.nodeType || i.matches.nodeType === u) && (!i.matches.nodeName || !!O(i.matches.nodeName).includes(p)) && (!i.matches.selector || !isDomElementUtil_1.isDomElement(d) || !d.matches || !!d.matches(i.matches.selector))) {
          if (i.ignoreChild) {
            e.context._ignoreChild = true;
          }
          if ((!i.preprocess || (r = i.preprocess(e, o))) && (i.enter && i.enter(e, o, r), c.unshift(i), e.context._ignoreChild)) {
            break;
          }
        }
      }
      if (!e.context._ignoreChild) {
        for (let n of Array.from(e.node.childNodes).filter(docxTableDomUtils.isValidTextNode)) {
          let a = this.build(this.newPathNode(n, {}, deepCloneWrapper_1.deepClone(e.context)), o, r);
          s.push(...a);
        }
      }
      e.children.push(...s);
      c.forEach(r => {
        if (r.exit) {
          r.exit(e, o);
        }
        if (r.addEmptyTextIfNoChild && e.children.length === 0) {
          e.children.push({
            data: {
              type: docBlockTypeConstants.blockTypeConstants.TEXT,
              nodes: [{
                text: "",
                type: editorModuleConstantsConfig.editorContentTypes.PLAINTEXT
              }]
            },
            children: [],
            node: e.node,
            context: {},
            payload: {
              addForEmpty: true
            }
          });
        }
      });
      let h = e.children.map(o => ({
        ...o,
        context: {
          ...e.context,
          ...o.context
        }
      }));
      if (e.alive === true) {
        return [e];
      } else if (h.length) {
        return h;
      } else if (Object.keys(e.data).length > 0) {
        return [e];
      } else {
        return h;
      }
    }
    newPathNode(e, o = {}, r = {}, n = [], i = {}) {
      return {
        node: e,
        data: o,
        context: r,
        children: n,
        payload: i
      };
    }
    constructor() {
      var e;
      var o;
      var r;
      o = undefined;
      if ((e = typeof (r = function (e, o) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var n = r.call(e, o || "default");
          if (typeof n != "object") {
            return n;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (o === "string" ? String : Number)(e);
      }(e = "dom", "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, e, {
          value: o,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = o;
      }
    }
  }
  require.d(exports, {
    DocBlockParser: function () {
      return $;
    }
  });
}