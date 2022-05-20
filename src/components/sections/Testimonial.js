import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

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

    const tilesClasses = classNames("tiles-wrapper illustration-section-06");

    const sectionHeader = {
      title: "Testimonials - Lorem ipsum is placeholder text commonly used.",
      paragraph: "",
    };

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader
              data={sectionHeader}
              className="center-content invert-color"
            />
            <div className="split-item reveal-scale-up">
              <div className="split-item-content center-content-mobile">
                <h3 className="mt-0 mb-16">
                  Rated 5/5 stars in over 1,000 reviews
                </h3>
                <p className="m-0">
                  Find out why thousands of organisations, language experts, and
                  immigrants love Lingo Ledger
                </p>
              </div>
              <div>
                <Image
                  src={require("./../../assets/images/hero-image.png")}
                  alt="Features split 03"
                />
              </div>
              <ul className={tilesClasses}>
                <li>
                  <div style={{ display: "flex", gap: 8 }}>
                    <div
                      style={{
                        display: "flex",
                        marginBottom: "10px",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        style={{ borderRadius: "500px" }}
                        src={require("./../../assets/images/testimonial-image-01.png")}
                        width={40}
                      />
                    </div>
                  </div>
                </li>
              </ul>
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
