export const command = {
    "normal": {
        "w": function () {console.log("Crouch")},
        "q": function () {console.log("Move left")},
        "d": function () {console.log("Move right")},
        "dkp": function () {console.log("dash right")},
        "qkp": function () {console.log("dash left")},
        "qwddp": function () {console.log("Ultimate Mega Death explosion")},
        "wqk": function () { console.log("Tatsumaki senpuukyaku!") },
        "gd":()=>{
            console.log("inside this cool command: gd")
        },
        "p": function() {console.log("punch")},
        "k": function () {console.log("kick")},
        "vp": function () { console.log("copy n' place comand")},
        "wdp": function () {console.log("Hadouken")},
        "wdkp": function () { console.log("EX Hadouken!") },
        "wdwdp": function () {console.log("Super Hadouken")},
        "Altn": function() {console.log("Vertical split")}
    },
    "control": {},
    "alt":{
        "n": function(){console.log("vertical split")},
    }
};

export function add_command(keys, cmd){
    command.normal[keys] = cmd;
}

export let input = {
    buffer: [],
    timeoutID: undefined,
}

export function input_buffer (key){
    let BUFFER_SIZE = 10;
    if (input.buffer.length == BUFFER_SIZE) {
        input.buffer = [];
    }
    input.buffer.push(key);
    if(input.timeoutID) { 
        clearTimeout(input.timeoutID);
    }

    console.log(input.buffer)
    handle_input(input.buffer)
    input.timeoutID = setTimeout(()=>{
        input.buffer = [];
        input.timeoutID = null;
    },1000);
}

// exemplo de uso: input_buffer(input.buffer,"g") nesse caso o buffer interno da função vai acessar em referencia o buffer original contido em input.buffer;

export function handle_input(buffer){
    for (let index=0; index < buffer.length; index++) {
        let selector = buffer.slice(index,buffer.length)
        let input = selector.join("");
        if(command.normal[input]) {
            command.normal[input]();
            return;
        }

    } 
}

/* 
Exemplo de uso: 
@on_input "g"
input_buffer("g");
# Inside input_buffer:
bu
handle_input()
input.buffer.push("g");
handle_input(input.buffer=["g"])
se "g" existir em command, executa command["g"](); se não, apenas retorna nada.
*/