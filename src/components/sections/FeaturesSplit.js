import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

class FeaturesSplit extends React.Component {
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
      "features-split section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className,
    );

    const innerClasses = classNames(
      "features-split-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider",
    );

    const splitClasses = classNames(
      "split-wrap",
      invertMobile && "invert-mobile",
      invertDesktop && "invert-desktop",
      alignTop && "align-top",
    );

    const sectionHeader = {
      title: "This is where we come in ",
      paragraph:
        "We provide transparent information about your language professional’s background, pricing. We have transparent service fees, guarantee our service with insurance and work 24/7.",
    };

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>
              <div className="split-item reveal-scale-up">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16">Accredited Experts</h3>
                  <p className="m-0">
                    All our intepreters and translators are NAATI certified.
                    This means that they are nationally certified and recognised
                    throughout Australia for professional practice.
                  </p>
                </div>
                <div
                  className={classNames(
                    "split-item-image is-3d illustration-element-03",
                    imageFill && "split-item-image-fill",
                  )}
                >
                  <Image
                    src={require("./../../assets/images/features-split-image-01.svg")}
                    alt="Features split 01"
                    width={528}
                    height={396}
                  />
                </div>
              </div>

              <div className="split-item reveal-scale-up">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16">Low Prices Guaranteed</h3>
                  <p className="m-0">
                    We offer cheap and transparent pricing, which is guaranteed
                    lower than our competitors. We let you see how much of our
                    fee is going to the translator/interpretor.{" "}
                  </p>
                </div>
                <div
                  className={classNames(
                    "split-item-image is-3d illustration-element-04",
                    imageFill && "split-item-image-fill",
                  )}
                >
                  <Image
                    src={require("./../../assets/images/features-split-image-02.svg")}
                    alt="Features split 02"
                    width={528}
                    height={396}
                  />
                </div>
              </div>

              <div className="split-item reveal-scale-up">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16">Direct to Translator</h3>
                  <p className="m-0">
                    Got a question? Want it translated in a specific way? Our
                    chat function puts you in direct contact with your
                    translator. We cut out the middleman to remove the hassle of
                    an intermediary agency.
                  </p>
                </div>
                <div
                  className={classNames(
                    "split-item-image is-3d illustration-element-05",
                    imageFill && "split-item-image-fill",
                  )}
                >
                  <Image
                    src={require("./../../assets/images/features-split-image-03.svg")}
                    alt="Features split 03"
                    width={528}
                    height={396}
                  />
                </div>
              </div>

              <div className="split-item reveal-scale-up">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16">Fast and Simple Booking</h3>
                  <p className="m-0">
                    We’ve simplified the booking system so we save you time and
                    money. We removed all the lengthy forms so you can book in
                    just 2 minutes!
                  </p>
                </div>
                <div
                  className={classNames(
                    "split-item-image is-3d illustration-element-04",
                    imageFill && "split-item-image-fill",
                  )}
                >
                  <Image
                    src={require("./../../assets/images/features-split-image-02.svg")}
                    alt="Features split 02"
                    width={528}
                    height={396}
                  />
                </div>
              </div>
              <div className="split-item reveal-scale-up">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16">24/7 Support</h3>
                  <p className="m-0">
                    Need some help? No matter what time of day, we are simply
                    one phone call or chat message away. Omni Channel Support.
                  </p>
                </div>
                <div
                  className={classNames(
                    "split-item-image is-3d illustration-element-05",
                    imageFill && "split-item-image-fill",
                  )}
                >
                  <Image
                    src={require("./../../assets/images/features-split-image-03.svg")}
                    alt="Features split 03"
                    width={528}
                    height={396}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
