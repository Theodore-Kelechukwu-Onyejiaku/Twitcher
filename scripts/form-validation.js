$(document).ready(() => {

    // passwprd view control
    $("#eye_close").click(() => {
        $("#password").attr("type", "password")
        $("#eye_close").hide();
        $("#eye_open").show();
    })

    // password view control
    $("#eye_open").click(() => {
        $("#password").attr("type", "text")
        $("#eye_open").hide();
        $("#eye_close").show();
    })

    // Password Strength
    $('#signup-form').validate({
        rules: {
            name: {
                required: true,
                fullName: true
            },
            password: {
                required: true,
                minlength: 8,
                strongPassword: true
            },
            email: {
                required: true
            },
            biography: {
                required: true
            }
        },
        messages: {
            password: {
                required: 'Please enter a password',
                minlength: 'Your password must be at least 8 characters long',
                strongPassword: 'Your password must be strong and at least 8 characters long, containing at least one uppercase letter, at least one lowercase letter, at least one number, and at least one special character.\n Examples: "StrongPassword123!", "5ecureP@ssw0rd!"'
            },
            name: {
                fullName: "Please enter a full name"
            }
        },
        errorPlacement: function (error, element) {
            error.insertBefore(element)
            error.css('color', 'red');
            error.css('margin', '5px');

        }
    });

    $.validator.addMethod('strongPassword', function (value, element) {
        return this.optional(element) || /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
    }, 'Your password must be strong');

    $.validator.addMethod('fullName', function (value, element) {
        return this.optional(element) || /^[A-Z][a-z]*(\s+[A-Z][a-z]*)+$/i.test(value)
    }, 'Full name required')

})
