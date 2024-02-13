class ApiResponse {
  constructor(statusCode = 200, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.status = true;
  }
}

export default ApiResponse;
