// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Jx' to 'decodeSnapshotData'
// - Renamed export 'Rq' to 'convertBlockToHtml'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 107524
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var stringEscapeUtils = require("string-escape-utils") /*id: 74368*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docxImageDomPurifyUtils = require("docx-image-dom-purify-utils") /*id: 520102*/;
  let c = "block-paste-placeholder";
  var chatUserInfoService = require("chat-user-info-service") /*id: 152763*/;
  var mimeTypeUtils = require("mime-type-utils") /*id: 857103*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var docxUserDetailManager = require("docx-user-detail-manager") /*id: 794466*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var blockSettingResolver = require("block-setting-resolver") /*id: 272995*/;
  var editorDataManagerClass = require("editor-data-manager-class") /*id: 699568*/;
  let k = 0;
  function y() {
    k++;
    return `${docxUtilityHelpers.generateRandomId(12)}-${k}`;
  }
  function v(e, o, r) {
    let n;
    let {
      type: i
    } = e;
    let a = r || e.record.snapshot;
    o = o == null ? undefined : o.toLocaleLowerCase();
    switch (i) {
      case docBlockTypeConstants.blockTypeConstants.FILE:
        n = E(a, o);
        break;
      case docBlockTypeConstants.blockTypeConstants.DIAGRAM:
        n = function (e) {
          let {
            diagram: o
          } = e;
          return {
            blockType: "DIAGRAM_BLOCK",
            initData: escape(JSON.stringify({
              ...o,
              lastEditTime: 0
            })),
            props: {
              diagramType: o.diagramType,
              viewType: "card"
            }
          };
        }(a);
        break;
      case docBlockTypeConstants.blockTypeConstants.ISV:
        n = function (e) {
          let o;
          let r = e.editorAPI.viewService.getBlockViewByBlockId(e.id);
          if (r) {
            let i = blockSettingResolver.getBlockSetting(e.type, r.blockManager, "onCopy");
            o = i == null ? undefined : i({
              block: e,
              blockView: r
            })?.schema;
          }
          return {
            blockId: e.id,
            blockType: "ISV_BLOCK",
            props: {
              data: {
                blockTypeId: r == null ? undefined : r.blockTypeId,
                AppBlockId: "",
                schema: o
              }
            }
          };
        }(e);
        break;
      case docBlockTypeConstants.blockTypeConstants.MINDMAP:
        n = function (e) {
          var o;
          let {
            height: r
          } = e.record.snapshot;
          let n = e.editorAPI.viewService.getBlockViewByBlockId(e.id);
          return {
            blockType: "MINDNOTE_BLOCK",
            initData: escape(JSON.stringify(n == null ? undefined : (o = n.bridge) === null || o === undefined ? undefined : o.handleCopy(e.id))),
            props: {
              renderSource: "doc",
              size: {
                width: 730,
                height: r,
                originalWidth: 730,
                originalHeight: 404,
                isModified: true
              },
              resizeType: 5,
              sliderType: 1
            }
          };
        }(e);
        break;
      case docBlockTypeConstants.blockTypeConstants.CHAT_CARD:
        n = function (e, o) {
          let {
            chatCardInfo: r
          } = e.editorAPI.viewService.getBlockViewByBlockId(e.id) || {};
          return {
            blockType: "CHAT_CARD_BLOCK",
            props: {
              data: {
                author: chatUserInfoService.userInfoService.getCurrentUser().get("id"),
                chatId: o.chat_id,
                chatToken: "none",
                icon: r ? r.icon : "none"
              }
            }
          };
        }(e, a);
        break;
      case docBlockTypeConstants.blockTypeConstants.IFRAME:
        n = function (e) {
          let {
            iframe: {
              component: o,
              original_height: r,
              original_width: n,
              height: i,
              width: a
            }
          } = e;
          let {
            type: l,
            original_text: s,
            url: c
          } = o;
          return {
            blockType: "IFRAME_BLOCK",
            props: {
              data: {
                type: l,
                url: c,
                originalText: decodeURIComponent(s)
              },
              resizeType: 2,
              size: {
                originalHeight: r,
                originalWidth: n,
                height: i,
                width: a,
                isModified: n === a && r === i
              }
            }
          };
        }(a);
        break;
      case docBlockTypeConstants.blockTypeConstants.BOOKMARK:
        n = function (e) {
          let {
            bookmark: {
              title: o,
              url: r,
              cover_height: n,
              cover_url: i,
              cover_width: a,
              icon: l,
              summary: s
            }
          } = e;
          return {
            blockType: "LINK_BLOCK",
            props: {
              data: {
                cover_height: n,
                cover_url: i,
                cover_width: a,
                summary: s,
                title: o,
                url: r,
                icon: l,
                linkProvider: "smartLink",
                linkType: "bookmark",
                entityId: ""
              },
              displayMode: "block",
              viewType: "card"
            }
          };
        }(a);
        break;
      case docBlockTypeConstants.blockTypeConstants.POLL:
        n = function (e) {
          let {
            poll_type: o,
            option_map: r,
            option_ids: n,
            title: i,
            when_result_visible: a
          } = e;
          let l = new Date().getTime();
          return {
            blockType: "POLL_BLOCK",
            props: {},
            initData: escape(JSON.stringify({
              title: editorDataManagerClass.EditorDataManager.getPlainText(i),
              type: o,
              voteMap: {},
              voteOptions: n,
              voteOptionMap: n.reduce((e, o) => {
                e[o] = {
                  id: o,
                  text: editorDataManagerClass.EditorDataManager.getPlainText(r[o].text),
                  createdAt: l,
                  updatedAt: l,
                  votes: []
                };
                return e;
              }, {}),
              voteResultVisible: a
            }))
          };
        }(a);
    }
    if (n) {
      n.blockId = uuidGeneratorUtil.generateUuid();
      return JSON.stringify(n);
    }
  }
  function E(e, o = "card") {
    let {
      file: {
        token: r,
        name: n,
        size: i
      }
    } = e;
    let a = (n.split(".").pop() || "").toLocaleLowerCase();
    return {
      blockId: uuidGeneratorUtil.generateUuid(),
      blockType: "FILE_CARD_BLOCK",
      props: {
        data: {
          fileId: y(),
          fileInfo: {
            driveKey: r,
            name: n,
            size: i,
            type: a,
            useDriveStorage: true,
            actualType: mimeTypeUtils.lookup(n) || "",
            uploadOwner: chatUserInfoService.userInfoService.getCurrentUser().get("id")
          }
        },
        displayMode: o === "inline" ? "inline" : "block",
        fromCopy: true,
        viewType: o
      }
    };
  }
  var docxTableMarkdownConverter = require("docx-table-markdown-converter") /*id: 325871*/;
  var mentionDocManagerToken = require("mention-doc-manager-token") /*id: 688263*/;
  var docxUrlPreviewUtils_1 = require("docx-url-preview-utils_1") /*id: 293956*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var dateTimeReminderUtils = require("date-time-reminder-utils") /*id: 20927*/;
  var driveDocInlineComponentUtils = require("drive-doc-inline-component-utils") /*id: 759062*/;
  var inlineComponentFacade = require("inline-component-facade") /*id: 678614*/;
  var displayTypeConstants = require("display-type-constants") /*id: 897087*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var syncedBlockUrlUtil = require("synced-block-url-util") /*id: 784437*/;
  var fileUtilsAndViewHelpers = require("file-utils-and-view-helpers") /*id: 192103*/;
  var docxDocumentNodeFactory = require("docx-document-node-factory") /*id: 52340*/;
  var docBlockDepthUtil = require("doc-block-depth-util") /*id: 511268*/;
  var docBlockViewTypeResolver = require("doc-block-view-type-resolver") /*id: 117628*/;
  var docxImageUrlUtils = require("docx-image-url-utils") /*id: 219802*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  function P(e) {
    return btoa(encodeURIComponent(JSON.stringify(e, null, 0)).replace(/%([0-9A-F]{2})/g, (e, o) => String.fromCharCode(`0x${o}`)));
  }
  function F(e) {
    return JSON.parse(decodeURIComponent(atob(e).split("").map(e => `%${`00${e.charCodeAt(0).toString(16)}`.slice(-2)}`).join("")));
  }
  let H = {
    [docBlockTypeConstants.blockTypeConstants.HEADING1]: "h1",
    [docBlockTypeConstants.blockTypeConstants.HEADING2]: "h2",
    [docBlockTypeConstants.blockTypeConstants.HEADING3]: "h3",
    [docBlockTypeConstants.blockTypeConstants.HEADING4]: "h4",
    [docBlockTypeConstants.blockTypeConstants.HEADING5]: "h5",
    [docBlockTypeConstants.blockTypeConstants.HEADING6]: "h6",
    [docBlockTypeConstants.blockTypeConstants.HEADING7]: "div",
    [docBlockTypeConstants.blockTypeConstants.HEADING8]: "div",
    [docBlockTypeConstants.blockTypeConstants.HEADING9]: "div"
  };
  function j(e) {
    if (!fileUtilsAndViewHelpers.isFileViewType(e)) {
      return "";
    }
    let o = E(e, "inline");
    return `<span ${Z(inlineComponentFacade.mentionTypes.FILE)} ${U(o)}><span class="${c}">${e.file.name}</span></span>`;
  }
  function W(e, o) {
    let r = (e == null ? undefined : e.parent_id) ? o.getBlockModelsByRecordId(e.parent_id)[0] : null;
    if (r && docBlockTypeConstants.agendaCodeTypes.includes(r.type)) {
      let e = o.getBlockViewByBlockIdNotCheck(r.id);
      if (e) {
        return docxUrlPreviewUtils_1.parseUrlPreview(r.snapshot.text, e).initialAttributedTexts.text[0];
      }
    }
    return "";
  }
  function U(e) {
    let o = stringEscapeUtils.escapeHTMLAttribute(JSON.stringify(e));
    return `data-meta-block-props="${o}"`;
  }
  function Z(e) {
    return `data-inline-type="${e}"`;
  }
  let z = function (e, o, r, n = {}) {
    let {
      processDelta: a
    } = n;
    let l = e.editorAPI.viewService.getBlockViewByBlockId(e.id);
    if (!l) {
      return "";
    }
    let s = r(e.id);
    let d = l.model.zoneState.slice(s.start, s.end).getContent();
    let u = a ? a(d) : d;
    let g = editorTextBlockUtilities.mergeAdjacentOps(u.ops, ["link", "localLink"]);
    let f = "";
    for (let e = 0; e < g.length; e++) {
      var b;
      var k;
      let r = g[e];
      let n = r.attributes || {};
      if (n.fixEnter === "true" && r.insert === "\n") {
        continue;
      }
      let a = stringEscapeUtils.escapeHTML((b = r.insert) ? b.replace(/[\u200b-\u200f\uFEFF\u202a-\u202e]/g, "") : "");
      if (n[inlineComponentFacade.componentType]) {
        if (!(a = function (e, o, r) {
          let n;
          try {
            n = JSON.parse(e);
          } catch (e) {
            return "";
          }
          let {
            type: i,
            data: a
          } = n;
          if (i === inlineComponentFacade.mentionTypes.USER) {
            var l;
            let {
              uid: e
            } = a;
            let r = docxUserDetailManager.UserDetailManager.getUserShowName(e);
            let n = function (e) {
              let {
                uid: o
              } = e;
              let r = docxUserDetailManager.UserDetailManager.getCache(o);
              if (r) {
                return {
                  blockType: "AT_USER_BLOCK",
                  blockId: uuidGeneratorUtil.generateUuid(),
                  props: {
                    displayMode: "inline",
                    data: {
                      mentionNotify: false,
                      user: {
                        avatar_url: r.avatar_url,
                        cn_name: r.name,
                        en_name: r.en_name,
                        id: o,
                        name: r.name,
                        type: 0,
                        not_notify: false,
                        is_external: false
                      }
                    }
                  }
                };
              } else {
                return {};
              }
            }(a);
            let s = (l = n.props) === null || l === undefined ? undefined : l.data.user.id;
            o = `<span ${Z(i)} ${U(n)}><span class="${c}" data-lark-user-id="${s}">${r ? `@${r} ` : ""}</span></span>`;
          } else if (i === inlineComponentFacade.mentionTypes.REMINDER) {
            let {
              is_whole_day: e,
              expire_time: r
            } = a;
            let n = function (e) {
              let {
                expire_time: o,
                is_whole_day: r,
                notify_time: n
              } = e;
              return {
                blockType: "REMINDER_BLOCK",
                blockId: uuidGeneratorUtil.generateUuid(),
                props: {
                  data: {
                    expireTime: o,
                    isWholeDay: r,
                    notifyTime: n,
                    shouldNotify: false
                  },
                  displayMode: "inline"
                }
              };
            }(a);
            o = `<span class="j-block-container"><span ${Z(i)} ${U(n)}>${dateTimeReminderUtils.formatTimestamp(r, e)}</span></span>`;
          } else if (i === inlineComponentFacade.mentionTypes.DOC) {
            let {
              raw_url: e,
              token: n,
              file_type: l,
              title: s
            } = a;
            let c = r.editorAPI.getService(mentionDocManagerToken.mentionDocMgrToken, {
              optional: true
            });
            let d = c == null ? undefined : c.getMentionDocDataByToken(n);
            if (d == null ? undefined : d.icon_info) {
              a.icon_info = d == null ? undefined : d.icon_info;
            }
            let u = driveDocInlineComponentUtils.getDefaultTitleByType(n, l, s);
            let p = driveDocInlineComponentUtils.getRootToken(r);
            let h = driveDocInlineComponentUtils.isNodeUnreadable(p, n);
            let g = function (e) {
              let {
                raw_url: o,
                file_type: r,
                token: n,
                icon_info: i
              } = e;
              let a = i == null ? undefined : i.iconInfoStr;
              let l = {
                link: encodeURIComponent(o),
                token: n,
                type: r,
                uuid: y(),
                "custom-icon-key": (i == null ? undefined : i.key) ? encodeURIComponent(i.key) : undefined,
                "custom-icon-type": (i == null ? undefined : i.type) || undefined,
                "custom-icon-info": a ? encodeURIComponent(a) : undefined
              };
              if (!(i == null ? undefined : i.key)) {
                delete l["custom-icon-key"];
              }
              if (!(i == null ? undefined : i.type)) {
                delete l["custom-icon-type"];
              }
              if (!a) {
                delete l["custom-icon-info"];
              }
              return Object.entries(l).map(e => {
                let [o, r] = e;
                return `mention-${o}_${r}`;
              }).join(" ");
            }(a);
            let m = `<span ${Z(i)} class="${g}"><a href="${e}" data-href=${e}>${u}</a></span>`;
            o = h ? u : m;
          } else if (i === inlineComponentFacade.mentionTypes.FILE) {
            o = j(docxDocumentNodeFactory.createFileNode(a, true));
          } else if (i === inlineComponentFacade.mentionTypes.URL) {
            let {
              raw_url: e
            } = a;
            o = `<a href="${e}" data-href=${e}>${e}</a>`;
          } else if (i === inlineComponentFacade.mentionTypes.BUTTON) {
            let {
              text: e
            } = a;
            o = `<span>${e}</span>`;
          }
          return o;
        }(n[inlineComponentFacade.componentType], a, o))) {
          continue;
        }
      } else if (n[displayTypeConstants.displayInlineBlock] && !(a = function (e, o) {
        let r = o.getRecord(e);
        if (!r || ![docBlockTypeConstants.blockTypeConstants.FILE, docBlockTypeConstants.blockTypeConstants.JIRA_ISSUE, docBlockTypeConstants.blockTypeConstants.ISV, docBlockTypeConstants.blockTypeConstants.URL_PREVIEW].includes(r.snapshot.type)) {
          return "";
        }
        let n = {
          [docBlockTypeConstants.blockTypeConstants.FILE]: j,
          [docBlockTypeConstants.blockTypeConstants.URL_PREVIEW]: W
        }[r.snapshot.type];
        if (n) {
          return n(r.snapshot, o);
        } else {
          return "";
        }
      }(n[displayTypeConstants.displayInlineBlock], o))) {
        continue;
      }
      if (n.link || n.localLink) {
        let e = decodeURIComponent(n.link || n.localLink);
        a = `<a href="${e}" data-lark-is-custom="true">${a}</a>`;
      }
      if (n.inlineCode) {
        a = `<code>${a}</code>`;
      }
      if (n.bold) {
        a = `<strong>${a}</strong>`;
      }
      if (n.italic) {
        a = `<em>${a}</em>`;
      }
      if (n.underline) {
        a = `<u>${a}</u>`;
      }
      if (n.strikethrough) {
        a = `<s>${a}</s>`;
      }
      let l = [];
      if (n.textHighlight) {
        l.push(`color:${n.textHighlight}`);
      }
      if (n.textHighlightBackground) {
        l.push(`background-color:${n.textHighlightBackground}`);
      }
      if (l.length > 0) {
        a = `<span style="${l.join(";")}">${a}</span>`;
      }
      if (n.equation) {
        let e = stringEscapeUtils.escapeHTMLAttribute(JSON.stringify((k = n.equation, {
          blockId: uuidGeneratorUtil.generateUuid(),
          blockType: "EQUATION_BLOCK",
          initData: {},
          props: {
            data: {
              equation: k
            },
            displayMode: "inline",
            viewType: "inline"
          }
        })));
        let o = n.equation.slice(0, n.equation.length - 1);
        a = `<span class="j-block-container"><span data-meta-block-props="${e}"><span class="block-paste-placeholder">$$${o}$$</span></span></span>`;
      }
      f += a;
    }
    return f;
  };
  require.d(exports, {
    decodeSnapshotData: function () {
      return F;
    },
    convertBlockToHtml: function () {
      return function e(o) {
        let {
          nodes: r,
          model: i,
          children: c,
          blockManager: d,
          headingModule: u,
          needInherit: p,
          getTextSelectRange: h,
          parentModel: f,
          processDelta: b
        } = o;
        let {
          type: k,
          recordId: y
        } = i;
        let E = c.length < 1;
        let I = {};
        let _ = {
          attrs: I,
          tagName: "div",
          recordId: i.record.id
        };
        let R = true;
        (function (e, o) {
          if (e.isTextBlock && e.zoneState.length() > 1) {
            let e = o.style || "";
            o.style = `white-space:pre;${e}`;
          }
        })(i, I);
        if (!p) {
          _.text = z(i, d, h, {
            processDelta: b
          });
          _.text = docxImageDomPurifyUtils.sanitizeHtmlWithTracking(_.text, d);
          _.tagName = "div";
          r.push(_);
          return r;
        }
        (function (e, o) {
          var r;
          let n = (o == null ? undefined : (r = o.style) === null || r === undefined ? undefined : r.split(";")) || [];
          let {
            record: {
              snapshot: i
            }
          } = e;
          if (i.align) {
            n.push(`text-align:${e.record.snapshot.align}`);
          }
          if (i.text_indent === 1 && i.type === docBlockTypeConstants.blockTypeConstants.TEXT) {
            n.push("text-indent:2em");
          }
          if (i.background_color) {
            n.push(`background:${i.background_color}`);
          }
          if (n.length) {
            o.style = n.join(";");
          }
        })(i, I);
        try {
          var D;
          var F;
          var j;
          if (docBlockTypeConstants.agendaCodeTypes.includes(k)) {
            let e = z(i, d, h, {
              processDelta: b
            });
            I.class = "ace-line";
            _.text = e;
            let o = docBlockDepthUtil.getBlockDepth(i);
            if ([...docBlockTypeConstants.headingTypeArray, docBlockTypeConstants.blockTypeConstants.TEXT, docBlockTypeConstants.blockTypeConstants.QUOTE].includes(k) && o > 1) {
              _.text = docxTableMarkdownConverter.repeatString((o - 1) * 2, "&nbsp;") + _.text;
            }
            switch (k) {
              case docBlockTypeConstants.blockTypeConstants.PAGE:
                _.tagName = E ? "div" : "h1";
                break;
              case docBlockTypeConstants.blockTypeConstants.TEXT:
              case docBlockTypeConstants.blockTypeConstants.HEADING1:
              case docBlockTypeConstants.blockTypeConstants.HEADING2:
              case docBlockTypeConstants.blockTypeConstants.HEADING3:
              case docBlockTypeConstants.blockTypeConstants.HEADING4:
              case docBlockTypeConstants.blockTypeConstants.HEADING5:
              case docBlockTypeConstants.blockTypeConstants.HEADING6:
              case docBlockTypeConstants.blockTypeConstants.HEADING7:
              case docBlockTypeConstants.blockTypeConstants.HEADING8:
              case docBlockTypeConstants.blockTypeConstants.HEADING9:
                {
                  let r;
                  let n = k.startsWith("heading");
                  let {
                    seq: a,
                    text_indent: l
                  } = i.record.snapshot;
                  let s = u == null ? undefined : u.getOrder(y);
                  let d = null;
                  if (s) {
                    d = `${s[s.length - 1]}`;
                  }
                  let p = n ? H[k] : "div";
                  let h = i.children.length > 0 && o === 1;
                  if (a || h) {
                    r = {
                      tagName: p,
                      text: _.text,
                      attrs: {}
                    };
                    _.children = [{
                      tagName: a ? "li" : "div",
                      children: [r, ...(h ? [{
                        tagName: "div",
                        children: c
                      }] : c)]
                    }];
                    if (a) {
                      _.tagName = "ol";
                      if (_.attrs) {
                        _.attrs.start = d || "1";
                      } else {
                        _.attrs = {
                          start: d || "1"
                        };
                      }
                      _.children[0].attrs = {
                        "data-list": "number"
                      };
                    } else {
                      _.tagName = "div";
                    }
                    delete _.text;
                  } else {
                    r = _;
                    if (c.length === 0 && e === "") {
                      _.text = "<br />";
                    } else {
                      _.tagName = p;
                      _.children = c;
                    }
                  }
                  r.attrs ||= {};
                  if (n) {
                    r.attrs.class = `heading-${k.substr(-1)}`;
                  } else if (l === 1 && k === docBlockTypeConstants.blockTypeConstants.TEXT) {
                    I.class += " text-indent";
                  }
                  break;
                }
              case docBlockTypeConstants.blockTypeConstants.ORDERED:
              case docBlockTypeConstants.blockTypeConstants.BULLET:
              case docBlockTypeConstants.blockTypeConstants.TODO:
                {
                  let e = "";
                  if (k === docBlockTypeConstants.blockTypeConstants.TODO) {
                    let o = i.record.snapshot.done;
                    e = `${o ? "done" : "check"}`;
                  } else {
                    e = k === docBlockTypeConstants.blockTypeConstants.ORDERED ? "number" : "bullet";
                  }
                  I["data-list"] = e;
                  _.tagName = "li";
                  _.text = `<div>${_.text}</div>`;
                  _.text = docxImageDomPurifyUtils.sanitizeHtmlWithTracking(_.text, d);
                  let o = k === docBlockTypeConstants.blockTypeConstants.ORDERED ? "ol" : "ul";
                  if (i.record.snapshot.children?.length) {
                    _.children = [{
                      tagName: o,
                      children: c,
                      attrs: {
                        class: `list-${e}${docBlockDepthUtil.getBlockDepth(i) + 1}`
                      },
                      payload: {
                        isListParent: true
                      }
                    }];
                  }
                  let n = lastElementHelper.getLastElement(r);
                  if ((n == null ? undefined : n.payload?.isListParent) && n.children?.length && ["ol", "ul"].includes(n.tagName) && n.tagName === o) {
                    n.children.push(_);
                    R = false;
                  } else if (!f || (j = f.type, ![docBlockTypeConstants.blockTypeConstants.ORDERED, docBlockTypeConstants.blockTypeConstants.BULLET, docBlockTypeConstants.blockTypeConstants.TODO].includes(j))) {
                    _ = {
                      children: [_],
                      tagName: o,
                      attrs: {
                        start: d.orderMap.get(i.record.id) || "1",
                        class: `list-${e}1`
                      },
                      payload: {
                        isListParent: true
                      }
                    };
                  }
                  break;
                }
              case docBlockTypeConstants.blockTypeConstants.QUOTE:
                _.tagName = "blockquote";
                break;
              case docBlockTypeConstants.blockTypeConstants.CODE:
                {
                  _.tagName = "pre";
                  let e = {};
                  e["data-wrap"] = String(!!i.record.snapshot.wrap);
                  _.children = [{
                    tagName: "code",
                    text: `<div>${z(i, d, h, {
                      processDelta: b
                    })}</div>`,
                    attrs: {
                      class: `language-${i.record.snapshot.language}`,
                      "data-lark-language": i.record.snapshot.language,
                      ...e
                    }
                  }];
                  delete _.text;
                }
            }
            if (I.class) {
              I.class += " ace-line";
            } else {
              I.class = "ace-line";
            }
            _.text = _.text && docxImageDomPurifyUtils.sanitizeHtmlWithTracking(_.text, d);
          } else if (syncUrlBlockUtils.isSyncingActive() && k === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE) {
            _.text = z(i, d, h, {
              processDelta: b
            });
            r.push(_);
            r.push(...o.children);
            R = false;
          } else {
            I["data-type"] = k;
            _.children = [{
              tagName: "span",
              attrs: {
                class: "block-paste-placeholder"
              },
              text: t("CreationDoc_DocX_CrossFilePaste_Display_no_toast")
            }];
            switch (k) {
              case docBlockTypeConstants.blockTypeConstants.VIEW:
                {
                  let o = i.children[0].id;
                  let n = d.getBlockModelByBlockId(o);
                  return e({
                    nodes: r,
                    model: n,
                    children: c,
                    blockManager: d,
                    headingModule: u,
                    needInherit: p,
                    getTextSelectRange: h,
                    parentModel: f
                  });
                }
              case docBlockTypeConstants.blockTypeConstants.DIVIDER:
                _.children = [{
                  tagName: "hr"
                }];
                break;
              case docBlockTypeConstants.blockTypeConstants.GRID:
                _.children = [];
                (function (e, o, r) {
                  let n = [];
                  let i = new Set();
                  e.forEach(o => {
                    var r;
                    if ((r = o.children) !== null && r !== undefined) {
                      r.forEach((o, r) => {
                        let a;
                        if (!i.has(o.recordId)) {
                          a = false;
                          if (e.every(e => {
                            let n = e.children[r];
                            let i = n == null ? undefined : n.children?.[0];
                            if (i && i.tagName === "img") {
                              a = true;
                            }
                            return !n || (i == null ? undefined : i.tagName) === "img";
                          }) && a) {
                            n.push(e.map(e => {
                              var n;
                              let a = (n = e.children[r]) === null || n === undefined ? undefined : n.children?.[0];
                              if (a) {
                                a.recordId = e.children[r].recordId;
                                i.add(a.recordId);
                              }
                              return a;
                            }).filter(e => e !== undefined));
                          } else {
                            n.push(o);
                          }
                        }
                      });
                    }
                  });
                  n.forEach(e => {
                    if (e) {
                      if (Array.isArray(e)) {
                        let n = e.reduce((e, o) => {
                          let {
                            image: {
                              width: n,
                              scale: i
                            }
                          } = r.getBlockModelsByRecordId(o.recordId)[0].record.snapshot;
                          return e + n * i;
                        }, 0);
                        let i = {
                          tagName: "div",
                          attrs: {
                            class: "image-uploaded gallery",
                            "data-ace-gallery-json": JSON.stringify({
                              items: e.map(e => {
                                let o = e.recordId;
                                let i = r.getBlockModelsByRecordId(o)[0];
                                let a = i.parent.record.snapshot.width_ratio;
                                let {
                                  image: {
                                    width: l
                                  }
                                } = i.record.snapshot;
                                return docxImageDomPurifyUtils.buildImageDataFromBlock(r, o, a * n / l);
                              })
                            })
                          },
                          children: e
                        };
                        o.push(i);
                      } else {
                        o.push(e);
                      }
                    }
                  });
                })(c, r, d);
                break;
              case docBlockTypeConstants.blockTypeConstants.GRID_COLUMN:
                _.children = c;
                break;
              case docBlockTypeConstants.blockTypeConstants.CALLOUT:
                {
                  let {
                    emoji_id: e,
                    background_color: o,
                    border_color: r
                  } = i.record.snapshot;
                  _.tagName = "div";
                  _.attrs = {
                    class: "zoneType-calloutBlock"
                  };
                  _.children = [{
                    attrs: {
                      class: "callout-container",
                      "data-emoji-id": e
                    },
                    tagName: "div",
                    children: [{
                      tagName: "div",
                      attrs: {
                        class: "callout-block",
                        style: `background-color:${o};border-color:${r};border-radius:8px;`
                      },
                      children: c
                    }]
                  }];
                  break;
                }
              case docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER:
                _.tagName = "blockquote";
                _.children = c;
                break;
              case docBlockTypeConstants.blockTypeConstants.IMAGE:
                {
                  let e = i.record.snapshot;
                  let {
                    token: o,
                    width: r,
                    height: n
                  } = e.image;
                  let a = platformDocUtils._ce({
                    fileToken: o
                  }, true);
                  let c = docxImageUrlUtils.getDocxImageUrl(o, i.record.id);
                  if (browserEnvironmentDetectionUtils.browserEnv.isAndroid && !a) {
                    a = c;
                  }
                  I["data-ace-gallery-json"] = JSON.stringify({
                    items: [docxImageDomPurifyUtils.buildImageDataFromBlock(d, i.record.id)]
                  });
                  I.class = "image-uploaded gallery";
                  _.children = [{
                    tagName: "img",
                    attrs: {
                      "data-no-request-src": a,
                      "data-single-block": "true",
                      "data-snapshot": P(e),
                      "data-suite": P({
                        fileToken: o,
                        objType: platformDocUtils.Gkz.DOCX,
                        objToken: i.record.id,
                        originSrc: docxImageUrlUtils.buildImageUrl(o, i.record.id)
                      }),
                      "data-src": c,
                      "data-width": ((D = i.record.snapshot) === null || D === undefined ? undefined : D.image?.width) || "",
                      "data-height": ((F = i.record.snapshot) === null || F === undefined ? undefined : F.image?.height) || "",
                      "data-lark-image-uri": `drivetoken://${o}`,
                      "data-lark-image-width": r || "",
                      "data-lark-image-height": n || ""
                    }
                  }];
                  break;
                }
              case docBlockTypeConstants.blockTypeConstants.IFRAME:
                _.attrs = {
                  "data-meta-block-props": v(i),
                  class: "j-block-container"
                };
                break;
              case docBlockTypeConstants.blockTypeConstants.BOOKMARK:
                _.attrs = {
                  "data-meta-block-props": v(i),
                  class: "j-block-container"
                };
                _.children = [{
                  tagName: "span",
                  attrs: {
                    class: "block-paste-placeholder"
                  },
                  text: i.snapshot.bookmark.url || t("CreationDoc_DocX_CrossFilePaste_Display_no_toast")
                }];
                break;
              case docBlockTypeConstants.blockTypeConstants.FILE:
                {
                  let e = docBlockViewTypeResolver.getViewType(i.record, d);
                  Object.assign(I, {
                    "data-meta-block-props": v(i, e),
                    class: "j-block-container"
                  });
                  let {
                    token: o,
                    mimeType: r,
                    size: n,
                    name: a,
                    originWidth: l,
                    originHeight: s,
                    width: c,
                    height: u
                  } = i.record.snapshot.file;
                  if (r.startsWith("video") && o) {
                    _.children = [{
                      tagName: "video",
                      attrs: {
                        "data-lark-video-uri": `drivetoken://${o}`,
                        "data-lark-video-mime": r,
                        "data-lark-video-size": n,
                        "data-lark-video-duration": 0,
                        "data-lark-video-name": a,
                        "data-lark-video-width": l ?? c,
                        "data-lark-video-height": s ?? u
                      }
                    }];
                  }
                  break;
                }
              case docBlockTypeConstants.blockTypeConstants.DIAGRAM:
                _ = {
                  tagName: "div",
                  attrs: {
                    class: `block-id-${y} block-type-DIAGRAM_BLOCK block-placeholder`
                  },
                  children: [{
                    tagName: "div",
                    attrs: {
                      class: "j-block-container"
                    },
                    children: [{
                      tagName: "span",
                      attrs: {
                        "data-meta-block-props": v(i)
                      },
                      children: [{
                        tagName: "span",
                        attrs: {
                          class: "block-autonomous-region dom-pass-empty-check ignore-collect"
                        },
                        children: [{
                          tagName: "span",
                          attrs: {
                            class: "block-paste-placeholder"
                          },
                          text: t("CreationDoc_DocX_CrossFilePaste_Display_no_toast")
                        }]
                      }]
                    }]
                  }]
                };
                break;
              case docBlockTypeConstants.blockTypeConstants.MESSAGE:
                {
                  let e = i.record.snapshot.message_url;
                  _.children = [{
                    tagName: "a",
                    attrs: {
                      href: xssContentSanitizer.sanitizeUrl(e, null, {
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
                        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFwW$R-WmhTRkowWWtNe*FX%lhiSE5h%jFaN$RESk9kb%p0$25C-W$%$XdZekpHZ$ZvelZubz0"
                      })
                    },
                    text: e
                  }];
                  break;
                }
              case docBlockTypeConstants.blockTypeConstants.URL_PREVIEW:
                {
                  let e = i.rawUrl;
                  _.children = [{
                    tagName: "a",
                    attrs: {
                      href: xssContentSanitizer.sanitizeUrl(e, null, {
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
                        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFwW$R-WmhTRkowWWtNe*FX%lhiSE5h%jFaN$RESk9kb%p0$25C-W$%$XdZekpHZ$ZvelZubz0"
                      })
                    },
                    text: e
                  }];
                  break;
                }
              case docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE:
                {
                  let e = i.recordId;
                  let o = syncedBlockUrlUtil.getSyncedBlockUrl(e);
                  _.children = [{
                    tagName: "a",
                    attrs: {
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
                        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFwW$R-WmhTRkowWWtNe*FX%lhiSE5h%jFaN$RESk9kb%p0$25C-W$%$XdZekpHZ$ZvelZubz0"
                      })
                    },
                    text: o
                  }];
                  break;
                }
              case docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE:
                {
                  let e = i.snapshot.src_block_id;
                  let o = syncedBlockUrlUtil.getSyncedBlockUrl(e);
                  _.children = [{
                    tagName: "a",
                    attrs: {
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
                        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFwW$R-WmhTRkowWWtNe*FX%lhiSE5h%jFaN$RESk9kb%p0$25C-W$%$XdZekpHZ$ZvelZubz0"
                      })
                    },
                    text: o
                  }];
                }
            }
          }
        } catch (e) {
          docxUtilityHelpers.captureException("生成 html 复制内容出错！复制 block 中可能有脏数据！");
          return r;
        }
        if (R) {
          r.push(_);
        }
        return r;
      };
    }
  });
}