import './globals.css'
import ArticleContent from "@/component/articles-content/page";
import Aside from "@/component/aside/page";
import AuthorsCarousel from '@/component/authors-carousel/page';


export default function Home() {
  return (
    // Main content
    <main id="contentHomepage" className="grid-container">
      {/*parent of left content + aside */}
      <div className ="row parentContent">
        {/* content */}
          <section className="content">
            <ArticleContent/>
            <Aside/>
          </section>
      </div>
        {/* carousel authors */}
        <AuthorsCarousel/>
    </main>

  );
}
