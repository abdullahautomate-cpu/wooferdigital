import type { Testimonial } from "@/types/testimonial";

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Woofer Digital transformed our Google Ads account. Within 60 days, our cost-per-lead dropped by 52% and our lead volume tripled. Their team is deeply analytical and truly cares about results.",
    author: "Sarah Mitchell",
    title: "VP of Marketing",
    company: "MedBridge Health",
    industry: ["healthcare"],
    services: ["google-ads", "lead-generation"],
    rating: 5,
    initials: "SM",
  },
  {
    id: "t2",
    quote:
      "We've worked with three other agencies before Woofer Digital. None of them came close to the ROI we've seen. Our Facebook and Instagram ROAS went from 1.8x to 6.2x in five months.",
    author: "James Kowalski",
    title: "CEO",
    company: "Apex Fitness Gear",
    industry: ["ecommerce"],
    services: ["facebook-instagram-ads", "ecommerce-advertising"],
    rating: 5,
    initials: "JK",
  },
  {
    id: "t3",
    quote:
      "The programmatic campaigns Woofer Digital built for us are generating qualified leads at a cost 40% below our industry benchmark. Their targeting is incredibly precise.",
    author: "Rebecca Tran",
    title: "Director of Growth",
    company: "Nexus SaaS",
    industry: ["saas"],
    services: ["programmatic-advertising", "lead-generation"],
    rating: 5,
    initials: "RT",
  },
  {
    id: "t4",
    quote:
      "Our law firm has been running ads for years with mediocre results. Woofer Digital overhauled our entire strategy and now we're getting 3-4x more qualified case leads every month.",
    author: "Daniel Reyes",
    title: "Managing Partner",
    company: "Reyes & Associates Law",
    industry: ["law-firm"],
    services: ["google-ads", "lead-generation"],
    rating: 5,
    initials: "DR",
  },
  {
    id: "t5",
    quote:
      "Our CTV campaign with Woofer Digital reached over 4 million targeted households in our key markets. Brand awareness metrics are up 78% and direct traffic has increased significantly.",
    author: "Michelle Park",
    title: "Brand Director",
    company: "Summit Financial Group",
    industry: ["financial-services"],
    services: ["connected-tv", "programmatic-advertising"],
    rating: 5,
    initials: "MP",
  },
  {
    id: "t6",
    quote:
      "Incredible TikTok results. We launched a new product line and Woofer Digital's TikTok strategy drove $800K in sales in the first 30 days — at a 4.5x ROAS. We're now scaling aggressively.",
    author: "Tyler Brooks",
    title: "Founder",
    company: "LifeStyle Apparel Co.",
    industry: ["ecommerce"],
    services: ["tiktok-advertising", "ecommerce-advertising"],
    rating: 5,
    initials: "TB",
  },
  {
    id: "t7",
    quote:
      "Woofer Digital handles all of our paid media across Google, Meta, and programmatic. The cross-channel approach and attribution modeling they use gives us a complete picture of ROI.",
    author: "Amanda Wilson",
    title: "CMO",
    company: "Bright Home Services",
    industry: ["home-services"],
    services: ["media-buying", "google-ads", "facebook-instagram-ads"],
    rating: 5,
    initials: "AW",
  },
  {
    id: "t8",
    quote:
      "Our dental practice went from struggling to fill appointment slots to having a two-week waitlist — all driven by the Google Ads campaign Woofer Digital manages for us.",
    author: "Dr. Kevin Patel",
    title: "Owner",
    company: "Patel Family Dental",
    industry: ["dental"],
    services: ["google-ads", "lead-generation"],
    rating: 5,
    initials: "KP",
  },
  {
    id: "t9",
    quote:
      "We scaled our Shopify store from $200K to $1.8M in annual revenue in one year. Woofer Digital's Meta and Google strategy was the primary growth driver. Exceptional team.",
    author: "Chloe Nguyen",
    title: "Co-Founder",
    company: "Luxe Beauty Studio",
    industry: ["ecommerce"],
    services: ["facebook-instagram-ads", "google-ads", "ecommerce-advertising"],
    rating: 5,
    initials: "CN",
  },
  {
    id: "t10",
    quote:
      "The media buying expertise at Woofer Digital is on another level. They negotiated premium placements at CPMs 30% below market rate and the targeting efficiency is remarkable.",
    author: "Robert Hanson",
    title: "VP of Advertising",
    company: "AutoNation Group",
    industry: ["automotive"],
    services: ["media-buying", "programmatic-advertising"],
    rating: 5,
    initials: "RH",
  },
  {
    id: "t11",
    quote:
      "We came to Woofer Digital with a $50K/month budget and a ROAS problem. Within 90 days, we were at 8.1x ROAS and scaling to $120K/month. They know ecommerce advertising cold.",
    author: "Marcus Davis",
    title: "Head of Ecommerce",
    company: "Peak Performance Nutrition",
    industry: ["ecommerce"],
    services: ["ecommerce-advertising", "google-ads", "facebook-instagram-ads"],
    rating: 5,
    initials: "MD",
  },
  {
    id: "t12",
    quote:
      "Insurance lead gen is a brutal space. Woofer Digital found a way to consistently deliver exclusive, high-intent leads at $45 CPL — well below any competitor we've used.",
    author: "Laura Chen",
    title: "Director of Acquisition",
    company: "Pacific Insurance Network",
    industry: ["insurance"],
    services: ["lead-generation", "google-ads"],
    rating: 5,
    initials: "LC",
  },
];

export function getAllTestimonials(): Testimonial[] {
  return TESTIMONIALS;
}

export function getTestimonialsByIds(ids: string[]): Testimonial[] {
  return TESTIMONIALS.filter((t) => ids.includes(t.id));
}

export function getTestimonialsByIndustry(industry: string): Testimonial[] {
  return TESTIMONIALS.filter((t) => t.industry.includes(industry));
}

export function getTestimonialsByService(service: string): Testimonial[] {
  return TESTIMONIALS.filter((t) => t.services.includes(service));
}
