import AboutSection from '@/Components/AboutSection'
import BlogSection from '@/Components/BlogSection'
import SubscribeForm from '@/Components/SubscribeForm'
import SocialLinks from '@/Components/SocialLinks'

export default function Home() {
  return (
    <main className="px-4 md:px-20 py-10 bg-white">
      <SocialLinks />

      <section className="grid md:grid-cols-3 gap-8 mt-4">
        <AboutSection />
        <BlogSection />
        <SubscribeForm />
      </section>
    </main>
  )
}
