import React from "react"
import {Link, useParams} from "react-router-dom"
import "./item.css"
import './item-category.css'

const Item = ({item}) => {

    const {categoryId} = useParams()

    let previousPrice = item?.price+(item?.sale/100)*item?.price

    const stockItem = item?.stock

    if(categoryId === undefined){
        
        return(
            <Link className="item-link" to={stockItem? `/item/${item.id}`:'#'}>
                <article className="item">
                    <img className="item__img" src={item.pictureUrl} alt={item.title}/>
                    <div className="price">
                        <span className="item__previous-price">$ {previousPrice}</span>
                        <span className="item__price">$ {item.price}</span>
                        <span className="item__sale">12% OFF</span>
                        {stockItem? null: <span className='item__nostock'>No disponible</span>}
                    </div>
                    <h3 className="item__title">{item.title}</h3>
                </article>
            </Link>
        )
    }return(
        <Link className="item-link--2" to={stockItem?`/item/${item.id}`:'#'}>
            <article className="item--2">
                <img className="item__img--2" src={item.pictureUrl} alt={item.title}/>
                <h3 className="item__title--2">{item.title}</h3>
                <div className="price--2">
                    <span className="item__previous-price--2">$ {previousPrice}</span>
                    <span className="item__price--2">$ {item.price}</span>
                    <span className="item__sale--2">12% OFF</span>
                    {stockItem?null: <span className='item__nostock--2'>No disponible</span>}
                </div>
            </article>
        </Link>
                
    )
}
 export default Item