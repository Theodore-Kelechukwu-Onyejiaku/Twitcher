let map;
const showMap = (lat, long) => {
    $("#map_container").show();
    const mapContainer = document.getElementById("map");
    map = L.map(mapContainer).setView([lat, long], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    const marker = L.marker([lat, long]).addTo(map);
    marker.bindPopup("<b>Twitcher's Location</b>").openPopup();
};
// close map
$("#close_map").click(() => {
    if (map) {
        map.remove();
    }
    $("#map_container").hide();
})


$(document).ready(() => {
    // open menu
    $("#menu_icon").click(() => {
        $("#menu_icon").hide()
        $("#close_icon").show()
        $("#sub_menu").addClass("visible")
        $("#sub_menu").animate({
            height: 'toggle'
        })
    })

    // close menu
    $("#close_icon").click(() => {
        $("#close_icon").hide()
        $("#menu_icon").show()
        $("#sub_menu").addClass("visible")
        $("#sub_menu").animate({
            height: 'toggle'
        })
    })

})