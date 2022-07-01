const isProd = process.env.NODE_ENV === 'production'
//Ce bo kje problem je tukaj!
module.exports = { 
    // assetPrefix: '/3tav-Naloga-Deploy',
    // basePath:  '/3tav-Naloga-Deploy'
    assetPrefix: isProd ? '/3tav-Naloga-Deploy' : './',
    basePath: isProd ? '/3tav-Naloga-Deploy' : ''
 };