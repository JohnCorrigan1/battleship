import './styles.css'

const body = document.querySelector('body')

const test = document.createElement('h1')
test.textContent = ('hello')
test.classList.add('test')

body?.appendChild(test)

