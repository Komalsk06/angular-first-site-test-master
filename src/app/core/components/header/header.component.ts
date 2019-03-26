import { Component, OnInit } from '@angular/core';
import { submenuService } from './submenu.service';

@Component({
  selector: 'app-header',
  template: `

  <div id="page-container">

          <div id="top-header">
          
          
			<div class="container clearfix">

			
				<div id="et-info">
									<span id="et-info-phone">+91-735-007-0755</span>
				
									<a href="mailto:info@kausalvikash.in"><span id="et-info-email">info@kausalvikash.in</span></a>
				
								</div> <!-- #et-info -->

			
				<div id="et-secondary-menu">
                </div> <!-- #et-secondary-menu -->
            
			</div> <!-- .container -->
		</div> <!-- #top-header -->
    <nav class="navbar is-dark">

      <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item">
          <img href="https://www.kausalvikash.in/" src="/assets/img/Emergenteck-Kausal-Vikash.png" alt="Kausal Vikash" style="width:150px;">
        </a>
      </div>
      
     

      <!-- menu -->
      <div class="navbar-menu" data-height-onload="670">>
        <div class="navbar-start">
          <a class="navbar-item" routerLink="">{{home}}</a>
          <a class="navbar-item" routerLink="contact">{{contact}}</a>
          <a class="navbar-item" routerLink="users">{{users}}</a>
          <!--li-->
          <div class="dropdown">
            <a class="navbar-link" routerlink="Training">{{training}}</a>
            <div class = "dropdown-content">
              <ul>
                <li *ngFor = "let menu of submenu">
                  <a>{{menu.name}}</a>
                </li>
              </ul>
            </div>
          </div>
         <!--/li-->
        </div>
      </div>
    </nav>
    
  `,
  styles: [`  
  .navbar-menu{
  position:absolute;
  top:5pt;
  right:70pt;
  }
  

  .dropdown-content {
    display: none;
    position: absolute;
    top: 52px;
    background-color: #f1f1f1;
    min-width: 260px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  .dropdown-content a {
    color: black;
    padding: 10px 5px;
    text-decoration: none;
    display: block;
  }
  
  .dropdown-content a:hover {background-color: #ddd;}
  
  .dropdown:hover .dropdown-content {display: block;}
  
  .dropdown:hover .dropbtn {background-color: #3e8e41;}`]
})
export class HeaderComponent implements OnInit {
  submenu: any[];
  
  constructor(private submenuService: submenuService) {}


  ngOnInit() {
  //   this.submenuService.getSubMenu().subscribe((menus) => {
  //     this.submenu = menus;
  // });
    this.submenu = this.submenuService.getSubMenu();
    console.log(this.submenu);
    //  this.l1 = this.submenu.name;
    //  this.l2 = this.submenu.name;
    //  this.l3 = this.submenu.name;
    //  this.l4 = this.submenu.name;
    //  this.l5 = this.submenu.name;
    //  this.l6 = this.submenu.name;
    //  this.l7 = this.submenu.name;

    // <!--li class="submenu-item"><a href="https://www.kausalvikash.in/automation-anywhere-training-pune/">{{l2}}</a></li>
    //               <li class="submenu-item"><a href="https://www.kausalvikash.in/blue-prism-training-pune-mumbai/">{{l3}}</a></li>
    //               <li class="submenu-item"><a href="https://www.kausalvikash.in/course-uipath-training-in-pune-delhi-noida/">{{l4}}</a></li>
    //               <li class="submenu-item"><a href="https://www.kausalvikash.in/rpa-cognitive-for-strategic-management-training-india/">{{l5}}</a></li>
    //               <li class="submenu-item"><a href="https://www.kausalvikash.in/data-science-training-in-pune/">{{l6}}</a></li>
    //               <li class="submenu-item"><a href="https://www.kausalvikash.in/blockchain-training-course-pune-mumbai-delhi/">{{l7}}</a></li-->
  }
  public home="Home"
  public contact="Contact"
  public users="Users"
  public training="Training"
  // public l1= this.l1;
  // public l2= this.l2;
  // public l3=this.l3;
  // public l4=this.l4;
  // public l5=this.l5;
  // public l6=this.l6;
  // public l7=this.l7;

 
  //public l1="RPA Training"
  // public l2="Automation Anywhere Training"
  // public l3="Blue Prism Training"
  // public l4="UiPath Training"
  // public l5="RPA &#038; Cognitive for Strategic Management"
  // public l6="Data Science Training"
  // public l7 ="Blockchain"
}
