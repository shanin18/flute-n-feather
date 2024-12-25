// Initialize Lenis

$(document).ready(function () {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {
    // console.log(e);
  });

  AOS.init({
    duration: 1000,
    easing: "ease",
    once: true,
  });
});
