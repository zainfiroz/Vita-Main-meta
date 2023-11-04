import React from 'react';
import { Link, useNavigate } from "react-router-dom";

function Exercise() {

    let navigate = useNavigate();

  return (
    <div>
      <header className="class" style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* left box for logo */}
        <div className="left" style={{ position: 'absolute', left: '60px', top: '20px', display: 'inline-block', textDecoration: 'none' }}>
          {/* <button className="btn" onClick={() => navigate("/")}>
            <a href="src\Home\Home.jsx" style={{ textDecoration: 'none' }}>Home</a>
          </button> */}
        </div>
        {/* mid box for navbar */}
        <div className="mid" style={{ display: 'block', width: '53%', margin: 'auto' }}>
          <ul className="navbar" style={{ display: 'inline-block', backgroundColor: 'rgb(24, 133, 205)', borderRadius: '16px', width: '900px', height: '50px', textAlign: 'center', padding: '0px 20px', marginTop: '40px' }}>
            <li><a href="#" style={{ color: 'rgb(126, 217, 231)', textDecoration: 'none', padding: '30px 10px' }}>Yoga is the journey Of the self, To the self, Through the self.</a></li>
          </ul>
        </div>
        {/* right box for buttons */}
      </header>

      <div className="container1" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="contact" style={{ backgroundColor: '#59b7dc', border: '2px solid black', maxWidth: '30%', margin: '60px', borderRadius: '28px', textAlign: 'center', float: 'left', padding: '20px' }}>
          <h2>Contact Us for more on Yoga!</h2>
          <form action="noaction.php">
            <div className="form-group">
              <input type="text" name="" placeholder="Enter your name" style={{ textAlign: 'center', display: 'block', width: '180px', padding: '6px', border: '2px solid rgb(17, 235, 255)', margin: '8px auto', borderRadius: '10px' }} />
            </div>
            <div className="form-group">
              <input type="text" name="" placeholder="Enter your phone number" style={{ textAlign: 'center', display: 'block', width: '180px', padding: '6px', border: '2px solid rgb(17, 235, 255)', margin: '8px auto', borderRadius: '10px' }} />
            </div>
            <div className="form-group">
              <input type="text" name="" placeholder="Enter your area" style={{ textAlign: 'center', display: 'block', width: '180px', padding: '6px', border: '2px solid rgb(17, 235, 255)', margin: '8px auto', borderRadius: '10px' }} />
            </div>
            <button className="btn" style={{ fontFamily: 'Ysabeau Infant, sans-serif', backgroundColor: 'rgb(24, 133, 205)', color: 'white', padding: '4px 14px', height: '50px', width: '100px', border: '2px solid rgb(126, 217, 231)', borderRadius: '16px', fontSize: '18px', cursor: 'pointer', textDecoration: 'none' }}>Submit</button>
          </form>
        </div>
        <div className="introbox" style={{ margin: 'auto', maxWidth: '60%', textAlign: 'center', alignItems: 'flex-end', float: 'right', padding: '20px', paddingRight: '50px', margin: '30px' }}>
          <h1>WHY YOGA?</h1>
          <h2>Yoga is a practice of the mind and body, and it brings about health and happiness benefits through its direct influence on our nervous system. Deep breathing, like the kind cultivated in yoga, activates the vagus nerve, the large branch of nerves that begins at the top of the spinal cord and stimulates activation in the vocal apparatus, muscles that move the head and eyes, heart, respiration, digestive organs, and gut. Elevated vagal tone is good for a host of bodily functions, like digestion and immune function.</h2>
        </div>
      </div>

      <div className="heading" style={{ display: 'inline-block', backgroundColor: 'rgb(24, 133, 205)', borderRadius: '16px', width: '60%', height: '60px', marginTop: '60px', marginLeft: '300px', marginRight: '200px', fontSize: '20px', textAlign: 'right' }}>
        <h1>Three beneficial Yogasanas one must perform daily</h1>
      </div>

    <div className="container2" style={{ display: 'flex', justifyContent: 'space-between', padding: '40px', width: '90%', margin: '30px' }}>
  <div className="desc1">
    <h1>CHAKRAVAKASANA</h1>
    <h2>The Chakravakasana involves moving the spine from a rounded position to an arched one. It is good for relaxation, stretches the back and neck muscles, and facilitates deep inhalation and exhalation. However, one must avoid this pose if they are pregnant or have a knee injury.<br /><br /> Steps:<br /> 1. Get down on your knees, place palms under shoulders and knees under hips.<br /> 2. Inhale, curve your spine to look up.<br /> 3. Exhale, curve your spine to form an arch of the back and allow your neck to drop down.<br /> 4. Focus your gaze towards your chest.</h2>
  </div>
  <img src="chakrasana.jpg" alt="Chakravakasana" style={{ height: '350px', width: '500px', float: 'left' }} />
</div>

<div className="container3" style={{ display: 'flex', justifyContent: 'space-between', padding: '40px', width: '90%', margin: '30px' }}>
  <div className="desc2">
    <h1>BHUJANGASANA</h1>
    <h2>The Bhujangasana is a back bending pose, which is also a part of the Surya Namaskar sequence. It is considered one of the best asanas to get a flat stomach. It helps in strengthening and elongating the stomach. This asana burns unwanted stomach fat as it stretches abdominal muscles. One must avoid this se in case of back injury, carpal tunnel syndrome, headaches or pregnancy.<br /><br /> Steps:<br /> 1. Lie down flat on the floor on your stomach. Stretch your legs back with your toes out on the floor. Spread your palms on the floor under your shoulders and bring the elbows close to the sides of your body. Press the tops of your feet and thighs into the floor.<br /> 2. Inhale as you press your palms into the floor and slowly straighten the arms.<br /> 3. Lift the chest off the floor as much as till your navel. Let your pelvis remain on the floor.<br /> 4. Gently squeeze your buttocks even as you keep pushing your navel down.<br /> 5. Broaden your shoulder blades as you engage them to lift up the chest forward.<br /> 6. Hold the pose anywhere from 15 to 30 seconds inhaling and exhaling.<br /> 7. Release back to the floor with an exhalation.</h2>
  </div>
  <img src="bhujangasan.jpg" alt="Bhujangasana" style={{ height: '350px', width: '500px', float: 'left' }} />
</div>

<div className="container4" style={{ display: 'flex', justifyContent: 'space-between', padding: '40px', width: '90%', margin: '30px' }}>
  <div className="desc3">
    <h1>MALASANA</h1>
    <h2>Malasana, also known as Waste Evacuation pose, is a deep squat where the hip is pushed towards the ground, while grounding the feet and lifting the spine upwards. As for the benefits, it helps open your hips and groin, tones your abdominals, aids in digestion, strengthens your metabolism, and improves pelvic health. Avoid this pose if you have a knee or lower back injury.<br /><br /> Steps:<br /> 1. Starting from a standing position with your arms by your sides, descend your pelvis over your heels by bending your knees.<br /> 2. Make your feet are firmly planted on the ground.<br /> 3. Raise your hands in a prayer position in front of your chest or place them on the floor next to your feet.</h2>
  </div>
  <img src="malasana.png" alt="Chakravakasana" style={{ height: '350px', width: '500px', float: 'left' }} />
</div>

    </div>
  );
}
export default Exercise;



