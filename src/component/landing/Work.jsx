import { CircleArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const projects = [
  {
    category: 'WEBSITE',
    title: 'Creative landing page',
    image: '/services/work1',
    link: '/projects/landing-page'
  },
  {
    category: 'DEVELOPMENT',
    title: 'Automation. Advanced Level',
    image: '/services/work2',
    link: '/projects/automation'
  },

  {
    category: 'BRANDING',
    title: 'Creative Branding',
    image: '/services/work1',
    link: '/projects/branding'
  },
]

const projects2 = [
  
  {
    category: 'DIGITAL MARKETING',
    title: "Why We Collect User's Data",
    image: '/services/work2',
    link: '/projects/user-data'
  },
  {
    category: 'USER TESTING',
    title: 'Creative landing page',
    image: '/services/work1',
    link: '/projects/user-testing'
  },
  {
    category: 'SEO',
    title: 'How We Optimized Our SEO',
    image: '/services/work2',
    link: '/projects/seo'
  }
]

export default function Work() {
  return (
    <section className="bg-[#0B0B0B]  py-16 md:py-20 font-quicksand">
      <div className="mx-auto container px-6 grid gap-8 lg:grid-cols-3" >
        {/* Header */}
        <div className="lg:col-span-1 mb-12 max-w-[412px]">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Some pieces of our work
          </h2>
          <p className="mb-6 text-white/100 font-medium">
            Explore some of our most successful projects, where we&apos;ve transformed
            ideas into impactful digital experiences. Each piece showcases our
            commitment to excellence, creativity, and delivering results that speak
            for themselves.
          </p>
          <Link
            to="/projects"
            className="inline-block rounded-full border text-sm font-bold border-customred px-6 py-3 text-customred transition-colors hover:bg-customred hover:text-white"
          >
            SHOW MORE
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-8   ">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={project.link}
              className="group block relative overflow-hidden rounded-s border border-[#A1AEBF] p-6 transition-colors hover:border-customred"
            >
              {project.image && (
                <div className={project.image ? "mb-6 overflow-hidden rounded-s" : ""}>
                <img
                    src={`/images${project.image}.svg`}
                    alt={project.title}
                    width={365}
                    height={142}
                    className="h-auto w-full transition-transform duration-300 hidden group-hover:scale-105 group-hover:block"
                  
                  
                  />
                </div>
              )}
              <div className="mb-5">
                <span className="inline-block text-xs  font-bold rounded bg-customred px-2 py-1 text-sm font-medium text-black">
                  {project.category}
                </span>
              </div>
              <h3 className="mb-5 text-2xl font-bold text-white">
                {project.title}
              </h3>
              <div className="flex items-center text-[#728095] transition-colors group-hover:text-customred">
                Read more
                <CircleArrowRight className="ml-2 h-4 w-4"/>
              </div>
            </Link>
          ))}
        </div>
     
        {/* Projects2 Grid */}
        <div className="flex flex-col gap-8   ">
          {projects2.map((project, index) => (
            <Link
              key={index}
              to={project.link}
              className="group block relative overflow-hidden rounded-s border border-[#A1AEBF]  p-6 transition-colors hover:border-customred"
            >
              {project.image && (
                <div className={project.image ? "mb-6 overflow-hidden rounded-s" : ""}>
                <img
                    src={`/images${project.image}.svg`}
                    alt={project.title}
                    width={365}
                    height={142}
                    className="h-auto w-full transition-transform duration-300 hidden group-hover:scale-105 group-hover:block  "
                  />
                </div>
              )}
              <div className="mb-5">
                <span className="inline-block text-xs font-bold rounded bg-customred px-2 py-1 text-sm font-medium text-black">
                  {project.category}
                </span>
              </div>
              <h3 className="mb-5 text-2xl font-bold text-white">
                {project.title}
              </h3>
              <div className="flex items-center text-[#728095] transition-colors group-hover:text-customred">
                Read more
                <CircleArrowRight className="ml-2 h-4 w-4"/>
              </div>
            </Link>
          ))}
        </div>
     






      </div>
    </section>
  )
}

