document.addEventListener("DOMContentLoaded", function () {
  let products = [
    {
      item: 'iphone',
      price: '$32',
      color: 'black',
      image: './images/imgfromgood/iphone.jpg',
      description: 'A sleek and powerful smartphone built for speed and style.'
    },
    {
      item: 'clothes',
      price: '$21',
      color: 'pink',
      image: './images/imgfromgood/clothes.jpg',
      description: 'Stylish and comfortable wear that fits all occasions beautifully.'
    },
    {
      item: 'fan',
      price: '$45',
      color: 'black',
      image: './images/imgfromgood/fan.jpg',
      description: 'Stay cool all day with this high-efficiency table fan.'
    },
    {
      item: 'keyboard',
      price: '$54',
      color: 'black',
      image: './images/imgfromgood/keyboard.jpg',
      description: 'Smooth and responsive keyboard ideal for typing and gaming.'
    },
    {
      item: 'shoe',
      price: '$36',
      color: 'black',
      image: './images/imgfromgood/shoe.jpg',
      description: 'Durable and trendy shoes made for comfort and long walks.'
    },
    {
      item: 'bluetooth',
      price: '$44',
      color: 'black',
      image: './images/imgfromgood/MP3.jpg',
      description: 'Wireless Bluetooth speaker with rich sound and deep bass.'
    }
  ];

  let container = document.querySelector('#product-row');
  container.innerHTML = '';

  products.forEach(product => {
    let div = document.createElement('div');
    div.className = 'col-12 col-sm-6 col-md-4 mb-3';

    div.innerHTML = `
      <div class="card h-100 shadow d-flex flex-column" data-aos="zoom-in" data-aos-duration="800">
        <img src="${product.image}" class="card-img-top" alt="${product.item}">
        <div class="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 class="card-title text-capitalize">${product.item}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text"><strong>Price:</strong> ${product.price}</p>
            <p class="card-text"><strong>Color:</strong> ${product.color}</p>
          </div>
          <div class="mt-auto text-center">
            <a href="#" class="btn btn-primary w-50">Buy Now</a>
          </div>
        </div>
      </div>
    `;

    container.appendChild(div);
  });

  AOS.init();
});
