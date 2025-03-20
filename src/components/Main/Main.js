import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

document.addEventListener("DOMContentLoaded", function () {
    const divs = document.querySelectorAll(".animated-div")

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible")
            }
        })
    }, { threshold: 0.1 })

    divs.forEach(div => {
        observer.observe(div)
    })
})

document.querySelector("#scroll-down-p")?.addEventListener("click", function () {
    const nextSection = this.closest("section").nextElementSibling
    /* const nextSection = document.querySelector(".sec2") */
    if (nextSection) {
        window.scrollTo({
            top: nextSection.offsetTop,
            behavior: "smooth"
        })
    }
})


document.querySelector("#products")?.addEventListener("click", () => {
    window.location.href = "./products/index.html"
})



document.getElementById("services-btn")?.addEventListener("click", function () {
    document.getElementById("sec2").scrollIntoView({ behavior: "smooth" })
})
