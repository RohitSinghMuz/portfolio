import  Typography  from "@mui/material/Typography";
import  Box  from "@mui/material/Box";

const  AboutMe=()=>{
  return (
    <Box>
        <Typography style={{margin:"-30px 100px",fontSize:"25px",fontWeight:'bold'}}>About</Typography>
    <section id="AboutMe" className="about--section">
     
      <Box className="about--section--img">
        <img style={{borderRadius:'30px'}} src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=" alt="Hero Section" />
      </Box>
      <Box className="hero--section--content--box about--section--box">
      
        <Box className="hero--section--content">
          <Typography className="skills-section--heading">About Me</Typography>
          <Typography className="hero--section-description">
           I am a highly motivated and detail-oriented Front-End Developer with a passion for creating 
           elegant and intuitive user interfaces. Over the past two years, I have honed my skills in
            building robust and responsive web applications using React.js. I thrive in collaborative environments and am adept at turning design concepts into pixel-perfect, interactive experiences.
          </Typography>
        </Box>
      </Box>
    </section>
        </Box>
  );
}
export default AboutMe