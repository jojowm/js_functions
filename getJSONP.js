function getJSONP (url, callback) {
    // 替换url中callback=?中的?为回调函数名, 传入url为'https://api.douban.com/v2/book/1220562?callback=?'
    var cb = 'jsonp' + (new Date()).getTime()
    var i = 0
    url = url.replace(/\?/g, function(old) {
        // 如果是第二个'?'
        if (++i === 2) {
            return cb
        } else {
            return old
        }
    })

    // 创建回调函数
    window[cb] = function (response) {
        try {
            callback(response)
        } finally {
            delete window[cb]
            script.parentNode.removeChild(script)
        }
    }

    // 动态script
    var script = document.createElement('script')
    script.src = url
    document.body.appendChild(script)
}

getJSONP('https://api.douban.com/v2/book/1220562?callback=?', function(data) {
    console.log(data)
})