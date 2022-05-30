import React from "react";
import Image from "./Image";

const Review = ({ body, reviewerName, reviewerRole, profileSrc }) => {
  return (
    <li>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            marginBottom: "10px",
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Image
            style={{ borderRadius: "500px" }}
            src={profileSrc}
            width={40}
            height={40}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <span>{reviewerName}</span>
            <span style={{ fontSize: 10 }}>{reviewerRole}</span>
          </div>
        </div>
        <Image
          src={require("../../assets/images/Stars.svg")}
          width={116}
          height={20}
        />
        <div
          style={{
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "26px",
            letterSpacing: "0.01em",
            color: "#000000",
          }}
        >
          “{body}”
        </div>
      </div>
    </li>
  );
};

export default Review;
