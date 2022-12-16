import {Navbar, Footer} from "../Partials";
import query2obj from "../../Hooks/qparams";

const Home = (props) => {
    console.log(query2obj(props.location.search));
    console.log(new URLSearchParams(props.location.search).get('name'));
    return(
        <main>
            <Navbar />
            <section className="p-5 px-lg-5 px-2">
                <div className="row align-items-center col-lg-11 mx-auto">
                    <div className="col-lg-6">
                        <h1 className="fw-bold mb-4" style={{width: '90%'}}>
                            Get access to hundred of works done by brilliant researchers at your disposal
                        </h1>
                        <a className="btn btn-primary btn-lg border-0 rounded-0" href="register">Join for free</a>
                    </div>

                    <div className="col-lg-6">
                        <img className="d-lg-block d-none" width="100%" src="assets/img/research.svg" alt="" />
                    </div>
                </div>
            </section>


            <section  id="discover" className="p-5 px-lg-5 px-2 text-center" style={{backgroundColor: '#f9f9f9'}}>
                <div className="py-lg-5">
                    <h1 className="fw-bold mb-2">
                        Discover research works
                    </h1>
                    <p className="fs-5">
                        Access over hundreds of research papers
                    </p>
                    <form action="publications" 
                        method="GET"
                        className="d-flex justify-content-center col-lg-6 mx-auto fs-4">
                        <input 
                            className="py-2 px-3 rounded-0 border-1" 
                            type="text" 
                            placeholder="Search Topic"
                            style={{borderColor: 'var(--my-gray); width: 60'}}
                        />
                        <button className="btn btn-primary border-0 rounded-0 px-4">
                            <i className="fa fa-search col-white fs-4" aria-hidden="true"></i>
                        </button>
                    </form>
                </div>
            </section>


            <section className="p-5 px-lg-5 px-2">
                <div className="row py-lg-5 justify-content-center col-lg-11 mx-auto">
                    <div className="col-lg-5">
                        <h1 className="fw-bold text-lg-start text-center">
                            Look through publications by categories
                        </h1>
                    </div>
                    <div className="col-lg-7">
                        <div className="d-inline-flex justify-content-lg-start justify-content-center flex-wrap">
                            <a href="/publications/Engineering" className="btn fs-lg-5 m-2 btn-outline-primary col-main rounded-0">Engineering</a>
                            <a href="/publications/Computer Science" className="btn fs-lg-5 m-2 btn-outline-primary col-main rounded-0">Computer Science</a>
                            <a href="/publications/Medicine" className="btn fs-lg-5 m-2 btn-outline-primary col-main rounded-0">Medicine</a>
                            <a href="/publications/Accounting" className="btn fs-lg-5 m-2 btn-outline-primary col-main rounded-0">Accounting</a>
                            <a href="/publications/Agriculture" className="btn fs-lg-5 m-2 btn-outline-primary col-main rounded-0">Agriculture</a>
                            <a href="/publications/Commerce" className="btn fs-lg-5 m-2 btn-outline-primary col-main rounded-0">Commerce</a>
                            <a href="/publications/History" className="btn fs-lg-5 m-2 btn-outline-primary col-main rounded-0">History</a>
                            <a href="/publications/Geography" className="btn fs-lg-5 m-2 btn-outline-primary col-main rounded-0">Geography</a>
                            <a href="/publications/Geography" className="btn fs-lg-5 m-2 btn-outline-primary col-main rounded-0">Geography</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="hire p-5 px-lg-5 px-2">
                <div className="row py-lg-5 col-lg-10 mx-auto">
                    <div className="col-lg-6">
                        <img width="100%" src="assets/img/footer-advertising@2x.jpg" alt=""/>
                    </div>

                    <div className="col-lg-6 mt-lg-0 mt-3">
                        <h1 className="fw-bold">Hire Researchers</h1>
                        <p className="fs-4">
                            Need detailed analysis, great paper work? Hire an expert today and be rest assured all your research works are done with the best tools
                        </p>
                        {/* <form className="d-flex justify-content-start">
                            <input 
                                className="py-2 px-3 rounded-0 border-1" 
                                type="text" 
                                placeholder="Enter Email"
                                style={{border-color: 'var(--my-gray)'}}
                            >
                            <button className="btn btn-primary border-0 rounded-0">
                                <i className="fa fa-search col-white" aria-hidden="true"></i>
                            </button>
                        </form> */}

                        <p className="fs-3">
                            <strong className="">Reach us:</strong>
                            <span> hire@explorehub.com</span>
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )

}

export default Home;