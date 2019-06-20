import React from "react"
import { graphql } from "gatsby"
import Slider from "react-slick";
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import withRoot from '../withRoot';
import EmailIcon from '@material-ui/icons/Email';
import ArrowIcon from '@material-ui/icons/PlayArrow';
import TouchIcon from '@material-ui/icons/TouchApp';
import PhoneIcon from '@material-ui/icons/SpeakerPhone';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Img from "gatsby-image"
import Container from "@material-ui/core/Container"
const settings = {
  infinite: true,
  speed: 500,
  lazyLoad: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  dots: false,
  prevArrow: false,
  nextArrow: false
};
const styles = theme => ({
  section: {
    marginTop: theme.spacing(3)
  },
  toolbar: {
    marginTop: theme.spacing(2)
  },
  button: {
    marginRight: theme.spacing()
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    boxShadow: 'none',
    backgroundColor: '#ffffff00',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  fab: {
    width: 180
  },
  actionContainer: {
    minHeight: '50vh'
  },
  col: {
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
  },
  titleBig: {
    fontSize: '80px',
  },
  titleSmall: {
    fontSize: '20px',
  },
  titleFirst: {
    fontWeight: 900,
    color: '#fff',
    fontFamily:  `-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`
  },
  titleSecond: {
    fontWeight: 900,
    color: '#E95E58',
    fontFamily:  `-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`
  },
  siteTitle: {
    position: 'absolute',
    display: 'flex',
    width: '100vw',
    height: '90vh',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  movingTitle: {
    fontWeight: 700,
    display: "block", width:"100vw", textAlign: "center", position:"fixed", color:"white",
    top: "55%", height:"80px",fontFamily: `-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`,
  },
  movingIcon: {

  }
});
const BlogIndex = ({ classes, data }) => (
  <div>
    <Slider {...settings} style={{width:"100%"}}>
      <div>
        <div>
          <Img fluid={data.imageOne.childImageSharp.fluid} style={{width:"100vw", height: "100vh", objectFit: "cover"}} alt="Play"/>
          <h2 className={classes.movingTitle}>PLAY<ArrowIcon className={classes.movingIcon}/></h2>
        </div>

      </div>
      <div>
        <Img fluid={data.imageTwo.childImageSharp.fluid} style={{width:"100vw", height: "100vh", objectFit: "cover"}} alt="Share"/>
        <h2 className={classes.movingTitle} >SHARE<PhoneIcon className={classes.movingIcon}/></h2>
      </div>
      <div>
        <Img fluid={data.imageThree.childImageSharp.fluid} style={{width:"100vw", height: "100vh", objectFit: "cover"}} alt="Experience"/>
        <h2 className={classes.movingTitle} >EXPERIENCE<TouchIcon className={classes.movingIcon}/></h2>
      </div>
    </Slider>
    <div className={classes.siteTitle}>
      <h1 className={`site-title ${classes.titleFirst}`}>Medium</h1><h1 className={`site-title ${classes.titleSecond}`}>cast</h1>
    </div>

    <Container maxWidth="md">
      <Grid container spacing={3} className={classes.actionContainer} >
        <Grid item xs={12} sm={6} className={classes.col}>
          <Paper className={classes.paper}>
            <Fab className={classes.fab} color="secondary" variant="extended" aria-label="Email" href={"mailto:info@mediumcast.com"}>
              <EmailIcon />
              Contact Us
            </Fab>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.col}>
          <Paper className={classes.paper}>
            <Fab className={classes.fab} color="primary" variant="extended" aria-label="Login" href={"https://portal.mediumcast.com"}>
              <FingerprintIcon />
              Login
            </Fab>
          </Paper>
        </Grid>
      </Grid>
    </Container>


  </div>
);

export default withRoot(withStyles(styles)(BlogIndex));

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
