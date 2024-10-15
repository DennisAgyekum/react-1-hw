import styles from "./page.module.css";

const valueFields = [
  {
    heading: "1",
    coreValues: "Exploration",
    description:
      "We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the boundaries of what is possible.",
  },
  {
    heading: "2",
    coreValues: "Innovation",
    description:
      "At Galactica, we prioritize cutting-edge technology and innovation. We are constantly evolving our spacecraft, safety protocols, and services to ensure that our travelers experience the most advanced and secure space journeys available.",
  },
  {
    heading: "3",
    coreValues: "Sustainability",
    description:
      "We are committed to making space exploration sustainable for future generations. Our space missions are designed to minimize environmental impact, both on Earth and in space, and to foster a spirit of responsibility towards our universe.",
  },
  {
    heading: "4",
    coreValues: "Community",
    description:
      "We believe in the power of collective exploration. Our journeys are not just about reaching new destinations; they are about building a community of space enthusiasts who share a passion for the stars.",
  },
];

export default function OurValues() {
  return (
    <>
      <div className={styles.valueContainer}>
        {valueFields.map((value, index) => (
          <div className={styles.value} key={index}>
            <div className={styles.valueItems}>
              <div>
                <h1 className={styles.valueTitle}>{value.heading}</h1>
              </div>
              <div>
                <h2 className={styles.ourValues}>{value.coreValues}</h2>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
