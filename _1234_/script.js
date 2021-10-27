const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentactive = 1

next.addEventListener ('click', () => {
    currentactive++

    if(currentactive > circles.length) {
        currentactive = circles.length
         }
     
         update()
})
prev.addEventListener ('click', () => {
    currentactive--

    if(currentactive < 1){
        currentactive = 1
         }

     
         update()
})

function update() {
    circles.forEach((circles, idx)=>{
        if(idx < currentactive) {
            circles.classList.add('active')
        } else {
            circles.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

   progress.style.width = (actives.length - 1) / (circles.length - 1) * 100
   100 + '%'

   if(currentactive === 1) {
       prev.disable = true
   } else if (currentactive === circles.length) {
       next.disabled = true
   } else {
       prev.disabled = false
       next.disabled = false
   }
}