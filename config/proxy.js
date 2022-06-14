module.exports = {
  dev: {
    '/salesplus': {
      target: 'https://xxx.xx.com.cn', // 代理接口
      changeOrigin: true,
      pathRewrite: {'^/salesplus': '/salesplus'},
    },
  },
};
