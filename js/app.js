/* load Phone */
const loadPhone = () => {

    const searchText = document.getElementById('search-field').value
    /* if (typeof phones === null) {
        console.log('No result Found')
    } */
    document.getElementById('phone-details').innerHTML = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
    document.getElementById('search-field').value = '';
}



/* show Phone */
const displayPhone = data => {
    const phones = data.slice(0, 20)
    document.getElementById('show-phone').innerHTML = '';
    const showPhone = document.getElementById('show-phone')
    if (data.length == 0) {
        document.getElementById('error').innerHTML = `No phone found`
    }
    else {
        phones.forEach(phone => {
            const div = document.createElement('div')
            div.textContent = '';
            div.innerHTML = `
                        <div class="card card-style mb-5 redius-1">
                        <div class="p-5 ">
                            <img src="${phone.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${phone.phone_name}</h5>
                            </div>
                            <button onclick='phoneDetails("${phone.slug}")' id="read-more" class="btn btn-outline-secondary de-flex justify-content-center">Read More</button> 
                            </div>   
                        </div>
            `
            showPhone.appendChild(div)

        });
    }
}


/* Phone Details */
const phoneDetails = id => {
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
        <p>ReleaseDate : <sapn class="text-danger">${details.data.releaseDate ? details.data.releaseDate : 'Comming soon...'}</span></p>
            <h5>Main Features</h5>
            <h6>Chipset : <span>${details.data.mainFeatures.chipSet}</span></h6>
            <h6>Display Size : <span>${details.data.mainFeatures.displaySize}</span></h6>
            <h6>Memory : <span>${details.data.mainFeatures.memory}</span></h6>
            <h5>Sencors</h5>
            <ul>
                <li>${details.data.mainFeatures.sensors[0] ? details.data.mainFeatures.sensors[0] : 'Not available'}</li>
                <li>${details.data.mainFeatures.sensors[1] ? details.data.mainFeatures.sensors[1] : 'Not available'}</li>
                <li>${details.data.mainFeatures.sensors[2] ? details.data.mainFeatures.sensors[2] : 'Not available'}</li>
                <li>${details.data.mainFeatures.sensors[3] ? details.data.mainFeatures.sensors[3] : 'Not available'}</li>
                <li>${details.data.mainFeatures.sensors[4] ? details.data.mainFeatures.sensors[4] : 'Not available'}</li>
                <li>${details.data.mainFeatures.sensors[5] ? details.data.mainFeatures.sensors[5] : 'Not available'}</li>
            </ul>
            <h5>Other Features</h5>
            <h6>Bluetooth : <span>${details.data.others ? details.data.others.Bluetooth : 'Not available'}</span></h6>
            <h6>GPS : <span>${details.data.others?.GPS ? details.data.others?.GPS : 'Not available'}</span></h6>
            <h6>NFC : <span>${details.data.others?.NFC ? details.data.others?.NFC : 'Not available'}</span></h6>
            <h6>Radio : <span>${details.data.others?.Radio ? details.data.others?.Radio : 'Not available'}</span></h6>
            <h6>USB : <span>${details.data.others?.USB ? details.data.others?.USB : 'Not available'}</span></h6>
            <h6>WLAN : <span>${details.data.others?.WLAN ? details.data.others?.WLAN : 'Not available'}</span></h6>
        </div>
    </div>
    `
    showPhoneDetails.appendChild(div)

}