module.exports = {
    devServer: {
        port: 9000,
        proxy: {
            '/api/': {
                target: 'https://www.material-react-table.com',
                pathRewrite: { '^/api/': '/api/' },
                secure: false,
                changeOrigin: true,
                crossDomain: true,      
              },
        }
    },
    typescript: {
        enableTypeChecking: true /* (default value) */,
    },
};