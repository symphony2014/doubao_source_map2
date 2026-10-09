// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'DrivePreviewEventTracker'
// - Renamed export 'mj' to 'PreviewErrorKeys'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17043.439c2bd3.js
         * chunkId: 17043
         * moduleId: 147047
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var cryptoJsSha1Implementation = require("crypto-js-sha1-implementation") /*id: 155967*/;
  var s = cryptoJsSha1Implementation;
  var md5HashUtil_1 = require("md5-hash-util_1") /*id: 773120*/;
  var a = md5HashUtil_1;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var nameExtensionUtils = require("name-extension-utils") /*id: 146008*/;
  var fileTypeConstants_1 = require("file-type-constants_1") /*id: 331664*/;
  var driveSdkPreviewConstants = require("drive-sdk-preview-constants") /*id: 395351*/;
  var boxPreviewConstantsMap = require("box-preview-constants-map") /*id: 485900*/;
  function _(e, t, i) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var n = i.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = i;
    }
    return e;
  }
  function f(e) {
    return s("08a441" + a(e + "42b91e")).toString();
  }
  let E = [fileTypeConstants_1.docSourceTypes.EMAIL, fileTypeConstants_1.docSourceTypes.CALENDAR];
  (n = {}).Unknown = "unknown";
  n.NoDimensions = "no_dimensions";
  n.NoSupportWebp = "no_support_webp";
  n.NoEnable = "no_enable";
  n.PROGRESS = "progress";
  n.GET_PREVIEW_URL_ERROR = "get_preview_url_error";
  n.GET_PREVIEW_URL_FATAL = "get_preview_url_fatal";
  n.FILE_TYPE_UNSUPPORTED = "file_type_unsupported";
  n.FILE_TOO_LARGE = "file_too_large";
  n.FILE_EMPTY = "file_empty";
  n.PART_ERROR = "part_error";
  n.PREVIEW_TYPE_UNMATCH = "preview_type_unmatch";
  n.FILE_ENCRYPTED = "file_encrypted";
  n.ARCHIVE_FILE_TYPE_UNEXPECTED = "archive_file_type_unexpected";
  n.ARCHIVE_FILE_WHOLE_NODE_COUNT_EXCEEDED = "archive_file_whole_node_count_exceeded";
  n.ARCHIVE_FILE_SINGLE_NODE_COUNT_EXCEEDED = "archive_file_single_node_count_exceeded";
  n.FILE_COPYING = "file_copying";
  let m = n;
  (o = {}).False = "false";
  o.True = "true";
  let v = o;
  function g(e) {
    let {
      mountType: t,
      fileInfo: i,
      fileToken: n,
      mountToken: o
    } = e;
    return {
      file_id: n ? f(n) : "",
      loc_file_id: n ? f(n) : "",
      src_module: t,
      page_type: t,
      mount_point: t,
      file_type: "drive",
      module: t === fileTypeConstants_1.docSourceTypes.WIKI ? fileTypeConstants_1.docSourceTypes.WIKI : "drive",
      sub_file_type: i ? nameExtensionUtils.getExtension(i.name) : undefined,
      page_token: o ? f(o) : ""
    };
  }
  class P {
    collectEvent(e, t = {}) {
      try {
        this.instanceName;
        this.isMobile;
        teaAnalyticsEventTracker.trackEvent(e, t);
      } catch (e) {}
    }
    collectOpenStageEvent(e) {
      let {
        stage: t,
        fileInfo: i,
        fileToken: n,
        costTime: o,
        mountType: r,
        mountToken: s,
        status: l,
        previewComponent: a,
        previewType: u
      } = e;
      this.collectEvent(driveSdkPreviewConstants.evtDevPerfStages, {
        stage: t,
        status: l,
        file_token: n ? f(n) : "",
        file_type: i ? nameExtensionUtils.getExtension(i.name) : undefined,
        file_size: i ? i.size : undefined,
        cost_time: o,
        mount_type: r,
        mount_token: s ? f(s) : "",
        preview_component: a,
        preview_type: u
      });
    }
    collectOpenFinishEvent(e) {
      let {
        resultKey: t,
        resultCode: i,
        fileInfo: n,
        fileToken: o,
        costTime: r,
        mountType: s,
        mountToken: l,
        messageDetail: a,
        folderLevel: u,
        firstMeaningfulPaintCostTime: c,
        previewComponent: p,
        webOfficeVersion: _
      } = e;
      this.collectEvent(driveSdkPreviewConstants.evtDevPerfFinish, {
        result_key: t,
        result_code: i,
        file_token: o ? f(o) : "",
        file_type: n ? nameExtensionUtils.getExtension(n.name) : undefined,
        file_size: n ? n.size : undefined,
        cost_time: r,
        mount_type: s,
        mount_token: l ? f(l) : "",
        message_detail: a,
        folder_level: u,
        first_meaningful_paint_cost_time: c,
        preview_component: p,
        web_office_version: _
      });
    }
    collectOperationEvent(e) {
      let {
        fileInfo: t,
        fileToken: i,
        mountType: n,
        mountToken: o,
        operation: r
      } = e;
      this.collectEvent(driveSdkPreviewConstants.evtToggleAttribute, {
        file_id: i ? f(i) : "",
        file_token: i ? f(i) : "",
        file_type: "file",
        sub_file_type: t ? nameExtensionUtils.getExtension(t.name) : undefined,
        file_size: t ? t.size : undefined,
        mount_type: n,
        mount_token: o ? f(o) : "",
        action: r ? r.operationType : "",
        source: r ? r.source : "",
        event_type: "mouseClick",
        src_module: n,
        module: n,
        product_type: "drive"
      });
    }
    collectPreviewErrorEvent(e) {
      let {
        fileInfo: t,
        fileToken: i,
        mountType: n,
        mountToken: o,
        messageDetail: r,
        previewComponent: s,
        webOfficeVersion: l,
        costTime: a
      } = e;
      this.collectEvent(driveSdkPreviewConstants.evtPreviewError, {
        file_token: i ? f(i) : "",
        file_type: t ? nameExtensionUtils.getExtension(t.name) : undefined,
        file_size: t ? t.size : undefined,
        mount_type: n,
        mount_token: o ? f(o) : "",
        message_detail: r || "",
        preview_component: s,
        web_office_version: l,
        cost_time: a
      });
    }
    collectMentionClickEvent(e) {
      let {
        fileInfo: t,
        fileToken: i,
        mountType: n
      } = e;
      if (E.includes(n)) {
        this.collectEvent(driveSdkPreviewConstants.evtClickOpenMention, {
          module: n,
          file_id: i ? f(i) : "",
          mention_file_type: t ? nameExtensionUtils.getExtension(t.name) : ""
        });
      }
    }
    collectMentionDownloadEvent(e) {
      let {
        fileInfo: t,
        fileToken: i,
        mountType: n
      } = e;
      if (E.includes(n)) {
        this.collectEvent(driveSdkPreviewConstants.evtMentionDownload, {
          module: n,
          file_id: i ? f(i) : "",
          mention_file_type: t ? nameExtensionUtils.getExtension(t.name) : ""
        });
      }
    }
    collectLinkClickedEvent(e) {
      let {
        scene: t,
        location: i
      } = e;
      this.collectEvent(driveSdkPreviewConstants.evtLinkClicked, {
        scene: t,
        location: i
      });
    }
    collectTopBarClicked(e) {
      let {
        click: t
      } = e;
      let i = g(e);
      this.collectEvent(driveSdkPreviewConstants.evtDocsTopbarClick, {
        ...i,
        click: t
      });
    }
    collectTopBarView(e) {
      let {
        isOutlineVisiable: t
      } = e;
      let i = g(e);
      this.collectEvent(driveSdkPreviewConstants.evtDocsTopbarView, {
        ...i,
        is_show_contents: t
      });
    }
    collectEnterPresentationEvent(e) {
      this.collectEvent(driveSdkPreviewConstants.evtEnterPres, e);
    }
    collectMediaPlayCostTimeEvent(e) {
      let {
        fileInfo: t,
        fileToken: i,
        mountType: n,
        mountToken: o,
        costTime: r
      } = e;
      this.collectEvent(driveSdkPreviewConstants.evtMediaPlayCost, {
        file_token: i ? f(i) : "",
        file_type: t ? nameExtensionUtils.getExtension(t.name) : undefined,
        file_size: t ? t.size : undefined,
        mount_type: n,
        mount_token: o ? f(o) : "",
        cost_time: r
      });
    }
    collectPVEvent(e) {
      let {
        fileToken: t,
        mountType: i,
        mountToken: n
      } = e;
      this.collectEvent(driveSdkPreviewConstants.evtPreviewPv, {
        file_token: t ? f(t) : "",
        mount_type: i,
        mount_token: n ? f(n) : ""
      });
    }
    collectReloadI18nEvent(e) {
      let {
        languageType: t,
        reloadTime: i
      } = e;
      this.collectEvent(driveSdkPreviewConstants.evtPreviewReload, {
        language_type: t,
        i18n_reload_time: i
      });
    }
    collectOutsideTriggerEvent(e) {
      let {
        fileInfo: t,
        fileToken: i,
        mountType: n,
        mountToken: o,
        triggered_action: r,
        triggered_event: s
      } = e;
      this.collectEvent(driveSdkPreviewConstants.evtOutsideToggle, {
        triggered_event: s,
        triggered_action: r,
        file_token: i ? f(i) : "",
        file_type: t ? nameExtensionUtils.getExtension(t.name) : undefined,
        file_size: t ? t.size : undefined,
        mount_type: n,
        mount_token: o ? f(o) : ""
      });
    }
    collectCommonErrorEvent(e) {
      let {
        fileInfo: t,
        fileToken: i,
        mountType: n,
        mountToken: o,
        triggeredEvent: r,
        errorType: s,
        messageDetail: l
      } = e;
      this.collectEvent(driveSdkPreviewConstants.evtCommonError, {
        triggered_event: r,
        error_type: s,
        message_detail: l,
        file_token: i ? f(i) : "",
        file_type: t ? nameExtensionUtils.getExtension(t.name) : undefined,
        file_size: t ? t.size : undefined,
        mount_type: n,
        mount_token: o ? f(o) : ""
      });
    }
    collectPageViewEvent(e) {
      let {
        mountType: t,
        previewViable: i,
        isConvertOnlineVisiable: n
      } = e;
      if (t === fileTypeConstants_1.docSourceTypes.WIKI || t === fileTypeConstants_1.docSourceTypes.EXPLORER || !t) {
        return;
      }
      let o = g(e);
      this.collectEvent(driveSdkPreviewConstants.evtDrivePageView, {
        ...o,
        file_type: "file",
        preview_viable: i,
        is_convert_online: n
      });
    }
    collectPageClickEvent(e) {
      let {
        operation: t
      } = e;
      let i = boxPreviewConstantsMap.actionIconMap[t.operationType];
      if (!i) {
        return;
      }
      let n = "none";
      if (i === "view_online") {
        n = "ccm_docs_page_view";
      }
      let o = g(e);
      this.collectEvent(driveSdkPreviewConstants.evtDrivePageClick, {
        ...o,
        target: n,
        click: i,
        file_type: "file"
      });
    }
    collectPageEditEvent(e) {
      let {
        mountType: t,
        fileToken: i
      } = e;
      this.collectEvent(driveSdkPreviewConstants.evtDriveEditClick, {
        click: "edit",
        target: "none",
        mount_point: t,
        file_id: i ? f(i) : ""
      });
    }
    collectOpenFileEvent(e) {
      let {
        mountType: t,
        fileInfo: i,
        fileToken: n,
        mountToken: o
      } = e;
      if (t !== fileTypeConstants_1.docSourceTypes.EXPLORER) {
        this.collectEvent(driveSdkPreviewConstants.evtSdkFileOpen, {
          module: t,
          src_module: t,
          page_type: t,
          sub_file_type: i ? nameExtensionUtils.getExtension(i.name) : undefined,
          file_id: n ? f(n) : "",
          loc_file_id: n ? f(n) : "",
          page_token: f(o),
          file_tenant_id: this.tenantId,
          product_type: "drive"
        });
      }
    }
    collectClientFileDownloadEvent(e) {
      let {
        mountType: t,
        fileInfo: i,
        fileToken: n,
        mountToken: o
      } = e;
      this.collectEvent(driveSdkPreviewConstants.evtClientDownload, {
        action: "click_download",
        product_type: "drive",
        event_type: "mouseclick",
        file_id: n ? f(n) : "",
        sub_file_type: i ? nameExtensionUtils.getExtension(i.name) : undefined,
        module: t,
        task_count: 0,
        page_token: o,
        file_type_num: 12,
        is_dir: 0,
        is_export: 0
      });
    }
    collectPageDownloadStartEvent(e) {
      let {
        fileToken: t,
        mountType: i
      } = e;
      this.collectEvent(driveSdkPreviewConstants.evtDownloadBegin, {
        click: "download",
        target: "none",
        mount_point: i,
        object_id: t ? f(t) : ""
      });
    }
    collectPageMSReminderViewEvent(e) {
      this.collectEvent(driveSdkPreviewConstants.evtMagicshareView, g(e));
    }
    collectPageMSReminderClickEvent(e) {
      let t = g(e);
      this.collectEvent(driveSdkPreviewConstants.evtMagicshareClick, {
        ...t,
        click: "change_to_fullscreen",
        target: "none"
      });
    }
    collectFastPDFStage(e) {
      let {
        stage: t,
        costTime: i,
        openTime: n,
        imgExt: o,
        pdfMode: r,
        isDowngrade: s,
        downgradeReason: l
      } = e;
      let a = g(e);
      this.collectEvent(driveSdkPreviewConstants.evtFastPdfStageDev, {
        ...a,
        stage: t,
        img_ext: o,
        pdf_mode: r,
        cost_time: i,
        open_time: n,
        is_downgrade: s ? v.True : v.False,
        downgrade_reason: l
      });
    }
    collectTeampediaMentionShowed(e) {
      let {
        cardSource: t,
        fileType: i,
        abbrId: n,
        fileToken: o
      } = e;
      this.collectEvent(driveSdkPreviewConstants.evtAbbrMentionShow, {
        card_source: t,
        file_type: i,
        abbr_id: n,
        file_id: o ? f(o) : ""
      });
    }
    collectWpsHiddenTime(e) {
      this.collectEvent(driveSdkPreviewConstants.evtWpsTabHeartbeat, {
        ...e,
        file_id: f(e.file_id)
      });
    }
    constructor(e) {
      _(this, "instanceName", undefined);
      _(this, "pendingEvents", []);
      _(this, "isUnavailable", false);
      _(this, "isMobile", false);
      _(this, "tenantId", undefined);
      this.isMobile = !!e;
    }
  }
  require.d(exports, {
    DrivePreviewEventTracker: function () {
      return P;
    },
    PreviewErrorKeys: function () {
      return m;
    }
  });
}