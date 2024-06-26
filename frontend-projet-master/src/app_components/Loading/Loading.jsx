import app_logo from '../../assets/Blue_Blob_Health_Care_Logo_4_-removebg-preview.png';

function Loading({ message, showLoader = true }) {
    return (
        <div className="z-30 bg-gray-50 fixed inset-0 flex items-center justify-center min-h-screen min-w-screen">
            <div className="flex flex-col items-center justify-center w-full">
                <img src={app_logo} alt={import.meta.env.VITE_APPLICATION_NAME} className="w-auto h-12 mb-12" />
                {/* Conditionnellement afficher le message ou le nom de l'application */}
                {message ? (
                    <h3 className="text-gray-800 text-lg font-medium mb-3">{message}</h3>
                ) : (
                    <h3 className="text-gray-800 text-lg font-medium mb-3">{import.meta.env.VITE_APPLICATION_NAME}</h3>
                )}
                {/* Afficher la barre de chargement si showLoader est true */}
                {showLoader && (
                    <div className="bg-[#225886] h-1 max-w-10 w-full rounded-full mb-8 relative overflow-hidden">
                        <div className="an_load_bar bg-cyan-600"></div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Loading;
