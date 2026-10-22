import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Sprout, Lock, Mail } from 'lucide-react';
import { motion } from 'motion/react';

interface AgronomistLoginProps {
  onLogin: () => void;
}

export function AgronomistLogin({ onLogin }: AgronomistLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#4FAF6C] rounded-xl mb-4">
            <Sprout className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-slate-900 mb-2">SABA GrowTrack</h1>
          <p className="text-slate-600">Agronomist Portal</p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="agronomist@saba.tn"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input type="checkbox" className="rounded" />
                  Remember me
                </label>
                <a href="#" className="text-[#4FAF6C] hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>

            <Button type="submit" className="w-full bg-[#4FAF6C] hover:bg-[#3d9257]">
              Login to Portal
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-2 text-slate-500">Quick Access</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button type="button" variant="outline" className="justify-start text-sm">
                📱 Mobile App
              </Button>
              <Button type="button" variant="outline" className="justify-start text-sm">
                💬 SMS Updates
              </Button>
            </div>
          </form>
        </Card>

        <p className="text-center text-sm text-slate-500 mt-6">
          Field-friendly platform powered by SABA
        </p>
      </motion.div>
    </div>
  );
}
