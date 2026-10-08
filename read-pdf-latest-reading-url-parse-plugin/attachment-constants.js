// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Dm' to 'UploadFileType'
// - Renamed export 'Ki' to 'ParseState'
// - Renamed export 'cy' to 'UploadStatus'
// - Renamed export 'd' to 'PositionType'
// - Renamed export 'ek' to 'ReviewState'
// - Renamed export 'lW' to 'ReferenceType'
// - Renamed export 'sf' to 'AttachmentType'
// - Renamed export 'zh' to 'UploadMediaType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: read-pdf-latest-reading-url-parse-plugin.68a64c76.js
         * chunkId: 63210
         * moduleId: 373585
         */
module.exports = function (module, exports, require) {
  var i = {
    AttachmentTypeUnknown: 0,
    AttachmentTypeImage: 1,
    AttachmentTypeVideo: 2,
    AttachmentTypeFile: 3,
    AttachmentTypeLink: 4,
    AttachmentTypeCodeDirectory: 5,
    AttachmentTypeResourceContent: 6,
    AttachmentTypeLarkDoc: 7
  };
  var l = {
    ParseStateDefault: 0,
    ParseStateSuccess: 1,
    ParseStateFail: 2,
    ParseStateProcessing: 3
  };
  var r = {
    ReviewStateDefault: 0,
    ReviewStateAccess: 1,
    ReviewStateNotCompliant: 2,
    ReviewStateProcessing: 3
  };
  var n = {
    UploadStatusDefault: 0,
    UploadStatusSuccess: 1,
    UploadStatusFail: 2
  };
  var o = {
    UploadFileTypeDefault: 0,
    UploadFileTypeAudio: 1
  };
  var s = {
    UploadMediaTypeDefault: 0,
    UploadMediaTypeAudio: 1,
    UploadMediaTypeVideo: 2
  };
  var c = {
    ReferenceTypeUnknown: 0,
    ReferenceTypeImage: 1,
    ReferenceTypeVideo: 2,
    ReferenceTypeFile: 3,
    ReferenceTypeLink: 4,
    ReferenceTypeCodeDirectory: 5,
    ReferenceTypeText: 6,
    ReferenceTypePPTTemplate: 7,
    ReferenceTypeLarkDoc: 8
  };
  var _ = {
    PositionTypeUnknown: 0,
    PositionTypeFile: 1,
    PositionTypeCodeArtifact: 2
  };
  require.d(exports, {
    UploadFileType: function () {
      return o;
    },
    ParseState: function () {
      return l;
    },
    UploadStatus: function () {
      return n;
    },
    PositionType: function () {
      return _;
    },
    ReviewState: function () {
      return r;
    },
    ReferenceType: function () {
      return c;
    },
    AttachmentType: function () {
      return i;
    },
    UploadMediaType: function () {
      return s;
    }
  });
}