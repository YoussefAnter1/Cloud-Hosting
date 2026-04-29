import { TiTick } from "react-icons/ti";
import ImageCloud from "../../../public/cloud-hosting.png";
import Image from "next/image";
import styles from "./hero.module.css";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroLeft}>
        <h1 className={styles.title}>Cloud Hosting</h1>
        <p className={styles.description}>
          The best web hosting solution for your online success
        </p>
        <div className={styles.services}>
          <div className={styles.serviceItem}>
            <TiTick /> Easy To Use Control Panel
          </div>
          <div className={styles.serviceItem}>
            <TiTick /> secure Hosting
          </div>
          <div className={styles.serviceItem}>
            <TiTick /> website Maintenance
          </div>
        </div>
      </div>
      <div className={styles.heroRight}>
        <Image src={ImageCloud} alt="image1" width={300} height={300} preload />
      </div>
    </div>
  );
};

export default Hero;
