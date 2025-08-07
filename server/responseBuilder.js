// server/responseBuilder.js
const { v4: uuidv4 } = require("uuid");

class ResponseBuilder {
  constructor() {
    this.response = {
      timestamp: new Date().toISOString(),
      requestId: uuidv4(),
      status: null,
      message: "",
      errorCode: null,
      data: null,
      meta: {},
    };
  }

  setStatus(status) {
    this.response.status = status;
    return this;
  }

  setMessage(message) {
    this.response.message = message;
    return this;
  }

  setErrorCode(code) {
    this.response.errorCode = code;
    return this;
  }

  setData(data) {
    this.response.data = data;
    return this;
  }

  setPagination({ page, pageSize, total }) {
    this.response.meta.pagination = { page, pageSize, total };
    return this;
  }

  build() {
    // Remove errorCode if not set
    if (!this.response.errorCode) delete this.response.errorCode;
    // Remove meta if empty
    if (Object.keys(this.response.meta).length === 0) delete this.response.meta;
    return this.response;
  }
}

module.exports = ResponseBuilder;
