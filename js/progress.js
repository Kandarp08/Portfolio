fillWidth(document.getElementsByClassName("c")[0], 90);
fillWidth(document.getElementsByClassName("matlab")[0], 80);
fillWidth(document.getElementsByClassName("python")[0], 70);
fillWidth(document.getElementsByClassName("java")[0], 40);
fillWidth(document.getElementsByClassName("cpp")[0], 40);

fillWidth(document.getElementsByClassName("html")[0], 90);
fillWidth(document.getElementsByClassName("javascript")[0], 80);
fillWidth(document.getElementsByClassName("node")[0], 60);
fillWidth(document.getElementsByClassName("firebase")[0], 20);
fillWidth(document.getElementsByClassName("css")[0], 20);
fillWidth(document.getElementsByClassName("mysql")[0], 20);
fillWidth(document.getElementsByClassName("php")[0], 10);

function fillWidth(el, maxWidth)
{
    let w = 0;
    let id = setInterval(progress, 10);

    function progress()
    {
        if (w == maxWidth)
            clearInterval(id);

        el.style.width = w + "%";
        ++w;
    }
}
