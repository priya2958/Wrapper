// src/api/responseHandler.js
/**
 * Standardized API response handler for React frontend
 */
export function parseApiResponse(response) {
  // Handles both fetch Response and direct JSON
  if (response && response.json) {
    // If it's a fetch Response object
    return response.json().then(parseApiResponse);
  }
  // Now response is the JSON object
  const { status, message, errorCode, data, meta, timestamp, requestId } =
    response;
  return {
    isSuccess: status === "success",
    status,
    message,
    errorCode,
    data,
    meta,
    timestamp,
    requestId,
  };
}

export function handleApiFeedback(apiResult, showToast) {
  if (apiResult.isSuccess) {
    if (apiResult.message) showToast(apiResult.message, "success");
    return apiResult.data;
  } else {
    showToast(apiResult.message || "An error occurred", "error");
    throw new Error(apiResult.errorCode || "API_ERROR");
  }
}
