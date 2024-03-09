
const navigationLinks = [ // pour chaque lien, on définit un objet avec un nom et un href, href est l'attribut href du lien
    {
        name: "Essential",
        href: '#about',
    },
    {
        name: "Présentation",
        href: '#presentation',
    },
    {
        name: "Hours",
        href: '#opening_hours',
    },
    {
        name: "Specialties",
        href: '#speciality',
    },
];

const NavigationLinks = () => {
    return <div className="bg-white shadow p-4">
        <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-6">
                {
                    navigationLinks.map(({ name, href }, index) => { //  map sur les liens pour retourner un lien pour chaque objet
                        return <a
                            key={index}
                            href={href}
                            className="text-cyan-900 font-bold hover:text-cyan-800 duration-300"
                        >
                            {name}
                        </a>
                    })
                }
            </div>
        </div>
    </div >
};

export default NavigationLinks;