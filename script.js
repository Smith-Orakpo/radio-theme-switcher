document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.radio input')
  btn.addEventListener('click', () => {
    const page = document.querySelector('.container')
    page.classList.toggle('theme')
  })
})
