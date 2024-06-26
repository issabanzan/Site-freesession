import Image1 from '../../../../assets/D3.png';
import Image2 from '../../../../assets/D4.png';
import Image3 from '../../../../assets/D5.png';
import Image4 from '../../../../assets/D6.png';

const Hi = () => {
    return (
        <section className='w-full rounded-lg bg-[#3BAFBC] max-w-7xl mx-auto flex flex-col justify-center items-center py-10'>
            <h1 className="text-4xl max-w-xl font-bold text-white leading-tight tracking-tighter mb-2">
                Are you a practitioner?
            </h1>
            <p className="text-lg text-white text-center mb-6 leading-tight tracking-tighter inter text-2xl">
                Join the network of the best French practitioners
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 mt-5">
                <div className="flex flex-col items-center">
                    <img src={Image1} alt="Image 1" className="w-60 h-40 object-cover rounded-md" />
                    <p className="text-white font-bold mt-2 text-center leading-tight tracking-tighter inter text-1xl">
                        Visibility to new customers
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Image2} alt="Image 2" className="w-60 h-40 object-cover rounded-md" />
                    <p className="text-white font-bold mt-2 text-center leading-tight tracking-tighter inter text-1xl">
                        Manage your appointments
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Image3} alt="Image 3" className="w-60 h-40 object-cover rounded-md" />
                    <p className="text-white font-bold mt-2 text-center leading-tight tracking-tighter inter text-1xl">
                        Meetings between professionals
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Image4} alt="Image 4" className="w-60 h-40 object-cover rounded-md" />
                    <p className="text-white font-bold mt-2 text-center leading-tight tracking-tighter inter text-1xl">
                        Media publications
                    </p>
                </div>
            </div>
            <button
                onClick={() => window.location.href = '/AllSpecialities'}
                className="border-2 border-white rounded-full px-4 py-2 mt-9 text-white bg-black hover:bg-white hover:text-black leading-tight tracking-tighter inter text-2xl">
                All specialties
            </button>
        </section>
    );
};

export default Hi;
