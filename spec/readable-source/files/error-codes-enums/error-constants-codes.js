// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 39444.e93f094f.js
         * chunkId: 39444
         * moduleId: 850732
         */
module.exports = function (module, exports, require) {
  let n = {
    UNKNOWN_REASON: 0,
    BE_BLOCKED: 1,
    CROSS_TENANT_DENY: 2,
    SAME_TENANT_DENY: 3,
    CRYPTO_CHAT_DENY: 4,
    BLOCKED: 5,
    NO_FRIENDSHIP: 6,
    PRIVACY_SETTING: 7,
    TARGET_PRIVACY_SETTING: 8,
    PRIVATE_CALENDAR: 9,
    EXTERNAL_COORDINATE_CTL: 10,
    TARGET_EXTERNAL_COORDINATE_CTL: 11,
    SEND_SECRET_CHAT_BY_ICON_DENY: 12,
    PRIVATE_CHAT_DISABLED: 15,
    PRIVATE_CHAT_KMS_UNAVAILABLE: 16,
    PRIVATE_CHAT_DENY: 17,
    PRIVATE_CHAT_CROSS_TENANT: 18
  };
  let r = {
    General: 100000,
    SwitchingUser: 100001,
    SwitchToFrozenUser: 100002,
    RequestClientErr: 100011,
    RequestServerErr: 100012,
    Unauthorized: 100013,
    Forbidden: 100014,
    Gone: 100015,
    NotFound: 100016,
    AbandonedUnderStartUpControl: 100017,
    UserIdVerificationErr: 100030,
    BrokenLoginInvariant: 100031,
    InvokeUserCmdWhenLogin: 100032,
    LoginWithoutTenantID: 100033,
    DupLoginWithDifferentTenantID: 100034,
    LoginWithoutUserInfo: 100035,
    GetDeviceConfigBeforeSet: 100036,
    UnregisteredCMD: 100037,
    UserContainerIdMismatchErr: 100038,
    UserContainerNotReadyErr: 100039,
    Offline: 100052,
    NetworkLibraryError: 100053,
    Timeout: 100054,
    DozeMode: 100055,
    FrequencyLimit: 100056,
    NotReady: 100057,
    NotSupportDir: 100101,
    MediaTranscodeFail: 100151,
    MediaTranscodeCancel: 100152,
    MediaIOError: 100153,
    DatabaseNotInited: 100201,
    IoError: 100300,
    IoNotFound: 100301,
    IoPermissionDenied: 100302,
    IoStorageFull: 100303,
    ProtobufDecodeError: 100400,
    ClientProtobufDecodeError: 100401,
    ServerProtobufDecodeError: 100402,
    ProtobufIOError: 100403,
    ProtobufWireError: 100404,
    ProtobufUtf8Error: 100405,
    ProtobufMessageNotInitialized: 100406,
    CryptoError: 100501,
    SendMessageTooOften: 101001,
    OnlineFailedAndGetLocalData: 101002,
    SendMessageMissDependentChannel: 101003,
    EventSharedInSyncing: 102001,
    InvalidCalendarEvent: 102002,
    AttendeeNumberExceedsLimit: 102003,
    UserNotInMeetingChat: 102004,
    ExceedMaxVisibleCalNum: 102005,
    EventWriteSyncDoneError: 102006,
    EventWriteSyncSDKDoneError: 102007,
    EventWriteSDKSaveError: 102008,
    EventReadSyncDoneError: 102009,
    EventReadSyncSDKDoneError: 102010,
    DisableEncryptEvent: 102011,
    EventWriteSyncNoneEventError: 102012,
    EventWriteSyncEventNotMatchError: 102013,
    EventWriteSyncAttendeeNotMatchError: 102014,
    EventNotFoundedInDb: 102015,
    EventFieldInvalid: 102016,
    SavingEventInvalid: 102017,
    EventNotFound: 102018,
    EventNotWritable: 102019,
    NewEventNotSyncToServer: 102020,
    CalendarNotFound: 102100,
    CalendarNotWritable: 102101,
    CalendarFieldInvalid: 102102,
    NoSelfPrimaryCalendar: 102103,
    RequestFrequencyLimited: 102200,
    InvalidTimeRange: 102201,
    UnexpectedNoneValue: 102202,
    UnexpectedIllegalValue: 102203,
    CalendarQueueClosed: 102204,
    TimeBlockNotFound: 102300,
    TodoAssigneeNumberExceedsLimit: 103001,
    TodoFollowerNumberExceedsLimit: 103002,
    InvalidDataFormat: 103003,
    SerializationError: 103004,
    MailSwitchAccount: 104001,
    MailTriAccountUpdateDiffAddress: 104002,
    MailTriAccountCreateRepeatedAddress: 104003,
    MailTriAccountCreateAuthFailed: 104004,
    MailTriAccountTaskCancelled: 104005,
    MailBasicPermissionDisabled: 104006,
    MailDraftHasBeenDeleted: 104010,
    MailDraftHasBeenSent: 104011,
    MailCanNotSendExternal: 104020,
    MailDraftSendQuotaExceeded: 104021,
    MailDraftAttachmentTooLarge: 104022,
    MailDraftSubmissionFailed: 104023,
    UploadInSufficient: 105001,
    DoubleBatchDownload: 105002,
    GetFastestDownloadUrlFailed: 105008,
    PartialDownloadInitError: 105009,
    VerificationFailed: 105010,
    ResourceKeyNotFound: 105011,
    StreamUploadNeedRetry: 105012,
    StreamUploadResponseEmpty: 105013,
    Unknown: 105400,
    GetAvatarRequestFailed: 105401,
    PathEmpty: 105402,
    RecvTimeout: 105403,
    RecvTimeoutDisconnected: 105404,
    CatchUnwindError: 105405,
    FormatEmpty: 105406,
    DefaultFsUnitFetchFailed: 105408,
    DataIsNotImage: 105409,
    SaveAvatarError: 105410,
    GetAvatarFutFailed: 105411,
    CcharToRstrError: 105407,
    ChunkyUploadCancelled: 105003,
    ChunkyUploadFailed: 105004,
    UploadFileOnOffline: 105005,
    UploadFolderOnOffline: 105006,
    SwiftUploadFailed: 105007,
    PathTraversal: 105015,
    TransmitPartialFailure: 105500,
    TransmitAllFailure: 105501,
    ShareAllFailure: 105502,
    EncryptedChatUnableToSendContactAdmin: 105503,
    ExclusiveChatServiceError: 105504,
    EditMessageDeniedByTimeLimit: 1005600,
    VcE2EEEnDecryptError: 107001,
    ActionContentVersionNotMatch: 108001,
    ActionLocalActionNotFound: 108002,
    ActionMessageTypeInvalid: 108003,
    ActionTranslationActionNotFound: 108004,
    ActionAppCardVersionNotMatch: 108005,
    ActionSDKCardVersionNotMatch: 108006,
    ActionSDKCardEntityActionError: 108007,
    OperationToPendingDeleteFeed: 111001,
    NoUserList: 111002,
    NoLeanModeAuthority: 170001,
    IsFeedSyncing: 170002,
    SecCheckInfraFailed: 180001,
    SecurityParamMissing: 190000,
    SecurityBizCodeMissing: 190001,
    SecurityDataMissing: 190002,
    SecurityJsonParsingFailed: 190003,
    SecurityPolicySDKDispalyModelMissing: 190004,
    KnowledgeAIShowMessage: 200001
  };
  let T = {
    RELATION_TAG_UNSET: 0,
    RELATION_TAG_EXTERNAL: 1,
    RELATION_TAG_PARTNER: 2,
    RELATION_TAG_TENANT_NAME: 3,
    TENANT_ENTITY_TAG: 4
  };
  let _ = {
    UNKNOWN: 0,
    API: 1,
    FILE: 2,
    OAPI: 3,
    DRIVE: 4,
    DOCS: 5,
    MINA: 6,
    OPEN: 7,
    DOCS_API: 8,
    PASSPORT: 9,
    INTERNAL_API: 10,
    GROUP_QR_CODE: 11,
    HELPDESK: 12,
    CONTACT: 13,
    PRIVACY: 14,
    HELP_DOCUMENT: 15,
    DOCS_LONG: 16,
    CJ_HONGBAO: 17,
    DEVICE: 18,
    CDN: 19,
    SENTRY: 20,
    TTPUSH: 21,
    LOG: 22,
    DOCS_DRIVE: 23,
    LONG: 24,
    PEOPLE: 25,
    VOD: 26,
    SHORT_RTC: 27,
    LONG_RTC: 29,
    MP_APPLINK: 30,
    MP_REFER: 31,
    MP_CONFIG: 32,
    MP_TT: 33,
    OPEN_APP_FEED: 34,
    OPEN_MSG_CARD: 35,
    OPEN_APPCENTER1: 36,
    OPEN_APPCENTER2: 37,
    OPEN_MOMENT: 38,
    OPEN_API_LOGIN: 39,
    SUITE_IMAGE_CDN: 40,
    TT_CDN: 41,
    SUITE_REPORT: 42,
    OPEN_APPCENTER_CARDJUMP: 43,
    DOCS_HOME: 44,
    SUITE_ANDROID_HOTFIX: 45,
    TT_MUSICAL: 46,
    DOCS_ACCOUNT_DELETE_NOTICE: 47,
    SUITE_MAIN_DOMAIN: 48,
    PASSPORT_CAPTCHA: 49,
    OPEN_APPCENTER3: 50,
    OPEN_JSSDK_CONFIG: 51,
    SUITE_SAFETYNET: 52,
    OPEN_APP_INTERFACE: 53,
    SUITE_SECURITY_LINK: 54,
    DOCS_MAIN_DOMAIN: 55,
    DOCS_FE_RESOURCE_HOTFIX: 56,
    SUITE_SECSDK: 57,
    HELP_CENTER: 58,
    TT_ET: 59,
    SUITE_TKLOG: 60,
    EMAIL: 61,
    DOCS_PEER: 62,
    APPLINK_PEER: 63,
    DOCS_FEED: 64,
    TT_GRAYLOG: 65,
    SUITE_PAN_CDN: 66,
    UG_ACTIVITY: 67,
    TT_APPLOG: 68,
    TT_NPTH: 69,
    TT_SLARDAR_SETTING: 70,
    TT_SLARDAR_REPORT: 71,
    TT_SLARDAR_EXCEPTION: 72,
    TT_ABTEST: 73,
    VC_PRIVACY: 74,
    SUITE_APPCONFIG: 75,
    TT_SLARDAR_CRASH_HOST_IOS: 76,
    TT_SLARDAR_EXCEPTION_HOST_IOS: 77,
    OPEN_APPSTORE: 78,
    TT_SLARDAR: 79,
    OPEN_APPLINK_SCHEMA_ENABLE_HOST: 80,
    VC_MM: 81,
    DOCS_FRONTIER: 82,
    PANO: 83,
    SUITE_ADMIN: 84,
    RTC_FRONTIER: 85,
    RTC_DECISION: 86,
    RTC_DEFAULTIPS: 87,
    NTP: 88,
    MOCK_GATEWAY: 89,
    BASIC_MODE: 90,
    EMAIL_BFF: 91,
    EMAIL_SMTP: 92,
    EMAIL_IMAP: 93
  };
  let i = {
    UNKNOWN_TAG: 0,
    OFFICIAL: 1,
    ON_CALL: 2,
    BOT: 3,
    MEETING: 4,
    APPROVAL: 5,
    SECRET_CHAT: 6,
    WHOLE: 7,
    DEPARTMENT: 8,
    EXTERNAL: 9,
    PUBLIC: 10,
    GROUP_ADMIN: 11,
    SUPERVISOR: 12,
    STOPPED: 13,
    OFFLINE: 14,
    DELETED: 15,
    UNACTIVATED: 16,
    EDU: 17,
    FROZEN: 18,
    RELATION_TAG_INFO: 19,
    B2B_TAG: 20,
    USER_RESIGNED: 21,
    ONCALL_OFFLINE: 100
  };
  let o = {
    UNKNOWN: 0,
    XIGUA: 1,
    DOUYIN: 2,
    HUOSHAN: 3,
    YOUTUBE: 4,
    IQIYI: 5,
    YOUKU: 6,
    QQ: 7
  };
  let a = {
    UNKNOWN: 0,
    TEXT: 1,
    IMG: 2,
    P: 3,
    FIGURE: 4,
    AT: 5,
    A: 6,
    B: 7,
    I: 8,
    U: 9,
    EMOTION: 10,
    BUTTON: 11,
    SELECT: 12,
    PROGRESSSELECT: 13,
    DIV: 14,
    TEXTABLEAREA: 15,
    TIME: 16,
    LINK: 17,
    MEDIA: 18,
    SELECTMENU: 19,
    OVERFLOWMENU: 20,
    DATEPICKER: 21,
    DOCS: 22,
    H1: 23,
    H2: 24,
    H3: 25,
    UL: 26,
    OL: 27,
    LI: 28,
    QUOTE: 29,
    CODE: 30,
    CODE_BLOCK: 31,
    HR: 32,
    TIMEPICKER: 33,
    DATETIMEPICKER: 34,
    REACTION: 35,
    MENTION: 36,
    CODE_BLOCK_V2: 37,
    MY_AI_TOOL: 38,
    TABLE: 39,
    TABLE_ROW: 40,
    TABLE_CELL: 41,
    COLUMNS: 42,
    COLUMN: 43,
    H4: 44,
    H5: 45,
    H6: 46,
    AT_USER_GROUP: 47,
    IMAGE_GALLERY: 48
  };
  let A = {
    P2P: 1,
    GROUP: 2,
    TOPIC_GROUP: 3
  };
  let N = {
    UNKNOWN: 0,
    DEFAULT: 1,
    THREAD: 2,
    THREAD_V2: 3
  };
  let O = {
    BLUE: 0,
    GRAY: 1,
    INDIGO: 2,
    WATHET: 3,
    GREEN: 4,
    TURQUOISE: 5,
    YELLOW: 6,
    LIME: 7,
    RED: 8,
    ORANGE: 9,
    PURPLE: 10,
    VIOLET: 11,
    CARMINE: 12
  };
  let I = {
    SECOND: 0,
    MINUTE: 1,
    HOUR: 2,
    DAY: 3,
    MONTH: 4,
    YEAR: 5
  };
  let C = {
    UNKNOWN: 0,
    USER: 1,
    BOT: 2,
    AI: 3
  };
  let S = {
    DEFAULT: 0,
    EXECUTIVES: 1
  };
  let c = {
    UNKNOWN: 0,
    DOC: 1,
    SHEET: 2,
    BITABLE: 3,
    MINDNOTE: 4,
    FILE: 5,
    SLIDE: 6,
    WIKI: 7,
    DOCX: 8,
    FOLDER: 9,
    CATALOG: 10,
    SLIDES: 11,
    SHORTCUT: 12,
    DOCX_SYNCED_BLOCK: 13
  };
  let D = {
    UNKNOWN: 0,
    DOC: 1,
    SHEET: 2,
    BITABLE: 3,
    MINDNOTE: 4,
    FILE: 5,
    SLIDE: 6,
    WIKI: 7,
    DOCX: 8,
    FOLDER: 9,
    CATALOG: 10,
    SLIDES: 11,
    SHORTCUT: 12,
    DOCX_SYNCED_BLOCK: 13
  };
  let R = {
    GET: 1,
    POST: 2,
    LARK_COMMAND: 3,
    OPEN_URL: 4,
    SWITCH_STATE: 5,
    SHOW_TOAST: 6,
    SHOW_DIALOG: 7
  };
  let d = {
    success: 1,
    error: 2,
    info: 3,
    warning: 4
  };
  let u = {
    N: 0,
    B: 1,
    W: 2,
    T: 3,
    G: 4,
    L: 5,
    Y: 6,
    S: 7,
    O: 8,
    R: 9,
    C: 10,
    V: 11,
    P: 12,
    I: 13,
    STATIC_WHITE: 14
  };
  let l = {
    orientation: 1,
    spacing: 2,
    wrap_width: 3,
    padding: 4,
    main_axis_justify: 5,
    cross_axis_align: 6,
    side_padding: 7,
    icon: 8,
    title: 9,
    lark_tag: 10,
    child_component_id: 11,
    show_copy_Link_Btn: 12,
    show_close_Btn: 13,
    theme: 14,
    type: 15,
    theme_color: 16,
    header_tag: 17,
    favicon_url: 18,
    ud_icon_key: 19,
    ud_icon_theme_color: 20,
    image: 21,
    alt: 22,
    chatters_count: 23,
    chatters_infos: 24,
    max_show_count: 25,
    text: 26,
    direction: 27,
    action_id: 28,
    is_disable: 29,
    start_time_stamp: 30,
    is_countdown: 31,
    ntp_action_id: 32,
    is_end: 33,
    end_time_stamp: 34,
    number_of_lines: 35,
    tags: 36,
    items: 37,
    selected_index: 38,
    avatar_chatter_info: 39,
    site: 40,
    cover_image: 41,
    duration: 42,
    src_url: 43,
    vid: 44,
    iframe_url: 45,
    doc_type: 46,
    thumbnail_url: 47,
    secret_url: 48,
    secret_type: 49,
    secret_key: 50,
    secret_nonce: 51,
    tagColor: 52,
    tagTextColor: 53,
    icon_color: 54,
    chatters_mode: 55,
    cover_image_url: 56,
    time_zone_type: 57,
    format_type: 58,
    time_precision_type: 59,
    time_style: 60,
    date_precision_type: 61,
    date_status_type: 62,
    enable_gmt: 63,
    image_url: 64,
    mixed_tags: 65,
    font_size: 66,
    font_weight: 67,
    flex_wrap: 68,
    main_axis_spacing: 69,
    cross_axis_spacing: 70,
    force_use_compact_mode: 71,
    unicode: 72,
    size_level: 200,
    background_type: 201,
    background_linear_deg: 202,
    background_linear_theme_colors: 203,
    width: 204,
    height: 205,
    max_width: 206,
    max_height: 207,
    min_width: 208,
    min_height: 209,
    grow_weight: 210,
    shrink_weight: 211,
    font_level: 213,
    border_width: 214,
    border_corner_radius: 215,
    border_theme_color: 216,
    aspect_ratio: 217,
    align_self: 218
  };
  let L = {
    CARD: 0,
    ALERT: 1
  };
  let s = {
    EMPTY: 0,
    LINEAR_LAYOUT: 1,
    FLEX_LAYOUT: 2,
    HEADER: 501,
    RICHTEXT: 502,
    IMAGE: 503,
    CHATTERS_PREVIEW: 504,
    BUTTON: 505,
    ICON_BUTTON: 506,
    TEXT_BUTTON: 507,
    TIME: 508,
    TEXT: 509,
    TAG_LIST: 510,
    SPIN_BUTTON: 511,
    AVATAR: 512,
    VIDEO: 513,
    CARD_CONTAINER: 514,
    DOC_IMAGE: 515,
    LOADING: 516,
    TIME_ZONE: 517,
    OVERSIZED_TEXT: 518,
    ENGINE: 519,
    DOC_STATE_BUTTON: 520,
    IMAGE_CONTAINER: 521
  };
  let P = {
    AUTO: 0,
    POINT: 1,
    PERCENTAGE: 2
  };
  let U = {
    LTR: 0,
    RTL: 1
  };
  let M = {
    ROW: 0,
    COLUMN: 1,
    ROW_REVERSE: 2,
    COLUMN_REVERSE: 3
  };
  let f = {
    START: 0,
    CENTER: 1,
    END: 2,
    SPACE_BETWEEN: 3,
    SPACE_ARROUND: 4,
    SPACE_EVENLY: 5
  };
  let F = {
    TOP: 0,
    MIDDLE: 1,
    BOTTOM: 2,
    STRETCH: 3,
    BASELINE: 4
  };
  let G = {
    LIGHT: 0,
    DARK: 1
  };
  let m = {
    TITLE: 0,
    HEADLINE: 1,
    BODY: 2,
    CAPTION: 3
  };
  let h = {
    NORMAL: 0,
    HEADLINES: 1
  };
  let p = {
    STATIC: 0,
    DYNAMIC: 1
  };
  let g = {
    UserGroupType_UNKNOWN: 0,
    UserGroupType_ASSIGN: 1,
    UserGroupType_DYNAMIC: 2
  };
  require.d(exports, {
    ABS: function () {
      return U;
    },
    C98: function () {
      return C;
    },
    CU8: function () {
      return n;
    },
    Cdw: function () {
      return s;
    },
    D1o: function () {
      return R;
    },
    G$$: function () {
      return d;
    },
    HSs: function () {
      return a;
    },
    MCT: function () {
      return M;
    },
    Mq_: function () {
      return F;
    },
    PCe: function () {
      return A;
    },
    R0R: function () {
      return h;
    },
    WEQ: function () {
      return u;
    },
    XCB: function () {
      return T;
    },
    YHf: function () {
      return _;
    },
    Ycq: function () {
      return O;
    },
    _q5: function () {
      return i;
    },
    ani: function () {
      return m;
    },
    bL6: function () {
      return p;
    },
    ddh: function () {
      return I;
    },
    lOn: function () {
      return c;
    },
    mad: function () {
      return D;
    },
    pDI: function () {
      return o;
    },
    ptQ: function () {
      return l;
    },
    q2D: function () {
      return L;
    },
    qMT: function () {
      return S;
    },
    qZn: function () {
      return G;
    },
    uAe: function () {
      return g;
    },
    uYf: function () {
      return r;
    },
    upw: function () {
      return f;
    },
    w3h: function () {
      return N;
    },
    zBQ: function () {
      return P;
    }
  });
}