import { useEffect, useState } from "react";
import Job from "../job/job";


const FeaturedJobs = () => {
    //this is not the best way to load show all data
    const [dataLength, setDataLength] = useState(4);

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div className="my-4">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-center">Featured Jobs </h2>
                <p className="text-center my-2 text-gray-500">
                    Explore thousands of job opportunities with all the information you need. Its your future
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {
                        jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                    }
                </div>
                <div className={dataLength === jobs.length && 'hidden'}>
                    <button  onClick={() => setDataLength(jobs.length)} className="btn btn-primary">Show All</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;