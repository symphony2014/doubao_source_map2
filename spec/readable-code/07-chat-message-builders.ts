/**
 * Human-readable reconstruction of the duplicated chat-message-builders.js blob.
 * Canonical source: async-business-input-engine-submit/chat-message-builders.js.
 */

export function createTextMessage(text: string, reportParams: object) {
  return { text, reportParams };
}

export function createImageMessage(text: string, attachment: LocalAttachment, reportParams: object) {
  return { compositeContent: { text, images: [toFileReference(attachment)] }, reportParams };
}

export function createFileContentMessage(text: string, attachment: LocalAttachment) {
  return { compositeContent: { text, files: [toFileReference(attachment)] }, reportParams: { scene: "keyboard" } };
}

export function createFileMessage(file: File, reportParams: object) {
  return { file, local_key: undefined, reportParams };
}

export function createFileKeyMessage(file: { key: string; fileName: string }, reportParams: object) {
  return { file_key: file.key, file_name: file.fileName, reportParams };
}

export function processAttachments(input: {
  text: string;
  attachments: AttachmentDescriptor[];
  attachmentKeys: Array<string | undefined>;
  attachmentStates: AttachmentState[];
  enableImageVlm: boolean;
}, reportParams: object) {
  const nestedItems = input.attachments.flatMap((attachment, index) => {
    if (isLink(attachment) || isLarkDocument(attachment)) return [];
    const fileKey = input.attachmentKeys[index];
    const state = input.attachmentStates[index];
    if (!fileKey || !state) return [];
    const base = {
      fileKey, fileName: attachment.fileName ?? attachment.file?.name,
      size: attachment.isRemote ? attachment.size ?? 0 : attachment.file?.size ?? attachment.size,
      identifier: attachment.isRemote ? generateUuid() : attachment.localKey,
      parseState: state.parseState, reviewState: state.reviewState, md5: state.md5, localKey: state.localKey,
    };
    if (isImage(attachment)) {
      return [{ ...base, type: input.enableImageVlm ? "Image" : "File", fileType: "OCRImage", image: { key: fileKey, image_ori: { width: state.imageWidth, height: state.imageHeight } } }];
    }
    return [{ ...base, type: "File", fileType: "File" }];
  });
  return nestedItems.length ? { text: input.text, nestedItems, reportParams: { ...reportParams } } : undefined;
}

export async function getPreGeneratedId(localKey: string) {
  const id = (await loadService("attachmentUploadStoreService")).popPreGeneratedId(localKey);
  return id ? { pre_generate_id: id } : {};
}

type LocalAttachment = any; type AttachmentDescriptor = any; type AttachmentState = any;
declare function toFileReference(value: any): any; declare function isLink(value: any): boolean; declare function isLarkDocument(value: any): boolean; declare function generateUuid(): string; declare function isImage(value: any): boolean; declare function loadService(name: string): Promise<any>;
