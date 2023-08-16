function createButton(name, code) {
    var form = document.createElement("form")
    form.setAttribute("hx-get", "/cm")
    form.setAttribute("hx-target", "#debug")
    form.setAttribute("hx-ext", "disable-element")
    form.setAttribute("hx-disable-element", "self")

    var btn = document.createElement("button")
    btn.innerText = name

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

    //body.appendChild(mute)
    body.appendChild(debug)


    var htmx = document.createElement('script');
    htmx.setAttribute('integrity',"sha384-zUfuhFKKZCbHTY6aRR46gxiqszMk5tcHjsVFxnUo8VMus4kHGVdIYVbOYYNlKmHV");
    htmx.setAttribute('crossorigin',"anonymous");
    htmx.setAttribute('src', "https://unpkg.com/htmx.org@1.9.4");

    document.head.appendChild(htmx);
}