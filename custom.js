$(function () {
    let dom = document.createElement("span");
    if (config.imgs && config.imgs.item) {
        let img = document.createElement("img");
        img.src = config.imgs.item;
        img.setAttribute("class", 'text-img');
        dom.appendChild(img);
    }
    config.texts.forEach(function (item) {
        let p = document.createElement("p");
        p.innerHTML = item;
        dom.appendChild(p);
    });
    $("#texts-container").append(dom.innerHTML);
});

$(function () {
    for (let k in config.desc) {
        let dom = $("#" + k);
        if (dom.length > 0 && config.desc[k]) {
            dom.html(config.desc[k]);
        }
    }
});
