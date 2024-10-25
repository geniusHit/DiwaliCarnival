import React, {useState, useRef} from 'react'
import { RiMenuAddFill } from "react-icons/ri";

const KeyHighlights = () => {
  const keys=useRef()
  const keyBox=useRef()
  const [isHide, setIsHide]=useState(false)
  const hide=()=>{
    if(isHide==false)
    {
      keyBox.current.style="height:50px; width:220px; transition-timing-function:ease-in; transition-duration:.1s; background-color:lightgray; overflow:hidden;"
      setIsHide(!isHide)
    }
    else{
      keyBox.current.style="width:420px; height:483px; transition-timing-function:ease-in; transition-duration:0.1s; background-color:lightgray; overflow:hidden;"
      setIsHide(!isHide)
    }
  }

  return (
    <div style={{width:'100%'}} className='px-sm-5' id='highlights'>
      <h3 className='text-center my-sm-5 text-danger-hover'>Key Highlights</h3>

      <div className='border border-1 border-black keyBox mx-sm-0 mx-auto bg-gray px-2 py-3 rounded-1' ref={keyBox} style={{width:'420px', backgroundColor:'lightgray'}}>
        <span className='fw-semibold' style={{fontSize:'13pt'}}>Table of Contents</span>
        <span className='' style={{float:'right', cursor:'pointer'}} onClick={hide}><RiMenuAddFill /></span>

        <ol className='mt-3' style={{fontSize:'13pt', marginLeft:'-13px'}} ref={keys}>
          <li href="#">Key Highlights of Chandigarh Diwali Carnival 2024</li>
          <a href='#selfie'><li>Captivating Selfie Spots: Strike a Pose!</li></a>
          <a href='#eiffel'><li>Eiffel Tower Experience: A Grand Entry</li></a>
          <a href='#dandiya'><li>Chandigarh Dandiya Nights: Dance Away!</li></a>
          <a href='#jungle'><li>Jungle Park: Adventure Awaits</li></a>
          <a href='#food'><li>Food and Shopping Stalls: Eat, Shop, and Celebrate!</li></a>
          <a href='#ticket'><li>Chandigarh Diwali Carnival Ticket Prices: Fun for Everyone!</li></a>
          <a href='#parking'><li>Parking Fees: Hassle-Free Access</li></a>
          <a href='#miss'><li>Things You Can’t-Miss at Chandigarh Diwali Carnival</li></a>
          <a href='#why'><li>Why You Should Attend Chandigarh Diwali Carnival 2024</li></a>
        </ol>
      </div>

      <div id='selfie' className='mt-5'>
        <h4>Captivating Selfie Spots: Strike a Pose!</h4>
        One of the biggest draws at the Chandigarh Diwali Carnival is its Eiffel Tower replica, which will undoubtedly be the star attraction for selfie lovers! Whether you’re a social media enthusiast or just looking for a fun snap, this spot is perfect for adding that Parisian charm to your feed. Beyond the Eiffel Tower, the carnival will be filled with various Instagram-worthy selfie points—so don’t forget your cameras!
      </div>

      <div id='eiffel' className=''>
        <h4>Eiffel Tower Experience: A Grand Entry</h4>
        As soon as you enter the carnival, you’ll be greeted by the jaw-dropping Eiffel Tower installation. This glittering, larger-than-life structure offers an immersive experience, transporting you to the romantic streets of Paris right here in Dussehra Mela Chandigarh 2024! Be sure to take in its grandeur and click tons of pictures.
      </div>

      <div id='dandiya' className=''>
        <h4>Chandigarh Dandiya Nights: Dance Away!</h4>
        Navratri will be extra special this year with the Dandiya Nights Chandigarh 2024 at the carnival. Whether you’re a seasoned Garba dancer or a newbie, the energetic atmosphere filled with foot-tapping music, colorful outfits, and vibrant lights will make you groove your heart out. Don’t miss this chance to enjoy a traditional Dandiya celebration in Chandigarh with a modern twist!
      </div>

      <div id='jungle' className=''>
        <h4>Jungle Park: Adventure Awaits</h4>
        If you’re up for a little adventure, explore the Jungle Park at the carnival. This section is perfect for kids and adults alike, offering jungle-themed fun that takes you on a wild and exciting journey. With thrilling setups, interactive games, and a park-like ambiance, it’s a refreshing escape into nature right within the bustling carnival.
      </div>

      <div id='food' className=''>
        <h4>Food and Shopping Stalls: Eat, Shop, and Celebrate!</h4>
        Festivals and food go hand in hand, and the Chandigarh Diwali Carnival 2024 will be no different! The food stalls here will offer a variety of delicious cuisines to satisfy your cravings—from local street food favorites to global delights. And while you’re here, don’t forget to explore the shopping stalls offering an assortment of Dussehra Mela Chandigarh 2024 items, fashion accessories, home decor, handicrafts, and Diwali essentials. Many stalls will offer great discounts, so you can shop guilt-free,
      </div>

      <div id='ticket' className=''>
        <h4>Chandigarh Diwali Carnival Ticket Prices: Fun for Everyone!</h4>
        The carnival isn’t just about shopping and food—there are plenty of rides and games for visitors of all ages. From thrilling amusement rides to traditional fairground games, there’s something for everyone. Kids will especially love the Haunted House, which offers spooky fun for just ₹50!<br/>

        <table border='1' id='ticketTable'>
          <tr>
            <th>Attraction</th>
            <th>Price (in Rupees)</th>
          </tr>

          <tr>
            <td>Singapore Carnival Entry</td>
            <td>Rs. 50</td>
          </tr>

          <tr>
            <td>Children (Below 3 years)</td>
            <td>Free</td>
          </tr>

          <tr>
            <td>Haunted House</td>
            <td>Rs. 50</td>
          </tr>
        </table>
      </div>

      <div id='parking'>
        <h4>Parking Fees: Hassle-Free Access</h4>
        Attending a large carnival can sometimes be stressful when it comes to parking. But don’t worry—Chandigarh Diwali Carnival has made sure you have convenient parking options. The parking fees are quite reasonable:

        <table border='1' id='parkingTable'>
          <tr>
            <th>Category</th>
            <th>Details</th>
          </tr>

          <tr>
            <td>2 Wheeler</td>
            <td>Rs. 30</td>
          </tr>

          <tr>
            <td>4 Wheeler</td>
            <td>Rs. 50</td>
          </tr>
        </table>
      </div>

      <div id='miss'>
        <h4>Things You Can’t-Miss at Chandigarh Diwali Carnival</h4>
        
        <ul>
          <li><b>Explore the Eiffel Tower: </b>This stunning structure will light up the night and be a crowd favorite. Don’t forget to snap a picture and share it with your friends!</li>

          <li><b>Enjoy Dandiya Nights:</b> Celebrate Navratri with the joy and rhythm of Dandiya. Make sure to bring your colorful attire and energy!</li>

          <li><b>Jungle Park Adventure: </b> For the thrill-seekers, the jungle park is a must-visit with its exciting theme.</li>

          <li><b>Food Fest: </b> Indulge in mouthwatering dishes from various stalls that offer diverse cuisines.</li>

          <li><b>Shop Till You Drop:</b> Get amazing deals and festive discounts across stalls featuring fashion, decor, and more.</li>
        </ul>
      </div>

      <div id='why'>
        <h4>Why You Should Attend Chandigarh Diwali Carnival 2024</h4>

        This carnival isn’t just another event—it’s an immersive celebration of Chandigarh’s culture, mixed with global flavors and traditional festive vibes. The Dussehra & Diwali Shopping Festival Chandigarh is perfect for families, couples, friends, and even solo explorers. Whether you’re a shopaholic, foodie, adventure junkie, or someone who simply loves celebrating festivals in grand style, this carnival offers something for everyone. <br/><br/>

        Incorporating the blend of tradition with modern attractions, such as the Eiffel Tower and Dandiya Nights Chandigarh, makes this carnival a one-of-a-kind experience. Plus, with discounted shopping, exciting rides, and Instagram-worthy selfie spots, you’ll not only take home memories but also festive goodies.
      </div>

      <div id='final'>
        <h4>Final Thoughts</h4>

        The Chandigarh Diwali Carnival 2024 is gearing up to be one of the best Sector 34 Mela of the season! With its extensive lineup of attractions, food, entertainment, and shopping, it’s a must-visit for anyone looking to celebrate Chandigarh Dussehra and Diwali Festival in style. Whether you’re there for the Eiffel Tower experience, Chandigarh Dandiya Nights, or just to soak in the festive spirit, this carnival will leave you with cherished memories.<br/><br/>

        Mark your calendars, grab your tickets, and get ready for a Diwali celebration like no other. Dussehra Mela Chandigarh 2024 is waiting for you to create unforgettable moments with your loved ones!
      </div>
    </div>
  )
}

export default KeyHighlights