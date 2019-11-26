const proxy = require("http-proxy-middleware");
 
module.exports = app => {
  app.use(
    proxy("/api", {
      target: "http://localhost:3000",//跨域地址
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        "^/api": "api",
      }
    })
  );
};