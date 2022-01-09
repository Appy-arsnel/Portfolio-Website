barba.init({
  transitions: [
    {
      name: "opacity-transition",
      leave(data) {
        return gsap.to(data.current.container, {
          scale: 0,
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          scale: 0,
        });
      },
    },
  ],
});
