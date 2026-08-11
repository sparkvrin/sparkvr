// Detects whether stored blog content is already HTML (from the rich text
// editor) versus legacy plain text (paragraphs separated by blank lines).
export function isHtmlContent(text: string): boolean {
  return /<\/?[a-z][\s\S]*>/i.test(text);
}

// Converts legacy plain-text content (as saved by the old textarea) into
// HTML paragraphs, so opening an old post in the rich editor preserves its
// paragraph breaks instead of collapsing into one block of text.
export function plainTextToHtml(text: string): string {
  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const paragraphs = text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  if (paragraphs.length === 0) return "";

  return paragraphs
    .map((p) => `<p>${escape(p).replace(/\n/g, "<br>")}</p>`)
    .join("");
}

// Normalizes content coming out of Firestore into HTML ready for the editor.
export function toEditorHtml(content: string): string {
  if (!content) return "";
  return isHtmlContent(content) ? content : plainTextToHtml(content);
}

// TipTap's getHTML() returns "<p></p>" for an empty editor, which is
// truthy — use this instead of a plain falsy check for validation.
export function isContentEmpty(html: string): boolean {
  return html.replace(/<[^>]*>/g, "").trim().length === 0;
}
