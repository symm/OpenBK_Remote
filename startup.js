function createButton(name, code) {
    var form = document.createElement("form")
    form.setAttribute("hx-get", "/cm")
    form.setAttribute("hx-target", "#debug")
    
    var btn = document.createElement("button")
    btn.innerText = name
    btn.setAttribute("hx-ext", "disable-element")
    btn.setAttribute("hx-disable-element", "self")
    btn.setAttribute("class", "mui-btn mui-btn--large mui-btn--primary")

    var cmnd = document.createElement("input")
    cmnd.setAttribute("type", "hidden")
    cmnd.setAttribute("name", "cmnd")
    cmnd.setAttribute("value", "IRSend " + code)
    form.appendChild(cmnd)
    form.appendChild(btn)
    return form
}

function installHtmx() {
    var s1 = document.createElement('script');
    s1.setAttribute("id", "htmx-lib")
    s1.setAttribute('integrity',"sha384-zUfuhFKKZCbHTY6aRR46gxiqszMk5tcHjsVFxnUo8VMus4kHGVdIYVbOYYNlKmHV");
    s1.setAttribute('crossorigin',"anonymous");
    s1.setAttribute('src', "https://unpkg.com/htmx.org@1.9.4");
    s1.addEventListener('load', function() {
        var s2 = document.createElement('script');
        s2.setAttribute('src', 'https://unpkg.com/htmx.org/dist/ext/disable-element.js')
        s2.defer = true
        document.head.appendChild(s2)
    });

    document.head.appendChild(s1);
}

function createRemote() {
    // Topping DX3 Pro+
    var topping = [
        createButton("Mute", "NEC-88-6-0"),
        createButton("Power", "NEC-88-18-0"),
        createButton("Volume +", "NEC-88-46-0"),
        createButton("Volume -", "NEC-88-16-0"),
        createButton(">", "NEC-88-15-0"),
        createButton("<", "NEC-88-47-0"),
        createButton("Middle", "NEC-88-55-0"),
        createButton("Headphones", "NEC-88-4-0"),
        createButton("Line out", "NEC-88-40-0"),
    ]

    var lgc1 = [
        createButton("Power", "NEC-4-8-0"),
        createButton("Volume -", "NEC-4-3-0"),
        createButton("Volume +", "NEC-4-2-0"),
    ]

    var remotes = [
        topping,
        lgc1,
    ]


    var debug = document.createElement("div")
    debug.setAttribute("id", "debug")
    debug.innerHTML ="debug info"

    var body = document.getElementsByTagName("body")[0];

    var tabs = []
    // TODO: remove hardcoded names
    remotes.forEach(function(remote, index) {
        var tab = document.createElement("div")
        tab.setAttribute("class", "mui-tabs__pane")
        tab.setAttribute("id", "pane-default-" + index)
        remote.forEach(function(button){
            tab.appendChild(button)
        })
        tabs.push(tab)
    })

    var list = document.createElement('ul')
    list.setAttribute("class", "mui-tabs__bar")
    var tabBars = ["Topping DX3 Pro+", "LG C1"]
    tabBars.forEach(function(tabBar, index){
        var item = document.createElement('li')
        item.setAttribute("class", index == 0 ?"mui--is-active" : "")
        var link = document.createElement("a")
        link.setAttribute("data-mui-toggle", "tab")
        link.setAttribute("data-mui-controls", "pane-default-" + index)
        link.innerHTML = tabBar
        item.appendChild(link);
        list.appendChild(item)
    })
    body.appendChild(list)


    tabs.forEach(function(tab){
        body.appendChild(tab)
    })

    document.getElementsByClassName("mui-tabs__pane")[0].setAttribute("class","mui-tabs__pane mui--is-active")

    body.appendChild(debug)
}

function installMaterialUI(){
    // <link href="//cdn.muicss.com/mui-0.10.3/css/mui.min.css" rel="stylesheet" type="text/css" />
    //<script src="//cdn.muicss.com/mui-0.10.3/js/mui.min.js"></script>

    var css = document.createElement('link')
    css.setAttribute("href","//cdn.muicss.com/mui-0.10.3/css/mui.min.css")
    css.setAttribute("rel", "stylesheet")
    css.setAttribute("type", "text/css")
    document.head.appendChild(css)

    var script = document.createElement('script')
    script.setAttribute('src', '//cdn.muicss.com/mui-0.10.3/js/mui.min.js')
    document.head.appendChild(script)
}

window.onload = ()=>{
    installHtmx();
    installMaterialUI();
    createRemote();
}