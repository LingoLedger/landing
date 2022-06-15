import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import Button from "../elements/Button";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const logos = [
  "lever",
  "peopleai",
  "lattice",
  "webflow",
  "coinbase",
  "alloy",
  "contactout",
  "ycombinator",
  "airwallet",
  "madpaws",
  "checkbox",
  "simplywallet",
  "lawpath",
  "legalvision",
  "hudled",
  "cryptocom",
];

class HeroSplit extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "hero section illustration-section-01",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className,
    );

    const innerClasses = classNames(
      "hero-inner section-inner ",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider",
    );

    const splitClasses = classNames(
      "split-wrap",
      invertMobile && "invert-mobile",
      invertDesktop && "invert-desktop",
      alignTop && "align-top",
    );

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <div className={splitClasses}>
              <div className="split-item">
                <div className="hero-content split-item-content center-content-mobile">
                  <h1 className="mt-0 mb-16 reveal-from-left">
                    The world’s largest marketplace to find Accredited
                    Interpreters and Translators
                    <span aria-label="" role={"img"}>
                      ✨
                    </span>
                  </h1>
                  <p
                    className="mt-0 mb-24 reveal-from-left"
                    data-reveal-delay="200"
                    style={{ color: "black" }}
                  >
                    Get your Legal Interpretation and Translation needs met,
                    wherever and whenever. No hidden fees.
                  </p>
                  <div
                    className="reveal-from-left button-group"
                    data-reveal-delay="400"
                  >
                    <Button
                      tag="a"
                      color="primary"
                      href="https://lingoledger.com/s?address=Australia&bounds=-9.0436707%2C159.200456%2C-54.8327658%2C112.8256904"
                      wideMobile
                    >
                      Book Now{" "}
                      <img
                        style={{ margin: 0, marginLeft: 8 }}
                        src={require("../../assets/images/arrow-right.svg")}
                        alt="right arrow"
                      />
                    </Button>
                    <Button
                      tag="a"
                      color="outline"
                      href="https://cruip.com/"
                      wideMobile
                    >
                      See how we work
                    </Button>
                  </div>
                </div>
                <div className="hero-figure illustration-element-01">
                  <Image
                    src={require("./../../assets/images/hero-image.png")}
                    alt="Hero"
                    style={{
                      objectFit: "scale-down",
                      boxShadow: "none",
                      marginTop: "48px",
                    }}
                  />
                </div>
              </div>
              <div
                className="logo-wrapper"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  columnGap: 32,
                  rowGap: 64,
                }}
              >
                {logos.map((logo, index) => (
                  <div
                    style={{
                      height: 30,
                      width: 100,
                      display: "flex",
                      justifyContent: "center",
                    }}
                    key={index}
                  >
                    <Image
                      style={{ objectFit: "contain" }}
                      alt={logo}
                      src={require(`./../../assets/images/logo-${logo}.png`)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

HeroSplit.propTypes = propTypes;
HeroSplit.defaultProps = defaultProps;

export default HeroSplit;
