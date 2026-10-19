import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const SocialMediaHub = () => (
  <section className="bg-muted/30 py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
          Living Culture Health <span className="bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">community</span>
        </h2>
        <p className="text-muted-foreground">
          Official social channels will be announced by Living Culture Health South Africa. Until then, use the contact form for product updates, fermentation tips and partnership enquiries.
        </p>
        <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0B3D2E] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#15513f]">
          <MessageCircle className="h-4 w-4" />
          Contact Living Culture Health
        </Link>
      </motion.div>
    </div>
  </section>
);
