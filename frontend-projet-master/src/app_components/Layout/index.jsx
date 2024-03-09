import Header from "../../shared/components/Header";
import Footer from "../../shared/components/Footer";


const Layout = ({ children }) => {
    return ( // le composant Layout contient le composant Header, l'enfant et le composant Footer
        <>
            <Header />
            
            <main className="pb-10 mx-auto w-screen bg-white"> 
                
                <div className="max-w-8xl mx-auto">
                    {
                        children
                    }
                </div>
            </main>
            <Footer />
        </>
    
    )
};

export default Layout;