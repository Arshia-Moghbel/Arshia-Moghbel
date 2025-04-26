<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arshia Moghbel - Swift & Python Developer</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <style>
        body {
            background-color: #0a0a0a;
            color: #ffd700;
            font-family: 'Helvetica Neue', sans-serif;
        }
        .project-box {
            background: linear-gradient(145deg, #1a1a1a, #0f0f0f);
            border: 1px solid #ffd700;
            border-radius: 12px;
            padding: 20px;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .project-box:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 24px rgba(255, 215, 0, 0.5);
        }
    </style>
</head>
<body class="p-8">

    <header class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">
            <span id="typed"></span>
        </h1>
        <p class="text-xl">Swift & Python Developer</p>
    </header>

    <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">About Me</h2>
        <p>
            Hi! I’m Arshia Moghbel, a passionate software engineer building elegant solutions with Swift and Python.
            I combine AI and healthcare interests by working on projects like medical image analysis and natural language
            processing (NLP)... (متن کامل درباره من که قبل نوشته بودیم)
        </p>
    </section>

    <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Skills</h2>
        <ul class="list-disc list-inside">
            <li>Programming Languages: Swift, Python</li>
            <li>AI & ML: CNNs, NLP, TensorFlow/PyTorch</li>
            <li>Developer Tools: Git, GitHub Actions, Docker, Xcode, XCTest, Core ML, Create ML</li>
            <li>Practices: CI/CD, Clean Code, Agile methodologies</li>
            <li>Other: HTML/CSS/JavaScript basics</li>
        </ul>
    </section>

    <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Projects</h2>
        <div class="grid md:grid-cols-2 gap-6">
            <div class="project-box">
                <h3 class="text-xl font-bold mb-2">Medical Image Analysis (CNN)</h3>
                <p>
                    I developed a system that analyzes medical scans using convolutional neural networks. The CNN automatically extracts features from images (e.g. MRI or X-ray) to assist in diagnosis...
                </p>
            </div>
            <div class="project-box">
                <h3 class="text-xl font-bold mb-2">Medical NLP</h3>
                <p>
                    Applied NLP techniques to clinical text for parsing and summarizing medical records and research abstracts, unlocking insights from unstructured clinical notes...
                </p>
            </div>
            <div class="project-box">
                <h3 class="text-xl font-bold mb-2">Swift App Development</h3>
                <p>
                    Built an iOS app in Swift for health data tracking, demonstrating polished user experiences and backend logic integration.
                </p>
            </div>
        </div>
    </section>

    <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">How to Connect</h2>
        <ul class="list-disc list-inside">
            <li>LinkedIn: Arshia Moghbel</li>
            <li>Instagram: @arshia__m__2008</li>
            <li>Email: arshiamoghbel@icloud.com</li>
        </ul>
    </section>

    <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">GitHub Stats</h2>
        <p>
            I use GitHub profile charts and README stats to highlight my activity and skills, including my contribution graph and pinned repositories...
        </p>
    </section>

    <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">Trophies</h2>
        <p>
            GitHub Profile Trophies show my achievements and contributions in open-source development.
        </p>
    </section>

    <section class="text-center mt-16">
        <p class="italic">"Every line of code is a step toward innovation."</p>
    </section>

    <script>
        var typed = new Typed('#typed', {
            strings: ['Arshia Moghbel', 'Swift & Python Developer', 'AI and Healthcare Enthusiast'],
            typeSpeed: 70,
            backSpeed: 40,
            backDelay: 1500,
            loop: true
        });
    </script>

</body>
</html>
