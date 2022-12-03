function isFunction(obj: unknown): boolean {
  return typeof obj === 'function'
    && obj instanceof Function
    && Object.prototype.toString.call(obj) === '[object Function]'
}

export default isFunction
