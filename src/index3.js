import React, { useEffect , useRef} from "react";
import {BsFillBagCheckFill , BsFillCreditCardFill} from "react-icons/bs"
import Aos from "aos";
import "aos/dist/aos.css"

const Index3 = () => {

  useEffect(() => {
    Aos.init({duration:2000});
  })
  
  const Remove = useRef(null)


  const Run = () => {
   Remove.current.style.display = "none"
  }

  
  const Run2 = () => {
    Remove.current.style.display = "block"
   }




  return(
    <main className="main">

      <section className="main-section">

        <section  ref={Remove} className="pop-up"> 
        <div style={{marginTop: '1rem' , display: "flex", alignItems: "center", }} className="first-section__h2-holder">
             <h2  style={{marginRight: "auto"}} className="first-section__h2">Housing in Lagos</h2>
               <div  onClick={Run} style={{  cursor: "pointer"  ,fontSize: "4rem", marginTop: ".5rem", marginRight: "6.8rem"}} className="first-section__times">&times;</div>
         </div>
               
   
       <div className="pop-up__holder">

       <ul className="pop-up__ul">
              <li className="pop-up__li"><a className="first-section__link1" href="#set1">  home  </a>  </li>
              <li className="pop-up__li"><a className="first-section__link1" href="#set2">  service  </a> </li>
              
              <li className="pop-up__li"><a className="first-section__link1" href="#set3">  agent  </a> </li>
              <li className="pop-up__li"><a className="first-section__link1" href="#set4">  gallary  </a> </li>

            </ul>


       </div>
           
        </section>


      <section className="first-section" id="set1">
      <header className="first-section__part1">

        <div className="first-section__part1-holder">
             <div className="first-section__h2-holder">
             <h2 className="first-section__h2"> <a className="first-section__link1" href="#set1">  Housing in Lagos  </a>     </h2>

             </div>
            
            
            <ul style={{marginRight: "5rem"}} className="first-section__ul">
              <li className="first-section__li1"> <a className="first-section__link1" href="#set1">  home  </a>  </li>
              <li className="first-section__li1">   <a className="first-section__link1" href="#set2">  service  </a>   </li>
              <li className="first-section__li1">   <a className="first-section__link1" href="#set3">   agent  </a></li>
              <li  className="first-section__li2">   <a className="first-section__link1" href="#set4">  gallary  </a> </li>
             
            </ul>
            <div onClick={Run2} style={{marginRight: "3rem"}} className="first-section__line"></div>


        </div>

      </header>

      <section className="first-section__part2">

        <div data-aos = "fade-down" className="first-section__part2-holder">
           <h2 className="first-section__part2-h2">

           Housing in Lagos

           </h2>
           <p  data-aos = "fade-right" className="first-section__part2-p">
           ...connecting agents and tenants around lagos

           </p>

           <button data-aos = "flip-up" className="first-section__button">

             browse home
           </button>


        </div>
        </section> 
    </section>

    <div className="second-section"  id="set2">

      <section className="second-section__holder">

        <div data-aos = "fade-right" className="second-section__part1">

           <section className="second-section__part1-holder">
             <p className="second-section__part1-p">FEATURES</p>
             <h2 className="second-section__part1-h2">   What We Offer    </h2>
             <ul className="second-section__ul">

               <li className="second-section__lli1">


               <BsFillBagCheckFill className="second-section__icon"></BsFillBagCheckFill>       Xclusive Houses On The Mainland

               </li>
               <li className="second-section__lli1">

                 
               <BsFillBagCheckFill className="second-section__icon"></BsFillBagCheckFill>            Houses Close To Event Centres

               </li>
               <li className="second-section__lli1">

                 
               <BsFillBagCheckFill className="second-section__icon"></BsFillBagCheckFill>            Houses Close To Hotels, Markets And Schools

               </li>
               <li className="second-section__lli1">

                 
               <BsFillBagCheckFill className="second-section__icon"></BsFillBagCheckFill>             Xclusive Houses In Lagos

               </li>
               <li className="second-section__lli1">

                 
               <BsFillBagCheckFill className="second-section__icon"></BsFillBagCheckFill>             Xclusive Houses In With Indoor Pool

               </li>
               

             </ul>



           </section>


        </div>

        <div  data-aos = "fade-left" className="second-section__part2">

      
              <img src={"./web-1/house1.jpg"} alt="" className="second-section__img" />
          
        </div>

      </section>


    </div>

    <div className="third-section"  id="set3">

      <section className="third-section__holder">

        <h2 className="third-section__h2">
        HIRING RATES FOR TOP AGENTS

        </h2>

        <h3 className="third-section__sub-h2">

        Receive 30% off first purchase
        </h3>

        <div className="third-section__main">

          <section className="third-section__main-holder">

          <div  data-aos = "flip-left" className="third-section__main-part1">
              <section className="third-section__main-part1-holder">

              <BsFillCreditCardFill className="third-section__main-part1-card"></BsFillCreditCardFill>
              


                <h2 className="third-section__main-part1-h2">

                Basic Plan

                </h2>

                <p className="third-section__main-part1-p">

                Make Use Of Our Basic Access To Get Properties Around
                </p>

                <p className="third-section__main-part1-sub-p">
                Private Properties Tour

                </p>

                <p className="third-section__main-part1-rate">

                200K RETAINER

                </p>
                <button className="third-section__main-part1-button">

                  register
                </button>


              </section>


            </div>

         

            <div data-aos = "flip-right" className="third-section__main-part1">


              <section className="third-section__main-part1-holder">

              <BsFillCreditCardFill className="third-section__main-part1-card"></BsFillCreditCardFill>
              


                <h2 className="third-section__main-part1-h2">

                Elite Plan

                </h2>

                <p className="third-section__main-part1-p">

                Make Use Of Our Full All Access Unlimited Package Avaluable
                </p>

                <p className="third-section__main-part1-sub-p">
                Private Properties Tour

                </p>

                <p className="third-section__main-part1-rate">

                10M NAIRA RETAINER

                </p>
                <button className="third-section__main-part1-button">

                  register
                </button>


              </section>


            </div>
            <div data-aos = "flip-up" className="third-section__main-part1">
              <section className="third-section__main-part1-holder">

              <BsFillCreditCardFill className="third-section__main-part1-card"></BsFillCreditCardFill>
              
              
                <h2 className="third-section__main-part1-h2">

                Premium Plan

                </h2>

                <p className="third-section__main-part1-p">

                Make Use Of Our Exclusive Access To Properties


                </p>
                <p className="third-section__main-part1-sub-p">
                Private Properties Tour

                </p>

                <p className="third-section__main-part1-rate">

                1M NAIRA RETAINER

                </p>
                <button className="third-section__main-part1-button">

                  register
                </button>


              </section>


            </div>

         





          </section>


        </div>


      </section>
    </div>


    <div className="fourth-section" id="set4" >

      <section className="fourth-section__holder">

        <div data-aos = "zoom-in" className="fourth-section__head-holder">

          <h2 className="fourth-section__head">

          GALLERY
          </h2>

        </div>

        <div className="fourth-section__main">

          <section className="fourth-section__main-section">

            <div className="fourth-section__part1">
            <section className ="fourth-section__part1-holder">
            

                <div data-aos = "zoom-in" className="fourth-section__img1"></div>
                <div data-aos = "zoom-in" className="fourth-section__img2"></div>

       
              <div  data-aos = "fade-right" className="fourth-section__part1-sub">
                <h2 className="fourth-section__part1-sub-h2">
   
                COMFORTABLE LOCATIONS

                </h2>
                <p className="fourth-section__part1-sub-p">

                Houses For People Looking To Change Up Locations
                </p>
              </div>

              <div data-aos = "zoom-in" className="fourth-section__img5"></div>
             <div data-aos = "zoom-in" className="fourth-section__img6"></div>
              


</section>


              
              </div>   

              <div className="fourth-section__part2">

                <section className="fourth-section__part2-holder">

                <div data-aos = "fade-left" style={{marginBottom: "5rem"}} className="fourth-section__part1-sub">
                <h2 className="fourth-section__part1-sub-h2">
   
                XCLUSIVE LOCATIONS

                </h2>
                <p className="fourth-section__part1-sub-p">

                Houses For The Elites That Want To Bam Bam In Peace
                </p>
              </div>

              <div data-aos = "zoom-in" className="fourth-section__img3"></div>
              <div data-aos = "zoom-in" className="fourth-section__img4"></div>

              <div data-aos = "zoom-in" className="fourth-section__img7"></div>
                <div data-aos = "zoom-in" className="fourth-section__img8"></div>





                </section>
              
              
              </div>  





          </section>



        </div>

      </section>
    </div>




  








    <div className="fifth-section">



<section className="fifth-section__holder">

  <h2 data-aos = "fade-down" className="fifth-section__h2">

  UNLIMITED ACCESS FOR MEMBERS
  </h2>

  <p data-aos = "fade-up" className="fifth-section__p">
  sign up now and get these benefits
  </p>

  <div className="fifth-section__main">

    <input  data-aos = "slide-left" placeholder="enter email" type="text" className="fifth-section__input" />

    <button  data-aos = "slide-right" className="fifth-section__button">sign up</button>



  </div>

  </section>
  </div>




  <div className="footer">
    <section className="footer__holder">

      <div data-aos = "fade-right" className="footer__part1">

        <h2 className="footer__h2">
        Housing in Lagos
        </h2>
        <p className="footer__p">
        Connecting Agents And Tenantsa Around Lagos
        </p>
        <p className="footer__num">
08071434751

        </p>


      </div>

      <ul data-aos = "fade-up" className="footer__ul">
      <li className="footer__li2">Contact Us</li>
        <li className="footer__li1">Contact</li>
        <li className="footer__li1">Support
</li>
        <li className="footer__li1">Reviews</li>
        

      </ul>
      
      <ul data-aos = "fade-up" className="footer__ul">
      <li className="footer__li2">Elite Members</li>
        <li className="footer__li1">Pricing</li>
        <li className="footer__li1">Stories</li>
        <li className="footer__li1">Pricing</li>
        

      </ul>
      
      <ul data-aos = "slide-left" className="footer__ul">
      <li className="footer__li2">Social Media</li>
        <li className="footer__li1">Twitter</li>
        <li className="footer__li1">Instagram</li>
        <li className="footer__li1">Whatsapp</li>
        <li className="footer__li1">Whatsapp</li>
        <li className="footer__li1">Telegram</li>

      </ul>




    </section>

    <div  className="footer__name"> made by <span className="footer__span"> Patricia-Son</span>   </div>



  </div>







      </section>



    </main>

    
    
    
    
    )






}

export default  Index3;