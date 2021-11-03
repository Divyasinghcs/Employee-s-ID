import React from "react";
import { useLocation } from "react-router-dom";
//get the corresponding data sent from Link state

export default function UserDetail() {
    let params = useLocation();
    const { name, location, email, dob, picture, gender } = params.state.user;

    return (
        <div  style={{ color: 'white' }}>
           
            <h2>
               {name.title} {name.first} {name.last}
            </h2>
            <img src={picture.large} alt={name.first} style= {{border: '5px solid #d15c08'}} />
            <p ><b style= {{fontSize:'18px'}}><u> GENDER: </u> </b> 
            <i style= {{fontSize:'18px'}}>{gender} </i>  </p>
            <p>
               <b style= {{fontSize:'18px',}}><u>AGE:</u> </b>
                <i style= {{fontSize:'18px'}}>{dob.age} </i> 
            </p>
            <p>
                 <b style= {{fontSize:'18px'}}><u>LOCATION: </u></b>
                  </p>
            <p>
                 <b><i> CITY: </i></b> <i style= {{fontSize:'18px'}}>{location.city} </i>,
                  <b> <i>PIN CODE: </i> 
            </b>
             <i style= {{fontSize:'18px'}}>{location.postcode} </i>,
             <b><i>COUNTRY: </i></b>
            <i style= {{fontSize:'18px'}}> {location.country} </i>
            </p>
            <p>
                <b style= {{fontSize:'18px'}}><u>EMAIL ADDRESS: </u></b>
                <i style= {{fontSize:'18px'}}>{email} </i>
                </p>
        </div>
    );
}