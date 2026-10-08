// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$A' to 'artifactResourceType'
// - Renamed export 'Dq' to 'artifactOpStatus'
// - Renamed export 'Ei' to 'codeStdOutType'
// - Renamed export 'Eq' to 'skillMessageMode'
// - Renamed export 'F6' to 'richMediaType'
// - Renamed export 'Hs' to 'codeType'
// - Renamed export 'Hw' to 'platformType'
// - Renamed export 'OK' to 'artifactStatus'
// - Renamed export 'Sc' to 'searchType'
// - Renamed export 'St' to 'artifactAction'
// - Renamed export 'ZN' to 'messageRole'
// - Renamed export 'bg' to 'titleType'
// - Renamed export 'oI' to 'blockSearchMediaScene'
// - Renamed export 'qb' to 'taskStatus'
// - Renamed export 'yk' to 'fileOperationType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 617019
         */
module.exports = function (module, exports, require) {
  var i = {
    DEFAULT: 0,
    LONG_FILE_PARSE_LIMIT_TIPS: 1,
    AIDOC: 2
  };
  var r = {
    ArtifactStatus_Undefined: 0,
    ArtifactStatus_Generating: 1,
    ArtifactStatus_Generated: 2,
    ArtifactStatus_Deleted: 3,
    ArtifactStatus_OutDated: 4,
    ArtifactStatus_Unsupported: 5
  };
  var s = {
    ArtifactResourceType_Undefined: 0,
    ArtifactResourceType_WriteDoc: 1,
    ArtifactResourceType_Pages: 2,
    ArtifactResourceType_CanvasPage: 3,
    ArtifactResourceType_StepWritingPage: 4,
    ArtifactResourceType_Code: 5,
    ArtifactResourceType_StepWritingOtterPage: 6,
    ArtifactResourceType_CodeBlock: 7,
    ArtifactResourceType_CodeDevelopMode: 8,
    ArtifactResourceType_Slides: 9,
    ArtifactResourceType_Docx: 10,
    ArtifactResourceType_StepDocx: 11
  };
  var a = {
    UNKNOWN: 0,
    CANCEL: 1,
    FINISH: 2,
    FAIL: 3,
    PROCESSING: 4,
    PAUSE: 5
  };
  var o = {
    UNKNOWN: 0,
    APP: 1,
    WEB: 2
  };
  var l = {
    DEFAULT: 0,
    TITLE: 1,
    HIDDEN: 2,
    STEP: 3
  };
  var u = {
    CodeType_Raw: 0,
    CodeType_Markdown: 1
  };
  var c = {
    CodeStdOutType_Unknown: 0,
    CodeStdOutType_Text: 1,
    CodeStdOutType_Image: 2
  };
  var d = {
    FileOperationType_Unknown: 0,
    FileOperationType_View: 1,
    FileOperationType_Create: 2,
    FileOperationType_Edit: 3,
    FileOperationType_List: 4,
    FileOperationType_Replace: 5
  };
  var f = {
    Unknown: 0,
    Thinking: 1,
    Answer: 2
  };
  var h = {
    Default: 0,
    WebSearch: 1,
    TextSearchImage: 2,
    ImageSearchImage: 3,
    ScholarSearch: 4
  };
  var p = {
    RichMediaTypeUnknown: 0,
    RichMediaTypeImage: 1,
    RichMediaTypeVideo: 2,
    RichMediaTypeRuYi: 3,
    RichMediaTypeApplet: 4,
    RichMediaTypeUgc: 5
  };
  var m = {
    BlockSearchRichMediaScene_Default: 0,
    BlockSearchRichMediaScene_RelatedVideo: 1,
    BlockSearchRichMediaScene_PureVideo: 2,
    BlockSearchRichMediaScene_RelatedVideoTwoCol: 3
  };
  var g = {
    ArtifactAction_Undefined: 0,
    ArtifactAction_Create: 1,
    ArtifactAction_StrReplace: 2,
    ArtifactAction_Refine: 3,
    ArtifactAction_Read: 4,
    ArtifactAction_Delete: 5
  };
  var _ = {
    ArtifactOPStatus_Undefined: 0,
    ArtifactOPStatus_Processing: 1,
    ArtifactOPStatus_Succeed: 2,
    ArtifactOPStatus_Failed: 3
  };
  require.d(exports, {
    artifactResourceType: function () {
      return s;
    },
    artifactOpStatus: function () {
      return _;
    },
    codeStdOutType: function () {
      return c;
    },
    skillMessageMode: function () {
      return i;
    },
    richMediaType: function () {
      return p;
    },
    codeType: function () {
      return u;
    },
    platformType: function () {
      return o;
    },
    artifactStatus: function () {
      return r;
    },
    searchType: function () {
      return h;
    },
    artifactAction: function () {
      return g;
    },
    messageRole: function () {
      return f;
    },
    titleType: function () {
      return l;
    },
    blockSearchMediaScene: function () {
      return m;
    },
    taskStatus: function () {
      return a;
    },
    fileOperationType: function () {
      return d;
    }
  });
}