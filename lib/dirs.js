import { fileURLToPath } from 'url'
import { resolve, dirname } from 'pathe'

export const distDir = resolve(typeof __dirname === 'undefined' ? dirname(fileURLToPath(import.meta.url)) : __dirname)

const _makeResolve = base => {
  return (...p) => resolve(base, ...p)
}

export const runtimeDir = resolve(distDir)
export const resolveRuntimeDir = _makeResolve(runtimeDir)