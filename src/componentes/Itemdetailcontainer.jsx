import React from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Itemdetail from "./Itemdetail";

const Itemdetailcontainer = () => {
    const [item, setItem] = useState({});
    const{id}= useParams();
    

    useEffect(() => {
        const db = getFirestore();
        const response = doc(db, "items", id);
        getDoc(response).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
               
            }            
        });
    }, [id]);
    return (
        <div className="pt-5">
            <Itemdetail item={item} />
        </div>
    )
}

export default Itemdetailcontainer;