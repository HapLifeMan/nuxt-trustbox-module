export default () => {

  if (typeof window === 'undefined')
    return

  ((t, r, u, s, b, o, x) => {

    o = r.createElement(u)
    o.async = true
    o.defer = true
    o.src = s
    x = r.getElementsByTagName('body')[0]
    x.parentNode.appendChild(o, x)

  })(window, document, 'script', '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js')

}
