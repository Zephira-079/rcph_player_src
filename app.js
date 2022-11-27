const sd_wrapper = document.querySelector(".sd_wrapper")

const manifest_sd = document.querySelector(".manifest-sd")

function add_list(text,caption) {
    const list = document.createElement("div")
    list.setAttribute("class","list")

    const tag = document.createElement("div")
    tag.setAttribute("class","list_tag")
    tag.textContent = caption.toString()

    const vlist = document.createElement("div")
    vlist.setAttribute("class","view_list")
    vlist.textContent = "#"

    vlist.addEventListener("click",() => {
        // start_activity(text)
        location.replace(`./fetch/${text}`)
    })
    
    list.appendChild(tag)
    list.appendChild(vlist)
    sd_wrapper.appendChild(list)
}

function start_activity(activity_text) {
    const body = document.body
    
    const activity = document.createElement("div")
    activity.setAttribute("class","activity")

    const remove = document.createElement("div")
    remove.setAttribute("class","remove")
    remove.textContent = "hide"
    remove.addEventListener("click",() => {
        remove.remove()
        clipboard.remove()
        activity.remove()
    })
    const clipboard = document.createElement("div")
    clipboard.setAttribute("class","clipboard")
    clipboard.textContent = "copy"
    clipboard.addEventListener("click",async () => {
        await navigator.clipboard.writeText(JSON.stringify(activity_text,null,4))
    })

    body.appendChild(remove)
    body.appendChild(clipboard)
    activity.textContent = JSON.stringify(activity_text,null,4)

    body.appendChild(activity)
}

let mf_sd = true
function manif_sd() {
    if(mf_sd){
        sd_wrapper.style.animation = "manif_in .7s forwards"
        mf_sd = false
    }
    else {
        sd_wrapper.style.animation = "manif_out .7s forwards"
        mf_sd = true
    }
}

manifest_sd.addEventListener("click",manif_sd)

add_list("kawaiineko.json","kawaiineko")
add_list("kawaiinyeow.json","kawaiinyeow")