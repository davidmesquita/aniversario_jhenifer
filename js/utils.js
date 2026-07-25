export function imgOrPlaceholder(src, label, basePath = "") {
  if (src && src.trim() !== "") {
    const path = basePath && !src.startsWith("http") ? basePath + src : src;
    return `<img src="${path}" alt="${label}">`;
  }
  return `<div class="placeholder-img">📷<br>${label}</div>`;
}
