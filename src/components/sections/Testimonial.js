import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import Review from "../elements/Review";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

class Testimonial extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "testimonial section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className,
    );

    const innerClasses = classNames(
      "testimonial-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider",
    );

    const tilesClasses = classNames("tiles-wrapper");

    return (
      <section
        {...props}
        className={outerClasses}
        style={{ position: "relative" }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "1323px",
            width: "100%",
          }}
          className="illustration-section-02"
        />

        <div className="container">
          <div className={innerClasses}>
            <div className="split-wrap">
              <div className="split-item reveal-scale-up">
                <div
                  className="split-item-content"
                  style={{
                    position: "relative",
                    display: "block",
                  }}
                >
                  <div style={{ height: "100%" }}>
                    <div
                      className="center-content-mobile "
                      style={{
                        position: "sticky",
                        top: "48px",
                        display: "flex",
                        maxWidth: "410px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        flexShrink: "unset",
                        "-webkit-box-orient": "vertical",
                        "-webkit-box-direction": "normal",
                        "-webkit-flex-direction": "column",
                        "-ms-flex-direction": "column",
                        "-webkit-box-align": "start",
                        "-webkit-align-items": "flex-start",
                        "-ms-flex-align": "start",
                      }}
                    >
                      <h2
                        style={{
                          width: "100%",
                          fontWeight: 400,
                          fontSize: "15px",
                          lineHeight: "26px",
                          textTransform: "uppercase",
                        }}
                      >
                        Stories from our customers
                      </h2>
                      <h3>O&#39;Rated 5/5 stars in over 1,000 reviews</h3>
                      <p>
                        Find out why thousands of organisations, language
                        experts, and immigrants love Lingo Ledger
                      </p>
                    </div>
                  </div>
                </div>
                <ul className={tilesClasses}>
                  <Review
                    reviewerName={"Jackson Redman"}
                    reviewerRole={"Public Relations manager"}
                    body={
                      "Lingo Ledger is a translation service I recommend to all my clients. The translation accuracy and the speed is incomparable to any other service out there."
                    }
                    profileSrc={require("../../assets/images/testimonial-image-01.png")}
                  />
                  <Review
                    reviewerName={"Jackson Redman"}
                    reviewerRole={"Public Relations manager"}
                    body={
                      "Lingo Ledger is a translation service I recommend to all my clients. The translation accuracy and the speed is incomparable to any other service out there."
                    }
                    profileSrc={require("../../assets/images/testimonial-image-01.png")}
                  />
                  <Review
                    reviewerName={"Jackson Redman"}
                    reviewerRole={"Public Relations manager"}
                    body={
                      "Lingo Ledger is a translation service I recommend to all my clients. The translation accuracy and the speed is incomparable to any other service out there."
                    }
                    profileSrc={require("../../assets/images/testimonial-image-01.png")}
                  />
                  <Review
                    reviewerName={"Jackson Redman"}
                    reviewerRole={"Public Relations manager"}
                    body={
                      "Lingo Ledger is a translation service I recommend to all my clients. The translation accuracy and the speed is incomparable to any other service out there."
                    }
                    profileSrc={require("../../assets/images/testimonial-image-01.png")}
                  />
                  <Review
                    reviewerName={"Jackson Redman"}
                    reviewerRole={"Public Relations manager"}
                    body={
                      "Lingo Ledger is a translation service I recommend to all my clients. The translation accuracy and the speed is incomparable to any other service out there."
                    }
                    profileSrc={require("../../assets/images/testimonial-image-01.png")}
                  />
                  <Review
                    reviewerName={"Jackson Redman"}
                    reviewerRole={"Public Relations manager"}
                    body={
                      "Lingo Ledger is a translation service I recommend to all my clients. The translation accuracy and the speed is incomparable to any other service out there."
                    }
                    profileSrc={require("../../assets/images/testimonial-image-01.png")}
                  />
                  <Review
                    reviewerName={"Jackson Redman"}
                    reviewerRole={"Public Relations manager"}
                    body={
                      "Lingo Ledger is a translation service I recommend to all my clients. The translation accuracy and the speed is incomparable to any other service out there."
                    }
                    profileSrc={require("../../assets/images/testimonial-image-01.png")}
                  />
                  <Review
                    reviewerName={"Jackson Redman"}
                    reviewerRole={"Public Relations manager"}
                    body={
                      "Lingo Ledger is a translation service I recommend to all my clients. The translation accuracy and the speed is incomparable to any other service out there."
                    }
                    profileSrc={require("../../assets/images/testimonial-image-01.png")}
                  />
                  <Review
                    reviewerName={"Jackson Redman"}
                    reviewerRole={"Public Relations manager"}
                    body={
                      "Lingo Ledger is a translation service I recommend to all my clients. The translation accuracy and the speed is incomparable to any other service out there."
                    }
                    profileSrc={require("../../assets/images/testimonial-image-01.png")}
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
