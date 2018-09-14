;(() => {
    // SETUP
    let now = new Date()

    const elements = {
        body: document.querySelector("body"),
        logo: document.querySelector(".logo"),
        toggles: document.getElementsByClassName("js-toggleNightMode"),
        emailLinks: document.querySelectorAll(".js-email")
    }

    const domain = "pedropinto.me"

    // FUNCTIONS
    const toggleNightMode = element => {
        if (element.classList.contains("night-mode")) {
            element.classList.remove("night-mode")
        } else {
            element.classList.add("night-mode")
        }
    }

    const updateEmailLink = element => {
        element.setAttribute("href", "mailto:pedro@" + domain)
    }

    // EVENTS
    elements.logo.addEventListener(
        "dblclick",
        () => {
            toggleNightMode(elements.body)
        },
        false
    )

    Array.from(elements.toggles).map(toggle => {
        toggle.addEventListener(
            "click",
            event => {
                event.preventDefault()
                toggleNightMode(elements.body)
            },
            false
        )
    })

    // RUNTIME
    if (now.getHours() >= 20 || now.getHours() <= 7) {
        toggleNightMode(elements.body)
    }

    Array.from(elements.emailLinks).map(link => {
        updateEmailLink(link)
    })
})()
