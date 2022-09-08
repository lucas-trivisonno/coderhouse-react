import React, { useEffect } from "react";
import { useState } from "react";
import Itemlist from "./Itemlist";



const Itemlistcontainer = () =>{
    const [items, setItems] = useState();
    useEffect(() => {
const productos =[
    {"id": 1, "nombre":"doble cuarto XL", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BK_WEB_DOBLE-CUARTO-XL_1200X800_020822.png" ,"precio": 900},
    {"id": 2, "nombre":"bacon king carne", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Bacon-King-Carne.png" ,"precio": 1000},
    {"id": 3, "nombre":"stacker xl triple", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BK_WEB_STACKER-XL-_1200X800_020822.png" ,"precio":1000},
    {"id": 4, "nombre":"chimiburga carne", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Chimiburga_Carne.png" ,"precio":900},
    {"id": 5, "nombre":"doble napolitano XL", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/DobleNapolitano-XL-1.png" ,"precio":900},
    {"id": 6, "nombre":"wow camole", "imagen":"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/WowCamole_carne_300322.png" ,"precio":900},
];


     const promesa = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(productos);
        }, 2000);
    });
    promesa.then((respuesta) => {
        setItems(respuesta);
    }); 
    
},[]);


    return(
        <div className="container">
         <Itemlist items={items}/>
         
        </div>
    )
}
export default Itemlistcontainer;