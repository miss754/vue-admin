export function validateEmail(rule, value, callback) {
  if (value === '') {
    callback(new Error('必填'))
  } else {
    callback()
  }
}

export function validatePass(rule, value, callback) {
  if (value === '') {
    callback(new Error('必填'))
  } else {
    callback()
  }
}
export function validateCode(rule, value, callback) {
  if (value === '') {
    callback(new Error('必填'))
  } else {
    callback()
  }
}