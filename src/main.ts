import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    
   
    <h1>GithubActions</h1>

    <p class="read-the-docs">
      Proyecto de ejemplo para el uso de github actions
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
