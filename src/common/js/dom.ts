export function hasClass (el: any, className: string) {
  const reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function addClass (el: any, className: string) {
  if (hasClass(el, className)) {
    return
  }

  const newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function removeClass (el: any, className: string) {
  if (!hasClass(el, className)) {
    return
  }

  const reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
  el.className = el.className.replace(reg, ' ')
}
