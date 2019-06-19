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

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      lazyLoad: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    return (
      <div style={{overflowX:"hidden"}}>
        <Slider {...settings} style={{width:"100%"}}>
          <div>
            <div>
              <img style={{width:"100vw", height: "100vh", objectFit: "cover"}} src={img1} alt="Play" />
              <h1 style={{display: "block", width:"100vw", textAlign: "center", position:"fixed", color:"white", top: "calc( 50% - 40px)", height:"80px",fontFamily: `-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`,}}>Play</h1>
            </div>

          </div>
          <div>
            <img style={{width:"100vw", height: "100vh", objectFit: "cover"}} src={img2} alt="Share" />
            <h1 style={{display: "block", width:"100vw", textAlign: "center", position:"absolute", color:"white", top: "calc( 50% - 40px)", height:"80px",fontFamily:  `-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`,}}>Share</h1>
          </div>
          <div>
            <img style={{width:"100vw", height: "100vh", objectFit: "cover"}} src={img3} alt="Experience" />
            <h1 style={{display: "block", width:"100vw", textAlign: "center", position:"absolute", color:"white", top: "calc( 50% - 40px)", height:"80px",fontFamily:  `-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`,}}>Experience</h1>
          </div>
        </Slider>
        <SEO title="contact" />
      </div>

    )
  }
}

export default BlogIndex

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
