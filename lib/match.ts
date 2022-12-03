import isFunction from './utils/isFunction'
import isValidKey from './utils/isValidKey'
import convertToMap from './utils/convertToMap'

import type {
  InputKeyType,
  DictionaryValuesType,
  DictionaryType,
  OptionsType
} from './types'

const DEFAULT_KEY = 'default'

const shouldBeConvertToMap = (obj: DictionaryType) => {
  if(obj instanceof Map) {
    return obj
  }

  return convertToMap(obj)
}

function parseKey(key: InputKeyType) {
  return (key as keyof InputKeyType).toString()
}

const match = (
  key: InputKeyType,
  cases: DictionaryType,
  options: OptionsType = { skipFunctionsExecution: false }
): DictionaryValuesType | never => {
  if (!isValidKey(key)) {
    throw new TypeError('The key is not valid, it must be one of type string or number')
  }

  const map: Map<InputKeyType, DictionaryValuesType> = shouldBeConvertToMap(cases);
  const matchedCase: DictionaryValuesType = map.get(parseKey(key)) ?? map.get(DEFAULT_KEY);

  if (!matchedCase) {
    const errorMessage = `${key} not found in dictionary, consider adding a default key to avoid throwing this error`

    throw new Error(errorMessage)
  }

  let result: DictionaryValuesType = matchedCase

  if (isFunction(matchedCase) && options.skipFunctionsExecution === false) {
    result = matchedCase()
  }

  return result;
}

export default match

