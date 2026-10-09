(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // ../doubao_source_map/web_cache_260316012/source_map/chat_(id)/page/messaging-constants.js
  var require_messaging_constants = __commonJS({
    "../doubao_source_map/web_cache_260316012/source_map/chat_(id)/page/messaging-constants.js"(exports, module) {
      module.exports = function(module2, exports2, require2) {
        var i;
        var r;
        var s;
        var a;
        var o;
        var l;
        (i = {})[i.MessageDelete = 1] = "MessageDelete";
        i[i.MessageLike = 2] = "MessageLike";
        i[i.MessageDislike = 3] = "MessageDislike";
        i[i.MessageIDLocalMapping = 4] = "MessageIDLocalMapping";
        i[i.MessageNotCompliant = 5] = "MessageNotCompliant";
        i[i.ConversationArchive = 11] = "ConversationArchive";
        i[i.ConversationAdd = 12] = "ConversationAdd";
        i[i.ConversationCreateSection = 13] = "ConversationCreateSection";
        i[i.ConversationClearHistory = 14] = "ConversationClearHistory";
        i[i.ConversationUpdate = 15] = "ConversationUpdate";
        i[i.ConversationRead = 16] = "ConversationRead";
        i[i.ConversationLandingInsert = 17] = "ConversationLandingInsert";
        i[i.OnboardingBegin = 21] = "OnboardingBegin";
        i[i.OnboardingFail = 22] = "OnboardingFail";
        i[i.OnboardingCancel = 23] = "OnboardingCancel";
        i[i.OnboardingNeedStart = 26] = "OnboardingNeedStart";
        i[i.UserBanned = 31] = "UserBanned";
        i[i.UserBanRelease = 32] = "UserBanRelease";
        i[i.UserLogout = 33] = "UserLogout";
        i[i.UserConfigUpdate = 41] = "UserConfigUpdate";
        i[i.NeedLocation = 51] = "NeedLocation";
        i[i.PushToast = 60] = "PushToast";
        i[i.TTSBegin = 91] = "TTSBegin";
        i[i.UserMute = 101] = "UserMute";
        i[i.UserMuteRelease = 102] = "UserMuteRelease";
        i[i.TouristReachChatLimit = 1e3] = "TouristReachChatLimit";
        i[i.NestedMessageStateChange = 1001] = "NestedMessageStateChange";
        i[i.TouristReachThreadLimit = 1002] = "TouristReachThreadLimit";
        i[i.MessageRefImagesNotCompliant = 1003] = "MessageRefImagesNotCompliant";
        i[i.MessageUpdate = 1004] = "MessageUpdate";
        i[i.MailboxActivated = 1005] = "MailboxActivated";
        i[i.QueryBroadcast = 1006] = "QueryBroadcast";
        i[i.SafetyResponseAnswer = 1007] = "SafetyResponseAnswer";
        i[i.FetchAnswer = 1008] = "FetchAnswer";
        i[i.GuidanceTaskCompleted = 1009] = "GuidanceTaskCompleted";
        i[i.DisableActionBar = 1010] = "DisableActionBar";
        i[i.DeepResearchFinished = 1011] = "DeepResearchFinished";
        i[i.SuperTaskFinished = 1012] = "SuperTaskFinished";
        i[i.SuperTaskNeedAskHuman = 1013] = "SuperTaskNeedAskHuman";
        i[i.CodeAssistantAsyncTaskFinished = 1014] = "CodeAssistantAsyncTaskFinished";
        i[i.SuperTaskModelCallOverload = 1015] = "SuperTaskModelCallOverload";
        i[i.SuperTaskApplyTrialSuccess = 1016] = "SuperTaskApplyTrialSuccess";
        i[i.BlockMessageStateChange = 1017] = "BlockMessageStateChange";
        i[i.SuperTaskModifyPPTOutline = 1018] = "SuperTaskModifyPPTOutline";
        i[i.SuperTaskSelectPPTTemplate = 1019] = "SuperTaskSelectPPTTemplate";
        i[i.AIPPTTaskSuccess = 1020] = "AIPPTTaskSuccess";
        i[i.ActionBarRefresh = 1e4] = "ActionBarRefresh";
        let u = i;
        (r = {})[r.User = 0] = "User";
        r[r.System = 1] = "System";
        let c = r;
        (s = {})[s.Default = 0] = "Default";
        s[s.Like = 1] = "Like";
        s[s.Unlike = 2] = "Unlike";
        s[s.Better = 3] = "Better";
        s[s.Almost = 4] = "Almost";
        s[s.BothBad = 5] = "BothBad";
        s[s.Form = 6] = "Form";
        let d = s;
        (a = {})[a.Unknown = 0] = "Unknown";
        a[a.File = 1] = "File";
        a[a.OCRImage = 2] = "OCRImage";
        a[a.Audio = 3] = "Audio";
        a[a.Video = 4] = "Video";
        let f = a;
        (o = {})[o.ParseState_Default = 0] = "ParseState_Default";
        o[o.ParseState_Success = 1] = "ParseState_Success";
        o[o.ParseState_Failed = 2] = "ParseState_Failed";
        o[o.ParseState_Processing = 3] = "ParseState_Processing";
        let h = o;
        (l = {})[l.ReviewState_Default = 0] = "ReviewState_Default";
        l[l.ReviewState_Access = 1] = "ReviewState_Access";
        l[l.ReviewState_NotCompliant = 2] = "ReviewState_NotCompliant";
        l[l.ReviewState_Processing = 3] = "ReviewState_Processing";
        let p = l;
        require2.d(exports2, {
          roleType: function() {
            return c;
          },
          messageType: function() {
            return u;
          },
          parseState: function() {
            return h;
          },
          mediaType: function() {
            return f;
          },
          reviewState: function() {
            return p;
          },
          feedbackType: function() {
            return d;
          }
        });
      };
    }
  });

  // ../doubao_source_map/web_cache_260316012/source_map/chat_(id)/page/file-type-detection-utils.js
  var require_file_type_detection_utils = __commonJS({
    "../doubao_source_map/web_cache_260316012/source_map/chat_(id)/page/file-type-detection-utils.js"(exports, module) {
      module.exports = function(module2, exports2, require2) {
        var asyncRetryUtils = require2("async-retry-utils");
        var getFileExtension = require2("get-file-extension");
        let s = (e) => {
          var t;
          return ((t = (e || "").match(/(.+)\.[^.]+$/)) === null || t === void 0 ? void 0 : t[1].toLowerCase().trim()) || "";
        };
        let a = (e) => (t) => e.includes(t);
        let o = a(["txt"]);
        let l = a(["csv"]);
        let u = a(["xlsx", "xls", "xlsm"]);
        let c = ["pdf", "txt", "csv", "docx", "doc", "xlsx", "xls", "pptx", "ppt", "md", "mobi", "epub"];
        let d = ["png", "jpeg", "jpg", "csv", "pdf", "txt", "xls", "xlsx", "ppt", "pptx", "doc", "docx", "json", "log", "md", "ini", "cfg", "yaml", "sql", "java", "py", "cpp", "cs", "php", "js", "css", "scss", "less", "jsx", "ts", "bat", "sh", "yml", "asp", "aspx", "jsp", "cgi", "pl", "rb", "lua", "ps1", "conf", "gitignore", "htaccess", "dat", "tab", "tex", "html", "h", "go", "tsx", "c", "py3", "cxx", "cc", "mobi", "epub"];
        let f = ["xbm", "tif", "pjp", "svgz", "jpg", "jpeg", "ico", "tiff", "gif", "svg", "jfif", "webp", "png", "bmp", "pjpeg", "avif", "heic", "dng", "arw", "nef", "ar2", "ar3"];
        let h = a(f);
        let p = a(["pdf"]);
        let m = a(["ppt", "pptx", "pps", "ppsx", "pot"]);
        let g = a(["doc", "docx", "dot", "dotx"]);
        let _ = a(["md", "markdown"]);
        let v = a(["epub"]);
        let y = a(["mobi"]);
        let S = ["makefile", "gemfile", "build.gradle"];
        let b = ["py", "java", "js", "ts", "c", "cpp", "h", "hpp", "cc", "cxx", "html", "css", "php", "rb", "pl", "sh", "bash", "swift", "kt", "kts", "ktm", "go", "dart", "scala", "cs", "aspx", "xaml", "vue", "mod", "proto", "tsx", "jsx", "rs", "json", "yaml", "yml", "xml", "env", "config", "properties", "ini", "toml", "plist", "md", "markdown", "adoc", "feature", "sum", "bat", "cmd", "psl", "vbs", "lua", "vmx", "vbox", "dockerfile", "wxml", "wxss", "m", "for", "f90", "f95", "f", "xhtml", "rdf", "tmpl", "scss", "thrift", "rst", "meta", "gitignore", "patch", "sql"];
        let E = (e, t) => b.includes(e) || S.includes(t);
        let w = ["mp4", "flv", "wmv", "asf", "mkv", "avi", "rm", "rmvb", "mpg", "mpeg", "mov", "webm", "m4v"];
        let T = a(w);
        let k = ["mp3", "m4a", "wav", "ogg", "aac", "ac3"];
        let O = a(k);
        let M = a(["zip", "rar", "7z", "tar", "gz", "bz2"]);
        let I = a(["pages"]);
        let N = a(["key", "keynote"]);
        let C = a(["numbers"]);
        let A = a(["sketch"]);
        let x = a(["psd", "psb"]);
        let L = (e) => l(e) ? "CSV" : p(e) ? "PDF" : u(e) ? "Spreadsheet" : h(e) ? "Image" : m(e) ? "PPT" : g(e) ? "Document" : o(e) ? "Txt" : _(e) ? "Markdown" : v(e) ? "Epub" : y(e) ? "Mobi" : T(e) ? "Video" : O(e) ? "Audio" : "File";
        let P = (e) => ({
          CSV: "CSV",
          PDF: "PDF",
          Spreadsheet: "Excel",
          Image: "Image",
          PPT: "PPT",
          Document: "Word",
          Txt: "txt",
          File: "File",
          Mobi: "Mobi",
          Epub: "Epub",
          Markdown: "Markdown",
          Video: "Video",
          Audio: "Audio"
        })[e];
        function D(e) {
          return h(getFileExtension.getFileExtension(e));
        }
        function R(e) {
          return T(getFileExtension.getFileExtension(e));
        }
        function $(e) {
          return O(getFileExtension.getFileExtension(e));
        }
        function j(e) {
          return [l, u].some((t) => t(getFileExtension.getFileExtension(e)));
        }
        let Z = (e) => {
          let n = e.split(",");
          let i = n[0].match(/:(.*?);/)?.[1];
          let r = window.atob(n[1]);
          let s2 = r.length;
          let a2 = new Uint8Array(s2);
          while (s2--) {
            a2[s2] = r.charCodeAt(s2);
          }
          return new File([a2], "temp", {
            type: i
          });
        };
        let F = (e) => {
          var t;
          return !!e && e instanceof Blob && ((t = e.type) === null || t === void 0 ? void 0 : t.startsWith("image"));
        };
        let U = async (e) => {
          let {
            fileTypeFromBlob: r
          } = await asyncRetryUtils.retryPromise(() => require2.e("file-type-detector-chunk").then(
            require2.bind(require2, "file-type-parser")
            /*id: 806907*/
          ));
          return (await r(e))?.ext;
        };
        let W = (e) => e && e instanceof Blob ? w.includes(getFileExtension.getFileExtension(e.name).toLowerCase()) : typeof e == "string" ? w.includes(getFileExtension.getFileExtension(e).toLowerCase()) : void 0;
        let z = (e) => e && e instanceof Blob ? k.includes(getFileExtension.getFileExtension(e.name).toLowerCase()) : typeof e == "string" ? k.includes(getFileExtension.getFileExtension(e).toLowerCase()) : void 0;
        require2.d(exports2, {
          isPagesFile: function() {
            return I;
          },
          isSpreadsheetFile: function() {
            return u;
          },
          isPresentationFile: function() {
            return m;
          },
          isAudioFile: function() {
            return O;
          },
          isTextFile: function() {
            return o;
          },
          isCsvFile: function() {
            return l;
          },
          isCodeFile: function() {
            return E;
          },
          getFileCategory: function() {
            return L;
          },
          imageExtensions: function() {
            return c;
          },
          getFileExtensionFromBlob: function() {
            return U;
          },
          isImageFile: function() {
            return h;
          },
          isSketchFile: function() {
            return A;
          },
          getFileExtension: function() {
            return s;
          },
          isArchiveFile: function() {
            return M;
          },
          dataUriToFile: function() {
            return Z;
          },
          isImageBlob: function() {
            return F;
          },
          isAudioExtension: function() {
            return $;
          },
          isVideoFile: function() {
            return T;
          },
          isPdfFile: function() {
            return p;
          },
          isVideoExtension: function() {
            return R;
          },
          getDisplayCategory: function() {
            return P;
          },
          isSpreadsheetOrCsv: function() {
            return j;
          },
          documentExtensions: function() {
            return f;
          },
          isDocumentFile: function() {
            return g;
          },
          isImageExtension: function() {
            return D;
          },
          isPsdFile: function() {
            return x;
          },
          isAudioExtension_1: function() {
            return z;
          },
          isKeynoteFile: function() {
            return N;
          },
          isNumbersFile: function() {
            return C;
          },
          codeExtensions: function() {
            return d;
          },
          isVideoExtension_1: function() {
            return W;
          }
        });
      };
    }
  });

  // ../doubao_source_map/web_cache_260316012/source_map/chat_(id)/page/file-type-checkers.js
  var require_file_type_checkers = __commonJS({
    "../doubao_source_map/web_cache_260316012/source_map/chat_(id)/page/file-type-checkers.js"(exports, module) {
      module.exports = function(module2, exports2, require2) {
        let i = (e) => (e == null ? void 0 : e.type) === "attachment" || (e == null ? void 0 : e.type) === "file";
        let r = (e) => (e == null ? void 0 : e.type) === "image";
        let s = (e) => (e == null ? void 0 : e.type) === "directory";
        let a = (e) => (e == null ? void 0 : e.type) === "link";
        let o = (e) => (e == null ? void 0 : e.type) === "text";
        let l = (e) => (e == null ? void 0 : e.type) === "lark_doc";
        require2.d(exports2, {
          isTextType: function() {
            return o;
          },
          isDirectoryType: function() {
            return s;
          },
          isLarkDocType: function() {
            return l;
          },
          isImageType: function() {
            return r;
          },
          isLinkType: function() {
            return a;
          },
          isFileType: function() {
            return i;
          }
        });
      };
    }
  });

  // ../doubao_source_map/web_cache_260316012/source_map/chat_(id)/page/coco-conversation-state-checker.js
  var require_coco_conversation_state_checker = __commonJS({
    "../doubao_source_map/web_cache_260316012/source_map/chat_(id)/page/coco-conversation-state-checker.js"(exports, module) {
      module.exports = function(module2, exports2, require2) {
        var isEmptyUtil = require2("is-empty-util");
        var asyncBusinessLayoutHook = require2("async-business-layout-hook");
        var chatMessageStoreFactory = require2("chat-message-store-factory");
        var chatAbConfigSelectors = require2("chat-ab-config-selectors");
        var chatConversationSelectors = require2("chat-conversation-selectors");
        var chatConversationCheckers = require2("chat-conversation-checkers");
        let c = function(e = "") {
          let t = chatConversationSelectors.selectConversation(e);
          let n = chatConversationCheckers.isCocoConversation(t);
          let c2 = asyncBusinessLayoutHook.useBusinessLayout(e);
          let {
            isLandingToMainCoco: d
          } = chatAbConfigSelectors.useChatAbSelectors();
          let u = Number((t == null ? void 0 : t.message_index) || (t == null ? void 0 : t.badge_count) || 0) < Number((t == null ? void 0 : t.message_cursor) || 0);
          let h = chatMessageStoreFactory.createMessageStore((t2) => isEmptyUtil.isEmpty(t2.messageLinkMap[e || ""]));
          if (n && d) {
            return {
              loading: !u && h,
              showConversationGuidancePage: u && h || c2
            };
          } else {
            return {};
          }
        };
        require2.d(exports2, {
          getCocoConversationState: function() {
            return c;
          }
        });
      };
    }
  });

  // ../doubao_source_map/web_cache_260316012/source_map/chat_(id)/page/conversation-message-utils.js
  var require_conversation_message_utils = __commonJS({
    "../doubao_source_map/web_cache_260316012/source_map/chat_(id)/page/conversation-message-utils.js"(exports, module) {
      module.exports = function(module2, exports2, require2) {
        var uuidGeneratorUtil = require2("uuid-generator-util");
        var chatConstantsEnum = require2("chat-constants-enum");
        var chatFeedConversationUtil = require2("chat-feed-conversation-util");
        var chatFeedStoreFactory = require2("chat-feed-store-factory");
        var chatConversationSelectors_2 = require2("chat-conversation-selectors_2");
        var chatConversationSelectors_1 = require2("chat-conversation-selectors_1");
        var chatMessageTypes = require2("chat-message-types");
        let c = (e) => chatFeedConversationUtil.isLocalConversation(e ?? "") ? {
          local_conversation_id: e,
          conversation_id: void 0
        } : {
          conversation_id: e,
          local_conversation_id: void 0
        };
        let d = (e, t) => e !== void 0 ? JSON.stringify({
          ability_type: e,
          ability_param: t
        }) : "";
        let f = (e, t) => {
          let {
            attachmentBlock: n,
            textBlock: i,
            referenceBlocks: r
          } = e;
          let s = [];
          if (n) {
            s.push(n);
          }
          if ((!n || (t == null ? void 0 : t.excludeReferenceOnAttachment) === false) && r && r.length > 0) {
            s.push(...r.filter((e2) => e2 !== void 0));
          }
          if (i) {
            s.push(i);
          }
          return s;
        };
        let h = (e) => {
          let {
            conversation: d2,
            message: f2
          } = e;
          let {
            conversation_id: h2,
            local_conversation_id: p
          } = d2;
          let m = chatFeedStoreFactory.useFeedStore.getState();
          let g = chatConversationSelectors_2.getConversation(m, h2) ?? chatConversationSelectors_2.getLocalConversation(m, p);
          let _ = f2.unique_id ?? uuidGeneratorUtil.generateUuid();
          return {
            conversation_id: h2,
            local_conversation_id: p,
            local_message_id: _,
            unique_id: _,
            bot_id: (g == null ? void 0 : g.bot_id) || "7338286299411103781",
            user_type: chatConstantsEnum.userType.HUMAN,
            create_time: Date.now(),
            content_blocks_v2: f2.content_blocks_v2,
            ext: f2.ext,
            conversation_type: chatConversationSelectors_1.getConversationType(chatFeedStoreFactory.useFeedStore.getState(), h2 ?? p ?? "", true),
            status: f2.message_status ?? chatMessageTypes.PushMessageStatus.Available,
            create_from: "sse-stream",
            section_id: g == null ? void 0 : g.last_section_id,
            is_finish: true
          };
        };
        require2.d(exports2, {
          assembleContentBlocks: function() {
            return f;
          },
          createMessageObject: function() {
            return h;
          },
          parseConversationId: function() {
            return c;
          },
          serializeAbilityData: function() {
            return d;
          }
        });
      };
    }
  });

  // ../doubao_source_map/web_cache_260316012/source_map/chat_(id)/page/ai-chat-enum-constants.js
  var require_ai_chat_enum_constants = __commonJS({
    "../doubao_source_map/web_cache_260316012/source_map/chat_(id)/page/ai-chat-enum-constants.js"(exports, module) {
      module.exports = function(module2, exports2, require2) {
        var i = {
          ReqSceneType_Default: 0,
          ReqSceneType_Vui: 1,
          ReqSceneType_OAPI: 2,
          ReqSceneType_Inner: 3,
          ReqSceneType_VuiV3: 4
        };
        var r = {
          DeepThinkSwitchFalse: 0,
          DeepThinkSwitchTrue: 1,
          DeepThinkSwitchAuto: 2,
          DeepThinkSwitchPro: 3
        };
        var s = {
          InputBox: 0,
          GuidanceOrSuggestion: 1,
          Guidance: 2,
          Suggestion: 3,
          DesktopPush: 4,
          DesktopAskAssistant: 5,
          DesktopLauncher: 6,
          SharedApp: 7,
          CanvasActionbar: 8
        };
        var a = {
          INDEPENDENT_SITE_UNKNOWN: 0,
          INDEPENDENT_SITE_CODE: 1,
          INDEPENDENT_SITE_AI_PLAYGROUND: 2
        };
        var o = {
          FreeChat: 0,
          SkillWrite: 2,
          SkillImageGen: 3,
          SkillSearch: 4,
          SkillTranslate: 5,
          SkillRead: 6,
          SkillWebpage: 7,
          SkillDeepSearch: 8,
          SkillMusicGen: 9,
          SkillEdu: 11,
          SkillCodeInterpreter: 13,
          SkillCodeAssistant: 16,
          SkillVideoGeneration: 17,
          SkillType_AiPPT: 18,
          SkillTypeMediaUnderstandingByAsr: 19,
          SkillSearchEngine: 20,
          SkillDeepResearch: 25,
          SkillAiPodcast: 26,
          CustomSkill: 27,
          DesExtSkillMultiWebsites: 12,
          DesExtSkillReferenceAsk: 14,
          DesExtChatSkillPlaceholder: 100,
          DesExtSkillTranslate: 101,
          DesExtSkillSummaryHighlight: 102,
          DesExtSkillExplain: 103,
          DesExtSkillDesExtSearchCard: 104,
          DesExtSkillLinkPreview: 105,
          DesExtSkillDesExtSuggest: 106,
          DesExtSkillAIToolSummary: 107,
          DesExtSkillVideoSummary: 108,
          DesExtSkillOneLevelVideoSummary: 109,
          DesExtSkillRewriteWithTone: 110,
          DesExtSkillCustomSkill: 111,
          DesExtSkillSearchMindNote: 112,
          DesExtSkillTextToMindNote: 113,
          DesExtSkillBilingualSentence: 114,
          DesExtSkillAITitle: 115,
          DesExtPodcastTranscript: 116,
          DesExtSkillWebsiteDetail: 117,
          DesExtSkillSummary: 118,
          DesExtSkillVideoListSummary: 119,
          DesExtSkillCommentAnalyze: 120,
          DesExtSkillVideoDeepAnalyze: 121,
          DesExtSkillTopicTrendAnalyze: 122,
          DesExtSkillMindMap: 125,
          DesExtSkillSimplifiedRead: 126,
          DesExtSkillGrammar: 127,
          DesExtSkillReply: 128,
          DesExtSkillSharedAppAssistant: 131,
          DesExtSkillPageTranslate: 132,
          DesExtSkillMeetingSummary: 133,
          DesExtSkillGrammarCorrection: 136,
          DesExtSkillPodcastReading: 137,
          DesExtSkillSuperTask: 138,
          DesExtSkillMindMapGenerate: 140,
          SKILL_CALL: 1001,
          SKILL_NEWS_ACTIONBAR_NAME: 1002,
          SKILL_HEALTH_CONSULTATION: 1003,
          SKILL_MUSIC_RANDOM_PLAY: 1004,
          SKILL_RECORD: 1005,
          SKILL_CALL_ENGLISH_LEARNING: 1006,
          SKILL_CALL_IDIOM: 1007,
          SKILL_CALL_INTERVIEW: 1008,
          SKILL_CALL_TREE_HOLE: 1009,
          SKILL_COMMAND: 1010,
          SKILL_DAILY_NEWS: 1011,
          SKILL_OLYMPIC_DAILY_CARD: 1012,
          SKILL_SPEAKER: 1013,
          SKILL_COMPLEX_SEARCH: 1014,
          SKILL_LISTEN_PODCAST: 1015,
          SKILL_CALL_VIDEO: 1016,
          SKILL_CREATION_TEMPLATE_AIGENIMG: 1017,
          SKILL_CREATION_TEMPLATE_AIREPLICA: 1018,
          SKILL_DEEP_THINKING: 1019,
          SKILL_SINGER: 1020,
          SKILL_INMATE: 1021,
          SKILL_ENGLISH_LEARNING: 1022,
          SKILL_PODCAST_GENERATION: 1023,
          SKILL_PROBLEM_SOLVING: 2e3,
          SKILL_IMAGE_GENERATION: 2001,
          SKILL_VIDEO_GENERATION: 2002,
          SKILL_AI_PHOTO: 2003,
          SKILL_WRITING_ASSISTANCE: 2004,
          SKILL_MUSIC_GENERATION: 2005,
          SKILL_TRANSLATION: 2006,
          SKILL_FPA_REMINDER: 2007,
          SKILL_DOCUMENT_READING: 2008,
          SKILL_WEB_PAGE_READING: 2009,
          SKILL_REPLY_ASSISTANCE: 2010,
          SKILL_HEALTH_CONSULTATION_OLD: 2011,
          SKILL_SEARCH: 2013,
          SKILL_COMPOSITION_CORRECTION: 2014,
          SKILL_ORAL_CALCULATION_CORRECTION: 2015,
          SKILL_AI_IMAGE_EDITING: 2016,
          SKILL_AI_NOTE: 2017,
          SKILL_CONTINUOUS_VOICE: 2018,
          SKILL_HEALTH_CONSULTATION_NEW: 2019,
          SKILL_IN_DEPTH_RESEARCH: 2020,
          SKILL_VIDEO_UNDERSTANDING: 2021,
          SKILL_COLLEGE_ENTRANCE_EXAM: 2022,
          SKILL_PHOTO_ANIMATION: 2023,
          SKILL_AI_PODCAST_NEW: 2024,
          SKILL_CREATION_MERGE: 2025,
          SKILL_HOMEWORK_CORRECTION: 2026,
          SKILL_MINI_APP: 2027,
          SkillPPTGen: 5e3
        };
        var l = {
          PatchObject_Default: 0,
          PatchObject_ContentBlock: 1,
          PatchObject_MessageStatus: 2,
          PatchObject_ContentStatus: 3,
          PatchObject_Brief: 4,
          PatchObject_Suggest: 5,
          PatchObject_Ext: 50,
          PatchObject_DownstreamVerboseInfo: 60,
          PatchObject_ContentType: 100,
          PatchObject_BizContentType: 101,
          PatchObject_Content: 102,
          PatchObject_ThinkingContent: 103,
          PatchObject_ModelContent: 110,
          PatchObject_TtsContent: 111,
          PatchObject_MetaInfos: 112
        };
        var u = {
          PatchType_Unknown: 0,
          PatchType_Append: 1,
          PatchType_Replace: 2,
          PatchType_Delete: 3
        };
        var c = {
          ReplyEndType_Unknown: 0,
          ReplyEndType_MsgFinish: 1,
          ReplyEndType_AnswerFinish: 2,
          ReplyEndType_ReplyFinish: 3
        };
        var d = {
          FetchStreamTypeUnknown: 0,
          FetchStreamTypeFetchMsgChatNext: 1,
          FetchStreamTypeAsyncTask: 2,
          FetchStreamTypeFetchMsgLegacy: 3
        };
        var f = {
          AsyncJobStatus_Unknown: 0,
          AsyncJobStatus_Success: 1,
          AsyncJobStatus_Streaming: 2,
          AsyncJobStatus_Failed: 3
        };
        require2.d(exports2, {
          asyncJobStatus: function() {
            return f;
          },
          requestSceneType: function() {
            return i;
          },
          inputSourceType: function() {
            return s;
          },
          independentSiteType: function() {
            return a;
          },
          patchObjectType: function() {
            return l;
          },
          fetchStreamType: function() {
            return d;
          },
          deepThinkSwitch: function() {
            return r;
          },
          patchType: function() {
            return u;
          },
          replyEndType: function() {
            return c;
          },
          skillTypes: function() {
            return o;
          }
        });
      };
    }
  });

  // ../doubao_source_map/web_cache_260316012/source_map/chat_(id)/page/set-rate-limit-config.js
  var require_set_rate_limit_config = __commonJS({
    "../doubao_source_map/web_cache_260316012/source_map/chat_(id)/page/set-rate-limit-config.js"(exports, module) {
      module.exports = function(module2, exports2, require2) {
        var chatMessageStoreFactory = require2("chat-message-store-factory");
        function r(e) {
          chatMessageStoreFactory.createMessageStore.setState(() => ({
            rateLimitConfig: e
          }));
        }
        require2.d(exports2, {
          setRateLimitConfig: function() {
            return r;
          }
        });
      };
    }
  });

  // ../doubao_source_map/web_cache_260316012/source_map/chat_(id)/page/message-break-handler.js
  var require_message_break_handler = __commonJS({
    "../doubao_source_map/web_cache_260316012/source_map/chat_(id)/page/message-break-handler.js"(exports, module) {
      module.exports = function(module2, exports2, require2) {
        var deepCloneWrapper_1 = require2("deep-clone-wrapper_1");
        var throttledOmitPathStringify = require2("throttled-omit-path-stringify");
        var dayjsDateLibrary = require2("dayjs-date-library");
        var a = dayjsDateLibrary;
        var messageSessionEnums = require2("message-session-enums");
        var localResourceCheck = require2("local-resource-check");
        var messageSendingCheck = require2("message-sending-check");
        var chatMessageStatusCheck = require2("chat-message-status-check");
        var messageContentTypeAndStatusChecker = require2("message-content-type-and-status-checker");
        var checkLocalReplyMessage = require2("check-local-reply-message");
        var chatAsyncTaskCheck = require2("chat-async-task-check");
        var chatIocServiceLoaderHook = require2("chat-ioc-service-loader-hook");
        var chatStoreManager = require2("chat-store-manager");
        var chatMessageTypes = require2("chat-message-types");
        var apiServicesCollection = require2("api-services-collection");
        var eventReportingService = require2("event-reporting-service");
        var loggerServiceCore = require2("logger-service-core");
        var timestampNormalizer = require2("timestamp-normalizer");
        var conversationMessageUtils_1 = require2("conversation-message-utils_1");
        var chatMessageStoreUpdater = require2("chat-message-store-updater");
        var chatMessageStoreFactory = require2("chat-message-store-factory");
        var finishMessageTask = require2("finish-message-task");
        var sessionLifecycleManager = require2("session-lifecycle-manager");
        var messageSessionLifecycleHandler = require2("message-session-lifecycle-handler");
        var messageReceiveHandler = require2("message-receive-handler");
        var aliceChatTaskManager = require2("alice-chat-task-manager");
        async function N(e, t, n, s) {
          if (!n) {
            return;
          }
          let {
            message_id: o,
            local_message_id: h,
            reply_id: p
          } = n;
          if (localResourceCheck.isLocal(n) && messageSendingCheck.isSending(n)) {
            finishMessageTask.finishMessageTask(h);
            await chatMessageStoreUpdater.updateChatMessages({
              conversationId: t,
              immerUpdate: (e3) => {
                let {
                  draftLocalMessageMap: t2
                } = e3;
                let i = t2[(n == null ? void 0 : n.local_message_id) || ""];
                if (i) {
                  i.status = chatMessageTypes.PushMessageStatus.InVisible;
                }
              }
            });
            let e2 = deepCloneWrapper_1.deepClone(n);
            e2.final_status = {
              message: "Broken",
              session: "Broken"
            };
            let r = sessionLifecycleManager.sessionManager.getSessionIdBySentMessageId(t, n.local_message_id || "");
            await messageSessionLifecycleHandler.handleSendingBreak(t, r, e2);
            await aliceChatTaskManager.cancelChatTasks({
              localMessageId: n == null ? void 0 : n.local_message_id
            });
            return;
          }
          if (!chatMessageStatusCheck.isMessageFinished(n) || localResourceCheck.isLocal(n) && messageContentTypeAndStatusChecker.pdQ(n)) {
            let e2 = conversationMessageUtils_1.getMessageFromLink(chatMessageStoreFactory.createMessageStore.getState(), t, {
              isLocalMessage: false,
              messageId: p || ""
            });
            if (localResourceCheck.isLocal(n) && checkLocalReplyMessage.isLocalReplyMessage(n)) {
              await chatMessageStoreUpdater.updateChatMessages({
                conversationId: t,
                immerUpdate: (e3) => {
                  let {
                    draftLocalMessageMap: r,
                    draftMessageLinks: s2
                  } = e3;
                  let a2 = r[h || ""];
                  if (a2) {
                    a2.status = chatMessageTypes.PushMessageStatus.InVisible;
                    a2.final_status = {
                      message: "Broken",
                      session: "Broken"
                    };
                  }
                  let o2 = s2.find((e4) => e4.messageId === h);
                  if (o2) {
                    o2.messageKey = `${o2.messageId}_break`;
                  }
                  let l = sessionLifecycleManager.sessionManager.getSessionIdBySentMessageId(t, n.reply_id || "");
                  messageSessionLifecycleHandler.handleReceivingBreak(t, l, deepCloneWrapper_1.deepClone(a2));
                }
              });
            } else if ((localResourceCheck.isLocal(n) && messageContentTypeAndStatusChecker.pdQ(n) || !chatMessageStatusCheck.isMessageFinished(n)) && o) {
              let e3 = {
                conversation_id: t,
                message_id: o,
                ...throttledOmitPathStringify.omitPathStringify(n, ["local", "local_message_id"]),
                status: chatMessageTypes.PushMessageStatus.Broken,
                chunk_seq: "999999",
                is_finish: true,
                is_delta: false,
                final_status: {
                  message: "Broken",
                  session: "Broken"
                }
              };
              messageReceiveHandler.handleReceivedMessage(e3);
            }
            await aliceChatTaskManager.cancelChatTasks({
              replyId: p || "",
              localMessageId: e2 == null ? void 0 : e2.local_message_id
            });
            let u = p || o;
            let m = eventReportingService.createEventReporter({
              eventName: "break_message"
            });
            if (!(function(e3) {
              if (!e3) {
                return false;
              }
              let t2 = timestampNormalizer.normalizeTimestamp(Number(e3.create_time || Date.now()));
              return a().isBefore(a(t2).add(10, "minute"));
            })(n) || !u || (t == null ? void 0 : t.startsWith("local")) || messageContentTypeAndStatusChecker.vlk(n)) {
              loggerServiceCore.defaultLogger.persist.log({
                eventName: "break_message_invalid",
                meta: {
                  replyId: String(u),
                  conversation_id: String(t),
                  is_finished: chatMessageStatusCheck.isMessageFinished(n) ? "1" : "0",
                  create_time: String(n.create_time),
                  message_type: String(n.message_type),
                  content_type: String(n.content_type),
                  status: String(n.status)
                }
              });
              return;
            }
            apiServicesCollection.MessageApiService.MessageReport({
              reply_id: u,
              conversation_id: t,
              action: "break"
            }).then(() => {
              m.addDurationPoint("success");
              m.success();
            }, (e3) => {
              m.error({
                reason: "break message failed",
                error: e3,
                meta: {
                  replyId: String(u),
                  conversation_id: String(t),
                  is_finished: chatMessageStatusCheck.isMessageFinished(n) ? "1" : "0",
                  create_time: String(n.create_time),
                  message_type: String(n.message_type),
                  content_type: String(n.content_type),
                  status: String(n.status)
                }
              });
              if (s != null) {
                s();
              }
            });
          }
        }
        async function C(e, t) {
          let n = e.getState();
          let i = conversationMessageUtils_1.getAvailableMessage(n, t);
          if (i) {
            let e2 = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService");
            let n2 = e2 == null ? void 0 : e2.getActiveSession(t);
            if (n2 && n2.getSessionState() !== messageSessionEnums.MessageSessionStage.Init) {
              await (e2 == null ? void 0 : e2.breakMessage({
                session: n2
              }));
            } else {
              let n3 = chatStoreManager.getStoreState("chatViewCoreStore").currentChatViewConfig;
              let i2 = (n3 == null ? void 0 : n3.chatId) === t ? n3 == null ? void 0 : n3.chatKey : void 0;
              let r = e2 == null ? void 0 : e2.getActiveSession(i2);
              await (e2 == null ? void 0 : e2.breakMessage({
                session: r
              }));
            }
          }
          if (!chatAsyncTaskCheck.hasAsyncTask(i)) {
            await N(e, t, i);
          }
        }
        require2.d(exports2, {
          handleBrokenMessage: function() {
            return C;
          }
        });
      };
    }
  });

  // ../doubao_source_map/web_cache_260316012/source_map/chat_(id)/page/chat-conversation-page.js
  var require_chat_conversation_page = __commonJS({
    "../doubao_source_map/web_cache_260316012/source_map/chat_(id)/page/chat-conversation-page.js"(exports, module) {
      module.exports = function(module2, exports2, require2) {
        var reactCoreLibraryReexport = require2("react-core-library-reexport");
        var objectPathGetDefault = require2("object-path-get-default");
        var flowLayoutStateRunner = require2("flow-layout-state-runner");
        var chatPageInteractiveTracker = require2("chat-page-interactive-tracker");
        var commonErrorPageWithSuspense = require2("common-error-page-with-suspense");
        var chatConversationTypes = require2("chat-conversation-types");
        var chatStoreManager = require2("chat-store-manager");
        var reactSuspenseWrapper = require2("react-suspense-wrapper");
        var validateNumericString = require2("validate-numeric-string");
        var resolveRuntimeHook = require2("resolve-runtime-hook");
        var loggerServiceCore = require2("logger-service-core");
        var reactErrorBoundaryWrapper = require2("react-error-boundary-wrapper");
        var chatTargetTypes = require2("chat-target-types");
        var cocoConversationStateChecker = require2("coco-conversation-state-checker");
        var chatPageLifecycleTracker = require2("chat-page-lifecycle-tracker");
        var chatGuidanceConfigSelector = require2("chat-guidance-config-selector");
        var chatViewMainComponent = require2("chat-view-main-component");
        var deepEqualityUtil = require2("deep-equality-util");
        let h = (e) => {
          let {
            trace: t
          } = e;
          let n = chatStoreManager.useStoreSelector("flowWebLayoutStore", (e2) => e2.chatCompMountedTime, deepEqualityUtil.deepEqual);
          let a = chatStoreManager.useStoreSelector("flowWebLayoutStore", (e2) => e2.conversationPageStart, deepEqualityUtil.deepEqual);
          let s = reactCoreLibraryReexport.useMemo(() => !!(n == null ? void 0 : n.message_box), [n]);
          let r = reactCoreLibraryReexport.useMemo(() => !!(n == null ? void 0 : n.message_box), [n]);
          let o = reactCoreLibraryReexport.useMemo(() => !!(n == null ? void 0 : n.message_box), [n]);
          reactCoreLibraryReexport.useEffect(() => {
            if (a && s) {
              t("visible");
            }
          }, [a, s]);
          reactCoreLibraryReexport.useEffect(() => {
            if (a && r) {
              t("interactive");
            }
          }, [a, r]);
          reactCoreLibraryReexport.useEffect(() => {
            if (a && o) {
              t("finish");
            }
          }, [a, o]);
          return null;
        };
        var edenxSearchParamsHook = require2("edenx-search-params-hook");
        var reactJsxRuntimeCoreReexport = require2("react-jsx-runtime-core-reexport");
        let T = reactCoreLibraryReexport.lazy(() => flowLayoutStateRunner.runOnInteractive(() => Promise.all([
          require2.e("semi-ui-button-input-components"),
          require2.e("semi-ui-toast-input"),
          require2.e("api-client-services"),
          require2.e("samantha-message-utils"),
          require2.e("chat-session-lifecycle"),
          require2.e("konva-external-dependencies"),
          require2.e("conversation-management"),
          require2.e("ui-toast-and-select-components"),
          require2.e("attachment-utils-helpers"),
          require2.e("chat-messaging-app-bundle"),
          require2.e("async-after-interactive")
          /*id: 87048*/
        ]).then(
          require2.bind(require2, "bot-settings-side-sheet")
          /*id: 760762*/
        )));
        let A = reactCoreLibraryReexport.lazy(() => flowLayoutStateRunner.runOnInteractive(async () => ({
          default: (await Promise.all([
            require2.e("semi-ui-button-input-components"),
            require2.e("semi-ui-toast-input"),
            require2.e("api-client-services"),
            require2.e("samantha-message-utils"),
            require2.e("chat-session-lifecycle"),
            require2.e("konva-external-dependencies"),
            require2.e("conversation-management"),
            require2.e("ui-toast-and-select-components"),
            require2.e("attachment-utils-helpers"),
            require2.e("chat-messaging-app-bundle"),
            require2.e("async-after-interactive")
            /*id: 87048*/
          ]).then(
            require2.bind(require2, "chat-skill-guidance-components")
            /*id: 415655*/
          )).GuidancePage
        })));
        let y = reactCoreLibraryReexport.lazy(() => flowLayoutStateRunner.runOnInteractive(async () => ({
          default: (await Promise.all([
            require2.e("semi-ui-button-input-components"),
            require2.e("semi-ui-toast-input"),
            require2.e("api-client-services"),
            require2.e("samantha-message-utils"),
            require2.e("chat-session-lifecycle"),
            require2.e("konva-external-dependencies"),
            require2.e("conversation-management"),
            require2.e("ui-toast-and-select-components"),
            require2.e("attachment-utils-helpers"),
            require2.e("chat-messaging-app-bundle"),
            require2.e("async-after-interactive")
            /*id: 87048*/
          ]).then(
            require2.bind(require2, "chat-skill-guidance-components")
            /*id: 415655*/
          )).GuidancePageV3
        })));
        let C = reactCoreLibraryReexport.lazy(() => flowLayoutStateRunner.runOnInteractive(async () => ({
          default: (await Promise.all([
            require2.e("semi-ui-button-input-components"),
            require2.e("semi-ui-toast-input"),
            require2.e("api-client-services"),
            require2.e("samantha-message-utils"),
            require2.e("chat-session-lifecycle"),
            require2.e("konva-external-dependencies"),
            require2.e("conversation-management"),
            require2.e("ui-toast-and-select-components"),
            require2.e("attachment-utils-helpers"),
            require2.e("chat-messaging-app-bundle"),
            require2.e("async-after-interactive")
            /*id: 87048*/
          ]).then(
            require2.bind(require2, "chat-ai-space-url-actions")
            /*id: 748251*/
          )).URLActionConditionComponent
        })));
        let x = (e) => {
          var n;
          let {
            conversationId: a,
            conversationType: s
          } = e;
          let r = chatGuidanceConfigSelector.useChatGuidanceConfig()?.guidancePageLayoutMode;
          let {
            loading: o,
            showConversationGuidancePage: l
          } = cocoConversationStateChecker.getCocoConversationState(a);
          let [u] = edenxSearchParamsHook.resolveSearchParams();
          let c = !!((n = u.get("action")) === null || n === void 0 ? void 0 : n.trim());
          if (!o && l) {
            return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
              fallback: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {}),
              children: r ? reactJsxRuntimeCoreReexport.jsx(y, {}) : reactJsxRuntimeCoreReexport.jsx(A, {})
            });
          } else {
            return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
              children: [reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
                fallback: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {}),
                children: c ? reactJsxRuntimeCoreReexport.jsx(C, {}) : null
              }), reactJsxRuntimeCoreReexport.jsx(h, {
                trace: chatPageLifecycleTracker.trackConversationPageLifecycle
              }), reactJsxRuntimeCoreReexport.jsx(chatViewMainComponent.ChatViewMainComponent, {
                conversationId: a,
                conversationType: s
              }), reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
                fallback: reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {}),
                children: reactJsxRuntimeCoreReexport.jsx(T, {})
              })]
            });
          }
        };
        let D = reactSuspenseWrapper.withSuspense(reactCoreLibraryReexport.lazy(() => flowLayoutStateRunner.runOnInteractive(async () => ({
          default: (await Promise.all([
            require2.e("semi-ui-button-input-components"),
            require2.e("semi-ui-toast-input"),
            require2.e("api-client-services"),
            require2.e("samantha-message-utils"),
            require2.e("chat-session-lifecycle"),
            require2.e("konva-external-dependencies"),
            require2.e("conversation-management"),
            require2.e("ui-toast-and-select-components"),
            require2.e("attachment-utils-helpers"),
            require2.e("chat-messaging-app-bundle"),
            require2.e("async-after-interactive")
            /*id: 87048*/
          ]).then(
            require2.bind(require2, "async-chat-page-router")
            /*id: 926853*/
          )).default
        }))));
        let N = (e) => e && (validateNumericString.isValidNumber(e) || validateNumericString.isValidNumber(e == null ? void 0 : e.replace("local_", "")));
        let P = () => {
          let {
            settingData: e
          } = chatStoreManager.getStore("launcherRawSettingStore").getState();
          return objectPathGetDefault.getObjectPathDefault(e, "ab_config.ab_results.enable_conv_page_perf") === "true";
        };
        var b = reactCoreLibraryReexport.memo(() => {
          let {
            currentChatViewConfig: i
          } = chatStoreManager.useStoreSelector("chatViewCoreStore");
          let a = (i == null ? void 0 : i.chatId) ?? "";
          let s = (i == null ? void 0 : i.chatType) ?? chatConversationTypes.ConversationTypes.NewThread;
          let c = resolveRuntimeHook.resolveUseMatches();
          let d = c[c.length - 1];
          let m = (d == null ? void 0 : d.params?.id) || "";
          let {
            businessInit: f
          } = chatPageInteractiveTracker.useChatPageInitTracker();
          if (P() || f) {
            if (s !== chatConversationTypes.ConversationTypes.Bot && s !== chatConversationTypes.ConversationTypes.ProfileBot && N(m)) {
              return reactJsxRuntimeCoreReexport.jsx(reactErrorBoundaryWrapper.ErrorBoundary, {
                errorBoundaryName: "chat_page_error",
                logger: loggerServiceCore.defaultLogger,
                errorBoundaryScope: chatTargetTypes.chatTargetTypes.Page,
                FallbackComponent: commonErrorPageWithSuspense.CommonErrorPageWithSuspense,
                children: reactJsxRuntimeCoreReexport.jsx(x, {
                  conversationId: a,
                  conversationType: s
                })
              });
            } else {
              return reactJsxRuntimeCoreReexport.jsx(reactErrorBoundaryWrapper.ErrorBoundary, {
                errorBoundaryName: "chat_page_error",
                logger: loggerServiceCore.defaultLogger,
                errorBoundaryScope: chatTargetTypes.chatTargetTypes.Page,
                FallbackComponent: commonErrorPageWithSuspense.CommonErrorPageWithSuspense,
                children: reactJsxRuntimeCoreReexport.jsx(D, {})
              });
            }
          } else {
            return null;
          }
        });
        let O = (e) => false;
        require2.r(exports2);
        require2.d(exports2, {
          shouldRevalidate: function() {
            return O;
          },
          default: function() {
            return b;
          }
        });
      };
    }
  });

  // ../doubao_source_map/web_cache_260316012/source_map/chat_(id)/page.js
  (self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([["chat_(id)/page", 5623], {
    "messaging-constants": require_messaging_constants(),
    "292449": require_messaging_constants(),
    "file-type-detection-utils": require_file_type_detection_utils(),
    "393072": require_file_type_detection_utils(),
    "file-type-checkers": require_file_type_checkers(),
    "412342": require_file_type_checkers(),
    "coco-conversation-state-checker": require_coco_conversation_state_checker(),
    "425443": require_coco_conversation_state_checker(),
    "conversation-message-utils": require_conversation_message_utils(),
    "45244": require_conversation_message_utils(),
    "ai-chat-enum-constants": require_ai_chat_enum_constants(),
    "458113": require_ai_chat_enum_constants(),
    "set-rate-limit-config": require_set_rate_limit_config(),
    "730897": require_set_rate_limit_config(),
    "message-break-handler": require_message_break_handler(),
    "874388": require_message_break_handler(),
    "chat-conversation-page": require_chat_conversation_page(),
    "994124": require_chat_conversation_page()
  }, null]);
})();
//# sourceMappingURL=chat-page.bundle.js.map
