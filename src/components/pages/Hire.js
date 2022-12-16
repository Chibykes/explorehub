import {Navbar, Footer} from "../Partials";

const Hire = () => {

    return(
        <main>
            <Navbar />
            <section class="hire p-5 px-lg-5 px-2">
                <div class="row py-lg-5 col-lg-10 mx-auto">
                    <div class="col-lg-6">
                        <img width="100%" src="assets/img/footer-advertising@2x.jpg" alt="" />
                    </div>

                    <div class="col-lg-6 mt-lg-0 mt-3">
                        <h1 class="fw-bold">Hire Researchers</h1>
                        <p class="fs-4">
                            Need detailed analysis, great paper work? Hire an expert today and be rest assured all your research works are done with the best tools
                        </p>
                        {/* <form class="d-flex justify-content-start">
                            <input 
                                class="py-2 px-3 rounded-0 border-1" 
                                type="text" 
                                placeholder="Enter Email"
                                style="border-color: var(--my-gray)"
                            >
                            <button class="btn btn-primary border-0 rounded-0">
                                <i class="fa fa-search col-white" aria-hidden="true"></i>
                            </button>
                        </form> */}

                        <p class="fs-3">
                            <strong class="">Reach us:</strong>
                            <span> hire@explorehub.com</span>
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )

}

export default Hire;