import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Layering: Spring Style Guide",
      excerpt:
        "Master the perfect spring look with our guide to layering essentials. From lightweight knits to classic blazers, discover how to create versatile outfits.",
      image:
        "https://images.pexels.com/photos/27733947/pexels-photo-27733947.jpeg",
      category: "Style Guide",
      date: "March 15, 2024",
      slug: "art-of-layering-spring-style-guide",
    },
    {
      id: 2,
      title: "Behind the Scenes: Our Manufacturing Process",
      excerpt:
        "Take a peek behind the curtain to see how our garments are made with attention to detail and commitment to quality craftsmanship.",
      image:
        "https://images.pexels.com/photos/4911192/pexels-photo-4911192.jpeg",
      category: "Behind the Brand",
      date: "March 8, 2024",
      slug: "behind-scenes-manufacturing-process",
    },
    {
      id: 3,
      title: "Sustainable Fashion: Our Commitment to the Environment",
      excerpt:
        "Learn about our sustainable practices and how we're working to reduce our environmental impact while maintaining the highest quality standards.",
      image:
        "https://images.pexels.com/photos/5704846/pexels-photo-5704846.jpeg",
      category: "Sustainability",
      date: "February 28, 2024",
      slug: "sustainable-fashion-commitment",
    },
  ];

  const categories = [
    "All",
    "Style Guide",
    "Behind the Brand",
    "Sustainability",
    "Seasonal",
    "Care Tips",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-semibold mb-4">
            The Journal
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stories of style, craftsmanship, and the inspiration behind our
            collections. Discover the people and places that shape our brand.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Link to={`/blog/${blogPosts[0].slug}`} className="group block">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge variant="secondary" className="w-fit mb-4">
                      Featured
                    </Badge>
                    <h2 className="text-3xl font-serif font-semibold mb-4 group-hover:text-primary transition-colors">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span>{blogPosts[0].category}</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {blogPosts[0].date}
                      </div>
                    </div>
                    <Button className="w-fit btn-primary">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-2xl font-serif font-semibold mb-8">
            Recent Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group block"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                        <span>{post.category}</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </div>
                      </div>
                      <h3 className="font-semibold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {post.excerpt}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
