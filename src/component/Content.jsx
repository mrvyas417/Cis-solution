import React from 'react';
import mian from '../img/mian.png';
import Button from '@material-ui/core/Button';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';


const Content =()=>{
    return(
        <>
        <div className="container-fluid">
	<div className="row">
		<div className="col-11 col-md-10 mx-auto">
			<div className="row">
				<div className="col-md-6 col-11 order-2 order-md-1">
					<p className="header_text 	">hi dear,
						<br/>
						cis solution CEO<span className="span_header_text"> Deepak acharya</span>
						<br/>
						 since <span className="span_header_text"> 2015 </span>
					
					</p>
					<p className="header_text2">
						we are best<br/>
						<span className="span_header_text">CIS Solution</span>
						
					</p>
					<div className="d-flex justify-content-around align-items-center">
					<div className="">
	<Button class="hire_me">   <DoneOutlineIcon/> Hire us</Button>  
					</div>
					<div className="">
						<Button 
     class="about_me"> <PermIdentityIcon/> contact us</Button>  
					</div></div>
					<div className="text-center header_mail">
						<p className="font-weight-bold header_mail_para">
							Email 
						</p>

						<p > 
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=cisolution.bkn@gmail.com" 
                        target="_blank" style={{ color:" #ff7230", textDecoration:"none"}}>cisolution.bkn@gmail.com</a></p>
						
					</div>
				</div>
				
				<div className="col-md-6 col-11 order-md-2 order-1">
					<div className="float-right">
						<figure>
							<img src={mian} class="img-fluid "/>
						</figure>
						
					</div>
				</div>
			</div>
			
		</div>
		
	</div>
	
</div>

        </>
    )

}
export default Content;