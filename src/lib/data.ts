export const ARTICLES = [
    {
        id: "future-of-generative-ai",
        slug: "future-of-generative-ai",
        title: "The Future of Generative AI: Beyond Text and Images",
        excerpt: "As large language models evolve, we explore the next frontier of multimodal AI systems that can reason, plan, and interact with the physical world.",
        category: "Insights",
        date: "Oct 26, 2023",
        author: "Alex Rivera",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        content: `
      <p>Generative AI has taken the world by storm, but we are only scratching the surface. The next generation of models will go beyond simple text and image generation to understand physics, reason about complex problems, and interact with the real world.</p>
      <h2>Multimodal Reasoning</h2>
      <p>Future models will seamlessly integrate text, audio, video, and sensory data. Imagine an AI that can watch a video of a broken engine, diagnose the problem by sound and sight, and guide you through the repair process in real-time.</p>
      <h2>Planning and Agency</h2>
      <p>Current LLMs are reactive. The next wave will be agentic—capable of forming plans, executing steps, and correcting course when things go wrong.</p>
    `,
        tags: ["AI", "Future", "Generative AI"]
    },
    {
        id: "understanding-transformers",
        slug: "understanding-transformers",
        title: "Understanding Transformers: A Deep Dive",
        excerpt: "A comprehensive guide to the architecture that revolutionized Natural Language Processing.",
        category: "Tutorials",
        date: "Oct 24, 2023",
        author: "Sarah Chen",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
        content: `
      <p>The Transformer architecture is the backbone of modern NLP. Let's break down how it works, specifically the Self-Attention mechanism.</p>
      <h2>The Attention Mechanism</h2>
      <p>Attention allows the model to weigh the importance of different words in a sentence when processing each word.</p>
      <pre><code>
def scaled_dot_product_attention(query, key, value):
    matmul_qk = tf.matmul(query, key, transpose_b=True)
    dk = tf.cast(tf.shape(key)[-1], tf.float32)
    scaled_attention_logits = matmul_qk / tf.math.sqrt(dk)
    attention_weights = tf.nn.softmax(scaled_attention_logits, axis=-1)
    output = tf.matmul(attention_weights, value)
    return output, attention_weights
      </code></pre>
      <p>This simple yet powerful operation enables the model to capture long-range dependencies effectively.</p>
    `,
        tags: ["NLP", "Deep Learning", "Python"]
    },
    {
        id: "top-ai-tools-2024",
        slug: "top-ai-tools-2024",
        title: "Top 10 AI Tools for Developers in 2024",
        excerpt: "Boost your productivity with these essential AI-powered coding assistants and tools.",
        category: "Reviews",
        date: "Oct 22, 2023",
        author: "Mike Ross",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        content: "<p>Here are the top tools...</p>",
        tags: ["Tools", "Productivity"]
    },
    {
        id: "ethical-ai-deployment",
        slug: "ethical-ai-deployment",
        title: "Ethical Considerations in AI Deployment",
        excerpt: "Why responsible AI development matters more than ever in the age of autonomous agents.",
        category: "Opinions",
        date: "Oct 20, 2023",
        author: "Dr. A. Smith",
        image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800",
        content: "<p>Ethics in AI...</p>",
        tags: ["Ethics", "Safety"]
    },
    {
        id: "pytorch-neural-network",
        slug: "pytorch-neural-network",
        title: "Building Your First Neural Network with PyTorch",
        excerpt: "Step-by-step tutorial for beginners to create and train a simple neural network.",
        category: "Tutorials",
        date: "Oct 18, 2023",
        author: "Code Master",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
        content: "<p>Tutorial content...</p>",
        tags: ["PyTorch", "Tutorial", "Python"]
    }
];

export const TRENDING_POSTS = [
    {
        id: 1,
        title: "OpenAI Announces GPT-5: What We Know So Far",
        date: "Oct 25, 2023",
        slug: "gpt-5-announcement",
    },
    {
        id: 2,
        title: "Python vs. Julia for AI Development",
        date: "Oct 23, 2023",
        slug: "python-vs-julia",
    },
    {
        id: 3,
        title: "The Rise of Edge AI",
        date: "Oct 21, 2023",
        slug: "edge-ai-rise",
    },
];
