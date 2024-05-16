const loadMeal = () => {

    const searchText = document.getElementById('search-field').value
    document.getElementById('meal-details').innerHTML = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.meals);
            displayMeal(data.meals);
        })
    document.getElementById('search-field').value = '';
}



const displayMeal = data => {
    const meals = data
    document.getElementById('show-meal').innerHTML = '';
    const showMeal = document.getElementById('show-meal')
    if (data == null) {
        document.getElementById('error').innerHTML = `No meal found`
    }
    else {
        document.getElementById('error').innerHTML = ''
        meals.forEach(meal => {
            const div = document.createElement('div')
            div.textContent = '';
            div.innerHTML = `
                        <div onclick='mealDetails(${meal.idMeal})' class="card card-style mb-5 redius-1">
                        <div class="p-5 ">
                            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${meal.strMeal}</h5>
                            </div>
                            </div>   
                        </div>
            `
            showMeal.appendChild(div)

        });
    }
}


const mealDetails = id => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.meals)
            displayMealDetails(data.meals)
        })
}


const displayMealDetails = details => {
    document.getElementById('meal-details').innerHTML = '';
    const showmealDetails = document.getElementById('meal-details')
    const div = document.createElement('div')
    details.forEach(meal => {
        div.innerHTML = `
        <div class="card p-5 mb-5">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h3>${meal.strMeal}</h3>
                <ul>
                    <li>${meal.strIngredient1 ? meal.strIngredient1 : 'Not available'}</li>
                    <li>${meal.strIngredient2 ? meal.strIngredient2 : 'Not available'}</li>
                    <li>${meal.strIngredient3 ? meal.strIngredient3 : 'Not available'}</li>
                    <li>${meal.strIngredient4 ? meal.strIngredient4 : 'Not available'}</li>
                    <li>${meal.strIngredient5 ? meal.strIngredient5 : 'Not available'}</li>
                    <li>${meal.strIngredient6 ? meal.strIngredient6 : 'Not available'}</li>
                    <li>${meal.strIngredient7 ? meal.strIngredient7 : 'Not available'}</li>
                    <li>${meal.strIngredient8 ? meal.strIngredient8 : 'Not available'}</li>
                    <li>${meal.strIngredient9 ? meal.strIngredient9 : 'Not available'}</li>
                    <li>${meal.strIngredient10 ? meal.strIngredient10 : 'Not available'}</li>
                    <li>${meal.strIngredient11 ? meal.strIngredient11 : 'Not available'}</li>
                    <li>${meal.strIngredient12 ? meal.strIngredient12 : 'Not available'}</li>
                    <li>${meal.strIngredient13 ? meal.strIngredient13 : 'Not available'}</li>
                    <li>${meal.strIngredient14 ? meal.strIngredient14 : 'Not available'}</li>
                    <li>${meal.strIngredient15 ? meal.strIngredient15 : 'Not available'}</li>
                    <li>${meal.strIngredient16 ? meal.strIngredient16 : 'Not available'}</li>
                    <li>${meal.strIngredient17 ? meal.strIngredient17 : 'Not available'}</li>
                    <li>${meal.strIngredient18 ? meal.strIngredient18 : 'Not available'}</li>
                    <li>${meal.strIngredient19 ? meal.strIngredient19 : 'Not available'}</li>
                    <li>${meal.strIngredient20 ? meal.strIngredient20 : 'Not available'}</li>
                <ul/>
            </div>
        </div>
        `
    })

    showmealDetails.appendChild(div)

}