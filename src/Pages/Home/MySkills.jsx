import data from "../../data/index.json";
import  Box  from "@mui/material/Box";
import Typography  from "@mui/material/Typography";

 const MySkills=()=>{
  return (
    <section className="skills--section" id="mySkills">
      <Box className="portfolio--container">
        <Typography className="section--title">My Skills</Typography>
        <h2 className="skills--section--heading">My Expertise</h2>
      </Box>
      <Box className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <Box key={index} className="skills--section--card">
            <Box className="skills--section--img">
              <img src={item.src} alt="Product Chain" style={{width:'230px'}} />
            </Box>
            <Box className="skills--section--card--content">
              <Typography variant="h3" className="skills--section--title">{item.title}</Typography>
              <Typography className="skills--section--description">{item.description}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </section>
  );
}
export default MySkills
