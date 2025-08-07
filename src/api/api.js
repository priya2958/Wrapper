// src/api/api.js
import { parseApiResponse, handleApiFeedback } from "./responseHandler";

/**
 * Generic API utility for standardized backend
 * @param {string} url
 * @param {object} options fetch options
 * @param {function} showToast function(message, type)
 */
export async function apiRequest(url, options = {}, showToast = () => {}) {
  const res = await fetch(url, options);
  const parsed = await parseApiResponse(res);
  return handleApiFeedback(parsed, showToast);
}
