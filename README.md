<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Arshia Moghbel | Portfolio</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <style>
    body {
      background-color: #000000;
      color: #FFD700;
      font-family: 'Helvetica Neue', sans-serif;
    }
    .project-card {
      background: #111;
      border: 1px solid #FFD700;
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 20px #ffd70080;
    }
  </style>
</head>
<body class="min-h-screen flex flex-col items-center p-6">

  <!-- Header with Typing Animation -->
  <h1 class="text-4xl md:text-6xl font-bold text-center my-10">
    <span id="typed"></span>
  </h1>

  <!-- Projects Section -->
  <section class="w-full max-w-6xl">
    <h2 class="text-3xl font-semibold mb-6 border-b border-yellow-500 pb-2">Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div class="project-card p-6 rounded-2xl">
        <h3 class="text-2xl font-bold mb-2">Medical Image Analysis</h3>
        <p class="text-base">Deep Learning model for tumor detection using CNNs.</p>
      </div>

      <div class="project-card p-6 rounded-2xl">
        <h3 class="text-2xl font-bold mb-2">Swift App Development</h3>
        <p class="text-base">iOS applications built with Swift and SwiftUI for seamless UX/UI.</p>
      </div>

      <div class="project-card p-6 rounded-2xl">
        <h3 class="text-2xl font-bold mb-2">NLP Text Classifier</h3>
        <p class="text-base">A machine learning project that classifies text using NLP techniques.</p>
      </div>

    </div>
  </section>

  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
  <script>
    var typed = new Typed('#typed', {
      strings: [
        "Hi, I'm Arshia Moghbel",
        "Swift & Python Developer",
        "AI & Technology Enthusiast"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });
  </script>

</body>
</html>
