import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Clock, Play } from 'lucide-react';

// Mock data for demonstration
const featuredCourses = [
  {
    id: 1,
    title: "Complete React Developer Course",
    instructor: "John Doe",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.8,
    students: 15420,
    duration: "12 hours",
    image: "/next.svg",
    category: "Programming",
    isNew: true,
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    instructor: "Jane Smith",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.9,
    students: 8920,
    duration: "8 hours",
    image: "/next.svg",
    category: "Design",
    isNew: false,
  },
  {
    id: 3,
    title: "Digital Marketing Fundamentals",
    instructor: "Mike Johnson",
    price: 69.99,
    originalPrice: 89.99,
    rating: 4.7,
    students: 12340,
    duration: "10 hours",
    image: "/next.svg",
    category: "Marketing",
    isNew: true,
  },
  {
    id: 4,
    title: "Business Strategy & Leadership",
    instructor: "Sarah Wilson",
    price: 99.99,
    originalPrice: 149.99,
    rating: 4.6,
    students: 5670,
    duration: "15 hours",
    image: "/next.svg",
    category: "Business",
    isNew: false,
  },
];

const categories = [
  { name: "Programming", icon: "💻", count: 150, href: "/categories/programming" },
  { name: "Design", icon: "🎨", count: 89, href: "/categories/design" },
  { name: "Business", icon: "📊", count: 67, href: "/categories/business" },
  { name: "Marketing", icon: "📈", count: 94, href: "/categories/marketing" },
  { name: "Music", icon: "🎵", count: 45, href: "/categories/music" },
  { name: "Photography", icon: "📷", count: 78, href: "/categories/photography" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Learn New Skills Online
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Discover top courses in programming, design, business, and more
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Explore Courses
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Categories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Categories
            </h2>
            <p className="text-lg text-gray-600">
              Choose from hundreds of courses in various categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link key={category.name} href={category.href}>
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count} courses</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Featured Courses
              </h2>
              <p className="text-lg text-gray-600">
                Handpicked courses from our top instructors
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  {course.isNew && (
                    <Badge className="absolute top-2 left-2 bg-green-500">
                      New
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <Button size="sm" className="opacity-0 hover:opacity-100 transition-opacity">
                      <Play className="h-4 w-4 mr-1" />
                      Preview
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {course.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      {course.rating}
                    </div>
                  </div>
                  <CardTitle className="text-lg mb-2 line-clamp-2">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    by {course.instructor}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-4 pt-0">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gray-900">
                        ${course.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        ${course.originalPrice}
                      </span>
                    </div>
                    <Button size="sm">
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-gray-400">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-400">Expert Instructors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1,000+</div>
              <div className="text-gray-400">Online Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 