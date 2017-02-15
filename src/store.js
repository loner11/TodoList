/**
 * Created by loner11 on 17-2-15.
 */
const STORAGE_KEY = "todo-list";

export default {
  fetch() {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },

  save(todos) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}
