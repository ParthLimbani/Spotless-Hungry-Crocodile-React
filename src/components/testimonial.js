import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author4Alt: 'Image of Sarah Brown',
  author1Position: 'Professional Football Player',
  author1Name: 'John Doe',
  content1:
    'I have been buying all my football gear from this store for years. The quality is top-notch, and the customer service is exceptional.',
  review3:
    'I love the variety of jerseys available here. Always satisfied with my purchases.',
  author3Alt: 'Image of Mike Johnson',
  author2Position: 'Football Coach',
  author4Name: 'Sarah Brown',
  heading1: 'Testimonials',
  author3Name: 'Mike Johnson',
  author2Alt: 'Image of Jane Smith',
  review1: '5 stars',
  author3Src:
    'https://images.unsplash.com/photo-1546778316-dfda79f1c84e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzMwNDQxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Src:
    'https://images.unsplash.com/photo-1520346539831-3eac0beaeb30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzMwNDQxN3w&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: 'Football Mom',
  author3Position: 'Football Fan',
  author1Alt: 'Image of John Doe',
  author1Src:
    'https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzMwNDQxNXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Src:
    'https://images.unsplash.com/photo-1517916358207-1e49f666e851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzMwNDQxN3w&ixlib=rb-4.0.3&q=80&w=1080',
  review2:
    'Great selection of products and fast shipping. Highly recommend this store to all football enthusiasts.',
  author2Name: 'Jane Smith',
  review4:
    "As a busy mom, I appreciate the convenience of shopping online for all my son's football needs. This store has everything we need.",
}

Testimonial.propTypes = {
  author4Alt: PropTypes.string,
  author1Position: PropTypes.string,
  author1Name: PropTypes.string,
  content1: PropTypes.string,
  review3: PropTypes.string,
  author3Alt: PropTypes.string,
  author2Position: PropTypes.string,
  author4Name: PropTypes.string,
  heading1: PropTypes.string,
  author3Name: PropTypes.string,
  author2Alt: PropTypes.string,
  review1: PropTypes.string,
  author3Src: PropTypes.string,
  author2Src: PropTypes.string,
  author4Position: PropTypes.string,
  author3Position: PropTypes.string,
  author1Alt: PropTypes.string,
  author1Src: PropTypes.string,
  author4Src: PropTypes.string,
  review2: PropTypes.string,
  author2Name: PropTypes.string,
  review4: PropTypes.string,
}

export default Testimonial
