
import About from "../Pages/About";
import Contact from "../Pages/Contact";
// import Homepage from "../Pages/Homepage";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
export const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Women',
        featured: [
          {
            name: 'Stylish and Traditional sarees',
            href: '/women/clothing/saree',
            imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20240102/SOWQ/6593e973ddf7791519fb6bcf/-473Wx593H-466938194-peach-MODEL.jpg',
            imageAlt: 'Saree.',
          },
          {
            name: 'Lehengas',
            href: '/women/clothing/lengha_choli',
            imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20240226/pVMb/65dbaa0505ac7d77bb778e3e/-473Wx593H-467104814-seagreen-MODEL.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', id:"top", href: `{women/clothing/tops}` },
              { name: 'Dresses', id:"women_dress", href: '#' },
              { name: 'Lehenga Choli', id: 'lengha_choli' },
              { name: 'Sarees', id: 'saree' },
              { name: 'Gouns', id: 'gouns' },
              { name: 'T-Shirts', id: 't-shirt' },
              { name: 'Sweaters', id: 'sweater' },
              { name: 'Women Jeans', id: 'women_jeans' },
              { name: 'Jackets', id: 'jacket' },
              { name: 'Kurtis', id: 'kurtis' },
            ],
          },
          // {
          //   id: 'accessories',
          //   name: 'Accessories',
          //   items: [
          //     { name: 'Watches', id: 'watch' },
          //     { name: 'Wallets', id: 'wallet' },
          //     { name: 'Bags', id: 'bag' },
          //     { name: 'Sunglasses', id: 'sunglasse' },
          //     { name: 'Hats', id: 'hat' },
          //     { name: 'Belts', id: 'belt' },
          //   ],
          // },
          // {
          //   id: 'brands',
          //   name: 'Brands',
          //   items: [
          //     { name: 'Full Nelson', id: '#' },
          //     { name: 'My Way', id: '#' },
          //     { name: 'Re-Arranged', id: '#' },
          //     { name: 'Counterfeit', id: '#' },
          //     { name: 'Significant Other', id: '#' },
          //   ],
          // },
        ],
      },
      {
        id: 'men',
        name: 'Men',
        featured: [
          {
            name: 'New Kurtas',
            id: '#',
            href: '/men/clothing/mens_kurta',
            imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20230803/BhMa/64cad752eebac147fca3037c/-473Wx593H-466415291-olive-MODEL.jpg',
            imageAlt: 'kurta',
          },
          {
            name: 'Formal shirts',
            id: '#',
            href: '/men/clothing/shirt',
            imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20231010/3ZZJ/65256e06afa4cf41f5390fe2/-473Wx593H-443012474-darkgreen-MODEL.jpg',
            imageAlt:
              'formal shirts',
          },
          
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Mens Kurtas', id: 'mens_kurta' },
              { name: 'Shirt', id: 'shirt' },
              { name: 'T-Shirts', id: 't-shirts' },
              { name: 'Men Jeans', id: 'men_jeans' },
              { name: 'Sweaters', id: '#' },
              { name: 'Jackets', id: '#' },
              { name: 'Activewear', id: '#' },
              
            ],
          },
          // {
          //   id: 'accessories',
          //   name: 'Accessories',
          //   items: [
          //     { name: 'Watches', id: '#' },
          //     { name: 'Wallets', id: '#' },
          //     { name: 'Bags', id: '#' },
          //     { name: 'Sunglasses', id: '#' },
          //     { name: 'Hats', id: '#' },
          //     { name: 'Belts', id: '#' },
          //   ],
          // },
          // {
          //   id: 'brands',
          //   name: 'Brands',
          //   items: [
          //     { name: 'Re-Arranged', id: '#' },
          //     { name: 'Counterfeit', id: '#' },
          //     { name: 'Full Nelson', id: '#' },
          //     { name: 'My Way', id: '#' },
          //   ],
          // },
        ],
      },
    ],
    pages: [
      { name: 'About us', element:<About/>},
      { name: 'Contact', element:<Contact /> },
    ],
  }