let visibility = false;

function create_leaf(parent){
    let leaf = {
        content:{},
        type: "leaf",
        parent:parent,
    }
    return leaf;
}
function create_split(node, direction){
    let parent = node.parent
    let split = {
        type: "split",
        direction: direction,
        left:node,
        right:{},
        parent:parent,
    }
    split.right = create_leaf(split)
    if (parent) {
        if (parent.left == node) {
            parent.left = split;
        } else {
            parent.right = split;
        }
        parent = split
        return split;
    }
    root = split
    parent = split
    focus = split.right
    return split;
}

let root = create_leaf(null)
let focus = root;

export function toggle_window_manager(){
    let buffer = document.getElementById("i_buffer")
    visibility = !visibility;
    buffer.style.visibility = visibility ? "visible":"hidden";
}

function delete_pane(focus){

}

function move_focus(focus, direction){
    let current_leaf = focus;
    let current_parent = current_leaf.parent;
    function move_focus_right(node) {
        let current = node;

        while (current.parent) {
            let parent = current.parent;

            if (parent.direction === "vertical" && parent.left === current) {
                current = parent.right;

                while (current.type === "split") {
                    current = current.left;
                }

                return current;
            }

            current = parent;
        }

        return node;
    }

    function move_focus_left(node) {
        let current = node;

        while (current.parent) {
            let parent = current.parent;

            if (parent.direction === "vertical" && parent.left === current) {
                current = parent.left;

                while (current.type === "split") {
                    current = current.right;
                }

                return current;
            }

            current = parent;
        }

        return node;
    }

    switch (direction) {
        case "left":
            focus = move_focus_left(focus);
            break;
        case "right":
            focus = move_focus_right(focus);
            break;
    }


    return focus

}

function insert_content(focus, content){}

function update_tree(){}



