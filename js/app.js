const loadPhone = () => {
    const searchText = document.getElementById('search-field').value
    searchText.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))

}
const displayPhone = phones => {
    console.log(phones);
    phones.forEach(phone => {
        console.log(phone.status);
        const showPhone = document.getElementById('show-phone')
        const div = document.createElement('div')
        phone.textContent = '';
        div.innerHTML = `
        <div class="mb-5 rounded-3 redius">
        <div class="card  p-5 " style="width: 18rem;">
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
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))
}
function displayPhoneDetails(details = 'data.data') {
    console.log(details);
    const showPhoneDetails = document.getElementById('phone-details')
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${details.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h1>${details.phone_name}</h1>
        <p>${details.status}</p>
            <h4>Main Features</h4>
            <h4>Chipset : ${details.status}</h4>
            <h4>Display Size : ${details.status}</h4>
            <h4>Memory : ${details.status}</h4>


            <h4>Main Features</h4>
            <h4>Main Features</h4>
            <h4>Main Features</h4>
            <h4>Main Features</h4>
            <h4>Main Features</h4>
            <h4>Main Features</h4>

        </div>
    </div>
    `
    showPhoneDetails.appendChild(div)
}
// https://openapi.programming-hero.com/api/phone/${id}