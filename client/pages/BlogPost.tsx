import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams();

  // This would typically fetch from an API based on the slug
  const post = {
    title: "The Art of Layering: Spring Style Guide",
    excerpt:
      "Master the perfect spring look with our guide to layering essentials.",
    content: `
      <p>Spring is the perfect time to master the art of layering. As temperatures fluctuate between cool mornings and warm afternoons, having a versatile wardrobe that can adapt to these changes is essential for both comfort and style.</p>

      <h2>Essential Layering Pieces</h2>
      <p>The foundation of great layering starts with quality basics. Here are the key pieces every wardrobe should include:</p>

      <ul>
        <li><strong>Lightweight Knits:</strong> Cashmere or merino wool sweaters that can be worn alone or over shirts</li>
        <li><strong>Classic Button-Downs:</strong> Crisp cotton shirts that work as base layers or standalone pieces</li>
        <li><strong>Versatile Blazers:</strong> Unstructured jackets that add polish without bulk</li>
        <li><strong>Light Cardigans:</strong> Easy to remove when temperatures rise</li>
      </ul>

      <h2>The Rule of Three</h2>
      <p>The most effective layering follows the rule of three: a base layer, a middle layer, and an outer layer. This creates depth and visual interest while maintaining functionality.</p>

      <blockquote>
        "The key to successful layering is choosing pieces that complement each other in both color and texture, creating a cohesive look that feels intentional rather than accidental."
      </blockquote>

      <h2>Color Coordination</h2>
      <p>When layering, stick to a cohesive color palette. Neutral tones like navy, cream, and sage provide a sophisticated foundation, while subtle patterns can add visual interest without overwhelming the look.</p>

      <p>Remember, the goal of layering isn't just practicality—it's about creating outfits with dimension and sophistication that reflect your personal style.</p>
    `,
    image:
      "https://images.pexels.com/photos/27733947/pexels-photo-27733947.jpeg",
    category: "Style Guide",
    date: "March 15, 2024",
    author: "Sarah Johnson",
    readTime: "5 min read",
  };

  const relatedPosts = [
    {
      id: 1,
      title: "Transitional Dressing: Summer to Fall",
      image:
        "https://images.pexels.com/photos/32796818/pexels-photo-32796818.jpeg",
      slug: "transitional-dressing-summer-fall",
    },
    {
      id: 2,
      title: "Building a Capsule Wardrobe",
      image:
        "https://images.pexels.com/photos/5704846/pexels-photo-5704846.jpeg",
      slug: "building-capsule-wardrobe",
    },
    {
      id: 3,
      title: "The Perfect White Shirt Guide",
      image:
        "https://images.pexels.com/photos/6276012/pexels-photo-6276012.jpeg",
      slug: "perfect-white-shirt-guide",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back to Blog */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Journal
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <Badge variant="secondary">{post.category}</Badge>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-serif font-semibold mb-4">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              By {post.author}
            </span>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <Separator className="mb-12" />

        {/* Related Posts */}
        <section>
          <h2 className="text-2xl font-serif font-semibold mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.slug}`}
                className="group block"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
