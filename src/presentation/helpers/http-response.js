const MissingParamError = require('./missing-param-error')

module.exports = class httpResponse {
  static badRequest (paramName) {
    return {
      statusCode: 400,
      body: new MissingParamError()
    }
  }

  static serverError () {
    return {
      statusCode: 500
    }
  }
}
