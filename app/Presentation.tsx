"use client";

import React, { useState, useEffect } from 'react';
import { Users, User, Sparkles, Code } from 'lucide-react';

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
      id: 2,
      name: "River",
      role: "Handsome",
      skills: ["Backend", "I don't know", "Forgetful"],
      description: "River is a good man, his wife loves him, he always comes home bringing the daily bread and doesn't let anyone mess with his son Isaac, he is a good man.",
      color: "#A9C2E9",
      accent: "#5A7CB7",
      icon: <Sparkles className="h-5 w-5" />,
      characteristics: {
        antennas: false,
        expression: "surprised",
        armsUp: false,
        specialFeature: "ears"
      }
    },
    {
      id: 3,
      name: "Tomasin",
      role: "Frontend",
      skills: ["React/Vue", "CSS/Tailwind", "Had to use Next"],
      description: "Previously obsessed with Vue, but recently forced to use Next. Life has changed, and now nothing makes sense since he started using Next.",
      color: "#82A9D9",
      accent: "#5A7CB7",
      icon: <Code className="h-5 w-5" />,
      characteristics: {
        antennas: true,
        expression: "surprised",
        armsUp: true,
        specialFeature: "glasses"
      }
    },
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
      expression: string;
      armsUp: boolean;
      specialFeature: string;
    };
    pulse: boolean;
  }

  const RobotAvatar: React.FC<RobotAvatarProps> = ({ color, accent, characteristics, pulse }) => {
    const getExpression = (type: string) => {
      switch(type) {
        case "happy":
          return <path d={mouthMove ? "M33 45 C38 53, 42 53, 47 45" : "M35 45 C38 50, 42 50, 45 45"} 
                      stroke="black" strokeWidth="2.5" fill="none" />;
        case "surprised":
          return <circle cx="40" cy="45" r={mouthMove ? "4" : "3"} stroke="black" strokeWidth="2.5" fill="none" />;
        case "thoughtful":
          return <path d={mouthMove ? "M34 48 C39 44, 42 48, 46 48" : "M35 48 C38 46, 42 48, 45 48"} 
                      stroke="black" strokeWidth="2.5" fill="none" />;
        default:
          return <path d="M35 45 C38 50, 42 50, 45 45" stroke="black" strokeWidth="2.5" fill="none" />;
      }
    };

    const renderSpecialFeature = (feature: string) => {
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
        default:
          return null;
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
        
        {/* head */}
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
        
        {/* face */}
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
        
        {/* body */}
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
      {/* Background - removed gradient patterns */}
      <div className="absolute inset-0 bg-background"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto p-8">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 rounded-full border border-blue-400 text-sm font-medium">
            Rivers
          </div>
        </div>
        
        <h2 className="text-4xl font-bold mb-2 text-blue-600 flex items-center gap-2">
          <Users className="h-8 w-8" />
          About us
        </h2>
        <p className="text-gray-400 mb-10">In here we can find a little description of us</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          <div className="lg:col-span-1">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
              {teamMembers.map((member) => (
                <div 
                  key={member.id}
                  onClick={() => selectMember(member.id)}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedMember === member.id 
                    ? 'ring-4 ring-blue-300 shadow-lg' 
                    : 'hover:shadow-md'
                  } rounded-lg overflow-hidden bg-background bg-opacity-20 backdrop-blur-sm border border-blue-900 border-opacity-30 p-4`}
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
                        <User className="h-4 w-4 text-blue-600" />
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
          
          <div className="lg:col-span-2 relative h-96 overflow-hidden rounded-lg bg-transparent bg-opacity-70 backdrop-blur-sm border border-blue-900 border-opacity-30 shadow-lg">
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
                        Skills
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
                          fill="#82A9D9"
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
                          fill="#82A9D9"
                          stroke="black"
                          strokeWidth="2.5"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-blue-600">
                      Meet Us
                    </h3>
                    <p className="text-gray-400">Select one of us to see more detailed information</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">Interface Design</div>
            <div className="hidden md:block text-blue-500">→</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">Presentation</div>
            <div className="hidden md:block text-blue-500">→</div>
          </div>
          <div className="flex items-center">
            <div className="text-sm text-gray-400">Is this really visible?</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTeam;