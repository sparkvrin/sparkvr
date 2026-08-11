export interface SeedBlog {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
}

// Pulled from the static content already live on the public site
// (src/app/blog/page.tsx and src/app/blog/[slug]/page.tsx) so the CMS
// starts out managing the same posts visitors already see.
export const SEED_BLOGS: SeedBlog[] = [
  {
    title: "How Experiential Learning Improves Concept Retention",
    slug: "how-experiential-learning-improves-concept-retention",
    category: "RESEARCH",
    excerpt:
      "New research shows how immersive experiences strengthen understanding and long-term retention in students.",
    author: "SparkVR Editorial Team",
    date: "May 24, 2024",
    image: "/blog_vr.webp",
    metaTitle: "How Experiential Learning Improves Concept Retention",
    metaDescription:
      "New research shows how immersive experiences strengthen understanding and long-term retention in students.",
    content: `For decades, education has relied on explanation. Teachers explain brilliantly. The curriculum is structured. Examinations are rigorous. Yet many concepts remain abstract. Students are asked to imagine.

What if they didn't have to? What if learning could be experienced instead of imagined?

Emerging research in experiential learning shows that when students actively engage with concepts through immersive and interactive experiences, their understanding deepens significantly—and more importantly, they remember longer.

The Science Behind Experiential Learning

Studies from cognitive science and educational psychology consistently highlight that experiential learning activates multiple areas of the brain. This multi-sensory engagement helps students form stronger neural connections, leading to improved retention and application of knowledge.

"Students remember 75% of what they experience, compared to only 10% of what they read." — National Training Laboratories

Why It Matters in Classrooms

When abstract topics—like the human heart, planetary motion, or chemical reactions—are experienced in a safe, immersive environment, students move from passive reception to active discovery.

Concepts become visible. Thinking becomes deeper. Confidence grows naturally.

At SparkVR, we design experiences that fit seamlessly into the school day and curriculum—making conceptual clarity a reality for every student.`,
  },
  {
    title: "How VR is Transforming Modern Classrooms",
    slug: "vr-modern-classrooms",
    category: "EDUCATION",
    excerpt: "Explore the shift from textbook learning to immersive 3D explorations.",
    author: "SparkVR Editorial Team",
    date: "May 4, 2024",
    image: "/blog_vr.webp",
    metaTitle: "How VR is Transforming Modern Classrooms",
    metaDescription: "Explore the shift from textbook learning to immersive 3D explorations.",
    content: `Virtual Reality (VR) is no longer a futuristic concept—it's here, and it's changing the way students learn. By stepping inside a cell or walking through ancient Rome, history and science come alive in ways books never could.

Beyond the Textbook

Traditional teaching methods, while effective, often struggle to convey the scale and complexity of certain subjects. VR bridges this gap by providing a 1:1 scale experience of everything from atomic structures to the vastness of space.

"Education is not the learning of facts, but the training of the mind to think." — Albert Einstein

In a modern SparkVR-enabled classroom, students are not just spectators; they are explorers. This shift from passive to active learning is the cornerstone of the modern educational revolution.`,
  },
  {
    title: "The Future of Cognitive Learning & Tech",
    slug: "future-cognitive-learning",
    category: "RESEARCH",
    excerpt: "Understanding the neural impact of interactive virtual environments.",
    author: "Sanya Verma",
    date: "April 28, 2024",
    image: "/blog_tech.webp",
    metaTitle: "The Future of Cognitive Learning & Tech",
    metaDescription: "Understanding the neural impact of interactive virtual environments.",
    content: `Cognitive learning is evolving at a rapid pace, driven by breakthroughs in neuroscience and immersive technology. Interactive virtual environments are proving to be powerful tools for cognitive development.

Neural Mapping in VR

Recent data suggests that the brain processes virtual experiences with a high degree of 'presence,' leading to the same neural pathways being activated as in real-world scenarios. This has profound implications for skill acquisition and emotional intelligence.

As we move toward more personalized, AI-driven learning paths, the integration of VR will become standard, offering a customized pace for every unique learner.`,
  },
  {
    title: "Evolution of the Science Lab: From Bunsen to Bits",
    slug: "science-lab-evolution",
    category: "INNOVATION",
    excerpt: "Why virtual labs are becoming the safer, more scalable alternative.",
    author: "SparkVR Editorial Team",
    date: "April 15, 2024",
    image: "/blog1.webp",
    metaTitle: "Evolution of the Science Lab: From Bunsen to Bits",
    metaDescription: "Why virtual labs are becoming the safer, more scalable alternative.",
    // Note: the live site only ever had a summary card for this post, no full
    // article — this stub just carries that same summary until it's expanded.
    content: `Why virtual labs are becoming the safer, more scalable alternative.

This article is a placeholder imported from the website's existing summary card — edit this post to add the full article content.`,
  },
];
