class LoginPage {
    login(){
        $("form[name=login]").submit((e) => {
            e.preventDefault();
            $("input[value=Login]").on('click', () => {
                $("input[value=Login]").attr('disabled','true');
            });
            $.ajax({
                type: "POST",
                url: "authuser/login",
                data: $("form[name=login]").serialize(),
                success: function (response) {
                    const res = JSON.parse(response);

                    console.log(res);

                    if (res.email == true) {
                        if (res.password == true) {
                            location.href = "home";
                        } else {
                            $("input[name=email]").removeClass("is-danger");
                            $("input[name=password]").addClass("is-danger");
                            $("input[name=password]").val("");
                        }
                    } else {
                        $("input[name=email]").addClass("is-danger");
                        $("input[name=password]").removeClass("is-danger");
                        $("input[name=email]").val("");
                        $("input[name=password]").val("");
                    }
                },
            });
        });
    }
}

class RegisterPage {
    register() {
        $('form[name=register]').submit( (e) => {
            e.preventDefault();
            $("input[value=Register]").on('click', () => {
                $("input[value=Register]").attr('disabled','true');
            });
            $.ajax({
                type: "POST",
                url: "authuser/register",
                data: $("form[name=register]").serialize(),
                success: function (response) {
                    const res = JSON.parse(response);
                    console.log(res);
                }
            });
        });
    }
}

const login_page = new LoginPage;
const register_page = new RegisterPage;