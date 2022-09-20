import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Itemdetail from "./Itemdetail";

const Itemdetailcontainer = () => {
    const [item, setItem] = useState({});
    const{id}= useParams();
    

    useEffect(() => {
        const productos =[
            {"id": 1, "nombre":"Doble Cuarto XL", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BK_WEB_DOBLE-CUARTO-XL_1200X800_020822.png","descripcion":"Dos carnes a la parrilla, pan, queso cheddar, cebolla, mostaza y ketchup." ,"precio": 900},
            {"id": 2, "nombre":"Bacon King Carne", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Bacon-King-Carne.png","descripcion":"Dos medallones de carne, pan, queso cheddar, panceta, ketchup y mostaza.  " ,"precio": 1000},
            {"id": 3, "nombre":"Stacker XL Triple", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BK_WEB_STACKER-XL-_1200X800_020822.png","descripcion":"Tres carnes a la parrilla, salsa stacker, pan, queso cheddar, panceta" ,"precio":1000},
            {"id": 4, "nombre":"Chimiburga Carne", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Chimiburga_Carne.png","descripcion":"Disfrutá esta tremenda hamburguesa con pan, tomate, cebolla, lechuga, mayonesa y el protagonista: CHIMICHURRI. Y sí, la podés pedir en versión vegetal."
            ,"precio":900},
            {"id": 5, "nombre":"Doble Napolitano XL", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/DobleNapolitano-XL-1.png","descripcion":"La combinación de siempre, ahora duplicada: 2 carnes a la parrilla + jamón y queso + tomate + mayonesa."
             ,"precio":900},
            {"id": 6, "nombre":"Wow Camole", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/WowCamole_carne_300322.png","descripcion":"Una combinación de carne a la parrilla, queso pategrás, tomate, cebolla, rúcula, guacamole y mayonesa con pan de quínoa que te va a dejar sin palabras." ,"precio":900}
        ];

        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos.find(producto => producto.id === parseInt(id)) || []);
            }, 1000);
        });

        getProductos.then((respuesta) => {
            setItem(respuesta);
        });
    }, [id]);
    return (
        <div className="pt-5">
            <Itemdetail item={item} />
        </div>
    )
}

export default Itemdetailcontainer;