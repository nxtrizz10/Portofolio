"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { DiReact, DiNodejsSmall, DiVisualstudio, DiPhp } from "react-icons/di";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiLaravel,
} from "react-icons/si";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const handleScroll = () => {
      // Jika scroll lebih dari 50px, ubah status isScrolled
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projectData = [
    {
      title: "Pantau Magang",
      description:
        "Platform monitoring kegiatan magang mahasiswa secara real-time untuk perusahaan LEMIGAS.",
      image: "/pantaumagang.jpg", // Simpan gambar di folder public
      tech: [
        <SiNextdotjs key="next" />,
        <SiTailwindcss key="tailwind" />,
        <SiTypescript key="ts" />,
      ],
    },
    {
      title: "Cafetalish",
      description:
        "Aplikasi manajemen kafe terintegrasi untuk pemesanan menu dan manajemen stok inventaris.",
      image: "/cafetalish.jpg", // Simpan gambar di folder public
      tech: [
        <SiLaravel key="laravel" />,
        <SiTailwindcss key="tailwind" />,
        <DiPhp key="php" />,
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30">
      {/* GLOW DECORATION */}
      <div className="fixed top-0 -left-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
      <div className="fixed bottom-0 -right-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>

      {/* NAVBAR */}
      <div className="fixed top-6 w-full flex justify-center z-50 px-6">
        <nav
          className={`flex items-center justify-between transition-all duration-500 ease-in-out px-6 rounded-full border border-white/10 backdrop-blur-xl shadow-2xl
          ${
            isScrolled
              ? "w-full max-w-md h-12 bg-black/80 shadow-blue-500/10"
              : "w-full max-w-2xl h-14 bg-black/40"
          }`}
        >
          {/* Bagian Kiri: Foto + Logo */}
          <div className="flex items-center gap-3">
            <div
              className={`relative transition-all duration-500 shrink-0 ${
                isScrolled ? "w-7 h-7" : "w-9 h-9"
              }`}
            >
              <img
                src="/profile.jpg"
                alt="Lando"
                className="rounded-full object-cover w-full h-full border-2 border-white/20 shadow-md aspect-square"
              />
              {/* Status Online Dot */}
              <div
                className={`absolute bottom-0 right-0 bg-green-500 border border-black rounded-full transition-all duration-500 ${
                  isScrolled ? "w-2 h-2" : "w-2.5 h-2.5"
                }`}
              ></div>
            </div>

            <span
              className={`font-bold tracking-tighter transition-all duration-500 font-mono
              ${isScrolled ? "text-xs" : "text-sm"}
              bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent`}
            >
              LANDO.DEV
            </span>
          </div>

          {/* Menu Links */}
          <div className="flex items-center gap-1">
            {["About", "Projects", "Skills"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`uppercase tracking-widest font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-500
                  ${
                    isScrolled
                      ? "px-2 py-1 text-[9px]"
                      : "px-4 py-1.5 text-[11px]"
                  }
                `}
              >
                {item}
              </a>
            ))}

            <div className="w-px h-3 bg-white/10 mx-2" />

            <a
              href="mailto:rizcyorlando1003@gmail.com?subject=Tanya%20Tentang%20Project&body=Halo%20Lando!"
              className={`uppercase tracking-widest font-bold text-blue-400 hover:text-blue-300 
                hover:tracking-[0.2em] transition-all duration-500
                ${isScrolled ? "text-[9px]" : "text-[11px]"}
              `}
            >
              Contact
            </a>
          </div>
        </nav>
      </div>

      {/* HERO SECTION */}
      <section
        id="about"
        className="relative pt-40 pb-20 px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for Work
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-none">
            Membangun masa depan <br />
            <span className="bg-linear-to-b from-white to-gray-500 bg-clip-text text-transparent">
              lewat baris kode.
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Hi, saya Lando. Seorang pengembang yang fokus pada estetika
            minimalis dan performa maksimal menggunakan React ecosystem.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => router.push("/projectview")}
              className="bg-white cursor-pointer text-black hover:bg-gray-200 rounded-full px-8"
            >
              View Projects
            </Button>
            <div className="flex items-center gap-2 ml-4">
              <a
                href="https://github.com/nxtrizz10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-white cursor-pointer"
                >
                  <FaGithub size={20} />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/gregorius-rizcy-9b1694310/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-white cursor-pointer"
                >
                  <FaLinkedin size={20} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION (Icons focus) */}
      <section id="skills" className="py-20 border-y border-white/5 bg-white/2">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex flex-col items-center gap-2 animate-float delay-1">
              <SiNextdotjs size={40} /> <span className="text-xs">Next.js</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <DiReact size={40} /> <span className="text-xs">React</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiTypescript size={40} />{" "}
              <span className="text-xs">TypeScript</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <SiTailwindcss size={40} />{" "}
              <span className="text-xs">Tailwind</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <DiNodejsSmall size={40} />{" "}
              <span className="text-xs">Node.js</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS (Shadcn Card focus) */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 tracking-tight">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projectData.map((project) => (
              <Card
                key={project.title}
                className="bg-white/3 border-white/10 text-white overflow-hidden group hover:border-blue-500/50 transition-all shadow-2xl"
              >
                <CardHeader className="p-0 overflow-hidden">
                  {/* Container Gambar */}
                  <div className="h-64 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay Gelap agar gambar tidak terlalu terang */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2 text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 mb-4 h-12 line-clamp-2">
                    {project.description}
                  </CardDescription>
                  <div className="flex gap-4 text-xl text-gray-500 group-hover:text-blue-400 transition-colors">
                    {project.tech}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-20 border-t border-white/10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-gray-500 text-sm italic">
            © 2026 Lando. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/nxtrizz10"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="mailto:rizcyorlando1003@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <HiOutlineMail size={22} />
            </a>
            <a
              href="https://www.instagram.com/nxtrizz_10?igsh=MWp4bHlkaW5rc3p1eA=="
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
