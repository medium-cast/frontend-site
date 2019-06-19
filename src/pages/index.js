import React from "react"
import { Link, graphql } from "gatsby"
import Slider from "react-slick";
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import img1 from "../../content/assets/1.jpg"
import img2 from "../../content/assets/2.jpg"
import img3 from "../../content/assets/3.jpg"
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import withRoot from '../withRoot';
import EmailIcon from '@material-ui/icons/Email';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  lazyLoad: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
};
const styles = theme => ({
  section: {
    marginTop: theme.spacing.unit * 3
  },
  toolbar: {
    marginTop: theme.spacing.unit * 2
  },
  button: {
    marginRight: theme.spacing.unit
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
    color: '#fff',
    fontFamily:  `-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`
  },
  titleSecond: {
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
    top: "50%", height:"80px",fontFamily: `-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`,}
});
const BlogIndex = ({ classes }) => (
  <div>
    <Slider {...settings} style={{width:"100%"}}>
      <div>
        <div>
          <img style={{width:"100vw", height: "100vh", objectFit: "cover"}} src={img1} alt="Play" />
          <h1 className={classes.movingTitle}>Play</h1>
        </div>

      </div>
      <div>
        <img style={{width:"100vw", height: "100vh", objectFit: "cover"}} src={img2} alt="Share" />
        <h1 class={classes.movingTitle} >Share</h1>
      </div>
      <div>
        <img style={{width:"100vw", height: "100vh", objectFit: "cover"}} src={img3} alt="Experience" />
        <h1 class={classes.movingTitle} >Experience</h1>
      </div>
    </Slider>
    <div className={classes.siteTitle}>
      <h1 className={`site-title ${classes.titleFirst}`}>Medium</h1><h1 className={`site-title ${classes.titleSecond}`}>cast</h1>
    </div>

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
          <Fab className={classes.fab} color="primary" variant="extended" aria-label="Login" href={"mailto:info@mediumcast.com"}>
            <FingerprintIcon />
            Login
          </Fab>
        </Paper>
      </Grid>
    </Grid>

  </div>
);

export default withRoot(withStyles(styles)(BlogIndex));

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
