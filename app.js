const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 150,
    colors: [
      {
        code: "black",
        img: "./img/Product/air.png",
        productDesc: "The Air Force 1 was created by designer Bruce Kilgore and was the first basketball shoe to use the Nike Air technology.",


      },
      {
        code: "darkblue",
        img: "./img/Product/air2.png",
        productDesc: "The Air Force 1 was created by designer Bruce Kilgore and was the first basketball shoe to use the Nike Air technology.",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 170,
    colors: [
        {
          code: "lightgray",
          img: "./img/Product/jordan.png",
          productDesc: "The Air Jordan was created for Michael Jordan in 1984 and became a cultural icon, revolutionizing basketball footwear and sneaker culture worldwide.",


        },
        {
          code: "green",
          img: "./img/Product/jordan2.png",
          productDesc: "The Air Jordan was created for Michael Jordan in 1984 and became a cultural icon, revolutionizing basketball footwear and sneaker culture worldwide.",
        },
      ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 130,
    colors: [
      {
        code: "lightgray",
        img: "./img/Product/blazer.png",
        productDesc: "The Nike Blazer debuted in 1973 as one of Nike’s first basketball shoes, combining a clean silhouette with performance leather for a timeless streetwear look.",
      },
      {
        code: "green",
        img: "./img/Product/blazer2.png",
        productDesc: "The Nike Blazer debuted in 1973 as one of Nike’s first basketball shoes, combining a clean silhouette with performance leather for a timeless streetwear look.",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 140,
    colors: [
      {
        code: "black",
        img: "./img/Product/crater.png",
        productDesc: "The Nike Crater was introduced as part of Nike’s Move to Zero initiative, featuring recycled materials and Crater Foam to push the boundaries of sustainable sneaker design.",


      
      },
      {
        code: "lightgray",
        img: "./img/Product/crater2.png",
        productDesc: "The Nike Crater was introduced as part of Nike’s Move to Zero initiative, featuring recycled materials and Crater Foam to push the boundaries of sustainable sneaker design.",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 90,
    colors: [
      {
        code: "gray",
        img: "./img/Product/hippie.png",
        productDesc: "The Nike Space Hippie line launched in 2020, built almost entirely from recycled materials and waste, showcasing Nike’s bold vision for circular design and zero carbon emissions."
      },

      {
        code: "black",
        img: "./img/Product/hippie2.png",
        productDesc: "The Nike Space Hippie line launched in 2020, built almost entirely from recycled materials and waste, showcasing Nike’s bold vision for circular design and zero carbon emissions."
      },
    ],
  },
  {
    id: 6,
    title: "Air Max",
    price: 180,
    colors: [
      {
        code: "red",
        img: "./img/Product/airmax.png",
        productDesc: "The Air Max was first released in 1987 and designed by Tinker Hatfield, making history as the first shoe to feature visible Air cushioning technology."
      },
      {
        code: "white",
        img: "./img/Product/airmax2.png",
        productDesc: "The Air Max was first released in 1987 and designed by Tinker Hatfield, making history as the first shoe to feature visible Air cushioning technology."
      },
    ],
  },
  ];
  
  let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductDesc = document.querySelector(".productDesc");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {

    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    currentProductDesc.textContent = choosenProduct.colors[0].productDesc;

    currentProductColors.forEach((color, index) => {
    color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});
  
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
    currentProductDesc.textContent = choosenProduct.colors[index].productDesc;

  });
});
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});
  
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
  
productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});
  
close.addEventListener("click", () => {
  payment.style.display = "none";
});
  