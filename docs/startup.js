var newContent = `<html>
  <head>
    <title>IR Blaster</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
    <meta name="robots" content="none" />
    <link href="//cdn.muicss.com/mui-0.10.3/css/mui.min.css" rel="stylesheet" type="text/css" integrity="sha512-rzzqoedGiSVG9cdcCh9C0iMTMxV55u/GRqXhPdrPfDFCsFSVsV5Kk82CRe1pxYXv6gn1lXGdmKR/eGpBe91H+g==" crossorigin="anonymous" />
    <style>
      .mui-btn--large {
        width: 100%;
        height: 100px;
      }
    </style>
  </head>
  <body>
    <ul class="mui-tabs__bar">
      <li class="mui--is-active">
        <a data-mui-toggle="tab" data-mui-controls="pane-default-0">Topping DX3 Pro+</a>
      </li>
      <li class="">
        <a data-mui-toggle="tab" data-mui-controls="pane-default-1">LG C1</a>
      </li>
    </ul>
    <div class="mui-tabs__pane mui--is-active" id="pane-default-0">
      <div class="mui-container-fluid">
        <div class="mui-row">
          <div class="mui-col-xs-6">
            <form hx-get="/cm" hx-swap="none">
              <input type="hidden" name="cmnd" value="IRSend NEC-88-18-0" />
              <button hx-ext="disable-element" hx-disable-element="self" class="mui-btn mui-btn--large mui-btn--danger">Power</button>
            </form>
          </div>
          <div class="mui-col-xs-6">
            <form hx-get="/cm" hx-swap="none">
              <input type="hidden" name="cmnd" value="IRSend NEC-88-6-0" />
              <button hx-ext="disable-element" hx-disable-element="self" class="mui-btn mui-btn--large mui-btn--primary">Mute</button>
            </form>
          </div>
        </div>
        <div class="mui-row">
          <div class="mui-col-xs-4">
          </div>
          <div class="mui-col-xs-4">
            <form hx-get="/cm" hx-swap="none">
              <input type="hidden" name="cmnd" value="IRSend NEC-88-46-0" />
              <button hx-ext="disable-element" hx-disable-element="self" class="mui-btn mui-btn--large mui-btn--primary">Volume +</button>
            </form>
          </div>
          <div class="mui-col-xs-4">
          </div>
        </div>
        <div class="mui-row">
          <div class="mui-col-xs-4">
            <form hx-get="/cm" hx-swap="none">
              <input type="hidden" name="cmnd" value="IRSend NEC-88-47-0" />
              <button hx-ext="disable-element" hx-disable-element="self" class="mui-btn mui-btn--large mui-btn--primary">&lt;</button>
            </form>
          </div>
          <div class="mui-col-xs-4">
            <form hx-get="/cm" hx-swap="none">
              <input type="hidden" name="cmnd" value="IRSend NEC-88-55-0" />
              <button hx-ext="disable-element" hx-disable-element="self" class="mui-btn mui-btn--large mui-btn--primary">Dual</button>
            </form>
          </div>
          <div class="mui-col-xs-4">
            <form hx-get="/cm" hx-swap="none">
              <input type="hidden" name="cmnd" value="IRSend NEC-88-15-0" />
              <button hx-ext="disable-element" hx-disable-element="self" class="mui-btn mui-btn--large mui-btn--primary">&gt;</button>
            </form>
          </div>
        </div>
        <div class="mui-row">
          <div class="mui-col-xs-4">
          </div>
          <div class="mui-col-xs-4">
            <form hx-get="/cm" hx-swap="none">
              <input type="hidden" name="cmnd" value="IRSend NEC-88-16-0" />
              <button hx-ext="disable-element" hx-disable-element="self" class="mui-btn mui-btn--large mui-btn--primary">Volume -</button>
            </form>
          </div>
          <div class="mui-col-xs-4">  
          </div>
        </div>
        <div class="mui-row">
          <div class="mui-col-xs-6">
            <form hx-get="/cm" hx-swap="none">
              <input type="hidden" name="cmnd" value="IRSend NEC-88-4-0" />
              <button hx-ext="disable-element" hx-disable-element="self" class="mui-btn mui-btn--large mui-btn--primary">Headphones</button>
            </form>
          </div>
          <div class="mui-col-xs-6">
            <form hx-get="/cm" hx-swap="none">
              <input type="hidden" name="cmnd" value="IRSend NEC-88-40-0" />
              <button hx-ext="disable-element" hx-disable-element="self" class="mui-btn mui-btn--large mui-btn--primary">Line out</button>
            </form>
          </div>
        </div>
        </div>
    </div>

    <!-- LG C1 Remote -->
    <div class="mui-tabs__pane" id="pane-default-1">
      <div class="mui-container-fluid">
        <div class="mui-row">
          <div class="mui-col-xs-6">
            <form hx-get="/cm" hx-swap="none">
              <input type="hidden" name="cmnd" value="IRSend NEC-4-8-0" />
              <button hx-ext="disable-element" hx-disable-element="self" class="mui-btn mui-btn--large mui-btn--danger">Power</button>
            </form>
          </div>
          <div class="mui-col-xs-6">
            <form hx-get="/cm" hx-swap="none">
              <input type="hidden" name="cmnd" value="IRSend NEC-4-9-0" />
              <button hx-ext="disable-element" hx-disable-element="self" class="mui-btn mui-btn--large mui-btn--primary">Mute</button>
            </form>
          </div>
        </div>
        <div class="mui-row">
          <div class="mui-col-xs-6">
            <form hx-get="/cm" hx-swap="none">
              <input type="hidden" name="cmnd" value="IRSend NEC-4-2-0" />
              <button hx-ext="disable-element" hx-disable-element="self" class="mui-btn mui-btn--large mui-btn--primary">Volume +</button>
            </form>
          </div>
          <div class="mui-col-xs-6">
            <form hx-get="/cm" hx-swap="none">
              <input type="hidden" name="cmnd" value="IRSend NEC-4-3-0" />
              <button hx-ext="disable-element" hx-disable-element="self" class="mui-btn mui-btn--large mui-btn--primary">Volume -</button>
            </form>
          </div>
        </div>
        <div class="mui-row">
          <div class="mui-col-xs-3">
            <form hx-get="/cm" hx-swap="none">
              <input type="hidden" name="cmnd" value="IRSend NEC-4-CE-0" />
              <button hx-ext="disable-element" hx-disable-element="self" class="mui-btn mui-btn--large mui-btn--primary">HDMI 1</button>
            </form>
          </div>
          <div class="mui-col-xs-3">
            <form hx-get="/cm" hx-swap="none">
              <input type="hidden" name="cmnd" value="IRSend NEC-4-CC-0" />
              <button hx-ext="disable-element" hx-disable-element="self" class="mui-btn mui-btn--large mui-btn--primary">HDMI 2</button>
            </form>
          </div>
          <div class="mui-col-xs-3">
            <form hx-get="/cm" hx-swap="none">
              <input type="hidden" name="cmnd" value="IRSend NEC-4-E9-0" />
              <button hx-ext="disable-element" hx-disable-element="self" class="mui-btn mui-btn--large mui-btn--primary">HDMI 3</button>
            </form>
          </div>
          <div class="mui-col-xs-3">
            <form hx-get="/cm" hx-swap="none">
              <input type="hidden" name="cmnd" value="IRSend NEC-4-DA-0" />
              <button hx-ext="disable-element" hx-disable-element="self" class="mui-btn mui-btn--large mui-btn--primary">HDMI 4</button>
            </form>
          </div>
        </div>
    </div>
  </body>
</html>`;window.onload = ()=>{
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
