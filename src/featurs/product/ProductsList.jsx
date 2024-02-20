import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../../components/ProductCard";
import styled from "styled-components";
import { useShowSideBar } from "../../context/ShowSideBar";

const FAKE_DATA = [
  {
    img: "c1.jpg",
    name: "Applied Nutrition Critical Whey Blend",
    category: "whey-protein",
    description:
      "Whey protein was developed using a unique blend of whey protein concentrate, whey protein isolate, and whey hydrolyzed protein. Whey Concentrate Protein is produced using ultra-filtration technology and contains high levels of protein and BCAAs. Whey Protein Isolate is the highest quality protein and is produced using cross-linked microfiltration technology. Whey Hydrolyzed Protein is a pre-conditioned protein that is enzymatically hydrolyzed into peptides to support a healthy lifestyle and diet. Whey Protein provides 21g of cow-derived protein, 4.8g of naturally occurring BCAAs, and 4g of glutamine per serving. Whey protein is certified kosher and makes a delicious blend - just add water or low-fat milk.",
    price: 67,
    isNew: false,
  },
  {
    img: "c2.jpg",
    name: "Eagle Whey 100%",
    category: "whey-protein",
    description:
      "Eagle Whey is not just an ordinary protein; Eagle Whey is your ideal partner in the journey of building muscle and enhancing fitness. Eagle Whey - 100% designed through research, development, and innovation. Eagle Nutrition understands the importance of taste, so they go to great lengths to ensure you're getting the most delicious, delicious protein you've ever tasted. Join the world of vultures by choosing one of our eight delicious flavors.",
    price: 72,
    isNew: false,
  },
  {
    img: "c3.jpg",
    name: "EVP X TREME",
    category: "performance",
    description:
      "Get an unprecedented training experience with EVP Extreme! Are you looking for the perfect way to reach your full potential in exercise? No need to search anymore! EVP Extreme is the secret you've been waiting for to achieve exceptional results. Under the guidance of world-class trainer Hany Rambod, EVP Extreme is your ideal partner on your journey towards improving your physical performance and building your ideal body. This innovative product is not just a workout stimulant but rather a unique experience that combines science and art to achieve unprecedented developments in muscle enlargement and increased strength. What sets EVP Extreme apart is its exceptional formula specially designed to enhance blood flow to the muscles, ensuring the provision of necessary nourishment and oxygen during strenuous exercise. You'll feel a surge of vitality and increased focus, while increasing the strength and intensity of your workouts.",
    price: 27,
    isNew: false,
  },
  {
    img: "c4.jpg",
    name: "Eagle Mass",
    category: "mass-gainer",
    description:
      "Eagle Mass. Designed specifically for muscle-building enthusiasts, it delivers unforgettable weightlifting moments with a powerful 1,128 calories. Be strong: - 1128 calories per serving. - 60 grams of protein to build strong muscles. - 204 grams of carbohydrates to provide the body with sustainable energy. - 4.8 grams of saturated fat to keep your diet balanced. Eagle Mass provides you with excellent sources of protein: - Whey protein formula to build muscle. - Isolated whey protein formula for better absorption. - Hydrolyzed whey protein formula for instant nutrition. - Hydrolyzed casein formula for sustained growth.",
    price: 48,
    isNew: false,
  },
  {
    img: "c5.jpg",
    name: "Eagle Creatine monohydrate",
    category: "performance",
    description:
      "Eagle Creatine is a unique nutritional supplement that increases muscle performance in high-intensity, short-duration resistance exercises. So, make your hard workouts stronger and more confident with Eagle Creatine and do not accept average. Get the best performance in short and intense exercises with Eagle Creatine. Eagle Creatine can make a real difference in performing resistance exercises and repetitive challenges, giving you more strength and endurance and moving to a higher level of fitness and looking great! Get remarkable performance and a strong and distinctive body! Eagle Creatine works to relieve fatigue and exhaustion and increase muscle mass, giving you a unique feeling of superiority and professionalism.",
    price: 25,
    isNew: false,
  },
  {
    img: "c6.jpg",
    name: "Raw nutrition isolate protein",
    category: "whey-protein",
    description:
      "Grass-Fed Whey Protein Powder: RAW Nutrition brings you our grass-fed micro-filtered isolate protein, complete with naturally occurring Branch Chain Amino Acids (BCAA). Each scoop packs 25 grams of protein with 0.5g of total fat and 1 gram of carbohydrates. 2.25 lbs. No Nonsense, All Flavor: We pride ourselves on creating products that perfectly balance the scales of quality and flavor. With our classic Cookies N Cream flavor in your corner, building muscle has never tasted so good. Benefits of Protein: RAW Protein delivers the purest form of protein available, aiding digestion, supporting muscle growth and recovery, and providing a balanced source of amino acids and peptides. The New Standard: This hormone-free, micro-filtered protein powder with zero fillers has been crafted for supreme quality to help you meet your protein needs, recover fast and build lean muscle. Made in the USA. No artificial ingredients, no GMOs, no BS. Built From the Ground Up: RAW Nutrition was created to provide athletes with the best fuel for peak training and performance. Our mission is to make smart nutrition easy and convenient with expertly crafted supplements made with the purest ingredients available in the industry.",
    price: 90,
    isNew: true,
  },
  {
    img: "c7.jpg",
    name: "Eagle VENOM Pre-workout",
    category: "performance",
    description:
      "Do you want to train like a pro, unleash your inner beast, reach a new level of muscle pumping, and leave the gym with a complete feeling of satisfaction? Introducing Eagle Venom, the new era of pre-workouts with 7 Elite ingredients. 2100mg inferno dose of BETA-ALANINE Per Serving. 200mg Caffeine Per Serving. 50 Serving.",
    price: 28,
    isNew: false,
  },
  {
    img: "c8.jpg",
    name: "Raw Essential Pre-workout",
    category: "performance",
    description:
      "This comprehensive pre-workout is perfect for all lifters, from beginner to advanced. Whether it’s your first day in the gym or you’re a seasoned veteran, these high-powered ingredients work the same. Highlighting a few - each scoop packs in a hefty dose of 4g L-Citrulline to maximize blood flow and deliver serious pumps. We've paired this with 3.2g of Beta-Alanine to fight fatigue, enabling you to push the envelope and power through plateaus. Lastly, we've packed in 200mg of Caffeine to hit that sweet spot of stimulating energy to last from the first to last rep of your workout. Anyone who needs a boost physically or mentally to get in the zone can put Essential Pre to use.",
    price: 35,
    isNew: true,
  },
];

function ProductsList() {
  const { showSideBar } = useShowSideBar();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <StyledList>
      <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={1500}>
        {FAKE_DATA.map((product) => (
          <ProductCard product={product} key={product.name} />
        ))}
      </Carousel>
    </StyledList>
  );
}
export default ProductsList;
const StyledList = styled.div`
  width: 100%;
  height: 450px;
  margin: 3rem 0rem;
`;
