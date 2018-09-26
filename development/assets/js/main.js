;(() => {
    // SETUP
    let now = new Date()

    const elements = {
        body: document.querySelector("body"),
        logo: document.querySelector(".logo"),
        toggles: document.getElementsByClassName("js-toggleNightMode"),
        emailLinks: document.querySelectorAll(".js-email"),
        toFade: document.querySelectorAll(".js-fade")
    }

    const fadeInClass = "fadeInUp"
    const fadeOutClass = "fadeOutDown"

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

    // Fade elements
    const fadeElements = () => {
        Array.from(elements.toFade).map(el => {
            if (isElementInViewport(el)) {
                let delay = parseInt(el.getAttribute("data-fade-delay"), 0)
                if (window.innerWidth < 1024 && delay >= 3000) {
                    delay -= 3000
                }
                setTimeout(() => {
                    el.classList.remove(fadeOutClass)
                    el.classList.add(fadeInClass)
                    if (delay >= 3000) {
                        el.setAttribute("data-fade-delay", delay - 3000)
                    }
                }, delay)
            } else {
                el.classList.remove(fadeInClass)
                el.classList.add(fadeOutClass)
            }
        })
    }

    // Throttle
    const throttle = (callback, fps) => {
        let updating = false

        if (updating) {
            return
        }

        updating = true

        setTimeout(() => {
            requestAnimationFrame(() => {
                callback.call(this)
                updating = false
            })
        }, 1000 / fps)
    }

    // Element visible in viewport
    // https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    const isElementInViewport = el => {
        const rect = el.getBoundingClientRect()
        const margin = window.innerHeight / -4

        return (
            rect.top >= margin &&
            rect.left >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) -
                    margin &&
            rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        )
    }

    // EVENTS
    if (elements.logo) {
        elements.logo.addEventListener(
            "dblclick",
            () => {
                toggleNightMode(elements.body)
            },
            false
        )
    }

    if (elements.toggles) {
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
    }

    // RUNTIME
    if (
        (now.getHours() >= 20 || now.getHours() <= 7) &&
        !elements.body.classList.contains("hireme")
    ) {
        toggleNightMode(elements.body)
    }

    if (elements.emailLinks) {
        Array.from(elements.emailLinks).map(link => {
            updateEmailLink(link)
        })
    }

    // HIRE ME ANIMATIONS
    if (elements.body.classList.contains("hireme")) {
        // Fix for when the page is loaded somewhere in the middle/bottom
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 1000)

        window.addEventListener("scroll", () => {
            throttle(fadeElements, 6)
        })
        throttle(fadeElements, 6) // Trigger fadeElements on page load
    }
})()
