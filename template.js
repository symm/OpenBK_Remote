window.onload = ()=>{
    document.open()
    document.write(newContent)
    document.close()

    var s1 = document.createElement('script')
    s1.setAttribute('integrity', "sha384-zUfuhFKKZCbHTY6aRR46gxiqszMk5tcHjsVFxnUo8VMus4kHGVdIYVbOYYNlKmHV")
    s1.setAttribute('crossorigin', "anonymous")
    s1.setAttribute('src', "https://unpkg.com/htmx.org@1.9.4")
    s1.addEventListener('load', function() {
        var s2 = document.createElement('script')
        s2.setAttribute('integrity', "sha384-2fdEgVkmhqL8qzoklDLioCtfH6E2AHwBnHw4vxKfAD7M3RWv2m80nHJ8ZkheE7Ql")
        s2.setAttribute('crossorigin', "anonymous")
        s2.setAttribute('src', 'https://unpkg.com/htmx.org/dist/ext/disable-element.js')
        s2.defer = true
        document.head.appendChild(s2)
    })

    var s3 = document.createElement('script')
    s3.setAttribute("integrity", "sha512-X2R4Ev8iL/Xz4/J4ztf+COKz0QixPKxsqqgALlfqJTmkkxIz/9SJUMqZoGdPbakE+Azv1alk5hGYGEAWalfpCA==")    
    s3.setAttribute('crossorigin', "anonymous")
    s3.setAttribute('src', '//cdn.muicss.com/mui-0.10.3/js/mui.min.js')

    document.head.appendChild(s1)
    document.head.appendChild(s3)
}