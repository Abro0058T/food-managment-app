import React, { useState } from 'react';
import restMenuStyle from './restaurantMenu.module.css'
import { useNavigate ,useParams } from 'react-router-dom';
function RestaurantMenu() {
    const navigate=useNavigate()
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const meals = ['Lunch', 'Breakfast', 'Dinner'];

  const [mealData, setMealData] = useState({});

  const {id}=useParams()
  const handleAddDish = (event) => {
    const {  day, meal } = event.target.dataset;
    console.log(event.target.dataset) // Get data from dataset attributes
    const dishName = prompt('Enter the dish name:'); // Prompt for dish name
    if (!dishName) return; // No dish name entered, exit

    setMealData((prevData) => ({
      ...prevData,
      [day]: {
        ...prevData[day],
        [meal]: prevData[day]?.[meal] ? [...prevData[day][meal], dishName] : [dishName], // Add dish to array or create new array
      },
    }));
  };
  const removeDish = (event) => {
    const {dishName,day,meal}=event.target.dataset;
    // Deep copy to avoid mutating original state
    const [day_ , dish]=day.split(",")
    const updatedMealData = mealData
    console.log(day_ ,  dish)
    console.log(updatedMealData)
console.log(updatedMealData[day_][meal])
    // Validate day and meal existence
    // if (!updatedMealData || !updatedMealData[day_] || !updatedMealData[day_][meal]) {
    //   console.error(`Error: Invalid day or meal: ${day_}/${meal}`);
    //   return;
    // }

    // Remove the specified dish
    const dishIndex = updatedMealData[day_][meal].indexOf(dish);
     console.log(dishIndex)
    if (dishIndex !== -1) {
      updatedMealData[day_][meal].splice(dishIndex, 1);
      setMealData(updatedMealData); // Update state with the modified data
      console.log(mealData)
    } else {
      console.warn(`Dish '${dish}' not found in ${day_}/${meal}`);
    }}
    function skip(){
        navigate(`/restaurant/${id}`)
    }
  return (
    <div className={restMenuStyle.menuContainer}>
        <a onClick={skip} className={restMenuStyle.skip}>
            Next
        </a>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            {meals.map((meal) => (
              <th key={meal}>{meal}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {daysOfWeek.map((day) => (
            <tr  key={day}>
              <th  className={restMenuStyle.day}>{day}</th>
              {meals.map((meal) => (
                <td key={`${day}-${meal}`}>
                  <div className="meal-card">
                    {/* Display existing dishes */}
                    {mealData[day]?.[meal]?.map((dish, index) => (
                      <span key={`${day}-${meal}-${index}`}>
                        {dish}
                        <button data-day={[day,dish]} className={restMenuStyle.buttonsMenu} data-meal={meal} data-index={index} onClick={removeDish}>X</button>
                      </span>
                    ))}
                    {/* Add button */}
                    <button data-day={day} className={restMenuStyle.buttonsMenu} data-meal={meal} onClick={handleAddDish}>+ Add Dish</button>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RestaurantMenu;
