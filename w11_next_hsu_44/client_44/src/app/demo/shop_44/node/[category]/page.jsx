'use client';

import {useState, useEffect} from 'react';
import {useParams} from 'next/navigation';
import Product_44  from '@/components/midterm/Product_44';

import Wrapper from '@/assets/wrappers/midterm/Shop_44';

const FetchShopByCategory_44 = () => {
  const [shop_44, setShop_44] = useState([]);
  const params = useParams();
  const category = params.category;
  console.log('category',category);
  
  const fetchShopFromNode = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/shop_44/${category}`);
      const data =await response.json();
      console.log('shop_44 data', data);
      if(data.length !== 0) {
        setShop_44(data);
      }
}
catch (err) {
  console.log(err);
}
  };

  useEffect(()=>{
    fetchShopFromNode();
  },[]);

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h3>FetchShopByCategory_44</h3>
          <h4 className='text-center text-[16px]'> Hsu 213410144</h4>
        </div>
        <div className='collection-page'>
          <h1 className='title'>{category}</h1>
          <div className='items'>
            {shop_44?.map((item) => {
              const {pid, pname, price, img_url} = item;
              return (<Product_44 
              key={pid}
              img_url={img_url}
              pname={pname}
              price={price}
              />
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FetchShopByCategory_44;