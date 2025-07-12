import HomeContent1 from "./content1/HomeContent1";
import HomeContent2 from "./content2/HomeContent2";
import HomeContent3 from "./content3/HomeContent3";
import HomeContent4 from "./content4/HomeContent4";
import style from "./Home.module.css";

function Home() {
  return (
    <main className={style.main}>
      <HomeContent1 />
      <HomeContent4 />
      <HomeContent3 />
      <HomeContent2 />
    </main>
  );
}

export default Home;
