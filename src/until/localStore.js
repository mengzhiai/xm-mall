export function setLocalStorage(key, data) {
    return localStorage.setItem(key, JSON.stringify(data))
}
export function getLocalStorage(key) {
    return localStorage.getItem(key)
}