import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import ReactDOM from 'react-dom'
import Card from '@material-ui/core/Card';
import Cardc from "../components/cardc";
import Album from "../components/album";
import Grid from '@material-ui/core/Grid';
import sampleill from '../images/sampleill.svg';




import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"



const IndexPage = () => (
  <Layout>


    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section class="hero1">

<div class="container">
  <div class="herocon">
  <Grid container spacing={24}>
    <Grid item xs={6}>
  <h1>Cards for the Pitch</h1>
  <p>Helping you level up in your day job, side hustle or startup, using a simple deck of cards.</p>

    <Button variant="contained" color="primary">
          Buy Now!
        </Button>
      </Grid>
      <Grid item xs={2}>
      </Grid>
      <Grid item xs={4}>
         <img src={sampleill} width="800"/>
      </Grid>
    </Grid>
    </div>
</div>

<div class="gradsvg">


  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 4096 690.58" aria-hidden="true">
    <defs>
      <path id="e" d="M0 0v690.58s365.72 11.77 800.48-160.7c263.68-104.61 593.41 42.08 800.73 27.26 181-12.95 178.54-61.69 347.77-91.17s266.94 7.16 503.74-122.81c172.6-94.74 451.68-314.28 856.62-245.79S4096 109 4096 0z"/>
      <linearGradient id="f" y1="345.37" x2="4096" y2="345.37" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#6f0084"/>
        <stop offset=".1" stop-color="#59238a"/>
        <stop offset=".28" stop-color="#335e93"/>
        <stop offset=".43" stop-color="#178a9a"/>
        <stop offset=".55" stop-color="#06a49e"/>
        <stop offset=".62" stop-color="#00aea0"/>
      </linearGradient>
      <linearGradient id="g" y1="345.37" x2="4096" y2="345.37" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#6f0084"/>
        <stop offset=".33" stop-color="#6f0084"/>
        <stop offset=".5" stop-color="#6f0084" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="d" x1="851.36" y1="-851.36" x2="2909.93" y2="1207.22" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#010758"/>
        <stop offset=".6" stop-color="#010758" stop-opacity=".2"/>
        <stop offset="1" stop-color="#010758" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="h" y1="345.37" x2="4096" y2="345.37" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#fff" stop-opacity="0"/>
        <stop offset=".44" stop-color="#fbfefe" stop-opacity=".01"/>
        <stop offset=".6" stop-color="#eafcfa" stop-opacity=".04"/>
        <stop offset=".72" stop-color="#cef7f4" stop-opacity=".1"/>
        <stop offset=".81" stop-color="#a6f1eb" stop-opacity=".17"/>
        <stop offset=".89" stop-color="#72e8df" stop-opacity=".28"/>
        <stop offset=".96" stop-color="#32ded1" stop-opacity=".4"/>
        <stop offset="1" stop-color="#00d6c6" stop-opacity=".5"/>
      </linearGradient>
      <linearGradient id="a" x1="2157.59" y1="347.13" x2="2290.94" y2="347.13" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#6f0084"/>
        <stop offset="1" stop-color="#00aea0"/>
      </linearGradient>
      <linearGradient id="c" x1="2500.65" y1="264.92" x2="2546.44" y2="264.92" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#00aea0"/>
        <stop offset="1" stop-color="#b800aa"/>
      </linearGradient>
      <linearGradient id="b" x1="2142.12" y1="229.07" x2="2300.42" y2="229.07" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#b800aa"/>
        <stop offset="1" stop-color="#00aea0"/>
      </linearGradient>
    </defs>
    <g data-name="Wave">
      <use xlinkHref="#e" fill="url(#f)"/>
      <use xlinkHref="#e" fill="url(#g)"/>
      <use xlinkHref="#e" fill="url(#d)"/>
      <use xlinkHref="#e" fill="url(#h)"/>
    </g>
  </svg>



</div>



  </section>
  <section class="section productinfo">
    <div class="container">

      <h2 class="head">Cards for the Pitch</h2>


        <Grid container spacing={24}>
          <Grid item xs={6}>


  <img src="https://images.unsplash.com/photo-1501003878151-d3cb87799705?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"></img>


  </Grid>
  <Grid item xs={1}>
  </Grid>
        <Grid item xs={4}>



          <h3>Product Info</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor arcu, varius at arcu ut, cursus volutpat ligula. Suspendisse est elit, finibus et tincidunt consequat, eleifend rhoncus lacus. Cras vitae diam et arcu malesuada porttitor. Maecenas dictum orci quis mi ultricies aliquam. Ut lacinia fermentum erat quis porta. Pellentesque ut tincidunt tortor. Maecenas luctus hendrerit malesuada.
</p>


        </Grid>
      </Grid>




    </div>
  </section>
  <section class="sec-quotes2">
    <div class="container">
<Album />
  </div>
  </section>
  </Layout>
)

export default IndexPage
