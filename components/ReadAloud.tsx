'use client';

import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ReadAloud({ text }: { text: string }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 1;
    u.pitch = 1;
    u.volume = 1;

    u.addEventListener('end', () => {
      setIsSpeaking(false);
    });

    u.addEventListener('pause', () => {
      setIsSpeaking(false);
    });

    utteranceRef.current = u;

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handleReadAloud = () => {
    const synth = window.speechSynthesis;
    
    if (isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
    } else {
      if (utteranceRef.current) {
        synth.speak(utteranceRef.current);
        setIsSpeaking(true);
      }
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button 
        variant={isSpeaking ? "default" : "outline"}
        size="sm"
        onClick={handleReadAloud}
        className="flex items-center gap-2"
        aria-label={isSpeaking ? 'Stop reading aloud' : 'Start reading aloud'}
      >
        {isSpeaking ? (
          <VolumeX className="h-4 w-4" />
        ) : (
          <Volume2 className="h-4 w-4" />
        )}
        <span className="hidden sm:inline">
          {isSpeaking ? 'Stop' : 'Listen'}
        </span>
      </Button>
      <span className="text-sm text-gray-500 hidden md:inline">
        {isSpeaking ? 'Reading aloud...' : 'Listen to this article'}
      </span>
    </div>
  );
} 