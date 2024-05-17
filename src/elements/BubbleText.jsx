import { useEffect } from "react";

export default function BubbleText() {
    useEffect(() => {
      const spans = document.querySelectorAll(".hover-text span");
  
      spans.forEach((span) => {
        span.addEventListener("mouseenter", function () {
          this.style.fontWeight = "300";
          this.style.color = "rgb(199, 210, 254)";
  
          const leftNeighbor = this.previousElementSibling;
          const rightNeighbor = this.nextElementSibling;
  
          if (leftNeighbor) {
            leftNeighbor.style.fontWeight = "500";
            leftNeighbor.style.color = "rgb(199, 210, 254)";
          }
          if (rightNeighbor) {
            rightNeighbor.style.fontWeight = "500";
            rightNeighbor.style.color = "rgb(199, 210, 254)";
          }
        });
  
        span.addEventListener("mouseleave", function () {
          this.style.fontWeight = "500";
          this.style.color = "rgb(238, 242, 255)";
  
          const leftNeighbor = this.previousElementSibling;
          const rightNeighbor = this.nextElementSibling;
  
          if (leftNeighbor) {
            leftNeighbor.style.fontWeight = "600";
            leftNeighbor.style.color = "rgb(255, 255, 255)";
          }
  
          if (rightNeighbor) {
            rightNeighbor.style.fontWeight = "600";
            rightNeighbor.style.color = "rgb(255, 255, 255)";
          }
        });
      });
    }, []);
  
    return (
      <h2 className="text-4xl font-bold text-white lg:text-5xl hover-text text-start">
        <Text>Ratkaisuja, joihin luotat.</Text>
      </h2>
    );
  };



  const Text = ({ children }) => {
    return (
      <>
        {children.split("").map((child, idx) => (
          <span
            style={{
              transition: "0.35s font-weight, 0.35s color",
            }}
            key={idx}
          >
            {child}
          </span>
        ))}
      </>
    );
  };

