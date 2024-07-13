import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {
    let data = useCart();
    let navigate = useNavigate();
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");
    const priceRef = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options);
    let foodItem = props.item;
    const dispatch = useDispatchCart();
  
    const handleClick = () => {
        if (!localStorage.getItem("token")) {
            navigate("/login");
        }
    };
  
    const handleQty = (e) => {
        setQty(e.target.value);
    };
  
    const handleOptions = (e) => {
        setSize(e.target.value);
    };
  
    const handleAddToCart = async () => {
        const existingFood = data.find(item => item.id === foodItem._id && item.size === size);

        if (existingFood) {
            // If the same item with the same size already exists in the cart, update its quantity
            const newQty = existingFood.qty + qty;
            await dispatch({ type: "UPDATE", id: foodItem._id, size: size, qty: newQty });
        } else {
            // If the item doesn't exist in the cart, add it
            await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size });
        }
    };
  
    useEffect(() => {
        setSize(priceRef.current.value);
    }, []);
  
    let finalPrice = qty * parseInt(options[size]);
  
    return (
        <div className="card-container" style={{ transition: '0.3s' }}>
            <div className="card mt-3" style={{ backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0.5)', transition: 'box-shadow 0.3s ease' }} onMouseOver={() => {}} onMouseOut={() => {}}>
                <img src={props.ImgSrc} className="card-img-top" alt="..." style={{ height: '200px', marginBottom: '20px', transition: '0.4s', transform: 'scale(1)', cursor: 'pointer' }} 
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div className="card-body" style={{ color: '#000' }}>
                    <h5 className="card-title">{props.foodName}</h5>
                    <div className="container w-100 p-0" style={{ height: '38px' }}>
                        <select className="m-2 h-100 w-20" style={{ backgroundColor: '#fff', color: '#000', border: '1px solid #000' }} onClick={handleClick} onChange={handleQty}>
                            {Array.from(Array(6), (e, i) => {
                                return <option key={i + 1} value={i + 1}>{i + 1}</option>;
                            })}
                        </select>
                        <select className="m-2 h-100 w-20" ref={priceRef} style={{ backgroundColor: '#fff', color: '#000', border: '1px solid #000' }} onClick={handleClick} onChange={handleOptions}>
                            {priceOptions.map((i) => {
                                return <option key={i} value={i}>{i}</option>;
                            })}
                        </select>
                        <div className='d-inline ms-2 h-100 w-20 fs-5'>₹{finalPrice}/-</div>
                    </div>
                    <hr />
                    <button className="btn" style={{ backgroundColor: '#ffc107', color: '#fff', border: 'none', padding: '0.375rem 0.75rem', borderRadius: '0.25rem' }} onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}
