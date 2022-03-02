/* load Phone */
const loadPhone = () => {

    const searchText = document.getElementById('search-field').value
    /* if (typeof phones === null) {
        console.log('No result Found')
    } */
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
    document.getElementById('search-field').value = '';
}



/* show Phone */
const displayPhone = phones => {
    document.getElementById('show-phone').innerHTML = '';
    const showPhone = document.getElementById('show-phone')
    phones.forEach(phone => {
        const div = document.createElement('div')
        div.textContent = '';
        div.innerHTML = `
        <div class="mb-5 rounded-3 redius col-sm-6">
        <div class="card  p-5 " style="width: 20rem;">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
        </div>
        <button onclick='phoneDetails("${phone.slug}")' id="read-more" class="btn btn-outline-secondary">Read More</button>
        </div>
        </div>
        `
        /* const slicedPhone = phones.splice(0, 20)
        console.log(slicedPhone); */
        showPhone.appendChild(div)

    });
}


/* Phone Details */
const phoneDetails = id => {
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data))
}


/* show Phone Details  */
const displayPhoneDetails = details => {
    document.getElementById('phone-details').innerHTML = '';
    const showPhoneDetails = document.getElementById('phone-details')
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card p-5 mb-5" style="width: 35rem;">
        <img src="${details.data.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h3>${details.data.name}</h3>
        <p>ReleaseDate : <sapn class="text-danger">${details.data.releaseDate}</span></p>
            <h5>Main Features</h5>
            <h6>Chipset : <span>${details.data.mainFeatures.chipSet}</span></h6>
            <h6>Display Size : <span>${details.data.mainFeatures.displaySize}</span></h6>
            <h6>Memory : <span>${details.data.mainFeatures.memory}</span></h6>
            <h5>Sencors</h5>
            <ul>
                <li>${details.data.mainFeatures.sensors[0]}</li>
                <li>${details.data.mainFeatures.sensors[1]}</li>
                <li>${details.data.mainFeatures.sensors[2]}</li>
                <li>${details.data.mainFeatures.sensors[3]}</li>
                <li>${details.data.mainFeatures.sensors[4]}</li>
                <li>${details.data.mainFeatures.sensors[5]}</li>
            </ul>
            <h5>Other Features</h5>
            <h6>Bluetooth : <span>${details.data.others?.Bluetooth}</span></h6>
            <h6>GPS : <span>${details.data.others?.GPS}</span></h6>
            <h6>NFC : <span>${details.data.others?.NFC}</span></h6>
            <h6>Radio : <span>${details.data.others?.Radio}</span></h6>
            <h6>USB : <span>${details.data.others?.USB}</span></h6>
            <h6>WLAN : <span>${details.data.others?.WLAN}</span></h6>
        </div>
    </div>
    `
    showPhoneDetails.appendChild(div)

}