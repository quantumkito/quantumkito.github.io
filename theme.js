const changeTheme = document.getElementById("changeTheme");
const body = document.body;
const lightIcon = document.getElementById("lightIcon");
const darkIcon = document.getElementById("darkIcon");

function updateThemeIcons() {
    const isLight = body.classList.contains("white-version");
    lightIcon.style.display = isLight ? "none" : "inline-block";
    darkIcon.style.display = isLight ? "inline-block" : "none";

    lightIcon.style.color = "#ff352b";
    darkIcon.style.color = "#000000";
}

function setThemeBasedOnSystemPreference() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        body.classList.remove("white-version");
    } else {
        body.classList.add("white-version");
    }
    updateThemeIcons();
}

changeTheme.addEventListener("click", function (event) {
    event.preventDefault();
    body.classList.toggle("white-version");
    updateThemeIcons();
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setThemeBasedOnSystemPreference);

setThemeBasedOnSystemPreference();