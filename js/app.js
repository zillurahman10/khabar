const loadPhone = () => {
    const searchText = document.getElementById('search-field').value
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))

}
const displayPhone = phones => {
    console.log(phones);
    phones.forEach(phone => {
        console.log(phone.id);
        const showPhone = document.getElementById('show-phone')
        const div = document.createElement('div')
        div.textContent = '';
        div.innerHTML = `
        <div class="mb-5 rounded-3 ">
        <div class="card" style="width: 18rem;">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
        </div>
        <button onclick="phoneDetails('${phone.id}')" id="read-more" class="btn btn-outline-secondary">Read More</button>
        </div>
        </div>
        `
        showPhone.appendChild(div)
    });

}

const phoneDetails = id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    console.log(url);
}
// https://openapi.programming-hero.com/api/phone/${id}