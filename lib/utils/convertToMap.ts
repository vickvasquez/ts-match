import { DictionaryType, InputKeyType, DictionaryValuesType } from "../types"

const convertToMap = (obj: DictionaryType): Map<InputKeyType, DictionaryValuesType> => {
  return new Map<InputKeyType, DictionaryValuesType>([...Object.entries(obj)])
}

export default convertToMap
