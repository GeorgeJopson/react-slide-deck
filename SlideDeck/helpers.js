export function setLocalStorage(key, value) {
  localStorage.setItem(key,JSON.stringify(value));
  window.dispatchEvent( new Event('storage'));
}

export function boundValue({val, min, max}) {
  return Math.min(Math.max(val,min),max);
}
