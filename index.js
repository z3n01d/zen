let navbar = document.querySelector(".topnav")
let navbarButtons = navbar.querySelectorAll("a")
let sections = document.body.querySelectorAll(".page-section")

let aboutmeText = document.body.querySelector("#aboutsection").querySelector("#aboutmetext")

aboutmeText.textContent = aboutmeText.textContent.replace("[myage]",new Date().getFullYear() - 2008)

let lastSection = sessionStorage.getItem("zenWebsiteSection")

if (lastSection != null) {
    console.log(lastSection)
    sections.forEach((section) => {
        if (section.id == lastSection + "section") {
            section.classList.remove("section-hidden")
        } else {
            section.classList.add("section-hidden")
        }
    })

    navbarButtons.forEach((element) => {
        if (element.id == lastSection) {
            element.classList.add("active")
        } else {
            element.classList.remove("active")
        }
    })
}

navbarButtons.forEach((element) => {
    element.addEventListener("click",(event) => {
        
        sections.forEach((section) => {
            if (section.id == element.id + "section") {
                section.classList.remove("section-hidden")
            } else {
                section.classList.add("section-hidden")
            }
        })

        navbarButtons.forEach((element2) => {
            if (element.id == element2.id) {
                sessionStorage.setItem("zenWebsiteSection",element.id)
                element2.classList.add("active")
            } else {
                element2.classList.remove("active")
            }
        })
    })
})