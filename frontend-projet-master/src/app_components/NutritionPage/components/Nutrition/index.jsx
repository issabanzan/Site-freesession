import React from 'react';

const Nutrition = () => {
  return (
    <div className={`lg:mr-[20rem] max-w-7xl mx-auto mt-10`}>
      <h1 className="text-3xl font-bold mb-4 text-black font-semibold font-serif">Nutrition</h1>
      <p className="mb-4 font-semibold font-serif">
        Nutrition is the set of processes that our body puts in place to nourish itself.
        These are mechanical and chemical processes, but also psycho-emotional and even energetic.
        Since the individual needs to be nourished physiologically, of course, but also emotionally,
        intellectually, and spiritually. Therefore, nutrition advice must take all these aspects into consideration..
      </p>
      <img
        src="/src/assets/Nutrition.jpg" 
        alt="Nutrition"
        className="mb-4 w-full h-[460px]"
      />
      <h2 className="text-2xl text-black font-semibold font-serif mb-3">Nutrition: how does it work?</h2>
      
      
      <p className="mb-4 font-semibold font-serif">
        Nutrition is a foundation of good health.
        Nutrition consists of bringing together all the processes that take place in the body (assimilation, excretion, etc.)
        and allow it to function properly. Nutrition helps create the body’s energy production.
        Its objective is that the individual succeeds in nourishing his body, his heart and his mind as best as possible.
        Thus, it provides both physical and psycho-emotional balance which helps to stay in good health.
        The foods ingested are made up of two types of nutrients:
      </p>
  

      <h1 className="text-2xl text-black font-semibold font-serif mb-3">Macronutrients</h1>
      <p className="mb-4 font-semibold font-serif">
          Macronutrients are those that the body requires when it needs energy or for the production of calories. These are the macronutrients that promote proper functioning of organs. They must be ingested in a larger quantity than micronutrients, “macro” meaning large.
          The basic macronutrients are proteins, carbohydrates and fats.
      </p>



      <h2 className="text-2xl text-black font-semibold mb-3">Micronutrients</h2>

      <p className="mb-4 font-semibold font-serif">
         These are minerals essential for the proper functioning of our system, although they are less rich in energy than macronutrients.
         Micronutrients have their own roles in the body. They are divided into several categories: minerals (carbonate, sulfate, oxide), trace elements (iron, iodine, copper), essential fatty acids or even amino acids.
         All nutrients are fundamental for our body. A balanced diet is a correct variation between macronutrients and micronutrients.
         Micronutrition, psycho nutrition are forms of nutrition and naturopathy also involves nutrition techniques.
      </p>

      <h2 className="text-2xl text-black font-semibold mb-3">The benefits of nutrition</h2>

      <p className="mb-4 font-semibold font-serif">
          Numerous studies have proven that a balanced diet can improve many disorders. These include weight loss or gain, digestive disorders, sleep or eating disorders.
          Improving your diet is also effective for aging. Nutrition helps prevent certain disorders sometimes linked to poor diet: cardiovascular diseases, diabetes, cancers, etc. Nutrition is also important for high-level athletes as well, to improve their performance.
          Based on prevention, having a balanced diet is the basic principle for long-term good health and is specific to each person.
      </p>
    </div>
  );
};

export default Nutrition;
