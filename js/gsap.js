gsap.registerPlugin(DrawSVGPlugin);

// Seletores
const sublinhado = "#sublinhado";
const logoFill = "#pimbolas path:not(#sublinhado)";

// Estado inicial
gsap.set(sublinhado, {
  drawSVG: "0%",
  opacity: 0
});

gsap.set(logoFill, {
  opacity: 0
});

// Timeline de loading
const loadingTL = gsap.timeline({
  repeat: -1,
  repeatDelay: 0.6,
  defaults: { ease: "power2.out" }
});

// 1️⃣ Desenha o sublinhado
loadingTL.to(sublinhado, {
  opacity: 1,
  duration: 0.8,
  drawSVG: "100%"
});

// 2️⃣ Aparece o restante do logo
loadingTL.to(logoFill, {
  duration: 0.5,
  opacity: 1,
  delay: -0.2,
  stagger: 0.02
}, "-=0.4");

// 3️⃣ Pequena pausa
loadingTL.to({}, { duration: 0.9 });

// 4️⃣ Some tudo
loadingTL.to(logoFill, {
  duration: 0.3,
  opacity: 0
});

loadingTL.to(sublinhado, {
  opacity: 0,
  duration: 0.3,
  delay: -0.2,
  drawSVG: "0%"
});