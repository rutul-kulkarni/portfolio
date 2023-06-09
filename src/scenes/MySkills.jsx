import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { SKILLS } from "../constants/data";
import { Grid } from "@mui/material";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-8 pb-24">
      <div className="md:flex  md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            The following skills are evident in my portfolio and represent my
            expertise
          </p>
        </motion.div>

        <Grid container spacing={5}>
          {SKILLS.map((skills) => {
            return (
              <Grid item xs={3}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {skills.skill}
                  <figcaption>{skills.name}</figcaption>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </section>
  );
};

export default MySkills;
