const loadPhone = () => {
    document.getElementById('phone-details').innerHTML = '';
    document.getElementById('search-field').innerHTML = '';
    const searchText = document.getElementById('search-field').value
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))

}
const displayPhone = phones => {

    phones.forEach(phone => {
        document.getElementById('show-phone').innerHTML = '';
        const showPhone = document.getElementById('show-phone')
        const div = document.createElement('div')
        div.textContent = '';
        div.innerHTML = `
        <div class="mb-5 rounded-3 redius">
        <div class="card  p-5 " style="width: 18rem;">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
        </div>
        <button onclick='phoneDetails("${phone.slug}")' id="read-more" class="btn btn-outline-secondary">Read More</button>
        </div>
        </div>
        `
        showPhone.appendChild(div)
    });

}

const phoneDetails = id => {
    console.log(id);
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data))
}
function displayPhoneDetails(details) {
    console.log(details);
    const showPhoneDetails = document.getElementById('phone-details')
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card p-5" style="width: 25rem;">
        <img src="${details.data.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h3>${details.data.mainfeatures}</h3>
        <p>${details.data.others.releaseDate}</p>
            <h5>Main Features</h5>
            <h6>Chipset : <span>${details.data.mainFeatures.chipSet}</span></h6>
            <h6>Display Size : <span>${details.data.mainFeatures.displaySize}</span></h6>
            <h6>Memory : <span>${details.data.mainFeatures.memory}</span></h6>


            <h5>Other Features</h5>
            <h6>Bluetooth : <span>${details.data.others.Bluetooth}</span></h6>
            <h6>GPS : <span>${details.data.others.GPS}</span></h6>
            <h6>NFC : <span>${details.data.others.NFC}</span></h6>
            <h6>Radio : <span>${details.data.others.Radio}</span></h6>
            <h6>USB : <span>${details.data.others.USB}</span></h6>
            <h6>WLAN : <span>${details.data.others.WLAN}</span></h6>

        </div>
    </div>
    `
    showPhoneDetails.appendChild(div)
}
// https://openapi.programming-hero.com/api/phone/${id}