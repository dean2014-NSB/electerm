import { enc, dec } from '../../app/common/pass-enc'

/**
 * enc password
 * @param {object} obj
 */
export function encObj (obj) {
  if (!obj.passwordEncrypted && obj.password) {
    obj.password = enc(obj.password)
    obj.passwordEncrypted = true
  }
  if (!obj.totoKeyEncrypted && obj.totpKey) {
    obj.totpKey = enc(obj.totpKey)
    obj.totoKeyEncrypted = true
  }
  return obj
}

/**
 * dec password
 * @param {object} obj
 */
export function decObj (obj) {
  if (obj.passwordEncrypted && obj.password) {
    obj.password = dec(obj.password)
    delete obj.passwordEncrypted
  }
  if (obj.totoKeyEncrypted && obj.totpKey) {
    obj.totpKey = dec(obj.totpKey)
    delete obj.totoKeyEncrypted
  }
  return obj
}
