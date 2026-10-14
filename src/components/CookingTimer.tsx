import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Timer, Volume2 } from 'lucide-react';

interface CookingTimerProps {
  initialMinutes?: number;
  label?: string;
  onClose?: () => void;
}

export const CookingTimer: React.FC<CookingTimerProps> = ({
  initialMinutes = 15,
  label = 'Kitchen Timer',
}) => {
  const [totalSeconds, setTotalSeconds] = useState(initialMinutes * 60);
  const [remaining, setRemaining] = useState(initialMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setTotalSeconds(initialMinutes * 60);
    setRemaining(initialMinutes * 60);
    setIsRunning(false);
    setIsFinished(false);
  }, [initialMinutes]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && remaining > 0) {
      interval = setInterval(() => {
        setRemaining(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, remaining]);

  const toggleRun = () => {
    if (remaining === 0) {
      setRemaining(totalSeconds);
      setIsFinished(false);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsFinished(false);
    setRemaining(totalSeconds);
  };

  const addMinutes = (mins: number) => {
    setRemaining(prev => prev + mins * 60);
    setTotalSeconds(prev => prev + mins * 60);
  };

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  const progressPercent = totalSeconds > 0 ? ((totalSeconds - remaining) / totalSeconds) * 100 : 0;

  return (
    <div className={`p-5 rounded-xl border transition-all ${
      isFinished
        ? 'bg-amber-50 border-amber-300 ring-2 ring-amber-400'
        : 'bg-stone-900 text-stone-100 border-stone-800 shadow-md'
    }`}>
      <div className="flex items-center justify-between pb-3 border-b border-stone-800">
        <div className="flex items-center gap-2">
          <Timer className={`w-4 h-4 ${isFinished ? 'text-amber-600' : 'text-stone-400'}`} />
          <span className={`text-xs uppercase tracking-wider font-medium ${isFinished ? 'text-stone-900' : 'text-stone-300'}`}>
            {label}
          </span>
        </div>
        {isFinished && (
          <span className="flex items-center gap-1 text-xs font-semibold text-amber-700 animate-pulse">
            <Volume2 className="w-3.5 h-3.5" /> Time Complete!
          </span>
        )}
      </div>

      {/* Progress bar */}
      <div className="w-full bg-stone-800/80 h-1.5 rounded-full overflow-hidden my-3">
        <div
          className={`h-full transition-all duration-500 ${
            isFinished ? 'bg-amber-500' : 'bg-stone-300'
          }`}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Digits */}
      <div className="flex items-baseline justify-center gap-1 my-2">
        <span className={`font-mono text-4xl font-bold tracking-tight tabular-nums ${
          isFinished ? 'text-amber-800' : 'text-white'
        }`}>
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-2 pt-2">
        <button
          onClick={toggleRun}
          className={`px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors ${
            isRunning
              ? 'bg-amber-600 text-white hover:bg-amber-700'
              : isFinished
              ? 'bg-stone-900 text-white hover:bg-stone-800'
              : 'bg-white text-stone-900 hover:bg-stone-100'
          }`}
        >
          {isRunning ? (
            <>
              <Pause className="w-3.5 h-3.5" /> Pause
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5" /> {remaining === 0 ? 'Restart' : 'Start'}
            </>
          )}
        </button>

        <button
          onClick={resetTimer}
          className="p-2 text-stone-400 hover:text-stone-100 rounded-lg hover:bg-stone-800 transition-colors"
          title="Reset timer"
          aria-label="Reset timer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-1 ml-2 text-xs">
          <button
            onClick={() => addMinutes(1)}
            className="px-2 py-1 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded text-[11px] font-mono transition-colors"
          >
            +1m
          </button>
          <button
            onClick={() => addMinutes(5)}
            className="px-2 py-1 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded text-[11px] font-mono transition-colors"
          >
            +5m
          </button>
        </div>
      </div>
    </div>
  );
};
