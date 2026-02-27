"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { PlusCircle, FileText, Users, BarChart3, LogOut, ChevronRight } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color }: { title: string, value: string | number, icon: any, color: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
    <div className={`p-4 rounded-lg bg-${color}-50 text-${color}-600`}>
      <Icon size={24} />
    </div>
    <div>
      <p className="text-base font-medium text-gray-500">{title}</p>
      <p className="text-2xl font-black text-gray-900">{value}</p>
    </div>
  </div>
);

const ActionButton = ({ title, onClick, icon: Icon, primary = false }: { title: string, onClick: () => void, icon: any, primary?: boolean }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-between w-full px-6 py-4 rounded-xl border font-bold transition-all ${
      primary 
        ? 'bg-rac-orange border-rac-orange text-white hover:bg-orange-600 shadow-md transform hover:-translate-y-0.5' 
        : 'bg-white border-gray-200 text-gray-700 hover:border-rac-orange hover:text-rac-orange'
    }`}
  >
    <div className="flex items-center gap-3">
      <Icon size={20} />
      <span>{title}</span>
    </div>
    <ChevronRight size={18} />
  </button>
);

export default function AdminDashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-[1320px] mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-rac-orange tracking-tighter">RAC</span>
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-2 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Admin Portal
            </span>
          </div>
          <button 
            onClick={() => router.push('/admin/login')}
            className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-red-500 transition-colors"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </header>

      <main className="max-w-[1320px] mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-gray-900">Welcome Back, Admin</h1>
          <p className="text-gray-500 mt-1">Manage your policies and accounts from one central location.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard title="Total Accounts" value="1,284" icon={Users} color="blue" />
          <StatCard title="Active Policies" value="4,592" icon={FileText} color="orange" />
          <StatCard title="Pending Applications" value="23" icon={BarChart3} color="purple" />
          <StatCard title="Recent Claims" value="12" icon={FileText} color="green" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Quick Actions */}
          <section>
            <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2 uppercase">
              Quick Actions
            </h2>
            <div className="space-y-4">
              <ActionButton 
                title="Create New Account" 
                icon={PlusCircle} 
                primary 
                onClick={() => {}} 
              />
              <ActionButton 
                title="Create New Policy" 
                icon={FileText} 
                onClick={() => router.push('/admin/create-policy')} 
              />
              <ActionButton 
                title="Retrieve User Info" 
                icon={Users} 
                onClick={() => router.push('/retrieve-info')} 
              />
            </div>
          </section>

          {/* Recent Activity Placeholder */}
          <section>
            <h2 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2 uppercase">
              Recent Activity
            </h2>
            <div className="bg-white rounded-xl border border-gray-100 divide-y divide-gray-50 shadow-sm overflow-hidden">
              {[
                { type: 'Account', name: 'John Doe', time: '2 mins ago', action: 'Created account' },
                { type: 'Policy', name: 'VH12 TYX (Tesla Model 3)', time: '15 mins ago', action: 'New policy issued' },
                { type: 'System', name: 'System', time: '1 hour ago', action: 'Daily backup complete' }
              ].map((activity, i) => (
                <div key={activity.time} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div>
                    <p className="text-base font-bold text-gray-800">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.name} • {activity.time}</p>
                  </div>
                  <span className={`text-xs font-black uppercase px-2 py-1 rounded bg-gray-100 ${activity.type === 'Policy' ? 'text-rac-orange' : 'text-gray-500'}`}>
                    {activity.type}
                  </span>
                </div>
              ))}
              <button className="w-full py-3 text-sm font-bold text-gray-500 hover:text-rac-orange hover:bg-gray-50 transition-all">
                View all activity
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
