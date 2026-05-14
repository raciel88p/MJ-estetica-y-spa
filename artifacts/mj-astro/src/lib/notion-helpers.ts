export function getPlainText(property: any): string {
  if (!property) return "";
  if (Array.isArray(property)) {
    return property.map((t: any) => t.plain_text || t.name || t.text?.content || "").join(" ");
  }
  if (property.rich_text) {
    return property.rich_text.map((t: any) => t.plain_text).join(" ");
  }
  if (property.title) {
    return property.title.map((t: any) => t.plain_text).join(" ");
  }
  if (property.name) return property.name;
  return "";
}

export function getMultiSelect(property: any): {name: string; color: string}[] {
  if (!property) return [];
  if (Array.isArray(property)) return property;
  if (property.multi_select) return property.multi_select;
  return [];
}
