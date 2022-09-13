import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Itemdetail from "./Itemdetail";

const Itemdetailcontainer = () => {
    const [item, setItem] = useState({});

    

    useEffect(() => {
        const productos =[
            {"id": 1, "nombre":"Doble Cuarto XL", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BK_WEB_DOBLE-CUARTO-XL_1200X800_020822.png" ,"precio": 900},
            {"id": 2, "nombre":"Bacon King Carne", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Bacon-King-Carne.png" ,"precio": 1000},
            {"id": 3, "nombre":"Stacker XL Triple", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BK_WEB_STACKER-XL-_1200X800_020822.png" ,"precio":1000},
            {"id": 4, "nombre":"Chimiburga Carne", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Chimiburga_Carne.png" ,"precio":900},
            {"id": 5, "nombre":"Doble Napolitano XL", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/DobleNapolitano-XL-1.png" ,"precio":900},
            {"id": 6, "nombre":"Wow Camole", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/WowCamole_carne_300322.png" ,"precio":900}
        ];

        const getProductos = new Promise((resolve) => {
            const producto = productos.find((product) =>product.id === 1);
            setTimeout(() => {
                resolve(producto);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItem(respuesta);
        });
    }, []);

    return (
        <div className="pt-5">
            <Itemdetail item={item} />
        </div>
    )
}

export default Itemdetailcontainer;