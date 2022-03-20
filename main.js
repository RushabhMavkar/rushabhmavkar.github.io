const rootDataset = document.documentElement.dataset;

function toggle_dark_mode() {
    const inDarkMode = rootDataset.theme === "dark";
    rootDataset.theme = inDarkMode ? "" : "dark";
    toggle_dark_mode_icon();
}

function toggle_dark_mode_icon() {
    var btn_icon = document.getElementById("dark-mode-icon");
    const inDarkMode = rootDataset.theme === "dark";
    if (inDarkMode) {
        btn_icon.src = "assets/svg-icons/moon-fill.svg";
    } else {
        btn_icon.src = "assets/svg-icons/sun-fill.svg";
    }
}

window.onload = function executeOnStart() {
    toggle_dark_mode_icon();
};
