import { TiTick } from "react-icons/ti";
import ImageCloud from "../../../public/cloud-hosting.png"; // TODO: replace image with blog-themed asset
import Image from "next/image";
import styles from "./hero.module.css";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroLeft}>
        <h1 className={styles.title}>MonoBlog</h1>
        <p className={styles.description}>
          Your space to read, write, and share ideas with the world
        </p>
        <div className={styles.services}>
          <div className={styles.serviceItem}>
            <TiTick /> Create & Publish Articles
          </div>
          <div className={styles.serviceItem}>
            <TiTick /> Engage Through Comments
          </div>
          <div className={styles.serviceItem}>
            <TiTick /> Powerful Admin Dashboard
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
