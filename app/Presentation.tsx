"use client";

import React, { useState, useEffect } from 'react';
import { Users, User, Sparkles, Code, Palette, Briefcase, Database } from 'lucide-react';

const InteractiveTeam = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [positionX, setPositionX] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [eyeBlink, setEyeBlink] = useState(false);
  const [mouthMove, setMouthMove] = useState(false);
  
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setEyeBlink(true);
      setTimeout(() => setEyeBlink(false), 200);
    }, 3000);
    const mouthInterval = setInterval(() => {
      setMouthMove(true);
      setTimeout(() => setMouthMove(false), 300);
    }, 5000);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(mouthInterval);
    };
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Javier",
      role: "Diseñador",
      skills: ["Scrum Master", "Spiderman", "Negro"],
      description: "Hombre determinado en hacer que sus conocimientos en scrum se apliquen todo el tiempo, ama las buenas practicas y si no las aplicas te detesta, ten cuidado con el",
      color: "#94366A",
      accent: "#74204F",
      icon: <Palette className="h-5 w-5" />,
      characteristics: {
        antennas: true,
        expression: "happy" as "happy" | "surprised" | "thoughtful",
        armsUp: true,
        specialFeature: "glow" as "glow" | "ears" | "hat" | "bowtie" | "glasses"
      }
    },
    {
      id: 2,
      name: "River",
      role: "Guapo",
      skills: ["Backend", "Nose", "Olvidadizo"],
      description: "River es un hombre que camina lento, por ende lo tiene largo, porque recuerden, entre mas lento camina alguien, mas largo le cuelga el aparato.",
      color: "#E9A9CF",
      accent: "#B75A9C",
      icon: <Sparkles className="h-5 w-5" />,
      characteristics: {
        antennas: false,
        expression: "surprised" as "happy" | "surprised" | "thoughtful",
        armsUp: false,
        specialFeature: "ears" as "glow" | "ears" | "hat" | "bowtie" | "glasses"
      }
    },
    {
      id: 3,
      name: "Tomasin",
      role: "Frontend",
      skills: ["React/Vue", "CSS/Tailwind", "Toco usar Next"],
      description: "Previamente estaba obsesionado con Vue, pero recientemente fue obligado a usar next. la vida a cambiado y ahora nada tiene sentido desde que el utiliza next.",
      color: "#D982B5",
      accent: "#B75A9C",
      icon: <Code className="h-5 w-5" />,
      characteristics: {
        antennas: true,
        expression: "surprised" as "happy" | "surprised" | "thoughtful",
        armsUp: true,
        specialFeature: "glasses" as "glow" | "ears" | "hat" | "bowtie" | "glasses"
      }
    },
    {
      id: 4,
      name: "Makabeuz",
      role: "Burgues",
      skills: ["Gacha Lover", "ARPG", "Gambling"],
      description: "Maka vivia feliz en su casa, hasta que aparecio una bruja malevola, y le quito su casa, porque te tatuatis?, hubo una vez un gran rey que tenia muchas tierras un castillo y tambien un amor...",
      color: "#F4CCDF",
      accent: "#E9A9CF",
      icon: <Briefcase className="h-5 w-5" />,
      characteristics: {
        antennas: false,
        expression: "happy" as "happy" | "surprised" | "thoughtful",
        armsUp: false,
        specialFeature: "bowtie" as "glow" | "ears" | "hat" | "bowtie" | "glasses"
      }
    },
    {
      id: 5,
      name: "Dylan",
      role: "Pecaminoso",
      skills: ["Amante de la naturaleza", "Cucas destroyer", "Seductor"],
      description: "Nose que ponerle, se supone que le diga a dylan que me diga una descripcion pequena pero esta mute asi que realmente no puedo preguntarle.",
      color: "#B75A9C",
      accent: "#94366A", 
      icon: <Database className="h-5 w-5" />,
      characteristics: {
        antennas: true,
        expression: "thoughtful" as "happy" | "surprised" | "thoughtful",
        armsUp: true,
        specialFeature: "hat" as "glow" | "ears" | "hat" | "bowtie" | "glasses"
      }
    }
  ];

  const selectMember = (id: number) => {
    if (animating) return;
    
    setAnimating(true);
    
    if (selectedMember === id) {
      setSelectedMember(null);
      setPositionX(0);
      setTimeout(() => setAnimating(false), 500);
    } else {
      setPositionX(-100);
      setTimeout(() => {
        setSelectedMember(id);
        setPositionX(0);
        setAnimating(false);
      }, 300);
    }
  };

  const currentMember = teamMembers.find(m => m.id === selectedMember) || null;

  interface RobotAvatarProps {
    color: string;
    accent: string;
    characteristics: {
      antennas: boolean;
      expression: "happy" | "surprised" | "thoughtful";
      armsUp: boolean;
      specialFeature: "glow" | "ears" | "hat" | "bowtie" | "glasses";
    };
    pulse: boolean;
  }

  const RobotAvatar: React.FC<RobotAvatarProps> = ({ color, accent, characteristics, pulse }) => {
    const getExpression = (type: "happy" | "surprised" | "thoughtful") => {
      switch(type) {
        case "happy":
          return <path d={mouthMove ? "M33 45 C38 53, 42 53, 47 45" : "M35 45 C38 50, 42 50, 45 45"} 
                      stroke="black" strokeWidth="2.5" fill="none" />;
        case "surprised":
          return <circle cx="40" cy="45" r={mouthMove ? "4" : "3"} stroke="black" strokeWidth="2.5" fill="none" />;
        case "thoughtful":
          return <path d={mouthMove ? "M34 48 C39 44, 42 48, 46 48" : "M35 48 C38 46, 42 48, 45 48"} 
                      stroke="black" strokeWidth="2.5" fill="none" />;
      }
    };

    const renderSpecialFeature = (feature: "glow" | "ears" | "hat" | "bowtie" | "glasses") => {
      switch(feature) {
        case "glow":
          return pulse ? <circle cx="50" cy="50" r="45" fill={color} opacity="0.3" /> : null;
        case "ears":
          return (
            <>
              <ellipse cx="20" cy="30" rx="5" ry="8" fill={color} stroke="black" strokeWidth="2" />
              <ellipse cx="80" cy="30" rx="5" ry="8" fill={color} stroke="black" strokeWidth="2" />
            </>
          );
        case "hat":
          return (
            <>
              <path d="M25 20 L75 20 L60 5 L40 5 Z" fill={accent} stroke="black" strokeWidth="2" />
              <circle cx="50" cy="5" r="3" fill={color} />
            </>
          );
        case "bowtie":
          return (
            <path d="M40 60 L30 65 L40 70 L50 65 L60 70 L70 65 L60 60 Z" fill={accent} stroke="black" strokeWidth="2" />
          );
        case "glasses":
          return (
            <>
              <rect x="30" y="30" width="15" height="10" rx="5" ry="5" fill="none" stroke="black" strokeWidth="2" />
              <rect x="55" y="30" width="15" height="10" rx="5" ry="5" fill="none" stroke="black" strokeWidth="2" />
              <path d="M45 35 L55 35" stroke="black" strokeWidth="2" />
            </>
          );
      }
    };

    return (
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {characteristics.specialFeature === "ears" && renderSpecialFeature("ears")}
        {characteristics.specialFeature === "hat" && renderSpecialFeature("hat")}
        
        {/* cabeza */}
        <rect
          x="25"
          y="20"
          width="50"
          height="40"
          rx="10"
          ry="10"
          fill={color}
          stroke="black"
          strokeWidth="2.5"
        />
        
        {/* cara */}
        <rect
          x="30"
          y="25"
          width="40"
          height="25"
          rx="5"
          ry="5"
          fill="#ffffff"
          stroke="black"
          strokeWidth="2.5"
        />

        {characteristics.specialFeature === "glasses" && renderSpecialFeature("glasses")}
    
        {eyeBlink ? (
          <>
            <path d="M33 35 L38 35" stroke="black" strokeWidth="2.5" />
            <path d="M62 35 L67 35" stroke="black" strokeWidth="2.5" />
          </>
        ) : (
          <>
            <circle cx="35.5" cy="35" r="2.5" fill="black" />
            <circle cx="64.5" cy="35" r="2.5" fill="black" />
          </>
        )}
        
        {getExpression(characteristics.expression)}
        
        {characteristics.antennas && (
          <>
            <path d="M35 20 Q30 10 25 15" fill="none" stroke="black" strokeWidth="2.5" />
            <circle cx="25" cy="15" r="2" fill={accent} />
            
            <path d="M65 20 Q70 10 75 15" fill="none" stroke="black" strokeWidth="2.5" />
            <circle cx="75" cy="15" r="2" fill={accent} />
          </>
        )}
        
        {/* cuerpo */}
        <rect
          x="30"
          y="60"
          width="40"
          height="15"
          rx="3"
          ry="3"
          fill={color}
          stroke="black"
          strokeWidth="2.5"
        />
        
        {characteristics.specialFeature === "bowtie" && renderSpecialFeature("bowtie")}
        
        <path
          d={characteristics.armsUp 
            ? "M30 65 Q15 60 20 50" 
            : "M30 65 Q15 75 20 85"}
          fill="none"
          stroke="black"
          strokeWidth="2.5"
        />
        <circle 
          cx={characteristics.armsUp ? 20 : 20} 
          cy={characteristics.armsUp ? 50 : 85} 
          r="5" 
          fill={color}
          stroke="black"
          strokeWidth="2.5"
        />
        

        <path
          d={characteristics.armsUp 
            ? "M70 65 Q85 60 80 50" 
            : "M70 65 Q85 75 80 85"}
          fill="none"
          stroke="black"
          strokeWidth="2.5"
        />
        <circle 
          cx={characteristics.armsUp ? 80 : 80} 
          cy={characteristics.armsUp ? 50 : 85} 
          r="5" 
          fill={color}
          stroke="black"
          strokeWidth="2.5"
        />
        
        <path
          d="M40 75 L35 90"
          fill="none"
          stroke="black"
          strokeWidth="2.5"
        />
        <rect
          x="35"
          y="85"
          width="8"
          height="5"
          rx="2"
          ry="2"
          fill={color}
          stroke="black"
          strokeWidth="2"
        />
        
        <path
          d="M60 75 L65 90"
          fill="none"
          stroke="black"
          strokeWidth="2.5"
        />
        <rect
          x="57"
          y="85"
          width="8"
          height="5"
          rx="2"
          ry="2"
          fill={color}
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    );
  };

  return (
    <div className="relative w-full min-h-screen text-foreground bg-background font-sans overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-1/3 h-1/3 bg-orchid-500 opacity-30"
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            filter: 'blur(50px)',
            top: '5%',
            left: '10%',
            animation: 'float1 8s ease-in-out infinite',
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute w-1/4 h-1/4 bg-orchid-700 opacity-30"
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            filter: 'blur(40px)',
            top: '30%',
            right: '15%',
            transform: 'rotate(180deg)',
            animation: 'float2 10s ease-in-out infinite',
            animationDelay: '2s'
          }}
        />
      </div>
      <style jsx>{`
        @keyframes float1 {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(2deg);
          }
          50% {
            transform: translateY(0px) rotate(0deg);
          }
          75% {
            transform: translateY(15px) rotate(-2deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        
        @keyframes float2 {
          0% {
            transform: translateY(0px) rotate(180deg);
          }
          25% {
            transform: translateY(-15px) rotate(182deg);
          }
          50% {
            transform: translateY(0px) rotate(180deg);
          }
          75% {
            transform: translateY(15px) rotate(178deg);
          }
          100% {
            transform: translateY(0px) rotate(180deg);
          }
        }
        
        @keyframes float3 {
          0% {
            transform: translateY(0px) rotate(60deg);
          }
          25% {
            transform: translateY(-15px) rotate(62deg);
          }
          50% {
            transform: translateY(0px) rotate(60deg);
          }
          75% {
            transform: translateY(15px) rotate(58deg);
          }
          100% {
            transform: translateY(0px) rotate(60deg);
          }
        }
      `}</style>
      
      <div className="relative z-10 max-w-6xl mx-auto p-8">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 rounded-full border border-orchid-400 text-sm font-medium">
            Rivers
          </div>
        </div>
        
        <h2 className="text-4xl font-bold mb-2 text-orchid-600 flex items-center gap-2">
          <Users className="h-8 w-8" />
          NOSOTROS
        </h2>
        <p className="text-gray-400 mb-10">Aqui una breve descripcion de nosotros mismos.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
              {teamMembers.map((member) => (
                <div 
                  key={member.id}
                  onClick={() => selectMember(member.id)}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedMember === member.id 
                    ? 'ring-4 ring-orchid-300 shadow-lg' 
                    : 'hover:shadow-md'
                  } rounded-lg overflow-hidden bg-background bg-opacity-20 backdrop-blur-sm border border-orchid-900 border-opacity-30 p-4`}
                >
                  <div className="relative">
                    <div className="w-full aspect-square overflow-hidden mb-3">
                      <RobotAvatar 
                        color={member.color} 
                        accent={member.accent}
                        characteristics={member.characteristics}
                        pulse={selectedMember === member.id}
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-foreground text-lg flex items-center justify-center gap-1">
                        {member.name}
                        <User className="h-4 w-4 text-orchid-600" />
                      </h3>
                      <p className="text-sm font-medium flex items-center justify-center gap-1" style={{ color: member.color }}>
                        {member.icon}
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2 relative h-96 overflow-hidden rounded-lg bg-transparent bg-opacity-70 backdrop-blur-sm border border-orchid-900 border-opacity-30 shadow-lg">
            <div 
              className="absolute inset-0 transition-transform duration-500 ease-in-out p-6 flex flex-col"
              style={{ transform: `translateX(${positionX}%)` }}
            >
              {currentMember ? (
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 flex items-center justify-center">
                    <div className="w-64 h-64">
                      <RobotAvatar 
                        color={currentMember.color} 
                        accent={currentMember.accent}
                        characteristics={currentMember.characteristics}
                        pulse={true}
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex justify-between items-center">
                      <h2 className="text-3xl font-bold mb-2 flex items-center gap-2" style={{ color: currentMember.color }}>
                        {currentMember.name}
                        {currentMember.icon}
                      </h2>
                    </div>
                    <h3 className="text-xl mb-4 flex items-center gap-2" style={{ color: currentMember.accent }}>
                      {currentMember.role}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {currentMember.description}
                    </p>
                    <div className="mt-4">
                      <h4 className="font-bold text-foreground mb-2">
                        Habilidades
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {currentMember.skills.map((skill, index) => (
                          <span 
                            key={index} 
                            className="px-3 py-1 rounded-full text-white text-sm"
                            style={{ backgroundColor: currentMember.color }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center max-w-lg mx-auto">
                    <div className="mx-auto w-32 h-32 flex items-center justify-center mb-6">
                      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <rect
                          x="25"
                          y="20"
                          width="50"
                          height="40"
                          rx="10"
                          ry="10"
                          fill="#D982B5"
                          stroke="black"
                          strokeWidth="2.5"
                        />
                        <rect
                          x="30"
                          y="25"
                          width="40"
                          height="25"
                          rx="5"
                          ry="5"
                          fill="white"
                          stroke="black"
                          strokeWidth="2.5"
                        />
                        {eyeBlink ? (
                          <>
                            <path d="M33 35 L38 35" stroke="black" strokeWidth="2.5" />
                            <path d="M62 35 L67 35" stroke="black" strokeWidth="2.5" />
                          </>
                        ) : (
                          <>
                            <circle cx="35.5" cy="35" r="2.5" fill="black" />
                            <circle cx="64.5" cy="35" r="2.5" fill="black" />
                          </>
                        )}
                        <path 
                          d={mouthMove ? "M33 45 C38 53, 42 53, 47 45" : "M35 45 C38 50, 42 50, 45 45"} 
                          stroke="black" 
                          strokeWidth="2.5" 
                          fill="none"
                        />
                        <rect
                          x="30"
                          y="60"
                          width="40"
                          height="15"
                          rx="3"
                          ry="3"
                          fill="#D982B5"
                          stroke="black"
                          strokeWidth="2.5"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-orchid-600">
                      Conocenos
                    </h3>
                    <p className="text-gray-400">Seleccciona a alguno de nosotros para ver mas informacion en detalle</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">Diseño interfaces</div>
            <div className="hidden md:block text-orchid-500">→</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">Presentacion</div>
            <div className="hidden md:block text-orchid-500">→</div>
          </div>
          <div className="flex items-center">
            <div className="text-sm text-gray-400">Enserio se ve esto?</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTeam;