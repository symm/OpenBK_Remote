function createButton(name, code) {
    var form = document.createElement("form")
    form.setAttribute("hx-get", "/cm")
    form.setAttribute("hx-target", "#debug")
    
    var btn = document.createElement("button")
    btn.innerText = name
    btn.setAttribute("hx-ext", "disable-element")
    btn.setAttribute("hx-disable-element", "self")

    var cmnd = document.createElement("input")
    cmnd.setAttribute("type", "hidden")
    cmnd.setAttribute("name", "cmnd")
    cmnd.setAttribute("value", "IRSend " + code)
    form.appendChild(cmnd)
    form.appendChild(btn)
    return form
}

window.onload = ()=>{

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

    topping.forEach(function(button) {
        body.appendChild(button)
    })

    body.appendChild(debug)


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