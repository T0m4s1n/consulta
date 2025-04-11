"use client";

import React, { useEffect, useRef } from 'react';

const AWSSecurityPlatform = () => {
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (hasAnimatedRef.current) return;

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('active');
      }, 300 * index);
    });
    
    hasAnimatedRef.current = true;
  }, []);

  return (
    <div className="relative w-full min-h-screen text-foreground bg-background font-sans overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-64 h-64 rounded-full bg-blue-700 opacity-30"
          style={{
            filter: 'blur(80px)',
            top: '20%',
            right: '10%',
            animation: 'floatReverse 10s ease-in-out infinite',
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 rounded-full border border-blue-400 text-sm font-medium">
            AWS Cloud Security
          </div>
        </div>
      
        <div className="text-center mb-20 fade-in opacity-0 transition-opacity duration-1000">
          <div className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-3">
            SECURITY. SERVICES.
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold transition-transform duration-700 hover:scale-105">
            AWS Security Best Practices
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="p-8 bg-background bg-opacity-20 backdrop-blur-sm rounded-lg border border-blue-900 border-opacity-30 fade-in opacity-0 transition-all duration-700 hover:shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 flex-shrink-0 mr-3 transition-transform duration-500 hover:rotate-12">
                <svg viewBox="0 0 24 24" className="w-full h-full text-blue-500">
                  <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                </svg>
              </div>
              <h2 className="text-sm font-bold text-blue-500 tracking-wider uppercase">
                Identity Management
              </h2>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              IAM (Identity and Access Management)
            </h3>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              IAM is the foundation of AWS security, controlling who can access your cloud resources and what they can do with them. Implement the principle of least privilege by granting only required permissions. Use IAM roles for services rather than sharing access keys. Enable multi-factor authentication (MFA) for all users, especially those with administrative access.
            </p>
          </div>
          
          <div className="p-8 bg-background bg-opacity-20 backdrop-blur-sm rounded-lg border border-blue-900 border-opacity-30 fade-in opacity-0 transition-all duration-700 hover:shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 flex-shrink-0 mr-3 transition-transform duration-500 hover:rotate-12">
                <svg viewBox="0 0 24 24" className="w-full h-full text-blue-500">
                  <path fill="currentColor" d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
                </svg>
              </div>
              <h2 className="text-sm font-bold text-blue-500 tracking-wider uppercase">
                Encryption
              </h2>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              KMS (Key Management Service)
            </h3>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              KMS helps you create, manage, and protect encryption keys used to encrypt your data in AWS. Implement envelope encryption for sensitive data. Set up automatic key rotation policies to enhance security. Use customer managed keys (CMKs) for better control over your encryption practices and to meet compliance requirements.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 fade-in opacity-0 transition-all duration-700">
          <div className="p-8 bg-background bg-opacity-20 backdrop-blur-sm rounded-lg border border-blue-900 border-opacity-30 fade-in opacity-0 transition-all duration-700 hover:shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 flex-shrink-0 mr-3 transition-transform duration-500 hover:rotate-12">
                <svg viewBox="0 0 24 24" className="w-full h-full text-blue-500">
                  <path fill="currentColor" d="M7,14A2,2 0 0,1 5,12A2,2 0 0,1 7,10A2,2 0 0,1 9,12A2,2 0 0,1 7,14M12.65,10C11.83,7.67 9.61,6 7,6A6,6 0 0,0 1,12A6,6 0 0,0 7,18C9.61,18 11.83,16.33 12.65,14H17V18H21V14H23V10H12.65Z" />
                </svg>
              </div>
              <h2 className="text-sm font-bold text-blue-500 tracking-wider uppercase">
                Credentials Management
              </h2>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              Secrets Manager
            </h3>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              AWS Secrets Manager provides a secure way to store and retrieve credentials, API keys, and other sensitive information. Configure automatic rotation of secrets to maintain security. Integrate with other AWS services for seamless authentication. Use fine-grained access control to limit who can retrieve specific secrets based on their role or needs.
            </p>
          </div>
          
          <div className="p-8 bg-background bg-opacity-20 backdrop-blur-sm rounded-lg border border-blue-900 border-opacity-30 fade-in opacity-0 transition-all duration-700 hover:shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 flex-shrink-0 mr-3 transition-transform duration-500 hover:rotate-12">
                <svg viewBox="0 0 24 24" className="w-full h-full text-blue-500">
                  <path fill="currentColor" d="M12,12H19C18.47,16.11 15.72,19.78 12,20.92V12H5V6.3L12,3.19V12M12,1L3,5V11C3,16.55 6.84,21.73 12,23C17.16,21.73 21,16.55 21,11V5L12,1Z" />
                </svg>
              </div>
              <h2 className="text-sm font-bold text-blue-500 tracking-wider uppercase">
                Application Protection
              </h2>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              WAF (Web Application Firewall)
            </h3>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              AWS WAF helps protect your web applications from common exploits like SQL injection and cross-site scripting (XSS). Deploy WAF in front of your applications to filter malicious traffic. Create custom rules to address specific security requirements and threats. Implement rate-based rules to prevent DDoS attacks by limiting the number of requests from any single IP.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 fade-in opacity-0 transition-all duration-700">
          <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-blue-900 border-opacity-30">
            <h3 className="text-2xl font-bold mb-4">Principle of Least Privilege</h3>
            <p className="text-gray-400 mb-4">Key IAM best practice:</p>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Grant only the permissions required for a task—no more, no less.</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Regularly audit and remove unused permissions to reduce security risks.</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Use IAM Access Analyzer to identify resources shared with external entities.</span>
              </li>
            </ul>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full opacity-70"></div>
              <div className="w-8 h-8 bg-blue-800 rounded-full opacity-70"></div>
            </div>
          </div>

          <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-blue-900 border-opacity-30">
            <h3 className="text-2xl font-bold mb-4">Data Encryption Strategy</h3>
            <p className="text-gray-400 mb-4">KMS implementation:</p>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Encrypt data at rest across all AWS services using KMS.</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Implement automatic key rotation to enhance security.</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Use AWS CloudTrail to monitor and audit key usage.</span>
              </li>
            </ul>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-700 rounded-full opacity-70"></div>
            </div>
          </div>

          <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-blue-900 border-opacity-30">
            <h3 className="text-2xl font-bold mb-4">WAF Protection Rules</h3>
            <p className="text-gray-400 mb-4">Key security controls:</p>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Block SQL injection attacks with predefined rule sets.</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Prevent cross-site scripting (XSS) with content inspection.</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Implement geo-restriction to block traffic from suspicious regions.</span>
              </li>
            </ul>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-400 rounded-full opacity-70"></div>
              <div className="w-8 h-8 bg-blue-500 rounded-full opacity-70"></div>
              <div className="w-8 h-8 bg-blue-600 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 fade-in opacity-0 transition-all duration-700">
          <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-blue-900 border-opacity-30">
            <h3 className="text-2xl font-bold mb-4">Multi-Factor Authentication</h3>
            <p className="text-gray-400 mb-4">IAM security enhancement:</p>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Enable MFA for all IAM users, especially those with administrative access.</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Use virtual MFA, hardware tokens, or U2F security keys.</span>
              </li>
            </ul>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full opacity-70"></div>
              <div className="w-8 h-8 bg-blue-800 rounded-full opacity-70"></div>
            </div>
          </div>

          <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-blue-900 border-opacity-30">
            <h3 className="text-2xl font-bold mb-4">Secrets Rotation</h3>
            <p className="text-gray-400 mb-4">Secrets Manager capability:</p>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Configure automatic rotation for database credentials and API keys.</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Use Lambda functions to handle custom rotation logic.</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Set rotation schedules based on security requirements.</span>
              </li>
            </ul>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-700 rounded-full opacity-70"></div>
            </div>
          </div>

          <div className="bg-background bg-opacity-20 backdrop-blur-sm rounded-lg p-6 border border-blue-900 border-opacity-30">
            <h3 className="text-2xl font-bold mb-4">Rate-Based Protection</h3>
            <p className="text-gray-400 mb-4">WAF advanced feature:</p>
            <ul className="space-y-4 mb-8">
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Set rate limits to prevent DDoS attacks and brute force attempts.</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Block IP addresses that exceed thresholds automatically.</span>
              </li>
              <li className="flex">
                <span className="mr-2 text-blue-500">•</span>
                <span className="text-gray-400">Combine with AWS Shield for comprehensive DDoS protection.</span>
              </li>
            </ul>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-400 rounded-full opacity-70"></div>
              <div className="w-8 h-8 bg-blue-500 rounded-full opacity-70"></div>
              <div className="w-8 h-8 bg-blue-600 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 fade-in opacity-0 transition-all duration-700">
          <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase">
            COMPREHENSIVE CLOUD SECURITY
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">Identity &amp; Access</div>
              <div className="hidden md:block text-blue-500">→</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">Data Encryption</div>
              <div className="hidden md:block text-blue-500">→</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">Secrets Management</div>
              <div className="hidden md:block text-blue-500">→</div>
            </div>
            <div className="flex items-center">
              <div className="text-sm text-gray-400">Application Protection</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        @keyframes floatReverse {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        .fade-in {
          transform: translateY(10px);
        }
        
        .fade-in.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default AWSSecurityPlatform;