class Config {
  constructor() {
    this.httpURL = "http://localhost:3000/api";
    this.webSocketURL = "ws://localhost:3000";

    if (process.env.REACT_APP_REST_SERVER_CONFIG) {
      try {
        let restServerConfig = JSON.parse(
          process.env.REACT_APP_REST_SERVER_CONFIG
        );
        if (restServerConfig.webSocketURL) {
          this.restServer.webSocketURL = restServerConfig.webSocketURL;
        }
        if (restServerConfig.httpURL) {
          this.restServer.httpURL = restServerConfig.httpURL;
        }
        if (restServerConfig.explorer) {
          this.restServer.explorer = restServerConfig.explorer;
        }
      } catch (err) {
        console.error("CONFIG ERROR", err);
      }
    }
  }
}

export default Config;
