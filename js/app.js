const loadPhone = () => {
    const searchText = document.getElementById('search-field')
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))

}
const displayPhone = phones => {
    console.log(phones);
    const showPhone = document.getElementById('show-phone')
    const div = document.createElement('div')
    div.innerHTML = `
    <div>
            <img src="${phones.image}" alt="">
        </div>
        <div>
            <h1>Brand : ${phones[0].brand}</h1>
            <h3>Product Name : ${phones.phone_name}</h3>
            <p>Product Code : ${phones.slug}</p>
        </div>
    `
    showPhone.appendChild(div)
}
// https://openapi.programming-hero.com/api/phone/${id}