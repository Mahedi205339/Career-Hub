import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineLocationOn, MdWork } from "react-icons/md"
import { AiOutlineDollar, AiOutlinePhone ,AiOutlineMail} from "react-icons/ai"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localstorage";



const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log(job)

const handleApplyJob = () =>{
    saveJobApplication(idInt)
    toast('You have applied successfully')
}

    return (
        <div>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center my-3 md:my-6 lg:mb-32">Job Details of: {job.job_title}</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3 p-2">
                    <p className="text-gray-500 mb-4"><span className="font-bold text-black">Job Description: </span>{job.job_description}
                    </p>
                    <p className="text-gray-500 my-4"><span className="font-bold text-black">Job Responsibility: </span>
                        {job.job_responsibility}
                    </p>
                    <p className="text-gray-500 my-4"><span className="font-bold text-black">Educational Requirement: </span><br />
                        {job.educational_requirements}

                    </p>
                    <p className="text-gray-500 my-4"><span className="font-bold text-black">Experiences: </span><br />
                        {job.experiences}
                    </p>
                </div>
                <div className="border p-2 text-gray-500">
                    <h3 className="text-base font-bold mb-2 text-black">Job Details</h3>
                    <div className="flex items-center gap-2">
                        <AiOutlineDollar className="text-[#7E90FE]"></AiOutlineDollar>
                        <span className="font-bold text-black"> Salary :</span>{job.salary}
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                        <MdWork className="text-[#7E90FE]"></MdWork>
                        <span  className="font-bold text-black">Job Title :</span>{job.job_title}
                    </div>
                    <h3>Contact Information</h3>
                    <div className="flex items-center gap-2">
                        <AiOutlinePhone className="text-[#5e71eb]" ></AiOutlinePhone>
                        <span className="font-bold text-black">Phone :</span>{job.contact_information.phone}
                    </div>
                    <div className="flex items-center gap-2">
                    <AiOutlineMail className="text-[#596ceb]"></AiOutlineMail>
                    <span className="font-bold text-black">Email :</span>{job.contact_information.email}
                    </div>
                    <div className="flex items-center gap-2">
                        <MdOutlineLocationOn className="text-[#6678f2]"></MdOutlineLocationOn>
                        <span className="font-bold text-black">Address:</span>{job.contact_information.address.slice(0,22)}
                    </div>
                    <button onClick={handleApplyJob} className="w-full mt-2 lg:mt-10 bg-[#7E90FE] py-2 text-white rounded">Apply Now</button>

                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default JobDetails;