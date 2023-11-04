import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StyleHome from "./home.module.css";

export default function HomePage() {
  const [card, setCard] = useState(0);
  const navigate = useNavigate();
  const [login, setlogin] = useState(false);
  const userID = localStorage.getItem("fitUserID");
  useEffect(() => {
    if (userID) {
      setlogin(true);
      navigate("/home");
    }
  }, [userID]);
  return (
    <Box>
      {/* GOOD HEALTH DIV START HERE */}
      <Box className={StyleHome.goodhealthdiv}>
        <div className={StyleHome.gooddiv2}>
          <h1 className={StyleHome.goodh1}>
            VitaCompass: "Fuel Your Life, One Nutrient at a Time"
          </h1>
          <p className={StyleHome.goodp11}>
            {" "}
            Want to eat more mindfully? Track meals, learn about your habits,
            and reach your goals with VitaCompass.
          </p>
          <Link to={"/signup1"}>
            <button className={StyleHome.goodbutton}>SIGN UP NOW!</button>
          </Link>
        </div>
        <div className={StyleHome.goodimgdiv}>
          <img
            className={StyleHome.goodimg}
            src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-slice%402x.e3eec8a8.png&w=1920&q=75"
            alt="Food img"
          />
        </div>
      </Box>

      {/* LOG FROM OVER START HERE */}

      <div className={StyleHome.logdiv}>
        <div className={StyleHome.logimgdiv}>
          <img
            className={StyleHome.logimg}
            src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fsecondary-hero-slice%402x.png&w=512&q=75"
            alt="BLUEBERRIES IMG"
          />
        </div>
        <div className={StyleHome.logdiv2}>
          <h1 className={StyleHome.logh1}>Log from over 14 million foods.</h1>
          <p className={StyleHome.p1}>
            See a breakdown of calories and nutrients, compare serving sizes,
            and discover how the food you eat supports your goals.
          </p>
        </div>
      </div>

      {/* the tools start here */}

      <div className={StyleHome.toolsdiv}>
        <h1 className={StyleHome.toolsh1}>The Tools for Your Goals</h1>
        <p className={StyleHome.toolsp1}>
          Trying to lose weight, tone up, lower your BMI, or invest in your
          overall health? We give you the right features to get there.
        </p>
      </div>

      <div className={StyleHome.toolsgriddiv}>
        <div className={StyleHome.toolsgrid1}>
          <div className={StyleHome.toolsimgdiv}>
            <img
              className={StyleHome.toolsimg}
              src="https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg"
              alt="learn track"
            />
          </div>
          <h4 className={StyleHome.toolsh4}>Learn. Track. Improve.</h4>
          <p className={StyleHome.toolsgridp1}>
            Keeping a food diary helps you understand your habits and increases
            your likelihood of hitting your goals.
          </p>
        </div>
        <div className={StyleHome.toolsgrid1}>
          <div className={StyleHome.toolsimgdiv}>
            <img
              className={StyleHome.toolsimg}
              src="https://www.myfitnesspal.com/_next/static/media/barcode.18277ae4.svg"
              alt="learn track"
            />
          </div>
          <h4 className={StyleHome.toolsh4}>Logging Simplified.</h4>
          <p className={StyleHome.toolsgridp1}>
            Scan barcodes, save meals and recipes, and use Quick Tools for fast
            and easy food tracking.
          </p>
        </div>
        <div className={StyleHome.toolsgrid1}>
          <div className={StyleHome.toolsimgdiv}>
            <img
              className={StyleHome.toolsimg}
              src="https://www.myfitnesspal.com/_next/static/media/shoeblue.28e2684f.svg"
              alt="learn track"
            />
          </div>
          <h4 className={StyleHome.toolsh4}>Stay Motivated.</h4>
          <p className={StyleHome.toolsgridp1}>
            Join the World’s Largest Fitness Community for advice, tips, and
            support 24/7.
          </p>
        </div>
      </div>
   
        </Box>
  );
}  
 