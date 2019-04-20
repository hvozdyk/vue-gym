export const focus = {
  inserted: function(el, binding) {
    if (binding.arg) {
      el.querySelector(binding.arg).focus()
    } else {
      el.focus()
    }
  }
}
