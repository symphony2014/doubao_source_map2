// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'qG' to 'convertBlockToTask'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 285770
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var l;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var hyperlinkTypeConstant = require("hyperlink-type-constant") /*id: 260977*/;
  var driveFileTypeConstants_1 = require("drive-file-type-constants_1") /*id: 944521*/;
  var chatUserInfoService = require("chat-user-info-service") /*id: 152763*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var docxUserDetailManager = require("docx-user-detail-manager") /*id: 794466*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var documentNodeFactory_2 = require("document-node-factory_2") /*id: 557996*/;
  require("editor-module-constants-config") /*id: 414567*/;
  require("rich-text-schema-resolver-factory") /*id: 873026*/;
  var displayTypeConstants = require("display-type-constants") /*id: 897087*/;
  var driveDocInlineComponentUtils = require("drive-doc-inline-component-utils") /*id: 759062*/;
  var editorDeltaTextUtils = require("editor-delta-text-utils") /*id: 728515*/;
  var clientsideLinkConstants_1 = require("clientside-link-constants_1") /*id: 306134*/;
  var insertBlockWithChildSnapshotHelper = require("insert-block-with-child-snapshot-helper") /*id: 554298*/;
  require("docx-block-selection-handler_1") /*id: 801350*/;
  require("compat-browser-selection-service_1") /*id: 22128*/;
  require("editor-delta-author-util") /*id: 517751*/;
  require("docx-comment-utils") /*id: 668699*/;
  var docxSuggestionModeToast = require("docx-suggestion-mode-toast") /*id: 940071*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var inlineComponentFacade = require("inline-component-facade") /*id: 678614*/;
  var documentLinkUtilities = require("document-link-utilities") /*id: 61891*/;
  var docTaskBlockFlags = require("doc-task-block-flags") /*id: 46259*/;
  var docxTaskStates = require("docx-task-states") /*id: 904051*/;
  let N = "AT_USER_BLOCK";
  let w = {};
  (r = {}).INLINE = "inline";
  r.CARD = "card";
  r.PREVIEW = "preview";
  let O = r;
  (o = {}).BLOCK = "block";
  o.INLINE = "inline";
  let A = o;
  let D = e => {
    let {
      blockType: n,
      initData: i,
      props: r,
      depLoading: o
    } = e;
    if (w[n] && r && !r.viewType) {
      let e = w[n];
      r.viewType = e;
      if (e === O.INLINE) {
        r.displayMode = A.INLINE;
      } else {
        r.displayMode = A.BLOCK;
      }
    }
    return {
      blockId: uuidGeneratorUtil.generateUuid(),
      blockType: n,
      props: r || {},
      initData: escape(JSON.stringify(i || {})),
      ...(o ? {
        depLoading: o
      } : {})
    };
  };
  function L(e) {
    let n;
    let {
      type: i
    } = e;
    if (i === driveFileTypeConstants_1.FileType.USER) {
      let {
        type: i,
        id: r,
        cn_name: o,
        en_name: l,
        avatar_url: a,
        email: s,
        isReply: c
      } = e;
      n = {
        blockType: N,
        props: {
          data: {
            user: {
              avatar_url: encodeURIComponent(a),
              type: i,
              id: r,
              cn_name: o,
              en_name: l,
              email: s
            }
          }
        }
      };
      if (c) {
        n.props.data.user.isReply = c;
      }
    } else {
      let {
        link: i = "",
        type: r,
        title: o,
        token: l,
        url: a = ""
      } = e;
      n = {
        blockType: "mentionBlock",
        props: {
          link: encodeURIComponent(i) || encodeURIComponent(a),
          type: r,
          title: o,
          token: l
        }
      };
    }
    return D(n);
  }
  var docMentionNotificationManager = require("doc-mention-notification-manager") /*id: 350832*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  let U = (e, n, i) => {
    docxEventCollector.docEventCollector("docs_blocks_abnormal_behaviour_trace_dev", {
      action: "task_block_apply_dev",
      info: `sourceId: ${platformDocUtils.p5T(e)}, sourceType: ${n}, newId:${platformDocUtils.p5T(i)}`
    });
  };
  var positionTypeConstants = require("position-type-constants") /*id: 913456*/;
  var momentJsCoreLib = require("moment-js-core-lib") /*id: 132840*/;
  var F = momentJsCoreLib;
  var dateTimeReminderUtils = require("date-time-reminder-utils") /*id: 20927*/;
  var reminderPopoverConstantsUtils = require("reminder-popover-constants-utils") /*id: 719964*/;
  let W = {
    "GMT-11:00": "Pacific/Niue",
    "GMT-10:00": "Pacific/Honolulu",
    "GMT-09:00": "Pacific/Gambier",
    "GMT-09:30": "Pacific/Marquesas",
    "GMT-08:00": "Pacific/Pitcairn",
    "GMT-07:00": "America/Dawson_Creek",
    "GMT-06:00": "America/Costa_Rica",
    "GMT-05:00": "America/Panama",
    "GMT-04:00": "America/Puerto_Rico",
    "GMT-03:00": "America/Argentina/Buenos_Aires",
    "GMT-02:00": "Atlantic/South_Georgia",
    "GMT-01:00": "Atlantic/Cape_Verde",
    "GMT+00:00": "Etc/GMT",
    "GMT+01:00": "Africa/Algiers",
    "GMT+02:00": "Africa/Johannesburg",
    "GMT+03:00": "Europe/Moscow",
    "GMT+04:00": "Asia/Dubai",
    "GMT+04:30": "Asia/Kabul",
    "GMT+05:00": "Indian/Maldives",
    "GMT+05:30": "Asia/Calcutta",
    "GMT+06:00": "Asia/Thimphu",
    "GMT+07:00": "Asia/Bangkok",
    "GMT+08:00": "Asia/Shanghai",
    "GMT+08:30": "Asia/Pyongyang",
    "GMT+09:00": "Asia/Tokyo",
    "GMT+10:00": "Asia/Vladivostok",
    "GMT+11:00": "Pacific/Noumea",
    "GMT+12:00": "Pacific/Funafuti",
    "GMT+13:00": "Pacific/Enderbury",
    "GMT+14:00": "Pacific/Kiritimati"
  };
  function G(e, n) {
    return e.toString().padStart(n, "0");
  }
  require("doc-url-processing-utilities") /*id: 330118*/;
  require("inline-component-constants") /*id: 427890*/;
  (l = {})[l.UNKNOWN = 0] = "UNKNOWN";
  l[l.DOC = 1] = "DOC";
  l[l.SHEET = 2] = "SHEET";
  l[l.BITABLE = 3] = "BITABLE";
  l[l.MINDNOTE = 4] = "MINDNOTE";
  l[l.FILE = 5] = "FILE";
  l[l.SLIDE = 6] = "SLIDE";
  l[l.WIKI = 7] = "WIKI";
  l[l.DOCX = 8] = "DOCX";
  let j = l;
  let V = Object.entries({
    [j.UNKNOWN]: driveFileTypeConstants_1.FileType.DOCX,
    [j.DOC]: driveFileTypeConstants_1.FileType.DOC,
    [j.SHEET]: driveFileTypeConstants_1.FileType.SHEET,
    [j.BITABLE]: driveFileTypeConstants_1.FileType.BITABLE,
    [j.MINDNOTE]: driveFileTypeConstants_1.FileType.MINDNOTE,
    [j.FILE]: driveFileTypeConstants_1.FileType.BOX,
    [j.WIKI]: driveFileTypeConstants_1.FileType.WIKI,
    [j.DOCX]: driveFileTypeConstants_1.FileType.DOCX
  }).reduce((e, n) => {
    e[n[1]] = Number(n[0]);
    return e;
  }, {});
  let X = e => {
    let n = V[e];
    if (typeof n == "number") {
      return n;
    } else {
      return j.DOCX;
    }
  };
  var editorZoneDeltaState = require("editor-zone-delta-state") /*id: 800502*/;
  let K = new (require("schema-resolver") /*id: 289076*/.SchemaResolver)({
    hyperlink: {
      mark: true,
      tailInherit: false,
      refresh: true
    }
  });
  var contentTypeEnums_1 = require("content-type-enums_1") /*id: 263557*/;
  function q(e) {
    return {
      id: uuidGeneratorUtil.generateUuid(),
      element: {
        tag: contentTypeEnums_1.HSs.TEXT,
        property: {
          text: {
            content: e
          }
        }
      }
    };
  }
  function Q(e) {
    return {
      id: uuidGeneratorUtil.generateUuid(),
      element: {
        tag: contentTypeEnums_1.HSs.A,
        property: {
          anchor: e
        }
      }
    };
  }
  function ee(e, n, i) {
    var r;
    var o;
    var l;
    var d;
    let {
      id: h,
      element: f
    } = i;
    let g = e.elements.dictionary[n];
    if (g) {
      if ((r = g.child_ids) !== null && r !== undefined) {
        r.push(h);
      }
    } else if ((o = e.element_ids) !== null && o !== undefined) {
      o.push(h);
    }
    e.elements.dictionary[h] = f;
    let {
      tag: p
    } = f;
    let m = "";
    switch (p) {
      case contentTypeEnums_1.HSs.AT:
        if (e != null && (l = e.at_ids) !== null && l !== undefined) {
          l.push(h);
        }
        m = f.property.at?.content || "";
        break;
      case contentTypeEnums_1.HSs.TEXT:
        m = f.property.text?.content || "";
        break;
      case contentTypeEnums_1.HSs.A:
        m = f.property.anchor?.content || f.property.anchor?.href || "";
        if ((d = e.anchor_ids) !== null && d !== undefined) {
          d.push(h);
        }
        break;
      default:
        m = "";
    }
    e.inner_text = e.inner_text.concat(m);
  }
  let et = e => {
    let n = function (e = "") {
      let n = [];
      let i = {
        dictionary: {}
      };
      if (e) {
        let r = uuidGeneratorUtil.generateUuid();
        n.push(r);
        i.dictionary[r] = q(e);
      }
      return {
        element_ids: n,
        inner_text: e,
        elements: i,
        image_ids: [],
        at_ids: [],
        anchor_ids: [],
        media_ids: [],
        docs_ids: []
      };
    }();
    let i = {
      element_entity_ref: {}
    };
    if (e && !new editorZoneDeltaState.ZoneDeltaState(e.zoneId, e, K).isEmpty()) {
      e.eachLine(e => {
        var r;
        var c;
        var v;
        r = [];
        let b = {
          id: uuidGeneratorUtil.generateUuid(),
          element: {
            tag: contentTypeEnums_1.HSs.P,
            property: {
              paragraph: {}
            },
            child_ids: r,
            style: {},
            style_keys: [],
            wide_style: {}
          }
        };
        ee(n, "", b);
        for (let r of e.ops) {
          if (!r.attributes || !r.attributes.lmkr) {
            if (r.attributes?.dataMetaBlockProps) {
              try {
                let e = JSON.parse(r.attributes.dataMetaBlockProps);
                if (e.blockType === N) {
                  let i = (c = e.props.data) === null || c === undefined ? undefined : c.user?.id;
                  ee(n, b.id, (v = {
                    user_id: i,
                    content: docxUserDetailManager.UserDetailManager.getUserShowName(i) || ""
                  }, {
                    id: uuidGeneratorUtil.generateUuid(),
                    element: {
                      tag: contentTypeEnums_1.HSs.AT,
                      property: {
                        at: v
                      }
                    }
                  }));
                } else if (e.blockType === "mentionBlock") {
                  let r = e.props?.token;
                  let o = e.props?.title;
                  let l = e.props?.type;
                  if ((o = driveDocInlineComponentUtils.getTitleFromMeta({
                    token: r,
                    type: l,
                    title: o
                  })) === platformDocUtils.getEmptyString(l) || o === t("common.unnamed_document")) {
                    o = "";
                  }
                  let s = X(l);
                  let c = decodeURIComponent(e.props?.link || "");
                  let u = Q({
                    href: xssContentSanitizer.sanitizeUrl(c, null, {
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
                      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrN%1*bFl%bkpNTTFZd1lWZDRla3d6%25CWk1tZDBX$Ek1ZFdSSFZu$mtRemxxWWpJM%1scFlTakJ--lRsM$ds$lNiR0pJ$W1o$1J6bFRZ$mRP-jFFe%9-$mtSM$oxWk$NM%1HTXlSbmxhTTFaNg"
                    }),
                    content: o || "Untitled"
                  });
                  ee(n, b.id, u);
                  i.element_entity_ref[u.id] = {
                    title: o,
                    doc_type: s,
                    doc_token: r,
                    str_doc_type: "unknown"
                  };
                }
              } catch (e) {}
              continue;
            }
            let y = r.attributes?.[hyperlinkTypeConstant.hyperlinkType];
            if (y) {
              try {
                let e = JSON.parse(y);
                let i = decodeURIComponent(e.href || "");
                let o = Q({
                  href: xssContentSanitizer.sanitizeUrl(i, null, {
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
                    filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrN%1*bFl%bkpNTTFZd1lWZDRla3d6%25CWk1tZDBX$Ek1ZFdSSFZu$mtRemxxWWpJM%1scFlTakJ--lRsM$ds$lNiR0pJ$W1o$1J6bFRZ$mRP-jFFe%9-$mtSM$oxWk$NM%1HTXlSbmxhTTFaNg"
                  }),
                  content: r.insert || ""
                });
                ee(n, b.id, o);
                continue;
              } catch (e) {}
            }
            let E = typeof r.insert == "string" ? r.insert : "";
            if (E[E.length - 1] === "\n") {
              E = E.slice(0, -1);
            }
            if (!E || !E.trim() && e.ops.length === 1) {
              continue;
            }
            ee(n, b.id, q(E));
            continue;
          }
        }
      });
    }
    return {
      rich_text: n,
      doc_entity: i
    };
  };
  async function en(e, n) {
    if (e) {
      var i;
      if (!n.hasBlockViewByBlockId(e)) {
        await n.layoutManager.renderNodeById(e);
      }
      let r = n.getBlockViewByBlockIdNotCheck(e);
      if (r) {
        r.selectionAPI.removeAllSelection();
        if (!browserEnvironmentDetectionUtils.browserDetector.isMobile || !n.config.get("revising")) {
          if (r != null && (i = r.editorInstance) !== null && i !== undefined) {
            i.focusAtEnd();
          }
        }
      }
    }
  }
  async function ei(e, n, i) {
    let r = e.model;
    let {
      parent: o,
      record: {
        snapshot: l
      }
    } = r;
    if (!o) {
      return;
    }
    docxSuggestionModeToast.showSuggestionToast(n);
    let N = (i == null ? undefined : i.text) || l.text;
    let w = !!l.done;
    let O = N.initialAttributedTexts.text[0].length === 0;
    let {
      deltaSet: A,
      dueTimeValue: D,
      assigneeIds: B
    } = function (e) {
      let n;
      let {
        clientVars: i,
        apool: r,
        recordGetter: o,
        assigneeIds: l
      } = e;
      let h = deltaSetChangesetConverter_1.attributedTextToDeltaSet(i, r);
      let p = new Set();
      h.forEach(e => {
        e.forEach(e => {
          if (e.insert === " " && (e == null ? undefined : e.attributes?.["inline-component"])) {
            let i;
            let r = e.attributes["inline-component"];
            try {
              i = JSON.parse(r);
            } catch (e) {}
            if (!i) {
              return;
            }
            switch (i.type) {
              case inlineComponentFacade.mentionTypes.USER:
                {
                  delete e.attributes["inline-component"];
                  let n = i.data.uid;
                  if (!l) {
                    p.add(n);
                    delete e.attributes;
                    e.insert = "";
                    break;
                  }
                  if (l.includes(n)) {
                    delete e.attributes;
                    e.insert = "";
                  } else {
                    e.attributes = function (e, n = "") {
                      let i = docxUserDetailManager.UserDetailManager.getCache(e);
                      if (i || n) {
                        return {
                          dataMetaBlockProps: JSON.stringify(L({
                            avatar_url: (i == null ? undefined : i.avatar_url) || "",
                            cn_name: (i == null ? undefined : i.name) || n || "",
                            en_name: (i == null ? undefined : i.en_name) || n || "",
                            department: "",
                            email: (i == null ? undefined : i.email) || "",
                            id: e,
                            is_external: (i == null ? undefined : i.is_external) || false,
                            type: driveFileTypeConstants_1.FileType.USER,
                            name: (i == null ? undefined : i.name) || "",
                            leaderName: ""
                          }))
                        };
                      }
                    }(i.data.uid);
                  }
                  break;
                }
              case inlineComponentFacade.mentionTypes.DOC:
                {
                  delete e.attributes["inline-component"];
                  let n = i.data;
                  e.attributes = function (e) {
                    let {
                      token: n,
                      type: i,
                      title: r,
                      url: o
                    } = e;
                    return {
                      dataMetaBlockProps: JSON.stringify(L({
                        type: i,
                        link: o,
                        url: o,
                        token: n,
                        title: r,
                        is_cross_tenant: false
                      }))
                    };
                  }({
                    token: n.token,
                    type: n.file_type,
                    title: driveDocInlineComponentUtils.getTitleFromMeta(n),
                    url: n.raw_url
                  });
                  break;
                }
              case inlineComponentFacade.mentionTypes.REMINDER:
                {
                  let r = i.data;
                  delete e.attributes;
                  let o = function (e) {
                    let {
                      expireTime: n,
                      isWholeDay: i,
                      shouldNotify: r,
                      notifyTime: o
                    } = e;
                    let l = F(n);
                    let a = i ? F.utc(l.format("YYYY-MM-DD")).unix() : l.unix();
                    let s = [];
                    if (r) {
                      if (i) {
                        let e = o - n;
                        let i = (reminderPopoverConstantsUtils.calculateTimeDifference(reminderPopoverConstantsUtils.defaultEndTime, reminderPopoverConstantsUtils.defaultStartTime, 0) - 32400000 - e) / 60 / 1000 | 0;
                        if (i) {
                          s.push({
                            type: positionTypeConstants.positionTypes.RELATIVE,
                            time: i
                          });
                        }
                      } else {
                        s.push({
                          type: positionTypeConstants.positionTypes.RELATIVE,
                          time: (n - o) / 60 / 1000
                        });
                      }
                    }
                    return {
                      dueTime: a,
                      dueTimezone: i ? "UTC" : function () {
                        var e;
                        var n;
                        var i;
                        var r;
                        if (typeof Intl != "undefined" && ((r = Intl) === null || r === undefined ? undefined : (i = r.DateTimeFormat) === null || i === undefined ? undefined : (n = i.call(r)) === null || n === undefined ? undefined : (e = n.resolvedOptions) === null || e === undefined ? undefined : e.call(n))) {
                          return new Intl.DateTimeFormat().resolvedOptions().timeZone ?? "Asia/Shanghai";
                        }
                        let l = W[function () {
                          let e = new Date().getTimezoneOffset();
                          let n = G(Math.floor(Math.abs(e) / 60), 2);
                          let i = G(Math.floor(Math.abs(e) % 60), 2);
                          return `GMT${e <= 0 ? "+" : "-"}${n}:${i}`;
                        }()];
                        return l || "Asia/Shanghai";
                      }(),
                      isAllDay: i,
                      reminders: s
                    };
                  }({
                    reminderId: "",
                    expireTime: r.expire_time,
                    isWholeDay: r.is_whole_day,
                    shouldNotify: r.should_notify,
                    notifyTime: r.notify_time
                  });
                  if (n) {
                    e.insert = `${function (e) {
                      let {
                        dueTime: n,
                        dueTimezone: i,
                        isAllDay: r
                      } = e;
                      let o = function (e) {
                        let {
                          dueTime: n,
                          dueTimezone: i,
                          isAllDay: r,
                          reminders: o
                        } = e;
                        let l = function (e) {
                          let {
                            timestamp: n,
                            isAllDay: i = false
                          } = e;
                          if (i) {
                            return F(F.utc(n * 1000).format("YYYY-MM-DD"));
                          } else {
                            return F(n * 1000);
                          }
                        }({
                          timestamp: n,
                          timezone: i,
                          isAllDay: r
                        });
                        let a = l.valueOf();
                        if (r) {
                          a = l.set(reminderPopoverConstantsUtils.endOfDayTime).valueOf();
                        }
                        let s = !!o.filter(e => e.time !== -1).length;
                        let c = s ? o[0] : undefined;
                        let u = a;
                        if (c) {
                          if (c.type === positionTypeConstants.positionTypes.ABSOLUTE) {
                            u = c.time;
                          }
                          if (c.type === positionTypeConstants.positionTypes.RELATIVE) {
                            u = r ? a + (reminderPopoverConstantsUtils.calculateTimeDifference(reminderPopoverConstantsUtils.defaultEndTime, reminderPopoverConstantsUtils.defaultStartTime, 0) - 32400000 - c.time * 60000) : a - c.time * 60000;
                          }
                        }
                        return {
                          reminderId: "",
                          expireTime: a,
                          isWholeDay: r,
                          shouldNotify: s,
                          notifyTime: u
                        };
                      }({
                        dueTime: n,
                        dueTimezone: i,
                        isAllDay: r || false,
                        reminders: []
                      });
                      return dateTimeReminderUtils.formatTimestamp(o.expireTime, o.isWholeDay);
                    }(o)} `;
                  } else {
                    n = o;
                    e.insert = "";
                  }
                  break;
                }
              case inlineComponentFacade.mentionTypes.FILE:
                {
                  let n = i.data;
                  e.insert = n.name;
                  break;
                }
              case inlineComponentFacade.mentionTypes.URL:
                {
                  let {
                    title: n,
                    raw_url: r
                  } = (i == null ? undefined : i.data) || {};
                  delete e.attributes["inline-component"];
                  e.attributes = {
                    [hyperlinkTypeConstant.hyperlinkType]: JSON.stringify({
                      href: xssContentSanitizer.sanitizeUrl(decodeURIComponent(r), null, {
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
                        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrN%1*bFl%bkpNTW1oc1lraENiR05wTlRCak1rWj$Xak5XZWc9PQ"
                      }),
                      linkId: uuidGeneratorUtil.generateUuid()
                    })
                  };
                  e.insert = n || r;
                }
            }
          }
          if (e.insert === " " && (e == null ? undefined : e.attributes?.[displayTypeConstants.displayInlineBlock])) {
            let n = e == null ? undefined : e.attributes?.[displayTypeConstants.displayInlineBlock];
            if (!n || !(o == null ? undefined : o.hasRecordByRecordId(n))) {
              return;
            }
            let i = o.getRecordByRecordId(n);
            if (i) {
              delete e.attributes;
              e.insert = editorDeltaTextUtils.getRangeText(i);
            }
          }
          let h = e == null ? undefined : e.attributes?.[clientsideLinkConstants_1.linkType];
          if (h) {
            documentLinkUtilities.collectLinkDebug("parse_clientvars_update_hyperlink", h);
            e.attributes = {
              [hyperlinkTypeConstant.hyperlinkType]: JSON.stringify({
                href: xssContentSanitizer.sanitizeUrl(decodeURIComponent(h), null, {
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
                  filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFw$E9Xb*lSemxxW$hrN%1*bFl%bkpNTW1oc1lraENiR05wTlRCak1rWj$Xak5XZWc9PQ"
                }),
                linkId: uuidGeneratorUtil.generateUuid()
              })
            };
          }
        });
      });
      return {
        deltaSet: h.concat(new contentStructureDelta.ContentDelta().insertEnter({
          fixEnter: "true"
        })),
        dueTimeValue: n,
        assigneeIds: l || [...p]
      };
    }({
      clientVars: N.initialAttributedTexts,
      apool: N.apool,
      recordGetter: n.modelService,
      assigneeIds: i == null ? undefined : i.assigneeIds
    });
    let x = et(A.get("0"));
    let H = chatUserInfoService.userInfoService.getCurrentUser().get("id");
    let j = o.recordId;
    let V = r.children.map(e => e.recordId);
    let X = r.children.map(e => e.id);
    let J = documentNodeFactory_2.createDocumentNode({
      comments: l.comments,
      task_id: "",
      status: docxTaskStates.TaskState.New
    }, docBlockTypeConstants.blockTypeConstants.TASK);
    let [K, Y] = insertBlockWithChildSnapshotHelper.insertBlockWithChildSnapshot({
      parentBlockId: o.id,
      blockManager: n,
      blockSnapshot: J,
      childBlockIds: docTaskBlockFlags.isTaskIndentEnabled() ? X : [],
      position: r.position,
      transactionName: "",
      beforeInsert: e => {
        documentBlockOperations.removeBlockItems(e, [r]);
        if (!docTaskBlockFlags.isTaskIndentEnabled() && V) {
          let n = r.position;
          documentBlockOperations.moveChildren(e, j, n, V);
        }
      }
    });
    await Y;
    if (O) {
      let i = n.getBlockViewByBlockId(K);
      U(e.record.id, l.type, i.record.id);
      await en(K, n);
      return K;
    }
    let q = w ? Date.now() : 0;
    let Q = {
      guid: "",
      assignees_detail: B.map(e => ({
        assignee_id: e,
        completed_milli_time: q
      })),
      followers_detail: [],
      creator_id: H,
      rich_summary: x,
      due_time: (D == null ? undefined : D.dueTime) || 0,
      is_all_day: (D == null ? undefined : D.isAllDay) || false,
      due_timezone: (D == null ? undefined : D.dueTimezone) || "",
      update_mill_time: 0,
      is_deleted: false,
      reminders: (D == null ? undefined : D.reminders) || [],
      completed_milli_time: q,
      docx_editable: true,
      mode: docxTaskStates.CompletionMode.TASK_COMPLETE
    };
    let ee = async r => {
      r.taskModel.apply(Q);
      let a = n.getBlockViewByBlockId(K);
      U(e.record.id, l.type, a.record.id);
      let {
        editorAPI: s
      } = a.model;
      let c = a.hostElement;
      c.classList.add("task-block-highlight");
      let u = () => {
        c.classList.remove("task-block-highlight");
        c.removeEventListener("animationend", u);
      };
      c.addEventListener("animationend", u);
      await en(K, n);
      if (!browserEnvironmentDetectionUtils.browserDetector.isMobile && (i == null ? undefined : i.assigneeIds?.length) === 1) {
        let e = i == null ? undefined : i.assigneeIds[0];
        let n = docxUserDetailManager.UserDetailManager.getUserShowName(e);
        if (!n) {
          return;
        }
        (function (e) {
          let {
            id: n,
            name: i,
            hostElement: r,
            editorAPI: o
          } = e;
          setTimeout(() => {
            docMentionNotificationManager.docMentionNotifier.addTaskMemberMentionNotify({
              id: n,
              name: i
            }, () => r.querySelector(`.task-block-assigneeShareClass a[data-token='${n}']`), o);
          });
        })({
          id: e,
          name: n,
          hostElement: a.hostElement,
          editorAPI: s
        });
      }
    };
    let ei = n.getBlockModelByBlockId(K);
    if (ei.type === docBlockTypeConstants.blockTypeConstants.TASK) {
      await ee(ei);
    } else {
      n.editorAPI.modelService.loadBlockModel(K, {
        autoRetry: true,
        immediately: true
      }).then(e => {
        ee(e);
      }).catch(e => {});
    }
    return K;
  }
  require.d(exports, {
    convertBlockToTask: function () {
      return ei;
    }
  });
}