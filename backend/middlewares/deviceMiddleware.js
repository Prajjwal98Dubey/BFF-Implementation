const detectDevice = (req, _, next) => {
    const userAgent = req.headers['user-agent']
    if (userAgent.toLowerCase().includes('windows') || userAgent.toLowerCase().includes('macintosh') || userAgent.toLowerCase().includes('linux')) {
        req.user = 'web'
    }
    else req.user = 'mobile'
    next()
}


module.exports = detectDevice