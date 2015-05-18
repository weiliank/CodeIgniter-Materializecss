/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    $("#loginButton").click(function () {
        var email = $("#loginEmail").val();
        var password = $("#loginPassword").val();

        // Retrieve data from server
        $.post(base_url + "login/verifyUser", {email: email, password: password}, function (data) {
            if (data.status === "Success") {
                $("#loginForm input").attr("readonly", "readonly");
                window.location = base_url + "home";
            } else {
                $("#loginForm").effect("bounce", {times: 3}, 300);
                $("#errorMessage").html("<span style='color: red; weight: 500px'>Invalid Email or Password</span>");
            }
        }, "JSON");
        return false;
    });
});

$(document).ready(function () {
    $("#loginForm").validate({
        rules: {
            loginEmail: {
                required: true
            },
            loginPassword: {
                required: true
            }
        },
        messages: {
        },
        highlight: function (element) {
            $(element).closest(".form-group").addClass("has-error");
        },
        unhighlight: function (element) {
            $(element).closest(".form-group").removeClass("has-error");
        },
        errorElement: "span",
        errorClass: "help-block",
        errorPlacement: function (error, element) {
            if (element.parent(".input-group").length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }

    });
});

$(document).ready(function () {
    $("#addPropertyForm").validate({
        rules: {
            addPropertyName: {
                required: true
            },
            addPropertyShortName: {
                required: true
            },
            addPropertyThumbUrl: {
                required: true
            }
        },
        messages: {
        },
        highlight: function (element) {
            $(element).closest(".form-group").addClass("has-error");
        },
        unhighlight: function (element) {
            $(element).closest(".form-group").removeClass("has-error");
        },
        errorElement: "span",
        errorClass: "help-block",
        errorPlacement: function (error, element) {
            if (element.parent(".input-group").length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }

    });
});

$(document).ready(function () {
    $("#editPropertyForm").validate({
        rules: {
            editPropertyName: {
                required: true
            },
            editPropertyShortName: {
                required: true
            },
            editPropertyThumbUrl: {
                required: true
            }
        },
        messages: {
        },
        highlight: function (element) {
            $(element).closest(".form-group").addClass("has-error");
        },
        unhighlight: function (element) {
            $(element).closest(".form-group").removeClass("has-error");
        },
        errorElement: "span",
        errorClass: "help-block",
        errorPlacement: function (error, element) {
            if (element.parent(".input-group").length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }

    });
});

$(document).ready(function () {
    $("#addSourceForm").validate({
        rules: {
            addthisSourceName: {
                required: true
            }
        },
        messages: {
        },
        highlight: function (element) {
            $(element).closest(".form-group").addClass("has-error");
        },
        unhighlight: function (element) {
            $(element).closest(".form-group").removeClass("has-error");
        },
        errorElement: "span",
        errorClass: "help-block",
        errorPlacement: function (error, element) {
            if (element.parent(".input-group").length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }

    });
});

$(document).ready(function () {
    $("#editSourceForm").validate({
        rules: {
            editthisSourceName: {
                required: true
            }
        },
        messages: {
        },
        highlight: function (element) {
            $(element).closest(".form-group").addClass("has-error");
        },
        unhighlight: function (element) {
            $(element).closest(".form-group").removeClass("has-error");
        },
        errorElement: "span",
        errorClass: "help-block",
        errorPlacement: function (error, element) {
            if (element.parent(".input-group").length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }

    });
});

$(document).ready(function () {
    $("#addUnitTypeForm").validate({
        rules: {
            addthisUnitTypeName: {
                required: true
            }
        },
        messages: {
        },
        highlight: function (element) {
            $(element).closest(".form-group").addClass("has-error");
        },
        unhighlight: function (element) {
            $(element).closest(".form-group").removeClass("has-error");
        },
        errorElement: "span",
        errorClass: "help-block",
        errorPlacement: function (error, element) {
            if (element.parent(".input-group").length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }

    });
});

$(document).ready(function () {
    $("#editUnitTypeForm").validate({
        rules: {
            editthisUnitTypeName: {
                required: true
            }
        },
        messages: {
        },
        highlight: function (element) {
            $(element).closest(".form-group").addClass("has-error");
        },
        unhighlight: function (element) {
            $(element).closest(".form-group").removeClass("has-error");
        },
        errorElement: "span",
        errorClass: "help-block",
        errorPlacement: function (error, element) {
            if (element.parent(".input-group").length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }

    });
});

$(document).ready(function () {
    $("#editCustomerForm").validate({
        rules: {
            editCustomerFirstName: {
                required: true
            },
            editCustomerLastName: {
                required: true
            },
            editCustomerNationality: {
                required: true
            },
            editCustomerIdentification: {
                required: true
            }
        },
        messages: {
        },
        highlight: function (element) {
            $(element).closest(".form-group").addClass("has-error");
        },
        unhighlight: function (element) {
            $(element).closest(".form-group").removeClass("has-error");
        },
        errorElement: "span",
        errorClass: "help-block",
        errorPlacement: function (error, element) {
            if (element.parent(".input-group").length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }

    });
});

$(document).ready(function () {
    $("#addBookingsForm2").validate({
        rules: {
            addBookingCustomerFirstName: {
                required: true,
                textonly: true
            },
            addBookingCustomerLastName: {
                required: true,
                textonly: true
            },
            addBookingCustomerNationality: {
                required: true,
                textonly: true
            },
            addBookingCustomerContactNumber: {
                required: true,
                number: true
            },
            addBookingRate: {
                number: true
            }
        },
        messages: {
        },
        highlight: function (element) {
            $(element).closest(".form-group").addClass("has-error");
        },
        unhighlight: function (element) {
            $(element).closest(".form-group").removeClass("has-error");
        },
        errorElement: "span",
        errorClass: "help-block",
        errorPlacement: function (error, element) {
            if (element.parent(".input-group").length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });
    jQuery.validator.addMethod(
            "textonly",
            function (value, element)
            {
                valid = false;
                check = /[^-\.a-zA-Z\s]/.test(value);
                if (check === false)
                    valid = true;
                return this.optional(element) || valid;
            },
            jQuery.format("Please only enter letters and spaces")
            );


});

$(document).ready(function () {
    $("#addMaintenancesForm").validate({
        rules: {
            addMaintenancesUnitId: {
                required: true
            }
        },
        messages: {
        },
        highlight: function (element) {
            $(element).closest(".form-group").addClass("has-error");
        },
        unhighlight: function (element) {
            $(element).closest(".form-group").removeClass("has-error");
        },
        errorElement: "span",
        errorClass: "help-block",
        errorPlacement: function (error, element) {
            if (element.parent(".input-group").length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }

    });
});

$(document).ready(function () {
    $("#addMaintenancesForm2").validate({
        rules: {
            addMaintenanceStartDate: {
                required: true
            },
            addMaintenanceEndDate: {
                required: true
            },
            addMaintenanceRemarks: {
                required: true
            }
        },
        messages: {
        },
        highlight: function (element) {
            $(element).closest(".form-group").addClass("has-error");
        },
        unhighlight: function (element) {
            $(element).closest(".form-group").removeClass("has-error");
        },
        errorElement: "span",
        errorClass: "help-block",
        errorPlacement: function (error, element) {
            if (element.parent(".input-group").length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }

    });
});

$(document).ready(function () {
    $("#addUnitsForm").validate({
        rules: {
            addUnitName: {
                required: true
            },
            addUnitSize: {
                required: true
            }
        },
        messages: {
        },
        highlight: function (element) {
            $(element).closest(".form-group").addClass("has-error");
        },
        unhighlight: function (element) {
            $(element).closest(".form-group").removeClass("has-error");
        },
        errorElement: "span",
        errorClass: "help-block",
        errorPlacement: function (error, element) {
            if (element.parent(".input-group").length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }

    });
});

$(document).ready(function () {
    $("#editUnitsForm").validate({
        rules: {
            editUnitName: {
                required: true
            },
            editUnitSize: {
                required: true
            }
        },
        messages: {
        },
        highlight: function (element) {
            $(element).closest(".form-group").addClass("has-error");
        },
        unhighlight: function (element) {
            $(element).closest(".form-group").removeClass("has-error");
        },
        errorElement: "span",
        errorClass: "help-block",
        errorPlacement: function (error, element) {
            if (element.parent(".input-group").length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }

    });
});