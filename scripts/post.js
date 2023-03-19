$(document).ready(() => {
    let input = $("#inputTag");
    let imageName = $("#imageName").get(0);
    let imageBanner = $("#imageBanner")

    input.change(() => {
        let imageFile = document.querySelector("input[type=file]").files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#image-banner').attr('background-image', e.target.result);
            $('#image-preview').attr('src', e.target.result);
            $('#image-preview').addClass("h-full w-full")

        }
        reader.readAsDataURL(imageFile);
    })

    $("#get_location_checkbox").change(async () => {
        const IP_LOCATION_API_KEY = "2a9605c944cc44729d3daf6b0d239aee";
        if ($("#get_location_checkbox").prop('checked')) {
            try {
                $('.location_error').text("");
                let res = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${IP_LOCATION_API_KEY}`)
                res = await res.json()
                $('#latitude-output').text(res.latitude);
                $('#longitude-output').text(res.longitude);
            } catch (error) {
                console.log(error)
                $('.location_error').text("Error getting latitude and latitude")
            }
        } else {
            // Checkbox is not checked
            $('#latitude-output').text("");
            $('#longitude-output').text("");
            $('.location_error').text("");
        }
    })

})
