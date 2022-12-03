interface Clazz<T> extends Function { new(...args: unknown[]): T; }

type Fn = (...args: unknown[]) => unknown
type InputKeyType = string | number

type DictionaryValuesType = InputKeyType | Fn | InstanceType<Clazz<any>> | Clazz<unknown>
type DictionaryType = Record<string, DictionaryValuesType> | Record<number, DictionaryValuesType> | Map<InputKeyType, DictionaryValuesType>
type OptionsType = {
  skipFunctionsExecution: boolean
}

export type {
  InputKeyType,
  DictionaryValuesType,
  DictionaryType,
  OptionsType
}
