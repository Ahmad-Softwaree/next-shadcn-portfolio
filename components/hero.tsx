"use client";

import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleArrowDown, Zap } from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation();

  const words = [
    "React.js",
    "Next.js",
    "Nest.js",
    "Express.js",
    "React Native",
  ];

  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-6 pt-6">
        {/* Animated Grid Background */}
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 h-full skew-y-12"
          )}
        />

        {/* Decorative Blur Balls */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Purple Blur Ball - Top Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 sm:-top-40 sm:-left-40 bg-purple-500/30 dark:bg-purple-600/20 rounded-full blur-[120px] animate-pulse"
          />

          {/* Blue Blur Ball - Top Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute top-0 right-0 w-48 h-48 sm:w-80 sm:h-80 sm:-top-20 sm:-right-32 bg-blue-500/30 dark:bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-700"
          />

          {/* Pink Blur Ball - Bottom */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-[30rem] sm:h-[30rem] sm:-bottom-32 bg-pink-500/20 dark:bg-pink-600/15 rounded-full blur-[130px] animate-pulse delay-1000"
          />

          {/* Cyan Blur Ball - Bottom Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute bottom-20 left-0 w-48 h-48 sm:w-64 sm:h-64 sm:-left-20 bg-cyan-500/25 dark:bg-cyan-600/18 rounded-full blur-[90px] animate-pulse delay-500"
          />
        </div>

        <div className="relative z-[1] text-center max-w-screen-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            <Badge className="rounded-full border-none bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 text-white shadow-lg shadow-purple-500/20">
              <Zap className="fill-current" />
              {String(t("hero.badge" as any))}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
            {String(t("hero.title" as any))}{" "}
            <span dir="ltr" className="inline-block english_font relative">
              <FlipWords
                words={words}
                className="font-extrabold [&>*]:bg-gradient-to-r [&>*]:from-purple-600 [&>*]:via-blue-600 [&>*]:to-cyan-600 dark:[&>*]:from-purple-400 dark:[&>*]:via-blue-400 dark:[&>*]:to-cyan-400 [&>*]:bg-clip-text [&>*]:text-transparent [&>*]:inline-block"
              />
            </span>
            <br />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-[17px] md:text-lg text-muted-foreground max-w-3xl mx-auto">
            {String(t("hero.description" as any))}{" "}
            <span className="font-semibold text-foreground">
              {String(t("hero.full_stack" as any))}
            </span>{" "}
            {String(t("hero.description_2" as any))}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex items-center justify-center gap-4">
            <a href="#projects">
              <Button
                size="lg"
                className="cursor-pointer rounded-full text-base bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:from-purple-500 dark:to-blue-500 dark:hover:from-purple-600 dark:hover:to-blue-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300">
                {String(t("hero.cta" as any))}{" "}
                <CircleArrowDown className="ml-2 !h-5.5 !w-5.5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
