import React from 'react';
import logo from '../img/CIS orange.png'
import Nav from './Nav';


const Header=()=>{
    return(
        <>
        <header className="container-fluid nav_style mx-auto">
	<div className="row">
		<div className="col-md-10 col-11 mx-auto">
    <Nav/>
    

			
		</div>
		
	</div>
</header>


        </>

    );
}
export default Header;