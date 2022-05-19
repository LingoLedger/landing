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
      "hero section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className,
    );

    const innerClasses = classNames(
      "hero-inner section-inner",
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
              <div className="split-item" style={{ marginBottom: 0 }}>
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
                  >
                    Get your Legal Interpretation and Translation needs met,
                    wherever and whenever. No hidden fees.
                  </p>
                  <div className="reveal-from-left" data-reveal-delay="400">
                    <Button
                      tag="a"
                      color="primary"
                      href="https://cruip.com/"
                      wideMobile
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
                <div className="hero-figure">
                  <Image
                    src={require("./../../assets/images/hero-image.png")}
                    alt="Hero"
                    style={{ objectFit: "scale-down", boxShadow: "none" }}
                  />
                </div>
              </div>
              <div
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
                      width: 120,
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
