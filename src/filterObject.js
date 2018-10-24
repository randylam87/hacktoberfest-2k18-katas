import { isArray } from "util";

export const filterObject = (obj, keys) => {
  if (typeof obj !== "object" && obj !== null || isArray(obj)) {
    throw 'First parameter should be an Object'
  }
  if (!isArray(keys)) {
    throw 'Second parameter should be an Array'
  } else if (keys.length === 0) {
    throw 'Second Parameter should not be length zero'
  }

  const result = {}
  keys.forEach(key => {
    if (obj[key]) {
      result[key] = obj[key]
    }
  })
  return result
}
