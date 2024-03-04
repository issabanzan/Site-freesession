const practitioners_details = [
  {
    id: 1,
    practitioner: "Nathalie Déga",
    subTitle: "Psychologue",
    isVerified: true,
    establishment: "Freesession",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet. Sed vitae eros quis nisl aliquam aliquet.",
    photo: {
      profilePicture: "https://picsum.photos/200/300",
    },
    places: 
      {
        id: "1",
        address: "1 rue de la paix Paris 75000 France",
        city: "Paris",
        zipCode: "75000",
        country: "France",
        phone: "0600000000",
        email: "papikonate@icloud.com",
        access: {
          type: "public", 
          description: "",
          isAllowedForChildren: true, 
          isAllowedForDisabledPeople: true, 
        },
      },
    
    stars: 4,
    reviews: 100,
    languages: ["french", "english", "espanish"],
    yearsOfExperience: 10,
    specialist: {
      diploma: "Diplôme de psychologue",
      school: "Université de Paris",
      specialities: ["All our specialties", "All our disorders", "psychothérapeute"],
      professionalOrganizations: ["Ordre des psychologues"],
      insurance: ["Responsabilité civile professionnelle"],
    },
    billing: {
      paymentMethods: ["CB", "Chèque", "Espèces"],
      refundIsAvailable: true,
    },
    openingHours: "Monday to Friday: 09.00 am - 12.00, 02.00 pm - 06.00 pm",
    contact: "05 58 06 64 18",
  },
  
  
];

export default practitioners_details;
