// https://gist.github.com/iniaks/8a8185775ca8e0970ebcdad56754ad97
// https://gist.github.com/basecss/8632273

import config from './config'

const prefix = `${config.APP_NAME}_`
const storage = window.localStorage

function localStorageSupport() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null
  } catch (e) {
    console.log(e.stack)
  }
  return false
}

const get = (key: string) => {
  if (!localStorageSupport()) return

  let _key = prefix + key
  let _value = storage.getItem(_key)

  if (_value) {
    try {
      return JSON.parse(_value)
    } catch (e) {
      return _value
    }
  }

  console.error(`${key} not found`)
}

const set = (key: string, value: any) => {
  if (!localStorageSupport()) return

  let _key = prefix + key
  let _value
  try {
    _value = JSON.stringify(value)
  } catch (e) {
    _value = value
  }
  storage.setItem(_key, _value)
}

const remove = (key: string) => {
  if (!localStorageSupport()) return

  var _key = prefix + key
  storage.removeItem(_key)
}

const localStorage = { get, set, remove }

export default localStorage
