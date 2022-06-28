 import '../styles/styles.css'
 import 'lazysizes'
 import MobileMenu from './modules/MobileMenu'
 import RevealOnScroll from './modules/RevealOnScroll'
 import StickyHeader from './modules/StickyHeader'
 import ClientArea from './modules/ClientArea'
 //React Related Code Here
 import React from 'react'
 import ReactDOM from 'react-dom'


 function MyAmazingComponent() {
     return ( <
         div >
         <
         h1 className = 'section-title section-title--blue' > This Is My Amazing React Component < /h1> <
         p > React is great, the sky is blue, grass is green. < /p> < /
         div >
     )
 }
 ReactDOM.render( < MyAmazingComponent / > , document.querySelector("#my-react-example"))


 new ClientArea()
 new StickyHeader()
 new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
 new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
 new MobileMenu();
 let modal
 document.querySelectorAll(".open-modal").forEach(el => {
     el.addEventListener("click", e => {
         e.preventDefault()
         if (typeof modal == "undefined") {
             import ( /* webpackChunkName: "modal"*/ './modules/Modal').then(x => {
                 modal = new x.default()
                 setTimeout(() => modal.openTheModal(), 20)
             }).catch(() => console.log("There was a problem."))
         } else {
             modal.openTheModal()
         }
     })
 })
 if (module.hot) {
     module.hot.accept()
 };