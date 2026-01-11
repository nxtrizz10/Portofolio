"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiLaravel } from "react-icons/si";
import { DiPhp } from "react-icons/di";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProjectsPage() {
  const router = useRouter();

  const allProjects = [
    {
      title: "Pantau Magang",
      description: "Platform monitoring kegiatan magang mahasiswa secara real-time untuk perusahaan LEMIGAS. Dilengkapi dengan sistem absensi berbasis geolokasi.",
      image: "/pantaumagang.jpg",
      tech: [<SiNextdotjs key="next" />, <SiTailwindcss key="tailwind" />, <SiTypescript key="ts" />],
      link: "#",
      github: "#",
      category: "Fullstack"
    },
    {
      title: "Cafetalish",
      description: "Aplikasi manajemen kafe terintegrasi untuk pemesanan menu, manajemen stok inventaris, dan laporan keuangan harian secara otomatis.",
      image: "/cafetalish.jpg",
      tech: [<SiLaravel key="laravel" />, <SiTailwindcss key="tailwind" />, <DiPhp key="php" />],
      link: "#",
      github: "#",
      category: "Web App"
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30 pb-20">
      {/* GLOW DECORATION */}
      <div className="fixed top-0 -right-4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
      
      {/* HEADER / NAVIGATION */}
      <nav className="max-w-6xl mx-auto px-6 py-10 flex justify-between items-center relative z-10">
        <Button 
          variant="ghost" 
          onClick={() => router.back()} 
          className="hover:bg-white/10 rounded-full gap-2 text-gray-400 hover:text-white transition-all cursor-pointer"
        >
          <FaArrowLeft /> Back
        </Button>
        <div className="text-sm font-mono font-bold tracking-tighter bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent uppercase">
          Project Archive
        </div>
      </nav>

      {/* TITLE SECTION */}
      <header className="max-w-6xl mx-auto px-6 mt-10 mb-16 relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
          Koleksi <br />
          <span className="bg-linear-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Project Saya.
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
          Daftar lengkap aplikasi dan sistem yang telah saya kembangkan. Fokus pada fungsionalitas, estetika, dan pengalaman pengguna.
        </p>
      </header>

      {/* PROJECTS GRID CARD */}
      <main className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allProjects.map((project, index) => (
            <Card 
              key={index} 
              className="group bg-white/2 border-white/10 text-white overflow-hidden hover:border-blue-500/50 transition-all duration-500 shadow-2xl flex flex-col"
            >
              {/* Card Header: Image */}
              <CardHeader className="p-0 relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                
                {/* Badge Category */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest bg-blue-600 text-white rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
              </CardHeader>

              {/* Card Content: Info */}
              <CardContent className="p-6 flex flex-col grow">
                <CardTitle className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400 leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </CardDescription>
                
                {/* Tech Stack Icons */}
                <div className="flex gap-4 text-xl text-gray-500 mb-8 border-b border-white/5 pb-6">
                  {project.tech}
                </div>

                {/* Footer Buttons */}
                <div className="flex gap-4 mt-auto">
                  <Button asChild className="flex-1 rounded-full bg-white text-black hover:bg-gray-200 gap-2 cursor-pointer transition-transform active:scale-95">
                    <a href={project.link} target="_blank">
                      Live Demo <FaExternalLinkAlt size={10} />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full border-white/10 hover:bg-white/10 gap-2 cursor-pointer transition-transform active:scale-95">
                    <a href={project.github} target="_blank">
                      <FaGithub size={16} />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}