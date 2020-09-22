const UnauthorizedError = require('./unauthorized-error')
const ServerError = require('./server-error')
const MissingParamError = require('./missing-param-error')

module.exports = class httpResponse {
  static badRequest () {
    return {
      statusCode: 400,
      body: new MissingParamError()
    }
  }

  static serverError () {
    return {
      statusCode: 500,
      body: new ServerError()
    }
  }

  static unauthorizedError () {
    return {
      statusCode: 401,
      body: new UnauthorizedError()
    }
  }

  static OK (data) {
    return {
      statusCode: 200,
      body: data
    }
  }
}
