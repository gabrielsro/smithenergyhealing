import '/style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <p>Default JS entrypoint</p>
  </div>
`

setupCounter(document.querySelector('#counter'))
