import { Aside, Footer, Navbar, Sidebar } from '../Partials';
import { useParams } from 'react-router-dom';

const Topic = () => {

    const {topic} = useParams();
    console.log(useParams());

    return(
        <main className="d-flex bg-light">
            <Sidebar />


            <div className="w-auto">
                <Navbar />
                
                <div className="row m-0 col-lg-10 mx-auto py-5">
                    <div className="col-lg-8 p-3 ps-lg-0">
                        <div className="border rounded p-4 bg-white">
                            <h1 id="page" className="fs-3 mb-0 pb-2 fw-bold">
                                {topic.replace(/%20/ig, ' ')}
                            </h1>
                            <div className="">
                                <button className="btn btn-primary border-0 rounded-pill p-0 px-2 fw-bold" style={{fontSize: '12px'}}>
                                    <i className="fa fa-check" aria-hidden="true"></i>
                                    Verified
                                </button>
                            </div>




                            <div className="row py-2">
                                <div className="col-6">
                                    <strong>Author:</strong>
                                    <span className="">John Doe</span>
                                </div>
                                <div className="col-6">
                                    <strong>Date:</strong>
                                    <span className="">14/07/2021</span>
                                </div>
                            </div>

                            
                            <hr style={{backgroundColor: '#bbb'}}/>


                            <p className="text-justify summary pt-3">
                                <strong className="d-block fs-5 pb-2">ABSTRACT</strong>
                                This abstract may not be related to the topic of the research but is used as a sample abstract to showcase how it would look like if there was an original abstract.
                                In the first 6 months of 2020, the COVID-19 pandemic forced numerous universities across the globe to quickly transfer all their courses online, a response known as Emergency Remote Teaching. Courses initially designed for face to face delivery had to be quickly adapted to a new online format. In this paper, we study the perception of the transition to remote teaching in a group of computer science students. Despite the advantage given by an average higher computer literacy, the results of this study suggest that students found the transition challenging, especially regarding tasks such as asking questions during video lectures and interacting with instructors. The transition seems to have had a greater impact on students of lower level courses. Differences were found also across race and residence status (but not gender). The initial format of the course was also relevant: students fared better if their course relied on online tools before the transition.
                            </p>

                            <div className="col-lg-6 my-4 mx-auto">
                                <a className="btn btn-primary pay d-block"
                                    href="/"
                                >
                                    Buy publication for <strong>&#8358;3,000</strong>
                                </a>
                            </div>
                        </div>

                    </div>
                    <Aside />
                </div>
        
                <Footer />
            </div>
        </main>
    )

}

export default Topic;