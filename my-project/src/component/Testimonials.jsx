import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.section
      className="py-stack-lg bg-surface-container-low"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-margin-desktop text-center">

        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="material-symbols-outlined text-primary text-5xl mb-6"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          format_quote
        </motion.span>

        <div className="relative" id="testimonial-slider">

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-headline-md text-headline-md italic text-on-surface mb-8">
              "BloomCraft redefined what I thought was possible with floral
              design. The Midnight Garden collection brought an aura of mystery
              and absolute luxury to our anniversary dinner."
            </p>

            <div className="flex flex-col items-center">
              <span className="font-label-sm uppercase tracking-widest text-secondary mb-1">
                Isabella V.
              </span>

              <span className="font-body-md text-on-surface-variant text-sm">
                Art Curator, New York
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
};

export default Testimonials;
