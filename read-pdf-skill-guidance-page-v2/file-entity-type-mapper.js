// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Aw' to 'convertRecentFile'
// - Renamed export 'Do' to 'convertNodeList'
// - Renamed export 'L' to 'fileTypeToEntityTypeMap'
// - Renamed export 'Lp' to 'permissionLevelToVisibility'
// - Renamed export 'ME' to 'convertApiResponse'
// - Renamed export 'U$' to 'convertSharedFile'
// - Renamed export 'X' to 'convertNode'
// - Renamed export 'tk' to 'getReviewStatusStyle'
// - Renamed export 'vt' to 'convertShareList'
// - Renamed export 'wH' to 'visibilityToPermissionLevel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 300358
         */
module.exports = function (module, exports, require) {
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var businessLayoutConstants = require("business-layout-constants") /*id: 252973*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  var fileResourceEnums = require("file-resource-enums") /*id: 602816*/;
  var resourceEnumTypes = require("resource-enum-types") /*id: 801204*/;
  var fileEntityTypeConstants = require("file-entity-type-constants") /*id: 567257*/;
  var contentTypeEnum = require("content-type-enum") /*id: 921355*/;
  var imageTypeValidator = require("image-type-validator") /*id: 338641*/;
  var fileTypeValidator = require("file-type-validator") /*id: 389540*/;
  let f = {
    [resourceEnumTypes.FileTypes.Directory]: fileEntityTypeConstants.fileEntityTypes.Directory,
    [resourceEnumTypes.FileTypes.File]: fileEntityTypeConstants.fileEntityTypes.File,
    [resourceEnumTypes.FileTypes.Link]: fileEntityTypeConstants.fileEntityTypes.Link,
    [resourceEnumTypes.FileTypes.UnKnown]: fileEntityTypeConstants.fileEntityTypes.File,
    [resourceEnumTypes.FileTypes.Image]: fileEntityTypeConstants.fileEntityTypes.Image,
    [resourceEnumTypes.FileTypes.Pages]: fileEntityTypeConstants.fileEntityTypes.WritingDoc,
    [resourceEnumTypes.FileTypes.Video]: fileEntityTypeConstants.fileEntityTypes.Video,
    [resourceEnumTypes.FileTypes.Audio]: fileEntityTypeConstants.fileEntityTypes.Audio,
    [resourceEnumTypes.FileTypes.MeetingMinutes]: fileEntityTypeConstants.fileEntityTypes.MeetingMinutes,
    [resourceEnumTypes.FileTypes.CodeArtifact]: fileEntityTypeConstants.fileEntityTypes.CodeArtifact,
    [resourceEnumTypes.FileTypes.CodeProject]: fileEntityTypeConstants.fileEntityTypes.CodeProject,
    [resourceEnumTypes.FileTypes.Slides]: fileEntityTypeConstants.fileEntityTypes.Slides,
    [resourceEnumTypes.FileTypes.FeishuPages]: fileEntityTypeConstants.fileEntityTypes.FeishuPages
  };
  function v(e, i) {
    let t = [];
    e.forEach(e => {
      let n = w(e, i);
      if (n) {
        t.push(n);
      }
    });
    return t;
  }
  let g = e => collectionIncludesUtil.includes([businessLayoutConstants.ReviewStatus.Init, businessLayoutConstants.ReviewStatus.Processing], e) ? "processing" : businessLayoutConstants.ReviewStatus.Pass === e ? "success" : collectionIncludesUtil.includes([businessLayoutConstants.ReviewStatus.Failed, businessLayoutConstants.ReviewStatus.Reject], e) ? "failed" : undefined;
  let k = e => e === undefined ? undefined : e === resourceEnumTypes.EnableStatus.Disable ? "disable" : e === resourceEnumTypes.EnableStatus.Enable ? "enable" : e === resourceEnumTypes.EnableStatus.Processing ? "processing" : e === resourceEnumTypes.EnableStatus.Init ? "init" : undefined;
  function w(e, i) {
    if (!e) {
      return;
    }
    let {
      id: t,
      nodeType: n,
      updateTime: r,
      name: s,
      key: d,
      content: _,
      nameReviewStatus: v,
      contentReviewStatus: w,
      riskReviewStatus: x,
      operationStatus: b,
      size: y,
      cover: S,
      aiGenerateType: I,
      jumpTarget: T,
      createTime: P,
      owner: C,
      titleHighlighted: A,
      url: N,
      thumbnailExtra: E,
      visitTime: R,
      recentTabFileUpdateTime: D,
      previewable: F
    } = e;
    if (isUndefinedCheck.isUndefined(r) || isUndefinedCheck.isUndefined(n)) {
      return;
    }
    let {
      directoryType: M,
      aiSkillStatus: $,
      duration: L,
      lastUsedTime: W,
      pageType: Z,
      createFrom: G,
      sourceForDisplay: J
    } = _ || {};
    let q = {
      [resourceEnumTypes.ContentTypes.Default]: contentTypeEnum.ContentType.Default,
      [resourceEnumTypes.ContentTypes.Documents]: contentTypeEnum.ContentType.Documents,
      [resourceEnumTypes.ContentTypes.ConversationFiles]: contentTypeEnum.ContentType.ConversationFiles,
      [resourceEnumTypes.ContentTypes.MeetingMinutes]: contentTypeEnum.ContentType.MeetingMinutes,
      [resourceEnumTypes.ContentTypes.CodeArtifact]: contentTypeEnum.ContentType.CodeArtifact,
      [resourceEnumTypes.ContentTypes.Creation]: contentTypeEnum.ContentType.Creation
    };
    let z = x !== businessLayoutConstants.ReviewStatus.Pass || v !== businessLayoutConstants.ReviewStatus.Pass || w !== businessLayoutConstants.ReviewStatus.Pass;
    let U = n === resourceEnumTypes.FileTypes.File;
    let B = n === resourceEnumTypes.FileTypes.Image;
    let O = n === resourceEnumTypes.FileTypes.Directory;
    let V = n === resourceEnumTypes.FileTypes.FeishuPages;
    let H = n === resourceEnumTypes.FileTypes.Slides;
    let X = U && s && fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(s)) === "PDF";
    let K = U && s && fileTypeDetectionUtils.getFileCategory(getFileExtension.getFileExtension(s)) === "Document";
    let Q = O && !isUndefinedCheck.isUndefined(M) && M !== businessLayoutConstants.ViewCategory.Default;
    let Y = F || !!(E == null ? undefined : E.url) && !!(E == null ? undefined : E.secret) && !z || V || H || X || K || B && !z;
    return {
      id: t,
      type: f[n] || fileEntityTypeConstants.fileEntityTypes.File,
      name: s || j(n),
      updateTime: r,
      ext: _ == null ? undefined : _.linkFileType,
      nameReviewStatus: g(v),
      contentReviewStatus: g(w),
      riskReviewStatus: g(x),
      directoryType: isUndefinedCheck.isUndefined(M) ? undefined : q[M],
      enableCheck: !Q,
      enablePreview: Y,
      showCheckBox: !Q && !i,
      key: d,
      enableDoubaoAsk: [resourceEnumTypes.FileTypes.File, resourceEnumTypes.FileTypes.Image].includes(n) ? fileTypeValidator.isSupportedFile(s, d, _ == null ? undefined : _.linkFileType) : ![resourceEnumTypes.FileTypes.Audio, resourceEnumTypes.FileTypes.Image].includes(n),
      aiSkillStatus: k($),
      mediaDuration: L,
      pageType: Z,
      lastUsedTime: W,
      operationStatus: {
        disableRename: b == null ? undefined : b.disable_rename,
        disableShare: b == null ? undefined : b.disable_share
      },
      size: Number(y),
      cover: S,
      aiGenerateType: I,
      createFrom: G,
      jumpTarget: T,
      createTime: P ? String(P) : undefined,
      sourceForDisplay: J,
      owner: C,
      titleHighlighted: A,
      url: N,
      visitTime: R,
      recentTabFileUpdateTime: D
    };
  }
  function x(e) {
    let {
      id: c,
      name: d,
      key: u,
      node_type: p,
      size: m,
      source: _,
      content: h,
      name_review_status: f,
      content_review_status: v,
      risk_review_status: g,
      parent_id: k,
      create_time: w,
      update_time: x,
      conversation_id: b,
      operation_status: y,
      node_cover: S,
      jump_target: I
    } = e;
    if (!c) {
      return null;
    }
    let {
      link_file_type: T,
      image_width: P,
      image_height: C,
      directory_type: j,
      ai_skill_status: A,
      duration: N,
      page_type: E,
      last_used_time: R,
      generated_type: D,
      create_from: F,
      source_for_display: M
    } = h || {};
    return {
      id: c,
      name: d || (p === businessLayoutConstants.ItemType.Pages && (h == null ? undefined : h.page_type) === businessLayoutConstants.ProviderType.Otter ? i18nTranslationUtils.i18nextTranslate("doc_title_unnamed") : ""),
      key: u,
      nodeType: p,
      size: String(m),
      source: _,
      content: {
        linkFileType: T,
        imageWidth: P ? Number(P) : undefined,
        imageHeight: C ? Number(C) : undefined,
        directoryType: j,
        aiSkillStatus: A,
        pageType: E,
        duration: N,
        lastUsedTime: R,
        createFrom: F,
        sourceForDisplay: M
      },
      nameReviewStatus: f,
      contentReviewStatus: v,
      riskReviewStatus: g,
      parentId: k,
      createTime: String(w),
      updateTime: String(x),
      conversationId: b ? String(b) : undefined,
      operationStatus: y,
      cover: {
        thumbnail: {
          width: S == null ? undefined : S.thumbnail_view?.image_width,
          height: S == null ? undefined : S.thumbnail_view?.image_height,
          url: S == null ? undefined : S.thumbnail_view?.cover_url
        },
        smallPic: {
          width: S == null ? undefined : S.list_view?.image_width,
          height: S == null ? undefined : S.list_view?.image_height,
          url: S == null ? undefined : S.list_view?.cover_url
        }
      },
      aiGenerateType: D,
      jumpTarget: I,
      isOwner: true
    };
  }
  let b = e => {
    let {
      shareList: i
    } = e;
    let t = [];
    i.forEach(e => {
      if (!e.share_id) {
        return;
      }
      let i = e.first_node;
      let n = i && x(i);
      let a = n && v([n])[0];
      if (a) {
        let i;
        switch (e.multi_type) {
          case chatAiConstants.fileSelectionType.DirectoryAndFile:
            i = "folerAndFile";
            break;
          case chatAiConstants.fileSelectionType.MultiFiles:
            i = "multiFile";
            break;
          case chatAiConstants.fileSelectionType.MultiDirectories:
            i = "multipleFolder";
        }
        t.push({
          id: e.share_id,
          type: a.type,
          name: a.name,
          updateTime: e.create_time || "0",
          ext: a.ext,
          enableDoubaoAsk: a.enableDoubaoAsk,
          shareMultiType: i
        });
      }
    });
    return t;
  };
  function y(e) {
    switch (e) {
      case resourceEnumTypes.Visibility.private:
        return fileResourceEnums.permissionLevels.private;
      case resourceEnumTypes.Visibility.public:
        return fileResourceEnums.permissionLevels.public;
    }
  }
  function S(e) {
    switch (e) {
      case fileResourceEnums.permissionLevels.private:
        return resourceEnumTypes.Visibility.private;
      case fileResourceEnums.permissionLevels.publicEditable:
      case fileResourceEnums.permissionLevels.public:
        return resourceEnumTypes.Visibility.public;
    }
  }
  function I(e) {
    switch (e) {
      case resourceEnumTypes.FileTypes.Directory:
        return fileResourceEnums.resourceNodeTypes.Dir;
      case resourceEnumTypes.FileTypes.Audio:
      case resourceEnumTypes.FileTypes.Video:
      case resourceEnumTypes.FileTypes.Image:
      case resourceEnumTypes.FileTypes.File:
        return fileResourceEnums.resourceNodeTypes.File;
      case resourceEnumTypes.FileTypes.Link:
        return fileResourceEnums.resourceNodeTypes.Url;
      case resourceEnumTypes.FileTypes.CodeProject:
        return fileResourceEnums.resourceNodeTypes.CodeDir;
      case resourceEnumTypes.FileTypes.Slides:
        return fileResourceEnums.resourceNodeTypes.Slides;
      case resourceEnumTypes.FileTypes.FeishuPages:
        return fileResourceEnums.resourceNodeTypes.Docx;
      default:
        return fileResourceEnums.resourceNodeTypes.File;
    }
  }
  function T(e, i) {
    switch (e) {
      case fileResourceEnums.resourceNodeTypes.Dir:
        return resourceEnumTypes.FileTypes.Directory;
      case fileResourceEnums.resourceNodeTypes.CodeDir:
        return resourceEnumTypes.FileTypes.CodeProject;
      case fileResourceEnums.resourceNodeTypes.File:
        let t = getFileExtension.getFileExtension(i);
        let n = i && imageTypeValidator.isSupportedImageType(t);
        let a = fileTypeDetectionUtils.isAudioFile(t);
        let r = fileTypeDetectionUtils.isVideoFile(t);
        if (n) {
          return resourceEnumTypes.FileTypes.Image;
        }
        if (a) {
          return resourceEnumTypes.FileTypes.Audio;
        }
        if (r) {
          return resourceEnumTypes.FileTypes.Video;
        }
        return resourceEnumTypes.FileTypes.File;
      case fileResourceEnums.resourceNodeTypes.Url:
        return resourceEnumTypes.FileTypes.Link;
      case fileResourceEnums.resourceNodeTypes.Slides:
        return resourceEnumTypes.FileTypes.Slides;
      case fileResourceEnums.resourceNodeTypes.Docx:
        return resourceEnumTypes.FileTypes.FeishuPages;
      default:
        return resourceEnumTypes.FileTypes.UnKnown;
    }
  }
  function P(e) {
    let {
      name: i,
      obj_token: t,
      edit_time: n,
      my_edit_time: a,
      create_time: r,
      url: o,
      type: s,
      extra: l,
      open_time: d,
      owner: p,
      titleHighlighted: m,
      thumbnail_extra: _,
      is_owner: h,
      owner_type: f,
      node_token: v
    } = e;
    if (!t) {
      return null;
    }
    let {
      doubao_conversation_id: g,
      doubao_ai_skill_status: k,
      doubao_code_project_key: w,
      icon: x,
      icon_key: b,
      icon_nonce: y,
      icon_encrypted_type: S,
      size: I,
      complaint: P,
      biz_type: C
    } = l || {};
    let A = T(s, i);
    let N = A === resourceEnumTypes.FileTypes.Link ? getFileExtension.getFileExtension(o) : undefined;
    let E = getFileExtension.getFileExtension(i || "");
    return {
      id: t,
      name: i || j(A),
      titleHighlighted: m,
      key: t,
      nodeType: A,
      size: I !== undefined ? String(I) : undefined,
      content: {
        linkFileType: N,
        imageWidth: undefined,
        imageHeight: undefined,
        directoryType: resourceEnumTypes.ContentTypes.Default,
        aiSkillStatus: k !== undefined ? Number(k) : resourceEnumTypes.EnableStatus.Enable
      },
      nameReviewStatus: resourceEnumTypes.ProcessStatus.Pass,
      contentReviewStatus: resourceEnumTypes.ProcessStatus.Pass,
      riskReviewStatus: P ? resourceEnumTypes.ProcessStatus.Reject : resourceEnumTypes.ProcessStatus.Pass,
      createTime: String(r),
      updateTime: String(n),
      conversationId: g && g !== "0" ? String(g) : undefined,
      operationStatus: {
        disable_share: false,
        disable_rename: false
      },
      iconPreviewInfo: {
        icon: x,
        icon_key: b,
        icon_nonce: y,
        icon_encrypted_type: S
      },
      owner: p ? {
        name: p.name,
        i18n_name: p.i18n_name
      } : undefined,
      thumbnailExtra: _,
      url: A === resourceEnumTypes.FileTypes.Link || A === resourceEnumTypes.FileTypes.FeishuPages || A === resourceEnumTypes.FileTypes.Slides ? o : "",
      codeProjectKey: A === resourceEnumTypes.FileTypes.CodeProject ? w : "",
      visitTime: d ? String(d) : "",
      isOwner: h == null || h,
      ownerType: f,
      misc: {
        token: v,
        bizType: C
      },
      recentTabFileUpdateTime: a ? String(a) : "",
      previewable: ["heic", "heif", "psd", "psb", "sketch", "gif", "webp"].includes(E)
    };
  }
  function C(e) {
    let {
      id: i,
      token: t,
      titleHighlighted: n,
      type: a,
      fileSize: r,
      fileType: o,
      open_time: s,
      createTime: l,
      editTime: c,
      isOwner: d
    } = e;
    if (!i) {
      return null;
    }
    let p = `.${o}`;
    let m = function (e) {
      if (!e) {
        return "";
      }
      let i = {
        "&amp;": "&",
        "&#39;": "'",
        "&lt;": "<",
        "&gt;": ">",
        "&#34;": "\""
      };
      let t = RegExp(Object.keys(i).join("|"), "g");
      return e.replace(t, e => i[e] || "");
    }(n || "");
    let _ = T(a, p);
    return {
      id: i,
      name: p || "",
      titleHighlighted: m,
      key: t,
      nodeType: _,
      size: r !== undefined ? String(r) : undefined,
      content: {
        imageWidth: undefined,
        imageHeight: undefined,
        directoryType: resourceEnumTypes.ContentTypes.Default
      },
      isOwner: d == null || d,
      nameReviewStatus: resourceEnumTypes.ProcessStatus.Pass,
      contentReviewStatus: resourceEnumTypes.ProcessStatus.Pass,
      riskReviewStatus: resourceEnumTypes.ProcessStatus.Pass,
      operationStatus: {
        disable_share: false,
        disable_rename: false
      },
      createTime: l ? String(l) : "",
      updateTime: c ? String(c) : "",
      visitTime: s ? String(s) : "",
      ownerType: 5
    };
  }
  function j(e) {
    let i = e === resourceEnumTypes.FileTypes.Directory;
    let t = e === resourceEnumTypes.FileTypes.FeishuPages;
    let n = e === resourceEnumTypes.FileTypes.Slides;
    if (t) {
      return i18nTranslationUtils.i18nextTranslate("drive_name_untitled_doc");
    } else if (n) {
      return i18nTranslationUtils.i18nextTranslate("drive_name_untitled_slides");
    } else if (i) {
      return i18nTranslationUtils.i18nextTranslate("drive_name_untitled_folder");
    } else {
      return i18nTranslationUtils.i18nextTranslate("drive_name_untitled_file");
    }
  }
  require.d(exports, {
    convertRecentFile: function () {
      return C;
    },
    convertNodeList: function () {
      return v;
    },
    fileTypeToEntityTypeMap: function () {
      return f;
    },
    permissionLevelToVisibility: function () {
      return S;
    },
    convertApiResponse: function () {
      return x;
    },
    convertSharedFile: function () {
      return P;
    },
    convertNode: function () {
      return I;
    },
    getReviewStatusStyle: function () {
      return w;
    },
    convertShareList: function () {
      return y;
    },
    visibilityToPermissionLevel: function () {
      return b;
    }
  });
}