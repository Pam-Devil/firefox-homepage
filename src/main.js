import {command, add_command, input, input_buffer, handle_input} from "./input_buffer.js"
let ativo = 1;
let active_notes=false

//TODO: Create a TODO list
//TODO: Implement the input buffer system
//TODO: Implement local storage support
//TODO: Finish the status bar
//TODO: Finish the input thing
//TODO: Implement the calendar

function toggle_notes(){
    let notes = document.getElementById("i_notes-container");
    active_notes = !active_notes;
    let translate = active_notes === true ? "0%":"-100%"
    notes.style.transform = `translateX(${translate})`
}

function change_paper(url){
    const bg1 = document.getElementById("i_bg1")
    const bg2 = document.getElementById("i_bg2");
    const string_url = `url("${url}")` 

    const novo = ativo === 1 ? bg2:bg1;
    const antigo = ativo === 1? bg1:bg2;

    novo.style.backgroundImage = `url('${url}')`;
    novo.style.opacity = 1;
    novo.style.transform = "scale(1.05)";
    antigo.style.transform = "scale(1)";

    antigo.style.opacity = 0;
    ativo = ativo === 1 ? 2:1;
}

function add_shortcut(name,url){
    ul = document.getElementById("i_link-list")
    link = ` <li class="link-block">
                    <a href="${url}" class="link">
                        ${name}
                    </a>
                </li>
            `
    temp = document.createElement("div")
    temp.innerHTML = link
    ul.appendChild(temp.firstElementChild)
}

function main() {
    const events = {
        "n":toggle_notes
    }

    const url1 = "https://c.l3n.co/cQa7XM.jpg";
    const url2 = "https://b.l3n.co/cQaYkc.jpg";
    const url3 = "https://a.l3n.co/cQan9x.png";
    const url4 = "https://b.l3n.co/cQaeik.png";
    const url5 = "https://c.l3n.co/cQaLa1.png";
    const url6 = "https://d.l3n.co/cVPSYM.jpg";
    const url7 = "https://c.l3n.co/cVPl0q.jpg";
    const url8 = "https://b.l3n.co/cVPOfD.jpg";
    const url9 = "https://d.l3n.co/cVPvCa.jpg";
    const url10 = "https://c.l3n.co/cVP7p0.jpg";
    const url11 = "https://c.l3n.co/cVPMxk.jpg";
    const url12 = "https://d.l3n.co/cVPupH.jpg";
    const url13 = "https://c.l3n.co/cVfVTk.jpg";
    const url14 = "https://b.l3n.co/cVf97x.jpg";
    const url15 = "https://a.l3n.co/cVfdUH.jpg";

    const urls = [
        url1,
        url2,
        url3,
        url4,
        url5,
        url6,
        url7,
        url8,
        url9,
        url10,
        url11,
        url12,
        url13,
        url14,
        url15,
    ];
    const LIST_has_floor = [false,false,true,false,true,true,false,false,true,true,true,true,true,true,true];
    let current = Math.floor(Math.random() * urls.length);
    document.addEventListener("keydown",(event)=>{
        //alt key
        //ctrl key
        //normal key
        
        input_buffer(event.key); 
    })
    document.addEventListener("DOMContentLoaded", () => {
        add_command("Altn", toggle_notes)
        if (LIST_has_floor[current] === true) {
            document.getElementById("i_floor_rain").style.visibility = "visible";
        } else {
            document.getElementById("i_floor_rain").style.visibility = "hidden";
        }
        change_paper(urls[current])
        setInterval(() => {
            let rand;
            do {
                rand = Math.floor(Math.random() * urls.length);
            } while (rand === current);
            change_paper(urls[rand]);
            if (LIST_has_floor[rand] === true) {
                document.getElementById("i_floor_rain").style.visibility = "visible";
            } else {
                document.getElementById("i_floor_rain").style.visibility = "hidden";
            }
            current = rand;
        }
        , 5000);
    });
}

main();