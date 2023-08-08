// import React, { useState } from 'react';
// import InfosProduit from '../../InfosProduit/InfosProduit';
// import { IProduct } from '../../mock/mock';

// interface PersonaliseProductProps {
//   item: IProduct;
// }

// const PersonaliseProduct: React.FC<PersonaliseProductProps> = ({ item }) => {
//   const { title, picture, description, includedIngredients, allergens, nutritionValues } = item;

//   const [isIngredientsOpen, setIsIngredientsOpen] = useState(false);
//   const [isAllergensOpen, setIsAllergensOpen] = useState(false);
//   const [isNutritionOpen, setIsNutritionOpen] = useState(false);

//   const toggleIngredientsOpen = () => {
//     setIsIngredientsOpen(!isIngredientsOpen);
//   };

//   const toggleAllergensOpen = () => {
//     setIsAllergensOpen(!isAllergensOpen);
//   };

//   const toggleNutritionOpen = () => {
//     setIsNutritionOpen(!isNutritionOpen);
//   };

//   return (
//     <article>
//       <img src={picture.src} alt={picture.alt} />
//       <h3>{title}</h3>
//       <p>description : {description}</p>
//       <InfosProduit
//         isIngredientsOpen={isIngredientsOpen}
//         includedIngredients={includedIngredients}
//         toggleIngredientsOpen={toggleIngredientsOpen}
//         allergens={allergens}
//         isAllergensOpen={isAllergensOpen}
//         toggleAllergensOpen={toggleAllergensOpen}
//         nutritionValues={nutritionValues}
//         isNutritionOpen={isNutritionOpen}
//         toggleNutritionOpen={toggleNutritionOpen}
//         showProductDetail={true}
//       />
//     </article>
//   );
// };

// export default PersonaliseProduct;
