import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchReciepts = createAsyncThunk(
  'receipts/fetchReciepts',
  async () => {
    return [
      {
        id: 1,
        name: 'Wireless Bluetooth Headphones',
        brand: 'Sony',
        price: 129.99,
        description:
          'Enjoy high-quality sound and freedom of movement with these wireless Bluetooth headphones from Sony.',
        image_url:
          'data:image/jpeg;base64,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uAmpmOtduzhl9ys/o6LzftO96CRbIo6/R0Xm/ad70/RsPmfad70EiJiHH2qO/wBGw+Z9p3vQaOi8z7TvegkPGOI8Qq863zh6wUeigi832u96yGsAAAFgMgEHetqoxtkYPS9vvWVBpSnbtnj+saT7FHjVfiQSbDrNSM/1C48GRyH22t7ViaQ1zaRaKE+mZwbb91pN/ELioVdkOSDH0zpGWY/COuL9VowsHdv77qTOROlznk4RtZ6zr/8ABRPNm4DtU9clFBzVAHkZzSOcPot6I9ocg7RERQEREBERAREQEREEYctOhi6OKraOr8FJlsGZYf5h3hRDSPsbL6k0nQx1EMkEovHKwtdxz3jtG0ehfN2tmgJtHVLopBl1o3gdGRm5w/Ebig8h2Sxpl5hnuElcqMZ6tFe3lWyUBFS6XQVRUuqXQekVLpdBVVXm6rdB7ar8SxwVejcgz4lSd+SttksFi1M98ggydDUT6mojiYLufI1rR2k28F9OaNo2wQxQs6sUbWDtsLX79qjzkk1OdA0VtQ20j2/AMcLOYw7XkbiRs7L8cpMUBERAREQEREBERAREQFqtY9X6evhMNQy42se2wkjd5zDuPsO9bVEHzzrXyeV1AXPjaammGYlibdzR8+MZj0i47QuP8oX1sue05qTo6sJdNSs5x22WO8MpPEuZbF33QfM7pV5xqZtI8idO65p6ySLgJo2TtHhgPtWkm5E6wdSshf8ASjlj+7EqIzxpjUgScjWkxslpT/FnH/WrZ5HdLedS/wC4m/KQcHjTGu7/APjulvOpf9xN+Uqjkc0t51L9fN+Ug4PGmNd8ORvSvn0v1835S9Dka0p8bSj+LP8AloI/xpjUis5F9I76imHodOf+Cvx8idYetWQt+jHK/wByCNBIvbZlLFFyIAH4fSBcOENMIz6znu+5dPorkp0VAQXRvqXDfUSFze9jbNPeCgg/RWjqqsfzdLC+Z2/AOi36Tj0W95CmDUfkujpi2orSJpwQ5kTc4IzuJv13ewduRUh0lJFCwRxRtijbsZGxrGD0NGQV5QEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/9k=',
        status: 'PENDING',
      },
      {
        id: 2,
        name: 'Smartwatch with GPS and Heart Rate Monitor',
        brand: 'Samsung',
        price: 279.99,
        description:
          'Track your fitness goals and stay connected with this smartwatch from Samsung, featuring GPS and a heart rate monitor.',
        image_url:
          'data:image/jpeg;base64,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',
        status: 'PENDING',
      },
      {
        id: 3,
        name: 'Electric Toothbrush with Bluetooth Connectivity',
        brand: 'Philips',
        price: 89.99,
        description:
          'Take your dental hygiene to the next level with this electric toothbrush from Philips, which features Bluetooth connectivity and personalized brushing coaching.',
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSRlgT9_31e4EIaash5Sg0qYgDQs6lxQ8mGg&usqp=CAU',
        status: 'PENDING',
      },
      {
        id: 4,
        name: 'Portable Bluetooth Speaker',
        brand: 'JBL',
        price: 49.99,
        description:
          'Enjoy your music on the go with this portable Bluetooth speaker from JBL, which features a rechargeable battery and water-resistant design.',
        image_url:
          'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-siteCatalog_JB_US_Imported/default/dw0c3ec204/categoryimage/Charge5.jpg?sw=800&sh=400',
        status: 'PENDING',
      },
      {
        id: 5,
        name: 'Wireless Charging Pad',
        brand: 'Belkin',
        price: 29.99,
        description:
          'Charge your compatible devices without the hassle of cords with this wireless charging pad from Belkin.',
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp9msP2--lWXT_M2zUuAGOReBMpKK0fTjZUA&usqp=CAU',
        status: 'PENDING',
      },
    ];
  },
);