import { useContext } from "react";
import './CSS/ShopCategory.css'
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from '../components/Assets/dropdown_icon.png';
import Item from "../components/Item/Item";



const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  // console.log("props.category", props.category)
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" style={{ width: '1340px' }}/>
      <div className="shopCategory-indexSort">
        <p>
          <span> Showing 1 to 12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropdown_icon} alt=""/>
        </div>
      </div>
      <div className="shopCategory-products">
      {all_product && all_product.length > 0 && all_product.map((item, i)=> {
        console.log("item data", item.category)
        if (props.category === item.category) {
          return <Item 
          key={i} 
          id={item.id} 
          name= {item.name} 
          image= {item.image} 
          new_price={item.new_price} 
          old_price={item.old_price}/>
        }
        else {
          return null;
        }
      })}
      </div>
      <div className="shopCategory-loadMore">
        Explore More 
      </div>
    </div>
  )
}

export default ShopCategory;