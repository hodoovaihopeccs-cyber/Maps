<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Core Tech - Future Driven Innovation</title>

<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">

<style>
*{margin:0;padding:0;box-sizing:border-box}
body{
  font-family:'Roboto',sans-serif;
  background:#0b0f1a;
  color:#fff;
  overflow-x:hidden;
  scroll-behavior:smooth;
}
h1,h2,h3{font-family:'Orbitron',sans-serif}
section{padding:100px 10%}
a{text-decoration:none;color:inherit;cursor:pointer}

/* NAV */
header{
  position:fixed;
  width:100%;
  top:0;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:20px 10%;
  background:rgba(0,0,0,0.5);
  backdrop-filter:blur(10px);
  z-index:1000;
}
header h1{
  color:#00f0ff;
  font-size:24px;
}
nav a{
  margin-left:25px;
  transition:0.3s;
}
nav a:hover{
  color:#00f0ff;
}

/* HERO */
.hero{
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  position:relative;
}
.hero h2{
  font-size:48px;
  margin-bottom:20px;
}
.hero p{
  max-width:600px;
  margin-bottom:30px;
  color:#ccc;
}
.hero button{
  padding:15px 35px;
  background:linear-gradient(90deg,#00f0ff,#0066ff);
  border:none;
  border-radius:30px;
  color:#fff;
  font-size:16px;
  cursor:pointer;
  transition:0.3s;
}
.hero button:hover{
  transform:scale(1.1);
  box-shadow:0 0 20px #00f0ff;
}

/* GRID GLOW */
.grid-overlay{
  position:absolute;
  width:100%;
  height:100%;
  background-image:linear-gradient(rgba(0,240,255,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,240,255,0.05) 1px, transparent 1px);
  background-size:50px 50px;
  z-index:-1;
}

/* SERVICES */
.services{
  text-align:center;
}
.cards{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:30px;
  margin-top:50px;
}
.card{
  background:rgba(255,255,255,0.05);
  backdrop-filter:blur(15px);
  padding:30px;
  width:280px;
  border-radius:15px;
  transition:0.4s;
}
.card:hover{
  transform:translateY(-10px);
  box-shadow:0 0 25px #00f0ff;
}

/* STATS */
.stats{
  display:flex;
  justify-content:center;
  gap:60px;
  text-align:center;
  flex-wrap:wrap;
}
.stat h3{
  font-size:40px;
  color:#00f0ff;
}
.stat p{color:#ccc}

/* ABOUT */
.about{
  display:flex;
  flex-wrap:wrap;
  gap:50px;
  align-items:center;
}
.about img{
  width:400px;
  border-radius:15px;
}
.about-text{flex:1}

/* CONTACT */
.contact form{
  max-width:500px;
  margin:auto;
  display:flex;
  flex-direction:column;
  gap:20px;
}
.contact input,.contact textarea{
  padding:15px;
  border-radius:10px;
  border:none;
  background:#111827;
  color:#fff;
}
.contact button{
  padding:15px;
  border:none;
  border-radius:30px;
  background:linear-gradient(90deg,#00f0ff,#0066ff);
  color:#fff;
  cursor:pointer;
  transition:0.3s;
}
.contact button:hover{
  box-shadow:0 0 15px #00f0ff;
}
.success{
  text-align:center;
  margin-bottom:20px;
  color:#00ff88;
  display:none;
}

/* FOOTER */
footer{
  text-align:center;
  padding:30px;
  background:#05070f;
  color:#777;
}

/* PARTICLE CANVAS */
#particles{
  position:fixed;
  top:0;
  left:0;
  z-index:-2;
}

/* RESPONSIVE */
@media(max-width:900px){
  .about{flex-direction:column;text-align:center}
  .about img{width:100%}
  .stats{gap:30px}
}
</style>
</head>
<body>

<canvas id="particles"></canvas>

<header>
  <h1>Core Tech</h1>
  <nav>
    <a onclick="scrollToSection('services')">Services</a>
    <a onclick="scrollToSection('stats')">Impact</a>
    <a onclick="scrollToSection('about')">About</a>
    <a onclick="scrollToSection('contact')">Contact</a>
  </nav>
</header>

<section class="hero">
  <div class="grid-overlay"></div>
  <h2>Future Driven Innovation</h2>
  <p>Core Tech builds cutting-edge digital solutions powered by AI, cloud computing, and next-gen software engineering.</p>
  <button onclick="scrollToSection('contact')">Start Your Project</button>
</section>

<section id="services" class="services">
  <h2>Our Expertise</h2>
  <div class="cards">
    <div class="card">
      <h3>Software Engineering</h3>
      <p>Scalable, secure and high-performance applications.</p>
    </div>
    <div class="card">
      <h3>Cloud Infrastructure</h3>
      <p>Reliable cloud-native architecture & DevOps automation.</p>
    </div>
    <div class="card">
      <h3>Artificial Intelligence</h3>
      <p>Machine learning & intelligent automation solutions.</p>
    </div>
  </div>
</section>

<section id="stats">
  <h2 style="text-align:center;margin-bottom:60px;">Our Impact</h2>
  <div class="stats">
    <div class="stat"><h3 class="counter" data-target="50000">0</h3><p>Projects Delivered</p></div>
    <div class="stat"><h3 class="counter" data-target="20000000">2M</h3><p>Global Clients</p></div>
    <div class="stat"><h3 class="counter" data-target="8">8</h3><p>Years Experience</p></div>
  </div>
</section>

<section id="about" class="about">
  <img src="https://images.unsplash.com/photo-1559028012-481c6c4cde73?auto=format&fit=crop&w=800&q=80">
  <div class="about-text">
    <h2>About Core Tech</h2>
    <p>We are a forward-thinking technology company focused on delivering world-class digital transformation solutions. Our mission is to empower businesses through advanced engineering and intelligent systems.</p>
  </div>
</section>

<section id="contact" class="contact">
  <h2 style="text-align:center;margin-bottom:40px;">Let's Build The Future</h2>
  <div class="success" id="successMsg">Message Sent Successfully!</div>
  <form id="contactForm">
    <input type="text" placeholder="Your Name" required>
    <input type="email" placeholder="Your Email" required>
    <textarea rows="5" placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
  </form>
</section>

<footer>
  © 2026 Core Tech. All rights reserved.
</footer>

<script>
// Smooth scroll
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// Animated counters
const counters=document.querySelectorAll('.counter');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const el=entry.target;
      const target=+el.dataset.target;
      let count=0;
      const step=target/200;
      function update(){
        count+=step;
        if(count<target){
          el.innerText=Math.ceil(count);
          requestAnimationFrame(update);
        }else{
          el.innerText=target;
        }
      }
      update();
      observer.unobserve(el);
    }
  });
},{threshold:0.5});
counters.forEach(counter=>observer.observe(counter));

// Contact form
document.getElementById("contactForm").addEventListener("submit",function(e){
  e.preventDefault();
  const msg=document.getElementById("successMsg");
  msg.style.display="block";
  setTimeout(()=>msg.style.display="none",3000);
  this.reset();
});

// PARTICLE BACKGROUND
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];
for(let i=0;i<100;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    vx:(Math.random()-0.5)*1,
    vy:(Math.random()-0.5)*1,
    size:2
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="#00f0ff";
  particles.forEach(p=>{
    p.x+=p.vx;
    p.y+=p.vy;
    if(p.x<0||p.x>canvas.width) p.vx*=-1;
    if(p.y<0||p.y>canvas.height) p.vy*=-1;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
</script>

</body>
</html>
