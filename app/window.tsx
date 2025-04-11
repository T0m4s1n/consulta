"use client";

import React, { useState } from 'react';
import { 
  Shield, 
  User, 
  Lock, 
  RefreshCw, 
  AlertCircle, 
  CheckCircle,
  Database,
  HardDrive,
  Activity
} from 'lucide-react';

// Data Constants
const SECURITY_EVENTS = [
  { 
    title: "SQL Injection Attempt", 
    time: "10:24 AM", 
    source: "IP: 203.0.113.42 - Source: Brazil",
    code: "GET /api/users?id=1' OR '1'='1"
  },
  { 
    title: "Cross-Site Scripting (XSS)", 
    time: "10:12 AM", 
    source: "IP: 198.51.100.78 - Source: Russia",
    code: "POST /comment - Body: <script>alert('XSS')</script>"
  },
  { 
    title: "Rate Limiting Triggered", 
    time: "9:58 AM", 
    source: "IP: 192.0.2.155 - Source: China",
    code: "429 Too Many Requests - 150 requests in 60 seconds"
  }
];

const ENCRYPTION_KEYS = [
  { id: "key-0a7bb9e3", service: "S3 Storage", rotated: "3 days ago", status: { label: "Active", color: "green" } },
  { id: "key-bb234f1c", service: "RDS Database", rotated: "7 days ago", status: { label: "Active", color: "green" } },
  { id: "key-c72e4d9a", service: "EBS Volumes", rotated: "92 days ago", status: { label: "Needs Rotation", color: "red" } }
];

const RECENT_USERS = [
  { initials: "TB", name: "Tomas Benavides", time: "2 minutes ago", color: "blue" },
  { initials: "AS", name: "Admin System", time: "10 minutes ago", color: "green" },
  { initials: "RB", name: "River Bonilla", time: "25 minutes ago", color: "purple" }
];

// Reusable UI Components
const ProgressBar: React.FC<{ label: string; value: number }> = ({ label, value }) => (
  <div className="relative pt-1">
    <div className="flex mb-2 items-center justify-between">
      <div>
        <span className="text-xs font-semibold inline-block text-blue-600">{label}</span>
      </div>
      <div className="text-right">
        <span className="text-xs font-semibold inline-block text-blue-600">{value}%</span>
      </div>
    </div>
    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
      <div style={{ width: `${value}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
    </div>
  </div>
);

const StatusBadge: React.FC<{ label: string; color: string }> = ({ label, color }) => (
  <span className={`bg-${color}-100 text-${color}-800 text-xs px-2 py-1 rounded-full`}>
    {label}
  </span>
);

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  metric: string;
  status: { label: string; color: string };
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, title, metric, status }) => (
  <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
    <div className="flex items-center mb-3">
      <div className="mr-2 text-blue-500">{icon}</div>
      <h3 className="font-medium">{title}</h3>
    </div>
    <div className="flex justify-between items-center">
      <span className="text-gray-500 text-sm">{metric}</span>
      <StatusBadge label={status.label} color={status.color} />
    </div>
  </div>
);

interface MetricPanelProps {
  color: string;
  title: string;
  tag: string;
  metric: string;
  metricLabel: string;
  children: React.ReactNode;
}

const MetricPanel: React.FC<MetricPanelProps> = ({ color, title, tag, metric, metricLabel, children }) => (
  <div className={`bg-${color}-50 rounded-lg p-4 border border-${color}-200`}>
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-medium">{title}</h3>
      <div className={`text-xs text-${color}-600`}>{tag}</div>
    </div>
    <div className="text-3xl font-bold mb-1">{metric}</div>
    <div className="text-sm text-gray-500">{metricLabel}</div>
    {children}
  </div>
);

const SimpleBarChart = () => (
  <div className="mt-4 h-16 flex items-end space-x-1">
    {[6, 8, 12, 14, 10, 8, 6, 7, 9, 16].map((height, i) => (
      <div 
        key={i}
        className={`bg-blue-${i > 7 ? '600' : i > 3 ? '500' : '400'} w-3`} 
        style={{ height: `${height/16*100}%` }}
      />
    ))}
  </div>
);

interface SecurityContentProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const SecurityContent: React.FC<SecurityContentProps> = ({ title, description, children }) => (
  <div className="p-6 bg-white h-full overflow-auto">
    <div className="mb-8 transition-all duration-700">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
    </div>
  </div>
);

// Page Content Components
const IAMSecurityContent = () => (
  <SecurityContent 
    title="Identity and Access Management"
    description="IAM is the foundation of AWS security, controlling who can access your cloud resources and what actions they can perform."
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <MetricCard 
        icon={<User size={20} />} 
        title="User Management" 
        metric="24 Users Active" 
        status={{ label: "Secure", color: "green" }}
      />
      <MetricCard 
        icon={<Shield size={20} />} 
        title="Role Assignments" 
        metric="10 Roles Configured" 
        status={{ label: "Review", color: "yellow" }}
      />
    </div>
    
    <div className="mt-8 border border-blue-200 rounded-lg p-4 bg-white shadow-sm">
      <h3 className="font-medium mb-4 flex items-center">
        <Activity size={16} className="mr-2 text-blue-500" />
        Recent Access Activity
      </h3>
      <div className="space-y-2">
        {RECENT_USERS.map((user, i) => (
          <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full bg-${user.color}-200 flex items-center justify-center text-xs mr-2`}>
                {user.initials}
              </div>
              <span>{user.name}</span>
            </div>
            <span className="text-sm text-gray-500">{user.time}</span>
          </div>
        ))}
      </div>
    </div>
    
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
        <h3 className="font-medium mb-3 flex items-center">
          <Lock size={16} className="mr-2 text-blue-500" />
          Password Policy Status
        </h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center text-green-700">
            <CheckCircle size={14} className="mr-2" />
            Minimum length: 12 characters
          </li>
          <li className="flex items-center text-green-700">
            <CheckCircle size={14} className="mr-2" />
            Complexity requirements enforced
          </li>
          <li className="flex items-center text-green-700">
            <CheckCircle size={14} className="mr-2" />
            MFA enforced for all admin users
          </li>
          <li className="flex items-center text-yellow-700">
            <AlertCircle size={14} className="mr-2" />
            Password rotation: 4 users overdue
          </li>
        </ul>
      </div>
      
      <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
        <h3 className="font-medium mb-3 flex items-center">
          <Shield size={16} className="mr-2 text-blue-500" />
          Service Access Review
        </h3>
        <ProgressBar label="Unused permissions review" value={72} />
        <ProgressBar label="Principle of least privilege" value={84} />
        <div className="mt-2 text-xs text-blue-700">
          <AlertCircle size={14} className="inline mr-1" />
          3 users have excessive permissions
        </div>
      </div>
    </div>
  </SecurityContent>
);

const EncryptionContent = () => (
  <SecurityContent 
    title="Data Encryption Services"
    description="AWS KMS helps you create, manage, and protect encryption keys used to secure your data across all AWS services."
  >
    <div className="mt-8 border border-blue-200 rounded-lg p-6 bg-blue-50">
      <h3 className="font-medium mb-6 text-lg">Key Management Status</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[
          { icon: <Lock size={20} />, count: 32, label: "Active Keys", color: "blue" },
          { icon: <RefreshCw size={20} />, count: 8, label: "Rotated Recently", color: "green" },
          { icon: <AlertCircle size={20} />, count: 2, label: "Need Attention", color: "red" }
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className={`w-12 h-12 rounded-full bg-${stat.color}-100 flex items-center justify-center mx-auto mb-2 text-${stat.color}-600`}>
              {stat.icon}
            </div>
            <div className="text-xl font-bold">{stat.count}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
      
      <ProgressBar label="Encryption Coverage" value={92} />
    </div>
    
    <div className="mt-8 border border-blue-200 rounded-lg overflow-hidden bg-white shadow-sm">
      <table className="min-w-full">
        <thead>
          <tr>
            {["Key ID", "Service", "Last Rotated", "Status"].map((heading, i) => (
              <th key={i} className="py-3 px-4 bg-blue-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {ENCRYPTION_KEYS.map((key, i) => (
            <tr key={i}>
              <td className="px-4 py-3 text-sm font-mono">{key.id}</td>
              <td className="px-4 py-3 text-sm">
                <div className="flex items-center">
                  {key.service === "S3 Storage" && <HardDrive size={14} className="mr-2 text-blue-500" />}
                  {key.service === "RDS Database" && <Database size={14} className="mr-2 text-blue-500" />}
                  {key.service === "EBS Volumes" && <HardDrive size={14} className="mr-2 text-blue-500" />}
                  {key.service}
                </div>
              </td>
              <td className="px-4 py-3 text-sm">{key.rotated}</td>
              <td className="px-4 py-3 text-sm">
                <StatusBadge label={key.status.label} color={key.status.color} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border border-blue-200 rounded-lg p-4 bg-white">
        <h3 className="font-medium mb-3">Encryption Best Practices</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center text-green-700">
            <CheckCircle size={14} className="mr-2" />
            All S3 buckets have default encryption
          </li>
          <li className="flex items-center text-green-700">
            <CheckCircle size={14} className="mr-2" />
            RDS databases use encrypted storage
          </li>
          <li className="flex items-center text-yellow-700">
            <AlertCircle size={14} className="mr-2" />
            Review EBS snapshot encryption
          </li>
        </ul>
      </div>
      
      <div className="border border-blue-200 rounded-lg p-4 bg-white">
        <h3 className="font-medium mb-3">Key Metrics</h3>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Customer Managed Keys</span>
              <span className="font-medium">24</span>
            </div>
            <div className="h-2 bg-blue-100 rounded">
              <div className="h-2 bg-blue-500 rounded" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>AWS Managed Keys</span>
              <span className="font-medium">18</span>
            </div>
            <div className="h-2 bg-blue-100 rounded">
              <div className="h-2 bg-blue-500 rounded" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SecurityContent>
);

const WAFProtectionContent = () => (
  <SecurityContent 
    title="Web Application Firewall"
    description="AWS WAF helps protect your web applications from common exploits and attacks by filtering malicious traffic."
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <MetricPanel 
        color="blue" 
        title="Traffic Analysis" 
        tag="Live"
        metric="5,284" 
        metricLabel="Requests (Last Hour)"
      >
        <SimpleBarChart />
      </MetricPanel>
      
      <MetricPanel 
        color="red" 
        title="Blocked Attacks" 
        tag="Last 24h"
        metric="147" 
        metricLabel="Malicious Requests"
      >
        <div className="mt-4 space-y-2">
          {[
            { label: "SQL Injection", value: 63 },
            { label: "XSS", value: 24 },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex justify-between text-xs mb-1">
                <span>{item.label}</span>
                <span>{item.value}%</span>
              </div>
              <div className="h-2 bg-red-200 rounded">
                <div className="h-2 bg-red-500 rounded" style={{ width: `${item.value}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </MetricPanel>
      
      <MetricPanel 
        color="green" 
        title="Rule Status" 
        tag="Healthy"
        metric="28/30" 
        metricLabel="Active Rules"
      >
        <div className="bg-green-100 rounded-lg p-3 text-sm border border-green-200 mt-4">
          <div className="flex items-center mb-1">
            <CheckCircle size={16} className="text-green-500 mr-1" />
            <span>AWS Managed Rules Active</span>
          </div>
          <div className="flex items-center">
            <AlertCircle size={16} className="text-yellow-500 mr-1" />
            <span>2 Custom Rules Need Review</span>
          </div>
        </div>
      </MetricPanel>
    </div>
    
    <div className="bg-white rounded-lg border border-blue-200 overflow-hidden shadow-sm">
      <div className="bg-blue-50 px-4 py-3 border-b border-blue-200">
        <h3 className="font-medium flex items-center">
          <Shield size={16} className="mr-2 text-blue-500" />
          Recent Blocked Request Log
        </h3>
      </div>
      <div className="divide-y divide-gray-100">
        {SECURITY_EVENTS.map((log, i) => (
          <div key={i} className="px-4 py-3">
            <div className="flex justify-between mb-1">
              <span className="font-medium">{log.title}</span>
              <span className="text-xs text-gray-500">{log.time}</span>
            </div>
            <div className="text-sm text-gray-600">{log.source}</div>
            <div className="mt-1 text-xs text-gray-500 font-mono bg-gray-50 p-1 rounded border border-gray-200">
              {log.code}
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border border-blue-200 rounded-lg p-4 bg-white">
        <h3 className="font-medium mb-3">WAF Rule Management</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center">
            <CheckCircle size={14} className="mr-2 text-green-500" />
            AWS Core ruleset enabled
          </li>
          <li className="flex items-center">
            <CheckCircle size={14} className="mr-2 text-green-500" />
            IP reputation lists active
          </li>
          <li className="flex items-center">
            <CheckCircle size={14} className="mr-2 text-green-500" />
            Rate-based rules configured
          </li>
          <li className="flex items-center">
            <AlertCircle size={14} className="mr-2 text-yellow-500" />
            Bot control needs configuration
          </li>
        </ul>
      </div>
      
      <div className="border border-blue-200 rounded-lg p-4 bg-white">
        <h3 className="font-medium mb-3">Geographic Distribution</h3>
        <div className="space-y-2">
          {[
            { country: "United States", requests: 2840, blocked: 38 },
            { country: "China", requests: 1257, blocked: 89 },
            { country: "Russia", requests: 632, blocked: 156 }
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center py-2 text-sm">
              <span>{item.country}</span>
              <div className="flex items-center space-x-4">
                <span className="text-gray-500">{item.requests} requests</span>
                <div className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-medium">
                  {item.blocked} blocked
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </SecurityContent>
);

// Background decorative elements
const BackgroundElements = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[
      { 
        className: "w-16 h-16 bg-blue-500 opacity-20",
        style: {
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          filter: 'blur(5px)',
          top: '15%',
          left: '10%',
        }
      },
      { 
        className: "w-64 h-64 rounded-full bg-blue-700 opacity-20",
        style: {
          filter: 'blur(80px)',
          top: '20%',
          right: '10%',
        }
      },
      { 
        className: "w-12 h-12 bg-blue-700 opacity-20",
        style: {
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          filter: 'blur(4px)',
          top: '40%',
          right: '15%',
        }
      },
      { 
        className: "w-8 h-8 bg-blue-600 opacity-20",
        style: {
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          filter: 'blur(3px)',
          top: '25%',
          left: '30%',
        }
      }
    ].map((el, i) => (
      <div key={i} className={`absolute ${el.className}`} style={el.style} />
    ))}
  </div>
);

// Main Component
export default function AWSSecurityDashboard() {
  const [activePage, setActivePage] = useState(0);
  
  // Define page data in a more accessible way
  const pages = [
    {
      id: 0,
      title: "IAM Security",
      url: "aws-security.com/iam",
      icon: <Shield size={16} />,
      component: IAMSecurityContent
    },
    {
      id: 1,
      title: "Encryption",
      url: "aws-security.com/encryption",
      icon: <Lock size={16} />,
      component: EncryptionContent
    },
    {
      id: 2,
      title: "WAF Protection",
      url: "aws-security.com/waf",
      icon: <Shield size={16} className="text-red-500" />,
      component: WAFProtectionContent
    }
  ];

  return (
    <div className="relative w-full min-h-screen text-gray-800 bg-gray-50 font-sans overflow-hidden">
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(180deg); }
          50% { transform: translateY(-15px) rotate(182deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) rotate(60deg); }
          50% { transform: translateY(-15px) rotate(62deg); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }
      `}</style>
      
      <BackgroundElements />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto p-4 md:p-8">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 rounded-full border border-blue-400 text-sm font-medium">
            AWS Security
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              AWS Security Best Practices
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
              Interactive overview of essential AWS security services and implementations
            </p>
          </div>
          
          {/* Browser Window */}
          <div className="bg-gray-800 bg-opacity-10 backdrop-blur-lg rounded-lg border border-blue-900 border-opacity-20 overflow-hidden shadow-xl">
            {/* Browser Chrome */}
            <div className="bg-gray-800 bg-opacity-10 border-b border-blue-900 border-opacity-20 px-4 py-3 flex items-center">
              {/* Window Controls */}
              <div className="flex space-x-2 mr-4">
                {["red", "yellow", "green"].map((color, i) => (
                  <div key={i} className={`w-3 h-3 bg-${color}-500 rounded-full opacity-70`}></div>
                ))}
              </div>
              
              {/* Navigation Controls */}
              <div className="flex space-x-3 mr-4">
                {["←", "→", "↻"].map((arrow, i) => (
                  <button key={i} className="text-gray-400 hover:text-blue-400">{arrow}</button>
                ))}
              </div>
              
              {/* Address Bar */}
              <div className="flex-grow">
                <div className="bg-white bg-opacity-10 rounded-md py-1 px-3 text-sm text-gray-400 flex items-center">
                  <Lock size={14} className="mr-2" />
                  <span>{pages[activePage].url}</span>
                </div>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="flex border-b border-blue-900 border-opacity-20 bg-white bg-opacity-10">
              {pages.map((page, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 text-sm font-medium transition-colors duration-200 relative flex items-center ${
                    activePage === index 
                      ? 'text-blue-500 border-b-2 border-blue-500' 
                      : 'text-gray-600 hover:text-blue-400'
                  }`}
                  onClick={() => setActivePage(index)}
                >
                  <span className="mr-2">{page.icon}</span>
                  {page.title}
                </button>
              ))}
            </div>
            
            {/* Content Area - Using dynamic component rendering */}
            <div className="h-128 bg-white">
              {React.createElement(pages[activePage].component)}
            </div>
          </div>
          
          {/* Feature descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "IAM Security",
                icon: <User size={20} />,
                description: "IAM enables fine-grained access control to AWS resources. Follow least privilege principles, implement MFA, and regularly audit access for maximum security."
              },
              {
                title: "Encryption",
                icon: <Lock size={20} />,
                description: "AWS offers comprehensive encryption capabilities for data at rest and in transit. Implement KMS for key management and ensure all sensitive data is encrypted."
              },
              {
                title: "WAF Protection",
                icon: <Shield size={20} />,
                description: "Web Application Firewall defends against common web exploits. Configure rules to block SQL injection, XSS, and implement rate limiting to prevent DDoS attacks."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-6 border border-blue-200 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}