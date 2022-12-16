import {Navbar, Footer} from "../Partials";

const Login = () => {

    return(
        <main>
            <Navbar />
            <section class="p-5 px-lg-5 px-3">
                <h1 class="fw-bold mb-4 text-center">
                    Register for free
                </h1>

                <form class="reg-box py-5 px-4 col-lg-4 mx-auto rounded-3" action="/login">
                    <input class="form-control rounded-0 py-2 mb-4" type="text" placeholder="Enter Fullname" />
                    <input class="form-control rounded-0 py-2 mb-4" type="email" placeholder="Enter Email" />
                    <input class="form-control rounded-0 py-2 mb-4" type="passowrd" placeholder="Enter Password" />
                    <button class="d-block rounded-0 py-2 btn btn-primary w-50 mx-auto border-0">Sign up</button>
                </form>
            </section>
            <Footer />
        </main>
    )

}

export default Login;