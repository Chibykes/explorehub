import { Aside, Footer, Navbar, Sidebar } from '../Partials';
import {Link, useParams} from 'react-router-dom';
import publications from '../../publications.json';

const Publications = () => {

    const {category} = useParams();
    let research = publications.map(e => e);
    console.log(research)
    if(category){
        research = publications.filter(e => e.category === category);
    }

    return(
        <main className="d-flex bg-light">
            <Sidebar />


            <div className="w-auto">
                <Navbar />
                
                <div className="row m-0 col-lg-10 mx-auto py-5">
                    <div className="col-lg-8 p-3 ps-lg-0">
                        <h1 className="fs-3 fw-bold text-uppercase">
                            All <span id="page">{category && category.replace(/%20/ig, ' ')}</span> Publications
                            <script>
                                document.querySelector('#page').innerText = location.search.replace('?topic=','').replace('%20',' ')
                            </script>
                        </h1>
            
                        <div className="row m-0">
                            {research.map(pub => (
                                <Link to={'/topic/' + pub.topic} className="topics p-0 col-12 my-3" key={pub.id}>
                                    <div className="card border-0 shadow-lg p-3 rounded-5">
                                        <div className="row d-flex align-items-center">
                                            <h1 className="fs-4 mb-0 fw-bold col-lg-10">{pub.topic}</h1>
                                            <div className="ms-auto col-lg-2">
                                                <button className="btn btn-primary border-0 rounded-pill p-0 px-2 fw-bold" style={{fontSize: '12px'}}>
                                                    <i className="fa fa-check" aria-hidden="true"></i>
                                                    Verified
                                                </button>
                                            </div>
                                        </div>
                                        <small className="py-3 text-justify">
                                            {pub.summary}
                                        </small>
                                        <div className="row">
                                            <div className="col-6">
                                                <strong>Author:</strong>
                                                <span className="">{pub.author}</span>
                                            </div>
                                            <div className="col-6">
                                                <strong>Date:</strong>
                                                <span className="">14/07/2021</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
        
                    <Aside publications={publications}/>
                </div>
        
                <Footer />
            </div>
        </main>
    )

}

export default Publications;