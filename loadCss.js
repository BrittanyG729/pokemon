module.exports = function() {
    const link = document.createElement('link')
    link.ref = 'stylesheet'
    link.href = '/style.css'
    let head = document.head
    head.append(link)
}