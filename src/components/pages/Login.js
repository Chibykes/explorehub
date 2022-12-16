import {Navbar, Footer} from "../Partials";

const Login = () => {

    return(
        <main>
            <Navbar />
            <section className="p-5 px-lg=5 px-3">
                <h1 className="fw-bold mb-4 text-center">
                    Login into publications
                </h1>

                <form className="reg-box py-5 px-4 col-lg-4 mx-auto rounded-3" action="/publications">
                    <input className="form-control rounded-0 py-2 mb-4" type="email" placeholder="Enter Email" />
                    <input className="form-control rounded-0 py-2 mb-4" type="passowrd" placeholder="Enter Password" />
                    <button className="d-block rounded-0 py-2 btn btn-primary w-50 mx-auto border-0">Login</button>
                </form>
            </section>
            <Footer />
        </main>
    )

}

export default Login;