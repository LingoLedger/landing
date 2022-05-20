import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Image from "../elements/Image";
import Modal from "../elements/Modal";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

class VideoFull extends React.Component {
  state = {
    videoModalActive: false,
  };
  openModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: true });
  };

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  };

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "section center-content",
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

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <div className="hero-content">
              <div className="container-xs">
                <h3 className="mt-0 reveal-from-left">
                  It’s expensive and time consuming to find the right Language
                  Expert
                </h3>
                <p>
                  Current agencies: They pick whoever is available, have vague
                  pricing, high service fees, no guarantee of service and
                  operate only on business hours
                </p>
              </div>
            </div>
            <div className="hero-figure illustration-element-02 reveal-scale-up">
              <a
                data-video="https://player.vimeo.com/video/174002812"
                href="#0"
                aria-controls="video-modal"
                onClick={this.openModal}
              >
                <Image
                  className="has-shadow"
                  src={require("./../../assets/images/video-placeholder.svg")}
                  alt="Video"
                />
              </a>
            </div>
            <Modal
              id="video-modal"
              show={this.state.videoModalActive}
              handleClose={this.closeModal}
              video="https://player.vimeo.com/video/174002812"
              videoTag="iframe"
            />
          </div>
        </div>
      </section>
    );
  }
}

VideoFull.propTypes = propTypes;
VideoFull.defaultProps = defaultProps;

export default VideoFull;
