import  Box  from "@mui/material/Box";
import  Typography  from "@mui/material/Typography";
const HeroSection=()=>{
  return (
    <section id="heroSection" className="hero--section">
      <Box className="hero--section--content--box">
        <Box className="hero--section--content">
          <Typography className="section--title">Hey, I'm Rohit</Typography>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front-End </span>{" "}
            <br />
            Developer
          </h1>
          <Typography className="hero--section-description">
           I am a highly motivated and detail-oriented Front-End Developer with a passion for creating 
           elegant and intuitive user interfaces. Over the past two years</Typography>
        </Box>
        <button className="btn btn-primary">Get In Touch</button>
      </Box>
      <Box className="hero--section--img">
        <img style={{borderRadius:'30px'}} src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=" alt="Hero Section" />
      </Box>
    </section>
  );
}
export default HeroSection;
