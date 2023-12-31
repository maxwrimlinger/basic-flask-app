function auto_scroll_bottom() {
    const chat_list_container = document.getElementById("chat-list-container");
    if (chat_list_container !== null) {
        chat_list_container.scrollTop = chat_list_container.scrollHeight;
    }
}

function m_move_divider(e) {
    e.preventDefault();
    const x = e.clientX;
    if (x >= 150 && x < 600) {
        // normal range
        const grid = document.getElementById("content");
        grid.style["grid-template-columns"] = x + "px 2px 1fr";
    } else if (x >= 20 && x < 150) {
        // snap open
        const grid = document.getElementById("content");
        grid.style["grid-template-columns"] = "150px 2px 1fr";
    } else if (x < 20) {
        // snap closed
        const grid = document.getElementById("content");
        grid.style["grid-template-columns"] = "0px 2px 1fr";
    }
}

function m_down_divider(e) {
    e.preventDefault();
    document.addEventListener("mousemove", m_move_divider, true);
}

function m_up_divider(e) {
    e.preventDefault();
    document.removeEventListener("mousemove", m_move_divider, true);
}

function setup_divider() {  
    const divider = document.getElementById("pane-divider");
    divider.addEventListener("mousedown", m_down_divider, true);
    document.addEventListener("mouseup", m_up_divider, true);
}

auto_scroll_bottom();
setup_divider();
setup_message_options_buttons();