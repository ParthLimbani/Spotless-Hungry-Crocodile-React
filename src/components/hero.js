import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <div className="hero-header78">
      <div className="hero-column thq-section-max-width thq-section-padding">
        <div className="hero-content1">
          <h1 className="hero-text1 thq-heading-1">{props.heading1}</h1>
          <p className="hero-text2 thq-body-large">{props.content1}</p>
        </div>
        <div className="hero-actions">
          <button className="thq-button-filled hero-button1">
            <span className="thq-body-small">{props.action1}</span>
          </button>
          <button className="thq-button-outline hero-button2">
            <span className="thq-body-small">{props.action2}</span>
          </button>
        </div>
      </div>
      <div className="hero-content2">
        <div className="hero-row-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
        <div className="hero-row-container2 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image26 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero-placeholder-image27 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image28 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero-placeholder-image29 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image30 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero-placeholder-image31 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image32 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image33 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  image4Src:
    'https://images.unsplash.com/photo-1599012307530-d163bd04ecab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzMwNDQyMnw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Alt: 'Hero Image',
  image1Src:
    'https://images.unsplash.com/photo-1494177310973-4841f7d5a882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzMwNDQyM3w&ixlib=rb-4.0.3&q=80&w=1080',
  image9Alt: 'Hero Image',
  image11Src:
    'https://images.unsplash.com/photo-1637088059593-cc03fe384dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzMwNDQxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Football Store Hero Image',
  content1:
    'Find everything you need to gear up for the game and show your support for your favorite team. From jerseys to accessories, we have it all.',
  image3Src:
    'https://images.unsplash.com/photo-1645397925470-ccb7d7605402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzMwNDQxNnw&ixlib=rb-4.0.3&q=80&w=1080',
  image9Src:
    'https://images.unsplash.com/photo-1589698112632-f5dffc219c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzMwNDQyMXw&ixlib=rb-4.0.3&q=80&w=1080',
  image10Alt: 'Hero Image',
  image12Alt: 'Hero Image',
  image7Src:
    'https://images.unsplash.com/photo-1473976345543-9ffc928e648d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzMwNDQxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1526864947482-382a25347d51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzMwNDQyMXw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Alt: 'Hero Image',
  action2: 'Secondary action',
  image6Src:
    'https://images.unsplash.com/photo-1542744094-24638eff58bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzMwNDQyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: 'Main action',
  image12Src:
    'https://images.unsplash.com/photo-1571841591263-777bbba1348c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzMwNDQyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Alt: 'Hero Image',
  heading1: 'Welcome to our Football Store',
  image11Alt: 'Hero Image',
  image2Alt: 'Hero Image',
  image6Alt: 'Hero Image',
  image10Src:
    'https://images.unsplash.com/photo-1580974582198-2c20a623a9e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzMwNDQyMnw&ixlib=rb-4.0.3&q=80&w=1080',
  image8Src:
    'https://images.unsplash.com/photo-1599012307530-d163bd04ecab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzMwNDQyMXw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzMwNDQxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  image8Alt: 'Hero Image',
}

Hero.propTypes = {
  image4Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  image3Src: PropTypes.string,
  image9Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image5Src: PropTypes.string,
  image7Alt: PropTypes.string,
  action2: PropTypes.string,
  image6Src: PropTypes.string,
  action1: PropTypes.string,
  image12Src: PropTypes.string,
  image4Alt: PropTypes.string,
  heading1: PropTypes.string,
  image11Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image10Src: PropTypes.string,
  image8Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image8Alt: PropTypes.string,
}

export default Hero
