"use client";

import React from 'react';
import Image from 'next/image';

const AWSSecurityServicesWithBackground = () => {
  return (
    <div className="relative w-full min-h-screen text-foreground bg-background font-sans overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Cloud-shaped background elements instead of stars */}
        <div 
          className="absolute w-12 h-12 bg-blue-700 opacity-30"
          style={{
            clipPath: 'polygon(25% 60%, 0% 35%, 25% 10%, 50% 0%, 75% 10%, 100% 35%, 75% 60%, 80% 100%, 50% 85%, 20% 100%)',
            filter: 'blur(4px)',
            top: '40%',
            right: '15%',
            animation: 'float2 10s ease-in-out infinite',
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute w-8 h-8 bg-blue-600 opacity-30"
          style={{
            clipPath: 'polygon(25% 60%, 0% 35%, 25% 10%, 50% 0%, 75% 10%, 100% 35%, 75% 60%, 80% 100%, 50% 85%, 20% 100%)',
            filter: 'blur(3px)',
            top: '25%',
            left: '30%',
            animation: 'float3 7s ease-in-out infinite',
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute w-10 h-10 bg-blue-400 opacity-30"
          style={{
            clipPath: 'polygon(25% 60%, 0% 35%, 25% 10%, 50% 0%, 75% 10%, 100% 35%, 75% 60%, 80% 100%, 50% 85%, 20% 100%)',
            filter: 'blur(4px)',
            bottom: '20%',
            right: '25%',
            animation: 'float1 9s ease-in-out infinite',
            animationDelay: '3s'
          }}
        />
        <div 
          className="absolute w-6 h-6 bg-blue-800 opacity-30"
          style={{
            clipPath: 'polygon(25% 60%, 0% 35%, 25% 10%, 50% 0%, 75% 10%, 100% 35%, 75% 60%, 80% 100%, 50% 85%, 20% 100%)',
            filter: 'blur(2px)',
            bottom: '30%',
            left: '20%',
            animation: 'float2 11s ease-in-out infinite',
            animationDelay: '4s'
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
          <div className="inline-block px-4 py-2 rounded-full border border-blue-400 text-sm font-medium">
            AWS Security
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left section - Main heading and logo */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-12">
              Cloud Security Services in AWS
            </h1>
            
            <div className="flex justify-center mb-8">
              <div className="relative w-48 h-48">
                {/* AWS-styled logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 120 120" width="120" height="120">
                    <circle cx="60" cy="60" r="25" className="bg-blue-600 opacity-70" />
                    <text x="60" y="65" textAnchor="middle" fill="white" className="text-xl font-bold">AWS</text>
                  </svg>
                </div>
                {/* Fixed image implementation using Next.js Image component */}
                <div className="absolute inset-0">
                  <Image 
                    src="/ajolote.jpg" 
                    alt="AWS Security" 
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>
              </div>
            </div>
            
            {/* Security principles */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="flex flex-col items-center">
                <span className="text-blue-500 font-medium">Authentication</span>
                <div className="w-full h-px bg-gray-700 mt-2"></div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-blue-500 font-medium">Authorization</span>
                <div className="w-full h-px bg-gray-700 mt-2"></div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-blue-500 font-medium">Encryption</span>
                <div className="w-full h-px bg-gray-700 mt-2"></div>
              </div>
            </div>
          </div>
          
          {/* Right section - Features */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-2">What are AWS Security Services?</h2>
              <p className="text-gray-400">
                AWS Security Services are cloud-based tools and features that help protect your data, accounts, and workloads from unauthorized access and potential threats in the AWS cloud environment.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-2">Why use AWS Security Services?</h2>
              <p className="text-gray-400">
                These services help you implement a comprehensive security strategy by controlling access to resources, encrypting sensitive data, managing secrets securely, and protecting your applications from web-based attacks.
              </p>
            </div>
          </div>
        </div>
        
        {/* Cards section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {/* Card 1 - IAM */}
          <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-blue-900 border-opacity-30">
            <h3 className="text-2xl font-bold mb-4">IAM</h3>
            <p className="text-gray-400 mb-4">Identity and Access Management:</p>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Manage users and permissions</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Create roles for services</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Define access policies</span>
              </li>
              <p className="text-gray-400 mb-4">Controls who can access your cloud resources and what they can do</p>
            </ul>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full opacity-70"></div>
              <div className="w-8 h-8 bg-blue-800 rounded-full opacity-70"></div>
            </div>
          </div>
          
          {/* Card 2 - KMS */}
          <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-blue-900 border-opacity-30">
            <h3 className="text-2xl font-bold mb-4">KMS</h3>
            <p className="text-gray-400 mb-4">Key Management Service:</p>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Create encryption keys</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Manage key policies</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Rotate keys automatically</span>
              </li>
              <p className="text-gray-400 mb-4">Helps create and manage keys used to encrypt your data in the cloud</p>
            </ul>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-700 rounded-full opacity-70"></div>
            </div>
          </div>
          
          {/* Card 3 - Secrets Manager */}
          <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-blue-900 border-opacity-30">
            <h3 className="text-2xl font-bold mb-4">Secrets Manager</h3>
            <p className="text-gray-400 mb-4">For sensitive information:</p>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Store credentials securely</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Rotate secrets automatically</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Access control for secrets</span>
              </li>
              <p className="text-gray-400 mb-4">Securely stores passwords, API keys, and other sensitive information</p>
            </ul>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-400 rounded-full opacity-70"></div>
              <div className="w-8 h-8 bg-blue-500 rounded-full opacity-70"></div>
              <div className="w-8 h-8 bg-blue-600 rounded-full opacity-70"></div>
            </div>
          </div>
          
          {/* Card 4 - WAF */}
          <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-blue-900 border-opacity-30">
            <h3 className="text-2xl font-bold mb-4">WAF</h3>
            <p className="text-gray-400 mb-4">Web Application Firewall:</p>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Block SQL injections</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Prevent XSS attacks</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Custom security rules</span>
              </li>
              <p className="text-gray-400 mb-4">Protects web applications from common exploits and vulnerabilities</p>
            </ul>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-400 rounded-full opacity-70"></div>
              <div className="w-8 h-8 bg-blue-600 rounded-full opacity-70"></div>
              <div className="w-8 h-8 bg-blue-700 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
        
        {/* Footer process steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">Identify security needs</div>
            <div className="hidden md:block text-blue-500">→</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-400">Implement security services</div>
            <div className="hidden md:block text-blue-500">→</div>
          </div>
          <div className="flex items-center">
            <div className="text-sm text-gray-400">Monitor and maintain security</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AWSSecurityServicesWithBackground;