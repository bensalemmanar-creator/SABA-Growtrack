import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Building2, Lock, Mail, Shield } from 'lucide-react';
import { motion } from 'motion/react';

interface BankLoginProps {
  onLogin: () => void;
}

export function BankLogin({ onLogin }: BankLoginProps) {
  const [step, setStep] = useState<'credentials' | '2fa'>('credentials');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');

  const handleCredentialsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('2fa');
  };

  const handle2FASubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2D8C5A] rounded-xl mb-4">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-slate-900 mb-2">SABA GrowTrack</h1>
          <p className="text-slate-600">Financial Portal</p>
        </div>

        <Card className="p-8">
          {step === 'credentials' ? (
            <form onSubmit={handleCredentialsSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="officer@bank.com"
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

                <div className="space-y-3">
                  <Label>Account Type</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <Button type="button" variant="outline" className="justify-start">
                      <Building2 className="w-4 h-4 mr-2" />
                      Bank Officer
                    </Button>
                    <Button type="button" variant="outline" className="justify-start">
                      <Shield className="w-4 h-4 mr-2" />
                      AgriCash Partner
                    </Button>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full bg-[#2D8C5A] hover:bg-[#256f48]">
                Continue to 2FA
              </Button>

              <p className="text-center text-sm text-slate-500">
                Forgot password? <a href="#" className="text-[#2D8C5A] hover:underline">Reset here</a>
              </p>
            </form>
          ) : (
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onSubmit={handle2FASubmit}
              className="space-y-6"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                  <Shield className="w-6 h-6 text-[#2D8C5A]" />
                </div>
                <h3 className="text-slate-900 mb-2">Two-Factor Authentication</h3>
                <p className="text-sm text-slate-600">
                  Enter the 6-digit code sent to {email}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="code">Verification Code</Label>
                <Input
                  id="code"
                  type="text"
                  placeholder="000000"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  maxLength={6}
                  className="text-center tracking-widest"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-[#2D8C5A] hover:bg-[#256f48]">
                Verify & Login
              </Button>

              <Button
                type="button"
                variant="ghost"
                className="w-full"
                onClick={() => setStep('credentials')}
              >
                Back to Login
              </Button>
            </motion.form>
          )}
        </Card>

        <p className="text-center text-sm text-slate-500 mt-6">
          Secure platform powered by SABA
        </p>
      </motion.div>
    </div>
  );
}
