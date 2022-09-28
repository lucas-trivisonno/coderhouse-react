import React from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Itemlist from "./Itemlist";

const Itemlistcontainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const queryItems = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(queryItems).then((snapShot) => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
                
            }
        });
    }, [id]);

    return (
        <div className="container fondo-amarillo">
           <Itemlist items={items} />
        </div>
    )
}

export default Itemlistcontainer;