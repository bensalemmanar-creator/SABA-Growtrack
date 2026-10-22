import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Badge } from './ui/badge';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Upload,
  Sprout,
  Droplets,
  Bug,
  Cloud,
  Camera
} from 'lucide-react';
import { motion } from 'motion/react';

interface AgronomistFieldFormProps {
  onBack: () => void;
}

export function AgronomistFieldForm({ onBack }: AgronomistFieldFormProps) {
  const [cropStage, setCropStage] = useState('');
  const [soilMoisture, setSoilMoisture] = useState([65]);
  const [fertilizerApplied, setFertilizerApplied] = useState('no');
  const [fertilizerType, setFertilizerType] = useState('');
  const [pestObserved, setPestObserved] = useState('no');
  const [pestNotes, setPestNotes] = useState('');
  const [weatherCondition, setWeatherCondition] = useState('');
  const [generalNotes, setGeneralNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onBack();
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center min-h-[600px]">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle2 className="w-10 h-10 text-[#4FAF6C]" />
          </div>
          <h2 className="text-slate-900 mb-2">Update Submitted Successfully!</h2>
          <p className="text-slate-600 mb-4">
            Field data has been synced to the bank dashboard
          </p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 3 }}
            className="h-2 bg-[#4FAF6C] rounded-full max-w-xs mx-auto"
          />
          <p className="text-sm text-slate-500 mt-4">Redirecting...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={onBack} className="p-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h2 className="text-slate-900 mb-1">Field Visit Data Collection</h2>
          <p className="text-slate-600">Ahmed Ben Salem - Tomato Farm, Kairouan</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Crop Stage */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Sprout className="w-5 h-5 text-[#4FAF6C]" />
                </div>
                <h3 className="text-slate-900">Crop Growth Stage</h3>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cropStage">Current Stage *</Label>
                <Select value={cropStage} onValueChange={setCropStage} required>
                  <SelectTrigger id="cropStage">
                    <SelectValue placeholder="Select growth stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="seeding">🌱 Seeding</SelectItem>
                    <SelectItem value="growth">🌿 Vegetative Growth</SelectItem>
                    <SelectItem value="flowering">🌸 Flowering</SelectItem>
                    <SelectItem value="harvest-prep">🍅 Harvest Preparation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </Card>

            {/* Soil Moisture */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Droplets className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-slate-900">Soil Conditions</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label>Soil Moisture Level</Label>
                    <Badge variant="outline">{soilMoisture[0]}%</Badge>
                  </div>
                  <Slider
                    value={soilMoisture}
                    onValueChange={setSoilMoisture}
                    max={100}
                    step={1}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>Dry (0%)</span>
                    <span>Optimal (60-80%)</span>
                    <span>Saturated (100%)</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Fertilizer */}
            <Card className="p-6">
              <h3 className="text-slate-900 mb-4">Fertilizer Application</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Was fertilizer applied?</Label>
                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant={fertilizerApplied === 'yes' ? 'default' : 'outline'}
                      onClick={() => setFertilizerApplied('yes')}
                      className={fertilizerApplied === 'yes' ? 'bg-[#4FAF6C] hover:bg-[#3d9257]' : ''}
                    >
                      Yes
                    </Button>
                    <Button
                      type="button"
                      variant={fertilizerApplied === 'no' ? 'default' : 'outline'}
                      onClick={() => setFertilizerApplied('no')}
                      className={fertilizerApplied === 'no' ? 'bg-[#4FAF6C] hover:bg-[#3d9257]' : ''}
                    >
                      No
                    </Button>
                  </div>
                </div>
                {fertilizerApplied === 'yes' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-2"
                  >
                    <Label htmlFor="fertilizerType">Fertilizer Type</Label>
                    <Select value={fertilizerType} onValueChange={setFertilizerType}>
                      <SelectTrigger id="fertilizerType">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="organic">Organic Compost</SelectItem>
                        <SelectItem value="npk">NPK (15-15-15)</SelectItem>
                        <SelectItem value="nitrogen">Nitrogen-Rich</SelectItem>
                        <SelectItem value="phosphate">Phosphate</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>
                )}
              </div>
            </Card>

            {/* Pest & Disease */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Bug className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-slate-900">Pest & Disease Observation</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Any pest or disease observed?</Label>
                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant={pestObserved === 'yes' ? 'default' : 'outline'}
                      onClick={() => setPestObserved('yes')}
                      className={pestObserved === 'yes' ? 'bg-[#4FAF6C] hover:bg-[#3d9257]' : ''}
                    >
                      Yes
                    </Button>
                    <Button
                      type="button"
                      variant={pestObserved === 'no' ? 'default' : 'outline'}
                      onClick={() => setPestObserved('no')}
                      className={pestObserved === 'no' ? 'bg-[#4FAF6C] hover:bg-[#3d9257]' : ''}
                    >
                      No
                    </Button>
                  </div>
                </div>
                {pestObserved === 'yes' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-2"
                  >
                    <Label htmlFor="pestNotes">Details & Observations</Label>
                    <Textarea
                      id="pestNotes"
                      placeholder="Describe the pest/disease and affected areas..."
                      value={pestNotes}
                      onChange={(e) => setPestNotes(e.target.value)}
                      rows={3}
                    />
                  </motion.div>
                )}
              </div>
            </Card>

            {/* Weather */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-100 rounded-lg">
                  <Cloud className="w-5 h-5 text-slate-600" />
                </div>
                <h3 className="text-slate-900">Weather Condition</h3>
              </div>
              <div className="space-y-2">
                <Label htmlFor="weather">Current Weather</Label>
                <Select value={weatherCondition} onValueChange={setWeatherCondition}>
                  <SelectTrigger id="weather">
                    <SelectValue placeholder="Select weather condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sunny">☀️ Sunny & Clear</SelectItem>
                    <SelectItem value="partly-cloudy">⛅ Partly Cloudy</SelectItem>
                    <SelectItem value="cloudy">☁️ Cloudy</SelectItem>
                    <SelectItem value="rainy">🌧️ Rainy</SelectItem>
                    <SelectItem value="windy">💨 Windy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </Card>

            {/* General Notes */}
            <Card className="p-6">
              <h3 className="text-slate-900 mb-4">General Notes & Recommendations</h3>
              <Textarea
                placeholder="Add any additional observations, recommendations, or action items..."
                value={generalNotes}
                onChange={(e) => setGeneralNotes(e.target.value)}
                rows={5}
              />
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Photo Upload */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Camera className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-slate-900">Photo Upload</h3>
              </div>
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-[#4FAF6C] transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                <p className="text-sm text-slate-600 mb-1">Click to upload photos</p>
                <p className="text-xs text-slate-500">Up to 5 photos (optional)</p>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Crop overview
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Soil condition
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Any issues
                </div>
              </div>
            </Card>

            {/* Quick Info */}
            <Card className="p-6">
              <h3 className="text-slate-900 mb-4">Farm Information</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-slate-600">Farmer</p>
                  <p className="text-slate-900">Ahmed Ben Salem</p>
                </div>
                <div>
                  <p className="text-slate-600">Crop</p>
                  <p className="text-slate-900">🍅 Tomato (Rio Grande)</p>
                </div>
                <div>
                  <p className="text-slate-600">Land Size</p>
                  <p className="text-slate-900">2.5 hectares</p>
                </div>
                <div>
                  <p className="text-slate-600">Region</p>
                  <p className="text-slate-900">Kairouan</p>
                </div>
                <div>
                  <p className="text-slate-600">Last Visit</p>
                  <p className="text-slate-900">Oct 30, 2025</p>
                </div>
              </div>
            </Card>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#4FAF6C] hover:bg-[#3d9257]"
              size="lg"
            >
              <CheckCircle2 className="w-5 h-5 mr-2" />
              Submit Field Update
            </Button>

            <p className="text-xs text-slate-500 text-center">
              Data will be synced to bank dashboard automatically
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
