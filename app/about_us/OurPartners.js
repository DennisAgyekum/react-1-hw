import styles from "./page.module.css";

const partners = [
  {
    companyName: "Alphabet",
    logoUrl: "./business_partners/alphabet-logo.png",
  },
  {
    companyName: "Amazon",
    logoUrl: "./business_partners/amazon_logo.png",
  },
  {
    companyName: "CBC",
    logoUrl: "./business_partners/CBC_Logo_White.png",
  },
  {
    companyName: "Microsoft",
    logoUrl: "./business_partners/Microsoft-Logo-white.png",
  },
  {
    companyName: "NYU",
    logoUrl: "./business_partners/nyu-logo.png",
  },
  {
    companyName: "Queens",
    logoUrl: "./business_partners/QueensLogo_white.png",
  },
  {
    companyName: "Samsung",
    logoUrl: "./business_partners/samsung-logo.png",
  },
  {
    companyName: "Sodexo",
    logoUrl: "./business_partners/sodexo-logo.png",
  },
];

export default function OurPartners() {
    return (
      <>
        <h3 className={styles.heading}>We collaborate with some of the most respected names in the space and technology industries to make every journey extraordinary.</h3>
        <div className={styles.logoContainer}>
          {
          partners.map((partner) => (
            <div className={styles.logoDiv} key={partner.companyName}>
              <img src={partner.logoUrl} alt={`logo of ${partner.companyName}`} className={styles.logoImage} />
            </div>
          ))}
        </div>
      </>
    );
  }