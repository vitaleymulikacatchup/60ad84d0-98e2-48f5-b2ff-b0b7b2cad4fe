"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Coffee, Award, Star, Package, Users, TrendingUp, HelpCircle, Mail } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="large"
      sizing="large"
      background="wavyBackground"
      cardStyle="solid-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="BrewHaven"
          button={{
            text: "Shop Now",
            href: "products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Premium Coffee & Tea Collection"
          description="Discover our carefully curated selection of the world's finest coffee beans and tea leaves, sourced directly from sustainable farms"
          tag="Premium Quality"
          tagIcon={Coffee}
          buttons={[
            { text: "Shop Coffee", href: "products" },
            { text: "Browse Teas", href: "products" }
          ]}
          imageSrc="https://pixabay.com/get/gfe340b0e18ae7a7ca23769587bd6b4175e5b67aba18a863fa3f32de7dc8094fb2c10e68810111d5035aa6228d21932f500d1bc0e1e3e271ba774316202f1b6a0_1280.jpg"
          imageAlt="Premium coffee beans and tea leaves"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We source the finest coffee beans and tea leaves from sustainable farms around the world, bringing you exceptional quality in every cup while supporting local communities"
          buttons={[
            { text: "Our Story", href: "about" },
            { text: "Sustainability", href: "about" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Why Choose Our Coffee & Tea"
          description="Experience the difference that quality sourcing and expert roasting make in every cup"
          tag="Premium Selection"
          tagIcon={Award}
          features={[
            {
              title: "Single Origin Coffee",
              description: "Premium Arabica beans sourced from specific farms for unique flavor profiles",
              imageSrc: "https://pixabay.com/get/g804db12825c0db3e52cb99545550a2647fb883a78ccb6309043b733b6afec4f8906379619fdb053feb5a4296922fe2e3a96ba8a3d5e0337db791aaf3898dde94_1280.jpg",
              imageAlt: "Single origin coffee beans"
            },
            {
              title: "Organic Tea Collection",
              description: "Hand-picked organic tea leaves from the finest gardens worldwide",
              imageSrc: "https://pixabay.com/get/g86c56e895dc3cc8c9c3385d4ad165b1832f53442204331e92ab8cd20d6464cf5c9b24329fd3a164ec2fcd6b76d7244c76df18a31eda8525d8bd6b0beef5c15d3_1280.jpg",
              imageAlt: "Organic tea leaves"
            },
            {
              title: "Expert Roasting",
              description: "Small batch roasting to bring out the perfect flavor in every bean",
              imageSrc: "https://pixabay.com/get/g61772dc9024459681a7aa38df20b21ce6b5577820033aa1f18abb314f3ccbf0e1ec351149ee2d29606a622dcd46e9eaaaaec6a4739b80ed28ccfd99377ac0230_1280.jpg",
              imageAlt: "Coffee roasting process"
            }
          ]}
          buttons={[
            { text: "View All Products", href: "products" }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Featured Products"
          description="Our bestselling coffee and tea selections loved by customers worldwide"
          tag="Customer Favorites"
          tagIcon={Star}
          products={[
            {
              id: "1",
              name: "Premium Colombian Coffee",
              price: "$24.99",
              imageSrc: "https://pixabay.com/get/gb007dd1c631f83833da704911b1a52deebcd49e098a6af7facaf6d9fba961b1f9c17996efd2f802067a739e6db6061f97819cb8840437593c77a026553a001a1_1280.jpg",
              imageAlt: "Premium Colombian coffee package",
              onProductClick: () => console.log('Colombian coffee clicked')
            },
            {
              id: "2",
              name: "Organic Earl Grey Tea",
              price: "$18.99",
              imageSrc: "https://pixabay.com/get/g876b506212ce9179e166e47fb582b6ac5e8f443480f2ad0b26e92cb2fe9f80d1f66520691cb086050be002b42a279cdefd27391d5cb57a678fd9dd844bf7ccd9_1280.jpg",
              imageAlt: "Organic Earl Grey tea collection",
              onProductClick: () => console.log('Earl Grey clicked')
            },
            {
              id: "3",
              name: "House Blend Espresso",
              price: "$22.99",
              imageSrc: "https://pixabay.com/get/g550f66653409ccd3d4f0bd7aa7b0ad001361eb2b7a7ebb8140285a7f497543baf982c85ed070c222884ce81bf25bc44a653391b27aeb01bb94fa763800d3294d_1280.jpg",
              imageAlt: "House blend espresso coffee",
              onProductClick: () => console.log('House blend clicked')
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Subscription Plans"
          description="Get your favorite coffee and tea delivered fresh to your door with our flexible subscription options"
          tag="Monthly Delivery"
          tagIcon={Package}
          plans={[
            {
              id: "starter",
              badge: "Most Popular",
              badgeIcon: Coffee,
              price: "$19.99/mo",
              subtitle: "Perfect for coffee lovers",
              features: [
                "2 bags of premium coffee monthly",
                "Free shipping on all orders",
                "Access to exclusive blends",
                "Cancel anytime"
              ]
            },
            {
              id: "family",
              badge: "Best Value",
              badgeIcon: Users,
              price: "$34.99/mo",
              subtitle: "Great for families",
              features: [
                "4 bags of coffee + 2 tea boxes",
                "Priority shipping",
                "20% discount on extra orders",
                "Exclusive member events"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Our Impact"
          description="Numbers that showcase our commitment to quality coffee, tea, and sustainable practices"
          tag="By the Numbers"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "50,000+",
              description: "Satisfied Customers Worldwide"
            },
            {
              id: "2",
              value: "25+",
              description: "Countries Sourced From"
            },
            {
              id: "3",
              value: "98%",
              description: "Customer Satisfaction Rate"
            },
            {
              id: "4",
              value: "100%",
              description: "Ethically Sourced Products"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Coffee & Tea Industry Leaders"
          description="Join thousands of cafes, restaurants, and businesses that trust our premium products"
          tag="Industry Partners"
          tagIcon={Award}
          logos={[
            "https://pixabay.com/get/g35c59c89533b36abc958f94c049dae5c55f3dda6cb6b754e72010b10e7c6e2dd8517de5273c0e870fcf9d793ee9d0d11ac567cca19b643f0a42337aa71ea87ba_1280.jpg",
            "https://pixabay.com/get/g996763ca7b13c5f84b16edd36deedf48a8fef62fe32567f680ce0778509d19941293b942536fa61caa2f1228b0bfb5af15e19dd26efb9092eb76bdda7870c646_1280.jpg",
            "https://pixabay.com/get/gb9bdfd1b6d0bd970bc406e978ed1155362a47e503e1b75d380a707bc202bda0ecff8a7baf204205f608a1012be756cdfe1b578c719de89f6cfcae59e46829042_1280.jpg",
            "https://pixabay.com/get/gda4a9b5c9b2793552eee176f5851b2e9d5453e542909c77a41f7f258e460fb739f84cff6b25e7458891185a2b133be9e23f38a350d9eaf07d441246888d1f944_1280.jpg",
            "https://pixabay.com/get/g72858a378eed2ac4e5849d7448f66d3822b1aa8be4f3244a8f1e556ba9f88fbddf20716442984f7ccce46135bfb868ca648570f9079a2b9bee03a55409946cca_1280.jpg",
            "https://pixabay.com/get/gafa7fb41c0fd5c9de712ae404a392187982a71406a07e99ad6b5159c637ac2b4bf179d6be01dcd50c77691c7af3fd015c035336447b28ca7d22474c0c7bdcfc1_1280.jpg",
            "https://pixabay.com/get/g2b628ac07aa358a4cd59bb849fa3796a5c4c1e19a0737e99d3048833fff6904facd89704439e9cbbafea79f118573f9b5fa7c061ffdf409dc28573f2f6781e4f_1280.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about our coffee, tea, and subscription services"
          tag="Help Center"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What types of coffee do you offer?",
              content: "We offer a wide variety of premium coffee including single origin, blends, espresso, and decaf options. All our coffee is freshly roasted in small batches to ensure optimal flavor and quality."
            },
            {
              id: "2",
              title: "Are your teas organic?",
              content: "Yes, our entire tea collection is certified organic and ethically sourced from sustainable farms. We offer black, green, white, oolong, and herbal teas from the world's finest tea gardens."
            },
            {
              id: "3",
              title: "How does the subscription work?",
              content: "Our subscription service delivers fresh coffee and tea to your door monthly. You can customize your selection, pause anytime, and cancel with no fees. All subscriptions include free shipping and exclusive member discounts."
            },
            {
              id: "4",
              title: "Do you ship internationally?",
              content: "Currently, we ship within the United States and Canada. We're working on expanding our shipping options to serve more international customers in the future."
            },
            {
              id: "5",
              title: "What's your return policy?",
              content: "We offer a 100% satisfaction guarantee. If you're not completely happy with your purchase, contact us within 30 days for a full refund or replacement."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          tagIcon={Mail}
          title="Get the Latest Coffee & Tea News"
          description="Subscribe to our newsletter for brewing tips, new product launches, and exclusive offers delivered to your inbox"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive our weekly newsletter and promotional emails. Unsubscribe anytime."
          onSubmit={(email) => console.log('Newsletter signup:', email)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Products",
              items: [
                { label: "Coffee", href: "products" },
                { label: "Tea", href: "products" },
                { label: "Subscriptions", href: "pricing" },
                { label: "Gift Cards", href: "products" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "about" },
                { label: "Sustainability", href: "about" },
                { label: "Careers", href: "about" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Shipping Info", href: "contact" },
                { label: "Returns", href: "contact" }
              ]
            }
          ]}
          logoText="BrewHaven"
          copyrightText="© 2025 | BrewHaven Coffee & Tea Co."
          onPrivacyClick={() => console.log('Privacy policy clicked')}
        />
      </div>
    </ThemeProvider>
  );
}